import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  ShieldCheckIcon,
  CheckCircleIcon,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Solar AMC (Annual Maintenance Contract) in Uttarakhand | UTTsolar',
  description:
    'Comprehensive Annual Maintenance Contracts (AMC) for residential, commercial & industrial solar plants in Uttarakhand. Scheduled cleanings, priority repair & generation guarantees.',
  alternates: {
    canonical: `${siteConfig.url}/solar-amc/`,
  },
};

export default function SolarAmcPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'Solar AMC', url: '/solar-amc/' }]} />

      {/* Hero Header */}
      <section className="bg-[#122417] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 border border-[#70BA3F]/20">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#70BA3F]/15 text-xs font-semibold text-[#AEDB96] border border-[#70BA3F]/30">
          <ShieldCheckIcon className="w-4 h-4 text-[#70BA3F]" />
          Hassle-Free Peace of Mind
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Solar Annual Maintenance Contracts (AMC) in Uttarakhand
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Protect your solar investment with scheduled preventive cleanings, inverter health checks, priority breakdown response, and generation performance reporting.
        </p>
      </section>

      {/* AMC Packages Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E1E8DE] shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-[#687B6C] uppercase">Residential Tier</span>
            <h2 className="text-xl font-bold text-[#122417] mt-1 mb-3">Basic Home Care</h2>
            <p className="text-xs text-[#687B6C] leading-relaxed mb-4">
              Designed for 1 kW to 5 kW residential rooftop solar installations across Uttarakhand.
            </p>
            <ul className="space-y-2.5 text-xs text-[#172B1D] mb-6">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>4 Scheduled deep cleaning visits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Semi-annual inverter &amp; earthing audit</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Priority 24-hr breakdown support</span>
              </li>
            </ul>
          </div>
          <Link
            href="/contact/?intent=amc"
            className="w-full py-3 rounded-full text-xs font-semibold text-center text-[#2D5A27] bg-[#EAF4E4] hover:bg-[#DDF0D5] transition"
          >
            Inquire for Home AMC
          </Link>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-[#70BA3F] shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="bg-[#70BA3F] text-[#122417] text-[10px] font-bold py-1 uppercase tracking-wider text-center -mx-8 -mt-8 mb-4 shadow-xs">
            Most Popular
          </div>
          <div>
            <span className="text-xs font-bold text-[#70BA3F] uppercase">Commercial Tier</span>
            <h2 className="text-xl font-bold text-[#122417] mt-1 mb-3">Commercial Pro</h2>
            <p className="text-xs text-[#687B6C] leading-relaxed mb-4">
              For hotels, hospitals, schools, and business complexes (10 kW to 50 kW).
            </p>
            <ul className="space-y-2.5 text-xs text-[#172B1D] mb-6">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Bi-monthly pressurized soft water wash</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Quarterly infrared thermography audits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Same-day priority breakdown response</span>
              </li>
            </ul>
          </div>
          <Link
            href="/contact/?intent=amc"
            className="w-full py-3 rounded-full text-xs font-semibold text-center text-[#122417] bg-[#70BA3F] hover:bg-[#61A334] shadow-sm transition"
          >
            Inquire for Commercial AMC
          </Link>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E1E8DE] shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-[#687B6C] uppercase">Industrial Tier</span>
            <h2 className="text-xl font-bold text-[#122417] mt-1 mb-3">Industrial Enterprise</h2>
            <p className="text-xs text-[#687B6C] leading-relaxed mb-4">
              Comprehensive O&amp;M for 50 kW to 1 MW+ industrial shed and ground mount plants.
            </p>
            <ul className="space-y-2.5 text-xs text-[#172B1D] mb-6">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Monthly automated &amp; manual cleaning</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Full HT/LT electrical substation care</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#70BA3F]" />
                <span>Real-time SCADA generation monitoring</span>
              </li>
            </ul>
          </div>
          <Link
            href="/contact/?intent=amc"
            className="w-full py-3 rounded-full text-xs font-semibold text-center text-[#122417] bg-[#F4F7F2] hover:bg-[#EAF0E6] transition"
          >
            Inquire for Industrial AMC
          </Link>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="bg-[#F4F7F2] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E1E8DE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EAF4E4] px-3 py-1 rounded-full border border-[#70BA3F]/30">
              Get an AMC Quote
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122417]">
              Protect Your Solar Plant Today
            </h2>
            <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
              We service plants from all manufacturers across Uttarakhand. Submit your system capacity and location to get a custom AMC quotation.
            </p>
          </div>
          <div className="lg:col-span-6">
            <ContactForm defaultService="solar-amc" defaultDistrict="dehradun" />
          </div>
        </div>
      </section>
    </div>
  );
}
