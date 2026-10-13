import React, { useState, useEffect, useRef } from 'react';
import { 
  FileSearch, 
  Award, 
  FileCheck2, 
  Calculator, 
  Lock, 
  Scale, 
  Trophy, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Sparkles, 
  Check, 
  Play, 
  Pause, 
  RotateCcw, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

interface BiddingJourneyStepperProps {
  onOpenInquiry: (category?: string, service?: string) => void;
}

export interface JourneyStep {
  id: number;
  phase: string;
  phaseNumber: number;
  title: string;
  tagline: string;
  duration: string;
  riskLevel: 'Critical' | 'High' | 'Medium' | 'High Impact';
  summary: string;
  keyDeliverables: string[];
  statutoryRule: string;
  rejectionRiskAvoided: string;
  deliverableArtifact: string;
  checklistItems: string[];
}

export const BIDDING_JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 1,
    phase: 'Phase 1: Pre-Bid Scrutiny',
    phaseNumber: 1,
    title: 'Document Audit & NIT Eligibility Scrutiny',
    tagline: '32-Point Mandatory Clause Extraction & Prior Qualification Verification',
    duration: 'Day 1 - 2',
    riskLevel: 'Critical',
    summary: 'Comprehensive legal and technical audit of the Notice Inviting Tender (NIT/RFP). We verify past 3-year CA-audited turnover, similar work experience certificates, Class-3 DSC validity, and portal-specific seller registration to eliminate disqualification before drafting begins.',
    keyDeliverables: [
      '32-Point NIT eligibility checklist matrix & clause risk report',
      'CA turnover certificate & UDIN validation against tender threshold',
      'Similar experience work order & completion certificate alignment',
      'Non-blacklisting affidavit & litigation history drafting on stamp paper'
    ],
    statutoryRule: 'GFR 2017 Rule 144(xi) & Buyer Portal Eligibility Parameters',
    rejectionRiskAvoided: '43% of bidders are rejected in initial scrutiny due to missing UDIN, outdated GST-3B filings, or defective experience certificates.',
    deliverableArtifact: 'NIT Eligibility Clearance Dossier (Audit Verified)',
    checklistItems: [
      'Last 3 FY balance sheets with turnover > tender requirement',
      'Minimum required single/dual work completion certificates',
      'Class-3 Combo DSC (Signing + Encryption) validity > 60 days',
      'Active seller account on GeM / CPPP / state portal'
    ]
  },
  {
    id: 2,
    phase: 'Phase 1: Pre-Bid Scrutiny',
    phaseNumber: 1,
    title: 'Statutory Exemptions & EMD Waiver Protocol',
    tagline: 'MSME Udyam, DPIIT Startup Waiver & Bid Security Declaration',
    duration: 'Day 3',
    riskLevel: 'High Impact',
    summary: 'Strategic application of statutory exemptions under Government of India public procurement policies. We draft compliant Bid Security Declarations (BSD) and invoke official exemption clauses to legally bypass Earnest Money Deposit (EMD) and prior turnover/experience bars.',
    keyDeliverables: [
      'MSME Udyam Category verification for 100% EMD & Tender Fee exemption',
      'DPIIT Startup India waiver petition under GFR 170 (Prior Turnover/Exp)',
      'Public Procurement Policy for MSEs Order 2012 preference documentation',
      'Make in India (PPP-MII) Local Supplier Class-I percentage certification'
    ],
    statutoryRule: 'GFR 2017 Rule 170(i), DoE OM F.20/2/2014 & PPP-MII Order 2017',
    rejectionRiskAvoided: 'Rejection due to submitting plain MSE certificate for non-manufacturing items, or defective Bid Security format not adhering to buyer guidelines.',
    deliverableArtifact: 'Statutory Exemption Certificate & EMD Waiver File',
    checklistItems: [
      'NIC 5-digit manufacturing/service activity code matches tender scope',
      'Valid Udyam Registration Certificate with latest enterprise category',
      'DPIIT Certificate of Recognition for Startup exemption',
      'Local Content Certificate with Chartered Accountant countersignature'
    ]
  },
  {
    id: 3,
    phase: 'Phase 2: Bid Engineering',
    phaseNumber: 2,
    title: 'Technical Bid Packaging & Compliance Matrix',
    tagline: 'Clause-by-Clause Parameter Mapping & OEM Authorization (MAF)',
    duration: 'Day 4 - 6',
    riskLevel: 'Critical',
    summary: 'Precision technical proposal engineering. We construct a clause-by-clause technical compliance sheet with exact cross-referencing to OEM catalogues, NABL test reports, BIS/ISO certifications, and official Manufacturer Authorization Form (MAF/OEM code) on original letterhead.',
    keyDeliverables: [
      'Clause-by-clause technical compliance matrix with verifiable page indexing',
      'OEM Authorization (MAF) in strict GeM/CPPP Annexure format with direct contact',
      'NABL-accredited laboratory test reports & BIS/CE conformity documents',
      'Non-deviation certificate & technical deviation matrix (if any)'
    ],
    statutoryRule: 'GeM GTC 4.0 Clause 12 & CVC Guidelines on Technical Specification Equality',
    rejectionRiskAvoided: 'Technical disqualification due to blank compliance remarks like "Noted" instead of "Complied with reference to OEM catalogue page X", or unauthorized distributor signatures.',
    deliverableArtifact: 'Indexed Technical Bid Dossier (Searchable PDF)',
    checklistItems: [
      'Every technical parameter mapped to OEM datasheet page number',
      'MAF signed by authorized company signatory with designation stamp',
      'NABL lab test reports within validity period (< 1-3 years as per NIT)',
      'No commercial/price data leaked into technical bid envelopes'
    ]
  },
  {
    id: 4,
    phase: 'Phase 2: Bid Engineering',
    phaseNumber: 2,
    title: 'Financial BoQ Cost Modeling & Tax Structuring',
    tagline: 'Macro BoQ Template Calibration, GST Decomposition & Margin Protection',
    duration: 'Day 7',
    riskLevel: 'High',
    summary: 'Flawless commercial bid engineering in portal-compliant Excel BoQ templates (.xls). We perform precise landed-cost calculations including GST, transit insurance, packing, and destination delivery, protecting your L1 ranking while preventing predatory pricing penalties.',
    keyDeliverables: [
      'Macro-enabled BoQ template filling without formula disruption',
      'Accurate HSN / SAC code tax classification (18% vs 12% vs 5% GST)',
      'All-inclusive destination price modeling (Freight + Unloading + ePBG cost)',
      'Abnormally Low Bid / Rate analysis to prevent Performance Security inflation'
    ],
    statutoryRule: 'GST Act 2017 Invoicing Norms & CVC Manual on Financial Evaluation',
    rejectionRiskAvoided: 'Corrupted BoQ macro uploads, rounding errors triggering L1 forfeiture, or tax mismatch leading to statutory audit notices from the department.',
    deliverableArtifact: 'Commercial BoQ Master & Profit Margin Breakdown',
    checklistItems: [
      'BoQ saved strictly in compatible Microsoft Excel 97-2003 (.xls) format',
      'No modified column names, unhidden rows, or formula tamper errors',
      'GST rate confirmed with commercial invoices & GSTN portal',
      'Working capital buffer allocated for 3-5% ePBG deposit upon award'
    ]
  },
  {
    id: 5,
    phase: 'Phase 2: Bid Engineering',
    phaseNumber: 2,
    title: 'Portal Encryption & Dual-Key DSC Token Upload',
    tagline: 'SHA-256 PKI Asymmetric Cryptography & 24-Hour Buffer Submission',
    duration: '24h Pre-Deadline',
    riskLevel: 'Critical',
    summary: 'The critical submission execution. Utilizing Class-3 Digital Signature Certificate (DSC) hardware tokens, we perform dual-key asymmetric encryption of Technical and Financial envelopes on GeM, CPPP, nProcure, or IREPS with a zero-hour buffer submission protocol.',
    keyDeliverables: [
      'Class-3 Combo DSC (Signing & 2048-bit RSA Encryption) binding',
      'Java Cryptography Architecture (JCA/JCE) browser handshake validation',
      'Encrypted multi-packet document packet upload before the 24-hr buffer window',
      'System-generated Bid Submission Acknowledgement Receipt with hash verification'
    ],
    statutoryRule: 'Information Technology Act 2000 Section 35 & Portal PKI Guidelines',
    rejectionRiskAvoided: 'Portal server crashes, last-minute DSC driver failure, or upload timeout within the final 60 minutes of tender deadline causing total forfeiture.',
    deliverableArtifact: 'Cryptographic Bid Acknowledgement & Hash Archive',
    checklistItems: [
      'DSC token recognized in system with updated PKI driver middleware',
      'Bid submitted at least 12-24 hours prior to deadline to beat traffic surges',
      'System-generated Bid Submission Receipt downloaded and archived',
      'Bid status displays "Bid Submitted / Encrypted" in portal dashboard'
    ]
  },
  {
    id: 6,
    phase: 'Phase 3: Post-Bid Evaluation & Win',
    phaseNumber: 3,
    title: 'Technical Evaluation & Representation Protocol',
    tagline: 'Shortfall Document Defense under GFR 48-Hour Clarification Rules',
    duration: 'Evaluation Stage',
    riskLevel: 'High',
    summary: 'Active post-opening scrutiny monitoring. When buyer evaluation committees open technical envelopes, we track buyer clarification queries, prepare airtight 48-hour shortfall document replies, and file statutory representations against improper technical rejections.',
    keyDeliverables: [
      'Real-time portal dashboard tracking of Technical Evaluation Committee notes',
      'Immediate 48-hour shortfall document dossier drafting under GFR guidelines',
      'Official statutory representation drafting in case of biased disqualification',
      'Competitor bid compliance audit to counter rival non-compliant bids'
    ],
    statutoryRule: 'CVC Clarification Circular 2021 & GFR 2017 Rule 173(v) Representation Rights',
    rejectionRiskAvoided: 'Missing the strict 48-hour buyer clarification window, or accepting unlawful disqualification without exercising statutory representation rights under procurement guidelines.',
    deliverableArtifact: 'Clarification Reply Dossier & Legal Representation Letter',
    checklistItems: [
      'Active daily monitoring of registered portal email & mobile SMS alerts',
      'All requested clarification documents uploaded within specified hours',
      'Detailed justification citing tender clause and submitted page numbers',
      'Clearance certificate issued by Technical Evaluation Committee'
    ]
  },
  {
    id: 7,
    phase: 'Phase 3: Post-Bid Evaluation & Win',
    phaseNumber: 3,
    title: 'Live e-Reverse Auction (RA) & Contract Award',
    tagline: 'L1 Bid Optimization, Dynamic Auto-Decrementing & ePBG Lodgement',
    duration: 'Auction Window',
    riskLevel: 'High Impact',
    summary: 'Securing the final victory. In tenders with e-Reverse Auction (RA) rules, our pricing experts manage the live 2-hour auction console with strategic decrements to secure the L1 rank. Following award, we guide ePBG bank guarantee issuance and purchase order generation.',
    keyDeliverables: [
      'Real-time Reverse Auction console monitoring & auto-decrement execution',
      'Pre-calculated floor pricing safeguard ensuring sustainable profit margin',
      'L1 ranking confirmation & GeM Contract / Letter of Acceptance (LoA) download',
      'Electronic Performance Bank Guarantee (ePBG) structuring (3% - 5%)'
    ],
    statutoryRule: 'GeM GTC RA Rules & Ministry of Finance PBG Norms (OM No. F.9/4/2020-PPD)',
    rejectionRiskAvoided: 'Panic-bidding below operational cost during fast-paced reverse auctions, or missing the 15-day ePBG submission deadline resulting in contract cancellation.',
    deliverableArtifact: 'Official Contract Award & Work Order Archive',
    checklistItems: [
      'Calculated floor price locked before auction window opens',
      'L1 confirmation screenshot and system log downloaded upon close',
      'ePBG draft vetted by scheduled commercial bank for quick issuance',
      'GeM order acceptance completed within 10 days of issuance'
    ]
  }
];

export const BiddingJourneyStepper: React.FC<BiddingJourneyStepperProps> = ({ onOpenInquiry }) => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [checkedChecklist, setCheckedChecklist] = useState<Record<string, boolean>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeStep = BIDDING_JOURNEY_STEPS.find(s => s.id === activeStepId) || BIDDING_JOURNEY_STEPS[0];

  // Auto-play tour effect
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveStepId(prev => (prev >= BIDDING_JOURNEY_STEPS.length ? 1 : prev + 1));
      }, 5000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleToggleChecklist = (key: string) => {
    setCheckedChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getStepIcon = (id: number, sizeClass = "w-5 h-5") => {
    switch (id) {
      case 1:
        return <FileSearch className={sizeClass} />;
      case 2:
        return <Award className={sizeClass} />;
      case 3:
        return <FileCheck2 className={sizeClass} />;
      case 4:
        return <Calculator className={sizeClass} />;
      case 5:
        return <Lock className={sizeClass} />;
      case 6:
        return <Scale className={sizeClass} />;
      case 7:
        return <Trophy className={sizeClass} />;
      default:
        return <Sparkles className={sizeClass} />;
    }
  };

  // Calculate readiness score for active step
  const activeChecklistItems = activeStep.checklistItems;
  const checkedInActive = activeChecklistItems.filter((_, idx) => checkedChecklist[`${activeStep.id}-${idx}`]).length;
  const readinessPercent = Math.round((checkedInActive / activeChecklistItems.length) * 100);

  return (
    <section id="bidding-journey" className="py-16 bg-white border-b border-[#D9E0E8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF70] animate-pulse"></span>
              <span>End-to-End Procurement Lifecycle</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D3557] tracking-tight" style={{ textWrap: 'balance' }}>
              The 7-Stage Bidding Journey
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
              From preliminary document audit to live reverse auction victory—our step-by-step roadmap ensures zero-disqualification compliance across GeM, CPPP, and state procurement portals.
            </p>
          </div>

          {/* Controls: Auto Tour & Reset */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs border ${
                isPlaying 
                  ? 'bg-amber-500 text-slate-950 border-amber-600 ring-2 ring-amber-300' 
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-950 fill-current" />
                  <span>Pause Tour</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-amber-600 fill-current" />
                  <span>Auto-Play Tour</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setIsPlaying(false);
                setActiveStepId(1);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-slate-600 border border-slate-300 transition-colors cursor-pointer"
              title="Reset to Step 1"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        {/* Phase Markers Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className={`p-3.5 rounded-xl border transition-all ${
            activeStep.phaseNumber === 1 
              ? 'bg-[#1D3557] text-white border-[#1D3557] shadow-sm' 
              : 'bg-slate-50 text-slate-700 border-slate-200'
          }`}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-mono font-bold uppercase tracking-wider text-[11px] opacity-80">
                Phase 01
              </span>
              <span className="font-semibold text-[11px]">Steps 1 - 2</span>
            </div>
            <div className="font-bold text-sm">Pre-Bid Eligibility & Scrutiny</div>
          </div>

          <div className={`p-3.5 rounded-xl border transition-all ${
            activeStep.phaseNumber === 2 
              ? 'bg-[#1D3557] text-white border-[#1D3557] shadow-sm' 
              : 'bg-slate-50 text-slate-700 border-slate-200'
          }`}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-mono font-bold uppercase tracking-wider text-[11px] opacity-80">
                Phase 02
              </span>
              <span className="font-semibold text-[11px]">Steps 3 - 5</span>
            </div>
            <div className="font-bold text-sm">Bid Engineering & Encryption</div>
          </div>

          <div className={`p-3.5 rounded-xl border transition-all ${
            activeStep.phaseNumber === 3 
              ? 'bg-[#1D3557] text-white border-[#1D3557] shadow-sm' 
              : 'bg-slate-50 text-slate-700 border-slate-200'
          }`}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-mono font-bold uppercase tracking-wider text-[11px] opacity-80">
                Phase 03
              </span>
              <span className="font-semibold text-[11px]">Steps 6 - 7</span>
            </div>
            <div className="font-bold text-sm">Evaluation Defense & Reverse Auction</div>
          </div>
        </div>

        {/* Horizontal Progress Stepper Track */}
        <div className="relative mb-10 pb-4 overflow-x-auto scrollbar-none">
          {/* Background Track Line */}
          <div className="absolute top-6 left-6 right-6 h-1 bg-slate-200 hidden md:block -z-0">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-[#1D3557] transition-all duration-500"
              style={{ width: `${((activeStepId - 1) / (BIDDING_JOURNEY_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          {/* Stepper Buttons Row */}
          <div className="flex items-center justify-between min-w-[760px] md:min-w-0 px-2 relative z-10">
            {BIDDING_JOURNEY_STEPS.map((step) => {
              const isCurrent = step.id === activeStepId;
              const isPast = step.id < activeStepId;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStepId(step.id);
                  }}
                  className="flex flex-col items-center group cursor-pointer text-center focus:outline-none"
                  style={{ width: `${100 / BIDDING_JOURNEY_STEPS.length}%` }}
                >
                  {/* Step Bubble Indicator */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-300 shadow-xs ${
                    isCurrent 
                      ? 'bg-[#1D3557] text-[#D4AF70] ring-4 ring-amber-200 scale-110 shadow-md' 
                      : isPast
                        ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                        : 'bg-white text-slate-500 border-2 border-slate-300 group-hover:border-slate-400'
                  }`}>
                    {isPast ? (
                      <Check className="w-5 h-5 stroke-[3]" />
                    ) : (
                      getStepIcon(step.id, "w-5 h-5")
                    )}
                  </div>

                  {/* Step Title Label */}
                  <div className="mt-3 px-1">
                    <span className={`block font-mono text-[10px] uppercase font-bold tracking-wider ${
                      isCurrent ? 'text-amber-700' : 'text-slate-500'
                    }`}>
                      Step 0{step.id}
                    </span>
                    <span className={`block text-xs font-bold leading-tight mt-0.5 line-clamp-1 ${
                      isCurrent ? 'text-[#1D3557] font-extrabold' : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {step.title.split(' ')[0]} {step.title.split(' ')[1]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Active Step Focus Card */}
        <div className="rounded-3xl bg-[#F8F9FA] border border-[#D9E0E8] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Subtle Decorative Background Seal */}
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 rounded-full bg-amber-500/5 pointer-events-none -z-0"></div>

          {/* Top Stage Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9E0E8] pb-5 mb-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-lg bg-[#1D3557] text-amber-300 text-xs font-mono font-bold tracking-wider">
                STAGE 0{activeStep.id} OF 07
              </span>
              <span className="px-3 py-1 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-bold">
                {activeStep.phase}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-100 text-amber-900 text-xs font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>{activeStep.duration}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Risk Severity:</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                activeStep.riskLevel === 'Critical' 
                  ? 'bg-rose-100 text-rose-800 border border-rose-200' 
                  : activeStep.riskLevel === 'High'
                    ? 'bg-amber-100 text-amber-800 border border-amber-200'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
              }`}>
                {activeStep.riskLevel}
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Step Description & Statutory Rules */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D9E0E8] flex items-center justify-center text-[#1D3557] shadow-xs">
                    {getStepIcon(activeStep.id, "w-5 h-5 text-[#D4AF70]")}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1D3557]">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#D4AF70] mb-3">
                  {activeStep.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                  {activeStep.summary}
                </p>
              </div>

              {/* Core Deliverables Matrix */}
              <div className="p-5 rounded-2xl bg-white border border-[#D9E0E8] shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF70]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Mandatory Stage Deliverables & Audit Actions
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.keyDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-800 font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory Framework & Avoided Risk Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Statutory Rule Reference
                  </span>
                  <div className="text-xs font-extrabold text-[#1D3557] flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{activeStep.statutoryRule}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 block mb-1">
                    Rejection Pitfall Avoided
                  </span>
                  <div className="text-xs font-medium text-amber-950 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span>{activeStep.rejectionRiskAvoided}</span>
                  </div>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStepId(prev => (prev > 1 ? prev - 1 : BIDDING_JOURNEY_STEPS.length));
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-300 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Stage</span>
                </button>

                <div className="text-xs text-slate-500 font-medium">
                  Step <strong className="text-slate-900">{activeStep.id}</strong> of {BIDDING_JOURNEY_STEPS.length}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStepId(prev => (prev < BIDDING_JOURNEY_STEPS.length ? prev + 1 : 1));
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1D3557] hover:bg-[#152740] text-amber-300 text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Interactive Self-Audit Card & Direct Assistance */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Interactive Self-Audit Checklist */}
              <div className="p-6 rounded-2xl bg-white border border-[#D9E0E8] shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF70]">
                      Interactive Self-Audit
                    </span>
                    <h4 className="font-display text-base font-bold text-[#1D3557]">
                      Stage 0{activeStep.id} Readiness Checklist
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-black text-amber-700">
                      {readinessPercent}%
                    </span>
                    <span className="block text-[9px] text-slate-400 uppercase font-semibold">
                      Ready
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 font-medium mb-3">
                  Tick each document to assess your pre-qualification readiness for this step:
                </p>

                <div className="space-y-2.5 mb-5">
                  {activeStep.checklistItems.map((chk, idx) => {
                    const key = `${activeStep.id}-${idx}`;
                    const isChecked = !!checkedChecklist[key];

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleToggleChecklist(key)}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                          isChecked 
                            ? 'bg-amber-50/60 border-amber-300 text-slate-900' 
                            : 'bg-slate-50 hover:bg-slate-100/70 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-md border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                          isChecked 
                            ? 'bg-amber-500 border-amber-600 text-slate-950' 
                            : 'bg-white border-slate-300'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={`text-xs font-medium leading-snug ${
                          isChecked ? 'font-bold text-slate-900' : 'text-slate-600'
                        }`}>
                          {chk}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Progress Mini Bar */}
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-5">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 to-[#1D3557] transition-all duration-300"
                    style={{ width: `${readinessPercent}%` }}
                  />
                </div>

                {/* Direct Action Buttons for this Step */}
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenInquiry('Tender Bidding Consultancy', `Stage ${activeStep.id}: ${activeStep.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Request Audit For Stage {activeStep.id}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(`Hello, I need assistance with Tender Stage ${activeStep.id}: ${activeStep.title}. Please guide our bidding team.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <span>WhatsApp Senior Consultant</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                  </a>
                </div>
              </div>

              {/* Deliverable Snapshot Callout */}
              <div className="p-4 rounded-xl bg-[#1D3557] text-white">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 mb-1">
                  Guaranteed Stage Outcome
                </div>
                <div className="text-xs font-bold text-slate-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{activeStep.deliverableArtifact}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
