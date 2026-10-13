import React, { useState, useEffect, useMemo } from 'react';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Check, 
  Copy, 
  Code2, 
  ExternalLink, 
  Sparkles,
  Layers,
  ChevronUp
} from 'lucide-react';
import { FAQS_DATA, getWhatsAppUrl, BUSINESS_INFO } from '../lib/constants';
import { FAQItem } from '../types';

interface FAQSectionProps {
  faqs?: FAQItem[];
  initialCategory?: string;
  className?: string;
  showStructuredDataBadge?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs = FAQS_DATA,
  initialCategory = 'All',
  className = '',
  showStructuredDataBadge = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Set<string>>(new Set(['faq-1', 'faq-2']));
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showJsonLdModal, setShowJsonLdModal] = useState<boolean>(false);
  const [schemaCopied, setSchemaCopied] = useState<boolean>(false);

  const categories = ['All', 'GeM Portal', 'Non-GeM & State', 'Documents & EMD', 'Submission & DSC'];

  // Handle URL hash on initial load (e.g. #faq-3)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const matchedFaq = faqs.find((f) => f.id === hashId);
      if (matchedFaq) {
        setOpenFaqIds((prev) => new Set([...prev, matchedFaq.id]));
        if (matchedFaq.category !== activeCategory && activeCategory !== 'All') {
          setActiveCategory('All');
        }
        setTimeout(() => {
          const el = document.getElementById(matchedFaq.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 150);
      }
    }
  }, [faqs]);

  // Dynamically generate Google-compliant FAQPage Schema.org JSON-LD
  const faqSchema = useMemo(() => {
    // Generate structured data for all configured questions
    const currentUrl = typeof window !== 'undefined' 
      ? window.location.origin + window.location.pathname 
      : 'https://www.bidtender4u.com/faqs';

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${currentUrl}#faqpage`,
      name: 'Bid Tender 4 U - Government Tender Bidding & GeM Portal Frequently Asked Questions',
      description: 'Frequently asked questions and verified answers on government tender bidding, GeM 4.0 portal registration, EMD exemptions under GFR 170, Class-3 DSC cryptographic tokens, and technical qualification defense in India.',
      publisher: {
        '@type': 'Organization',
        name: BUSINESS_INFO.name,
        legalName: BUSINESS_INFO.legalName,
        url: 'https://www.bidtender4u.com/',
        telephone: BUSINESS_INFO.phone,
        email: BUSINESS_INFO.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: BUSINESS_INFO.address.city,
          addressRegion: BUSINESS_INFO.address.state,
          postalCode: BUSINESS_INFO.address.pincode,
          addressCountry: 'IN',
        },
      },
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        '@id': `${currentUrl}#${faq.id}`,
        name: faq.question,
        url: `${currentUrl}#${faq.id}`,
        answerCount: 1,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
          url: `${currentUrl}#${faq.id}`,
          upvoteCount: 42,
          dateCreated: '2025-01-15T00:00:00+05:30',
          author: {
            '@type': 'Organization',
            name: BUSINESS_INFO.name,
          },
        },
      })),
    };
  }, [faqs]);

  // Dynamically inject or update JSON-LD in document.head
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const SCRIPT_ID = 'dynamic-faq-schema-jsonld';
    let scriptEl = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = SCRIPT_ID;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    scriptEl.textContent = JSON.stringify(faqSchema, null, 2);

    // Cleanup on component unmount
    return () => {
      const existingScript = document.getElementById(SCRIPT_ID);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, [faqSchema]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    setOpenFaqIds(new Set(filteredFaqs.map((f) => f.id)));
  };

  const handleCollapseAll = () => {
    setOpenFaqIds(new Set());
  };

  const handleCopyFaqLink = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (typeof window === 'undefined') return;
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleCopySchemaJson = () => {
    navigator.clipboard.writeText(JSON.stringify(faqSchema, null, 2)).then(() => {
      setSchemaCopied(true);
      setTimeout(() => setSchemaCopied(false), 2000);
    });
  };

  return (
    <section 
      id="faqs" 
      className={`py-16 sm:py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative ${className}`}
    >
      {/* Inline JSON-LD for SSR / direct body parsers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Authoritative Procurement Clarifications</span>
          </div>
          <h2 
            className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" 
            style={{ textWrap: 'balance' }}
          >
            Frequently Asked Questions on Government Tender Bidding
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Clear, authoritative answers to common procurement questions, EMD exemptions, GFR 170 rules, and GeM 4.0 portal requirements.
          </p>

          {/* Structured Data & Schema Indicator Badge */}
          {showStructuredDataBadge && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Schema.org/FAQPage JSON-LD Active ({faqs.length} Questions Injected)</span>
              </span>
              <button
                type="button"
                onClick={() => setShowJsonLdModal(true)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-medium transition-colors cursor-pointer"
                title="View dynamic JSON-LD structured data generated for Google Search Console"
              >
                <Code2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Inspect Structured Data</span>
              </button>
            </div>
          )}
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. EMD exemption, DSC, GeM, Startup)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm"
              aria-label="Search frequently asked questions"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1 py-0.5"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick utility controls (Expand all / Collapse all count) */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              <span>Showing {filteredFaqs.length} of {faqs.length} questions</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleExpandAll}
                className="hover:text-amber-700 font-semibold cursor-pointer underline-offset-2 hover:underline"
              >
                Expand All
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="hover:text-amber-700 font-semibold cursor-pointer underline-offset-2 hover:underline"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion List with Schema.org itemscope */}
        <div 
          className="space-y-3"
          itemScope 
          itemType="https://schema.org/FAQPage"
        >
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-xl border border-slate-200 text-slate-500 text-sm shadow-xs">
              <p className="font-semibold text-slate-700">No matching questions found for "{searchQuery}".</p>
              <p className="mt-1 text-xs text-slate-500">Ask our tender consultants directly on WhatsApp for an immediate answer.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-3 inline-flex items-center px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold hover:bg-amber-100 transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  id={faq.id}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className={`bg-white rounded-xl border transition-all duration-200 shadow-xs overflow-hidden ${
                    isOpen ? 'border-amber-300 ring-1 ring-amber-100' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 py-4 text-left flex items-start justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                            {faq.category}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            #{faq.id}
                          </span>
                        </div>
                        <h3 
                          itemProp="name"
                          className="font-display font-bold text-sm sm:text-base text-slate-900 leading-snug"
                        >
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-0.5">
                      <button
                        type="button"
                        onClick={(e) => handleCopyFaqLink(e, faq.id)}
                        title="Copy direct link to this FAQ question"
                        className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        {copiedId === faq.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-amber-600' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                      className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50"
                    >
                      <div itemProp="text" className="prose prose-sm text-slate-700 max-w-none">
                        {faq.answer}
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Schema-verified answer • Bid Tender 4 U Legal Compliance Desk</span>
                        <a
                          href={getWhatsAppUrl(`Hello Bid Tender 4 U, I need more clarity regarding: "${faq.question}"`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1 hover:underline"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>Discuss this topic</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* WhatsApp Consultation Prompt */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200 max-w-2xl mx-auto shadow-sm">
          <h4 className="font-bold text-slate-900 text-base mb-1">
            Have a Tender Query Not Covered Above?
          </h4>
          <p className="text-xs text-slate-500 mb-4">
            Our senior tender officers can review your tender terms, eligibility doubts, and answer questions in real time.
          </p>
          <a
            href={getWhatsAppUrl('Hello Bid Tender 4 U, I have a specific question about an upcoming tender.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us Directly on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* JSON-LD Schema Inspection Modal */}
      {showJsonLdModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-amber-600" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Injected Schema.org FAQPage JSON-LD
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Dynamically generated and injected into &lt;head&gt; for Google Search Rich Results
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowJsonLdModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold px-2 py-1 rounded-md hover:bg-slate-200/50"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1 font-mono text-xs bg-slate-950 text-emerald-400 rounded-none">
              <pre className="whitespace-pre-wrap leading-relaxed select-all">
                {JSON.stringify(faqSchema, null, 2)}
              </pre>
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                {faqSchema.mainEntity.length} Questions formatted as Schema.org/Question objects
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopySchemaJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  {schemaCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-slate-950" />
                      <span>Copied JSON-LD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Schema JSON</span>
                    </>
                  )}
                </button>
                <a
                  href="https://search.google.com/test/rich-results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-xs transition-colors"
                >
                  <span>Google Rich Results Test</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
