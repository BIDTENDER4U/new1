import React from 'react';
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  MessageCircle, 
  FileText, 
  Tag, 
  Sparkles, 
  Cpu, 
  FileCheck, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  HelpCircle
} from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

interface GeMProductListingProps {
  onNavigate: (page: string) => void;
  onOpenInquiry: (category?: string, service?: string) => void;
}

export const GeMProductListing: React.FC<GeMProductListingProps> = ({
  onNavigate,
  onOpenInquiry,
}) => {
  const whatsappUrl = getWhatsAppUrl(
    'Hello Bid Tender 4 U, I need assistance with GeM Product Listing, Catalog Pairing, and Brand Approval on GeM 4.0.'
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
          <span className="text-slate-900 font-extrabold">GeM Product Listing & Catalog Pairing</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>GeM 4.0 Marketplace Catalog Management</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight max-w-4xl leading-tight">
            GeM Product Listing & Catalog Pairing Services
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium max-w-3xl leading-relaxed">
            Professional catalog creation, brand authorization linking, HSN/SAC code mapping, and primary quadrant pairing on Government e-Marketplace. Ensure your products qualify for direct purchase, L1 comparison, and custom bid participation without administrative warnings.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenInquiry('GeM Product Listing & Catalog Management', 'Product Upload & Pairing')}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              <span>List Products on GeM</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp Catalog Expert</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Guides */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* The 4 Quadrants of GeM Catalog Architecture */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
              Marketplace Taxonomy
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              The 4 Quadrants of GeM 4.0 Product Catalogs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              Every item listed on GeM falls into one of four distinct regulatory quadrants. Understanding your quadrant is crucial for search visibility and custom bid participation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black uppercase px-2.5 py-0.5 rounded bg-amber-400 text-slate-950">
                  Quadrant 1
                </span>
                <span className="text-xs font-bold text-amber-900 font-mono">OEM Verified</span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                OEM Master Catalog (Registered Brands)
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Created directly by verified Original Equipment Manufacturers (OEMs) with trademark certificates and manufacturing licenses. Holds direct purchase eligibility up to ₹5 Lakhs without bidding.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black uppercase px-2.5 py-0.5 rounded bg-blue-200 text-blue-900">
                  Quadrant 2
                </span>
                <span className="text-xs font-bold text-blue-900 font-mono">Reseller Paired</span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Authorized Reseller Paired Catalogs
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Dealers and distributors paired to a Quadrant-1 OEM product using a valid Manufacturer Authorization Form (MAF) or OEM authorization code. Resellers can quote in custom bids and RA auctions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black uppercase px-2.5 py-0.5 rounded bg-emerald-200 text-emerald-900">
                  Quadrant 3
                </span>
                <span className="text-xs font-bold text-emerald-900 font-mono">Unbranded MSME</span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Unbranded / White-Label Products
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Goods manufactured by MSMEs or artisans without registered trademarks. Permitted in general stationery, hardware, and cottage industries under MSME preferential procurement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black uppercase px-2.5 py-0.5 rounded bg-slate-200 text-slate-800">
                  Quadrant 4
                </span>
                <span className="text-xs font-bold text-slate-600 font-mono">Universal Generic</span>
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Non-Standard Generic Goods
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Custom specification items subject to mandatory technical parameter verification by government buyers during technical scrutiny.
              </p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Listing Process */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
              End-to-End Workflow
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              How Bid Tender 4 U Executes Your GeM Product Listing
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              We handle every procedural and technical requirement so your catalog goes live smoothly without buyer dispute flags:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center font-mono text-sm">
                1
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Category Code & HSN Validation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Mapping your product specifications to exact GeM golden parameters, HSN codes, and GST tax slabs to prevent tax mismatch rejections.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center font-mono text-sm">
                2
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Brand Approval & OEM Authorization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Registering your trademark on GeM or securing digital authorization linking with verified Quadrant-1 OEMs for branded custom bids.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center font-mono text-sm">
                3
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Catalog Upload & L1 Optimization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Uploading high-resolution product photos, datasheets, test reports, and configuring pricing bands to stay competitive on government direct purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Contextual Internal Links Section */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
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
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
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
              href="/oem-services"
              onClick={(e) => { e.preventDefault(); onNavigate('oem-services'); }}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  OEM Services
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Brand approval, OEM authorization codes, and reseller pairing.
                </p>
              </div>
            </a>

            <a
              href="/tender-bidding-consultancy"
              onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
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
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  Class-3 DSC Token Setup
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  FIPS crypto USB tokens configured with browser PKI drivers.
                </p>
              </div>
            </a>

            <a
              href="/about-us"
              onClick={(e) => { e.preventDefault(); onNavigate('about-us'); }}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-4 h-4" />
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
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
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
