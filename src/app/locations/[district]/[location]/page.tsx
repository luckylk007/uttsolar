import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getAllLocations, getLocationBySlug, getLocationsByDistrict } from '@/data/locations/locations';
import { districts } from '@/data/locations/districts';
import { getAllBlogs } from '@/data/blogs';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import { KeywordPillCycle } from '@/components/ui/KeywordPillCycle';
import {
  SunIcon,
  MapPinIcon,
  CheckCircleIcon,
  ZapIcon,
  PhoneIcon,
  WhatsAppIcon,
  BuildingIcon,
  HomeIcon,
  ShieldCheckIcon,
  LeafIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  AwardIcon,
} from '@/components/ui/Icons';
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';

interface LocationPageProps {
  params: Promise<{
    district: string;
    location: string;
  }>;
}

export async function generateStaticParams() {
  return getAllLocations().map((loc) => ({
    district: loc.districtSlug,
    location: loc.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/locations/${location.districtSlug}/${location.slug}/`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${siteConfig.url}/locations/${location.districtSlug}/${location.slug}/`,
    },
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { district: districtSlug, location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  const district = districts.find((d) => d.slug === districtSlug);

  if (!location || !district) {
    notFound();
  }

  const blogs = getAllBlogs().slice(0, 2);
  const siblingLocations = getLocationsByDistrict(district.slug).filter(
    (loc) => loc.slug !== location.slug
  );

  const breadcrumbs = [
    { name: 'Locations', url: '/locations/' },
    { name: `${district.name}`, url: `/locations/${district.slug}/` },
    { name: location.h1 || `Solar Company in ${location.name}`, url: `/locations/${district.slug}/${location.slug}/` },
  ];

  // Core 6 Solar Solution Services requested by format
  const coreServices = [
    {
      title: 'Residential Solar',
      slug: 'residential-solar',
      icon: HomeIcon,
      badge: 'PM Surya Ghar Subsidy',
      badgeColor: 'bg-[#EBF5E1] text-[#2D5A27] border-[#46A304]/30',
      description: `Turnkey 1 kW to 10 kW rooftop solar systems for homes in ${location.name}. Claim up to ₹85,800 direct central financial assistance (DBT) with seamless UPCL net metering.`,
    },
    {
      title: 'Commercial Solar',
      slug: 'commercial-solar',
      icon: BuildingIcon,
      badge: 'High ROI & Tax Depreciation',
      badgeColor: 'bg-[#FFF4CC] text-[#92400E] border-[#FFDE21]/40',
      description: `High-yield grid-interactive solar power plants for hotels, resorts, private schools, clinics, and commercial complexes across ${location.name}.`,
    },
    {
      title: 'Rooftop Solar',
      slug: 'rooftop-solar',
      icon: SunIcon,
      badge: '150 km/h Wind Rated',
      badgeColor: 'bg-[#EBF5E1] text-[#2D5A27] border-[#46A304]/30',
      description: `Custom engineering for flat RCC terraces, sloped tin sheds, and elevated rooftop structures engineered specifically for Uttarakhand's hill geography.`,
    },
    {
      title: 'On-Grid Solar',
      slug: 'on-grid-solar',
      icon: ZapIcon,
      badge: 'Bidirectional UPCL Billing',
      badgeColor: 'bg-[#FFF4CC] text-[#92400E] border-[#FFDE21]/40',
      description: `Synchronized grid-tied solar systems that export surplus units to UPCL, drastically lowering your bi-monthly electricity bills by up to 90%.`,
    },
    {
      title: 'Off-Grid Solar',
      slug: 'off-grid-solar',
      icon: LeafIcon,
      badge: '24x7 Power Autonomy',
      badgeColor: 'bg-[#EBF5E1] text-[#2D5A27] border-[#46A304]/30',
      description: `Battery-backed standalone solar installations ideal for hill cottages, remote locations, and areas experiencing frequent grid outages in ${district.name} district.`,
    },
    {
      title: 'Hybrid Solar',
      slug: 'hybrid-solar',
      icon: ShieldCheckIcon,
      badge: 'Smart Grid + Battery Storage',
      badgeColor: 'bg-[#EBF5E1] text-[#2D5A27] border-[#46A304]/30',
      description: `Intelligent solar systems offering the financial benefits of UPCL net metering combined with instant lithium battery backup during power cuts.`,
    },
  ];

  // 4-Step Solution Process
  const solutionProcessSteps = [
    {
      step: '01',
      title: `Free Site Survey & Shadow Analysis in ${location.name}`,
      description: `Our regional solar engineers visit your property in ${location.name} to inspect roof structural integrity, seasonal shadow profiles, and evaluate your UPCL sanctioned load.`,
    },
    {
      step: '02',
      title: 'Custom 3D System Design & Subsidy Approval',
      description: `We design an optimal solar array using Tier-1 mono PERC/bifacial modules and process your PM Surya Ghar online registration & UPCL USRP portal feasibility approval.`,
    },
    {
      step: '03',
      title: 'Rapid Installation & UPCL Net Meter Inspection',
      description: `Our certified technicians erect high-grade hot-dip galvanized mounting structures and coordinate official inspection with your local ${district.name} UPCL electricity division.`,
    },
    {
      step: '04',
      title: 'Commissioning, Warranty Handover & DBT Subsidy',
      description: `Bidirectional net meter activation, setup of real-time mobile generation tracking, handover of 25-year warranties, and prompt disbursement of central subsidy into your bank account.`,
    },
  ];

  // Why Choose UTT Solar Highlights
  const whyChooseUttSolarPoints = [
    {
      title: 'Local Uttarakhand EPC Specialists',
      description: `Dedicated field engineering teams across all 13 districts with local service centers in Haldwani, Lalkuwan, and Dehradun for prompt on-site assistance.`,
      icon: MapPinIcon,
    },
    {
      title: '100% Paperwork & Subsidy Guarantee',
      description: `End-to-end management of PM Surya Ghar CFA applications, UPCL net metering documentation, single line diagrams (SLD), and DISCOM liaisons.`,
      icon: AwardIcon,
    },
    {
      title: 'Tier-1 Certified Components & 25-Year Warranty',
      description: `DCR-compliant high-efficiency bifacial/mono PERC solar panels, European-standard string inverters, and hot-dip galvanized rust-proof structures.`,
      icon: ShieldCheckIcon,
    },
    {
      title: 'Himalayan Mountain-Ready Engineering',
      description: `Structures engineered to withstand high wind velocities (up to 150 km/h), heavy monsoon precipitation, and seismic conditions typical of Uttarakhand.`,
      icon: SunIcon,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      {/* Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({
              name: `UTTsolar - ${location.h1 || `Solar Company in ${location.name}`}`,
              areaServed: `${location.name}, ${district.name} District, Uttarakhand`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(location.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header */}
      <section className="bg-[#17220F] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden border border-[#46A304]/20">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#46A304]/15 text-xs font-semibold text-[#70C92F] border border-[#46A304]/30">
              <MapPinIcon className="w-4 h-4 text-[#46A304]" />
              {location.name}, {district.name} District
            </span>
            {location.priority && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FFDE21]/20 text-[#FFDE21] border border-[#FFDE21]/30 text-[11px] font-bold uppercase tracking-wider">
                {location.priority} Priority Service Hub
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {location.h1 || `Solar Company in ${location.name}`}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {location.intro}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-[#1F2E14] p-3 rounded-2xl border border-white/10 text-center">
              <div className="text-lg sm:text-xl font-bold text-[#FFDE21]">₹85,800</div>
              <div className="text-[11px] text-slate-300">Max Subsidy (CFA)</div>
            </div>
            <div className="bg-[#1F2E14] p-3 rounded-2xl border border-white/10 text-center">
              <div className="text-lg sm:text-xl font-bold text-[#70C92F]">80–95%</div>
              <div className="text-[11px] text-slate-300">Bill Reduction</div>
            </div>
            <div className="bg-[#1F2E14] p-3 rounded-2xl border border-white/10 text-center">
              <div className="text-lg sm:text-xl font-bold text-white">25 Yrs</div>
              <div className="text-[11px] text-slate-300">Panel Warranty</div>
            </div>
            <div className="bg-[#1F2E14] p-3 rounded-2xl border border-white/10 text-center">
              <div className="text-lg sm:text-xl font-bold text-[#FFDE21]">Free</div>
              <div className="text-[11px] text-slate-300">On-Site Survey</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="/contact/?intent=quote"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#17220F] bg-[#FFDE21] hover:bg-[#46A304] hover:text-white shadow-md transition transform hover:-translate-y-0.5"
            >
              Book Free Site Survey in {location.name} ↗
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition flex items-center gap-1.5"
            >
              <PhoneIcon className="w-4 h-4 text-[#70C92F]" />
              <span>Call Solar Expert: {siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20need%20solar%20installation%20in%20${location.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition flex items-center gap-1.5 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: OVERVIEW
         ========================================================================= */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
            Regional Analysis
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#17220F]">
            Overview: Solar Power in {location.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#66705F]">
            Geography, solar insolation metrics, and local power infrastructure in {location.name}, {district.name} District.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBF5E1] text-[#46A304] flex items-center justify-center font-bold">
              <SunIcon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#17220F]">
              Solar Irradiance &amp; Geography in {location.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#66705F] leading-relaxed">
              {location.geography}
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF4CC] text-[#FFDE21] flex items-center justify-center font-bold">
              <ZapIcon className="w-5 h-5 text-[#92400E]" />
            </div>
            <h3 className="text-lg font-bold text-[#17220F]">
              UPCL Electricity Context in {location.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#66705F] leading-relaxed">
              {location.electricityContext}
            </p>
          </div>
        </div>

        {/* Local Applications & Consumer Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="bg-white p-6 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
            <h3 className="text-base font-bold text-[#17220F] flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-[#46A304]" />
              <span>Primary Solar Applications in {location.name}</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#66705F]">
              {location.useCases.map((uc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#46A304] font-bold">•</span>
                  <span>{uc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
            <h3 className="text-base font-bold text-[#17220F] flex items-center gap-2">
              <BuildingIcon className="w-5 h-5 text-[#46A304]" />
              <span>Who We Serve in {location.name}</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#66705F]">
              {location.customerTypes.map((ct, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#46A304] font-bold">•</span>
                  <span>{ct}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHY CHOOSE SOLAR COMPANY IN (LOCATION)
         ========================================================================= */}
      <section className="bg-[#17220F] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 border border-[#46A304]/20">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#70C92F] bg-[#46A304]/20 px-3 py-1 rounded-full border border-[#46A304]/30">
            Local Benefits
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
            Why Choose Solar Company in {location.name}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Harnessing solar power in {location.name} unlocks exceptional economic returns and long-term energy independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#1F2E14] border border-[#46A304]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#46A304]/20 text-[#70C92F] flex items-center justify-center font-bold">
              <SunIcon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">High Solar Insolation</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {location.name} enjoys an average of 280–300 sunny days annually, generating approximately 4 to 4.5 units (kWh) per kW every day.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1F2E14] border border-[#46A304]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFDE21]/20 text-[#FFDE21] flex items-center justify-center font-bold">
              <ZapIcon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Cut UPCL Bills by 90%</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Export excess daytime solar generation directly to the grid via bidirectional net metering to zero out domestic and commercial electricity bills.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1F2E14] border border-[#46A304]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#46A304]/20 text-[#70C92F] flex items-center justify-center font-bold">
              <AwardIcon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">₹85,800 DBT Subsidy</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Uttarakhand homeowners receive special Himalayan state subsidies up to ₹85,800 credited directly into their bank accounts under PM Surya Ghar.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1F2E14] border border-[#46A304]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">25-Year Reliability</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              With a rapid 3 to 4 year system payback period, your solar investment delivers more than two decades of virtually free electricity.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR SOLAR SOLUTION SERVICES (6 CORE SERVICES + VIEW ALL LINK)
         ========================================================================= */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
            End-to-End Offerings
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#17220F]">
            Our Solar Solution Services in {location.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#66705F]">
            Comprehensive turnkey solar engineering, government subsidy processing, and bidirectional UPCL net metering solutions tailored for {location.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div
                key={srv.slug}
                className="bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs hover:shadow-md hover:border-[#46A304]/50 transition group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#F7F9F5] group-hover:bg-[#EBF5E1] text-[#46A304] flex items-center justify-center transition">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${srv.badgeColor}`}>
                      {srv.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#17220F] group-hover:text-[#46A304] transition">
                    {srv.title} in {location.name}
                  </h3>
                  <p className="text-xs text-[#66705F] leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <Link
                  href={`/services/${srv.slug}/`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#46A304] hover:text-[#257203] transition pt-2 border-t border-[#E2E7DE]/60"
                >
                  <span>Explore {srv.title} Details</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Services Link */}
        <div className="text-center pt-2">
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#17220F] bg-[#FFDE21] hover:bg-[#46A304] hover:text-white transition shadow-md"
          >
            <span>View All 17 Solar Services &amp; Custom Engineering Solutions</span>
            <ArrowUpRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: UTT SOLAR SOLUTION PROCESS
         ========================================================================= */}
      <section className="bg-[#F7F9F5] p-8 sm:p-12 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
            Step-by-Step Execution
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#17220F]">
            UTT Solar Solution Process
          </h2>
          <p className="text-xs sm:text-sm text-[#66705F]">
            Our seamless 4-stage turnkey workflow ensures rapid commissioning, verified subsidies, and zero bureaucratic hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionProcessSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-6 rounded-2xl border border-[#E2E7DE] shadow-xs space-y-3 relative group hover:border-[#46A304] transition"
            >
              <div className="w-10 h-10 rounded-xl bg-[#17220F] text-[#FFDE21] font-heading font-extrabold text-sm flex items-center justify-center">
                {step.step}
              </div>
              <h3 className="text-base font-bold text-[#17220F] group-hover:text-[#46A304] transition">
                {step.title}
              </h3>
              <p className="text-xs text-[#66705F] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE UTT SOLAR
         ========================================================================= */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
            Your Trusted Solar Partner
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#17220F]">
            Why Choose UTT Solar in {location.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#66705F]">
            Engineering excellence, guaranteed government subsidies, and dedicated local field support across {district.name} District.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUttSolarPoints.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs flex items-start gap-4 space-y-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EBF5E1] text-[#46A304] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#17220F]">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66705F] leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Embedded Location Calculator */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
            Custom Sizing
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17220F] mt-2">
            Calculate Solar Savings for Your {location.name} Property
          </h2>
        </div>
        <SolarCalculator initialDistrict={district.slug} />
      </section>

      {/* Local FAQs */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
            Local FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17220F] mt-2">
            Frequently Asked Questions in {location.name}
          </h2>
        </div>

        <div className="space-y-3">
          {location.faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white p-5 rounded-2xl border border-[#E2E7DE] shadow-xs group [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer text-sm font-bold text-[#17220F] group-open:text-[#46A304] transition">
                <span>{faq.question}</span>
                <span className="w-6 h-6 rounded-full bg-[#F7F9F5] flex items-center justify-center text-xs font-bold text-[#66705F] group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-[#66705F] leading-relaxed mt-3 pt-3 border-t border-[#E2E7DE]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Nearby Service Areas Navigation */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#17220F]">
          Nearby Service Areas Around {location.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {location.nearbyAreas.map((area) => (
            <span
              key={area}
              className="px-3 py-1 bg-[#F7F9F5] border border-[#E2E7DE] rounded-full text-xs font-medium text-[#17220F]"
            >
              📍 {area}
            </span>
          ))}
        </div>
      </section>

      {/* Sibling Locations in District */}
      {siblingLocations.length > 0 && (
        <section className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-bold text-[#17220F]">
              Other Solar Service Hubs in {district.name} District
            </h3>
            <Link
              href={`/locations/${district.slug}/`}
              className="text-xs font-semibold text-[#46A304] hover:underline"
            >
              View all {district.name} locations →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {siblingLocations.map((sib) => (
              <Link
                key={sib.slug}
                href={`/locations/${district.slug}/${sib.slug}/`}
                className="p-3 bg-[#F7F9F5] border border-[#E2E7DE] hover:border-[#46A304] rounded-xl text-center group transition"
              >
                <div className="text-xs font-bold text-[#17220F] group-hover:text-[#46A304] transition truncate">
                  {sib.name}
                </div>
                <div className="text-[10px] text-[#66705F] mt-0.5">
                  {sib.priority || 'Active'} Priority Hub
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Solar Guides */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-[#17220F]">
          Recommended Solar Guides for {location.name}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${b.slug}/`}
              className="p-5 rounded-2xl bg-white border border-[#E2E7DE] hover:border-[#46A304] hover:shadow-xs transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold text-[#46A304] uppercase tracking-wider block mb-1">
                  {b.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#17220F] group-hover:text-[#46A304] transition line-clamp-2">
                  {b.title}
                </h4>
              </div>
              <span className="text-[11px] font-semibold text-[#46A304] mt-3 block">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive Keyword & Navigation Pills */}
      <KeywordPillCycle
        currentSlug={location.slug}
        title={`Explore Solar Solutions & Centers Around ${location.name}`}
        description={`Fast-track navigation to regional solar hubs in ${district.name} District, specialized turnkey solutions, and PM Surya Ghar subsidy resources.`}
      />

      {/* Contact Form Section */}
      <section className="bg-[#F7F9F5] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E2E7DE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
              Free Site Survey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17220F]">
              Book a Solar Site Survey in {location.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#66705F] leading-relaxed">
              Our {district.name} field engineering team will visit your property, assess your roof structure and shading, and prepare an itemized PM Surya Ghar subsidy quotation.
            </p>
            <div className="space-y-2 pt-1 text-xs text-[#17220F]">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#46A304]" />
                <span>100% Free On-Site Roof Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#46A304]" />
                <span>Tier-1 Panels with 25-Year Performance Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-[#46A304]" />
                <span>End-to-End UPCL Net Metering &amp; DBT Subsidy Support</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <ContactForm defaultDistrict={district.slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
