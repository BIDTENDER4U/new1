import React, { useState } from 'react';
import { 
  QrCode, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Smartphone,
  CreditCard,
  Building2
} from 'lucide-react';
import { PAYMENT_INFO, getWhatsAppUrl } from '../lib/constants';
import { useToast } from '../context/ToastContext';

interface PaymentDetailsSectionProps {
  onOpenPaymentModal?: () => void;
  className?: string;
}

export const PaymentDetailsSection: React.FC<PaymentDetailsSectionProps> = ({
  onOpenPaymentModal,
  className = ''
}) => {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

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
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const whatsappProofText = `Hello Bid Tender 4 U, I have made a UPI payment to ${PAYMENT_INFO.upiId}. Please find the screenshot attached.`;

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 text-left ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-amber-800 font-mono">
              Official Payment Gateway
            </span>
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              Verified UPI
            </span>
          </div>
          <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
            Bank & UPI Payment Details
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Securely transfer retainer fees, document analysis charges, and DSC/ISO token issuance payments.
          </p>
        </div>

        {onOpenPaymentModal && (
          <button
            type="button"
            onClick={onOpenPaymentModal}
            className="self-start sm:self-auto px-4 py-2 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>View Full QR Modal</span>
          </button>
        )}
      </div>

      {/* Main UPI & QR Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* QR Code Container (4 cols) */}
        <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="p-2 bg-white rounded-xl border border-slate-300 shadow-xs">
            <img
              src={PAYMENT_INFO.qrCodeUrl}
              alt={`UPI QR Code - ${PAYMENT_INFO.upiId}`}
              className="w-36 h-36 object-contain"
              loading="lazy"
            />
          </div>
          <span className="text-[11px] font-bold text-slate-700 mt-2 text-center">
            Scan via Google Pay, PhonePe, Paytm or BHIM
          </span>
        </div>

        {/* Details & Actions Container (8 cols) */}
        <div className="md:col-span-8 space-y-4">
          {/* UPI ID Badge */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span>UPI ID (Virtual Payment Address)</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px]">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                ICICI Bank Verified
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 p-2.5 rounded-xl bg-white border border-slate-300">
              <span className="font-mono font-black text-sm sm:text-base text-slate-950 truncate select-all px-1">
                {PAYMENT_INFO.upiId}
              </span>

              <button
                type="button"
                onClick={handleCopyUpi}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-xs ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#1D3557] hover:bg-[#152742] text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy UPI</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Account Details Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 font-bold block uppercase">Payee Name</span>
              <span className="font-bold text-slate-900 truncate block">{PAYMENT_INFO.payeeName}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 font-bold block uppercase">Bank Name</span>
              <span className="font-bold text-slate-900 truncate block">{PAYMENT_INFO.bankName}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-slate-500 font-bold block uppercase">Account Type</span>
              <span className="font-bold text-slate-900 truncate block">Current / Merchant</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href={PAYMENT_INFO.upiDeepLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors shadow-xs"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Pay on Mobile UPI App</span>
            </a>

            <a
              href={getWhatsAppUrl(whatsappProofText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Send Screenshot (+91 9726407267)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Security Footer Notice */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-950">
        <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-[11px] leading-relaxed">
          <strong>Tax Invoice & Acknowledgment:</strong> All retainer, tender document audit, and token issuance payments receive a formal GST tax invoice and digital acknowledgment within 2 hours. Never pay to unverified accounts.
        </div>
      </div>
    </div>
  );
};
