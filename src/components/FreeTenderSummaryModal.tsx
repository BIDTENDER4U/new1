import React, { useState, useRef } from 'react';
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
  UploadCloud, 
  Trash2, 
  Phone, 
  Mail, 
  User, 
  Hash, 
  Lock, 
  Check, 
  Rocket, 
  UtensilsCrossed, 
  Award, 
  KeyRound, 
  Globe, 
  QrCode,
  FileCheck,
  Download
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';

interface FreeTenderSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry?: (category?: string, service?: string) => void;
  onOpenRadarModal?: (initialQuery?: string) => void;
  onOpenPaymentModal?: () => void;
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
  onOpenPaymentModal,
}) => {
  // Navigation tabs: 'upload' (primary action) vs 'samples' (previewing report format)
  const [activeTab, setActiveTab] = useState<'upload' | 'samples'>('upload');

  // Form input states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [tenderRef, setTenderRef] = useState('');
  const [specificQuery, setSpecificQuery] = useState('');

  // File upload states
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState<string>('');
  const [fileSizeFormatted, setFileSizeFormatted] = useState<string>('');
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission & Confirmation states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    email: string;
    fileName: string;
    tenderRef: string;
    fileSize?: string;
    fileUrl?: string;
    inquiryId?: string;
  } | null>(null);

  // Sample report picker states
  const [selectedSampleKey, setSelectedSampleKey] = useState<string>('aiims_diet');

  if (!isOpen) return null;

  const currentSampleReport = SAMPLE_TENDERS[selectedSampleKey] || SAMPLE_TENDERS.aiims_diet;

  // Format file size nicely
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Handle file selection from input or drag-drop
  const handleProcessFile = (file: File) => {
    // 25 MB limit
    const MAX_SIZE_BYTES = 25 * 1024 * 1024;
    if (file.size > MAX_SIZE_BYTES) {
      setErrorMessage('File size exceeds 25 MB. Please select a smaller document or compress it.');
      return;
    }

    setErrorMessage(null);
    setUploadedFile(file);
    setFileSizeFormatted(formatBytes(file.size));

    // Convert to Base64 data URL for upload
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setFileBase64(reader.result);
      }
    };
    reader.onerror = () => {
      console.warn('FileReader error; proceeding with file metadata only');
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleProcessFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setFileBase64('');
    setFileSizeFormatted('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Clean 10-digit phone number
  const sanitizePhone = (val: string): string => {
    return val.replace(/\D/g, '').slice(-10);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    const trimmedName = name.trim();
    const cleanPhone = sanitizePhone(phone);
    const trimmedEmail = email.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!cleanPhone || cleanPhone.length !== 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number so we can WhatsApp your summary.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!uploadedFile && !tenderRef.trim()) {
      setErrorMessage('Please either upload your tender document (PDF/Word/ZIP) or enter the Tender / GeM Bid number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Guarantee file Base64 is fully read before sending to prevent empty file payload
      let base64ToSend = fileBase64;
      if (uploadedFile && (!base64ToSend || base64ToSend.length === 0)) {
        try {
          base64ToSend = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (typeof reader.result === 'string') resolve(reader.result);
              else resolve('');
            };
            reader.onerror = () => resolve('');
            reader.readAsDataURL(uploadedFile);
          });
        } catch (e) {
          console.warn('File read error:', e);
        }
      }

      const payload = {
        form_type: 'free_tender_summary',
        name: trimmedName,
        company: company.trim() || `${trimmedName} (Direct Bidder)`,
        phone: cleanPhone,
        email: trimmedEmail,
        portal: tenderRef.toLowerCase().includes('gem') ? 'GeM Portal' : 'CPPP / State eProc',
        reference_number: tenderRef.trim() || (uploadedFile ? uploadedFile.name : 'NIT Tender Document'),
        service: 'Free Manual Tender Summary on WhatsApp',
        category: 'Tender Document Scrutiny',
        message: `[Free Manual Tender Summary Request]
Client: ${trimmedName}
WhatsApp: +91 ${cleanPhone}
Email: ${trimmedEmail}
Uploaded File: ${uploadedFile ? `${uploadedFile.name} (${fileSizeFormatted || formatBytes(uploadedFile.size)})` : 'None (Reference provided)'}
Tender Reference / Bid No: ${tenderRef.trim() || 'N/A'}
Client Remarks / Specific Queries: ${specificQuery.trim() || 'Please prepare manual summary and WhatsApp shortly.'}`,
        file_name: uploadedFile ? uploadedFile.name : '',
        file_data: base64ToSend || '',
        file_size: fileSizeFormatted || (uploadedFile ? formatBytes(uploadedFile.size) : ''),
      };

      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${res.status}`);
      }

      const resultData = await res.json().catch(() => ({}));
      const inquiryId = resultData.inquiryId || resultData.record?.id || '';
      const docUrl = resultData.record?.file_url || '';

      // Save submission data to state for confirmation view
      setSubmittedData({
        name: trimmedName,
        phone: cleanPhone,
        email: trimmedEmail,
        fileName: uploadedFile ? uploadedFile.name : (tenderRef.trim() || 'Tender Document'),
        tenderRef: tenderRef.trim(),
        fileSize: fileSizeFormatted || (uploadedFile ? formatBytes(uploadedFile.size) : undefined),
        fileUrl: docUrl,
        inquiryId,
      });

      // Save backup in local storage
      try {
        const recent = {
          name: trimmedName,
          phone: cleanPhone,
          email: trimmedEmail,
          submittedAt: new Date().toISOString(),
          fileName: uploadedFile ? uploadedFile.name : tenderRef.trim(),
        };
        localStorage.setItem('bt4u_last_summary_request', JSON.stringify(recent));
      } catch (err) {
        // localStorage errors ignored
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(
        err.message || 'There was a temporary problem saving your request. Please click the WhatsApp button to send your document directly!'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setUploadedFile(null);
    setFileBase64('');
    setFileSizeFormatted('');
    setName('');
    setPhone('');
    setEmail('');
    setCompany('');
    setTenderRef('');
    setSpecificQuery('');
    setErrorMessage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const whatsappDirectUrl = submittedData
    ? getWhatsAppUrl(
        `Hello Bid Tender 4 U, I just submitted my tender document "${submittedData.fileName}" for the Free Manual Tender Summary. My name is ${submittedData.name} (+91 ${submittedData.phone}). Please send the manual summary here as soon as it is ready.`
      )
    : getWhatsAppUrl('Hello Bid Tender 4 U, I want to submit my tender document for a Free Manual Summary.');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-[#1D3557] to-slate-900 text-white flex items-center justify-between gap-4 border-b border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500 text-white shadow-xs">
                  100% Free Service
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Manual Expert Scrutiny • Zero AI Errors
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-black text-white mt-1">
                Get Free Tender Summary on WhatsApp
              </h2>
              <p className="text-xs text-slate-300 hidden sm:block mt-0.5">
                Upload your tender document. Our senior consultants will manually analyze it &amp; WhatsApp you the summary report shortly.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors cursor-pointer shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs (Upload Form vs Sample Summaries) */}
        {!isSubmitted && (
          <div className="px-5 pt-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => setActiveTab('upload')}
              className={`pb-3 px-2 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'upload'
                  ? 'border-amber-500 text-slate-900'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <UploadCloud className="w-4 h-4 text-amber-600" />
              <span>Upload Document for Free WhatsApp Summary</span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
                Fast Turnaround
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('samples')}
              className={`pb-3 px-2 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'samples'
                  ? 'border-amber-500 text-slate-900'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileCheck2 className="w-4 h-4 text-slate-600" />
              <span>Preview Sample Manual Summaries</span>
              <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                (4 Real Tenders)
              </span>
            </button>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">

          {/* ========================================================================= */}
          {/* SUCCESS / CONFIRMATION STATE                                              */}
          {/* ========================================================================= */}
          {isSubmitted && submittedData && (
            <div className="py-6 px-4 sm:px-8 text-center space-y-6 animate-in fade-in duration-300 max-w-2xl mx-auto">
              {/* Success Badge */}
              <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <Check className="w-10 h-10 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Document Uploaded Successfully
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
                  Tender Document Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{submittedData.name}</strong>! Our senior tender specialist in Ahmedabad is now manually reviewing your tender clauses, eligibility, and EMD waiver applicability.
                </p>
              </div>

              {/* WhatsApp Delivery Reassurance Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/80 border-2 border-emerald-300 text-left space-y-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block">
                      Summary Delivery Channel
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900">
                      WhatsApp: <span className="text-emerald-700">+91 {submittedData.phone}</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-emerald-200 text-xs">
                  <div className="p-2.5 bg-white rounded-xl border border-emerald-100 flex flex-col justify-between">
                    <div>
                      <span className="text-slate-500 font-semibold block text-[11px]">Submitted Document:</span>
                      <span className="font-bold text-slate-900 truncate block mt-0.5" title={submittedData.fileName}>
                        📄 {submittedData.fileName} {submittedData.fileSize ? `(${submittedData.fileSize})` : ''}
                      </span>
                    </div>
                    {submittedData.fileUrl && (
                      <a
                        href={`${submittedData.fileUrl}?download=1`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download Stored Copy</span>
                      </a>
                    )}
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-emerald-100 flex flex-col justify-between">
                    <div>
                      <span className="text-slate-500 font-semibold block text-[11px]">Estimated Turnaround:</span>
                      <span className="font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Shortly (Within 30–60 Minutes)</span>
                      </span>
                    </div>
                    {submittedData.inquiryId && (
                      <span className="mt-1.5 font-mono text-[10px] text-slate-500 block">
                        Ref ID: <strong className="text-slate-700">{submittedData.inquiryId}</strong>
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>100% Free of Cost • Zero obligation • Complete confidentiality guaranteed.</span>
                </div>
              </div>

              {/* Instant WhatsApp Connect Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 animate-pulse"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Connect with Specialist on WhatsApp Now</span>
                </a>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer border border-slate-300"
                >
                  Submit Another Tender Document
                </button>
              </div>

              {/* What will be in the summary reminder */}
              <div className="pt-4 border-t border-slate-200 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  What your free WhatsApp summary will include:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Turnover, Experience &amp; Solvency criteria audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% MSME EMD Exemption &amp; GFR 170 applicability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Startup India turnover/experience waiver check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>GeM OEM Authorization (MAF) code mandate verify</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 1: UPLOAD DOCUMENT & GET MANUAL SUMMARY (PRIMARY FLOW)                */}
          {/* ========================================================================= */}
          {!isSubmitted && activeTab === 'upload' && (
            <div className="space-y-6">
              
              {/* Trust & Process Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-300/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-800 border border-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-slate-900">
                      How Free Manual Tender Summary Works
                    </h4>
                    <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                      Just upload your tender / NIT document and fill your contact details below. Our senior consultant will manually scrutinize the entire document and <strong>WhatsApp you the complete summary report shortly</strong> — 100% Free!
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono font-bold bg-white px-2.5 py-1 rounded-lg border border-amber-300 text-amber-900 shadow-2xs">
                    ⏱️ Turnaround: 30–60 Mins
                  </span>
                </div>
              </div>

              {/* The Submission Form */}
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* STEP 1: DOCUMENT UPLOAD ZONE */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-800 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">1</span>
                      <span>Upload Tender Document (NIT / BOQ / RFP)*</span>
                    </label>
                    <span className="text-[11px] text-slate-500">PDF, Word, Scanned, ZIP (Up to 25 MB)</span>
                  </div>

                  {/* Upload Dropzone */}
                  {!uploadedFile ? (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
                        isDragOver
                          ? 'border-amber-500 bg-amber-50/70 scale-[1.01]'
                          : 'border-slate-300 bg-slate-50/70 hover:bg-slate-100/70 hover:border-amber-400'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileInputChange}
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.rar,.png,.jpg,.jpeg"
                        className="hidden"
                      />
                      <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 border border-amber-300 flex items-center justify-center mx-auto mb-3">
                        <UploadCloud className="w-7 h-7 text-amber-600" />
                      </div>
                      <h5 className="font-display text-sm sm:text-base font-bold text-slate-900">
                        Click to browse or Drag &amp; Drop tender document
                      </h5>
                      <p className="text-xs text-slate-500 mt-1">
                        Upload your NIT document, GeM bid PDF, technical schedule, or RFP
                      </p>
                      <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono">
                        <span>Max 25 MB</span>
                        <span>•</span>
                        <span>All formats supported</span>
                        <span>•</span>
                        <span>100% Confidential</span>
                      </div>
                    </div>
                  ) : (
                    /* File Selected Card */
                    <div className="p-4 rounded-2xl bg-emerald-50/90 border-2 border-emerald-300 flex items-center justify-between gap-3 shadow-xs">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">
                            {uploadedFile.name}
                          </span>
                          <div className="flex items-center gap-2 text-[11px] text-slate-600 mt-0.5">
                            <span className="font-mono">{fileSizeFormatted}</span>
                            <span>•</span>
                            <span className="text-emerald-700 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Ready for manual review
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors cursor-pointer shrink-0"
                        title="Remove or replace document"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* Helper for users without file */}
                  <p className="text-[11px] text-slate-500 italic">
                    Don't have the file downloaded? You can also enter the GeM Bid Number or Tender Link in the optional field below.
                  </p>
                </div>

                {/* STEP 2: CLIENT CONTACT DETAILS */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-slate-800 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[11px] font-mono flex items-center justify-center">2</span>
                      <span>Your Contact Details (Where to Send Free Summary)*</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    {/* Full Name */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Rajesh Sharma"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-slate-400 shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* WhatsApp Mobile Number */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-600 font-bold text-xs">
                          +91
                        </div>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                          placeholder="10-digit WhatsApp number (e.g. 9876543210)"
                          className="w-full pl-11 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm font-mono focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-slate-400 shadow-2xs"
                        />
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
                        Free manual summary will be WhatsApped to this number
                      </span>
                    </div>

                    {/* Email ID */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email ID <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. rajesh@company.com"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-slate-400 shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Company / Firm Name (Optional) */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Company / Firm Name <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Sharma Infotech / Direct Bidder"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder-slate-400 shadow-2xs"
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* STEP 3: OPTIONAL TENDER CONTEXT */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-extrabold uppercase tracking-wide text-slate-800 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-300 text-slate-700 text-[11px] font-mono flex items-center justify-center">3</span>
                    <span>Tender Reference &amp; Questions (Optional)</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">
                        Tender / GeM Bid Number or Authority
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Hash className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={tenderRef}
                          onChange={(e) => setTenderRef(e.target.value)}
                          placeholder="e.g. GEM/2026/B/8941203 or AIIMS Delhi"
                          className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 placeholder-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">
                        Any Specific Question or Clause to Scrutinize?
                      </label>
                      <input
                        type="text"
                        value={specificQuery}
                        onChange={(e) => setSpecificQuery(e.target.value)}
                        placeholder="e.g. Check MSME EMD waiver, OEM code, or experience relaxation"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-amber-500 placeholder-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-300 text-red-900 text-xs flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Scope Coverage Highlights Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    What Our Senior Consultants Will Manually Check in Your Document:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Turnover &amp; Experience Benchmarks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>100% MSME EMD Exemption (GFR 170)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Startup India Waivers (GFR 173(i))</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>GeM OEM Authorization (MAF) Code</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Mandatory Packet-A Documents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Critical Disqualification Traps</span>
                    </div>
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your documents are handled with strict NDA confidentiality.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg animate-pulse"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Document to Consultant...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 text-slate-950" />
                        <span>Get Free Manual Summary on WhatsApp</span>
                        <ArrowRight className="w-4 h-4 text-slate-950" />
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: SAMPLE MANUAL SUMMARIES PREVIEW                                    */}
          {/* ========================================================================= */}
          {!isSubmitted && activeTab === 'samples' && (
            <div className="space-y-6">
              
              {/* Top Banner Explaining This is a Sample */}
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs text-blue-900">
                  <strong className="block text-sm font-bold text-blue-950">
                    Sample Tender Summary Format
                  </strong>
                  This is the exact comprehensive manual format our consultants prepare for your tender and send to your WhatsApp.
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('upload')}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer shrink-0 shadow-2xs"
                >
                  Upload Your Tender Document Now
                </button>
              </div>

              {/* Sample Selector Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {[
                  { key: 'aiims_diet', label: 'AIIMS Hospital Diet & Canteen', tag: 'FSSAI Mandate', icon: UtensilsCrossed },
                  { key: 'cpwd_civil', label: 'CPWD Civil Roads & Drainage', tag: 'High Turnover', icon: Building2 },
                  { key: 'gem_it', label: 'KV Smart Classroom & IT', tag: 'GeM OEM Code', icon: KeyRound },
                  { key: 'army_rations', label: 'Indian Army Packaged Rations', tag: 'Central FSSAI', icon: Award },
                ].map((sample) => {
                  const IconComponent = sample.icon;
                  const isSelected = selectedSampleKey === sample.key;
                  return (
                    <button
                      key={sample.key}
                      type="button"
                      onClick={() => setSelectedSampleKey(sample.key)}
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

              {/* Active Sample Summary Report Card */}
              <div className="space-y-6 pt-2">
                
                {/* Report Header Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50/80 via-white to-amber-50/80 border border-amber-200 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-lg border border-amber-300">
                      BID REF: {currentSampleReport.bidNumber}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-300">
                      {currentSampleReport.portal}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 mt-2">
                    {currentSampleReport.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    <strong>Scope Summary:</strong> {currentSampleReport.scopeOfWork}
                  </p>

                  {/* Key Numbers Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-amber-200/80">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Est. Bid Value</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">{currentSampleReport.estimatedValue}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">EMD Required</span>
                      <span className="text-xs sm:text-sm font-extrabold text-amber-700">{currentSampleReport.emdAmount}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Tender Authority</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 truncate block">{currentSampleReport.authority}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Closing Window</span>
                      <span className="text-xs sm:text-sm font-extrabold text-red-600 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{currentSampleReport.deadline}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Statutory Exemption Highlights (Startup & MSME) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                        <Rocket className="w-4 h-4 text-emerald-600" />
                        <span>Startup India (DPIIT) Statutory Exemption</span>
                      </div>
                      <h4 className="font-display font-bold text-slate-900 text-sm mb-1.5">
                        100% Turnover &amp; Experience Waiver under GFR 173(i)
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {currentSampleReport.startupBenefit}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-emerald-200/80 flex items-center justify-between text-[11px] text-emerald-800 font-semibold">
                      <span>Applicable via DPIIT Certificate</span>
                      <span className="font-bold">No 3-Year History Needed</span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider mb-2">
                        <Coins className="w-4 h-4 text-blue-600" />
                        <span>MSME / Udyam EMD &amp; Fee Exemption</span>
                      </div>
                      <h4 className="font-display font-bold text-slate-900 text-sm mb-1.5">
                        100% EMD Waiver under GFR 2017 Rule 170
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {currentSampleReport.msmeBenefit}
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
                      <span className="font-semibold text-slate-900">{currentSampleReport.turnoverRequired}</span>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold block mb-1">Past Experience Criteria:</span>
                      <span className="font-semibold text-slate-900">{currentSampleReport.experienceRequired}</span>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-500 font-bold block mb-1">Bank Solvency / Net Worth:</span>
                      <span className="font-semibold text-slate-900">{currentSampleReport.solvencyRequired}</span>
                    </div>
                  </div>
                </div>

                {/* Mandatory Statutory Compliance Documents Checklist */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-600" />
                      <span>Mandatory Statutory Compliance Packet ({currentSampleReport.mandatoryDocuments.length} Documents)</span>
                    </h4>
                    <span className="text-[11px] text-slate-500">Zero tolerance for missing attachments</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentSampleReport.mandatoryDocuments.map((doc, idx) => (
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
                    {currentSampleReport.redFlags.map((flag, idx) => (
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
                    <span className="text-slate-700">{currentSampleReport.consultantVerdict}</span>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {activeTab === 'samples' && !isSubmitted && (
              <button
                type="button"
                onClick={() => window.print()}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Print Sample PDF</span>
              </button>
            )}

            {onOpenRadarModal && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenRadarModal(uploadedFile ? uploadedFile.name : currentSampleReport.title);
                }}
                className="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                title="Verify live tender rules with Google Search Grounding"
              >
                <Globe className="w-3.5 h-3.5 text-blue-700" />
                <span>Google Radar Check</span>
              </button>
            )}

            {onOpenPaymentModal && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenPaymentModal();
                }}
                className="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                title="Official UPI: singhbaldev70368-2@okicici"
              >
                <QrCode className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pay Retainer / UPI</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl('Hello Bid Tender 4 U, I want to discuss a live government tender and get a manual tender summary.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Tender Helpdesk</span>
            </a>

            {!isSubmitted && activeTab === 'samples' && (
              <button
                type="button"
                onClick={() => setActiveTab('upload')}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Upload Document for Free Summary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {!isSubmitted && activeTab === 'upload' && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenInquiry) {
                    onOpenInquiry('All Tenders', 'Tender Document Scrutiny & Full Bid Packaging');
                  }
                }}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Request Custom Bid Support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
