import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getAllServices } from '@/data/services';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  ZapIcon,
  ArrowUpRightIcon,
  LeafIcon,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Solar Installation & Maintenance Services in Uttarakhand | UTTsolar',
  description:
    'Explore complete solar energy services in Uttarakhand: Residential, Commercial, Industrial, On-Grid, Hybrid, Rooftop, Inverters, Batteries, Net Metering & Subsidy assistance.',
  alternates: {
    canonical: `${siteConfig.url}/services/`,
  },
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'Solar Services', url: '/services/' }]} />

      {/* Hero Header - Solor Style */}
      <section className="bg-[#122417] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3321] border border-[#70BA3F]/40 text-xs font-bold text-[#AEDB96] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#70BA3F]" />
          <span>Turnkey Solar Engineering</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Comprehensive Solar Services Across <span className="text-[#70BA3F]">Uttarakhand</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          From residential rooftop systems with PM Surya Ghar subsidies to multi-megawatt industrial solar plants and lifetime AMC support across all 13 districts.
        </p>
      </section>

      {/* 17 Services Grid */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white p-6 rounded-3xl border border-[#E1E8DE] shadow-xs hover:shadow-xl transition flex flex-col justify-between group hover:border-[#70BA3F]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0F8EC] text-[#70BA3F] flex items-center justify-center font-bold group-hover:scale-105 transition">
                    <ZapIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#687B6C]">
                    Uttarakhand Service
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-[#122417] mb-2 group-hover:text-[#70BA3F] transition">
                  <Link href={`/services/${service.slug}/`}>
                    {service.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#687B6C] leading-relaxed line-clamp-3 mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/services/${service.slug}/`}
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-full text-xs font-bold text-[#122417] bg-[#F4F7F2] group-hover:bg-[#70BA3F] group-hover:text-white transition"
                >
                  <span>Explore Service Details</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1E8DE] shadow-xs">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-[#122417] text-center mb-2">
            Need a Custom Solar Engineering Solution?
          </h2>
          <p className="text-xs text-[#687B6C] text-center mb-8">
            Tell us about your rooftop or land parcel, and we will prepare an engineering feasibility assessment.
          </p>
          <ContactForm defaultDistrict="dehradun" />
        </div>
      </section>
    </div>
  );
}
