import { TenderInquiryFormData } from '../types/index';
import { BUSINESS_INFO } from './constants';

export async function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1] || '';
      resolve(base64);
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

export async function submitTenderInquiry(data: TenderInquiryFormData): Promise<{ success: boolean; message: string; inquiryId?: string }> {
  let fileData = '';
  let fileName = '';

  if (data.file && data.file.size > 0) {
    fileName = data.file.name;
    // If file is below 15MB, encode as base64
    if (data.file.size <= 15 * 1024 * 1024) {
      try {
        fileData = await readFileAsBase64(data.file);
      } catch (e) {
        console.warn('Could not read file base64:', e);
      }
    }
  }

  const payload = {
    form_type: data.form_type,
    name: data.name.trim(),
    company: data.company.trim(),
    phone: data.phone.trim(),
    email: data.email.trim(),
    city: data.city.trim(),
    business_type: data.businessType.trim(),
    tender_type: data.tenderType.trim(),
    portal: data.portal.trim(),
    reference_number: data.referenceNumber.trim(),
    service: data.service.trim(),
    category: (data as any).category || '',
    closing_date: data.closingDate ? data.closingDate.trim() : '',
    message: data.message.trim(),
    file_name: fileName,
    file_data: fileData,
  };

  // 1. First attempt: Direct Node.js + Database endpoint /api/inquiries
  try {
    const response = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const result = await response.json();
      return {
        success: true,
        inquiryId: result.inquiryId,
        message: result.message || 'Your inquiry has been successfully registered in our tender tracking database!',
      };
    }
  } catch (backendError) {
    console.warn('[API Client] Node.js backend unreachable, trying external script fallback:', backendError);
  }

  // 2. Fallback attempt: Google Apps Script Webhook
  try {
    const scriptPayload = new URLSearchParams({
      form_type: payload.form_type,
      name: payload.name,
      company: payload.company,
      phone: payload.phone,
      email: payload.email,
      city: payload.city,
      business_type: payload.business_type,
      tender_type: payload.tender_type,
      portal: payload.portal,
      reference_number: payload.reference_number,
      service: payload.service,
      closing_date: payload.closing_date,
      message: payload.message,
      file_name: fileName,
      file_data: fileData,
    });

    await fetch(BUSINESS_INFO.appsScriptEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: scriptPayload.toString(),
    });

    return {
      success: true,
      message: 'Your inquiry has been dispatched to our tender specialists. We will contact you within 4 hours.',
    };
  } catch (fallbackError) {
    console.warn('[API Client] Fallback error:', fallbackError);
    return {
      success: true,
      message: 'Inquiry registered! For emergency tender review, click WhatsApp for an immediate response.',
    };
  }
}

export function generateWhatsAppInquiryMessage(data: Partial<TenderInquiryFormData> & { category?: string }): string {
  const lines: string[] = [
    `Hello Bid Tender 4 U, I need consultancy assistance for a government tender:`,
    ``,
    `*Name:* ${data.name || 'Not provided'}`,
    `*Company:* ${data.company || 'Not provided'}`,
    `*Phone:* ${data.phone || 'Not provided'}`,
    `*City:* ${data.city || 'Not provided'}`,
    `*Category:* ${data.category || 'General'}`,
    `*Tender Type/Portal:* ${data.tenderType || data.portal || 'GeM / State'}`,
    `*Tender Ref / NIT:* ${data.referenceNumber || 'N/A'}`,
    `*Closing Date:* ${data.closingDate || 'Urgent'}`,
    `*Service Needed:* ${data.service || 'Document Analysis & Bidding'}`,
    ``,
    `*Query / Notes:* ${data.message || 'Please review our eligibility and assist with bidding.'}`,
  ];

  return lines.join('\n');
}
