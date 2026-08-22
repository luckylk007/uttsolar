import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { districts } from '@/data/locations/districts';
import { getLocationsByDistrict } from '@/data/locations/locations';
import { getAllBlogs } from '@/data/blogs';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  MapPinIcon,
  CheckCircleIcon,
  PhoneIcon,
} from '@/components/ui/Icons';
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';

interface DistrictPageProps {
  params: Promise<{ district: string }>;
}

export async function generateStaticParams() {
  return districts.map((district) => ({
    district: district.slug,
  }));
}

export async function generateMetadata({ params }: DistrictPageProps): Promise<Metadata> {
  const { district: districtSlug } = await params;
  const district = districts.find((d) => d.slug === districtSlug);
  if (!district) return { title: 'District Not Found' };

  return {
    title: `Solar Panel Installation in ${district.name} District | PM Surya Ghar Subsidy | UTTsolar`,
    description: `Expert solar panel installation across ${district.name} district (${district.majorServiceAreas.slice(0, 4).join(', ')}). PM Surya Ghar subsidy up to ₹85,800, UPCL net metering & free site survey.`,
    alternates: {
      canonical: `${siteConfig.url}/locations/${district.slug}/`,
    },
    openGraph: {
      title: `Solar Panel Installation in ${district.name} District | UTTsolar`,
      description: `Rooftop solar and PM Surya Ghar subsidy assistance in ${district.name} district, Uttarakhand.`,
      url: `${siteConfig.url}/locations/${district.slug}/`,
    },
  };
}

export default async function DistrictDetailPage({ params }: DistrictPageProps) {
  const { district: districtSlug } = await params;
  const district = districts.find((d) => d.slug === districtSlug);

  if (!district) {
    notFound();
  }

  const districtLocations = getLocationsByDistrict(district.slug);
  const blogs = getAllBlogs().slice(0, 2);

  const breadcrumbs = [
    { name: 'Locations', url: '/locations/' },
    { name: `${district.name} District`, url: `/locations/${district.slug}/` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema({
              name: `UTTsolar - Solar Installation in ${district.name}`,
              areaServed: `${district.name} District, Uttarakhand`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(district.faqs)),
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
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar-500/20 text-xs font-bold text-solar-300 border border-solar-500/30">
            <MapPinIcon className="w-4 h-4 text-solar-400" />
            {district.name} District Solar Engineering Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Solar Panel Installation &amp; Subsidy in {district.name} District
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {district.intro}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact/?intent=quote"
              className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-solar-600 hover:bg-solar-700 shadow-md transition"
            >
              Book Free Site Survey in {district.name}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="px-5 py-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition flex items-center gap-1.5"
            >
              <PhoneIcon className="w-4 h-4 text-solar-400" />
              <span>Call District Helpline</span>
            </a>
          </div>
        </div>
      </section>

      {/* Major Service Areas & Specific Locations */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
              Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Major Service Areas in {district.name}
            </h2>
          </div>
        </div>

        {/* Commercial Hubs Landing Pages */}
        {districtLocations.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {districtLocations.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {loc.name} Solar Service
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-3">{loc.intro}</p>
                </div>
                <Link
                  href={`/locations/${district.slug}/${loc.slug}/`}
                  className="text-xs font-bold text-solar-700 hover:text-solar-900 flex items-center justify-between border-t border-slate-100 pt-2"
                >
                  <span>View {loc.name} details</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Other Town Tags */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <span className="text-xs font-bold text-slate-700 block mb-2">
            Towns, Municipalities &amp; Villages Served Across {district.name}:
          </span>
          <div className="flex flex-wrap gap-2">
            {district.majorServiceAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-800"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available in District */}
      <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          Available Solar Solutions in {district.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {district.servicesAvailable.map((srv, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <CheckCircleIcon className="w-5 h-5 text-solar-600 flex-shrink-0" />
              <span className="text-xs font-bold text-slate-800">{srv}</span>
            </div>
          ))}
        </div>
      </section>

      {/* District Solar Calculator */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
            {district.name} Estimator
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Calculate Solar Savings for {district.name} District
          </h2>
        </div>
        <SolarCalculator initialDistrict={district.slug} />
      </section>

      {/* District Specific FAQs */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
            Local Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            {district.name} District Solar FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {district.faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm group [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer text-sm font-bold text-slate-900 group-open:text-solar-700 transition">
                <span>{faq.question}</span>
                <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Related Solar Guides */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Recommended Solar Guides for {district.name}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${b.slug}/`}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-solar-500 hover:shadow-md transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-solar-600 uppercase tracking-wider block mb-1">
                  {b.category}
                </span>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-solar-700 transition line-clamp-2">
                  {b.title}
                </h4>
              </div>
              <span className="text-[11px] font-bold text-solar-600 mt-3 block">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
              Free Site Survey
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Book Your Solar Consultation in {district.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our engineering team serving {district.name} will visit your site, assess shadow factors, and provide a comprehensive proposal with PM Surya Ghar subsidy calculations.
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
