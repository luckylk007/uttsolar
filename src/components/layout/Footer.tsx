import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { districts } from '@/data/locations/districts';
import { getAllServices } from '@/data/services';
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ArrowUpRightIcon,
} from '@/components/ui/Icons';

export function Footer() {
  const services = getAllServices();

  return (
    <footer className="bg-[#17220F] text-slate-300 relative overflow-hidden">
      {/* Top Solor Outlined Brand Marquee / Banner (Bebas Neue Display Font with 0 internal cut lines, Mixed Fill + Stroke, Custom Energy Icons, Pause on Hover) */}
      <div className="border-b border-white/10 py-6 sm:py-8 overflow-hidden select-none cursor-default bg-[#0C1A10]/60">
        <div className="animate-infinite-marquee marquee-bebas whitespace-nowrap text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-wider uppercase items-center opacity-85 hover:opacity-100 transition-opacity">
          {/* Loop Segment 1 */}
          <div className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
            <span className="text-[#46A304]">GENERATE YOUR OWN POWER</span>

            {/* Current / Lightning Bolt Sign */}
            <svg className="w-8 h-8 sm:w-11 sm:h-11 text-[#46A304] flex-shrink-0 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>

            <span className="stroke-text-lime">GO SOLAR IN UTTARAKHAND</span>

            {/* Sun Energy Sign */}
            <svg className="w-8 h-8 sm:w-11 sm:h-11 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M7.34 16.66l-1.41 1.41m12.02 0l-1.41-1.41M7.34 7.34L5.93 5.93" />
            </svg>

            <span className="text-white">ZERO ELECTRICITY BILLS</span>

            {/* Electricity Plug Sign */}
            <svg className="w-8 h-8 sm:w-11 sm:h-11 text-[#46A304] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v4m6-4v4M6 7h12a2 2 0 012 2v2a6 6 0 01-6 6h-4a6 6 0 01-6-6V9a2 2 0 012-2zm6 10v4" />
            </svg>

            <span className="stroke-text-white">PM SURYA GHAR CFA</span>

            {/* Clean Energy Spark Sign */}
            <svg className="w-8 h-8 sm:w-11 sm:h-11 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>

          {/* Loop Segment 2 (Identical for seamless infinite scroll) */}
          <div className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10">
            <span className="text-[#46A304]">GENERATE YOUR OWN POWER</span>

            {/* Current / Lightning Bolt Sign */}
            <svg className="w-8 h-8 sm:w-11 sm:h-11 text-[#46A304] flex-shrink-0 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>

            <span className="stroke-text-lime">GO SOLAR IN UTTARAKHAND</span>

            {/* Sun Energy Sign */}
            <svg className="w-8 h-8 sm:w-11 sm:h-11 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M7.34 16.66l-1.41 1.41m12.02 0l-1.41-1.41M7.34 7.34L5.93 5.93" />
            </svg>

            <span className="text-white">ZERO ELECTRICITY BILLS</span>

            {/* Electricity Plug Sign */}
            <svg className="w-8 h-8 sm:w-11 sm:h-11 text-[#46A304] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v4m6-4v4M6 7h12a2 2 0 012 2v2a6 6 0 01-6 6h-4a6 6 0 01-6-6V9a2 2 0 012-2zm6 10v4" />
            </svg>

            <span className="stroke-text-white">PM SURYA GHAR CFA</span>

            {/* Clean Energy Spark Sign */}
            <svg className="w-8 h-8 sm:w-11 sm:h-11 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
        {/* Top 3 Quick Contact Info Boxes - Solor Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#1F2E14] border border-white/10">
            <div className="w-12 h-12 rounded-full bg-[#46A304] text-white flex items-center justify-center flex-shrink-0">
              <PhoneIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[12px] text-[#70C92F] font-medium block">
                Call Us Anytime
              </span>
              <div className="flex flex-col gap-0.5">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-[14px] sm:text-[15px] font-bold text-white hover:text-[#70C92F] transition block"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={`tel:${siteConfig.phoneSecondary}`}
                  className="text-[13px] sm:text-[14px] font-medium text-slate-300 hover:text-[#70C92F] transition block"
                >
                  {siteConfig.phoneSecondaryDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#1F2E14] border border-white/10">
            <div className="w-12 h-12 rounded-full bg-[#46A304] text-white flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[12px] text-[#70C92F] font-medium block">
                WhatsApp Consultation
              </span>
              <div className="flex flex-col gap-0.5">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20solar%20installation%20in%20Uttarakhand`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] sm:text-[15px] font-bold text-white hover:text-[#70C92F] transition block"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsappSecondary}?text=Hi%2C%20I%20am%20interested%20in%20solar%20installation%20in%20Uttarakhand`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] sm:text-[14px] font-medium text-slate-300 hover:text-[#70C92F] transition block"
                >
                  {siteConfig.phoneSecondaryDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#1F2E14] border border-white/10">
            <div className="w-12 h-12 rounded-full bg-[#46A304] text-white flex items-center justify-center flex-shrink-0">
              <MapPinIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[12px] text-[#70C92F] font-medium block">
                Statewide Head Office
              </span>
              <span className="text-[14px] font-medium text-white block">
                Rajpur Road, Dehradun, UK
              </span>
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-10">
          {/* Column 1: Brand & Bio (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white px-3.5 py-2 rounded-2xl inline-block shadow-md group-hover:scale-105 transition-transform">
                <img
                  src="/images/logo-horizontal.png"
                  alt="UTTsolar - Uttarakhand Solar Energy Solutions"
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-[14px] text-slate-300 leading-[1.6] max-w-sm">
              Uttarakhand&apos;s premier rooftop solar EPC engineering provider. Dedicated to bringing clean,
              affordable solar electricity to homes, hotels, schools, and factories across all 13 districts with
              complete PM Surya Ghar central subsidy processing and UPCL net metering synchronization.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/contact/?intent=quote"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-semibold leading-[1.2] text-white bg-[#46A304] hover:bg-[#FFDE21] hover:text-[#17220F] transition shadow-sm"
              >
                <span>Book Free Survey</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/calculator/"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[14px] font-medium leading-[1.2] text-white bg-white/10 hover:bg-white/20 border border-white/15 transition"
              >
                <span>Calculator</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#46A304]" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-[14px] text-slate-300">
              <li>
                <Link href="/about/" className="hover:text-[#46A304] transition">
                  About UTTsolar
                </Link>
              </li>
              <li>
                <Link href="/pm-surya-ghar/" className="hover:text-[#46A304] transition">
                  PM Surya Ghar Scheme
                </Link>
              </li>
              <li>
                <Link href="/solar-subsidy/" className="hover:text-[#46A304] transition">
                  Uttarakhand Subsidy Rates
                </Link>
              </li>
              <li>
                <Link href="/calculator/" className="hover:text-[#46A304] transition">
                  Savings Calculator
                </Link>
              </li>
              <li>
                <Link href="/projects/" className="hover:text-[#46A304] transition">
                  Completed Projects
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-[#46A304] transition">
                  Solar Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-[#46A304] transition">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solar Services */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#46A304]" />
              Solar Solutions
            </h4>
            <ul className="flex flex-col gap-2.5 text-[14px] text-slate-300">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-[#46A304] transition">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/" className="text-[#46A304] font-semibold hover:underline">
                  All 17 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: 13 Districts */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#46A304]" />
              13 Districts
            </h4>
            <ul className="flex flex-col gap-2.5 text-[14px] text-slate-300">
              {districts.slice(0, 7).map((d) => (
                <li key={d.slug}>
                  <Link href={`/locations/${d.slug}/`} className="hover:text-[#46A304] transition">
                    Solar in {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations/" className="text-[#46A304] font-semibold hover:underline">
                  All 13 Districts Directory →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bright Brand Green Copyright Strip */}
      <div className="bg-[#46A304] text-white py-3.5 px-4 font-medium text-[13px] sm:text-[14px] text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} UTTsolar.in. All rights reserved. Uttarakhand Solar Installation &amp; PM Surya Ghar Partner.</span>
          <div className="flex items-center gap-4 text-[13px] font-semibold">
            <Link href="/about/" className="hover:underline">About</Link>
            <Link href="/contact/" className="hover:underline">Contact</Link>
            <Link href="/faq/" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
