import fs from 'fs';
import path from 'path';

interface RawKeywordSection {
  letter: string;
  section: string;
  category: 'Civil & Infrastructure' | 'Healthcare & Medical' | 'Electrical & Energy' | 'IT & Telecom' | 'Security & Facility' | 'Logistics & Transport' | 'Industrial & Materials' | 'Specialized Services';
  keywords: string[];
}

const SECTIONS: RawKeywordSection[] = [
  {
    letter: 'A',
    section: 'Agriculture & Administration',
    category: 'Industrial & Materials',
    keywords: [
      'Agricultural Equipment',
      'Agriculture Services',
      'Air Conditioning',
      'Airport Services',
      'Ambulance Services',
      'Animal Feed Supply',
      'Architectural Consultancy',
      'Asset Management',
      'Audit Services',
      'Automation Systems',
      'Annual Maintenance Contract',
      'Advertising Services',
      'Apparel Supply',
      'Audio Visual Equipment',
    ],
  },
  {
    letter: 'B',
    section: 'Building & Business',
    category: 'Civil & Infrastructure',
    keywords: [
      'Building Construction',
      'Building Maintenance',
      'Biomedical Equipment',
      'Banking Services',
      'Barricading Work',
      'Battery Supply',
      'Bio-Medical Waste Management',
      'Bus Hiring',
      'Bus Body Building',
      'Borewell Drilling',
      'Bridge Construction',
      'Book Printing',
      'Business Consultancy',
      'Broadband Services',
    ],
  },
  {
    letter: 'C',
    section: 'Civil & Construction',
    category: 'Civil & Infrastructure',
    keywords: [
      'Civil Works',
      'Construction',
      'Construction Materials',
      'CCTV Installation',
      'Cleaning Services',
      'Computer Hardware',
      'Computer Software',
      'Consultancy Services',
      'Catering Services',
      'Car Hiring',
      'Chemical Supply',
      'Chairs Supply',
      'Corporate Training',
      'Courier Services',
      'Cyber Security',
      'Cold Storage',
      'Concrete Work',
      'Campus Development',
      'Calibration Services',
    ],
  },
  {
    letter: 'D',
    section: 'Development & Distribution',
    category: 'IT & Telecom',
    keywords: [
      'Data Entry Services',
      'Data Center',
      'Database Management',
      'Diesel Supply',
      'Digital Marketing',
      'Digital Signature Certificate',
      'Diesel Generator',
      'Drainage Work',
      'Drinking Water Supply',
      'Demolition Work',
      'Diagnostic Equipment',
      'Document Scanning',
      'Dairy Products',
      'Desktop Computers',
      'Disinfection Services',
    ],
  },
  {
    letter: 'E',
    section: 'Electrical & Engineering',
    category: 'Electrical & Energy',
    keywords: [
      'Electrical Works',
      'Electrical Equipment',
      'Electronics Supply',
      'Elevator Installation',
      'Energy Audit',
      'Engineering Consultancy',
      'Earthwork',
      'Electric Vehicle',
      'Electric Bus Supply',
      'Electrical Maintenance',
      'E-Tendering Services',
      'Environmental Consultancy',
      'Excavation Work',
      'Exhibition Management',
      'Emergency Lighting',
    ],
  },
  {
    letter: 'F',
    section: 'Facilities & Food',
    category: 'Security & Facility',
    keywords: [
      'Facility Management',
      'Fire Fighting Equipment',
      'Fire Safety Services',
      'Furniture Supply',
      'Food Supply',
      'Fertilizer Supply',
      'Flooring Work',
      'Fleet Management',
      'Footwear Supply',
      'Fabric Supply',
      'Fencing Work',
      'Filtration Plant',
      'Financial Consultancy',
      'Freight Services',
    ],
  },
  {
    letter: 'G',
    section: 'Government & General Supply',
    category: 'Specialized Services',
    keywords: [
      'GeM Registration Services',
      'General Civil Works',
      'Generator Supply',
      'Government Building Maintenance',
      'Garbage Collection',
      'Gardening Services',
      'Gas Pipeline Work',
      'GIS Mapping',
      'Goods Transportation',
      'Grading Work',
      'Green Energy Solutions',
      'Groundwater Survey',
      'Gym Equipment',
      'Guest House Maintenance',
    ],
  },
  {
    letter: 'H',
    section: 'Healthcare & Hospitality',
    category: 'Healthcare & Medical',
    keywords: [
      'Hospital Equipment',
      'Hospital Housekeeping',
      'Healthcare Services',
      'Heat Pump Supply',
      'HVAC Works',
      'Hotel Management Services',
      'Hostel Maintenance',
      'Housekeeping Services',
      'Horticulture Services',
      'Highway Construction',
      'Heavy Machinery',
      'Human Resource Services',
      'Health Insurance',
      'Hydraulic Equipment',
    ],
  },
  {
    letter: 'I',
    section: 'IT & Infrastructure',
    category: 'IT & Telecom',
    keywords: [
      'IT Services',
      'IT Hardware Supply',
      'IT Consultancy',
      'Internet Services',
      'Industrial Equipment',
      'Infrastructure Development',
      'Interior Design',
      'Irrigation Works',
      'Information Security',
      'Integrated Security Systems',
      'Inspection Services',
      'Installation Services',
      'Industrial Chemicals',
      'Instrument Calibration',
    ],
  },
  {
    letter: 'J',
    section: 'Jobs & Joints',
    category: 'Security & Facility',
    keywords: [
      'Janitorial Services',
      'Job Work',
      'JCB Hiring',
      'Jewellery Supply',
      'Junction Improvement Work',
      'Jute Products Supply',
      'Jointing Materials',
      'Judicial Infrastructure Maintenance',
    ],
  },
  {
    letter: 'K',
    section: 'Kitchen & Knowledge Services',
    category: 'Security & Facility',
    keywords: [
      'Kitchen Equipment',
      'Kitchen Utensils',
      'Kitchen Construction',
      'Knowledge Management Services',
      'Laboratory Kits',
      'Knowledge Centre Development',
      'Kitchen Maintenance',
    ],
  },
  {
    letter: 'L',
    section: 'Logistics & Laboratory',
    category: 'Logistics & Transport',
    keywords: [
      'Laboratory Equipment',
      'Laboratory Chemicals',
      'Land Survey',
      'Landscaping Services',
      'Lift Maintenance',
      'Legal Consultancy',
      'Library Books Supply',
      'Lighting Equipment',
      'Logistics Services',
      'Laptop Supply',
      'Laundry Services',
      'LED Lights Supply',
      'Laboratory Furniture',
      'Lease of Vehicles',
    ],
  },
  {
    letter: 'M',
    section: 'Machinery & Manufacturing',
    category: 'Industrial & Materials',
    keywords: [
      'Machinery Supply',
      'Medical Equipment',
      'Medical Consumables',
      'Manpower Supply',
      'Maintenance Services',
      'Mechanical Works',
      'Manufacturing Equipment',
      'Mobile Phones Supply',
      'Municipal Services',
      'Material Testing',
      'Mining Equipment',
      'Metal Fabrication',
      'Microbiology Laboratory Equipment',
      'Modular Furniture',
      'Make in India Products',
    ],
  },
  {
    letter: 'N',
    section: 'Network & Natural Resources',
    category: 'IT & Telecom',
    keywords: [
      'Networking Equipment',
      'Network Maintenance',
      'Non-IT Manpower',
      'Nursing Services',
      'Nutritional Food Supply',
      'New Building Construction',
      'Natural Resource Survey',
      'Noise Monitoring Equipment',
      'NDT Testing Services',
      'Network Security',
      'Nursery Plants Supply',
    ],
  },
  {
    letter: 'O',
    section: 'Office & Operations',
    category: 'Specialized Services',
    keywords: [
      'Office Furniture',
      'Office Equipment',
      'Office Stationery',
      'Office Building Maintenance',
      'OEM Authorization Support',
      'Operation and Maintenance',
      'Outsourcing Services',
      'Optical Equipment',
      'Online Examination Services',
      'Occupational Safety Services',
      'Oil Supply',
      'Outdoor Advertising',
    ],
  },
  {
    letter: 'P',
    section: 'Public Works & Procurement',
    category: 'Civil & Infrastructure',
    keywords: [
      'Painting Work',
      'Pest Control Services',
      'Printing Services',
      'Pharmaceutical Supply',
      'Plumbing Work',
      'Project Management Consultancy',
      'Pump Supply',
      'Power Supply Equipment',
      'Public Health Engineering',
      'Pipes Supply',
      'Plant Maintenance',
      'Personal Protective Equipment',
      'Parking Management',
      'Pre-Fabricated Structures',
      'Product Listing Services',
      'Procurement Consultancy',
      'Pollution Control Equipment',
      'Photocopier Supply',
    ],
  },
  {
    letter: 'Q',
    section: 'Quality & Testing',
    category: 'Specialized Services',
    keywords: [
      'Quality Control Services',
      'Quality Assurance Consultancy',
      'Quality Testing Laboratory',
      'Quantity Surveying',
      'Quality Audit',
      'Quarry Development',
      'Question Paper Printing',
      'Queue Management System',
    ],
  },
  {
    letter: 'R',
    section: 'Roads & Repairs',
    category: 'Civil & Infrastructure',
    keywords: [
      'Road Construction',
      'Road Repair Work',
      'Road Marking',
      'Railway Works',
      'Roofing Work',
      'Repair and Maintenance',
      'Renewable Energy Systems',
      'Rainwater Harvesting',
      'Recruitment Services',
      'Refurbishment Work',
      'Rope Supply',
      'RO Water Purifier',
      'Research Consultancy',
      'Road Safety Equipment',
      'Record Management',
      'Refrigeration Equipment',
    ],
  },
  {
    letter: 'S',
    section: 'Security & Supply',
    category: 'Security & Facility',
    keywords: [
      'Security Services',
      'Software Development',
      'Solar Power Plant',
      'Solar Street Lights',
      'Supply of Goods',
      'Sanitation Services',
      'Surveillance Systems',
      'Staff Uniform Supply',
      'Sports Equipment',
      'Street Lighting',
      'Structural Engineering',
      'Survey Services',
      'Sewerage Work',
      'School Furniture',
      'School Bus Hiring',
      'Signage Boards',
      'Skill Development Training',
      'Smart Classroom',
      'Steel Supply',
      'Swimming Pool Maintenance',
    ],
  },
  {
    letter: 'T',
    section: 'Transportation & Technology',
    category: 'Logistics & Transport',
    keywords: [
      'Tender Bidding Consultancy',
      'Tender Documentation Services',
      'Tender Management Services',
      'Telecommunication Equipment',
      'Transportation Services',
      'Transformer Supply',
      'Training Services',
      'Tractor Hiring',
      'Traffic Management Systems',
      'Testing Equipment',
      'Town Planning Consultancy',
      'Turnkey Projects',
      'Technical Consultancy',
      'Tyre Supply',
      'Thermal Insulation Work',
      'Tube Well Construction',
    ],
  },
  {
    letter: 'U',
    section: 'Utilities & Urban Development',
    category: 'Civil & Infrastructure',
    keywords: [
      'Urban Development Works',
      'UPS Supply',
      'Utility Maintenance',
      'Uniform Supply',
      'Underground Cable Work',
      'Uninterruptible Power Supply',
      'Used Vehicle Auction',
      'Water Utility Services',
      'User Training Services',
      'Urban Landscaping',
    ],
  },
  {
    letter: 'V',
    section: 'Vehicles & Validation',
    category: 'Logistics & Transport',
    keywords: [
      'Vehicle Hiring',
      'Vehicle Maintenance',
      'Ventilation Systems',
      'Video Conferencing Equipment',
      'Vehicle Tracking System',
      'Veterinary Equipment',
      'Valve Supply',
      'Vocational Training',
      'Vertical Garden Installation',
      'Verification Services',
    ],
  },
  {
    letter: 'W',
    section: 'Water & Waste Management',
    category: 'Civil & Infrastructure',
    keywords: [
      'Water Supply Work',
      'Water Treatment Plant',
      'Waste Management Services',
      'Water Tank Cleaning',
      'Waterproofing Work',
      'Website Development',
      'Web Application Development',
      'Weighbridge Supply',
      'Warehouse Construction',
      'Welding Work',
      'Wireless Networking',
      'Wastewater Treatment',
      'Workstation Supply',
      'Water Pipeline Construction',
      'Water Quality Testing',
    ],
  },
  {
    letter: 'X',
    section: 'X-Ray & Specialist Equipment',
    category: 'Healthcare & Medical',
    keywords: [
      'X-Ray Machine Supply',
      'X-Ray Equipment Maintenance',
      'X-Ray Film Supply',
      'Xenon Lighting Equipment',
    ],
  },
  {
    letter: 'Y',
    section: 'Youth & Yard Services',
    category: 'Specialized Services',
    keywords: [
      'Yoga Training Services',
      'Youth Skill Development',
      'Yard Development Work',
      'Yard Lighting',
      'Yard Maintenance',
      'Yarn Supply',
    ],
  },
  {
    letter: 'Z',
    section: 'Zone & Specialized Services',
    category: 'Civil & Infrastructure',
    keywords: [
      'Zonal Development Work',
      'Zero Liquid Discharge Plant',
      'Zebra Crossing Marking',
      'Zoological Equipment Supply',
      'Zone Office Maintenance',
    ],
  },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function refineCategory(kw: string, defaultCat: any): string {
  const k = kw.toLowerCase();
  if (k.includes('medical') || k.includes('hospital') || k.includes('biomedical') || k.includes('health') || k.includes('diagnostic') || k.includes('x-ray') || k.includes('nursing') || k.includes('ambulance') || k.includes('veterinary')) {
    return 'Healthcare & Medical';
  }
  if (k.includes('solar') || k.includes('electrical') || k.includes('transformer') || k.includes('generator') || k.includes('battery') || k.includes('lighting') || k.includes('energy') || k.includes('power') || k.includes('ups') || k.includes('cable') || k.includes('hvac')) {
    return 'Electrical & Energy';
  }
  if (k.includes('computer') || k.includes('software') || k.includes('hardware') || k.includes('it ') || k.includes('data') || k.includes('network') || k.includes('cyber') || k.includes('cctv') || k.includes('surveillance') || k.includes('broadband') || k.includes('internet') || k.includes('web') || k.includes('gis') || k.includes('telecom')) {
    return 'IT & Telecom';
  }
  if (k.includes('security') || k.includes('cleaning') || k.includes('housekeeping') || k.includes('manpower') || k.includes('canteen') || k.includes('catering') || k.includes('pest control') || k.includes('sanitation') || k.includes('fire safety') || k.includes('fire fighting') || k.includes('facility')) {
    return 'Security & Facility';
  }
  if (k.includes('road') || k.includes('bridge') || k.includes('building') || k.includes('civil') || k.includes('construction') || k.includes('drainage') || k.includes('water supply') || k.includes('pipeline') || k.includes('borewell') || k.includes('flooring') || k.includes('excavation') || k.includes('demolition') || k.includes('sewerage')) {
    return 'Civil & Infrastructure';
  }
  if (k.includes('transport') || k.includes('vehicle') || k.includes('bus') || k.includes('car hiring') || k.includes('logistics') || k.includes('freight') || k.includes('fleet') || k.includes('courier')) {
    return 'Logistics & Transport';
  }
  if (k.includes('machinery') || k.includes('chemical') || k.includes('fertilizer') || k.includes('furniture') || k.includes('steel') || k.includes('metal') || k.includes('apparel') || k.includes('textile') || k.includes('printing') || k.includes('paper') || k.includes('stationery')) {
    return 'Industrial & Materials';
  }
  return defaultCat;
}

function generatePortals(kw: string, cat: string): string[] {
  const k = kw.toLowerCase();
  if (k.includes('railway')) return ['Indian Railways IREPS', 'GeM 4.0', 'CPPP'];
  if (k.includes('road') || k.includes('highway')) return ['State PWD (R&B)', 'NHAI eProcure', 'PMGSY Portal', 'CPPP'];
  if (k.includes('medical') || k.includes('hospital')) return ['GeM 4.0', 'Central CPPP', 'State Medical Services Corp (RMSCL/GMSCL)', 'AIIMS'];
  if (k.includes('solar') || k.includes('energy')) return ['SECI Portal', 'State Renewable Agency (GEDA/MEDA)', 'GeM 4.0', 'CPPP'];
  if (cat === 'Civil & Infrastructure') return ['State PWD / nProcure / MahaTenders', 'CPWD eProcure', 'GeM 4.0 Custom Bids', 'Municipal Portals'];
  return ['Government e-Marketplace (GeM 4.0)', 'Central Public Procurement Portal (CPPP)', 'State e-Procurement Portals'];
}

function generateDocs(kw: string, cat: string): string[] {
  const k = kw.toLowerCase();
  const base = [
    'Class-3 Combo DSC (Signing + Encryption) Crypto USB Token',
    'CA Audited Turnover Certificate with valid ICAI UDIN (Last 3 Financial Years)',
    'GST Registration Certificate (Form REG-06) & Latest 3B/GSTR-1 Filings',
  ];

  if (cat === 'Civil & Infrastructure') {
    return [
      ...base,
      'Valid PWD / CPWD / Municipal Registered Contractor License',
      'Similar Nature Work Completion Certificates with Performance Reports',
      'Solvency Certificate from Nationalized / Scheduled Bank (20-40% Value)',
    ];
  }

  if (cat === 'Healthcare & Medical') {
    return [
      ...base,
      'ISO 13485:2016 Medical Devices QMS & CE / FDA Approval',
      'Valid Drug License / CDSCO Medical Device Manufacturing / Import License',
      'OEM Manufacturer Authorization Form (MAF) with Warranty Commitment',
    ];
  }

  if (cat === 'Electrical & Energy') {
    return [
      ...base,
      'Class-A Electrical Contractor License from State Energy Inspectorate',
      'CPRI / ERDA / BIS Type Test Reports & Bureau of Energy Efficiency (BEE) Rating',
      'OEM Authorization Code on GeM 4.0 Portal',
    ];
  }

  if (cat === 'IT & Telecom') {
    return [
      ...base,
      'OEM Authorization Code & Brand Pairing on GeM 4.0',
      'ISO 27001 Information Security & ISO 9001 Quality Certification',
      'BIS CRS Compulsory Registration Scheme Certificate for IT Hardware',
    ];
  }

  if (cat === 'Security & Facility') {
    return [
      ...base,
      k.includes('security') ? 'Valid PSARA License for the Target State/Union Territory' : 'Labour Commissioner Contractor License (Form VI)',
      'EPFO & ESIC Electronic Monthly Challans & Payment Proofs',
      'Minimum Wages Act Statutory Compliance Affidavit on Non-Judicial Stamp',
    ];
  }

  return [
    ...base,
    'OEM Authorization Letter / Brand Representation Code on GeM 4.0',
    'ISO 9001:2015 Quality Management System Certification',
    'Make in India (MII) Class-I/II Local Content Declaration Affidavit',
  ];
}

const seenSlugs = new Set<string>();
const allItems: any[] = [];

for (const sec of SECTIONS) {
  for (const kw of sec.keywords) {
    let slug = slugify(kw) + '-tenders';
    if (seenSlugs.has(slug)) {
      slug = slugify(`${kw}-${sec.letter}`) + '-tenders';
    }
    seenSlugs.add(slug);

    const effectiveCat = refineCategory(kw, sec.category);
    const portals = generatePortals(kw, effectiveCat);
    const docs = generateDocs(kw, effectiveCat);

    const desc = `End-to-end tender bidding consultancy, technical Packet-A document packaging, BOQ commercial pricing, GFR 170 MSME EMD exemption, and live portal submission for ${kw} across GeM 4.0, central ministries, and state e-procurement departments.`;

    allItems.push({
      id: slug,
      name: `${kw} Tenders`,
      shortName: kw,
      section: sec.section,
      category: effectiveCat,
      letter: sec.letter,
      description: desc,
      typicalPortals: portals,
      mandatoryDocs: docs,
      sampleTenderValue: '₹20 Lakhs to ₹50+ Crore',
      tenderTypes: ['Item Rate', 'Rate Contract', 'Supply & Services', 'Custom GeM Bid'],
      keywords: [
        kw.toLowerCase(),
        `${kw.toLowerCase()} tender`,
        `${kw.toLowerCase()} bidding`,
        `${kw.toLowerCase()} gem portal`,
        `${kw.toLowerCase()} consultancy`,
      ],
    });
  }
}

const fileContent = `export interface TenderKeywordItem {
  id: string; // slug e.g. 'agricultural-equipment-tenders'
  name: string; // e.g. 'Agricultural Equipment Tenders'
  shortName: string; // e.g. 'Agricultural Equipment'
  section: string; // e.g. 'Agriculture & Administration'
  category: 'Civil & Infrastructure' | 'Healthcare & Medical' | 'Electrical & Energy' | 'IT & Telecom' | 'Security & Facility' | 'Logistics & Transport' | 'Industrial & Materials' | 'Specialized Services';
  letter: string; // 'A' through 'Z'
  description: string;
  typicalPortals: string[];
  mandatoryDocs: string[];
  sampleTenderValue: string;
  tenderTypes: string[];
  keywords: string[];
}

export const TENDER_KEYWORDS_DATA: TenderKeywordItem[] = ${JSON.stringify(allItems, null, 2)};

export const TENDER_KEYWORD_CATEGORIES = [
  'All',
  'Civil & Infrastructure',
  'Healthcare & Medical',
  'Electrical & Energy',
  'IT & Telecom',
  'Security & Facility',
  'Logistics & Transport',
  'Industrial & Materials',
  'Specialized Services',
] as const;

export const ALPHABET_INDEX = [
  'All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
] as const;

export function getTenderKeywordBySlug(slug: string): TenderKeywordItem | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().replace(/^\\/+|\\/+$/g, '').trim();
  return TENDER_KEYWORDS_DATA.find((k) => k.id.toLowerCase() === clean);
}
`;

fs.writeFileSync(path.resolve(process.cwd(), 'src/lib/tenderKeywordsData.ts'), fileContent, 'utf-8');
console.log(`Successfully generated ${allItems.length} tender keywords in src/lib/tenderKeywordsData.ts`);
