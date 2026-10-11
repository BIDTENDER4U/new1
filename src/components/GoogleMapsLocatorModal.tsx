import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Search, 
  Sparkles, 
  RefreshCw, 
  AlertTriangle, 
  Compass, 
  Building2, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';

interface MapsGroundingPlace {
  title: string;
  uri: string;
  reviewSnippets?: string[];
  address?: string;
}

interface MapsGroundingResult {
  text: string;
  places: MapsGroundingPlace[];
  modelUsed: string;
  center?: { latitude: number; longitude: number };
}

interface GoogleMapsLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onOpenInquiry?: (service?: string) => void;
}

const INDIAN_PROCUREMENT_HUBS = [
  { name: 'Ahmedabad (HQ)', lat: 23.0338, lng: 72.5568 },
  { name: 'Gandhinagar', lat: 23.2156, lng: 72.6369 },
  { name: 'New Delhi (GeM / CPPP)', lat: 28.6139, lng: 77.2090 },
  { name: 'Mumbai (BMC / Railways)', lat: 18.9402, lng: 72.8358 },
  { name: 'Bengaluru', lat: 12.9716, lng: 77.5946 },
  { name: 'Pune', lat: 18.5204, lng: 73.8567 },
  { name: 'Jaipur', lat: 26.9124, lng: 75.7873 },
  { name: 'Lucknow', lat: 26.8467, lng: 80.9462 },
];

const QUICK_MAP_PROMPTS = [
  'Bid Tender 4 U Ahmedabad Headquarters & Walk-in Office',
  'MSME-DFO & GeM Facilitation Centers in Ahmedabad',
  'Ahmedabad Municipal Corporation (AMC) Danapith Tender Desk',
  'Western Railway Headquarters Churchgate & Ahmedabad Division',
  'Gujarat State Civil Supplies Corporation Gandhinagar',
  'Government Notary & Stamp Paper vendor hubs near C G Road',
];

export const GoogleMapsLocatorModal: React.FC<GoogleMapsLocatorModalProps> = ({
  isOpen,
  onClose,
  initialQuery = 'Bid Tender 4 U Ahmedabad Headquarters',
  onOpenInquiry,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [selectedHub, setSelectedHub] = useState(INDIAN_PROCUREMENT_HUBS[0]);
  const [loading, setLoading] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [result, setResult] = useState<MapsGroundingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSearch = async (customQuery?: string) => {
    const q = (customQuery || query).trim();
    if (!q) return;

    setLoading(true);
    setError(null);
    if (customQuery) setQuery(customQuery);

    const lat = userLocation ? userLocation.lat : selectedHub.lat;
    const lng = userLocation ? userLocation.lng : selectedHub.lng;

    try {
      const res = await fetch('/api/tender-maps-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          latitude: lat,
          longitude: lng,
          cityName: selectedHub.name,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to fetch Maps Grounded location data.');
      }

      setResult(data.data);
    } catch (err: any) {
      console.error('[Maps Grounding Error]', err);
      setError(err.message || 'Error connecting to Google Maps Grounding service.');
    } finally {
      setLoading(false);
    }
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(coords);
        setLoading(false);
        // Automatically search with detected coordinates
        handleSearch();
      },
      (err) => {
        setLoading(false);
        setError('Location permission denied or unavailable. Using selected city hub.');
      },
      { timeout: 8000 }
    );
  };

  // Google Maps embed target query
  const mapEmbedQuery = encodeURIComponent(
    query || 'City Center Near Swastik Cross Road CG Road Navrangpura Ahmedabad Gujarat'
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-4 md:p-8 flex items-center justify-center animate-in fade-in duration-200 text-left">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-[#D9E0E8] overflow-hidden z-10 flex flex-col max-h-[94vh] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#F8F9FA] border-b border-[#D9E0E8] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-black uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded border border-red-300">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
                  Google Maps Grounding
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded">
                  gemini-3.8-flash (googleMaps tool)
                </span>
              </div>
              <h2 className="font-display text-lg sm:text-2xl font-black text-[#1D3557] mt-0.5">
                Google Maps Procurement & Office Locator
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-[#1D3557] hover:bg-slate-200/60 bg-white border border-[#D9E0E8] transition-colors cursor-pointer shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Location Controls */}
        <div className="p-4 sm:p-6 bg-white border-b border-[#D9E0E8] space-y-3 shrink-0">
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
                placeholder="Search procurement offices, buyer headquarters, GeM desks, or Bid Tender 4 U..."
                className="w-full pl-10 pr-4 py-3 bg-[#F8F9FA] border border-[#D9E0E8] rounded-xl text-xs sm:text-sm font-semibold text-[#1D3557] placeholder:text-slate-400 focus:outline-none focus:border-[#1D3557] focus:bg-white shadow-inner"
              />
            </div>

            {/* City Hub Selection */}
            <select
              value={selectedHub.name}
              onChange={(e) => {
                const found = INDIAN_PROCUREMENT_HUBS.find((h) => h.name === e.target.value);
                if (found) {
                  setSelectedHub(found);
                  setUserLocation(null);
                }
              }}
              className="px-3 py-3 bg-[#F8F9FA] border border-[#D9E0E8] rounded-xl text-xs font-bold text-[#1D3557] focus:outline-none focus:border-[#1D3557] cursor-pointer"
            >
              {INDIAN_PROCUREMENT_HUBS.map((hub) => (
                <option key={hub.name} value={hub.name}>
                  {hub.name}
                </option>
              ))}
            </select>

            {/* Detect Location Button */}
            <button
              type="button"
              onClick={handleDetectLocation}
              className="px-3.5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200 shrink-0"
              title="Use current geolocation for nearby retrieval"
            >
              <Navigation className="w-3.5 h-3.5 text-blue-600" />
              <span>Near Me</span>
            </button>

            {/* Search Button */}
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1D3557] hover:bg-[#152742] disabled:opacity-60 text-white font-black text-xs sm:text-sm transition-all shadow-xs cursor-pointer border border-[#1D3557] shrink-0"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 text-[#D4AF70] animate-spin" />
                  <span>Locating...</span>
                </>
              ) : (
                <>
                  <Compass className="w-4 h-4 text-[#D4AF70]" />
                  <span>Locate Places</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Prompts Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-1">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-500 shrink-0">
              Key Hubs:
            </span>
            {QUICK_MAP_PROMPTS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSearch(item)}
                className="shrink-0 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#1D3557] text-[11px] font-medium transition-colors border border-slate-200 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content: Google Map Visual + Grounded Places */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-[#F8F9FA]">
          
          {/* Interactive Google Map Embed Frame */}
          <div className="rounded-2xl border border-[#D9E0E8] overflow-hidden bg-white shadow-xs">
            <div className="p-3 bg-white border-b border-[#D9E0E8] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1D3557]">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Google Map Navigation & Geospatial Coordinates</span>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapEmbedQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 hover:underline"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative w-full h-56 sm:h-72 bg-slate-100">
              <iframe
                title="Google Maps Location Frame"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${mapEmbedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              />
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto border border-red-200 animate-pulse">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-black text-base text-[#1D3557]">
                Retrieving Grounded Google Maps Data...
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Consulting real-time Google Maps place indices, municipal office coordinates, and physical submission counters.
              </p>
            </div>
          )}

          {/* Error Notice */}
          {error && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* Result Section */}
          {!loading && result && (
            <div className="space-y-6">
              
              {/* Grounded Google Maps Places Card (MANDATORY per SKILL.md: URLs extracted and listed as links) */}
              <div className="p-5 rounded-2xl bg-white border border-[#D9E0E8] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-black uppercase tracking-wider text-red-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    Verified Google Maps Places ({result.places.length})
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Official Maps Grounding Links
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {result.places.map((place, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl bg-[#F8F9FA] border border-[#D9E0E8] hover:border-red-300 transition-all flex flex-col justify-between space-y-2.5"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-display font-bold text-xs sm:text-sm text-[#1D3557] line-clamp-1">
                            {place.title}
                          </h4>
                          <span className="text-[9px] font-mono font-bold uppercase text-red-700 bg-red-100 px-1.5 py-0.5 rounded shrink-0">
                            Verified
                          </span>
                        </div>

                        {/* Review Snippets from placeAnswerSources */}
                        {place.reviewSnippets && place.reviewSnippets.length > 0 && (
                          <div className="mt-1.5 space-y-1">
                            {place.reviewSnippets.map((snippet, snIdx) => (
                              <p key={snIdx} className="text-[11px] text-slate-600 leading-relaxed font-sans line-clamp-2">
                                "{snippet}"
                              </p>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between gap-2">
                        <a
                          href={place.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-red-50 text-red-700 hover:text-red-800 text-[11px] font-bold border border-red-200 transition-colors shadow-2xs"
                        >
                          <MapPin className="w-3 h-3 text-red-600" />
                          <span>View on Google Maps</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-slate-600 hover:text-[#1D3557] font-semibold"
                        >
                          <Navigation className="w-3 h-3" />
                          <span>Get Route</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Description & Submission Guidelines */}
              <div className="p-6 rounded-2xl bg-white border border-[#D9E0E8] shadow-xs space-y-3">
                <span className="text-[11px] font-mono font-black uppercase text-[#1D3557] block">
                  Procurement Office Details & Submission Advice
                </span>
                <div className="prose prose-sm max-w-none text-[#1E293B] text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap select-text">
                  {result.text}
                </div>
              </div>

            </div>
          )}

          {/* Default Headquarters Card if no search executed yet */}
          {!loading && !result && (
            <div className="p-6 rounded-2xl bg-white border border-[#D9E0E8] shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1D3557] text-[#D4AF70] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#D4AF70]" />
                </div>
                <div>
                  <h3 className="font-display font-black text-base text-[#1D3557]">
                    Bid Tender 4 U Registered Headquarters (Ahmedabad)
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Ground Floor, S-1, City Center, Near Swastik Cross Road, C G Road, Navrangpura, Ahmedabad 380009
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Our central physical office in Ahmedabad handles walk-in clients, physical NIT tender document reviews, notarized affidavit drafting, CA UDIN certificates, and same-day Class-3 DSC cryptographic token issuance.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                <a
                  href="https://maps.google.com/?q=City+Center+Navrangpura+CG+Road+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-2xs"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open HQ in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => handleSearch('MSME-DFO & AMC Danapith Ahmedabad')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
                >
                  <Search className="w-3.5 h-3.5 text-slate-600" />
                  <span>Find Ahmedabad Tender Offices</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#D9E0E8] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600 font-medium text-center sm:text-left">
            Need physical submission assistance or notarized paperwork in Ahmedabad?
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl('Hello Bid Tender 4 U, I would like to visit your Ahmedabad office or get assistance for a physical tender submission.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Our Office</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenInquiry) {
                  onOpenInquiry('Tender Document Analysis & Eligibility Audit');
                }
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white font-black text-xs transition-all shadow-xs cursor-pointer border border-[#1D3557]"
            >
              <span>Schedule Walk-in / Intake</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF70]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
