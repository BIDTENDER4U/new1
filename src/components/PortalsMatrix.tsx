import React, { useState } from 'react';
import { PORTALS_DATA, getWhatsAppUrl } from '../lib/constants';
import { Check, Shield, Globe, ExternalLink, MessageCircle } from 'lucide-react';

export const PortalsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentPortal = PORTALS_DATA[activeTab];

  return (
    <section id="portals" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
            Procurement Ecosystem
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Government Portals We Support Across India
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Every e-procurement portal enforces different Java runtime configurations, PKI signature drivers, and submission rules. We ensure seamless bid locking on all leading platforms.
          </p>
        </div>

        {/* Portal selector tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {PORTALS_DATA.map((portal, index) => (
            <button
              key={portal.shortCode}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === index
                  ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                  : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-300'
              }`}
            >
              {portal.name}
            </button>
          ))}
        </div>

        {/* Active Portal Deep Dive Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                {currentPortal.region}
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs font-mono font-bold text-slate-600">
                CODE: {currentPortal.shortCode}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              {currentPortal.name}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {currentPortal.description}
            </p>

            {/* Portal features */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                Key Platform Rules & Bidding Protocols:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentPortal.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span className="font-semibold">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DSC Requirements Bar */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3 text-xs text-amber-900 font-medium">
              <Shield className="w-4 h-4 text-amber-700 shrink-0" />
              <div>
                <strong className="font-bold text-amber-950">DSC Standard Required:</strong> {currentPortal.dscRequirement}
              </div>
            </div>
          </div>

          {/* Action Callout Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-50/90 via-white to-amber-100/50 text-slate-900 p-6 sm:p-8 rounded-2xl border border-amber-300 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center mb-4 text-amber-800 shadow-xs">
                <Globe className="w-5 h-5 text-amber-700" />
              </div>
              <h4 className="font-display text-xl font-black text-slate-900 mb-2">
                Need Help with {currentPortal.shortCode} Tender?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Whether you need assistance with vendor enrollment, Class-3 certificate mapping, or document submission, our Ahmedabad consultancy team provides guaranteed real-time assistance.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-amber-200">
              <a
                href={getWhatsAppUrl(`Hello Bid Tender 4 U, I need bidding support on ${currentPortal.name} (${currentPortal.shortCode}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp for {currentPortal.shortCode}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
