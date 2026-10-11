import React, { useState, useEffect } from 'react';
import { X, Search, RefreshCw, CheckCircle2, Clock, Phone, Mail, FileText, Download, ExternalLink, MessageCircle, AlertCircle, Database } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StoredInquiry {
  id: string;
  name: string;
  company: string;
  phone: string;
  email?: string;
  city?: string;
  category?: string;
  service?: string;
  portal?: string;
  reference_number: string;
  estimated_value?: string;
  message?: string;
  file_name?: string;
  created_at: string;
  status: 'New' | 'In Review' | 'Contacted' | 'Bid Prepared';
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inquiries, setInquiries] = useState<StoredInquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchInquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/inquiries');
      if (!res.ok) {
        throw new Error(`Failed to load inquiries: ${res.statusText}`);
      }
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch (err: any) {
      console.error('Fetch error:', err);
      setError(err.message || 'Could not connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStatusChange = async (id: string, newStatus: StoredInquiry['status']) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/inquiries/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error('Status update failed');
      setInquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );
    } catch (err: any) {
      alert(`Error updating lead status: ${err.message}`);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleExportCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ['ID', 'Date', 'Name', 'Company', 'Phone', 'Email', 'City', 'Category', 'Service', 'Portal', 'Ref No', 'Est Value', 'Status', 'Message'];
    const rows = inquiries.map((i) => [
      i.id,
      new Date(i.created_at).toISOString(),
      `"${i.name.replace(/"/g, '""')}"`,
      `"${i.company.replace(/"/g, '""')}"`,
      i.phone,
      i.email || '',
      i.city || '',
      `"${(i.category || '').replace(/"/g, '""')}"`,
      `"${(i.service || '').replace(/"/g, '""')}"`,
      i.portal || '',
      i.reference_number || '',
      i.estimated_value || '',
      i.status,
      `"${(i.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `bidtender4u_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = inquiries.filter((item) => {
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search) ||
      (item.category || '').toLowerCase().includes(search.toLowerCase()) ||
      item.reference_number.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl text-slate-900">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 font-mono">
                  Node.js + Database Lead Desk
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold border border-emerald-200">
                  Live Persistent Storage
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900">
                Tender Inquiries & Client Leads ({inquiries.length})
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
              title="Refresh database records"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-600' : ''}`} />
            </button>

            {inquiries.length > 0 && (
              <button
                onClick={handleExportCSV}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="p-4 bg-white border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by name, company, phone, ID..."
              className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 font-medium"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs text-slate-500 font-semibold shrink-0">Status:</span>
            {['All', 'New', 'In Review', 'Contacted', 'Bid Prepared'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 text-xs rounded-lg transition-colors cursor-pointer font-bold shrink-0 ${
                  statusFilter === st
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Inquiries Table / Cards */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 bg-slate-50/50">
          {loading && inquiries.length === 0 ? (
            <div className="text-center py-14 text-slate-500 text-sm font-medium">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-amber-500 mb-2" />
              Loading inquiries from database...
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
              <Database className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h4 className="text-base font-bold text-slate-900 mb-1">
                No Tender Inquiries Found
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {search
                  ? `No leads match "${search}". Try resetting the search.`
                  : 'New client submissions via the website inquiry form will automatically be saved and displayed here.'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredInquiries.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 hover:border-amber-300 shadow-xs transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {item.id}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs text-slate-500 font-medium">
                        {new Date(item.created_at).toLocaleString()}
                      </span>
                      {item.category && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                          {item.category}
                        </span>
                      )}
                    </div>

                    {/* Status dropdown */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-semibold">Status:</span>
                      <select
                        value={item.status}
                        disabled={updatingId === item.id}
                        onChange={(e) =>
                          handleStatusChange(item.id, e.target.value as StoredInquiry['status'])
                        }
                        className={`text-xs px-2.5 py-1 rounded-lg border font-bold cursor-pointer ${
                          item.status === 'New'
                            ? 'bg-amber-100 text-amber-900 border-amber-300'
                            : item.status === 'In Review'
                            ? 'bg-blue-100 text-blue-900 border-blue-300'
                            : item.status === 'Contacted'
                            ? 'bg-purple-100 text-purple-900 border-purple-300'
                            : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="In Review">In Review</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Bid Prepared">Bid Prepared</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 text-xs">
                    <div>
                      <div className="text-slate-500 font-semibold text-[11px] uppercase tracking-wider">Contact Person</div>
                      <div className="font-bold text-slate-900 text-sm mt-0.5">{item.name}</div>
                      <div className="text-slate-700 font-medium">{item.company}</div>
                      {item.city && <div className="text-slate-500 mt-0.5">{item.city}</div>}
                    </div>

                    <div>
                      <div className="text-slate-500 font-semibold text-[11px] uppercase tracking-wider">Tender Details</div>
                      <div className="text-slate-800 mt-0.5">
                        <strong className="text-slate-900">Portal:</strong> {item.portal || 'GeM / State'}
                      </div>
                      {item.reference_number && (
                        <div className="font-mono text-amber-900 font-bold mt-0.5">
                          <strong>Ref:</strong> {item.reference_number}
                        </div>
                      )}
                      {item.service && (
                        <div className="text-slate-600 truncate max-w-xs mt-0.5 font-medium">
                          <strong>Service:</strong> {item.service}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="text-slate-500 font-semibold text-[11px] uppercase tracking-wider">Communication</div>
                        <div className="font-mono text-slate-900 font-bold flex items-center gap-1.5 mt-0.5">
                          <Phone className="w-3.5 h-3.5 text-amber-600" />
                          <span>{item.phone}</span>
                        </div>
                        {item.email && (
                          <div className="text-slate-600 flex items-center gap-1.5 mt-0.5 truncate font-medium">
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                            <span>{item.email}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <a
                          href={getWhatsAppUrl(`Hello ${item.name}, this is Bid Tender 4 U regarding your tender inquiry (${item.id}).`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 text-[11px] font-bold flex items-center gap-1 shadow-xs"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp Client</span>
                        </a>
                        <a
                          href={`tel:${item.phone}`}
                          className="px-2 py-1 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 text-[11px] font-semibold"
                        >
                          Call
                        </a>
                      </div>
                    </div>
                  </div>

                  {item.message && (
                    <div className="mt-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                      <strong className="text-slate-900">Notes / Scope:</strong> {item.message}
                    </div>
                  )}

                  {item.file_name && (
                    <div className="mt-2 text-xs text-slate-600 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-amber-600" />
                      <span>Attached Tender File: <strong className="text-slate-900">{item.file_name}</strong></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
