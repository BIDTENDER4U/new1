import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Scale, 
  FileText, 
  Share2, 
  Printer, 
  MessageCircle, 
  Sparkles, 
  Bookmark, 
  ChevronRight,
  ShieldCheck,
  Building2,
  ExternalLink,
  Layers,
  HelpCircle,
  Hash
} from 'lucide-react';
import { BlogPostItem } from '../types';
import { BLOG_ARTICLES, BLOG_CATEGORIES } from '../lib/blogArticlesData';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';
import { usePageSeo } from '../lib/seoManager';

interface ProcurementBlogProps {
  onNavigate: (page: string) => void;
  onOpenInquiry: (category?: string, service?: string) => void;
  onOpenFreeSummaryModal?: () => void;
  initialArticleSlug?: string;
  onArticleChange?: (slug: string | null) => void;
}

export const ProcurementBlog: React.FC<ProcurementBlogProps> = ({
  onNavigate,
  onOpenInquiry,
  onOpenFreeSummaryModal,
  initialArticleSlug,
  onArticleChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticleSlug, setActiveArticleSlug] = useState<string | null>(() => {
    if (initialArticleSlug) return initialArticleSlug;
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
      if (pathname.startsWith('blog/')) {
        return pathname.replace('blog/', '');
      }
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash.startsWith('blog-')) {
        return hash.replace('blog-', '');
      }
    }
    return null;
  });
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Sync with initial slug or window hash if it matches an article
  useEffect(() => {
    if (initialArticleSlug) {
      setActiveArticleSlug(initialArticleSlug);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialArticleSlug]);

  const activeArticle = useMemo(() => {
    if (!activeArticleSlug) return null;
    return BLOG_ARTICLES.find((a) => a.slug === activeArticleSlug) || null;
  }, [activeArticleSlug]);

  // Dynamically manage canonical tags, Open Graph meta-tags, and Schema.org JSON-LD
  usePageSeo({
    page: 'blog',
    articleSlug: activeArticleSlug || undefined,
    article: activeArticle,
  });

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.keywords.some((k) => k.toLowerCase().includes(q)) ||
        article.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    return BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0];
  }, []);

  const handleSelectArticle = (slug: string) => {
    setActiveArticleSlug(slug);
    onArticleChange?.(slug);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', `/blog/${slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFeed = () => {
    setActiveArticleSlug(null);
    onArticleChange?.(null);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/blog');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };



  return (
    <div className="bg-[#F8FAFC] text-slate-900 min-h-screen">
      
      {/* FULL ARTICLE READER VIEW */}
      {activeArticle ? (
        <article className="animate-in fade-in duration-200">
          
          {/* Breadcrumb & Navigation Header */}
          <div className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-500 font-medium">
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-800 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <button
                  type="button"
                  onClick={handleBackToFeed}
                  className="hover:text-amber-800 transition-colors cursor-pointer"
                >
                  Procurement Blog
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-800 font-bold truncate max-w-[200px] sm:max-w-xs">
                  {activeArticle.category}
                </span>
              </nav>

              <button
                type="button"
                onClick={handleBackToFeed}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Articles</span>
              </button>
            </div>
          </div>

          {/* Article Hero Masthead */}
          <header className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-left space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeArticle.readTime}</span>
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeArticle.date}</span>
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
                {activeArticle.title}
              </h1>

              <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
                {activeArticle.subtitle}
              </p>

              {/* Author & Action Bar */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 font-bold shrink-0">
                    <User className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      {activeArticle.author}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {activeArticle.authorRole} · Bid Tender 4 U Legal Desk
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>{copiedNotification ? 'Link Copied!' : 'Share Link'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-500" />
                    <span>Print Article</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Article Main Body with 2-Column Responsive Layout */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Full Long-Form Content (Col 8) */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* Executive Key Takeaways Card */}
                <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-300 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span>Executive Key Takeaways & Legal Precedents</span>
                  </div>

                  <div className="space-y-2">
                    {activeArticle.keyTakeaways.map((takeaway, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Article Sections */}
                {activeArticle.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                      {section.heading}
                    </h2>

                    <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                      {section.content.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Section Callout Box if present */}
                    {section.callout && (
                      <div className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3 my-4 ${
                        section.callout.type === 'statute'
                          ? 'bg-blue-50/80 border-blue-200 text-blue-950'
                          : section.callout.type === 'warning'
                          ? 'bg-red-50/80 border-red-200 text-red-950'
                          : 'bg-amber-50/80 border-amber-200 text-amber-950'
                      }`}>
                        {section.callout.type === 'statute' && <Scale className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />}
                        {section.callout.type === 'warning' && <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />}
                        {section.callout.type === 'info' && <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
                        
                        <div className="text-xs sm:text-sm leading-relaxed">
                          <strong className="block font-bold mb-1">{section.callout.title}</strong>
                          <span>{section.callout.text}</span>
                        </div>
                      </div>
                    )}

                    {/* Section Comparison / Data Table if present */}
                    {section.table && (
                      <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-sm">
                        <table className="w-full text-xs sm:text-sm text-left">
                          <thead className="bg-slate-100 text-slate-800 uppercase tracking-wider font-bold border-b border-slate-200">
                            <tr>
                              {section.table.headers.map((th, thIdx) => (
                                <th key={thIdx} className="px-4 py-3 font-mono text-xs">
                                  {th}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 bg-white">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className={`px-4 py-3 ${cIdx === 0 ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                ))}

                {/* Statutory Regulatory References Footer */}
                <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <Scale className="w-4 h-4 text-amber-700" />
                    <span>Statutory Gazettes & Regulatory Citations</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeArticle.regulatoryReferences.map((ref, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">§</span>
                        <span>{ref}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* In-Article Conversion Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-amber-500/10 border-2 border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                  <div className="space-y-2 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                      Live Tender Diagnostic
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">
                      Need Assistance Applying These Rules to Your Tender?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                      Upload your NIT document or GeM bid number. Get a free 1-page executive summary analyzing turnover thresholds, exemption waivers, and red flag compliance traps.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 w-full sm:w-auto shrink-0">
                    <button
                      type="button"
                      onClick={onOpenFreeSummaryModal}
                      className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Get Free Tender Summary on WhatsApp</span>
                    </button>

                    <a
                      href={getWhatsAppUrl(`Hello Bid Tender 4 U, I read your article "${activeArticle.title}" and would like advice on applying this rule to my upcoming tender.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Consultant</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Column: Sticky Table of Contents & Related Insights (Col 4) */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                
                {/* Table of Contents Card */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Table of Contents
                  </span>

                  <nav className="space-y-1.5">
                    {activeArticle.tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block p-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-amber-800 hover:bg-amber-50/60 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Free Diagnostic Tool Quick Banner */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-300 shadow-sm space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-sm text-slate-900">
                      Free Tender Executive Summary
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Instant 1-page breakdown of eligibility criteria, GFR 170 / 173(i) waivers, and FSSAI statutory licenses.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenFreeSummaryModal}
                    className="w-full py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Run Free Diagnostic</span>
                  </button>
                </div>

                {/* Recommended Practice Areas */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Related Practice Areas
                  </span>

                  <div className="space-y-2">
                    {activeArticle.recommendedServices.map((svc, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={() => {
                          if (svc.action === 'tender-summary' && onOpenFreeSummaryModal) {
                            onOpenFreeSummaryModal();
                          } else {
                            onNavigate(svc.action);
                          }
                        }}
                        className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-amber-400 bg-slate-50 hover:bg-white text-left transition-all flex items-center justify-between text-xs font-bold text-slate-800 cursor-pointer group"
                      >
                        <span className="truncate group-hover:text-amber-800">{svc.title}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-amber-600 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* More Regulatory Articles */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Explore Other Analyses
                  </span>

                  <div className="space-y-3">
                    {BLOG_ARTICLES.filter((a) => a.slug !== activeArticle.slug).slice(0, 3).map((other) => (
                      <button
                        key={other.slug}
                        type="button"
                        onClick={() => handleSelectArticle(other.slug)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer block"
                      >
                        <span className="text-[10px] font-bold text-amber-700 block uppercase">
                          {other.category}
                        </span>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-amber-800 line-clamp-2 mt-0.5 leading-snug">
                          {other.title}
                        </span>
                        <span className="text-[10px] text-slate-500 mt-1 block">
                          {other.readTime} · {other.date}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

              </aside>

            </div>
          </div>
        </article>
      ) : (
        /* EDITORIAL FEED / ARCHIVE VIEW */
        <div className="space-y-12 pb-20">
          
          {/* Masthead Banner */}
          <div className="bg-white border-b border-slate-200 py-14 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto space-y-4">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-900 font-bold mb-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mx-auto">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Government Procurement Authority & Legal Analysis Hub</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
                Government Procurement Blog & Regulatory Insights
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                In-depth regulatory reviews, GFR 2017 amendments, FoSCoS food safety mandates, and empirical bid strategy guides curated by our senior tender counsels.
              </p>

              {/* Search & Filter Bar */}
              <div className="max-w-2xl mx-auto pt-4 space-y-4">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by keywords: Rule 173(i), FSSAI, EMD, OEM MAF, DSC, Make in India..."
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 shadow-sm placeholder-slate-400"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Category Filter Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {BLOG_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-amber-400 text-slate-950 shadow-sm'
                          : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* FEATURED ANCHOR ARTICLE (If not searching/filtered) */}
            {selectedCategory === 'All Articles' && !searchQuery && featuredArticle && (
              <div className="bg-white border-2 border-amber-300 rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-mono">
                    Featured Regulatory Analysis
                  </span>
                  <span className="text-xs text-slate-500">{featuredArticle.readTime}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs text-slate-500">{featuredArticle.date}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-3">
                    <h2
                      onClick={() => handleSelectArticle(featuredArticle.slug)}
                      className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 group-hover:text-amber-800 transition-colors cursor-pointer leading-tight"
                    >
                      {featuredArticle.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {featuredArticle.subtitle}
                    </p>

                    {/* Key takeaway bullet preview */}
                    <div className="space-y-1.5 pt-2">
                      {featuredArticle.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 lg:border-l lg:border-slate-200 lg:pl-8">
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Author Analysis:
                      </span>
                      <strong className="text-xs font-bold text-slate-900 block">
                        {featuredArticle.author}
                      </strong>
                      <span className="text-[11px] text-slate-500 block">
                        {featuredArticle.authorRole}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectArticle(featuredArticle.slug)}
                      className="w-full py-3 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <span>Read Full Regulatory Analysis</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ARTICLES GRID */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900">
                  {selectedCategory === 'All Articles' ? 'All In-Depth Analyses' : `${selectedCategory} Articles`} ({filteredArticles.length})
                </h2>
                <span className="text-xs text-slate-500">
                  Updated with General Financial Rules & Gazette Revisions
                </span>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
                  <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
                  <h3 className="font-display font-bold text-lg text-slate-800">
                    No articles found matching "{searchQuery}"
                  </h3>
                  <p className="text-xs text-slate-500">
                    Try searching with broader procurement terms like "GFR", "FSSAI", "GeM", or "DSC".
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All Articles');
                    }}
                    className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredArticles.map((article) => (
                    <article
                      key={article.slug}
                      className="bg-white rounded-3xl border border-slate-200 hover:border-amber-400 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/5 group"
                    >
                      <div>
                        {/* Top Metadata Strip */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono">
                            {article.category}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">
                            {article.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          onClick={() => handleSelectArticle(article.slug)}
                          className="font-display text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors cursor-pointer leading-snug mb-2"
                        >
                          {article.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                          {article.subtitle}
                        </p>

                        {/* Keywords Tag Preview */}
                        <div className="flex flex-wrap gap-1 mb-5">
                          {article.keywords.slice(0, 3).map((kw, kIdx) => (
                            <span key={kIdx} className="text-[10px] text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">
                              #{kw}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Footer Actions */}
                      <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                        <div className="text-[11px] text-slate-500">
                          <span>By {article.author}</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleSelectArticle(article.slug)}
                          className="text-xs font-bold text-amber-800 group-hover:text-amber-950 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>Read Full Analysis</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-amber-600" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Call to Action Banner */}
            <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 text-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
              <div className="space-y-2 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  All India Tender Consultancy
                </span>
                <h3 className="font-display text-2xl font-black text-slate-900 mt-2">
                  Have an Upcoming Government or GeM Tender?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-medium leading-relaxed">
                  Don't risk procedural disqualification. Our senior counsels evaluate your qualification documents, calculate Make in India local content, and format your compliance packet within 4 hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <button
                  type="button"
                  onClick={onOpenFreeSummaryModal}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Get Free Tender Summary on WhatsApp</span>
                </button>

                <a
                  href={getWhatsAppUrl('Hello Bid Tender 4 U, I am reading your procurement blog and would like to speak with a senior consultant regarding tender compliance.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Consultant</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
