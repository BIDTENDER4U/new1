import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Globe, FileCheck, Award, BookOpen, Layers, Cpu, Info, Briefcase, Network, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl, CATEGORIES_DATA, PORTALS_DATA } from '../lib/constants';

interface FooterProps {
  onOpenChecklistModal: () => void;
  onScrollToForm: () => void;
  onNavigate?: (page: string) => void;
  onOpenPaymentModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChecklistModal, onNavigate, onOpenPaymentModal }) => {
  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-[#102038] text-white border-t border-[#D4AF70]/30 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 p-0.5 shadow-xs">
                <img
                  src="/bid-tender-mark.svg"
                  alt="Bid Tender 4 U Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight !text-white text-white">
                  BIDTENDER <span className="text-[#D4AF70]">4U</span>
                </span>
                <span className="text-[10px] tracking-wider font-extrabold text-slate-300 uppercase">
                  All India Tender Consultancy
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              Leading e-procurement advisory and bid packaging agency based in Ahmedabad, Gujarat. Assisting contractors, MSMEs, OEMs, and service providers across all central ministries and state government portals.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-200 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF70] shrink-0" />
                <span>100% Procedural & Technical Bid Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4AF70] shrink-0" />
                <span>All Types of ISO Certification & Class-3 DSC</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#D4AF70] shrink-0" />
                <span>GeM OEM Authorization Codes & Brand Approval</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Hello Bid Tender 4 U, I would like to consult with an expert regarding government tenders.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 border border-emerald-500 text-xs font-black transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 9726407267)</span>
              </a>
            </div>
          </div>

          {/* Column 2: Core Practice Areas & Target Services */}
          <div>
            <div className="mb-4">
              <h4 className="text-xs font-black uppercase tracking-wider !text-[#D4AF70] text-[#D4AF70] font-mono">
                Core Services & Sitelinks
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <a
                  href="/tender-bidding-consultancy"
                  onClick={(e) => { e.preventDefault(); handleNav('services'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block font-semibold"
                  title="Tender Bidding Consultancy - NIT review, Packet A/B packaging & submission"
                >
                  Tender Bidding Consultancy
                </a>
              </li>
              <li>
                <a
                  href="/gem-registration"
                  onClick={(e) => { e.preventDefault(); handleNav('gem-documents'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block font-semibold"
                  title="GeM Registration - Primary seller, OEM and reseller statutory checklist"
                >
                  GeM Registration
                </a>
              </li>
              <li>
                <a
                  href="/gem-product-listing"
                  onClick={(e) => { e.preventDefault(); handleNav('gem-product-listing'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block font-semibold"
                  title="GeM Product Listing - Quadrants 1 to 4 catalog pairing & L1 pricing"
                >
                  GeM Product Listing
                </a>
              </li>
              <li>
                <a
                  href="/oem-services"
                  onClick={(e) => { e.preventDefault(); handleNav('oem-services'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block font-semibold"
                  title="OEM Services - GeM brand approval, OEM authorization codes & MAF letters"
                >
                  OEM Services & Codes
                </a>
              </li>
              <li>
                <a
                  href="/certifications"
                  onClick={(e) => { e.preventDefault(); handleNav('certifications'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block truncate"
                  title="Startup India DPIIT Registration & GFR 173(i) Waivers"
                >
                  Startup India DPIIT Certificate
                </a>
              </li>
              <li>
                <a
                  href="/certifications"
                  onClick={(e) => { e.preventDefault(); handleNav('certifications'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block truncate"
                  title="All Types of ISO Certification - ISO 9001, 14001, 45001 & 27001"
                >
                  All Types of ISO Certification
                </a>
              </li>
              <li>
                <a
                  href="/certifications"
                  onClick={(e) => { e.preventDefault(); handleNav('certifications'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block truncate"
                  title="Class-3 Combo DSC & Crypto USB Tokens"
                >
                  Class-3 Combo DSC & USB Token
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company, Knowledge & SEO Gateways */}
          <div>
            <div className="mb-4">
              <h4 className="text-xs font-black uppercase tracking-wider !text-[#D4AF70] text-[#D4AF70] font-mono">
                Company & Knowledge Hub
              </h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <a
                  href="/about-us"
                  onClick={(e) => { e.preventDefault(); handleNav('about-us'); }}
                  className="hover:underline font-semibold text-slate-200 hover:text-[#D4AF70] transition-colors flex items-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-[#D4AF70]" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
                  className="hover:underline font-semibold text-slate-200 hover:text-[#D4AF70] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF70]" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => { e.preventDefault(); handleNav('blog'); }}
                  className="hover:underline font-semibold text-slate-200 hover:text-[#D4AF70] transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#D4AF70]" />
                  <span>Government Procurement Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="/stories"
                  onClick={(e) => { e.preventDefault(); handleNav('stories'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block truncate"
                >
                  Client Success Stories
                </a>
              </li>
              <li>
                <a
                  href="/insights"
                  onClick={(e) => { e.preventDefault(); handleNav('insights'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block truncate"
                >
                  GFR 2017 Rules & Legal Insights
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  onClick={(e) => { e.preventDefault(); handleNav('locations'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block truncate"
                >
                  Pan-India & City Service Hubs
                </a>
              </li>
              <li>
                <a
                  href="/sitemap"
                  onClick={(e) => { e.preventDefault(); handleNav('sitemap'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block truncate"
                >
                  Dynamic XML Sitemap & Crawl Hub
                </a>
              </li>
              <li>
                <a
                  href="/tenders-by-keywords"
                  onClick={(e) => { e.preventDefault(); handleNav('tenders-by-keywords'); }}
                  className="text-slate-300 hover:text-[#D4AF70] hover:underline transition-colors block truncate"
                  title="Browse tenders by trade keywords & sectors"
                >
                  Tenders by Keywords & Trades
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Office Details */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider !text-[#D4AF70] text-[#D4AF70] mb-3 font-mono">
                Registered Office
              </h4>
              <div className="space-y-2.5 text-xs text-slate-200 font-medium">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF70] shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-slate-300">
                    {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}, India
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4AF70] shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline hover:text-[#D4AF70] transition-colors font-mono font-bold text-white">
                    {BUSINESS_INFO.displayPhone}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4AF70] shrink-0" />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:underline hover:text-[#D4AF70] transition-colors truncate text-slate-300">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
              <span className="font-bold text-slate-200 block">Consultancy Hours:</span>
              <span>{BUSINESS_INFO.workingHours}</span>
            </div>
          </div>
        </div>



        {/* Bottom Copyright & Primary HTML Sitelinks Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.</p>
          
          <nav aria-label="Footer Quick Links" className="flex flex-wrap items-center justify-center gap-3 text-[11px]">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
              className="text-slate-300 hover:text-[#D4AF70] hover:underline font-bold transition-colors"
            >
              Home
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="/tender-bidding-consultancy"
              onClick={(e) => { e.preventDefault(); handleNav('services'); }}
              className="text-slate-300 hover:text-[#D4AF70] hover:underline font-bold transition-colors"
            >
              Tender Bidding Consultancy
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="/gem-registration"
              onClick={(e) => { e.preventDefault(); handleNav('gem-documents'); }}
              className="text-slate-300 hover:text-[#D4AF70] hover:underline font-bold transition-colors"
            >
              GeM Registration
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="/gem-product-listing"
              onClick={(e) => { e.preventDefault(); handleNav('gem-product-listing'); }}
              className="text-slate-300 hover:text-[#D4AF70] hover:underline font-bold transition-colors"
            >
              GeM Product Listing
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="/oem-services"
              onClick={(e) => { e.preventDefault(); handleNav('oem-services'); }}
              className="text-slate-300 hover:text-[#D4AF70] hover:underline font-bold transition-colors"
            >
              OEM Services
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="/about-us"
              onClick={(e) => { e.preventDefault(); handleNav('about-us'); }}
              className="text-slate-300 hover:text-[#D4AF70] hover:underline font-bold transition-colors"
            >
              About Us
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="/contact-us"
              onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
              className="text-slate-300 hover:text-[#D4AF70] hover:underline font-bold transition-colors"
            >
              Contact Us
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="/sitemap"
              onClick={(e) => { e.preventDefault(); handleNav('sitemap'); }}
              className="text-[#D4AF70] hover:underline font-bold transition-colors"
            >
              XML Sitemap
            </a>
          </nav>

          <p className="text-[11px] text-slate-400 font-normal text-center sm:text-right">
            Independent private tender consultancy. Not affiliated with Government e-Marketplace (GeM SPV).
          </p>
        </div>
      </div>
    </footer>
  );
};
