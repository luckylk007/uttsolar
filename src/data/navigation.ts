export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface UtilityBarItem {
  label: string;
  href: string;
  external?: boolean;
  icon?: 'phone' | 'whatsapp' | 'language' | 'scheme';
}

export interface CtaButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  icon?: 'phone' | 'whatsapp' | 'quote';
}

/** Top utility bar — PM Surya Ghar, phone, WhatsApp, language */
export const utilityBarItems: UtilityBarItem[] = [
  {
    label: 'PM Surya Ghar: Muft Bijli Yojana',
    href: '/pm-surya-ghar/',
    icon: 'scheme',
  },
  {
    label: 'Call Now',
    href: 'tel:+919876543210',
    icon: 'phone',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    external: true,
    icon: 'whatsapp',
  },
  {
    label: 'Language',
    href: '#language',
    icon: 'language',
  },
];

/** Primary header navigation */
export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  {
    label: 'Solar Solutions',
    href: '/solar-solutions/',
    children: [
      {
        label: 'On-Grid Solar',
        href: '/services/on-grid-solar/',
        description: 'Grid-connected rooftop systems with net metering',
      },
      {
        label: 'Off-Grid Solar',
        href: '/services/off-grid-solar/',
        description: 'Independent power for areas with unreliable supply',
      },
      {
        label: 'Hybrid Solar',
        href: '/services/hybrid-solar/',
        description: 'Solar with battery backup and grid support',
      },
      {
        label: 'Rooftop Solar',
        href: '/services/rooftop-solar/',
        description: 'Residential and commercial rooftop installations',
      },
    ],
  },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Residential Solar', href: '/services/residential-solar/' },
      { label: 'Commercial Solar', href: '/services/commercial-solar/' },
      { label: 'Industrial Solar', href: '/services/industrial-solar/' },
      { label: 'Solar Panel Installation', href: '/services/solar-panel-installation/' },
      { label: 'Solar Inverter', href: '/services/solar-inverter/' },
      { label: 'Solar Battery', href: '/services/solar-battery/' },
      { label: 'Solar Water Heater', href: '/services/solar-water-heater/' },
      { label: 'Solar Street Light', href: '/services/solar-street-light/' },
      { label: 'Solar Maintenance', href: '/services/solar-maintenance/' },
      { label: 'Solar Repair', href: '/services/solar-repair/' },
      { label: 'Solar AMC', href: '/services/solar-amc/' },
      { label: 'Net Metering', href: '/services/net-metering/' },
      { label: 'Subsidy Assistance', href: '/services/solar-subsidy-assistance/' },
    ],
  },
  { label: 'Locations', href: '/locations/' },
  { label: 'Calculator', href: '/calculator/' },
  { label: 'Subsidy', href: '/solar-subsidy/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

/** Header call-to-action buttons */
export const headerCtas: CtaButton[] = [
  {
    label: 'Get Free Solar Quote',
    href: '/contact/?intent=quote',
    variant: 'primary',
    icon: 'quote',
  },
  {
    label: 'Call Now',
    href: 'tel:+919876543210',
    variant: 'secondary',
    icon: 'phone',
  },
];

/** Mobile sticky bar actions */
export const mobileStickyActions: CtaButton[] = [
  {
    label: 'Call',
    href: 'tel:+919876543210',
    variant: 'outline',
    icon: 'phone',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    variant: 'outline',
    icon: 'whatsapp',
  },
  {
    label: 'Get Quote',
    href: '/contact/?intent=quote',
    variant: 'primary',
    icon: 'quote',
  },
];

/** Footer quick links */
export const footerQuickLinks: NavItem[] = [
  { label: 'About Us', href: '/about/' },
  { label: 'Solar Calculator', href: '/calculator/' },
  { label: 'PM Surya Ghar', href: '/pm-surya-ghar/' },
  { label: 'Solar Subsidy', href: '/solar-subsidy/' },
  { label: 'Net Metering', href: '/net-metering/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact', href: '/contact/' },
];

/** Footer service links */
export const footerServiceLinks: NavItem[] = [
  { label: 'Residential Solar', href: '/services/residential-solar/' },
  { label: 'Commercial Solar', href: '/services/commercial-solar/' },
  { label: 'Industrial Solar', href: '/services/industrial-solar/' },
  { label: 'Rooftop Solar', href: '/services/rooftop-solar/' },
  { label: 'Hybrid Solar', href: '/services/hybrid-solar/' },
  { label: 'Solar Maintenance', href: '/services/solar-maintenance/' },
  { label: 'Solar AMC', href: '/services/solar-amc/' },
  { label: 'Subsidy Assistance', href: '/services/solar-subsidy-assistance/' },
];

/** Footer district links */
export const footerLocationLinks: NavItem[] = [
  { label: 'Dehradun', href: '/locations/dehradun/' },
  { label: 'Haridwar', href: '/locations/haridwar/' },
  { label: 'Nainital', href: '/locations/nainital/' },
  { label: 'Udham Singh Nagar', href: '/locations/udham-singh-nagar/' },
  { label: 'Almora', href: '/locations/almora/' },
  { label: 'All Districts', href: '/locations/' },
];

export function getMainNavItems(): NavItem[] {
  return mainNavItems;
}

export function getServiceNavItems(): NavItem[] {
  const services = mainNavItems.find((item) => item.label === 'Services');
  return services?.children ?? [];
}

export function getSolarSolutionNavItems(): NavItem[] {
  const solutions = mainNavItems.find((item) => item.label === 'Solar Solutions');
  return solutions?.children ?? [];
}
