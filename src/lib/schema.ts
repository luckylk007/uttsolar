import { siteConfig } from '@/config/site';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    sameAs: [
      siteConfig.social.googleBusiness,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ].filter(Boolean),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'customer service',
        areaServed: 'IN-UT',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phoneSecondary,
        contactType: 'technical support',
        areaServed: 'IN-UT',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.headOffice.street,
      addressLocality: siteConfig.headOffice.city,
      addressRegion: siteConfig.headOffice.state,
      postalCode: siteConfig.headOffice.pincode,
      addressCountry: siteConfig.headOffice.country,
    },
  };
}

export function localBusinessSchema(overrides?: {
  name?: string;
  areaServed?: string;
  locality?: string;
  latitude?: number;
  longitude?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: overrides?.name ?? siteConfig.legalName,
    image: `${siteConfig.url}/og-image.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '₹₹',
    sameAs: [
      siteConfig.social.googleBusiness,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.headOffice.street,
      addressLocality: overrides?.locality ?? siteConfig.headOffice.city,
      addressRegion: siteConfig.headOffice.state,
      postalCode: siteConfig.headOffice.pincode,
      addressCountry: siteConfig.headOffice.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: overrides?.latitude ?? 29.2183,
      longitude: overrides?.longitude ?? 79.513,
    },
    areaServed: [
      'Dehradun',
      'Haridwar',
      'Nainital',
      'Udham Singh Nagar',
      'Almora',
      'Pauri Garhwal',
      'Tehri Garhwal',
      'Pithoragarh',
      'Chamoli',
      'Rudraprayag',
      'Uttarkashi',
      'Bageshwar',
      'Champawat',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  };
}

export function multiLocationBusinessSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'UTTsolar — Dehradun Headquarters',
      url: siteConfig.url,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rajpur Road',
        addressLocality: 'Dehradun',
        addressRegion: 'Uttarakhand',
        postalCode: '248001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.3165,
        longitude: 78.0322,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'UTTsolar — Haldwani / Nainital Regional Hub',
      url: `${siteConfig.url}/locations/nainital/`,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bareilly Road',
        addressLocality: 'Haldwani',
        addressRegion: 'Uttarakhand',
        postalCode: '263139',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 29.2183,
        longitude: 79.513,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'UTTsolar — Haridwar & Roorkee Engineering Hub',
      url: `${siteConfig.url}/locations/haridwar/`,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'SIDCUL Industrial Area',
        addressLocality: 'Haridwar',
        addressRegion: 'Uttarakhand',
        postalCode: '249403',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 29.9457,
        longitude: 78.1642,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'UTTsolar — Rudrapur & US Nagar Industrial Hub',
      url: `${siteConfig.url}/locations/udham-singh-nagar/`,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pantnagar Industrial Corridor',
        addressLocality: 'Rudrapur',
        addressRegion: 'Uttarakhand',
        postalCode: '263153',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.98,
        longitude: 79.4,
      },
    },
  ];
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'State',
      name: 'Uttarakhand',
    },
    url: `${siteConfig.url}${url}`,
  };
}

export function howToSchema(data: {
  name: string;
  description: string;
  totalTime?: string;
  steps: {
    name: string;
    text: string;
    url?: string;
  }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    totalTime: data.totalTime ?? 'P30D',
    step: data.steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.name,
      text: s.text,
      url: s.url ? `${siteConfig.url}${s.url}` : undefined,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${siteConfig.url}${article.url}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    image: article.image ?? `${siteConfig.url}/og-image.jpg`,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/locations?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function webPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${siteConfig.url}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
