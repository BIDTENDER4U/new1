import React from 'react';
import { ArrowRight, CheckCircle2, FileText, MessageCircle, Clock, MapPin } from 'lucide-react';
import { getWhatsAppUrl, TRUST_STATS } from '../lib/constants';

interface HeroProps {
  onScrollToForm: () => void;
  onOpenChecklistModal: () => void;
  onOpenFreeSummaryModal?: () => void;
  onOpenLettersModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onScrollToForm, 
  onOpenChecklistModal,
  onOpenFreeSummaryModal,
  onOpenLettersModal
}) => {
  const urgentWhatsAppUrl = getWhatsAppUrl('Hello Bid Tender 4 U, I have an urgent tender closing soon and need immediate document review and bid support.');

  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] text-slate-900 pt-10 pb-20 border-b border-[#D9E0E8]">
      {/* Background ambient warm subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#D4AF70]/10 via-[#D4AF70]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper kicker pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D9E0E8] text-[#1D3557] text-xs font-bold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF70] animate-pulse"></span>
            <span className="text-[#1D3557] font-extrabold">All India Tender Consultancy</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600 font-semibold">GeM & Non-GeM Bidding Specialists</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D9E0E8] text-[#1D3557] text-xs font-bold shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF70]" />
            <span className="text-slate-700 font-semibold">Headquartered in Ahmedabad, Gujarat</span>
          </div>
        </div>

        {/* Main headline and subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1D3557] leading-[1.15]" style={{ textWrap: 'balance' }}>
            Win Government & GeM Tenders with{' '}
            <span className="text-[#1D3557] underline decoration-[#D4AF70] decoration-4 underline-offset-8">Zero Disqualification Risk</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Expert tender consultancy for contractors, manufacturers, MSMEs, and service providers. From{' '}
            <strong className="text-[#1D3557] font-extrabold">GeM Portal custom bidding</strong> to{' '}
            <strong className="text-[#1D3557] font-extrabold">state e-procurement (nProcure, SPPP Rajasthan, CPPP)</strong>, we handle document audits, technical packaging, EMD waivers, and DSC submission.
          </p>

          {/* Bulleted trust guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-sm text-[#1D3557] font-bold">
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-lg border border-[#D9E0E8] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF70] shrink-0" />
              <span>100% NIT Criteria Verification</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-lg border border-[#D9E0E8] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF70] shrink-0" />
              <span>MSME / Udyam EMD Exemption Support</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-lg border border-[#D9E0E8] shadow-xs">
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

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenChecklistModal}
              className="text-xs text-[#1D3557] font-bold hover:text-[#152742] underline decoration-[#D4AF70] decoration-2 underline-offset-4 py-1.5 px-3 transition-colors cursor-pointer"
            >
              View GeM & Government Document Checklist →
            </button>

            {onOpenLettersModal && (
              <button
                type="button"
                onClick={onOpenLettersModal}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-300 text-xs font-bold text-[#1D3557] transition-all cursor-pointer shadow-2xs"
                title="View and use OEM Authorization Letter, Startup representation & acceptance letters"
              >
                <FileText className="w-3.5 h-3.5 text-[#996515]" />
                <span>Use Sample Tender Letters (OEM MAF & GFR 173)</span>
                <span className="px-1.5 py-0.2 bg-[#1D3557] text-[#D4AF70] text-[9px] rounded font-mono font-black uppercase">
                  USE
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Urgent deadline notice card */}
        <div className="max-w-2xl mx-auto mb-14 p-4 rounded-2xl bg-white border border-[#D9E0E8] shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8F9FA] border border-[#D9E0E8] text-[#D4AF70] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#D4AF70]" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-[#1D3557]">Emergency Tender Closing Today or Tomorrow?</div>
              <div className="text-xs text-slate-600 font-medium">Fast-track Packet-A & Packet-B document review within 4 hours.</div>
            </div>
          </div>
          <a
            href={urgentWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-black text-white hover:bg-emerald-500 flex items-center gap-1.5 bg-emerald-600 px-3.5 py-2 rounded-xl border border-emerald-600 shadow-xs transition-all"
          >
            <span>Express Help</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

        {/* Quantified Social Proof Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          {TRUST_STATS.map((stat, idx) => (
            <div key={idx} className="p-3 text-center border-r last:border-r-0 border-slate-200">
              <div className="font-display font-black text-2xl sm:text-3xl text-slate-950 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 mt-1 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
