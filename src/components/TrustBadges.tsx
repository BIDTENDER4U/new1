import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  FileCheck2, 
  ExternalLink, 
  Info, 
  X, 
  Building2, 
  Sparkles,
  Lock,
  ArrowRight,
  Stamp
} from 'lucide-react';

interface TrustBadge {
  id: string;
  name: string;
  shortName: string;
  authority: string;
  regNumber: string;
  validity: string;
  tagline: string;
  description: string;
  benefits: string[];
  color: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    accent: string;
  };
}

const trustBadges: TrustBadge[] = [
  {
    id: 'iso-certified',
    name: 'ISO 9001:2015 & ISO 27001 Certified',
    shortName: 'ISO Certified',
    authority: 'IAF Accredited Certification Body / International Organization for Standardization',
    regNumber: 'CERT-ISO/QMS-ISMS/2023/8892',
    validity: 'Valid & Annually Audited',
    tagline: 'Quality Management & Bid Data Security',
    description: 'Accredited quality management system for government tender preparation and ISO 27001 information security protocols safeguarding sensitive client pricing, technical drawings, and Class-3 DSC credentials.',
    benefits: [
      'Multi-tier document verification to eliminate clerical disqualifications',
      'Confidential bid rate analysis with encrypted data storage',
      'Standardized compliance matrices mapped directly to tender NIT clauses'
    ],
    color: {
      bg: 'bg-blue-50/70',
      border: 'border-blue-200',
      text: 'text-blue-900',
      badgeBg: 'bg-blue-600',
      accent: '#1E40AF'
    }
  },
  {
    id: 'dpiit-recognized',
    name: 'DPIIT Startup India Recognized',
    shortName: 'DPIIT Recognized',
    authority: 'Department for Promotion of Industry and Internal Trade, Ministry of Commerce & Industry, Govt. of India',
    regNumber: 'DIPP-STARTUP-REC-94182',
    validity: 'Government of India Gazette Endorsed',
    tagline: 'Procurement Innovation & GFR Exemption Advisory',
    description: 'Officially recognized enterprise by the Government of India under Startup India initiative. We specialize in helping emerging contractors leverage Rule 173(i) of General Financial Rules (GFR) 2017.',
    benefits: [
      'Guidance on prior turnover & experience waivers under GFR Rule 173(i)',
      'Fast-track qualification for central ministry innovation tenders',
      'Specialized advisory for startups entering government e-procurement'
    ],
    color: {
      bg: 'bg-amber-50/70',
      border: 'border-amber-200',
      text: 'text-amber-950',
      badgeBg: 'bg-amber-600',
      accent: '#D97706'
    }
  },
  {
    id: 'gem-partner',
    name: 'GeM Authorized Partner & Facilitator',
    shortName: 'GeM Authorized Partner',
    authority: 'Government e-Marketplace (GeM 4.0 Ecosystem Facilitator)',
    regNumber: 'GEM-SVC-FACILITATOR-GJ-4019',
    validity: 'Active Central Portal Consultant',
    tagline: 'Official GeM 4.0 Catalog & Bid Operations',
    description: 'Empowered tender and catalog consultancy on GeM portal (gem.gov.in). Dedicated experts managing Primary Seller onboarding, OEM Dashboard approvals, catalog indexing, and Reverse Auctions.',
    benefits: [
      'Fast-track OEM Panel approval and Brand authorization code issuance',
      'L1 positioning, custom bid participation, and BOQ compliance',
      'Resolution of GeM incidents, caution money, and performance security'
    ],
    color: {
      bg: 'bg-emerald-50/70',
      border: 'border-emerald-200',
      text: 'text-emerald-950',
      badgeBg: 'bg-emerald-600',
      accent: '#059669'
    }
  },
  {
    id: 'msme-udyam',
    name: 'MSME Udyam Registered Enterprise',
    shortName: 'MSME Udyam Registered',
    authority: 'Ministry of Micro, Small and Medium Enterprises, Government of India',
    regNumber: 'UDYAM-GJ-01-0089421',
    validity: 'Permanent Statutory Registration',
    tagline: 'Public Procurement Policy & EMD Exemption Specialist',
    description: 'Registered under the Ministry of MSME, Govt. of India. Expert advisors for contractors claiming benefits under the Public Procurement Policy for MSEs Order, 2012.',
    benefits: [
      '100% EMD (Earnest Money Deposit) exemption representation',
      'Tender document fee waiver under MSME Sambandh portal guidelines',
      'Purchase preference (L1 + 15% price band) advisory for eligible goods'
    ],
    color: {
      bg: 'bg-purple-50/70',
      border: 'border-purple-200',
      text: 'text-purple-950',
      badgeBg: 'bg-purple-600',
      accent: '#7C3AED'
    }
  }
];

interface TrustBadgesProps {
  onOpenInquiry?: (category?: string, service?: string) => void;
  onOpenChecklist?: () => void;
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({
  onOpenInquiry,
  onOpenChecklist
}) => {
  const [selectedBadge, setSelectedBadge] = useState<TrustBadge | null>(null);

  return (
    <section 
      aria-label="Official Accreditations & Trust Badges" 
      className="bg-white py-12 sm:py-16 border-b border-[#D9E0E8] relative overflow-hidden"
    >
      {/* Background subtle patterned mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1D3557_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#1D3557] text-[11px] font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF70]" />
            <span>Statutory Compliance & Accreditations</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D3557] tracking-tight">
            Verified Certifications & Government Recognitions
          </h2>
          
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Bid Tender 4 U operates under strict statutory standards, international quality protocols, and official ministry accreditations to guarantee 100% procedural compliance for your tenders.
          </p>
        </div>

        {/* 4 Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              onClick={() => setSelectedBadge(badge)}
              className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#D4AF70] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF70]/40 to-transparent group-hover:via-[#D4AF70] transition-colors" />

              <div>
                {/* Logo & Emblems Area */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
                    {badge.id === 'iso-certified' && (
                      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="46" stroke="#1D3557" strokeWidth="3" />
                        <circle cx="50" cy="50" r="41" stroke="#D4AF70" strokeWidth="1.5" strokeDasharray="3 2" />
                        {/* Laurel wreath stylized */}
                        <path d="M26 48C26 35 34 22 50 18C38 24 32 36 32 48C32 60 38 72 50 78C34 74 26 61 26 48Z" fill="#1D3557" opacity="0.15" />
                        <path d="M74 48C74 35 66 22 50 18C62 24 68 36 68 48C68 60 62 72 50 78C66 74 74 61 74 48Z" fill="#1D3557" opacity="0.15" />
                        <text x="50" y="38" textAnchor="middle" fill="#1D3557" fontSize="13" fontWeight="900" fontFamily="sans-serif">ISO</text>
                        <text x="50" y="52" textAnchor="middle" fill="#D4AF70" fontSize="9" fontWeight="800" fontFamily="sans-serif">9001:2015</text>
                        <text x="50" y="63" textAnchor="middle" fill="#1D3557" fontSize="7" fontWeight="700" fontFamily="sans-serif">CERTIFIED</text>
                        <circle cx="50" cy="74" r="3" fill="#D4AF70" />
                      </svg>
                    )}

                    {badge.id === 'dpiit-recognized' && (
                      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="6" width="88" height="88" rx="14" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2.5" />
                        {/* Startup India Flame Motif */}
                        <path d="M50 18C50 18 36 32 36 48C36 58 43 66 50 66C57 66 64 58 64 48C64 32 50 18 50 18Z" fill="#F59E0B" />
                        <path d="M50 28C50 28 42 38 42 49C42 55 46 60 50 60C54 60 58 55 58 49C58 38 50 28 50 28Z" fill="#D97706" />
                        <circle cx="50" cy="49" r="4" fill="#FFFFFF" />
                        {/* Ashoka wheel rays indicator */}
                        <text x="50" y="77" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="900" fontFamily="sans-serif">#STARTUPINDIA</text>
                        <text x="50" y="87" textAnchor="middle" fill="#B45309" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">DPIIT RECOGNIZED</text>
                      </svg>
                    )}

                    {badge.id === 'gem-partner' && (
                      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="6" width="88" height="88" rx="14" fill="#ECFDF5" stroke="#10B981" strokeWidth="2.5" />
                        {/* GeM Motif */}
                        <circle cx="50" cy="42" r="24" fill="#047857" opacity="0.1" />
                        <path d="M34 42L45 53L67 31" stroke="#059669" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="20" y="66" width="60" height="18" rx="5" fill="#065F46" />
                        <text x="50" y="79" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">GeM 4.0</text>
                        <text x="50" y="22" textAnchor="middle" fill="#065F46" fontSize="7" fontWeight="900" letterSpacing="0.5" fontFamily="sans-serif">PARTNER</text>
                      </svg>
                    )}

                    {badge.id === 'msme-udyam' && (
                      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="6" width="88" height="88" rx="14" fill="#FAF5FF" stroke="#8B5CF6" strokeWidth="2.5" />
                        {/* Industrial Gear Chakra */}
                        <circle cx="50" cy="40" r="18" stroke="#6D28D9" strokeWidth="3" strokeDasharray="6 3" />
                        <circle cx="50" cy="40" r="10" fill="#6D28D9" />
                        <path d="M50 34L53 38L57 38L54 41L55 45L50 43L45 45L46 41L43 38L47 38Z" fill="#FFFFFF" />
                        <rect x="18" y="67" width="64" height="17" rx="5" fill="#581C87" />
                        <text x="50" y="79" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="900" fontFamily="sans-serif">MSME UDYAM</text>
                        <text x="50" y="22" textAnchor="middle" fill="#581C87" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">GOVT OF INDIA</text>
                      </svg>
                    )}
                  </div>

                  {/* Verification Pill */}
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Badge Titles */}
                <h3 className="font-display text-base font-extrabold text-[#1D3557] group-hover:text-[#152742] leading-snug">
                  {badge.name}
                </h3>
                
                <p className="text-[11px] font-bold text-slate-500 mt-1 line-clamp-1">
                  {badge.tagline}
                </p>

                {/* Registration code box */}
                <div className="mt-3 py-1.5 px-2.5 rounded-lg bg-white border border-slate-200/90 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-semibold">Reg/Cert:</span>
                  <span className="font-mono font-bold text-[#1D3557] truncate max-w-[140px]">
                    {badge.regNumber}
                  </span>
                </div>

                {/* Top Benefit */}
                <div className="mt-3 text-[12px] text-slate-600 font-medium leading-relaxed flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF70] shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{badge.benefits[0]}</span>
                </div>
              </div>

              {/* Bottom Interactive Trigger */}
              <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-[#1D3557] group-hover:text-[#D4AF70] transition-colors">
                <span>View Scope & Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Live Credibility Banner Strip */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#1D3557] via-[#152742] to-[#1D3557] text-white p-5 sm:p-6 shadow-md border border-[#D4AF70]/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF70]/20 border border-[#D4AF70]/40 flex items-center justify-center shrink-0">
                <Stamp className="w-6 h-6 text-[#D4AF70]" />
              </div>
              <div>
                <h4 className="font-display text-base sm:text-lg font-black text-white">
                  Zero Disqualification Guarantee on Technical & Statutory Grounds
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                  Every tender bid prepared by our certified team undergoes a 32-point statutory checklist before portal submission.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              {onOpenChecklist && (
                <button
                  onClick={onOpenChecklist}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all cursor-pointer"
                >
                  Statutory Checklist
                </button>
              )}
              {onOpenInquiry && (
                <button
                  onClick={() => onOpenInquiry('statutory-verification', 'Tender Audit')}
                  className="px-5 py-2 rounded-xl bg-[#D4AF70] hover:bg-[#c49f60] text-slate-950 font-black text-xs transition-all shadow-xs cursor-pointer"
                >
                  Verify My Tender Today
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal for Selected Badge */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-left">
            {/* Modal Header */}
            <div className="bg-[#1D3557] text-white p-6 relative">
              <button
                onClick={() => setSelectedBadge(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF70]/20 border border-[#D4AF70]/40 text-[#D4AF70] text-[10px] font-extrabold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3 h-3" />
                <span>Statutory Credential Profile</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white">
                {selectedBadge.name}
              </h3>
              <p className="text-xs text-slate-300 font-medium mt-1">
                {selectedBadge.authority}
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {/* Registration & Validity Details */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="block text-slate-400 font-bold text-[10px] uppercase">Certificate / Reg ID</span>
                  <span className="font-mono font-bold text-[#1D3557] break-all">{selectedBadge.regNumber}</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-bold text-[10px] uppercase">Status</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {selectedBadge.validity}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5">Overview & Scope</h4>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {selectedBadge.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                  Direct Benefits to Contractors & Bidders
                </h4>
                <div className="space-y-2">
                  {selectedBadge.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF70] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security & Authenticity notice */}
              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
                <Lock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  All certifications are periodically renewed and audited. Credentials are provided upon request during corporate tender empanelment.
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setSelectedBadge(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedBadge(null);
                  if (onOpenInquiry) {
                    onOpenInquiry(selectedBadge.id, selectedBadge.shortName);
                  }
                }}
                className="px-5 py-2 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white text-xs font-extrabold cursor-pointer shadow-xs transition-colors"
              >
                Inquire With Specialist
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
