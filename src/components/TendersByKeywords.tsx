import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Hash, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  FileCheck, 
  CheckCircle2, 
  ExternalLink, 
  Building2, 
  Phone, 
  MessageCircle, 
  Sparkles,
  Layers,
  Award,
  Filter,
  X,
  ArrowLeft,
  Info
} from 'lucide-react';
import { 
  TENDER_KEYWORDS_DATA, 
  TENDER_KEYWORD_CATEGORIES, 
  ALPHABET_INDEX, 
  TenderKeywordItem 
} from '../lib/tenderKeywordsData';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';

interface TendersByKeywordsProps {
  onOpenInquiry: (category?: string, service?: string, city?: string) => void;
  onNavigate?: (page: string) => void;
  initialKeywordSlug?: string;
}

export const TendersByKeywords: React.FC<TendersByKeywordsProps> = ({
  onOpenInquiry,
  onNavigate = () => {},
  initialKeywordSlug,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [inspectingKeyword, setInspectingKeyword] = useState<TenderKeywordItem | null>(() => {
    if (initialKeywordSlug) {
      return TENDER_KEYWORDS_DATA.find((k) => k.id === initialKeywordSlug) || null;
    }
    return null;
  });

  // Filtered keywords based on search query, sector category, and A-Z letter
  const filteredKeywords = useMemo(() => {
    return TENDER_KEYWORDS_DATA.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Letter filter
      if (selectedLetter !== 'All' && item.letter !== selectedLetter) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesShort = item.shortName.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesKeywords = item.keywords.some((k) => k.toLowerCase().includes(q));
        const matchesPortals = item.typicalPortals.some((p) => p.toLowerCase().includes(q));
        return matchesName || matchesShort || matchesCategory || matchesDesc || matchesKeywords || matchesPortals;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  // Handle direct click on any keyword: Immediately open inquiry form with keyword pre-filled
  const handleKeywordClick = (item: TenderKeywordItem) => {
    onOpenInquiry(
      'Tender Bidding Consultancy',
      `Tender Bidding for ${item.name}`
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 text-left">
      {/* Hero Header Section */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-[#F1F5F9] border-b border-slate-200 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb / Back Link */}
          <div className="flex items-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-900 font-black cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Home</span>
            </button>
            <span className="text-slate-400 text-xs">/</span>
            <span className="text-xs text-slate-600 font-bold">Keyword Directory</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Hash className="w-3.5 h-3.5 text-amber-700 stroke-[2.5]" />
            <span>Pan-India Tender Consultancy by Trade & Keyword</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-[#1D3557] tracking-tight leading-tight">
            Tenders by Keywords & Sectors
          </h1>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl font-medium leading-relaxed">
            We provide specialized, zero-disqualification <strong>Tender Bidding Consultancy</strong> for every product, work, and service trade listed below. 
            <span className="text-amber-800 font-bold"> Click on any keyword</span> to immediately submit an inquiry or get your tender documents scrutinized by our senior consultants in Ahmedabad.
          </p>

          {/* Key Value Guarantees Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Technical Bid Acceptance</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <FileCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>GFR 170 MSME EMD Waivers</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Award className="w-4 h-4 text-blue-600 shrink-0" />
              <span>GeM OEM Pairing & Brand Codes</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
              <span>Fast 4-Hour Document Audit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Interactive Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Real-time Keyword Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400 stroke-[2.5]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search any keyword or trade (e.g., Road Construction, Medical Equipment, CCTV, Solar, Housekeeping, Water Supply)..."
            className="w-full pl-10 pr-10 py-3 text-sm rounded-xl border border-slate-300 bg-white shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#1D3557] focus:border-transparent font-medium"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              title="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Sector Category Filter Tabs */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 font-mono">
            <Filter className="w-3.5 h-3.5 text-amber-700" />
            <span>Filter by Sector Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {TENDER_KEYWORD_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs rounded-xl font-bold transition-all cursor-pointer shadow-2xs ${
                  selectedCategory === cat
                    ? 'bg-[#1D3557] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* A-Z Alphabet Filter Navigation */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
              Browse Alphabetically (A to Z Index):
            </span>
            <span className="text-xs font-bold text-amber-800">
              Showing {filteredKeywords.length} of {TENDER_KEYWORDS_DATA.length} Keywords
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {ALPHABET_INDEX.map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() => setSelectedLetter(letter)}
                className={`w-8 h-8 rounded-lg text-xs font-extrabold flex items-center justify-center transition-all cursor-pointer ${
                  selectedLetter === letter
                    ? 'bg-amber-400 text-slate-950 shadow-xs ring-2 ring-amber-300'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Keyword Listing Grid */}
        {filteredKeywords.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-xs max-w-xl mx-auto my-8">
            <Hash className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="font-display text-lg font-black text-slate-900">
              No direct keyword match found
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              We provide tender consultancy for <strong>all government tenders</strong> across India even if your specific keyword is not listed above.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 justify-center">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedLetter('All');
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 cursor-pointer"
              >
                Reset Filters
              </button>
              <button
                type="button"
                onClick={() => onOpenInquiry('Tender Bidding Consultancy', 'Custom Tender Keyword Inquiry')}
                className="px-4 py-2 rounded-xl text-xs font-black bg-[#1D3557] hover:bg-[#152742] text-white shadow-xs cursor-pointer"
              >
                Submit Custom Tender Scope
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredKeywords.map((item) => (
              <div
                key={item.id}
                onClick={() => handleKeywordClick(item)}
                className="group relative bg-white rounded-2xl border border-slate-200 hover:border-amber-400 p-5 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between text-left"
              >
                <div>
                  {/* Top Category Badge & Letter Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.category}
                    </span>
                    <span className="w-6 h-6 rounded-md bg-amber-50 text-amber-800 text-[11px] font-black flex items-center justify-center font-mono border border-amber-200">
                      {item.letter}
                    </span>
                  </div>

                  {/* Keyword Title */}
                  <h3 className="font-display text-base font-black text-[#1D3557] group-hover:text-amber-700 transition-colors line-clamp-2">
                    {item.name}
                  </h3>

                  {/* Consultancy Assistance Description */}
                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Typical Portals Pill List */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.typicalPortals.map((p, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500">
                    <span className="text-emerald-700 font-extrabold">{item.sampleTenderValue}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setInspectingKeyword(item);
                      }}
                      className="px-2 py-1 text-[10px] font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                      title="View eligibility documents"
                    >
                      Details
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleKeywordClick(item);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black bg-[#1D3557] group-hover:bg-amber-500 text-white group-hover:text-slate-950 transition-colors shadow-2xs"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Full Keyword Details & Eligibility Modal Drawer */}
      {inspectingKeyword && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center animate-in fade-in duration-200 text-left">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setInspectingKeyword(null)}
          />

          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 space-y-5">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  {inspectingKeyword.category}
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-black text-[#1D3557] mt-1.5">
                  {inspectingKeyword.name}
                </h2>
                <span className="text-xs text-slate-500 font-semibold block mt-0.5">
                  Tender Bidding & GeM Consultancy Assistance
                </span>
              </div>

              <button
                type="button"
                onClick={() => setInspectingKeyword(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {inspectingKeyword.description}
            </p>

            {/* Portals & Scope */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500 block mb-1">
                  Primary Procurement Portals:
                </span>
                <div className="flex flex-wrap gap-1">
                  {inspectingKeyword.typicalPortals.map((p, idx) => (
                    <span key={idx} className="text-xs font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500 block mb-1">
                  Typical Tender Bid Values:
                </span>
                <span className="text-xs font-black text-amber-800">
                  {inspectingKeyword.sampleTenderValue}
                </span>
              </div>
            </div>

            {/* Mandatory Documentation for Zero Disqualification */}
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#1D3557] font-mono block mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Key Technical Bid Documents We Prepare:</span>
              </span>
              <ul className="space-y-1.5">
                {inspectingKeyword.mandatoryDocs.map((doc, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={getWhatsAppUrl(`Hello Bid Tender 4 U, I need tender bidding consultancy for ${inspectingKeyword.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Specialist</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  const kw = inspectingKeyword;
                  setInspectingKeyword(null);
                  handleKeywordClick(kw);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white font-black text-xs shadow-xs cursor-pointer"
              >
                <span>Book Consultancy for This Keyword</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF70]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Conversion & Help Section */}
      <section className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-center mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-6 h-6 text-amber-800" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1D3557]">
            Have a Specific Notice Inviting Tender (NIT)?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
            Upload your tender document or RFP. Our tender specialists in Ahmedabad will audit eligibility clauses, EMD exemption viability, and Packet-A technical packaging within 4 hours.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenInquiry('Tender Bidding Consultancy', 'NIT Document Audit')}
              className="px-6 py-3 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white font-black text-xs transition-colors shadow-xs cursor-pointer"
            >
              Submit Tender Document for Audit
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-300 transition-colors shadow-2xs flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>Call: {BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TendersByKeywords;

// Programmatic export of tender keywords defined in the TendersByKeywords component structure
export { 
  TENDER_KEYWORDS_DATA, 
  TENDER_KEYWORD_CATEGORIES, 
  ALPHABET_INDEX 
};
export type { TenderKeywordItem };

/**
 * Returns the full list of tender keywords defined in the TendersByKeywords component structure.
 */
export const getTendersByKeywordsList = (): TenderKeywordItem[] => TENDER_KEYWORDS_DATA;
