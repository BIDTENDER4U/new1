export interface RouteMetadata {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
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
    title: 'GeM OEM Authorization & MSME EMD Exemption | Bid Tender 4 U',
    description: 'Win government tenders with Bid Tender 4 U. Official GeM OEM Authorization codes, 100% MSME EMD Exemption under GFR 170, ISO certification & live portal bidding.',
    ogTitle: 'GeM OEM Authorization & MSME EMD Exemption | Bid Tender 4 U',
    ogDescription: 'Get official GeM OEM Authorization codes, 100% MSME EMD Exemption under GFR 170, and end-to-end tender bidding consultancy across India. Zero disqualification.',
    keywords: 'gem oem authorization, msme emd exemption, gfr 170 emd waiver, gem portal bidding, government tender bidding consultancy, free tender summary, class 3 dsc, all types of iso certification, msme udyam registration, startup india waiver gfr 173i, tender consultant ahmedabad',
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
    title: 'Tender Bidding Consultancy & GeM Advisory | Bid Tender 4 U',
    description: 'Win government bids with zero disqualification. Expert NIT audits, MSME EMD Exemption claims, GeM OEM Authorization & BOQ financial bidding across India.',
    ogTitle: 'Government Tender Bidding & GeM OEM Advisory | Bid Tender 4 U',
    ogDescription: 'Expert technical bid packaging with guaranteed MSME EMD Exemption under GFR 170, GeM OEM Authorization pairing, and zero-error BOQ financial bidding.',
    keywords: 'gem oem authorization, msme emd exemption, tender, bidding, consultancy, consultant, government tender bidding consultancy, tender consultant in ahmedabad, public procurement consultant, technical packet a packaging, financial boq packet b, reverse auction ra bidding, tender document audit, nit review, zero disqualification bidding',
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
    title: 'Government Tender & GeM Services | Bid Tender 4 U',
    description: 'End-to-end tender bidding services: GeM OEM Authorization codes, MSME EMD Exemption under GFR 170, technical bid audits, BOQ pricing, and reverse auctions.',
    ogTitle: 'Tender Services: GeM OEM Authorization & EMD Exemption',
    ogDescription: 'Six specialized tender practice areas: official GeM OEM Authorization codes, MSME EMD Exemption under GFR 170, technical packet audits, and reverse auctions.',
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
    title: 'GeM Registration & Vendor Setup Guide | Bid Tender 4 U',
    description: 'Fast-track GeM 4.0 registration for sellers & OEMs. Includes GeM OEM Authorization linking, MSME EMD Exemption benefits, caution deposit & PFMS validation.',
    ogTitle: 'GeM Registration: OEM Authorization & MSME Setup',
    ogDescription: 'Onboard on GeM 4.0 without delays. Unlock GeM OEM Authorization codes, 100% MSME EMD Exemption under GFR 170, caution money deposits & verified seller status.',
    keywords: 'gem registration, gem oem authorization, msme emd exemption, gem, registration, consultant, consultancy, gem portal onboarding, vendor registration, gem seller account, caution money slab, gem vendor assessment, gem consultant ahmedabad, gem consultant pan india',
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
    title: 'GeM Registration Checklist & Documents | Bid Tender 4 U',
    description: 'Mandatory documents for GeM registration, GeM OEM Authorization pairing, and MSME EMD Exemption statutory affidavits. Verified by senior tender officers.',
    ogTitle: 'GeM Document Checklist: OEM Authorization & EMD Proof',
    ogDescription: 'Complete statutory checklist for GeM registration, GeM OEM Authorization codes (MAF), and MSME EMD Exemption Bid Securing Declarations under GFR 170.',
    keywords: 'gem oem authorization, msme emd exemption, gem registration documents, gem seller checklist, gem portal registration documents, gem oem registration checklist',
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
    description: 'Boost government sales on GeM 4.0. Quadrant 1-4 catalog upload, GeM OEM Authorization pairing, L1 direct purchase optimization & MSME preferential filtering.',
    ogTitle: 'GeM Product Listing & OEM Authorization Codes',
    ogDescription: 'Publish products across Quadrants 1-4 on GeM. Seamless GeM OEM Authorization code pairing, L1 price benchmarking & MSME purchase preference compliance.',
    keywords: 'gem product listing, gem oem authorization, msme emd exemption, quadrant 1 oem catalog, gem catalog pairing, l1 price optimization, hsn code mapping',
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
    title: 'GeM OEM Authorization Codes & Brand Approval | Bid Tender 4 U',
    description: 'Obtain official GeM OEM Authorization codes & brand approvals for custom bids. Legally compliant MAF letters, reseller linking, and zero bid disqualification.',
    ogTitle: 'Get GeM OEM Authorization Codes & Brand Approval Fast',
    ogDescription: 'Participate in locked custom bids with genuine GeM OEM Authorization codes and Manufacturer Authorization Forms (MAF). Fast brand approval on GeM 4.0.',
    keywords: 'gem oem authorization, gem oem authorization code, gem brand approval, manufacturer authorization form maf, reseller authorization letter, qci vendor assessment',
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
    title: 'Free Tender Summary Generator & Audit | Bid Tender 4 U',
    description: 'Extract 21 master tender parameters instantly. Auto-check MSME EMD Exemption under GFR 170, GeM OEM Authorization mandates, turnover waivers & document lists.',
    ogTitle: 'Instant Tender Summary: Check MSME EMD & OEM Mandates',
    ogDescription: 'Extract 21 master tender parameters in seconds. Instant verification of MSME EMD Exemption eligibility under GFR 170 and GeM OEM Authorization requirements.',
    keywords: 'free tender summary, msme emd exemption, gem oem authorization, master tender summary table, gfr 170 emd waiver, tender document extraction, tender analysis tool, eligibility criteria table, required documents master table, forms and annexures table, tender summary pdf export, gfr 173i startup waiver',
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
    title: 'MSME EMD Exemption, Startup India & ISO | Bid Tender 4 U',
    description: 'Unlock 100% MSME EMD Exemption under GFR 170, DPIIT Startup turnover waivers, All Types of ISO certification, and Class-3 DSC crypto tokens in 30 minutes.',
    ogTitle: 'Claim MSME EMD Exemption & Fast-Track ISO / DSC Tokens',
    ogDescription: 'Get 100% MSME EMD Exemption under GFR 170, DPIIT Startup India turnover waivers, ISO 9001/14001/45001 certificates & Class-3 Combo DSC in 30 minutes.',
    keywords: 'msme emd exemption, gfr 170 emd waiver, startup india registration, dpiit startup recognition, gfr 173i turnover exemption, msme udyam registration, all types of iso certification, iso 9001 2015, iso 14001, iso 45001, iso 27001, iso 13485, class 3 dsc combo token, epass2003 crypto token, 30 min paperless dsc',
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
    title: 'GeM Tender Consultant & Bidding Advisory | Bid Tender 4 U',
    description: 'Expert GeM consultancy: fast-track GeM OEM Authorization codes, 100% MSME EMD Exemption, zero-disqualification bid packaging, and live reverse auction support.',
    ogTitle: 'GeM Tender Consultant: OEM Authorization & Bidding',
    ogDescription: 'Premier GeM 4.0 consultancy. Secure GeM OEM Authorization codes, claim 100% MSME EMD Exemption under GFR 170, and win high-value central tenders.',
    keywords: 'gem oem authorization, msme emd exemption, gem consultant, government tender consultant, gem portal consultancy, tender bidding consultancy ahmedabad, gem bidding consultant, gem oem authorization code, reverse auction bidding consultant',
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
    title: 'MSME EMD Exemption Under GFR 170 & Waivers | Bid Tender 4 U',
    description: 'Claim 100% MSME EMD Exemption under GFR 170 and DPIIT Startup turnover waivers. Valid Bid Securing Declarations & legal protection against wrongful rejections.',
    ogTitle: '100% MSME EMD Exemption Under GFR Rule 170 Guide',
    ogDescription: 'Stop paying Earnest Money Deposits. Claim 100% MSME EMD Exemption under GFR 170 with compliant Bid Securing Declarations and NIC code statutory alignment.',
    keywords: 'msme emd exemption, gfr 170 emd waiver, bid securing declaration, udyam registration, dpiit startup turnover waiver, gfr 173i, mse purchase preference, tender fee waiver',
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
    title: 'ISO Certification & Class-3 DSC for Tenders | Bid Tender 4 U',
    description: 'Boost tender qualification: ISO 9001, 14001, 45001, 27001, 13485 certificates and Class-3 Combo DSC crypto tokens in 30 minutes. Pair with MSME EMD Exemption.',
    ogTitle: 'ISO Certifications & 30-Min Class-3 DSC for Tenders',
    ogDescription: 'Fast-track ISO 9001/14001/45001/13485 certificates and Class-3 Combo DSC tokens. Maximize tender scores alongside 100% MSME EMD Exemption benefits.',
    keywords: 'iso certification, class 3 dsc combo token, msme emd exemption, all types of iso certification, iso 9001 2015, iso 14001, iso 45001, iso 27001, iso 13485, digital signature certificate e-tendering, epass2003 crypto token, 30 min paperless dsc',
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
    title: 'Government Tender Categories & Sectors | Bid Tender 4 U',
    description: 'Tender bidding support across 12+ sectors. High-win strategies for IT hardware, healthcare with GeM OEM Authorization, and MSME EMD Exemption in public works.',
    ogTitle: 'Tender Categories: Healthcare, IT & Civil Works',
    ogDescription: 'Win tenders across 12+ sectors. Secure GeM OEM Authorization codes for medical & IT bids, and claim 100% MSME EMD Exemption in infrastructure contracts.',
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
    title: 'E-Procurement Portals Matrix & GeM Bidding | Bid Tender 4 U',
    description: 'Pan-India e-procurement bidding: GeM 4.0, CPPP, nProcure & IREPS. Complete support for GeM OEM Authorization pairing and GFR 170 MSME EMD Exemption waivers.',
    ogTitle: 'E-Procurement Portals: GeM, CPPP & State Platforms',
    ogDescription: 'Bidding support across GeM, CPPP, nProcure & Indian Railways. Fast-track GeM OEM Authorization codes and statutory MSME EMD Exemption compliance.',
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
    title: 'All India Tender Consultancy & GeM Hub | Bid Tender 4 U',
    description: 'Tender bidding consultancy across 28 states & 50+ cities. Local support for MSME EMD Exemption under GFR 170, GeM OEM Authorization codes, and municipal bids.',
    ogTitle: 'All India Tender Hub: 28 States & 50+ Cities',
    ogDescription: 'Local tender bidding consultancy across India. Secure GeM OEM Authorization codes and 100% MSME EMD Exemption for municipal, state, and central tenders.',
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
    title: 'Government Tender Success Stories & Wins | Bid Tender 4 U',
    description: 'Verified case studies: How MSMEs won ₹500 Cr+ in government tenders using MSME EMD Exemption under GFR 170 and authorized GeM OEM Authorization pairing.',
    ogTitle: 'Tender Winning Case Studies: ₹500 Cr+ in Awards',
    ogDescription: 'See how Indian contractors won high-value contracts using MSME EMD Exemption under GFR 170 and verifiable GeM OEM Authorization codes. Real case studies.',
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
    title: 'Tender Insights & GFR Legal Rule Guides | Bid Tender 4 U',
    description: 'Master public procurement rules: In-depth guides on MSME EMD Exemption under GFR 170, GeM OEM Authorization codes (MAF), and avoiding tender disqualifications.',
    ogTitle: 'Tender Insights: MSME EMD Exemption & GeM Rules',
    ogDescription: 'Authoritative legal guides on claiming MSME EMD Exemption under GFR 170, obtaining GeM OEM Authorization codes, and beating disqualifications under GeM GTC.',
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
    title: 'Tender FAQs: MSME EMD Exemption & GeM Rules | Bid Tender 4 U',
    description: 'Answers on MSME EMD Exemption under GFR 170, GeM OEM Authorization codes, Class-3 DSC tokens, caution deposit slabs, and avoiding bid disqualification.',
    ogTitle: 'Tender FAQs: MSME EMD Exemption & GeM OEM Codes',
    ogDescription: 'Clear answers to common bidding questions: How to claim 100% MSME EMD Exemption under GFR 170, secure GeM OEM Authorization codes, and prevent rejections.',
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
    title: 'Government Procurement Blog & GFR Guides | Bid Tender 4 U',
    description: 'Latest tender analysis: step-by-step guides on GeM OEM Authorization codes, GFR 170 MSME EMD Exemption defense, FSSAI rules, and winning government contracts.',
    ogTitle: 'Procurement Blog: GeM OEM Codes & MSME EMD Guides',
    ogDescription: 'Stay ahead in government bidding. Expert articles on GeM OEM Authorization code rules, GFR 170 MSME EMD Exemption precedents, and GFR 173(i) startup waivers.',
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
      { label: 'FSSAI License for Food Tenders', path: '/blog/fssai-licence-mandate-food-canteen-tenders', desc: 'Mandatory food safety compliance in government bids.' },
      { label: 'GFR 170 MSME EMD Exemption Guide', path: '/blog/gfr-170-msme-emd-exemption-guide', desc: 'How to claim 100% EMD waiver legally.' },
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Professional bid preparation services.' }
    ],
    pageType: 'website'
  },
  '/sitemap': {
    path: '/sitemap',
    title: 'XML Sitemap & Deep Crawl Directory | Bid Tender 4 U',
    description: 'Explore all public routes and services: GeM OEM Authorization, MSME EMD Exemption guides, ISO certifications, state location hubs, and regulatory articles.',
    ogTitle: 'Bid Tender 4 U Sitemap: All Public Routes & Services',
    ogDescription: 'Complete directory of tender bidding services, GeM OEM Authorization guides, MSME EMD Exemption resources, and state portal hubs.',
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
    title: 'Verified Payment Details & UPI Gateway | Bid Tender 4 U',
    description: 'Official verified UPI & bank payment details for Bid Tender 4 U retainer fees, GeM OEM Authorization advisory, MSME EMD Exemption audits, and Class-3 DSC.',
    ogTitle: 'Official UPI & Bank Details | Bid Tender 4 U',
    ogDescription: 'Official payment gateway for Bid Tender 4 U consultancy fees. Verified UPI ID: singhbaldev70368-2@okicici. Instant GST tax invoice for all tender services.',
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
  },
  '/about-us': {
    path: '/about-us',
    title: 'About Bid Tender 4 U - Tender & GeM Consultants',
    description: 'India\'s premier government tender advisory in Ahmedabad. Specialists in GeM OEM Authorization codes, MSME EMD Exemption under GFR 170 & zero-error bid filing.',
    ogTitle: 'About Bid Tender 4 U: Premier Tender Consultants',
    ogDescription: 'Headquartered in Ahmedabad, Gujarat. Over 1,500+ analyzed bids, ₹500 Cr+ awarded. Trusted for GeM OEM Authorization and MSME EMD Exemption consultancy.',
    keywords: 'gem oem authorization, msme emd exemption, about bid tender 4 u, tender consultancy ahmedabad, gem consultant ahmedabad, government tender advisory, public procurement experts, baldev singh ahmedabad',
    canonical: `${CANONICAL_BASE}/about-us`,
    breadcrumbTitle: 'About Us',
    h1: 'About Bid Tender 4 U - All India Tender Consultancy',
    lead: 'Trusted e-procurement advisory, GeM 4.0 vendor enrollment, and tender bid management firm headquartered in Isanpur, Ahmedabad, Gujarat.',
    keyPoints: [
      'Headquartered in Isanpur, Ahmedabad, Gujarat with Pan-India service coverage across 28 states and 50+ key cities.',
      'Proven track record with 1,500+ government tenders analyzed and 99.4% procedural bid acceptance rate.',
      'Cumulative bid value handled in excess of ₹500 Crores across central ministries, state boards, railways, and PSUs.',
      'Comprehensive procedural guidance on GFR 2017 Rule 170 EMD exemptions, DPIIT startup waivers, and ISO compliance.',
      'Direct client hotline: +91 9726407267 | Email: Tendergem42@gmail.com.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Full technical packaging and submission support.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Statutory GeM seller and OEM onboarding.' },
      { label: 'Client Success Stories', path: '/stories', desc: 'Real case studies of won government contracts.' },
      { label: 'Contact Us', path: '/contact-us', desc: 'Visit our Ahmedabad HQ or submit a tender document.' }
    ],
    pageType: 'website'
  },
  '/contact-us': {
    path: '/contact-us',
    title: 'Contact Tender & GeM Consultants | Bid Tender 4 U',
    description: 'Contact Bid Tender 4 U for instant tender document audits, GeM OEM Authorization support, and MSME EMD Exemption guidance. Call or WhatsApp +91 9726407267.',
    ogTitle: 'Contact Bid Tender 4 U | Submit Tender for Review',
    ogDescription: 'Get express 4-hour preliminary eligibility review. Consult senior officers on GeM OEM Authorization codes and MSME EMD Exemption under GFR 170.',
    keywords: 'gem oem authorization, msme emd exemption, contact bid tender 4 u, tender consultant phone number, submit tender document, ahmedabad tender consultancy office, gem support helpline',
    canonical: `${CANONICAL_BASE}/contact-us`,
    breadcrumbTitle: 'Contact Us',
    h1: 'Contact Us & Submit Tender Document for Audit',
    lead: 'Connect directly with senior tender bidding officers in Ahmedabad, Gujarat for express preliminary eligibility review, EMD assessment, and GeM onboarding.',
    keyPoints: [
      'Registered Office: Murlidhar 3, Near Jay Bholenath Sales, Isanpur, Ahmedabad, Gujarat 382440.',
      'Official Helpline: +91 97264 07267 (Calls & WhatsApp desk).',
      'Official Email: Tendergem42@gmail.com.',
      'Consultancy Working Hours: Monday to Saturday, 9:30 AM to 7:30 PM IST.',
      'Express 4-hour preliminary eligibility audit for urgent closing tenders.'
    ],
    relatedLinks: [
      { label: 'Tender Bidding Consultancy', path: '/tender-bidding-consultancy', desc: 'Full bid preparation and technical folder review.' },
      { label: 'GeM Registration', path: '/gem-registration', desc: 'Primary seller, OEM and reseller onboarding checklist.' },
      { label: 'Free Tender Summary', path: '/free-tender-summary', desc: 'Instant extraction of key tender parameters.' },
      { label: 'Payment Details', path: '/payment-details', desc: 'Official UPI and banking payment information.' }
    ],
    pageType: 'website'
  },
  '/about': {
    path: '/about-us',
    title: 'About Bid Tender 4 U - Tender & GeM Consultants',
    description: 'India\'s premier government tender advisory in Ahmedabad. Specialists in GeM OEM Authorization codes, MSME EMD Exemption under GFR 170 & zero-error bid filing.',
    ogTitle: 'About Bid Tender 4 U: Premier Tender Consultants',
    ogDescription: 'Headquartered in Ahmedabad, Gujarat. Over 1,500+ analyzed bids, ₹500 Cr+ awarded. Trusted for GeM OEM Authorization and MSME EMD Exemption consultancy.',
    canonical: `${CANONICAL_BASE}/about-us`,
    breadcrumbTitle: 'About Us',
    h1: 'About Bid Tender 4 U - All India Tender Consultancy',
    lead: 'Trusted e-procurement advisory and tender bid management firm.',
    keyPoints: [
      'Headquartered in Isanpur, Ahmedabad, Gujarat with nationwide coverage.',
      'Over 1,500+ government tenders analyzed with 99.4% acceptance rate.'
    ],
    relatedLinks: [
      { label: 'Contact Us', path: '/contact-us', desc: 'Get in touch with our specialists.' }
    ],
    pageType: 'website'
  },
  '/contact': {
    path: '/contact-us',
    title: 'Contact Tender & GeM Consultants | Bid Tender 4 U',
    description: 'Contact Bid Tender 4 U for instant tender document audits, GeM OEM Authorization support, and MSME EMD Exemption guidance. Call or WhatsApp +91 9726407267.',
    ogTitle: 'Contact Bid Tender 4 U | Submit Tender for Review',
    ogDescription: 'Get express 4-hour preliminary eligibility review. Consult senior officers on GeM OEM Authorization codes and MSME EMD Exemption under GFR 170.',
    canonical: `${CANONICAL_BASE}/contact-us`,
    breadcrumbTitle: 'Contact Us',
    h1: 'Contact Us & Submit Tender Document for Audit',
    lead: 'Connect with senior tender bidding officers in Ahmedabad, Gujarat.',
    keyPoints: [
      'Registered Office: Isanpur, Ahmedabad, Gujarat 382440.',
      'Official Helpline: +91 97264 07267.'
    ],
    relatedLinks: [
      { label: 'About Us', path: '/about-us', desc: 'Company credentials and office location.' }
    ],
    pageType: 'website'
  }
};
