import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getAllLocations, getLocationBySlug } from '@/data/locations/locations';
import { districts } from '@/data/locations/districts';
import { getAllBlogs } from '@/data/blogs';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  SunIcon,
  MapPinIcon,
  CheckCircleIcon,
  ZapIcon,
  PhoneIcon,
  WhatsAppIcon,
  BuildingIcon,
  HomeIcon,
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

  const breadcrumbs = [
    { name: 'Locations', url: '/locations/' },
    { name: `${district.name}`, url: `/locations/${district.slug}/` },
    { name: `${location.name} Solar Service`, url: `/locations/${district.slug}/${location.slug}/` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      {/* Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({
              name: `UTTsolar - Solar Installation in ${location.name}`,
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#46A304]/15 text-xs font-semibold text-[#70C92F] border border-[#46A304]/30">
            <MapPinIcon className="w-4 h-4 text-[#46A304]" />
            {location.name}, {district.name} District
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Solar Panel Installation &amp; Subsidy in {location.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {location.intro}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact/?intent=quote"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#17220F] bg-[#FFDE21] hover:bg-[#46A304] hover:text-white shadow-md transition"
            >
              Book Free Site Survey in {location.name}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition flex items-center gap-1.5"
            >
              <PhoneIcon className="w-4 h-4 text-[#46A304]" />
              <span>Call Solar Expert</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20need%20solar%20installation%20in%20${location.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition flex items-center gap-1.5 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Local Geography & Electricity Context */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#EBF5E1] text-[#46A304] flex items-center justify-center font-bold">
            <SunIcon className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-[#17220F]">
            Solar Irradiance &amp; Geography in {location.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#66705F] leading-relaxed">
            {location.geography}
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFF4CC] text-[#FFDE21] flex items-center justify-center font-bold">
            <ZapIcon className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-[#17220F]">
            UPCL Electricity Context in {location.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#66705F] leading-relaxed">
            {location.electricityContext}
          </p>
        </div>
      </section>

      {/* Local Use Cases & Target Customers */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
            Tailored Applications
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17220F] mt-2">
            Solar Demand &amp; Use Cases in {location.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs space-y-3">
            <h3 className="text-base font-bold text-[#17220F] flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-[#46A304]" />
              <span>Primary Solar Applications</span>
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

      {/* Residential, Commercial & Net Metering Breakdown */}
      <section className="bg-[#17220F] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 border border-[#46A304]/20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#70C92F] bg-[#46A304]/20 px-3 py-1 rounded-full border border-[#46A304]/30">
            Zero-Hassle Installation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            Residential &amp; Commercial Solar in {location.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#1F2E14] border border-[#46A304]/20">
            <HomeIcon className="w-6 h-6 text-[#46A304] mb-2" />
            <h3 className="text-base font-bold text-white mb-2">Residential PM Surya Ghar</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Uttarakhand special category subsidy of up to <strong>₹85,800</strong> on 3 kW systems for {location.name} homeowners. Direct bank transfer (DBT) upon UPCL meter installation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1F2E14] border border-[#46A304]/20">
            <BuildingIcon className="w-6 h-6 text-[#FFDE21] mb-2" />
            <h3 className="text-base font-bold text-white mb-2">Commercial &amp; Institutional</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Three-phase grid-connected plants for hotels, clinics, showrooms, and schools in {location.name}. High tax depreciation and immediate daytime tariff reduction.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1F2E14] border border-[#46A304]/20">
            <ZapIcon className="w-6 h-6 text-[#46A304] mb-2" />
            <h3 className="text-base font-bold text-white mb-2">UPCL Net Metering Support</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Turnkey handling of online USRP registration, single line diagrams, division inspection, and bidirectional meter commissioning in {district.name} district.
            </p>
          </div>
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
          </div>
          <div className="lg:col-span-6">
            <ContactForm defaultDistrict={district.slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
