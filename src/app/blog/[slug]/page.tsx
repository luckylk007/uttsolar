import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getAllBlogs, getBlogBySlug } from '@/data/blogs';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SolarCalculator } from '@/components/calculator/SolarCalculator';
import { ZapIcon } from '@/components/ui/Icons';
import { articleSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: 'Article Not Found' };

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/blog/${blog.slug}/`,
    },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      type: 'article',
      publishedTime: blog.datePublished,
      modifiedTime: blog.dateModified,
      authors: [blog.author],
      url: `${siteConfig.url}/blog/${blog.slug}/`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Blog', url: '/blog/' },
    { name: blog.title, url: `/blog/${blog.slug}/` },
  ];

  const relatedArticles = blog.relatedSlugs
    .map((rSlug) => getBlogBySlug(rSlug))
    .filter((b): b is NonNullable<typeof b> => b !== undefined);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 sm:space-y-12">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: blog.title,
              description: blog.metaDescription,
              url: `/blog/${blog.slug}/`,
              datePublished: blog.datePublished,
              dateModified: blog.dateModified,
              author: blog.author,
            })
          ),
        }}
      />
      {blog.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(blog.faqs)),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-md border border-solar-200">
            {blog.category}
          </span>
          <span className="text-xs text-slate-400 font-medium">•</span>
          <span className="text-xs text-slate-500">{blog.readTime}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          {blog.h1}
        </h1>

        <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
          <div className="w-10 h-10 rounded-full bg-[#17220F] text-white font-bold flex items-center justify-center text-sm shadow-xs">
            {blog.author.charAt(0)}
          </div>
          <div>
            <span className="font-bold text-slate-900 block">{blog.author}</span>
            <span>{blog.authorRole} • Updated: {blog.dateModified}</span>
          </div>
        </div>
      </header>

      {/* Article Content Render */}
      <article className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
        <div className="p-4 bg-solar-50/70 border-l-4 border-solar-500 rounded-r-2xl font-medium text-slate-800 italic">
          {blog.excerpt}
        </div>

        {/* Content split into paragraphs and formatted clean */}
        <div className="space-y-4 leading-relaxed font-normal whitespace-pre-line">
          {blog.content}
        </div>
      </article>

      {/* Embedded Calculator Callout */}
      <section className="space-y-4 pt-6 border-t border-slate-200">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-solar-700 bg-solar-50 px-3 py-1 rounded-full border border-solar-200">
            Interactive Tool
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-2">
            Calculate Your Solar System Size &amp; Subsidy
          </h2>
        </div>
        <SolarCalculator initialDistrict="dehradun" />
      </section>

      {/* Article FAQs */}
      {blog.faqs.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {blog.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer text-xs font-bold text-slate-900 group-open:text-solar-700 transition">
                  <span>{faq.question}</span>
                  <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-500 group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>
                <p className="text-xs text-slate-600 leading-relaxed mt-2 pt-2 border-t border-slate-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">Related Solar Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}/`}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-solar-500 hover:shadow-md transition group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-solar-600 uppercase tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-solar-700 transition line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <span className="text-[11px] font-bold text-solar-600 mt-3 block">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Quick Consultation Box */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h3 className="text-xl font-bold text-slate-900">Have Questions About Solar in Uttarakhand?</h3>
          <p className="text-xs text-slate-600">
            Our certified solar engineers are available for free consultations, rooftop feasibility checks, and PM Surya Ghar subsidy guidance.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/?intent=quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-solar-600 hover:bg-solar-700 shadow-md transition"
            >
              <ZapIcon className="w-4 h-4 text-amber-300" />
              <span>Book Free Site Survey</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
