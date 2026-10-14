export type FormType = 'tender' | 'enquiry';

export interface TenderInquiryFormData {
  form_type: FormType;
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  businessType: string;
  tenderType: string;
  portal: string;
  referenceNumber: string;
  service: string;
  category?: string;
  closingDate?: string;
  message: string;
  file?: File | null;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyDeliverables: string[];
  portalApplicability: string;
  bestFor: string;
}

export interface PortalInfo {
  name: string;
  shortCode: string;
  region: string;
  description: string;
  keyFeatures: string[];
  dscRequirement: string;
}

export interface FAQItem {
  id: string;
  category: 'GeM Portal' | 'Non-GeM & State' | 'Documents & EMD' | 'Submission & DSC';
  question: string;
  answer: string;
}

export interface TenderCategoryItem {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  popularItems: string[];
  keyAuthorities: string[];
  commonPortals: string[];
}

export interface CityLocationItem {
  id: string;
  name: string;
  state: string;
  region: 'West' | 'North' | 'Central' | 'South' | 'East' | 'North East';
  isHeadquarters?: boolean;
  isMajorHub?: boolean;
  activeTendersEstimate: string;
  portal: string;
  keyAuthorities: string[];
  topSectors: string[];
  localSeoKeywords: string[];
  addressSnippet?: string;
  supportHours: string;
  faqs: { q: string; a: string }[];
}

export interface StateLocationItem {
  id: string;
  name: string;
  code: string;
  region: 'West' | 'North' | 'Central' | 'South' | 'East' | 'North East';
  portalName: string;
  portalUrl: string;
  keyCities: string[];
  majorDepartments: string[];
  tenderVolume: string;
  overview: string;
  emdExemptionNote: string;
  class3DscNote: string;
}

export interface BlogPostItem {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured?: boolean;
  metaDescription: string;
  keywords: string[];
  keyTakeaways: string[];
  tableOfContents: { id: string; label: string }[];
  sections: {
    id: string;
    heading: string;
    content: string[];
    callout?: { title: string; text: string; type: 'info' | 'warning' | 'statute' };
    table?: { headers: string[]; rows: string[][] };
  }[];
  regulatoryReferences: string[];
  recommendedServices: { title: string; action: string }[];
  faqs?: { question: string; answer: string }[];
}

