import React, { useState, useRef, useEffect } from 'react';
import { 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  SlidersHorizontal,
  LayoutGrid,
  ScrollText,
  FileCheck2,
  ExternalLink,
  X
} from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

export interface TestimonialItem {
  id: string;
  clientName: string;
  designation: string;
  companyName: string;
  location: string;
  category: 'Civil & Infra' | 'Healthcare & Medical' | 'GeM & Manpower' | 'Solar & Electrical' | 'IT & Smart City';
  portal: string;
  bidValue: string;
  starRating: number;
  reviewDate: string;
  verificationBadge: {
    status: 'Verified Govt Contractor' | 'Verified MSME Udyam' | 'Verified GSTIN & GeM' | 'Class-3 DSC Verified' | 'DPIIT Startup Recognized';
    verifiedContract: string;
    tenderRef: string;
    authority: string;
  };
  headline: string;
  reviewText: string;
  keyWinMetric: string;
  tags: string[];
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Rajeshwar Patel',
    designation: 'Managing Director',
    companyName: 'Patel Infracon & Developers Pvt Ltd',
    location: 'Ahmedabad, Gujarat',
    category: 'Civil & Infra',
    portal: 'nProcure Gujarat (Roads & Buildings Dept)',
    bidValue: '₹4.85 Crore',
    starRating: 5,
    reviewDate: 'Completed & Awarded · Last Month',
    verificationBadge: {
      status: 'Verified Govt Contractor',
      verifiedContract: '₹4.85 Cr Municipal Road Resurfacing & CC Paving',
      tenderRef: 'R&B/AHM/2024/NIT-4892',
      authority: 'Govt of Gujarat Roads & Buildings Dept',
    },
    headline: 'Eliminated technical disqualifications & locked our ₹4.85 Cr tender without stress',
    reviewText: 'We had lost two state PWD bids earlier because of clerical errors in our turnover documents and missing CA UDIN certificates. The Bid Tender 4 U team completely restructured Packet-A, conducted a dry-run portal audit 24 hours prior to locking, and helped us secure 100% technical qualification.',
    keyWinMetric: '100% Technical Bid Acceptance with Zero Queries',
    tags: ['Civil Works', 'nProcure', 'CA UDIN Audit', 'PWD Gujarat'],
  },
  {
    id: 'test-2',
    clientName: 'Dr. N. K. Sharma',
    designation: 'Managing Partner',
    companyName: 'BioMed Healthcare Supplies LLP',
    location: 'Jaipur, Rajasthan',
    category: 'Healthcare & Medical',
    portal: 'SPPP Rajasthan & eProc Portal',
    bidValue: '₹2.30 Crore',
    starRating: 5,
    reviewDate: 'Verified Award · Recent',
    verificationBadge: {
      status: 'Verified MSME Udyam',
      verifiedContract: '₹2.30 Cr ICU Ventilators & Multipara Monitors Supply',
      tenderRef: 'MMS/RAJ/HOSP-EQUIP/2024/718',
      authority: 'Rajasthan Medical Services Corp (RMSCL)',
    },
    headline: 'Arranged fast-track ISO 13485 & OEM authorization code in under 48 hours',
    reviewText: 'With only a 3-day window before tender close, we were stuck on mandatory ISO 13485 certification and OEM authorization codes for our medical hospital bid. Bid Tender 4 U drafted our compliance matrix, verified technical datasheets against tender specs, and executed cryptographic locking flawlessly.',
    keyWinMetric: 'Qualified in Technical Round in First Attempt',
    tags: ['Medical Equipment', 'ISO 13485', 'OEM Code', 'SPPP Rajasthan'],
  },
  {
    id: 'test-3',
    clientName: 'Harpreet Singh',
    designation: 'Chief Operating Officer',
    companyName: 'Trident Facility Solutions Ltd',
    location: 'New Delhi / Pan-India',
    category: 'GeM & Manpower',
    portal: 'GeM 4.0 Custom Bid (Central PSU)',
    bidValue: '₹8.40 Crore (3-Yr Contract)',
    starRating: 5,
    reviewDate: 'Active Contract · Ongoing',
    verificationBadge: {
      status: 'Verified GSTIN & GeM',
      verifiedContract: '₹8.40 Cr Deployment of 180+ Security & Facility Personnel',
      tenderRef: 'GEM/2024/B/5182903',
      authority: 'Central Public Sector Undertaking (Govt of India)',
    },
    headline: 'Mastered GeM minimum wage formulas and guided us to win the reverse auction',
    reviewText: 'GeM custom bids have extremely intricate minimum wage formulas, EPF/ESIC statutory compliance challans, and steep penalty clauses. Bid Tender 4 U indexed 3 years of labor department proofs and gave us real-time guidance during the Reverse Auction (RA) window.',
    keyWinMetric: 'Ranked L1 in Reverse Auction out of 14 Bidders',
    tags: ['GeM 4.0', 'Manpower Outsourcing', 'Reverse Auction', 'Central PSU'],
  },
  {
    id: 'test-4',
    clientName: 'Kunal V. Shah',
    designation: 'Proprietor',
    companyName: 'Apex SunPower Grid Systems',
    location: 'Surat, Gujarat',
    category: 'Solar & Electrical',
    portal: 'nProcure / Discom Portal (PGVCL & GUVNL)',
    bidValue: '₹6.20 Crore',
    starRating: 5,
    reviewDate: 'Contract Awarded · Recent',
    verificationBadge: {
      status: 'Class-3 DSC Verified',
      verifiedContract: '₹6.20 Cr 2 MW Rooftop Solar Grid Tie Installation',
      tenderRef: 'DISCOM/SOLAR/GRID/2024/093',
      authority: 'Gujarat Urja Vikas Nigam Ltd (GUVNL)',
    },
    headline: 'Seamless Joint Venture structuring, Bank Solvency proforma & token encryption',
    reviewText: 'High net-worth criteria required a Bank Solvency certificate from a Scheduled Bank and notarized Joint Venture agreements conforming to specific GUVNL tender rules. Their senior consultants drafted compliant legal affidavits and handled our Class-3 DSC cryptographic locking without a glitch.',
    keyWinMetric: 'Cleared Strict Bank Solvency & JV Scrutiny',
    tags: ['Solar EPC', 'Bank Solvency', 'Joint Venture', 'GUVNL / PGVCL'],
  },
  {
    id: 'test-5',
    clientName: 'Bhavin K. Desai',
    designation: 'Director of Operations',
    companyName: 'Shreeji Electricals & Transformer Works',
    location: 'Vadodara, Gujarat',
    category: 'Solar & Electrical',
    portal: 'GETCO e-Tendering System',
    bidValue: '₹3.75 Crore',
    starRating: 5,
    reviewDate: 'Contract Awarded · 2 Months Ago',
    verificationBadge: {
      status: 'Verified Govt Contractor',
      verifiedContract: '₹3.75 Cr 66kV Substation Transformer Overhaul & Supply',
      tenderRef: 'GETCO/XMR/ZONE-V/2024/1102',
      authority: 'Gujarat Energy Transmission Corp Ltd (GETCO)',
    },
    headline: 'Guaranteed Technical Particulars (GTP) and Type Test indexing executed perfectly',
    reviewText: 'In state power transmission tenders, missing a single clause in GTP (Guaranteed Technical Particulars) or having an expired ERDA/CPRI Type Test certificate leads to instant disqualification. Bid Tender 4 U vetted every page against GETCO specifications and guaranteed our bid compliance.',
    keyWinMetric: 'Zero Procedural Gaps in GTP Documentation',
    tags: ['Substation Works', 'GETCO', 'CPRI / ERDA Reports', 'High Voltage'],
  },
  {
    id: 'test-6',
    clientName: 'Ananya Roy',
    designation: 'Chief Technology Officer',
    companyName: 'OmniTech Solutions & Defense Supplies',
    location: 'Pune & Bengaluru',
    category: 'IT & Smart City',
    portal: 'Central Public Procurement Portal (CPPP)',
    bidValue: '₹5.10 Crore',
    starRating: 5,
    reviewDate: 'Approved Bid · Recent',
    verificationBadge: {
      status: 'DPIIT Startup Recognized',
      verifiedContract: '₹5.10 Cr Smart City Video Analytics & COTS Hardware',
      tenderRef: 'CPPP/NIC/SMART-CITY/2024/604',
      authority: 'Ministry of Housing & Urban Affairs / NIC',
    },
    headline: 'Leveraged GFR Rule 173(i) exemption to compete and win against legacy tech giants',
    reviewText: 'As a DPIIT recognized startup, we did not have 5 years of turnover history. Bid Tender 4 U invoked Rule 173(i) of General Financial Rules (GFR) 2017 with exact statutory citation letters, securing complete waiver on prior experience and winning the technical evaluation round.',
    keyWinMetric: 'Prior Turnover Waiver Granted via GFR 173(i)',
    tags: ['Smart City', 'GFR 173(i)', 'DPIIT Startup', 'NIC CPPP'],
  },
  {
    id: 'test-7',
    clientName: 'Vikramaditya Rathore',
    designation: 'Managing Partner',
    companyName: 'Marwar Logistics & Heavy Transport Corp',
    location: 'Jodhpur, Rajasthan',
    category: 'Civil & Infra',
    portal: 'Indian Railways E-Procurement System (IREPS)',
    bidValue: '₹7.60 Crore',
    starRating: 5,
    reviewDate: 'Awarded & Executing · Recent',
    verificationBadge: {
      status: 'Verified Govt Contractor',
      verifiedContract: '₹7.60 Cr Zonal Railway Freight & Container Handling',
      tenderRef: 'NWR/IREPS/LOGISTICS/2024/844',
      authority: 'North Western Railway (Indian Railways)',
    },
    headline: 'IREPS token driver troubleshooting and flawless technical packet submission',
    reviewText: 'IREPS has tricky Java and cryptographic token driver requirements that crash at the last hour. Bid Tender 4 U audited our system environment, verified every vehicle fitness and RTO permit attachment, and supervised our Packet-1 locking smoothly.',
    keyWinMetric: '100% Successful IREPS Digital Signature Locking',
    tags: ['IREPS Railways', 'Logistics', 'Class-3 DSC Token', 'Freight Contract'],
  },
];

const CATEGORIES = [
  'All Sectors',
  'Civil & Infra',
  'Healthcare & Medical',
  'GeM & Manpower',
  'Solar & Electrical',
  'IT & Smart City',
] as const;

interface ClientTestimonialCarouselProps {
  onOpenInquiryModal?: (category?: string, service?: string) => void;
  onOpenChecklistModal?: () => void;
}

export const ClientTestimonialCarousel: React.FC<ClientTestimonialCarouselProps> = ({
  onOpenInquiryModal,
  onOpenChecklistModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Sectors');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [activeTestimonial, setActiveTestimonial] = useState<TestimonialItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter items
  const filteredTestimonials = selectedCategory === 'All Sectors'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.category === selectedCategory);

  // Auto scroll in carousel mode when playing
  useEffect(() => {
    if (!isAutoPlay || viewMode !== 'carousel') return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay, viewMode, filteredTestimonials.length]);

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cards = container.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length;
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % filteredTestimonials.length;
    scrollToCard(nextIdx);
  };

  // Sync index on manual scroll / swipe
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollPos = container.scrollLeft;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 360;
    const newIdx = Math.round(scrollPos / cardWidth);
    if (newIdx >= 0 && newIdx < filteredTestimonials.length && newIdx !== currentIndex) {
      setCurrentIndex(newIdx);
    }
  };

  return (
    <section 
      id="client-testimonials-section" 
      aria-label="Client Testimonials and Verified Reviews"
      className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/90 border-t border-b border-slate-200/80 relative overflow-hidden text-left"
    >
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#1E3E62_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide mb-3 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Genuine Contractor Reviews · Verified Tender Wins</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Client Testimonials &{' '}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 bg-clip-text text-transparent">
                Company Verification Badges
              </span>
            </h2>
            
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Read authentic feedback from registered government contractors, MSME manufacturers, and EPC firms who won state PWD, GeM 4.0, and central procurement tenders with zero technical disqualifications.
            </p>
          </div>

          {/* Aggregate Rating Score Box */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex flex-col items-center justify-center shrink-0">
                <span className="text-amber-800 font-extrabold text-lg leading-none">5.0</span>
                <div className="flex items-center gap-0.5 mt-0.5">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-900">5.0 / 5.0</span>
                </div>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  Based on <strong className="text-slate-800">340+ Verified Bids</strong> in India
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Zero Procedural Disqualifications</span>
                </div>
              </div>
            </div>

            {/* Layout Mode Switcher */}
            <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50 self-end sm:self-center">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-blue-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Swipeable Carousel View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Swipeable</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-blue-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Full Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-2 border-b border-slate-200/70">
          {/* Industry Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                  if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Carousel Controls (only in carousel view) */}
          {viewMode === 'carousel' && (
            <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
              <span className="text-xs text-slate-600 hidden md:inline-flex items-center gap-1 font-medium">
                <span>Swipe or drag</span>
                <span className="text-slate-400">·</span>
                <span>{currentIndex + 1} of {filteredTestimonials.length}</span>
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shadow-2xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shadow-2xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Carousel / Grid Content */}
        {viewMode === 'carousel' ? (
          <div className="relative">
            {/* Swipeable Track */}
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              className="flex gap-6 overflow-x-auto pb-6 pt-1 px-1 snap-x snap-mandatory scroll-smooth focus:outline-hidden"
              style={{
                scrollbarWidth: 'thin',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {filteredTestimonials.map((item, idx) => (
                <div
                  key={item.id}
                  className="w-[88vw] sm:w-[380px] md:w-[400px] lg:w-[410px] shrink-0 snap-start"
                >
                  <TestimonialCard 
                    item={item} 
                    onViewBadgeDetails={() => setActiveTestimonial(item)}
                    onInquire={() => onOpenInquiryModal && onOpenInquiryModal(item.category, item.portal)}
                  />
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {filteredTestimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollToCard(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-6 bg-blue-800' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Grid View Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((item) => (
              <TestimonialCard 
                key={item.id} 
                item={item} 
                onViewBadgeDetails={() => setActiveTestimonial(item)}
                onInquire={() => onOpenInquiryModal && onOpenInquiryModal(item.category, item.portal)}
              />
            ))}
          </div>
        )}

        {/* Trust Badges Verification Strip */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Feature 1 */}
            <div className="flex items-start gap-3.5 pr-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">100% Technical Bid Clearance</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Every tender document, Packet-A folder, and BOQ item is audited by certified procurement attorneys and engineers before locking.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:px-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-blue-700">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Class-3 DSC & Token Encryption</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Secure cryptographic locking, CA UDIN turnover verification, and bank solvency compliance across nProcure, GeM, and CPPP portals.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:pl-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-700">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Government Tender Audit Report</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Get a comprehensive NIT breakdown highlighting restrictive criteria, eligibility waivers under GFR, and critical submission pitfalls.
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
              Have a tender closing soon? Upload your NIT or discuss with our bid compliance experts right away.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {onOpenChecklistModal && (
                <button
                  type="button"
                  onClick={onOpenChecklistModal}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all"
                >
                  <ScrollText className="w-3.5 h-3.5 text-slate-600" />
                  <span>Free Tender Checklist</span>
                </button>
              )}

              {onOpenInquiryModal && (
                <button
                  type="button"
                  onClick={() => onOpenInquiryModal('Tender Bidding', 'Document Audit')}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold shadow-xs transition-all"
                >
                  <span>Request Free Bid Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Verification Badge Detail Modal */}
      {activeTestimonial && (
        <VerificationModal 
          testimonial={activeTestimonial} 
          onClose={() => setActiveTestimonial(null)} 
          onInquire={() => {
            const t = activeTestimonial;
            setActiveTestimonial(null);
            if (onOpenInquiryModal) onOpenInquiryModal(t.category, t.portal);
          }}
        />
      )}
    </section>
  );
};

interface TestimonialCardProps {
  item: TestimonialItem;
  onViewBadgeDetails: () => void;
  onInquire: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, onViewBadgeDetails, onInquire }) => {
  return (
    <div className="h-full bg-white rounded-2xl border border-slate-200/90 hover:border-blue-300 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 group relative">
      {/* Top Card Section: Verification Badge & Rating */}
      <div>
        {/* Verification Badge & Category */}
        <div className="flex items-start justify-between gap-2 mb-3">
          {/* Company Verification Badge */}
          <button
            type="button"
            onClick={onViewBadgeDetails}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-[11px] font-bold transition-colors cursor-pointer text-left"
            title="Click to view official company verification details"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate max-w-[170px]">{item.verificationBadge.status}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </button>

          {/* Tender Category Tag */}
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80 shrink-0">
            {item.category}
          </span>
        </div>

        {/* Star Rating & Score */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <div className="flex text-amber-400">
              {[...Array(item.starRating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="ml-1 text-xs font-bold text-slate-800">{item.starRating}.0</span>
          </div>

          {/* Tender Award Value Tag */}
          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            <Award className="w-3 h-3 text-blue-700" />
            <span>{item.bidValue}</span>
          </span>
        </div>

        {/* Review Headline */}
        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 mb-2 leading-snug">
          "{item.headline}"
        </h3>

        {/* Review Body */}
        <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-4 relative pl-3.5 border-l-2 border-slate-200 mb-4 font-normal">
          {item.reviewText}
        </p>

        {/* Key Win Result Metric Pill */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 mb-4 text-[11px] flex items-start gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-600 font-semibold">Tender Outcome: </span>
            <span className="text-slate-900 font-bold">{item.keyWinMetric}</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Client Profile & Verification Details */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between gap-3">
          {/* Avatar Monogram & Info */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-800 to-blue-900 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
              {item.clientName.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  {item.clientName}
                </h4>
                <span title="Verified Client Identity">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                </span>
              </div>
              <p className="text-[11px] text-slate-600 truncate font-medium">
                {item.designation}, <span className="font-semibold text-slate-700">{item.companyName}</span>
              </p>
              <div className="flex items-center gap-1 text-[10px] text-slate-600 mt-0.5">
                <MapPin className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                <span className="truncate">{item.location}</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-600 truncate">{item.portal.split(' ')[0]}</span>
              </div>
            </div>
          </div>

          {/* Verification Badge Detail Action Button */}
          <button
            type="button"
            onClick={onViewBadgeDetails}
            className="text-[11px] font-bold text-blue-700 hover:text-blue-900 bg-blue-50/60 hover:bg-blue-100/80 px-2 py-1 rounded border border-blue-200/60 shrink-0 transition-colors"
            title="Inspect Verification Audit"
          >
            Proof
          </button>
        </div>
      </div>
    </div>
  );
};

interface VerificationModalProps {
  testimonial: TestimonialItem;
  onClose: () => void;
  onInquire: () => void;
}

const VerificationModal: React.FC<VerificationModalProps> = ({ testimonial, onClose, onInquire }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs text-left"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white p-5 flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Company Verification Record</span>
            </div>
            <h3 className="text-lg font-bold text-white leading-snug">
              {testimonial.companyName}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              {testimonial.location} · Verified Client ID: <span className="font-mono text-emerald-300">{testimonial.id.toUpperCase()}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4 text-xs">
          {/* Key Status Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900 text-sm">
                Status: {testimonial.verificationBadge.status}
              </div>
              <div className="text-slate-600 mt-0.5">
                Authorized bid preparation, Packet-A documentation audit, and Class-3 DSC cryptographic locking successfully completed with zero technical rejections.
              </div>
            </div>
          </div>

          {/* Audit Verification Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-50 px-3.5 py-2 border-b border-slate-200 font-bold text-slate-800 text-[11px] uppercase tracking-wider">
              Tender Award & Audit Audit Details
            </div>
            <div className="divide-y divide-slate-100">
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500 font-medium">Verified Contract</span>
                <span className="font-bold text-slate-900 text-right">{testimonial.verificationBadge.verifiedContract}</span>
              </div>
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500 font-medium">Bid Value Won</span>
                <span className="font-extrabold text-blue-900 text-right">{testimonial.bidValue}</span>
              </div>
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500 font-medium">Portal / Department</span>
                <span className="font-semibold text-slate-800 text-right">{testimonial.portal}</span>
              </div>
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500 font-medium">Procuring Authority</span>
                <span className="font-semibold text-slate-800 text-right">{testimonial.verificationBadge.authority}</span>
              </div>
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500 font-medium">Tender Reference ID</span>
                <span className="font-mono font-semibold text-slate-700 text-right">{testimonial.verificationBadge.tenderRef}</span>
              </div>
              <div className="p-3 flex justify-between gap-4">
                <span className="text-slate-500 font-medium">Client Rating</span>
                <div className="flex items-center gap-1 text-right">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.starRating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800 ml-1">{testimonial.starRating}.0 / 5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Statement Quote */}
          <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-3.5 relative">
            <Quote className="w-5 h-5 text-slate-300 absolute right-3 top-3" />
            <div className="font-semibold text-slate-700 italic pr-6 leading-relaxed">
              "{testimonial.reviewText}"
            </div>
            <div className="mt-2 text-[11px] font-bold text-slate-900">
              — {testimonial.clientName}, {testimonial.designation}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-5 py-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 font-semibold text-xs transition-colors"
          >
            Close
          </button>

          <button
            type="button"
            onClick={onInquire}
            className="px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-900 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <span>Inquire for Similar Tender</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
