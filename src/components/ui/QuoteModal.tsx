'use client';

import React, { useState, useEffect } from 'react';
import { districts } from '@/data/locations/districts';
import { siteConfig } from '@/config/site';
import {
  XIcon,
  CheckCircleIcon,
  PhoneIcon,
  WhatsAppIcon,
  ShieldCheckIcon,
  LeafIcon,
  ZapIcon,
} from '@/components/ui/Icons';
import type { QuoteModalOptions } from '@/context/QuoteModalContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  options: QuoteModalOptions;
}

export function QuoteModal({ isOpen, onClose, options }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState(options.defaultDistrict || 'dehradun');
  const [propertyType, setPropertyType] = useState('residential');
  const [billRange, setBillRange] = useState('3k-8k');
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update defaults when options change
  useEffect(() => {
    if (options.defaultDistrict) {
      setDistrict(options.defaultDistrict);
    }
    if (options.defaultService) {
      if (options.defaultService.includes('commercial')) setPropertyType('commercial');
      else if (options.defaultService.includes('industrial')) setPropertyType('industrial');
      else setPropertyType('residential');
    }
  }, [options]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    const cleanPhone = phone.replace(/\D/g, '');
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: cleanPhone,
          district,
          service: `${propertyType}-solar`,
          monthlyBill: billRange === 'under-3k' ? 2500 : billRange === '3k-8k' ? 5000 : 12000,
          message: `Quote Popup Request: ${propertyType} solar in ${district} district (Bill: ${billRange})`,
          intent: 'quote-popup',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrorMessage(data?.error || 'Failed to submit quote request. Please try again.');
        return;
      }

      setIsSuccess(true);
    } catch {
      setErrorMessage('Network connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setErrorMessage('');
    onClose();
  };

  const selectedDistrictObj = districts.find((d) => d.slug === district);
  const districtName = selectedDistrictObj ? selectedDistrictObj.name : 'Uttarakhand';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#17220F]/70 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E2E7DE] overflow-hidden z-10 my-auto transform transition-all">
        {/* Header Ribbon */}
        <div className="bg-[#17220F] text-white px-5 py-4 sm:px-6 sm:py-5 relative flex items-center justify-between border-b border-[#46A304]/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#46A304] flex items-center justify-center text-white">
              <LeafIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                {options.title || 'Get Instant Solar Quote'}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#70C92F]">
                PM Surya Ghar Subsidy (Up to ₹85,800) • {districtName}
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition focus:outline-none"
            aria-label="Close modal"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-[#EBF5E1] text-[#46A304] rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#17220F]">Quote Request Received!</h4>
                <p className="text-xs sm:text-sm text-[#66705F] mt-1.5 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Our certified solar engineer for <strong>{districtName}</strong> will reach out shortly with system capacity, subsidy estimate &amp; rooftop layout.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20just%20requested%20a%20solar%20quote%20for%20${districtName}%20district`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="px-5 py-3 rounded-full text-xs font-semibold text-[#17220F] bg-[#F7F9F5] hover:bg-[#EBF5E1] border border-[#E2E7DE] transition flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-4 h-4 text-[#46A304]" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-[#66705F] hover:text-[#17220F] underline pt-2 block mx-auto"
              >
                Close this window
              </button>
            </div>
          ) : (
            /* Clean & Non-Confusing Mobile Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam Honeypot */}
              <input
                type="text"
                name="user_quote_security"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* 1. Property Type Selector */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
                  1. Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'residential', label: '🏠 Home' },
                    { id: 'commercial', label: '🏢 Business' },
                    { id: 'industrial', label: '🏭 Industry' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setPropertyType(t.id)}
                      className={`py-2 px-2 text-xs font-semibold rounded-xl border transition text-center ${
                        propertyType === t.id
                          ? 'bg-[#17220F] text-white border-[#17220F] shadow-xs'
                          : 'bg-[#F7F9F5] text-[#17220F] border-[#E2E7DE] hover:bg-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. District & Monthly Bill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* District */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
                    2. District <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs font-semibold bg-[#F7F9F5] border border-[#E2E7DE] rounded-xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] transition"
                  >
                    {districts.map((d) => (
                      <option key={d.slug} value={d.slug}>
                        📍 {d.name} District
                      </option>
                    ))}
                  </select>
                </div>

                {/* Bill Range */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
                    3. Monthly Electricity Bill
                  </label>
                  <select
                    value={billRange}
                    onChange={(e) => setBillRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs font-semibold bg-[#F7F9F5] border border-[#E2E7DE] rounded-xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] transition"
                  >
                    <option value="under-3k">Below ₹3,000 / mo</option>
                    <option value="3k-8k">₹3,000 – ₹8,000 / mo</option>
                    <option value="above-8k">Above ₹8,000 / mo</option>
                  </select>
                </div>
              </div>

              {/* 3. Name & Mobile Number Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F9F5] border border-[#E2E7DE] rounded-xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] transition"
                  />
                </div>

                {/* Mobile Number with +91 indicator */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-xs font-bold text-[#66705F] pointer-events-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      inputMode="numeric"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      className="w-full pl-11 pr-3.5 py-2.5 text-xs bg-[#F7F9F5] border border-[#E2E7DE] rounded-xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] transition font-medium tracking-wide"
                    />
                  </div>
                </div>
              </div>

              {errorMessage && (
                <div className="p-2.5 rounded-xl bg-red-50 text-red-700 text-xs font-semibold">
                  ⚠️ {errorMessage}
                </div>
              )}

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold text-[#17220F] bg-[#FFDE21] hover:bg-[#46A304] hover:text-white transition shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 mt-1 active:scale-[0.99]"
              >
                <ZapIcon className="w-4 h-4" />
                <span>{isSubmitting ? 'Calculating Quote...' : 'Get Instant Solar Quotation ↗'}</span>
              </button>

              {/* Trust Badge Footer */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#66705F] pt-1">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-[#46A304]" />
                <span>Zero Spam • 100% Free Site Survey in Uttarakhand</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
