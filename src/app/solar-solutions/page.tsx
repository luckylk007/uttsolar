import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  SunIcon,
  ZapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Solar Solutions in Uttarakhand: On-Grid, Hybrid & Off-Grid | UTTsolar',
  description:
    'Compare On-Grid, Hybrid, and Off-Grid solar systems for homes and businesses in Uttarakhand. Learn which system fits your UPCL connection and power reliability.',
  alternates: {
    canonical: `${siteConfig.url}/solar-solutions/`,
  },
};

export default function SolarSolutionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'Solar Solutions', url: '/solar-solutions/' }]} />

      {/* Hero Header */}
      <section className="bg-[#122417] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 border border-[#70BA3F]/20">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#70BA3F]/15 text-xs font-semibold text-[#AEDB96] border border-[#70BA3F]/30">
          <SunIcon className="w-4 h-4 text-[#70BA3F]" />
          Engineered System Architectures
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Solar Power Solutions Tailored for Uttarakhand
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Whether you need low-cost on-grid net metering in the plains or hybrid power with battery storage in the hills, choose the ideal solar setup for your property.
        </p>
      </section>

      {/* 4 Main Solutions Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* On-Grid */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E1E8DE] shadow-xs flex flex-col justify-between hover:border-[#70BA3F] transition">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-[#2D5A27] bg-[#EAF4E4] px-3 py-1 rounded-full border border-[#70BA3F]/30">
                Most Popular &amp; Cost-Effective
              </span>
              <ZapIcon className="w-6 h-6 text-[#70BA3F]" />
            </div>
            <h2 className="text-2xl font-bold text-[#122417] mb-2">On-Grid Solar Systems</h2>
            <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed mb-4">
              Directly connected to UPCL grid via bidirectional net meter. Zero battery maintenance, lowest initial cost, and qualifies for the maximum PM Surya Ghar central subsidy (up to ₹85,800).
            </p>
            <ul className="space-y-2.5 text-xs text-[#172B1D] mb-6">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Best for Dehradun, Haldwani, Haridwar, Roorkee &amp; Rudrapur</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Fast payback in 2.8 to 3.5 years</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Surplus units banked in your UPCL electricity account</span>
              </li>
            </ul>
          </div>
          <Link
            href="/services/on-grid-solar/"
            className="inline-flex items-center justify-between py-3 px-5 rounded-full text-xs font-semibold text-[#2D5A27] bg-[#EAF4E4] hover:bg-[#DDF0D5] transition"
          >
            <span>Learn About On-Grid Solar</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Hybrid */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E1E8DE] shadow-xs flex flex-col justify-between hover:border-[#F4B740] transition">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-full border border-[#F4B740]/40">
                Best for Outage-Prone &amp; Hill Areas
              </span>
              <SunIcon className="w-6 h-6 text-[#F4B740]" />
            </div>
            <h2 className="text-2xl font-bold text-[#122417] mb-2">Hybrid Solar Systems</h2>
            <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed mb-4">
              Combines UPCL net metering savings with Lithium LiFePO4 battery storage. Keep critical loads running seamlessly during power cuts while enjoying net metering credits.
            </p>
            <ul className="space-y-2.5 text-xs text-[#172B1D] mb-6">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#F4B740]" />
                <span>Ideal for Mussoorie, Ranikhet, Corbett buffer zones &amp; outer Doon</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#F4B740]" />
                <span>Instant power switchover during grid power cuts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#F4B740]" />
                <span>Compact wall-mounted lithium batteries with 10+ year lifespan</span>
              </li>
            </ul>
          </div>
          <Link
            href="/services/hybrid-solar/"
            className="inline-flex items-center justify-between py-3 px-5 rounded-full text-xs font-semibold text-[#92400E] bg-[#FEF3C7] hover:bg-[#FDE68A] transition"
          >
            <span>Learn About Hybrid Solar</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Off-Grid */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E1E8DE] shadow-xs flex flex-col justify-between hover:border-[#70BA3F] transition">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-[#122417] bg-[#F4F7F2] px-3 py-1 rounded-full border border-[#E1E8DE]">
                100% Standalone Autonomy
              </span>
              <ShieldCheckIcon className="w-6 h-6 text-[#122417]" />
            </div>
            <h2 className="text-2xl font-bold text-[#122417] mb-2">Off-Grid Solar Systems</h2>
            <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed mb-4">
              Designed for remote Himalayan homestays, trekking camps, farms, and ashrams with no access to UPCL grid lines. Sized with sufficient battery autonomy for extended cloudy spells.
            </p>
            <ul className="space-y-2.5 text-xs text-[#172B1D] mb-6">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Zero dependence on external electricity lines</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Replaces noisy and costly diesel generators</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Sized for 1 to 2 days of continuous backup</span>
              </li>
            </ul>
          </div>
          <Link
            href="/services/off-grid-solar/"
            className="inline-flex items-center justify-between py-3 px-5 rounded-full text-xs font-semibold text-[#122417] bg-[#F4F7F2] hover:bg-[#EAF0E6] transition"
          >
            <span>Learn About Off-Grid Solar</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Rooftop Solar */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E1E8DE] shadow-xs flex flex-col justify-between hover:border-[#70BA3F] transition">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-[#2D5A27] bg-[#EAF4E4] px-3 py-1 rounded-full border border-[#70BA3F]/30">
                Turn Idle Roofs into Assets
              </span>
              <SunIcon className="w-6 h-6 text-[#70BA3F]" />
            </div>
            <h2 className="text-2xl font-bold text-[#122417] mb-2">Rooftop Solar Structures</h2>
            <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed mb-4">
              Engineered mounting solutions for every roof type in Uttarakhand: flat concrete RCC slabs, elevated superstructures for terrace walking, sloped tin roofs, and industrial curved sheds.
            </p>
            <ul className="space-y-2.5 text-xs text-[#172B1D] mb-6">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Elevated structures preserve 100% terrace recreational space</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Leak-proof EPDM sealed fasteners on metal sheds</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Hot-dip galvanized structural steel (80-micron zinc coating)</span>
              </li>
            </ul>
          </div>
          <Link
            href="/services/rooftop-solar/"
            className="inline-flex items-center justify-between py-3 px-5 rounded-full text-xs font-semibold text-[#2D5A27] bg-[#EAF4E4] hover:bg-[#DDF0D5] transition"
          >
            <span>Learn About Rooftop Solar</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Solar Calculator */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EAF4E4] px-3 py-1 rounded-full border border-[#70BA3F]/30">
            Find Your Capacity
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122417] mt-2">
            Calculate System Size for Your Property
          </h2>
        </div>
        <SolarCalculator initialDistrict="dehradun" />
      </section>

      {/* Consultation Section */}
      <section className="bg-[#F4F7F2] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E1E8DE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EAF4E4] px-3 py-1 rounded-full border border-[#70BA3F]/30">
              Expert Advice
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122417]">
              Need Help Deciding Between On-Grid &amp; Hybrid?
            </h2>
            <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
              Our solar engineers analyze your area&apos;s power cut patterns, sanctioned load, and terrace space to give you an objective, honest recommendation.
            </p>
          </div>
          <div className="lg:col-span-6">
            <ContactForm defaultDistrict="dehradun" />
          </div>
        </div>
      </section>
    </div>
  );
}
