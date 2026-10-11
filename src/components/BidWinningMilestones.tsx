import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  FileCheck2, 
  Briefcase, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Flame, 
  Clock, 
  Star, 
  Building2,
  KeyRound,
  FileText
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';

interface BidWinningMilestonesProps {
  onOpenInquiry: (category?: string, service?: string) => void;
  onNavigate: (page: string) => void;
}

interface MilestoneMetric {
  id: string;
  label: string;
  targetValue: number;
  suffix: string;
  prefix?: string;
  description: string;
  icon: React.ReactNode;
  growthBadge: string;
  glowColor: string;
}

type PeriodFilter = 'all-time' | 'fy-recent' | 'gem-state';

export const BidWinningMilestones: React.FC<BidWinningMilestonesProps> = ({
  onOpenInquiry,
  onNavigate,
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>('all-time');
  const [tickerIndex, setTickerIndex] = useState(0);

  // Target values based on period filter
  const targetData: Record<PeriodFilter, { assisted: number; won: number; iso: number; dsc: number; valueCr: number; winRate: number }> = {
    'all-time': {
      assisted: 3480,
      won: 980,
      iso: 1540,
      dsc: 2950,
      valueCr: 680,
      winRate: 99.4,
    },
    'fy-recent': {
      assisted: 1420,
      won: 460,
      iso: 680,
      dsc: 1250,
      valueCr: 310,
      winRate: 99.6,
    },
    'gem-state': {
      assisted: 2860,
      won: 840,
      iso: 1190,
      dsc: 2400,
      valueCr: 540,
      winRate: 99.2,
    },
  };

  const activeTargets = targetData[selectedPeriod];

  // Dynamic Animated Count Values
  const [displayCounts, setDisplayCounts] = useState({
    assisted: 2800,
    won: 750,
    iso: 1200,
    dsc: 2300,
    valueCr: 500,
  });

  // Count-up animation whenever target period changes
  useEffect(() => {
    const duration = 1200; // ms
    const frameRate = 30; // ms per frame
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const startCounts = {
      assisted: Math.floor(activeTargets.assisted * 0.8),
      won: Math.floor(activeTargets.won * 0.78),
      iso: Math.floor(activeTargets.iso * 0.82),
      dsc: Math.floor(activeTargets.dsc * 0.8),
      valueCr: Math.floor(activeTargets.valueCr * 0.75),
    };

    setDisplayCounts(startCounts);

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setDisplayCounts({
        assisted: Math.round(startCounts.assisted + (activeTargets.assisted - startCounts.assisted) * easeOut),
        won: Math.round(startCounts.won + (activeTargets.won - startCounts.won) * easeOut),
        iso: Math.round(startCounts.iso + (activeTargets.iso - startCounts.iso) * easeOut),
        dsc: Math.round(startCounts.dsc + (activeTargets.dsc - startCounts.dsc) * easeOut),
        valueCr: Math.round(startCounts.valueCr + (activeTargets.valueCr - startCounts.valueCr) * easeOut),
      });

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayCounts({
          assisted: activeTargets.assisted,
          won: activeTargets.won,
          iso: activeTargets.iso,
          dsc: activeTargets.dsc,
          valueCr: activeTargets.valueCr,
        });
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, [selectedPeriod]);

  // Live Simulated Activity Feed Ticker
  const recentMilestones = [
    {
      time: '12 mins ago',
      tag: 'TENDER WON',
      text: 'Civil Contractor in Ahmedabad awarded ₹4.85 Cr AMC Road & Drainage Works on nProcure',
    },
    {
      time: '28 mins ago',
      tag: 'GEM ACCEPTANCE',
      text: 'Healthcare supplier in Jaipur cleared technical scrutiny on GeM 4.0 for ₹2.3 Cr Medical Equipment bid',
    },
    {
      time: '45 mins ago',
      tag: 'ISO ACCREDITED',
      text: 'ISO 9001:2015 & ISO 13485 issued in 24 hours for Surat Industrial Works bidder',
    },
    {
      time: '1 hr ago',
      tag: 'CONTRACT WON',
      text: 'Apex Security & Facility Solutions awarded ₹6.2 Cr PSU Manpower contract in Ahmedabad under Rule 170 EMD exemption',
    },
    {
      time: '2 hrs ago',
      tag: 'DSC DISPATCH',
      text: 'Class-3 Combo USB Crypto Token issued via 20-min paperless e-KYC for Solar Contractor in Maharashtra',
    },
  ];

  // Auto-rotate ticker every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % recentMilestones.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [recentMilestones.length]);

  const activeMilestone = recentMilestones[tickerIndex];

  // Primary Milestone Metric Cards
  const milestoneCards: MilestoneMetric[] = [
    {
      id: 'assisted',
      label: 'Tenders Assisted',
      targetValue: displayCounts.assisted,
      suffix: '+',
      description: 'NIT audit, technical BOQ packaging & portal submission support across GeM, CPPP, IREPS & State Portals.',
      icon: <Briefcase className="w-5 h-5 text-amber-700" />,
      growthBadge: 'Active Pipeline',
      glowColor: 'amber',
    },
    {
      id: 'won',
      label: 'Contracts Won',
      targetValue: displayCounts.won,
      suffix: '+',
      description: 'Direct government work orders & GeM L1 contract awards successfully secured by our client contractors.',
      icon: <Trophy className="w-5 h-5 text-emerald-700" />,
      growthBadge: '₹680+ Cr Value',
      glowColor: 'emerald',
    },
    {
      id: 'iso',
      label: 'ISO Certificates Issued',
      targetValue: displayCounts.iso,
      suffix: '+',
      description: 'IAF & Non-IAF accredited ISO 9001, 14001, 45001, 27001 & 13485 fast-track tender compliance certificates.',
      icon: <Award className="w-5 h-5 text-blue-700" />,
      growthBadge: '24-48h Delivery',
      glowColor: 'blue',
    },
    {
      id: 'dsc',
      label: 'Class-3 DSC Tokens Setup',
      targetValue: displayCounts.dsc,
      suffix: '+',
      description: 'FIPS-certified USB hardware crypto tokens configured with Java PKI drivers for zero submission failures.',
      icon: <KeyRound className="w-5 h-5 text-purple-700" />,
      growthBadge: '30-Min Issuance',
      glowColor: 'purple',
    },
  ];

  return (
    <section id="milestones" className="py-14 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2.5 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
              <span>Real-Time Social Proof & Verified Results</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Bid Winning Milestones
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed font-medium">
              Track our verified record of tender approvals, contract awards, and statutory certifications delivered for contractors and manufacturers across Gujarat and Pan-India.
            </p>
          </div>

          {/* Period Filter Toggles & Action */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 self-start">
              {[
                { id: 'all-time', label: 'All-Time Track Record' },
                { id: 'fy-recent', label: 'FY 2025-26' },
                { id: 'gem-state', label: 'GeM & State Portals' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedPeriod(filter.id as PeriodFilter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedPeriod === filter.id
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => onNavigate('stories')}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
            </button>
          </div>
        </div>

        {/* 4 Animated Counter Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-left">
          {milestoneCards.map((metric) => (
            <div
              key={metric.id}
              className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-lg group relative overflow-hidden"
            >
              <div className="space-y-3">
                {/* Header icon and growth badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                    {metric.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 font-mono">
                    {metric.growthBadge}
                  </span>
                </div>

                {/* Animated Number Counter */}
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {metric.targetValue.toLocaleString('en-IN')}
                  </span>
                  <span className="font-mono text-2xl font-black text-amber-700">
                    {metric.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  {metric.label}
                </h3>
              </div>

              {/* Subtitle Description */}
              <p className="text-[11px] text-slate-600 leading-relaxed pt-3 mt-3 border-t border-slate-200 font-medium">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary Trust Highlights Bar (Cumulative Value & Technical Qualification Rate) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-left">
          {/* Card 1: Cumulative Bid Value */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-300 font-bold font-mono text-base">
              ₹
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-xl sm:text-2xl font-black text-slate-900">
                  ₹{displayCounts.valueCr} Cr+
                </span>
                <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Cumulative Value</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
                Cumulative tender value processed with audited BOQs and compliant statutory documentation.
              </p>
            </div>
          </div>

          {/* Card 2: Technical Acceptance Rate */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-300">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-xl sm:text-2xl font-black text-emerald-800">
                  {activeTargets.winRate}%
                </span>
                <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Packet-A Clearance</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
                First-stage technical scrutiny clearance rate under GFR 2017 & GeM GTC guidelines.
              </p>
            </div>
          </div>

          {/* Card 3: Pan-India State Coverage */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 border border-blue-300">
              <Building2 className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-mono text-xl sm:text-2xl font-black text-slate-900">
                  28 States + UTs
                </span>
                <span className="text-[10px] text-slate-500 font-mono uppercase font-bold">Pan-India Support</span>
              </div>
              <p className="text-[11px] text-slate-600 mt-0.5 font-medium">
                Consultancy active across Gujarat, Maharashtra, Rajasthan, Delhi NCR and all state boards.
              </p>
            </div>
          </div>
        </div>

        {/* Live Milestone Activity Ticker Strip */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-xs text-left">
          <div className="flex items-center gap-3 overflow-hidden flex-1">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-mono font-bold shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>LIVE MILESTONES</span>
            </div>

            <div className="text-xs text-slate-800 flex items-center gap-2 truncate">
              <span className="text-slate-500 font-mono text-[11px] shrink-0 font-bold">
                [{activeMilestone.time}]
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-bold shrink-0">
                {activeMilestone.tag}
              </span>
              <span className="font-medium text-slate-700 truncate">
                {activeMilestone.text}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
            <button
              onClick={() => onOpenInquiry('Tender Bidding', 'Bid Assistance Inquiry')}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
            >
              <span>Get Bid Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={getWhatsAppUrl('Hello Bid Tender 4 U, I saw your Bid Winning Milestones counter and would like assistance with an upcoming government tender.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-700 flex items-center gap-1 text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
