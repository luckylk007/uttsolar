import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import { LeafIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Solar Subsidy in Uttarakhand 2026: PM Surya Ghar Rates & Eligibility | UTTsolar',
  description:
    'Complete guide to solar subsidies in Uttarakhand. Special category central CFA rates up to ₹85,800 for residential rooftops. Check eligibility, documents & payout timelines.',
  alternates: {
    canonical: `${siteConfig.url}/solar-subsidy/`,
  },
};

export default function SolarSubsidyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'Solar Subsidy', url: '/solar-subsidy/' }]} />

      {/* Hero Header - Solor Style */}
      <section className="bg-[#122417] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3321] border border-[#70BA3F]/40 text-xs font-bold text-[#AEDB96] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#70BA3F]" />
          <span>Verified Central Financial Assistance (CFA)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Solar Subsidy in <span className="text-[#70BA3F]">Uttarakhand</span> (2026 Guide)
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Uttarakhand qualifies for higher Special Category Central Financial Assistance under the PM Surya Ghar: Muft Bijli Yojana. Here is how much you will receive and how to claim it.
        </p>
      </section>

      {/* Slabs Comparison Table */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1E8DE] shadow-xs space-y-6">
        <h2 className="text-2xl font-heading font-extrabold text-[#122417]">
          Special Category State (Uttarakhand) vs General State Subsidy
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-[#F4F7F2] text-[#122417] font-bold border-b border-[#E1E8DE]">
                <th className="p-3.5">System Size</th>
                <th className="p-3.5">Standard States CFA</th>
                <th className="p-3.5 bg-[#E6F4DE] text-[#233C13]">Uttarakhand Special CFA</th>
                <th className="p-3.5">Uttarakhand Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E1E8DE] text-[#172B1D]">
              <tr>
                <td className="p-3.5 font-bold">1 kW System</td>
                <td className="p-3.5">₹30,000</td>
                <td className="p-3.5 font-black text-[#467725] bg-[#F0F8EC]">₹33,000</td>
                <td className="p-3.5 text-[#5A9930] font-bold">+ ₹3,000 Extra</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">2 kW System</td>
                <td className="p-3.5">₹60,000</td>
                <td className="p-3.5 font-black text-[#467725] bg-[#F0F8EC]">₹66,000</td>
                <td className="p-3.5 text-[#5A9930] font-bold">+ ₹6,000 Extra</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">3 kW to 10 kW System</td>
                <td className="p-3.5">₹78,000</td>
                <td className="p-3.5 font-black text-[#467725] bg-[#F0F8EC]">₹85,800</td>
                <td className="p-3.5 text-[#5A9930] font-bold">+ ₹7,800 Extra</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-extrabold text-[#122417] text-center">
          Calculate Your Exact Net Cost After Subsidy
        </h2>
        <SolarCalculator initialDistrict="dehradun" />
      </section>

      {/* Free Survey Form */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1E8DE] shadow-xs">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-[#122417] text-center mb-2">
            Get Complete Subsidy Assistance
          </h2>
          <p className="text-xs text-[#687B6C] text-center mb-8">
            Our team will file your subsidy on the national portal and coordinate with UPCL.
          </p>
          <ContactForm defaultDistrict="dehradun" />
        </div>
      </section>
    </div>
  );
}
