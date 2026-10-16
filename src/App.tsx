import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { CategoriesShowcase } from './components/CategoriesShowcase';
import { TenderEnablersSection } from './components/TenderEnablersSection';
import { GeMDocumentsSection } from './components/GeMDocumentsSection';
import { GeMProductListing } from './components/GeMProductListing';
import { OEMServices } from './components/OEMServices';
import { AboutUs } from './components/AboutUs';
import { ServicesBento } from './components/ServicesBento';
import { BiddingJourneyStepper } from './components/BiddingJourneyStepper';
import { PortalsMatrix } from './components/PortalsMatrix';
import { TenderInquirySection } from './components/TenderInquirySection';
import { TenderInquiryModal } from './components/TenderInquiryModal';
import { AdminLeadsModal } from './components/AdminLeadsModal';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { DocumentChecklistModal } from './components/DocumentChecklistModal';
import { ClientSuccessStories } from './components/ClientSuccessStories';
import { ExpertTenderInsights } from './components/ExpertTenderInsights';
import { LocationLandingHub } from './components/LocationLandingHub';
import { SitemapDirectory } from './components/SitemapDirectory';
import { MobileBottomNav } from './components/MobileBottomNav';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { FreeTenderSummaryModal } from './components/FreeTenderSummaryModal';
import { ProcurementBlog } from './components/ProcurementBlog';
import { TendersByKeywords } from './components/TendersByKeywords';
import { StatutoryLettersModal } from './components/StatutoryLettersModal';
import { LiveTenderRadarModal } from './components/LiveTenderRadarModal';
import { GoogleMapsLocatorModal } from './components/GoogleMapsLocatorModal';
import { PaymentDetailsModal } from './components/PaymentDetailsModal';
import { SeoHead } from './components/SeoHead';
import { usePageSeo, applySeoToDocument, resolvePageMetadata } from './lib/seoManager';
import { ArrowLeft, ArrowRight, ShieldCheck, Phone, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from './lib/constants';
import { ROUTES_SEO } from './lib/seoData';
import { useTheme } from './context/ThemeContext';

export type PageId = 
  | 'home' 
  | 'tender-bidding-consultancy'
  | 'gem-registration'
  | 'gem-product-listing'
  | 'oem-services'
  | 'about-us'
  | 'contact-us'
  | 'services'
  | 'gem-documents'
  | 'contact'
  | 'locations' 
  | 'insights' 
  | 'stories' 
  | 'certifications' 
  | 'categories' 
  | 'portals' 
  | 'faqs' 
  | 'sitemap' 
  | 'blog'
  | 'free-tender-summary'
  | 'payment-details'
  | 'gem-tender-consultancy'
  | 'msme-startup-tenders'
  | 'iso-dsc-certifications'
  | 'tenders-by-keywords';

function getInitialRouteState(): {
  page: PageId;
  blogSlug?: string;
  keywordSlug?: string;
  locationId: string;
  isFreeSummary: boolean;
  isPayment: boolean;
} {
  if (typeof window === 'undefined') {
    return { page: 'home', blogSlug: undefined, keywordSlug: undefined, locationId: 'all-india', isFreeSummary: false, isPayment: false };
  }
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  const hash = window.location.hash.replace('#', '').toLowerCase();

  const isFreeSummary =
    pathname === 'free-tender-summary' ||
    pathname === 'tender-summary' ||
    hash === 'tender-summary' ||
    hash === 'free-summary' ||
    hash === 'summary';

  const isPayment =
    pathname === 'payment' ||
    pathname === 'payment-details' ||
    pathname === 'pay' ||
    hash === 'payment' ||
    hash === 'payment-details' ||
    hash === 'pay';

  if (pathname.startsWith('blog/')) {
    const slug = pathname.replace('blog/', '');
    return { page: 'blog', blogSlug: slug, locationId: 'all-india', isFreeSummary, isPayment };
  }
  if (hash.startsWith('blog-')) {
    const slug = hash.replace('blog-', '');
    return { page: 'blog', blogSlug: slug, locationId: 'all-india', isFreeSummary, isPayment };
  }

  if (pathname.startsWith('locations/') || hash.startsWith('locations-')) {
    const locId = pathname.startsWith('locations/')
      ? pathname.replace('locations/', '')
      : hash.replace('locations-', '');
    return { page: 'locations', blogSlug: undefined, keywordSlug: undefined, locationId: locId, isFreeSummary, isPayment };
  }

  if (pathname.startsWith('tenders-by-keywords/') || hash.startsWith('tenders-by-keywords-')) {
    const kwSlug = pathname.startsWith('tenders-by-keywords/')
      ? pathname.replace('tenders-by-keywords/', '')
      : hash.replace('tenders-by-keywords-', '');
    return { page: 'tenders-by-keywords', keywordSlug: kwSlug, blogSlug: undefined, locationId: 'all-india', isFreeSummary, isPayment };
  }

  if (pathname === 'tenders-by-keywords' || hash === 'tenders-by-keywords') {
    return { page: 'tenders-by-keywords', keywordSlug: undefined, blogSlug: undefined, locationId: 'all-india', isFreeSummary, isPayment };
  }

  const rawRoute = pathname || hash;
  if (!rawRoute || rawRoute === 'home') {
    return { page: 'home', blogSlug: undefined, keywordSlug: undefined, locationId: 'all-india', isFreeSummary, isPayment };
  }

  const normalizedRoute: PageId =
    rawRoute === 'contact' ? 'contact-us' :
    rawRoute === 'about' ? 'about-us' :
    (rawRoute as PageId);

  return { page: normalizedRoute, blogSlug: undefined, keywordSlug: undefined, locationId: 'all-india', isFreeSummary, isPayment };
}

export default function App() {
  const { theme } = useTheme();
  const initialRoute = useMemo(() => getInitialRouteState(), []);
  const [currentPage, setCurrentPage] = useState<PageId>(initialRoute.page);
  const [blogArticleSlug, setBlogArticleSlug] = useState<string | undefined>(initialRoute.blogSlug);
  const [selectedKeywordSlug, setSelectedKeywordSlug] = useState<string | undefined>(initialRoute.keywordSlug);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [isFreeSummaryOpen, setIsFreeSummaryOpen] = useState(initialRoute.isFreeSummary);
  const [isLettersModalOpen, setIsLettersModalOpen] = useState(false);
  const [defaultLetterType, setDefaultLetterType] = useState<'oem' | 'representation' | 'acceptance'>('oem');
  const [isRadarModalOpen, setIsRadarModalOpen] = useState(false);
  const [radarInitialQuery, setRadarInitialQuery] = useState('');
  const [isMapsModalOpen, setIsMapsModalOpen] = useState(false);
  const [mapsInitialQuery, setMapsInitialQuery] = useState('');
  const [isLeadsModalOpen, setIsLeadsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(initialRoute.isPayment);
  const [selectedService, setSelectedService] = useState<string>('Tender Document Analysis & Eligibility Audit');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedLocationId, setSelectedLocationId] = useState<string>(initialRoute.locationId);

  // React Hook: Dynamically synchronize canonical, Open Graph, Twitter cards, and Schema.org JSON-LD
  usePageSeo({
    page:
      currentPage === 'locations' && selectedLocationId && selectedLocationId !== 'all-india'
        ? `locations/${selectedLocationId}`
        : currentPage === 'blog' && blogArticleSlug
        ? `blog/${blogArticleSlug}`
        : currentPage,
    articleSlug: blogArticleSlug,
  });

  // Imperative helper for immediate document head synchronization on route change
  const updateDocumentHead = (page: string, slug?: string) => {
    const meta = resolvePageMetadata(page, slug);
    applySeoToDocument(meta);
  };

  // Synchronize with URL pathname and hash on load, popstate, and hashchange
  useEffect(() => {
    const parseLocation = () => {
      const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
      const hash = window.location.hash.replace('#', '').toLowerCase();

      if (hash === 'admin-leads') {
        setIsLeadsModalOpen(true);
        return;
      }
      if (
        pathname === 'free-tender-summary' ||
        pathname === 'tender-summary' ||
        hash === 'tender-summary' ||
        hash === 'free-summary' ||
        hash === 'summary'
      ) {
        setIsFreeSummaryOpen(true);
      }
      if (
        pathname === 'payment' ||
        pathname === 'payment-details' ||
        pathname === 'pay' ||
        hash === 'payment' ||
        hash === 'payment-details' ||
        hash === 'pay'
      ) {
        setIsPaymentModalOpen(true);
      }

      // Handle blog article paths: /blog/slug or #blog-slug
      if (pathname.startsWith('blog/')) {
        const slug = pathname.replace('blog/', '');
        setBlogArticleSlug(slug);
        setCurrentPage('blog');
        updateDocumentHead('blog', slug);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (hash.startsWith('blog-')) {
        const slug = hash.replace('blog-', '');
        setBlogArticleSlug(slug);
        setCurrentPage('blog');
        updateDocumentHead('blog', slug);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Handle locations paths: /locations/slug or #locations-slug
      if (pathname.startsWith('locations/') || hash.startsWith('locations-')) {
        const locId = pathname.startsWith('locations/')
          ? pathname.replace('locations/', '')
          : hash.replace('locations-', '');
        setSelectedLocationId(locId);
        setCurrentPage('locations');
        setBlogArticleSlug(undefined);
        setSelectedKeywordSlug(undefined);
        updateDocumentHead('locations', locId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Handle tenders-by-keywords paths: /tenders-by-keywords or /tenders-by-keywords/slug
      if (pathname.startsWith('tenders-by-keywords/') || hash.startsWith('tenders-by-keywords-')) {
        const kwSlug = pathname.startsWith('tenders-by-keywords/')
          ? pathname.replace('tenders-by-keywords/', '')
          : hash.replace('tenders-by-keywords-', '');
        setSelectedKeywordSlug(kwSlug);
        setCurrentPage('tenders-by-keywords');
        setBlogArticleSlug(undefined);
        updateDocumentHead(`tenders-by-keywords/${kwSlug}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (pathname === 'tenders-by-keywords' || hash === 'tenders-by-keywords') {
        setSelectedKeywordSlug(undefined);
        setCurrentPage('tenders-by-keywords');
        setBlogArticleSlug(undefined);
        updateDocumentHead('tenders-by-keywords');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Check clean pathname first, fallback to hash
      const rawRoute = pathname || hash;
      if (!rawRoute || rawRoute === 'home') {
        setCurrentPage('home');
        setBlogArticleSlug(undefined);
        setSelectedKeywordSlug(undefined);
        updateDocumentHead('home');
        return;
      }

      // Normalize aliases
      const normalizedRoute: PageId =
        rawRoute === 'contact' ? 'contact-us' :
        rawRoute === 'about' ? 'about-us' :
        (rawRoute as PageId);

      const validPages: PageId[] = [
        'home', 'tender-bidding-consultancy', 'gem-registration', 'gem-product-listing',
        'oem-services', 'about-us', 'contact-us', 'locations', 'insights', 'stories',
        'services', 'gem-documents', 'contact',
        'certifications', 'categories', 'portals', 'faqs', 'sitemap', 'blog',
        'free-tender-summary', 'payment-details', 'gem-tender-consultancy',
        'msme-startup-tenders', 'iso-dsc-certifications', 'tenders-by-keywords'
      ];

      if (validPages.includes(normalizedRoute)) {
        if (normalizedRoute !== 'blog') {
          setBlogArticleSlug(undefined);
        }
        setCurrentPage(normalizedRoute);
        updateDocumentHead(normalizedRoute);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        updateDocumentHead('home');
      }
    };

    parseLocation();

    window.addEventListener('popstate', parseLocation);
    window.addEventListener('hashchange', parseLocation);
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'l') {
        setIsLeadsModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', parseLocation);
      window.removeEventListener('hashchange', parseLocation);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navigateTo = (page: string, articleSlug?: string) => {
    let targetPath = '/';
    let targetPage: PageId = 'home';

    if (page === 'blog' && articleSlug) {
      targetPath = `/blog/${articleSlug}`;
      setBlogArticleSlug(articleSlug);
      setCurrentPage('blog');
      window.history.pushState({}, '', targetPath);
      updateDocumentHead('blog', articleSlug);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (page === 'tenders-by-keywords') {
      if (articleSlug) {
        targetPath = `/tenders-by-keywords/${articleSlug}`;
        setSelectedKeywordSlug(articleSlug);
      } else {
        targetPath = '/tenders-by-keywords';
        setSelectedKeywordSlug(undefined);
      }
      setBlogArticleSlug(undefined);
      setCurrentPage('tenders-by-keywords');
      window.history.pushState({}, '', targetPath);
      updateDocumentHead(articleSlug ? `tenders-by-keywords/${articleSlug}` : 'tenders-by-keywords');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const clean = page.toLowerCase().replace(/^\/+|\/+$/g, '');
    if (clean === 'payment' || clean === 'payment-details' || clean === 'pay') {
      setIsPaymentModalOpen(true);
      targetPage = 'payment-details';
      targetPath = '/payment-details';
    } else if (clean === 'free-tender-summary' || clean === 'tender-summary' || clean === 'free-summary' || clean === 'summary') {
      setIsFreeSummaryOpen(true);
      targetPage = 'free-tender-summary';
      targetPath = '/free-tender-summary';
    } else if (clean === 'gem-registration') {
      targetPage = 'gem-registration';
      targetPath = '/gem-registration';
    } else if (clean === 'gem-documents') {
      targetPage = 'gem-documents';
      targetPath = '/gem-documents';
    } else if (clean === 'gem-product-listing') {
      targetPage = 'gem-product-listing';
      targetPath = '/gem-product-listing';
    } else if (clean === 'oem-services') {
      targetPage = 'oem-services';
      targetPath = '/oem-services';
    } else if (clean === 'services') {
      targetPage = 'services';
      targetPath = '/services';
    } else if (clean === 'tender-bidding-consultancy') {
      targetPage = 'tender-bidding-consultancy';
      targetPath = '/tender-bidding-consultancy';
    } else if (clean === 'gem-tender-consultancy') {
      targetPage = 'gem-tender-consultancy';
      targetPath = '/gem-tender-consultancy';
    } else if (clean === 'about-us' || clean === 'about') {
      targetPage = 'about-us';
      targetPath = '/about-us';
    } else if (clean === 'contact-us' || clean === 'contact') {
      targetPage = 'contact-us';
      targetPath = '/contact-us';
    } else if (clean === 'home' || !clean) {
      targetPage = 'home';
      targetPath = '/';
    } else {
      targetPage = clean as PageId;
      targetPath = `/${clean}`;
    }

    setBlogArticleSlug(undefined);
    setCurrentPage(targetPage);
    window.history.pushState({}, '', targetPath);
    updateDocumentHead(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiryForm = (category?: string, service?: string, city?: string) => {
    if (category) setSelectedCategory(category);
    if (service) setSelectedService(service);
    if (city) setSelectedCity(city);
    setIsInquiryModalOpen(true);
  };

  const handleSelectServiceFromBento = (serviceTitle: string) => {
    handleOpenInquiryForm(undefined, serviceTitle);
  };

  const handleSelectCategory = (categoryName: string) => {
    handleOpenInquiryForm(categoryName, undefined);
  };

  const handleSelectLocationFromSitemap = (locId: string) => {
    setSelectedLocationId(locId);
    navigateTo('locations');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 transition-colors duration-200 app-root">
      {/* 3-Zone Header with Decongested Hamburger Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenChecklistModal={() => setIsChecklistOpen(true)}
        onScrollToForm={() => handleOpenInquiryForm()}
        onOpenFreeSummaryModal={() => setIsFreeSummaryOpen(true)}
        onOpenLettersModal={() => {
          setDefaultLetterType('oem');
          setIsLettersModalOpen(true);
        }}
        onOpenRadarModal={(q) => {
          setRadarInitialQuery(q || '');
          setIsRadarModalOpen(true);
        }}
        onOpenMapsModal={(q) => {
          setMapsInitialQuery(q || '');
          setIsMapsModalOpen(true);
        }}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Main Multi-Page View Container */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* PAGE 1: HOME (Front page is clean, fast, and simple) */}
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenInquiryModal={handleOpenInquiryForm}
            onOpenChecklistModal={() => setIsChecklistOpen(true)}
            onOpenFreeSummaryModal={() => setIsFreeSummaryOpen(true)}
            onOpenRadarModal={(q) => {
              setRadarInitialQuery(q || '');
              setIsRadarModalOpen(true);
            }}
            onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
          />
        )}

        {/* PAGE: EXPERT TENDER INSIGHTS & GFR GUIDES */}
        {currentPage === 'insights' && (
          <div className="animate-in fade-in duration-200">
            {/* Page Header Banner */}
            <div className="bg-white border-b border-slate-200 py-12 px-4 text-center shadow-xs">
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-extrabold mb-3 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  Expert Tender Insights & GFR Guides
                </h1>
                <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto">
                  Authoritative legal guides on GFR 2017 Rule 170, GeM 4.0 GTC, EMD exemptions, and winning bidding strategies.
                </p>
              </div>
            </div>

            <ExpertTenderInsights onOpenInquiry={handleOpenInquiryForm} />
          </div>
        )}

        {/* PAGE: SUCCESS STORIES & CASE STUDIES */}
        {currentPage === 'stories' && (
          <div className="animate-in fade-in duration-200">
            {/* Page Header Banner */}
            <div className="bg-white border-b border-slate-200 py-12 px-4 text-center shadow-xs">
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-extrabold mb-3 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  Client Success Stories & Bid Case Studies
                </h1>
                <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto">
                  Proven bid outcomes: See how contractors, MSMEs, and suppliers won contracts on GeM, nProcure, and SPPP with our assistance.
                </p>
              </div>
            </div>

            <ClientSuccessStories onOpenInquiry={handleOpenInquiryForm} />
          </div>
        )}

        {/* PAGE: GEM REGISTRATION DOCUMENTS (Full Statutory Checklist) */}
        {(currentPage === 'gem-documents' || currentPage === 'gem-registration') && (
          <div className="animate-in fade-in duration-200">
            {/* Page Header Banner */}
            <div className="bg-white border-b border-slate-200 py-12 px-4 text-center shadow-xs">
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-extrabold mb-3 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  Document Requirements for GeM Registration
                </h1>
                <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto">
                  Statutory documents for Primary Sellers, OEMs, and Resellers on Government e-Marketplace (GeM 4.0).
                </p>
              </div>
            </div>

            <GeMDocumentsSection onOpenInquiry={handleOpenInquiryForm} />
          </div>
        )}

        {/* PAGE: GEM PRODUCT LISTING & CATALOG MANAGEMENT */}
        {currentPage === 'gem-product-listing' && (
          <div className="animate-in fade-in duration-200">
            <GeMProductListing
              onNavigate={navigateTo}
              onOpenInquiry={handleOpenInquiryForm}
            />
          </div>
        )}

        {/* PAGE: OEM SERVICES & BRAND APPROVAL */}
        {currentPage === 'oem-services' && (
          <div className="animate-in fade-in duration-200">
            <OEMServices
              onNavigate={navigateTo}
              onOpenInquiry={handleOpenInquiryForm}
              onOpenLettersModal={(type) => {
                setDefaultLetterType(type || 'oem');
                setIsLettersModalOpen(true);
              }}
            />
          </div>
        )}

        {/* PAGE: ABOUT US (Company Track Record, Ahmedabad HQ) */}
        {currentPage === 'about-us' && (
          <div className="animate-in fade-in duration-200">
            <AboutUs
              onNavigate={navigateTo}
              onOpenInquiry={handleOpenInquiryForm}
              onOpenMapsModal={(q) => {
                setMapsInitialQuery(q || '');
                setIsMapsModalOpen(true);
              }}
            />
          </div>
        )}

        {/* PAGE 2: SERVICES & TENDER BIDDING CONSULTANCY */}
        {(currentPage === 'services' || currentPage === 'tender-bidding-consultancy') && (
          <div className="animate-in fade-in duration-200">
            {/* Page Header Banner */}
            <div className="bg-white border-b border-slate-200 py-12 px-4 text-center shadow-xs">
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-extrabold mb-3 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  Government Tender Bidding Consultancy Services
                </h1>
                <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto">
                  From GeM Portal bidding to state-level e-procurement (nProcure, SPPP, CPPP), our 6 specialized practice areas guarantee procedural compliance.
                </p>
              </div>
            </div>

            {/* 7-Stage Bidding Journey Progress Stepper */}
            <BiddingJourneyStepper onOpenInquiry={handleOpenInquiryForm} />

            <ServicesBento onSelectService={handleSelectServiceFromBento} />

            {/* Quick Action Bottom Strip */}
            <div className="p-8 bg-slate-50 border-t border-slate-200 text-center">
              <h3 className="font-display text-xl font-extrabold text-slate-900 mb-2">Need a Custom Tender Package?</h3>
              <p className="text-xs text-slate-600 font-medium mb-5 max-w-lg mx-auto">
                Connect directly with our senior consultants in Ahmedabad for a tailored quotation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => handleOpenInquiryForm()}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors cursor-pointer shadow-sm animate-amber-pulse"
                >
                  Submit Inquiry Now
                </button>
                <button
                  onClick={() => navigateTo('gem-registration')}
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer shadow-sm"
                >
                  GeM Registration Docs
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 3: CERTIFICATIONS & DSC (All Types ISO, DSC Token & GeM Codes) */}
        {currentPage === 'certifications' && (
          <div className="animate-in fade-in duration-200">
            {/* Page Header Banner */}
            <div className="bg-white border-b border-slate-200 py-12 px-4 text-center shadow-xs">
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-extrabold mb-3 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  ISO Certification, Class-3 DSC & GeM Authorization
                </h1>
                <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto">
                  Instant eligibility boosters: All types of ISO certifications (9001, 14001, 45001, 27001), 30-minute Class-3 DSC tokens, and official GeM OEM authorization codes.
                </p>
              </div>
            </div>

            <TenderEnablersSection
              onSelectEnabler={(enablerTitle) => handleOpenInquiryForm(undefined, enablerTitle)}
            />
          </div>
        )}

        {/* PAGE 4: CATEGORIES (12+ Major Industry Verticals) */}
        {currentPage === 'categories' && (
          <div className="animate-in fade-in duration-200">
            {/* Page Header Banner */}
            <div className="bg-white border-b border-slate-200 py-12 px-4 text-center shadow-xs">
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-extrabold mb-3 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  Tender Industry & Product Categories
                </h1>
                <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto">
                  We assist contractors and vendors in bidding across 12+ government procurement categories on GeM, CPPP, and State Portals.
                </p>
              </div>
            </div>

            <CategoriesShowcase onSelectCategory={handleSelectCategory} />
          </div>
        )}

        {/* PAGE 5: PORTALS (GeM, nProcure, SPPP, CPPP, IREPS, Defense) */}
        {currentPage === 'portals' && (
          <div className="animate-in fade-in duration-200">
            {/* Page Header Banner */}
            <div className="bg-white border-b border-slate-200 py-12 px-4 text-center shadow-xs">
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-extrabold mb-3 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  E-Procurement Portals Covered
                </h1>
                <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto">
                  Pan-India coverage: Central ministries, state departments, railways, defense, and public sector undertakings.
                </p>
              </div>
            </div>

            <PortalsMatrix />
          </div>
        )}

        {/* PAGE 6: FAQS (Searchable Tender Knowledge Hub) */}
        {currentPage === 'faqs' && (
          <div className="animate-in fade-in duration-200">
            {/* Page Header Banner */}
            <div className="bg-white border-b border-slate-200 py-12 px-4 text-center shadow-xs">
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-extrabold mb-3 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  Tender FAQs & Regulatory Guidelines
                </h1>
                <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto">
                  Key answers regarding EMD exemption (GFR Rule 170), Class-3 DSC rules, GeM cautions, and technical qualification criteria.
                </p>
              </div>
            </div>

            <FAQSection />
          </div>
        )}

        {/* PAGE 7: CONTACT / INQUIRE (Dedicated Document Submission Desk) */}
        {(currentPage === 'contact' || currentPage === 'contact-us') && (
          <div className="animate-in fade-in duration-200">
            {/* Page Header Banner */}
            <div className="bg-white border-b border-slate-200 py-12 px-4 text-center shadow-xs">
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => navigateTo('home')}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-extrabold mb-3 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                  Contact & Submit Tender Document
                </h1>
                <p className="mt-3 text-slate-600 font-medium text-sm sm:text-base max-w-2xl mx-auto">
                  Submit your tender document (NIT/RFP) for a preliminary eligibility review or visit our registered office in Ahmedabad, Gujarat.
                </p>
              </div>
            </div>

            <TenderInquirySection
              preselectedService={selectedService}
              preselectedCategory={selectedCategory}
              onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
            />
          </div>
        )}

        {/* PAGE: DYNAMIC SITEMAP & DEEP CRAWL DIRECTORY */}
        {currentPage === 'sitemap' && (
          <div className="animate-in fade-in duration-200">
            <SitemapDirectory
              onNavigate={navigateTo}
              onSelectLocation={handleSelectLocationFromSitemap}
              onOpenInquiry={handleOpenInquiryForm}
            />
          </div>
        )}

        {/* PAGE: ALL INDIA, 28 STATES & 50+ CITIES GEOGRAPHIC SEO HUB */}
        {currentPage === 'locations' && (
          <div className="animate-in fade-in duration-200">
            <LocationLandingHub
              onOpenInquiry={handleOpenInquiryForm}
              onOpenMapsModal={(q) => {
                setMapsInitialQuery(q || '');
                setIsMapsModalOpen(true);
              }}
              initialLocationId={selectedLocationId}
              onLocationChange={(locId) => {
                setSelectedLocationId(locId);
                updateDocumentHead(`locations/${locId}`);
              }}
            />
          </div>
        )}

        {/* PAGE: GOVERNMENT PROCUREMENT BLOG (Long-form regulatory analysis & tender trends) */}
        {currentPage === 'blog' && (
          <div className="animate-in fade-in duration-200">
            <ProcurementBlog
              onNavigate={navigateTo}
              onOpenInquiry={handleOpenInquiryForm}
              onOpenFreeSummaryModal={() => setIsFreeSummaryOpen(true)}
              initialArticleSlug={blogArticleSlug}
              onArticleChange={(slug) => {
                setBlogArticleSlug(slug || undefined);
                if (slug) {
                  updateDocumentHead('blog', slug);
                } else {
                  updateDocumentHead('blog');
                }
              }}
            />
          </div>
        )}

        {/* PAGE: TENDERS BY KEYWORDS & TRADE SECTOR DIRECTORY */}
        {currentPage === 'tenders-by-keywords' && (
          <div className="animate-in fade-in duration-200">
            <TendersByKeywords
              onOpenInquiry={handleOpenInquiryForm}
              onNavigate={navigateTo}
              initialKeywordSlug={selectedKeywordSlug}
            />
          </div>
        )}
      </main>

      {/* Authoritative Footer with Full Site Navigation */}
      <Footer
        onOpenChecklistModal={() => setIsChecklistOpen(true)}
        onScrollToForm={() => handleOpenInquiryForm()}
        onNavigate={navigateTo}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
      />

      {/* Free Tender Summary Diagnostic Modal */}
      <FreeTenderSummaryModal
        isOpen={isFreeSummaryOpen}
        onClose={() => setIsFreeSummaryOpen(false)}
        onOpenInquiry={handleOpenInquiryForm}
        onOpenRadarModal={(q) => {
          setRadarInitialQuery(q || '');
          setIsRadarModalOpen(true);
        }}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
      />

      {/* Instant Tender Inquiry Popup Modal (Opens from any button) */}
      <TenderInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialCategory={selectedCategory}
        initialService={selectedService}
        initialCity={selectedCity}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
      />

      {/* Admin Leads & Inquiries Database Modal (Hidden from public; open with Ctrl+Shift+L or #admin-leads) */}
      <AdminLeadsModal
        isOpen={isLeadsModalOpen}
        onClose={() => setIsLeadsModalOpen(false)}
      />

      {/* Interactive Compliance Audit Modal */}
      <DocumentChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        onOpenLettersModal={() => setIsLettersModalOpen(true)}
      />

      {/* Official Tender Letters & Statutory Proforma Formats Modal */}
      <StatutoryLettersModal
        isOpen={isLettersModalOpen}
        onClose={() => setIsLettersModalOpen(false)}
        defaultLetter={defaultLetterType}
        onOpenInquiry={handleOpenInquiryForm}
      />

      {/* Live Tender & Regulatory Radar (Google Search Grounding) Modal */}
      <LiveTenderRadarModal
        isOpen={isRadarModalOpen}
        onClose={() => setIsRadarModalOpen(false)}
        initialQuery={radarInitialQuery}
        onOpenInquiry={handleOpenInquiryForm}
      />

      {/* Google Maps Grounded Procurement & Office Locator Modal */}
      <GoogleMapsLocatorModal
        isOpen={isMapsModalOpen}
        onClose={() => setIsMapsModalOpen(false)}
        initialQuery={mapsInitialQuery}
        onOpenInquiry={handleOpenInquiryForm}
      />

      {/* Official UPI Payment Details Modal */}
      <PaymentDetailsModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        serviceName={selectedService}
      />

      {/* Floating Instant WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Mobile Sticky Bottom Navigation Bar (Direct 1-tap switching on mobile) */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenChecklistModal={() => setIsChecklistOpen(true)}
        onScrollToForm={() => handleOpenInquiryForm()}
        onOpenFreeSummaryModal={() => setIsFreeSummaryOpen(true)}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
    </div>
  );
}
