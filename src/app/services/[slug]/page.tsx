import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getAllServices, getServiceBySlug } from '@/data/services';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ContactForm } from '@/components/forms/ContactForm';
import {
  SunIcon,
  CheckCircleIcon,
  PhoneIcon,
} from '@/components/ui/Icons';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServices().map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}/`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}/`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Services', url: '/services/' },
    { name: service.title, url: `/services/${service.slug}/` },
  ];

  const relatedServicesList = service.relatedServices
    .map((rSlug) => getServiceBySlug(rSlug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(service.title, service.metaDescription, `/services/${service.slug}/`)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(service.sections.faqs)),
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
            <SunIcon className="w-4 h-4 text-solar-400" />
            Uttarakhand Solar Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {service.h1}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {service.intro}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact/?intent=quote"
              className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-solar-600 hover:bg-solar-700 shadow-md transition"
            >
              Get Free Quote for {service.title}
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="px-5 py-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition flex items-center gap-1.5"
            >
              <PhoneIcon className="w-4 h-4 text-solar-400" />
              <span>Call Solar Expert</span>
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
            Advantages &amp; Value
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Key Benefits of {service.title} in Uttarakhand
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.sections.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-solar-100 text-solar-700 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                <CheckCircleIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{benefit.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installation & Delivery Process */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
            Step-by-Step
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
            How We Execute Your {service.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.sections.process.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-solar-500 text-white font-black text-xs flex items-center justify-center mb-3">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Solar Calculator */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
            Estimate Investment &amp; Savings
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Calculate Solar Requirements for {service.title}
          </h2>
        </div>
        <SolarCalculator initialDistrict="dehradun" />
      </section>

      {/* Service Specific FAQs */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
            FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            Frequently Asked Questions about {service.title}
          </h2>
        </div>

        <div className="space-y-4">
          {service.sections.faqs.map((faq, idx) => (
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

      {/* Related Services */}
      {relatedServicesList.length > 0 && (
        <section className="space-y-6 border-t border-slate-200 pt-10">
          <h3 className="text-xl font-bold text-slate-900">Explore Related Solar Solutions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServicesList.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}/`}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-solar-500 hover:shadow-md transition group"
              >
                <div className="font-bold text-sm text-slate-900 group-hover:text-solar-600 transition mb-1">
                  {rel.title}
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-2">{rel.intro}</p>
                <span className="text-[11px] font-bold text-solar-600 mt-2 block">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Request a Free Proposal for {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our engineering team will assess your electrical load, calculate your PM Surya Ghar subsidy eligibility, and prepare a customized design.
            </p>
          </div>
          <div className="lg:col-span-6">
            <ContactForm defaultService={service.slug} defaultDistrict="dehradun" />
          </div>
        </div>
      </section>
    </div>
  );
}
