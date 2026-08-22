import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  SunIcon,
  ShieldCheckIcon,
  ZapIcon,
  ToolIcon,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Solar Panel Maintenance & Cleaning Services in Uttarakhand | UTTsolar',
  description:
    'Professional solar panel cleaning, thermal imaging inspection, inverter repair, and preventive maintenance across Uttarakhand. Restore lost generation and ensure 25-year reliability.',
  alternates: {
    canonical: `${siteConfig.url}/solar-maintenance/`,
  },
};

export default function SolarMaintenancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'Solar Maintenance', url: '/solar-maintenance/' }]} />

      {/* Hero Header */}
      <section className="bg-[#122417] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 border border-[#70BA3F]/20">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#70BA3F]/15 text-xs font-semibold text-[#AEDB96] border border-[#70BA3F]/30">
          <ToolIcon className="w-4 h-4 text-[#70BA3F]" />
          Preventive Care &amp; Performance Restoration
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Solar Panel Maintenance Services in Uttarakhand
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Dust in the Terai, pollen in spring, and monsoon moss can reduce solar output by up to 25%. Our certified technicians restore your plant to peak generation efficiency.
        </p>
      </section>

      {/* Maintenance Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E1E8DE] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#EAF4E4] text-[#70BA3F] flex items-center justify-center font-bold">
            <SunIcon className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#122417]">Demineralized Water Cleaning</h2>
          <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
            Non-abrasive microfiber cleaning with pure soft water that removes stubborn soot and dust without scratching the anti-reflective glass coating.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E1E8DE] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#F4B740] flex items-center justify-center font-bold">
            <ZapIcon className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#122417]">Thermal Imaging &amp; Diagnostics</h2>
          <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
            Infrared thermography audits to detect invisible micro-cracks, module hot-spots, and internal diode failures before they cause system breakdown.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E1E8DE] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#EAF4E4] text-[#70BA3F] flex items-center justify-center font-bold">
            <ShieldCheckIcon className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#122417]">Electrical &amp; Earthing Audit</h2>
          <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
            Torque inspection of all structural clamps, MC4 connector weatherproofing, SPD testing, and earthing pit resistance measurement.
          </p>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="bg-[#F4F7F2] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E1E8DE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EAF4E4] px-3 py-1 rounded-full border border-[#70BA3F]/30">
              Book Maintenance Visit
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122417]">
              Schedule a Solar Health Checkup
            </h2>
            <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
              We maintain solar systems installed by any company or installer across Uttarakhand. Book a diagnostic visit today.
            </p>
          </div>
          <div className="lg:col-span-6">
            <ContactForm defaultService="solar-maintenance" defaultDistrict="dehradun" />
          </div>
        </div>
      </section>
    </div>
  );
}
