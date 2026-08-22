export interface Project {
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Institutional' | 'Hospitality';
  location: string;
  district: string;
  capacityKw: number;
  systemType: 'On-Grid' | 'Hybrid' | 'Off-Grid';
  completionYear: number;
  description: string;
  highlights: string[];
  annualSavings: string;
  co2Reduction: string;
}

export const projects: Project[] = [
  {
    slug: 'residential-solar-rajpur-road-dehradun',
    title: '5 kW Rooftop Solar System at Rajpur Road Villa',
    category: 'Residential',
    location: 'Rajpur Road, Dehradun',
    district: 'Dehradun',
    capacityKw: 5,
    systemType: 'On-Grid',
    completionYear: 2025,
    description:
      'Turnkey 5 kW on-grid solar plant installed on an independent luxury villa in Dehradun. The project qualified for the maximum PM Surya Ghar central subsidy under Uttarakhand special category provisions, achieving complete net metering integration with UPCL.',
    highlights: [
      'TopCon 550W high-efficiency bifacial solar modules',
      '5 kW single-phase grid-tied inverter with Wi-Fi monitoring',
      'UPCL bidirectional net meter commissioned in 18 days',
      'Reduced monthly electricity bill from ₹4,500 to zero units net billing',
    ],
    annualSavings: '₹52,000 / year',
    co2Reduction: '5.8 tonnes / year',
  },
  {
    slug: 'commercial-solar-sidcul-rudrapur',
    title: '150 kW Industrial Shed Solar Power Plant',
    category: 'Industrial',
    location: 'SIDCUL Industrial Area, Rudrapur',
    district: 'Udham Singh Nagar',
    capacityKw: 150,
    systemType: 'On-Grid',
    completionYear: 2025,
    description:
      'High-capacity industrial rooftop installation for an automotive component manufacturing facility in SIDCUL Rudrapur. Engineered on a curved metal trapezoidal shed using non-penetrating standing seam aluminium clamps.',
    highlights: [
      '150 kW three-phase grid-synchronized system with zero export controller capability',
      'High-yield TopCon Tier-1 panels producing 2,15,000 units annually',
      'Full Accelerated Depreciation tax savings claimed by the client',
      'Expected investment payback under 3.1 years',
    ],
    annualSavings: '₹14,80,000 / year',
    co2Reduction: '175 tonnes / year',
  },
  {
    slug: 'hospitality-solar-corbett-resort-ramnagar',
    title: '30 kW Solar + Battery Hybrid System for Eco Resort',
    category: 'Hospitality',
    location: 'Dhikuli, Ramnagar (Jim Corbett)',
    district: 'Nainital',
    capacityKw: 30,
    systemType: 'Hybrid',
    completionYear: 2025,
    description:
      'Hybrid solar installation with 40 kWh Lithium LiFePO4 battery storage for an eco-resort on the periphery of Corbett National Park. Slashed diesel generator run-time by 80% while ensuring silent 24/7 guest comfort.',
    highlights: [
      '30 kW hybrid inverter setup with intelligent load shedding automation',
      'Eliminated noisy diesel fumes and reduced diesel fuel consumption drastically',
      'Provides seamless power during forest grid maintenance',
      'Integrated solar thermal water heating system for 24 guest cottages',
    ],
    annualSavings: '₹4,20,000 / year',
    co2Reduction: '42 tonnes / year',
  },
  {
    slug: 'commercial-solar-haldwani-hospital',
    title: '25 kW Rooftop Solar for Multi-Specialty Clinic',
    category: 'Commercial',
    location: 'Nainital Road, Haldwani',
    district: 'Nainital',
    capacityKw: 25,
    systemType: 'On-Grid',
    completionYear: 2025,
    description:
      'Elevated rooftop solar structure installed over a hospital terrace in Haldwani, preserving complete roof recreational and service access while supplying daytime energy to diagnostic labs and outpatient air conditioning.',
    highlights: [
      'Hot-dip galvanized elevated structure with 7.5 ft clear headroom',
      'Synchronized with UPCL commercial three-phase connection',
      'Reduces peak summer air-conditioning power bills significantly',
      '24/7 smart monitoring accessible to facility management team',
    ],
    annualSavings: '₹2,65,000 / year',
    co2Reduction: '29 tonnes / year',
  },
  {
    slug: 'residential-solar-kankhal-haridwar',
    title: '3 kW PM Surya Ghar Rooftop Plant in Kankhal',
    category: 'Residential',
    location: 'Kankhal, Haridwar',
    district: 'Haridwar',
    capacityKw: 3,
    systemType: 'On-Grid',
    completionYear: 2025,
    description:
      'Standard residential rooftop solar installation for a 2-storey home in historic Kankhal. Client received ₹85,800 direct central subsidy through PM Surya Ghar portal.',
    highlights: [
      '3 kW monocrystalline PERC solar array on short-leg concrete mounting',
      'Complete safety earthing with copper-bonded chemical rods',
      'Net investment after subsidy under ₹90,000',
      'Offsets over 380 units of monthly UPCL consumption',
    ],
    annualSavings: '₹31,500 / year',
    co2Reduction: '3.5 tonnes / year',
  },
  {
    slug: 'institutional-solar-ashram-rishikesh',
    title: '40 kW Solar Installation for Yoga Ashram',
    category: 'Institutional',
    location: 'Swargashram, Rishikesh',
    district: 'Dehradun',
    capacityKw: 40,
    systemType: 'On-Grid',
    completionYear: 2024,
    description:
      'Comprehensive green energy transition for a renowned spiritual institution along the Ganga river. Rooftop panels power guest accommodation, dining halls, and meditation facilities.',
    highlights: [
      '40 kW array split across three separate rooftop blocks with combined net metering',
      'Environmentally conscious installation aligned with spiritual ecology values',
      'Zero grid energy cost during off-season retreat months',
      'Demonstration site for visitors from over 40 countries',
    ],
    annualSavings: '₹3,90,000 / year',
    co2Reduction: '46 tonnes / year',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
