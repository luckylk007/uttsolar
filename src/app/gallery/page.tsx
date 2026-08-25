import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { galleryItems } from '@/data/gallery';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  SunIcon,
  MapPinIcon,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Solar Installation Gallery Uttarakhand | UTTsolar',
  description:
    'Browse our installation gallery: elevated rooftop solar structures, industrial shed mountings, hill sloped roofs & PM Surya Ghar residential setups across Uttarakhand.',
  alternates: {
    canonical: `${siteConfig.url}/gallery/`,
  },
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'Installation Gallery', url: '/gallery/' }]} />

      {/* Hero Header */}
      <section className="bg-[#17220F] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 border border-[#46A304]/20">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#46A304]/15 text-xs font-semibold text-[#70C92F] border border-[#46A304]/30">
          <SunIcon className="w-4 h-4 text-[#46A304]" />
          Engineering Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Solar Installation Gallery in Uttarakhand
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          High-performance rooftop arrays, elevated walk-under structures, metal shed mountings, and hill-slope installations engineered across Uttarakhand.
        </p>
      </section>

      {/* Gallery Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs p-6 flex flex-col justify-between hover:border-[#46A304] transition"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-2.5 py-1 rounded-full border border-[#46A304]/30">
                  {item.category}
                </span>
                <span className="text-xs font-bold text-[#17220F]">{item.capacity}</span>
              </div>
              <h2 className="text-base font-bold text-[#17220F] mb-2 leading-snug">{item.title}</h2>
              <p className="text-xs text-[#66705F] leading-relaxed mb-4">{item.description}</p>
            </div>
            <div className="pt-3 border-t border-[#E2E7DE] flex items-center justify-between text-[11px] text-[#66705F] font-medium">
              <span className="flex items-center gap-1">
                <MapPinIcon className="w-3.5 h-3.5 text-[#46A304]" />
                <span>{item.location}</span>
              </span>
              <span>{item.district}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Consultation Section */}
      <section className="bg-[#F7F9F5] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E2E7DE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
              Custom Racking Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17220F]">
              Have a Unique Terrace or Sloped Roof?
            </h2>
            <p className="text-xs sm:text-sm text-[#66705F] leading-relaxed">
              We design custom elevated superstructures, pergola-style solar canopies, and non-penetrating metal shed clamps for challenging roof layouts.
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
