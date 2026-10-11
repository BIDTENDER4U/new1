import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  CheckCircle2, 
  QrCode, 
  ShieldCheck, 
  Smartphone, 
  MessageCircle, 
  ExternalLink, 
  FileCheck2, 
  Check, 
  Building2,
  Info
} from 'lucide-react';
import { PAYMENT_INFO, BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';
import { useToast } from '../context/ToastContext';

interface PaymentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
  suggestedAmount?: string;
}

export const PaymentDetailsModal: React.FC<PaymentDetailsModalProps> = ({
  isOpen,
  onClose,
  serviceName,
  suggestedAmount
}) => {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyUpi = async () => {
    try {
      await navigator.clipboard.writeText(PAYMENT_INFO.upiId);
      setCopied(true);
      showToast({
        title: 'UPI ID Copied to Clipboard',
        description: PAYMENT_INFO.upiId,
        type: 'success',
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappProofText = `Hello Bid Tender 4 U, I have made a UPI payment to ${PAYMENT_INFO.upiId}.\n\nService: ${serviceName || 'Tender Consultancy / Bidding Services'}\nAmount: ${suggestedAmount ? `₹${suggestedAmount}` : 'As agreed'}\n\nPlease find my payment screenshot attached. Kindly acknowledge and issue formal receipt.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 text-left animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-modal-title"
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#102038] via-[#1D3557] to-[#102038] text-white flex items-center justify-between gap-4 border-b border-[#D4AF70]/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#D4AF70]/20 border border-[#D4AF70]/40 flex items-center justify-center text-[#D4AF70] shadow-xs">
              <QrCode className="w-5 h-5 text-[#D4AF70]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="payment-modal-title" className="font-display font-black text-base sm:text-lg tracking-tight text-white">
                  Official Payment Details
                </h3>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Verified UPI
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Bid Tender 4 U • All India Tender Consultancy
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Payment Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-slate-800">
          {/* Service context banner if opened for a specific service */}
          {serviceName && (
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-amber-950 font-bold">
                <FileCheck2 className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Payment for: {serviceName}</span>
              </div>
              {suggestedAmount && (
                <span className="font-mono font-extrabold text-amber-900 bg-amber-200/70 px-2 py-0.5 rounded-lg">
                  ₹{suggestedAmount}
                </span>
              )}
            </div>
          )}

          {/* Primary UPI Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-[#1D3557]/40 transition-colors space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span className="uppercase tracking-wider font-mono text-[11px] text-slate-500">Official UPI ID (VPA)</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                ICICI Bank Verified
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 p-3 rounded-xl bg-white border border-slate-300 shadow-2xs">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[11px] font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md shrink-0">
                  UPI
                </span>
                <span className="font-mono font-extrabold text-sm sm:text-base text-slate-950 truncate select-all tracking-tight">
                  {PAYMENT_INFO.upiId}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyUpi}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-xs ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#1D3557] hover:bg-[#152742] text-white'
                }`}
                title="Copy UPI ID to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy UPI ID</span>
                  </>
                )}
              </button>
            </div>

            {/* Account Details */}
            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <div>
                <span className="text-slate-500 text-[11px] block">Payee / Account Name:</span>
                <span className="font-bold text-slate-900">{PAYMENT_INFO.payeeName}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[11px] block">Bank Name:</span>
                <span className="font-bold text-slate-900">{PAYMENT_INFO.bankName}</span>
              </div>
            </div>
          </div>

          {/* QR Code and Scan Section */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-blue-50/60 to-slate-50 border border-blue-200/80 flex flex-col sm:flex-row items-center gap-5">
            {/* QR Card */}
            <div className="relative p-3 bg-white rounded-2xl border border-slate-300 shadow-md shrink-0 flex flex-col items-center">
              <img
                src={PAYMENT_INFO.qrCodeUrl}
                alt={`Scan & Pay via UPI - ${PAYMENT_INFO.upiId}`}
                className="w-40 h-40 object-contain rounded-lg"
                loading="lazy"
              />
              <div className="mt-2 text-[10px] font-black uppercase text-slate-600 tracking-wider">
                Scan to Pay
              </div>
            </div>

            {/* QR Instructions & Direct Pay Intent */}
            <div className="space-y-3 text-left">
              <div>
                <h4 className="font-black text-sm text-[#1D3557] flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-blue-700" />
                  <span>Scan via Any Mobile UPI App</span>
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Open <strong>Google Pay</strong>, <strong>PhonePe</strong>, <strong>Paytm</strong>, or <strong>BHIM</strong> on your mobile device and scan the QR code.
                </p>
              </div>

              {/* Direct UPI Mobile Deep Link */}
              <div>
                <a
                  href={PAYMENT_INFO.upiDeepLink}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs transition-colors shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Tap to Open UPI App on Mobile</span>
                </a>
              </div>

              {/* Supported Apps Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {PAYMENT_INFO.acceptedApps.map((app, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs"
                  >
                    {app.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3 Simple Steps */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#1D3557] font-mono">
              3 Easy Steps to Complete Payment
            </h4>
            <ol className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1D3557] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <span>Copy UPI ID <strong>{PAYMENT_INFO.upiId}</strong> or scan the QR code.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1D3557] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <span>Enter the consultancy / retainer fee as advised by your tender officer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-[#1D3557] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <span>Share the transaction screenshot & Reference ID on our official WhatsApp desk for instant receipt generation.</span>
              </li>
            </ol>
          </div>

          {/* Consultancy Notice & Guarantee */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-[11px] leading-relaxed">
              <strong className="text-slate-900">Official Consultancy Gateway:</strong> All payments are secured under standard banking protocols. GST invoice and formal billing acknowledgment are issued within 2 hours of payment confirmation.
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium w-full sm:w-auto">
            <Building2 className="w-4 h-4 text-[#D4AF70]" />
            <span>Consultancy Support: +91 9726407267</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl(whatsappProofText)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share Screenshot on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
