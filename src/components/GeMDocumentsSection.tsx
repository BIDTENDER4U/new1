import React, { useState } from 'react';
import { FileCheck, ShieldCheck, CheckCircle2, AlertCircle, Building2, UserCheck, Factory, Award, ArrowRight, MessageCircle, Download, FileText, Sparkles, HelpCircle, Scale } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';
import { GEM_LEGAL_REQUIREMENTS } from '../lib/gemLegalRequirements';
import { DocumentLegalTooltip } from './DocumentLegalTooltip';

interface GeMDocumentsSectionProps {
  onOpenInquiry: (category?: string, service?: string) => void;
}

export const GeMDocumentsSection: React.FC<GeMDocumentsSectionProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'oem' | 'reseller' | 'constitution'>('all');

  const primaryDocuments = [
    {
      id: 'pan-card',
      title: 'Business / Proprietor PAN Card',
      desc: 'PAN of proprietor (for proprietorship) or Entity PAN (for Partnership, LLP, Pvt Ltd). Verified instantly via Income Tax portal.',
      criticality: 'Mandatory',
      legalKey: 'pan-card',
    },
    {
      id: 'aadhaar-signatory',
      title: 'Aadhaar Card of Key Authorized Signatory',
      desc: 'Must be linked to an active mobile number to receive OTP during e-KYC and digital signature verification.',
      criticality: 'Mandatory',
      legalKey: 'aadhaar-signatory',
    },
    {
      id: 'gstin-certificate',
      title: 'Active GSTIN Certificate (Form REG-06)',
      desc: 'Must have active status matching the registered business address and legal entity name on GST portal.',
      criticality: 'Mandatory',
      legalKey: 'gstin-certificate',
    },
    {
      id: 'bank-pfms',
      title: 'Bank Account Details & Cancelled Cheque',
      desc: 'Current bank account details with IFSC code. GeM verifies this through Public Financial Management System (PFMS).',
      criticality: 'Mandatory',
      legalKey: 'bank-pfms',
    },
    {
      id: 'startup-india',
      title: 'Startup India Certificate Registration (DPIIT)',
      desc: '100% statutory exemption from Prior Turnover and Prior Experience under GFR Rule 173(i) in GeM custom bids, plus 100% EMD waiver.',
      criticality: 'Exemption Benefit',
      legalKey: 'startup-india',
    },
    {
      id: 'fssai-license',
      title: 'FSSAI Food Safety Licence / Registration',
      desc: 'Mandatory statutory license for all food items, catering, canteen, hospital diet, and beverage categories under FSS Act 2006.',
      criticality: 'Food Category Mandate',
      legalKey: 'fssai-license',
    },
    {
      id: 'udyam-msme',
      title: 'Udyam MSME Registration Certificate',
      desc: 'Provides statutory exemption from Caution Money and Earnest Money Deposit (EMD) under GFR Rule 170. NIC code must match NIT.',
      criticality: 'Recommended',
      legalKey: 'udyam-msme',
    },
    {
      id: 'itr-returns',
      title: 'Past 3 Assessment Years ITR-V (Income Tax Returns)',
      desc: 'ITR-V acknowledgements along with gross turnover computation to verify financial standing via CBDT API integration.',
      criticality: 'Mandatory',
      legalKey: 'itr-returns',
    },
    {
      id: 'official-email-mobile',
      title: 'Active Official Email & Mobile Number',
      desc: 'Domain email or official Gmail/Yahoo registered with MCA/GST to receive GeM portal login OTPs and bid alerts.',
      criticality: 'Mandatory',
      legalKey: 'official-email-mobile',
    },
    {
      id: 'caution-money',
      title: 'Caution Money Deposit Receipt',
      desc: 'Online deposit to GeM: ₹5,000 (Turnover < ₹1 Cr), ₹10,000 (₹1 Cr - ₹10 Cr), or ₹25,000 (Turnover > ₹10 Cr).',
      criticality: 'Portal Rule',
      legalKey: 'caution-money',
    },
  ];

  const constitutionDocs = [
    {
      entity: 'Sole Proprietorship',
      docs: [
        'Proprietor PAN & Aadhaar Card',
        'GST Registration Certificate',
        'Udyam Registration Certificate',
        'Bank Statement / Cancelled Cheque',
        'Shop & Establishment License or Trade License',
      ],
    },
    {
      entity: 'Partnership Firm',
      docs: [
        'Partnership Firm PAN Card',
        'Registered Partnership Deed',
        'Authorization Letter for Managing Partner',
        'GST Certificate & Bank Statement',
        'Aadhaar & PAN of Managing Partner',
      ],
    },
    {
      entity: 'Private Limited / Public Ltd',
      docs: [
        'Certificate of Incorporation (CIN)',
        'Company PAN Card & MOA / AOA',
        'Board Resolution appointing Authorized Signatory',
        'Audited Balance Sheet & CA Turnover with UDIN',
        'Director Aadhaar & Class-3 DSC Token',
      ],
    },
    {
      entity: 'LLP (Limited Liability Partnership)',
      docs: [
        'Certificate of Incorporation (LLPIN)',
        'LLP Agreement & LLP PAN Card',
        'Designated Partner Authorization Letter',
        'GST & Bank Statement of LLP',
        'Designated Partner Aadhaar & Class-3 DSC',
      ],
    },
  ];

  const oemDocuments = [
    {
      id: 'trademark-certificate',
      title: 'Trademark Registration Certificate (Class 1-45)',
      desc: 'Registered Trademark (TM) in the name of entity or registered license agreement for brand ownership on GeM.',
      legalKey: 'trademark-certificate',
    },
    {
      id: 'manufacturing-license',
      title: 'Factory License / DIC Registration',
      desc: 'Factory license, Department of Industries (DIC) acknowledgment, or industrial license validating manufacturing premises.',
      legalKey: 'manufacturing-license',
    },
    {
      id: 'iso-9001',
      title: 'ISO 9001:2015 Quality Management System',
      desc: 'Accredited by NABCB/IAF, required for category creation, brand validation, and vendor assessment score.',
      legalKey: 'iso-9001',
    },
    {
      id: 'qci-assessment',
      title: 'QCI / Vendor Assessment Exemption',
      desc: 'Quality Council of India (QCI) vendor assessment report or NSIC/BIS exemption certificate for OEM dashboard clearance.',
      legalKey: 'qci-assessment',
    },
    {
      id: 'nabl-test-reports',
      title: 'NABL / BIS Product Test Reports',
      desc: 'Lab test reports from NABL accredited testing laboratory conforming to applicable BIS/IS standards.',
      legalKey: 'nabl-test-reports',
    },
    {
      id: 'pcb-cto',
      title: 'Pollution Control Board (PCB) Consent to Operate',
      desc: 'State Pollution Control Board NOC / Consent to Operate (CTO) wherever applicable for manufacturing units.',
      legalKey: 'pcb-cto',
    },
  ];

  const resellerDocuments = [
    {
      id: 'oem-authorization',
      title: 'OEM Authorization Letter / Code',
      desc: 'Official authorization letter issued on OEM letterhead specifying validity period, products, and tender reference.',
      legalKey: 'oem-authorization',
    },
    {
      id: 'reseller-panel-linking',
      title: 'GeM Reseller Panel Linking',
      desc: 'Authorization code generated by registered OEM in their GeM dashboard mapped to reseller profile.',
      legalKey: 'reseller-panel-linking',
    },
    {
      id: 'non-disqualification',
      title: 'Non-Disqualification Undertaking',
      desc: 'Declaration ensuring genuine product supply and adherence to GeM General Terms and Conditions (GTC).',
      legalKey: 'non-disqualification',
    },
  ];

  return (
    <section id="gem-documents" className="py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <FileCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Official GeM 4.0 Compliance Checklist</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Document Requirements for GeM Portal Registration
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Get your business registered on Government e-Marketplace (GeM) without rejection. Below is the complete statutory document checklist for Primary Sellers, OEMs, and Resellers.
          </p>

          {/* Statutory Tooltip Guide Hint */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold">
            <Scale className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Hover or tap the <strong>&quot;Legal Purpose &amp; GFR&quot;</strong> badge on any document to see statutory GFR rules, MSME benefits, and audit criteria.</span>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: '1. Primary Seller Account' },
              { id: 'constitution', label: '2. By Entity / Business Type' },
              { id: 'oem', label: '3. OEM / Manufacturer Panel' },
              { id: 'reseller', label: '4. Reseller / Dealer Authorization' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: Primary Seller Registration Documents */}
        {(activeTab === 'all' || activeTab === 'constitution') && (
          <div className="mb-14 text-left">
            <div className="flex items-center gap-2.5 mb-6">
              <UserCheck className="w-5 h-5 text-amber-700" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Core Mandatory Documents (All GeM Sellers)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {primaryDocuments.map((doc, idx) => {
                const legalDetail = GEM_LEGAL_REQUIREMENTS[doc.legalKey];
                return (
                  <div
                    key={doc.id}
                    className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all group relative"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center justify-center font-mono border border-amber-300">
                          {idx + 1}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            doc.criticality === 'Mandatory'
                              ? 'bg-rose-100 text-rose-800 border border-rose-200'
                              : doc.criticality === 'Portal Rule'
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          }`}
                        >
                          {doc.criticality}
                        </span>
                      </div>

                      <h4 className="font-display text-sm font-bold text-slate-900 mb-2 leading-snug">
                        {doc.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {doc.desc}
                      </p>
                    </div>

                    {/* Interactive Hover Tooltip for Legal Purpose & GFR Rules */}
                    {legalDetail && (
                      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                        <DocumentLegalTooltip 
                          detail={legalDetail}
                          position="top"
                          align={idx % 4 >= 2 ? 'right' : 'left'}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: Constitution-Wise Breakdown */}
        {(activeTab === 'constitution' || activeTab === 'all') && (
          <div className="mb-14 text-left">
            <div className="flex items-center gap-2.5 mb-6">
              <Building2 className="w-5 h-5 text-amber-700" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Documents by Business Constitution
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {constitutionDocs.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200 p-5 shadow-xs"
                >
                  <h4 className="font-display text-base font-bold text-slate-900 mb-3 pb-2 border-b border-slate-200">
                    {item.entity}
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {item.docs.map((docName, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{docName}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: OEM Panel Documents */}
        {(activeTab === 'oem' || activeTab === 'all') && (
          <div className="mb-14 text-left">
            <div className="flex items-center gap-2.5 mb-6">
              <Factory className="w-5 h-5 text-amber-700" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Additional Documents for OEM (Manufacturer) Registration
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {oemDocuments.map((doc, idx) => {
                const legalDetail = GEM_LEGAL_REQUIREMENTS[doc.legalKey];
                return (
                  <div
                    key={doc.id}
                    className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 p-5 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-amber-700 shrink-0" />
                        <h4 className="font-display text-sm font-bold text-slate-900">
                          {doc.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {doc.desc}
                      </p>
                    </div>

                    {legalDetail && (
                      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                        <DocumentLegalTooltip 
                          detail={legalDetail}
                          position="top"
                          align={idx % 3 === 2 ? 'right' : 'left'}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: Reseller Documents */}
        {(activeTab === 'reseller' || activeTab === 'all') && (
          <div className="mb-14 text-left">
            <div className="flex items-center gap-2.5 mb-6">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Documents for Reseller / Dealer Authorization
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {resellerDocuments.map((doc, idx) => {
                const legalDetail = GEM_LEGAL_REQUIREMENTS[doc.legalKey];
                return (
                  <div
                    key={doc.id}
                    className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 p-5 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-display text-sm font-bold text-slate-900 mb-2">
                        {doc.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {doc.desc}
                      </p>
                    </div>

                    {legalDetail && (
                      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                        <DocumentLegalTooltip 
                          detail={legalDetail}
                          position="top"
                          align={idx === 2 ? 'right' : 'left'}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 6-Step GeM Registration Process Road */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 mb-12 shadow-xs text-left">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
              Simple Step-by-Step Flow
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
              How GeM Registration Works with Bid Tender 4 U
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 text-center">
            {[
              { step: '01', title: 'Aadhaar e-KYC', desc: 'Mobile OTP verification of authorized signatory' },
              { step: '02', title: 'PAN Validation', desc: 'Business PAN linked and verified via Income Tax' },
              { step: '03', title: 'Bank PFMS', desc: 'Current account verified through PFMS gateway' },
              { step: '04', title: 'Tax Assessment', desc: 'ITR & GSTIN API fetch for turnover rating' },
              { step: '05', title: 'Caution Money', desc: 'Online deposit to GeM nodal bank account' },
              { step: '06', title: 'Live Profile', desc: 'Catalog upload & active bidding clearance' },
            ].map((st, sIdx) => (
              <div key={sIdx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="font-mono text-xl font-black text-amber-800 block mb-1">
                  {st.step}
                </span>
                <h4 className="font-bold text-slate-900 text-xs mb-1">{st.title}</h4>
                <p className="text-[11px] text-slate-600 font-medium">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Contextual Internal Links */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 font-mono">
                Next Steps After GeM Registration
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                Related GeM & Bidding Consultancy Services
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            <a
              href="/gem-product-listing"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group block shadow-xs"
            >
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span>GeM Product Listing</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">
                Upload products, map HSN codes, and pair catalogs in Quadrants 1 to 4.
              </p>
            </a>

            <a
              href="/oem-services"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group block shadow-xs"
            >
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span>OEM Services & Codes</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">
                Official brand approval, OEM authorization codes, and reseller MAF letters.
              </p>
            </a>

            <a
              href="/tender-bidding-consultancy"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group block shadow-xs"
            >
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span>Tender Bidding Support</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">
                Complete technical folder packaging, BOQ bidding, and reverse auctions.
              </p>
            </a>

            <a
              href="/certifications"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition-all group block shadow-xs"
            >
              <h4 className="text-xs font-black text-slate-900 group-hover:text-amber-800 transition-colors flex items-center justify-between">
                <span>Class-3 DSC Token Setup</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1 leading-relaxed">
                Crypto USB tokens issued in 30 mins with portal PKI browser driver setup.
              </p>
            </a>
          </div>
        </div>

        {/* Action Callout Box */}
        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-300 rounded-3xl p-6 sm:p-10 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Get Registered on GeM Portal in 24 Hours
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 font-medium leading-relaxed">
            Avoid rejection due to mismatched PAN, GST address errors, or missing PFMS validation. Bid Tender 4 U handles your entire GeM registration, profile setup, and catalog uploading.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenInquiry('GeM Portal Complete Bidding Support', 'GeM Portal Registration & Profile Setup')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Apply for GeM Registration</span>
            </button>

            <a
              href={getWhatsAppUrl('Hello Bid Tender 4 U, I want to get my company registered on the GeM portal. Please check my documents.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Check Documents on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
