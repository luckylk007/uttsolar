export const siteConfig = {
  name: 'UTTsolar',
  legalName: 'UTTsolar',
  tagline: 'Premium Solar Solutions for Uttarakhand',
  description:
    'Residential, commercial and industrial solar installation across Uttarakhand. PM Surya Ghar subsidy assistance, net metering support and free site surveys.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://uttsolar.in',
  phone: '+917830060725',
  phoneDisplay: '+91 78300 60725',
  phoneSecondary: '+918475014008',
  phoneSecondaryDisplay: '+91 84750 14008',
  whatsapp: '917830060725',
  whatsappSecondary: '918475014008',
  email: 'info@uttsolar.in',
  address: {
    street: 'Solar Service Center',
    city: 'Dehradun',
    state: 'Uttarakhand',
    pincode: '248001',
    country: 'IN',
  },
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
  },
  businessHours: 'Mon–Sat: 9:00 AM – 7:00 PM',
  discom: 'UPCL (Uttarakhand Power Corporation Limited)',
  discomPortal: 'https://usrp.upcl.org/',
  pmSuryaGharPortal: 'https://pmsuryaghar.gov.in',
  locales: ['en', 'hi'] as const,
  defaultLocale: 'en' as const,
};

export type Locale = (typeof siteConfig.locales)[number];
