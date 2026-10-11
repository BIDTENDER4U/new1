import React from 'react';
import { 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  MessageCircle, 
  FileText, 
  ChevronRight, 
  Sparkles, 
  Award, 
  Building2, 
  FileCheck,
  TrendingUp,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

interface OEMServicesProps {
  onNavigate: (page: string) => void;
  onOpenInquiry: (category?: string, service?: string) => void;
  onOpenLettersModal?: (type?: 'oem' | 'representation' | 'acceptance') => void;
}

export const OEMServices: React.FC<OEMServicesProps> = ({
  onNavigate,
  onOpenInquiry,
  onOpenLettersModal,
}) => {
  const whatsappUrl = getWhatsAppUrl(
    'Hello Bid Tender 4 U, I need assistance with GeM OEM Services, Brand Approval, and OEM Authorization Codes for custom bidding.'
  );

  return (
    <div className="bg-[#F8FAFC] text-slate-900 min-h-screen text-left">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 py-3 px-4 sm:px-8 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-500">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="hover:text-amber-800 transition-colors"
          >
            Home
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <a
            href="/services"
            onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
            className="hover:text-amber-800 transition-colors"
          >
            Services
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-extrabold">OEM Services & Brand Approval</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            <Cpu className="w-3.5 h-3.5 text-blue-700" />
            <span>GeM 4.0 Brand Management & OEM Solutions</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight max-w-4xl leading-tight">
            OEM Services, Brand Approval & Authorization Codes
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium max-w-3xl leading-relaxed">
            Eliminate bid disqualification risks on OEM-locked tenders. We manage brand registration, Quadrant-1 catalog pairing, verified Manufacturer Authorization Forms (MAF), and digital OEM authorization codes for manufacturers and resellers across India.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenInquiry('GeM OEM Authorization & Brand Approval', 'OEM Code Issuance')}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              <span>Get OEM Authorization Code</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp OEM Consultant</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Core OEM Offerings Grid */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
              Comprehensive Solutions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Key OEM Services Provided by Bid Tender 4 U
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              Whether you are an Original Equipment Manufacturer seeking brand presence on GeM or an authorized dealer participating in custom bids, our specialized desk delivers end-to-end compliance:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Official GeM Brand Approval
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Documenting trademark certificates (Class 1-45), manufacturing licenses, and filing trademark ownership verification on the GeM portal backend.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                OEM Authorization Codes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Generating unique cryptographic authorization codes from the OEM dashboard to authorize qualified dealers in custom bids, preventing Clause 4 rejection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Reseller Authorization Letters
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Drafting legally compliant Manufacturer Authorization Forms (MAF) specifying bid numbers, warranty commitments, and spare-parts availability.
              </p>
              {onOpenLettersModal && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenLettersModal('oem')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1D3557] hover:bg-[#152742] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#D4AF70]" />
                    <span>View Sample Letter Format →</span>
                  </button>
                </div>
              )}
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Vendor Assessment Support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Assistance with Quality Council of India (QCI) vendor assessment desktop audits, video verification, and statutory exemption declarations for MSMEs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Anti-Cartelization Protection
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Advising on Competition Commission of India (CCI) rulings where restrictive custom bid clauses unfairly favor a single OEM or distributor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Quadrant-1 Catalog Pairing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Pairing dealer offerings with verified Quadrant-1 OEM master catalogs so products can be procured via direct purchase and reverse auctions.
              </p>
            </div>
          </div>
        </section>

        {/* Why Digital OEM Linking Is Critical */}
        <section className="bg-amber-50/80 rounded-3xl p-6 sm:p-10 border border-amber-300 shadow-xs space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 mt-1">
              <AlertTriangle className="w-6 h-6 text-amber-900" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Why Paper Authorization Letters Cause Instant Disqualification on GeM
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed font-medium">
                Under GeM GTC Clause 3.4 and 4.2, uploading a scanned paper letterhead authorization without completing digital pairing on the GeM portal backend is marked as a fatal defect during Packet-A technical evaluation. The automated tender software scans the bidder’s PAN against the OEM panel. If digital linkage is missing, the bid is automatically rejected. Bid Tender 4 U guarantees 100% digital verification before bid submission.
              </p>
            </div>
          </div>
        </section>

        {/* Contextual Internal Links Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
              Related E-Procurement Services
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Explore Interconnected GeM & Bidding Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="/gem-registration"
              onClick={(e) => { e.preventDefault(); onNavigate('gem-documents'); }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  GeM Registration
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Statutory documents for primary sellers and OEM verification.
                </p>
              </div>
            </a>

            <a
              href="/gem-product-listing"
              onClick={(e) => { e.preventDefault(); onNavigate('gem-product-listing'); }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  GeM Product Listing
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Quadrant 1-4 catalog management and product uploads.
                </p>
              </div>
            </a>

            <a
              href="/tender-bidding-consultancy"
              onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  Tender Bidding Consultancy
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  End-to-end technical packaging, NIT review, and bid submission.
                </p>
              </div>
            </a>

            <a
              href="/certifications"
              onClick={(e) => { e.preventDefault(); onNavigate('certifications'); }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  All Types of ISO Certification
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  ISO 9001, 14001, 45001 & 27001 fast-track certifications.
                </p>
              </div>
            </a>

            <a
              href="/about-us"
              onClick={(e) => { e.preventDefault(); onNavigate('about-us'); }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  About Us
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Over 1,500+ analyzed bids, zero-disqualification track record.
                </p>
              </div>
            </a>

            <a
              href="/contact-us"
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  Contact Us
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Submit your catalog or tender document for expert review.
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
