export interface CategorizedFaq {
  category: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export const faqsData: CategorizedFaq[] = [
  {
    category: 'PM Surya Ghar & Government Subsidies',
    items: [
      {
        question: 'What is the PM Surya Ghar subsidy amount in Uttarakhand?',
        answer:
          'Because Uttarakhand is recognized as a Special Category Hilly State by MNRE, homeowners receive higher Central Financial Assistance (CFA): ₹33,000 per kW for the first 2 kW and ₹19,800 for the 3rd kW, totaling a maximum central subsidy of ₹85,800 for a 3 kW rooftop solar system.',
      },
      {
        question: 'How do I apply for the PM Surya Ghar subsidy?',
        answer:
          'You register on the official national portal pmsuryaghar.gov.in with your UPCL consumer number and mobile. After feasibility approval, UTTsolar installs the system according to MNRE guidelines, completes UPCL net meter inspection, and submits the commissioning certificate. The central subsidy is then transferred directly into your bank account via DBT.',
      },
      {
        question: 'Are commercial and industrial consumers eligible for PM Surya Ghar subsidy?',
        answer:
          'No. PM Surya Ghar CFA is strictly designed for residential consumers and registered Group Housing Societies (RWAs). However, commercial and industrial establishments save significantly through UPCL net metering, reduced demand charges, and can claim Accelerated Depreciation (AD) tax benefits under the Income Tax Act.',
      },
      {
        question: 'How long does it take to receive the subsidy after installation in Uttarakhand?',
        answer:
          'Once the physical solar plant is installed, UPCL completes inspection and meter commissioning, and the commissioning certificate is uploaded to the portal, the central subsidy is typically credited to your bank account within 30 to 45 working days.',
      },
    ],
  },
  {
    category: 'Solar Systems & Technology',
    items: [
      {
        question: 'What is the difference between On-Grid, Off-Grid, and Hybrid solar systems?',
        answer:
          'An On-Grid system connects to UPCL and uses net metering without batteries (most cost-effective and highest ROI). An Off-Grid system runs independently using a large battery bank for areas with no grid. A Hybrid system combines both: it connects to UPCL with net metering while also maintaining a battery bank for uninterrupted backup during power cuts.',
      },
      {
        question: 'What type of solar panels does UTTsolar install?',
        answer:
          'We exclusively install MNRE ALMM List-I approved, Tier-1 Monocrystalline PERC and N-Type TopCon solar modules with efficiencies exceeding 21.5% and 25-year performance warranties from industry-leading manufacturers.',
      },
      {
        question: 'How much roof space is required for rooftop solar?',
        answer:
          'Modern high-wattage solar modules require approximately 75 to 85 sq ft of shadow-free rooftop area per 1 kW of installed capacity. A standard 3 kW residential system requires roughly 240–260 sq ft.',
      },
      {
        question: 'Will solar panels work on cloudy days and during Uttarakhand monsoons?',
        answer:
          'Yes. Solar panels generate electricity from daylight (diffuse radiation) even when it is cloudy or raining, producing 20% to 35% of their peak capacity. Any deficit is automatically drawn from the UPCL grid through net metering.',
      },
    ],
  },
  {
    category: 'UPCL Net Metering & Grid Connection',
    items: [
      {
        question: 'How does net metering work with UPCL in Uttarakhand?',
        answer:
          'UPCL replaces your existing meter with a bidirectional net meter. During the day, surplus solar power is exported to the grid. At night, you draw power from the grid. At the end of the month, your bill is calculated only on the net units (Import minus Export). Surplus units are banked and carried forward.',
      },
      {
        question: 'Who handles the UPCL net metering permissions and paperwork?',
        answer:
          'UTTsolar provides 100% turnkey liaison service. We handle the USRP portal registration, single-line diagrams, electrical safety compliance, inspection scheduling with local UPCL engineers, and bidirectional meter installation.',
      },
      {
        question: 'Can I install a solar system larger than my sanctioned load?',
        answer:
          'UPCL rules require the solar capacity to not exceed your sanctioned electrical load. If you require a larger solar plant (e.g. 5 kW solar on a 3 kW connection), UTTsolar will assist you in applying for a sanctioned load enhancement through UPCL prior to plant commissioning.',
      },
    ],
  },
  {
    category: 'Cost, Financing & Return on Investment',
    items: [
      {
        question: 'What is the average payback period for a rooftop solar system in Uttarakhand?',
        answer:
          'For residential systems under PM Surya Ghar, the payback period is typically 2.8 to 3.5 years. For commercial and industrial establishments with high daytime tariffs, the payback is 3 to 4 years. After payback, the system delivers free electricity for the remainder of its 25+ year lifespan.',
      },
      {
        question: 'Are bank loans available for installing rooftop solar?',
        answer:
          'Yes. Nationalized banks (SBI, PNB, Canara Bank, Bank of Baroda) offer dedicated PM Surya Ghar collateral-free rooftop solar loans at low interest rates (around 7% p.a.) with tenures up to 7 years. UTTsolar provides the documentation required for loan approval.',
      },
      {
        question: 'Does rooftop solar increase property value in Uttarakhand?',
        answer:
          'Yes. Homes and commercial properties equipped with certified, grid-connected solar power systems enjoy lower operating expenses and higher rental and resale appeal across Dehradun, Haldwani, and hill resorts.',
      },
    ],
  },
  {
    category: 'Installation, Safety & Maintenance',
    items: [
      {
        question: 'How long does the physical solar installation take?',
        answer:
          'A standard 3 kW to 5 kW residential rooftop installation is completed in 1 to 2 working days. High-capacity commercial projects take 1 to 3 weeks depending on capacity and structural complexity.',
      },
      {
        question: 'Will solar installation damage my roof or cause water leakage?',
        answer:
          'No. For RCC flat roofs, we use weighted ballasted mounts or chemical anchor fasteners with double-sealed waterproof EPDM grouting. For metal shed roofs, we use non-penetrating standing seam clamps that preserve 100% watertight integrity.',
      },
      {
        question: 'How do I clean and maintain my solar panels?',
        answer:
          'Solar panels require simple cleaning with plain soft water and a microfiber mop once every 15–20 days during dry, dusty periods. We also offer Annual Maintenance Contracts (AMC) with professional cleaning and thermographic inspections.',
      },
    ],
  },
];

export function getAllFaqs(): CategorizedFaq[] {
  return faqsData;
}
