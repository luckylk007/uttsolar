import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { faqsData } from '@/data/faqs';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { LeafIcon } from '@/components/ui/Icons';
import { faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Uttarakhand Solar FAQs: PM Surya Ghar, Subsidy, Net Metering & Costs | UTTsolar',
  description:
    'Frequently asked questions about rooftop solar installation in Uttarakhand. Subsidy amounts, UPCL net metering rules, winter solar yield, payback & equipment warranties.',
  alternates: {
    canonical: `${siteConfig.url}/faq/`,
  },
};

export default function FaqPage() {
  const allFaqItems = faqsData.flatMap((category) => category.items);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(allFaqItems)),
        }}
      />

      <Breadcrumbs items={[{ name: 'Frequently Asked Questions', url: '/faq/' }]} />

      {/* Hero Header - Solor Style */}
      <section className="bg-[#17220F] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F2E14] border border-[#46A304]/40 text-xs font-bold text-[#70C92F] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#46A304]" />
          <span>Got Questions? We Have Answers.</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Frequently Asked Questions About <span className="text-[#46A304]">Solar in Uttarakhand</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about PM Surya Ghar subsidies, UPCL net metering, system costs, hill weather performance, and technical warranties.
        </p>
      </section>

      {/* Categorized FAQs Accordion */}
      <section className="space-y-10">
        {faqsData.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-[#17220F] border-b border-[#E2E7DE] pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#46A304]" />
              <span>{group.category}</span>
            </h2>

            <div className="space-y-3">
              {group.items.map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#E2E7DE] group [&_summary::-webkit-details-marker]:hidden shadow-xs hover:border-[#46A304] transition"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-sm font-bold text-[#17220F] group-open:text-[#46A304] transition">
                    <span>{faq.question}</span>
                    <span className="w-6 h-6 rounded-full bg-[#F7F9F5] border border-[#E2E7DE] flex items-center justify-center text-xs font-bold text-[#66705F] group-open:rotate-180 transition flex-shrink-0 ml-2">
                      ▼
                    </span>
                  </summary>
                  <p className="text-xs sm:text-sm text-[#66705F] leading-relaxed mt-3 pt-3 border-t border-[#E2E7DE]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Still Have Questions CTA */}
      <section className="bg-[#F7F9F5] p-8 rounded-3xl border border-[#E2E7DE] text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-[#17220F]">
          Still Have a Specific Question About Your Roof?
        </h3>
        <p className="text-xs text-[#66705F] max-w-md mx-auto">
          Our solar engineering consultants are ready to inspect your site and provide free guidance.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Link
            href="/contact/?intent=quote"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-white bg-[#46A304] hover:bg-[#FFB000] hover:text-[#17220F] transition shadow-md"
          >
            <span>Ask an Engineer ↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
