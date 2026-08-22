import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { districts } from '@/data/locations/districts';
import { getAllLocations } from '@/data/locations/locations';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import {
  MapPinIcon,
  ArrowUpRightIcon,
  LeafIcon,
} from '@/components/ui/Icons';

import { multiLocationBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Solar Installation Locations & Service Areas in Uttarakhand | UTTsolar',
  description:
    'Find certified solar panel installation services across all 13 districts of Uttarakhand. Explore localized solar solutions, PM Surya Ghar subsidies & UPCL net metering in Dehradun, Haldwani, Haridwar, Nainital and all major towns.',
  alternates: {
    canonical: `${siteConfig.url}/locations/`,
  },
};

export default function LocationsHubPage() {
  const allLocations = getAllLocations();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      {/* Multi-Location Geo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(multiLocationBusinessSchema()),
        }}
      />

      <Breadcrumbs items={[{ name: 'Service Locations', url: '/locations/' }]} />

      {/* Hero Header - Solor Style */}
      <section className="bg-[#122417] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3321] border border-[#70BA3F]/40 text-xs font-bold text-[#AEDB96] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#70BA3F]" />
          <span>Statewide Uttarakhand Network</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Solar Services in All <span className="text-[#70BA3F]">13 Uttarakhand Districts</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Explore local solar guidelines, UPCL division information, PM Surya Ghar special category subsidy rates (up to ₹85,800), and dedicated installation teams in your area.
        </p>
      </section>

      {/* Popular Major Cities Quick Jump */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E1E8DE] shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-heading font-bold text-[#122417] flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-[#70BA3F]" />
            <span>Popular Solar Service Hubs</span>
          </h2>
          <span className="text-xs text-[#687B6C]">Fast on-site surveys</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: 'Haldwani', district: 'Nainital', href: '/locations/nainital/haldwani-solar-service/' },
            { name: 'Dehradun City', district: 'Dehradun', href: '/locations/dehradun/dehradun-city-solar-service/' },
            { name: 'Haridwar City', district: 'Haridwar', href: '/locations/haridwar/haridwar-city-solar-service/' },
            { name: 'Rudrapur', district: 'Udham Singh Nagar', href: '/locations/udham-singh-nagar/rudrapur-solar-service/' },
            { name: 'Roorkee', district: 'Haridwar', href: '/locations/haridwar/roorkee-solar-service/' },
            { name: 'Rishikesh', district: 'Dehradun', href: '/locations/dehradun/rishikesh-solar-service/' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-3.5 rounded-2xl bg-[#F4F7F2] hover:bg-[#F0F8EC] border border-[#E1E8DE] hover:border-[#70BA3F] transition text-center group"
            >
              <div className="text-xs font-bold text-[#122417] group-hover:text-[#70BA3F] transition truncate">
                {item.name}
              </div>
              <div className="text-[10px] text-[#687B6C] mt-0.5 truncate">
                {item.district}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 13 Districts Directory */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-heading font-extrabold text-[#122417]">
            All 13 Districts Directory
          </h2>
          <p className="text-xs text-[#687B6C] mt-1">
            Select your district to view localized solar feasibility, subsidy information, and active projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {districts.map((d) => (
            <div
              key={d.slug}
              className="bg-white p-6 rounded-3xl border border-[#E1E8DE] shadow-xs flex flex-col justify-between space-y-4 group hover:border-[#70BA3F] transition"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#70BA3F] uppercase tracking-wider">
                    {d.region} Region
                  </span>
                  <MapPinIcon className="w-4 h-4 text-[#70BA3F]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#122417] mt-1 group-hover:text-[#70BA3F] transition">
                  <Link href={`/locations/${d.slug}/`}>
                    {d.name} District
                  </Link>
                </h3>
                <p className="text-xs text-[#687B6C] leading-relaxed mt-2 line-clamp-2">
                  {d.description}
                </p>

                <div className="mt-3 pt-3 border-t border-[#E1E8DE]">
                  <span className="text-[11px] font-bold text-[#122417] block mb-1">
                    Major Service Areas:
                  </span>
                  <p className="text-xs text-[#687B6C]">
                    {d.majorServiceAreas.slice(0, 4).join(', ')}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/locations/${d.slug}/`}
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-full text-xs font-bold text-[#122417] bg-[#F4F7F2] group-hover:bg-[#70BA3F] group-hover:text-white transition"
                >
                  <span>Explore Solar in {d.name}</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
