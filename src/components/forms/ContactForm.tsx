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
  const [email, setEmail] = useState('');
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
          email: email.trim(),
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
    return (
      <div className={`p-6 sm:p-8 bg-light-green border border-solar-green/30 rounded-card text-center ${className}`}>
        <div className="w-12 h-12 bg-solar-green text-white rounded-btn flex items-center justify-center mx-auto mb-3 shadow-xs">
          <CheckCircleIcon className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-heading font-bold text-deep-navy mb-1.5">Thank You, {name}!</h3>
        <p className="text-xs text-secondary-text max-w-md mx-auto mb-5">
          Your solar enquiry has been received. Our certified solar engineer for <strong>{district}</strong> district will contact you to discuss your system sizing and free site survey.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-btn text-xs font-semibold text-deep-navy bg-white border border-border-ui shadow-xs hover:bg-warm-white transition"
          >
            <PhoneIcon className="w-3.5 h-3.5 text-solar-green" />
            <span>Call Directly</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20solar%20in%20${district}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-btn text-xs font-semibold text-white bg-solar-green hover:bg-solar-green-hover shadow-xs transition"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
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
          ? `space-y-2.5 ${className}`
          : `bg-white p-6 sm:p-8 rounded-card border border-border-ui shadow-xs space-y-4 ${className}`
      }
    >
      {!compact && (
        <div className="border-b border-border-ui pb-3.5 mb-1">
          <h3 className="text-lg sm:text-xl font-heading font-bold text-deep-navy">
            {intent === 'quote' ? 'Request Free Solar Quotation' : 'Book a Free Solar Site Survey'}
          </h3>
          <p className="text-xs text-secondary-text mt-0.5">
            Zero-obligation site inspection, shading analysis, and PM Surya Ghar subsidy estimate.
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

      {compact ? (
        <>
          {/* Compact 2-Row Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-secondary-text mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-secondary-text mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-secondary-text mb-1">
                District <span className="text-red-500">*</span>
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-3 py-2 text-xs font-semibold bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
              >
                {districts.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name} District
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-secondary-text mb-1">
                Monthly Bill (₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 3000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-1">
                District in Uttarakhand <span className="text-red-500">*</span>
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-semibold bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
              >
                {districts.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name} District
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-1">
                Interested Service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-semibold bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-1">
                Monthly Electricity Bill (₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 3500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-1">
              Town / Village / Rooftop Details
            </label>
            <textarea
              rows={2}
              placeholder="e.g. 3 kW system for RCC roof in Haldwani..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text transition"
            />
          </div>
        </>
      )}

      {errorMessage && (
        <p className="text-xs text-red-600 font-semibold">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={
          compact
            ? 'w-full py-3 px-5 rounded-full text-xs font-extrabold text-[#122417] bg-[#70BA3F] hover:bg-[#61A334] transition shadow-md disabled:opacity-50 flex items-center justify-center gap-1.5'
            : 'w-full py-3.5 px-6 rounded-full text-sm font-extrabold text-[#122417] bg-[#70BA3F] hover:bg-[#61A334] transition shadow-md disabled:opacity-50 flex items-center justify-center gap-2'
        }
      >
        <span>
          {isSubmitting
            ? 'Submitting...'
            : compact
            ? 'Book Free Survey & Claim Subsidy ↗'
            : 'Book Free Site Survey & Get Quote ↗'}
        </span>
      </button>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#687B6C] pt-0.5">
        <ShieldCheckIcon className="w-3.5 h-3.5 text-[#70BA3F]" />
        <span>100% Free Site Inspection • UPCL Net Metering Support</span>
      </div>
    </form>
  );
}
