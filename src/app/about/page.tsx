import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  ShieldCheckIcon,
  ZapIcon,
  PhoneIcon,
  LeafIcon,
  UsersIcon,
  MapPinIcon,
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

      {/* Hero Header */}
      <section className="bg-[#17220F] text-white rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden">
        <div className="max-w-[700px] space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F2E14] border border-[#46A304]/40 text-[13px] font-semibold text-[#70C92F]">
            <LeafIcon className="w-4 h-4 text-[#46A304]" />
            <span>About UTTsolar</span>
          </div>
          <h1 className="text-[36px] sm:text-[46px] lg:text-[56px] font-bold tracking-[-0.02em] text-white leading-[1.1]">
            Powering Uttarakhand with Reliable, <span className="text-[#46A304]">High-Yield Solar Energy</span>
          </h1>
          <p className="text-[16px] sm:text-[17px] text-slate-300 leading-[1.6]">
            UTTsolar was founded with a singular mission: to deliver engineered, high-performance solar power solutions customized for Uttarakhand&apos;s unique terrain—from the hot, industrial Terai plains of Udham Singh Nagar and Haridwar to the scenic Himalayan valleys of Garhwal and Kumaon.
          </p>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#46A304]/15 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Mission & Vision - Solor Style */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#F7F9F5] text-[#46A304] flex items-center justify-center font-black">
            <ZapIcon className="w-6 h-6" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] font-bold text-[#17220F] leading-[1.2]">Our Mission</h2>
          <p className="text-[15px] text-[#66705F] leading-[1.6]">
            To make clean solar electricity accessible, affordable, and zero-hassle for every household, commercial establishment, and industrial facility in Uttarakhand through uncompromising technical quality and transparent PM Surya Ghar subsidy processing.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#F7F9F5] text-[#46A304] flex items-center justify-center font-black">
            <ShieldCheckIcon className="w-6 h-6" />
          </div>
          <h2 className="text-[24px] sm:text-[28px] font-bold text-[#17220F] leading-[1.2]">Our Quality Promise</h2>
          <p className="text-[15px] text-[#66705F] leading-[1.6]">
            We exclusively install MNRE ALMM-listed Tier-1 solar modules and BIS-certified inverters engineered with mountain-grade wind resistance and robust surge protection to guarantee 25+ years of trouble-free power generation.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="space-y-6">
        <div className="text-center max-w-[650px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5E1] text-[13px] font-semibold text-[#467725] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#46A304]" />
            <span>Core Principles</span>
          </div>
          <h2 className="text-[30px] sm:text-[36px] font-bold text-[#17220F] leading-[1.15] tracking-[-0.015em] mt-1">
            Why We Are Uttarakhand&apos;s Preferred Solar Installer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#E2E7DE] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F7F9F5] text-[#46A304] flex items-center justify-center mb-3">
              <UsersIcon className="w-5 h-5" />
            </div>
            <h3 className="text-[17px] font-semibold text-[#17220F] leading-[1.3]">100% In-House Engineers</h3>
            <p className="text-[14px] text-[#66705F] leading-[1.5] mt-1.5">
              We never subcontract to untrained third-party laborers. All projects are executed by certified electrical solar engineers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2E7DE] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F7F9F5] text-[#46A304] flex items-center justify-center mb-3">
              <ZapIcon className="w-5 h-5" />
            </div>
            <h3 className="text-[17px] font-semibold text-[#17220F] leading-[1.3]">DISCOM UPCL Liaison</h3>
            <p className="text-[14px] text-[#66705F] leading-[1.5] mt-1.5">
              Deep familiarity with Uttarakhand Power Corporation Limited (UPCL) net metering policies across all local electricity divisions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2E7DE] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F7F9F5] text-[#46A304] flex items-center justify-center mb-3">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <h3 className="text-[17px] font-semibold text-[#17220F] leading-[1.3]">Mountain Grade Structures</h3>
            <p className="text-[14px] text-[#66705F] leading-[1.5] mt-1.5">
              Hot-dip galvanized mounting structures rated for 150+ km/h Himalayan storm winds and heavy monsoon downpours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#E2E7DE] shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F7F9F5] text-[#46A304] flex items-center justify-center mb-3">
              <MapPinIcon className="w-5 h-5" />
            </div>
            <h3 className="text-[17px] font-semibold text-[#17220F] leading-[1.3]">13-District Network</h3>
            <p className="text-[14px] text-[#66705F] leading-[1.5] mt-1.5">
              Dedicated field installation and maintenance units in Dehradun, Haridwar, Haldwani, Rudrapur, Roorkee, and Rishikesh.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Consultation Box */}
      <section className="bg-[#17220F] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
          Meet Our Solar EPC Engineering Team
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Book a free site inspection in your district. Our team is available across Dehradun, Haridwar, Haldwani, Nainital, and all 13 hill districts.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#46A304] hover:bg-[#FFB000] hover:text-[#17220F] transition shadow-md"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Call Helpline: {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </section>

      {/* Free Survey Form */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E7DE] shadow-xs">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-[#17220F] text-center mb-2">
            Schedule a Free Rooftop Site Survey
          </h2>
          <p className="text-xs text-[#66705F] text-center mb-8">
            Our local engineer will inspect your roof and prepare an exact subsidy proposal.
          </p>
          <ContactForm defaultDistrict="dehradun" />
        </div>
      </section>
    </div>
  );
}
