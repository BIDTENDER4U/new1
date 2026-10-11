import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, HelpCircle, FileCheck, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

type SectorType = 'goods' | 'works' | 'services';
type EntityType = 'msme-micro' | 'startup' | 'medium-large';
type TurnoverType = 'under-50l' | '50l-2cr' | '2cr-10cr' | 'above-10cr';
type PortalType = 'gem' | 'nprocure' | 'sppp' | 'cppp' | 'ireps';

export const EligibilityChecker: React.FC = () => {
  const [sector, setSector] = useState<SectorType>('goods');
  const [entity, setEntity] = useState<EntityType>('msme-micro');
  const [turnover, setTurnover] = useState<TurnoverType>('50l-2cr');
  const [portal, setPortal] = useState<PortalType>('gem');

  // Compute eligibility deductions
  const isEmdExempt = entity === 'msme-micro' || entity === 'startup';
  const hasExperienceRelaxation = (entity === 'msme-micro' || entity === 'startup') && portal === 'gem';
  const needsVendorAssessment = sector === 'goods' && portal === 'gem';

  const getEmdText = () => {
    if (isEmdExempt) {
      return 'Eligible for 100% EMD Waiver under Rule 170 GFR / MSME Policy. You only need to submit a signed Bid Securing Declaration.';
    }
    return 'Mandatory EMD submission required via Bank Guarantee (BG), FDR, or online portal payment.';
  };

  const getExperienceText = () => {
    if (hasExperienceRelaxation) {
      return 'Prior Turnover and Prior Experience criteria may be relaxed on GeM tenders as per buyer discretion under GeM GTC.';
    }
    return 'Standard past experience certificates (similar work orders meeting 40%, 50%, or 80% of bid value) are mandatory.';
  };

  const getRequiredDocuments = () => {
    const list = [
      'Valid GST Registration & Latest 3B Return',
      'PAN Card of Enterprise & Authorized Signatory',
      'Class-3 Combo DSC (Signing + Encryption)',
      'CA Certified Turnover Certificate with Unique Document Identification Number (UDIN)',
    ];

    if (entity === 'msme-micro') {
      list.unshift('Udyam Registration Certificate with matching NIC category');
    } else if (entity === 'startup') {
      list.unshift('DPIIT Certificate of Recognition as an Indian Startup');
    }

    if (sector === 'goods') {
      list.push('OEM Authorization Form / Manufacturer Test Certificate (BIS/ISO)');
    } else if (sector === 'works') {
      list.push('State PWD/R&B Contractor Enlistment / Solvency Certificate');
    } else {
      list.push('EPF & ESIC Registration with compliance challans');
    }

    return list;
  };

  const generateWhatsAppMessage = () => {
    const sectorName = sector.toUpperCase();
    const entityName = entity === 'msme-micro' ? 'MSME Udyam' : entity === 'startup' ? 'DPIIT Startup' : 'Private Ltd / Large';
    const portalName = portal.toUpperCase();

    const text = `Hello Bid Tender 4 U, I ran the Tender Eligibility Assessment on your portal:
*Sector:* ${sectorName}
*Entity:* ${entityName}
*Turnover:* ${turnover}
*Target Portal:* ${portalName}
*EMD Exemption Expected:* ${isEmdExempt ? 'Yes (Rule 170)' : 'No'}

Please help me review my upcoming tender and prepare my technical bid compliance.`;

    return getWhatsAppUrl(text);
  };

  return (
    <section id="eligibility" className="py-20 bg-white text-slate-900 border-b border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Diagnostic Tool</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Check Your Tender Eligibility & EMD Exemption Status
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Government procurement rules differ by portal, sector, and company category. Use our live logic calculator to check if you qualify for EMD waivers and identify mandatory documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
            {/* Step 1: Sector */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                1. What does your company supply?
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'goods', label: 'Goods / Products', desc: 'Hardware, Medical, Furniture, IT' },
                  { id: 'works', label: 'Works / Civil', desc: 'Roads, Buildings, Electrical EPC' },
                  { id: 'services', label: 'Services', desc: 'Security, Manpower, Facility, IT' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSector(item.id as SectorType)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      sector === item.id
                        ? 'border-amber-400 bg-amber-100 text-slate-950 font-bold ring-1 ring-amber-400 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold">{item.label}</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 mt-1 line-clamp-1 font-medium">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Entity Type */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                2. Enterprise Registration Status
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'msme-micro', label: 'MSME / Udyam', desc: 'Micro or Small Enterprise' },
                  { id: 'startup', label: 'DPIIT Startup', desc: 'Govt. Recognized Startup' },
                  { id: 'medium-large', label: 'Standard Company', desc: 'Medium / Large / Non-MSME' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEntity(item.id as EntityType)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      entity === item.id
                        ? 'border-amber-400 bg-amber-100 text-slate-950 font-bold ring-1 ring-amber-400 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold">{item.label}</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 mt-1 line-clamp-1 font-medium">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Target Portal */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                3. Primary Bidding Portal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { id: 'gem', label: 'GeM 4.0' },
                  { id: 'nprocure', label: 'Gujarat (nProcure)' },
                  { id: 'sppp', label: 'Rajasthan (SPPP)' },
                  { id: 'cppp', label: 'Central (CPPP)' },
                  { id: 'ireps', label: 'Railways (IREPS)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPortal(item.id as PortalType)}
                    className={`p-2.5 rounded-lg border text-center transition-all text-xs font-bold cursor-pointer ${
                      portal === item.id
                        ? 'border-amber-400 bg-amber-500 text-slate-950 shadow-xs font-black'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Annual Turnover */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                4. Approximate Annual Turnover (FY 2023-24 / 2024-25)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'under-50l', label: '< ₹50 Lakhs' },
                  { id: '50l-2cr', label: '₹50L - ₹2 Crore' },
                  { id: '2cr-10cr', label: '₹2 Cr - ₹10 Crore' },
                  { id: 'above-10cr', label: '₹10 Crore+' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTurnover(item.id as TurnoverType)}
                    className={`p-2 rounded-lg border text-center transition-all text-xs font-bold cursor-pointer ${
                      turnover === item.id
                        ? 'border-amber-400 bg-amber-100 text-amber-950 ring-1 ring-amber-400'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-800 font-mono">
                Evaluation Assessment
              </span>
              <h3 className="text-xl font-display font-black text-slate-900 mt-1">
                Your Bidding Eligibility Summary
              </h3>
            </div>

            {/* EMD Exemption Card */}
            <div className={`p-4 rounded-xl border ${isEmdExempt ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isEmdExempt ? 'text-emerald-700' : 'text-slate-400'}`} />
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span>EMD Exemption:</span>
                    <span className={isEmdExempt ? 'text-emerald-800 font-black' : 'text-amber-800 font-black'}>
                      {isEmdExempt ? 'ELIGIBLE (100% Waiver)' : 'NON-EXEMPT'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                    {getEmdText()}
                  </p>
                </div>
              </div>
            </div>

            {/* Past Experience & Turnover Relaxation */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Prior Turnover & Experience Norms
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    {getExperienceText()}
                  </p>
                </div>
              </div>
            </div>

            {/* Mandatory Document Checklist Preview */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                Mandatory Documentation Required:
              </div>
              <ul className="space-y-2">
                {getRequiredDocuments().map((doc, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct action CTA */}
            <div className="pt-2">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Discuss Eligibility on WhatsApp</span>
              </a>
              <p className="text-[11px] text-slate-500 text-center mt-2 font-medium">
                Our specialists will analyze your specific tender number for free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
