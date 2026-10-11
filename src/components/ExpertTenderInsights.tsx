import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Tag, Search, Sparkles, ShieldCheck, CheckCircle2, ChevronRight, X, MessageCircle, FileText, Share2, Newspaper } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';
import { IndustryNewsFeed } from './IndustryNewsFeed';

interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'GFR & Compliance' | 'GeM Portal' | 'Bidding Strategy' | 'Certifications & DSC' | 'State Portals';
  publishDate: string;
  readTime: string;
  author: string;
  summary: string;
  tags: string[];
  content: {
    introduction: string;
    keyPoints: { heading: string; body: string }[];
    regulatoryClause: string;
    actionableTakeaway: string;
  };
}

const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: 'Rule 170 GFR 2017: How MSMEs Can Claim 100% EMD & Tender Fee Exemption',
    slug: 'rule-170-gfr-msme-emd-exemption',
    category: 'GFR & Compliance',
    publishDate: 'Updated Oct 2026',
    readTime: '6 min read',
    author: 'Senior Procurement Officer',
    summary: 'A complete legal breakdown of General Financial Rules (GFR) 2017 Rule 170. Learn how Micro and Small Enterprises can legitimately claim Earnest Money Deposit (EMD) waivers and avoid unlawful buyer rejections.',
    tags: ['GFR 170', 'EMD Exemption', 'MSME Udyam', 'Tender Fee Waiver', 'Bid Securing Declaration'],
    content: {
      introduction: 'Under the Public Procurement Policy for Micro and Small Enterprises (MSEs) Order 2012 and Rule 170 of General Financial Rules (GFR) 2017, all Central Ministries, Departments, CPSEs, and autonomous bodies are legally obligated to exempt registered MSEs from paying Earnest Money Deposit (EMD) and Tender Document Fees.',
      keyPoints: [
        {
          heading: '1. NIC Code Alignment on Udyam Registration',
          body: 'The single biggest reason for EMD rejection is mismatching National Industrial Classification (NIC) codes. Your Udyam registration certificate must contain the precise 5-digit manufacturing or service NIC code matching the scope of the tender. If you bid for "Road Works" with an IT service Udyam, the buyer will reject your exemption claim.',
        },
        {
          heading: '2. The Mandatory Bid Securing Declaration',
          body: 'Even when exempt from cash EMD or Bank Guarantee, contractors must furnish a notarized "Bid Securing Declaration" on appropriate stamp paper accepting debarment for a specified duration if they withdraw or modify their bid during validity.',
        },
        {
          heading: '3. What to Do If Buyer Disregards MSME Exemption',
          body: 'If a buyer issues a Notice Inviting Tender without MSME exemption clauses, contractors have the legal right to submit a pre-bid representation citing Ministry of Finance OM No. F.20/2/2014-PPD(Pt.) before the pre-bid query deadline.',
        },
      ],
      regulatoryClause: 'General Financial Rules 2017, Rule 170(i) & Department of Expenditure OM No. F.9/4/2020-PPD.',
      actionableTakeaway: 'Always attach your updated Udyam Certificate highlighting the exact matching NIC code alongside a signed Bid Securing Declaration in Packet-A.',
    },
  },
  {
    id: 'art-2',
    title: 'GeM 4.0 Custom Bids: 5 Critical Traps Causing 80% Technical Disqualifications',
    slug: 'gem-custom-bids-disqualification-traps',
    category: 'GeM Portal',
    publishDate: 'Updated Oct 2026',
    readTime: '8 min read',
    author: 'GeM Bidding Advisory Desk',
    summary: 'Analyzing why reputable contractors get disqualified on Government e-Marketplace custom bids. Essential rules on OEM Authorization Codes, GeM GTC Clause 4, and Reverse Auction strategies.',
    tags: ['GeM 4.0', 'Custom Bids', 'OEM Authorization', 'GeM GTC', 'Reverse Auction'],
    content: {
      introduction: 'Government e-Marketplace (GeM) custom bids represent over ₹1.5 Lakh Crore in annual procurement. However, buyer-specific Additional Terms & Conditions (ATC) frequently introduce hidden disqualification filters that catch bidders off-guard.',
      keyPoints: [
        {
          heading: '1. Invalid or Expired OEM Authorization Codes',
          body: 'In branded hardware, medical instruments, and machinery tenders, buyers mandate an official OEM Authorization Code generated from the OEM’s GeM dashboard. Submitting a plain letter on OEM stationery without online dashboard linking leads to immediate procedural rejection.',
        },
        {
          heading: '2. Specification Compliance Sheet Discrepancies',
          body: 'Merely writing "Complied / Agreed" is insufficient under GeM 4.0 audit rules. Bidders must map each technical specification parameter with reference page numbers of the manufacturer datasheet.',
        },
        {
          heading: '3. GeM Caution Money & Incident Warnings',
          body: 'Ensure your Caution Money is maintained in the designated slab and that no unresolved incidents exist on your GeM dashboard, as pending show-cause notices can restrict bid participation.',
        },
      ],
      regulatoryClause: 'GeM General Terms and Conditions (GTC) Version 4.0, Clause 4 & SLA Performance Framework.',
      actionableTakeaway: 'Obtain verified GeM OEM authorization codes and conduct a parameter-by-parameter datasheet check before uploading your commercial bid.',
    },
  },
  {
    id: 'art-3',
    title: 'Why ISO 9001, 14001 & 45001 Certifications Are Mandatory in Government Tenders',
    slug: 'iso-certifications-government-tenders-guide',
    category: 'Certifications & DSC',
    publishDate: 'Updated Oct 2026',
    readTime: '5 min read',
    author: 'Statutory Compliance Lead',
    summary: 'Detailed explanation of why government departments demand IAF-accredited ISO certificates. Differences between ISO 9001, 14001, 45001, 27001, and 13485 for tender pre-qualification.',
    tags: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'IAF CertSearch', 'QCI Audit'],
    content: {
      introduction: 'Over 92% of state and central tenders now incorporate ISO compliance as a non-negotiable pre-qualification criterion to ensure standard operating procedures and mitigate public project liabilities.',
      keyPoints: [
        {
          heading: '1. ISO 9001:2015 (Quality Management System)',
          body: 'The universal baseline certification required in virtually every civil, supply, manpower, and IT procurement tender in India.',
        },
        {
          heading: '2. ISO 14001:2015 (Environment) & ISO 45001:2018 (Safety)',
          body: 'Compulsory for construction, EPC, manufacturing, and waste management tenders. Departments evaluate your environmental mitigation protocols and occupational hazard prevention.',
        },
        {
          heading: '3. IAF vs Non-IAF & Online Verification Traps',
          body: 'Departments now verify certificates via QR codes and the international IAF CertSearch global database. Submitting non-verifiable certificates risks outright disqualification and police FIR for fraud.',
        },
      ],
      regulatoryClause: 'Quality Council of India (QCI) Procurement Standards & National Accreditation Board for Certification Bodies (NABCB).',
      actionableTakeaway: 'Ensure your ISO certificate is active, IAF-accredited, and verifiable online through an official accreditation board before tender submission.',
    },
  },
  {
    id: 'art-4',
    title: 'Civil & Road Works: How to Prepare Flawless Packet-A Folders for PWD & CPWD',
    slug: 'civil-road-works-pwd-cpwd-packet-a-guide',
    category: 'Bidding Strategy',
    publishDate: 'Updated Oct 2026',
    readTime: '7 min read',
    author: 'Senior Civil Tender Specialist',
    summary: 'Step-by-step masterclass on compiling technical bid packets for PWD, CPWD, and NHAI road construction tenders. Handling CA turnover with UDIN, work completion certificates, and bank solvency.',
    tags: ['Civil Works', 'PWD Enlistment', 'CPWD', 'CA UDIN', 'Bank Solvency'],
    content: {
      introduction: 'Civil works tenders are among the most contested in India. A single pagination error, missing UDIN, or ambiguous completion certificate can eliminate an otherwise qualified contractor during technical scrutiny.',
      keyPoints: [
        {
          heading: '1. Mandatory ICAI UDIN on CA Turnover Certificates',
          body: 'Any Chartered Accountant turnover or net worth certificate lacking an active Unique Document Identification Number (UDIN) generated from the ICAI portal is treated as non-compliant and invalid by procurement committees.',
        },
        {
          heading: '2. "Similar Work" Completion Certificates',
          body: 'Work orders alone are never accepted as proof of experience. Bidders must submit end-user completion certificates signed by an officer not below the rank of Executive Engineer detailing contract value, date of start, and completion.',
        },
        {
          heading: '3. Bank Solvency Certificate Validity',
          body: 'Ensure your Bank Solvency Certificate is issued by a Scheduled Commercial Bank within the 6 to 12-month validity window specified in the NIT.',
        },
      ],
      regulatoryClause: 'CPWD Works Manual 2019 Section 17 & State PWD Standard Operating Bidding Documents.',
      actionableTakeaway: 'Always cross-index past work completion certificates against tender qualifying thresholds and insist on UDIN validation for financial statements.',
    },
  },
  {
    id: 'art-5',
    title: 'Class-3 Combo DSC (Signing + Encryption): Setup Guide for GeM, nProcure & CPPP',
    slug: 'class-3-dsc-eprocurement-setup-guide',
    category: 'Certifications & DSC',
    publishDate: 'Updated Oct 2026',
    readTime: '5 min read',
    author: 'Digital Signature & PKI Consultant',
    summary: 'Everything contractors need to know about Class-3 Digital Signature Certificates. FIPS crypto USB tokens (ePass2003 / ProxKey), Java browser configurations, and avoiding submission deadline crashes.',
    tags: ['Class-3 DSC', 'Crypto Token', 'ePass2003', 'Java PKI', 'Portal Locking'],
    content: {
      introduction: 'A Class-3 Combo Digital Signature Certificate (DSC) is mandatory for signing and encrypting commercial bid packets across every central and state e-tendering system in India.',
      keyPoints: [
        {
          heading: '1. Signing vs Combo (Signing + Encryption)',
          body: 'While general portal registration may only use signing, two-cover tenders require both Signing (authenticating documents) and Encryption (locking financial BOQ rates until technical opening).',
        },
        {
          heading: '2. FIPS 140-2 Level 2 Hardware Tokens',
          body: 'Certificates must be embedded on certified cryptographic USB hardware (such as genuine ePass2003 or ProxKey tokens) to ensure non-exportable private keys.',
        },
        {
          heading: '3. Preventing Browser Driver Errors',
          body: 'Portals like nProcure and CPPP rely on specific Java and PKI helper utilities. Always test token recognition and hash generation at least 24 hours prior to bid closing.',
        },
      ],
      regulatoryClause: 'Information Technology Act 2000 Section 35 & Controller of Certifying Authorities (CCA) Guidelines.',
      actionableTakeaway: 'Always acquire a Class-3 Combo token with minimum 2-year validity and register it on your target portals days ahead of submission.',
    },
  },
  {
    id: 'art-6',
    title: 'nProcure Gujarat Bidding Guide: Winning R&B, GWSSB & AMC Municipal Tenders',
    slug: 'nprocure-gujarat-tenders-bidding-guide',
    category: 'State Portals',
    publishDate: 'Updated Oct 2026',
    readTime: '6 min read',
    author: 'Gujarat State Tender Officer',
    summary: 'Insider strategies for bidding on Gujarat’s apex nProcure e-tendering portal. State contractor registration classes (AA, A, B, C, D), tender fee online verification, and local preference norms.',
    tags: ['nProcure', 'Gujarat Tenders', 'AMC Ahmedabad', 'GWSSB Pipeline', 'PWD Gujarat'],
    content: {
      introduction: 'nProcure is Gujarat’s unified e-procurement platform hosting billions in infrastructure, water supply (GWSSB), urban development (AMC, SMC), and health tenders annually.',
      keyPoints: [
        {
          heading: '1. State Contractor Registration Classification',
          body: 'Contractors must register under Roads & Buildings (R&B) or respective municipal corporations in designated classes (Special Class, Class AA, Class A down to Class D) matching the estimated tender cost.',
        },
        {
          heading: '2. Real-time Payment Gateway Verification',
          body: 'nProcure verifies tender fees and EMD via cyber treasury or authorized bank gateways. Ensure transaction acknowledgement receipts are downloaded and attached to technical packets.',
        },
        {
          heading: '3. Handling Corrigendums & Key Dates',
          body: 'Gujarat tenders frequently issue addenda and date extensions. Downloading updated commercial BOQ Excel sheets before final cryptographic upload is critical.',
        },
      ],
      regulatoryClause: 'Gujarat Public Works Department Manual & Gujarat State E-Governance Procurement Rules.',
      actionableTakeaway: 'Confirm that your nProcure DSC enrollment is active with both signing and encryption certificates mapped in the portal dashboard.',
    },
  },
];

interface ExpertTenderInsightsProps {
  onOpenInquiry: (category?: string, service?: string) => void;
}

export const ExpertTenderInsights: React.FC<ExpertTenderInsightsProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ['All', 'GFR & Compliance', 'GeM Portal', 'Bidding Strategy', 'Certifications & DSC', 'State Portals'];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = !searchQuery.trim() ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="insights" className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>Procurement Knowledge & Regulatory Guides</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Expert Tender Insights & Bidding Strategies
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Stay ahead of regulatory changes in GFR 2017, GeM 4.0 GTC, state e-procurement guidelines, and learn battle-tested strategies to win government contracts.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights by topic, GFR rule, portal, or keywords..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-amber-500 font-medium"
            />
          </div>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-amber-400 p-6 flex flex-col justify-between transition-all duration-200 group hover:shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-mono">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-800 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3 font-medium">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {article.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  {article.publishDate}
                </span>

                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Authority Callout Strip */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wide font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Compliant with Latest CPPP & GFR 2017 Amendments</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Have Specific Legal Questions Regarding Your Tender Document?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-medium leading-relaxed">
              Don’t guess when large security deposits and contracts are on the line. Our senior procurement team audits NIT eligibility, drafts pre-bid clarification letters, and structures technical bids.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => onOpenInquiry('Tender Document Analysis & Eligibility Audit', 'NIT Legal & GFR Compliance Consultation')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>Request Tender Document Audit</span>
            </button>

            <a
              href={getWhatsAppUrl('Hello Bid Tender 4 U, I read your tender insights article and have a query regarding our tender document.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-300 transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Consult on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Dynamic Industry News & Regulatory Updates Feed */}
        <IndustryNewsFeed onOpenInquiry={onOpenInquiry} />
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-3xl w-full max-w-3xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-mono">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-medium">
                    {activeArticle.readTime} · {activeArticle.publishDate}
                  </span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900">
                  {activeArticle.title}
                </h2>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 text-slate-400 hover:text-slate-900 rounded-xl hover:bg-slate-200 transition-colors shrink-0 cursor-pointer"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-sm text-slate-700 leading-relaxed">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium">
                {activeArticle.content.introduction}
              </div>

              <div className="space-y-5">
                {activeArticle.content.keyPoints.map((pt, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {pt.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {pt.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs space-y-1">
                <strong className="text-amber-950 block font-bold font-mono">
                  Official Regulatory Reference:
                </strong>
                <p className="text-slate-800 font-mono text-[11px]">
                  {activeArticle.content.regulatoryClause}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                <strong className="text-emerald-950 block font-bold font-mono">
                  Actionable Strategy from Bid Tender 4 U:
                </strong>
                <p className="text-slate-800 font-medium">
                  {activeArticle.content.actionableTakeaway}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {activeArticle.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-600 font-medium">
                Need help applying these rules to your tender?
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenInquiry(activeArticle.category, `Consultancy for: ${activeArticle.title}`);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  Consult on This Topic
                </button>

                <a
                  href={getWhatsAppUrl(`Hello Bid Tender 4 U, I read your article "${activeArticle.title}" and would like assistance with our tender.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
