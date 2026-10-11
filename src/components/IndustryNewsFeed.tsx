import React, { useState, useMemo } from 'react';
import { 
  Newspaper, 
  Search, 
  Calendar, 
  ExternalLink, 
  Tag, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Filter, 
  MessageCircle, 
  Building, 
  ShieldAlert, 
  ChevronDown, 
  ChevronUp, 
  Share2 
} from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

export interface RegulatoryUpdate {
  id: string;
  title: string;
  circularRef: string;
  authority: string;
  publishDate: string;
  badge: 'Urgent' | 'New Policy' | 'Compliance Alert' | 'Advisory';
  badgeColor: 'red' | 'amber' | 'emerald' | 'blue';
  category: 'GFR & Circulars' | 'GeM Alerts' | 'ISO & Certifications' | 'Railways & CPWD' | 'State Gazettes';
  summary: string;
  keyChanges: string[];
  impactOnBidders: string;
  actionRequired: string;
  officialSource: string;
}

export const REGULATORY_UPDATES: RegulatoryUpdate[] = [
  {
    id: 'reg-01',
    title: 'Department of Expenditure OM: Mandatory Udyam NIC Code Verification for 100% EMD Exemption',
    circularRef: 'DoE OM No. F.1/2/2026-PPD',
    authority: 'Ministry of Finance, Department of Expenditure',
    publishDate: 'October 2026',
    badge: 'Compliance Alert',
    badgeColor: 'amber',
    category: 'GFR & Circulars',
    summary: 'The Ministry of Finance has reiterated strict compliance under Rule 170 of GFR 2017, warning procurement departments against arbitrary disqualification of MSMEs while requiring bidders to maintain exact matching 5-digit NIC codes.',
    keyChanges: [
      'Procurement entities cannot reject MSE bids solely due to missing cash EMD if a valid Udyam Registration & Bid Securing Declaration are provided.',
      'Bidders must verify that the specific 5-digit NIC code in their Udyam matches the precise product or service scope of the NIT.',
      'Buyers are directed to process pre-bid representations regarding EMD within 48 hours.'
    ],
    impactOnBidders: 'High. Bidders with mismatched or outdated Udyam activities face instant technical rejection. Prior audit of Udyam certificates is critical before bidding.',
    actionRequired: 'Update your Udyam Certificate with all relevant manufacturing and service NIC codes before submitting tender Packet-A.',
    officialSource: 'doe.gov.in / Public Procurement Division'
  },
  {
    id: 'reg-02',
    title: 'GeM 4.0 Advisory: Mandatory Real-Time Dashboard OEM Authorization for Custom Bids',
    circularRef: 'GeM SPV / Tech Advisory / 2026 / 88',
    authority: 'Government e-Marketplace (GeM SPV)',
    publishDate: 'October 2026',
    badge: 'Urgent',
    badgeColor: 'red',
    category: 'GeM Alerts',
    summary: 'GeM SPV has mandated that plain paper or scanned letters of OEM authorization will no longer be accepted. All resellers bidding in custom bids must link online authorization codes generated directly from the OEM’s GeM portal.',
    keyChanges: [
      'OEMs must create and link reseller authorization through the GeM OEM dashboard interface.',
      'Resellers must enter the system-generated authorization token during Packet-A technical bid upload.',
      'Discrepancies in model numbers or catalog listings will trigger automated algorithmic bid rejection.'
    ],
    impactOnBidders: 'Critical. Resellers bidding on branded IT, medical machinery, security hardware, and office automation can no longer rely on offline authorization letters.',
    actionRequired: 'Coordinate with your principal OEM to generate your unique GeM dashboard authorization code well in advance of bid submission.',
    officialSource: 'gem.gov.in / GeM Seller Notifications'
  },
  {
    id: 'reg-03',
    title: 'QCI & NABCB Mandate: Online IAF CertSearch QR Verification for Tender ISO Submissions',
    circularRef: 'NABCB / QCI / TDR-VER / 2026-04',
    authority: 'Quality Council of India (QCI) & NABCB',
    publishDate: 'September 2026',
    badge: 'New Policy',
    badgeColor: 'blue',
    category: 'ISO & Certifications',
    summary: 'Government tender evaluation committees across central and state PSUs are now instructed to verify all ISO 9001, ISO 14001, and ISO 45001 certificates on the global IAF CertSearch database.',
    keyChanges: [
      'Unaccredited or non-IAF certificates will be flagged as non-responsive and submitted to vigilance for scrutiny.',
      'Certificates must possess active status and direct QR code verification linking to the accredited certifying body.',
      'Transition from older standards to current revisions (e.g., ISO 27001:2022) is now strictly audited in IT tenders.'
    ],
    impactOnBidders: 'High. Non-verifiable certificates will cause immediate bid rejection and potential debarment under fraudulent submission clauses.',
    actionRequired: 'Verify your certificate status on the official IAF CertSearch database. Upgrade to NABCB/IAF accredited certificates if unlisted.',
    officialSource: 'qcin.org & iafcertsearch.org'
  },
  {
    id: 'reg-04',
    title: 'Ministry of Railways (IREPS): Electronic Bank Guarantee (e-BG) Integration via NeSL Mandate',
    circularRef: 'Railway Board Circular 2026/CE-I/CT/AP/eBG',
    authority: 'Ministry of Railways & National E-Governance Services Ltd (NeSL)',
    publishDate: 'September 2026',
    badge: 'New Policy',
    badgeColor: 'blue',
    category: 'Railways & CPWD',
    summary: 'Indian Railways has fully transitioned to paperless digital Electronic Bank Guarantees (e-BG) through the NeSL platform for all works contracts exceeding ₹50 Lakhs.',
    keyChanges: [
      'Physical paper Bank Guarantees will be completely discontinued on IREPS.',
      'Contractors must coordinate with participating scheduled banks to issue e-BG with auto-API confirmation to Railway divisions.',
      'Drastically compresses EMD/Performance Security verification time from 2 weeks to under 15 minutes.'
    ],
    impactOnBidders: 'Medium. Contractors must ensure their banker has operational API integration with NeSL before the tender due date.',
    actionRequired: 'Request your bank to issue e-BG directly referencing the Railway IREPS tender number.',
    officialSource: 'ireps.gov.in & nesl.co.in'
  },
  {
    id: 'reg-05',
    title: 'Gujarat nProcure 2.0: Transition to SHA-256 Dual PKI Tokens and Java 21 Drivers',
    circularRef: 'GIL / nProcure / PKI-SEC / 2026 / 12',
    authority: 'Gujarat Informatics Ltd (GIL)',
    publishDate: 'August 2026',
    badge: 'Advisory',
    badgeColor: 'emerald',
    category: 'State Gazettes',
    summary: 'GIL has announced updated browser and token driver requirements for nProcure, eliminating older 32-bit middleware and requiring SHA-256 Class-3 combo cryptographic tokens.',
    keyChanges: [
      'Older ePass2003 / mToken drivers must be updated to the latest 2026 PKI middleware.',
      'Bidders must configure dual-certificate tokens with distinct signing and encryption key pairs.',
      'Native support for Chromium and Microsoft Edge browsers without Internet Explorer legacy mode.'
    ],
    impactOnBidders: 'Moderate. Failure to update crypto drivers may result in bid encryption failure in the final 1 hour before bid closure.',
    actionRequired: 'Test your DSC token signing and encryption keys in the nProcure test environment well before bid deadline.',
    officialSource: 'tender.nprocure.com'
  }
];

interface IndustryNewsFeedProps {
  onOpenInquiry: (category?: string, service?: string) => void;
}

export const IndustryNewsFeed: React.FC<IndustryNewsFeedProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(REGULATORY_UPDATES[0].id);

  const categories = ['All', 'GFR & Circulars', 'GeM Alerts', 'ISO & Certifications', 'Railways & CPWD', 'State Gazettes'];

  const filteredUpdates = useMemo(() => {
    return REGULATORY_UPDATES.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.circularRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.authority.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.impactOnBidders.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mt-16 pt-16 border-t border-slate-200 text-left">
      {/* Feed Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5 text-amber-700" />
            <span>Real-Time Procurement Intelligence</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Industry News & Regulatory Updates Feed
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 max-w-2xl font-medium leading-relaxed">
            Live monitoring of Ministry of Finance OM circulars, GeM SPV releases, GFR 2017 amendments, and state procurement gazettes affecting active government bids.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-700 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 shrink-0 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          <span>Feed Status: <strong className="text-emerald-700 font-bold">Live & Verified</strong></span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-xs font-extrabold'
                    : 'bg-white hover:bg-slate-200 text-slate-700 hover:text-slate-950 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars, OM, GeM, DoE..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors font-medium"
            />
          </div>
        </div>
      </div>

      {/* News Items List */}
      <div className="space-y-4">
        {filteredUpdates.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm font-medium">
            No regulatory circulars found matching &quot;{searchQuery}&quot;. Clear search filters to view all updates.
          </div>
        ) : (
          filteredUpdates.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-amber-400 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* News Card Head */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-start justify-between gap-4 select-none"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold border ${
                          item.badgeColor === 'red'
                            ? 'bg-rose-100 text-rose-800 border-rose-300'
                            : item.badgeColor === 'amber'
                            ? 'bg-amber-100 text-amber-900 border-amber-300'
                            : item.badgeColor === 'emerald'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-blue-100 text-blue-800 border-blue-300'
                        }`}
                      >
                        {item.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-mono flex items-center gap-1 font-medium">
                        <Building className="w-3 h-3 text-slate-400" />
                        {item.authority}
                      </span>
                      <span className="text-slate-300 hidden sm:inline">•</span>
                      <span className="text-xs text-slate-500 font-mono flex items-center gap-1 font-medium">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {item.publishDate}
                      </span>
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                      {item.title}
                    </h3>

                    <div className="text-xs font-mono text-amber-900 flex items-center gap-1.5 font-bold">
                      <FileText className="w-3.5 h-3.5 text-amber-700" />
                      <span>Ref: {item.circularRef}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 font-medium">
                      {item.summary}
                    </p>
                  </div>

                  {/* Toggle Button */}
                  <div className="sm:self-center shrink-0 flex items-center gap-2">
                    <span className="text-xs text-amber-800 font-bold hidden md:inline">
                      {isExpanded ? 'Hide Analysis' : 'Read Bidding Impact'}
                    </span>
                    <button
                      className={`p-2 rounded-xl transition-colors cursor-pointer ${
                        isExpanded ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                      aria-label="Expand regulatory update"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-200 bg-slate-50/60 space-y-5 animate-in fade-in duration-200">
                    {/* Key Regulatory Directives */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2.5 flex items-center gap-1.5 font-mono">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                        Key Provisions & Policy Directives:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {item.keyChanges.map((change, idx) => (
                          <li
                            key={idx}
                            className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-2 shadow-xs font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact and Action Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Bidder Impact */}
                      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 shadow-xs">
                        <div className="flex items-center gap-2 mb-1.5">
                          <ShieldAlert className="w-4 h-4 text-amber-700" />
                          <h5 className="text-xs font-bold uppercase tracking-wider text-amber-950 font-mono">
                            Practical Impact on Active Bids:
                          </h5>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {item.impactOnBidders}
                        </p>
                      </div>

                      {/* Required Action */}
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 shadow-xs">
                        <div className="flex items-center gap-2 mb-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                          <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-950 font-mono">
                            Recommended Contractor Action:
                          </h5>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {item.actionRequired}
                        </p>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <div className="text-slate-500 font-mono text-[11px] flex items-center gap-1.5 font-medium">
                        <span>Source:</span>
                        <strong className="text-slate-800">{item.officialSource}</strong>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => onOpenInquiry('GFR & Compliance', `Compliance review regarding ${item.circularRef}`)}
                          className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Audit My Bid Against This Notice</span>
                        </button>

                        <a
                          href={getWhatsAppUrl(`Hello Bid Tender 4 U, I saw the regulatory update regarding "${item.title}" (${item.circularRef}) and would like assistance for our upcoming bid.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
