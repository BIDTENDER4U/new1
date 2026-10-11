import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Building2, 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  FileText, 
  Award, 
  CheckCircle2, 
  Globe2, 
  ExternalLink, 
  ChevronRight, 
  Clock, 
  HelpCircle,
  FileCheck2,
  KeyRound,
  Compass
} from 'lucide-react';
import { 
  ALL_INDIA_SUMMARY, 
  STATES_DATA, 
  CITIES_DATA 
} from '../lib/locationData';
import { CityLocationItem, StateLocationItem } from '../types';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';

interface LocationLandingHubProps {
  onOpenInquiry: (category?: string, service?: string, city?: string) => void;
  onOpenMapsModal?: (initialQuery?: string) => void;
  initialLocationId?: string;
}

type TabMode = 'all-india' | 'cities' | 'states';

export const LocationLandingHub: React.FC<LocationLandingHubProps> = ({
  onOpenInquiry,
  onOpenMapsModal,
  initialLocationId,
}) => {
  const [tabMode, setTabMode] = useState<TabMode>(
    initialLocationId && STATES_DATA.some(s => s.id === initialLocationId) 
      ? 'states' 
      : 'cities'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCityId, setSelectedCityId] = useState<string>(
    initialLocationId || 'ahmedabad'
  );
  const [selectedStateId, setSelectedStateId] = useState<string>(
    STATES_DATA.some(s => s.id === initialLocationId) ? initialLocationId! : 'gujarat'
  );
  const [regionFilter, setRegionFilter] = useState<string>('All');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Active Selected City Object
  const currentCity = useMemo(() => {
    return CITIES_DATA.find((c) => c.id === selectedCityId) || CITIES_DATA[0];
  }, [selectedCityId]);

  // Active Selected State Object
  const currentState = useMemo(() => {
    return STATES_DATA.find((s) => s.id === selectedStateId) || STATES_DATA[0];
  }, [selectedStateId]);

  // Filtered Cities list based on search and region
  const filteredCities = useMemo(() => {
    return CITIES_DATA.filter((city) => {
      const matchesSearch = 
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.portal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.keyAuthorities.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
        city.topSectors.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRegion = regionFilter === 'All' || city.region === regionFilter;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, regionFilter]);

  // Filtered States list
  const filteredStates = useMemo(() => {
    return STATES_DATA.filter((state) => {
      const matchesSearch = 
        state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        state.portalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        state.majorDepartments.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRegion = regionFilter === 'All' || state.region === regionFilter;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, regionFilter]);

  // Direct WhatsApp URLs
  const cityWhatsAppUrl = getWhatsAppUrl(
    `Hello Bid Tender 4 U, I am looking for tender consultancy and bidding support in ${currentCity.name}, ${currentCity.state}. Please assist me with live tenders.`
  );

  const stateWhatsAppUrl = getWhatsAppUrl(
    `Hello Bid Tender 4 U, I am looking for tender bidding assistance on ${currentState.portalName} for ${currentState.name}. Please guide me.`
  );

  return (
    <div className="py-10 bg-[#F8FAFC] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hub Master Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold tracking-wide">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Pan-India Local Contractor Tender Desk</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Government Tender Consultancy Across <span className="text-amber-800">All India</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Targeted bidding advisory, Class-3 DSC issuance, and ISO certification tailored to local municipal corporations, state portals, and central ministries across 50+ key industrial cities.
          </p>

          {/* Quick Stats Pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-700">
            <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-amber-800 shadow-xs">
              ✓ All 28 States & UTs Covered
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-emerald-800 shadow-xs">
              ✓ 50+ City Industrial Clusters
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-blue-800 shadow-xs">
              ✓ Head Office: Ahmedabad, Gujarat
            </span>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-3 gap-1 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setTabMode('cities')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                tabMode === 'cities'
                  ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>By City ({CITIES_DATA.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setTabMode('states')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                tabMode === 'states'
                  ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>By State ({STATES_DATA.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setTabMode('all-india')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                tabMode === 'all-india'
                  ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Globe2 className="w-4 h-4" />
              <span>All India / National</span>
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search city, state, or portal..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 text-xs cursor-pointer font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* VIEW 1: DYNAMIC CITY LANDING EXPERIENCE                       */}
        {/* ------------------------------------------------------------- */}
        {tabMode === 'cities' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Quick City Horizontal Switcher Bar */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-700">Popular Contractor Hubs:</span>
                <span className="font-medium">Select a city below to view dedicated tender intelligence</span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {CITIES_DATA.slice(0, 14).map((city) => (
                  <button
                    key={city.id}
                    onClick={() => {
                      setSelectedCityId(city.id);
                      setExpandedFaqIndex(0);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                      selectedCityId === city.id
                        ? 'bg-amber-500 text-slate-950 border-amber-500 font-extrabold shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-950 shadow-xs'
                    }`}
                  >
                    {city.name} {city.isHeadquarters ? '★ HQ' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic City Showcase Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
              {/* City Hero Section */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-8 border-b border-slate-200 relative z-10">
                <div className="space-y-4 max-w-2xl text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
                      <MapPin className="w-3.5 h-3.5 text-amber-700" />
                      <span>{currentCity.state} ({currentCity.region} Region)</span>
                    </span>

                    {currentCity.isHeadquarters && (
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold">
                        ★ Registered Headquarters & Walk-In Desk
                      </span>
                    )}

                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold border border-slate-200">
                      {currentCity.activeTendersEstimate}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                    Government Tender Consultancy in <span className="text-amber-800">{currentCity.name}</span>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Dedicated e-procurement bidding advisory, Class-3 DSC issuance, GeM vendor onboarding, and ISO certification for suppliers and contractors in {currentCity.name}, {currentCity.state}.
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-600 pt-1">
                    <span className="text-amber-800 font-bold">Primary Portal:</span>
                    <span className="text-slate-900 font-mono bg-slate-100 px-2.5 py-1 rounded border border-slate-200 font-bold">
                      {currentCity.portal}
                    </span>
                  </div>

                  {currentCity.addressSnippet && (
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-950">Registered Office in {currentCity.name}:</span>
                        <p className="text-slate-700 mt-0.5 font-medium">{currentCity.addressSnippet}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Conversion Action Box */}
                <div className="w-full lg:w-80 shrink-0 bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3.5 shadow-sm text-left">
                  <div className="text-center pb-2 border-b border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 font-mono">
                      Local Assistance
                    </span>
                    <h3 className="font-display text-base font-bold text-slate-900 mt-0.5">
                      Submit {currentCity.name} Tender
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 font-medium">
                      {currentCity.supportHours}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenInquiry(undefined, undefined, currentCity.name)}
                    className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Upload NIT for {currentCity.name}</span>
                  </button>

                  <a
                    href={cityWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp {currentCity.name} Desk</span>
                  </a>

                  {onOpenMapsModal && (
                    <button
                      type="button"
                      onClick={() => onOpenMapsModal(`Government tender offices in ${currentCity.name}`)}
                      className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-red-50 text-red-700 border border-red-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <MapPin className="w-3.5 h-3.5 text-red-600" />
                      <span>Locate {currentCity.name} Tender Desks (Google Maps)</span>
                    </button>
                  )}

                  <div className="pt-2 text-center">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-slate-600 hover:text-slate-900 text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-700" />
                      <span>Direct: {BUSINESS_INFO.displayPhone}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 3-Column Detailed Local Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-slate-200 text-left">
                {/* Column 1: Key Authorities in City */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-sm font-bold text-slate-900">
                      Top Procurement Authorities
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentCity.keyAuthorities.map((auth, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{auth}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Popular Bidding Sectors */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-sm font-bold text-slate-900">
                      Major Bidding Categories
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentCity.topSectors.map((sector, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{sector}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Local Contractor Eligibility Enablers */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800">
                      <KeyRound className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-sm font-bold text-slate-900">
                      Local Contractor Enablers
                    </h4>
                  </div>
                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-amber-900 block">Class-3 DSC Token Delivery</span>
                      <p className="text-slate-600 leading-relaxed text-[11px] font-medium">
                        Same-day dispatch or 30-min remote video e-KYC issuance for {currentCity.name} bidders.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-amber-900 block">All Types ISO (9001/14001)</span>
                      <p className="text-slate-600 leading-relaxed text-[11px] font-medium">
                        Fast-track IAF accredited certification for municipal and department tenders.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                      <span className="font-bold text-amber-900 block">100% EMD Exemption Advice</span>
                      <p className="text-slate-600 leading-relaxed text-[11px] font-medium">
                        Leverage Rule 170 GFR 2017 & Udyam registration to waive earnest money deposit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local SEO Keywords Tag Cloud */}
              <div className="py-6 border-b border-slate-200 space-y-3 text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Targeted Contractor Search Keywords in {currentCity.name}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentCity.localSeoKeywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700 hover:text-amber-800 transition-colors"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Local City FAQs Accordion */}
              <div className="pt-6 space-y-4 text-left">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-700" />
                  <h4 className="font-display text-base font-bold text-slate-900">
                    Frequently Asked Questions for {currentCity.name} Bidders
                  </h4>
                </div>

                <div className="space-y-3">
                  {currentCity.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedFaqIndex(expandedFaqIndex === idx ? null : idx)}
                        className="w-full p-4 text-left font-display font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:text-amber-800"
                      >
                        <span>{faq.q}</span>
                        <ChevronRight
                          className={`w-4 h-4 text-amber-600 shrink-0 transition-transform ${
                            expandedFaqIndex === idx ? 'rotate-90' : ''
                          }`}
                        />
                      </button>

                      {expandedFaqIndex === idx && (
                        <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3 font-medium">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick All-Cities Directory Grid */}
            <div className="pt-6 space-y-4 text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-slate-900">
                    Explore All {CITIES_DATA.length} Key Contractor Cities
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Click any city below to load its dedicated local authority, portal, and sector matrix.
                  </p>
                </div>

                {/* Region Filter Buttons */}
                <div className="flex flex-wrap gap-1.5">
                  {['All', 'West', 'North', 'Central', 'South', 'East', 'North East'].map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setRegionFilter(reg)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-colors cursor-pointer ${
                        regionFilter === reg
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {filteredCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => {
                      setSelectedCityId(city.id);
                      setExpandedFaqIndex(0);
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer group ${
                      selectedCityId === city.id
                        ? 'bg-amber-100 border-amber-400 text-amber-950 shadow-xs font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300 hover:text-slate-950'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs group-hover:text-amber-800 transition-colors">
                        {city.name}
                      </span>
                      {city.isHeadquarters && (
                        <span className="text-[9px] px-1 py-0.2 bg-emerald-100 text-emerald-800 rounded font-bold border border-emerald-200">
                          HQ
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500 block truncate mt-0.5 font-medium">
                      {city.state}
                    </span>
                    <span className="text-[9px] text-slate-400 block font-mono mt-1">
                      {city.activeTendersEstimate.split(' ')[0]} tenders
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* VIEW 2: DYNAMIC STATE LANDING EXPERIENCE                      */}
        {/* ------------------------------------------------------------- */}
        {tabMode === 'states' && (
          <div className="space-y-8 animate-in fade-in duration-200 text-left">
            {/* Quick State Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {STATES_DATA.map((state) => (
                <button
                  key={state.id}
                  onClick={() => setSelectedStateId(state.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                    selectedStateId === state.id
                      ? 'bg-amber-500 text-slate-950 border-amber-500 font-extrabold shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-950 shadow-xs'
                  }`}
                >
                  {state.name} ({state.code})
                </button>
              ))}
            </div>

            {/* Selected State Detailed Showcase */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-8 border-b border-slate-200">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
                      {currentState.region} India Region
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold border border-slate-200">
                      {currentState.tenderVolume}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
                    {currentState.name} Government Tenders & E-Procurement
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {currentState.overview}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs pt-2">
                    <span className="text-slate-500 font-bold">Official State Portal:</span>
                    <a
                      href={currentState.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-300 text-amber-900 font-mono font-bold hover:bg-slate-200 transition-colors"
                    >
                      <span>{currentState.portalName}</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                </div>

                {/* State CTA Action */}
                <div className="w-full lg:w-80 shrink-0 bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block text-center font-mono">
                    State Contractor Helpdesk
                  </span>
                  <h4 className="font-display text-sm font-bold text-slate-900 text-center">
                    Bid on {currentState.name} Portals
                  </h4>

                  <button
                    type="button"
                    onClick={() => onOpenInquiry(undefined, undefined, currentState.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Inquire for {currentState.name}</span>
                  </button>

                  <a
                    href={stateWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp {currentState.name} Desk</span>
                  </a>
                </div>
              </div>

              {/* Department & Legal Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-slate-200">
                {/* Major State Departments */}
                <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="font-display text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-700" />
                    <span>Major State Departments & Boards</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {currentState.majorDepartments.map((dept, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{dept}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Statutory Rules: EMD & DSC */}
                <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div>
                    <h5 className="font-display text-xs font-bold text-emerald-800 flex items-center gap-1.5 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>EMD Exemption Policy in {currentState.name}</span>
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {currentState.emdExemptionNote}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <h5 className="font-display text-xs font-bold text-blue-800 flex items-center gap-1.5 mb-1">
                      <KeyRound className="w-3.5 h-3.5 text-blue-600" />
                      <span>Class-3 DSC Token Requirement</span>
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {currentState.class3DscNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Cities in this State */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Key Municipalities & Contractor Hubs in {currentState.name}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentState.keyCities.map((city, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
                    >
                      📍 {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Complete All-States Directory Grid */}
            <div className="space-y-4 pt-4">
              <h3 className="font-display text-xl font-bold text-slate-900">
                All 28 States & Union Territories
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {filteredStates.map((state) => (
                  <button
                    key={state.id}
                    onClick={() => {
                      setSelectedStateId(state.id);
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedStateId === state.id
                        ? 'bg-amber-100 border-amber-400 text-amber-950 font-bold shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-950'
                    }`}
                  >
                    <span className="font-bold text-xs block">{state.name}</span>
                    <span className="text-[10px] text-slate-500 block truncate mt-0.5 font-medium">
                      {state.region} Region
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* VIEW 3: ALL INDIA / NATIONAL CENTRAL OVERVIEW                 */}
        {/* ------------------------------------------------------------- */}
        {tabMode === 'all-india' && (
          <div className="space-y-10 animate-in fade-in duration-200 text-left">
            {/* National Banner */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
              <div className="max-w-3xl space-y-3">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
                  National Procurement Desk
                </span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
                  {ALL_INDIA_SUMMARY.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {ALL_INDIA_SUMMARY.tagline}. We represent manufacturers, contractors, and service providers participating in high-value tenders across all central ministries.
                </p>
                <div className="pt-1">
                  <span className="inline-block font-mono text-xs text-amber-900 font-bold bg-amber-100 px-3 py-1 rounded-lg border border-amber-200">
                    ⚡ {ALL_INDIA_SUMMARY.totalAnnualTenders}
                  </span>
                </div>
              </div>

              {/* Central Portals Matrix */}
              <div className="space-y-4">
                <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-amber-700" />
                  <span>Apex Central Procurement Portals Handled</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ALL_INDIA_SUMMARY.centralPortals.map((portal, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-amber-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold text-slate-900">
                          {portal.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200 font-bold">
                          {portal.code}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {portal.coverage}
                      </p>
                      <div className="pt-2 border-t border-slate-200 flex items-center gap-1.5 text-[11px] text-slate-700 font-semibold">
                        <KeyRound className="w-3 h-3 text-amber-700 shrink-0" />
                        <span>{portal.dscRequired}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central Ministries & National Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="font-display text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-700" />
                    <span>Central Ministries Active Daily</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {ALL_INDIA_SUMMARY.keyNationalMinistries.map((min, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{min}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="font-display text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Pan-India Statutory Benefits</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {ALL_INDIA_SUMMARY.panIndiaBenefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* National CTA Strip */}
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-base font-bold text-slate-900">
                    Need National Tender Packaging Assistance?
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    Consult our senior tender analysts directly from Ahmedabad for Pan-India bids.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => onOpenInquiry('All India Central Tenders', 'Central Ministry & PSU Tender Bidding', 'All India')}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    Submit Pan-India NIT
                  </button>
                  <a
                    href={getWhatsAppUrl('Hello Bid Tender 4 U, I want to consult for Central Government tenders on CPPP and GeM across India.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
