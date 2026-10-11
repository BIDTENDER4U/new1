import React, { useState, useEffect } from 'react';
import { Trophy, Award, Users, KeyRound, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

interface LiveSuccessCounterProps {
  onOpenInquiry: (category?: string, service?: string) => void;
  onNavigate: (page: string) => void;
}

interface CounterMetric {
  id: string;
  label: string;
  targetValue: number;
  suffix: string;
  prefix?: string;
  subtitle: string;
  icon: React.ReactNode;
  growth: string;
}

export const LiveSuccessCounter: React.FC<LiveSuccessCounterProps> = ({ onOpenInquiry, onNavigate }) => {
  // Animated counters state
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    tendersWon: 450,
    isoIssued: 1200,
    happyClients: 820,
    dscTokens: 2050,
  });

  const [recentActivityIndex, setRecentActivityIndex] = useState(0);

  const liveTickerActivities = [
    { time: 'Just now', event: 'Patel Infracon won ₹4.85 Cr AMC Road & Drainage tender on nProcure Gujarat' },
    { time: '14 mins ago', event: 'ISO 9001:2015 fast-track certificate issued & verified for Surat EPC vendor' },
    { time: '38 mins ago', event: 'GeM OEM Authorization Code successfully linked for ICU Monitor bid in Jaipur' },
    { time: '1 hr ago', event: 'Class-3 Combo DSC token issued via paperless e-KYC in Ahmedabad' },
    { time: '2 hrs ago', event: 'Apex Security qualified Packet-A technical scrutiny for ₹8.4 Cr PSU contract' },
  ];

  // Auto-rotate live activity banner every 4 seconds
  useEffect(() => {
    const activityTimer = setInterval(() => {
      setRecentActivityIndex((prev) => (prev + 1) % liveTickerActivities.length);
    }, 4000);
    return () => clearInterval(activityTimer);
  }, []);

  // Smooth Count-Up Animation on Mount
  useEffect(() => {
    const targets = {
      tendersWon: 488,
      isoIssued: 1294,
      happyClients: 865,
      dscTokens: 2180,
    };

    const duration = 1500; // ms
    const frameRate = 30; // frames
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counterTimer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        tendersWon: Math.floor(400 + (targets.tendersWon - 400) * easeProgress),
        isoIssued: Math.floor(1000 + (targets.isoIssued - 1000) * easeProgress),
        happyClients: Math.floor(700 + (targets.happyClients - 700) * easeProgress),
        dscTokens: Math.floor(1800 + (targets.dscTokens - 1800) * easeProgress),
      });

      if (frame >= totalFrames) {
        setCounts(targets);
        clearInterval(counterTimer);
      }
    }, frameRate);

    return () => clearInterval(counterTimer);
  }, []);

  const metrics: CounterMetric[] = [
    {
      id: 'tendersWon',
      label: 'Tenders Won by Clients',
      targetValue: counts.tendersWon,
      suffix: '+',
      subtitle: 'Across GeM, nProcure, SPPP, CPPP & Railways',
      icon: <Trophy className="w-5 h-5 text-amber-700" />,
      growth: '+18 This Month',
    },
    {
      id: 'isoIssued',
      label: 'ISO Certifications Issued',
      targetValue: counts.isoIssued,
      suffix: '+',
      subtitle: 'ISO 9001, 14001, 45001, 27001, 13485 (IAF / Non-IAF)',
      icon: <Award className="w-5 h-5 text-emerald-700" />,
      growth: '24-48h Delivery',
    },
    {
      id: 'happyClients',
      label: 'Happy Contractors & Vendors',
      targetValue: counts.happyClients,
      suffix: '+',
      subtitle: 'Civil contractors, MSMEs, OEMs & suppliers in Gujarat & India',
      icon: <Users className="w-5 h-5 text-blue-700" />,
      growth: '99.4% Retention',
    },
    {
      id: 'dscTokens',
      label: 'Class-3 DSC Tokens Setup',
      targetValue: counts.dscTokens,
      suffix: '+',
      subtitle: 'FIPS crypto USB tokens configured with PKI drivers',
      icon: <KeyRound className="w-5 h-5 text-purple-700" />,
      growth: '30-Min Issuance',
    },
  ];

  const currentActivity = liveTickerActivities[recentActivityIndex];

  return (
    <section className="py-12 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header & Live Indicator */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Real-Time Performance Dashboard</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Proven Milestones in Government Procurement
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Delivering verified results for contractors, manufacturers, and MSME bidders across India.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('stories')}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
            </button>

            <button
              onClick={() => onOpenInquiry('Tender Bidding', 'Direct Bid Assistance')}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Start Your Bid</span>
            </button>
          </div>
        </div>

        {/* 4 Counter Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-amber-400 p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                    {metric.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                    {metric.growth}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                    {metric.targetValue.toLocaleString('en-IN')}
                  </span>
                  <span className="font-mono text-2xl font-bold text-amber-600">
                    {metric.suffix}
                  </span>
                </div>

                <h3 className="font-display text-sm font-black text-slate-900 mb-1">
                  {metric.label}
                </h3>
              </div>

              <p className="text-[11px] text-slate-600 font-medium leading-relaxed pt-3 border-t border-slate-100 mt-2">
                {metric.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Live Milestone Activity Ticker Strip */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 text-[11px] font-mono font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
              <span>LIVE FEED</span>
            </div>

            <div className="text-xs text-slate-800 flex items-center gap-2 truncate">
              <span className="text-slate-500 font-mono text-[11px] shrink-0 font-bold">
                [{currentActivity.time}]:
              </span>
              <span className="font-bold text-slate-900 truncate">
                {currentActivity.event}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-xs">
            <a
              href={getWhatsAppUrl('Hello Bid Tender 4 U, I saw your live performance counter and would like to consult on our upcoming government tender.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-emerald-700 flex items-center gap-1 font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp Verification</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
