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
      <section className="bg-[#17220F] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F2E14] border border-[#46A304]/40 text-xs font-bold text-[#70C92F] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#46A304]" />
          <span>Verified Central Financial Assistance (CFA)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Solar Subsidy in <span className="text-[#46A304]">Uttarakhand</span> (2026 Guide)
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Uttarakhand qualifies for higher Special Category Central Financial Assistance under the PM Surya Ghar: Muft Bijli Yojana. Here is how much you will receive and how to claim it.
        </p>
      </section>

      {/* Slabs Comparison Table */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E7DE] shadow-xs space-y-6">
        <h2 className="text-2xl font-heading font-extrabold text-[#17220F]">
          Special Category State (Uttarakhand) vs General State Subsidy
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-[#F7F9F5] text-[#17220F] font-bold border-b border-[#E2E7DE]">
                <th className="p-3.5">System Size</th>
                <th className="p-3.5">Standard States CFA</th>
                <th className="p-3.5 bg-[#EBF5E1] text-[#233C13]">Uttarakhand Special CFA</th>
                <th className="p-3.5">Uttarakhand Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E7DE] text-[#17220F]">
              <tr>
                <td className="p-3.5 font-bold">1 kW System</td>
                <td className="p-3.5">₹30,000</td>
                <td className="p-3.5 font-black text-[#467725] bg-[#F7F9F5]">₹33,000</td>
                <td className="p-3.5 text-[#5A9930] font-bold">+ ₹3,000 Extra</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">2 kW System</td>
                <td className="p-3.5">₹60,000</td>
                <td className="p-3.5 font-black text-[#467725] bg-[#F7F9F5]">₹66,000</td>
                <td className="p-3.5 text-[#5A9930] font-bold">+ ₹6,000 Extra</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">3 kW to 10 kW System</td>
                <td className="p-3.5">₹78,000</td>
                <td className="p-3.5 font-black text-[#467725] bg-[#F7F9F5]">₹85,800</td>
                <td className="p-3.5 text-[#5A9930] font-bold">+ ₹7,800 Extra</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-extrabold text-[#17220F] text-center">
          Calculate Your Exact Net Cost After Subsidy
        </h2>
        <SolarCalculator initialDistrict="dehradun" />
      </section>

      {/* Free Survey Form */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E7DE] shadow-xs">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-[#17220F] text-center mb-2">
            Get Complete Subsidy Assistance
          </h2>
          <p className="text-xs text-[#66705F] text-center mb-8">
            Our team will file your subsidy on the national portal and coordinate with UPCL.
          </p>
          <ContactForm defaultDistrict="dehradun" />
        </div>
      </section>
    </div>
  );
}
