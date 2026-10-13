import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultUrl = getWhatsAppUrl('Hello Bid Tender 4 U, I need quick assistance regarding an upcoming tender.');

  return (
    <div className="fixed bottom-18 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-2 bg-white text-slate-900 text-xs px-3.5 py-2 rounded-xl shadow-xl border border-slate-200 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Need Tender Help? <strong className="text-slate-950 font-black">Chat on WhatsApp</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-800 ml-1 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Bid Tender 4 U on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:scale-110 active:scale-95 group relative animate-pulse-subtle"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-600"></span>
        </span>
        <MessageCircle className="w-7 h-7 group-hover:scale-105 transition-transform" />
      </a>
    </div>
  );
};
