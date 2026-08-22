import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getAllBlogs } from '@/data/blogs';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import {
  ArrowUpRightIcon,
  LeafIcon,
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Uttarakhand Solar Energy Blog & PM Surya Ghar Guides | UTTsolar',
  description:
    'Authoritative solar guides for Uttarakhand: PM Surya Ghar subsidy rules, rooftop solar costs, UPCL net metering tutorials, battery storage & location-specific advice.',
  alternates: {
    canonical: `${siteConfig.url}/blog/`,
  },
};

export default function BlogHubPage() {
  const blogs = getAllBlogs();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ name: 'Solar Blog', url: '/blog/' }]} />

      {/* Hero Header - Solor Style */}
      <section className="bg-[#122417] text-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-4xl mx-auto space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A3321] border border-[#70BA3F]/40 text-xs font-bold text-[#AEDB96] uppercase tracking-wider">
          <LeafIcon className="w-4 h-4 text-[#70BA3F]" />
          <span>Authoritative Engineering &amp; Subsidy Research</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
          Uttarakhand Solar Blog &amp; <span className="text-[#70BA3F]">Knowledge Hub</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Deep-dive guides written by solar engineers on PM Surya Ghar subsidies, system pricing, UPCL net metering rules, and hill-specific solar maintenance.
        </p>
      </section>

      {/* Blog Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white rounded-3xl border border-[#E1E8DE] shadow-xs p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition group hover:border-[#70BA3F]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#467725] bg-[#E6F4DE] px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                <span className="text-xs text-[#687B6C] font-medium">{blog.readTime}</span>
              </div>

              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#122417] mb-3 leading-snug group-hover:text-[#70BA3F] transition">
                <Link href={`/blog/${blog.slug}/`}>{blog.title}</Link>
              </h2>

              <p className="text-xs text-[#687B6C] leading-relaxed line-clamp-3 mb-6">
                {blog.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E1E8DE] flex items-center justify-between">
              <span className="text-xs text-[#687B6C] font-medium">{blog.datePublished}</span>
              <Link
                href={`/blog/${blog.slug}/`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#70BA3F] group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Guide</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
