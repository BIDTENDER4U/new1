export interface TenderKeywordItem {
  id: string; // slug e.g. 'road-construction-tenders'
  name: string; // e.g. 'Road Construction Tenders'
  shortName: string; // e.g. 'Road Construction'
  category: string;
  letter: string; // 'A' through 'Z'
  description: string;
  typicalPortals: string[];
  mandatoryDocs: string[];
  sampleTenderValue: string;
  tenderTypes: string[];
  keywords: string[];
}

export const TENDER_KEYWORDS_DATA: TenderKeywordItem[] = [
  {
    "id": "agricultural-equipment-tenders",
    "name": "Agricultural Equipment Tenders",
    "shortName": "Agricultural Equipment",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Agricultural Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "agricultural equipment tenders",
      "agricultural equipment tender consultancy",
      "agricultural equipment bidding services",
      "agricultural equipment gem portal",
      "agricultural equipment government contract"
    ]
  },
  {
    "id": "agriculture-services-tenders",
    "name": "Agriculture Services Tenders",
    "shortName": "Agriculture Services",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Agriculture Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "agriculture services tenders",
      "agriculture services tender consultancy",
      "agriculture services bidding services",
      "agriculture services gem portal",
      "agriculture services government contract"
    ]
  },
  {
    "id": "air-conditioning-tenders",
    "name": "Air Conditioning Tenders",
    "shortName": "Air Conditioning",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Air Conditioning tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "air conditioning tenders",
      "air conditioning tender consultancy",
      "air conditioning bidding services",
      "air conditioning gem portal",
      "air conditioning government contract"
    ]
  },
  {
    "id": "airport-services-tenders",
    "name": "Airport Services Tenders",
    "shortName": "Airport Services",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Airport Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "airport services tenders",
      "airport services tender consultancy",
      "airport services bidding services",
      "airport services gem portal",
      "airport services government contract"
    ]
  },
  {
    "id": "ambulance-services-tenders",
    "name": "Ambulance Services Tenders",
    "shortName": "Ambulance Services",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Ambulance Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "ambulance services tenders",
      "ambulance services tender consultancy",
      "ambulance services bidding services",
      "ambulance services gem portal",
      "ambulance services government contract"
    ]
  },
  {
    "id": "animal-feed-supply-tenders",
    "name": "Animal Feed Supply Tenders",
    "shortName": "Animal Feed Supply",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Animal Feed Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "animal feed supply tenders",
      "animal feed supply tender consultancy",
      "animal feed supply bidding services",
      "animal feed supply gem portal",
      "animal feed supply government contract"
    ]
  },
  {
    "id": "architectural-consultancy-tenders",
    "name": "Architectural Consultancy Tenders",
    "shortName": "Architectural Consultancy",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Architectural Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "architectural consultancy tenders",
      "architectural consultancy tender consultancy",
      "architectural consultancy bidding services",
      "architectural consultancy gem portal",
      "architectural consultancy government contract"
    ]
  },
  {
    "id": "asset-management-tenders",
    "name": "Asset Management Tenders",
    "shortName": "Asset Management",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Asset Management tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "asset management tenders",
      "asset management tender consultancy",
      "asset management bidding services",
      "asset management gem portal",
      "asset management government contract"
    ]
  },
  {
    "id": "audit-services-tenders",
    "name": "Audit Services Tenders",
    "shortName": "Audit Services",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Audit Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "audit services tenders",
      "audit services tender consultancy",
      "audit services bidding services",
      "audit services gem portal",
      "audit services government contract"
    ]
  },
  {
    "id": "automation-systems-tenders",
    "name": "Automation Systems Tenders",
    "shortName": "Automation Systems",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Automation Systems tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "automation systems tenders",
      "automation systems tender consultancy",
      "automation systems bidding services",
      "automation systems gem portal",
      "automation systems government contract"
    ]
  },
  {
    "id": "annual-maintenance-contract-tenders",
    "name": "Annual Maintenance Contract Tenders",
    "shortName": "Annual Maintenance Contract",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Annual Maintenance Contract tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "annual maintenance contract tenders",
      "annual maintenance contract tender consultancy",
      "annual maintenance contract bidding services",
      "annual maintenance contract gem portal",
      "annual maintenance contract government contract"
    ]
  },
  {
    "id": "advertising-services-tenders",
    "name": "Advertising Services Tenders",
    "shortName": "Advertising Services",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Advertising Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "advertising services tenders",
      "advertising services tender consultancy",
      "advertising services bidding services",
      "advertising services gem portal",
      "advertising services government contract"
    ]
  },
  {
    "id": "apparel-supply-tenders",
    "name": "Apparel Supply Tenders",
    "shortName": "Apparel Supply",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Apparel Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "apparel supply tenders",
      "apparel supply tender consultancy",
      "apparel supply bidding services",
      "apparel supply gem portal",
      "apparel supply government contract"
    ]
  },
  {
    "id": "audio-visual-equipment-tenders",
    "name": "Audio Visual Equipment Tenders",
    "shortName": "Audio Visual Equipment",
    "category": "Agriculture & Administration",
    "letter": "A",
    "description": "End-to-end tender consultancy for Audio Visual Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "audio visual equipment tenders",
      "audio visual equipment tender consultancy",
      "audio visual equipment bidding services",
      "audio visual equipment gem portal",
      "audio visual equipment government contract"
    ]
  },
  {
    "id": "building-construction-tenders",
    "name": "Building Construction Tenders",
    "shortName": "Building Construction",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Building Construction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "building construction tenders",
      "building construction tender consultancy",
      "building construction bidding services",
      "building construction gem portal",
      "building construction government contract"
    ]
  },
  {
    "id": "building-maintenance-tenders",
    "name": "Building Maintenance Tenders",
    "shortName": "Building Maintenance",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Building Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "building maintenance tenders",
      "building maintenance tender consultancy",
      "building maintenance bidding services",
      "building maintenance gem portal",
      "building maintenance government contract"
    ]
  },
  {
    "id": "biomedical-equipment-tenders",
    "name": "Biomedical Equipment Tenders",
    "shortName": "Biomedical Equipment",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Biomedical Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0",
      "National Health Mission (NHM)",
      "AIIMS / ESIC eProcure",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "biomedical equipment tenders",
      "biomedical equipment tender consultancy",
      "biomedical equipment bidding services",
      "biomedical equipment gem portal",
      "biomedical equipment government contract"
    ]
  },
  {
    "id": "banking-services-tenders",
    "name": "Banking Services Tenders",
    "shortName": "Banking Services",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Banking Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "banking services tenders",
      "banking services tender consultancy",
      "banking services bidding services",
      "banking services gem portal",
      "banking services government contract"
    ]
  },
  {
    "id": "barricading-work-tenders",
    "name": "Barricading Work Tenders",
    "shortName": "Barricading Work",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Barricading Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "barricading work tenders",
      "barricading work tender consultancy",
      "barricading work bidding services",
      "barricading work gem portal",
      "barricading work government contract"
    ]
  },
  {
    "id": "battery-supply-tenders",
    "name": "Battery Supply Tenders",
    "shortName": "Battery Supply",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Battery Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "battery supply tenders",
      "battery supply tender consultancy",
      "battery supply bidding services",
      "battery supply gem portal",
      "battery supply government contract"
    ]
  },
  {
    "id": "bio-medical-waste-management-tenders",
    "name": "Bio-Medical Waste Management Tenders",
    "shortName": "Bio-Medical Waste Management",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Bio-Medical Waste Management tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "bio-medical waste management tenders",
      "bio-medical waste management tender consultancy",
      "bio-medical waste management bidding services",
      "bio-medical waste management gem portal",
      "bio-medical waste management government contract"
    ]
  },
  {
    "id": "bus-hiring-tenders",
    "name": "Bus Hiring Tenders",
    "shortName": "Bus Hiring",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Bus Hiring tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "bus hiring tenders",
      "bus hiring tender consultancy",
      "bus hiring bidding services",
      "bus hiring gem portal",
      "bus hiring government contract"
    ]
  },
  {
    "id": "bus-body-building-tenders",
    "name": "Bus Body Building Tenders",
    "shortName": "Bus Body Building",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Bus Body Building tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "bus body building tenders",
      "bus body building tender consultancy",
      "bus body building bidding services",
      "bus body building gem portal",
      "bus body building government contract"
    ]
  },
  {
    "id": "borewell-drilling-tenders",
    "name": "Borewell Drilling Tenders",
    "shortName": "Borewell Drilling",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Borewell Drilling tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "borewell drilling tenders",
      "borewell drilling tender consultancy",
      "borewell drilling bidding services",
      "borewell drilling gem portal",
      "borewell drilling government contract"
    ]
  },
  {
    "id": "bridge-construction-tenders",
    "name": "Bridge Construction Tenders",
    "shortName": "Bridge Construction",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Bridge Construction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "NHAI Portal",
      "State PWD (nProcure/SPPP)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Crore to ₹150+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "bridge construction tenders",
      "bridge construction tender consultancy",
      "bridge construction bidding services",
      "bridge construction gem portal",
      "bridge construction government contract"
    ]
  },
  {
    "id": "book-printing-tenders",
    "name": "Book Printing Tenders",
    "shortName": "Book Printing",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Book Printing tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "book printing tenders",
      "book printing tender consultancy",
      "book printing bidding services",
      "book printing gem portal",
      "book printing government contract"
    ]
  },
  {
    "id": "business-consultancy-tenders",
    "name": "Business Consultancy Tenders",
    "shortName": "Business Consultancy",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Business Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "business consultancy tenders",
      "business consultancy tender consultancy",
      "business consultancy bidding services",
      "business consultancy gem portal",
      "business consultancy government contract"
    ]
  },
  {
    "id": "broadband-services-tenders",
    "name": "Broadband Services Tenders",
    "shortName": "Broadband Services",
    "category": "Building & Business",
    "letter": "B",
    "description": "End-to-end tender consultancy for Broadband Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "NHAI Portal",
      "State PWD (nProcure/SPPP)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "broadband services tenders",
      "broadband services tender consultancy",
      "broadband services bidding services",
      "broadband services gem portal",
      "broadband services government contract"
    ]
  },
  {
    "id": "civil-works-tenders",
    "name": "Civil Works Tenders",
    "shortName": "Civil Works",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Civil Works tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "civil works tenders",
      "civil works tender consultancy",
      "civil works bidding services",
      "civil works gem portal",
      "civil works government contract"
    ]
  },
  {
    "id": "construction-tenders",
    "name": "Construction Tenders",
    "shortName": "Construction",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Construction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "construction tenders",
      "construction tender consultancy",
      "construction bidding services",
      "construction gem portal",
      "construction government contract"
    ]
  },
  {
    "id": "construction-materials-tenders",
    "name": "Construction Materials Tenders",
    "shortName": "Construction Materials",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Construction Materials tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "construction materials tenders",
      "construction materials tender consultancy",
      "construction materials bidding services",
      "construction materials gem portal",
      "construction materials government contract"
    ]
  },
  {
    "id": "cctv-installation-tenders",
    "name": "CCTV Installation Tenders",
    "shortName": "CCTV Installation",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for CCTV Installation tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Security Services",
      "CPPP",
      "Police Housing Corp",
      "State Boards"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "cctv installation tenders",
      "cctv installation tender consultancy",
      "cctv installation bidding services",
      "cctv installation gem portal",
      "cctv installation government contract"
    ]
  },
  {
    "id": "cleaning-services-tenders",
    "name": "Cleaning Services Tenders",
    "shortName": "Cleaning Services",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Cleaning Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PSARA / Labour Commissioner Registration & EPF/ESIC",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Lakhs to ₹3 Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "cleaning services tenders",
      "cleaning services tender consultancy",
      "cleaning services bidding services",
      "cleaning services gem portal",
      "cleaning services government contract"
    ]
  },
  {
    "id": "computer-hardware-tenders",
    "name": "Computer Hardware Tenders",
    "shortName": "Computer Hardware",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Computer Hardware tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "computer hardware tenders",
      "computer hardware tender consultancy",
      "computer hardware bidding services",
      "computer hardware gem portal",
      "computer hardware government contract"
    ]
  },
  {
    "id": "computer-software-tenders",
    "name": "Computer Software Tenders",
    "shortName": "Computer Software",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Computer Software tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "computer software tenders",
      "computer software tender consultancy",
      "computer software bidding services",
      "computer software gem portal",
      "computer software government contract"
    ]
  },
  {
    "id": "consultancy-services-tenders",
    "name": "Consultancy Services Tenders",
    "shortName": "Consultancy Services",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Consultancy Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "consultancy services tenders",
      "consultancy services tender consultancy",
      "consultancy services bidding services",
      "consultancy services gem portal",
      "consultancy services government contract"
    ]
  },
  {
    "id": "catering-services-tenders",
    "name": "Catering Services Tenders",
    "shortName": "Catering Services",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Catering Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "catering services tenders",
      "catering services tender consultancy",
      "catering services bidding services",
      "catering services gem portal",
      "catering services government contract"
    ]
  },
  {
    "id": "car-hiring-tenders",
    "name": "Car Hiring Tenders",
    "shortName": "Car Hiring",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Car Hiring tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "car hiring tenders",
      "car hiring tender consultancy",
      "car hiring bidding services",
      "car hiring gem portal",
      "car hiring government contract"
    ]
  },
  {
    "id": "chemical-supply-tenders",
    "name": "Chemical Supply Tenders",
    "shortName": "Chemical Supply",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Chemical Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "chemical supply tenders",
      "chemical supply tender consultancy",
      "chemical supply bidding services",
      "chemical supply gem portal",
      "chemical supply government contract"
    ]
  },
  {
    "id": "chairs-supply-tenders",
    "name": "Chairs Supply Tenders",
    "shortName": "Chairs Supply",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Chairs Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "chairs supply tenders",
      "chairs supply tender consultancy",
      "chairs supply bidding services",
      "chairs supply gem portal",
      "chairs supply government contract"
    ]
  },
  {
    "id": "corporate-training-tenders",
    "name": "Corporate Training Tenders",
    "shortName": "Corporate Training",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Corporate Training tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "IREPS Indian Railways",
      "GeM 4.0",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "corporate training tenders",
      "corporate training tender consultancy",
      "corporate training bidding services",
      "corporate training gem portal",
      "corporate training government contract"
    ]
  },
  {
    "id": "courier-services-tenders",
    "name": "Courier Services Tenders",
    "shortName": "Courier Services",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Courier Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "courier services tenders",
      "courier services tender consultancy",
      "courier services bidding services",
      "courier services gem portal",
      "courier services government contract"
    ]
  },
  {
    "id": "cyber-security-tenders",
    "name": "Cyber Security Tenders",
    "shortName": "Cyber Security",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Cyber Security tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "PSARA / Labour Commissioner Registration & EPF/ESIC",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "cyber security tenders",
      "cyber security tender consultancy",
      "cyber security bidding services",
      "cyber security gem portal",
      "cyber security government contract"
    ]
  },
  {
    "id": "cold-storage-tenders",
    "name": "Cold Storage Tenders",
    "shortName": "Cold Storage",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Cold Storage tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "cold storage tenders",
      "cold storage tender consultancy",
      "cold storage bidding services",
      "cold storage gem portal",
      "cold storage government contract"
    ]
  },
  {
    "id": "concrete-work-tenders",
    "name": "Concrete Work Tenders",
    "shortName": "Concrete Work",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Concrete Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "concrete work tenders",
      "concrete work tender consultancy",
      "concrete work bidding services",
      "concrete work gem portal",
      "concrete work government contract"
    ]
  },
  {
    "id": "campus-development-tenders",
    "name": "Campus Development Tenders",
    "shortName": "Campus Development",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Campus Development tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "campus development tenders",
      "campus development tender consultancy",
      "campus development bidding services",
      "campus development gem portal",
      "campus development government contract"
    ]
  },
  {
    "id": "calibration-services-tenders",
    "name": "Calibration Services Tenders",
    "shortName": "Calibration Services",
    "category": "Civil & Construction",
    "letter": "C",
    "description": "End-to-end tender consultancy for Calibration Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "State PWD (nProcure/SPPP)",
      "Military Engineer Services (MES)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "calibration services tenders",
      "calibration services tender consultancy",
      "calibration services bidding services",
      "calibration services gem portal",
      "calibration services government contract"
    ]
  },
  {
    "id": "data-entry-services-tenders",
    "name": "Data Entry Services Tenders",
    "shortName": "Data Entry Services",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Data Entry Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "data entry services tenders",
      "data entry services tender consultancy",
      "data entry services bidding services",
      "data entry services gem portal",
      "data entry services government contract"
    ]
  },
  {
    "id": "data-center-tenders",
    "name": "Data Center Tenders",
    "shortName": "Data Center",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Data Center tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Crore to ₹150+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "data center tenders",
      "data center tender consultancy",
      "data center bidding services",
      "data center gem portal",
      "data center government contract"
    ]
  },
  {
    "id": "database-management-tenders",
    "name": "Database Management Tenders",
    "shortName": "Database Management",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Database Management tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "database management tenders",
      "database management tender consultancy",
      "database management bidding services",
      "database management gem portal",
      "database management government contract"
    ]
  },
  {
    "id": "diesel-supply-tenders",
    "name": "Diesel Supply Tenders",
    "shortName": "Diesel Supply",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Diesel Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "diesel supply tenders",
      "diesel supply tender consultancy",
      "diesel supply bidding services",
      "diesel supply gem portal",
      "diesel supply government contract"
    ]
  },
  {
    "id": "digital-marketing-tenders",
    "name": "Digital Marketing Tenders",
    "shortName": "Digital Marketing",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Digital Marketing tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "digital marketing tenders",
      "digital marketing tender consultancy",
      "digital marketing bidding services",
      "digital marketing gem portal",
      "digital marketing government contract"
    ]
  },
  {
    "id": "digital-signature-certificate-tenders",
    "name": "Digital Signature Certificate Tenders",
    "shortName": "Digital Signature Certificate",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Digital Signature Certificate tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "digital signature certificate tenders",
      "digital signature certificate tender consultancy",
      "digital signature certificate bidding services",
      "digital signature certificate gem portal",
      "digital signature certificate government contract"
    ]
  },
  {
    "id": "diesel-generator-tenders",
    "name": "Diesel Generator Tenders",
    "shortName": "Diesel Generator",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Diesel Generator tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "diesel generator tenders",
      "diesel generator tender consultancy",
      "diesel generator bidding services",
      "diesel generator gem portal",
      "diesel generator government contract"
    ]
  },
  {
    "id": "drainage-work-tenders",
    "name": "Drainage Work Tenders",
    "shortName": "Drainage Work",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Drainage Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "drainage work tenders",
      "drainage work tender consultancy",
      "drainage work bidding services",
      "drainage work gem portal",
      "drainage work government contract"
    ]
  },
  {
    "id": "drinking-water-supply-tenders",
    "name": "Drinking Water Supply Tenders",
    "shortName": "Drinking Water Supply",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Drinking Water Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "drinking water supply tenders",
      "drinking water supply tender consultancy",
      "drinking water supply bidding services",
      "drinking water supply gem portal",
      "drinking water supply government contract"
    ]
  },
  {
    "id": "demolition-work-tenders",
    "name": "Demolition Work Tenders",
    "shortName": "Demolition Work",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Demolition Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "demolition work tenders",
      "demolition work tender consultancy",
      "demolition work bidding services",
      "demolition work gem portal",
      "demolition work government contract"
    ]
  },
  {
    "id": "diagnostic-equipment-tenders",
    "name": "Diagnostic Equipment Tenders",
    "shortName": "Diagnostic Equipment",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Diagnostic Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0",
      "National Health Mission (NHM)",
      "AIIMS / ESIC eProcure",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "diagnostic equipment tenders",
      "diagnostic equipment tender consultancy",
      "diagnostic equipment bidding services",
      "diagnostic equipment gem portal",
      "diagnostic equipment government contract"
    ]
  },
  {
    "id": "document-scanning-tenders",
    "name": "Document Scanning Tenders",
    "shortName": "Document Scanning",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Document Scanning tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "document scanning tenders",
      "document scanning tender consultancy",
      "document scanning bidding services",
      "document scanning gem portal",
      "document scanning government contract"
    ]
  },
  {
    "id": "dairy-products-tenders",
    "name": "Dairy Products Tenders",
    "shortName": "Dairy Products",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Dairy Products tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "dairy products tenders",
      "dairy products tender consultancy",
      "dairy products bidding services",
      "dairy products gem portal",
      "dairy products government contract"
    ]
  },
  {
    "id": "desktop-computers-tenders",
    "name": "Desktop Computers Tenders",
    "shortName": "Desktop Computers",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Desktop Computers tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "desktop computers tenders",
      "desktop computers tender consultancy",
      "desktop computers bidding services",
      "desktop computers gem portal",
      "desktop computers government contract"
    ]
  },
  {
    "id": "disinfection-services-tenders",
    "name": "Disinfection Services Tenders",
    "shortName": "Disinfection Services",
    "category": "Development & Distribution",
    "letter": "D",
    "description": "End-to-end tender consultancy for Disinfection Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "disinfection services tenders",
      "disinfection services tender consultancy",
      "disinfection services bidding services",
      "disinfection services gem portal",
      "disinfection services government contract"
    ]
  },
  {
    "id": "electrical-works-tenders",
    "name": "Electrical Works Tenders",
    "shortName": "Electrical Works",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Electrical Works tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "State DISCOM / GETCO",
      "NTPC / BHEL",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "electrical works tenders",
      "electrical works tender consultancy",
      "electrical works bidding services",
      "electrical works gem portal",
      "electrical works government contract"
    ]
  },
  {
    "id": "electrical-equipment-tenders",
    "name": "Electrical Equipment Tenders",
    "shortName": "Electrical Equipment",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Electrical Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "State DISCOM / GETCO",
      "NTPC / BHEL",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "electrical equipment tenders",
      "electrical equipment tender consultancy",
      "electrical equipment bidding services",
      "electrical equipment gem portal",
      "electrical equipment government contract"
    ]
  },
  {
    "id": "electronics-supply-tenders",
    "name": "Electronics Supply Tenders",
    "shortName": "Electronics Supply",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Electronics Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "electronics supply tenders",
      "electronics supply tender consultancy",
      "electronics supply bidding services",
      "electronics supply gem portal",
      "electronics supply government contract"
    ]
  },
  {
    "id": "elevator-installation-tenders",
    "name": "Elevator Installation Tenders",
    "shortName": "Elevator Installation",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Elevator Installation tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "elevator installation tenders",
      "elevator installation tender consultancy",
      "elevator installation bidding services",
      "elevator installation gem portal",
      "elevator installation government contract"
    ]
  },
  {
    "id": "energy-audit-tenders",
    "name": "Energy Audit Tenders",
    "shortName": "Energy Audit",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Energy Audit tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "energy audit tenders",
      "energy audit tender consultancy",
      "energy audit bidding services",
      "energy audit gem portal",
      "energy audit government contract"
    ]
  },
  {
    "id": "engineering-consultancy-tenders",
    "name": "Engineering Consultancy Tenders",
    "shortName": "Engineering Consultancy",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Engineering Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "engineering consultancy tenders",
      "engineering consultancy tender consultancy",
      "engineering consultancy bidding services",
      "engineering consultancy gem portal",
      "engineering consultancy government contract"
    ]
  },
  {
    "id": "earthwork-tenders",
    "name": "Earthwork Tenders",
    "shortName": "Earthwork",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Earthwork tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "earthwork tenders",
      "earthwork tender consultancy",
      "earthwork bidding services",
      "earthwork gem portal",
      "earthwork government contract"
    ]
  },
  {
    "id": "electric-vehicle-tenders",
    "name": "Electric Vehicle Tenders",
    "shortName": "Electric Vehicle",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Electric Vehicle tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "electric vehicle tenders",
      "electric vehicle tender consultancy",
      "electric vehicle bidding services",
      "electric vehicle gem portal",
      "electric vehicle government contract"
    ]
  },
  {
    "id": "electric-bus-supply-tenders",
    "name": "Electric Bus Supply Tenders",
    "shortName": "Electric Bus Supply",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Electric Bus Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "electric bus supply tenders",
      "electric bus supply tender consultancy",
      "electric bus supply bidding services",
      "electric bus supply gem portal",
      "electric bus supply government contract"
    ]
  },
  {
    "id": "electrical-maintenance-tenders",
    "name": "Electrical Maintenance Tenders",
    "shortName": "Electrical Maintenance",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Electrical Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "State DISCOM / GETCO",
      "NTPC / BHEL",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "electrical maintenance tenders",
      "electrical maintenance tender consultancy",
      "electrical maintenance bidding services",
      "electrical maintenance gem portal",
      "electrical maintenance government contract"
    ]
  },
  {
    "id": "e-tendering-services-tenders",
    "name": "E-Tendering Services Tenders",
    "shortName": "E-Tendering Services",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for E-Tendering Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "e-tendering services tenders",
      "e-tendering services tender consultancy",
      "e-tendering services bidding services",
      "e-tendering services gem portal",
      "e-tendering services government contract"
    ]
  },
  {
    "id": "environmental-consultancy-tenders",
    "name": "Environmental Consultancy Tenders",
    "shortName": "Environmental Consultancy",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Environmental Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "environmental consultancy tenders",
      "environmental consultancy tender consultancy",
      "environmental consultancy bidding services",
      "environmental consultancy gem portal",
      "environmental consultancy government contract"
    ]
  },
  {
    "id": "excavation-work-tenders",
    "name": "Excavation Work Tenders",
    "shortName": "Excavation Work",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Excavation Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "excavation work tenders",
      "excavation work tender consultancy",
      "excavation work bidding services",
      "excavation work gem portal",
      "excavation work government contract"
    ]
  },
  {
    "id": "exhibition-management-tenders",
    "name": "Exhibition Management Tenders",
    "shortName": "Exhibition Management",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Exhibition Management tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "exhibition management tenders",
      "exhibition management tender consultancy",
      "exhibition management bidding services",
      "exhibition management gem portal",
      "exhibition management government contract"
    ]
  },
  {
    "id": "emergency-lighting-tenders",
    "name": "Emergency Lighting Tenders",
    "shortName": "Emergency Lighting",
    "category": "Electrical & Engineering",
    "letter": "E",
    "description": "End-to-end tender consultancy for Emergency Lighting tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "emergency lighting tenders",
      "emergency lighting tender consultancy",
      "emergency lighting bidding services",
      "emergency lighting gem portal",
      "emergency lighting government contract"
    ]
  },
  {
    "id": "facility-management-tenders",
    "name": "Facility Management Tenders",
    "shortName": "Facility Management",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Facility Management tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "facility management tenders",
      "facility management tender consultancy",
      "facility management bidding services",
      "facility management gem portal",
      "facility management government contract"
    ]
  },
  {
    "id": "fire-fighting-equipment-tenders",
    "name": "Fire Fighting Equipment Tenders",
    "shortName": "Fire Fighting Equipment",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Fire Fighting Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "fire fighting equipment tenders",
      "fire fighting equipment tender consultancy",
      "fire fighting equipment bidding services",
      "fire fighting equipment gem portal",
      "fire fighting equipment government contract"
    ]
  },
  {
    "id": "fire-safety-services-tenders",
    "name": "Fire Safety Services Tenders",
    "shortName": "Fire Safety Services",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Fire Safety Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "fire safety services tenders",
      "fire safety services tender consultancy",
      "fire safety services bidding services",
      "fire safety services gem portal",
      "fire safety services government contract"
    ]
  },
  {
    "id": "furniture-supply-tenders",
    "name": "Furniture Supply Tenders",
    "shortName": "Furniture Supply",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Furniture Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "furniture supply tenders",
      "furniture supply tender consultancy",
      "furniture supply bidding services",
      "furniture supply gem portal",
      "furniture supply government contract"
    ]
  },
  {
    "id": "food-supply-tenders",
    "name": "Food Supply Tenders",
    "shortName": "Food Supply",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Food Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "food supply tenders",
      "food supply tender consultancy",
      "food supply bidding services",
      "food supply gem portal",
      "food supply government contract"
    ]
  },
  {
    "id": "fertilizer-supply-tenders",
    "name": "Fertilizer Supply Tenders",
    "shortName": "Fertilizer Supply",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Fertilizer Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "fertilizer supply tenders",
      "fertilizer supply tender consultancy",
      "fertilizer supply bidding services",
      "fertilizer supply gem portal",
      "fertilizer supply government contract"
    ]
  },
  {
    "id": "flooring-work-tenders",
    "name": "Flooring Work Tenders",
    "shortName": "Flooring Work",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Flooring Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "flooring work tenders",
      "flooring work tender consultancy",
      "flooring work bidding services",
      "flooring work gem portal",
      "flooring work government contract"
    ]
  },
  {
    "id": "fleet-management-tenders",
    "name": "Fleet Management Tenders",
    "shortName": "Fleet Management",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Fleet Management tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "fleet management tenders",
      "fleet management tender consultancy",
      "fleet management bidding services",
      "fleet management gem portal",
      "fleet management government contract"
    ]
  },
  {
    "id": "footwear-supply-tenders",
    "name": "Footwear Supply Tenders",
    "shortName": "Footwear Supply",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Footwear Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "footwear supply tenders",
      "footwear supply tender consultancy",
      "footwear supply bidding services",
      "footwear supply gem portal",
      "footwear supply government contract"
    ]
  },
  {
    "id": "fabric-supply-tenders",
    "name": "Fabric Supply Tenders",
    "shortName": "Fabric Supply",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Fabric Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "fabric supply tenders",
      "fabric supply tender consultancy",
      "fabric supply bidding services",
      "fabric supply gem portal",
      "fabric supply government contract"
    ]
  },
  {
    "id": "fencing-work-tenders",
    "name": "Fencing Work Tenders",
    "shortName": "Fencing Work",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Fencing Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "fencing work tenders",
      "fencing work tender consultancy",
      "fencing work bidding services",
      "fencing work gem portal",
      "fencing work government contract"
    ]
  },
  {
    "id": "filtration-plant-tenders",
    "name": "Filtration Plant Tenders",
    "shortName": "Filtration Plant",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Filtration Plant tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "filtration plant tenders",
      "filtration plant tender consultancy",
      "filtration plant bidding services",
      "filtration plant gem portal",
      "filtration plant government contract"
    ]
  },
  {
    "id": "financial-consultancy-tenders",
    "name": "Financial Consultancy Tenders",
    "shortName": "Financial Consultancy",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Financial Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "financial consultancy tenders",
      "financial consultancy tender consultancy",
      "financial consultancy bidding services",
      "financial consultancy gem portal",
      "financial consultancy government contract"
    ]
  },
  {
    "id": "freight-services-tenders",
    "name": "Freight Services Tenders",
    "shortName": "Freight Services",
    "category": "Facilities & Food",
    "letter": "F",
    "description": "End-to-end tender consultancy for Freight Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "freight services tenders",
      "freight services tender consultancy",
      "freight services bidding services",
      "freight services gem portal",
      "freight services government contract"
    ]
  },
  {
    "id": "gem-registration-services-tenders",
    "name": "GeM Registration Services Tenders",
    "shortName": "GeM Registration Services",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for GeM Registration Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "gem registration services tenders",
      "gem registration services tender consultancy",
      "gem registration services bidding services",
      "gem registration services gem portal",
      "gem registration services government contract"
    ]
  },
  {
    "id": "general-civil-works-tenders",
    "name": "General Civil Works Tenders",
    "shortName": "General Civil Works",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for General Civil Works tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "general civil works tenders",
      "general civil works tender consultancy",
      "general civil works bidding services",
      "general civil works gem portal",
      "general civil works government contract"
    ]
  },
  {
    "id": "generator-supply-tenders",
    "name": "Generator Supply Tenders",
    "shortName": "Generator Supply",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Generator Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "generator supply tenders",
      "generator supply tender consultancy",
      "generator supply bidding services",
      "generator supply gem portal",
      "generator supply government contract"
    ]
  },
  {
    "id": "government-building-maintenance-tenders",
    "name": "Government Building Maintenance Tenders",
    "shortName": "Government Building Maintenance",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Government Building Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "government building maintenance tenders",
      "government building maintenance tender consultancy",
      "government building maintenance bidding services",
      "government building maintenance gem portal",
      "government building maintenance government contract"
    ]
  },
  {
    "id": "garbage-collection-tenders",
    "name": "Garbage Collection Tenders",
    "shortName": "Garbage Collection",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Garbage Collection tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "garbage collection tenders",
      "garbage collection tender consultancy",
      "garbage collection bidding services",
      "garbage collection gem portal",
      "garbage collection government contract"
    ]
  },
  {
    "id": "gardening-services-tenders",
    "name": "Gardening Services Tenders",
    "shortName": "Gardening Services",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Gardening Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "gardening services tenders",
      "gardening services tender consultancy",
      "gardening services bidding services",
      "gardening services gem portal",
      "gardening services government contract"
    ]
  },
  {
    "id": "gas-pipeline-work-tenders",
    "name": "Gas Pipeline Work Tenders",
    "shortName": "Gas Pipeline Work",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Gas Pipeline Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Crore to ₹150+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "gas pipeline work tenders",
      "gas pipeline work tender consultancy",
      "gas pipeline work bidding services",
      "gas pipeline work gem portal",
      "gas pipeline work government contract"
    ]
  },
  {
    "id": "gis-mapping-tenders",
    "name": "GIS Mapping Tenders",
    "shortName": "GIS Mapping",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for GIS Mapping tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "gis mapping tenders",
      "gis mapping tender consultancy",
      "gis mapping bidding services",
      "gis mapping gem portal",
      "gis mapping government contract"
    ]
  },
  {
    "id": "goods-transportation-tenders",
    "name": "Goods Transportation Tenders",
    "shortName": "Goods Transportation",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Goods Transportation tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "goods transportation tenders",
      "goods transportation tender consultancy",
      "goods transportation bidding services",
      "goods transportation gem portal",
      "goods transportation government contract"
    ]
  },
  {
    "id": "grading-work-tenders",
    "name": "Grading Work Tenders",
    "shortName": "Grading Work",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Grading Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "grading work tenders",
      "grading work tender consultancy",
      "grading work bidding services",
      "grading work gem portal",
      "grading work government contract"
    ]
  },
  {
    "id": "green-energy-solutions-tenders",
    "name": "Green Energy Solutions Tenders",
    "shortName": "Green Energy Solutions",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Green Energy Solutions tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "green energy solutions tenders",
      "green energy solutions tender consultancy",
      "green energy solutions bidding services",
      "green energy solutions gem portal",
      "green energy solutions government contract"
    ]
  },
  {
    "id": "groundwater-survey-tenders",
    "name": "Groundwater Survey Tenders",
    "shortName": "Groundwater Survey",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Groundwater Survey tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "groundwater survey tenders",
      "groundwater survey tender consultancy",
      "groundwater survey bidding services",
      "groundwater survey gem portal",
      "groundwater survey government contract"
    ]
  },
  {
    "id": "gym-equipment-tenders",
    "name": "Gym Equipment Tenders",
    "shortName": "Gym Equipment",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Gym Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "gym equipment tenders",
      "gym equipment tender consultancy",
      "gym equipment bidding services",
      "gym equipment gem portal",
      "gym equipment government contract"
    ]
  },
  {
    "id": "guest-house-maintenance-tenders",
    "name": "Guest House Maintenance Tenders",
    "shortName": "Guest House Maintenance",
    "category": "Government & General Supply",
    "letter": "G",
    "description": "End-to-end tender consultancy for Guest House Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "guest house maintenance tenders",
      "guest house maintenance tender consultancy",
      "guest house maintenance bidding services",
      "guest house maintenance gem portal",
      "guest house maintenance government contract"
    ]
  },
  {
    "id": "hospital-equipment-tenders",
    "name": "Hospital Equipment Tenders",
    "shortName": "Hospital Equipment",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Hospital Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0",
      "National Health Mission (NHM)",
      "AIIMS / ESIC eProcure",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "hospital equipment tenders",
      "hospital equipment tender consultancy",
      "hospital equipment bidding services",
      "hospital equipment gem portal",
      "hospital equipment government contract"
    ]
  },
  {
    "id": "hospital-housekeeping-tenders",
    "name": "Hospital Housekeeping Tenders",
    "shortName": "Hospital Housekeeping",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Hospital Housekeeping tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0",
      "National Health Mission (NHM)",
      "AIIMS / ESIC eProcure",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PSARA / Labour Commissioner Registration & EPF/ESIC",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "hospital housekeeping tenders",
      "hospital housekeeping tender consultancy",
      "hospital housekeeping bidding services",
      "hospital housekeeping gem portal",
      "hospital housekeeping government contract"
    ]
  },
  {
    "id": "healthcare-services-tenders",
    "name": "Healthcare Services Tenders",
    "shortName": "Healthcare Services",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Healthcare Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "healthcare services tenders",
      "healthcare services tender consultancy",
      "healthcare services bidding services",
      "healthcare services gem portal",
      "healthcare services government contract"
    ]
  },
  {
    "id": "heat-pump-supply-tenders",
    "name": "Heat Pump Supply Tenders",
    "shortName": "Heat Pump Supply",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Heat Pump Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "heat pump supply tenders",
      "heat pump supply tender consultancy",
      "heat pump supply bidding services",
      "heat pump supply gem portal",
      "heat pump supply government contract"
    ]
  },
  {
    "id": "hvac-works-tenders",
    "name": "HVAC Works Tenders",
    "shortName": "HVAC Works",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for HVAC Works tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "hvac works tenders",
      "hvac works tender consultancy",
      "hvac works bidding services",
      "hvac works gem portal",
      "hvac works government contract"
    ]
  },
  {
    "id": "hotel-management-services-tenders",
    "name": "Hotel Management Services Tenders",
    "shortName": "Hotel Management Services",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Hotel Management Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "hotel management services tenders",
      "hotel management services tender consultancy",
      "hotel management services bidding services",
      "hotel management services gem portal",
      "hotel management services government contract"
    ]
  },
  {
    "id": "hostel-maintenance-tenders",
    "name": "Hostel Maintenance Tenders",
    "shortName": "Hostel Maintenance",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Hostel Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "hostel maintenance tenders",
      "hostel maintenance tender consultancy",
      "hostel maintenance bidding services",
      "hostel maintenance gem portal",
      "hostel maintenance government contract"
    ]
  },
  {
    "id": "housekeeping-services-tenders",
    "name": "Housekeeping Services Tenders",
    "shortName": "Housekeeping Services",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Housekeeping Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "PSARA / Labour Commissioner Registration & EPF/ESIC",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "housekeeping services tenders",
      "housekeeping services tender consultancy",
      "housekeeping services bidding services",
      "housekeeping services gem portal",
      "housekeeping services government contract"
    ]
  },
  {
    "id": "horticulture-services-tenders",
    "name": "Horticulture Services Tenders",
    "shortName": "Horticulture Services",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Horticulture Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "horticulture services tenders",
      "horticulture services tender consultancy",
      "horticulture services bidding services",
      "horticulture services gem portal",
      "horticulture services government contract"
    ]
  },
  {
    "id": "highway-construction-tenders",
    "name": "Highway Construction Tenders",
    "shortName": "Highway Construction",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Highway Construction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "NHAI Portal",
      "State PWD (nProcure/SPPP)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Crore to ₹150+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "highway construction tenders",
      "highway construction tender consultancy",
      "highway construction bidding services",
      "highway construction gem portal",
      "highway construction government contract"
    ]
  },
  {
    "id": "heavy-machinery-tenders",
    "name": "Heavy Machinery Tenders",
    "shortName": "Heavy Machinery",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Heavy Machinery tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "heavy machinery tenders",
      "heavy machinery tender consultancy",
      "heavy machinery bidding services",
      "heavy machinery gem portal",
      "heavy machinery government contract"
    ]
  },
  {
    "id": "human-resource-services-tenders",
    "name": "Human Resource Services Tenders",
    "shortName": "Human Resource Services",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Human Resource Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "human resource services tenders",
      "human resource services tender consultancy",
      "human resource services bidding services",
      "human resource services gem portal",
      "human resource services government contract"
    ]
  },
  {
    "id": "health-insurance-tenders",
    "name": "Health Insurance Tenders",
    "shortName": "Health Insurance",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Health Insurance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "health insurance tenders",
      "health insurance tender consultancy",
      "health insurance bidding services",
      "health insurance gem portal",
      "health insurance government contract"
    ]
  },
  {
    "id": "hydraulic-equipment-tenders",
    "name": "Hydraulic Equipment Tenders",
    "shortName": "Hydraulic Equipment",
    "category": "Healthcare & Hospitality",
    "letter": "H",
    "description": "End-to-end tender consultancy for Hydraulic Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "hydraulic equipment tenders",
      "hydraulic equipment tender consultancy",
      "hydraulic equipment bidding services",
      "hydraulic equipment gem portal",
      "hydraulic equipment government contract"
    ]
  },
  {
    "id": "it-services-tenders",
    "name": "IT Services Tenders",
    "shortName": "IT Services",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for IT Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "it services tenders",
      "it services tender consultancy",
      "it services bidding services",
      "it services gem portal",
      "it services government contract"
    ]
  },
  {
    "id": "it-hardware-supply-tenders",
    "name": "IT Hardware Supply Tenders",
    "shortName": "IT Hardware Supply",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for IT Hardware Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "it hardware supply tenders",
      "it hardware supply tender consultancy",
      "it hardware supply bidding services",
      "it hardware supply gem portal",
      "it hardware supply government contract"
    ]
  },
  {
    "id": "it-consultancy-tenders",
    "name": "IT Consultancy Tenders",
    "shortName": "IT Consultancy",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for IT Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "it consultancy tenders",
      "it consultancy tender consultancy",
      "it consultancy bidding services",
      "it consultancy gem portal",
      "it consultancy government contract"
    ]
  },
  {
    "id": "internet-services-tenders",
    "name": "Internet Services Tenders",
    "shortName": "Internet Services",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Internet Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "internet services tenders",
      "internet services tender consultancy",
      "internet services bidding services",
      "internet services gem portal",
      "internet services government contract"
    ]
  },
  {
    "id": "industrial-equipment-tenders",
    "name": "Industrial Equipment Tenders",
    "shortName": "Industrial Equipment",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Industrial Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "industrial equipment tenders",
      "industrial equipment tender consultancy",
      "industrial equipment bidding services",
      "industrial equipment gem portal",
      "industrial equipment government contract"
    ]
  },
  {
    "id": "infrastructure-development-tenders",
    "name": "Infrastructure Development Tenders",
    "shortName": "Infrastructure Development",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Infrastructure Development tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "infrastructure development tenders",
      "infrastructure development tender consultancy",
      "infrastructure development bidding services",
      "infrastructure development gem portal",
      "infrastructure development government contract"
    ]
  },
  {
    "id": "interior-design-tenders",
    "name": "Interior Design Tenders",
    "shortName": "Interior Design",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Interior Design tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "interior design tenders",
      "interior design tender consultancy",
      "interior design bidding services",
      "interior design gem portal",
      "interior design government contract"
    ]
  },
  {
    "id": "irrigation-works-tenders",
    "name": "Irrigation Works Tenders",
    "shortName": "Irrigation Works",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Irrigation Works tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "irrigation works tenders",
      "irrigation works tender consultancy",
      "irrigation works bidding services",
      "irrigation works gem portal",
      "irrigation works government contract"
    ]
  },
  {
    "id": "information-security-tenders",
    "name": "Information Security Tenders",
    "shortName": "Information Security",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Information Security tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "PSARA / Labour Commissioner Registration & EPF/ESIC",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "information security tenders",
      "information security tender consultancy",
      "information security bidding services",
      "information security gem portal",
      "information security government contract"
    ]
  },
  {
    "id": "integrated-security-systems-tenders",
    "name": "Integrated Security Systems Tenders",
    "shortName": "Integrated Security Systems",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Integrated Security Systems tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "PSARA / Labour Commissioner Registration & EPF/ESIC",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "integrated security systems tenders",
      "integrated security systems tender consultancy",
      "integrated security systems bidding services",
      "integrated security systems gem portal",
      "integrated security systems government contract"
    ]
  },
  {
    "id": "inspection-services-tenders",
    "name": "Inspection Services Tenders",
    "shortName": "Inspection Services",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Inspection Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "inspection services tenders",
      "inspection services tender consultancy",
      "inspection services bidding services",
      "inspection services gem portal",
      "inspection services government contract"
    ]
  },
  {
    "id": "installation-services-tenders",
    "name": "Installation Services Tenders",
    "shortName": "Installation Services",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Installation Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "installation services tenders",
      "installation services tender consultancy",
      "installation services bidding services",
      "installation services gem portal",
      "installation services government contract"
    ]
  },
  {
    "id": "industrial-chemicals-tenders",
    "name": "Industrial Chemicals Tenders",
    "shortName": "Industrial Chemicals",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Industrial Chemicals tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "industrial chemicals tenders",
      "industrial chemicals tender consultancy",
      "industrial chemicals bidding services",
      "industrial chemicals gem portal",
      "industrial chemicals government contract"
    ]
  },
  {
    "id": "instrument-calibration-tenders",
    "name": "Instrument Calibration Tenders",
    "shortName": "Instrument Calibration",
    "category": "IT & Infrastructure",
    "letter": "I",
    "description": "End-to-end tender consultancy for Instrument Calibration tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "instrument calibration tenders",
      "instrument calibration tender consultancy",
      "instrument calibration bidding services",
      "instrument calibration gem portal",
      "instrument calibration government contract"
    ]
  },
  {
    "id": "janitorial-services-tenders",
    "name": "Janitorial Services Tenders",
    "shortName": "Janitorial Services",
    "category": "Jobs & Joints",
    "letter": "J",
    "description": "End-to-end tender consultancy for Janitorial Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "janitorial services tenders",
      "janitorial services tender consultancy",
      "janitorial services bidding services",
      "janitorial services gem portal",
      "janitorial services government contract"
    ]
  },
  {
    "id": "job-work-tenders",
    "name": "Job Work Tenders",
    "shortName": "Job Work",
    "category": "Jobs & Joints",
    "letter": "J",
    "description": "End-to-end tender consultancy for Job Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "job work tenders",
      "job work tender consultancy",
      "job work bidding services",
      "job work gem portal",
      "job work government contract"
    ]
  },
  {
    "id": "jcb-hiring-tenders",
    "name": "JCB Hiring Tenders",
    "shortName": "JCB Hiring",
    "category": "Jobs & Joints",
    "letter": "J",
    "description": "End-to-end tender consultancy for JCB Hiring tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "jcb hiring tenders",
      "jcb hiring tender consultancy",
      "jcb hiring bidding services",
      "jcb hiring gem portal",
      "jcb hiring government contract"
    ]
  },
  {
    "id": "jewellery-supply-tenders",
    "name": "Jewellery Supply Tenders",
    "shortName": "Jewellery Supply",
    "category": "Jobs & Joints",
    "letter": "J",
    "description": "End-to-end tender consultancy for Jewellery Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "jewellery supply tenders",
      "jewellery supply tender consultancy",
      "jewellery supply bidding services",
      "jewellery supply gem portal",
      "jewellery supply government contract"
    ]
  },
  {
    "id": "junction-improvement-work-tenders",
    "name": "Junction Improvement Work Tenders",
    "shortName": "Junction Improvement Work",
    "category": "Jobs & Joints",
    "letter": "J",
    "description": "End-to-end tender consultancy for Junction Improvement Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "junction improvement work tenders",
      "junction improvement work tender consultancy",
      "junction improvement work bidding services",
      "junction improvement work gem portal",
      "junction improvement work government contract"
    ]
  },
  {
    "id": "jute-products-supply-tenders",
    "name": "Jute Products Supply Tenders",
    "shortName": "Jute Products Supply",
    "category": "Jobs & Joints",
    "letter": "J",
    "description": "End-to-end tender consultancy for Jute Products Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "jute products supply tenders",
      "jute products supply tender consultancy",
      "jute products supply bidding services",
      "jute products supply gem portal",
      "jute products supply government contract"
    ]
  },
  {
    "id": "jointing-materials-tenders",
    "name": "Jointing Materials Tenders",
    "shortName": "Jointing Materials",
    "category": "Jobs & Joints",
    "letter": "J",
    "description": "End-to-end tender consultancy for Jointing Materials tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "jointing materials tenders",
      "jointing materials tender consultancy",
      "jointing materials bidding services",
      "jointing materials gem portal",
      "jointing materials government contract"
    ]
  },
  {
    "id": "judicial-infrastructure-maintenance-tenders",
    "name": "Judicial Infrastructure Maintenance Tenders",
    "shortName": "Judicial Infrastructure Maintenance",
    "category": "Jobs & Joints",
    "letter": "J",
    "description": "End-to-end tender consultancy for Judicial Infrastructure Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "judicial infrastructure maintenance tenders",
      "judicial infrastructure maintenance tender consultancy",
      "judicial infrastructure maintenance bidding services",
      "judicial infrastructure maintenance gem portal",
      "judicial infrastructure maintenance government contract"
    ]
  },
  {
    "id": "kitchen-equipment-tenders",
    "name": "Kitchen Equipment Tenders",
    "shortName": "Kitchen Equipment",
    "category": "Kitchen & Knowledge Services",
    "letter": "K",
    "description": "End-to-end tender consultancy for Kitchen Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "kitchen equipment tenders",
      "kitchen equipment tender consultancy",
      "kitchen equipment bidding services",
      "kitchen equipment gem portal",
      "kitchen equipment government contract"
    ]
  },
  {
    "id": "kitchen-utensils-tenders",
    "name": "Kitchen Utensils Tenders",
    "shortName": "Kitchen Utensils",
    "category": "Kitchen & Knowledge Services",
    "letter": "K",
    "description": "End-to-end tender consultancy for Kitchen Utensils tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Lakhs to ₹3 Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "kitchen utensils tenders",
      "kitchen utensils tender consultancy",
      "kitchen utensils bidding services",
      "kitchen utensils gem portal",
      "kitchen utensils government contract"
    ]
  },
  {
    "id": "kitchen-construction-tenders",
    "name": "Kitchen Construction Tenders",
    "shortName": "Kitchen Construction",
    "category": "Kitchen & Knowledge Services",
    "letter": "K",
    "description": "End-to-end tender consultancy for Kitchen Construction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "kitchen construction tenders",
      "kitchen construction tender consultancy",
      "kitchen construction bidding services",
      "kitchen construction gem portal",
      "kitchen construction government contract"
    ]
  },
  {
    "id": "knowledge-management-services-tenders",
    "name": "Knowledge Management Services Tenders",
    "shortName": "Knowledge Management Services",
    "category": "Kitchen & Knowledge Services",
    "letter": "K",
    "description": "End-to-end tender consultancy for Knowledge Management Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "knowledge management services tenders",
      "knowledge management services tender consultancy",
      "knowledge management services bidding services",
      "knowledge management services gem portal",
      "knowledge management services government contract"
    ]
  },
  {
    "id": "laboratory-kits-tenders",
    "name": "Laboratory Kits Tenders",
    "shortName": "Laboratory Kits",
    "category": "Kitchen & Knowledge Services",
    "letter": "K",
    "description": "End-to-end tender consultancy for Laboratory Kits tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "laboratory kits tenders",
      "laboratory kits tender consultancy",
      "laboratory kits bidding services",
      "laboratory kits gem portal",
      "laboratory kits government contract"
    ]
  },
  {
    "id": "knowledge-centre-development-tenders",
    "name": "Knowledge Centre Development Tenders",
    "shortName": "Knowledge Centre Development",
    "category": "Kitchen & Knowledge Services",
    "letter": "K",
    "description": "End-to-end tender consultancy for Knowledge Centre Development tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "knowledge centre development tenders",
      "knowledge centre development tender consultancy",
      "knowledge centre development bidding services",
      "knowledge centre development gem portal",
      "knowledge centre development government contract"
    ]
  },
  {
    "id": "kitchen-maintenance-tenders",
    "name": "Kitchen Maintenance Tenders",
    "shortName": "Kitchen Maintenance",
    "category": "Kitchen & Knowledge Services",
    "letter": "K",
    "description": "End-to-end tender consultancy for Kitchen Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "kitchen maintenance tenders",
      "kitchen maintenance tender consultancy",
      "kitchen maintenance bidding services",
      "kitchen maintenance gem portal",
      "kitchen maintenance government contract"
    ]
  },
  {
    "id": "laboratory-equipment-tenders",
    "name": "Laboratory Equipment Tenders",
    "shortName": "Laboratory Equipment",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Laboratory Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "laboratory equipment tenders",
      "laboratory equipment tender consultancy",
      "laboratory equipment bidding services",
      "laboratory equipment gem portal",
      "laboratory equipment government contract"
    ]
  },
  {
    "id": "laboratory-chemicals-tenders",
    "name": "Laboratory Chemicals Tenders",
    "shortName": "Laboratory Chemicals",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Laboratory Chemicals tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "laboratory chemicals tenders",
      "laboratory chemicals tender consultancy",
      "laboratory chemicals bidding services",
      "laboratory chemicals gem portal",
      "laboratory chemicals government contract"
    ]
  },
  {
    "id": "land-survey-tenders",
    "name": "Land Survey Tenders",
    "shortName": "Land Survey",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Land Survey tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "land survey tenders",
      "land survey tender consultancy",
      "land survey bidding services",
      "land survey gem portal",
      "land survey government contract"
    ]
  },
  {
    "id": "landscaping-services-tenders",
    "name": "Landscaping Services Tenders",
    "shortName": "Landscaping Services",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Landscaping Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "landscaping services tenders",
      "landscaping services tender consultancy",
      "landscaping services bidding services",
      "landscaping services gem portal",
      "landscaping services government contract"
    ]
  },
  {
    "id": "lift-maintenance-tenders",
    "name": "Lift Maintenance Tenders",
    "shortName": "Lift Maintenance",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Lift Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "lift maintenance tenders",
      "lift maintenance tender consultancy",
      "lift maintenance bidding services",
      "lift maintenance gem portal",
      "lift maintenance government contract"
    ]
  },
  {
    "id": "legal-consultancy-tenders",
    "name": "Legal Consultancy Tenders",
    "shortName": "Legal Consultancy",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Legal Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "legal consultancy tenders",
      "legal consultancy tender consultancy",
      "legal consultancy bidding services",
      "legal consultancy gem portal",
      "legal consultancy government contract"
    ]
  },
  {
    "id": "library-books-supply-tenders",
    "name": "Library Books Supply Tenders",
    "shortName": "Library Books Supply",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Library Books Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "library books supply tenders",
      "library books supply tender consultancy",
      "library books supply bidding services",
      "library books supply gem portal",
      "library books supply government contract"
    ]
  },
  {
    "id": "lighting-equipment-tenders",
    "name": "Lighting Equipment Tenders",
    "shortName": "Lighting Equipment",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Lighting Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "lighting equipment tenders",
      "lighting equipment tender consultancy",
      "lighting equipment bidding services",
      "lighting equipment gem portal",
      "lighting equipment government contract"
    ]
  },
  {
    "id": "logistics-services-tenders",
    "name": "Logistics Services Tenders",
    "shortName": "Logistics Services",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Logistics Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "logistics services tenders",
      "logistics services tender consultancy",
      "logistics services bidding services",
      "logistics services gem portal",
      "logistics services government contract"
    ]
  },
  {
    "id": "laptop-supply-tenders",
    "name": "Laptop Supply Tenders",
    "shortName": "Laptop Supply",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Laptop Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "laptop supply tenders",
      "laptop supply tender consultancy",
      "laptop supply bidding services",
      "laptop supply gem portal",
      "laptop supply government contract"
    ]
  },
  {
    "id": "laundry-services-tenders",
    "name": "Laundry Services Tenders",
    "shortName": "Laundry Services",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Laundry Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "laundry services tenders",
      "laundry services tender consultancy",
      "laundry services bidding services",
      "laundry services gem portal",
      "laundry services government contract"
    ]
  },
  {
    "id": "led-lights-supply-tenders",
    "name": "LED Lights Supply Tenders",
    "shortName": "LED Lights Supply",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for LED Lights Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "led lights supply tenders",
      "led lights supply tender consultancy",
      "led lights supply bidding services",
      "led lights supply gem portal",
      "led lights supply government contract"
    ]
  },
  {
    "id": "laboratory-furniture-tenders",
    "name": "Laboratory Furniture Tenders",
    "shortName": "Laboratory Furniture",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Laboratory Furniture tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "laboratory furniture tenders",
      "laboratory furniture tender consultancy",
      "laboratory furniture bidding services",
      "laboratory furniture gem portal",
      "laboratory furniture government contract"
    ]
  },
  {
    "id": "lease-of-vehicles-tenders",
    "name": "Lease of Vehicles Tenders",
    "shortName": "Lease of Vehicles",
    "category": "Logistics & Laboratory",
    "letter": "L",
    "description": "End-to-end tender consultancy for Lease of Vehicles tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "lease of vehicles tenders",
      "lease of vehicles tender consultancy",
      "lease of vehicles bidding services",
      "lease of vehicles gem portal",
      "lease of vehicles government contract"
    ]
  },
  {
    "id": "machinery-supply-tenders",
    "name": "Machinery Supply Tenders",
    "shortName": "Machinery Supply",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Machinery Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "machinery supply tenders",
      "machinery supply tender consultancy",
      "machinery supply bidding services",
      "machinery supply gem portal",
      "machinery supply government contract"
    ]
  },
  {
    "id": "medical-equipment-tenders",
    "name": "Medical Equipment Tenders",
    "shortName": "Medical Equipment",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Medical Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0",
      "National Health Mission (NHM)",
      "AIIMS / ESIC eProcure",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "medical equipment tenders",
      "medical equipment tender consultancy",
      "medical equipment bidding services",
      "medical equipment gem portal",
      "medical equipment government contract"
    ]
  },
  {
    "id": "medical-consumables-tenders",
    "name": "Medical Consumables Tenders",
    "shortName": "Medical Consumables",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Medical Consumables tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0",
      "National Health Mission (NHM)",
      "AIIMS / ESIC eProcure",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "medical consumables tenders",
      "medical consumables tender consultancy",
      "medical consumables bidding services",
      "medical consumables gem portal",
      "medical consumables government contract"
    ]
  },
  {
    "id": "manpower-supply-tenders",
    "name": "Manpower Supply Tenders",
    "shortName": "Manpower Supply",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Manpower Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "State DISCOM / GETCO",
      "NTPC / BHEL",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "manpower supply tenders",
      "manpower supply tender consultancy",
      "manpower supply bidding services",
      "manpower supply gem portal",
      "manpower supply government contract"
    ]
  },
  {
    "id": "maintenance-services-tenders",
    "name": "Maintenance Services Tenders",
    "shortName": "Maintenance Services",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Maintenance Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "maintenance services tenders",
      "maintenance services tender consultancy",
      "maintenance services bidding services",
      "maintenance services gem portal",
      "maintenance services government contract"
    ]
  },
  {
    "id": "mechanical-works-tenders",
    "name": "Mechanical Works Tenders",
    "shortName": "Mechanical Works",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Mechanical Works tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "mechanical works tenders",
      "mechanical works tender consultancy",
      "mechanical works bidding services",
      "mechanical works gem portal",
      "mechanical works government contract"
    ]
  },
  {
    "id": "manufacturing-equipment-tenders",
    "name": "Manufacturing Equipment Tenders",
    "shortName": "Manufacturing Equipment",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Manufacturing Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "manufacturing equipment tenders",
      "manufacturing equipment tender consultancy",
      "manufacturing equipment bidding services",
      "manufacturing equipment gem portal",
      "manufacturing equipment government contract"
    ]
  },
  {
    "id": "mobile-phones-supply-tenders",
    "name": "Mobile Phones Supply Tenders",
    "shortName": "Mobile Phones Supply",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Mobile Phones Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "mobile phones supply tenders",
      "mobile phones supply tender consultancy",
      "mobile phones supply bidding services",
      "mobile phones supply gem portal",
      "mobile phones supply government contract"
    ]
  },
  {
    "id": "municipal-services-tenders",
    "name": "Municipal Services Tenders",
    "shortName": "Municipal Services",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Municipal Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "municipal services tenders",
      "municipal services tender consultancy",
      "municipal services bidding services",
      "municipal services gem portal",
      "municipal services government contract"
    ]
  },
  {
    "id": "material-testing-tenders",
    "name": "Material Testing Tenders",
    "shortName": "Material Testing",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Material Testing tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "material testing tenders",
      "material testing tender consultancy",
      "material testing bidding services",
      "material testing gem portal",
      "material testing government contract"
    ]
  },
  {
    "id": "mining-equipment-tenders",
    "name": "Mining Equipment Tenders",
    "shortName": "Mining Equipment",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Mining Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "mining equipment tenders",
      "mining equipment tender consultancy",
      "mining equipment bidding services",
      "mining equipment gem portal",
      "mining equipment government contract"
    ]
  },
  {
    "id": "metal-fabrication-tenders",
    "name": "Metal Fabrication Tenders",
    "shortName": "Metal Fabrication",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Metal Fabrication tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "metal fabrication tenders",
      "metal fabrication tender consultancy",
      "metal fabrication bidding services",
      "metal fabrication gem portal",
      "metal fabrication government contract"
    ]
  },
  {
    "id": "microbiology-laboratory-equipment-tenders",
    "name": "Microbiology Laboratory Equipment Tenders",
    "shortName": "Microbiology Laboratory Equipment",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Microbiology Laboratory Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "microbiology laboratory equipment tenders",
      "microbiology laboratory equipment tender consultancy",
      "microbiology laboratory equipment bidding services",
      "microbiology laboratory equipment gem portal",
      "microbiology laboratory equipment government contract"
    ]
  },
  {
    "id": "modular-furniture-tenders",
    "name": "Modular Furniture Tenders",
    "shortName": "Modular Furniture",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Modular Furniture tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "modular furniture tenders",
      "modular furniture tender consultancy",
      "modular furniture bidding services",
      "modular furniture gem portal",
      "modular furniture government contract"
    ]
  },
  {
    "id": "make-in-india-products-tenders",
    "name": "Make in India Products Tenders",
    "shortName": "Make in India Products",
    "category": "Machinery & Manufacturing",
    "letter": "M",
    "description": "End-to-end tender consultancy for Make in India Products tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "make in india products tenders",
      "make in india products tender consultancy",
      "make in india products bidding services",
      "make in india products gem portal",
      "make in india products government contract"
    ]
  },
  {
    "id": "networking-equipment-tenders",
    "name": "Networking Equipment Tenders",
    "shortName": "Networking Equipment",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for Networking Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "networking equipment tenders",
      "networking equipment tender consultancy",
      "networking equipment bidding services",
      "networking equipment gem portal",
      "networking equipment government contract"
    ]
  },
  {
    "id": "network-maintenance-tenders",
    "name": "Network Maintenance Tenders",
    "shortName": "Network Maintenance",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for Network Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "network maintenance tenders",
      "network maintenance tender consultancy",
      "network maintenance bidding services",
      "network maintenance gem portal",
      "network maintenance government contract"
    ]
  },
  {
    "id": "non-it-manpower-tenders",
    "name": "Non-IT Manpower Tenders",
    "shortName": "Non-IT Manpower",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for Non-IT Manpower tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "State DISCOM / GETCO",
      "NTPC / BHEL",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "PSARA / Labour Commissioner Registration & EPF/ESIC",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "non-it manpower tenders",
      "non-it manpower tender consultancy",
      "non-it manpower bidding services",
      "non-it manpower gem portal",
      "non-it manpower government contract"
    ]
  },
  {
    "id": "nursing-services-tenders",
    "name": "Nursing Services Tenders",
    "shortName": "Nursing Services",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for Nursing Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "nursing services tenders",
      "nursing services tender consultancy",
      "nursing services bidding services",
      "nursing services gem portal",
      "nursing services government contract"
    ]
  },
  {
    "id": "nutritional-food-supply-tenders",
    "name": "Nutritional Food Supply Tenders",
    "shortName": "Nutritional Food Supply",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for Nutritional Food Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "nutritional food supply tenders",
      "nutritional food supply tender consultancy",
      "nutritional food supply bidding services",
      "nutritional food supply gem portal",
      "nutritional food supply government contract"
    ]
  },
  {
    "id": "new-building-construction-tenders",
    "name": "New Building Construction Tenders",
    "shortName": "New Building Construction",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for New Building Construction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "new building construction tenders",
      "new building construction tender consultancy",
      "new building construction bidding services",
      "new building construction gem portal",
      "new building construction government contract"
    ]
  },
  {
    "id": "natural-resource-survey-tenders",
    "name": "Natural Resource Survey Tenders",
    "shortName": "Natural Resource Survey",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for Natural Resource Survey tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "natural resource survey tenders",
      "natural resource survey tender consultancy",
      "natural resource survey bidding services",
      "natural resource survey gem portal",
      "natural resource survey government contract"
    ]
  },
  {
    "id": "noise-monitoring-equipment-tenders",
    "name": "Noise Monitoring Equipment Tenders",
    "shortName": "Noise Monitoring Equipment",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for Noise Monitoring Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "noise monitoring equipment tenders",
      "noise monitoring equipment tender consultancy",
      "noise monitoring equipment bidding services",
      "noise monitoring equipment gem portal",
      "noise monitoring equipment government contract"
    ]
  },
  {
    "id": "ndt-testing-services-tenders",
    "name": "NDT Testing Services Tenders",
    "shortName": "NDT Testing Services",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for NDT Testing Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "ndt testing services tenders",
      "ndt testing services tender consultancy",
      "ndt testing services bidding services",
      "ndt testing services gem portal",
      "ndt testing services government contract"
    ]
  },
  {
    "id": "network-security-tenders",
    "name": "Network Security Tenders",
    "shortName": "Network Security",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for Network Security tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "PSARA / Labour Commissioner Registration & EPF/ESIC",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "network security tenders",
      "network security tender consultancy",
      "network security bidding services",
      "network security gem portal",
      "network security government contract"
    ]
  },
  {
    "id": "nursery-plants-supply-tenders",
    "name": "Nursery Plants Supply Tenders",
    "shortName": "Nursery Plants Supply",
    "category": "Network & Natural Resources",
    "letter": "N",
    "description": "End-to-end tender consultancy for Nursery Plants Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "nursery plants supply tenders",
      "nursery plants supply tender consultancy",
      "nursery plants supply bidding services",
      "nursery plants supply gem portal",
      "nursery plants supply government contract"
    ]
  },
  {
    "id": "office-furniture-tenders",
    "name": "Office Furniture Tenders",
    "shortName": "Office Furniture",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Office Furniture tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "office furniture tenders",
      "office furniture tender consultancy",
      "office furniture bidding services",
      "office furniture gem portal",
      "office furniture government contract"
    ]
  },
  {
    "id": "office-equipment-tenders",
    "name": "Office Equipment Tenders",
    "shortName": "Office Equipment",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Office Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "office equipment tenders",
      "office equipment tender consultancy",
      "office equipment bidding services",
      "office equipment gem portal",
      "office equipment government contract"
    ]
  },
  {
    "id": "office-stationery-tenders",
    "name": "Office Stationery Tenders",
    "shortName": "Office Stationery",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Office Stationery tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Lakhs to ₹3 Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "office stationery tenders",
      "office stationery tender consultancy",
      "office stationery bidding services",
      "office stationery gem portal",
      "office stationery government contract"
    ]
  },
  {
    "id": "office-building-maintenance-tenders",
    "name": "Office Building Maintenance Tenders",
    "shortName": "Office Building Maintenance",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Office Building Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "office building maintenance tenders",
      "office building maintenance tender consultancy",
      "office building maintenance bidding services",
      "office building maintenance gem portal",
      "office building maintenance government contract"
    ]
  },
  {
    "id": "oem-authorization-support-tenders",
    "name": "OEM Authorization Support Tenders",
    "shortName": "OEM Authorization Support",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for OEM Authorization Support tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "oem authorization support tenders",
      "oem authorization support tender consultancy",
      "oem authorization support bidding services",
      "oem authorization support gem portal",
      "oem authorization support government contract"
    ]
  },
  {
    "id": "operation-and-maintenance-tenders",
    "name": "Operation and Maintenance Tenders",
    "shortName": "Operation and Maintenance",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Operation and Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "operation and maintenance tenders",
      "operation and maintenance tender consultancy",
      "operation and maintenance bidding services",
      "operation and maintenance gem portal",
      "operation and maintenance government contract"
    ]
  },
  {
    "id": "outsourcing-services-tenders",
    "name": "Outsourcing Services Tenders",
    "shortName": "Outsourcing Services",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Outsourcing Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "outsourcing services tenders",
      "outsourcing services tender consultancy",
      "outsourcing services bidding services",
      "outsourcing services gem portal",
      "outsourcing services government contract"
    ]
  },
  {
    "id": "optical-equipment-tenders",
    "name": "Optical Equipment Tenders",
    "shortName": "Optical Equipment",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Optical Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "optical equipment tenders",
      "optical equipment tender consultancy",
      "optical equipment bidding services",
      "optical equipment gem portal",
      "optical equipment government contract"
    ]
  },
  {
    "id": "online-examination-services-tenders",
    "name": "Online Examination Services Tenders",
    "shortName": "Online Examination Services",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Online Examination Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "online examination services tenders",
      "online examination services tender consultancy",
      "online examination services bidding services",
      "online examination services gem portal",
      "online examination services government contract"
    ]
  },
  {
    "id": "occupational-safety-services-tenders",
    "name": "Occupational Safety Services Tenders",
    "shortName": "Occupational Safety Services",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Occupational Safety Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "occupational safety services tenders",
      "occupational safety services tender consultancy",
      "occupational safety services bidding services",
      "occupational safety services gem portal",
      "occupational safety services government contract"
    ]
  },
  {
    "id": "oil-supply-tenders",
    "name": "Oil Supply Tenders",
    "shortName": "Oil Supply",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Oil Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "oil supply tenders",
      "oil supply tender consultancy",
      "oil supply bidding services",
      "oil supply gem portal",
      "oil supply government contract"
    ]
  },
  {
    "id": "outdoor-advertising-tenders",
    "name": "Outdoor Advertising Tenders",
    "shortName": "Outdoor Advertising",
    "category": "Office & Operations",
    "letter": "O",
    "description": "End-to-end tender consultancy for Outdoor Advertising tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "outdoor advertising tenders",
      "outdoor advertising tender consultancy",
      "outdoor advertising bidding services",
      "outdoor advertising gem portal",
      "outdoor advertising government contract"
    ]
  },
  {
    "id": "painting-work-tenders",
    "name": "Painting Work Tenders",
    "shortName": "Painting Work",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Painting Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "painting work tenders",
      "painting work tender consultancy",
      "painting work bidding services",
      "painting work gem portal",
      "painting work government contract"
    ]
  },
  {
    "id": "pest-control-services-tenders",
    "name": "Pest Control Services Tenders",
    "shortName": "Pest Control Services",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Pest Control Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "pest control services tenders",
      "pest control services tender consultancy",
      "pest control services bidding services",
      "pest control services gem portal",
      "pest control services government contract"
    ]
  },
  {
    "id": "printing-services-tenders",
    "name": "Printing Services Tenders",
    "shortName": "Printing Services",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Printing Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "printing services tenders",
      "printing services tender consultancy",
      "printing services bidding services",
      "printing services gem portal",
      "printing services government contract"
    ]
  },
  {
    "id": "pharmaceutical-supply-tenders",
    "name": "Pharmaceutical Supply Tenders",
    "shortName": "Pharmaceutical Supply",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Pharmaceutical Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0",
      "National Health Mission (NHM)",
      "AIIMS / ESIC eProcure",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "pharmaceutical supply tenders",
      "pharmaceutical supply tender consultancy",
      "pharmaceutical supply bidding services",
      "pharmaceutical supply gem portal",
      "pharmaceutical supply government contract"
    ]
  },
  {
    "id": "plumbing-work-tenders",
    "name": "Plumbing Work Tenders",
    "shortName": "Plumbing Work",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Plumbing Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "plumbing work tenders",
      "plumbing work tender consultancy",
      "plumbing work bidding services",
      "plumbing work gem portal",
      "plumbing work government contract"
    ]
  },
  {
    "id": "project-management-consultancy-tenders",
    "name": "Project Management Consultancy Tenders",
    "shortName": "Project Management Consultancy",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Project Management Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "project management consultancy tenders",
      "project management consultancy tender consultancy",
      "project management consultancy bidding services",
      "project management consultancy gem portal",
      "project management consultancy government contract"
    ]
  },
  {
    "id": "pump-supply-tenders",
    "name": "Pump Supply Tenders",
    "shortName": "Pump Supply",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Pump Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "pump supply tenders",
      "pump supply tender consultancy",
      "pump supply bidding services",
      "pump supply gem portal",
      "pump supply government contract"
    ]
  },
  {
    "id": "power-supply-equipment-tenders",
    "name": "Power Supply Equipment Tenders",
    "shortName": "Power Supply Equipment",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Power Supply Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "State DISCOM / GETCO",
      "NTPC / BHEL",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "power supply equipment tenders",
      "power supply equipment tender consultancy",
      "power supply equipment bidding services",
      "power supply equipment gem portal",
      "power supply equipment government contract"
    ]
  },
  {
    "id": "public-health-engineering-tenders",
    "name": "Public Health Engineering Tenders",
    "shortName": "Public Health Engineering",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Public Health Engineering tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "public health engineering tenders",
      "public health engineering tender consultancy",
      "public health engineering bidding services",
      "public health engineering gem portal",
      "public health engineering government contract"
    ]
  },
  {
    "id": "pipes-supply-tenders",
    "name": "Pipes Supply Tenders",
    "shortName": "Pipes Supply",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Pipes Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "pipes supply tenders",
      "pipes supply tender consultancy",
      "pipes supply bidding services",
      "pipes supply gem portal",
      "pipes supply government contract"
    ]
  },
  {
    "id": "plant-maintenance-tenders",
    "name": "Plant Maintenance Tenders",
    "shortName": "Plant Maintenance",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Plant Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "plant maintenance tenders",
      "plant maintenance tender consultancy",
      "plant maintenance bidding services",
      "plant maintenance gem portal",
      "plant maintenance government contract"
    ]
  },
  {
    "id": "personal-protective-equipment-tenders",
    "name": "Personal Protective Equipment Tenders",
    "shortName": "Personal Protective Equipment",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Personal Protective Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "personal protective equipment tenders",
      "personal protective equipment tender consultancy",
      "personal protective equipment bidding services",
      "personal protective equipment gem portal",
      "personal protective equipment government contract"
    ]
  },
  {
    "id": "parking-management-tenders",
    "name": "Parking Management Tenders",
    "shortName": "Parking Management",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Parking Management tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "parking management tenders",
      "parking management tender consultancy",
      "parking management bidding services",
      "parking management gem portal",
      "parking management government contract"
    ]
  },
  {
    "id": "pre-fabricated-structures-tenders",
    "name": "Pre-Fabricated Structures Tenders",
    "shortName": "Pre-Fabricated Structures",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Pre-Fabricated Structures tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "pre-fabricated structures tenders",
      "pre-fabricated structures tender consultancy",
      "pre-fabricated structures bidding services",
      "pre-fabricated structures gem portal",
      "pre-fabricated structures government contract"
    ]
  },
  {
    "id": "product-listing-services-tenders",
    "name": "Product Listing Services Tenders",
    "shortName": "Product Listing Services",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Product Listing Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "product listing services tenders",
      "product listing services tender consultancy",
      "product listing services bidding services",
      "product listing services gem portal",
      "product listing services government contract"
    ]
  },
  {
    "id": "procurement-consultancy-tenders",
    "name": "Procurement Consultancy Tenders",
    "shortName": "Procurement Consultancy",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Procurement Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "procurement consultancy tenders",
      "procurement consultancy tender consultancy",
      "procurement consultancy bidding services",
      "procurement consultancy gem portal",
      "procurement consultancy government contract"
    ]
  },
  {
    "id": "pollution-control-equipment-tenders",
    "name": "Pollution Control Equipment Tenders",
    "shortName": "Pollution Control Equipment",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Pollution Control Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "pollution control equipment tenders",
      "pollution control equipment tender consultancy",
      "pollution control equipment bidding services",
      "pollution control equipment gem portal",
      "pollution control equipment government contract"
    ]
  },
  {
    "id": "photocopier-supply-tenders",
    "name": "Photocopier Supply Tenders",
    "shortName": "Photocopier Supply",
    "category": "Public Works & Procurement",
    "letter": "P",
    "description": "End-to-end tender consultancy for Photocopier Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "photocopier supply tenders",
      "photocopier supply tender consultancy",
      "photocopier supply bidding services",
      "photocopier supply gem portal",
      "photocopier supply government contract"
    ]
  },
  {
    "id": "quality-control-services-tenders",
    "name": "Quality Control Services Tenders",
    "shortName": "Quality Control Services",
    "category": "Quality & Testing",
    "letter": "Q",
    "description": "End-to-end tender consultancy for Quality Control Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "quality control services tenders",
      "quality control services tender consultancy",
      "quality control services bidding services",
      "quality control services gem portal",
      "quality control services government contract"
    ]
  },
  {
    "id": "quality-assurance-consultancy-tenders",
    "name": "Quality Assurance Consultancy Tenders",
    "shortName": "Quality Assurance Consultancy",
    "category": "Quality & Testing",
    "letter": "Q",
    "description": "End-to-end tender consultancy for Quality Assurance Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "quality assurance consultancy tenders",
      "quality assurance consultancy tender consultancy",
      "quality assurance consultancy bidding services",
      "quality assurance consultancy gem portal",
      "quality assurance consultancy government contract"
    ]
  },
  {
    "id": "quality-testing-laboratory-tenders",
    "name": "Quality Testing Laboratory Tenders",
    "shortName": "Quality Testing Laboratory",
    "category": "Quality & Testing",
    "letter": "Q",
    "description": "End-to-end tender consultancy for Quality Testing Laboratory tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "quality testing laboratory tenders",
      "quality testing laboratory tender consultancy",
      "quality testing laboratory bidding services",
      "quality testing laboratory gem portal",
      "quality testing laboratory government contract"
    ]
  },
  {
    "id": "quantity-surveying-tenders",
    "name": "Quantity Surveying Tenders",
    "shortName": "Quantity Surveying",
    "category": "Quality & Testing",
    "letter": "Q",
    "description": "End-to-end tender consultancy for Quantity Surveying tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "quantity surveying tenders",
      "quantity surveying tender consultancy",
      "quantity surveying bidding services",
      "quantity surveying gem portal",
      "quantity surveying government contract"
    ]
  },
  {
    "id": "quality-audit-tenders",
    "name": "Quality Audit Tenders",
    "shortName": "Quality Audit",
    "category": "Quality & Testing",
    "letter": "Q",
    "description": "End-to-end tender consultancy for Quality Audit tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "quality audit tenders",
      "quality audit tender consultancy",
      "quality audit bidding services",
      "quality audit gem portal",
      "quality audit government contract"
    ]
  },
  {
    "id": "quarry-development-tenders",
    "name": "Quarry Development Tenders",
    "shortName": "Quarry Development",
    "category": "Quality & Testing",
    "letter": "Q",
    "description": "End-to-end tender consultancy for Quarry Development tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "quarry development tenders",
      "quarry development tender consultancy",
      "quarry development bidding services",
      "quarry development gem portal",
      "quarry development government contract"
    ]
  },
  {
    "id": "question-paper-printing-tenders",
    "name": "Question Paper Printing Tenders",
    "shortName": "Question Paper Printing",
    "category": "Quality & Testing",
    "letter": "Q",
    "description": "End-to-end tender consultancy for Question Paper Printing tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "question paper printing tenders",
      "question paper printing tender consultancy",
      "question paper printing bidding services",
      "question paper printing gem portal",
      "question paper printing government contract"
    ]
  },
  {
    "id": "queue-management-system-tenders",
    "name": "Queue Management System Tenders",
    "shortName": "Queue Management System",
    "category": "Quality & Testing",
    "letter": "Q",
    "description": "End-to-end tender consultancy for Queue Management System tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "queue management system tenders",
      "queue management system tender consultancy",
      "queue management system bidding services",
      "queue management system gem portal",
      "queue management system government contract"
    ]
  },
  {
    "id": "road-construction-tenders",
    "name": "Road Construction Tenders",
    "shortName": "Road Construction",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Road Construction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "NHAI Portal",
      "State PWD (nProcure/SPPP)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "road construction tenders",
      "road construction tender consultancy",
      "road construction bidding services",
      "road construction gem portal",
      "road construction government contract"
    ]
  },
  {
    "id": "road-repair-work-tenders",
    "name": "Road Repair Work Tenders",
    "shortName": "Road Repair Work",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Road Repair Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "NHAI Portal",
      "State PWD (nProcure/SPPP)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "road repair work tenders",
      "road repair work tender consultancy",
      "road repair work bidding services",
      "road repair work gem portal",
      "road repair work government contract"
    ]
  },
  {
    "id": "road-marking-tenders",
    "name": "Road Marking Tenders",
    "shortName": "Road Marking",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Road Marking tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "NHAI Portal",
      "State PWD (nProcure/SPPP)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "road marking tenders",
      "road marking tender consultancy",
      "road marking bidding services",
      "road marking gem portal",
      "road marking government contract"
    ]
  },
  {
    "id": "railway-works-tenders",
    "name": "Railway Works Tenders",
    "shortName": "Railway Works",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Railway Works tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "IREPS Indian Railways",
      "GeM 4.0",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "railway works tenders",
      "railway works tender consultancy",
      "railway works bidding services",
      "railway works gem portal",
      "railway works government contract"
    ]
  },
  {
    "id": "roofing-work-tenders",
    "name": "Roofing Work Tenders",
    "shortName": "Roofing Work",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Roofing Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "roofing work tenders",
      "roofing work tender consultancy",
      "roofing work bidding services",
      "roofing work gem portal",
      "roofing work government contract"
    ]
  },
  {
    "id": "repair-and-maintenance-tenders",
    "name": "Repair and Maintenance Tenders",
    "shortName": "Repair and Maintenance",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Repair and Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "repair and maintenance tenders",
      "repair and maintenance tender consultancy",
      "repair and maintenance bidding services",
      "repair and maintenance gem portal",
      "repair and maintenance government contract"
    ]
  },
  {
    "id": "renewable-energy-systems-tenders",
    "name": "Renewable Energy Systems Tenders",
    "shortName": "Renewable Energy Systems",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Renewable Energy Systems tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "renewable energy systems tenders",
      "renewable energy systems tender consultancy",
      "renewable energy systems bidding services",
      "renewable energy systems gem portal",
      "renewable energy systems government contract"
    ]
  },
  {
    "id": "rainwater-harvesting-tenders",
    "name": "Rainwater Harvesting Tenders",
    "shortName": "Rainwater Harvesting",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Rainwater Harvesting tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "rainwater harvesting tenders",
      "rainwater harvesting tender consultancy",
      "rainwater harvesting bidding services",
      "rainwater harvesting gem portal",
      "rainwater harvesting government contract"
    ]
  },
  {
    "id": "recruitment-services-tenders",
    "name": "Recruitment Services Tenders",
    "shortName": "Recruitment Services",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Recruitment Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "recruitment services tenders",
      "recruitment services tender consultancy",
      "recruitment services bidding services",
      "recruitment services gem portal",
      "recruitment services government contract"
    ]
  },
  {
    "id": "refurbishment-work-tenders",
    "name": "Refurbishment Work Tenders",
    "shortName": "Refurbishment Work",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Refurbishment Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "refurbishment work tenders",
      "refurbishment work tender consultancy",
      "refurbishment work bidding services",
      "refurbishment work gem portal",
      "refurbishment work government contract"
    ]
  },
  {
    "id": "rope-supply-tenders",
    "name": "Rope Supply Tenders",
    "shortName": "Rope Supply",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Rope Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "rope supply tenders",
      "rope supply tender consultancy",
      "rope supply bidding services",
      "rope supply gem portal",
      "rope supply government contract"
    ]
  },
  {
    "id": "ro-water-purifier-tenders",
    "name": "RO Water Purifier Tenders",
    "shortName": "RO Water Purifier",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for RO Water Purifier tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "ro water purifier tenders",
      "ro water purifier tender consultancy",
      "ro water purifier bidding services",
      "ro water purifier gem portal",
      "ro water purifier government contract"
    ]
  },
  {
    "id": "research-consultancy-tenders",
    "name": "Research Consultancy Tenders",
    "shortName": "Research Consultancy",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Research Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "research consultancy tenders",
      "research consultancy tender consultancy",
      "research consultancy bidding services",
      "research consultancy gem portal",
      "research consultancy government contract"
    ]
  },
  {
    "id": "road-safety-equipment-tenders",
    "name": "Road Safety Equipment Tenders",
    "shortName": "Road Safety Equipment",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Road Safety Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "NHAI Portal",
      "State PWD (nProcure/SPPP)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "road safety equipment tenders",
      "road safety equipment tender consultancy",
      "road safety equipment bidding services",
      "road safety equipment gem portal",
      "road safety equipment government contract"
    ]
  },
  {
    "id": "record-management-tenders",
    "name": "Record Management Tenders",
    "shortName": "Record Management",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Record Management tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "record management tenders",
      "record management tender consultancy",
      "record management bidding services",
      "record management gem portal",
      "record management government contract"
    ]
  },
  {
    "id": "refrigeration-equipment-tenders",
    "name": "Refrigeration Equipment Tenders",
    "shortName": "Refrigeration Equipment",
    "category": "Roads & Repairs",
    "letter": "R",
    "description": "End-to-end tender consultancy for Refrigeration Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "refrigeration equipment tenders",
      "refrigeration equipment tender consultancy",
      "refrigeration equipment bidding services",
      "refrigeration equipment gem portal",
      "refrigeration equipment government contract"
    ]
  },
  {
    "id": "security-services-tenders",
    "name": "Security Services Tenders",
    "shortName": "Security Services",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Security Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "PSARA / Labour Commissioner Registration & EPF/ESIC",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "security services tenders",
      "security services tender consultancy",
      "security services bidding services",
      "security services gem portal",
      "security services government contract"
    ]
  },
  {
    "id": "software-development-tenders",
    "name": "Software Development Tenders",
    "shortName": "Software Development",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Software Development tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "software development tenders",
      "software development tender consultancy",
      "software development bidding services",
      "software development gem portal",
      "software development government contract"
    ]
  },
  {
    "id": "solar-power-plant-tenders",
    "name": "Solar Power Plant Tenders",
    "shortName": "Solar Power Plant",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Solar Power Plant tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "State DISCOM / GETCO",
      "NTPC / BHEL",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "solar power plant tenders",
      "solar power plant tender consultancy",
      "solar power plant bidding services",
      "solar power plant gem portal",
      "solar power plant government contract"
    ]
  },
  {
    "id": "solar-street-lights-tenders",
    "name": "Solar Street Lights Tenders",
    "shortName": "Solar Street Lights",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Solar Street Lights tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "State DISCOM / GETCO",
      "NTPC / BHEL",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "solar street lights tenders",
      "solar street lights tender consultancy",
      "solar street lights bidding services",
      "solar street lights gem portal",
      "solar street lights government contract"
    ]
  },
  {
    "id": "supply-of-goods-tenders",
    "name": "Supply of Goods Tenders",
    "shortName": "Supply of Goods",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Supply of Goods tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "supply of goods tenders",
      "supply of goods tender consultancy",
      "supply of goods bidding services",
      "supply of goods gem portal",
      "supply of goods government contract"
    ]
  },
  {
    "id": "sanitation-services-tenders",
    "name": "Sanitation Services Tenders",
    "shortName": "Sanitation Services",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Sanitation Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "sanitation services tenders",
      "sanitation services tender consultancy",
      "sanitation services bidding services",
      "sanitation services gem portal",
      "sanitation services government contract"
    ]
  },
  {
    "id": "surveillance-systems-tenders",
    "name": "Surveillance Systems Tenders",
    "shortName": "Surveillance Systems",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Surveillance Systems tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Security Services",
      "CPPP",
      "Police Housing Corp",
      "State Boards"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "surveillance systems tenders",
      "surveillance systems tender consultancy",
      "surveillance systems bidding services",
      "surveillance systems gem portal",
      "surveillance systems government contract"
    ]
  },
  {
    "id": "staff-uniform-supply-tenders",
    "name": "Staff Uniform Supply Tenders",
    "shortName": "Staff Uniform Supply",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Staff Uniform Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "staff uniform supply tenders",
      "staff uniform supply tender consultancy",
      "staff uniform supply bidding services",
      "staff uniform supply gem portal",
      "staff uniform supply government contract"
    ]
  },
  {
    "id": "sports-equipment-tenders",
    "name": "Sports Equipment Tenders",
    "shortName": "Sports Equipment",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Sports Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "sports equipment tenders",
      "sports equipment tender consultancy",
      "sports equipment bidding services",
      "sports equipment gem portal",
      "sports equipment government contract"
    ]
  },
  {
    "id": "street-lighting-tenders",
    "name": "Street Lighting Tenders",
    "shortName": "Street Lighting",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Street Lighting tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "street lighting tenders",
      "street lighting tender consultancy",
      "street lighting bidding services",
      "street lighting gem portal",
      "street lighting government contract"
    ]
  },
  {
    "id": "structural-engineering-tenders",
    "name": "Structural Engineering Tenders",
    "shortName": "Structural Engineering",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Structural Engineering tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "structural engineering tenders",
      "structural engineering tender consultancy",
      "structural engineering bidding services",
      "structural engineering gem portal",
      "structural engineering government contract"
    ]
  },
  {
    "id": "survey-services-tenders",
    "name": "Survey Services Tenders",
    "shortName": "Survey Services",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Survey Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "survey services tenders",
      "survey services tender consultancy",
      "survey services bidding services",
      "survey services gem portal",
      "survey services government contract"
    ]
  },
  {
    "id": "sewerage-work-tenders",
    "name": "Sewerage Work Tenders",
    "shortName": "Sewerage Work",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Sewerage Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "sewerage work tenders",
      "sewerage work tender consultancy",
      "sewerage work bidding services",
      "sewerage work gem portal",
      "sewerage work government contract"
    ]
  },
  {
    "id": "school-furniture-tenders",
    "name": "School Furniture Tenders",
    "shortName": "School Furniture",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for School Furniture tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "school furniture tenders",
      "school furniture tender consultancy",
      "school furniture bidding services",
      "school furniture gem portal",
      "school furniture government contract"
    ]
  },
  {
    "id": "school-bus-hiring-tenders",
    "name": "School Bus Hiring Tenders",
    "shortName": "School Bus Hiring",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for School Bus Hiring tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "school bus hiring tenders",
      "school bus hiring tender consultancy",
      "school bus hiring bidding services",
      "school bus hiring gem portal",
      "school bus hiring government contract"
    ]
  },
  {
    "id": "signage-boards-tenders",
    "name": "Signage Boards Tenders",
    "shortName": "Signage Boards",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Signage Boards tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "signage boards tenders",
      "signage boards tender consultancy",
      "signage boards bidding services",
      "signage boards gem portal",
      "signage boards government contract"
    ]
  },
  {
    "id": "skill-development-training-tenders",
    "name": "Skill Development Training Tenders",
    "shortName": "Skill Development Training",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Skill Development Training tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "IREPS Indian Railways",
      "GeM 4.0",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "skill development training tenders",
      "skill development training tender consultancy",
      "skill development training bidding services",
      "skill development training gem portal",
      "skill development training government contract"
    ]
  },
  {
    "id": "smart-classroom-tenders",
    "name": "Smart Classroom Tenders",
    "shortName": "Smart Classroom",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Smart Classroom tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "smart classroom tenders",
      "smart classroom tender consultancy",
      "smart classroom bidding services",
      "smart classroom gem portal",
      "smart classroom government contract"
    ]
  },
  {
    "id": "steel-supply-tenders",
    "name": "Steel Supply Tenders",
    "shortName": "Steel Supply",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Steel Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "steel supply tenders",
      "steel supply tender consultancy",
      "steel supply bidding services",
      "steel supply gem portal",
      "steel supply government contract"
    ]
  },
  {
    "id": "swimming-pool-maintenance-tenders",
    "name": "Swimming Pool Maintenance Tenders",
    "shortName": "Swimming Pool Maintenance",
    "category": "Security & Supply",
    "letter": "S",
    "description": "End-to-end tender consultancy for Swimming Pool Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "swimming pool maintenance tenders",
      "swimming pool maintenance tender consultancy",
      "swimming pool maintenance bidding services",
      "swimming pool maintenance gem portal",
      "swimming pool maintenance government contract"
    ]
  },
  {
    "id": "tender-bidding-consultancy-tenders",
    "name": "Tender Bidding Consultancy Tenders",
    "shortName": "Tender Bidding Consultancy",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Tender Bidding Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "tender bidding consultancy tenders",
      "tender bidding consultancy tender consultancy",
      "tender bidding consultancy bidding services",
      "tender bidding consultancy gem portal",
      "tender bidding consultancy government contract"
    ]
  },
  {
    "id": "tender-documentation-services-tenders",
    "name": "Tender Documentation Services Tenders",
    "shortName": "Tender Documentation Services",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Tender Documentation Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "tender documentation services tenders",
      "tender documentation services tender consultancy",
      "tender documentation services bidding services",
      "tender documentation services gem portal",
      "tender documentation services government contract"
    ]
  },
  {
    "id": "tender-management-services-tenders",
    "name": "Tender Management Services Tenders",
    "shortName": "Tender Management Services",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Tender Management Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "tender management services tenders",
      "tender management services tender consultancy",
      "tender management services bidding services",
      "tender management services gem portal",
      "tender management services government contract"
    ]
  },
  {
    "id": "telecommunication-equipment-tenders",
    "name": "Telecommunication Equipment Tenders",
    "shortName": "Telecommunication Equipment",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Telecommunication Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "telecommunication equipment tenders",
      "telecommunication equipment tender consultancy",
      "telecommunication equipment bidding services",
      "telecommunication equipment gem portal",
      "telecommunication equipment government contract"
    ]
  },
  {
    "id": "transportation-services-tenders",
    "name": "Transportation Services Tenders",
    "shortName": "Transportation Services",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Transportation Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "transportation services tenders",
      "transportation services tender consultancy",
      "transportation services bidding services",
      "transportation services gem portal",
      "transportation services government contract"
    ]
  },
  {
    "id": "transformer-supply-tenders",
    "name": "Transformer Supply Tenders",
    "shortName": "Transformer Supply",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Transformer Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "State DISCOM / GETCO",
      "NTPC / BHEL",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "transformer supply tenders",
      "transformer supply tender consultancy",
      "transformer supply bidding services",
      "transformer supply gem portal",
      "transformer supply government contract"
    ]
  },
  {
    "id": "training-services-tenders",
    "name": "Training Services Tenders",
    "shortName": "Training Services",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Training Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "IREPS Indian Railways",
      "GeM 4.0",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "training services tenders",
      "training services tender consultancy",
      "training services bidding services",
      "training services gem portal",
      "training services government contract"
    ]
  },
  {
    "id": "tractor-hiring-tenders",
    "name": "Tractor Hiring Tenders",
    "shortName": "Tractor Hiring",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Tractor Hiring tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "tractor hiring tenders",
      "tractor hiring tender consultancy",
      "tractor hiring bidding services",
      "tractor hiring gem portal",
      "tractor hiring government contract"
    ]
  },
  {
    "id": "traffic-management-systems-tenders",
    "name": "Traffic Management Systems Tenders",
    "shortName": "Traffic Management Systems",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Traffic Management Systems tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "traffic management systems tenders",
      "traffic management systems tender consultancy",
      "traffic management systems bidding services",
      "traffic management systems gem portal",
      "traffic management systems government contract"
    ]
  },
  {
    "id": "testing-equipment-tenders",
    "name": "Testing Equipment Tenders",
    "shortName": "Testing Equipment",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Testing Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "testing equipment tenders",
      "testing equipment tender consultancy",
      "testing equipment bidding services",
      "testing equipment gem portal",
      "testing equipment government contract"
    ]
  },
  {
    "id": "town-planning-consultancy-tenders",
    "name": "Town Planning Consultancy Tenders",
    "shortName": "Town Planning Consultancy",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Town Planning Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "town planning consultancy tenders",
      "town planning consultancy tender consultancy",
      "town planning consultancy bidding services",
      "town planning consultancy gem portal",
      "town planning consultancy government contract"
    ]
  },
  {
    "id": "turnkey-projects-tenders",
    "name": "Turnkey Projects Tenders",
    "shortName": "Turnkey Projects",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Turnkey Projects tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "turnkey projects tenders",
      "turnkey projects tender consultancy",
      "turnkey projects bidding services",
      "turnkey projects gem portal",
      "turnkey projects government contract"
    ]
  },
  {
    "id": "technical-consultancy-tenders",
    "name": "Technical Consultancy Tenders",
    "shortName": "Technical Consultancy",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Technical Consultancy tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "technical consultancy tenders",
      "technical consultancy tender consultancy",
      "technical consultancy bidding services",
      "technical consultancy gem portal",
      "technical consultancy government contract"
    ]
  },
  {
    "id": "tyre-supply-tenders",
    "name": "Tyre Supply Tenders",
    "shortName": "Tyre Supply",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Tyre Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "tyre supply tenders",
      "tyre supply tender consultancy",
      "tyre supply bidding services",
      "tyre supply gem portal",
      "tyre supply government contract"
    ]
  },
  {
    "id": "thermal-insulation-work-tenders",
    "name": "Thermal Insulation Work Tenders",
    "shortName": "Thermal Insulation Work",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Thermal Insulation Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "thermal insulation work tenders",
      "thermal insulation work tender consultancy",
      "thermal insulation work bidding services",
      "thermal insulation work gem portal",
      "thermal insulation work government contract"
    ]
  },
  {
    "id": "tube-well-construction-tenders",
    "name": "Tube Well Construction Tenders",
    "shortName": "Tube Well Construction",
    "category": "Transportation & Technology",
    "letter": "T",
    "description": "End-to-end tender consultancy for Tube Well Construction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "tube well construction tenders",
      "tube well construction tender consultancy",
      "tube well construction bidding services",
      "tube well construction gem portal",
      "tube well construction government contract"
    ]
  },
  {
    "id": "urban-development-works-tenders",
    "name": "Urban Development Works Tenders",
    "shortName": "Urban Development Works",
    "category": "Utilities & Urban Development",
    "letter": "U",
    "description": "End-to-end tender consultancy for Urban Development Works tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "urban development works tenders",
      "urban development works tender consultancy",
      "urban development works bidding services",
      "urban development works gem portal",
      "urban development works government contract"
    ]
  },
  {
    "id": "ups-supply-tenders",
    "name": "UPS Supply Tenders",
    "shortName": "UPS Supply",
    "category": "Utilities & Urban Development",
    "letter": "U",
    "description": "End-to-end tender consultancy for UPS Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "ups supply tenders",
      "ups supply tender consultancy",
      "ups supply bidding services",
      "ups supply gem portal",
      "ups supply government contract"
    ]
  },
  {
    "id": "utility-maintenance-tenders",
    "name": "Utility Maintenance Tenders",
    "shortName": "Utility Maintenance",
    "category": "Utilities & Urban Development",
    "letter": "U",
    "description": "End-to-end tender consultancy for Utility Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "utility maintenance tenders",
      "utility maintenance tender consultancy",
      "utility maintenance bidding services",
      "utility maintenance gem portal",
      "utility maintenance government contract"
    ]
  },
  {
    "id": "uniform-supply-tenders",
    "name": "Uniform Supply Tenders",
    "shortName": "Uniform Supply",
    "category": "Utilities & Urban Development",
    "letter": "U",
    "description": "End-to-end tender consultancy for Uniform Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "uniform supply tenders",
      "uniform supply tender consultancy",
      "uniform supply bidding services",
      "uniform supply gem portal",
      "uniform supply government contract"
    ]
  },
  {
    "id": "underground-cable-work-tenders",
    "name": "Underground Cable Work Tenders",
    "shortName": "Underground Cable Work",
    "category": "Utilities & Urban Development",
    "letter": "U",
    "description": "End-to-end tender consultancy for Underground Cable Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "underground cable work tenders",
      "underground cable work tender consultancy",
      "underground cable work bidding services",
      "underground cable work gem portal",
      "underground cable work government contract"
    ]
  },
  {
    "id": "uninterruptible-power-supply-tenders",
    "name": "Uninterruptible Power Supply Tenders",
    "shortName": "Uninterruptible Power Supply",
    "category": "Utilities & Urban Development",
    "letter": "U",
    "description": "End-to-end tender consultancy for Uninterruptible Power Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "State DISCOM / GETCO",
      "NTPC / BHEL",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "uninterruptible power supply tenders",
      "uninterruptible power supply tender consultancy",
      "uninterruptible power supply bidding services",
      "uninterruptible power supply gem portal",
      "uninterruptible power supply government contract"
    ]
  },
  {
    "id": "used-vehicle-auction-tenders",
    "name": "Used Vehicle Auction Tenders",
    "shortName": "Used Vehicle Auction",
    "category": "Utilities & Urban Development",
    "letter": "U",
    "description": "End-to-end tender consultancy for Used Vehicle Auction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "used vehicle auction tenders",
      "used vehicle auction tender consultancy",
      "used vehicle auction bidding services",
      "used vehicle auction gem portal",
      "used vehicle auction government contract"
    ]
  },
  {
    "id": "water-utility-services-tenders",
    "name": "Water Utility Services Tenders",
    "shortName": "Water Utility Services",
    "category": "Utilities & Urban Development",
    "letter": "U",
    "description": "End-to-end tender consultancy for Water Utility Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "water utility services tenders",
      "water utility services tender consultancy",
      "water utility services bidding services",
      "water utility services gem portal",
      "water utility services government contract"
    ]
  },
  {
    "id": "user-training-services-tenders",
    "name": "User Training Services Tenders",
    "shortName": "User Training Services",
    "category": "Utilities & Urban Development",
    "letter": "U",
    "description": "End-to-end tender consultancy for User Training Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "IREPS Indian Railways",
      "GeM 4.0",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "user training services tenders",
      "user training services tender consultancy",
      "user training services bidding services",
      "user training services gem portal",
      "user training services government contract"
    ]
  },
  {
    "id": "urban-landscaping-tenders",
    "name": "Urban Landscaping Tenders",
    "shortName": "Urban Landscaping",
    "category": "Utilities & Urban Development",
    "letter": "U",
    "description": "End-to-end tender consultancy for Urban Landscaping tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "urban landscaping tenders",
      "urban landscaping tender consultancy",
      "urban landscaping bidding services",
      "urban landscaping gem portal",
      "urban landscaping government contract"
    ]
  },
  {
    "id": "vehicle-hiring-tenders",
    "name": "Vehicle Hiring Tenders",
    "shortName": "Vehicle Hiring",
    "category": "Vehicles & Validation",
    "letter": "V",
    "description": "End-to-end tender consultancy for Vehicle Hiring tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "vehicle hiring tenders",
      "vehicle hiring tender consultancy",
      "vehicle hiring bidding services",
      "vehicle hiring gem portal",
      "vehicle hiring government contract"
    ]
  },
  {
    "id": "vehicle-maintenance-tenders",
    "name": "Vehicle Maintenance Tenders",
    "shortName": "Vehicle Maintenance",
    "category": "Vehicles & Validation",
    "letter": "V",
    "description": "End-to-end tender consultancy for Vehicle Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "vehicle maintenance tenders",
      "vehicle maintenance tender consultancy",
      "vehicle maintenance bidding services",
      "vehicle maintenance gem portal",
      "vehicle maintenance government contract"
    ]
  },
  {
    "id": "ventilation-systems-tenders",
    "name": "Ventilation Systems Tenders",
    "shortName": "Ventilation Systems",
    "category": "Vehicles & Validation",
    "letter": "V",
    "description": "End-to-end tender consultancy for Ventilation Systems tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "ventilation systems tenders",
      "ventilation systems tender consultancy",
      "ventilation systems bidding services",
      "ventilation systems gem portal",
      "ventilation systems government contract"
    ]
  },
  {
    "id": "video-conferencing-equipment-tenders",
    "name": "Video Conferencing Equipment Tenders",
    "shortName": "Video Conferencing Equipment",
    "category": "Vehicles & Validation",
    "letter": "V",
    "description": "End-to-end tender consultancy for Video Conferencing Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "video conferencing equipment tenders",
      "video conferencing equipment tender consultancy",
      "video conferencing equipment bidding services",
      "video conferencing equipment gem portal",
      "video conferencing equipment government contract"
    ]
  },
  {
    "id": "vehicle-tracking-system-tenders",
    "name": "Vehicle Tracking System Tenders",
    "shortName": "Vehicle Tracking System",
    "category": "Vehicles & Validation",
    "letter": "V",
    "description": "End-to-end tender consultancy for Vehicle Tracking System tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "vehicle tracking system tenders",
      "vehicle tracking system tender consultancy",
      "vehicle tracking system bidding services",
      "vehicle tracking system gem portal",
      "vehicle tracking system government contract"
    ]
  },
  {
    "id": "veterinary-equipment-tenders",
    "name": "Veterinary Equipment Tenders",
    "shortName": "Veterinary Equipment",
    "category": "Vehicles & Validation",
    "letter": "V",
    "description": "End-to-end tender consultancy for Veterinary Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "veterinary equipment tenders",
      "veterinary equipment tender consultancy",
      "veterinary equipment bidding services",
      "veterinary equipment gem portal",
      "veterinary equipment government contract"
    ]
  },
  {
    "id": "valve-supply-tenders",
    "name": "Valve Supply Tenders",
    "shortName": "Valve Supply",
    "category": "Vehicles & Validation",
    "letter": "V",
    "description": "End-to-end tender consultancy for Valve Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "valve supply tenders",
      "valve supply tender consultancy",
      "valve supply bidding services",
      "valve supply gem portal",
      "valve supply government contract"
    ]
  },
  {
    "id": "vocational-training-tenders",
    "name": "Vocational Training Tenders",
    "shortName": "Vocational Training",
    "category": "Vehicles & Validation",
    "letter": "V",
    "description": "End-to-end tender consultancy for Vocational Training tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "IREPS Indian Railways",
      "GeM 4.0",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "vocational training tenders",
      "vocational training tender consultancy",
      "vocational training bidding services",
      "vocational training gem portal",
      "vocational training government contract"
    ]
  },
  {
    "id": "vertical-garden-installation-tenders",
    "name": "Vertical Garden Installation Tenders",
    "shortName": "Vertical Garden Installation",
    "category": "Vehicles & Validation",
    "letter": "V",
    "description": "End-to-end tender consultancy for Vertical Garden Installation tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "vertical garden installation tenders",
      "vertical garden installation tender consultancy",
      "vertical garden installation bidding services",
      "vertical garden installation gem portal",
      "vertical garden installation government contract"
    ]
  },
  {
    "id": "verification-services-tenders",
    "name": "Verification Services Tenders",
    "shortName": "Verification Services",
    "category": "Vehicles & Validation",
    "letter": "V",
    "description": "End-to-end tender consultancy for Verification Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "verification services tenders",
      "verification services tender consultancy",
      "verification services bidding services",
      "verification services gem portal",
      "verification services government contract"
    ]
  },
  {
    "id": "water-supply-work-tenders",
    "name": "Water Supply Work Tenders",
    "shortName": "Water Supply Work",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Water Supply Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "water supply work tenders",
      "water supply work tender consultancy",
      "water supply work bidding services",
      "water supply work gem portal",
      "water supply work government contract"
    ]
  },
  {
    "id": "water-treatment-plant-tenders",
    "name": "Water Treatment Plant Tenders",
    "shortName": "Water Treatment Plant",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Water Treatment Plant tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Crore to ₹150+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "water treatment plant tenders",
      "water treatment plant tender consultancy",
      "water treatment plant bidding services",
      "water treatment plant gem portal",
      "water treatment plant government contract"
    ]
  },
  {
    "id": "waste-management-services-tenders",
    "name": "Waste Management Services Tenders",
    "shortName": "Waste Management Services",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Waste Management Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "CPPP Central Portal",
      "State GeM Cell"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "waste management services tenders",
      "waste management services tender consultancy",
      "waste management services bidding services",
      "waste management services gem portal",
      "waste management services government contract"
    ]
  },
  {
    "id": "water-tank-cleaning-tenders",
    "name": "Water Tank Cleaning Tenders",
    "shortName": "Water Tank Cleaning",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Water Tank Cleaning tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "PSARA / Labour Commissioner Registration & EPF/ESIC",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Lakhs to ₹3 Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "water tank cleaning tenders",
      "water tank cleaning tender consultancy",
      "water tank cleaning bidding services",
      "water tank cleaning gem portal",
      "water tank cleaning government contract"
    ]
  },
  {
    "id": "waterproofing-work-tenders",
    "name": "Waterproofing Work Tenders",
    "shortName": "Waterproofing Work",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Waterproofing Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "waterproofing work tenders",
      "waterproofing work tender consultancy",
      "waterproofing work bidding services",
      "waterproofing work gem portal",
      "waterproofing work government contract"
    ]
  },
  {
    "id": "website-development-tenders",
    "name": "Website Development Tenders",
    "shortName": "Website Development",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Website Development tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "website development tenders",
      "website development tender consultancy",
      "website development bidding services",
      "website development gem portal",
      "website development government contract"
    ]
  },
  {
    "id": "web-application-development-tenders",
    "name": "Web Application Development Tenders",
    "shortName": "Web Application Development",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Web Application Development tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 IT Categories",
      "NICSI / CPPP",
      "STPI e-Procurement",
      "State IT Dept"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "web application development tenders",
      "web application development tender consultancy",
      "web application development bidding services",
      "web application development gem portal",
      "web application development government contract"
    ]
  },
  {
    "id": "weighbridge-supply-tenders",
    "name": "Weighbridge Supply Tenders",
    "shortName": "Weighbridge Supply",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Weighbridge Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "CPWD eProcure",
      "NHAI Portal",
      "State PWD (nProcure/SPPP)",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Crore to ₹150+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "weighbridge supply tenders",
      "weighbridge supply tender consultancy",
      "weighbridge supply bidding services",
      "weighbridge supply gem portal",
      "weighbridge supply government contract"
    ]
  },
  {
    "id": "warehouse-construction-tenders",
    "name": "Warehouse Construction Tenders",
    "shortName": "Warehouse Construction",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Warehouse Construction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹1 Crore to ₹50+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "warehouse construction tenders",
      "warehouse construction tender consultancy",
      "warehouse construction bidding services",
      "warehouse construction gem portal",
      "warehouse construction government contract"
    ]
  },
  {
    "id": "welding-work-tenders",
    "name": "Welding Work Tenders",
    "shortName": "Welding Work",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Welding Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "welding work tenders",
      "welding work tender consultancy",
      "welding work bidding services",
      "welding work gem portal",
      "welding work government contract"
    ]
  },
  {
    "id": "wireless-networking-tenders",
    "name": "Wireless Networking Tenders",
    "shortName": "Wireless Networking",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Wireless Networking tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "wireless networking tenders",
      "wireless networking tender consultancy",
      "wireless networking bidding services",
      "wireless networking gem portal",
      "wireless networking government contract"
    ]
  },
  {
    "id": "wastewater-treatment-tenders",
    "name": "Wastewater Treatment Tenders",
    "shortName": "Wastewater Treatment",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Wastewater Treatment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Crore to ₹150+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "wastewater treatment tenders",
      "wastewater treatment tender consultancy",
      "wastewater treatment bidding services",
      "wastewater treatment gem portal",
      "wastewater treatment government contract"
    ]
  },
  {
    "id": "workstation-supply-tenders",
    "name": "Workstation Supply Tenders",
    "shortName": "Workstation Supply",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Workstation Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "workstation supply tenders",
      "workstation supply tender consultancy",
      "workstation supply bidding services",
      "workstation supply gem portal",
      "workstation supply government contract"
    ]
  },
  {
    "id": "water-pipeline-construction-tenders",
    "name": "Water Pipeline Construction Tenders",
    "shortName": "Water Pipeline Construction",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Water Pipeline Construction tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "PWD / CPWD Registered Contractor License & Solvency Certificate",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Crore to ₹150+ Crore",
    "tenderTypes": [
      "Item Rate EPC Contract",
      "Turnkey Execution",
      "Milestone-Based Public Works"
    ],
    "keywords": [
      "water pipeline construction tenders",
      "water pipeline construction tender consultancy",
      "water pipeline construction bidding services",
      "water pipeline construction gem portal",
      "water pipeline construction government contract"
    ]
  },
  {
    "id": "water-quality-testing-tenders",
    "name": "Water Quality Testing Tenders",
    "shortName": "Water Quality Testing",
    "category": "Water & Waste Management",
    "letter": "W",
    "description": "End-to-end tender consultancy for Water Quality Testing tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "Jal Jeevan Mission (JJM)",
      "State PHED / GWSSB",
      "CPPP",
      "GeM 4.0"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "water quality testing tenders",
      "water quality testing tender consultancy",
      "water quality testing bidding services",
      "water quality testing gem portal",
      "water quality testing government contract"
    ]
  },
  {
    "id": "x-ray-machine-supply-tenders",
    "name": "X-Ray Machine Supply Tenders",
    "shortName": "X-Ray Machine Supply",
    "category": "X-Ray & Specialist Equipment",
    "letter": "X",
    "description": "End-to-end tender consultancy for X-Ray Machine Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0",
      "National Health Mission (NHM)",
      "AIIMS / ESIC eProcure",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "x-ray machine supply tenders",
      "x-ray machine supply tender consultancy",
      "x-ray machine supply bidding services",
      "x-ray machine supply gem portal",
      "x-ray machine supply government contract"
    ]
  },
  {
    "id": "x-ray-equipment-maintenance-tenders",
    "name": "X-Ray Equipment Maintenance Tenders",
    "shortName": "X-Ray Equipment Maintenance",
    "category": "X-Ray & Specialist Equipment",
    "letter": "X",
    "description": "End-to-end tender consultancy for X-Ray Equipment Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0",
      "National Health Mission (NHM)",
      "AIIMS / ESIC eProcure",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "x-ray equipment maintenance tenders",
      "x-ray equipment maintenance tender consultancy",
      "x-ray equipment maintenance bidding services",
      "x-ray equipment maintenance gem portal",
      "x-ray equipment maintenance government contract"
    ]
  },
  {
    "id": "x-ray-film-supply-tenders",
    "name": "X-Ray Film Supply Tenders",
    "shortName": "X-Ray Film Supply",
    "category": "X-Ray & Specialist Equipment",
    "letter": "X",
    "description": "End-to-end tender consultancy for X-Ray Film Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0",
      "National Health Mission (NHM)",
      "AIIMS / ESIC eProcure",
      "CPPP"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "x-ray film supply tenders",
      "x-ray film supply tender consultancy",
      "x-ray film supply bidding services",
      "x-ray film supply gem portal",
      "x-ray film supply government contract"
    ]
  },
  {
    "id": "xenon-lighting-equipment-tenders",
    "name": "Xenon Lighting Equipment Tenders",
    "shortName": "Xenon Lighting Equipment",
    "category": "X-Ray & Specialist Equipment",
    "letter": "X",
    "description": "End-to-end tender consultancy for Xenon Lighting Equipment tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "xenon lighting equipment tenders",
      "xenon lighting equipment tender consultancy",
      "xenon lighting equipment bidding services",
      "xenon lighting equipment gem portal",
      "xenon lighting equipment government contract"
    ]
  },
  {
    "id": "yoga-training-services-tenders",
    "name": "Yoga Training Services Tenders",
    "shortName": "Yoga Training Services",
    "category": "Youth & Yard Services",
    "letter": "Y",
    "description": "End-to-end tender consultancy for Yoga Training Services tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "IREPS Indian Railways",
      "GeM 4.0",
      "CPPP"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "yoga training services tenders",
      "yoga training services tender consultancy",
      "yoga training services bidding services",
      "yoga training services gem portal",
      "yoga training services government contract"
    ]
  },
  {
    "id": "youth-skill-development-tenders",
    "name": "Youth Skill Development Tenders",
    "shortName": "Youth Skill Development",
    "category": "Youth & Yard Services",
    "letter": "Y",
    "description": "End-to-end tender consultancy for Youth Skill Development tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "youth skill development tenders",
      "youth skill development tender consultancy",
      "youth skill development bidding services",
      "youth skill development gem portal",
      "youth skill development government contract"
    ]
  },
  {
    "id": "yard-development-work-tenders",
    "name": "Yard Development Work Tenders",
    "shortName": "Yard Development Work",
    "category": "Youth & Yard Services",
    "letter": "Y",
    "description": "End-to-end tender consultancy for Yard Development Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "yard development work tenders",
      "yard development work tender consultancy",
      "yard development work bidding services",
      "yard development work gem portal",
      "yard development work government contract"
    ]
  },
  {
    "id": "yard-lighting-tenders",
    "name": "Yard Lighting Tenders",
    "shortName": "Yard Lighting",
    "category": "Youth & Yard Services",
    "letter": "Y",
    "description": "End-to-end tender consultancy for Yard Lighting tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "yard lighting tenders",
      "yard lighting tender consultancy",
      "yard lighting bidding services",
      "yard lighting gem portal",
      "yard lighting government contract"
    ]
  },
  {
    "id": "yard-maintenance-tenders",
    "name": "Yard Maintenance Tenders",
    "shortName": "Yard Maintenance",
    "category": "Youth & Yard Services",
    "letter": "Y",
    "description": "End-to-end tender consultancy for Yard Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "yard maintenance tenders",
      "yard maintenance tender consultancy",
      "yard maintenance bidding services",
      "yard maintenance gem portal",
      "yard maintenance government contract"
    ]
  },
  {
    "id": "yarn-supply-tenders",
    "name": "Yarn Supply Tenders",
    "shortName": "Yarn Supply",
    "category": "Youth & Yard Services",
    "letter": "Y",
    "description": "End-to-end tender consultancy for Yarn Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹5 Lakhs to ₹3 Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "yarn supply tenders",
      "yarn supply tender consultancy",
      "yarn supply bidding services",
      "yarn supply gem portal",
      "yarn supply government contract"
    ]
  },
  {
    "id": "zonal-development-work-tenders",
    "name": "Zonal Development Work Tenders",
    "shortName": "Zonal Development Work",
    "category": "Zone & Specialized Services",
    "letter": "Z",
    "description": "End-to-end tender consultancy for Zonal Development Work tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "zonal development work tenders",
      "zonal development work tender consultancy",
      "zonal development work bidding services",
      "zonal development work gem portal",
      "zonal development work government contract"
    ]
  },
  {
    "id": "zero-liquid-discharge-plant-tenders",
    "name": "Zero Liquid Discharge Plant Tenders",
    "shortName": "Zero Liquid Discharge Plant",
    "category": "Zone & Specialized Services",
    "letter": "Z",
    "description": "End-to-end tender consultancy for Zero Liquid Discharge Plant tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "zero liquid discharge plant tenders",
      "zero liquid discharge plant tender consultancy",
      "zero liquid discharge plant bidding services",
      "zero liquid discharge plant gem portal",
      "zero liquid discharge plant government contract"
    ]
  },
  {
    "id": "zebra-crossing-marking-tenders",
    "name": "Zebra Crossing Marking Tenders",
    "shortName": "Zebra Crossing Marking",
    "category": "Zone & Specialized Services",
    "letter": "Z",
    "description": "End-to-end tender consultancy for Zebra Crossing Marking tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "zebra crossing marking tenders",
      "zebra crossing marking tender consultancy",
      "zebra crossing marking bidding services",
      "zebra crossing marking gem portal",
      "zebra crossing marking government contract"
    ]
  },
  {
    "id": "zoological-equipment-supply-tenders",
    "name": "Zoological Equipment Supply Tenders",
    "shortName": "Zoological Equipment Supply",
    "category": "Zone & Specialized Services",
    "letter": "Z",
    "description": "End-to-end tender consultancy for Zoological Equipment Supply tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "OEM Manufacturer Authorization Form (MAF)",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Supply & Delivery Contract",
      "Rate Contract (RC)",
      "OEM & Reseller GeM Bidding"
    ],
    "keywords": [
      "zoological equipment supply tenders",
      "zoological equipment supply tender consultancy",
      "zoological equipment supply bidding services",
      "zoological equipment supply gem portal",
      "zoological equipment supply government contract"
    ]
  },
  {
    "id": "zone-office-maintenance-tenders",
    "name": "Zone Office Maintenance Tenders",
    "shortName": "Zone Office Maintenance",
    "category": "Zone & Specialized Services",
    "letter": "Z",
    "description": "End-to-end tender consultancy for Zone Office Maintenance tenders across India. We provide comprehensive bid documentation, eligibility scrutiny, GFR 170 MSME EMD waiver representation, technical folder audit, BOQ pricing analysis, and guaranteed error-free portal submission on GeM 4.0, CPPP, and state boards.",
    "typicalPortals": [
      "GeM 4.0 Portal",
      "Central CPPP (eprocure.gov.in)",
      "State e-Tenders (SPPP/nProcure)",
      "Mahanagar Palika / Smart Cities"
    ],
    "mandatoryDocs": [
      "Firm PAN, Incorporation / Partnership Deed",
      "GST Certificate & 3 Years ITR",
      "CA Audited Turnover Certificate with UDIN",
      "Class 3 Digital Signature Certificate (DSC)",
      "Past Performance & Similar Completion Work Orders"
    ],
    "sampleTenderValue": "₹25 Lakhs to ₹20+ Crore",
    "tenderTypes": [
      "Service Level Agreement (SLA)",
      "Annual Maintenance Contract (AMC)",
      "L1 / QCBS Bid"
    ],
    "keywords": [
      "zone office maintenance tenders",
      "zone office maintenance tender consultancy",
      "zone office maintenance bidding services",
      "zone office maintenance gem portal",
      "zone office maintenance government contract"
    ]
  }
];

export const TENDER_KEYWORD_CATEGORIES = [
  'All',
  "Agriculture & Administration",
  "Building & Business",
  "Civil & Construction",
  "Development & Distribution",
  "Electrical & Engineering",
  "Facilities & Food",
  "Government & General Supply",
  "Healthcare & Hospitality",
  "IT & Infrastructure",
  "Jobs & Joints",
  "Kitchen & Knowledge Services",
  "Logistics & Laboratory",
  "Machinery & Manufacturing",
  "Network & Natural Resources",
  "Office & Operations",
  "Public Works & Procurement",
  "Quality & Testing",
  "Roads & Repairs",
  "Security & Supply",
  "Transportation & Technology",
  "Utilities & Urban Development",
  "Vehicles & Validation",
  "Water & Waste Management",
  "X-Ray & Specialist Equipment",
  "Youth & Yard Services",
  "Zone & Specialized Services"
] as const;

export const ALPHABET_INDEX = [
  'All',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
] as const;

export function getTenderKeywordBySlug(slug: string): TenderKeywordItem | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().replace(/^\/+|\/+$/g, '').trim();
  return TENDER_KEYWORDS_DATA.find((k) => k.id.toLowerCase() === clean);
}
