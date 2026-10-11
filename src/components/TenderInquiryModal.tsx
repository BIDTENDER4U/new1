import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  FileText, 
  Sparkles, 
  FileUp, 
  FileCheck, 
  Trash2, 
  RefreshCw,
  FileArchive,
  FileSpreadsheet
} from 'lucide-react';
import { FormType, TenderInquiryFormData } from '../types';
import { submitTenderInquiry, generateWhatsAppInquiryMessage } from '../lib/api';
import { getWhatsAppUrl } from '../lib/constants';
import { useToast } from '../context/ToastContext';

interface TenderInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialService?: string;
  initialCity?: string;
}

export const TenderInquiryModal: React.FC<TenderInquiryModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
  initialService,
  initialCity,
}) => {
  const { showToast } = useToast();
  const [formType, setFormType] = useState<FormType>('tender');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState(initialCity || '');
  const [businessType, setBusinessType] = useState('MSME');
  const [portal, setPortal] = useState('GeM 4.0');
  const [category, setCategory] = useState(initialCategory || 'Civil Works & Construction');
  const [service, setService] = useState(initialService || 'Tender Document Analysis & Eligibility Audit');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registeredId, setRegisteredId] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialCity) {
      setCity(initialCity);
    }
  }, [initialCity]);

  if (!isOpen) return null;

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (ext === 'zip' || ext === 'rar' || ext === '7z') {
      return <FileArchive className="w-5 h-5 text-amber-700" />;
    }
    if (ext === 'xls' || ext === 'xlsx' || ext === 'csv') {
      return <FileSpreadsheet className="w-5 h-5 text-emerald-700" />;
    }
    return <FileText className="w-5 h-5 text-amber-800" />;
  };

  const validateAndProcessFile = (candidateFile: File): boolean => {
    setFileError(null);

    // 25MB max size validation
    if (candidateFile.size > 25 * 1024 * 1024) {
      setFileError('File size exceeds 25MB. For large tender drawings, bulk BOQs, or scanned NITs, please attach via our WhatsApp desk.');
      return false;
    }

    setFile(candidateFile);
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current += 1;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current -= 1;
    if (dragCounter.current <= 0) {
      setIsDragging(false);
      dragCounter.current = 0;
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    dragCounter.current = 0;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      validateAndProcessFile(droppedFile);
      e.dataTransfer.clearData();
    }
  };

  const handleRemoveFile = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);
    setStatusMessage('Transmitting your tender inquiry to our database...');

    const formData: TenderInquiryFormData = {
      form_type: formType,
      name,
      company,
      phone,
      email,
      city,
      businessType,
      tenderType: portal,
      portal,
      referenceNumber,
      service,
      category,
      closingDate,
      message,
      file,
    };

    try {
      const res = await submitTenderInquiry(formData);
      setIsSubmitting(false);

      if (res.success) {
        setSubmissionSuccess(true);
        setRegisteredId(res.inquiryId || '');
        setStatusMessage('Your inquiry has been stored securely in our database.');
        showToast({
          title: 'Tender Inquiry Received',
          description: `Thank you, ${name}. Your inquiry for ${service} has been logged. Our senior tender officer will contact you within 4 hours.`,
          type: 'success',
          inquiryId: res.inquiryId,
          duration: 6500,
        });
      } else {
        setErrorMessage(res.message || 'Submission failed. Please try again or WhatsApp us.');
        setStatusMessage('');
        showToast({
          title: 'Submission Issue',
          description: res.message || 'Could not register inquiry. You can also connect directly via WhatsApp.',
          type: 'error',
          duration: 5000,
        });
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err.message || 'Error communicating with server.');
      setStatusMessage('');
      showToast({
        title: 'Connection Error',
        description: 'Could not connect to database server. Please try again or WhatsApp us.',
        type: 'error',
        duration: 5000,
      });
    }
  };

  const handleWhatsAppDirect = () => {
    const text = generateWhatsAppInquiryMessage({
      name,
      company,
      phone,
      service,
      category,
      portal,
      referenceNumber,
      message,
    });
    window.open(getWhatsAppUrl(text), '_blank');
  };

  const handleResetAndClose = () => {
    setSubmissionSuccess(false);
    setRegisteredId('');
    setName('');
    setCompany('');
    setPhone('');
    setEmail('');
    setCity('');
    setReferenceNumber('');
    setMessage('');
    setFile(null);
    setFileError(null);
    setIsDragging(false);
    dragCounter.current = 0;
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl text-slate-900">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 font-mono">
                Bid Tender 4 U Consultancy Desk
              </div>
              <h3 className="font-display text-lg sm:text-xl font-black text-slate-900">
                Inquire Government Tender
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {/* Active selection banner */}
          {(category || service) && (
            <div className="mb-5 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-600 font-semibold">Selected Vertical:</span>
                <span className="text-amber-900 font-bold truncate max-w-xs sm:max-w-md">
                  {category || service}
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950 shrink-0">
                Active Scope
              </span>
            </div>
          )}

          {submissionSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-black text-slate-900">
                Tender Inquiry Submitted!
              </h4>
              {registeredId && (
                <div className="inline-block px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-amber-900 font-bold">
                  Tracking ID: <strong>{registeredId}</strong>
                </div>
              )}
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                Thank you, <strong>{name}</strong>. Your inquiry is stored in our active database. Our senior tender officer will review your scope and contact you shortly.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp for Priority Review</span>
                </button>

                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Firm Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Patel Infrastructure Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Mobile Number <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 97264 07267"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Ahmedabad, Gujarat"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Enterprise Category
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 font-medium"
                  >
                    <option value="MSME - Micro">MSME - Micro</option>
                    <option value="MSME - Small">MSME - Small</option>
                    <option value="DPIIT Startup">DPIIT Startup</option>
                    <option value="Medium / Large">Medium / Large Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Target Portal
                  </label>
                  <select
                    value={portal}
                    onChange={(e) => setPortal(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 font-medium"
                  >
                    <option value="GeM 4.0">GeM 4.0 Portal</option>
                    <option value="nProcure Gujarat">nProcure (Gujarat)</option>
                    <option value="SPPP Rajasthan">SPPP / eProc (Rajasthan)</option>
                    <option value="CPPP (Central)">CPPP (Central Gov)</option>
                    <option value="IREPS Railways">Indian Railways (IREPS)</option>
                    <option value="Defense / PSU">Defense / PSU Direct</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tender Reference / NIT Number
                  </label>
                  <input
                    type="text"
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value)}
                    placeholder="e.g. GEM/2026/B/... or NIT-04/PWD"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-mono font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Submission Closing Date (if known)
                  </label>
                  <input
                    type="date"
                    value={closingDate}
                    onChange={(e) => setClosingDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Required Service / Document Support
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 font-medium"
                >
                  <option value="Tender Document Analysis & Eligibility Audit">Tender Document Analysis & Eligibility Audit</option>
                  <option value="Startup India Certificate Registration (DPIIT)">Startup India Certificate Registration (DPIIT - 100% Turnover/Exp Waiver)</option>
                  <option value="FSSAI Licence & Food Safety Registration">FSSAI Licence & Food Safety Registration (Basic/State/Central)</option>
                  <option value="Get Free Summary of Tender">Get Free Summary of Tender & NIT Diagnostic</option>
                  <option value="GeM Portal Complete Bidding Support">GeM Portal Complete Bidding Support</option>
                  <option value="ISO Certification (All Types - 9001, 14001, 45001, 27001, 13485)">ISO Certification (All Types - 9001, 14001, 45001, etc.)</option>
                  <option value="Class-3 Combo DSC & USB Crypto Token">Class-3 Combo DSC & USB Crypto Token (30 Mins Issuance)</option>
                  <option value="GeM OEM Authorization Code & Brand Approval">GeM OEM Authorization Code & Brand Approval</option>
                  <option value="Non-GeM & State E-Procurement Bidding">Non-GeM & State E-Procurement Bidding</option>
                  <option value="Technical Bid Packaging & Compliance Matrix">Technical Bid Packaging & Compliance Matrix</option>
                  <option value="CA Certificates & Non-Blacklisting Affidavits Support">CA Certificates & Affidavits Support</option>
                  <option value="Post-Bid Clarification & Representation Letters">Post-Bid Clarification & Representation Letters</option>
                </select>
              </div>

              {/* File Attachment with Drag-and-Drop */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Upload Tender Document (NIT / RFP / BOQ)
                  </label>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                    Drag & Drop Supported
                  </span>
                </div>

                {!file ? (
                  <div
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        fileInputRef.current?.click();
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Upload tender document file: click or drag and drop"
                    className={`relative border-2 border-dashed rounded-xl p-5 text-center transition-all cursor-pointer select-none outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1 ${
                      isDragging
                        ? 'border-amber-500 bg-amber-50/90 ring-4 ring-amber-500/20 scale-[1.01]'
                        : 'border-slate-300 hover:border-amber-500 bg-slate-50 hover:bg-amber-50/25'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.zip,.doc,.docx,.xls,.xlsx,.rar,.7z"
                      className="hidden"
                    />

                    <div className="flex flex-col items-center justify-center gap-2">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                          isDragging
                            ? 'bg-amber-500 text-slate-950 scale-110 shadow-md shadow-amber-500/30'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {isDragging ? (
                          <FileUp className="w-6 h-6 animate-bounce" />
                        ) : (
                          <UploadCloud className="w-6 h-6 text-amber-800" />
                        )}
                      </div>

                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">
                          {isDragging ? (
                            <span className="text-amber-800 font-extrabold">Release to drop tender document here</span>
                          ) : (
                            <>
                              <span>Drag & drop tender NIT / RFP here, or </span>
                              <span className="text-amber-700 underline font-extrabold hover:text-amber-800">
                                browse files
                              </span>
                            </>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 font-medium">
                          Supports PDF, ZIP, DOCX, XLSX (up to 25MB) • Confidential preliminary review
                        </p>
                      </div>

                      {/* File format badges */}
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">PDF</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">ZIP</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">DOCX</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">XLSX</span>
                        <span className="text-[10px] font-medium text-slate-500 ml-1">Max 25MB</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative border-2 rounded-xl p-3.5 sm:p-4 transition-all ${
                      isDragging
                        ? 'border-amber-500 bg-amber-50/90 ring-4 ring-amber-500/20'
                        : 'border-emerald-300 bg-emerald-50/40'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.zip,.doc,.docx,.xls,.xlsx,.rar,.7z"
                      className="hidden"
                    />

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-white border border-emerald-300 flex items-center justify-center shrink-0 shadow-xs">
                          {getFileIcon(file.name)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-slate-900 truncate" title={file.name}>
                              {file.name}
                            </span>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0 uppercase border border-emerald-200">
                              Ready
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mt-0.5">
                            <span className="font-semibold text-slate-700">{formatFileSize(file.size)}</span>
                            <span>•</span>
                            <span className="text-emerald-700 font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 inline" /> Attached for tender audit
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-2.5 py-1.5 text-[11px] font-bold rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer flex items-center gap-1 bg-white shadow-xs"
                          title="Choose a different document"
                        >
                          <RefreshCw className="w-3 h-3 text-slate-500" />
                          <span className="hidden sm:inline">Replace</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer bg-white border border-slate-200"
                          title="Remove document"
                          aria-label="Remove document"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {isDragging && (
                      <div className="absolute inset-0 bg-amber-500/10 backdrop-blur-[1px] rounded-xl flex items-center justify-center border-2 border-dashed border-amber-500">
                        <span className="text-xs font-bold text-amber-900 bg-white/95 px-3 py-1 rounded-full shadow-sm border border-amber-300">
                          Drop new file to replace attached document
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Localized File Upload Error with WhatsApp Fallback */}
                {fileError && (
                  <div className="mt-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold">{fileError}</p>
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="mt-1.5 inline-flex items-center gap-1.5 text-emerald-800 font-bold hover:underline cursor-pointer bg-emerald-100/60 px-2.5 py-1 rounded-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Send large tender documents directly on WhatsApp →</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Requirements / Queries
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about turnover, joint venture, technical compliance, or document review needs..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-medium"
                ></textarea>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-md shadow-amber-500/20 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Registering Inquiry...' : 'Submit Tender Inquiry'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>

              {statusMessage && (
                <div className="text-[11px] text-slate-500 text-center font-medium">
                  {statusMessage}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
