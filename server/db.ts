import fs from 'fs';
import path from 'path';

export interface StoredInquiry {
  id: string;
  form_type: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  business_type: string;
  tender_type: string;
  portal: string;
  reference_number: string;
  service: string;
  category?: string;
  closing_date?: string;
  message: string;
  file_name?: string;
  file_size?: string;
  file_path?: string;
  file_url?: string;
  file_mime?: string;
  has_file?: boolean;
  file_data?: string;
  created_at: string;
  status: 'New' | 'Contacted' | 'In Review' | 'Bid Prepared';
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const JSON_FILE = path.join(DATA_DIR, 'inquiries.json');
const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');

// Ensure data and uploads folders exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// In-memory cache + persistent file storage
let inquiriesCache: StoredInquiry[] = [];

function loadInquiries(): void {
  try {
    if (fs.existsSync(JSON_FILE)) {
      const content = fs.readFileSync(JSON_FILE, 'utf-8');
      inquiriesCache = JSON.parse(content);
    } else {
      inquiriesCache = [];
      fs.writeFileSync(JSON_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('[DB] Error loading inquiries JSON:', err);
    inquiriesCache = [];
  }
}

function saveInquiries(): void {
  try {
    fs.writeFileSync(JSON_FILE, JSON.stringify(inquiriesCache, null, 2), 'utf-8');
  } catch (err) {
    console.error('[DB] Error persisting inquiries JSON:', err);
  }
}

// Format bytes into readable string
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Guess MIME type from file extension
function getMimeType(fileName: string): string {
  const ext = fileName.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'pdf':
      return 'application/pdf';
    case 'doc':
      return 'application/msword';
    case 'docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    case 'xls':
      return 'application/vnd.ms-excel';
    case 'xlsx':
      return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    case 'zip':
      return 'application/zip';
    case 'rar':
      return 'application/x-rar-compressed';
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'txt':
      return 'text/plain';
    default:
      return 'application/octet-stream';
  }
}

// Initialize on startup
loadInquiries();

export const database = {
  insertInquiry(data: Omit<StoredInquiry, 'id' | 'created_at' | 'status'> & { file_data?: string }): StoredInquiry {
    const id = `BT4U-${Date.now()}-${Math.floor(Math.random() * 900 + 100)}`;
    let storedFileName = data.file_name || '';
    let savedFilePath = '';
    let mimeType = '';
    let formattedSize = data.file_size || '';
    let hasFile = false;
    let dataUriForClient = data.file_data || '';

    // If file data is provided, save it to disk
    if (data.file_data && data.file_data.trim().length > 0) {
      try {
        const rawInput = data.file_data.trim();
        let base64Content = rawInput;
        let detectedMime = '';

        if (rawInput.startsWith('data:')) {
          const match = rawInput.match(/^data:([^;]+);base64,(.+)$/);
          if (match) {
            detectedMime = match[1];
            base64Content = match[2];
          } else {
            const commaIndex = rawInput.indexOf(',');
            if (commaIndex !== -1) {
              base64Content = rawInput.slice(commaIndex + 1);
            }
          }
        }

        const buffer = Buffer.from(base64Content, 'base64');
        mimeType = detectedMime || getMimeType(storedFileName || 'tender_document.pdf');
        
        if (!formattedSize) {
          formattedSize = formatBytes(buffer.length);
        }

        if (!storedFileName) {
          const ext = mimeType.includes('pdf') ? 'pdf' : mimeType.includes('word') ? 'docx' : 'pdf';
          storedFileName = `Tender_Document_${id}.${ext}`;
        }

        const safeName = storedFileName.replace(/[^a-zA-Z0-9._-]/g, '_');
        const diskFileName = `${id}_${safeName}`;
        savedFilePath = path.join(UPLOADS_DIR, diskFileName);

        fs.writeFileSync(savedFilePath, buffer);
        hasFile = true;
        console.log(`[DB Upload] Saved tender file for inquiry ${id}: ${diskFileName} (${formattedSize})`);

        // If file_data was not already a full data URI, construct one for immediate UI preview
        if (!dataUriForClient.startsWith('data:')) {
          dataUriForClient = `data:${mimeType};base64,${base64Content}`;
        }
      } catch (fileErr) {
        console.error('[DB Upload Error] Failed to write file to disk:', fileErr);
      }
    } else if (storedFileName) {
      // Client provided a file name but no binary payload yet
      hasFile = true;
    }

    const newRecord: StoredInquiry = {
      ...data,
      id,
      file_name: storedFileName,
      file_size: formattedSize,
      file_path: savedFilePath,
      file_url: hasFile ? `/api/inquiries/${id}/document` : undefined,
      file_mime: mimeType || (storedFileName ? getMimeType(storedFileName) : undefined),
      has_file: hasFile,
      // Retain data URI if reasonable size for direct instant download/preview in the browser
      file_data: dataUriForClient && dataUriForClient.length < 5 * 1024 * 1024 ? dataUriForClient : undefined,
      created_at: new Date().toISOString(),
      status: 'New',
    };

    inquiriesCache.unshift(newRecord);
    saveInquiries();
    return newRecord;
  },

  getAllInquiries(): StoredInquiry[] {
    return inquiriesCache;
  },

  getInquiryById(id: string): StoredInquiry | undefined {
    return inquiriesCache.find((item) => item.id === id);
  },

  getDocumentFile(id: string): { filePath?: string; fileName: string; mimeType: string; buffer?: Buffer } | null {
    const inquiry = this.getInquiryById(id);
    if (!inquiry) return null;

    const fileName = inquiry.file_name || `tender_document_${id}.pdf`;
    const mimeType = inquiry.file_mime || getMimeType(fileName);

    // 1. Check if file is stored on disk
    if (inquiry.file_path && fs.existsSync(inquiry.file_path)) {
      return {
        filePath: inquiry.file_path,
        fileName,
        mimeType,
      };
    }

    // 2. Check UPLOADS_DIR by ID prefix
    try {
      const files = fs.readdirSync(UPLOADS_DIR);
      const match = files.find((f) => f.startsWith(`${id}_`));
      if (match) {
        const fullPath = path.join(UPLOADS_DIR, match);
        return {
          filePath: fullPath,
          fileName,
          mimeType,
        };
      }
    } catch (e) {
      console.warn('[DB] Could not search uploads directory:', e);
    }

    // 3. Fallback: Check if file_data data URI is in the record
    if (inquiry.file_data && inquiry.file_data.length > 0) {
      try {
        let base64Part = inquiry.file_data;
        if (base64Part.startsWith('data:')) {
          const parts = base64Part.split(',');
          if (parts[1]) base64Part = parts[1];
        }
        const buffer = Buffer.from(base64Part, 'base64');
        return {
          fileName,
          mimeType,
          buffer,
        };
      } catch (err) {
        console.error('[DB] Error decoding file_data buffer:', err);
      }
    }

    return null;
  },

  updateStatus(id: string, status: StoredInquiry['status']): StoredInquiry | null {
    const item = inquiriesCache.find((i) => i.id === id);
    if (item) {
      item.status = status;
      saveInquiries();
      return item;
    }
    return null;
  },

  getCount(): number {
    return inquiriesCache.length;
  },
};
