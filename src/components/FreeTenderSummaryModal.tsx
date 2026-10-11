import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight, 
  Printer, 
  MessageCircle, 
  Clock, 
  Building2, 
  Coins, 
  FileCheck2, 
  Download, 
  Rocket, 
  UtensilsCrossed, 
  Award, 
  KeyRound,
  RefreshCw,
  Globe
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';

interface FreeTenderSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry?: (category?: string, service?: string) => void;
  onOpenRadarModal?: (initialQuery?: string) => void;
}

interface TenderSummaryReport {
  title: string;
  bidNumber: string;
  authority: string;
  portal: string;
  estimatedValue: string;
  emdAmount: string;
  deadline: string;
  category: string;
  scopeOfWork: string;
  turnoverRequired: string;
  experienceRequired: string;
  solvencyRequired: string;
  msmeBenefit: string;
  startupBenefit: string;
  mandatoryDocuments: { name: string; tag: string; note: string }[];
  redFlags: string[];
  consultantVerdict: string;
}

const SAMPLE_TENDERS: Record<string, TenderSummaryReport> = {
  aiims_diet: {
    title: 'AIIMS Hospital Dietary Services, Patient Food & Canteen Operations',
    bidNumber: 'GEM/2026/B/8941203',
    authority: 'All India Institute of Medical Sciences (AIIMS)',
    portal: 'Government e-Marketplace (GeM 4.0)',
    estimatedValue: '₹2.85 Crores (Annual)',
    emdAmount: '₹5,70,000 (2% of Bid Value)',
    deadline: 'Within 14 Days (15:00 IST)',
    category: 'Catering, Canteen & Food Supply',
    scopeOfWork: 'Round-the-clock preparation and distribution of therapeutic inpatient meals, ICU diet, doctor mess catering, and hygienic cafeteria operations under clinical supervision.',
    turnoverRequired: '₹85.5 Lakhs (Average Annual Financial Turnover of past 3 financial years)',
    experienceRequired: '3 completed hospital/institutional catering contracts each worth min ₹1.14 Cr OR 2 contracts of ₹1.42 Cr OR 1 contract of ₹2.28 Cr in last 7 years.',
    solvencyRequired: 'Bank Solvency Certificate of min ₹1.00 Crore from a Scheduled Commercial Bank.',
    msmeBenefit: '100% EMD Exemption under GFR 2017 Rule 170. Bid Securing Declaration accepted in lieu of ₹5.70 Lakhs deposit. Tender fee waived.',
    startupBenefit: 'DPIIT Startup India Certificate unlocks 100% waiver from Prior Turnover & Experience under GFR Rule 173(i) & GeM GTC.',
    mandatoryDocuments: [
      { name: 'FSSAI State or Central Licence', tag: 'Statutory Mandate', note: 'Must cover Food Catering / Canteen operations with active FoSCoS validity' },
      { name: 'Startup India (DPIIT) / Udyam MSME', tag: 'Exemption Proof', note: 'Provides statutory EMD waiver and turnover threshold relief' },
      { name: 'ISO 22000:2018 / HACCP Certification', tag: 'Quality Mandate', note: 'Accredited Food Safety Management System certification' },
      { name: 'Class-3 Combo DSC (Signing + Encryption)', tag: 'Portal Submission', note: 'Mandatory cryptographic key for submitting encrypted financial bid' },
      { name: 'Non-Adulteration & Non-Blacklisting Affidavit', tag: 'Legal Undertaking', note: 'On ₹100 stamp paper, duly notarized by Executive Magistrate / Notary' },
      { name: 'Food Handler Medical Fitness Certificates', tag: 'Public Health', note: 'Certificates of cook/staff immunizations and negative communicable test' },
    ],
    redFlags: [
      'Submitting Basic FSSAI Registration (<₹12L) instead of State/Central License will lead to instant technical disqualification.',
      'Failure to upload food testing reports from NABL accredited lab for drinking water and raw ingredients.',
      'Missing 18-digit UDIN on CA turnover and net worth certificate.',
      'Not submitting Bid Securing Declaration when claiming MSME/Startup EMD exemption.',
    ],
    consultantVerdict: 'High-margin recurring contract with high barrier to entry. Bidders with active FSSAI State License and ISO 22000 have an 85% higher probability of winning.',
  },
  cpwd_civil: {
    title: 'CPWD Civil Works: Smart Concrete Road, Stormwater Drainage & Ducting EPC',
    bidNumber: 'CPWD/NIT/2026/ZONE-2/184',
    authority: 'Central Public Works Department (CPWD)',
    portal: 'CPPP (eprocure.gov.in)',
    estimatedValue: '₹4.50 Crores',
    emdAmount: '₹9,00,000 (Earnest Money Deposit)',
    deadline: 'Within 10 Days (11:00 IST)',
    category: 'Civil Works & Infrastructure Construction',
    scopeOfWork: 'Construction of 4.2 km cement concrete road network with RCC box drains, utility service ducting, interlocking paver shoulders, and solar street illumination.',
    turnoverRequired: '₹2.25 Crores (50% of estimated cost over past 3 financial years)',
    experienceRequired: 'Three similar completed civil road works of min ₹1.80 Cr OR two works of ₹2.25 Cr OR one work of ₹3.60 Cr under CPWD, State PWD, or PSUs.',
    solvencyRequired: 'Bank Solvency Certificate of min ₹1.80 Crores (40% of tender value) issued within last 6 months.',
    msmeBenefit: 'Work contract tender: In CPWD civil infrastructure works, MSME EMD exemptions are subject to Ministry of Housing and Urban Affairs guidelines; Bid Tender 4 U audits NIT clauses.',
    startupBenefit: 'DPIIT recognized civil tech startups can claim Prior Experience waiver where experimental or smart pavement techniques are specified.',
    mandatoryDocuments: [
      { name: 'Class-3 Combo DSC & Token', tag: 'Cryptographic', note: 'Required for two-cover encryption on CPPP e-procurement' },
      { name: 'CPWD Enlistment Class-I / Class-II', tag: 'Contractor Registration', note: 'Or equivalent valid state PWD / MES registration' },
      { name: 'CA Turnover Certificate with UDIN', tag: 'Financial Benchmark', note: 'Verified via ICAI UDIN portal with balance sheets' },
      { name: 'Bank Solvency Certificate', tag: 'Liquidity Proof', note: 'On Scheduled Commercial Bank letterhead' },
      { name: 'Notarized Non-Blacklisting Affidavit', tag: 'Integrity Pact', note: 'Executed on ₹300 non-judicial stamp paper' },
      { name: 'List of Heavy Plant & Machinery', tag: 'Technical Plant', note: 'Proof of owning or leasing concrete batching plant & tandem rollers' },
    ],
    redFlags: [
      'Completion certificates without client designation, mobile, and contract value will be rejected during technical scrutiny.',
      'Bank Solvency certificate older than 6 months from NIT release date.',
      'Mismatched PAN entity name between GST registration and CPWD contractor enlistment.',
      'Failure to upload signed Tender Acceptance Letter verbatim as per tender proforma.',
    ],
    consultantVerdict: 'Procedurally strict tender. Every page of Packet-A must be paginated, signed, and stamped with UDIN-validated CA documents.',
  },
  gem_it: {
    title: 'Kendriya Vidyalaya Smart Classroom Setup: Interactive Flat Panels & Desktops',
    bidNumber: 'GEM/2026/B/7610492',
    authority: 'Kendriya Vidyalaya Sangathan (KVS)',
    portal: 'Government e-Marketplace (GeM 4.0)',
    estimatedValue: '₹1.15 Crores (Bunch Bid)',
    emdAmount: '₹2,30,000 (2% of Bid Value)',
    deadline: 'Within 7 Days (18:00 IST)',
    category: 'IT Hardware & Electronic Equipment',
    scopeOfWork: 'Supply, installation, testing, and 3-year comprehensive warranty commissioning of 45 Interactive Flat Panels (75-inch 4K) and 30 Desktop PCs with UPS.',
    turnoverRequired: '₹34.5 Lakhs (30% of bid value average turnover)',
    experienceRequired: 'Past supply of similar smart classroom / IT hardware: 1 order of ₹92L OR 2 orders of ₹57.5L OR 3 orders of ₹46L to Central/State Govt bodies.',
    solvencyRequired: 'Not mandated; Working capital CA certificate of ₹25 Lakhs recommended.',
    msmeBenefit: '100% EMD Exemption under GFR 170. Exemption from tender fee. 25% purchase preference with L1+15% margin of purchase band.',
    startupBenefit: 'DPIIT Startup India Certificate grants 100% Prior Turnover & Experience waiver under GFR 173(i) on GeM.',
    mandatoryDocuments: [
      { name: 'GeM OEM Authorization Code (MAF)', tag: 'Critical Trap', note: 'Mandatory OEM digital pairing code or letter for IFP brand' },
      { name: 'BIS CRS Registration Certificate', tag: 'Safety Norm', note: 'Mandatory Bureau of Indian Standards electronic certification' },
      { name: 'Make in India (MII) Declaration', tag: 'Local Content', note: 'Class-1 local supplier declaration (>=50% local value addition)' },
      { name: 'Startup India / Udyam Certificate', tag: 'EMD Waiver', note: 'Active certificate with matching IT/electronic trading NIC code' },
      { name: 'Class-3 Combo Digital Signature', tag: 'Portal Locking', note: 'Token mapped to authorized signatory profile' },
      { name: 'ISO 9001:2015 & ISO 27001', tag: 'Quality & InfoSec', note: 'IAF accredited quality management certificates' },
    ],
    redFlags: [
      'Missing OEM Authorization Code: 80% of resellers get disqualified for submitting generic paper authorization letters without GeM portal digital pairing.',
      'Quoting non-compliant screen resolution or non-toughened glass in IFP specification compliance sheet.',
      'Failing to declare exact percentage of Make in India local value addition.',
      'Missing OEM warranty confirmation letter guaranteeing 3 years onsite replacement.',
    ],
    consultantVerdict: 'Fast-moving GeM bunch bid. Winning requires strict OEM pairing authorization and zero deviations in the technical line-by-line compliance matrix.',
  },
  army_rations: {
    title: 'Indian Army / Paramilitary Force Supply: Packaged Food, Grains & Dry Rations',
    bidNumber: 'DEF/PROC/RATIONS/2026/089',
    authority: 'Ministry of Defence (Army Supply Corps / CRPF)',
    portal: 'Central Public Procurement Portal & GeM Defense',
    estimatedValue: '₹3.40 Crores',
    emdAmount: '₹6,80,000 (Earnest Money Deposit)',
    deadline: 'Within 21 Days (12:00 IST)',
    category: 'Catering, Canteen & Food Supply',
    scopeOfWork: 'Supply and delivery of AGMARK / FSSAI compliant dry rations including fortified wheat flour, basmati rice, pulses, refined mustard oil, and spices to supply depots.',
    turnoverRequired: '₹1.02 Crores (30% average annual turnover over past 3 financial years)',
    experienceRequired: 'Historical supply of food rations or consumer commodities to government supply depots or paramilitary units worth min ₹1.70 Cr.',
    solvencyRequired: 'Bank Solvency Certificate of ₹1.20 Crores from a Nationalized or Scheduled Commercial Bank.',
    msmeBenefit: '100% EMD waiver for micro and small manufacturing/processing enterprises with valid Udyam registration under GFR 170.',
    startupBenefit: 'DPIIT recognized agro-food startups enjoy prior experience and turnover waivers in line with public procurement policy.',
    mandatoryDocuments: [
      { name: 'FSSAI Central Licence (Manufacturer/Wholesaler)', tag: 'Statutory Defense Mandate', note: 'Central FSSAI license is mandatory for inter-state defense supplies' },
      { name: 'AGMARK / NABL Food Testing Certificate', tag: 'Purity Mandate', note: 'Pre-dispatch inspection test report affirming zero adulteration' },
      { name: 'Startup India / Udyam MSME Certificate', tag: 'Statutory Exemption', note: '100% EMD waiver and bid securing declaration' },
      { name: 'Class-3 Combo Crypto USB DSC Token', tag: 'Portal Security', note: 'Signing and encryption keys for defense e-procurement' },
      { name: 'Non-Adulteration & Anti-Cartel Affidavit', tag: 'Legal Assurance', note: 'On non-judicial stamp paper attested by Notary Public' },
      { name: 'Storage Godown Pest Control Certificate', tag: 'Sanitation', note: 'Proof of fumigation and rodent-free warehousing facilities' },
    ],
    redFlags: [
      'Submitting State FSSAI license instead of Central FSSAI License will disqualify suppliers in defense and inter-state supply bids.',
      'Failure to supply batch test certificates from accredited food analysis laboratories.',
      'Discrepancy in packaging shelf life requirements (military specifies min 12-month shelf life from date of receipt).',
      'Incomplete tax clearance certificate or default in GST returns.',
    ],
    consultantVerdict: 'Prestigious supply contract with prompt treasury payments. Strict emphasis on Central FSSAI licensing and AGMARK grading.',
  },
};

export const FreeTenderSummaryModal: React.FC<FreeTenderSummaryModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
  onOpenRadarModal,
}) => {
  const [selectedSampleKey, setSelectedSampleKey] = useState<string>('aiims_diet');
  const [customBidNumber, setCustomBidNumber] = useState('');
  const [customAuthority, setCustomAuthority] = useState('');
  const [customText, setCustomText] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const currentReport = SAMPLE_TENDERS[selectedSampleKey] || SAMPLE_TENDERS.aiims_diet;

  const handleSelectSample = (key: string) => {
    setIsGenerating(true);
    setSelectedSampleKey(key);
    setIsCustomMode(false);
    setTimeout(() => {
      setIsGenerating(false);
    }, 250);
  };

  const handleGenerateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsCustomMode(true);
      setIsGenerating(false);
    }, 400);
  };

  const handlePrint = () => {
    window.print();
  };

  const customReportData: TenderSummaryReport = {
    title: customAuthority ? `Tender Diagnostic: ${customAuthority}` : 'Custom Government Tender Analysis',
    bidNumber: customBidNumber || 'TENDER/AUDIT/2026/CUSTOM',
    authority: customAuthority || 'Public Sector Department / Municipal Authority',
    portal: 'GeM 4.0 / CPPP / State eProc',
    estimatedValue: 'Evaluated based on scope (₹50 Lakhs - ₹5 Crores)',
    emdAmount: '2% of Bid Value (Subject to MSME/Startup Exemption)',
    deadline: 'Refer to Live NIT Document',
    category: 'Government Public Procurement',
    scopeOfWork: customText ? customText.slice(0, 300) + '...' : 'Custom scope under public procurement evaluation.',
    turnoverRequired: 'Standard 30%–50% of estimated tender value over past 3 financial years.',
    experienceRequired: '80%/50%/40% three-tier past performance criteria on similar works.',
    solvencyRequired: 'Bank Solvency Certificate from Scheduled Commercial Bank (30%-40% value).',
    msmeBenefit: '100% EMD waiver under GFR 2017 Rule 170 with Bid Securing Declaration.',
    startupBenefit: 'DPIIT Startup India Certificate grants 100% waiver from Prior Turnover & Experience under GFR Rule 173(i).',
    mandatoryDocuments: [
      { name: 'Startup India / Udyam MSME Certificate', tag: 'Exemption Proof', note: 'Provides statutory turnover, experience, and EMD waivers' },
      { name: 'Class-3 Combo DSC (Signing + Encryption)', tag: 'Digital Security', note: 'Mandatory cryptographic key for portal bid upload' },
      { name: 'FSSAI Licence (if Food / Catering Tender)', tag: 'Statutory Law', note: 'Mandatory statutory food hygiene licence under FSS Act' },
      { name: 'CA Turnover Certificate with UDIN', tag: 'Financial Proof', note: 'Audited revenues for past 3 consecutive years with 18-digit UDIN' },
      { name: 'Notarized Non-Blacklisting Affidavit', tag: 'Legal Affirmation', note: 'On appropriate stamp paper attested by notary' },
      { name: 'ISO Certification (ISO 9001:2015)', tag: 'Quality Benchmark', note: 'Certified Quality Management System implementation' },
    ],
    redFlags: [
      'Missing 18-digit UDIN on CA turnover and net worth certificates causes 45% of disqualifications.',
      'Missing OEM authorization pairing code on GeM custom bids.',
      'Non-notarized affidavits or stamp papers purchased after the NIT release date.',
      'Failing to submit Bid Securing Declaration when claiming MSME/Startup EMD exemption.',
    ],
    consultantVerdict: 'Submit your complete NIT document to our Ahmedabad desk for full line-by-line Packet-A and Packet-B compliance packaging.',
  };

  const activeReport = isCustomMode ? customReportData : currentReport;

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Hello Bid Tender 4 U, I generated a Free Tender Summary for ${activeReport.bidNumber} (${activeReport.title}). Please advise on eligibility and bid preparation.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  Instant Executive Diagnostic
                </span>
                <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  100% Free Tool
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Get Free Summary of Tender
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-xl text-slate-400 hover:text-slate-800 bg-white border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Top Quick Picker: Real-World Sample Tenders */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wide text-slate-700 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-amber-600" />
                <span>Test Instant Summary with Live Tender Samples:</span>
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                Click any sample to evaluate in 1-click
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {[
                { key: 'aiims_diet', label: 'AIIMS Hospital Diet & Canteen', tag: 'FSSAI Mandate', icon: UtensilsCrossed },
                { key: 'cpwd_civil', label: 'CPWD Civil Roads & Drainage', tag: 'High Turnover', icon: Building2 },
                { key: 'gem_it', label: 'KV Smart Classroom & IT', tag: 'GeM OEM Code', icon: KeyRound },
                { key: 'army_rations', label: 'Indian Army Packaged Rations', tag: 'Central FSSAI', icon: Award },
              ].map((sample) => {
                const IconComponent = sample.icon;
                const isSelected = !isCustomMode && selectedSampleKey === sample.key;
                return (
                  <button
                    key={sample.key}
                    type="button"
                    onClick={() => handleSelectSample(sample.key)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-400/30'
                        : 'bg-white/80 hover:bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <IconComponent className={`w-4 h-4 ${isSelected ? 'text-amber-600' : 'text-slate-400'}`} />
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                        {sample.tag}
                      </span>
                    </div>
                    <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                      {sample.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Custom Tender Accordion / Toggle */}
            <div className="mt-4 pt-3 border-t border-slate-200">
              <form onSubmit={handleGenerateCustom} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  value={customBidNumber}
                  onChange={(e) => setCustomBidNumber(e.target.value)}
                  placeholder="Or enter your GeM Bid / NIT Number (e.g. GEM/2026/B/891234)"
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 placeholder-slate-400"
                />
                <input
                  type="text"
                  value={customAuthority}
                  onChange={(e) => setCustomAuthority(e.target.value)}
                  placeholder="Department (e.g. CPWD, AIIMS, Indian Railways)"
                  className="sm:w-64 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Generate Summary</span>
                </button>
              </form>
            </div>
          </div>

          {/* Active Summary Report Card */}
          {isGenerating ? (
            <div className="p-12 text-center text-slate-500 space-y-3">
              <RefreshCw className="w-8 h-8 animate-spin text-amber-500 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">Analyzing tender document clauses & criteria...</p>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Report Header Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50/80 via-white to-amber-50/80 border border-amber-200 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-lg border border-amber-300">
                    BID REF: {activeReport.bidNumber}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-300">
                    {activeReport.portal}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  {activeReport.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  <strong>Scope Summary:</strong> {activeReport.scopeOfWork}
                </p>

                {/* Key Numbers Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-amber-200/80">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Est. Bid Value</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900">{activeReport.estimatedValue}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">EMD Required</span>
                    <span className="text-xs sm:text-sm font-extrabold text-amber-700">{activeReport.emdAmount}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Tender Authority</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 truncate block">{activeReport.authority}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Closing Window</span>
                    <span className="text-xs sm:text-sm font-extrabold text-red-600 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{activeReport.deadline}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Statutory Exemption Highlights (Startup & MSME) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Startup India Exemption Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                      <Rocket className="w-4 h-4 text-emerald-600" />
                      <span>Startup India (DPIIT) Statutory Exemption</span>
                    </div>
                    <h4 className="font-display font-bold text-slate-900 text-sm mb-1.5">
                      100% Turnover & Experience Waiver under GFR 173(i)
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {activeReport.startupBenefit}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-emerald-200/80 flex items-center justify-between text-[11px] text-emerald-800 font-semibold">
                    <span>Applicable via DPIIT Certificate</span>
                    <span className="font-bold">No 3-Year History Needed</span>
                  </div>
                </div>

                {/* MSME Udyam Exemption Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider mb-2">
                      <Coins className="w-4 h-4 text-blue-600" />
                      <span>MSME / Udyam EMD & Fee Exemption</span>
                    </div>
                    <h4 className="font-display font-bold text-slate-900 text-sm mb-1.5">
                      100% EMD Waiver under GFR 2017 Rule 170
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {activeReport.msmeBenefit}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-blue-200/80 flex items-center justify-between text-[11px] text-blue-800 font-semibold">
                    <span>Requires Bid Securing Declaration</span>
                    <span className="font-bold">L1+15% Preference Band</span>
                  </div>
                </div>

              </div>

              {/* Financial & Technical Benchmarks */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Mandatory Eligibility Benchmarks (Technical Packet A)</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold block mb-1">Annual Turnover Required:</span>
                    <span className="font-semibold text-slate-900">{activeReport.turnoverRequired}</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold block mb-1">Past Experience Criteria:</span>
                    <span className="font-semibold text-slate-900">{activeReport.experienceRequired}</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold block mb-1">Bank Solvency / Net Worth:</span>
                    <span className="font-semibold text-slate-900">{activeReport.solvencyRequired}</span>
                  </div>
                </div>
              </div>

              {/* Mandatory Statutory Compliance Documents Checklist */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-600" />
                    <span>Mandatory Statutory Compliance Packet ({activeReport.mandatoryDocuments.length} Documents)</span>
                  </h4>
                  <span className="text-[11px] text-slate-500">Zero tolerance for missing attachments</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeReport.mandatoryDocuments.map((doc, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-xs font-bold text-slate-900 truncate">{doc.name}</span>
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-mono shrink-0">
                            {doc.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600">{doc.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Critical Red Flags & Disqualification Traps */}
              <div className="p-5 rounded-2xl bg-red-50/80 border border-red-200 space-y-2.5">
                <div className="flex items-center gap-2 text-red-800 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Critical Disqualification Traps to Avoid (85% of Bidders Fail Here)</span>
                </div>

                <ul className="space-y-1.5">
                  {activeReport.redFlags.map((flag, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-red-900">
                      <span className="text-red-500 font-bold shrink-0">•</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultant Verdict & Next Steps */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-amber-900">Senior Consultant Verdict:</strong>{' '}
                  <span className="text-slate-700">{activeReport.consultantVerdict}</span>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Print / Save PDF</span>
            </button>

            {onOpenRadarModal && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenRadarModal(activeReport.title);
                }}
                className="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                title="Verify live tender rules with Google Search Grounding"
              >
                <Globe className="w-3.5 h-3.5 text-blue-700" />
                <span>Google Radar Check</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Specialist for Bid Support</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenInquiry) {
                  onOpenInquiry(activeReport.category, 'Tender Document Analysis & Eligibility Audit');
                }
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Submit Full NIT for Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
