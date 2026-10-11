import React, { useState, useRef } from 'react';
import { 
  Send, 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  FileUp,
  FileCheck,
  Trash2,
  RefreshCw,
  FileArchive,
  FileSpreadsheet
} from 'lucide-react';
import { FormType, TenderInquiryFormData } from '../types';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/constants';
import { submitTenderInquiry, generateWhatsAppInquiryMessage } from '../lib/api';
import { useToast } from '../context/ToastContext';

interface TenderInquirySectionProps {
  preselectedService?: string;
  preselectedCategory?: string;
}

export const TenderInquirySection: React.FC<TenderInquirySectionProps> = ({ preselectedService, preselectedCategory }) => {
  const { showToast } = useToast();
  const [formType, setFormType] = useState<FormType>('tender');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [businessType, setBusinessType] = useState('MSME');
  const [tenderType, setTenderType] = useState('GeM Portal');
  const [portal, setPortal] = useState('GeM 4.0');
  const [category, setCategory] = useState(preselectedCategory || 'Civil Works & Construction');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [service, setService] = useState(preselectedService || 'Tender Document Analysis & Eligibility Audit');
  const [closingDate, setClosingDate] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registeredId, setRegisteredId] = useState('');

  // Update preselected service or category if passed
  React.useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  React.useEffect(() => {
    if (preselectedCategory) {
      setCategory(preselectedCategory);
      if (!message.includes(preselectedCategory)) {
        setMessage((prev) => prev ? `${prev}\nInterested in Category: ${preselectedCategory}` : `Interested in Category / Tender Scope: ${preselectedCategory}`);
      }
    }
  }, [preselectedCategory]);

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

    if (candidateFile.size > 25 * 1024 * 1024) {
      setFileError('File size exceeds 25MB limit. For large tender drawing archives or high-res NIT scans, please attach directly via our WhatsApp desk.');
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
    setStatusMessage('Submitting your tender inquiry...');

    const formData: TenderInquiryFormData = {
      form_type: formType,
      name,
      company,
      phone,
      email,
      city,
      businessType,
      tenderType,
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
        if (res.inquiryId) {
          setRegisteredId(res.inquiryId);
        }
        setStatusMessage(res.message);
        showToast({
          title: 'Tender Inquiry Received',
          description: `Thank you, ${name}. Your inquiry for ${service} has been logged. Our senior tender officer will contact you within 4 hours.`,
          type: 'success',
          inquiryId: res.inquiryId,
          duration: 6500,
        });
      } else {
        setErrorMessage(res.message || 'Submission failed. Please try again or WhatsApp us.');
        showToast({
          title: 'Submission Issue',
          description: res.message || 'Could not register inquiry. You can also connect directly via WhatsApp.',
          type: 'error',
          duration: 5000,
        });
      }
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage('Could not complete submission. Please connect directly via WhatsApp at +91 9726407267.');
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

  const resetForm = () => {
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
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
            Direct Lead Intake & Consultation
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900" style={{ textWrap: 'balance' }}>
            Submit Your Tender Document for Free Preliminary Review
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Share your tender reference number or NIT document. Our senior consultants will evaluate eligibility criteria, EMD terms, and outline the technical submission roadmap within 4 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Card (col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            {/* Form Mode Selector */}
            <div className="flex rounded-xl bg-slate-100 p-1 mb-8 border border-slate-200">
              <button
                type="button"
                onClick={() => setFormType('tender')}
                className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  formType === 'tender'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Review Active Tender (NIT / RFP)
              </button>
              <button
                type="button"
                onClick={() => setFormType('enquiry')}
                className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  formType === 'enquiry'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                GeM Registration / General Inquiry
              </button>
            </div>

            {submissionSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-black text-slate-900">
                  Inquiry Received Successfully!
                </h3>
                {registeredId && (
                  <div className="inline-block px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono text-amber-900 font-bold">
                    Lead Tracking ID: <strong>{registeredId}</strong>
                  </div>
                )}
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                  Thank you, <strong>{name || 'valued partner'}</strong>. Your inquiry is recorded in our active procurement database. Our Ahmedabad consultancy desk will contact you shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up on WhatsApp for Priority Action</span>
                  </button>

                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Submit Another Tender
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid={`${formType}-form`}
                className="space-y-4"
              >
                {/* Honeypot for spam bots */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name <span className="text-amber-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Nilesh Shah"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Company / Enterprise Name <span className="text-amber-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Shah Infratech Pvt Ltd"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      WhatsApp Mobile Number <span className="text-amber-700">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 97264 07267"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-mono font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-amber-700">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nilesh@shahinfra.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      City / Location
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Ahmedabad, Surat"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Business Entity
                    </label>
                    <select
                      name="businessType"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 font-medium"
                    >
                      <option value="MSME">MSME / Udyam Registered</option>
                      <option value="Startup">DPIIT Startup India</option>
                      <option value="Proprietorship">Sole Proprietorship</option>
                      <option value="Partnership">Partnership / LLP</option>
                      <option value="PvtLtd">Pvt Ltd / Ltd Company</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Target Portal
                    </label>
                    <select
                      name="portal"
                      value={portal}
                      onChange={(e) => setPortal(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 font-medium"
                    >
                      <option value="GeM 4.0">GeM 4.0 Portal</option>
                      <option value="nProcure Gujarat">nProcure (Gujarat)</option>
                      <option value="SPPP Rajasthan">SPPP (Rajasthan)</option>
                      <option value="CPPP (Central)">CPPP (eprocure.gov.in)</option>
                      <option value="IREPS Railways">Indian Railways (IREPS)</option>
                      <option value="Other State Portal">Other State Portal</option>
                    </select>
                  </div>
                </div>

                {formType === 'tender' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Tender Reference / GeM Bid No.
                      </label>
                      <input
                        type="text"
                        name="referenceNumber"
                        value={referenceNumber}
                        onChange={(e) => setReferenceNumber(e.target.value)}
                        placeholder="e.g. GEM/2026/B/123456 or NIT-05"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 placeholder-slate-400 font-mono font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Bid Submission Closing Date
                      </label>
                      <input
                        type="date"
                        name="closingDate"
                        value={closingDate}
                        onChange={(e) => setClosingDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 font-medium"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Consultancy Service Required
                  </label>
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 font-medium"
                  >
                    <option value="Tender Document Analysis & Eligibility Audit">Tender Document Analysis & Eligibility Audit</option>
                    <option value="Startup India Certificate Registration (DPIIT)">Startup India Certificate Registration (DPIIT - 100% Turnover/Exp Waiver)</option>
                    <option value="FSSAI Licence & Food Safety Registration">FSSAI Licence & Food Safety Registration (Basic/State/Central)</option>
                    <option value="Get Free Summary of Tender">Get Free Summary of Tender & NIT Diagnostic</option>
                    <option value="GeM Portal Complete Bidding Support">GeM Portal Complete Bidding Support</option>
                    <option value="ISO Certification (All Types - 9001, 14001, 45001, 27001, 13485)">ISO Certification (All Types - 9001, 14001, 45001, 27001, 13485)</option>
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
                      Attach Tender Document (NIT / RFP / BOQ)
                    </label>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                      Drag & Drop Ready
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
                            Supports PDF, ZIP, DOCX, XLSX up to 25MB • 100% confidential preliminary audit
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
                                Attached
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mt-0.5">
                              <span className="font-semibold text-slate-700">{formatFileSize(file.size)}</span>
                              <span>•</span>
                              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 inline" /> Ready for preliminary audit
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
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Specific Queries / Scope of Work Notes
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide any specific clarifications needed, such as EMD exemption, turnover gap, or joint venture eligibility..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-500 font-medium"
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
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-md shadow-amber-500/20 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting to Specialists...' : 'Submit Tender for Review'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Send on WhatsApp Instead</span>
                  </button>
                </div>

                <div className="form-status text-xs text-slate-500 text-center pt-1 font-medium">
                  {statusMessage}
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Direct Reassurance (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
                  Direct Consultancy Desk
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  Connect with Our Senior Tender Officers
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                  Have an urgent tender closing today or need instant advice on an ongoing bid disqualification? Reach our team directly:
                </p>
              </div>

              <div className="space-y-4 text-sm divide-y divide-slate-100">
                <div className="pt-3 first:pt-0 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Direct Telephone Call</div>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="font-bold text-slate-900 hover:text-amber-800 transition-colors font-mono"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <div className="text-[11px] text-slate-500 font-medium">Mon - Sat: 9:30 AM to 7:30 PM</div>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Official WhatsApp Desk</div>
                    <a
                      href={getWhatsAppUrl('Hello Bid Tender 4 U, I would like to consult with a specialist.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:underline"
                    >
                      Click to chat: +91 9726407267
                    </a>
                    <div className="text-[11px] text-slate-500 font-medium">Share PDF tenders for rapid evaluation</div>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Email Submission</div>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="font-bold text-slate-900 hover:text-amber-800 transition-colors font-mono"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">Head Office Location</div>
                    <div className="text-slate-800 text-xs leading-relaxed font-medium">
                      {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-amber-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Confidentiality Guarantee</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                  Your BOQ pricing estimates, financial reports, and proprietary technical credentials remain strictly confidential under standard non-disclosure compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
