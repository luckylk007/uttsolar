import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import { LeafIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Uttarakhand Solar Savings & Subsidy Calculator | UTTsolar',
  description:
    'Calculate your rooftop solar system size, monthly savings, UPCL net metering return & PM Surya Ghar central subsidy (up to ₹85,800) for Uttarakhand homes & businesses.',
  alternates: {
    canonical: `${siteConfig.url}/calculator/`,
  },
};

export default function CalculatorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'Solar Calculator', url: '/calculator/' }]} />

      {/* Hero Header - Solor Style */}
      <section className="bg-[#122417] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3321] border border-[#2F8E04]/40 text-xs font-bold text-[#71B402] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#2F8E04]" />
          <span>Interactive Sizing &amp; Financial Model</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Uttarakhand Solar Savings &amp; <span className="text-[#2F8E04]">Subsidy Calculator</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Estimate your recommended rooftop solar plant capacity, daily unit generation, PM Surya Ghar Central Financial Assistance (up to ₹85,800), and 25-year return on investment based on UPCL tariffs.
        </p>
      </section>

      {/* Calculator Engine */}
      <section>
        <SolarCalculator initialDistrict="dehradun" />
      </section>

      {/* How the Calculation Works Guide */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1E8DE] shadow-xs space-y-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F4D3] text-xs font-extrabold text-[#467725] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#2F8E04]" />
            <span>Methodology</span>
          </div>
          <h2 className="text-2xl font-heading font-extrabold text-[#122417] mt-1 mb-3">
            How Our Solar Calculation Engine Works
          </h2>
          <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
            Our sizing algorithms are calibrated against verified meteorological data and official MNRE / UPCL benchmarks for the state of Uttarakhand:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 rounded-2xl bg-[#F4F7F2] border border-[#E1E8DE] space-y-2">
            <span className="font-heading font-bold text-[#122417] block text-sm">1. Generation Formula</span>
            <p className="text-[#687B6C] leading-relaxed">
              Calculated at an average <strong>4.8 peak sun hours per day</strong> in Uttarakhand with a <strong>0.75 system performance ratio</strong>, accounting for seasonal monsoon and winter variations.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F4F7F2] border border-[#E1E8DE] space-y-2">
            <span className="font-heading font-bold text-[#122417] block text-sm">2. Special Category Subsidy</span>
            <p className="text-[#687B6C] leading-relaxed">
              Uttarakhand qualifies for enhanced CFA under PM Surya Ghar: <strong>₹33,000/kW</strong> for the first 2 kW and <strong>₹19,800</strong> for the 3rd kW, capping at <strong>₹85,800</strong>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F4F7F2] border border-[#E1E8DE] space-y-2">
            <span className="font-heading font-bold text-[#122417] block text-sm">3. Roof Space Requirement</span>
            <p className="text-[#687B6C] leading-relaxed">
              Standard high-efficiency monocrystalline PERC and TopCon modules require approximately <strong>80 sq ft of shadow-free terrace area per 1 kW</strong> installed.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="bg-[#F4F7F2] rounded-3xl p-6 sm:p-10 border border-[#E1E8DE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5F4D3] text-xs font-extrabold text-[#467725] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#2F8E04]" />
              <span>Need Exact Engineering Drawing?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#122417]">
              Get an Official 3D Layout &amp; Quotation
            </h2>
            <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
              Our engineering team will create a 3D shadow simulation of your rooftop and provide a complete Single Line Diagram (SLD) and UPCL net metering plan.
            </p>
          </div>
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-[#E1E8DE]">
            <ContactForm defaultDistrict="dehradun" />
          </div>
        </div>
      </section>
    </div>
  );
}
