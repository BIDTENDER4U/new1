import React, { useState } from 'react';
import { 
  Globe, 
  Search, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  RefreshCw, 
  AlertTriangle,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

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

const FEATURED_CHECKS = [
  { label: 'Latest DoE OM on EMD Exemption', query: 'Latest Ministry of Finance OM on EMD exemption for MSMEs' },
  { label: 'GeM 4.0 Caution Money Slabs 2026', query: 'GeM Caution Money Slabs and PFMS bank validation rules 2026' },
  { label: 'GFR 173(i) Startup Prior Turnover Waiver', query: 'GFR 173(i) Prior Turnover & Experience waiver for DPIIT Startups' },
  { label: 'Make in India Class-I 50% Thresholds', query: 'Make in India (MII) Order Class-I local content minimum 50% rules' },
  { label: 'Hospital Equipment ISO 13485 Mandate', query: 'Mandatory ISO 13485 & CE marking for Hospital Equipment GeM bids' },
];

interface LiveTenderRadarSectionProps {
  onOpenInquiry?: (service?: string) => void;
  onOpenFullModal?: (initialQuery?: string) => void;
}

export const LiveTenderRadarSection: React.FC<LiveTenderRadarSectionProps> = ({
  onOpenInquiry,
  onOpenFullModal,
}) => {
  const [query, setQuery] = useState('');
  const [portal, setPortal] = useState('All Portals');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GroundingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (queryText?: string) => {
    const q = (queryText || query).trim();
    if (!q) return;

    setLoading(true);
    setError(null);
    if (queryText) setQuery(queryText);

    try {
      const res = await fetch('/api/tender-search-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          portal: portal === 'All Portals' ? undefined : portal,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to fetch grounded intelligence.');
      }

      setResult(data.data);
    } catch (err: any) {
      console.error('[Live Radar Error]', err);
      setError(err.message || 'Error connecting to search grounding engine.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-[#D9E0E8] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>Real-Time Google Search Grounding Engine</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D3557] tracking-tight">
            Live Tender & Regulatory Intelligence Radar
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Verify current government procurement rules, Ministry of Finance OMs, and GeM 4.0 guidelines grounded directly in real-time Google Search data.
          </p>
        </div>

        {/* Interactive Search Console Card */}
        <div className="max-w-4xl mx-auto bg-[#F8F9FA] rounded-2xl border border-[#D9E0E8] p-4 sm:p-6 shadow-sm space-y-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex flex-col sm:flex-row gap-2.5"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask any tender question (e.g. latest EMD exemption rules, caution money slabs, hospital bid rules)..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#D9E0E8] rounded-xl text-xs sm:text-sm font-semibold text-[#1D3557] placeholder:text-slate-400 focus:outline-none focus:border-[#1D3557] shadow-inner"
              />
            </div>

            <select
              value={portal}
              onChange={(e) => setPortal(e.target.value)}
              className="px-3 py-3 bg-white border border-[#D9E0E8] rounded-xl text-xs font-bold text-[#1D3557] focus:outline-none focus:border-[#1D3557] cursor-pointer shrink-0"
            >
              <option>All Portals</option>
              <option>GeM (gem.gov.in)</option>
              <option>CPPP (eprocure.gov.in)</option>
              <option>Railways IREPS</option>
            </select>

            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1D3557] hover:bg-[#152742] disabled:opacity-60 text-white font-black text-xs sm:text-sm transition-all shadow-xs cursor-pointer border border-[#1D3557] shrink-0"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 text-[#D4AF70] animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#D4AF70]" />
                  <span>Check Live</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-1">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-500 shrink-0">
              Instant Scans:
            </span>
            {FEATURED_CHECKS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSearch(item.query)}
                className="shrink-0 px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-[#1D3557] text-[11px] font-semibold transition-colors border border-slate-200 cursor-pointer shadow-2xs"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2.5">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Result Panel */}
          {result && (
            <div className="mt-4 pt-4 border-t border-[#D9E0E8] space-y-4 animate-in fade-in duration-200">
              {/* Web Sources Citation Card */}
              {result.sources.length > 0 && (
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-black uppercase text-blue-900 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-blue-700" />
                      Google Search Grounded Web Sources ({result.sources.length})
                    </span>
                    <span className="text-[10px] font-mono text-blue-700 font-bold">
                      {result.modelUsed}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {result.sources.map((src, sIdx) => (
                      <a
                        key={sIdx}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white hover:bg-slate-50 border border-blue-100 hover:border-blue-300 transition-all flex items-start justify-between gap-2 group cursor-pointer shadow-2xs"
                      >
                        <div className="min-w-0">
                          <span className="text-[11px] font-bold text-[#1D3557] line-clamp-1 group-hover:text-blue-700 block">
                            {src.title}
                          </span>
                          <span className="text-[9px] font-mono text-slate-500 truncate block mt-0.5">
                            {new URL(src.url).hostname}
                          </span>
                        </div>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-700 shrink-0 mt-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Text Rendered Response */}
              <div className="p-5 rounded-xl bg-white border border-[#D9E0E8] shadow-xs">
                <div className="prose prose-sm max-w-none text-[#1E293B] text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap select-text">
                  {result.text}
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-slate-600 font-medium">
                    Have an active NIT matching this rule? Our team in Ahmedabad can prepare your complete technical bid folder.
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={getWhatsAppUrl(`Hello Bid Tender 4 U, I saw the live radar update for "${query}". Can you assist us with bid compliance?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Specialist</span>
                    </a>

                    {onOpenInquiry && (
                      <button
                        type="button"
                        onClick={() => onOpenInquiry('Tender Document Analysis & Eligibility Audit')}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1D3557] hover:bg-[#152742] text-white font-black text-xs transition-all shadow-2xs cursor-pointer border border-[#1D3557]"
                      >
                        <span>Inquire Online</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#D4AF70]" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
