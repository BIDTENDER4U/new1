import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  KeyRound, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MessageCircle, 
  Cpu, 
  Rocket, 
  UtensilsCrossed 
} from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

interface TenderEnablersSectionProps {
  onSelectEnabler: (enablerTitle: string) => void;
}

export const TenderEnablersSection: React.FC<TenderEnablersSectionProps> = ({ onSelectEnabler }) => {
  return (
    <section id="certifications-dsc" className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* Background ambient light tint */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Mandatory Statutory Registrations & Tender Enablers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Startup India Certificate, FSSAI Licence, ISO & Class-3 DSC
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Missing statutory certificates like Startup India (DPIIT), FSSAI food licence, ISO certification, or a Class-3 DSC token causes instant bid rejection. Bid Tender 4 U arranges 100% compliant, verifiable registrations with express turnaround.
          </p>
        </div>

        {/* 5 Power Enabler Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Startup India Certificate Registration (DPIIT) */}
          <div className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200 hover:border-amber-500 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl hover:shadow-amber-500/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                  <Rocket className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-mono">
                  GFR 173(i) 100% Waiver
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                Startup India Certificate Registration
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Official DPIIT Recognition under Startup India. Legally exempts your enterprise from Prior Turnover and Prior Experience in GeM and central government tenders:
              </p>

              <div className="space-y-2 mb-6">
                {[
                  { title: '100% Turnover & Experience Waiver', desc: 'Rule 173(i) GFR 2017 exemption across all GeM bids' },
                  { title: '100% EMD Exemption in Tenders', desc: 'Bid Securing Declaration accepted in place of earnest money' },
                  { title: 'GeM Startup Runway Direct Access', desc: 'Direct onboarding without traditional 3-year past history' },
                  { title: '80% Patent & 50% TM Fee Rebate', desc: 'Fast-tracked intellectual property protection' },
                  { title: 'Section 80-IAC 3-Year Tax Holiday', desc: 'Income tax exemption advisory & DPIIT filings' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">{item.title}:</strong>{' '}
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectEnabler('Startup India Certificate Registration (DPIIT)')}
                className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Register Startup Certificate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppUrl('Hello Bid Tender 4 U, I want to apply for Startup India Certificate Registration (DPIIT) to get prior turnover and experience exemption in government tenders.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto p-2.5 rounded-xl bg-white border border-slate-300 text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1 text-xs font-semibold shadow-sm"
                title="WhatsApp for Startup Registration"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="sm:hidden">WhatsApp Startup Help</span>
              </a>
            </div>
          </div>

          {/* Card 2: FSSAI Licence & Food Safety Registration */}
          <div className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200 hover:border-amber-500 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl hover:shadow-amber-500/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-800 font-mono">
                  Mandatory For Food Tenders
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                FSSAI Licence & Registration
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Mandatory statutory food safety licensing for catering, canteen, hostel mess, hospital dietary, mid-day meals, and military ration tenders:
              </p>

              <div className="space-y-2 mb-6">
                {[
                  { title: 'Basic, State & Central Licenses', desc: 'FoSCoS licensing aligned to tender turnover thresholds' },
                  { title: 'GeM Food Category Eligibility', desc: 'Mandatory document for GeM Packaged Food & Canteen bids' },
                  { title: 'Hospital & IRCTC Catering Ready', desc: 'Compliant with Indian Railway, AIIMS & Defense standards' },
                  { title: 'Hygiene & FSMS Documentation', desc: 'Food Safety Management Plan & inspection readiness' },
                  { title: 'Annual Return (Form D1) & Renewal', desc: 'Continuous compliance to prevent tender debarment' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">{item.title}:</strong>{' '}
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectEnabler('FSSAI Licence & Food Safety Registration (Basic/State/Central)')}
                className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Apply for FSSAI Licence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppUrl('Hello Bid Tender 4 U, I urgently need an FSSAI License (Basic / State / Central) for participating in government food supply and canteen tenders.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto p-2.5 rounded-xl bg-white border border-slate-300 text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1 text-xs font-semibold shadow-sm"
                title="WhatsApp for FSSAI License"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="sm:hidden">WhatsApp FSSAI Help</span>
              </a>
            </div>
          </div>

          {/* Card 3: ISO Certification (All Types) */}
          <div className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200 hover:border-amber-500 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl hover:shadow-amber-500/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 font-mono">
                  Fast-Track 24-48 Hrs
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                All Types of ISO Certification
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Mandatory for 90%+ government and GeM tenders. Authentic IAF & Non-IAF accredited certificates with online barcode verification:
              </p>

              <div className="space-y-2 mb-6">
                {[
                  { code: 'ISO 9001:2015', desc: 'Quality Management (Required in 95% Tenders)' },
                  { code: 'ISO 14001:2015', desc: 'Environmental Management System (EMS)' },
                  { code: 'ISO 45001:2018', desc: 'Occupational Health & Safety (OHSMS)' },
                  { code: 'ISO 27001:2022', desc: 'Information Security (IT & Software Bids)' },
                  { code: 'ISO 13485:2016', desc: 'Medical Devices & Hospital Supply Tenders' },
                  { code: 'ISO 22000 / HACCP / GMP', desc: 'Food Safety, Canteen & Pharma Bids' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">{item.code}:</strong>{' '}
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectEnabler('ISO Certification (All Types - 9001, 14001, 45001, etc.)')}
                className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Apply for ISO Certificate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppUrl('Hello Bid Tender 4 U, I urgently need an ISO certificate (ISO 9001 / 14001 / 45001) for an upcoming tender.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto p-2.5 rounded-xl bg-white border border-slate-300 text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1 text-xs font-semibold shadow-sm"
                title="WhatsApp for ISO"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="sm:hidden">WhatsApp ISO Help</span>
              </a>
            </div>
          </div>

          {/* Card 4: Class-3 Digital Signature Certificate (DSC) */}
          <div className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200 hover:border-amber-500 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl hover:shadow-amber-500/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                  <KeyRound className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-800 font-mono">
                  30 Mins Issuance
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                Class-3 Combo DSC & USB Token
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Legally required for uploading and encrypting government tender packets on GeM, nProcure, CPPP, SPPP Rajasthan, and IREPS:
              </p>

              <div className="space-y-2 mb-6">
                {[
                  { title: 'Class 3 Combo (Signing + Encryption)', desc: 'CCA approved for all Indian e-procurement portals' },
                  { title: 'FIPS Certified USB Crypto Token', desc: 'Supplied on genuine ePass2003 / ProxKey tokens' },
                  { title: 'Paperless Aadhaar e-KYC Issuance', desc: 'Quick 30-minute processing without physical documents' },
                  { title: '2 & 3 Years Validity Options', desc: 'Available for Organization / Company and Individuals' },
                  { title: 'Browser Java & Driver Setup', desc: 'Remote AnyDesk / TeamViewer support to map DSC on portals' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">{item.title}:</strong>{' '}
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectEnabler('Class-3 Combo DSC & USB Crypto Token')}
                className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Get Class-3 DSC Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppUrl('Hello Bid Tender 4 U, I urgently need a Class-3 Combo DSC (Signing + Encryption) USB Token for portal bidding.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto p-2.5 rounded-xl bg-white border border-slate-300 text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1 text-xs font-semibold shadow-sm"
                title="WhatsApp for DSC"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="sm:hidden">WhatsApp DSC Help</span>
              </a>
            </div>
          </div>

          {/* Card 5: GeM OEM Authorization Code & Brand Approval */}
          <div className="bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200 hover:border-amber-500 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group hover:shadow-xl hover:shadow-amber-500/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-100 border border-purple-300 text-purple-800 font-mono">
                  GeM 4.0 Verified
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                GeM OEM Authorization Code
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Buyers mandate OEM Authorization Codes for branded hardware, medical gear, IT, and equipment. We arrange genuine OEM codes:
              </p>

              <div className="space-y-2 mb-6">
                {[
                  { title: 'OEM Authorization Code for Bidding', desc: 'Enables resellers to participate in locked OEM custom bids' },
                  { title: 'Brand Approval on GeM Portal', desc: 'Register your brand or become an authorized distributor on GeM' },
                  { title: 'Catalog Pairing & Product Upload', desc: 'Pair your product with verified OEM quadrant catalogs' },
                  { title: 'Vendor Assessment Assistance', desc: 'Guidance through QCI / GeM vendor assessment audits' },
                  { title: 'Protection Against Rejections', desc: 'Eliminates bid disqualification under GeM GTC Clause 4' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900">{item.title}:</strong>{' '}
                      <span className="text-slate-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectEnabler('GeM OEM Authorization Code & Brand Approval')}
                className="w-full sm:flex-1 py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Get GeM Authorization Code</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getWhatsAppUrl('Hello Bid Tender 4 U, I need an OEM Authorization Code / Brand Approval on the GeM portal for participating in a bid.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto p-2.5 rounded-xl bg-white border border-slate-300 text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1 text-xs font-semibold shadow-sm"
                title="WhatsApp for GeM Authorization"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="sm:hidden">WhatsApp GeM Code</span>
              </a>
            </div>
          </div>

        </div>

        {/* Reassurance Callout Bar */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <div className="text-left">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                100% Genuine, Legally Verifiable Registrations & Licenses
              </span>
              <p className="text-xs text-slate-600">
                All Startup India certificates are verified on the DPIIT Startup India portal. All FSSAI licences are verifiable on FoSCoS. All ISO certificates on IAF CertSearch. All DSCs are CCA-licensed.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('Hello Bid Tender 4 U, please send me details and pricing for Startup India Certificate, FSSAI Licence, ISO certification, and Class-3 DSC.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>Instant Quote on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
