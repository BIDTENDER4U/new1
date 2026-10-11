import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Users, 
  FileCheck, 
  Globe2, 
  Clock,
  Briefcase
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl, TRUST_STATS } from '../lib/constants';

interface AboutUsProps {
  onNavigate: (page: string) => void;
  onOpenInquiry: (category?: string, service?: string) => void;
  onOpenMapsModal?: (initialQuery?: string) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({
  onNavigate,
  onOpenInquiry,
  onOpenMapsModal,
}) => {
  const whatsappUrl = getWhatsAppUrl(
    'Hello Bid Tender 4 U, I would like to learn more about your tender consultancy services.'
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
          <span className="text-slate-900 font-extrabold">About Us</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>All India Tender Consultancy</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight max-w-4xl leading-tight">
            About Bid Tender 4 U
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium max-w-3xl leading-relaxed">
            Headquartered in Ahmedabad, Gujarat, Bid Tender 4 U is a premier public e-procurement advisory and bid packaging agency. We empower contractors, MSMEs, OEMs, and manufacturers across all Indian states to navigate government procurement regulations and bid with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenInquiry('Tender Bidding Consultancy', 'Consultation Intake')}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              <span>Consult Our Senior Officer</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-xs">
              <div className="font-display font-black text-2xl sm:text-3xl text-slate-950">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 font-bold mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Mission & Methodology */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
              Our Core Identity
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Why Indian Contractors Trust Bid Tender 4 U
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            <div className="space-y-4">
              <p>
                In Indian public procurement, even minor clerical oversights—such as missing UDIN on CA certificates, mismatched 5-digit NIC codes under GFR 170, or unlinked digital OEM authorizations—result in immediate technical disqualification during Packet-A scrutiny.
              </p>
              <p>
                Bid Tender 4 U was established to protect bidders from arbitrary rejections. Our specialized procurement officers conduct rigorous Notice Inviting Tender (NIT) audits, verifying every eligibility parameter before you invest non-refundable tender fees or lock working capital in Earnest Money Deposits (EMD).
              </p>
            </div>

            <div className="space-y-4">
              <p>
                From central portals like <strong className="text-slate-900">Government e-Marketplace (GeM 4.0)</strong>, <strong className="text-slate-900">Central Public Procurement Portal (CPPP)</strong>, and <strong className="text-slate-900">Indian Railways (IREPS)</strong> to state-specific platforms like <strong className="text-slate-900">Gujarat nProcure</strong> and <strong className="text-slate-900">Rajasthan SPPP</strong>, we provide end-to-end procedural support.
              </p>
              <p>
                We also arrange mandatory statutory enablers, including <strong className="text-slate-900">DPIIT Startup India Recognition</strong> (for prior turnover & experience exemptions under GFR 173(i)), <strong className="text-slate-900">FSSAI food licensing</strong> for institutional canteen bids, <strong className="text-slate-900">All Types of ISO Certification</strong>, and <strong className="text-slate-900">Class-3 Combo DSC cryptographic tokens</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Operational Pillars */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
              Standard Operating Principles
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Our 4 Pillars of Bidding Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                100% Procedural Scrutiny
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Every folder, affidavit, and technical specification sheet is cross-checked against NIT guidelines to ensure zero technical disqualifications.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Express Turnaround
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Emergency tender submissions handled within 24 to 48 hours, with Class-3 DSC issuance in 30 minutes via paperless Aadhaar e-KYC.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Statutory Compliance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Grounded in General Financial Rules (GFR 2017), GeM General Terms & Conditions, and Central Vigilance Commission (CVC) directives.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Pan-India Reach
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Serving businesses across 28 Indian States and 50+ key industrial cities from our registered headquarters in Ahmedabad, Gujarat.
              </p>
            </div>
          </div>
        </section>

        {/* Registered Office & Contact Info */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
              Corporate Information
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Registered Office & Contact Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-bold">
                <MapPin className="w-4 h-4" />
                <span>Office Address</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">
                {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}, {BUSINESS_INFO.address.country}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-bold">
                <Phone className="w-4 h-4" />
                <span>Direct Contact</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">
                Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline font-bold text-slate-900">{BUSINESS_INFO.displayPhone}</a><br />
                Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:underline font-bold text-slate-900">{BUSINESS_INFO.email}</a>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-bold">
                <Clock className="w-4 h-4" />
                <span>Desk Hours</span>
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">
                {BUSINESS_INFO.workingHours}<br />
                Emergency tender intake available 24/7 on WhatsApp
              </p>
            </div>
          </div>

          {/* Interactive Google Map Frame & Grounding Trigger */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-black text-base text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Physical Office Location (Google Maps)</span>
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Ground Floor, S-1, City Center, Near Swastik Cross Road, C G Road, Navrangpura, Ahmedabad 380009
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://maps.google.com/?q=City+Center+Navrangpura+CG+Road+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-2xs"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>

                {onOpenMapsModal && (
                  <button
                    type="button"
                    onClick={() => onOpenMapsModal('Bid Tender 4 U Ahmedabad Headquarters')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 font-bold text-xs transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>Maps Grounding Locator</span>
                  </button>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 overflow-hidden h-64 sm:h-80 w-full bg-slate-100 shadow-inner">
              <iframe
                title="Bid Tender 4 U Ahmedabad Headquarters Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=City+Center+Near+Swastik+Cross+Road+CG+Road+Navrangpura+Ahmedabad+Gujarat+380009&t=&z=16&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </section>

        {/* Contextual Internal Links Section */}
        <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
              Explore Our Core Practice Areas
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Internal Links to Core Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="/tender-bidding-consultancy"
              onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  Tender Bidding Consultancy
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Full technical packaging, NIT review, and bid submission.
                </p>
              </div>
            </a>

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
              href="/gem-product-listing"
              onClick={(e) => { e.preventDefault(); onNavigate('gem-product-listing'); }}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
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
              href="/oem-services"
              onClick={(e) => { e.preventDefault(); onNavigate('oem-services'); }}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  OEM Services
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Brand approval, OEM codes, and reseller authorization.
                </p>
              </div>
            </a>

            <a
              href="/stories"
              onClick={(e) => { e.preventDefault(); onNavigate('stories'); }}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  Client Success Stories
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Verified contract awards and contractor case studies.
                </p>
              </div>
            </a>

            <a
              href="/contact-us"
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex items-start gap-3 shadow-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                  Contact Us
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Get in touch with our intake desk for tender reviews.
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
