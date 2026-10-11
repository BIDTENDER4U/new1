export interface RouteMetadata {
  path: string;
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  breadcrumbTitle: string;
  h1: string;
  lead: string;
  keyPoints: string[];
  relatedLinks: Array<{ label: string; path: string; desc: string }>;
  pageType?: 'website' | 'article' | 'service';
}

export const CANONICAL_BASE = 'https://www.bidtender4u.com';

export const ROUTES_SEO: Record<string, RouteMetadata> = {
  '/': {
    path: '/',
    title: 'Bid Tender 4 U - Government Tender & GeM Consultancy',
    description: 'All India tender consultancy for GeM portal bidding, Startup Certificate Registration (DPIIT), FSSAI Licence, Free Tender Summary, ISO Certification, Class-3 DSC, and GeM OEM Authorization codes.',
    keywords: 'gem, tender, iso, dsc, registration, startup, summary, msme, bidding, consultancy, consultant, gem portal bidding, government tender bidding consultancy, free tender summary, class 3 dsc, all types of iso certification, msme udyam registration, startup india waiver gfr 173i, tender consultant ahmedabad',
    canonical: `${CANONICAL_BASE}/`,
    breadcrumbTitle: 'Home',
    h1: 'Bid Tender 4 U - Government Tender & GeM Consultancy',
    lead: 'Premier public procurement advisory, tender bidding consultancy, and GeM portal consultant based in Ahmedabad, Gujarat, helping government contractors, MSME suppliers, and DPIIT startups win tenders nationwide.',
    keyPoints: [
      'Over 1,500+ government tenders analyzed and ₹500 Cr+ in cumulative bid volume across GeM, CPPP, and state portals.',
      'Comprehensive practice areas: GeM Registration, GeM Product Listing, OEM Services, and Zero-Disqualification Tender Bidding.',
      'Free Tender Summary Generator: Instant extraction of 21 master parameters, eligibility criteria, and required documents.',
      'All types of ISO Certification (ISO 9001, 14001, 45001, 27001, 13485) and Class-3 Combo DSC issued within 30 minutes.',
      'Statutory waiver assistance: GFR 170 MSME EMD exemptions and GFR 173(i) DPIIT Startup turnover waivers.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'End-to-end technical packaging, NIT document audits, BOQ pricing & portal submission.' },
      { label: 'GeM Registration & Onboarding', path: '/gem-registration', desc: 'Statutory onboarding checklist for Primary Sellers, OEMs, and Resellers on GeM 4.0.' },
      { label: 'Free Tender Summary Generator', path: '/free-tender-summary', desc: 'Master Tender Summary Table extraction (21 fields) and compliance audit.' },
      { label: 'GeM Product Listing', path: '/gem-product-listing', desc: 'Quadrant 1-4 catalog management, HSN mapping & direct purchase L1 pairing.' },
      { label: 'OEM Services & Codes', path: '/oem-services', desc: 'Official GeM brand approval, OEM authorization codes & reseller MAF letters.' },
      { label: 'Startup, MSME, ISO & DSC', path: '/certifications', desc: 'DPIIT startup recognition, Udyam MSME, ISO certificates & Class-3 crypto DSC.' },
      { label: 'About Us & Credentials', path: '/about-us', desc: 'Company credentials, Isanpur Ahmedabad headquarters & nationwide track record.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Direct tender document intake desk for preliminary compliance review.' }
    ],
    pageType: 'website'
  },
  '/tender-bidding-consultancy': {
    path: '/tender-bidding-consultancy',
    title: 'Tender Bidding Consultancy - Top Government Tender Consultant | Bid Tender 4 U',
    description: 'Expert tender bidding consultancy and public procurement consultant across GeM, CPPP, nProcure, and state portals. Technical packaging, NIT document audits, BOQ pricing, and live bidding.',
    keywords: 'tender, bidding, consultancy, consultant, government tender bidding consultancy, tender consultant in ahmedabad, public procurement consultant, technical packet a packaging, financial boq packet b, reverse auction ra bidding, tender document audit, nit review, zero disqualification bidding',
    canonical: `${CANONICAL_BASE}/tender-bidding-consultancy`,
    breadcrumbTitle: 'Tender Bidding Consultancy',
    h1: 'Government Tender Bidding Consultancy Services',
    lead: 'End-to-end technical packaging, NIT document audits, BOQ financial pricing analysis, Packet A & B compilation, and live portal submission on GeM, CPPP, nProcure, and state platforms.',
    keyPoints: [
      'Comprehensive NIT / RFP document review with statutory clause-by-clause scrutiny and risk analysis.',
      'Packet A (Prequalification / Technical folder) compiling CA UDIN certificates, turnover, past performance, and notarized affidavits.',
      'Packet B (Financial BOQ quotation) schedule modeling, tax breakdown, and competitive pricing intelligence.',
      'Real-time live portal submission and reverse auction (RA) management with zero technical disqualification.',
      'Legal representation drafting under GFR 173(i) and GFR 170 for MSME and DPIIT Startup exemptions.'
    ],
    relatedLinks: [
      { label: 'Free Tender Summary Tool', path: '/free-tender-summary', desc: 'Extract 21 master tender parameters and eligibility tables.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Seller profile onboarding, caution money deposit & bank validation.' },
      { label: 'GeM Product Listing', path: '/gem-product-listing', desc: 'Catalog upload and L1 direct purchase optimization on GeM 4.0.' },
      { label: 'OEM Services', path: '/oem-services', desc: 'Brand approval and OEM authorization codes for custom bids.' },
      { label: 'Startup, MSME, ISO & DSC', path: '/certifications', desc: 'Certifications, GFR exemptions, and Class-3 combo DSC crypto tokens.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Submit your tender document for a preliminary eligibility review.' }
    ],
    pageType: 'service'
  },
  '/services': {
    path: '/services',
    title: 'Government Tender Consultancy Services | Bid Tender 4 U',
    description: 'Specialized tender consultancy practice areas: GeM portal bidding, non-GeM e-procurement (nProcure, CPPP, SPPP), document audit, BOQ pricing, and reverse auctions.',
    canonical: `${CANONICAL_BASE}/tender-bidding-consultancy`,
    breadcrumbTitle: 'Tender Bidding Services',
    h1: 'Government Tender Consultancy Services',
    lead: 'Six specialized practice areas guaranteeing procedural compliance and winning competitive edge in public sector bidding.',
    keyPoints: [
      'Tender document analysis and preliminary eligibility audits.',
      'Pre-qualification document packaging under GFR 2017 rules.',
      'Live e-procurement portal assistance with Class-3 encryption keys.',
      'Bid tracking and post-bid opening clarification representation.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Dedicated tender bidding practice overview.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Statutory documents and seller onboarding.' },
      { label: 'About Us', path: '/about-us', desc: 'Credentials and Ahmedabad headquarters.' }
    ],
    pageType: 'service'
  },
  '/gem-registration': {
    path: '/gem-registration',
    title: 'GeM Registration - Statutory Vendor Setup & GeM Consultant | Bid Tender 4 U',
    description: 'Statutory GeM registration checklist for Primary Sellers, OEMs, and Resellers. PAN, GSTIN, Aadhaar e-KYC, PFMS validation, and caution deposit setup on GeM 4.0.',
    keywords: 'gem, registration, consultant, consultancy, gem registration, gem portal onboarding, vendor registration, gem seller account, caution money slab, gem vendor assessment, gem consultant ahmedabad, gem consultant pan india',
    canonical: `${CANONICAL_BASE}/gem-registration`,
    breadcrumbTitle: 'GeM Registration',
    h1: 'Document Requirements & Checklist for GeM Registration',
    lead: 'Statutory documents and step-by-step onboarding for Primary Sellers, OEMs, and Resellers on Government e-Marketplace (GeM 4.0) with zero procedural rejection.',
    keyPoints: [
      'Entity PAN, Aadhaar OTP verification, and active GSTIN REG-06 validation.',
      'Public Financial Management System (PFMS) bank account validation and cancelled cheque leaf.',
      'Caution money deposit slab calculation based on annual turnover with auto-debit escrow setup.',
      'Vendor assessment exemption assistance for DPIIT registered startups and MSMEs under GFR rules.',
      'Primary vs Secondary user roles, administrative controls, and GeM profile 100% completion.'
    ],
    relatedLinks: [
      { label: 'GeM Product Listing', path: '/gem-product-listing', desc: 'Upload products and manage catalogs in Quadrants 1 to 4.' },
      { label: 'OEM Services', path: '/oem-services', desc: 'Get official GeM brand approval and OEM authorization codes.' },
      { label: 'Free Tender Summary', path: '/free-tender-summary', desc: 'Extract master parameters from GeM bids.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Full technical folder packaging and bid submission.' },
      { label: 'Startup, MSME, ISO & DSC', path: '/certifications', desc: 'DPIIT certificate, ISO 9001, and Class-3 DSC crypto tokens.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Get your GeM registration completed in 24 hours.' }
    ],
    pageType: 'service'
  },
  '/gem-documents': {
    path: '/gem-documents',
    title: 'GeM Registration Documents Checklist | Bid Tender 4 U',
    description: 'Mandatory documentation checklist for primary seller, reseller, and OEM registration on Government e-Marketplace (GeM 4.0).',
    keywords: 'gem, registration, gem registration documents, gem seller checklist, gem portal registration documents, gem oem registration checklist',
    canonical: `${CANONICAL_BASE}/gem-registration`,
    breadcrumbTitle: 'GeM Documents',
    h1: 'Document Requirements for GeM Registration',
    lead: 'Statutory documents for Primary Sellers, OEMs, and Resellers on Government e-Marketplace (GeM 4.0).',
    keyPoints: [
      'Proprietor / Entity PAN and active Aadhaar e-KYC.',
      'Active GSTIN certificate matching physical business premises.',
      'PFMS bank validation and cancelled cheque leaf.',
      'Udyam MSME and Startup India certificates for statutory waivers.'
    ],
    relatedLinks: [
      { label: 'GeM Registration', path: '/gem-registration', desc: 'GeM registration onboarding service.' },
      { label: 'GeM Product Listing', path: '/gem-product-listing', desc: 'Product upload and catalog pairing.' },
      { label: 'OEM Services', path: '/oem-services', desc: 'Brand approval and authorization codes.' }
    ],
    pageType: 'service'
  },
  '/gem-product-listing': {
    path: '/gem-product-listing',
    title: 'GeM Product Listing & Catalog Management | Bid Tender 4 U',
    description: 'Professional GeM product listing and catalog pairing services across Quadrants 1 to 4. HSN/SAC mapping, L1 direct purchase price optimization, and incident prevention on GeM 4.0.',
    keywords: 'gem, bidding, consultant, gem product listing, gem catalog management, quadrant 1 oem pairing, quadrant 2 reseller offerings, gem l1 price optimization, hsn code mapping',
    canonical: `${CANONICAL_BASE}/gem-product-listing`,
    breadcrumbTitle: 'GeM Product Listing',
    h1: 'GeM Product Listing & Catalog Management Services',
    lead: 'Upload products, map HSN/SAC codes, manage primary and secondary catalogs in Quadrants 1-4, and achieve L1 direct purchase placement on GeM 4.0.',
    keyPoints: [
      'Quadrant-1 OEM catalog pairing and Quadrant 2-4 reseller offering creation.',
      'HSN/SAC code alignment and GST rate consistency across all product lines.',
      'L1 direct purchase price benchmarking within 5-10% of market rates.',
      'Proactive catalog hygiene to prevent red flags, de-listing, and buyer incident logs.'
    ],
    relatedLinks: [
      { label: 'OEM Services', path: '/oem-services', desc: 'Official GeM brand approval and reseller authorization codes.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Complete statutory registration for sellers and OEMs.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Participate in GeM custom bids and reverse auctions.' },
      { label: 'Startup, MSME, ISO & DSC', path: '/certifications', desc: 'FSSAI licence, ISO certifications, and Class-3 DSC tokens.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Request express catalog upload assistance.' }
    ],
    pageType: 'service'
  },
  '/oem-services': {
    path: '/oem-services',
    title: 'GeM OEM Services & Brand Approval Codes | Bid Tender 4 U',
    description: 'Official GeM brand approval, OEM authorization codes for custom bids, Reseller Authorization Letters (MAF), QCI vendor assessment assistance, and Quadrant-1 catalog linking.',
    keywords: 'gem, tender, bidding, consultant, gem oem authorization code, gem brand approval, manufacturer authorization form maf, reseller authorization letter, qci vendor assessment',
    canonical: `${CANONICAL_BASE}/oem-services`,
    breadcrumbTitle: 'OEM Services',
    h1: 'GeM OEM Services, Brand Approval & Authorization Codes',
    lead: 'Official GeM brand approval, OEM authorization codes for custom bids, Reseller Authorization Letters (MAF), QCI vendor assessment assistance, and Quadrant-1 catalog linking.',
    keyPoints: [
      'GeM brand approval for trademark holders and original equipment manufacturers.',
      'Generation of bid-specific OEM authorization codes for authorized distributors.',
      'Preparation of legally binding Manufacturer Authorization Form (MAF) letters.',
      'QCI Vendor Assessment compliance packaging and factory inspection guidance.'
    ],
    relatedLinks: [
      { label: 'GeM Product Listing', path: '/gem-product-listing', desc: 'Catalog upload and L1 direct purchase pairing.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Primary seller and OEM portal registration.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'End-to-end technical packaging and bid submission.' },
      { label: 'Startup, MSME, ISO & DSC', path: '/certifications', desc: 'ISO 9001/13485 certifications and Class-3 DSC tokens.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Consult an OEM specialist for brand approval.' }
    ],
    pageType: 'service'
  },
  '/free-tender-summary': {
    path: '/free-tender-summary',
    title: 'Free Tender Summary Generator - Master Summary Table & Parameter Extraction | Bid Tender 4 U',
    description: 'Extract 21 master tender summary details, eligibility criteria, mandatory document lists, and forms & annexures in structured tables for Indian government bids.',
    keywords: 'summary, tender, bidding, msme, startup, free tender summary, master tender summary table, tender document extraction, tender analysis tool, eligibility criteria table, required documents master table, forms and annexures table, tender summary pdf export, gfr 170 emd waiver check, gfr 173i startup waiver',
    canonical: `${CANONICAL_BASE}/free-tender-summary`,
    breadcrumbTitle: 'Free Tender Summary',
    h1: 'Free Tender Summary Generator & Master Parameter Extraction',
    lead: 'Instant extraction of 21 master tender parameters, eligibility criteria, mandatory document lists, and required forms from government tender documents into clean structured tables.',
    keyPoints: [
      'Master Tender Summary Table: Inviting Authority, Location, Tender ID, EMD, Value, Validity, RA, ePBG, DSC, MII & MSE preferences.',
      'Eligibility Criteria Table: Criteria Type, Requirement, Mandatory/Optional status, and risk remarks.',
      'Required Documents Master Table: Single table classifying Mandatory vs Optional documents across Legal, Financial, Technical, and Compliance categories.',
      'Forms & Annexures Table: Comprehensive schedule of tender declarations, affidavits, and bank formats.',
      'Instant statutory checks: GFR 170 MSME EMD waiver and GFR 173(i) DPIIT Startup turnover/experience exemption.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Complete Packet A & B preparation by senior consultants.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Onboarding for primary sellers and resellers.' },
      { label: 'Startup, MSME, ISO & DSC', path: '/certifications', desc: 'Instant tender credentials and crypto DSC tokens.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Submit your tender document for an expert audit.' }
    ],
    pageType: 'service'
  },
  '/certifications': {
    path: '/certifications',
    title: 'Startup India, MSME Benefits, All Types ISO & Class-3 DSC | Bid Tender 4 U',
    description: 'Get essential government tender credentials: DPIIT Startup India registration, MSME Udyam benefits, All Types of ISO certification (ISO 9001, 14001, 45001, 27001), and Class-3 combo DSC in 30 minutes.',
    keywords: 'startup, msme, iso, dsc, registration, tender, startup india registration, dpiit startup recognition, gfr 173i turnover exemption, msme udyam registration, gfr 170 emd waiver, all types of iso certification, iso 9001 2015, iso 14001, iso 45001, iso 27001, iso 13485, class 3 dsc combo token, epass2003 crypto token, 30 min paperless dsc',
    canonical: `${CANONICAL_BASE}/certifications`,
    breadcrumbTitle: 'Certifications & DSC',
    h1: 'Startup India, MSME Registration, ISO Certification & Class-3 DSC',
    lead: 'Instant tender eligibility boosters: DPIIT Startup India recognition for GFR 173(i) waivers, MSME Udyam registration for GFR 170 EMD exemption, ISO standards, and paperless 30-minute Class-3 DSC crypto tokens.',
    keyPoints: [
      'DPIIT Startup India registration: Unlocks 100% waiver from Prior Turnover & Experience under GFR Rule 173(i).',
      'MSME Udyam registration: Unlocks 100% EMD exemption under GFR Rule 170 and tender fee waivers.',
      'All Types of ISO Certification: ISO 9001, 14001, 45001, 27001, and 13485 with authentic online verification in 24-48 hours.',
      'Class-3 Combo (Signing + Encryption) digital signature certificates on genuine ePass2003 / ProxKey crypto tokens in 30 minutes.'
    ],
    relatedLinks: [
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Statutory seller onboarding checklist on GeM.' },
      { label: 'Free Tender Summary', path: '/free-tender-summary', desc: 'Diagnostic extraction of 21 tender parameters.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Full technical folder packaging and submission.' },
      { label: 'OEM Services', path: '/oem-services', desc: 'GeM brand approval and authorization codes.' }
    ],
    pageType: 'service'
  },
  '/gem-tender-consultancy': {
    path: '/gem-tender-consultancy',
    title: 'GeM Consultant & Government Tender Bidding Consultancy | Bid Tender 4 U',
    description: 'Premier GeM consultant and tender bidding consultancy in Ahmedabad & Pan-India. Complete GeM 4.0 registration, product listing, OEM authorization codes, and zero-disqualification bidding.',
    keywords: 'gem, tender, consultancy, consultant, bidding, gem consultant, government tender consultant, gem portal consultancy, tender bidding consultancy ahmedabad, gem bidding consultant, gem oem authorization code, reverse auction bidding consultant',
    canonical: `${CANONICAL_BASE}/gem-tender-consultancy`,
    breadcrumbTitle: 'GeM Tender Consultancy',
    h1: 'GeM Consultant & Government Tender Bidding Consultancy',
    lead: 'Authoritative procurement consultancy helping suppliers, contractors, and OEMs navigate GeM 4.0 portal rules, e-procurement bidding, and statutory compliance with zero technical disqualification.',
    keyPoints: [
      'GeM 4.0 Seller, Reseller & OEM onboarding with caution money and PFMS validation.',
      'Quadrant 1-4 product catalog listing, HSN alignment, and L1 direct purchase placement.',
      'Packet A technical prequalification scrutiny and Packet B financial BOQ quotation modeling.',
      'Live reverse auction (RA) strategy and post-bid representation.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Full-scope bid packaging and submission.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Statutory onboarding checklist.' },
      { label: 'Free Tender Summary', path: '/free-tender-summary', desc: 'Extract master tender parameters.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Consult our senior tender officers.' }
    ],
    pageType: 'service'
  },
  '/msme-startup-tenders': {
    path: '/msme-startup-tenders',
    title: 'MSME & Startup Tender Benefits - GFR 170 EMD & GFR 173(i) Waivers | Bid Tender 4 U',
    description: 'Claim 100% EMD exemption under GFR 170 and prior turnover & experience waivers under GFR 173(i) with Udyam MSME and DPIIT Startup India registration.',
    keywords: 'msme, startup, tender, registration, bidding, msme tender benefits, gfr 170 emd exemption, gfr 173i startup turnover waiver, udyam registration, dpiit startup recognition, mse purchase preference, tender fee waiver',
    canonical: `${CANONICAL_BASE}/msme-startup-tenders`,
    breadcrumbTitle: 'MSME & Startup Tenders',
    h1: 'MSME & Startup Tender Benefits: Statutory GFR Waivers',
    lead: 'Maximize statutory public procurement incentives: 100% EMD exemption under GFR 170 for Udyam MSMEs and prior turnover & experience waivers under GFR 173(i) for DPIIT recognized Startups.',
    keyPoints: [
      'GFR Rule 170: 100% EMD waiver and tender document fee waiver for Micro & Small Enterprises (MSEs).',
      'GFR Rule 173(i): Statutory prohibition against imposing prior turnover or prior experience on DPIIT Startups.',
      'Public Procurement Policy for MSEs Order 2012: 25% annual mandatory quota and MSE purchase preference within L1 + 15% band.',
      'Legal representation drafting when procuring departments wrongfully reject MSME or Startup bids.'
    ],
    relatedLinks: [
      { label: 'Certifications & DSC', path: '/certifications', desc: 'Obtain Udyam MSME and DPIIT certificates.' },
      { label: 'Free Tender Summary', path: '/free-tender-summary', desc: 'Verify waiver eligibility for your target tender.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Professional bid preparation.' }
    ],
    pageType: 'service'
  },
  '/iso-dsc-certifications': {
    path: '/iso-dsc-certifications',
    title: 'All Types ISO Certification & Class-3 Combo DSC for Tenders | Bid Tender 4 U',
    description: 'Instant tender eligibility boosters: ISO 9001, 14001, 45001, 27001, 13485 certifications and Class-3 combo DSC crypto tokens issued within 30 minutes for e-tendering.',
    keywords: 'iso, dsc, tender, registration, all types of iso certification, iso 9001 2015, iso 14001, iso 45001, iso 27001, iso 13485, class 3 dsc combo token, digital signature certificate e-tendering, epass2003 crypto token, 30 min paperless dsc',
    canonical: `${CANONICAL_BASE}/iso-dsc-certifications`,
    breadcrumbTitle: 'ISO & DSC for Tenders',
    h1: 'All Types of ISO Certification & Class-3 Combo DSC for Tenders',
    lead: 'Fast-track certifications for government tenders: Authentic ISO standards (ISO 9001, 14001, 45001, 27001, 13485) and Class-3 Combo DSC (Signing + Encryption) crypto tokens issued within 30 minutes.',
    keyPoints: [
      'All Types of ISO Certification: IAF & Non-IAF accredited with online verification in 24-48 hours.',
      'ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Safety), ISO 27001 (Information Security), and ISO 13485 (Medical Devices).',
      'Class-3 Combo DSC: Both Signing and Encryption certificates on USB crypto tokens (ePass2003 / ProxKey).',
      'Paperless 30-minute Aadhaar e-KYC issuance and remote browser/Java configuration for all portals.'
    ],
    relatedLinks: [
      { label: 'Certifications Gateway', path: '/certifications', desc: 'Complete overview of all statutory certifications.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Technical folder compilation.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'GeM seller onboarding.' }
    ],
    pageType: 'service'
  },
  '/categories': {
    path: '/categories',
    title: 'Tender Industry & Product Categories | Bid Tender 4 U',
    description: 'Tender consultancy across 12+ government procurement sectors: civil infrastructure, hospital medical equipment, IT hardware, solar EPC, security manpower, vehicle hiring, and catering.',
    canonical: `${CANONICAL_BASE}/categories`,
    breadcrumbTitle: 'Tender Categories',
    h1: 'Tender Industry & Product Categories',
    lead: 'Specialized bid packaging across 12+ major public procurement sectors on GeM, CPPP, and state e-tendering portals.',
    keyPoints: [
      'Hospital Equipment & Medical Consumables (ISO 13485 & CE compliance).',
      'Civil Infrastructure, Roads, Buildings & PWD Tenders.',
      'Security Manpower Outsourcing & Housekeeping Services.',
      'Solar EPC, Electrical Grid & Substation Contracts.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Bidding services tailored for all categories.' },
      { label: 'GeM Product Listing', path: '/gem-product-listing', desc: 'Upload products in your industry category.' },
      { label: 'Portals Matrix', path: '/portals', desc: 'Central and state procurement portals covered.' }
    ],
    pageType: 'service'
  },
  '/portals': {
    path: '/portals',
    title: 'E-Procurement Portals Covered (GeM, CPPP, nProcure, SPPP) | Bid Tender 4 U',
    description: 'Pan-India coverage across all government e-tendering portals: Government e-Marketplace (GeM 4.0), CPPP, nProcure Gujarat, SPPP Rajasthan, MahaTenders, IREPS Railways, and Defense portals.',
    canonical: `${CANONICAL_BASE}/portals`,
    breadcrumbTitle: 'E-Portals Matrix',
    h1: 'Government E-Procurement Portals Covered',
    lead: 'Complete technical assistance across central, state, railway, defense, and public sector undertaking (PSU) procurement portals.',
    keyPoints: [
      'Central Public Procurement Portal (CPPP / eProcure).',
      'Government e-Marketplace (GeM 4.0).',
      'State portals: nProcure (Gujarat), SPPP (Rajasthan), MahaTenders (Maharashtra).',
      'Specialized portals: IREPS (Indian Railways), MES, and defense ordnance bidding.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Full submission support across all portals.' },
      { label: 'Certifications & DSC', path: '/certifications', desc: 'Class-3 DSC tokens compatible with all portals.' },
      { label: 'All India & Cities Hub', path: '/locations', desc: 'Geographic procurement coverage across 28 states.' }
    ],
    pageType: 'service'
  },
  '/locations': {
    path: '/locations',
    title: 'All India, 28 States & 50+ Cities Tender Consultancy Hub | Bid Tender 4 U',
    description: 'Local government tender consultancy across 28 Indian states and 50+ key industrial cities including Ahmedabad, Surat, Jaipur, Mumbai, Delhi NCR, Pune, Bengaluru, and Hyderabad.',
    canonical: `${CANONICAL_BASE}/locations`,
    breadcrumbTitle: 'Locations Hub',
    h1: 'All India, 28 States & 50+ Cities Geographic Tender Hub',
    lead: 'Connecting contractors, MSMEs, and vendors with local municipal corporation tenders, PWD works, state boards, and central PSU tenders nationwide.',
    keyPoints: [
      'Gujarat Focus: Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar municipal tenders.',
      'Rajasthan Focus: Jaipur, Jodhpur, Udaipur, Kota SPPP tenders.',
      'Maharashtra Focus: Mumbai, Pune, Nagpur, Nashik MahaTenders.',
      'Pan-India Coverage: Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Local and national bid packaging.' },
      { label: 'Portals Matrix', path: '/portals', desc: 'State e-tendering portals covered.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Connect with our regional consultancy desk.' }
    ],
    pageType: 'website'
  },
  '/stories': {
    path: '/stories',
    title: 'Client Success Stories & Bid Case Studies | Bid Tender 4 U',
    description: 'Verified public procurement case studies: See how contractors, MSMEs, and manufacturers won government contracts on GeM, nProcure, and CPPP with our consultancy.',
    canonical: `${CANONICAL_BASE}/stories`,
    breadcrumbTitle: 'Success Stories',
    h1: 'Client Success Stories & Bid Winning Case Studies',
    lead: 'Real-world bid outcomes demonstrating how procedural compliance, BOQ modeling, and statutory exemptions helped clients secure government contracts.',
    keyPoints: [
      'Medical equipment supplier won ₹4.8 Cr hospital tender under GFR 173(i) startup exemption.',
      'Civil road contractor qualified for ₹12 Cr PWD highway project with compliant JV documentation.',
      'Solar EPC firm won municipal rooftop tender on nProcure with zero technical queries.',
      'Security agency won 3-year state university outsourcing contract with flawless Packet A folder.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Our proven bid packaging methodology.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Start with compliant GeM onboarding.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Let us prepare your next winning bid.' }
    ],
    pageType: 'website'
  },
  '/insights': {
    path: '/insights',
    title: 'Expert Tender Insights & GFR Legal Guides | Bid Tender 4 U',
    description: 'In-depth legal guides on GFR 2017 Rule 170 (EMD exemption), Rule 173(i) startup waivers, GeM 4.0 GTC compliance, and avoidance of Packet A disqualification.',
    canonical: `${CANONICAL_BASE}/insights`,
    breadcrumbTitle: 'Expert Insights',
    h1: 'Expert Tender Insights & Regulatory Guides',
    lead: 'Authoritative analysis of General Financial Rules (GFR 2017), Public Procurement Policy, and GeM General Terms & Conditions (GTC).',
    keyPoints: [
      'GFR Rule 170 MSME / Udyam EMD exemption mechanics and bid security declaration.',
      'GFR Rule 173(i) startup turnover and experience waivers in government bids.',
      'Make in India (PPP-MII) Local Content percentage verification guidelines.',
      'Common Packet A document pitfalls and CA UDIN turnover validation rules.'
    ],
    relatedLinks: [
      { label: 'Procurement Blog', path: '/blog', desc: 'Read long-form regulatory articles.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Apply expert insights to your live bids.' },
      { label: 'Tender FAQs', path: '/faqs', desc: 'Answers to common tender bidding questions.' }
    ],
    pageType: 'article'
  },
  '/faqs': {
    path: '/faqs',
    title: 'Government Tender FAQs & EMD Regulations | Bid Tender 4 U',
    description: 'Frequently asked questions on EMD exemptions under GFR 170, Class-3 DSC tokens, GeM vendor assessment, caution money slabs, and technical qualification criteria.',
    canonical: `${CANONICAL_BASE}/faqs`,
    breadcrumbTitle: 'Tender FAQs',
    h1: 'Government Tender FAQs & Regulatory Guidelines',
    lead: 'Authoritative answers to the most common questions on government bidding, GeM portal rules, and tender documentation.',
    keyPoints: [
      'Who is eligible for EMD exemption under GFR 2017 Rule 170?',
      'How does DPIIT Startup India registration waive prior experience criteria?',
      'What is the difference between Class-3 Signing and Encryption DSC?',
      'How to obtain official GeM OEM authorization codes for custom bids?'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Consultancy support for complex bids.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'GeM onboarding rules and checklist.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Ask our senior tender officers a specific question.' }
    ],
    pageType: 'website'
  },
  '/blog': {
    path: '/blog',
    title: 'Government Procurement Blog & Regulatory Trends | Bid Tender 4 U',
    description: 'Expert regulatory analysis, tender strategy guides, GFR 2017 amendments, GeM 4.0 policy updates, and public procurement bidding insights by senior tender officers.',
    canonical: `${CANONICAL_BASE}/blog`,
    breadcrumbTitle: 'Procurement Blog',
    h1: 'Government Procurement Blog & Tender Insights',
    lead: 'Comprehensive technical and regulatory analysis covering GFR 2017, GeM 4.0, CPPP, and state procurement policies.',
    keyPoints: [
      'In-depth breakdown of GFR Rule 173(i) startup turnover waivers.',
      'Mandatory FSSAI licensing compliance for government food and canteen tenders.',
      'GFR Rule 170 MSME EMD exemption statutory defense.',
      'GeM OEM Authorization Codes and Reseller MAF legal drafting.'
    ],
    relatedLinks: [
      { label: 'GeM Startup Waiver Rule 173(i)', path: '/blog/gem-startup-waiver-rule-173i-analysis', desc: 'Analysis of DPIIT startup turnover exemption.' },
      { label: 'FSSAI License for Food Tenders', path: '/blog/fssai-license-government-food-tenders-guide', desc: 'Mandatory food safety compliance in government bids.' },
      { label: 'GFR 170 MSME EMD Exemption Guide', path: '/blog/gfr-170-msme-emd-exemption-guide', desc: 'How to claim 100% EMD waiver legally.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Professional bid preparation services.' }
    ],
    pageType: 'website'
  },
  '/sitemap': {
    path: '/sitemap',
    title: 'Dynamic XML Sitemap & Deep Crawl Directory | Bid Tender 4 U',
    description: 'Complete hierarchical directory of all Bid Tender 4 U public routes, service practice areas, certification gateways, tender categories, and state location hubs.',
    canonical: `${CANONICAL_BASE}/sitemap`,
    breadcrumbTitle: 'Sitemap',
    h1: 'Dynamic XML Sitemap & Deep Crawl Directory',
    lead: 'Hierarchical navigation directory enabling search engines and users to discover all public service pages, regulatory articles, and geographic hubs.',
    keyPoints: [
      'Direct links to all core services: GeM Registration, GeM Product Listing, OEM Services, and Tender Bidding.',
      'Complete coverage of 12 tender industry categories and 50+ city hubs.',
      'Crawlable XML sitemap accessible at /sitemap.xml.',
      'Clean canonical URL hierarchy with 100% indexable public endpoints.'
    ],
    relatedLinks: [
      { label: 'Home', path: '/', desc: 'Bid Tender 4 U homepage.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Our core tender bidding service.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'GeM vendor onboarding and documents.' },
      { label: 'About Us', path: '/about-us', desc: 'Company credentials and contact information.' }
    ],
    pageType: 'website'
  },
  '/payment-details': {
    path: '/payment-details',
    title: 'Official Payment Details & Verified UPI Gateway | Bid Tender 4 U',
    description: 'Official payment gateway for Bid Tender 4 U. Verified UPI ID: singhbaldev70368-2@okicici (Singh Baldev), ICICI Bank, QR code scan, and retainer fee tax invoice billing.',
    keywords: 'payment, upi, payment details, singhbaldev70368-2@okicici, singh baldev, icici bank, qr code, retainer fee, tender consultancy fees, gem registration payment',
    canonical: `${CANONICAL_BASE}/payment-details`,
    breadcrumbTitle: 'Payment Details',
    h1: 'Official Bank & UPI Payment Details',
    lead: 'Official ICICI Bank verified UPI gateway for consultancy retainer fees, tender document feasibility audits, and Class-3 DSC issuance.',
    keyPoints: [
      'Official UPI ID (VPA): singhbaldev70368-2@okicici.',
      'Payee Name: Singh Baldev (Bid Tender 4 U All India Tender Consultancy).',
      'Bank: ICICI Bank, Current / Merchant Account.',
      'Instant QR Code payment supporting Google Pay, PhonePe, Paytm, and BHIM UPI.',
      'Formal GST tax invoice and digital acknowledgment issued within 2 hours.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Full technical folder packaging and bid submission.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'GeM vendor onboarding and documents.' },
      { label: 'Free Tender Summary', path: '/free-tender-summary', desc: 'Extract master parameters from live tenders.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Visit our Ahmedabad HQ or call our desk.' }
    ],
    pageType: 'service'
  }
};
