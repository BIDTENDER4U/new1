import React, { useState } from 'react';
import { Award, CheckCircle2, TrendingUp, Building2, Quote, ArrowRight, ShieldCheck, Star, Sparkles, FileText, ChevronRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  location: string;
  portal: string;
  bidValue: string;
  scope: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  designation: string;
  company: string;
  city: string;
  rating: number;
  highlight: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    client: 'Civil Infrastructure & EPC Firm',
    industry: 'Civil Works & Road Construction',
    location: 'Ahmedabad, Gujarat',
    portal: 'nProcure Gujarat',
    bidValue: '₹4.85 Crore',
    scope: 'Municipal Road Resurfacing, Stormwater Drainage & CC Paving',
    challenge: 'Faced 2 consecutive technical disqualifications previously due to mismatched BOQ item descriptions and missing CA UDIN turnover certificates.',
    solution: 'Our Ahmedabad consultancy team restructured the entire Packet-A folder, compiled certified CA turnover certificates with valid UDIN, and conducted a dry-run portal audit 24 hours prior to locking.',
    result: '100% Technical Bid Acceptance with zero objections; awarded tender smoothly.',
    tags: ['Civil Works', 'nProcure', 'CA UDIN', 'Roads'],
  },
  {
    id: 'case-2',
    client: 'Healthcare Diagnostics LLP',
    industry: 'Hospital & Medical Equipment',
    location: 'Jaipur, Rajasthan',
    portal: 'SPPP / eProc Rajasthan',
    bidValue: '₹2.30 Crore',
    scope: 'Supply of ICU Ventilators & Multipara Patient Monitors to Govt Medical College',
    challenge: 'Tight 3-day submission window; mandatory ISO 13485:2016 certification and official OEM Authorization Code required under strict RFP terms.',
    solution: 'Facilitated fast-track ISO 13485 documentation, secured verifiable OEM Authorization Letter, and mapped technical specifications against manufacturer datasheet.',
    result: 'Qualified in technical round without a single clarification query; contract delivered.',
    tags: ['Medical', 'SPPP Rajasthan', 'ISO 13485', 'OEM Code'],
  },
  {
    id: 'case-3',
    client: 'Facility Management Services Ltd',
    industry: 'Security & Manpower Outsourcing',
    location: 'New Delhi / Pan-India',
    portal: 'GeM 4.0 Custom Bid',
    bidValue: '₹8.40 Crore (3-Yr Contract)',
    scope: 'Deployment of 180+ Armed Security Guards & Facility Staff for Central PSU',
    challenge: 'Complicated GeM custom bid with strict minimum wage SLA calculations, statutory EPF/ESIC proof indexing, and severe penalty clauses under GeM GTC.',
    solution: 'Prepared comprehensive minimum wage compliance spreadsheet, indexed 3 years of labor department challans, and coordinated strategic Reverse Auction (RA) bidding.',
    result: 'Ranked successfully and secured the full 36-month service contract.',
    tags: ['GeM 4.0', 'Manpower', 'Reverse Auction', 'PSU'],
  },
  {
    id: 'case-4',
    client: 'Renewable Solar EPC Contractor',
    industry: 'Electrical & Solar EPC',
    location: 'Surat, Gujarat',
    portal: 'nProcure / Discom Portal',
    bidValue: '₹6.20 Crore',
    scope: '2 MW Rooftop Solar Grid Tie Systems for Public Industrial Estates',
    challenge: 'High net worth criteria requiring Bank Solvency Certificate from Scheduled Commercial Bank and structured Joint Venture (JV) legal documentation.',
    solution: 'Drafted notarized Joint Venture agreement conforming to tender rules, assisted in obtaining bank solvency proforma, and executed Class-3 DSC cryptographic locking.',
    result: 'Technical bid accepted in first evaluation; solar installation successfully completed.',
    tags: ['Solar EPC', 'Bank Solvency', 'Joint Venture', 'Class-3 DSC'],
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'We had lost two crucial state PWD bids earlier because of small clerical errors in our turnover documents. The Bid Tender 4 U team in Ahmedabad audited our NIT, fixed all compliance gaps, and helped us lock our ₹4.8 Cr tender without stress. Truly dependable consultants!',
    author: 'Rajeshwar Patel',
    designation: 'Managing Director',
    company: 'Patel Infracon & Developers',
    city: 'Ahmedabad, Gujarat',
    rating: 5,
    highlight: 'Saved us from procedural disqualification',
  },
  {
    quote: 'Getting an OEM Authorization Code and ISO certificate on such short notice seemed impossible before we contacted Bid Tender 4 U. They arranged our Class-3 DSC and complete compliance paperwork in under 48 hours for our medical tender.',
    author: 'Dr. N. K. Sharma',
    designation: 'Partner',
    company: 'BioMed Healthcare Supplies',
    city: 'Jaipur, Rajasthan',
    rating: 5,
    highlight: '48-Hour ISO & OEM Code Packaging',
  },
  {
    quote: 'GeM custom bids have complex eligibility and minimum wage formula requirements. Bid Tender 4 U guided our manpower outsourcing firm to clear Packet-A scrutiny and win an ₹8.4 Cr central government PSU contract.',
    author: 'Harpreet Singh',
    designation: 'Chief Operating Officer',
    company: 'Trident Facility Solutions Ltd',
    city: 'New Delhi',
    rating: 5,
    highlight: '100% SLA & Minimum Wage Compliance',
  },
  {
    quote: 'From Gujarat energy board portal token drivers to bank solvency documentation, their technical knowledge of public procurement is unmatched. Our rooftop solar EPC bid was accepted on day one.',
    author: 'Kunal V. Shah',
    designation: 'Proprietor',
    company: 'Apex SunPower Systems',
    city: 'Surat, Gujarat',
    rating: 5,
    highlight: 'Seamless Token Encryption & Bid Submission',
  },
];

interface ClientSuccessStoriesProps {
  onOpenInquiry: (category?: string, service?: string) => void;
}

export const ClientSuccessStories: React.FC<ClientSuccessStoriesProps> = ({ onOpenInquiry }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filteredCases = selectedFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.portal.toLowerCase().includes(selectedFilter.toLowerCase()) || c.industry.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="success-stories" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Proven Track Record & Case Studies</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Client Success Stories & Winning Bids
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Real contractors, suppliers, and MSMEs across Gujarat, Rajasthan, and India who overcame strict qualification criteria and won major government tenders with our support.
          </p>

          {/* Key Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-black text-amber-800">₹500 Cr+</div>
              <div className="text-[11px] text-slate-500 uppercase font-bold mt-0.5 font-mono">Bid Value Supported</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-black text-emerald-700">99.4%</div>
              <div className="text-[11px] text-slate-500 uppercase font-bold mt-0.5 font-mono">Technical Acceptance</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-black text-amber-800">1,500+</div>
              <div className="text-[11px] text-slate-500 uppercase font-bold mt-0.5 font-mono">Tenders Analyzed</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-black text-blue-700">4 Hours</div>
              <div className="text-[11px] text-slate-500 uppercase font-bold mt-0.5 font-mono">Express Audit Speed</div>
            </div>
          </div>
        </div>

        {/* Filter Pills for Case Studies */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs text-slate-500 font-semibold mr-2">Filter Case Studies:</span>
          {['All', 'nProcure', 'SPPP', 'GeM', 'Solar'].map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === f
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
              }`}
            >
              {f === 'All' ? 'All Portals & Sectors' : f}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-amber-400 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group hover:shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                    {cs.industry}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-bold">
                      {cs.portal}
                    </span>
                    <span className="text-xs font-mono font-black text-emerald-800 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300">
                      {cs.bidValue}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-800 transition-colors">
                  {cs.scope}
                </h3>
                <div className="text-xs text-slate-500 mb-4 flex items-center gap-1.5 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{cs.client}</span>
                  <span className="text-slate-300">·</span>
                  <span>{cs.location}</span>
                </div>

                <div className="space-y-3 text-xs mb-5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-rose-700 font-bold block mb-0.5">The Challenge:</strong>
                    <p className="text-slate-700 leading-relaxed font-medium">{cs.challenge}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
                    <strong className="text-amber-900 font-bold block mb-0.5">Our Strategy:</strong>
                    <p className="text-slate-800 leading-relaxed font-medium">{cs.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{cs.result}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenInquiry(cs.industry, `Consultancy for ${cs.industry} (${cs.portal})`)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors shrink-0 cursor-pointer flex items-center gap-1"
                >
                  <span>Inquire Similar Bid</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-700" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Contractor Testimonials */}
        <div className="mt-16 text-left">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
              Contractor Feedback
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              What Vendors Say About Our Support
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-amber-400 transition-colors shadow-xs"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-3 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 mb-3 font-mono">
                    {t.highlight}
                  </span>

                  <p className="text-xs text-slate-700 leading-relaxed italic mb-5 font-serif">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="font-bold text-slate-900 text-xs">{t.author}</div>
                  <div className="text-[11px] text-amber-800 font-semibold">{t.designation}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{t.company} · {t.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-300 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Want to Win Your Next Government Tender?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6 font-medium leading-relaxed">
            Share your tender reference number or NIT document. Our senior consultants will review your technical eligibility within 4 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenInquiry('General Tender Bidding', 'Preliminary Eligibility Audit')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Submit Tender for Free Preliminary Review</span>
            </button>

            <a
              href={getWhatsAppUrl('Hello Bid Tender 4 U, I saw your client success stories. I have an upcoming tender and need expert bidding support.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Bid on WhatsApp (+91 9726407267)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
