import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowUpRight, 
  ShieldCheck, 
  Home,
  MapPin,
  FileCheck,
  Briefcase,
  Award,
  Building2,
  Globe,
  Trophy,
  BookOpen,
  Network,
  HelpCircle,
  PhoneCall,
  CheckCircle2,
  FileText,
  Sparkles,
  ArrowRight,
  Layers,
  Cpu,
  Info,
  Search,
  CornerDownLeft,
  ChevronDown,
  QrCode,
  Hash
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';
import { searchIndex, SearchItem } from '../lib/searchIndex';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string, articleSlug?: string) => void;
  onOpenChecklistModal: () => void;
  onScrollToForm: () => void;
  onOpenFreeSummaryModal?: () => void;
  onOpenLettersModal?: () => void;
  onOpenRadarModal?: (initialQuery?: string) => void;
  onOpenMapsModal?: (initialQuery?: string) => void;
  onOpenPaymentModal?: () => void;
  isMenuOpen?: boolean;
  onToggleMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'home',
  onNavigate = () => {},
  onOpenChecklistModal,
  onScrollToForm,
  onOpenFreeSummaryModal,
  onOpenLettersModal,
  onOpenRadarModal,
  onOpenMapsModal,
  onOpenPaymentModal,
  isMenuOpen: externalMenuOpen,
  onToggleMenu: externalToggleMenu,
}) => {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTypeFilter, setSearchTypeFilter] = useState<'all' | 'service' | 'blog' | 'faq'>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const drawerSearchInputRef = useRef<HTMLInputElement>(null);
  const toolsDropdownRef = useRef<HTMLDivElement>(null);

  const menuOpen = externalMenuOpen !== undefined ? externalMenuOpen : internalMenuOpen;
  const toggleMenu = externalToggleMenu || (() => setInternalMenuOpen(!internalMenuOpen));
  const closeMenu = () => {
    if (externalToggleMenu && externalMenuOpen) {
      externalToggleMenu();
    } else {
      setInternalMenuOpen(false);
    }
  };

  const defaultWhatsAppUrl = getWhatsAppUrl('Hello Bid Tender 4 U, I would like to consult with a specialist regarding a government tender.');

  const handleNavClick = (page: string, articleSlug?: string) => {
    if (page === 'payment' || page === 'payment-details') {
      if (onOpenPaymentModal) {
        onOpenPaymentModal();
      } else {
        onNavigate(page, articleSlug);
      }
      closeMenu();
      setIsSearchOpen(false);
      setSearchQuery('');
      return;
    }
    onNavigate(page, articleSlug);
    closeMenu();
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  // Client-side real-time filtered search results
  const searchResults = useMemo(() => {
    return searchIndex(searchQuery, searchTypeFilter);
  }, [searchQuery, searchTypeFilter]);

  // Reset selected keyboard index when query or filter changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery, searchTypeFilter]);

  // Autofocus input when search modal opens
  useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  // Close tools dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(event.target as Node)) {
        setIsToolsDropdownOpen(false);
      }
    };
    if (isToolsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isToolsDropdownOpen]);

  // Global hotkeys: Ctrl+K / Cmd+K or "/" to trigger search, ESC to close
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Hotkey to open search: Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
        return;
      }

      // Hotkey "/" when not inside an input/textarea
      const target = e.target as HTMLElement;
      const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
      if (e.key === '/' && !isInput && !isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
        return;
      }

      if (e.key === 'Escape') {
        if (isSearchOpen) {
          setIsSearchOpen(false);
        } else if (menuOpen) {
          closeMenu();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isSearchOpen, menuOpen]);

  // Handle keyboard navigation within search modal
  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (searchResults.length > 0 ? (prev + 1) % searchResults.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (searchResults.length > 0 ? (prev - 1 + searchResults.length) % searchResults.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchResults.length > 0 && searchResults[selectedIndex]) {
        const item = searchResults[selectedIndex];
        handleNavClick(item.pageId, item.articleSlug);
      }
    }
  };

  // Prevent background scroll when modal or drawer is open
  useEffect(() => {
    if (menuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen, isSearchOpen]);

  const navigationSections = [
    {
      title: 'Core Practice Areas & Target Services',
      links: [
        { id: 'tender-bidding-consultancy', path: '/tender-bidding-consultancy', label: 'Tender Bidding Consultancy', icon: Briefcase, desc: 'NIT audit, technical packaging & commercial bid submission' },
        { id: 'gem-registration', path: '/gem-registration', label: 'GeM Registration', icon: FileCheck, desc: 'Statutory documents for primary sellers, OEMs & resellers' },
        { id: 'gem-product-listing', path: '/gem-product-listing', label: 'GeM Product Listing', icon: Layers, desc: 'Quadrant 1-4 catalog management & L1 direct pairing' },
        { id: 'oem-services', path: '/oem-services', label: 'OEM Services', icon: Cpu, desc: 'Brand approval, OEM codes & reseller authorization letters' },
      ],
    },
    {
      title: 'Company & Knowledge',
      links: [
        { id: 'home', path: '/', label: 'Home Page', icon: Home, desc: 'Overview, live milestones & services' },
        { id: 'about-us', path: '/about-us', label: 'About Us', icon: Info, desc: 'Credentials, Isanpur Ahmedabad HQ & track record' },
        { id: 'blog', path: '/blog', label: 'Procurement Blog', icon: BookOpen, desc: 'Long-form regulatory analysis & tender trends' },
        { id: 'stories', path: '/stories', label: 'Client Success Stories', icon: Trophy, desc: 'Verified client case studies & won bids' },
        { id: 'insights', path: '/insights', label: 'Expert Insights & News', icon: FileText, desc: 'GFR 2017 legal guides & regulatory feed' },
      ],
    },
    {
      title: 'Enablers & Geographic Hubs',
      links: [
        { id: 'certifications', path: '/certifications', label: 'Startup, FSSAI, ISO & DSC', icon: Award, desc: 'DPIIT Startup India, FSSAI licence, ISO & DSC' },
        { id: 'categories', path: '/categories', label: '12 Tender Categories', icon: Building2, desc: 'Civil, medical, solar, IT, security & more' },
        { id: 'tenders-by-keywords', path: '/tenders-by-keywords', label: 'Tenders by Keywords', icon: Hash, desc: 'Keyword directory for all goods, works & service tenders' },
        { id: 'portals', path: '/portals', label: 'E-Procurement Portals', icon: Globe, desc: 'GeM, CPPP, IREPS, CPWD & state boards' },
        { id: 'locations', path: '/locations', label: 'All India & Cities Hub', icon: MapPin, desc: 'Pan-India, 28 states & 50+ key cities' },
        { id: 'sitemap', path: '/sitemap', label: 'Dynamic Sitemap', icon: Network, desc: 'Deep-crawl directory & XML generator' },
      ],
    },
    {
      title: 'Support & Intake Desk',
      links: [
        { id: 'contact-us', path: '/contact-us', label: 'Contact Us', icon: PhoneCall, desc: 'Submit tender document for preliminary audit' },
        { id: 'faqs', path: '/faqs', label: 'Tender FAQs', icon: HelpCircle, desc: 'EMD exemption & tender bidding queries' },
        { id: 'payment', path: '/payment-details', label: 'Payment Details (UPI)', icon: QrCode, desc: 'Official UPI singhbaldev70368-2@okicici & QR code' },
      ],
    },
  ];

  const popularKeywords = [
    { label: 'GeM Registration', query: 'GeM Registration' },
    { label: 'OEM Codes', query: 'OEM Codes' },
    { label: 'Startup India', query: 'Startup India' },
    { label: 'GFR 170 EMD', query: 'GFR 170' },
    { label: 'Class-3 DSC', query: 'Class-3 DSC' },
    { label: 'Product Listing', query: 'Product Listing' },
  ];

  const getItemBadge = (type: SearchItem['type']) => {
    switch (type) {
      case 'service':
        return <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">Service</span>;
      case 'blog':
        return <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">Blog Article</span>;
      case 'faq':
        return <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-300">FAQ Topic</span>;
      case 'hub':
      default:
        return <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">Practice Area</span>;
    }
  };

  const getItemIcon = (type: SearchItem['type']) => {
    switch (type) {
      case 'service':
        return <Briefcase className="w-4 h-4 text-amber-700" />;
      case 'blog':
        return <BookOpen className="w-4 h-4 text-emerald-700" />;
      case 'faq':
        return <HelpCircle className="w-4 h-4 text-purple-700" />;
      case 'hub':
      default:
        return <Building2 className="w-4 h-4 text-blue-700" />;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 text-slate-900 transition-all shadow-xs text-left">
        {/* Top micro announcement bar */}
        <div className="bg-[#F8F9FA] border-b border-[#D9E0E8] px-4 py-1.5 text-xs text-[#1D3557] font-semibold">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="font-extrabold text-[#1D3557]">Urgent Tender Review:</span>
              <span className="hidden sm:inline text-slate-700 font-medium">Fast-track technical & documentation compliance within 4 hours</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="hover:underline transition-colors flex items-center gap-1.5 font-mono text-[#1D3557] hover:text-[#152742] font-black"
                title="Call tender specialist directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                <span className="text-[#1D3557] font-black">{BUSINESS_INFO.displayPhone}</span>
              </a>
              <span className="hidden md:inline text-slate-400">|</span>
              <span className="hidden md:inline text-slate-700 font-bold">Ahmedabad, Gujarat (Pan-India)</span>
            </div>
          </div>
        </div>

        {/* Clean, Decongested Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2">
          {/* Left: Brand Wordmark & Logo Icon with Guaranteed High-Contrast Lettering */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            className="flex items-center gap-2 sm:gap-3 group text-left cursor-pointer min-w-0 shrink"
            title="Bid Tender 4 U - Government Tender & GeM Consultancy"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-full bg-[#1D3557] border border-[#D4AF70] p-0.5 shadow-xs transition-transform group-hover:scale-105">
              <img
                src="/bid-tender-mark.svg"
                alt="Bid Tender 4 U Icon"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 font-display font-black text-base sm:text-2xl tracking-tight text-[#1D3557]">
                <span className="text-[#1D3557] font-black tracking-tight">BIDTENDER</span>
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-md bg-[#1D3557] text-[#F59E0B] text-xs sm:text-sm font-black border border-[#D4AF70]/40 shadow-2xs">
                  4U
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-wider font-extrabold text-slate-600 uppercase truncate">
                All India Tender Consultancy
              </span>
            </div>
          </a>


          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Global Search Trigger */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-2 text-xs font-semibold text-slate-700 bg-[#F8F9FA] hover:bg-slate-100 hover:text-[#1D3557] border border-[#D9E0E8] rounded-xl transition-all shadow-2xs cursor-pointer group shrink-0 focus:outline-none focus:ring-2 focus:ring-[#1D3557]/20"
              aria-label="Search services, blog articles and FAQs (Press Ctrl+K or /)"
              title="Global Search (Press Ctrl+K or /)"
            >
              <Search className="w-4 h-4 text-slate-500 group-hover:text-[#1D3557] transition-colors stroke-[2.5]" />
              <span className="hidden md:inline text-xs text-slate-600 font-medium">Search...</span>
              <kbd className="hidden lg:inline-flex items-center text-[10px] font-mono bg-white border border-[#D9E0E8] rounded px-1.5 py-0.5 text-slate-500 font-bold shadow-2xs">
                ⌘K
              </kbd>
            </button>

            {/* Consolidated Tender Tools Dropdown (Replaces multiple competing pills) */}
            {(onOpenRadarModal || onOpenMapsModal || onOpenFreeSummaryModal || onOpenLettersModal || onOpenPaymentModal) && (
              <div className="relative hidden md:block" ref={toolsDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer shadow-2xs ${
                    isToolsDropdownOpen
                      ? 'bg-[#1D3557] text-white border-[#1D3557]'
                      : 'bg-white text-[#1D3557] border-[#D9E0E8] hover:border-[#1D3557] hover:bg-slate-50'
                  }`}
                  aria-expanded={isToolsDropdownOpen}
                  title="Free Summary, Sample Letters & Payment Details"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF70]" />
                  <span>Tools</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isToolsDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isToolsDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#D9E0E8] p-2 z-50 animate-in fade-in zoom-in-95 duration-150 space-y-1">
                    {onOpenFreeSummaryModal && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsToolsDropdownOpen(false);
                          onOpenFreeSummaryModal();
                        }}
                        className="w-full p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 text-left group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#1D3557] text-[#D4AF70] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <FileText className="w-4 h-4 text-[#D4AF70]" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#1D3557] block">
                            Free Tender Summary
                          </span>
                          <span className="text-[11px] text-slate-500 line-clamp-1">
                            Upload document & get manual summary on WhatsApp
                          </span>
                        </div>
                      </button>
                    )}

                    {onOpenLettersModal && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsToolsDropdownOpen(false);
                          onOpenLettersModal();
                        }}
                        className="w-full p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 text-left group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <FileCheck className="w-4 h-4 text-amber-800" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#1D3557] block">
                            Sample Letters & Formats
                          </span>
                          <span className="text-[11px] text-slate-500 line-clamp-1">
                            OEM Authorization (MAF) & GFR 173(i) drafts
                          </span>
                        </div>
                      </button>
                    )}

                    {onOpenPaymentModal && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsToolsDropdownOpen(false);
                          onOpenPaymentModal();
                        }}
                        className="w-full p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-3 text-left group cursor-pointer border-t border-slate-100"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <QrCode className="w-4 h-4 text-emerald-700" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-[#1D3557] group-hover:text-emerald-950">
                              Payment Details (UPI)
                            </span>
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-600 text-white font-mono">
                              Verified
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 line-clamp-1 font-mono">
                            singhbaldev70368-2@okicici
                          </span>
                        </div>
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Pay Online / UPI Button */}
            {onOpenPaymentModal && (
              <button
                type="button"
                onClick={onOpenPaymentModal}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-200 hover:border-emerald-300 rounded-xl transition-colors shadow-2xs cursor-pointer"
                title="View Official UPI Payment Details (singhbaldev70368-2@okicici)"
              >
                <QrCode className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pay UPI</span>
              </button>
            )}

            {/* WhatsApp CTA (Clean, subtle icon button on tablet/desktop) */}
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-emerald-700 bg-white hover:bg-emerald-50/80 border border-[#D9E0E8] hover:border-emerald-300 rounded-xl transition-colors shadow-2xs"
              title="Chat on WhatsApp with Senior Tender Officer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Inquire Button (Primary High-Converting Brand Action) */}
            <button
              type="button"
              onClick={onScrollToForm}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-black text-white bg-[#1D3557] hover:bg-[#152742] border border-[#1D3557] rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer whitespace-nowrap animate-inquiry-pulse"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF70] stroke-[3]" />
            </button>

            {/* Clean Hamburger Menu Button with smooth toggle icon animation */}
            <button
              type="button"
              onClick={toggleMenu}
              className={`p-2 sm:px-3 sm:py-2 text-[#1D3557] bg-white hover:bg-slate-50 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs group focus:outline-none shrink-0 ${
                menuOpen ? 'border-amber-500 bg-amber-50/60 text-amber-800' : 'border-[#D9E0E8] hover:border-[#1D3557]'
              }`}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              title={menuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={menuOpen}
            >
              <div className={`nav-menu-toggle-icon transition-transform duration-300 ${menuOpen ? 'rotate-90 scale-105 text-amber-700' : 'text-[#1D3557] group-hover:scale-105'}`}>
                {menuOpen ? (
                  <X className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <Menu className="w-4 h-4 stroke-[2.5]" />
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
                {menuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* GLOBAL SEARCH MODAL DIALOG */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center animate-in fade-in duration-200 text-left">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsSearchOpen(false)}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
            {/* Top Search Input Box */}
            <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/70 flex items-center gap-3">
              <Search className="w-5 h-5 text-amber-700 shrink-0 stroke-[2.5]" />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search services, blog articles, FAQs, GFR rules..."
                className="w-full bg-transparent border-none text-slate-950 font-bold text-sm sm:text-base placeholder:text-slate-400 focus:outline-none"
                autoComplete="off"
                spellCheck="false"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
                  title="Clear query"
                >
                  <X className="w-4 h-4 stroke-[2.5]" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 px-2 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors shrink-0"
              >
                ESC
              </button>
            </div>

            {/* Filter Category Pills */}
            <div className="px-4 sm:px-5 py-2.5 border-b border-slate-200 bg-white flex items-center gap-2 overflow-x-auto text-xs font-bold scrollbar-none">
              <span className="text-slate-400 uppercase tracking-wider text-[10px] font-mono mr-1 shrink-0">Filter:</span>
              <button
                type="button"
                onClick={() => setSearchTypeFilter('all')}
                className={`px-2.5 py-1 rounded-lg transition-all shrink-0 cursor-pointer ${
                  searchTypeFilter === 'all'
                    ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Results
              </button>
              <button
                type="button"
                onClick={() => setSearchTypeFilter('service')}
                className={`px-2.5 py-1 rounded-lg transition-all shrink-0 cursor-pointer ${
                  searchTypeFilter === 'service'
                    ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => setSearchTypeFilter('blog')}
                className={`px-2.5 py-1 rounded-lg transition-all shrink-0 cursor-pointer ${
                  searchTypeFilter === 'blog'
                    ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Blog Articles
              </button>
              <button
                type="button"
                onClick={() => setSearchTypeFilter('faq')}
                className={`px-2.5 py-1 rounded-lg transition-all shrink-0 cursor-pointer ${
                  searchTypeFilter === 'faq'
                    ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                FAQ Topics
              </button>
            </div>

            {/* Results Scroll Area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1.5 scrollbar-thin max-h-[60vh]">
              {searchResults.length > 0 ? (
                <>
                  <div className="px-2 py-1 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                    <span>Matches ({searchResults.length})</span>
                    <span className="hidden sm:inline text-[10px] text-slate-400 font-normal">Use ↑ ↓ to navigate, Enter to select</span>
                  </div>

                  {searchResults.map((item, idx) => {
                    const isSelected = idx === selectedIndex;

                    return (
                      <a
                        key={item.id}
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.pageId, item.articleSlug);
                        }}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full p-3 rounded-xl text-left transition-all flex items-start gap-3 cursor-pointer group border ${
                          isSelected
                            ? 'bg-amber-50/90 border-amber-300 shadow-xs'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${
                          isSelected
                            ? 'bg-amber-400 text-slate-950 border-amber-500'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}>
                          {getItemIcon(item.type)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-xs sm:text-sm font-black text-slate-950 group-hover:text-amber-800 transition-colors truncate">
                              {item.title}
                            </span>
                            <div className="shrink-0">
                              {getItemBadge(item.type)}
                            </div>
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        <div className="shrink-0 self-center hidden sm:flex items-center text-slate-400 group-hover:text-amber-700 transition-colors">
                          <CornerDownLeft className="w-4 h-4" />
                        </div>
                      </a>
                    );
                  })}
                </>
              ) : (
                <div className="py-12 text-center px-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center mx-auto mb-3 shadow-xs">
                    <Search className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h4 className="font-display text-base font-extrabold text-slate-900 mb-1">
                    No results found for "{searchQuery}"
                  </h4>
                  <p className="text-xs text-slate-500 font-medium max-w-sm mx-auto mb-4">
                    Try another search term or explore one of our frequently referenced tender practice areas below:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
                    {popularKeywords.map((kw, kwIdx) => (
                      <button
                        key={kwIdx}
                        type="button"
                        onClick={() => {
                          setSearchQuery(kw.query);
                          setSearchTypeFilter('all');
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 hover:text-amber-900 border border-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                      >
                        {kw.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Footer */}
            <div className="p-3 sm:px-5 sm:py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono font-bold text-slate-700">↑↓</kbd>
                  <span className="text-[11px]">Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono font-bold text-slate-700">↵</kbd>
                  <span className="text-[11px]">Select</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono font-bold text-slate-700">ESC</kbd>
                  <span className="text-[11px]">Close</span>
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                BidTender4U Search
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Slide-over Full Navigation Drawer Overlay with smooth CSS transitions */}
      <div 
        className={`nav-drawer-overlay ${menuOpen ? 'nav-drawer-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {/* Dimmed backdrop with smooth opacity transition */}
        <div
          className="nav-drawer-backdrop"
          onClick={closeMenu}
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10 pointer-events-auto">
          <div className="nav-drawer-panel w-screen max-w-md bg-white text-slate-900 shadow-2xl border-l border-slate-200 flex flex-col">
              {/* Drawer Top Header */}
              <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-amber-700 shadow-xs">
                    <Menu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-base text-slate-900">
                      Navigation Menu
                    </h3>
                    <p className="text-[11px] text-slate-500 font-mono font-bold">
                      Explore All Bid Tender 4 U Services
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-white border border-slate-200 transition-colors cursor-pointer shadow-xs"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* In-Drawer Quick Search Bar */}
              <div className="p-4 bg-slate-100/70 border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    setIsSearchOpen(true);
                  }}
                  className="w-full p-2.5 rounded-xl bg-white border border-slate-300 hover:border-amber-500 text-slate-600 flex items-center justify-between gap-2 text-xs font-semibold shadow-2xs transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-amber-700 stroke-[2.5]" />
                    <span>Search services, blogs, FAQs...</span>
                  </div>
                  <kbd className="text-[10px] font-mono bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-slate-600 font-bold">
                    ⌘K
                  </kbd>
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 scrollbar-thin">
                {/* Get Free Summary of Tender Card in Navigation Drawer */}
                <div
                  onClick={() => {
                    closeMenu();
                    if (onOpenFreeSummaryModal) onOpenFreeSummaryModal();
                  }}
                  className="p-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100/80 border border-amber-300 flex items-center justify-between gap-3 shadow-xs cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black text-slate-900 block">
                          Get Free Summary of Tender
                        </span>
                        <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-mono">
                          Free on WhatsApp
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-600 font-medium block">
                        Upload document & get manual summary shortly on WhatsApp
                      </span>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform shrink-0 stroke-[3]" />
                </div>

                {/* Official Statutory Letters & Proforma Formats Card in Drawer */}
                {onOpenLettersModal && (
                  <div
                    onClick={() => {
                      closeMenu();
                      onOpenLettersModal();
                    }}
                    className="p-3.5 rounded-2xl bg-[#F8F9FA] hover:bg-slate-100 border border-[#D9E0E8] hover:border-[#D4AF70] flex items-center justify-between gap-3 shadow-xs cursor-pointer group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#1D3557] text-[#D4AF70] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <FileCheck className="w-4 h-4 text-[#D4AF70]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-black text-[#1D3557] block">
                            Sample Letters & Formats
                          </span>
                          <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-[#1D3557] text-white font-mono">
                            Proforma
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-600 font-medium block">
                          OEM Authorization (MAF), GFR 173(i) & Acceptance letters
                        </span>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#1D3557] group-hover:translate-x-1 transition-transform shrink-0 stroke-[3]" />
                  </div>
                )}

                {/* Official UPI & Payment Details Card in Drawer */}
                {onOpenPaymentModal && (
                  <div
                    onClick={() => {
                      closeMenu();
                      onOpenPaymentModal();
                    }}
                    className="p-3.5 rounded-2xl bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-200 hover:border-emerald-300 flex items-center justify-between gap-3 shadow-xs cursor-pointer group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <QrCode className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-black text-emerald-950 block">
                            Bank & UPI Payment Details
                          </span>
                          <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-emerald-600 text-white font-mono">
                            ICICI Verified
                          </span>
                        </div>
                        <span className="text-[10px] text-emerald-800 font-medium block font-mono">
                          singhbaldev70368-2@okicici
                        </span>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform shrink-0 stroke-[3]" />
                  </div>
                )}

                {/* Tenders by Keywords & Trades Card in Drawer */}
                <div
                  onClick={() => {
                    handleNavClick('tenders-by-keywords');
                  }}
                  className="p-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100/80 border border-amber-300 flex items-center justify-between gap-3 shadow-xs cursor-pointer group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                      <Hash className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-black text-slate-900 block">
                          Tenders by Keywords & Trades
                        </span>
                        <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-mono">
                          Directory
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-600 font-medium block">
                        Browse all goods, works & services with 1-click inquiry
                      </span>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-amber-800 group-hover:translate-x-1 transition-transform shrink-0 stroke-[3]" />
                </div>

                {navigationSections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 font-mono px-1">
                      {section.title}
                    </span>

                    <div className="grid gap-1.5">
                      {section.links.map((link) => {
                        const IconComponent = link.icon;
                        const isActive = 
                          currentPage === link.id ||
                          (link.id === 'services' && currentPage === 'tender-bidding-consultancy') ||
                          (link.id === 'gem-documents' && currentPage === 'gem-registration') ||
                          (link.id === 'contact' && currentPage === 'contact-us');

                        return (
                          <a
                            key={link.id}
                            href={link.path}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(link.id);
                            }}
                            className={`w-full p-2.5 sm:p-3 rounded-xl text-left transition-all flex items-start gap-3 cursor-pointer group ${
                              isActive
                                ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                                : 'bg-slate-50 hover:bg-slate-100/80 border border-slate-200 hover:border-slate-300 text-slate-800'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${
                              isActive
                                ? 'bg-slate-950 text-amber-400 border-slate-950'
                                : 'bg-white text-amber-700 border-slate-200 group-hover:scale-105 transition-all shadow-xs'
                            }`}>
                              <IconComponent className="w-4 h-4" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <span className={`text-xs sm:text-sm font-black truncate ${isActive ? 'text-slate-950' : 'text-slate-900'}`}>
                                  {link.label}
                                </span>
                                {isActive && (
                                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-amber-400 font-bold">
                                    Current
                                  </span>
                                )}
                              </div>
                              <p className={`text-[11px] font-medium truncate mt-0.5 ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>
                                {link.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Interactive Compliance Audit Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      closeMenu();
                      onOpenChecklistModal();
                    }}
                    className="w-full p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between cursor-pointer group shadow-xs"
                  >
                    <div className="flex items-center gap-2.5 text-left">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-black text-slate-900 block">
                          Interactive Compliance Checklist
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          Audit Packet-A & GFR criteria in 2 mins
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Drawer Bottom Contact Strip */}
              <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-3">
                <a
                  href={defaultWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 9726407267)</span>
                </a>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Isanpur, Ahmedabad, Gujarat</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="font-mono font-bold text-amber-700 hover:underline">
                    {BUSINESS_INFO.displayPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
