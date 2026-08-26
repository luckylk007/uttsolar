import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import { ZapIcon, ArrowUpRightIcon } from '@/components/ui/Icons';

import { howToSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'PM Surya Ghar Muft Bijli Yojana in Uttarakhand | Subsidy up to ₹85,800 | UTTsolar',
  description:
    'Complete guide to PM Surya Ghar: Muft Bijli Yojana in Uttarakhand. Learn about special category CFA rates (up to ₹85,800), eligibility, UPCL net metering & step-by-step application.',
  alternates: {
    canonical: `${siteConfig.url}/pm-surya-ghar/`,
  },
};

export default function PmSuryaGharPage() {
  const subsidyHowTo = howToSchema({
    name: 'How to Apply for PM Surya Ghar Solar Subsidy in Uttarakhand',
    description: 'Step-by-step procedure to apply for PM Surya Ghar Muft Bijli Yojana and receive up to ₹85,800 subsidy in Uttarakhand.',
    totalTime: 'P30D',
    steps: [
      {
        name: 'Portal Registration',
        text: 'Register on the national PM Surya Ghar portal using your UPCL electricity consumer number, mobile number, and email.',
      },
      {
        name: 'Technical Feasibility Approval',
        text: 'Submit rooftop solar capacity request for UPCL DISCOM technical feasibility and net metering approval.',
      },
      {
        name: 'Installation by Certified Vendor',
        text: 'Get Tier-1 ALMM solar panels and BIS inverters installed by UTTsolar engineers.',
      },
      {
        name: 'Net Metering & Direct Benefit Transfer',
        text: 'UPCL installs the bidirectional meter, conducts joint inspection, and the subsidy (up to ₹85,800) is credited directly to your bank account within 30 days.',
      },
    ],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(subsidyHowTo),
        }}
      />

      <Breadcrumbs items={[{ name: 'PM Surya Ghar Yojana', url: '/pm-surya-ghar/' }]} />

      {/* Hero Header - Solor Style */}
      <section className="bg-[#17220F] text-white rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F2E14] border border-[#46A304]/40 text-xs font-bold text-[#70C92F] uppercase tracking-wider">
            <ZapIcon className="w-4 h-4 text-[#46A304]" />
            <span>Central Government Scheme</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
            PM Surya Ghar: <span className="text-[#46A304]">Muft Bijli Yojana</span> in Uttarakhand
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Get up to <strong>₹85,800 in Central Financial Assistance (CFA)</strong> for installing a 3 kW rooftop solar system on your home in Uttarakhand. UTTsolar provides end-to-end assistance from national portal registration to UPCL net meter commissioning.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact/?intent=quote"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-[#17220F] bg-[#FFDE21] hover:bg-[#46A304] hover:text-white shadow-md transition"
            >
              <span>Claim PM Surya Ghar Subsidy Now</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://pmsuryaghar.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
            >
              <span>Visit National Portal ↗</span>
            </a>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-[#46A304]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Subsidy Slabs */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5E1] text-xs font-extrabold text-[#467725] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#46A304]" />
            <span>Verified MNRE Rates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#17220F] mt-1">
            Uttarakhand Special Category Subsidy Slabs
          </h2>
          <p className="text-xs sm:text-sm text-[#66705F] mt-1">
            Because Uttarakhand is classified as a Special Category Hilly State, homeowners receive higher subsidies than standard non-hilly states.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#E2E7DE] shadow-xs text-center space-y-3">
            <div className="text-xs font-bold uppercase text-[#66705F]">1 kW System</div>
            <div className="text-3xl font-heading font-extrabold text-[#46A304]">₹33,000</div>
            <p className="text-xs text-[#66705F]">
              Generates ~120 units/month. Perfect for small homes with basic lighting and refrigerator loads.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-[#46A304] shadow-md text-center space-y-3 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#46A304] text-white hover:bg-[#FFDE21] hover:text-[#17220F] text-[10px] uppercase font-black px-3 py-0.5 rounded-full">
              Most Popular
            </div>
            <div className="text-xs font-bold uppercase text-[#66705F]">2 kW System</div>
            <div className="text-3xl font-heading font-extrabold text-[#46A304]">₹66,000</div>
            <p className="text-xs text-[#66705F]">
              Generates ~240 units/month. Covers refrigerator, TV, lights, fans and water geysers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#E2E7DE] shadow-xs text-center space-y-3">
            <div className="text-xs font-bold uppercase text-[#66705F]">3 kW to 10 kW System</div>
            <div className="text-3xl font-heading font-extrabold text-[#46A304]">₹85,800</div>
            <p className="text-xs text-[#66705F]">
              Maximum subsidy cap for residential connections. Supports multiple air conditioners and heavy domestic loads.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="bg-[#F7F9F5] p-8 sm:p-12 rounded-3xl border border-[#E2E7DE] space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5E1] text-xs font-extrabold text-[#467725] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#46A304]" />
            <span>Process Flow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#17220F] mt-1">
            How to Claim Your Subsidy in 4 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="bg-white p-5 rounded-2xl border border-[#E2E7DE] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#46A304] text-white flex items-center justify-center font-bold text-xs mb-3">
              01
            </div>
            <h3 className="text-xs font-bold text-[#17220F]">Registration</h3>
            <p className="text-[11px] text-[#66705F] mt-1">
              Apply on the national portal with your UPCL consumer number and mobile.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E2E7DE] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#17220F] text-[#46A304] flex items-center justify-center font-bold text-xs mb-3 border border-[#46A304]">
              02
            </div>
            <h3 className="text-xs font-bold text-[#17220F]">Feasibility Approval</h3>
            <p className="text-[11px] text-[#66705F] mt-1">
              UPCL approves technical feasibility for net metering connectivity.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E2E7DE] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#46A304] text-white flex items-center justify-center font-bold text-xs mb-3">
              03
            </div>
            <h3 className="text-xs font-bold text-[#17220F]">Installation</h3>
            <p className="text-[11px] text-[#66705F] mt-1">
              UTTsolar installs Tier-1 DCR solar panels and BIS-certified inverters.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E2E7DE] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#17220F] text-[#46A304] flex items-center justify-center font-bold text-xs mb-3 border border-[#46A304]">
              04
            </div>
            <h3 className="text-xs font-bold text-[#17220F]">Direct Bank Credit</h3>
            <p className="text-[11px] text-[#66705F] mt-1">
              Subsidy is directly transferred to your bank account within 30 days of inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#17220F]">
            Calculate Your Exact Subsidy &amp; ROI
          </h2>
        </div>
        <SolarCalculator initialDistrict="dehradun" />
      </section>

      {/* Free Survey Form */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E7DE] shadow-xs">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-[#17220F] text-center mb-2">
            Get Assistance with PM Surya Ghar Application
          </h2>
          <p className="text-xs text-[#66705F] text-center mb-8">
            Leave your details below and our subsidy desk will handle your registration.
          </p>
          <ContactForm defaultDistrict="dehradun" />
        </div>
      </section>
    </div>
  );
}
