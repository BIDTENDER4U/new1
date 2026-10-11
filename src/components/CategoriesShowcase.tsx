import React, { useState } from 'react';
import { CATEGORIES_DATA, getWhatsAppUrl } from '../lib/constants';
import { Search, ArrowRight, Building2, Stethoscope, ShieldCheck, Zap, Laptop, Truck, Armchair, Wrench, Shirt, UtensilsCrossed, Printer, Trash2, CheckCircle2, MessageCircle } from 'lucide-react';

interface CategoriesShowcaseProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategoriesShowcase: React.FC<CategoriesShowcaseProps> = ({ onSelectCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'civil-infra':
        return <Building2 className="w-5 h-5 text-[#D4AF70]" />;
      case 'medical-pharma':
        return <Stethoscope className="w-5 h-5 text-[#D4AF70]" />;
      case 'security-manpower':
        return <ShieldCheck className="w-5 h-5 text-[#D4AF70]" />;
      case 'electrical-solar':
        return <Zap className="w-5 h-5 text-[#D4AF70]" />;
      case 'it-telecom':
        return <Laptop className="w-5 h-5 text-[#D4AF70]" />;
      case 'vehicles-logistics':
        return <Truck className="w-5 h-5 text-[#D4AF70]" />;
      case 'furniture-interiors':
        return <Armchair className="w-5 h-5 text-[#D4AF70]" />;
      case 'machinery-tools':
        return <Wrench className="w-5 h-5 text-[#D4AF70]" />;
      case 'uniforms-safety':
        return <Shirt className="w-5 h-5 text-[#D4AF70]" />;
      case 'catering-food':
        return <UtensilsCrossed className="w-5 h-5 text-[#D4AF70]" />;
      case 'printing-stationery':
        return <Printer className="w-5 h-5 text-[#D4AF70]" />;
      case 'waste-environment':
        return <Trash2 className="w-5 h-5 text-[#D4AF70]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#D4AF70]" />;
    }
  };

  const filteredCategories = CATEGORIES_DATA.filter((cat) => {
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.popularItems.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cat.keyAuthorities.some((auth) => auth.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSearch;
  });

  return (
    <section id="categories" className="py-20 bg-[#F8F9FA] text-slate-900 border-b border-[#D9E0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D9E0E8] text-[#1D3557] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF70]"></span>
            <span>Specialized Bidding Sectors</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D3557]" style={{ textWrap: 'balance' }}>
            Industries & Categories We Prepare Tenders For
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-medium">
            Bid Tender 4 U assists vendors, manufacturers, and contractors across all major government procurement sectors on <span className="text-[#1D3557] font-bold">GeM 4.0, CPPP, nProcure, and State Portals</span>. Click any sector to begin bid preparation.
          </p>

          {/* Search filter input */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search category, product or department (e.g. Road, Medicine, CCTV)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-[#D9E0E8] text-sm text-[#1D3557] placeholder-slate-400 focus:outline-none focus:border-[#D4AF70] focus:ring-1 focus:ring-[#D4AF70] shadow-xs font-medium"
            />
          </div>
        </div>

        {/* Categories Grid: White cards with thin soft-slate borders (#D9E0E8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl border border-[#D9E0E8] hover:border-[#D4AF70] p-6 flex flex-col justify-between transition-all duration-200 group hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                {/* Header & Icon */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#D9E0E8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    {getCategoryIcon(category.id)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D4AF70]/15 border border-[#D4AF70]/30 text-[#1D3557]">
                    {category.badge}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-[#1D3557] mb-1.5 group-hover:text-[#152742] group-hover:underline group-hover:decoration-[#D4AF70] group-hover:underline-offset-4 transition-all">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed font-medium">
                  {category.subtitle}
                </p>

                {/* Popular items list */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Common Tender Items:
                  </div>
                  {category.popularItems.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF70] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                  {category.popularItems.length > 3 && (
                    <div className="text-[11px] text-[#1D3557] font-semibold pl-5">
                      + {category.popularItems.length - 3} more items in this vertical
                    </div>
                  )}
                </div>

                {/* Key Authorities */}
                <div className="pt-3 border-t border-[#D9E0E8] mb-4 text-xs">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Major Procuring Authorities:
                  </div>
                  <p className="text-[11px] text-slate-700 font-medium line-clamp-1">
                    {category.keyAuthorities.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Action buttons: Navy with white text */}
              <div className="pt-4 border-t border-[#D9E0E8] flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onSelectCategory(category.name)}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#1D3557] hover:bg-[#152742] text-white font-bold text-xs transition-colors text-center cursor-pointer flex items-center justify-center gap-1.5 shadow-xs border border-[#1D3557]"
                >
                  <span>Inquire Tender</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>

                <a
                  href={getWhatsAppUrl(`Hello Bid Tender 4 U, I am looking for tender consulting in ${category.name}. Please guide on NIT requirements.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-[#D9E0E8] hover:border-emerald-500 transition-colors cursor-pointer shadow-xs"
                  title="WhatsApp Enquiry"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#D9E0E8] text-center max-w-3xl mx-auto shadow-sm">
          <h4 className="font-display font-bold text-lg text-[#1D3557] mb-1">
            Don't See Your Specific Product or Service Listed?
          </h4>
          <p className="text-xs text-slate-600 mb-4 max-w-xl mx-auto font-medium">
            We handle Custom Bids and BOQ tenders for virtually every HSN and SAC code published on GeM and state portals. Send your product catalog or service description.
          </p>
          <button
            onClick={() => onSelectCategory('Custom / Other Government Tender Scope')}
            className="px-6 py-2.5 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white font-black text-xs transition-all shadow-xs cursor-pointer border border-[#1D3557]"
          >
            Submit Custom Category for Tender Review
          </button>
        </div>
      </div>
    </section>
  );
};
