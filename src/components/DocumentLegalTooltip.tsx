import React, { useState, useRef, useEffect } from 'react';
import { Scale, X, ShieldCheck, Info } from 'lucide-react';
import { LegalRequirementDetail } from '../lib/gemLegalRequirements';

interface DocumentLegalTooltipProps {
  detail: LegalRequirementDetail;
  position?: 'top' | 'bottom' | 'auto';
  align?: 'left' | 'right' | 'center';
  compact?: boolean;
}

export const DocumentLegalTooltip: React.FC<DocumentLegalTooltipProps> = ({
  detail,
  position = 'top',
  align = 'center',
  compact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  // Click-outside listener for touch devices
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  // Determine positioning classes
  const positionClasses = position === 'bottom'
    ? 'top-full mt-2'
    : 'bottom-full mb-2';

  const alignClasses = align === 'left'
    ? 'left-0'
    : align === 'right'
    ? 'right-0'
    : 'left-1/2 -translate-x-1/2';

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tooltip Interactive Trigger */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        aria-expanded={isOpen}
        aria-label={`Legal purpose and GFR rule for ${detail.ruleRef}`}
        className={`inline-flex items-center gap-1.5 rounded-lg transition-all cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 select-none ${
          compact
            ? 'p-1 text-slate-500 hover:text-amber-800 bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-400'
            : 'px-2.5 py-1 text-[11px] font-bold text-amber-900 bg-amber-100 hover:bg-amber-200/80 border border-amber-300'
        }`}
      >
        <Scale className="w-3.5 h-3.5 text-amber-800 group-hover:scale-110 transition-transform shrink-0" />
        {!compact && (
          <span className="font-bold tracking-tight">Legal Purpose & GFR</span>
        )}
        <Info className="w-3 h-3 text-slate-400 group-hover:text-amber-800 shrink-0" />
      </button>

      {/* Floating Tooltip Card */}
      {isOpen && (
        <div
          role="tooltip"
          className={`absolute ${positionClasses} ${alignClasses} z-50 w-76 sm:w-88 p-4 rounded-2xl bg-white border border-slate-300 text-slate-900 shadow-2xl animate-in fade-in zoom-in-95 duration-150 text-left`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-300">
                <Scale className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-800 block">
                  Statutory Rule Reference
                </span>
                <span className="text-xs font-black text-slate-900 block leading-tight">
                  {detail.ruleRef}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Legal Purpose */}
          <div className="space-y-2.5 text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-0.5">
                <Info className="w-3 h-3 text-amber-700" />
                Legal Purpose
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {detail.purpose}
              </p>
            </div>

            {/* Contractor Benefit (EMD waiver, MSME preference, etc.) */}
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1 mb-0.5 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                Contractor Benefit & Exemption
              </span>
              <p className="text-xs text-emerald-950 leading-relaxed font-semibold">
                {detail.benefit}
              </p>
            </div>

            {/* Scrutiny Committee Verification Point */}
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5 font-mono">
                Tender Scrutiny Focus:
              </span>
              <p className="text-[11px] text-slate-700 leading-normal font-medium">
                {detail.scrutinyFocus}
              </p>
            </div>
          </div>

          {/* Micro arrow indicator */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-slate-300 rotate-45 ${
              position === 'bottom'
                ? '-top-1.5 border-t border-l'
                : '-bottom-1.5 border-b border-r'
            }`}
          />
        </div>
      )}
    </div>
  );
};
