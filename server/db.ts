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
  created_at: string;
  status: 'New' | 'Contacted' | 'In Review' | 'Bid Prepared';
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const JSON_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure data folder exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
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

// Initialize on startup
loadInquiries();

export const database = {
  insertInquiry(data: Omit<StoredInquiry, 'id' | 'created_at' | 'status'>): StoredInquiry {
    const newRecord: StoredInquiry = {
      ...data,
      id: `BT4U-${Date.now()}-${Math.floor(Math.random() * 900 + 100)}`,
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
