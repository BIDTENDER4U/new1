import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  Sparkles, 
  ExternalLink, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  MessageCircle, 
  Send, 
  RefreshCw,
  FileText,
  Building2,
  Scale
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';

interface GroundingSource {
  title: string;
  url: string;
}

interface GroundingResult {
  text: string;
  sources: GroundingSource[];
  searchQueries: string[];
  modelUsed: string;
}

interface LiveTenderRadarModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onOpenInquiry?: (service?: string) => void;
}

const POPULAR_GROUNDING_QUERIES = [
  'Latest Ministry of Finance OM on EMD exemption for MSMEs',
  'GeM 4.0 Caution Money slabs & PFMS bank validation rules 2026',
  'GFR 173(i) Prior Turnover waiver for DPIIT recognized Startups',
  'Make in India (MII) Class-I local content 50% preference rules',
  'Hospital medical equipment tenders ISO 13485 & CE certificate rules',
  'GeM Clause 4.2 OEM Authorization Code custom bid pairing',
];

export const LiveTenderRadarModal: React.FC<LiveTenderRadarModalProps> = ({
  isOpen,
  onClose,
  initialQuery = '',
  onOpenInquiry,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [portal, setPortal] = useState('All Government Portals');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GroundingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  if (!isOpen) return null;

  const handleSearch = async (searchQueryText?: string) => {
    const q = (searchQueryText || query).trim();
    if (!q) return;

    setLoading(true);
    setError(null);
    if (searchQueryText) {
      setQuery(searchQueryText);
    }

    try {
      const res = await fetch('/api/tender-search-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          portal: portal === 'All Government Portals' ? undefined : portal,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to fetch grounded tender data.');
      }

      setResult(data.data);
    } catch (err: any) {
      console.error('[Search Grounding UI Error]', err);
      setError(err.message || 'Network error occurred while fetching live data.');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppConsult = () => {
    const text = `Hello Bid Tender 4 U, I used your Live Tender Radar (Google Search Grounding) for query: "${query}". I would like consultation on preparing our compliance documents for this tender.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-4 md:p-8 flex items-center justify-center animate-in fade-in duration-200 text-left">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/75 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#D9E0E8] overflow-hidden z-10 flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#F8F9FA] border-b border-[#D9E0E8] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1D3557] text-[#D4AF70] flex items-center justify-center shrink-0 border border-[#D4AF70]/40 shadow-xs">
              <Globe className="w-5 h-5 text-[#D4AF70]" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-black uppercase tracking-wider text-blue-900 bg-blue-100/90 px-2 py-0.5 rounded border border-blue-300">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                  Google Search Grounding
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded">
                  gemini-3.8-flash
                </span>
              </div>
              <h2 className="font-display text-lg sm:text-2xl font-black text-[#1D3557] mt-0.5">
                Live Tender & GeM Regulatory Radar
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-[#1D3557] hover:bg-slate-200/60 bg-white border border-[#D9E0E8] transition-colors cursor-pointer shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Control Box */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#D9E0E8] space-y-3 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex flex-col sm:flex-row gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search live tenders, GeM clauses, latest MoF OMs, or NIT eligibility..."
                className="w-full pl-10 pr-4 py-3 bg-[#F8F9FA] border border-[#D9E0E8] rounded-xl text-xs sm:text-sm font-semibold text-[#1D3557] placeholder:text-slate-400 focus:outline-none focus:border-[#1D3557] focus:bg-white transition-all shadow-inner"
              />
            </div>

            <select
              value={portal}
              onChange={(e) => setPortal(e.target.value)}
              className="px-3 py-3 bg-[#F8F9FA] border border-[#D9E0E8] rounded-xl text-xs font-bold text-[#1D3557] focus:outline-none focus:border-[#1D3557] transition-all cursor-pointer"
            >
              <option>All Government Portals</option>
              <option>GeM (gem.gov.in)</option>
              <option>CPPP (eprocure.gov.in)</option>
              <option>Railways IREPS (ireps.gov.in)</option>
              <option>State Portals (nProcure, etc.)</option>
            </select>

            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1D3557] hover:bg-[#152742] disabled:opacity-60 text-white font-black text-xs sm:text-sm transition-all shadow-xs cursor-pointer border border-[#1D3557]"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 text-[#D4AF70] animate-spin" />
                  <span>Grounding...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#D4AF70]" />
                  <span>Search Live</span>
                </>
              )}
            </button>
          </form>

          {/* Prompt Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Popular Checks:
            </span>
            {POPULAR_GROUNDING_QUERIES.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSearch(item)}
                className="shrink-0 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#1D3557] text-[11px] font-medium transition-colors border border-slate-200 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Result View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-[#F8F9FA]">
          {loading && (
            <div className="py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1D3557] text-[#D4AF70] flex items-center justify-center mx-auto shadow-md animate-bounce">
                <Globe className="w-6 h-6 text-[#D4AF70]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-black text-base text-[#1D3557]">
                  Retrieving Real-Time Google Search Grounding...
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Cross-referencing live gazette notifications, Ministry of Finance Office Memorandums, and GeM 4.0 guidelines via Google Search.
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {!loading && !result && !error && (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D9E0E8] text-[#1D3557] flex items-center justify-center mx-auto shadow-xs">
                <Search className="w-6 h-6 text-[#996515]" />
              </div>
              <h3 className="font-display font-bold text-base text-[#1D3557]">
                Live Regulatory & Tender Intelligence At Your Fingertips
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Click any prompt chip above or type any tender scope, department, or GeM rule to get real-time intelligence verified directly with Google Search data.
              </p>
            </div>
          )}

          {!loading && result && (
            <div className="space-y-6">
              {/* Grounded Web Sources Citation Shelf */}
              {result.sources.length > 0 && (
                <div className="p-4 rounded-2xl bg-white border border-[#D9E0E8] shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-black uppercase tracking-wider text-[#996515] flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      Google Search Grounded Sources ({result.sources.length})
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Official Web Verification
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {result.sources.map((src, sIdx) => (
                      <a
                        key={sIdx}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all flex items-start justify-between gap-2 group cursor-pointer"
                        title={src.url}
                      >
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-[#1D3557] line-clamp-1 group-hover:text-[#996515] transition-colors block">
                            {src.title}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 truncate block mt-0.5">
                            {new URL(src.url).hostname}
                          </span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1D3557] shrink-0 mt-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Grounded Content Display */}
              <div className="p-6 rounded-2xl bg-white border border-[#D9E0E8] shadow-sm space-y-4">
                <div className="prose prose-sm max-w-none text-[#1E293B] font-sans leading-relaxed whitespace-pre-wrap select-text">
                  {result.text}
                </div>

                {/* Search Queries Executed */}
                {result.searchQueries.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500">
                      Google Search Queries:
                    </span>
                    {result.searchQueries.map((sq, sqIdx) => (
                      <span
                        key={sqIdx}
                        className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                      >
                        "{sq}"
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#D9E0E8] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
            Need an expert to draft your representation or audit your bid against these rules?
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleWhatsAppConsult}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenInquiry) {
                  onOpenInquiry('Tender Document Analysis & Eligibility Audit');
                }
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white font-black text-xs transition-all shadow-xs cursor-pointer border border-[#1D3557]"
            >
              <Send className="w-4 h-4 text-[#D4AF70]" />
              <span>Inquire with Tender Specialist</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
