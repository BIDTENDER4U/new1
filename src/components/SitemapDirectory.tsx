import React, { useState, useMemo } from 'react';
import { 
  Network, 
  Search, 
  Copy, 
  Check, 
  Download, 
  FileCode, 
  ShieldCheck, 
  ArrowRight, 
  FolderTree,
  Code2,
  FileText
} from 'lucide-react';
import { CORE_SERVICES, PORTALS_DATA, CATEGORIES_DATA } from '../lib/constants';
import { ALL_INDIA_SUMMARY, STATES_DATA, CITIES_DATA } from '../lib/locationData';
import { BLOG_ARTICLES } from '../lib/blogArticlesData';

interface SitemapDirectoryProps {
  onNavigate: (page: string) => void;
  onSelectLocation?: (locationId: string) => void;
  onOpenInquiry?: (category?: string, service?: string, city?: string) => void;
}

type TabMode = 'visual' | 'xml' | 'crawler-guide';
type FilterType = 'all' | 'pages' | 'articles' | 'services' | 'categories' | 'portals' | 'states' | 'cities';

interface SitemapNode {
  id: string;
  title: string;
  slug: string;
  category: 'Page' | 'Article' | 'Service' | 'Sector' | 'Portal' | 'State' | 'City';
  priority: string;
  changeFreq: 'daily' | 'weekly' | 'monthly';
  description: string;
  badge?: string;
  targetPage: string;
  locationId?: string;
}

export const SitemapDirectory: React.FC<SitemapDirectoryProps> = ({
  onNavigate,
  onSelectLocation,
  onOpenInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<TabMode>('visual');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedXml, setCopiedXml] = useState(false);

  const todayIso = useMemo(() => new Date().toISOString().split('T')[0], []);
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.bidtender4u.com';

  // Construct comprehensive dynamic nodes
  const allNodes: SitemapNode[] = useMemo(() => {
    const list: SitemapNode[] = [];

    // 1. Core Application Pages
    const corePages = [
      { id: 'page-home', title: 'Home - All India Tender Consultancy Portal', slug: '', targetPage: 'home', priority: '1.0', changeFreq: 'daily' as const, desc: 'Central procurement hub, live success statistics, emergency compliance intake and service gateways.' },
      { id: 'page-locations', title: 'All India, State & City Tenders Hub', slug: '#locations', targetPage: 'locations', priority: '0.95', changeFreq: 'daily' as const, desc: 'Dynamic geographic SEO index covering Central Government, 28 States, and 50+ Key Indian Cities.' },
      { id: 'page-gem-docs', title: 'GeM Vendor Registration & Document Checklist', slug: '#gem-documents', targetPage: 'gem-documents', priority: '0.90', changeFreq: 'weekly' as const, desc: 'Statutory prerequisites for Government e-Marketplace vendor onboarding, OEM codes, and caution deposits.' },
      { id: 'page-services', title: 'Complete Tender Bidding Consultancy Services', slug: '#services', targetPage: 'services', priority: '0.90', changeFreq: 'weekly' as const, desc: 'End-to-end technical packaging, NIT audit, commercial bidding, and post-bid legal representations.' },
      { id: 'page-certifications', title: 'ISO 9001, 14001, 45001 & Class-3 DSC Certifications', slug: '#certifications', targetPage: 'certifications', priority: '0.90', changeFreq: 'weekly' as const, desc: 'IAF-accredited tender ISO certificates and FIPS cryptographic USB tokens for state and central portals.' },
      { id: 'page-categories', title: 'Tender Industry Sectors & Work Categories', slug: '#categories', targetPage: 'categories', priority: '0.85', changeFreq: 'weekly' as const, desc: '12 specialized industry sectors including Civil Works, Medical Supplies, Solar EPC, and IT Solutions.' },
      { id: 'page-portals', title: 'Central & State E-Procurement Portals Matrix', slug: '#portals', targetPage: 'portals', priority: '0.85', changeFreq: 'weekly' as const, desc: 'Technical specifications, Java PKI requirements, and registration guidance for GeM, CPPP, IREPS, and state portals.' },
      { id: 'page-stories', title: 'Client Success Stories & Won Bids Portfolio', slug: '#stories', targetPage: 'stories', priority: '0.80', changeFreq: 'weekly' as const, desc: 'Verified track record of won tenders, contract awards, and contractor testimonials across India.' },
      { id: 'page-insights', title: 'Expert Tender Insights & Regulatory News Feed', slug: '#insights', targetPage: 'insights', priority: '0.90', changeFreq: 'daily' as const, desc: 'In-depth GFR 2017 legal analysis, GeM circular breakdowns, and live industry procurement news feed.' },
      { id: 'page-faqs', title: 'Tender FAQs & Statutory Procurement Guidelines', slug: '#faqs', targetPage: 'faqs', priority: '0.80', changeFreq: 'monthly' as const, desc: 'Answers regarding EMD exemptions, Bid Securing Declarations, blacklisting defense, and DSC installation.' },
      { id: 'page-contact', title: 'Contact & Dedicated Tender Document Intake Desk', slug: '#contact', targetPage: 'contact', priority: '0.85', changeFreq: 'monthly' as const, desc: 'Direct intake desk to upload tender NIT documents for expedited eligibility audit and fee quotes.' },
      { id: 'page-blog', title: 'Government Procurement Blog & Regulatory Law Hub', slug: '#blog', targetPage: 'blog', priority: '0.95', changeFreq: 'daily' as const, desc: 'Authoritative long-form articles on tender trends, GFR 2017 amendments, GeM 4.0 policy, FSSAI licensing and DPIIT startup waivers.' },
    ];

    corePages.forEach((p) => {
      list.push({
        id: p.id,
        title: p.title,
        slug: p.slug,
        category: 'Page',
        priority: p.priority,
        changeFreq: p.changeFreq,
        description: p.desc,
        badge: 'Core Page',
        targetPage: p.targetPage,
      });
    });

    // 1b. Long-Form Regulatory Blog Articles
    BLOG_ARTICLES.forEach((article) => {
      list.push({
        id: `blog-${article.slug}`,
        title: article.title,
        slug: `#blog-${article.slug}`,
        category: 'Article',
        priority: '0.90',
        changeFreq: 'weekly',
        description: `${article.subtitle} (${article.readTime} · ${article.author})`,
        badge: article.category,
        targetPage: 'blog',
      });
    });

    // 2. Core Services
    CORE_SERVICES.forEach((srv) => {
      const target = (srv.id === 'iso-certification' || srv.id === 'class3-dsc' || srv.id === 'gem-oem-code') 
        ? 'certifications' 
        : 'services';
      list.push({
        id: `srv-${srv.id}`,
        title: `${srv.title} - ${srv.tagline}`,
        slug: `#${target}`,
        category: 'Service',
        priority: '0.85',
        changeFreq: 'weekly',
        description: srv.description,
        badge: srv.portalApplicability,
        targetPage: target,
      });
    });

    // 3. 12 High-Value Industry Categories
    CATEGORIES_DATA.forEach((cat) => {
      list.push({
        id: `cat-${cat.id}`,
        title: `${cat.name} Tender Bidding & Consulting`,
        slug: `#categories`,
        category: 'Sector',
        priority: '0.80',
        changeFreq: 'weekly',
        description: `${cat.subtitle}. Key procurement authorities: ${cat.keyAuthorities.slice(0, 3).join(', ')}.`,
        badge: cat.badge,
        targetPage: 'categories',
      });
    });

    // 4. Central & State Portals
    PORTALS_DATA.forEach((portal) => {
      list.push({
        id: `portal-${portal.shortCode.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        title: `${portal.name} (${portal.shortCode}) e-Tender Assistance`,
        slug: `#portals`,
        category: 'Portal',
        priority: '0.80',
        changeFreq: 'weekly',
        description: `${portal.description} Requires: ${portal.dscRequirement}.`,
        badge: portal.region,
        targetPage: 'portals',
      });
    });

    // 5. All India National Hub Node
    list.push({
      id: 'loc-all-india',
      title: ALL_INDIA_SUMMARY.title,
      slug: `#locations`,
      category: 'State',
      priority: '0.90',
      changeFreq: 'daily',
      description: `${ALL_INDIA_SUMMARY.tagline}. Central portals: GeM 4.0, CPPP, IREPS, CPWD, NHAI.`,
      badge: 'National Central Portal',
      targetPage: 'locations',
      locationId: 'all-india',
    });

    // 6. 28 States & UTs
    STATES_DATA.forEach((state) => {
      list.push({
        id: `state-${state.id}`,
        title: `${state.name} State Government Tenders & e-Procurement`,
        slug: `#locations`,
        category: 'State',
        priority: '0.85',
        changeFreq: 'daily',
        description: `${state.portalName} consulting across ${state.keyCities.slice(0, 3).join(', ')}. Departments: ${state.majorDepartments.slice(0, 2).join(', ')}.`,
        badge: `${state.region} Region`,
        targetPage: 'locations',
        locationId: state.id,
      });
    });

    // 7. 50+ Key Indian Cities
    CITIES_DATA.forEach((city) => {
      list.push({
        id: `city-${city.id}`,
        title: `${city.name} (${city.state}) Municipal & Public Tenders`,
        slug: `#locations`,
        category: 'City',
        priority: '0.80',
        changeFreq: 'daily',
        description: `${city.portal} guidance for ${city.keyAuthorities.slice(0, 2).join(', ')}. Top sectors: ${city.topSectors.slice(0, 2).join(', ')}.`,
        badge: city.state,
        targetPage: 'locations',
        locationId: city.id,
      });
    });

    return list;
  }, []);

  // Filtered nodes
  const filteredNodes = useMemo(() => {
    return allNodes.filter((node) => {
      // Type match
      let matchesType = true;
      if (filterType === 'pages') matchesType = node.category === 'Page';
      else if (filterType === 'articles') matchesType = node.category === 'Article';
      else if (filterType === 'services') matchesType = node.category === 'Service';
      else if (filterType === 'categories') matchesType = node.category === 'Sector';
      else if (filterType === 'portals') matchesType = node.category === 'Portal';
      else if (filterType === 'states') matchesType = node.category === 'State';
      else if (filterType === 'cities') matchesType = node.category === 'City';

      // Query match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        node.title.toLowerCase().includes(q) ||
        node.description.toLowerCase().includes(q) ||
        node.category.toLowerCase().includes(q) ||
        (node.badge && node.badge.toLowerCase().includes(q));

      return matchesType && matchesSearch;
    });
  }, [allNodes, filterType, searchQuery]);

  // Generate XML Sitemap string
  const xmlSitemapContent = useMemo(() => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
    xml += `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n`;
    xml += `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n`;
    xml += `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n`;

    allNodes.forEach((node) => {
      const locUrl = `${baseUrl}/${node.slug}`;
      xml += `  <!-- ${node.category.toUpperCase()}: ${node.title.replace(/&/g, '&amp;')} -->\n`;
      xml += `  <url>\n`;
      xml += `    <loc>${locUrl}</loc>\n`;
      xml += `    <lastmod>${todayIso}</lastmod>\n`;
      xml += `    <changefreq>${node.changeFreq}</changefreq>\n`;
      xml += `    <priority>${node.priority}</priority>\n`;
      xml += `  </url>\n\n`;
    });

    xml += `</urlset>`;
    return xml;
  }, [allNodes, baseUrl, todayIso]);

  const handleCopyXml = () => {
    navigator.clipboard.writeText(xmlSitemapContent).then(() => {
      setCopiedXml(true);
      setTimeout(() => setCopiedXml(false), 2500);
    });
  };

  const handleDownloadXml = () => {
    const blob = new Blob([xmlSitemapContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleNodeClick = (node: SitemapNode) => {
    if (node.locationId && onSelectLocation) {
      onSelectLocation(node.locationId);
    }
    if (node.category === 'Article') {
      window.location.hash = node.slug;
    }
    onNavigate(node.targetPage);
  };

  return (
    <section id="sitemap" className="py-16 bg-slate-50 text-slate-900 border-b border-slate-200 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Component Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 font-mono">
              <Network className="w-3.5 h-3.5 text-amber-700" />
              <span>Search Engine Crawling & URL Architecture</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950">
              Dynamic Sitemap & Deep-Crawl Directory
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              Complete hierarchical index of all government tender consulting services, specialized procurement sectors, central and state e-tendering portals, and pan-India geographic hubs (All India, 28 States, and 50+ Cities).
            </p>
          </div>

          {/* Key Metrics Pill Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white border border-slate-200 rounded-2xl p-4 shrink-0 shadow-sm">
            <div className="text-center px-2">
              <span className="block font-display text-xl sm:text-2xl font-black text-amber-700">
                {allNodes.length}
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-mono font-bold">
                Indexed Nodes
              </span>
            </div>
            <div className="text-center px-2 border-l border-slate-200">
              <span className="block font-display text-xl sm:text-2xl font-black text-slate-900">
                {STATES_DATA.length}
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-mono font-bold">
                States & UTs
              </span>
            </div>
            <div className="text-center px-2 border-l border-slate-200">
              <span className="block font-display text-xl sm:text-2xl font-black text-emerald-700">
                {CITIES_DATA.length}
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-mono font-bold">
                Key Cities
              </span>
            </div>
            <div className="text-center px-2 border-l border-slate-200">
              <span className="block font-display text-xl sm:text-2xl font-black text-blue-700">
                100%
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-mono font-bold">
                Crawl Ready
              </span>
            </div>
          </div>
        </div>

        {/* View Switcher Tabs & Tools */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Main Tab Controls */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs self-start">
            <button
              onClick={() => setActiveTab('visual')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'visual'
                  ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <FolderTree className="w-4 h-4" />
              <span>Interactive Visual Sitemap ({filteredNodes.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('xml')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'xml'
                  ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>XML Sitemap Generator</span>
            </button>

            <button
              onClick={() => setActiveTab('crawler-guide')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'crawler-guide'
                  ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Robots & SEO Specs</span>
            </button>
          </div>

          {/* Action buttons when in XML tab */}
          {activeTab === 'xml' && (
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={handleCopyXml}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer shadow-xs"
              >
                {copiedXml ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedXml ? 'Copied to Clipboard!' : 'Copy XML'}</span>
              </button>

              <button
                onClick={handleDownloadXml}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-colors cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download sitemap.xml</span>
              </button>
            </div>
          )}
        </div>

        {/* TAB 1: INTERACTIVE VISUAL SITEMAP DIRECTORY */}
        {activeTab === 'visual' && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                {/* Node Category Filters */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                  {[
                    { id: 'all', label: 'All Nodes', count: allNodes.length },
                    { id: 'pages', label: 'Core Pages', count: allNodes.filter(n => n.category === 'Page').length },
                    { id: 'articles', label: 'Blog Articles', count: allNodes.filter(n => n.category === 'Article').length },
                    { id: 'services', label: 'Services', count: allNodes.filter(n => n.category === 'Service').length },
                    { id: 'categories', label: 'Sectors', count: allNodes.filter(n => n.category === 'Sector').length },
                    { id: 'portals', label: 'Portals', count: allNodes.filter(n => n.category === 'Portal').length },
                    { id: 'states', label: 'States (28)', count: allNodes.filter(n => n.category === 'State').length },
                    { id: 'cities', label: 'Cities (50+)', count: allNodes.filter(n => n.category === 'City').length },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setFilterType(btn.id as FilterType)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                        filterType === btn.id
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{btn.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${filterType === btn.id ? 'bg-amber-600/30 text-slate-950 font-black' : 'bg-slate-200 text-slate-600'}`}>
                        {btn.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Instant Search Box */}
                <div className="relative min-w-[280px]">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search node, city, portal, ISO, keyword..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 font-medium transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800 text-xs cursor-pointer font-bold"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Sitemap Nodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNodes.length === 0 ? (
                <div className="col-span-full p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm font-medium">
                  No sitemap nodes matched &quot;{searchQuery}&quot;. Please adjust your filters or search keywords.
                </div>
              ) : (
                filteredNodes.map((node) => {
                  return (
                    <div
                      key={node.id}
                      onClick={() => handleNodeClick(node)}
                      className="group bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-amber-400 rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md relative overflow-hidden"
                    >
                      <div className="space-y-3">
                        {/* Card Meta Top */}
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded font-black ${
                              node.category === 'Page'
                                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                : node.category === 'Service'
                                ? 'bg-blue-100 text-blue-900 border border-blue-300'
                                : node.category === 'Sector'
                                ? 'bg-purple-100 text-purple-900 border border-purple-300'
                                : node.category === 'Portal'
                                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                                : node.category === 'State'
                                ? 'bg-rose-100 text-rose-900 border border-rose-300'
                                : 'bg-cyan-100 text-cyan-900 border border-cyan-300'
                            }`}
                          >
                            {node.category}
                          </span>

                          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 font-bold">
                            <span>Pri: <strong className="text-slate-900">{node.priority}</strong></span>
                            <span>•</span>
                            <span className="capitalize">{node.changeFreq}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-sm font-black text-slate-950 group-hover:text-amber-800 transition-colors leading-snug">
                          {node.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                          {node.description}
                        </p>

                        {/* Badge if available */}
                        {node.badge && (
                          <div className="pt-1">
                            <span className="inline-block text-[10px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-mono font-bold">
                              {node.badge}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Footer URL & Action */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-mono text-[11px] text-amber-800 font-bold truncate max-w-[190px]">
                          /{node.slug || '#home'}
                        </span>

                        <span className="inline-flex items-center gap-1 text-slate-500 group-hover:text-slate-900 text-xs font-bold transition-colors">
                          <span>Inspect Node</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* TAB 2: XML SITEMAP GENERATOR VIEW */}
        {activeTab === 'xml' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-700 shadow-xs font-medium">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-amber-700" />
                <span>
                  Standard <strong className="text-slate-900 font-extrabold">sitemaps.org 0.9 XML schema</strong> dynamically populated with {allNodes.length} verified URLs.
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 font-bold">
                Lastmod date: {todayIso}
              </span>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 font-mono text-xs text-slate-200 overflow-x-auto max-h-[600px] scrollbar-thin">
              <pre className="text-[11px] leading-relaxed text-amber-300 whitespace-pre">
                {xmlSitemapContent}
              </pre>
            </div>
          </div>
        )}

        {/* TAB 3: ROBOTS & SEO SPECIFICATIONS */}
        {activeTab === 'crawler-guide' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Robots.txt Directive */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-700" />
                <h3 className="font-display text-base font-black text-slate-950">
                  Crawler Robots.txt Directives
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Standard robots directives indicating allowed bot paths, crawl rate limits, and the automated sitemap location:
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed">
                <p className="text-emerald-400 font-bold">User-agent: *</p>
                <p className="text-slate-300">Allow: /</p>
                <p className="text-slate-300">Disallow: /#admin-leads</p>
                <p className="text-slate-300">Disallow: /api/internal</p>
                <p className="pt-2 text-amber-400 font-bold">Sitemap: {baseUrl}/sitemap.xml</p>
              </div>
            </div>

            {/* Structured Schema.org Architecture */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <h3 className="font-display text-base font-black text-slate-950">
                  JSON-LD Microdata & SiteNavigationElement
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                The dynamic sitemap exposes microdata using Schema.org <code className="text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded font-mono font-bold">SiteNavigationElement</code> and <code className="text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded font-mono font-bold">ItemList</code> standards to enable deep sitelinks and fast Google indexing.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span><strong>Canonical Host:</strong> Verified single domain structure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span><strong>Google Search Console:</strong> Verified ready for sitemap submission</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span><strong>Geographic Schema:</strong> Indian State & City GeoCoordinates tags</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Assistance Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-lg font-black text-slate-950">
              Looking for a Specific Tender, Department, or Regional Authority?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl">
              Can’t find the exact tender notification or NIT ID? Send us the tender details or department name for instant verification and technical consultation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry && onOpenInquiry('Tender Document Analysis & Eligibility Audit', 'Sitemap Search Consultation')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors cursor-pointer shadow-xs"
            >
              Contact Specialist Desk
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
