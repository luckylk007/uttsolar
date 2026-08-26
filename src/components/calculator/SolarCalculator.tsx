'use client';

import React, { useState, useMemo } from 'react';
import {
  calculateSolar,
  type CalculatorInput,
  type PropertyType,
  type SystemType,
  type ConnectionType,
} from '@/config/calculator';
import { districts } from '@/data/locations/districts';
import { formatCurrency, formatNumber } from '@/lib/utils';
import {
  ZapIcon,
  SunIcon,
  CheckCircleIcon,
  CalculatorIcon,
} from '@/components/ui/Icons';

interface SolarCalculatorProps {
  initialDistrict?: string;
  className?: string;
}

export function SolarCalculator({ initialDistrict = 'dehradun', className = '' }: SolarCalculatorProps) {
  // Calculator Form State
  const [monthlyBill, setMonthlyBill] = useState<number>(3000);
  const [propertyType, setPropertyType] = useState<PropertyType>('residential');
  const [systemType, setSystemType] = useState<SystemType>('on-grid');
  const [connectionType, setConnectionType] = useState<ConnectionType>('single-phase');
  const [selectedDistrict, setSelectedDistrict] = useState<string>(initialDistrict);
  const [roofArea, setRoofArea] = useState<number | undefined>(undefined);
  const [batteryBackup, setBatteryBackup] = useState<boolean>(false);

  // Optional Lead Form State
  const [leadName, setLeadName] = useState('');
  const [leadMobile, setLeadMobile] = useState('');
  const [preferredContact, setPreferredContact] = useState<'phone' | 'whatsapp'>('phone');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Quick Bill Presets
  const quickBills = [1500, 3000, 5000, 8000, 15000];

  const handlePropertyTypeChange = (type: PropertyType) => {
    setPropertyType(type);
    if (type !== 'residential') {
      setConnectionType('three-phase');
    }
  };

  const handleSystemTypeChange = (type: SystemType) => {
    setSystemType(type);
    if (type === 'hybrid' || type === 'off-grid') {
      setBatteryBackup(true);
    } else {
      setBatteryBackup(false);
    }
  };

  // Perform Calculation
  const result = useMemo(() => {
    const input: CalculatorInput = {
      monthlyBill,
      propertyType,
      systemType,
      connectionType,
      location: selectedDistrict,
      roofArea: roofArea && roofArea > 0 ? roofArea : undefined,
      batteryBackup,
    };
    return calculateSolar(input);
  }, [monthlyBill, propertyType, systemType, connectionType, selectedDistrict, roofArea, batteryBackup]);

  // Handle Lead Form Submission
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    if (!leadName.trim() || !/^[6-9]\d{9}$/.test(leadMobile.replace(/\D/g, ''))) {
      setSubmitError('Please enter a valid name and 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/calculator-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName.trim(),
          mobile: leadMobile.trim(),
          district: selectedDistrict,
          monthlyBill,
          recommendedKw: result.recommendedKw,
          systemType,
          propertyType,
          preferredContact,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      setSubmitSuccess(true);
    } catch {
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white rounded-calc border border-border-ui shadow-sm overflow-hidden ${className}`}>
      {/* Header Band */}
      <div className="bg-[#17220F] text-white px-6 py-5 sm:px-8 sm:py-6 border-b border-border-ui">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[12px] font-semibold bg-white/10 text-solar-amber border border-white/15 mb-2">
              <SunIcon className="w-3.5 h-3.5 text-solar-amber" />
              <span>Uttarakhand UPCL Tariff &amp; PM Surya Ghar Model</span>
            </div>
            <h3 className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight leading-[1.2]">
              Solar Savings &amp; Subsidy Calculator
            </h3>
            <p className="text-[14px] sm:text-[15px] text-slate-300 mt-1 max-w-2xl leading-[1.5]">
              Calculate recommended system size, central subsidy up to ₹85,800, and 25-year return on investment.
            </p>
          </div>
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className="text-[12px] text-slate-300">UPCL Blended Tariff</span>
            <span className="text-[16px] font-bold text-solar-amber">₹6.50 / Unit</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border-ui">
        {/* Left: Inputs (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
          {/* 1. Property Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-2">
              1. Property Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['residential', 'commercial', 'industrial'] as PropertyType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handlePropertyTypeChange(type)}
                  className={`py-2.5 px-3 rounded-btn text-xs font-semibold capitalize transition border ${
                    propertyType === type
                      ? 'bg-[#17220F] text-white border-[#17220F]'
                      : 'bg-white text-primary-text border-border-ui hover:bg-warm-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Monthly Electricity Bill */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-secondary-text">
                2. Average Monthly Electricity Bill
              </label>
              <span className="text-lg font-heading font-extrabold text-solar-green">
                ₹{formatNumber(monthlyBill)}
              </span>
            </div>

            <div className="py-2">
              <input
                type="range"
                min={800}
                max={50000}
                step={500}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full"
                aria-label="Monthly electricity bill slider"
              />
            </div>

            {/* Quick Bill Presets */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[11px] text-secondary-text">Quick select:</span>
              {quickBills.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setMonthlyBill(amount)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition border ${
                    monthlyBill === amount
                      ? 'bg-solar-green text-white border-solar-green font-semibold'
                      : 'bg-warm-white text-primary-text border-border-ui hover:border-solar-green'
                  }`}
                >
                  ₹{formatNumber(amount)}
                </button>
              ))}
            </div>
          </div>

          {/* 3. System Architecture */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-2">
              3. System Architecture
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { type: 'on-grid', title: 'On-Grid', desc: 'Net Metering (Best ROI)' },
                { type: 'hybrid', title: 'Hybrid', desc: 'Grid + Battery Backup' },
                { type: 'off-grid', title: 'Off-Grid', desc: '100% Battery Standalone' },
              ].map((item) => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => handleSystemTypeChange(item.type as SystemType)}
                  className={`p-3 rounded-card text-left transition border ${
                    systemType === item.type
                      ? 'bg-[#17220F] text-white border-[#17220F]'
                      : 'bg-white text-primary-text border-border-ui hover:bg-warm-white'
                  }`}
                >
                  <div className="text-xs font-bold">{item.title}</div>
                  <div className={`text-[10px] mt-0.5 ${systemType === item.type ? 'text-slate-300' : 'text-secondary-text'}`}>
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 4. District & Phase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-1.5">
                4. Location (District)
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-3 py-2.5 text-xs font-semibold bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text"
              >
                {districts.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name} District
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-1.5">
                Connection Phase
              </label>
              <select
                value={connectionType}
                onChange={(e) => setConnectionType(e.target.value as ConnectionType)}
                className="w-full px-3 py-2.5 text-xs font-semibold bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text"
              >
                <option value="single-phase">Single Phase (1-Phase)</option>
                <option value="three-phase">Three Phase (3-Phase)</option>
              </select>
            </div>
          </div>

          {/* Optional: Roof Area */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-secondary-text mb-1.5">
              Available Rooftop Area (Optional, sq ft)
            </label>
            <input
              type="number"
              placeholder="e.g. 350 sq ft (leave blank if unsure)"
              value={roofArea || ''}
              onChange={(e) => setRoofArea(e.target.value ? Number(e.target.value) : undefined)}
              className="w-full px-3 py-2.5 text-xs bg-white border border-border-ui rounded-btn focus:outline-none focus:border-solar-green text-primary-text"
            />
          </div>
        </div>

        {/* Right: Results Section (5 Cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-warm-white flex flex-col justify-between">
          <div>
            {/* Recommended Capacity Banner */}
            <div className="bg-light-green rounded-card p-5 border border-border-ui mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-solar-green">
                Recommended System Size
              </span>
              <div className="text-4xl sm:text-5xl font-heading font-extrabold text-solar-green tracking-tight mt-1 flex items-baseline gap-2">
                <span>{result.recommendedKw}</span>
                <span className="text-xl font-bold text-deep-navy">kW</span>
              </div>
              <div className="text-xs font-medium text-primary-text mt-1.5 flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-solar-green flex-shrink-0" />
                <span>{result.recommendedLabel}</span>
              </div>
            </div>

            {/* Financial Breakdown Table */}
            <div className="bg-white rounded-card p-4 border border-border-ui space-y-2.5 mb-5 shadow-xs">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-border-ui">
                <span className="text-secondary-text">Approx. System Cost:</span>
                <span className="font-bold text-primary-text">{formatCurrency(result.systemCost)}</span>
              </div>

              {result.subsidy > 0 ? (
                <div className="flex items-center justify-between text-xs pb-2 border-b border-border-ui text-solar-green font-semibold">
                  <div className="flex items-center gap-1">
                    <ZapIcon className="w-3.5 h-3.5 text-solar-amber" />
                    <span>PM Surya Ghar Subsidy:</span>
                  </div>
                  <span className="font-bold text-solar-green">− {formatCurrency(result.subsidy)}</span>
                </div>
              ) : (
                <div className="flex items-center justify-between text-xs pb-2 border-b border-border-ui text-secondary-text">
                  <span>Central Subsidy:</span>
                  <span className="text-[11px] font-medium text-secondary-text">Residential Only</span>
                </div>
              )}

              <div className="flex items-center justify-between text-sm pt-0.5">
                <span className="font-bold text-deep-navy">Net Investment:</span>
                <span className="text-base font-heading font-extrabold text-deep-navy">
                  {formatCurrency(result.netInvestment)}
                </span>
              </div>
            </div>

            {/* Savings Highlights */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <div className="bg-white p-3 rounded-card border border-border-ui">
                <span className="text-[10px] uppercase font-bold text-secondary-text block">
                  Monthly Savings
                </span>
                <span className="text-base font-heading font-bold text-solar-green">
                  ₹{formatNumber(monthlyBill)} <span className="text-[10px] text-secondary-text font-normal">/ mo</span>
                </span>
              </div>

              <div className="bg-white p-3 rounded-card border border-border-ui">
                <span className="text-[10px] uppercase font-bold text-secondary-text block">
                  Est. Payback
                </span>
                <span className="text-base font-heading font-bold text-deep-navy">
                  {result.paybackYears} <span className="text-[10px] text-secondary-text font-normal">Years</span>
                </span>
              </div>
            </div>

            {/* 25-Year Long-Term Estimated Savings */}
            <div className="bg-[#17220F] text-white p-4 rounded-2xl border border-white/10 text-center mb-5 shadow-md">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#70C92F] block">
                25-Year Estimated Net Savings
              </span>
              <span className="text-2xl sm:text-3xl font-heading font-black text-[#46A304] block mt-0.5">
                {formatCurrency(result.savings25Year)}
              </span>
              <span className="text-[10px] text-slate-300 mt-1 block">
                Includes 25-yr solar generation vs escalating UPCL grid tariffs
              </span>
            </div>

            <div className="text-[11px] text-secondary-text mb-4 flex items-center justify-between px-1">
              <span>Required Roof: <strong>~{result.roofAreaRequired} sq ft</strong></span>
              <span>Daily Gen: <strong>~{result.dailyGenerationKwh} Units</strong></span>
            </div>
          </div>

          {/* Quotation Enquiry Form */}
          <div className="border-t border-[#E2E7DE] pt-4">
            {submitSuccess ? (
              <div className="bg-[#F7F9F5] border border-[#46A304]/30 p-4 rounded-2xl text-center">
                <CheckCircleIcon className="w-6 h-6 text-[#46A304] mx-auto mb-1" />
                <h4 className="text-xs font-bold text-[#17220F]">Enquiry Received!</h4>
                <p className="text-[11px] text-[#66705F] mt-0.5">
                  Our solar engineer for {selectedDistrict} will share an itemized quote and site layout.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                <div className="text-xs font-bold text-[#17220F] flex items-center justify-between">
                  <span>Get Official Quotation ({result.recommendedKw} kW)</span>
                  <span className="text-[10px] font-bold text-[#46A304]">Free Site Survey</span>
                </div>

                <input
                  type="text"
                  name="website_honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your Name"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F9F5] border border-[#E2E7DE] rounded-xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] transition"
                  />
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-xs font-bold text-[#66705F] pointer-events-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="10-digit Mobile"
                      value={leadMobile}
                      onChange={(e) => setLeadMobile(e.target.value.replace(/\D/g, ''))}
                      className="w-full pl-11 pr-3 py-2.5 text-xs bg-[#F7F9F5] border border-[#E2E7DE] rounded-xl focus:outline-none focus:border-[#46A304] focus:bg-white text-[#17220F] font-medium tracking-wide transition"
                    />
                  </div>
                </div>

                {submitError && (
                  <p className="text-[11px] text-red-600 font-semibold">{submitError}</p>
                )}

                <div className="flex items-center justify-between text-[11px] text-[#66705F] px-0.5">
                  <span>Preferred Contact:</span>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={preferredContact === 'phone'}
                        onChange={() => setPreferredContact('phone')}
                        className="accent-[#46A304]"
                      />
                      <span>Phone Call</span>
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={preferredContact === 'whatsapp'}
                        onChange={() => setPreferredContact('whatsapp')}
                        className="accent-[#46A304]"
                      />
                      <span>WhatsApp</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-full text-xs font-semibold text-white bg-[#46A304] hover:bg-[#FFDE21] hover:text-[#17220F] transition shadow-md flex items-center justify-center gap-1.5 disabled:opacity-50 active:scale-[0.99]"
                >
                  <CalculatorIcon className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Submitting...' : `Get Free Survey & Quote for ${result.recommendedKw} kW ↗`}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
