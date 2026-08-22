import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { projects } from '@/data/projects';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  MapPinIcon,
  LeafIcon,
  CheckIcon,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Completed Solar Projects in Uttarakhand | Residential & Commercial Case Studies | UTTsolar',
  description:
    'Explore completed rooftop solar case studies across Dehradun, Haldwani, Haridwar, Rudrapur & Ramnagar. Real savings figures, capacity specs & UPCL net metering details.',
  alternates: {
    canonical: `${siteConfig.url}/projects/`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'Showcase Projects', url: '/projects/' }]} />

      {/* Hero Header - Solor Style */}
      <section className="bg-[#122417] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3321] border border-[#70BA3F]/40 text-xs font-bold text-[#AEDB96] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#70BA3F]" />
          <span>Verified Project Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Featured Solar Installations Across <span className="text-[#70BA3F]">Uttarakhand</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Explore actual project case studies from residential villas in Dehradun and resort hybrid systems in Corbett to industrial plants in SIDCUL Rudrapur.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-white rounded-3xl border border-[#E1E8DE] shadow-xs hover:shadow-xl transition flex flex-col justify-between overflow-hidden group hover:border-[#70BA3F]"
          >
            <div className="p-6 sm:p-8">
              {/* Category & Location Badges */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#467725] bg-[#E6F4DE] px-3 py-1 rounded-full">
                  {project.category} Solar
                </span>
                <span className="text-xs text-[#687B6C] font-semibold flex items-center gap-1">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#70BA3F]" />
                  <span>{project.location}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-bold text-[#122417] mb-2 leading-snug group-hover:text-[#70BA3F] transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#687B6C] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Specs Box */}
              <div className="bg-[#F4F7F2] p-4 rounded-2xl border border-[#E1E8DE] space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#687B6C]">Installed Capacity:</span>
                  <span className="font-bold text-[#122417]">{project.capacityKw} kW</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#687B6C]">Annual Savings:</span>
                  <span className="font-bold text-[#70BA3F]">{project.annualSavings}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#687B6C]">System Type:</span>
                  <span className="font-semibold text-[#122417] capitalize">{project.systemType}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-[#687B6C] block mb-1">
                  Key Deliverables
                </span>
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#172B1D]">
                    <CheckIcon className="w-3.5 h-3.5 text-[#70BA3F] flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Free Survey Form */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E1E8DE] shadow-xs">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-[#122417] text-center mb-2">
            Build Your Own Solar Success Story
          </h2>
          <p className="text-xs text-[#687B6C] text-center mb-8">
            Book a free site survey to start saving up to 90% on your electricity bills.
          </p>
          <ContactForm defaultDistrict="dehradun" />
        </div>
      </section>
    </div>
  );
}
