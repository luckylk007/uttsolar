import React from 'react';
import Link from 'next/link';
import { getAllServices } from '@/data/services';
import { districts } from '@/data/locations/districts';
import { getAllLocations } from '@/data/locations/locations';
import {
  MapPinIcon,
  SunIcon,
  ZapIcon,
  BuildingIcon,
  ArrowUpRightIcon,
} from '@/components/ui/Icons';

interface KeywordPillCycleProps {
  currentSlug?: string;
  className?: string;
  variant?: 'full' | 'compact' | 'cities-only' | 'services-only';
  title?: string;
  description?: string;
}

export function KeywordPillCycle({
  currentSlug = '',
  className = '',
  variant = 'full',
  title = 'Explore Uttarakhand Solar Network & Solutions',
  description = 'Quick access to regional solar service centers, turnkey solutions, and government subsidy guides across all 13 districts.',
}: KeywordPillCycleProps) {
  const services = getAllServices();
  const allLocations = getAllLocations();
  const highPriorityLocations = allLocations.filter((l) => l.priority === 'High');

  return (
    <section
      className={`bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E7DE] shadow-xs space-y-8 ${className}`}
      aria-label="Solar Navigation and Keyword Directory"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2E7DE] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF5E1] border border-[#46A304]/30 text-[11px] font-bold text-[#2D5A27] uppercase tracking-wider mb-2">
            <ZapIcon className="w-3.5 h-3.5 text-[#46A304]" />
            <span>Statewide Solar Directory</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#17220F]">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-[#66705F] mt-1 max-w-2xl">
            {description}
          </p>
        </div>

        <Link
          href="/locations/solar-company-in-uttarakhand/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#17220F] bg-[#FFDE21] hover:bg-[#46A304] hover:text-white transition shadow-xs whitespace-nowrap self-start sm:self-auto"
        >
          <span>Solar Company in Uttarakhand</span>
          <ArrowUpRightIcon className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 1. Popular City Landing Pages (Pill Style) */}
      {(variant === 'full' || variant === 'cities-only') && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#17220F] flex items-center gap-1.5">
              <MapPinIcon className="w-4 h-4 text-[#46A304]" />
              <span>Popular City Solar Centers</span>
            </h3>
            <Link
              href="/locations/"
              className="text-[11px] font-semibold text-[#46A304] hover:underline"
            >
              All 99 Locations →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {highPriorityLocations.slice(0, 24).map((loc) => {
              const isCurrent = currentSlug === loc.slug;
              return (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.districtSlug}/${loc.slug}/`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition border ${
                    isCurrent
                      ? 'bg-[#46A304] text-white border-[#46A304] shadow-xs'
                      : 'bg-[#F7F9F5] text-[#17220F] border-[#E2E7DE] hover:border-[#46A304] hover:bg-[#EBF5E1] hover:text-[#2D5A27]'
                  }`}
                  title={`Solar Company in ${loc.name}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#46A304]" />
                  <span>Solar in {loc.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Services & Solutions (Pill Style) */}
      {(variant === 'full' || variant === 'services-only') && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#17220F] flex items-center gap-1.5">
              <SunIcon className="w-4 h-4 text-[#FFDE21]" />
              <span>Solar Solutions &amp; System Types</span>
            </h3>
            <Link
              href="/services/"
              className="text-[11px] font-semibold text-[#46A304] hover:underline"
            >
              All 17 Services →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {services.map((srv) => {
              const isCurrent = currentSlug === srv.slug;
              return (
                <Link
                  key={srv.slug}
                  href={`/services/${srv.slug}/`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition border ${
                    isCurrent
                      ? 'bg-[#46A304] text-white border-[#46A304] shadow-xs'
                      : 'bg-white text-[#17220F] border-[#E2E7DE] hover:border-[#46A304] hover:bg-[#F7F9F5] hover:text-[#46A304]'
                  }`}
                >
                  <span>{srv.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. All 13 Districts (Pill Style) */}
      {variant === 'full' && (
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#17220F] flex items-center gap-1.5">
            <BuildingIcon className="w-4 h-4 text-[#46A304]" />
            <span>All 13 Uttarakhand District Portals</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {districts.map((d) => {
              const isCurrent = currentSlug === d.slug;
              return (
                <Link
                  key={d.slug}
                  href={`/locations/${d.slug}/`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition border ${
                    isCurrent
                      ? 'bg-[#17220F] text-white border-[#17220F]'
                      : 'bg-[#F7F9F5] text-[#17220F] border-[#E2E7DE] hover:border-[#46A304] hover:bg-[#EBF5E1]'
                  }`}
                >
                  <span>📍 {d.name} District</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. High-Intent Quick Actions Bar */}
      <div className="pt-4 border-t border-[#E2E7DE] flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-bold text-[#66705F]">
          🔥 Popular Resources:
        </span>
        <div className="flex flex-wrap gap-2 text-xs">
          <Link
            href="/pm-surya-ghar/"
            className="px-3 py-1 bg-[#FFF4CC] border border-[#FFDE21]/40 rounded-full font-semibold text-[#17220F] hover:bg-[#FFDE21] transition"
          >
            PM Surya Ghar ₹85,800 Subsidy
          </Link>
          <Link
            href="/net-metering/"
            className="px-3 py-1 bg-[#EBF5E1] border border-[#46A304]/40 rounded-full font-semibold text-[#2D5A27] hover:bg-[#46A304] hover:text-white transition"
          >
            UPCL Net Metering Guide
          </Link>
          <Link
            href="/calculator/"
            className="px-3 py-1 bg-white border border-[#E2E7DE] rounded-full font-semibold text-[#17220F] hover:border-[#46A304] transition"
          >
            Solar Savings Calculator
          </Link>
          <Link
            href="/contact/?intent=survey"
            className="px-3 py-1 bg-[#17220F] text-white rounded-full font-semibold hover:bg-[#46A304] transition"
          >
            Book Free Site Survey ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
