import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  MessageCircle, 
  MapPin, 
  Handshake, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  FileCheck2,
  Image as ImageIcon,
  SlidersHorizontal,
  Award
} from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

interface HeroProps {
  onScrollToForm: () => void;
  onOpenChecklistModal: () => void;
  onOpenFreeSummaryModal?: () => void;
  onOpenLettersModal?: () => void;
}

interface BackgroundPhotoOption {
  id: string;
  name: string;
  shortDesc: string;
  url: string;
  alt: string;
}

const BACKGROUND_PHOTOS: BackgroundPhotoOption[] = [
  {
    id: 'handshake',
    name: 'Tender Win & Trust Handshake',
    shortDesc: 'Executive partnership sealing tender victory',
    url: '/images/tender-success-handshake.jpg',
    alt: 'Professional executive handshake sealing government tender contract and partnership'
  },
  {
    id: 'building',
    name: 'Corporate Infrastructure',
    shortDesc: 'Modern glass towers representing institutional strength',
    url: '/images/corporate-trust-building.jpg',
    alt: 'High-rise modern corporate glass skyscraper reflecting transparency and enterprise strength'
  },
  {
    id: 'audit',
    name: 'Contract Document Audit',
    shortDesc: 'Diligent compliance review and financial scrutiny',
    url: '/images/tender-document-audit.jpg',
    alt: 'Tender compliance specialist auditing contract terms, BOQ parameters, and financial schedules'
  }
];

export const Hero: React.FC<HeroProps> = ({ 
  onScrollToForm, 
  onOpenChecklistModal,
  onOpenFreeSummaryModal,
}) => {
  const [selectedBgId, setSelectedBgId] = useState<string>('handshake');
  const [photoIntensity, setPhotoIntensity] = useState<'vivid' | 'balanced' | 'subtle'>('balanced');
  const [showPhotoControls, setShowPhotoControls] = useState<boolean>(false);

  const urgentWhatsAppUrl = getWhatsAppUrl(
    'Hello Bid Tender 4 U, I have an urgent tender closing soon and need immediate document review and bid support.'
  );

  const currentBg = BACKGROUND_PHOTOS.find((bg) => bg.id === selectedBgId) || BACKGROUND_PHOTOS[0];

  // Dynamic overlay opacity based on selected photo intensity
  const overlayClasses = {
    vivid: 'bg-gradient-to-b from-[#F8F9FA]/80 via-[#F8F9FA]/72 to-[#F8F9FA]/88 backdrop-blur-[1px]',
    balanced: 'bg-gradient-to-b from-[#F8F9FA]/88 via-[#F8F9FA]/82 to-[#F8F9FA]/94 backdrop-blur-[1.5px]',
    subtle: 'bg-gradient-to-b from-[#F8F9FA]/95 via-[#F8F9FA]/92 to-[#F8F9FA]/98 backdrop-blur-[2px]',
  }[photoIntensity];

  const imageOpacityClasses = {
    vivid: 'opacity-40 sm:opacity-45 contrast-110 saturate-110',
    balanced: 'opacity-28 sm:opacity-32 contrast-105 saturate-105',
    subtle: 'opacity-18 sm:opacity-20 contrast-100 saturate-100',
  }[photoIntensity];

  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] text-slate-900 pt-10 pb-16 sm:pb-20 border-b border-[#D9E0E8]">
      {/* 1. Real High-Definition Background Photo representing Success, Trust & Partnership */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={currentBg.url}
          alt={currentBg.alt}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transform scale-105 transition-all duration-1000 ease-out ${imageOpacityClasses}`}
          loading="eager"
        />

        {/* Readability Guard: Layered Gradient & Frosted Mask preserving text clarity */}
        <div className={`absolute inset-0 transition-all duration-700 ${overlayClasses}`} />

        {/* Radial vignette drawing eyes to center headline */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(248,249,250,0.85)_80%)]" />

        {/* Warm Golden Glow Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#D4AF70]/20 via-[#D4AF70]/5 to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper kicker pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D9E0E8] text-[#1D3557] text-xs font-bold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF70] animate-pulse"></span>
            <span className="text-[#1D3557] font-extrabold">All India Tender Consultancy</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600 font-semibold">GeM & Non-GeM Bidding Specialists</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D9E0E8] text-[#1D3557] text-xs font-bold shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF70]" />
            <span className="text-slate-700 font-semibold">Headquartered in Ahmedabad, Gujarat</span>
          </div>
        </div>

        {/* Main headline and subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1D3557] leading-[1.15]" 
            style={{ textWrap: 'balance' }}
          >
            Win Government & GeM Tenders with{' '}
            <span className="text-[#1D3557] underline decoration-[#D4AF70] decoration-4 underline-offset-8">
              Zero Disqualification Risk
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-800 font-medium max-w-3xl mx-auto leading-relaxed">
            Expert tender consultancy for contractors, manufacturers, MSMEs, and service providers. From{' '}
            <strong className="text-[#1D3557] font-extrabold">GeM Portal custom bidding</strong> to{' '}
            <strong className="text-[#1D3557] font-extrabold">state e-procurement (nProcure, SPPP Rajasthan, CPPP)</strong>, we handle document audits, technical packaging, EMD waivers, and DSC submission.
          </p>

          {/* Bulleted trust guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-sm text-[#1D3557] font-bold">
            <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#D9E0E8] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF70] shrink-0" />
              <span>100% NIT Criteria Verification</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#D9E0E8] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF70] shrink-0" />
              <span>MSME / Udyam EMD Exemption Support</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#D9E0E8] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF70] shrink-0" />
              <span>Class-3 DSC Portal Encryption</span>
            </span>
          </div>

          {/* Action CTAs: Navy with White Text */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenFreeSummaryModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white font-black text-base border border-[#D4AF70]/50 shadow-md transition-all transform active:scale-98 cursor-pointer"
            >
              <FileText className="w-5 h-5 text-[#D4AF70]" />
              <span>Get Free Summary of Tender</span>
            </button>

            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white font-extrabold text-base border border-[#1D3557] transition-all shadow-md active:scale-98 cursor-pointer"
            >
              <span>Submit Tender for Audit</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <a
              href={urgentWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base border border-emerald-600 transition-all group shadow-md active:scale-98"
            >
              <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span>WhatsApp Specialist</span>
            </a>
          </div>

          {/* Secondary document checklist link */}
          <div className="mt-5 flex items-center justify-center">
            <button
              onClick={onOpenChecklistModal}
              className="text-xs text-[#1D3557] font-bold hover:text-[#152742] underline decoration-[#D4AF70] decoration-2 underline-offset-4 py-1.5 px-3 transition-colors cursor-pointer"
            >
              View GeM & Government Document Checklist →
            </button>
          </div>

          {/* Trust Banner with Verified Bidding Metric & Background Photo Pill */}
          <div className="mt-8 pt-6 border-t border-[#D9E0E8]/70 flex flex-wrap items-center justify-between gap-4 max-w-3xl mx-auto bg-white/70 backdrop-blur-md px-4 py-3 rounded-2xl border">
            {/* Trust badge with handshake icon */}
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#1D3557] text-[#D4AF70] flex items-center justify-center shrink-0 shadow-xs">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-[#1D3557] uppercase tracking-wider">
                    Trust & Success Record
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-black bg-emerald-100 text-emerald-800">
                    100% Compliant
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-semibold">
                  1,450+ Tenders Prepared · Zero Technical Rejections · ₹120+ Cr Cumulative Bid Value
                </p>
              </div>
            </div>

            {/* Background Photo Switcher Control */}
            <div className="relative flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowPhotoControls(!showPhotoControls)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer border border-slate-200"
                title="Customize background photo theme and clarity"
              >
                <ImageIcon className="w-3.5 h-3.5 text-[#1D3557]" />
                <span className="hidden sm:inline">Photo:</span>
                <span className="text-[#1D3557]">{currentBg.name.split(' ')[0]}</span>
                <SlidersHorizontal className="w-3 h-3 text-slate-400 ml-0.5" />
              </button>

              {/* Photo Selector Popover */}
              {showPhotoControls && (
                <div className="absolute right-0 bottom-full mb-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-30 text-left animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                    <span className="text-xs font-black text-[#1D3557]">Background Photo Theme</span>
                    <button
                      type="button"
                      onClick={() => setShowPhotoControls(false)}
                      className="text-slate-400 hover:text-slate-600 text-xs p-1"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-1.5 mb-3">
                    {BACKGROUND_PHOTOS.map((bg) => (
                      <button
                        key={bg.id}
                        type="button"
                        onClick={() => setSelectedBgId(bg.id)}
                        className={`w-full flex items-center gap-2.5 p-2 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer ${
                          selectedBgId === bg.id
                            ? 'bg-[#1D3557] text-white shadow-xs'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <img 
                          src={bg.url} 
                          alt="" 
                          className="w-8 h-8 rounded object-cover shrink-0 border border-white/20"
                        />
                        <div className="min-w-0">
                          <p className="font-bold truncate">{bg.name}</p>
                          <p className={`text-[10px] truncate ${selectedBgId === bg.id ? 'text-slate-300' : 'text-slate-500'}`}>
                            {bg.shortDesc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Intensity / Clarity Selector */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Text Clarity & Photo Visibility
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {(['subtle', 'balanced', 'vivid'] as const).map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setPhotoIntensity(level)}
                          className={`py-1 text-center rounded text-[11px] font-bold capitalize transition-colors cursor-pointer ${
                            photoIntensity === level
                              ? 'bg-[#D4AF70] text-[#1D3557]'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
