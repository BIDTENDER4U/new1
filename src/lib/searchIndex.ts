import { BLOG_ARTICLES } from './blogArticlesData';
import { TENDER_KEYWORDS_DATA } from './tenderKeywordsData';

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  type: 'service' | 'blog' | 'faq' | 'hub';
  path: string;
  pageId: string;
  articleSlug?: string;
  keywords: string[];
}

export const CORE_SEARCH_ITEMS: SearchItem[] = [
  // 1. Core Services & Practice Areas
  {
    id: 'tender-bidding-consultancy',
    title: 'Tender Bidding Consultancy',
    description: 'NIT document audit, Packet A/B packaging, BOQ financial modeling & live portal submission on GeM, CPPP, nProcure.',
    type: 'service',
    path: '/tender-bidding-consultancy',
    pageId: 'tender-bidding-consultancy',
    keywords: ['bidding', 'tender', 'boq', 'nit', 'packet a', 'packet b', 'reverse auction', 'cppp', 'nprocure', 'consultancy', 'submission'],
  },
  {
    id: 'bidding-journey',
    title: '7-Stage Bidding Journey (Progress Stepper)',
    description: 'Visual step-by-step roadmap from 32-point NIT document audit to live e-Reverse Auction L1 victory & contract award.',
    type: 'service',
    path: '/tender-bidding-consultancy',
    pageId: 'tender-bidding-consultancy',
    keywords: ['journey', 'stepper', 'bidding journey', 'stages', 'process', 'document audit', 'reverse auction', 'ra', 'emd waiver', 'boq modeling', 'dsc upload', 'steps', 'workflow', 'prep'],
  },
  {
    id: 'gem-registration',
    title: 'GeM Registration & Vendor Checklist',
    description: 'Statutory onboarding checklist for Primary Sellers, OEMs, and Resellers on GeM 4.0. PAN, GST, Aadhaar e-KYC & PFMS.',
    type: 'service',
    path: '/gem-registration',
    pageId: 'gem-registration',
    keywords: ['gem', 'registration', 'seller', 'primary seller', 'reseller', 'pan', 'gst', 'pfms', 'aadhaar', 'caution deposit', 'onboarding'],
  },
  {
    id: 'gem-product-listing',
    title: 'GeM Product Listing & Catalog Pairing',
    description: 'Quadrant 1-4 catalog management, HSN/SAC code mapping, primary and secondary pairing, and L1 direct purchase optimization.',
    type: 'service',
    path: '/gem-product-listing',
    pageId: 'gem-product-listing',
    keywords: ['product', 'listing', 'catalog', 'quadrant', 'hsn', 'sac', 'l1', 'pairing', 'direct purchase', 'price', 'gem 4.0'],
  },
  {
    id: 'oem-services',
    title: 'OEM Services & GeM Brand Approval',
    description: 'Official GeM brand approval, OEM authorization codes for custom bids, Reseller Authorization Letters (MAF) & QCI vendor assessment.',
    type: 'service',
    path: '/oem-services',
    pageId: 'oem-services',
    keywords: ['oem', 'brand', 'authorization code', 'maf', 'manufacturer', 'qci', 'vendor assessment', 'trademark', 'approval'],
  },
  {
    id: 'tender-letters',
    title: 'Statutory Tender Letters & Proforma Formats',
    description: 'Official OEM Authorization Letters (MAF), GFR 173(i) Representation Letters & Tender Acceptance Undertakings.',
    type: 'service',
    path: '/oem-services',
    pageId: 'oem-services',
    keywords: ['letter', 'letters', 'oem letter', 'authorization letter', 'maf', 'representation letter', 'tender acceptance letter', 'gfr 173', 'proforma', 'draft'],
  },
  {
    id: 'tender-radar',
    title: 'Live Tender & GeM Radar (Google Search Grounding)',
    description: 'Real-time tender intelligence grounded in live Google Search data, Ministry of Finance OMs, and GeM 4.0 guidelines.',
    type: 'service',
    path: '/tender-bidding-consultancy',
    pageId: 'tender-bidding-consultancy',
    keywords: ['radar', 'google', 'search', 'grounding', 'live tender', 'real time', 'latest om', 'notifications', 'gem rules', 'live rules', 'gazette', 'mof'],
  },
  {
    id: 'maps-locator',
    title: 'Google Maps Procurement & Office Locator',
    description: 'Find Bid Tender 4 U Ahmedabad Headquarters, municipal tender submission desks, and GeM facilitation centers with Google Maps Grounding.',
    type: 'service',
    path: '/about-us',
    pageId: 'about-us',
    keywords: ['map', 'maps', 'google map', 'google maps', 'location', 'directions', 'office', 'ahmedabad office', 'address', 'tender offices', 'submission desk', 'amc'],
  },
  {
    id: 'free-tender-summary',
    title: 'Free Tender Summary Generator (Master Summary Table)',
    description: 'Instant extraction of 21 master tender parameters, eligibility criteria, mandatory documents, and forms & annexures in structured tables.',
    type: 'service',
    path: '/free-tender-summary',
    pageId: 'free-tender-summary',
    keywords: ['summary', 'tender', 'bidding', 'msme', 'startup', 'free tender summary', 'master tender summary table', 'tender summary', 'extraction', 'eligibility table', 'required documents', 'forms and annexures', 'pdf export'],
  },
  {
    id: 'payment-details',
    title: 'Official Payment Details & UPI Gateway (singhbaldev70368-2@okicici)',
    description: 'Instant UPI transfer, QR Code, ICICI Bank details, and retainer payment receipt generation for Bid Tender 4 U.',
    type: 'service',
    path: '/payment-details',
    pageId: 'payment',
    keywords: [
      'payment', 'payment details', 'upi', 'upi id', 'singhbaldev70368-2@okicici', 'singh baldev', 'icici', 'qr code',
      'scan to pay', 'retainer fee', 'fees', 'bhim', 'phonepe', 'gpay', 'google pay', 'paytm', 'bank transfer'
    ],
  },
  {
    id: 'certifications',
    title: 'Startup India, MSME Benefits, ISO & Class-3 DSC',
    description: 'DPIIT startup prior turnover waiver, MSME Udyam GFR 170 EMD exemption, All Types of ISO certifications & 30-min Class-3 combo DSC tokens.',
    type: 'service',
    path: '/certifications',
    pageId: 'certifications',
    keywords: ['startup', 'msme', 'iso', 'dsc', 'registraion', 'registration', 'tender', 'dpiit', 'fssai', 'udyam', 'emd waiver', 'turnover exemption', 'digital signature', 'token', 'crypto', 'waiver', '9001', '14001', '45001', '27001', '13485', 'class 3'],
  },
  {
    id: 'gem-tender-consultancy',
    title: 'GeM Consultant & Tender Bidding Consultancy',
    description: 'Authoritative procurement consultancy and tender consultant for GeM 4.0 portal onboarding, catalog listing, and zero-disqualification bidding.',
    type: 'service',
    path: '/gem-tender-consultancy',
    pageId: 'gem-tender-consultancy',
    keywords: ['gem', 'tender', 'bidding', 'consultacy', 'consultancy', 'consultant', 'gem consultant', 'tender consultant', 'procurement consultant', 'bidding consultancy', 'reverse auction'],
  },
  {
    id: 'categories',
    title: '12 Tender Industry Categories',
    description: 'Civil infrastructure, hospital equipment, solar EPC, IT hardware, security manpower outsourcing, vehicle hiring, and catering.',
    type: 'service',
    path: '/categories',
    pageId: 'categories',
    keywords: ['category', 'hospital', 'medical', 'civil', 'solar', 'epc', 'security', 'manpower', 'furniture', 'pumps', 'catering'],
  },
  {
    id: 'portals',
    title: 'E-Procurement Portals Matrix',
    description: 'Pan-India portal coverage: GeM, CPPP, nProcure Gujarat, SPPP Rajasthan, MahaTenders, IREPS Railways & Defense portals.',
    type: 'hub',
    path: '/portals',
    pageId: 'portals',
    keywords: ['portals', 'cppp', 'nprocure', 'sppp', 'ireps', 'railway', 'defense', 'eprocure', 'mahatenders'],
  },
  {
    id: 'locations',
    title: 'All India & 50+ Cities Tender Hub',
    description: 'Local municipal corporation tenders, PWD works, state boards and central PSUs across 28 states and 50+ industrial cities.',
    type: 'hub',
    path: '/locations',
    pageId: 'locations',
    keywords: ['cities', 'states', 'ahmedabad', 'surat', 'jaipur', 'mumbai', 'delhi', 'gujarat', 'rajasthan', 'locations', 'pan-india'],
  },
  {
    id: 'about-us',
    title: 'About Us - Company Background & Credentials',
    description: 'Headquartered in Isanpur, Ahmedabad, Gujarat. Over 1,500+ government tenders analyzed and ₹500 Cr+ in cumulative bid volume.',
    type: 'hub',
    path: '/about-us',
    pageId: 'about-us',
    keywords: ['about', 'company', 'headquarters', 'ahmedabad', 'credentials', 'team', 'isanpur', 'track record'],
  },
  {
    id: 'contact-us',
    title: 'Contact Us & Document Intake Desk',
    description: 'Submit your NIT/RFP document for express 4-hour preliminary eligibility audit or call our senior officers in Ahmedabad.',
    type: 'hub',
    path: '/contact-us',
    pageId: 'contact-us',
    keywords: ['contact', 'phone', 'email', 'submit', 'audit', 'office', 'whatsapp', 'address', 'desk'],
  },
  {
    id: 'stories',
    title: 'Client Success Stories & Bid Case Studies',
    description: 'Verified public procurement case studies: Medical tenders, civil highways, solar EPC, and security outsourcing contracts won.',
    type: 'hub',
    path: '/stories',
    pageId: 'stories',
    keywords: ['stories', 'case study', 'won bids', 'testimonials', 'results', 'clients', 'track record'],
  },
  {
    id: 'insights',
    title: 'Expert Tender Insights & GFR Legal Guides',
    description: 'Authoritative analysis of GFR 2017 Rule 170 (EMD exemption), Rule 173(i) startup waivers & avoiding Packet-A disqualification.',
    type: 'hub',
    path: '/insights',
    pageId: 'insights',
    keywords: ['insights', 'gfr', 'rule 170', 'rule 173', 'legal', 'guide', 'disqualification', 'regulatory', 'emd'],
  },
  {
    id: 'sitemap',
    title: 'Dynamic XML Sitemap & Deep Crawl Directory',
    description: 'Complete hierarchical index of all Bid Tender 4 U public routes, service practice areas, and state location hubs.',
    type: 'hub',
    path: '/sitemap',
    pageId: 'sitemap',
    keywords: ['sitemap', 'directory', 'index', 'xml', 'routes', 'links'],
  },

  // 2. Key FAQ Topics
  {
    id: 'faq-emd-exemption',
    title: 'FAQ: EMD Exemption under GFR Rule 170 (MSME / Startups)',
    description: 'How MSME Udyam and DPIIT startups claim 100% statutory exemption from Earnest Money Deposit and tender document fees.',
    type: 'faq',
    path: '/faqs',
    pageId: 'faqs',
    keywords: ['faq', 'emd', 'exemption', 'rule 170', 'udyam', 'msme', 'waiver', 'bank guarantee', 'bid security'],
  },
  {
    id: 'faq-dsc-token',
    title: 'FAQ: Class-3 DSC Token vs Soft Certificate for Bidding',
    description: 'Why government e-tendering requires hardware crypto USB tokens (ePass2003/ProxKey) with signing and encryption.',
    type: 'faq',
    path: '/faqs',
    pageId: 'faqs',
    keywords: ['faq', 'dsc', 'class 3', 'token', 'usb', 'crypto', 'encryption', 'signing', 'pki', 'epass2003'],
  },
  {
    id: 'faq-caution-money',
    title: 'FAQ: GeM Caution Money Slabs & PFMS Validation',
    description: 'Turnover-based caution deposit slabs (₹2,000 to ₹25,000) and Public Financial Management System bank validation rules on GeM 4.0.',
    type: 'faq',
    path: '/faqs',
    pageId: 'faqs',
    keywords: ['faq', 'caution money', 'deposit', 'slab', 'gem', 'pfms', 'refund', 'turnover', 'bank'],
  },
  {
    id: 'faq-oem-codes',
    title: 'FAQ: GeM OEM Authorization Codes for Locked Bids',
    description: 'How to obtain and validate bid-specific OEM authorization codes and Reseller Authorization Letters (MAF) without disqualification.',
    type: 'faq',
    path: '/faqs',
    pageId: 'faqs',
    keywords: ['faq', 'oem code', 'authorization', 'custom bid', 'locked', 'reseller', 'maf', 'manufacturer'],
  },
  {
    id: 'faq-hospital-tenders',
    title: 'FAQ: Hospital Equipment & Medical Tenders ISO 13485',
    description: 'Mandatory ISO 13485:2016, CE marking, and drug licence requirements for hospital medical equipment and consumables bids.',
    type: 'faq',
    path: '/faqs',
    pageId: 'faqs',
    keywords: ['faq', 'hospital', 'medical', 'iso 13485', 'ce mark', 'drug licence', 'icu', 'pharma', 'equipment'],
  },
  {
    id: 'faq-civil-boq',
    title: 'FAQ: Civil Infrastructure & PWD Tender BOQ Packaging',
    description: 'Resolving BOQ pricing schedules, Joint Venture (JV) agreements, CA turnover UDIN requirements, and bank solvency criteria.',
    type: 'faq',
    path: '/faqs',
    pageId: 'faqs',
    keywords: ['faq', 'civil', 'pwd', 'cpwd', 'boq', 'joint venture', 'jv', 'udin', 'turnover', 'infrastructure'],
  },
];

// Append all Blog Articles dynamically
export function getAllSearchItems(): SearchItem[] {
  const blogItems: SearchItem[] = BLOG_ARTICLES.map((article) => ({
    id: `blog-${article.slug}`,
    title: article.title,
    description: article.metaDescription || article.subtitle,
    type: 'blog',
    path: `/blog/${article.slug}`,
    pageId: 'blog',
    articleSlug: article.slug,
    keywords: [
      'blog',
      'article',
      article.category.toLowerCase(),
      ...(article.keywords || []).map((k) => k.toLowerCase()),
    ],
  }));

  const keywordItems: SearchItem[] = TENDER_KEYWORDS_DATA.map((kw) => ({
    id: `keyword-${kw.id}`,
    title: `${kw.name} (Tender Consultancy)`,
    description: kw.description,
    type: 'service',
    path: `/tenders-by-keywords`,
    pageId: 'tenders-by-keywords',
    keywords: [
      'keyword',
      'tenders by keyword',
      kw.name.toLowerCase(),
      kw.shortName.toLowerCase(),
      kw.category.toLowerCase(),
      ...kw.keywords,
      ...kw.typicalPortals.map((p) => p.toLowerCase()),
    ],
  }));

  return [...CORE_SEARCH_ITEMS, ...blogItems, ...keywordItems];
}

export function searchIndex(
  query: string,
  typeFilter: 'all' | 'service' | 'blog' | 'faq' = 'all'
): SearchItem[] {
  const items = getAllSearchItems();
  const trimmed = query.trim().toLowerCase();

  return items.filter((item) => {
    // Check type filter
    if (typeFilter !== 'all') {
      if (typeFilter === 'service' && !(item.type === 'service' || item.type === 'hub')) {
        return false;
      }
      if (typeFilter === 'blog' && item.type !== 'blog') {
        return false;
      }
      if (typeFilter === 'faq' && item.type !== 'faq') {
        return false;
      }
    }

    if (!trimmed) {
      return true;
    }

    const queryTokens = trimmed.split(/\s+/).filter(Boolean);

    // Search against title, description, and keywords
    const haystack = [
      item.title.toLowerCase(),
      item.description.toLowerCase(),
      item.keywords.join(' '),
      item.type,
    ].join(' ');

    return queryTokens.every((token) => haystack.includes(token));
  });
}
