import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS_DATA, getWhatsAppUrl } from '../lib/constants';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['All', 'GeM Portal', 'Non-GeM & State', 'Documents & EMD', 'Submission & DSC'];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
            Knowledge Base & Clarifications
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Frequently Asked Questions on Government Tender Bidding
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Clear, authoritative answers to common procurement questions, EMD exemptions, and portal requirements.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. EMD exemption, DSC, GeM)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found for "{searchQuery}". Ask our consultants directly on WhatsApp.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      {faq.answer}
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
            Our senior tender officers can review your tender terms and answer questions in real time.
          </p>
          <a
            href={getWhatsAppUrl('Hello Bid Tender 4 U, I have a specific question about an upcoming tender.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
