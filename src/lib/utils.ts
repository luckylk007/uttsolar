import type { Locale } from '@/config/site';
import { siteConfig } from '@/config/site';

export function localizedPath(path: string, locale: Locale): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === siteConfig.defaultLocale) {
    return normalized === '/' ? '/' : normalized;
  }
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}

export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  const locales = siteConfig.locales.join('|');
  const stripped = currentPath.replace(new RegExp(`^/(${locales})(?=/|$)`), '') || '/';
  return localizedPath(stripped, targetLocale);
}

export function formatCurrency(amount: number, locale: Locale = 'en'): string {
  return new Intl.NumberFormat(locale === 'hi' ? 'hi-IN' : 'en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number, locale: Locale = 'en'): string {
  return new Intl.NumberFormat(locale === 'hi' ? 'hi-IN' : 'en-IN').format(num);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
