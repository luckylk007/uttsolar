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
          question: 'How much roof space do I need for home solar in Uttarakhand?',
          answer:
            'Roof requirement depends on system capacity and panel wattage. A typical 3 kW residential system needs roughly 250–300 sq ft of unshaded area. Our site survey confirms exact space based on your roof layout and local sun path.',
        },
        {
          question: 'Can I get PM Surya Ghar subsidy for residential solar in Uttarakhand?',
          answer:
            'Eligible residential consumers can apply on pmsuryaghar.gov.in for Central Financial Assistance. Uttarakhand qualifies as a special category state with higher CFA rates. Final eligibility and disbursement depend on DISCOM verification and approved vendor compliance.',
        },
        {
          question: 'Does residential solar work during monsoon and winter in the hills?',
          answer:
            'Solar panels generate in diffuse light and on cloudy days, though output is lower during heavy monsoon weeks and shorter winter days. Proper system sizing accounts for seasonal variation in Uttarakhand.',
        },
        {
          question: 'Will my home lose power when the grid goes down with on-grid solar?',
          answer:
            'Standard on-grid systems shut off during grid outages for safety unless you add battery backup through a hybrid configuration. We explain both options during consultation based on your outage experience.',
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
          question: 'Is PM Surya Ghar subsidy available for commercial solar in Uttarakhand?',
          answer:
            'PM Surya Ghar Central Financial Assistance applies to residential consumers and registered Group Housing Societies or RWAs under specific guidelines. Commercial entities typically invest without residential CFA but benefit from lower energy costs and applicable tax depreciation.',
        },
        {
          question: 'What size commercial solar system do I need?',
          answer:
            'System size depends on available roof area, daytime load profile and sanctioned load. A site survey with recent bills is the correct starting point rather than a generic capacity recommendation.',
        },
        {
          question: 'Can solar power run my three-phase machinery directly?',
          answer:
            'Grid-tied solar supplements grid supply through the inverter. It does not directly replace three-phase grid power for heavy motor loads without proper engineering. We assess your load mix during design.',
        },
        {
          question: 'How long does commercial net metering take with UPCL?',
          answer:
            'Timelines vary by circle and application completeness. We prepare documentation early and track status with UPCL to reduce delays, though final approval rests with the DISCOM.',
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
          question: 'Can industrial units in SIDCUL Rudrapur install rooftop solar?',
          answer:
            'Yes, subject to building ownership or lease permissions, structural suitability and UPCL sanctioned load. SIDCUL and other industrial estates commonly have large shed roofs suitable for solar. We coordinate with your facility team on approvals.',
        },
        {
          question: 'Is ground-mount solar an option for industrial sites?',
          answer:
            'Where unused land is available within the premises and land use permits allow, ground-mount systems are viable. Rooftop remains preferred when structurally feasible to avoid land allocation.',
        },
        {
          question: 'How does industrial net metering differ from residential?',
          answer:
            'Industrial applications involve higher capacity, three-phase metering, and separate UPCL procedures and inspection requirements. Documentation and timelines differ from domestic net metering.',
        },
        {
          question: 'Do you provide O&M for industrial plants?',
          answer:
            'Yes. We offer solar AMC packages covering cleaning, thermography checks, inverter servicing and performance reporting for industrial installations.',
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
          question: 'What happens to excess solar power with on-grid solar?',
          answer:
            'Excess generation flows to the grid through the net meter. UPCL credits exported units against your consumption according to the applicable net metering settlement rules for your consumer category.',
        },
        {
          question: 'Does on-grid solar work at night?',
          answer:
            'At night you draw power from the grid as usual. Solar only generates during daylight hours. On-grid systems do not store energy without added batteries.',
        },
        {
          question: 'Who handles UPCL net metering paperwork?',
          answer:
            'UTTsolar assists with application preparation, technical documents and follow-up with UPCL. Final approval and meter installation are completed by the DISCOM.',
        },
        {
          question: 'Can I upgrade on-grid to hybrid later?',
          answer:
            'In many cases yes, by adding compatible batteries and a hybrid inverter or AC-coupled storage. We assess your existing system during a upgrade consultation.',
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
          question: 'Is off-grid solar eligible for PM Surya Ghar subsidy?',
          answer:
            'PM Surya Ghar Central Financial Assistance applies to grid-connected rooftop systems under current MNRE guidelines. Off-grid standalone systems typically do not qualify for residential CFA. We clarify eligibility during consultation.',
        },
        {
          question: 'How many days of backup do I need in the hills?',
          answer:
            'We typically design for one to two days of autonomy based on your critical loads and local weather patterns. Larger battery banks increase cost — we balance backup needs with budget during design.',
        },
        {
          question: 'Can off-grid solar run air conditioning?',
          answer:
            'Running AC off-grid requires substantial panel and battery capacity. It is feasible but significantly increases system cost. We provide honest sizing recommendations based on your priorities.',
        },
        {
          question: 'What battery type do you recommend for Uttarakhand?',
          answer:
            'We specify batteries suited to your load profile and ambient temperature range. Options include tubular lead-acid and lithium systems depending on budget, maintenance preference and expected cycle life.',
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
          question: 'Is hybrid solar more expensive than on-grid?',
          answer:
            'Yes, because batteries and hybrid inverters add cost. The premium is justified when backup power during outages has real value for your household or business.',
        },
        {
          question: 'Can hybrid systems get PM Surya Ghar subsidy?',
          answer:
            'Grid-connected rooftop systems including hybrid configurations may qualify for residential CFA when meeting MNRE and DISCOM requirements. Battery components may have separate eligibility rules — we guide you through current guidelines.',
        },
        {
          question: 'How long will batteries power my home during an outage?',
          answer:
            'Backup duration depends on battery capacity and which loads you run. A properly sized system can cover essential loads for several hours to overnight. We calculate this during design based on your priorities.',
        },
        {
          question: 'Does UPCL allow hybrid export to the grid?',
          answer:
            'Export rules apply as with on-grid systems. Hybrid inverters must be configured within sanctioned load and current UPCL net metering guidelines. We ensure compliance during installation.',
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
          question: 'Can solar be installed on sloped hill roofs?',
          answer:
            'Yes, with appropriate mounting rails and structural anchors. Sloped roofs in Mussoorie, Nainital and Almora require careful load assessment and corrosion-resistant hardware due to higher rainfall.',
        },
        {
          question: 'Will rooftop solar damage my waterproofing?',
          answer:
            'Proper installation with sealed penetrations and experienced mounting protects your roof. We assess existing waterproofing condition during survey and recommend remedial work if needed before mounting.',
        },
        {
          question: 'Is my roof strong enough for solar panels?',
          answer:
            'A structural assessment confirms load capacity. Most RCC roofs handle standard arrays. Older or lightweight metal sheds may need reinforcement — we identify this during inspection.',
        },
        {
          question: 'How often should rooftop panels be cleaned in Uttarakhand?',
          answer:
            'Dust after dry seasons and pollen in spring can reduce output. Periodic cleaning — especially before peak summer — helps maintain generation. We offer cleaning as part of AMC packages.',
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
          question: 'Do you install customer-supplied solar panels?',
          answer:
            'Yes, we offer installation-only services when your equipment meets quality and compatibility standards. We verify specifications before accepting installation-only projects.',
        },
        {
          question: 'Which direction should panels face in Uttarakhand?',
          answer:
            'South-facing orientation generally maximises generation in the Northern Hemisphere. East-west splits are possible for morning/evening load matching. Site survey determines the best layout for your roof.',
        },
        {
          question: 'How long does installation take?',
          answer:
            'A typical residential 3–5 kW installation takes one to three days depending on roof complexity and weather. Larger commercial projects are scheduled in phases.',
        },
        {
          question: 'What warranty comes with installed panels?',
          answer:
            'Module manufacturers typically provide 25-year performance warranty and 10–12 year product warranty. We facilitate warranty registration and document handover.',
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
          question: 'How do I know if my solar inverter is faulty?',
          answer:
            'Warning lights, error codes on the display, zero generation despite sunny weather, or frequent tripping indicate possible inverter issues. Contact us for diagnostic service before assuming panel failure.',
        },
        {
          question: 'String inverter vs microinverter — which is better for Uttarakhand?',
          answer:
            'String inverters suit unshaded uniform roofs and are cost-effective. Microinverters help when partial shading from trees or structures affects individual panels — common on hill properties. We recommend based on your roof conditions.',
        },
        {
          question: 'What inverter size do I need?',
          answer:
            'Inverter capacity is typically matched to panel array size — often slightly lower than total panel DC rating. Oversizing or undersizing affects efficiency and warranty. We calculate this during system design.',
        },
        {
          question: 'Do you repair inverters from other installers?',
          answer:
            'Yes, we service and repair inverters on existing systems regardless of original installer, subject to parts availability and brand support.',
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
          question: 'Lithium vs tubular battery for solar in Uttarakhand?',
          answer:
            'Tubular batteries cost less upfront but need maintenance and have shorter cycle life. Lithium costs more but offers longer life, deeper discharge and lower maintenance. We recommend based on your usage pattern and budget.',
        },
        {
          question: 'How long do solar batteries last?',
          answer:
            'Lead-acid tubular batteries typically last 3–5 years with proper care. Lithium batteries may last 8–10 years or more depending on brand and usage cycles. Actual life depends on depth of discharge and maintenance.',
        },
        {
          question: 'Can I add a battery to my existing on-grid solar?',
          answer:
            'Often yes with a hybrid inverter retrofit or AC-coupled battery system. We inspect your current setup to confirm compatibility and cost-effectiveness of upgrading versus replacing the inverter.',
        },
        {
          question: 'Where should batteries be installed at home?',
          answer:
            'Batteries need a ventilated, accessible location away from living areas — typically a utility room, garage or dedicated battery enclosure. We design placement meeting safety requirements.',
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
          question: 'Does solar water heater work in Uttarakhand winters?',
          answer:
            'ETC collectors perform well in cold conditions with adequate sunlight. Performance drops during extended cloudy spells. A backup electric element in the tank provides hot water on those days.',
        },
        {
          question: 'How is solar water heater different from rooftop solar panels?',
          answer:
            'Solar water heaters use thermal collectors to heat water directly. Photovoltaic panels generate electricity. They serve different purposes and can be installed together.',
        },
        {
          question: 'What capacity do I need for a family of four?',
          answer:
            'A 100–200 litre system typically serves a family of four for bathing needs. Larger households, guesthouses or institutions need proportionally larger systems based on usage survey.',
        },
        {
          question: 'Is there a government subsidy for solar water heaters?',
          answer:
            'MNRE has historically offered support for solar thermal through different schemes than PM Surya Ghar. Current availability varies — we advise on applicable programmes during consultation.',
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
          question: 'How many backup nights do solar street lights provide?',
          answer:
            'Quality units typically store enough for two to three rainy or cloudy nights depending on specification. We match battery capacity to your location\'s weather patterns and required reliability.',
        },
        {
          question: 'Can solar street lights work in hilly terrain?',
          answer:
            'Yes, with proper pole foundation and panel orientation. Hill roads may need taller poles or adjusted spacing for uniform coverage on curved paths.',
        },
        {
          question: 'What maintenance do solar street lights need?',
          answer:
            'Periodic panel cleaning, battery health checks and LED inspection. We offer maintenance contracts for institutional deployments with multiple units.',
        },
        {
          question: 'Are solar street lights suitable for municipal projects?',
          answer:
            'Yes. We supply specifications and documentation suitable for Panchayat, municipal and institutional procurement processes in Uttarakhand.',
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
          question: 'How often should I clean solar panels in Uttarakhand?',
          answer:
            'Once or twice a year is typical for most locations. Areas near construction sites, main roads or with heavy bird activity may need more frequent cleaning.',
        },
        {
          question: 'Can I clean solar panels myself?',
          answer:
            'Gentle water rinsing from ground level is fine for accessible panels. Roof work carries fall risk — we recommend professional cleaning for rooftop installations, especially on sloped hill roofs.',
        },
        {
          question: 'My generation dropped — is maintenance enough?',
          answer:
            'Reduced output may be due to dirt, shading changes, inverter faults or panel degradation. Maintenance visit diagnoses the cause. Some issues need repair rather than cleaning alone.',
        },
        {
          question: 'Do you maintain commercial and industrial plants?',
          answer:
            'Yes. We offer maintenance visits and AMC contracts scaled to plant size, including multi-site industrial clients in Udham Singh Nagar and Haridwar.',
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
          question: 'My inverter shows an error code — what should I do?',
          answer:
            'Note the error code and contact us. Do not attempt to open the inverter yourself. Many errors are diagnosable remotely or with a quick site visit.',
        },
        {
          question: 'Can cracked solar panels be repaired?',
          answer:
            'Cracked panels cannot be reliably repaired and should be replaced to maintain system safety and performance. We assess whether individual panel or full string replacement is needed.',
        },
        {
          question: 'Do you repair systems not installed by UTTsolar?',
          answer:
            'Yes. We regularly service and repair installations from other vendors across Uttarakhand when owners need reliable local support.',
        },
        {
          question: 'How quickly can you respond to repair calls?',
          answer:
            'Response time depends on your location and current service schedule. We prioritise complete system failures and aim for earliest possible visit across our service areas.',
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
          question: 'What is included in a solar AMC?',
          answer:
            'Standard AMC includes scheduled panel cleaning, visual inspection, inverter status check and generation review. Parts replacement and major repairs may be covered or offered at preferential rates depending on plan tier.',
        },
        {
          question: 'Is AMC worth it for a small home system?',
          answer:
            'For systems where roof access is difficult or you prefer professional care, AMC provides peace of mind. We offer residential plans scaled to smaller installations.',
        },
        {
          question: 'Can I get AMC on a system installed by another company?',
          answer:
            'Yes, after an initial assessment confirms the system is in serviceable condition and meets basic safety standards.',
        },
        {
          question: 'How many visits per year are included?',
          answer:
            'Typically two visits annually for residential systems and more frequent schedules for commercial and industrial plants. Exact frequency is defined in your contract.',
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
          question: 'How does net metering work with UPCL in Uttarakhand?',
          answer:
            'Your solar system exports surplus power to the grid through a bidirectional net meter. UPCL adjusts exported units against your consumption per applicable billing settlement rules for your consumer category.',
        },
        {
          question: 'How long does UPCL net metering approval take?',
          answer:
            'Timelines vary by circle and application completeness. Well-prepared applications typically process faster. We track status and follow up, though final timelines depend on UPCL.',
        },
        {
          question: 'Can I apply for net metering myself?',
          answer:
            'Yes, consumers can apply directly on the UPCL portal. Many customers prefer UTTsolar to handle documentation and follow-up because technical requirements and process steps can be complex.',
        },
        {
          question: 'Is net metering available for commercial consumers?',
          answer:
            'Yes, UPCL offers net metering for eligible commercial and industrial consumers subject to capacity limits and separate application procedures from residential.',
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
          question: 'How much PM Surya Ghar subsidy can I get in Uttarakhand?',
          answer:
            'For eligible residential systems, Uttarakhand receives higher CFA as a special category state — up to ₹33,000 per kW for the first 2 kW and ₹19,800 per kW for the third kW, with a maximum of ₹85,800 for systems up to 3 kW. Verify current rates on mnre.gov.in as guidelines may be updated.',
        },
        {
          question: 'Who is eligible for PM Surya Ghar subsidy?',
          answer:
            'Residential consumers including individual homeowners are eligible under current guidelines. Commercial entities and existing subsidy beneficiaries may have restrictions. We assess your specific eligibility during consultation.',
        },
        {
          question: 'Do I pay full price and receive subsidy later?',
          answer:
            'Under the current process, consumers typically pay the installation cost and receive Central Financial Assistance credited to their bank account after successful installation, inspection and application approval.',
        },
        {
          question: 'What if my subsidy application is rejected?',
          answer:
            'Rejections usually result from incomplete documentation, non-compliant equipment or DISCOM approval issues. We help identify and resolve the cause. Prevention through correct process from the start is the best approach.',
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
