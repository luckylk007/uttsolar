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
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar-500/20 text-xs font-bold text-solar-300 border border-solar-500/30">
          <ShieldCheckIcon className="w-4 h-4 text-solar-400" />
          Hassle-Free Peace of Mind
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Solar Annual Maintenance Contracts (AMC) in Uttarakhand
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Protect your solar investment with scheduled preventive cleanings, inverter health checks, priority breakdown response, and generation performance reporting.
        </p>
      </section>

      {/* AMC Packages Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase">Residential Tier</span>
            <h2 className="text-xl font-bold text-slate-900 mt-1 mb-3">Basic Home Care</h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Designed for 1 kW to 5 kW residential rooftop solar installations across Uttarakhand.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-solar-500" />
                <span>4 Scheduled deep cleaning visits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-solar-500" />
                <span>Semi-annual inverter &amp; earthing audit</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-solar-500" />
                <span>Priority 24-hr breakdown support</span>
              </li>
            </ul>
          </div>
          <Link
            href="/contact/?intent=amc"
            className="w-full py-2.5 rounded-xl text-xs font-bold text-center text-solar-700 bg-solar-50 hover:bg-solar-100 transition"
          >
            Inquire for Home AMC
          </Link>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-solar-500 shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="bg-solar-600 text-white text-[10px] font-bold py-1 uppercase tracking-wider text-center -mx-8 -mt-8 mb-4">
            Most Popular
          </div>
          <div>
            <span className="text-xs font-bold text-solar-600 uppercase">Commercial Tier</span>
            <h2 className="text-xl font-bold text-slate-900 mt-1 mb-3">Commercial Pro</h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              For hotels, hospitals, schools, and business complexes (10 kW to 50 kW).
            </p>
            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-solar-500" />
                <span>Bi-monthly pressurized soft water wash</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-solar-500" />
                <span>Quarterly infrared thermography audits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-solar-500" />
                <span>Same-day priority breakdown response</span>
              </li>
            </ul>
          </div>
          <Link
            href="/contact/?intent=amc"
            className="w-full py-2.5 rounded-xl text-xs font-bold text-center text-white bg-solar-600 hover:bg-solar-700 shadow-sm transition"
          >
            Inquire for Commercial AMC
          </Link>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase">Industrial Tier</span>
            <h2 className="text-xl font-bold text-slate-900 mt-1 mb-3">Industrial Enterprise</h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Comprehensive O&amp;M for 50 kW to 1 MW+ industrial shed and ground mount plants.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-solar-500" />
                <span>Monthly automated &amp; manual cleaning</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-solar-500" />
                <span>Full HT/LT electrical substation care</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-solar-500" />
                <span>Real-time SCADA generation monitoring</span>
              </li>
            </ul>
          </div>
          <Link
            href="/contact/?intent=amc"
            className="w-full py-2.5 rounded-xl text-xs font-bold text-center text-slate-800 bg-slate-100 hover:bg-slate-200 transition"
          >
            Inquire for Industrial AMC
          </Link>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
              Get an AMC Quote
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Protect Your Solar Plant Today
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
