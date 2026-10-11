import React, { useState, useMemo } from 'react';
import { 
  X, 
  FileText, 
  Copy, 
  Check, 
  Download, 
  MessageCircle, 
  ShieldCheck, 
  AlertTriangle, 
  FileCheck, 
  Building2, 
  Award,
  ExternalLink,
  Send,
  Edit3,
  Eye,
  Printer,
  Sparkles,
  RotateCcw,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';

interface StatutoryLettersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry?: (servicePref?: string) => void;
  defaultLetter?: 'oem' | 'representation' | 'acceptance';
}

export const StatutoryLettersModal: React.FC<StatutoryLettersModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
  defaultLetter = 'oem'
}) => {
  const [activeLetter, setActiveLetter] = useState<'oem' | 'representation' | 'acceptance'>(defaultLetter);
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isCustomizeMode, setIsCustomizeMode] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');

  // Interactive user fields to USE and fill template
  const todayFormatted = useMemo(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }, []);

  const [formData, setFormData] = useState({
    tenderRef: 'GEM/2026/B/876543',
    departmentName: 'The Tender Inviting Authority, Executive Engineer Cell',
    buyerLocation: 'New Delhi / Central Procurement Division',
    companyName: 'M/s Apex Infotech & Engineering Solutions Pvt. Ltd.',
    companyAddress: 'Plot 42, GIDC Industrial Estate, Ahmedabad, Gujarat - 382445',
    gstin: '24AAACA1234A1Z5',
    pan: 'AAACA1234A',
    signatoryName: 'Rajesh Sharma',
    signatoryDesignation: 'Managing Director / Authorized Signatory',
    contactNumber: '+91 97277 97003',
    officialEmail: 'procurement@apexengineers.in',
    oemName: 'Cisco Systems India Pvt. Ltd. / Bharat Electronics Ltd.',
    oemProduct: 'Enterprise Network Switches & Smart Surveillance Hardware',
    oemWarrantyYears: '3 Years Comprehensive Onsite',
    date: todayFormatted
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleResetForm = () => {
    setFormData({
      tenderRef: 'GEM/2026/B/876543',
      departmentName: 'The Tender Inviting Authority, Executive Engineer Cell',
      buyerLocation: 'New Delhi / Central Procurement Division',
      companyName: 'M/s Apex Infotech & Engineering Solutions Pvt. Ltd.',
      companyAddress: 'Plot 42, GIDC Industrial Estate, Ahmedabad, Gujarat - 382445',
      gstin: '24AAACA1234A1Z5',
      pan: 'AAACA1234A',
      signatoryName: 'Rajesh Sharma',
      signatoryDesignation: 'Managing Director / Authorized Signatory',
      contactNumber: '+91 97277 97003',
      officialEmail: 'procurement@apexengineers.in',
      oemName: 'Cisco Systems India Pvt. Ltd. / Bharat Electronics Ltd.',
      oemProduct: 'Enterprise Network Switches & Smart Surveillance Hardware',
      oemWarrantyYears: '3 Years Comprehensive Onsite',
      date: todayFormatted
    });
  };

  if (!isOpen) return null;

  // Computed Customized Letter Texts
  const oemLetterText = `[ON OFFICIAL LETTERHEAD OF THE ORIGINAL EQUIPMENT MANUFACTURER (OEM)]

Ref. No.: OEM/AUTH/2026/${formData.tenderRef || '[TENDER-REF-NO]'}
Date: ${formData.date}

To,
${formData.departmentName}
${formData.buyerLocation}

Subject: Manufacturer’s Authorization Form (MAF) & OEM Warranty Commitment
Tender / GeM Bid Reference No.: ${formData.tenderRef}
Item / Scope of Work Description: ${formData.oemProduct}

Dear Sir/Madam,

1. We, ${formData.oemName}, having our registered corporate headquarters and manufacturing facilities located at [OEM REGISTERED ADDRESS], who are established and reputable manufacturers of ${formData.oemProduct}, do hereby confirm our official authorization.

2. We hereby authorize:
   ${formData.companyName}
   Address: ${formData.companyAddress}
   GSTIN: ${formData.gstin} | PAN: ${formData.pan}
   to submit a bid, negotiate, and conclude the contract with your esteemed department against the above-referenced tender / GeM custom bid.

3. OEM Warranty & Technical Support Commitment:
   We hereby extend our full comprehensive manufacturer’s warranty of ${formData.oemWarrantyYears} for the goods and services offered by the authorized bidder against this invitation for tender. We further guarantee uninterrupted supply of genuine spare parts, firmware updates, and direct manufacturer technical support throughout the operational lifecycle.

4. GeM 4.0 Digital Authorization Code Verification:
   In strict compliance with GeM GTC Clause 4.2, this authorization has been digitally mapped and verified on our OEM Master Dashboard under Authorization Code: OEM-AUTH-2026-B4U.

Yours faithfully,

For and on behalf of ${formData.oemName}

[Authorized Signatory Signature]
Name: [OEM Vice President / Country Head]
Designation: Director - Government Business & Public Sector
Mobile: ${formData.contactNumber} | Official Email: support@oem-brand.in
Official OEM Seal & Stamp`;

  const representationLetterText = `[ON BIDDER LETTERHEAD - STARTUP / MSME ENTERPRISE]

Ref. No.: REP/GFR173/2026/${formData.tenderRef || '[TENDER-REF]'}
Date: ${formData.date}

To,
The Chairman / Tender Inviting Committee,
${formData.departmentName}
${formData.buyerLocation}

Subject: Formal Representation & Request for Corrigendum: Waiver of Prior Turnover & Experience under GFR 2017 Rule 173(i) & DPIIT Notification G.S.R. 127(E)
Tender Reference No.: ${formData.tenderRef}
Subject Work: Supply & Implementation of ${formData.oemProduct}

Respected Sir/Madam,

1. We, ${formData.companyName}, are a recognized enterprise under the Startup India initiative, holding valid DPIIT Recognition Certificate No.: [DPIIT-XXXXX] and MSME Udyam Registration No.: [UDYAM-XX-XX-XXXXXXX].

2. Observation of Restrictive Clause in Current NIT:
   We note that the subject Tender mandates restrictive prior financial turnover and prior years of similar past experience criteria. 

3. Statutory Legal Reference & Ministry Mandate:
   We respectfully draw your kind attention to the statutory provisions governing public procurement across all Central Ministries, Departments, and PSUs:
   a) General Financial Rules (GFR) 2017 Rule 173(i): Expressly mandates that in procurement of goods and services, relaxation of prior turnover and prior experience criteria MUST be provided to DPIIT-recognized Startups, subject to meeting technical specifications.
   b) Ministry of Finance Office Memorandum No. F.20/2/2014-PPD: Directs all procuring entities to unconditionally exempt recognized Startups and Micro/Small Enterprises from prior turnover and experience criteria.
   c) Rule 170 of GFR 2017: Mandates 100% Earnest Money Deposit (EMD) exemption for MSMEs and recognized Startups upon submission of valid Udyam certificate.

4. Prayer / Request:
   In view of the statutory directives cited above, we humbly pray that your esteemed committee kindly issue an official Corrigendum / Addendum to the NIT before the technical bid submission date:
   i. Granting 100% waiver of prior turnover and experience to DPIIT Startups.
   ii. Confirming EMD exemption as per GFR Rule 170.

We stand fully compliant with all technical specifications, delivery schedules, and quality standards.

Yours sincerely,

For ${formData.companyName}

[Authorized Signatory Signature]
Name: ${formData.signatoryName}
Designation: ${formData.signatoryDesignation}
Contact: ${formData.contactNumber} | Email: ${formData.officialEmail}
Enterprise Seal / Digital Signature`;

  const acceptanceLetterText = `[TENDER ACCEPTANCE UNDERTAKING - ANNEXURE FORMAT]
(To be printed on Bidder Official Letterhead & submitted in Packet-A Technical Cover)

Ref. No.: TAU/BID/2026/${formData.tenderRef || '[TENDER-NO]'}
Date: ${formData.date}

To,
The Tender Inviting Authority (TIA),
${formData.departmentName}
${formData.buyerLocation}

Subject: Unconditional Acceptance of All Terms and Conditions of Tender
Tender Reference No.: ${formData.tenderRef}
Name of Work / Supply: ${formData.oemProduct}

Dear Sir/Madam,

1. I / We have downloaded and examined the complete tender document(s) for the above mentioned 'Tender / Work', including all corrigenda / addenda issued by the department.

2. I / We hereby unconditionally accept all the terms, conditions, specifications, integrity pact, and general clauses of the tender document in its entirety without any deviation, caveat, or reservation.

3. We hereby certify that neither our enterprise (${formData.companyName}), nor any of its partners/directors, have been blacklisted or debarred by any Central / State Government department, Public Sector Undertaking (PSU), or autonomous body.

4. We declare that the technical bid submitted by us strictly adheres to the technical parameters specified in the NIT, and no clause or specification has been tampered with or altered in any manner.

5. In case any provision of this tender is found to be violated or any declaration is found false, the department shall have full legal right to reject the bid and forfeit the EMD without prior notice.

Yours faithfully,

For ${formData.companyName}

[Authorized Signatory with Official Stamp]
Name: ${formData.signatoryName}
Designation: ${formData.signatoryDesignation}
GSTIN: ${formData.gstin} | PAN: ${formData.pan}
Class-3 DSC Token Serial No.: [DSC-TOKEN-SERIAL-NUMBER]`;

  const currentText = activeLetter === 'oem' 
    ? oemLetterText 
    : activeLetter === 'representation' 
    ? representationLetterText 
    : acceptanceLetterText;

  const currentLetterTitle = activeLetter === 'oem' 
    ? 'OEM Authorization Letter (MAF Form)' 
    : activeLetter === 'representation' 
    ? 'GFR 173(i) Startup Representation Letter' 
    : 'Tender Acceptance Undertaking Letter';

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadDoc = () => {
    const filename = activeLetter === 'oem'
      ? 'OEM_Authorization_Letter_MAF.txt'
      : activeLetter === 'representation'
      ? 'GFR_173_Representation_Letter.txt'
      : 'Tender_Acceptance_Undertaking.txt';

    const element = document.createElement('a');
    const file = new Blob([currentText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>${currentLetterTitle}</title>
          <style>
            body { font-family: monospace; font-size: 13px; line-height: 1.6; padding: 40px; color: #000; }
            pre { white-space: pre-wrap; font-family: inherit; }
          </style>
        </head>
        <body>
          <pre>${currentText}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleConsultWhatsApp = () => {
    const topic = activeLetter === 'oem' 
      ? 'OEM Authorization Letter / MAF Code pairing' 
      : activeLetter === 'representation'
      ? 'GFR 173(i) Representation Letter drafting' 
      : 'Tender Acceptance & Packet-A documentation';
    const url = getWhatsAppUrl(`Hello Bid Tender 4 U, I want to use and customize the ${topic} for Tender: ${formData.tenderRef}. Please review my draft.`);
    window.open(url, '_blank');
  };

  const fontSizeClass = fontSize === 'sm' ? 'text-xs' : fontSize === 'lg' ? 'text-sm' : 'text-xs sm:text-[13px]';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-2 sm:p-4 md:p-6 flex items-center justify-center animate-in fade-in duration-200 text-left">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#D9E0E8] overflow-hidden z-10 flex flex-col max-h-[94vh] animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Header */}
        <div className="p-3.5 sm:p-5 bg-[#F8F9FA] border-b border-[#D9E0E8] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#1D3557] text-[#D4AF70] flex items-center justify-center shrink-0 border border-[#D4AF70]/40 shadow-xs">
              <FileText className="w-5 h-5 text-[#D4AF70]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#996515] bg-amber-100/90 px-2 py-0.5 rounded border border-amber-300">
                  Ready-to-Use Formats
                </span>
                <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                  GeM & GFR 2017 Compliant
                </span>
              </div>
              <h2 className="font-display text-base sm:text-xl font-black text-[#1D3557] mt-0.5 truncate">
                Official Tender Letters &amp; Proforma Formats
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Direct USE / Customize Button in Top Header */}
            <button
              type="button"
              onClick={() => setIsCustomizeMode(!isCustomizeMode)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                isCustomizeMode
                  ? 'bg-amber-500 text-[#1D3557] border border-amber-600'
                  : 'bg-[#1D3557] text-white hover:bg-[#152742] border border-[#1D3557]'
              }`}
              title="Fill in your company details to generate ready-to-use letter"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#D4AF70]" />
              <span className="font-black">
                {isCustomizeMode ? 'View Letter' : 'USE THIS LETTER'}
              </span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-[#1D3557] hover:bg-slate-200/60 bg-white border border-[#D9E0E8] transition-colors cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selection Bar with prominent USE labels */}
        <div className="px-3 sm:px-6 py-2 bg-white border-b border-[#D9E0E8] flex items-center justify-between gap-2 overflow-x-auto scrollbar-none shrink-0">
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setActiveLetter('oem')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                activeLetter === 'oem'
                  ? 'bg-[#1D3557] text-white shadow-xs border border-[#1D3557]'
                  : 'bg-slate-100 text-[#1D3557] hover:bg-slate-200 border border-[#D9E0E8]'
              }`}
            >
              <Building2 className={`w-3.5 h-3.5 ${activeLetter === 'oem' ? 'text-[#D4AF70]' : 'text-slate-600'}`} />
              <span>1. OEM Authorization (MAF)</span>
              {activeLetter === 'oem' && (
                <span className="text-[9px] bg-amber-400 text-slate-900 font-black px-1 rounded">USE</span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveLetter('representation')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                activeLetter === 'representation'
                  ? 'bg-[#1D3557] text-white shadow-xs border border-[#1D3557]'
                  : 'bg-slate-100 text-[#1D3557] hover:bg-slate-200 border border-[#D9E0E8]'
              }`}
            >
              <ShieldCheck className={`w-3.5 h-3.5 ${activeLetter === 'representation' ? 'text-[#D4AF70]' : 'text-slate-600'}`} />
              <span>2. GFR 173(i) Startup Waiver</span>
              {activeLetter === 'representation' && (
                <span className="text-[9px] bg-amber-400 text-slate-900 font-black px-1 rounded">USE</span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveLetter('acceptance')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                activeLetter === 'acceptance'
                  ? 'bg-[#1D3557] text-white shadow-xs border border-[#1D3557]'
                  : 'bg-slate-100 text-[#1D3557] hover:bg-slate-200 border border-[#D9E0E8]'
              }`}
            >
              <FileCheck className={`w-3.5 h-3.5 ${activeLetter === 'acceptance' ? 'text-[#D4AF70]' : 'text-slate-600'}`} />
              <span>3. Tender Acceptance Undertaking</span>
              {activeLetter === 'acceptance' && (
                <span className="text-[9px] bg-amber-400 text-slate-900 font-black px-1 rounded">USE</span>
              )}
            </button>
          </div>

          {/* Quick Zoom Font Sizer for high visibility */}
          <div className="hidden sm:flex items-center gap-1 text-slate-500 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200 shrink-0">
            <span className="text-[10px] font-bold uppercase text-slate-500">Text Size:</span>
            <button
              type="button"
              onClick={() => setFontSize('sm')}
              className={`px-1.5 py-0.5 text-[10px] rounded font-bold cursor-pointer ${fontSize === 'sm' ? 'bg-[#1D3557] text-white' : 'hover:bg-slate-200'}`}
              title="Small text"
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => setFontSize('base')}
              className={`px-1.5 py-0.5 text-[10px] rounded font-bold cursor-pointer ${fontSize === 'base' ? 'bg-[#1D3557] text-white' : 'hover:bg-slate-200'}`}
              title="Normal text"
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setFontSize('lg')}
              className={`px-1.5 py-0.5 text-[10px] rounded font-bold cursor-pointer ${fontSize === 'lg' ? 'bg-[#1D3557] text-white' : 'hover:bg-slate-200'}`}
              title="Large text (High visibility)"
            >
              A+
            </button>
          </div>
        </div>

        {/* Scrollable Letter Body */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4 bg-[#F8F9FA]">
          
          {/* Informational Guidance Alert */}
          {activeLetter === 'oem' && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-xs text-slate-800 space-y-1">
              <div className="flex items-center gap-2 font-black text-[#996515]">
                <AlertTriangle className="w-4 h-4 text-[#996515] shrink-0" />
                <span>GeM Clause 4.2 Legal Requirement:</span>
              </div>
              <p className="leading-relaxed text-slate-700">
                To prevent <strong>100% disqualification in Packet-A</strong>, upload this authorization letter along with digital OEM panel linking. Click <strong>"USE THIS LETTER"</strong> above to fill your details and print or download.
              </p>
            </div>
          )}

          {activeLetter === 'representation' && (
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-800 space-y-1">
              <div className="flex items-center gap-2 font-black text-[#1D3557]">
                <ShieldCheck className="w-4 h-4 text-[#1D3557] shrink-0" />
                <span>GFR 2017 Rule 173(i) Startup Exemption:</span>
              </div>
              <p className="leading-relaxed text-slate-700">
                Submit this representation within <strong>48 to 72 hours</strong> of NIT publishing to demand waiver of prior turnover and prior experience criteria. Fill your company name and tender number using <strong>"USE THIS LETTER"</strong>.
              </p>
            </div>
          )}

          {activeLetter === 'acceptance' && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-slate-800 space-y-1">
              <div className="flex items-center gap-2 font-black text-emerald-900">
                <FileCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Zero-Deviation Tender Acceptance:</span>
              </div>
              <p className="leading-relaxed text-slate-700">
                Print verbatim on bidder letterhead, sign with Class-3 DSC token, and submit in Packet-A. Use the interactive form below to populate your tender reference.
              </p>
            </div>
          )}

          {/* Interactive Customizer Panel when "USE THIS LETTER" is active */}
          {isCustomizeMode && (
            <div className="bg-white rounded-2xl border-2 border-amber-400 p-4 sm:p-5 shadow-md space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="font-display font-black text-sm text-[#1D3557]">
                    Fill Your Details to USE This Format Instantly
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="text-[11px] font-bold text-slate-500 hover:text-[#1D3557] flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Form</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Tender Reference / Bid Number *
                  </label>
                  <input
                    type="text"
                    name="tenderRef"
                    value={formData.tenderRef}
                    onChange={handleInputChange}
                    placeholder="e.g. GEM/2026/B/876543"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 font-semibold focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Tender Inviting Authority / Department *
                  </label>
                  <input
                    type="text"
                    name="departmentName"
                    value={formData.departmentName}
                    onChange={handleInputChange}
                    placeholder="e.g. CPWD Executive Engineer / AIIMS Procurement Cell"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 font-semibold focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Your Bidder / Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="e.g. M/s Apex Infotech Solutions"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 font-semibold focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Signatory Name & Designation *
                  </label>
                  <input
                    type="text"
                    name="signatoryName"
                    value={formData.signatoryName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajesh Sharma, Managing Director"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 font-semibold focus:border-amber-500 focus:outline-none"
                  />
                </div>

                {activeLetter === 'oem' && (
                  <>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        OEM / Manufacturer Name *
                      </label>
                      <input
                        type="text"
                        name="oemName"
                        value={formData.oemName}
                        onChange={handleInputChange}
                        placeholder="e.g. Cisco Systems / Bharat Electronics"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 font-semibold focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Product / Scope Description *
                      </label>
                      <input
                        type="text"
                        name="oemProduct"
                        value={formData.oemProduct}
                        onChange={handleInputChange}
                        placeholder="e.g. Network Switches & Hardware"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 font-semibold focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 font-semibold focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Mobile / Contact Number
                  </label>
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-800 font-semibold focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-amber-800 font-bold bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                <span>✓ Letter below has updated in real-time with your entries!</span>
                <button
                  type="button"
                  onClick={() => setIsCustomizeMode(false)}
                  className="px-3 py-1 rounded bg-[#1D3557] text-white font-bold cursor-pointer hover:bg-[#152742]"
                >
                  Done Editing → View Letter
                </button>
              </div>
            </div>
          )}

          {/* High-Contrast Realistic Letter Preview Paper Container */}
          <div className="relative bg-white rounded-2xl border border-[#D9E0E8] p-4 sm:p-7 shadow-md">
            {/* Action Bar Floating Top-Right */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  {currentLetterTitle}
                </span>
                <span className="text-[10px] font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                  READY TO USE
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {/* Print button */}
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all border border-slate-300 cursor-pointer"
                  title="Print this letter"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-600" />
                  <span className="hidden sm:inline">Print</span>
                </button>

                {/* Download Text / Word file */}
                <button
                  type="button"
                  onClick={handleDownloadDoc}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all border border-slate-300 cursor-pointer"
                  title="Download letter as text file"
                >
                  <Download className="w-3.5 h-3.5 text-[#1D3557]" />
                  <span>{downloadSuccess ? 'Downloaded!' : 'Download .TXT'}</span>
                </button>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1D3557] hover:bg-[#152742] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  title="Copy full letter format to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#D4AF70]" />
                      <span>Copy Letter Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Letter Content Rendered with Crisp High-Contrast Legal Monospace Typography */}
            <div className="p-3 sm:p-5 bg-slate-50/60 rounded-xl border border-slate-200">
              <pre className={`font-mono ${fontSizeClass} leading-relaxed text-[#0F172A] whitespace-pre-wrap select-text overflow-x-auto font-medium`}>
                {currentText}
              </pre>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions with High-Visibility "USE THIS LETTER" CTA */}
        <div className="p-3.5 sm:p-4 bg-white border-t border-[#D9E0E8] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
            Need this letter vetted or customized for your specific tender NIT or GeM bid?
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Fill / Use button */}
            <button
              type="button"
              onClick={() => setIsCustomizeMode(!isCustomizeMode)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-xs transition-colors shadow-xs cursor-pointer border border-amber-500"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isCustomizeMode ? 'Hide Editor' : 'USE & EDIT'}</span>
            </button>

            <button
              type="button"
              onClick={handleConsultWhatsApp}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Drafting Help</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenInquiry) {
                  onOpenInquiry(
                    activeLetter === 'oem' 
                      ? 'GeM OEM Authorization Code & Brand Approval' 
                      : 'Post-Bid Clarification & Representation Letters'
                  );
                }
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white font-black text-xs transition-all shadow-xs cursor-pointer border border-[#1D3557]"
            >
              <Send className="w-4 h-4 text-[#D4AF70]" />
              <span>Draft Letter for My Tender</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
