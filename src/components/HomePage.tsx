import React from 'react';
import { Hero } from './Hero';
import { ClientSuccessStories } from './ClientSuccessStories';
import { BidWinningMilestones } from './BidWinningMilestones';
import { 
  Briefcase, 
  Building2, 
  Globe2, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  FileText, 
  Clock, 
  FileCheck, 
  BookOpen, 
  MapPin, 
  Rocket, 
  Calendar,
  Cpu,
  Layers,
  Award,
  HelpCircle
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';
import { BLOG_ARTICLES } from '../lib/blogArticlesData';
import { LiveTenderRadarSection } from './LiveTenderRadarSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenInquiryModal: (category?: string, service?: string) => void;
  onOpenChecklistModal: () => void;
  onOpenFreeSummaryModal?: () => void;
  onOpenRadarModal?: (initialQuery?: string) => void;
  onOpenPaymentModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenInquiryModal,
  onOpenChecklistModal,
  onOpenFreeSummaryModal,
  onOpenRadarModal,
  onOpenPaymentModal,
}) => {
  return (
    <div className="space-y-0 text-left">
      {/* High-Impact Hero with B4 Branding */}
      <Hero
        onScrollToForm={() => onOpenInquiryModal()}
        onOpenChecklistModal={onOpenChecklistModal}
        onOpenFreeSummaryModal={onOpenFreeSummaryModal}
      />

      {/* Bid Winning Milestone Animated Counter Section */}
      <BidWinningMilestones
        onOpenInquiry={onOpenInquiryModal}
        onNavigate={onNavigate}
      />

      {/* Real-Time Live Tender & Regulatory Radar (Google Search Grounding) */}
      <LiveTenderRadarSection
        onOpenInquiry={onOpenInquiryModal}
        onOpenFullModal={onOpenRadarModal}
      />

      {/* Core Practice Areas & Internal Linking Section (High SEO Authority & Sitelink Enabler) */}
      <section className="py-16 bg-white border-b border-slate-200" aria-label="Core Tender Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 font-mono">
              Core Practice Areas & Technical Sitelinks
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">
              Government Tender Consultancy & GeM Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              Direct access to our 6 primary e-procurement service departments. Explore procedural checklists, brand authorization rules, and tender compliance guides:
            </p>
          </div>

          {/* 6 Key Core Service Cards with Explicit Descriptive Anchor Texts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Tender Bidding Consultancy */}
            <article className="bg-[#F8FAFC] rounded-2xl border border-slate-200 hover:border-amber-400 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg group text-left">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 group-hover:scale-105 transition-transform shadow-xs">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Full Support
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5 group-hover:text-amber-800 transition-colors">
                  <a
                    href="/tender-bidding-consultancy"
                    onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                    className="hover:underline focus:outline-none"
                  >
                    Tender Bidding Consultancy
                  </a>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  End-to-end technical packaging, NIT document audits, BOQ financial pricing analysis, Packet A & B compilation, and live portal submission on GeM, CPPP, nProcure, and state platforms.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <a
                  href="/tender-bidding-consultancy"
                  onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                  className="font-bold text-amber-800 group-hover:text-amber-950 flex items-center gap-1"
                >
                  <span>Explore Tender Bidding Consultancy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>

            {/* 2. GeM Registration */}
            <article className="bg-[#F8FAFC] rounded-2xl border border-slate-200 hover:border-amber-400 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg group text-left">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 group-hover:scale-105 transition-transform shadow-xs">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-black">
                    Mandatory
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5 group-hover:text-amber-800 transition-colors">
                  <a
                    href="/gem-registration"
                    onClick={(e) => { e.preventDefault(); onNavigate('gem-documents'); }}
                    className="hover:underline focus:outline-none"
                  >
                    GeM Registration
                  </a>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Complete statutory checklist and onboarding for Primary Sellers, OEMs, and Resellers. PAN, GSTIN, Aadhaar e-KYC, PFMS bank validation, and caution deposit management on GeM 4.0.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <a
                  href="/gem-registration"
                  onClick={(e) => { e.preventDefault(); onNavigate('gem-documents'); }}
                  className="font-bold text-amber-800 group-hover:text-amber-950 flex items-center gap-1"
                >
                  <span>View GeM Registration Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>

            {/* 3. GeM Product Listing */}
            <article className="bg-[#F8FAFC] rounded-2xl border border-slate-200 hover:border-amber-400 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg group text-left">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-800 group-hover:scale-105 transition-transform shadow-xs">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">
                    Quadrant 1-4
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5 group-hover:text-amber-800 transition-colors">
                  <a
                    href="/gem-product-listing"
                    onClick={(e) => { e.preventDefault(); onNavigate('gem-product-listing'); }}
                    className="hover:underline focus:outline-none"
                  >
                    GeM Product Listing
                  </a>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Catalog creation, HSN/SAC code mapping, primary and secondary catalog pairing, and L1 direct purchase price optimization to prevent incident logs and product de-listing.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <a
                  href="/gem-product-listing"
                  onClick={(e) => { e.preventDefault(); onNavigate('gem-product-listing'); }}
                  className="font-bold text-amber-800 group-hover:text-amber-950 flex items-center gap-1"
                >
                  <span>Explore GeM Product Listing</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>

            {/* 4. OEM Services */}
            <article className="bg-[#F8FAFC] rounded-2xl border border-slate-200 hover:border-amber-400 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg group text-left">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-800 group-hover:scale-105 transition-transform shadow-xs">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-200">
                    Brand Codes
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5 group-hover:text-amber-800 transition-colors">
                  <a
                    href="/oem-services"
                    onClick={(e) => { e.preventDefault(); onNavigate('oem-services'); }}
                    className="hover:underline focus:outline-none"
                  >
                    OEM Services
                  </a>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Official GeM brand approval, OEM authorization codes for custom bids, Reseller Authorization Letters (MAF), QCI vendor assessment assistance, and Quadrant-1 catalog linking.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <a
                  href="/oem-services"
                  onClick={(e) => { e.preventDefault(); onNavigate('oem-services'); }}
                  className="font-bold text-amber-800 group-hover:text-amber-950 flex items-center gap-1"
                >
                  <span>Explore OEM Services & Codes</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>

            {/* 5. About Us */}
            <article className="bg-[#F8FAFC] rounded-2xl border border-slate-200 hover:border-amber-400 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg group text-left">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 group-hover:scale-105 transition-transform shadow-xs">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                    Company
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5 group-hover:text-amber-800 transition-colors">
                  <a
                    href="/about-us"
                    onClick={(e) => { e.preventDefault(); onNavigate('about-us'); }}
                    className="hover:underline focus:outline-none"
                  >
                    About Us
                  </a>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Founded in Isanpur, Ahmedabad, Gujarat. Over 1,500+ government tenders analyzed, ₹500 Cr+ in cumulative bid volume, zero-disqualification methodology, and nationwide reach.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <a
                  href="/about-us"
                  onClick={(e) => { e.preventDefault(); onNavigate('about-us'); }}
                  className="font-bold text-amber-800 group-hover:text-amber-950 flex items-center gap-1"
                >
                  <span>Read About Us & Our Track Record</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>

            {/* 6. Contact Us */}
            <article className="bg-[#F8FAFC] rounded-2xl border border-slate-200 hover:border-amber-400 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg group text-left">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-800 group-hover:scale-105 transition-transform shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-200">
                    24/7 Desk
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5 group-hover:text-amber-800 transition-colors">
                  <a
                    href="/contact-us"
                    onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                    className="hover:underline focus:outline-none"
                  >
                    Contact Us
                  </a>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Direct tender document intake desk. Share your NIT/RFP document on WhatsApp or upload online for an express 4-hour preliminary eligibility audit by senior procurement officers.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <a
                  href="/contact-us"
                  onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                  className="font-bold text-amber-800 group-hover:text-amber-950 flex items-center gap-1"
                >
                  <span>Contact Our Intake Desk</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Standout Feature Section: Get Free Summary of Tender */}
      <section className="py-14 bg-gradient-to-r from-amber-50/60 via-amber-100/40 to-amber-50/60 border-b border-amber-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-amber-400/80 rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8 relative">
            
            <div className="space-y-4 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>100% Free Interactive Diagnostic Tool</span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  Get Free Summary of Any Tender or GeM Bid
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Evaluate bid feasibility before you invest non-refundable fees. Our instant summary breaks down <strong className="text-slate-900">Average Annual Turnover</strong>, <strong className="text-slate-900">Past Experience (80/50/40 rule)</strong>, <strong className="text-emerald-700">DPIIT Startup India exemptions (GFR 173(i))</strong>, <strong className="text-blue-700">MSME EMD waiver</strong>, <strong className="text-amber-800">mandatory FSSAI food licensing</strong>, and the top 5 disqualification traps.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-slate-700 pt-1">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Startup & MSME Waivers Audited</span>
                </span>
                <span className="flex items-center gap-1.5 text-blue-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>FSSAI & Statutory Licences Checked</span>
                </span>
                <span className="flex items-center gap-1.5 text-amber-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Instant Printable 1-Page Summary</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={onOpenFreeSummaryModal}
                className="px-7 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-md shadow-amber-500/20 transition-all transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                <span>Get Free Tender Summary</span>
              </button>

              <a
                href={getWhatsAppUrl('Hello Bid Tender 4 U, I want to get a Free Summary of a live tender / GeM bid. Please advise.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Send Bid on WhatsApp (+91 9726407267)</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Callout: GeM Registration Document Requirements Bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center shrink-0 mt-1 shadow-xs">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 font-mono">
                  Government e-Marketplace (GeM 4.0)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  Complete Document Requirements for GeM Registration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed font-medium">
                  Want to register as a Primary Seller, OEM Manufacturer, or Authorized Reseller? Check our complete checklist of PAN, Aadhaar, GST, ITR, PFMS Bank, and Trademark requirements.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href="/gem-registration"
                onClick={(e) => { e.preventDefault(); onNavigate('gem-documents'); }}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Read Full Document Checklist</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onOpenInquiryModal('GeM Portal Complete Bidding Support', 'GeM Portal Registration & Profile Setup')}
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Register with Expert</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories & Testimonials */}
      <ClientSuccessStories onOpenInquiry={onOpenInquiryModal} />

      {/* Government Procurement Blog Showcase Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-2.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Authoritative Legal & Regulatory Intelligence</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Government Procurement Blog
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed font-medium">
                In-depth regulatory analyses, GFR 2017 amendments, DPIIT startup waivers, FSSAI food licensing mandates, and tender bidding playbooks authored by our senior procurement counsels.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/blog"
                onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-xs group cursor-pointer"
              >
                <span>View All Long-Form Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* 3 Featured Blog Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_ARTICLES.slice(0, 3).map((article) => (
              <article
                key={article.slug}
                className="bg-[#F8FAFC] border border-slate-200 hover:border-amber-400 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-[11px]">
                    <span className="font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                    <a
                      href={`/blog/${article.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = `#blog-${article.slug}`;
                        onNavigate('blog');
                      }}
                      className="hover:underline"
                    >
                      {article.title}
                    </a>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {article.subtitle}
                  </p>

                  {/* Key Takeaways Snapshot */}
                  {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                    <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                        Key Statutory Takeaway:
                      </span>
                      <p className="text-[11px] text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80 leading-relaxed font-serif italic">
                        "{article.keyTakeaways[0]}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{article.date}</span>
                  </div>

                  <a
                    href={`/blog/${article.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = `#blog-${article.slug}`;
                      onNavigate('blog');
                    }}
                    className="font-bold text-amber-800 group-hover:text-amber-950 flex items-center gap-1"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Regulatory Citation Strip */}
          <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Grounded in General Financial Rules (GFR 2017), DPIIT Gazette Orders, and Central Vigilance Commission (CVC) Directives</span>
            </div>
            <a
              href="/insights"
              onClick={(e) => { e.preventDefault(); onNavigate('insights'); }}
              className="font-bold text-amber-800 hover:text-amber-950 hover:underline cursor-pointer"
            >
              View GFR Statutory Guides & Bulletins →
            </a>
          </div>
        </div>
      </section>

      {/* Geographic SEO Landing Hub Gateway */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/locations"
            onClick={(e) => { e.preventDefault(); onNavigate('locations'); }}
            className="block bg-white border border-slate-200 hover:border-amber-400 rounded-3xl p-6 sm:p-8 transition-all hover:shadow-lg group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    Pan-India · 28 States · 50+ Cities
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    All India, State & City Tenders Hub
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-medium">
                    Targeted local e-procurement consulting for Gujarat, Maharashtra, Rajasthan, Delhi NCR, and 50+ key industrial cities with municipal authority matrices and Class-3 DSC support.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 group-hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-xs">
                <span>Explore All Cities & States</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Free Tender Review & Action Banner */}
      <section className="py-14 bg-gradient-to-b from-amber-50/60 via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Express 4-Hour Preliminary Audit</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Have a Live Tender Closing Soon?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Send your NIT document or GeM bid number. Our senior tender officers in Ahmedabad will examine technical qualification criteria, EMD terms, and advise your winning strategy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={() => onOpenInquiryModal()}
                className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Submit Tender for Review</span>
              </button>

              <a
                href={getWhatsAppUrl('Hello Bid Tender 4 U, I have an urgent government tender to review. Please assist me with bidding.')}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp (+91 9726407267)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Direct Credentials Strip */}
      <section className="py-10 bg-slate-100 text-slate-600 text-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-slate-900 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>BID TENDER 4 U ALL INDIA TENDER CONSULTANCY · Isanpur, Ahmedabad, Gujarat 382440</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a href="tel:+919726407267" className="text-amber-800 hover:underline flex items-center gap-1 font-bold">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 97264 07267</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="/contact-us"
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="text-slate-700 hover:text-slate-950 underline cursor-pointer font-bold"
            >
              Contact Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
