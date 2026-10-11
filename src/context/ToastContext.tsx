import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { CheckCircle2, AlertCircle, Info, X, MessageCircle, ExternalLink } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

export type ToastType = 'success' | 'info' | 'error';

export interface ToastOptions {
  title: string;
  description?: string;
  type?: ToastType;
  inquiryId?: string;
  duration?: number;
}

interface ToastItem extends ToastOptions {
  id: string;
}

interface ToastContextType {
  showToast: (options: ToastOptions) => void;
  dismissToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
  dismissToast: () => {},
});

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const showToast = useCallback(
    ({ title, description, type = 'success', inquiryId, duration = 6000 }: ToastOptions) => {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      const newToast: ToastItem = {
        id,
        title,
        description,
        type,
        inquiryId,
        duration,
      };

      setToasts((prev) => [...prev.slice(-2), newToast]); // Keep maximum 3 toasts visible

      if (duration > 0) {
        const timer = setTimeout(() => {
          dismissToast(id);
        }, duration);
        timersRef.current.set(id, timer);
      }
    },
    [dismissToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}

      {/* Floating Toast Notification Container */}
      <div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col gap-2.5 max-w-sm sm:max-w-md w-[calc(100vw-2rem)] pointer-events-none"
        aria-live="polite"
        role="region"
        aria-label="Notifications"
      >
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';

          return (
            <div
              key={toast.id}
              className="pointer-events-auto bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-xl shadow-slate-900/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 relative overflow-hidden text-left"
            >
              {/* Subtle Auto-Dismiss Indicator Line */}
              {toast.duration && toast.duration > 0 && (
                <div
                  className={`absolute bottom-0 left-0 h-1 transition-all ease-linear ${
                    isSuccess
                      ? 'bg-emerald-500'
                      : isError
                      ? 'bg-rose-500'
                      : 'bg-[#1D3557]'
                  }`}
                  style={{
                    animation: `shrinkWidth ${toast.duration}ms linear forwards`,
                  }}
                />
              )}

              <div className="flex items-start gap-3">
                {/* Status Icon */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow-2xs ${
                    isSuccess
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
                      : isError
                      ? 'bg-rose-50 border-rose-200 text-rose-600'
                      : 'bg-blue-50 border-blue-200 text-blue-600'
                  }`}
                >
                  {isSuccess ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : isError ? (
                    <AlertCircle className="w-5 h-5 text-rose-600" />
                  ) : (
                    <Info className="w-5 h-5 text-blue-600" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 tracking-tight">
                      {toast.title}
                    </h4>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                      Confirmed
                    </span>
                  </div>

                  {toast.description && (
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-sans">
                      {toast.description}
                    </p>
                  )}

                  {/* Registered Reference Tag & Quick Expedite Link */}
                  {toast.inquiryId && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        Ref #{toast.inquiryId}
                      </span>

                      <a
                        href={getWhatsAppUrl(
                          `Hello Bid Tender 4 U, I just submitted an inquiry (Ref #${toast.inquiryId}). Please confirm receipt and let me know the preliminary eligibility.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Expedite via WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Dismiss Button */}
                <button
                  type="button"
                  onClick={() => dismissToast(toast.id)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                  aria-label="Close notification"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes shrinkWidth {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
