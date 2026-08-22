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
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar-500/20 text-xs font-bold text-solar-300 border border-solar-500/30">
          <SunIcon className="w-4 h-4 text-solar-400" />
          Engineering Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Solar Installation Gallery in Uttarakhand
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          High-performance rooftop arrays, elevated walk-under structures, metal shed mountings, and hill-slope installations engineered across Uttarakhand.
        </p>
      </section>

      {/* Gallery Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-2.5 py-1 rounded-md border border-solar-200">
                  {item.category}
                </span>
                <span className="text-xs font-black text-slate-800">{item.capacity}</span>
              </div>
              <h2 className="text-base font-bold text-slate-900 mb-2 leading-snug">{item.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.description}</p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
              <span className="flex items-center gap-1">
                <MapPinIcon className="w-3.5 h-3.5 text-solar-600" />
                <span>{item.location}</span>
              </span>
              <span>{item.district}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Consultation Section */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
              Custom Racking Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Have a Unique Terrace or Sloped Roof?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
