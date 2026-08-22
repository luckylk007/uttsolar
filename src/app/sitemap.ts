import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getAllServices } from '@/data/services';
import { districts } from '@/data/locations/districts';
import { getAllLocations } from '@/data/locations/locations';
import { getAllBlogs } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  // Core static pages
  const staticPages = [
    '',
    '/hi',
    '/about',
    '/services',
    '/solar-solutions',
    '/projects',
    '/gallery',
    '/calculator',
    '/solar-subsidy',
    '/pm-surya-ghar',
    '/net-metering',
    '/solar-maintenance',
    '/solar-amc',
    '/blog',
    '/locations',
    '/contact',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/hi' ? 0.9 : 0.8,
  }));

  // Service pages (17 services)
  const servicePages = getAllServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // District archives (13 districts)
  const districtPages = districts.map((district) => ({
    url: `${baseUrl}/locations/${district.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Location pages
  const locationPages = getAllLocations().map((location) => ({
    url: `${baseUrl}/locations/${location.districtSlug}/${location.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  // Blog articles
  const blogPages = getAllBlogs().map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}/`,
    lastModified: new Date(blog.dateModified || blog.datePublished),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...districtPages,
    ...locationPages,
    ...blogPages,
  ];
}
