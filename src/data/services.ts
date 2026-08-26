export interface Faq {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceSections {
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  faqs: Faq[];
}

export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ServiceSections;
  relatedServices: string[];
}

const services: Service[] = [
  {
    slug: 'residential-solar',
    title: 'Residential Solar',
    metaTitle: 'Residential Solar Installation in Uttarakhand | UTTsolar',
    metaDescription:
      'Home rooftop solar installation across Uttarakhand with PM Surya Ghar subsidy support, net metering through UPCL and free site surveys in Dehradun, Haldwani and all districts.',
    h1: 'Residential Solar Installation in Uttarakhand',
    intro:
      'Uttarakhand homeowners from the Terai plains to hill towns are switching to rooftop solar to manage rising electricity costs and long summer cooling loads. UTTsolar designs residential systems sized to your actual consumption, roof structure and DISCOM connection — with guidance on PM Surya Ghar Central Financial Assistance where you qualify. We handle site survey, engineering, installation, net metering paperwork with UPCL and post-installation support across all 13 districts.',
    sections: {
      benefits: [
        {
          title: 'Lower monthly electricity bills',
          description:
            'On-grid rooftop solar offsets daytime consumption. Exported units credited through net metering reduce your UPCL bill during months when generation exceeds usage.',
        },
        {
          title: 'PM Surya Ghar subsidy support',
          description:
            'As a special category state, Uttarakhand households can receive higher Central Financial Assistance on eligible residential systems applied through the official portal.',
        },
        {
          title: 'Suited to varied roof types',
          description:
            'We install on RCC terraces, sloped metal sheets and composite roofs common in Dehradun bungalows, Haldwani row houses and Garhwal hillside homes.',
        },
        {
          title: 'Reliable after-sales support',
          description:
            'Local service teams across Uttarakhand for monitoring checks, warranty claims and annual maintenance when you need ongoing care.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Free site survey',
          description:
            'Our engineer visits your home to assess roof orientation, shading, structural load and your latest electricity bill to recommend an appropriate system size.',
        },
        {
          step: 2,
          title: 'Custom proposal and subsidy guidance',
          description:
            'You receive a detailed quotation covering modules, inverter, mounting, net metering scope and steps for PM Surya Ghar registration if applicable.',
        },
        {
          step: 3,
          title: 'Installation and DISCOM coordination',
          description:
            'Certified technicians install the system. We assist with UPCL net metering application, inspection and meter change as per current DISCOM process.',
        },
        {
          step: 4,
          title: 'Commissioning and handover',
          description:
            'After successful testing and DISCOM approval, we explain monitoring, warranty documents and basic maintenance for your rooftop plant.',
        },
      ],
      faqs: [
        {
          question: "How much PM Surya Ghar subsidy is available for homes in Uttarakhand?",
          answer:
            "As a special category hill state, Uttarakhand households receive maximum Central Financial Assistance (CFA) under PM Surya Ghar: Muft Bijli Yojana: ₹33,000 for 1 kW, ₹66,000 for 2 kW, and ₹85,800 for 3 kW or higher capacity systems. The subsidy is deposited directly into your bank account (DBT) following UPCL net meter commissioning.",
        },
        {
          question: "How much roof space do I need for a residential solar plant?",
          answer:
            "A standard residential solar system requires approximately 80 to 100 sq. ft. of shadow-free rooftop space per kilowatt (kW). For a typical 3 kW home system (generating 12–15 units daily), you need roughly 250 to 300 sq. ft. of flat concrete terrace, sloped tin roof, or elevated structure.",
        },
        {
          question: "How long does it take to recover the installation cost (payback period)?",
          answer:
            "With the PM Surya Ghar subsidy of up to ₹85,800 and dramatic reductions in monthly UPCL electricity bills, most residential systems achieve full payback within 3 to 4 years. Since Tier-1 solar panels come with a 25-year performance warranty, you enjoy 20+ years of virtually free electricity.",
        },
        {
          question: "How does UPCL net metering work for residential consumers?",
          answer:
            "During sunny daylight hours, your solar system powers your home and exports any surplus units to the UPCL grid. In the evening, you draw electricity from the grid. At the end of the billing cycle, UPCL bills you only for the net difference (imported units minus exported units).",
        },
        {
          question: "What happens to my solar power during a grid power outage?",
          answer:
            "Standard on-grid systems automatically shut down during a power cut for line worker safety (anti-islanding protection). If you require continuous power during outages, UTTsolar can install a Hybrid Solar System equipped with lithium-ion battery storage.",
        },
        {
          question: "Can solar panels be installed on sloping or tin roofs in hill towns?",
          answer:
            "Yes. UTTsolar provides customized mounting structures for flat RCC roofs, pitched tin sheds, and decorative hill-style sloping roofs across Dehradun, Mussoorie, Nainital, Almora, and all Garhwal/Kumaon districts using rust-proof anodized aluminium or hot-dip galvanized steel.",
        },
        {
          question: "What documents are required to apply for PM Surya Ghar in Uttarakhand?",
          answer:
            "You only need your recent UPCL electricity bill, Aadhaar card, bank account passbook/cancelled cheque (linked with Aadhaar), and roof ownership proof. UTTsolar handles the entire portal registration and documentation on pmsuryaghar.gov.in.",
        },
        {
          question: "What warranty and maintenance do residential solar systems come with?",
          answer:
            "Our solar modules come with a 10–12 year product warranty and a 25–30 year linear power performance warranty. Inverters carry 5 to 10 year manufacturer warranties. UTTsolar provides comprehensive post-installation support and annual maintenance across Uttarakhand.",
        },
      ],
    },
    relatedServices: ['rooftop-solar', 'on-grid-solar', 'solar-subsidy-assistance', 'net-metering'],
  },
  {
    slug: 'commercial-solar',
    title: 'Commercial Solar',
    metaTitle: 'Commercial Solar Systems for Businesses in Uttarakhand | UTTsolar',
    metaDescription:
      'Commercial rooftop solar for shops, offices, hotels and institutions across Uttarakhand. Reduce operating costs with on-grid and hybrid systems and UPCL net metering support.',
    h1: 'Commercial Solar Solutions in Uttarakhand',
    intro:
      'Businesses across Uttarakhand — from Haridwar trading firms and Rudrapur industrial units to Nainital hotels and Dehradun IT offices — face significant daytime electricity demand. Commercial rooftop solar converts unused terrace and shed space into a long-term cost-control asset. UTTsolar designs three-phase commercial plants with proper load analysis, structural assessment and DISCOM-compliant net metering through UPCL.',
    sections: {
      benefits: [
        {
          title: 'Reduce operating expenditure',
          description:
            'Commercial tariffs are higher than domestic rates. Solar offsets peak daytime consumption when offices, AC units and machinery draw the most power.',
        },
        {
          title: 'Use idle rooftop assets',
          description:
            'Warehouses, malls, hotels and factory sheds in Udham Singh Nagar and Haridwar often have large flat roofs ideal for high-capacity arrays.',
        },
        {
          title: 'Tax and depreciation benefits',
          description:
            'Businesses may claim applicable accelerated depreciation on solar assets as per current tax rules — consult your CA for specifics on your entity.',
        },
        {
          title: 'Brand and sustainability signal',
          description:
            'Clean energy adoption resonates with customers and partners, especially in tourism-heavy areas like Rishikesh, Mussoorie and Nainital.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Load and site assessment',
          description:
            'We review 12 months of electricity bills, demand patterns, roof or ground availability and three-phase connection details.',
        },
        {
          step: 2,
          title: 'Engineering and financial proposal',
          description:
            'Detailed design with generation estimates, payback analysis and net metering scope. Commercial systems follow separate DISCOM procedures from residential.',
        },
        {
          step: 3,
          title: 'Installation with minimal disruption',
          description:
            'Phased installation scheduling to avoid interrupting business operations. Safety protocols for live commercial premises.',
        },
        {
          step: 4,
          title: 'Net metering and monitoring',
          description:
            'UPCL application, inspection coordination and optional remote monitoring setup for facility managers.',
        },
      ],
      faqs: [
        {
          question: "What is the ROI and payback period for commercial solar in Uttarakhand?",
          answer:
            "Commercial establishments face UPCL tariff slabs of ₹6.50 to ₹8.50+ per unit. Commercial solar installations typically pay for themselves within 2.5 to 3.5 years through operational bill savings and 40% accelerated depreciation tax benefits.",
        },
        {
          question: "Are commercial solar systems eligible for accelerated depreciation (AD)?",
          answer:
            "Yes. Under Indian income tax laws, commercial and industrial entities investing in solar power plants can claim 40% accelerated depreciation in the first year, significantly reducing corporate tax liability.",
        },
        {
          question: "How does commercial net metering work with UPCL?",
          answer:
            "UPCL permits grid-connected commercial rooftop solar under LT and HT categories up to sanctioned load limits. Bi-directional meters record generation and consumption, allowing businesses, hotels, and schools to bank surplus daytime units against nighttime consumption.",
        },
        {
          question: "Can hotels and resorts in hill tourist circuits install solar?",
          answer:
            "Yes. Hotels and resorts in Nainital, Mussoorie, Rishikesh, Corbett, and hill towns face heavy daytime laundry, cooking, water heating, and HVAC loads. Rooftop solar dramatically lowers daytime peak demand and generator operating costs.",
        },
        {
          question: "Do commercial systems require structural stability audits?",
          answer:
            "Yes. For commercial buildings, shopping complexes, and institutional campuses, UTTsolar performs comprehensive structural load calculations and wind velocity simulations (up to 150 km/h) prior to installation.",
        },
        {
          question: "What monitoring capabilities are provided for commercial solar plants?",
          answer:
            "All our commercial systems come with cloud-based IoT smart data loggers and mobile apps, enabling real-time remote tracking of string voltages, daily kilowatt-hour yields, performance ratios (PR), and automated fault alerts.",
        },
        {
          question: "What is the difference between CAPEX and OPEX models for commercial solar?",
          answer:
            "Under CAPEX, the client owns the plant upfront, claims all tax benefits/subsidy, and maximizes long-term savings. Under OPEX/RESCO, a third party finances the installation and sells solar power to you at a discounted tariff per unit.",
        },
        {
          question: "How do you handle zero export or diesel generator synchronization?",
          answer:
            "For businesses operating diesel generators or areas with grid export restrictions, we integrate smart DG-PV synchronization controllers and zero-export smart meters that dynamically modulate solar output to prevent reverse feeding into generators.",
        },
      ],
    },
    relatedServices: ['industrial-solar', 'on-grid-solar', 'rooftop-solar', 'net-metering'],
  },
  {
    slug: 'industrial-solar',
    title: 'Industrial Solar',
    metaTitle: 'Industrial Solar Power Plants in Uttarakhand | UTTsolar',
    metaDescription:
      'Industrial rooftop and ground-mount solar for factories and manufacturing units in Rudrapur, Haridwar, Kashipur and across Uttarakhand with three-phase net metering.',
    h1: 'Industrial Solar Installation in Uttarakhand',
    intro:
      'Uttarakhand\'s industrial corridors in Udham Singh Nagar, Haridwar and SIDCUL areas run energy-intensive processes on three-phase connections. Industrial solar reduces dependence on grid tariffs and demand charges where applicable. UTTsolar delivers engineered solutions for factory rooftops, open shed structures and ground-mount sites with structural load analysis, cable routing and UPCL compliance for large-capacity plants.',
    sections: {
      benefits: [
        {
          title: 'Energy cost control at scale',
          description:
            'Industrial consumers face the highest tariff slabs. Large rooftop or ground-mount arrays target consistent daytime generation aligned with shift operations.',
        },
        {
          title: 'Structural engineering expertise',
          description:
            'Factory sheds and pre-engineered buildings need load calculations before panel mounting. We assess wind exposure in open Terai industrial zones.',
        },
        {
          title: 'Scalable system design',
          description:
            'Modular expansion paths let you add capacity as operations grow, subject to sanctioned load and roof availability.',
        },
        {
          title: 'Dedicated project management',
          description:
            'Single point of contact from survey through commissioning for complex multi-block industrial sites.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Technical and structural audit',
          description:
            'Review of HT/LT connection, transformer capacity, roof or land survey, and shadow analysis across the industrial campus.',
        },
        {
          step: 2,
          title: 'Detailed project report',
          description:
            'Engineering design, BOQ, generation modelling, payback framework and DISCOM application strategy for industrial net metering.',
        },
        {
          step: 3,
          title: 'Execution and safety compliance',
          description:
            'Installation per IS standards with industrial safety protocols, earthing and lightning protection as required for the site.',
        },
        {
          step: 4,
          title: 'Commissioning and O&M planning',
          description:
            'Performance testing, handover documentation and optional annual maintenance contracts for sustained output.',
        },
      ],
      faqs: [
        {
          question: "What system capacities are typical for industrial solar in Uttarakhand?",
          answer:
            "Industrial systems in manufacturing corridors like SIDCUL Haridwar, Pantnagar, Roorkee, and Kashipur typically range from 50 kW to multiple megawatts (MW), installed on industrial metal sheds, warehouses, and ground mounts.",
        },
        {
          question: "Can solar panels be installed on corrugated factory tin/metal sheet sheds?",
          answer:
            "Yes. We utilize specialized non-penetrative aluminium standing-seam clamps or EPDM-gasketed self-drilling fasteners that secure the solar array without compromising the shed's structural waterproofing or warranty.",
        },
        {
          question: "How does industrial solar help with UPCL Maximum Demand (kVA) charges?",
          answer:
            "By supplying peak power during daytime factory operations, solar directly offsets heavy machine loads, flattening peak load curves and reducing monthly recorded kVA demand charges on your UPCL high-tension (HT) bill.",
        },
        {
          question: "What approvals are required for high-tension (HT) industrial solar plants?",
          answer:
            "HT installations require CEIG (Chief Electrical Inspector to Government) safety clearance, UPCL USRP grid connectivity approval, protection relay testing, and bi-directional ABT/TOD meter installation. UTTsolar provides end-to-end statutory liaison.",
        },
        {
          question: "How do ESG and sustainability goals benefit from industrial solar?",
          answer:
            "A 100 kW industrial solar plant offsets over 120 metric tonnes of CO2 emissions annually. This helps manufacturers meet corporate ESG mandates, Green Building (IGBC/LEED) certifications, and international supply chain compliance.",
        },
        {
          question: "What is the expected lifespan and degradation rate of industrial solar panels?",
          answer:
            "Tier-1 Mono PERC and TOPCon modules have an operational lifespan of 25 to 30 years with an annual degradation rate of less than 0.55%, guaranteeing at least 84.8% power output at year 25.",
        },
        {
          question: "What operations and maintenance (O&M) are necessary for industrial plants?",
          answer:
            "Regular automated or manual sprinkler panel washing, IV curve tracing, thermal drone imaging for hotspot detection, transformer health checks, and inverter firmware updates are covered under our Industrial O&M contracts.",
        },
        {
          question: "How quickly can UTTsolar commission a 100 kW to 500 kW industrial project?",
          answer:
            "From initial site survey and engineering drawing approval to procurement, installation, CEIG inspection, and UPCL synchronization, a typical 100 kW–500 kW project is commissioned within 4 to 8 weeks.",
        },
      ],
    },
    relatedServices: ['commercial-solar', 'on-grid-solar', 'solar-amc', 'solar-maintenance'],
  },
  {
    slug: 'on-grid-solar',
    title: 'On-Grid Solar',
    metaTitle: 'On-Grid Solar Systems with Net Metering in Uttarakhand | UTTsolar',
    metaDescription:
      'Grid-connected on-grid solar with UPCL net metering across Uttarakhand. No batteries required — export surplus power and import when needed. Free site survey available.',
    h1: 'On-Grid Solar Systems in Uttarakhand',
    intro:
      'On-grid solar is the most common choice for Uttarakhand homes and businesses connected to UPCL. Your solar plant runs in parallel with the grid — no batteries needed. Surplus generation exports through a bidirectional net meter and offsets consumption when the sun is down. UTTsolar installs ALMM-compliant on-grid systems and manages the net metering application process with UPCL across Dehradun, Haridwar, Haldwani and all districts.',
    sections: {
      benefits: [
        {
          title: 'Lowest upfront cost among system types',
          description:
            'Without battery storage, on-grid systems have lower component cost and simpler maintenance than hybrid or off-grid setups.',
        },
        {
          title: 'Net metering credit mechanism',
          description:
            'Approved net metering arrangements with UPCL allow export of surplus units and adjustment against your consumption as per current DISCOM billing rules.',
        },
        {
          title: 'High efficiency',
          description:
            'Grid-tied inverters operate at peak efficiency without battery conversion losses, maximising usable generation from your panels.',
        },
        {
          title: 'PM Surya Ghar eligible',
          description:
            'Residential on-grid systems are the standard configuration for PM Surya Ghar Central Financial Assistance applications in Uttarakhand.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Consumption analysis',
          description:
            'Review electricity bills to size the system appropriately — matching generation to annual consumption rather than oversizing.',
        },
        {
          step: 2,
          title: 'Net metering pre-check',
          description:
            'Confirm sanctioned load, connection type and UPCL circle requirements before finalising design.',
        },
        {
          step: 3,
          title: 'Install and inspect',
          description:
            'Mount panels, install grid-tied inverter, complete earthing and internal wiring. Coordinate UPCL inspection.',
        },
        {
          step: 4,
          title: 'Meter change and activation',
          description:
            'Bidirectional net meter installation by UPCL followed by system commissioning and customer handover.',
        },
      ],
      faqs: [
        {
          question: "What is an on-grid (grid-tied) solar system?",
          answer:
            "An on-grid solar system connects directly to your local UPCL electricity grid without requiring expensive battery storage. Solar electricity generated during the day powers your property first, while any surplus is fed into the grid for billing credits via net metering.",
        },
        {
          question: "Why are on-grid solar systems the most economical option?",
          answer:
            "Because on-grid systems eliminate chemical batteries (which represent 30–40% of system cost and require replacement every 5–8 years), they deliver the lowest cost per unit of power, fastest financial payback (3–4 years), and maximum efficiency (>97%).",
        },
        {
          question: "Does an on-grid solar system qualify for PM Surya Ghar subsidy in Uttarakhand?",
          answer:
            "Yes! Central Financial Assistance under the PM Surya Ghar scheme is specifically designed for grid-connected residential rooftop solar systems, offering subsidies up to ₹85,800 for systems up to 3 kW and above.",
        },
        {
          question: "Why does an on-grid solar system stop working during a power cut?",
          answer:
            "On-grid inverters feature mandatory anti-islanding protection per CEA/UPCL safety regulations. If grid power fails, the inverter disconnects in milliseconds to prevent dangerous live voltage backfeeding into power lines where technicians may be working.",
        },
        {
          question: "How is excess solar electricity accounted for in winter or monsoons?",
          answer:
            "UPCL net metering banks your exported units across the entire financial year. Units generated on bright sunny days offset cloudy days, and any net surplus at the end of the settlement period is credited per UPCL tariff policies.",
        },
        {
          question: "Can I expand my on-grid solar capacity in the future?",
          answer:
            "Yes. You can add more solar panels or upgrade to a higher-capacity inverter later, provided your roof space permits and your sanctioned load with UPCL is adjusted accordingly.",
        },
        {
          question: "What maintenance is required for an on-grid solar plant?",
          answer:
            "On-grid systems have zero moving parts and require minimal maintenance. Simply washing the glass surface of the solar panels with clean water once every 10–15 days to remove dust ensures peak generation performance.",
        },
        {
          question: "What inverter technologies are used in on-grid systems?",
          answer:
            "UTTsolar deploys high-efficiency string inverters and microinverters featuring dual MPPT trackers, wide MPPT voltage windows, integrated DC isolators, Type-II SPDs, and built-in Wi-Fi monitoring.",
        },
      ],
    },
    relatedServices: ['net-metering', 'residential-solar', 'hybrid-solar', 'rooftop-solar'],
  },
  {
    slug: 'off-grid-solar',
    title: 'Off-Grid Solar',
    metaTitle: 'Off-Grid Solar Systems for Remote Areas in Uttarakhand | UTTsolar',
    metaDescription:
      'Standalone off-grid solar with battery storage for remote homes, ashrams and farms in Uttarakhand hills where grid connection is unreliable or unavailable.',
    h1: 'Off-Grid Solar Solutions in Uttarakhand',
    intro:
      'Many locations in Uttarakhand\'s upper hills, forest fringes and remote valleys experience unreliable grid supply or no connection at all. Off-grid solar provides independent power through panels, charge controllers, batteries and inverters sized to your daily load. UTTsolar designs standalone systems for homestays in Chamoli, farmhouses near Almora, remote clinics and ashrams along the Char Dham routes where grid dependency is not practical.',
    sections: {
      benefits: [
        {
          title: 'Complete energy independence',
          description:
            'Operate lights, fans, refrigeration and communication equipment without relying on erratic grid supply or diesel generators.',
        },
        {
          title: 'Ideal for unreached grid areas',
          description:
            'Villages and properties far from UPCL lines in Pithoragarh, Uttarkashi and Chamoli benefit from immediate power without waiting for grid extension.',
        },
        {
          title: 'Quiet and clean alternative to diesel',
          description:
            'Replace noisy generator dependence with silent solar generation and battery storage for essential loads.',
        },
        {
          title: 'Custom load design',
          description:
            'Systems are built around your actual appliances and usage hours, not generic capacity templates.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Load survey',
          description:
            'List every appliance, wattage and daily usage hours. Critical for correct battery and inverter sizing in off-grid design.',
        },
        {
          step: 2,
          title: 'System design',
          description:
            'Panel array, battery bank capacity, inverter rating and backup autonomy days calculated for your location and worst-case winter sun.',
        },
        {
          step: 3,
          title: 'Installation',
          description:
            'Mounting, battery housing with ventilation, wiring protection and surge protection suited to hill weather conditions.',
        },
        {
          step: 4,
          title: 'Training and maintenance plan',
          description:
            'Guidance on battery care, load management during extended cloudy periods and scheduled maintenance visits.',
        },
      ],
      faqs: [
        {
          question: "What is an off-grid solar power system?",
          answer:
            "An off-grid solar system operates completely independently of the UPCL electricity grid. It pairs solar panels with a high-capacity battery bank (Lithium or Tubular) and a solar charge controller/inverter to generate, store, and provide 24/7 power.",
        },
        {
          question: "Where are off-grid solar systems most recommended in Uttarakhand?",
          answer:
            "Off-grid solar is ideal for remote hill hamlets, eco-resorts, trekking base camps, agricultural farmhouses, border outposts, and forest lodges in Chamoli, Pithoragarh, Uttarkashi, and Rudraprayag where grid power is unreliable or unavailable.",
        },
        {
          question: "How many days of autonomy (cloudy day backup) can an off-grid system provide?",
          answer:
            "We typically size off-grid battery banks to provide 1.5 to 3 days of autonomy, ensuring uninterrupted power for lighting, refrigeration, communication, and heating during prolonged mountain rain or snow.",
        },
        {
          question: "What type of battery is best for off-grid solar in hill climates?",
          answer:
            "Lithium Iron Phosphate (LiFePO4) batteries are best for hill installations due to their wide operating temperature range (-10°C to 55°C), 90% depth of discharge (DOD), 4,000+ cycle lifespan (10–12 years), and maintenance-free operation.",
        },
        {
          question: "Can an off-grid solar system run heavy appliances like water pumps and geysers?",
          answer:
            "Yes, provided the solar array, inverter kVA rating, and battery bank are sized correctly. We engineer heavy-duty off-grid systems from 3 kW to 50 kW capable of starting inductive motor loads effortlessly.",
        },
        {
          question: "Can an off-grid system be integrated with a backup diesel generator?",
          answer:
            "Yes. Our smart off-grid inverters include automated generator start (AGS) dry contacts that can trigger your existing DG set automatically only when batteries drop below a preset threshold during deep winter storms.",
        },
        {
          question: "Does an off-grid solar system require UPCL net metering permissions?",
          answer:
            "No. Because off-grid systems are physically isolated from the electricity grid and never export power to external lines, they do not require UPCL grid connectivity approvals or net meter installations.",
        },
        {
          question: "What is the warranty on off-grid solar components?",
          answer:
            "Solar panels carry a 25-year performance warranty, lithium batteries carry 5 to 10 year warranties, and off-grid solar inverters come with 2 to 5 year manufacturer warranties.",
        },
      ],
    },
    relatedServices: ['solar-battery', 'hybrid-solar', 'solar-inverter', 'solar-panel-installation'],
  },
  {
    slug: 'hybrid-solar',
    title: 'Hybrid Solar',
    metaTitle: 'Hybrid Solar with Battery Backup in Uttarakhand | UTTsolar',
    metaDescription:
      'Hybrid solar systems combining grid connection and battery backup for Uttarakhand homes facing frequent outages. Net metering plus stored power when the grid fails.',
    h1: 'Hybrid Solar Systems in Uttarakhand',
    intro:
      'Hybrid solar gives Uttarakhand consumers the best of both worlds — grid-tied savings through net metering plus battery backup when UPCL supply drops. This suits areas with intermittent outages in outer Dehradun, rural Nainital and hill towns where grid reliability varies by season. UTTsolar configures hybrid inverters, battery sizing and export limits per UPCL requirements while ensuring backup for essential loads during outages.',
    sections: {
      benefits: [
        {
          title: 'Backup during grid failures',
          description:
            'Stored energy powers essential circuits — lights, fans, router, refrigeration — when the grid goes down, unlike standard on-grid systems.',
        },
        {
          title: 'Net metering when grid is available',
          description:
            'When connected, hybrid systems export surplus and offset bills like on-grid installations subject to DISCOM export limits.',
        },
        {
          title: 'Flexible load management',
          description:
            'Prioritise critical loads on backup circuits while non-essential loads remain grid-only during outages.',
        },
        {
          title: 'Growing choice for hill homes',
          description:
            'Increasingly popular for Dehradun villas, Mussoorie cottages and Haldwani homes wanting both savings and reliability.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Outage and load assessment',
          description:
            'Understand your outage frequency, duration and which appliances must run on backup to size the battery correctly.',
        },
        {
          step: 2,
          title: 'Hybrid system design',
          description:
            'Select hybrid inverter, battery capacity, export configuration and wiring for backup circuits.',
        },
        {
          step: 3,
          title: 'Install and configure',
          description:
            'Installation with proper changeover logic, earthing and UPCL-compliant export settings.',
        },
        {
          step: 4,
          title: 'Commission and explain modes',
          description:
            'Walkthrough of grid mode, backup mode, battery charging priorities and monitoring.',
        },
      ],
      faqs: [
        {
          question: "What is a hybrid solar system and how does it work?",
          answer:
            "A hybrid solar system combines the best of on-grid and off-grid technologies. It connects to the UPCL grid for net metering billing credits while also maintaining a battery storage bank for instant, seamless power backup during grid blackouts.",
        },
        {
          question: "How fast is the power changeover during a power cut in a hybrid system?",
          answer:
            "Our smart hybrid inverters switch from grid mode to battery backup mode in less than 10 to 20 milliseconds (UPS grade), preventing computers, Wi-Fi routers, medical devices, and TVs from restarting or turning off.",
        },
        {
          question: "Can a hybrid solar system qualify for PM Surya Ghar subsidy?",
          answer:
            "Yes. Grid-connected hybrid solar systems with approved bidirectional grid tie capabilities qualify for the PM Surya Ghar subsidy up to ₹85,800 on the grid solar component for eligible residential consumers in Uttarakhand.",
        },
        {
          question: "Can I program my hybrid system to use battery power during peak tariff hours?",
          answer:
            "Yes. Our intelligent hybrid inverters feature programmable Time-of-Use (TOU) energy management, allowing you to prioritize self-consumption during expensive peak tariff hours and recharge batteries during off-peak solar hours.",
        },
        {
          question: "What battery technologies are compatible with hybrid solar inverters?",
          answer:
            "UTTsolar hybrid systems support high-voltage and low-voltage Lithium Iron Phosphate (LiFePO4) battery modules with smart CAN/RS485 BMS communication, as well as heavy-duty solar tubular gel batteries.",
        },
        {
          question: "Why is hybrid solar increasingly popular for luxury residences and hotels in Uttarakhand?",
          answer:
            "Hybrid solar delivers zero-bill electricity benefits through net metering while eliminating the noise, diesel fumes, high fuel costs, and frequent maintenance associated with traditional diesel generators.",
        },
        {
          question: "Can I add batteries to my existing on-grid solar system to make it hybrid?",
          answer:
            "Yes! We can retrofit existing on-grid plants using AC-coupled battery storage systems or by replacing your standard string inverter with a multi-mode hybrid inverter.",
        },
        {
          question: "What remote management features are available for hybrid solar plants?",
          answer:
            "You get full smartphone app monitoring showing real-time solar generation, battery state of charge (SOC percentage), home consumption load, grid import/export power, and customizable battery reserve settings.",
        },
      ],
    },
    relatedServices: ['on-grid-solar', 'solar-battery', 'off-grid-solar', 'solar-inverter'],
  },
  {
    slug: 'rooftop-solar',
    title: 'Rooftop Solar',
    metaTitle: 'Rooftop Solar Installation Across Uttarakhand | UTTsolar',
    metaDescription:
      'Professional rooftop solar mounting and installation for homes, shops and industries across all Uttarakhand districts. RCC, metal sheet and sloped roof solutions.',
    h1: 'Rooftop Solar Installation in Uttarakhand',
    intro:
      'Rooftop solar transforms unused terrace space into a power plant — whether on a Dehradun bungalow, a Haldwani shop building or a Rudrapur factory shed. UTTsolar handles every rooftop type found in Uttarakhand: flat RCC terraces, corrugated metal industrial sheds, sloped tile roofs in hill towns and elevated structures in landslide-prone areas requiring reinforced mounting. Our installations follow wind-load considerations for exposed hill sites and corrosion-resistant hardware for Terai humidity.',
    sections: {
      benefits: [
        {
          title: 'No additional land required',
          description:
            'Use existing roof space instead of allocating ground area — especially valuable in dense urban areas like Haridwar and Haldwani.',
        },
        {
          title: 'Roof-type specific mounting',
          description:
            'Ballasted, penetrative and clamp-based systems chosen per roof material, waterproofing and structural assessment.',
        },
        {
          title: 'District-wide coverage',
          description:
            'Installation teams serving all 13 Uttarakhand districts from Terai to upper Garhwal and Kumaon.',
        },
        {
          title: 'Integrated service',
          description:
            'Single vendor for survey, mounting, electrical work, net metering support and maintenance.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Roof inspection',
          description:
            'Structural check, orientation, tilt optimisation and shading analysis including nearby trees and adjacent buildings.',
        },
        {
          step: 2,
          title: 'Mounting design',
          description:
            'Select racking system, layout for maximum generation and safe maintenance access on your specific roof type.',
        },
        {
          step: 3,
          title: 'Professional installation',
          description:
            'Panel mounting, DC/AC wiring in UV-resistant conduits, inverter placement and earthing per standards.',
        },
        {
          step: 4,
          title: 'Waterproofing verification',
          description:
            'Penetrative mounts sealed properly. Final inspection before DISCOM application and commissioning.',
        },
      ],
      faqs: [
        {
          question: "What types of rooftops are suitable for solar installation in Uttarakhand?",
          answer:
            "Solar panels can be installed on flat concrete (RCC) terraces, pitched tin/GI sheet roofs, metal industrial sheds, clay tile roofs, and elevated rooftop structures across all urban and hill terrains in Uttarakhand.",
        },
        {
          question: "Will installing rooftop solar damage my roof or cause water leakage?",
          answer:
            "No. On flat RCC terraces, we utilize non-penetrative precast concrete ballast blocks or anchor fasteners treated with industrial UV-resistant chemical waterproofing sealants to ensure 100% leak-proof integrity.",
        },
        {
          question: "Can I still use my rooftop for walking, gardening, or recreation after solar installation?",
          answer:
            "Yes! UTTsolar specializes in elevated pergola mounting structures (raised 7 to 9 feet above roof level), transforming your rooftop into a shaded, usable terrace canopy while generating maximum clean electricity.",
        },
        {
          question: "How do you engineer rooftop solar structures for hill wind and snow loads?",
          answer:
            "Our mounting structures are fabricated from high-tensile hot-dip galvanized steel (80+ micron zinc coating) or anodized aluminium (6063-T6), structurally calculated to withstand wind gusts up to 150 km/h and regional hill snow loads.",
        },
        {
          question: "What is the optimal tilt angle and orientation for solar panels in Uttarakhand?",
          answer:
            "In Uttarakhand (latitude ~29°N to 31°N), solar panels are oriented true south at a tilt angle of 28° to 30° to maximize year-round solar energy capture across summer and winter seasons.",
        },
        {
          question: "How do you prevent shading from water tanks, parapet walls, or nearby trees?",
          answer:
            "During our free on-site survey, our solar engineers conduct 3D shadow trajectory mapping using sun-path analysis tools to position strings away from shadows and maximize daily kilowatt-hour yield.",
        },
        {
          question: "What is the load-bearing capacity required for rooftop solar panels?",
          answer:
            "Modern solar panel arrays exert a minimal distributed load of only 12 to 15 kg per square meter, which is easily supported by standard RCC residential and commercial building roof slabs.",
        },
        {
          question: "How long does a rooftop solar installation take to complete?",
          answer:
            "Physical rooftop mounting and electrical wiring for a typical residential system (3 kW–10 kW) are completed in just 1 to 2 days with zero disruption to your household routine.",
        },
      ],
    },
    relatedServices: ['solar-panel-installation', 'residential-solar', 'commercial-solar', 'solar-maintenance'],
  },
  {
    slug: 'solar-panel-installation',
    title: 'Solar Panel Installation',
    metaTitle: 'Solar Panel Installation Services in Uttarakhand | UTTsolar',
    metaDescription:
      'Expert solar panel installation with ALMM-compliant modules across Uttarakhand. Quality mounting, wiring and commissioning for residential and commercial projects.',
    h1: 'Solar Panel Installation in Uttarakhand',
    intro:
      'Quality installation determines how much of your panel\'s rated output you actually capture over 25 years. UTTsolar installs ALMM-listed solar modules with correct tilt, spacing, wiring and protection for Uttarakhand\'s mix of climates — hot Terai summers, monsoon moisture and winter frost in the hills. Whether you supply your own equipment or choose our complete system package, our certified technicians deliver installations meeting MNRE and DISCOM standards.',
    sections: {
      benefits: [
        {
          title: 'ALMM-compliant modules',
          description:
            'We use MNRE-approved module manufacturers required for subsidy-eligible installations in Uttarakhand.',
        },
        {
          title: 'Correct tilt and orientation',
          description:
            'Panels angled for optimal year-round generation at your latitude, accounting for local shading patterns.',
        },
        {
          title: 'Safe DC and AC wiring',
          description:
            'Proper cable sizing, MC4 connections, conduit protection and labelling for safety and maintainability.',
        },
        {
          title: 'Installation-only option',
          description:
            'Already purchased panels? We provide professional installation and commissioning services.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Equipment verification',
          description:
            'Confirm module specifications, inverter compatibility and mounting hardware before installation day.',
        },
        {
          step: 2,
          title: 'Mounting and panel fix',
          description:
            'Install racking, place panels with correct spacing for airflow, torque connections to manufacturer specs.',
        },
        {
          step: 3,
          title: 'Electrical termination',
          description:
            'String wiring, combiner boxes where needed, inverter connection and earthing system completion.',
        },
        {
          step: 4,
          title: 'Testing and documentation',
          description:
            'IV curve checks, insulation testing, as-built diagrams and warranty registration support.',
        },
      ],
      faqs: [
        {
          question: "What is included in UTTsolar's turnkey solar panel installation service?",
          answer:
            "Our turnkey service includes free roof shading assessment, engineering design, Tier-1 solar panels, high-efficiency inverter, mounting hardware, DC/AC distribution boxes, earthing electrodes, lightning arrestors, net meter paperwork, and commissioning.",
        },
        {
          question: "What safety and electrical protection standards are followed during installation?",
          answer:
            "We strictly adhere to IS/IEC standards including dual dedicated chemical earthing for AC/DC circuits, Class-I/II Surge Protection Devices (SPDs), copper lightning arrestors, and UV-resistant double-insulated DC solar cables.",
        },
        {
          question: "What solar panel technology does UTTsolar install (Mono PERC vs TOPCon)?",
          answer:
            "We install the latest N-Type TOPCon and Mono PERC bifacial solar panels from leading Tier-1 manufacturers, offering ultra-high cell efficiencies (>22%), superior low-light performance, and lower temperature coefficients.",
        },
        {
          question: "How do bifacial solar panels provide extra generation on terraces?",
          answer:
            "Bifacial solar panels feature dual-sided glass that absorbs direct sunlight from the front and reflected ambient light (albedo) from the roof surface on the back, boosting overall energy generation by 10% to 25%.",
        },
        {
          question: "How long does the entire process take from booking to net meter commissioning?",
          answer:
            "The complete process typically takes 3 to 4 weeks: site survey (Day 1–2), subsidy portal filing (Day 3–5), physical installation (Day 7–10), and UPCL division inspection & net meter installation (Week 3–4).",
        },
        {
          question: "Do your installers have certified electrical expertise in hill terrain?",
          answer:
            "Yes. Our installation teams consist of certified solar engineers and licensed electricians trained in mountain safety, high-wind structural anchoring, and DISCOM grid synchronization protocols.",
        },
        {
          question: "What post-installation testing is conducted before handing over the system?",
          answer:
            "We perform open-circuit voltage (Voc) testing, short-circuit current (Isc) checks, insulation resistance megger testing, earth fault loop impedance measurement, and thermal scanning before handing over the plant.",
        },
        {
          question: "How do I book an installation or request a site visit?",
          answer:
            "You can book a free site survey by submitting our online form, calling +91 78300 60725, or connecting with our engineering team via WhatsApp.",
        },
      ],
    },
    relatedServices: ['rooftop-solar', 'solar-inverter', 'on-grid-solar', 'solar-maintenance'],
  },
  {
    slug: 'solar-inverter',
    title: 'Solar Inverter',
    metaTitle: 'Solar Inverter Supply and Service in Uttarakhand | UTTsolar',
    metaDescription:
      'Grid-tied, hybrid and off-grid solar inverter supply, installation and repair across Uttarakhand. String and microinverter solutions for homes and businesses.',
    h1: 'Solar Inverter Solutions in Uttarakhand',
    intro:
      'The inverter is the heart of your solar system — converting DC panel output to usable AC power and managing grid interaction. UTTsolar supplies and installs string inverters, hybrid inverters and off-grid units from reputable brands suited to Uttarakhand\'s voltage conditions and UPCL grid parameters. We also diagnose inverter faults, handle warranty replacements and upgrade aging units that reduce system performance.',
    sections: {
      benefits: [
        {
          title: 'Right inverter for your system type',
          description:
            'On-grid, hybrid and off-grid inverters matched to your panel configuration, phase requirement and backup needs.',
        },
        {
          title: 'Single and three-phase options',
          description:
            'Residential single-phase and commercial/industrial three-phase inverters for varied UPCL connections.',
        },
        {
          title: 'Monitoring capability',
          description:
            'Wi-Fi and app-based monitoring on supported models so you track generation from your phone.',
        },
        {
          title: 'Repair and replacement service',
          description:
            'Fast diagnosis and repair for inverter failures — common pain point in Uttarakhand\'s summer peak load season.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'System assessment',
          description:
            'Review existing or planned panel array, connection type and load to specify correct inverter capacity and model.',
        },
        {
          step: 2,
          title: 'Supply and install',
          description:
            'Procurement of genuine inverter, mounting in ventilated location, AC/DC connections and configuration.',
        },
        {
          step: 3,
          title: 'Grid parameter setup',
          description:
            'Configure anti-islanding, export limits and voltage ride-through per UPCL requirements for grid-tied units.',
        },
        {
          step: 4,
          title: 'Handover and monitoring setup',
          description:
            'App pairing, customer training and warranty documentation for your inverter.',
        },
      ],
      faqs: [
        {
          question: "What types of solar inverters does UTTsolar supply and install?",
          answer:
            "We install on-grid string inverters, microinverters, smart hybrid inverters, and off-grid bidirectional inverters from top global and Indian Tier-1 manufacturers with peak conversion efficiencies exceeding 98.5%.",
        },
        {
          question: "What is the role of MPPT (Maximum Power Point Tracking) in a solar inverter?",
          answer:
            "MPPT is an advanced electronic algorithm that continuously tracks and adjusts electrical operating points to extract the maximum possible wattage from your solar panels under varying sunlight and temperature conditions.",
        },
        {
          question: "What is the difference between a string inverter and microinverters?",
          answer:
            "A string inverter manages an entire series string of solar panels together, making it highly cost-effective. Microinverters attach to individual panels, offering panel-level MPPT optimization and independent performance in partially shaded roofs.",
        },
        {
          question: "Are your solar inverters weatherproof for outdoor installation in Uttarakhand?",
          answer:
            "Yes. All our solar inverters come with IP65 or IP66 weatherproof aluminium die-cast enclosures with natural convection cooling, fully rated to withstand heavy mountain rainfall, dust, and humidity.",
        },
        {
          question: "How does real-time Wi-Fi/GPRS inverter monitoring work?",
          answer:
            "Each inverter is equipped with a wireless data logger that transmits generation data to a secure cloud platform, allowing you to view live wattage, daily units, lifetime savings, and receive automated diagnostic alerts on your phone.",
        },
        {
          question: "What is the standard warranty on solar inverters?",
          answer:
            "On-grid and hybrid inverters come with a standard 5 to 10-year manufacturer replacement warranty, with options to extend warranty coverage up to 15 or 20 years.",
        },
        {
          question: "What built-in electrical safety protections are included in modern inverters?",
          answer:
            "Our inverters include DC reverse polarity protection, AC short-circuit protection, anti-islanding detection, ground fault monitoring, insulation resistance detection, and integrated Type-II DC & AC surge arrestors.",
        },
        {
          question: "Can I upgrade my solar inverter capacity in the future?",
          answer:
            "Yes. If you anticipate adding more panels later, we can install a dual-MPPT higher-capacity inverter upfront that can accommodate additional solar strings as your energy demands grow.",
        },
      ],
    },
    relatedServices: ['solar-repair', 'hybrid-solar', 'on-grid-solar', 'solar-panel-installation'],
  },
  {
    slug: 'solar-battery',
    title: 'Solar Battery',
    metaTitle: 'Solar Battery Storage Solutions in Uttarakhand | UTTsolar',
    metaDescription:
      'Solar battery supply and installation for hybrid and off-grid systems in Uttarakhand. Tubular, lithium and backup battery solutions for homes and businesses.',
    h1: 'Solar Battery Storage in Uttarakhand',
    intro:
      'Battery storage transforms solar from a daytime-only resource into round-the-clock reliability. UTTsolar supplies and installs batteries for hybrid backup systems in outage-prone areas and standalone off-grid plants in remote Uttarakhand locations. We help you choose between tubular lead-acid and lithium options based on budget, maintenance tolerance, expected cycle life and the loads you need to support during grid failures or overnight operation.',
    sections: {
      benefits: [
        {
          title: 'Backup power when grid fails',
          description:
            'Keep essential appliances running during UPCL outages — increasingly important during monsoon and winter storm disruptions.',
        },
        {
          title: 'Off-grid energy storage',
          description:
            'Store daytime solar for evening and night use at remote properties without grid access in upper hill districts.',
        },
        {
          title: 'Upgrade path for existing solar',
          description:
            'Add batteries to existing on-grid systems through hybrid inverter retrofit where technically feasible.',
        },
        {
          title: 'Proper battery room design',
          description:
            'Ventilation, temperature management and safety spacing for battery installations in homes and commercial sites.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Backup requirement analysis',
          description:
            'Define critical loads, desired backup hours and daily cycle expectations to size the battery bank.',
        },
        {
          step: 2,
          title: 'Battery and inverter selection',
          description:
            'Match battery chemistry, capacity and hybrid inverter compatibility for your system type.',
        },
        {
          step: 3,
          title: 'Installation',
          description:
            'Battery rack setup, cabling, fusing, ventilation and integration with solar and grid circuits.',
        },
        {
          step: 4,
          title: 'Maintenance guidance',
          description:
            'Instructions for water topping (lead-acid), monitoring state of charge and expected replacement timeline.',
        },
      ],
      faqs: [
        {
          question: "What types of solar batteries are available for storage systems?",
          answer:
            "We supply modern Lithium Iron Phosphate (LiFePO4) battery packs, modular rack-mounted high-voltage lithium storage, and heavy-duty deep-cycle solar tubular gel batteries tailored to residential, commercial, and off-grid requirements.",
        },
        {
          question: "Why are Lithium (LiFePO4) solar batteries superior to Lead-Acid/Tubular batteries?",
          answer:
            "Lithium batteries offer 3x longer lifespan (4,000+ cycles vs 1,200 cycles), 90% Depth of Discharge (DOD vs 50% for tubular), 95% round-trip efficiency, zero maintenance, compact wall-mountable design, and 3x faster charging.",
        },
        {
          question: "How do I calculate the battery capacity required for my home or business?",
          answer:
            "Battery sizing depends on the total wattage of essential appliances you want to run and the required backup hours. A 5 kWh lithium battery can run lights, fans, Wi-Fi, TV, refrigerator, and a laptop for 6 to 10+ hours during an outage.",
        },
        {
          question: "How do lithium solar batteries perform in cold mountain winter temperatures?",
          answer:
            "Our premium LiFePO4 batteries feature intelligent Battery Management Systems (BMS) with built-in thermal protection, operating reliably in temperatures ranging from -10°C to 55°C across Uttarakhand hill stations.",
        },
        {
          question: "What is the expected lifespan and warranty on solar batteries?",
          answer:
            "Lithium LiFePO4 batteries deliver an expected lifespan of 10 to 12+ years and come with a 5 to 10-year manufacturer warranty. Solar tubular batteries typically carry 3 to 5-year warranties.",
        },
        {
          question: "Is battery storage mandatory for installing solar panels under PM Surya Ghar?",
          answer:
            "No. PM Surya Ghar is designed for on-grid systems without batteries to keep upfront costs low. However, you can opt for a hybrid setup with battery storage if your locality experiences frequent power blackouts.",
        },
        {
          question: "What safety features are integrated into modern solar lithium battery banks?",
          answer:
            "Our lithium storage units feature multi-level BMS protection against over-voltage, under-voltage, over-current, short circuits, thermal runaway, cell balancing, and IP55 fire-retardant metal enclosures.",
        },
        {
          question: "Can I expand my battery storage capacity in the future?",
          answer:
            "Yes. Our modular lithium battery systems allow plug-and-play parallel expansion, enabling you to add additional 2.5 kWh or 5 kWh battery modules as your power storage requirements increase.",
        },
      ],
    },
    relatedServices: ['hybrid-solar', 'off-grid-solar', 'solar-inverter', 'solar-repair'],
  },
  {
    slug: 'solar-water-heater',
    title: 'Solar Water Heater',
    metaTitle: 'Solar Water Heater Installation in Uttarakhand | UTTsolar',
    metaDescription:
      'ETC and FPC solar water heaters for homes, hotels and institutions across Uttarakhand. Reduce geyser electricity use with reliable solar hot water.',
    h1: 'Solar Water Heater Installation in Uttarakhand',
    intro:
      'Solar water heaters provide hot water independently of your rooftop PV system — using thermal collectors instead of photovoltaic panels. In Uttarakhand\'s cold hill winters and busy tourist seasons, reliable hot water matters for homes, hotels in Mussoorie and Nainital, ashrams in Rishikesh and institutional kitchens. UTTsolar installs ETC (Evacuated Tube Collector) and FPC (Flat Plate Collector) systems sized to your daily hot water demand and available terrace space.',
    sections: {
      benefits: [
        {
          title: 'Cut geyser electricity bills',
          description:
            'Solar thermal directly heats water, reducing electric geyser usage that spikes bills in winter months across hill districts.',
        },
        {
          title: 'Works alongside rooftop PV',
          description:
            'Water heating and electricity generation are separate systems — you can have both on the same property for maximum savings.',
        },
        {
          title: 'Low maintenance thermal technology',
          description:
            'Fewer electronic components than PV systems. Periodic tank and collector maintenance keeps performance steady.',
        },
        {
          title: 'Ideal for hospitality sector',
          description:
            'Hotels, guesthouses and dharamshalas in tourist corridors benefit from predictable hot water supply for guests.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Hot water demand calculation',
          description:
            'Assess number of users, bathrooms, kitchen use and peak demand to size collector area and tank capacity.',
        },
        {
          step: 2,
          title: 'System selection',
          description:
            'ETC recommended for colder hill areas due to better heat retention. FPC suitable for lower altitude Terai locations.',
        },
        {
          step: 3,
          title: 'Installation',
          description:
            'Collector mounting, insulated piping, tank placement and backup electric element connection if requested.',
        },
        {
          step: 4,
          title: 'Testing and user guidance',
          description:
            'Verify water temperature, flow rate and explain seasonal performance expectations.',
        },
      ],
      faqs: [
        {
          question: "How does a solar water heater work in Uttarakhand hill climates?",
          answer:
            "Solar water heaters collect thermal energy from sunlight through high-efficiency vacuum glass tubes (ETC) or flat copper plates (FPC), transferring heat into an insulated storage tank that keeps water hot for up to 48 hours.",
        },
        {
          question: "What is the difference between ETC (Evacuated Tube) and FPC (Flat Plate) collectors?",
          answer:
            "ETC systems use double-walled vacuum glass tubes that provide superior heat retention in cold hill regions and perform exceptionally well with hard water. FPC systems use metallic copper collectors ideal for high-pressure pressurised plumbing.",
        },
        {
          question: "Will a solar water heater deliver hot water during freezing winters and cloudy days?",
          answer:
            "Yes! Vacuum glass tubes absorb diffuse solar radiation even in sub-zero ambient temperatures. All our systems also include an auxiliary electrical backup heating element for prolonged monsoon or heavy snowfall periods.",
        },
        {
          question: "What system capacity is recommended for a residential family or hotel?",
          answer:
            "For a family of 3–4 members, a 100 to 150 LPD (litres per day) system is ideal. For 5–7 members, a 200–250 LPD system is recommended. For hotels and homestays, we design manifold commercial systems from 500 LPD to 5,000+ LPD.",
        },
        {
          question: "How much electricity can a solar water heater save each month?",
          answer:
            "Replacing electric geysers (which consume 2,000–3,000W per hour) with a 100 LPD solar water heater saves approximately 1,200 to 1,500 units of electricity annually, paying for itself in under 2 years.",
        },
        {
          question: "Can a solar water heater be connected to pressurised booster pump plumbing?",
          answer:
            "Yes. We supply pressurized solar water heating systems engineered with heavy-gauge inner tanks (SUS316L / Enamelled Steel) rated to handle water pressures up to 4–6 bar from overhead booster pumps.",
        },
        {
          question: "What maintenance does a solar water heater require?",
          answer:
            "Solar water heaters require minimal maintenance: periodic cleaning of external glass tubes to remove dust, and sacrificial magnesium anode rod replacement every 2–3 years to prevent inner tank corrosion in hard water zones.",
        },
        {
          question: "What is the warranty and lifespan of UTTsolar water heating systems?",
          answer:
            "Our solar water heaters come with a 5-year warranty on storage tanks and collectors and deliver a reliable operational lifespan of 15 to 20+ years.",
        },
      ],
    },
    relatedServices: ['residential-solar', 'commercial-solar', 'solar-maintenance', 'rooftop-solar'],
  },
  {
    slug: 'solar-street-light',
    title: 'Solar Street Light',
    metaTitle: 'Solar Street Light Installation in Uttarakhand | UTTsolar',
    metaDescription:
      'Standalone solar street lights for roads, campuses, parking areas and villages across Uttarakhand. No trenching or grid connection required.',
    h1: 'Solar Street Light Solutions in Uttarakhand',
    intro:
      'Solar street lights provide autonomous illumination without grid trenching — ideal for village roads in remote districts, campus pathways, parking lots, gated communities and industrial premises across Uttarakhand. UTTsolar supplies integrated all-in-one and split-type solar street lights with appropriately sized panels, lithium batteries and LED luminaires for the required lighting hours and local sun availability.',
    sections: {
      benefits: [
        {
          title: 'No grid connection needed',
          description:
            'Install lighting where running electrical cables is expensive or impractical — common in rural Panchayat roads and remote hill settlements.',
        },
        {
          title: 'Zero electricity bills for lighting',
          description:
            'Self-contained units powered by integrated solar panels and batteries with automatic dusk-to-dawn operation.',
        },
        {
          title: 'Quick deployment',
          description:
            'Faster installation than conventional street lighting requiring trenching, cabling and grid connection approvals.',
        },
        {
          title: 'Scalable for institutions',
          description:
            'Schools, ashrams, resorts and industrial campuses can deploy multiple units with consistent specifications.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Lighting requirement survey',
          description:
            'Determine pole height, lumen output, operating hours and spacing for the target area.',
        },
        {
          step: 2,
          title: 'Product specification',
          description:
            'Select wattage, battery backup nights and panel size based on location sun hours and required illumination level.',
        },
        {
          step: 3,
          title: 'Installation',
          description:
            'Foundation, pole erection, panel and luminaire mounting, angle adjustment and controller programming.',
        },
        {
          step: 4,
          title: 'Commissioning',
          description:
            'Verify auto on/off timing, brightness levels and document maintenance schedule.',
        },
      ],
      faqs: [
        {
          question: "What is an all-in-one integrated solar street light?",
          answer:
            "An All-in-One solar street light combines the solar panel, high-lumen LED luminaire, Lithium LiFePO4 battery, and smart MPPT motion sensor into a single compact, weather-sealed aluminium housing mounted on a pole.",
        },
        {
          question: "How do solar street lights operate automatically from dusk to dawn?",
          answer:
            "Solar street lights utilize the solar panel voltage as an optical daylight sensor. At sunset, the light switches on automatically at dusk, dims to power-saving mode when no motion is detected, brightens upon motion, and turns off at sunrise.",
        },
        {
          question: "Where are solar street lights most commonly installed in Uttarakhand?",
          answer:
            "They are widely deployed across residential colonies, gated societies, hotel resorts, village panchayat pathways, commercial parking lots, temple complexes, school campuses, and rural state highway corridors.",
        },
        {
          question: "How many days of backup do solar street lights provide during rainy seasons?",
          answer:
            "Our solar street lights are engineered with smart dimming algorithms and high-capacity LiFePO4 batteries that deliver 2 to 4 consecutive rainy/overcast nights of continuous illumination without grid power.",
        },
        {
          question: "What wattages and lumen outputs are available for outdoor lighting?",
          answer:
            "We supply high-efficiency LED luminaires ranging from 15W, 20W, 30W, 40W to 60W and 90W with luminous efficacies exceeding 160 to 180 lumens per watt using premium Bridgelux/Philips LED chips.",
        },
        {
          question: "What pole height and spacing are recommended for street lighting?",
          answer:
            "For 15W–25W lights, a 4 to 5 meter pole with 10–12 meter spacing is recommended. For 30W–60W commercial street lights, a 6 to 8 meter hot-dip galvanized octagonal pole with 15–20 meter spacing is optimal.",
        },
        {
          question: "Are solar street lights resistant to mountain storms, lightning, and water ingress?",
          answer:
            "Yes. All our luminaires feature IP65/IP66 waterproof enclosures, IK08 impact ratings, 4kV/10kV surge protection, and rust-proof die-cast aluminium construction suited for high-altitude hill weather.",
        },
        {
          question: "What warranty is provided on solar street lights?",
          answer:
            "UTTsolar provides a comprehensive 3 to 5-year replacement warranty covering LED chips, solar panel, battery, and controller components.",
        },
      ],
    },
    relatedServices: ['off-grid-solar', 'solar-battery', 'solar-maintenance', 'commercial-solar'],
  },
  {
    slug: 'solar-maintenance',
    title: 'Solar Maintenance',
    metaTitle: 'Solar Panel Maintenance Services in Uttarakhand | UTTsolar',
    metaDescription:
      'Professional solar panel cleaning, inspection and performance checks across Uttarakhand. Keep your rooftop plant generating at its best year-round.',
    h1: 'Solar Maintenance Services in Uttarakhand',
    intro:
      'A solar plant needs periodic care to maintain generation over its 25-year life. Dust accumulation after dry seasons, bird droppings, pollen in spring and monsoon debris on panels reduce output silently. UTTsolar provides one-time and scheduled maintenance for residential, commercial and industrial installations across Uttarakhand — including panel cleaning, connection checks, inverter health verification and generation performance review.',
    sections: {
      benefits: [
        {
          title: 'Restore lost generation',
          description:
            'Dirty panels can lose significant output. Cleaning restores generation especially before peak summer months in the Terai and Doon Valley.',
        },
        {
          title: 'Early fault detection',
          description:
            'Inspection catches loose connections, corrosion, inverter errors and panel micro-cracks before they cause major downtime.',
        },
        {
          title: 'Extend equipment life',
          description:
            'Regular care protects your investment in modules, inverters and mounting hardware against premature failure.',
        },
        {
          title: 'Works on any installer\'s system',
          description:
            'We maintain plants installed by other companies — you do not need to have bought from UTTsolar originally.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Schedule visit',
          description:
            'Book a maintenance visit at your convenience. Annual visits recommended; twice yearly in dusty or bird-heavy locations.',
        },
        {
          step: 2,
          title: 'Site inspection',
          description:
            'Visual check of panels, mounting, wiring, inverter status and generation meter readings.',
        },
        {
          step: 3,
          title: 'Cleaning and correction',
          description:
            'Safe panel cleaning with appropriate materials, torque check on connections and minor corrective actions.',
        },
        {
          step: 4,
          title: 'Performance report',
          description:
            'Summary of findings, generation comparison and recommendations for any needed repairs.',
        },
      ],
      faqs: [
        {
          question: "How often should solar panels be cleaned in Uttarakhand?",
          answer:
            "In urban and plains areas like Haldwani, Haridwar, and Rudrapur, solar panels should be washed every 10 to 15 days. In hill areas with cleaner air, cleaning once every 3 to 4 weeks is sufficient to maintain optimal generation.",
        },
        {
          question: "How much energy generation is lost due to dirty or dusty solar panels?",
          answer:
            "Dust, bird droppings, pollen, and environmental soot (soiling) can reduce your solar system's energy yield by 10% to 25%. Regular cleaning immediately restores peak power generation.",
        },
        {
          question: "What is included in a professional solar maintenance visit by UTTsolar?",
          answer:
            "A comprehensive maintenance visit includes panel glass cleaning, string Voc/Isc electrical testing, inverter diagnostic log extraction, DC/AC terminal torque tightening, earthing resistance testing, and thermal hotspot scanning.",
        },
        {
          question: "Why should panels not be washed with harsh detergents or during hot sunny afternoons?",
          answer:
            "Cold water on hot glass can cause thermal shock and micro-cracking, while abrasive detergents can degrade anti-reflective coatings. Panels should always be washed in early mornings or evenings with clean soft water.",
        },
        {
          question: "What is thermal imaging (thermography) and why is it important for solar plants?",
          answer:
            "Thermal imaging uses infrared cameras to detect localized hotspots, defective bypass diodes, cracked cells, or loose connections that are invisible to the naked eye before they cause irreversible panel damage or fire hazards.",
        },
        {
          question: "Can UTTsolar maintain solar systems installed by other vendors?",
          answer:
            "Yes! We provide third-party solar audit, performance testing, repair, and annual maintenance contracts (AMC) for any residential, commercial, or institutional solar installation across Uttarakhand.",
        },
        {
          question: "How do you test and maintain the electrical earthing and lightning protection?",
          answer:
            "We test earth pit resistance using digital earth clamp meters (ensuring resistance remains below 5 Ohms), replenish chemical earthing compounds if needed, and verify lightning arrestor continuity.",
        },
        {
          question: "How do I schedule a solar maintenance service with UTTsolar?",
          answer:
            "You can book a maintenance inspection through our website or by contacting our customer helpline at +91 78300 60725 for fast on-site service across any Uttarakhand district.",
        },
      ],
    },
    relatedServices: ['solar-amc', 'solar-repair', 'solar-panel-installation', 'rooftop-solar'],
  },
  {
    slug: 'solar-repair',
    title: 'Solar Repair',
    metaTitle: 'Solar System Repair Services in Uttarakhand | UTTsolar',
    metaDescription:
      'Fast solar repair for inverters, panels, wiring and mounting issues across Uttarakhand. Diagnosis and fix for systems from any installer.',
    h1: 'Solar Repair Services in Uttarakhand',
    intro:
      'When your solar system stops performing — zero generation, inverter errors, tripping breakers or visible panel damage — you need a responsive local repair team. UTTsolar diagnoses and fixes solar systems across Uttarakhand regardless of who originally installed them. Common repairs include inverter replacement, MC4 connector fixes, damaged panel replacement, earthing correction and wiring upgrades for systems that were poorly installed.',
    sections: {
      benefits: [
        {
          title: 'Quick diagnosis',
          description:
            'Experienced technicians identify root cause — inverter vs panel vs wiring — rather than replacing parts unnecessarily.',
        },
        {
          title: 'All brands serviced',
          description:
            'We repair systems using major inverter and panel brands found across Uttarakhand installations.',
        },
        {
          title: 'Warranty claim assistance',
          description:
            'Help navigating manufacturer warranty for defective inverters or modules still under coverage.',
        },
        {
          title: 'Safety-first repairs',
          description:
            'DC solar circuits carry live voltage in daylight. Our team follows safety protocols for all repair work.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Report the issue',
          description:
            'Contact us with symptoms — error codes, generation drop timeline, visible damage. We schedule a diagnostic visit.',
        },
        {
          step: 2,
          title: 'On-site diagnosis',
          description:
            'Test inverter, check strings, inspect connections and review monitoring data to pinpoint failure.',
        },
        {
          step: 3,
          title: 'Repair or replace',
          description:
            'Execute repair with genuine parts or recommend replacement when repair is not cost-effective.',
        },
        {
          step: 4,
          title: 'Verify and document',
          description:
            'Confirm restored generation, update customer on preventive measures and provide repair documentation.',
        },
      ],
      faqs: [
        {
          question: "What are the most common solar system problems that require repair?",
          answer:
            "Common issues include inverter error fault codes, tripped AC/DC circuit breakers, degraded MC4 cable connectors, PID solar module degradation, blown surge protectors (SPDs), or high earthing resistance faults.",
        },
        {
          question: "How quickly can UTTsolar dispatch a repair technician across Uttarakhand?",
          answer:
            "We offer priority breakdown response within 24 to 48 hours across major hubs (Dehradun, Haridwar, Haldwani, Rudrapur) and fast scheduled repair visits to all Garhwal and Kumaon hill districts.",
        },
        {
          question: "What should I do if my solar inverter is displaying a red error light or fault code?",
          answer:
            "Note down the error code displayed on the screen, check if the AC/DC isolator switches are in the ON position, and call our technical support team. Do not attempt to open high-voltage DC combiner boxes yourself.",
        },
        {
          question: "Can damaged, shattered, or hail-impacted solar panels be repaired or replaced?",
          answer:
            "Physically shattered glass panels cannot be repaired and must be replaced to prevent electrical short-circuits. We source exact-matching electrical wattage modules and handle manufacturer warranty claims.",
        },
        {
          question: "How do you troubleshoot low solar energy generation issues?",
          answer:
            "Our technicians utilize specialized DC clamp meters, IV curve tracers, and solar irradiance meters to isolate underperforming strings, identify shading losses, or detect faulty inverter MPPT tracking channels.",
        },
        {
          question: "Do you provide replacement parts for out-of-warranty solar systems?",
          answer:
            "Yes. We stock genuine replacement DC cables, MC4 connectors, string fuses, AC/DC isolator switches, Type-II SPDs, solar inverters, and lithium battery management controllers.",
        },
        {
          question: "How do you fix UPCL net metering communication and generation recording errors?",
          answer:
            "We verify bi-directional meter wiring, check CT/PT polarity, test export-import registers, and liaise directly with your local UPCL distribution sub-division office to resolve billing discrepancies.",
        },
        {
          question: "What warranty is provided on solar repair services and replacement components?",
          answer:
            "All replacement parts carry standard manufacturer warranties (typically 1 to 5 years), and our repair workmanship is backed by a 90-day service guarantee.",
        },
      ],
    },
    relatedServices: ['solar-inverter', 'solar-maintenance', 'solar-amc', 'solar-panel-installation'],
  },
  {
    slug: 'solar-amc',
    title: 'Solar AMC',
    metaTitle: 'Solar AMC Annual Maintenance Contract in Uttarakhand | UTTsolar',
    metaDescription:
      'Solar AMC packages for worry-free maintenance in Uttarakhand. Scheduled cleaning, inspection, inverter checks and priority repair support.',
    h1: 'Solar AMC — Annual Maintenance Contract in Uttarakhand',
    intro:
      'An Annual Maintenance Contract gives you predictable care for your solar investment. UTTsolar AMC packages include scheduled panel cleaning, inverter health checks, connection inspection, generation performance review and priority response for breakdowns. Available for residential rooftops in Dehradun and Haldwani, commercial establishments and industrial plants across Uttarakhand — with plans scaled to system size and complexity.',
    sections: {
      benefits: [
        {
          title: 'Scheduled preventive care',
          description:
            'Pre-planned visits so maintenance happens before generation loss, not after you notice a high electricity bill.',
        },
        {
          title: 'Priority breakdown support',
          description:
            'AMC customers receive preferential scheduling when urgent repairs are needed during peak generation months.',
        },
        {
          title: 'Predictable annual cost',
          description:
            'Fixed AMC fee instead of unexpected repair bills — easier budgeting for homeowners and facility managers.',
        },
        {
          title: 'Performance tracking',
          description:
            'Regular generation comparison helps identify degradation trends early over the system\'s lifetime.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'System assessment',
          description:
            'Review your installation age, size, components and location to recommend appropriate AMC tier.',
        },
        {
          step: 2,
          title: 'Contract agreement',
          description:
            'Clear scope covering visit frequency, included services, parts policy and response time commitments.',
        },
        {
          step: 3,
          title: 'Scheduled visits',
          description:
            'Cleaning, inspection and reporting per contract schedule throughout the year.',
        },
        {
          step: 4,
          title: 'Renewal review',
          description:
            'Annual performance summary and contract renewal with updated scope if system has been expanded.',
        },
      ],
      faqs: [
        {
          question: "What is a Solar Annual Maintenance Contract (AMC)?",
          answer:
            "A Solar AMC is a comprehensive service agreement where UTTsolar takes complete responsibility for the ongoing health, scheduled cleaning, preventative maintenance, safety testing, and maximum power generation of your solar plant.",
        },
        {
          question: "What tiers of Solar AMC packages does UTTsolar offer?",
          answer:
            "We offer Basic AMC (quarterly preventative visits + breakdown support), Comprehensive AMC (bi-monthly cleaning + full electrical audits + parts coverage), and Commercial/Industrial O&M with guaranteed generation SLAs.",
        },
        {
          question: "How many preventative maintenance and cleaning visits are included in an AMC?",
          answer:
            "Standard residential AMC packages include 2 to 4 comprehensive preventative electrical audits and optional monthly panel washing visits depending on your chosen plan tier.",
        },
        {
          question: "Does a Solar AMC guarantee higher energy generation and financial savings?",
          answer:
            "Yes! Regular maintenance, professional cleaning, and rapid fault rectification typically boost annual solar energy output by 15% to 25%, easily delivering savings that outweigh the modest annual contract cost.",
        },
        {
          question: "Are emergency breakdown callouts covered under the AMC contract?",
          answer:
            "Yes. AMC customers receive priority breakdown response within 24 to 48 hours with zero technician inspection fees and discounted rates on any out-of-warranty replacement hardware.",
        },
        {
          question: "What documentation and reports are provided during AMC inspections?",
          answer:
            "After each service visit, you receive a detailed Health & Performance Report documenting DC string voltages, insulation resistance, earth pit Ohms, inverter operational efficiency, and thermal scan findings.",
        },
        {
          question: "Can I enroll a solar plant installed by another company into a UTTsolar AMC?",
          answer:
            "Yes. We conduct a preliminary Solar Plant Health Audit to verify system safety and component integrity, after which your plant can be seamlessly onboarded into our AMC program.",
        },
        {
          question: "How much does a Solar AMC cost in Uttarakhand?",
          answer:
            "AMC pricing starts at nominal annual rates for 1 kW–5 kW residential systems and is customized based on capacity, roof height, and cleaning frequency for large commercial and industrial plants.",
        },
      ],
    },
    relatedServices: ['solar-maintenance', 'solar-repair', 'industrial-solar', 'commercial-solar'],
  },
  {
    slug: 'net-metering',
    title: 'Net Metering',
    metaTitle: 'Net Metering Assistance with UPCL in Uttarakhand | UTTsolar',
    metaDescription:
      'Complete net metering support for UPCL consumers in Uttarakhand. Application, documentation, inspection coordination and bidirectional meter installation guidance.',
    h1: 'Net Metering Assistance in Uttarakhand',
    intro:
      'Net metering is what makes on-grid solar financially viable — allowing your bidirectional meter to record both import and export of electricity. In Uttarakhand, UPCL (Uttarakhand Power Corporation Limited) processes net metering applications for residential and commercial consumers. UTTsolar handles the paperwork, technical documentation, inspection scheduling and follow-up so you do not navigate DISCOM procedures alone after installation.',
    sections: {
      benefits: [
        {
          title: 'End-to-end DISCOM support',
          description:
            'From application submission on UPCL portal to inspection coordination and net meter activation.',
        },
        {
          title: 'Correct technical documentation',
          description:
            'Single line diagrams, equipment specifications and compliance certificates prepared to UPCL requirements.',
        },
        {
          title: 'Reduced processing delays',
          description:
            'Complete applications from the start avoid back-and-forth rejections that extend approval timelines.',
        },
        {
          title: 'Works with new and existing installs',
          description:
            'Net metering assistance for UTTsolar installations and standalone application support for self-installed systems.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Eligibility check',
          description:
            'Verify sanctioned load, connection category, roof ownership and system capacity against UPCL net metering rules.',
        },
        {
          step: 2,
          title: 'Application preparation',
          description:
            'Compile and submit application with required technical documents, ALMM module details and inverter specifications.',
        },
        {
          step: 3,
          title: 'Inspection coordination',
          description:
            'Schedule and accompany UPCL inspection, address any compliance observations promptly.',
        },
        {
          step: 4,
          title: 'Meter change and activation',
          description:
            'Follow up on bidirectional meter installation and confirm net metering activation on your account.',
        },
      ],
      faqs: [
        {
          question: "What is UPCL net metering and how does it work in Uttarakhand?",
          answer:
            "UPCL Net Metering is a state-approved billing mechanism that connects your rooftop solar plant to the Uttarakhand Power Corporation Limited grid using a bi-directional energy meter that records both electricity imported and exported.",
        },
        {
          question: "How does energy banking and billing credit work under UPCL net metering?",
          answer:
            "Surplus units exported during the day are banked in your account. Your monthly electricity bill reflects Net Units = (Imported Units – Exported Units). Excess exported units roll forward across the financial year settlement cycle.",
        },
        {
          question: "What is the step-by-step process for getting a UPCL net meter in Uttarakhand?",
          answer:
            "The process involves: 1) Online application on UPCL USRP Portal, 2) Technical feasibility clearance by UPCL junior engineer, 3) Physical solar plant installation, 4) Work completion report submission, 5) Division testing & bidirectional meter installation.",
        },
        {
          question: "What is the maximum solar capacity I can install under UPCL net metering?",
          answer:
            "Under current Uttarakhand Electricity Regulatory Commission (UERC) regulations, residential consumers can install solar capacity up to 100% of their sanctioned electricity load (subject to local distribution transformer capacity).",
        },
        {
          question: "How long does the UPCL net metering approval process take?",
          answer:
            "From online USRP application submission to physical net meter installation, the typical timeframe is 2 to 4 weeks. UTTsolar handles the entire paperwork and department coordination to eliminate delays.",
        },
        {
          question: "What documents are required for UPCL net meter application?",
          answer:
            "You need your latest UPCL electricity bill (with Service Connection / Account ID), Aadhaar Card, property ownership document, solar single line diagram (SLD), and solar module/inverter test certificates (provided by UTTsolar).",
        },
        {
          question: "Is net metering available for commercial and industrial connections in Uttarakhand?",
          answer:
            "Yes. UPCL provides net metering connectivity for commercial (non-domestic) and industrial HT/LT consumer categories within prescribed voltage and sanctioned load regulations.",
        },
        {
          question: "Does UTTsolar charge extra for handling UPCL net metering approvals?",
          answer:
            "No. Complete UPCL net metering documentation, portal filing, single-line diagram preparation, and division coordination are fully included in our turnkey installation packages.",
        },
      ],
    },
    relatedServices: ['on-grid-solar', 'solar-subsidy-assistance', 'residential-solar', 'commercial-solar'],
  },
  {
    slug: 'solar-subsidy-assistance',
    title: 'Solar Subsidy Assistance',
    metaTitle: 'PM Surya Ghar Subsidy Assistance in Uttarakhand | UTTsolar',
    metaDescription:
      'Expert help with PM Surya Ghar Central Financial Assistance application in Uttarakhand. Higher subsidy rates as a special category state. Free guidance.',
    h1: 'Solar Subsidy Assistance in Uttarakhand',
    intro:
      'Uttarakhand qualifies as a special category state under PM Surya Ghar: Muft Bijli Yojana, offering higher Central Financial Assistance than standard states for eligible residential rooftop systems. Navigating registration on pmsuryaghar.gov.in, DISCOM feasibility approval, vendor empanelment requirements and subsidy disbursement can be confusing. UTTsolar guides homeowners through every step — ensuring your installation meets MNRE specifications so you receive the subsidy you qualify for.',
    sections: {
      benefits: [
        {
          title: 'Higher CFA in Uttarakhand',
          description:
            'Special category state rates provide enhanced Central Financial Assistance on eligible residential capacities compared to standard state rates.',
        },
        {
          title: 'Portal registration support',
          description:
            'Assistance creating and completing your application on the official PM Surya Ghar portal with correct documentation.',
        },
        {
          title: 'ALMM-compliant equipment',
          description:
            'We install MNRE-approved modules and inverters required for subsidy eligibility — non-compliant equipment disqualifies applications.',
        },
        {
          title: 'DISCOM coordination',
          description:
            'Feasibility approval and net metering steps integrated with subsidy timeline so both proceed together efficiently.',
        },
      ],
      process: [
        {
          step: 1,
          title: 'Eligibility consultation',
          description:
            'Confirm your consumer category, system size and subsidy amount under current MNRE guidelines for Uttarakhand.',
        },
        {
          step: 2,
          title: 'Portal registration',
          description:
            'Register on pmsuryaghar.gov.in with correct details and select UTTsolar as your installation vendor.',
        },
        {
          step: 3,
          title: 'Install and inspect',
          description:
            'Complete ALMM-compliant installation. UPCL inspection and net metering approval as required by scheme workflow.',
        },
        {
          step: 4,
          title: 'Subsidy disbursement follow-up',
          description:
            'Track application status through to Central Financial Assistance credit to your bank account upon approval.',
        },
      ],
      faqs: [
        {
          question: "What is the PM Surya Ghar: Muft Bijli Yojana subsidy amount in Uttarakhand?",
          answer:
            "Under the central PM Surya Ghar scheme, Uttarakhand qualifies as a Special Category State with enhanced Central Financial Assistance: ₹33,000 for 1 kW, ₹66,000 for 2 kW, and ₹85,800 for 3 kW or larger residential systems.",
        },
        {
          question: "How is the solar subsidy disbursed to the homeowner?",
          answer:
            "The subsidy is credited directly to the beneficiary's Aadhaar-linked bank account through Direct Benefit Transfer (DBT) within 30 to 45 days after UPCL net meter installation and inspection report verification on the National Portal.",
        },
        {
          question: "Who is eligible to claim the PM Surya Ghar solar subsidy in Uttarakhand?",
          answer:
            "Any Indian citizen residing in Uttarakhand with an active domestic/residential UPCL electricity connection, roof ownership or roof rights, and an Aadhaar-linked bank account is 100% eligible.",
        },
        {
          question: "Are commercial, industrial, or institutional properties eligible for PM Surya Ghar subsidy?",
          answer:
            "No. PM Surya Ghar Central Financial Assistance applies exclusively to individual residential households and Group Housing Societies / RWAs (for common lighting up to 500 kW). Commercial entities benefit from 40% accelerated depreciation instead.",
        },
        {
          question: "What is the official government portal for the PM Surya Ghar scheme?",
          answer:
            "The official portal is pmsuryaghar.gov.in (National Portal for Rooftop Solar). UTTsolar registers your application directly on this portal under the approved vendor directory.",
        },
        {
          question: "What documents do I need to provide UTTsolar to claim the subsidy?",
          answer:
            "Only 3 simple documents: 1) Recent UPCL electricity bill, 2) Aadhaar card copy, and 3) Bank account passbook or cancelled cheque with your name clearly printed.",
        },
        {
          question: "Do I have to pay the full price upfront or just the subsidized amount?",
          answer:
            "Per MNRE guidelines, the consumer pays the project cost to the registered vendor, and the central government deposits the full subsidy amount (up to ₹85,800) directly into your bank account via DBT.",
        },
        {
          question: "Does UTTsolar guarantee subsidy approval assistance across all 13 Uttarakhand districts?",
          answer:
            "Yes! UTTsolar provides 100% end-to-end subsidy filing, division liaison, technical compliance verification, and tracking until the DBT funds are credited to your bank account.",
        },
      ],
    },
    relatedServices: ['net-metering', 'residential-solar', 'on-grid-solar', 'rooftop-solar'],
  },
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
