import React from 'react';
import { CORE_SERVICES, getWhatsAppUrl } from '../lib/constants';
import { ShieldCheck, FileCheck, Award, Key, Check, ArrowUpRight, Search, FileText, Sparkles } from 'lucide-react';

interface ServicesBentoProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  const getIconForIndex = (idx: number) => {
    switch (idx) {
      case 0:
        return <FileCheck className="w-5 h-5 text-[#D4AF70]" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-[#D4AF70]" />;
      case 2:
        return <Award className="w-5 h-5 text-[#D4AF70]" />;
      case 3:
        return <Key className="w-5 h-5 text-[#D4AF70]" />;
      case 4:
        return <Search className="w-5 h-5 text-[#D4AF70]" />;
      case 5:
        return <FileText className="w-5 h-5 text-[#D4AF70]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF70]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F8F9FA] border-b border-[#D9E0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#1D3557] border border-[#D9E0E8] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF70]"></span>
            <span>Specialized Practice Areas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D3557]" style={{ textWrap: 'balance' }}>
            Comprehensive Tender Consultancy Across Every Stage of Public Procurement
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            We don't just fill forms; we perform thorough technical risk mitigation, financial criteria validation, and compliant bid packaging to maximize your win probability.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <a
              href="#bidding-journey"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#1D3557] text-xs font-bold transition-all shadow-2xs group"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Explore The 7-Stage Bidding Journey Stepper</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Asymmetric Bento Grid: White cards with thin soft-slate borders (#D9E0E8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service, idx) => {
            return (
              <div
                key={service.id}
                className={`rounded-2xl p-6 sm:p-8 border transition-all duration-200 shadow-xs hover:shadow-lg flex flex-col justify-between group bg-white ${
                  idx === 0 
                    ? 'lg:col-span-2 border-[#D9E0E8] hover:border-[#D4AF70]' 
                    : 'border-[#D9E0E8] hover:border-[#D4AF70]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F8F9FA] border border-[#D9E0E8] flex items-center justify-center shadow-xs">
                        {getIconForIndex(idx)}
                      </div>
                      <span className="text-xs font-mono font-bold tracking-wider text-slate-500">
                        0{idx + 1}. SERVICE
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="text-xs font-bold inline-flex items-center gap-1 transition-colors cursor-pointer text-[#1D3557] hover:text-[#D4AF70]"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF70]" />
                    </button>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-2 text-[#1D3557]">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold mb-4 text-[#D4AF70]">
                    {service.tagline}
                  </p>

                  <p className="text-sm leading-relaxed mb-6 text-slate-600 font-medium">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Core Deliverables:
                    </div>
                    {service.keyDeliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#D4AF70]" />
                        <span className="text-slate-700 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer metadata */}
                <div className="pt-4 border-t border-[#D9E0E8] text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-slate-600 font-medium">
                  <span className="truncate">
                    <strong className="text-[#1D3557]">Applicable:</strong> {service.portalApplicability}
                  </span>
                  <a
                    href={getWhatsAppUrl(`Hello, I would like to get consultancy for ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline inline-flex items-center gap-1 shrink-0 text-[#1D3557] hover:text-[#D4AF70]"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D4AF70]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        {/* Contextual Related Links Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#D9E0E8] shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D9E0E8] pb-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF70] font-mono">
                Interconnected Procurement Services
              </span>
              <h3 className="font-display text-lg font-bold text-[#1D3557] mt-0.5">
                Related Specialized Departments & Gateways
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
            <a
              href="/gem-registration"
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group block shadow-xs"
            >
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span>GeM Registration</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                Primary seller, OEM & reseller statutory requirements checklist.
              </p>
            </a>

            <a
              href="/gem-product-listing"
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group block shadow-xs"
            >
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span>GeM Product Listing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                Quadrant 1 to 4 catalog upload and direct purchase L1 pairing.
              </p>
            </a>

            <a
              href="/oem-services"
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group block shadow-xs"
            >
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span>OEM Services & Codes</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                Brand approval, OEM authorization codes and MAF compliance.
              </p>
            </a>

            <a
              href="/certifications"
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group block shadow-xs"
            >
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span>Startup, FSSAI & ISO</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                DPIIT startup prior turnover waiver, FSSAI licence and ISO 9001.
              </p>
            </a>

            <a
              href="/about-us"
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group block shadow-xs"
            >
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span>About Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                Ahmedabad headquarters, 1,500+ analyzed bids, zero-rejection ethos.
              </p>
            </a>

            <a
              href="/contact-us"
              className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group block shadow-xs"
            >
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span>Contact Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                Direct preliminary document review and consultancy quotes.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
