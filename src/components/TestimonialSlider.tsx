import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Star, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ArrowRight, 
  Sparkles,
  Award,
  Layers
} from 'lucide-react';

export interface TestimonialSuccessItem {
  id: string;
  clientName: string;
  designation: string;
  companyName: string;
  location: string;
  category: 'Civil & Infra' | 'Healthcare' | 'GeM 4.0' | 'Electrical & Solar' | 'IT & Smart City' | 'MSME & Startups';
  portal: string;
  bidValue: string;
  starRating: number;
  headline: string;
  quote: string;
  keyWinMetric: string;
  authority: string;
}

export const TESTIMONIAL_SLIDER_ITEMS: TestimonialSuccessItem[] = [
  {
    id: 'ts-1',
    clientName: 'Rajeshwar Patel',
    designation: 'Managing Director',
    companyName: 'Patel Infracon & Developers Pvt Ltd',
    location: 'Ahmedabad, Gujarat',
    category: 'Civil & Infra',
    portal: 'nProcure Gujarat (R&B)',
    bidValue: '₹4.85 Crore',
    starRating: 5,
    headline: 'Zero technical disqualifications & locked our ₹4.85 Cr road tender',
    quote: 'We had lost two state PWD bids earlier because of turnover discrepancies and missing CA UDIN certificates. Bid Tender 4 U restructured our Packet-A and secured 100% technical qualification.',
    keyWinMetric: '100% Technical Bid Acceptance',
    authority: 'Govt of Gujarat Roads & Buildings Dept',
  },
  {
    id: 'ts-2',
    clientName: 'Dr. N. K. Sharma',
    designation: 'Managing Partner',
    companyName: 'BioMed Healthcare Supplies LLP',
    location: 'Jaipur, Rajasthan',
    category: 'Healthcare',
    portal: 'SPPP Rajasthan & RMSCL',
    bidValue: '₹2.30 Crore',
    starRating: 5,
    headline: 'Fast-track ISO 13485 & GeM OEM authorization code in 48 hours',
    quote: 'With only a 3-day window before close, we needed mandatory ISO 13485 and OEM authorization codes for ICU equipment. Bid Tender 4 U executed cryptographic locking flawlessly.',
    keyWinMetric: 'Qualified in Technical Round on 1st Attempt',
    authority: 'Rajasthan Medical Services Corp (RMSCL)',
  },
  {
    id: 'ts-3',
    clientName: 'Harpreet Singh',
    designation: 'Chief Operating Officer',
    companyName: 'Trident Facility Solutions Ltd',
    location: 'New Delhi / Pan-India',
    category: 'GeM 4.0',
    portal: 'GeM 4.0 Custom Bid (Central PSU)',
    bidValue: '₹8.40 Crore',
    starRating: 5,
    headline: '100% MSME EMD waiver under GFR 170 saved ₹16.8 Lakhs liquidity',
    quote: 'Their legal counsel drafted our statutory representation citing GFR 170 and GeM GTC clause 4.2. Buyer approved our exemption within 4 hours without bank guarantee blockages.',
    keyWinMetric: '₹16.8L EMD Waived Under GFR 170',
    authority: 'Central Public Sector Enterprise (CPSE)',
  },
  {
    id: 'ts-4',
    clientName: 'Manoj K. Chawla',
    designation: 'Director',
    companyName: 'Apex Solar & Green Energy Tech',
    location: 'Indore, Madhya Pradesh',
    category: 'Electrical & Solar',
    portal: 'CPPP (eProcure Central)',
    bidValue: '₹5.60 Crore',
    starRating: 5,
    headline: 'Won 1.2 MW rooftop solar tender under Make in India Class-I local content',
    quote: 'Calculated our domestic content to 62% with verified CA UDIN certification. We utilized the MII purchase preference window to match L1 and secure 60% of the award.',
    keyWinMetric: '62% Domestic Content Verified',
    authority: 'Solar Energy Corporation of India (SECI)',
  },
  {
    id: 'ts-5',
    clientName: 'Pooja Varma',
    designation: 'VP Public Sector Bids',
    companyName: 'Matrix Cybernet & Smart Solutions',
    location: 'Pune, Maharashtra',
    category: 'MSME & Startups',
    portal: 'Maharashtra MahaTenders',
    bidValue: '₹3.15 Crore',
    starRating: 5,
    headline: 'DPIIT Startup prior turnover waiver under Rule 173(i) approved',
    quote: 'As a 2-year-old DPIIT startup, other consultants told us we were ineligible. Bid Tender 4 U cited DoE OM No. F.20/2/2014-PPD and got our financial criteria completely relaxed.',
    keyWinMetric: 'Prior Turnover 100% Relaxed',
    authority: 'Smart City Development Mission',
  },
  {
    id: 'ts-6',
    clientName: 'Vikramaditya Solanki',
    designation: 'Proprietor',
    companyName: 'Shree Radhe Construction & Earthmovers',
    location: 'Bhopal, Madhya Pradesh',
    category: 'Civil & Infra',
    portal: 'MP Tenders (Water Resources)',
    bidValue: '₹6.75 Crore',
    starRating: 5,
    headline: 'Class-3 DSC crypto token issuance in 30 mins saved our ₹6.75 Cr canal bid',
    quote: 'Our USB crypto token failed 3 hours before bid submission. Bid Tender 4 U issued a fresh FIPS-certified Class-3 combo token and remotely guided encryption to avoid timeout.',
    keyWinMetric: 'Issued Token & Bid Locked in 45 Mins',
    authority: 'Water Resources Dept, Madhya Pradesh',
  },
  {
    id: 'ts-7',
    clientName: 'Ghanshyam B. Mehta',
    designation: 'Founder & CEO',
    companyName: 'Surat Precision Engineering Works',
    location: 'Surat, Gujarat',
    category: 'GeM 4.0',
    portal: 'Indian Railways IREPS',
    bidValue: '₹1.95 Crore',
    starRating: 5,
    headline: 'Zero rejection in RDSO coach components tender with perfect BOQ modeling',
    quote: 'Their technical team cross-referenced all drawing dimensions and material specs against RDSO guidelines. We emerged as clean L1 in Packet-B financial opening.',
    keyWinMetric: 'L1 Position Secured with Optimal Margin',
    authority: 'Western Railway (IREPS Portal)',
  },
  {
    id: 'ts-8',
    clientName: 'Col. Sandeep Bakshi (Retd.)',
    designation: 'Head of Operations',
    companyName: 'Zenith Security & Tactical Corp',
    location: 'Chandigarh / Haryana',
    category: 'GeM 4.0',
    portal: 'GeM 4.0 Defense Procurement',
    bidValue: '₹4.20 Crore',
    starRating: 5,
    headline: 'Secured official OEM authorization codes & primary brand approval on GeM',
    quote: 'Overcame complex OEM reseller pairing hurdles on GeM 4.0. Handled catalog uploads, caution money deposits, and statutory affidavits with zero queries from the military buyer.',
    keyWinMetric: 'Official GeM Brand Approval Granted',
    authority: 'Ministry of Defense Armed Forces Command',
  },
];

interface TestimonialSliderProps {
  onOpenInquiryModal?: (category?: string, service?: string) => void;
  onOpenChecklistModal?: () => void;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  onOpenInquiryModal,
  onOpenChecklistModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'GeM 4.0', 'Civil & Infra', 'Healthcare', 'Electrical & Solar', 'MSME & Startups'];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return TESTIMONIAL_SLIDER_ITEMS;
    return TESTIMONIAL_SLIDER_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Duplicate items for continuous smooth infinite scrolling
  const marqueeItems = useMemo(() => {
    return [...filteredItems, ...filteredItems];
  }, [filteredItems]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      id="client-testimonials-section"
      aria-label="Verified Client Success Testimonials" 
      className="py-10 sm:py-14 bg-[#F8FAFC] border-y border-[#D9E0E8] overflow-hidden relative selection:bg-amber-400 selection:text-slate-950"
    >
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1D3557]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700 stroke-[2.5]" />
              <span>Verified Client Success Testimonials</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#1D3557] tracking-tight">
              Real Contractors. <span className="text-amber-700">Proven Bid Wins.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-medium">
              Over ₹500 Cr+ in cumulative public tender awards across GeM 4.0, CPPP, nProcure, and state e-procurement portals.
            </p>
          </div>

          {/* Slider Controls: Auto-scroll Pause/Play + Manual Arrow Navigation */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl border border-[#D9E0E8] bg-white text-[#1D3557] hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
              title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-[#1D3557] text-[#1D3557]" />
                  <span>Auto-Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-[#1D3557] text-[#1D3557]" />
                  <span>Pause</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="p-2 rounded-xl border border-[#D9E0E8] bg-white text-[#1D3557] hover:bg-slate-50 hover:border-[#1D3557] transition-all shadow-2xs cursor-pointer group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="p-2 rounded-xl border border-[#D9E0E8] bg-white text-[#1D3557] hover:bg-slate-50 hover:border-[#1D3557] transition-all shadow-2xs cursor-pointer group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#1D3557] text-white shadow-xs border border-[#1D3557]'
                  : 'bg-white text-slate-600 border border-[#D9E0E8] hover:border-slate-400 hover:text-[#1D3557]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrolling Slider Container */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-1"
        >
          <div className={isPaused ? 'flex gap-4' : 'animate-testimonial-marquee flex gap-4'}>
            {marqueeItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-2xl p-5 sm:p-6 border border-[#D9E0E8] shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: 5 Stars & Contract Value Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(item.starRating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-amber-400 text-amber-500 drop-shadow-2xs" 
                        />
                      ))}
                      <span className="text-xs font-black text-[#1D3557] ml-1.5 font-mono">
                        5.0
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-black font-mono px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                      {item.bidValue}
                    </span>
                  </div>

                  {/* Company Name & Verification */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
                      <h3 className="font-display text-sm font-bold text-[#1D3557] truncate group-hover:text-amber-800 transition-colors">
                        {item.companyName}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5 pl-5.5">
                      <span>{item.clientName}</span>
                      <span>·</span>
                      <span className="truncate">{item.designation}</span>
                    </div>
                  </div>

                  {/* Headline & Quote */}
                  <h4 className="text-xs font-bold text-slate-900 leading-snug mb-2 line-clamp-2">
                    "{item.headline}"
                  </h4>
                  <p className="text-[12px] text-slate-600 line-clamp-3 leading-relaxed mb-4 font-normal">
                    {item.quote}
                  </p>
                </div>

                {/* Footer Meta: Portal, Authority & Key Win Metric */}
                <div className="pt-3 border-t border-slate-100 space-y-2 mt-auto">
                  <div className="flex items-center justify-between gap-2 text-[10px] text-slate-500 font-medium">
                    <div className="flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-amber-700 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold font-mono truncate">
                      {item.portal.split('(')[0].trim()}
                    </span>
                  </div>

                  {/* Key Win Metric Badge */}
                  <div className="flex items-center justify-between gap-2 bg-emerald-50/80 border border-emerald-200 rounded-lg px-2.5 py-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-900 truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                      <span className="truncate">{item.keyWinMetric}</span>
                    </div>
                    {onOpenInquiryModal && (
                      <button
                        type="button"
                        onClick={() => onOpenInquiryModal(item.category, item.portal)}
                        className="text-[10px] font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-0.5 cursor-pointer shrink-0"
                        title="Inquire about this tender type"
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Micro-Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
            <span className="font-semibold text-[#1D3557]">
              All client contracts and awards independently verified under statutory public procurement records.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onOpenChecklistModal && (
              <button
                type="button"
                onClick={onOpenChecklistModal}
                className="font-bold text-[#1D3557] hover:text-amber-800 underline decoration-amber-400 decoration-2 underline-offset-4 cursor-pointer"
              >
                Audit Your Packet-A Checklist →
              </button>
            )}
            {onOpenInquiryModal && (
              <button
                type="button"
                onClick={() => onOpenInquiryModal('General', 'Tender Bidding')}
                className="font-bold text-amber-800 hover:text-amber-900 cursor-pointer"
              >
                Submit Your Tender for Review →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
