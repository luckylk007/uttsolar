import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  ShieldCheckIcon,
  ZapIcon,
  CheckCircleIcon,
  PhoneIcon,
  LeafIcon,
  UsersIcon,
  ArrowUpRightIcon,
  CheckIcon,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'About UTTsolar | Leading Solar Engineering Company in Uttarakhand',
  description:
    'Learn about UTTsolar — Uttarakhand\'s trusted solar EPC partner. Dedicated to clean energy transformation across all 13 districts with certified engineers and UPCL net metering expertise.',
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'About Us', url: '/about/' }]} />

      {/* Hero Header - Solor Dark Style */}
      <section className="bg-[#122417] text-white rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3321] border border-[#70BA3F]/40 text-xs font-bold text-[#AEDB96] uppercase tracking-wider">
            <LeafIcon className="w-4 h-4 text-[#70BA3F]" />
            <span>About UTTsolar</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
            Powering Uttarakhand with Reliable, <span className="text-[#70BA3F]">High-Yield Solar Energy</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            UTTsolar was founded with a singular mission: to deliver engineered, high-performance solar power solutions customized for Uttarakhand&apos;s unique terrain—from the hot, industrial Terai plains of Udham Singh Nagar and Haridwar to the scenic Himalayan valleys of Garhwal and Kumaon.
          </p>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#70BA3F]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Mission & Vision - Solor Style */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-[#E1E8DE] shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#F0F8EC] text-[#70BA3F] flex items-center justify-center font-black">
            <ZapIcon className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-heading font-bold text-[#122417]">Our Mission</h2>
          <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
            To make clean solar electricity accessible, affordable, and zero-hassle for every household, commercial establishment, and industrial facility in Uttarakhand through uncompromising technical quality and transparent PM Surya Ghar subsidy processing.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#E1E8DE] shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#F0F8EC] text-[#70BA3F] flex items-center justify-center font-black">
            <ShieldCheckIcon className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-heading font-bold text-[#122417]">Our Quality Promise</h2>
          <p className="text-xs sm:text-sm text-[#687B6C] leading-relaxed">
            We exclusively install MNRE ALMM-listed Tier-1 solar modules and BIS-certified inverters engineered with mountain-grade wind resistance and robust surge protection to guarantee 25+ years of trouble-free power generation.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F4DE] text-xs font-extrabold text-[#467725] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#70BA3F]" />
            <span>Core Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#122417] mt-1">
            Why We Are Uttarakhand&apos;s Preferred Solar Installer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E1E8DE] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F0F8EC] text-[#70BA3F] flex items-center justify-center mb-3">
              <UsersIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-heading font-bold text-[#122417]">100% In-House Engineers</h3>
            <p className="text-xs text-[#687B6C] mt-1">
              We never subcontract to untrained third-party laborers. All projects are executed by certified electrical solar engineers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E1E8DE] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F0F8EC] text-[#70BA3F] flex items-center justify-center mb-3">
              <ZapIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-heading font-bold text-[#122417]">DISCOM UPCL Liaison</h3>
            <p className="text-xs text-[#687B6C] mt-1">
              Deep familiarity with Uttarakhand Power Corporation Limited (UPCL) net metering policies across all local electricity divisions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E1E8DE] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F0F8EC] text-[#70BA3F] flex items-center justify-center mb-3">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-heading font-bold text-[#122417]">Terrain-Specific Racking</h3>
            <p className="text-xs text-[#687B6C] mt-1">
              Custom-engineered hot-dip galvanized mounting structures rated for 150 km/h hill wind gusts and sloped roof conditions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E1E8DE] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F0F8EC] text-[#70BA3F] flex items-center justify-center mb-3">
              <CheckIcon className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-heading font-bold text-[#122417]">Direct Subsidy Credits</h3>
            <p className="text-xs text-[#687B6C] mt-1">
              End-to-end guidance to ensure fast, hassle-free direct benefit transfer of PM Surya Ghar Central subsidy (up to ₹85,800).
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Consultation Box */}
      <section className="bg-[#122417] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
          Meet Our Solar EPC Engineering Team
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Book a free site inspection in your district. Our team is available across Dehradun, Haridwar, Haldwani, Nainital, and all 13 hill districts.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-[#122417] bg-[#70BA3F] hover:bg-[#61A334] transition shadow-md"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Call Helpline: {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </section>

      {/* Free Survey Form */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1E8DE] shadow-xs">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-[#122417] text-center mb-2">
            Schedule a Free Rooftop Site Survey
          </h2>
          <p className="text-xs text-[#687B6C] text-center mb-8">
            Our local engineer will inspect your roof and prepare an exact subsidy proposal.
          </p>
          <ContactForm defaultDistrict="dehradun" />
        </div>
      </section>
    </div>
  );
}
