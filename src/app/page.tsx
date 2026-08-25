import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { districts } from '@/data/locations/districts';
import { getAllBlogs } from '@/data/blogs';
import { projects } from '@/data/projects';
import { faqsData } from '@/data/faqs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  ZapIcon,
  ShieldCheckIcon,
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  BuildingIcon,
  HomeIcon,
  FactoryIcon,
  CalculatorIcon,
  ArrowUpRightIcon,
  PlayIcon,
  CheckIcon,
  LeafIcon,
} from '@/components/ui/Icons';
import { faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Solar Panel Installation & PM Surya Ghar Subsidy in Uttarakhand | UTTsolar',
  description:
    'Uttarakhand\'s leading solar EPC company. Get up to ₹85,800 PM Surya Ghar subsidy, UPCL net metering, and zero electricity bills for homes and businesses across all 13 districts.',
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
};

export default function HomePage() {
  const recentBlogs = getAllBlogs().slice(0, 3);
  const homeFaqs = faqsData.flatMap((c) => c.items).slice(0, 6);

  return (
    <>
      {/* FAQ Schema for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(homeFaqs)),
        }}
      />

      <div className="flex flex-col bg-white text-[#17220F]">
        {/* =========================================================================
            SECTION 1: HERO SECTION (SOLOR THEME STYLE)
           ========================================================================= */}
        <section className="relative overflow-hidden bg-[#17220F] text-white">
          {/* Background Solar Engineering Photo with Deep Forest Gradient Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=2000&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17220F] via-[#17220F]/85 to-[#17220F]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17220F] via-transparent to-[#17220F]/50 pointer-events-none" />

          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#46A304]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#34BAF6]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Heading & CTAs (7 Cols) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Solor Theme Small Pill Subtitle */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F2E14] border border-[#46A304]/40 text-[13px] font-semibold text-[#70C92F]">
                  <span className="w-2 h-2 rounded-full bg-[#46A304] animate-pulse" />
                  <span>Powering Uttarakhand With Solar</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-[36px] sm:text-[46px] lg:text-[56px] font-bold tracking-[-0.02em] text-white leading-[1.1]">
                  Powering the Future <br className="hidden sm:inline" />
                  With <span className="text-[#46A304]">Renewable Energy.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-[16px] sm:text-[17px] text-slate-300 max-w-[620px] mx-auto lg:mx-0 leading-[1.6] font-normal">
                  Turnkey residential, commercial, and industrial rooftop solar installations across all 13 Uttarakhand districts. We handle 100% of your PM Surya Ghar central subsidy and UPCL net metering paperwork.
                </p>

                {/* Quick Sizing Indicator - Solor Dark Card */}
                <div className="bg-[#1F2E14]/90 border border-white/10 rounded-2xl p-4 max-w-[620px] mx-auto lg:mx-0 shadow-lg">
                  <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
                    <div className="px-2">
                      <span className="text-[13px] font-medium text-slate-400 block">Monthly Bill</span>
                      <span className="text-[17px] sm:text-[19px] font-bold text-white">₹3,000</span>
                    </div>
                    <div className="px-2">
                      <span className="text-[13px] font-semibold text-[#46A304] block">Recommended</span>
                      <span className="text-[17px] sm:text-[19px] font-bold text-[#46A304]">3 kW System</span>
                    </div>
                    <div className="px-2">
                      <span className="text-[13px] font-semibold text-green-300 block">Monthly Saving</span>
                      <span className="text-[17px] sm:text-[19px] font-bold text-green-300">~₹3,000</span>
                    </div>
                  </div>
                </div>

                {/* CTAs - Solor Style Pill Buttons with Arrow In Circle */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    href="/contact/?intent=quote"
                    className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-[15px] font-semibold leading-[1.2] text-white bg-[#46A304] hover:bg-[#2F7D05] shadow-md hover:shadow-xl transition"
                  >
                    <span>Get Started Today</span>
                    <span className="w-6 h-6 rounded-full bg-[#17220F] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </span>
                  </Link>

                  <Link
                    href="#calculator"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold leading-[1.2] text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition"
                  >
                    <CalculatorIcon className="w-4 h-4 text-[#46A304]" />
                    <span>Calculate Savings</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Quick Booking Form Card (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E2E7DE] text-[#17220F]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-semibold text-[#46A304] bg-[#F7F9F5]">
                      <LeafIcon className="w-3.5 h-3.5" />
                      Fast 30-Sec Booking
                    </span>
                    <span className="text-[13px] text-[#66705F] font-medium">Free Survey</span>
                  </div>
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#17220F] leading-[1.2]">
                    Book Free Solar Survey
                  </h3>
                  <p className="text-[14px] text-[#66705F] leading-[1.5] mt-1 mb-4">
                    Our certified engineer inspects your roof and prepares an exact subsidy proposal.
                  </p>
                  <ContactForm defaultDistrict="dehradun" compact={true} className="p-0 shadow-none border-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: IMPACT METRICS & COUNTER STRIP (SOLOR STYLE)
           ========================================================================= */}
        <section className="bg-white border-b border-[#E2E7DE] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[700px] mx-auto mb-8">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-[1.2] text-[#17220F]">
                Smart Energy Solutions, High-Quality Solar Engineering, and Skilled Service — Helping Uttarakhand Create A Cost-Effective Future
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4">
              <div className="text-center p-3">
                <div className="text-[32px] sm:text-[40px] font-bold text-[#17220F] leading-none">10K+</div>
                <div className="text-[13px] font-semibold text-[#46A304] mt-1.5">kW Capacity</div>
                <div className="text-[13px] text-[#66705F]">Engineered &amp; Installed</div>
              </div>
              <div className="text-center p-3">
                <div className="text-[32px] sm:text-[40px] font-bold text-[#17220F] leading-none">15K+</div>
                <div className="text-[13px] font-semibold text-[#46A304] mt-1.5">Happy Homes</div>
                <div className="text-[13px] text-[#66705F]">Zero monthly power bills</div>
              </div>
              <div className="text-center p-3">
                <div className="text-[32px] sm:text-[40px] font-bold text-[#17220F] leading-none">340+</div>
                <div className="text-[13px] font-semibold text-[#46A304] mt-1.5">Commercial Plants</div>
                <div className="text-[13px] text-[#66705F]">Hotels, schools &amp; factories</div>
              </div>
              <div className="text-center p-3">
                <div className="text-[32px] sm:text-[40px] font-bold text-[#17220F] leading-none">100%</div>
                <div className="text-[13px] font-semibold text-[#46A304] mt-1.5">UPCL Approval</div>
                <div className="text-[13px] text-[#66705F]">Net metering liaison</div>
              </div>
              <div className="text-center p-3 col-span-2 md:col-span-1">
                <div className="text-[32px] sm:text-[40px] font-bold text-[#17220F] leading-none">25+</div>
                <div className="text-[13px] font-semibold text-[#46A304] mt-1.5">Years Warranty</div>
                <div className="text-[13px] text-[#66705F]">Tier-1 ALMM panels</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: ABOUT SECTION (CREATIVE DUAL-IMAGE COMPOSITION - SOLOR STYLE)
           ========================================================================= */}
        <section className="bg-[#F7F9F5] py-16 sm:py-24 border-b border-[#E2E7DE]" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Creative Double-Image Layout with Experience Badge */}
              <div className="lg:col-span-6 relative">
                {/* Main Large Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src="/images/about-solar-uttarakhand.jpg"
                    alt="Modern Rooftop Solar Installation in Uttarakhand"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>

                {/* Overlapping Secondary Image with Green Border */}
                <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-48 sm:w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#46A304]">
                  <img
                    src="/images/solar-engineer-inspection.jpg"
                    alt="Certified Solar Engineer Inspecting Panels"
                    className="w-full h-36 sm:h-44 object-cover"
                  />
                </div>

                {/* 25-Year Warranty Pill Badge */}
                <div className="absolute top-6 -left-4 bg-[#17220F] text-white p-3.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#46A304] flex items-center justify-center text-[#17220F]">
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[17px] font-bold text-white leading-none">25 Years</div>
                    <div className="text-[12px] text-[#70C92F] font-semibold mt-1">Linear Warranty</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Content & Checklist */}
              <div className="lg:col-span-6 space-y-5 lg:pl-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5E1] text-[13px] font-semibold text-[#467725]">
                  <span className="w-2 h-2 rounded-full bg-[#46A304]" />
                  <span>About Green Energy Solar</span>
                </div>

                <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold text-[#17220F] leading-[1.15] tracking-[-0.015em]">
                  Transforming Uttarakhand Rooftops with Clean, Affordable Solar Power
                </h2>

                <p className="text-[16px] sm:text-[17px] text-[#66705F] leading-[1.6] max-w-[650px]">
                  UTTsolar is Uttarakhand&apos;s leading turnkey solar EPC company. We specialize in engineering high-yield rooftop solar power plants tailored for Uttarakhand&apos;s geographical climate — from the sun-drenched plains of Dehradun, Haridwar, and Udham Singh Nagar to the hill regions of Nainital, Almora, and Garhwal.
                </p>

                {/* 4-Item Solor Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#46A304] text-white flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[14px] font-medium text-[#17220F]">MNRE &amp; UPCL Approved Panels</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#46A304] text-white flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[14px] font-medium text-[#17220F]">Up to ₹85,800 Central Subsidy</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#46A304] text-white flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[14px] font-medium text-[#17220F]">Fast 2.8-Year ROI Payback</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#46A304] text-white flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[14px] font-medium text-[#17220F]">24/7 Local Engineer Support</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/about/"
                    className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[15px] font-semibold leading-[1.2] text-white bg-[#46A304] hover:bg-[#2F7D05] transition shadow-sm"
                  >
                    <span>Discover More About Us</span>
                    <span className="w-5 h-5 rounded-full bg-[#17220F] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRightIcon className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: OUR SERVICES (SOLOR THEME IMAGE CARDS GRID)
           ========================================================================= */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E2E7DE]" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[650px] mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5E1] text-[13px] font-semibold text-[#467725] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#46A304]" />
                <span>Our Services</span>
              </div>
              <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold text-[#17220F] leading-[1.15] tracking-[-0.015em]">
                Smart Power Solutions For Every Property
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Residential */}
              <div className="group rounded-2xl bg-white border border-[#E2E7DE] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                      alt="Residential Solar Installation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#46A304] text-white hover:bg-[#2F7D05] flex items-center justify-center shadow-lg">
                      <HomeIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[13px] font-semibold text-[#46A304] block">1 kW to 10 kW</span>
                    <h3 className="text-[24px] lg:text-[28px] font-semibold text-[#17220F] leading-[1.2] mt-1 mb-2">
                      Residential Solar
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#66705F] leading-[1.6] mb-4">
                      Complete home rooftop solar systems with up to ₹85,800 PM Surya Ghar Central subsidy and UPCL net metering synchronization.
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#17220F]">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="w-3.5 h-3.5 text-[#46A304]" />
                        <span>Zero monthly electricity bills</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="w-3.5 h-3.5 text-[#46A304]" />
                        <span>2.8 to 3.5 year ROI payback</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/services/residential-solar/"
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-full text-[15px] font-semibold leading-[1.2] text-[#17220F] bg-[#F7F9F5] group-hover:bg-[#46A304] group-hover:text-white transition"
                  >
                    <span>Explore Residential Solar</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Commercial */}
              <div className="group rounded-2xl bg-white border border-[#E2E7DE] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
                      alt="Commercial Solar Installation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#46A304] text-white hover:bg-[#2F7D05] flex items-center justify-center shadow-lg">
                      <BuildingIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[13px] font-semibold text-[#46A304] block">10 kW to 100 kW+</span>
                    <h3 className="text-[24px] lg:text-[28px] font-semibold text-[#17220F] leading-[1.2] mt-1 mb-2">
                      Commercial Solar
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#66705F] leading-[1.6] mb-4">
                      High-efficiency 3-phase solar plants for hotels, resorts, schools, and hospitals across Uttarakhand with 40% tax depreciation.
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#17220F]">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="w-3.5 h-3.5 text-[#46A304]" />
                        <span>Massive daytime peak cost reduction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="w-3.5 h-3.5 text-[#46A304]" />
                        <span>40% Accelerated Depreciation tax benefit</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/services/commercial-solar/"
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-full text-[15px] font-semibold leading-[1.2] text-[#17220F] bg-[#F7F9F5] group-hover:bg-[#46A304] group-hover:text-white transition"
                  >
                    <span>Explore Commercial Solar</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Industrial */}
              <div className="group rounded-2xl bg-white border border-[#E2E7DE] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80"
                      alt="Industrial Solar Plant"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#46A304] text-white hover:bg-[#2F7D05] flex items-center justify-center shadow-lg">
                      <FactoryIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[13px] font-semibold text-[#46A304] block">100 kW to Megawatt</span>
                    <h3 className="text-[24px] lg:text-[28px] font-semibold text-[#17220F] leading-[1.2] mt-1 mb-2">
                      Industrial Solar
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#66705F] leading-[1.6] mb-4">
                      Megawatt-scale turnkey solar plants for manufacturing sheds in SIDCUL Haridwar, Rudrapur, Pantnagar, and Kashipur.
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#17220F]">
                      <li className="flex items-center gap-2">
                        <CheckIcon className="w-3.5 h-3.5 text-[#46A304]" />
                        <span>Non-penetrating engineered shed clamps</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckIcon className="w-3.5 h-3.5 text-[#46A304]" />
                        <span>HT/LT grid synchronization with UPCL</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/services/industrial-solar/"
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-full text-[15px] font-semibold leading-[1.2] text-[#17220F] bg-[#F7F9F5] group-hover:bg-[#46A304] group-hover:text-white transition"
                  >
                    <span>Explore Industrial Solar</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/services/"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-semibold leading-[1.2] text-[#17220F] bg-[#F7F9F5] hover:bg-[#EBF5E1] border border-[#E2E7DE] transition"
              >
                <span>View All 17 Specialized Solar Services</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#46A304]" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: THE SOLAR JOURNEY / 4-STEP PROCESS (SOLOR THEME STYLE)
           ========================================================================= */}
        <section className="bg-[#F7F9F5] py-16 sm:py-24 border-b border-[#E2E7DE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[650px] mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5E1] text-[13px] font-semibold text-[#467725] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#46A304]" />
                <span>How It Works</span>
              </div>
              <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold text-[#17220F] leading-[1.15] tracking-[-0.015em]">
                The Solar Journey to Zero Bills
              </h2>
            </div>

            {/* 4 Connected Circular Step Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E7DE] shadow-xs text-center relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#46A304] text-white flex items-center justify-center font-bold text-[20px] mb-4 shadow-md">
                  01
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#17220F] leading-[1.3] mb-2">Free Site Survey</h3>
                <p className="text-[14px] text-[#66705F] leading-[1.6]">
                  Our certified engineer visits your roof, measures shadow patterns, and calculates exact UPCL sanction load.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E7DE] shadow-xs text-center relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#17220F] text-[#46A304] flex items-center justify-center font-bold text-[20px] mb-4 shadow-md border-2 border-[#46A304]">
                  02
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#17220F] leading-[1.3] mb-2">Portal &amp; Subsidy Filing</h3>
                <p className="text-[14px] text-[#66705F] leading-[1.6]">
                  We register your application on PM Surya Ghar national portal and handle all UPCL net metering paperwork.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E7DE] shadow-xs text-center relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#46A304] text-white flex items-center justify-center font-bold text-[20px] mb-4 shadow-md">
                  03
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#17220F] leading-[1.3] mb-2">1-Day Installation</h3>
                <p className="text-[14px] text-[#66705F] leading-[1.6]">
                  Certified technicians mount Tier-1 panels, inverters, and dual earthing lightning arresters on your roof.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-6 rounded-2xl border border-[#E2E7DE] shadow-xs text-center relative flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#17220F] text-[#46A304] flex items-center justify-center font-bold text-[20px] mb-4 shadow-md border-2 border-[#46A304]">
                  04
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#17220F] leading-[1.3] mb-2">Net Meter &amp; Subsidy</h3>
                <p className="text-[14px] text-[#66705F] leading-[1.6]">
                  UPCL installs the bidirectional smart meter, and the central subsidy is directly credited to your bank account.
                </p>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/?intent=quote"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[15px] font-semibold leading-[1.2] text-white bg-[#46A304] hover:bg-[#2F7D05] shadow-md transition"
              >
                <span>Start Your Solar Journey</span>
                <span className="w-5 h-5 rounded-full bg-[#17220F] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRightIcon className="w-3 h-3" />
                </span>
              </Link>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[15px] font-semibold leading-[1.2] text-[#17220F] bg-white border border-[#E2E7DE] transition"
              >
                <PhoneIcon className="w-4 h-4 text-[#46A304]" />
                <span>Helpline: {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: INTERACTIVE SOLAR CALCULATOR (SOLOR STYLE CARD)
           ========================================================================= */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E2E7DE]" id="calculator">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[650px] mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5E1] text-[13px] font-semibold text-[#467725] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#46A304]" />
                <span>Instant Estimator</span>
              </div>
              <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold text-[#17220F] leading-[1.15] tracking-[-0.015em]">
                Calculate Your Solar Savings &amp; Subsidy
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#66705F] leading-[1.6] mt-2">
                Slide your monthly electricity bill to calculate recommended system size, PM Surya Ghar central subsidy, and 25-year financial savings.
              </p>
            </div>

            <SolarCalculator initialDistrict="dehradun" />
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: WHY CHOOSE US & SKILLS PROGRESS SECTION (SOLOR STYLE)
           ========================================================================= */}
        <section className="bg-[#17220F] text-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Big Solar Banner with Play Button */}
              <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=900&q=80"
                  alt="Certified Solar EPC Engineering"
                  className="w-full h-80 sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-[#17220F]/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#46A304] text-white hover:bg-[#2F7D05] flex items-center justify-center shadow-2xl hover:scale-110 transition cursor-pointer">
                    <PlayIcon className="w-6 h-6 ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Right Column: Progress Meters & Trust Callout */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F2E14] border border-[#46A304]/40 text-[13px] font-semibold text-[#70C92F]">
                  <span className="w-2 h-2 rounded-full bg-[#46A304]" />
                  <span>Why Choose UTTsolar</span>
                </div>

                <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.15] tracking-[-0.015em]">
                  Panels, Inverters, and Storage Solutions Engineered for Peak Yield
                </h2>

                <p className="text-[16px] sm:text-[17px] text-slate-300 leading-[1.6] max-w-[650px]">
                  We don&apos;t just install solar panels; we engineer custom micro-power plants built to maximize daily solar generation across Uttarakhand&apos;s climate conditions.
                </p>

                {/* Progress Bars - Solor Style */}
                <div className="space-y-4 pt-2">
                  <div>
                    <div className="flex justify-between text-[14px] font-semibold mb-1.5">
                      <span className="text-white">Solar Generation Efficiency</span>
                      <span className="text-[#46A304]">98%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-[#46A304] rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[14px] font-semibold mb-1.5">
                      <span className="text-white">PM Surya Ghar &amp; UPCL Net Metering Approval</span>
                      <span className="text-[#46A304]">100%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-[#46A304] rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[14px] font-semibold mb-1.5">
                      <span className="text-white">Customer Satisfaction &amp; Lifetime Support</span>
                      <span className="text-[#46A304]">99%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-[#46A304] rounded-full" style={{ width: '99%' }} />
                    </div>
                  </div>
                </div>

                {/* Engineer Callout Box */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1F2E14] border border-white/10 mt-4">
                  <div className="w-12 h-12 rounded-full bg-[#46A304] text-white hover:bg-[#2F7D05] flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[12px] text-[#70C92F] font-semibold block">Need Help Choosing?</span>
                    <a href={`tel:${siteConfig.phone}`} className="text-[16px] sm:text-[17px] font-bold text-white hover:text-[#46A304] transition">
                      Speak with a Senior Solar Engineer: {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: STATEWIDE 13 DISTRICTS NETWORK (SOLOR THEME)
           ========================================================================= */}
        <section className="bg-[#F7F9F5] py-16 sm:py-24 border-b border-[#E2E7DE]" id="locations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[650px] mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5E1] text-[13px] font-semibold text-[#467725] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#46A304]" />
                <span>Our Service Network</span>
              </div>
              <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold text-[#17220F] leading-[1.15] tracking-[-0.015em]">
                Solar Installations Across All 13 Districts
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#66705F] leading-[1.6] mt-2">
                Click on your district to check local UPCL division guidelines, active sites, and local solar engineer support.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {districts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/locations/${d.slug}/`}
                  className="p-4 rounded-2xl bg-white hover:border-[#46A304] border border-[#E2E7DE] transition flex flex-col justify-between shadow-xs group"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-[15px] text-[#17220F] group-hover:text-[#46A304] transition">
                        {d.name}
                      </h3>
                      <MapPinIcon className="w-4 h-4 text-[#46A304]" />
                    </div>
                    <p className="text-[13px] text-[#66705F] mt-1 line-clamp-1">
                      {d.majorServiceAreas.slice(0, 3).join(', ')}
                    </p>
                  </div>
                  <span className="text-[13px] font-semibold text-[#46A304] mt-3 flex items-center gap-1">
                    <span>View District Details</span>
                    <ArrowUpRightIcon className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/locations/"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-semibold leading-[1.2] text-[#17220F] bg-white hover:bg-[#EBF5E1] border border-[#E2E7DE] transition shadow-xs"
              >
                <span>Explore All Uttarakhand Towns &amp; Cities</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#46A304]" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: PORTFOLIO OF SOLAR SUCCESS (FEATURED PROJECTS)
           ========================================================================= */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E2E7DE]" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5E1] text-[13px] font-semibold text-[#467725] mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#46A304]" />
                  <span>Proven Track Record</span>
                </div>
                <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold text-[#17220F] leading-[1.15] tracking-[-0.015em]">
                  Portfolio Of Solar Success
                </h2>
              </div>
              <Link href="/projects/" className="text-[14px] font-semibold text-[#46A304] hover:underline flex items-center gap-1">
                <span>View all completed projects</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((project) => (
                <div key={project.slug} className="bg-white rounded-2xl border border-[#E2E7DE] p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition">
                  <div>
                    <div className="flex items-center justify-between text-[13px] font-semibold text-[#66705F] mb-2">
                      <span className="text-[#46A304] bg-[#F7F9F5] px-2.5 py-0.5 rounded-full">{project.category}</span>
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#17220F] leading-[1.3] mb-2">{project.title}</h3>
                    <p className="text-[14px] text-[#66705F] leading-[1.6] line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 p-3 bg-[#F7F9F5] rounded-xl border border-[#E2E7DE] text-[13px] mb-4">
                      <div>
                        <span className="text-[#66705F] block text-[12px]">Capacity:</span>
                        <strong className="text-[#17220F]">{project.capacityKw} kW ({project.systemType})</strong>
                      </div>
                      <div>
                        <span className="text-[#66705F] block text-[12px]">Annual Savings:</span>
                        <strong className="text-[#46A304]">{project.annualSavings}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: SOLAR TIPS & TRICKS (BLOG ARTICLES & FAQS)
           ========================================================================= */}
        <section className="bg-[#F7F9F5] py-16 sm:py-24 border-b border-[#E2E7DE]" id="blog">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF5E1] text-[13px] font-semibold text-[#467725] mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#46A304]" />
                  <span>Knowledge Hub</span>
                </div>
                <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold text-[#17220F] leading-[1.15] tracking-[-0.015em]">
                  Solar Tips &amp; Insights
                </h2>
              </div>
              <Link href="/blog/" className="text-[14px] font-semibold text-[#46A304] hover:underline flex items-center gap-1">
                <span>Read all articles</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {recentBlogs.map((blog) => (
                <article key={blog.slug} className="bg-white rounded-2xl border border-[#E2E7DE] p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition">
                  <div>
                    <span className="text-[12px] font-semibold text-[#46A304] bg-[#F7F9F5] px-2.5 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#17220F] mt-3 mb-2 leading-[1.3]">
                      <Link href={`/blog/${blog.slug}/`} className="hover:text-[#46A304] transition">
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="text-[14px] text-[#66705F] leading-[1.6] line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E2E7DE] flex items-center justify-between text-[13px] text-[#66705F]">
                    <span>{blog.readTime}</span>
                    <Link href={`/blog/${blog.slug}/`} className="font-semibold text-[#46A304] hover:underline flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowUpRightIcon className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* FAQs Accordion */}
            <div className="max-w-[700px] mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-[24px] sm:text-[28px] font-bold text-[#17220F] leading-[1.2]">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {homeFaqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E2E7DE] group [&_summary::-webkit-details-marker]:hidden shadow-xs"
                  >
                    <summary className="flex items-center justify-between cursor-pointer text-[15px] font-semibold text-[#17220F] group-open:text-[#46A304] transition">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-[#F7F9F5] border border-[#E2E7DE] flex items-center justify-center text-xs font-bold text-[#66705F] group-open:rotate-180 transition">
                        ▼
                      </span>
                    </summary>
                    <p className="text-[14px] sm:text-[15px] text-[#66705F] leading-[1.6] mt-3 pt-3 border-t border-[#E2E7DE]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: GET IN TOUCH / BOOKING BANNER (SOLOR THEME)
           ========================================================================= */}
        <section className="bg-[#17220F] text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F2E14] border border-[#46A304]/40 text-[13px] font-semibold text-[#70C92F]">
              <ZapIcon className="w-3.5 h-3.5 text-[#46A304]" />
              <span>Uttarakhand Special Subsidy Allocation Active</span>
            </div>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold text-white max-w-[650px] mx-auto leading-[1.15] tracking-[-0.015em]">
              Ready to Power Your Home With Free Solar Energy?
            </h2>

            <p className="text-[16px] sm:text-[17px] text-slate-300 max-w-[620px] mx-auto leading-[1.6]">
              Book your free rooftop site survey today. Our local solar engineer will inspect your roof, verify PM Surya Ghar subsidy eligibility, and share an itemized proposal.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact/?intent=quote"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-[15px] font-semibold leading-[1.2] text-white bg-[#46A304] hover:bg-[#2F7D05] shadow-xl transition"
              >
                <span>Book Free Site Survey Now</span>
                <span className="w-6 h-6 rounded-full bg-[#17220F] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </span>
              </Link>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold leading-[1.2] text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
              >
                <PhoneIcon className="w-4 h-4 text-[#46A304]" />
                <span>Call Helpline: {siteConfig.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20solar%20installation%20in%20Uttarakhand`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold leading-[1.2] text-white bg-[#25D366]/90 hover:bg-[#25D366] transition"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
