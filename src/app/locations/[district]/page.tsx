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
      <section className="bg-[#17220F] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden border border-[#46A304]/20">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#46A304]/15 text-xs font-semibold text-[#70C92F] border border-[#46A304]/30">
            <MapPinIcon className="w-4 h-4 text-[#46A304]" />
            {district.name} District Solar Engineering Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Solar Panel Installation &amp; Subsidy in {district.name} District
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {district.intro}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact/?intent=quote"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#46A304] hover:bg-[#FFB000] hover:text-[#17220F] shadow-md transition"
            >
              Book Free Site Survey in {district.name}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition flex items-center gap-1.5"
            >
              <PhoneIcon className="w-4 h-4 text-[#46A304]" />
              <span>Call District Helpline</span>
            </a>
          </div>
        </div>
      </section>

      {/* Major Service Areas & Specific Locations */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
              Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17220F] mt-1">
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
                className="bg-white p-5 rounded-2xl border border-[#E2E7DE] shadow-xs hover:border-[#46A304] transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#17220F] mb-1">
                    {loc.name} Solar Service
                  </h3>
                  <p className="text-xs text-[#66705F] line-clamp-2 mb-3">{loc.intro}</p>
                </div>
                <Link
                  href={`/locations/${district.slug}/${loc.slug}/`}
                  className="text-xs font-semibold text-[#46A304] hover:text-[#5A9930] flex items-center justify-between border-t border-[#E2E7DE] pt-2"
                >
                  <span>View {loc.name} details</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Other Town Tags */}
        <div className="bg-[#F7F9F5] p-5 rounded-2xl border border-[#E2E7DE]">
          <span className="text-xs font-semibold text-[#17220F] block mb-2">
            Towns, Municipalities &amp; Villages Served Across {district.name}:
          </span>
          <div className="flex flex-wrap gap-2">
            {district.majorServiceAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-white border border-[#E2E7DE] rounded-full text-xs font-medium text-[#17220F]"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available in District */}
      <section className="bg-white p-8 rounded-2xl sm:rounded-3xl border border-[#E2E7DE] shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#17220F]">
          Available Solar Solutions in {district.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {district.servicesAvailable.map((srv, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3.5 bg-[#F7F9F5] rounded-xl border border-[#E2E7DE]">
              <CheckCircleIcon className="w-5 h-5 text-[#46A304] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#17220F]">{srv}</span>
            </div>
          ))}
        </div>
      </section>

      {/* District Solar Calculator */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
            {district.name} Estimator
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17220F] mt-2">
            Calculate Solar Savings for {district.name} District
          </h2>
        </div>
        <SolarCalculator initialDistrict={district.slug} />
      </section>

      {/* District Specific FAQs */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
            Local Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17220F] mt-2">
            {district.name} District Solar FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {district.faqs.map((faq, idx) => (
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

      {/* Related Solar Guides */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-[#17220F]">
          Recommended Solar Guides for {district.name}
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

      {/* Contact Section */}
      <section className="bg-[#F7F9F5] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E2E7DE]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2D5A27] bg-[#EBF5E1] px-3 py-1 rounded-full border border-[#46A304]/30">
              Free Site Survey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17220F]">
              Book Your Solar Consultation in {district.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#66705F] leading-relaxed">
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
