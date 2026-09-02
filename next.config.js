/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const cspDirectives = [
  "default-src 'self'",
  // unsafe-eval only in dev (Next.js hot reload needs it); production strips it
  isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://scripts.clarity.ms https://www.googletagmanager.com"
    : "script-src 'self' 'unsafe-inline' https://www.clarity.ms https://scripts.clarity.ms https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://maps.googleapis.com https://maps.gstatic.com https://lh3.googleusercontent.com https://c.clarity.ms https://c.bing.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://wa.me https://api.whatsapp.com https://vitals.vercel-insights.com https://vercel.live https://*.clarity.ms https://c.clarity.ms https://v.clarity.ms https://s.clarity.ms https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "frame-src 'self' https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com",
  "media-src 'none'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // DENY is stronger than SAMEORIGIN for a public marketing site
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          // HSTS: 2-year max-age, includeSubDomains, preload-eligible
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: cspDirectives.join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/location',
        destination: '/locations/',
        permanent: true,
      },
      {
        source: '/location/:path*',
        destination: '/locations/:path*/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;


