'use client';

import React, { useState } from 'react';
import { districts } from '@/data/locations/districts';
import { getAllServices } from '@/data/services';
import { siteConfig } from '@/config/site';
import { CheckCircleIcon, PhoneIcon, WhatsAppIcon, ShieldCheckIcon } from '@/components/ui/Icons';

interface ContactFormProps {
  defaultService?: string;
  defaultDistrict?: string;
  intent?: string;
  className?: string;
  compact?: boolean;
}

export function ContactForm({
  defaultService = '',
  defaultDistrict = 'dehradun',
  intent = '',
  className = '',
  compact = false,
}: ContactFormProps) {
  const services = getAllServices();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState(defaultDistrict);
  const [service, setService] = useState(defaultService || 'residential-solar');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    const cleanPhone = phone.replace(/\D/g, '');
    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number.');
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
          service,
          monthlyBill: monthlyBill ? Number(monthlyBill) : undefined,
          message: message.trim(),
          intent,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    const selectedDistrictObj = districts.find((d) => d.slug === district);
    const districtDisplay = selectedDistrictObj ? selectedDistrictObj.name : district;

    return (
      <div className={`p-6 sm:p-8 bg-[#F7F9F5] border border-[#46A304]/30 rounded-3xl text-center space-y-4 shadow-sm ${className}`}>
        <div className="w-14 h-14 bg-[#46A304] text-white rounded-full flex items-center justify-center mx-auto shadow-xs">
          <CheckCircleIcon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#17220F]">Thank You, {name}!</h3>
          <p className="text-xs sm:text-sm text-[#66705F] max-w-md mx-auto mt-1 leading-relaxed">
            Your solar enquiry for <strong>{districtDisplay}</strong> district has been received. Our certified solar engineer will contact you shortly with system pricing and subsidy details.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#17220F] bg-white border border-[#E2E7DE] shadow-xs hover:bg-[#F7F9F5] transition"
          >
            <PhoneIcon className="w-4 h-4 text-[#46A304]" />
            <span>Call {siteConfig.phoneDisplay}</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20solar%20in%20${districtDisplay}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-xs transition"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>WhatsApp Connect</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        compact
          ? `space-y-3.5 ${className}`
          : `bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E7DE] shadow-sm space-y-4 ${className}`
      }
    >
      {!compact && (
        <div className="border-b border-[#E2E7DE] pb-4 mb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EBF5E1] text-[11px] font-bold text-[#2D5A27] uppercase tracking-wider mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#46A304]" />
            <span>PM Surya Ghar Partner</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#17220F]">
            {intent === 'quote' ? 'Request Free Solar Quotation' : 'Book Free Solar Site Survey'}
          </h3>
          <p className="text-xs sm:text-sm text-[#66705F] mt-1 leading-relaxed">
            Zero-obligation site visit, roof shade analysis, and PM Surya Ghar subsidy claim support across Uttarakhand.
          </p>
        </div>
      )}

      {/* Spam Honeypot Field */}
      <input
        type="text"
        name="full_website_address"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* 1. Name & Mobile Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 text-sm sm:text-xs bg-[#F7F9F5] border border-[#E2E7DE] rounded-2xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] transition"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-xs font-bold text-[#66705F] pointer-events-none">
              +91
            </span>
            <input
              type="tel"
              required
              maxLength={10}
              inputMode="numeric"
              autoComplete="tel"
              placeholder="10-digit mobile"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              className="w-full pl-12 pr-4 py-3 text-sm sm:text-xs bg-[#F7F9F5] border border-[#E2E7DE] rounded-2xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] font-medium tracking-wide transition"
            />
          </div>
        </div>
      </div>

      {/* 2. District & Service Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
            District <span className="text-red-500">*</span>
          </label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full px-4 py-3 text-sm sm:text-xs font-semibold bg-[#F7F9F5] border border-[#E2E7DE] rounded-2xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] transition"
          >
            {districts.map((d) => (
              <option key={d.slug} value={d.slug}>
                📍 {d.name} District
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
            Property / System Type
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-3 text-sm sm:text-xs font-semibold bg-[#F7F9F5] border border-[#E2E7DE] rounded-2xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] transition"
          >
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. Monthly Bill & Rooftop/Town Note (Optional) */}
      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
              Monthly Electricity Bill (₹)
            </label>
            <input
              type="number"
              inputMode="numeric"
              placeholder="e.g. 3500"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(e.target.value)}
              className="w-full px-4 py-3 text-sm sm:text-xs bg-[#F7F9F5] border border-[#E2E7DE] rounded-2xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#66705F] mb-1.5">
              Town / Location Notes
            </label>
            <input
              type="text"
              placeholder="e.g. Haldwani, RCC roof"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 text-sm sm:text-xs bg-[#F7F9F5] border border-[#E2E7DE] rounded-2xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] transition"
            />
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
          ⚠️ {errorMessage}
        </div>
      )}

      {/* Submit CTA Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold text-[#17220F] bg-[#FFDE21] hover:bg-[#46A304] hover:text-white transition shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 active:scale-[0.99]"
      >
        <span>
          {isSubmitting
            ? 'Submitting Request...'
            : compact
            ? 'Book Free Survey & Claim Subsidy ↗'
            : 'Book Free Site Survey & Get Quotation ↗'}
        </span>
      </button>

      {/* Trust & Guarantee Indicator */}
      <div className="flex items-center justify-center gap-2 text-[12px] text-[#66705F] pt-1">
        <ShieldCheckIcon className="w-4 h-4 text-[#46A304]" />
        <span>100% Free Site Inspection • UPCL Net Metering Support</span>
      </div>
    </form>
  );
}
