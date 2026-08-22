'use client';

import React, { useState, useMemo } from 'react';
import { districts } from '@/data/locations/districts';
import { getAllServices } from '@/data/services';
import { siteConfig } from '@/config/site';
import {
  getAllPincodesForDistrict,
  getAllPostOfficesForDistrict,
  getPostOfficesByPincode,
  getPincodeForPostOffice,
  validatePostalCombination,
} from '@/data/locations/postalData';
import { CheckCircleIcon, PhoneIcon, WhatsAppIcon, ShieldCheckIcon, MapPinIcon } from '@/components/ui/Icons';

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
  
  // Location Hierarchy States
  const [state] = useState('Uttarakhand');
  const [district, setDistrict] = useState(defaultDistrict);
  const [pincode, setPincode] = useState('');
  const [postOffice, setPostOffice] = useState('');

  const [service, setService] = useState(defaultService || 'residential-solar');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 1. Available PIN codes for currently selected district (No other district PINs)
  const availablePincodes = useMemo(() => {
    if (!district) return [];
    return getAllPincodesForDistrict(district);
  }, [district]);

  // 2. Available Post Offices for currently selected district / PIN code
  const availablePostOffices = useMemo(() => {
    if (!district) return [];
    if (pincode) {
      // Filter only Post Offices belonging to this specific PIN code
      return getPostOfficesByPincode(district, pincode).map((name) => ({
        name,
        pincode,
      }));
    }
    // Otherwise show all Post Offices for this district
    return getAllPostOfficesForDistrict(district);
  }, [district, pincode]);

  // Handle District Change: Reset PIN code & Post Office
  const handleDistrictChange = (newDistrict: string) => {
    setDistrict(newDistrict);
    setPincode('');
    setPostOffice('');
    setErrorMessage('');
  };

  // Handle PIN Code Change: Filter post offices or reset if incompatible
  const handlePincodeChange = (newPin: string) => {
    setPincode(newPin);
    setErrorMessage('');
    if (!newPin) {
      // If PIN is cleared, keep postOffice if it exists in district, or reset
      if (postOffice) {
        const pinForPO = getPincodeForPostOffice(district, postOffice);
        if (!pinForPO) setPostOffice('');
      }
    } else {
      // If a PIN is selected, check if current postOffice belongs to this PIN
      const posUnderNewPin = getPostOfficesByPincode(district, newPin);
      if (postOffice && !posUnderNewPin.includes(postOffice)) {
        setPostOffice('');
      }
    }
  };

  // Handle Post Office Change: Auto-populate corresponding PIN code
  const handlePostOfficeChange = (newPO: string) => {
    setPostOffice(newPO);
    setErrorMessage('');
    if (newPO) {
      const autoPin = getPincodeForPostOffice(district, newPO);
      if (autoPin && autoPin !== pincode) {
        setPincode(autoPin);
      }
    }
  };

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

    // Validate location combination
    if (pincode && !validatePostalCombination(district, pincode, postOffice || undefined)) {
      setErrorMessage('Please select a valid PIN Code and Post Office combination for the selected district.');
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
          state,
          district,
          pincode,
          postOffice,
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
      <div className={`p-6 sm:p-8 bg-[#F0F8EC] border border-[#70BA3F]/30 rounded-2xl text-center ${className}`}>
        <div className="w-12 h-12 bg-[#70BA3F] text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-xs">
          <CheckCircleIcon className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-[#122417] mb-1.5">Thank You, {name}!</h3>
        <p className="text-xs text-[#687B6C] max-w-md mx-auto mb-5 leading-relaxed">
          Your solar enquiry has been received. Our certified solar engineer for <strong>{districtDisplay}</strong>
          {postOffice ? ` (${postOffice}${pincode ? ` - ${pincode}` : ''})` : ''} will contact you to discuss your system sizing and free site survey.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#122417] bg-white border border-[#E1E8DE] shadow-xs hover:bg-[#F4F7F2] transition"
          >
            <PhoneIcon className="w-3.5 h-3.5 text-[#70BA3F]" />
            <span>Call Directly</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20solar%20in%20${districtDisplay}${pincode ? `%20(PIN%20${pincode})` : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#70BA3F] hover:bg-[#61A334] shadow-xs transition"
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
          ? `space-y-3 ${className}`
          : `bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E8DE] shadow-xs space-y-4 ${className}`
      }
    >
      {!compact && (
        <div className="border-b border-[#E1E8DE] pb-3.5 mb-1">
          <h3 className="text-lg sm:text-xl font-bold text-[#122417]">
            {intent === 'quote' ? 'Request Free Solar Quotation' : 'Book a Free Solar Site Survey'}
          </h3>
          <p className="text-xs text-[#687B6C] mt-0.5">
            Zero-obligation site inspection, shading analysis, and PM Surya Ghar subsidy estimate across Uttarakhand.
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
          {/* Compact Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              />
            </div>
          </div>

          {/* Location Row: District & PIN Code */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                District <span className="text-red-500">*</span>
              </label>
              <select
                value={district}
                onChange={(e) => handleDistrictChange(e.target.value)}
                className="w-full px-3 py-2 text-xs font-semibold bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              >
                {districts.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name} District
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                PIN Code <span className="text-[#687B6C] font-normal">(Optional)</span>
              </label>
              <select
                value={pincode}
                onChange={(e) => handlePincodeChange(e.target.value)}
                className="w-full px-3 py-2 text-xs font-semibold bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              >
                <option value="">All {districts.find(d => d.slug === district)?.name} PINs ({availablePincodes.length})</option>
                {availablePincodes.map((pin) => (
                  <option key={pin} value={pin}>
                    {pin}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Post Office & Monthly Bill */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                Town / Post Office <span className="text-[#687B6C] font-normal">(Optional)</span>
              </label>
              <select
                value={postOffice}
                onChange={(e) => handlePostOfficeChange(e.target.value)}
                className="w-full px-3 py-2 text-xs font-medium bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              >
                <option value="">
                  {pincode ? `Post Offices under PIN ${pincode}` : `Select Post Office (${availablePostOffices.length})`}
                </option>
                {availablePostOffices.map((po) => (
                  <option key={`${po.pincode}-${po.name}`} value={po.name}>
                    {po.name} {!pincode ? `(${po.pincode})` : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                Monthly Bill (₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 3000"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Full Form 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              />
            </div>
          </div>

          {/* Level 1: State & Level 2: District */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                State
              </label>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value="Uttarakhand"
                  className="w-full px-3 py-2.5 text-xs font-semibold bg-[#F4F7F2] border border-[#E1E8DE] rounded-xl text-[#172B1D] cursor-not-allowed select-none"
                />
                <span className="absolute right-3 top-2.5 text-[11px] font-bold text-[#70BA3F] bg-[#E6F4DE] px-2 py-0.5 rounded-full">
                  Active Area
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                District in Uttarakhand <span className="text-red-500">*</span>
              </label>
              <select
                value={district}
                onChange={(e) => handleDistrictChange(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-semibold bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              >
                {districts.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name} District
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Level 3: PIN Code & Level 4: Post Office Linked Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold uppercase tracking-wider text-[#687B6C]">
                  PIN Code
                </label>
                <span className="text-[10px] text-[#687B6C]">
                  {availablePincodes.length} PINs in {districts.find(d => d.slug === district)?.name}
                </span>
              </div>
              <select
                value={pincode}
                onChange={(e) => handlePincodeChange(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-semibold bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              >
                <option value="">Select PIN Code (Optional)</option>
                {availablePincodes.map((pin) => (
                  <option key={pin} value={pin}>
                    {pin}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold uppercase tracking-wider text-[#687B6C]">
                  Post Office / Local Area
                </label>
                {pincode && (
                  <span className="text-[10px] text-[#70BA3F] font-semibold">
                    Filtered by PIN {pincode}
                  </span>
                )}
              </div>
              <select
                value={postOffice}
                onChange={(e) => handlePostOfficeChange(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-medium bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              >
                <option value="">
                  {pincode ? `Select Post Office under ${pincode}` : `Select Post Office (${availablePostOffices.length} areas)`}
                </option>
                {availablePostOffices.map((po) => (
                  <option key={`${po.pincode}-${po.name}`} value={po.name}>
                    {po.name} {!pincode ? `(${po.pincode})` : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                Interested Service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-semibold bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                Monthly Electricity Bill (₹)
              </label>
              <input
                type="number"
                placeholder="e.g. 3500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#687B6C] mb-1">
                Rooftop / Location Notes
              </label>
              <input
                type="text"
                placeholder="e.g. RCC roof, shadow-free, 3 kW required"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-white border border-[#E1E8DE] rounded-xl focus:outline-none focus:border-[#70BA3F] text-[#172B1D] transition"
              />
            </div>
          </div>
        </>
      )}

      {errorMessage && (
        <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-semibold flex items-center gap-2">
          <MapPinIcon className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={
          compact
            ? 'w-full py-3 px-5 rounded-full text-[14px] font-semibold text-[#122417] bg-[#70BA3F] hover:bg-[#61A334] transition shadow-md disabled:opacity-50 flex items-center justify-center gap-1.5'
            : 'w-full py-3.5 px-6 rounded-full text-[15px] font-semibold text-[#122417] bg-[#70BA3F] hover:bg-[#61A334] transition shadow-md disabled:opacity-50 flex items-center justify-center gap-2'
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

      <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#687B6C] pt-0.5">
        <ShieldCheckIcon className="w-3.5 h-3.5 text-[#70BA3F]" />
        <span>100% Free Site Inspection • UPCL Net Metering Support</span>
      </div>
    </form>
  );
}
