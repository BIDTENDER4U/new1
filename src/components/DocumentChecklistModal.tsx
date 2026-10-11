import React, { useState } from 'react';
import { X, CheckSquare, Square, Download, Share2, MessageCircle, AlertTriangle, FileText, CheckCircle2, Scale } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';
import { GEM_LEGAL_REQUIREMENTS } from '../lib/gemLegalRequirements';
import { DocumentLegalTooltip } from './DocumentLegalTooltip';

interface DocumentChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLettersModal?: () => void;
}

interface ChecklistItem {
  id: string;
  category: string;
  name: string;
  criticality: 'Mandatory' | 'High' | 'Exemption';
  description: string;
  legalKey?: string;
}

const TENDER_CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'doc-1',
    category: 'Statutory Registration',
    name: 'Udyam Registration Certificate (MSME)',
    criticality: 'Exemption',
    description: 'Required for 100% EMD exemption and tender fee waiver under GFR 2017 Rule 170. NIC code must match tender scope.',
    legalKey: 'udyam-msme',
  },
  {
    id: 'doc-2',
    category: 'Tax & Compliance',
    name: 'GST Registration Certificate & Latest GSTR-3B',
    criticality: 'Mandatory',
    description: 'Active GSTIN status. GSTR-3B filings for the last 3-6 months showing tax compliance.',
    legalKey: 'gstin-certificate',
  },
  {
    id: 'doc-3',
    category: 'Financial Capability',
    name: 'CA Turnover Certificate with UDIN',
    criticality: 'Mandatory',
    description: 'Audited annual turnover for the last 3 consecutive financial years. Must contain a valid ICAI Unique Document Identification Number (UDIN).',
    legalKey: 'ca-turnover',
  },
  {
    id: 'doc-4',
    category: 'Financial Capability',
    name: 'Bank Solvency Certificate / Net Worth',
    criticality: 'High',
    description: 'Certified by a Scheduled Commercial Bank, issued within the last 6-12 months confirming financial capability.',
    legalKey: 'solvency-certificate',
  },
  {
    id: 'doc-5',
    category: 'Legal Undertakings',
    name: 'Notarized Non-Blacklisting Affidavit',
    criticality: 'Mandatory',
    description: 'On appropriate stamp paper, declaring enterprise has never been debarred or blacklisted by any Central/State Govt. department.',
    legalKey: 'non-disqualification',
  },
  {
    id: 'doc-6',
    category: 'Technical Capability',
    name: 'Past Experience & Work Completion Certificates',
    criticality: 'Mandatory',
    description: 'Copies of work orders accompanied by official end-user completion/satisfactory performance certificates.',
    legalKey: 'past-experience',
  },
  {
    id: 'doc-7',
    category: 'Digital Security',
    name: 'Class-3 Combo DSC (Signing + Encryption)',
    criticality: 'Mandatory',
    description: 'Valid digital signature certificate mapped to authorized director/partner for bid encryption and locking.',
    legalKey: 'class3-dsc',
  },
  {
    id: 'doc-8',
    category: 'Make in India (MII)',
    name: 'Local Content Declaration (Class-I / Class-II)',
    criticality: 'High',
    description: 'Self-certification or CA certificate confirming percentage of domestic value addition under DPIIT order.',
    legalKey: 'local-content-mii',
  },
  {
    id: 'doc-startup',
    category: 'Startup Exemption',
    name: 'Startup India Certificate Registration (DPIIT)',
    criticality: 'Exemption',
    description: '100% waiver on Prior Turnover & Experience under GFR 2017 Rule 173(i), plus full EMD exemption in public tenders.',
    legalKey: 'startup-india',
  },
  {
    id: 'doc-fssai',
    category: 'Statutory License',
    name: 'FSSAI Food Safety Licence (Basic / State / Central)',
    criticality: 'Mandatory',
    description: 'Mandatory statutory food hygiene licence for Canteen, Catering, Hospital Dietary, Mid-Day Meal, and Ration tenders under FSS Act 2006.',
    legalKey: 'fssai-license',
  },
];

const GEM_CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'gem-1',
    category: 'Entity Proof',
    name: 'Business / Proprietor PAN Card',
    criticality: 'Mandatory',
    description: 'Verified via Income Tax CBDT API during initial seller profile creation.',
    legalKey: 'pan-card',
  },
  {
    id: 'gem-2',
    category: 'Identity Proof',
    name: 'Aadhaar Card of Key Authorized Signatory',
    criticality: 'Mandatory',
    description: 'Must have active mobile linked to receive Aadhaar OTP during e-KYC.',
    legalKey: 'aadhaar-signatory',
  },
  {
    id: 'gem-3',
    category: 'Tax Registration',
    name: 'Active GSTIN Certificate (Form REG-06)',
    criticality: 'Mandatory',
    description: 'Must have active tax status matching the registered entity name and legal address.',
    legalKey: 'gstin-certificate',
  },
  {
    id: 'gem-4',
    category: 'Banking',
    name: 'Current Bank Account & Cancelled Cheque',
    criticality: 'Mandatory',
    description: 'Verified through Public Financial Management System (PFMS) for government bill payments.',
    legalKey: 'bank-pfms',
  },
  {
    id: 'gem-5',
    category: 'MSME Benefit',
    name: 'Udyam Registration Certificate (MSME)',
    criticality: 'Exemption',
    description: 'Grants Caution Money exemption and priority in purchase preference under GFR rules.',
    legalKey: 'udyam-msme',
  },
  {
    id: 'gem-startup',
    category: 'Startup India Benefit',
    name: 'Startup India Certificate of Recognition (DPIIT)',
    criticality: 'Exemption',
    description: 'Statutory 100% exemption from Prior Turnover and Prior Experience in GeM custom bids under GFR Rule 173(i).',
    legalKey: 'startup-india',
  },
  {
    id: 'gem-fssai',
    category: 'Food Safety Mandate',
    name: 'FSSAI Food Safety Licence (FoSCoS)',
    criticality: 'Mandatory',
    description: 'Mandatory statutory requirement for all GeM Food, Canteen, Catering, and Beverage categories.',
    legalKey: 'fssai-license',
  },
  {
    id: 'gem-6',
    category: 'Tax History',
    name: 'Past 3 Assessment Years ITR-V & Balance Sheet',
    criticality: 'Mandatory',
    description: 'Mandatory for income tax verification to determine turnover category and caution deposit slab.',
    legalKey: 'itr-returns',
  },
  {
    id: 'gem-7',
    category: 'Constitution',
    name: 'Entity Proof (COI / Partnership Deed / Trade License)',
    criticality: 'Mandatory',
    description: 'Certificate of Incorporation for Pvt Ltd, registered Partnership Deed for firms, or Trade License for proprietorship.',
    legalKey: 'factory-license',
  },
  {
    id: 'gem-8',
    category: 'OEM / Reseller',
    name: 'Trademark / OEM Authorization / Factory License',
    criticality: 'High',
    description: 'Required if registering as Manufacturer/OEM or bidding on OEM-locked custom bids as authorized reseller.',
    legalKey: 'trademark-oem',
  },
];

export const DocumentChecklistModal: React.FC<DocumentChecklistModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenLettersModal 
}) => {
  const [activeTab, setActiveTab] = useState<'tender' | 'gem'>('gem');
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({
    'doc-1': true,
    'doc-2': true,
    'doc-7': true,
    'gem-1': true,
    'gem-2': true,
    'gem-3': true,
  });

  if (!isOpen) return null;

  const currentItems = activeTab === 'gem' ? GEM_CHECKLIST_ITEMS : TENDER_CHECKLIST_ITEMS;

  const toggleItem = (id: string) => {
    setCheckedState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = currentItems.filter((item) => checkedState[item.id]).length;
  const readinessPercent = Math.round((completedCount / currentItems.length) * 100);

  const getMissingListText = () => {
    const missing = currentItems.filter((item) => !checkedState[item.id]).map((i) => i.name);
    return missing.join(', ');
  };

  const handleWhatsAppConsultation = () => {
    const contextTitle = activeTab === 'gem' ? 'GeM Portal Registration Audit' : 'Tender Bidding Documentation Audit';
    const text = `Hello Bid Tender 4 U, I completed the ${contextTitle}:
*Readiness Score:* ${readinessPercent}% (${completedCount}/${currentItems.length} documents ready)
*Still Missing / Need Assistance With:* ${getMissingListText() || 'None, all documents verified'}

Please assist me in verifying our documentation.`;

    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-white text-slate-900 flex items-center justify-between border-b border-slate-200">
          <div>
            <div className="text-xs uppercase font-extrabold tracking-wider text-amber-800 font-mono">
              Interactive Compliance Audit
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900">
              Essential Document Checklist
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="bg-slate-100 p-2 border-b border-slate-200 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('gem')}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'gem'
                ? 'bg-amber-500 text-slate-950 font-extrabold shadow-xs'
                : 'text-slate-700 hover:text-slate-950 bg-white/80'
            }`}
          >
            GeM Registration Documents (Seller & OEM)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tender')}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeTab === 'tender'
                ? 'bg-amber-500 text-slate-950 font-extrabold shadow-xs'
                : 'text-slate-700 hover:text-slate-950 bg-white/80'
            }`}
          >
            Tender Bidding & NIT Bid Packet Checklist
          </button>
        </div>

        {/* Readiness Meter */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {activeTab === 'gem' ? 'GeM Profile Readiness' : 'Tender Compliance Readiness'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-slate-900">{readinessPercent}%</span>
              <span className="text-xs text-slate-500">
                ({completedCount} of {currentItems.length} verified)
              </span>
            </div>
          </div>

          <div className="w-40 sm:w-60 h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                readinessPercent >= 80 ? 'bg-emerald-500' : readinessPercent >= 50 ? 'bg-amber-500' : 'bg-rose-500'
              }`}
              style={{ width: `${readinessPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Checklist Scrollable Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {currentItems.map((item) => {
            const isChecked = !!checkedState[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                  isChecked
                    ? 'bg-amber-50/50 border-amber-300 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="mt-0.5 text-amber-500 shrink-0">
                  {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-slate-400" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-slate-900">{item.name}</span>
                      {item.legalKey && GEM_LEGAL_REQUIREMENTS[item.legalKey] && (
                        <div onClick={(e) => e.stopPropagation()} className="shrink-0">
                          <DocumentLegalTooltip
                            detail={GEM_LEGAL_REQUIREMENTS[item.legalKey]}
                            position="top"
                            align="left"
                            compact={false}
                          />
                        </div>
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                        item.criticality === 'Mandatory'
                          ? 'bg-rose-100 text-rose-700'
                          : item.criticality === 'Exemption'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {item.criticality}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Click checkboxes above to audit your documents</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onOpenLettersModal && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLettersModal();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#1D3557] hover:bg-[#152742] text-white font-bold text-xs transition-colors cursor-pointer border border-[#1D3557] shadow-xs"
              >
                <FileText className="w-3.5 h-3.5 text-[#D4AF70]" />
                <span>View Sample Letters</span>
              </button>
            )}

            <button
              onClick={handleWhatsAppConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Verify on WhatsApp</span>
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
