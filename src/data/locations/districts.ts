import type { District } from './types';

export const districts: District[] = [
  {
    slug: 'nainital',
    name: 'Nainital',
    intro:
      'Nainital district spans the Kumaon foothills and Corbett-adjacent Terai belt, combining hill tourism, wholesale trade hubs like Haldwani, and gateway towns along the Kathgodam rail line. Rooftop solar here serves dense urban colonies, hotel clusters around the lake, and commercial establishments facing rising UPCL tariffs in one of Uttarakhand\'s most populous districts.',
    majorServiceAreas: [
      'Haldwani',
      'Kathgodam',
      'Nainital town',
      'Bhimtal',
      'Ramnagar',
      'Lalkuan',
      'Bhowali',
      'Kaladhungi',
      'Golapar',
    ],
    servicesAvailable: [
      'Residential rooftop solar (PM Surya Ghar)',
      'Commercial and shop rooftop systems',
      'Hotel and homestay solar installations',
      'Net metering with UPCL',
      'Free site survey and load assessment',
      'Subsidy documentation assistance',
    ],
    faqs: [
      {
        question: 'Which UPCL division covers Nainital district?',
        answer:
          'Most of Nainital district falls under UPCL\'s Kumaon circle. Net metering applications are processed through the UPCL USRP portal after installation by a registered vendor and technical inspection.',
      },
      {
        question: 'Is rooftop solar practical in Nainital\'s hill areas?',
        answer:
          'Yes. Hill towns receive strong winter sun despite cooler temperatures. South-facing roofs with minimal shading perform well. We assess roof angle, snow load considerations, and structural suitability during the site survey.',
      },
      {
        question: 'Can hotels near Naini Lake apply for PM Surya Ghar subsidy?',
        answer:
          'PM Surya Ghar CFA applies to residential consumers. Commercial hotels typically install grid-connected rooftop solar under net metering without residential subsidy, but benefit from lower UPCL bills and accelerated depreciation where applicable.',
      },
      {
        question: 'How long does UPCL net metering take in Haldwani?',
        answer:
          'After installation and commissioning, UPCL net metering approval typically takes several weeks depending on application completeness, meter availability, and local division workload. We assist with documentation to reduce delays.',
      },
    ],
  },
  {
    slug: 'dehradun',
    name: 'Dehradun',
    intro:
      'Dehradun is Uttarakhand\'s capital and largest urban market, with rapid residential expansion in Rajpur, Clement Town, and Sahastradhara corridors plus institutional demand from schools, hospitals, and government offices. High daytime consumption and strong solar irradiance make rooftop PV an effective hedge against UPCL tariff increases across the Doon Valley.',
    majorServiceAreas: [
      'Dehradun city',
      'Mussoorie',
      'Rishikesh',
      'Doiwala',
      'Vikasnagar',
      'Clement Town',
      'Rajpur',
      'Sahastradhara',
    ],
    servicesAvailable: [
      'Residential PM Surya Ghar installations',
      'Institutional and school rooftop solar',
      'Commercial building systems',
      'Net metering with UPCL',
      'Battery-ready and hybrid options',
      'Subsidy application support',
    ],
    faqs: [
      {
        question: 'Does UPCL serve all of Dehradun district?',
        answer:
          'Yes. Dehradun district is entirely within UPCL\'s service area. Consumers apply for grid-connected rooftop solar and net metering through UPCL\'s online USRP portal after vendor registration and system commissioning.',
      },
      {
        question: 'Is Mussoorie suitable for rooftop solar despite cloud cover?',
        answer:
          'Mussoorie receives slightly less annual irradiance than the Doon floor but still supports viable rooftop systems, especially for hotels and residences with unshaded south-facing roofs. We size systems using realistic yield estimates for the elevation.',
      },
      {
        question: 'Can Rishikesh ashrams and yoga centres install solar?',
        answer:
          'Yes. Ashrams, retreat centres, and guest houses with stable roof structures can install grid-connected rooftop solar. Residential-linked units may qualify for PM Surya Ghar; larger commercial campuses typically use net metering without residential CFA.',
      },
      {
        question: 'What documents are needed for PM Surya Ghar in Dehradun?',
        answer:
          'Applicants need a valid electricity connection, Aadhaar-linked account on pmsuryaghar.gov.in, roof ownership or authorization, and installation through a registered vendor. UPCL verifies the connection before subsidy disbursement.',
      },
    ],
  },
  {
    slug: 'haridwar',
    name: 'Haridwar',
    intro:
      'Haridwar district combines pilgrimage tourism, industrial corridors around Bahadrabad and Jhabrera, and the engineering hub of Roorkee. Long sunny seasons and high daytime loads at temples, hotels, factories, and educational institutions create strong economics for grid-connected rooftop solar with UPCL net metering.',
    majorServiceAreas: [
      'Haridwar city',
      'Roorkee',
      'Laksar',
      'Jhabrera',
      'Bahadrabad',
    ],
    servicesAvailable: [
      'Residential rooftop solar (PM Surya Ghar)',
      'Industrial shed and factory rooftop systems',
      'Temple and dharamshala installations',
      'Commercial net metering',
      'Free site survey',
      'UPCL application assistance',
    ],
    faqs: [
      {
        question: 'Are industrial units in Bahadrabad eligible for net metering?',
        answer:
          'Yes. UPCL allows grid-connected rooftop solar with net metering for eligible commercial and industrial consumers subject to sanctioned load and DISCOM guidelines. PM Surya Ghar residential CFA does not apply to industrial connections.',
      },
      {
        question: 'Can Roorkee IIT campus area residents install solar?',
        answer:
          'Residents in Roorkee colonies with individual UPCL connections can install rooftop solar and apply for PM Surya Ghar if the connection category is residential. Multi-storey housing societies may explore group or individual rooftop allocations based on roof rights.',
      },
      {
        question: 'How does solar help hotels during Kumbh and festival seasons?',
        answer:
          'Peak tourist seasons drive high AC and water-heating loads. Rooftop solar offsets daytime consumption when the grid is under stress, reducing bills and providing partial backup when paired with inverters that support essential loads.',
      },
      {
        question: 'Which UPCL office handles Haridwar district net metering?',
        answer:
          'Applications are submitted online via UPCL USRP. Local UPCL division offices in Haridwar and Roorkee handle inspections and meter installation. Processing times vary with application volume.',
      },
    ],
  },
  {
    slug: 'udham-singh-nagar',
    name: 'Udham Singh Nagar',
    intro:
      'Udham Singh Nagar is Uttarakhand\'s industrial heartland, anchored by Rudrapur, Kashipur, and the Pantnagar industrial belt. Large roof areas on warehouses, manufacturing units, and residential colonies across the Terai plain offer excellent solar potential with minimal shading and strong year-round irradiance under UPCL.',
    majorServiceAreas: [
      'Rudrapur',
      'Kashipur',
      'Kichha',
      'Jaspur',
      'Bazpur',
      'Gadarpur',
      'Sitarganj',
      'Pantnagar',
    ],
    servicesAvailable: [
      'Industrial rooftop solar',
      'Warehouse and cold-storage systems',
      'Residential PM Surya Ghar',
      'Commercial net metering',
      'High-capacity commercial installations',
      'Load assessment and UPCL liaison',
    ],
    faqs: [
      {
        question: 'Why is Udham Singh Nagar popular for industrial solar?',
        answer:
          'The district has expansive flat roofs on factories and warehouses, high daytime power demand, and strong solar irradiance in the Terai. Net metering allows industries to offset significant UPCL consumption during production hours.',
      },
      {
        question: 'Can Pantnagar SIDCO units install rooftop solar?',
        answer:
          'Yes, subject to building ownership, structural clearance, and UPCL connection category. Industrial consumers apply for net metering through UPCL; residential CFA under PM Surya Ghar applies only to domestic connections.',
      },
      {
        question: 'Is agricultural pump solar available in US Nagar?',
        answer:
          'PM-KUSUM and related schemes cover solar pumps separately from PM Surya Ghar rooftop. For grid-connected farms with UPCL connections, rooftop solar on farmhouses or allied buildings may be feasible depending on connection type.',
      },
      {
        question: 'How does net metering work for factories in Rudrapur?',
        answer:
          'Exported units during sunny hours are adjusted against imports per UPCL net metering regulations. Billing reflects net consumption, helping factories reduce demand charges and energy costs during daytime shifts.',
      },
    ],
  },
  {
    slug: 'almora',
    name: 'Almora',
    intro:
      'Almora district covers mid-Himalayan Kumaon terrain from the district headquarters to cantonment town Ranikhet and the tea-garden slopes of Kausani. Scattered settlements, tourism homestays, and government buildings benefit from rooftop solar to manage UPCL supply challenges and long winter heating loads.',
    majorServiceAreas: [
      'Almora town',
      'Ranikhet',
      'Kausani',
      'Dwarahat',
      'Someshwar',
    ],
    servicesAvailable: [
      'Residential PM Surya Ghar',
      'Homestay and hotel solar',
      'Off-grid and hybrid options for remote hamlets',
      'Net metering with UPCL',
      'Site survey for hill-roof structures',
      'Subsidy documentation',
    ],
    faqs: [
      {
        question: 'Do hill roofs in Almora need special mounting?',
        answer:
          'Many Almora buildings use sloped tin or slate roofs. We use appropriate mounting structures designed for slope and wind load. Structural assessment is part of every site survey before installation.',
      },
      {
        question: 'Is Kausani viable for solar despite tourism seasonality?',
        answer:
          'Kausani receives good clear-sky days for much of the year. Hotels and homestays with daytime laundry, kitchen, and heating loads benefit from offsetting UPCL consumption during peak guest hours.',
      },
      {
        question: 'Can Ranikhet cantonment area civilians install solar?',
        answer:
          'Civilian areas outside restricted zones with individual UPCL connections can install rooftop solar. Permissions from building owners or cantonment authorities may be required where applicable.',
      },
      {
        question: 'Does UPCL net metering cover all Almora district?',
        answer:
          'Grid-connected areas in Almora district under UPCL can apply for net metering. Very remote hamlets without grid access may need off-grid or hybrid solutions instead.',
      },
    ],
  },
  {
    slug: 'bageshwar',
    name: 'Bageshwar',
    intro:
      'Bageshwar sits at the confluence of the Saryu and Gomti rivers, serving as a pilgrimage centre and gateway to Pindari and Sunderdhunga valleys. Agricultural communities in Kapkote and Garur, plus town traders and dharamshalas, use rooftop solar to manage UPCL costs and unreliable supply in this remote Kumaon district.',
    majorServiceAreas: [
      'Bageshwar town',
      'Kapkote',
      'Garur',
      'Kanda',
    ],
    servicesAvailable: [
      'Residential PM Surya Ghar',
      'Shop and dharamshala installations',
      'Hybrid systems for power-cut prone areas',
      'Net metering with UPCL',
      'Free site survey',
      'Subsidy application help',
    ],
    faqs: [
      {
        question: 'Is solar useful in power-cut prone Bageshwar villages?',
        answer:
          'Grid-tied solar with net metering reduces bills when the grid is available. For areas with frequent outages, hybrid inverters with battery backup can maintain essential loads, though batteries add cost beyond standard PM Surya Ghar packages.',
      },
      {
        question: 'Can farmers in Kapkote block install rooftop solar?',
        answer:
          'Farmers with residential UPCL connections on their houses can apply for PM Surya Ghar rooftop systems. Agricultural pump connections follow different schemes. We verify connection category during the survey.',
      },
      {
        question: 'How is roof access managed in old Bageshwar town buildings?',
        answer:
          'We assess roof condition, load-bearing capacity, and shading from neighbouring structures. Many town buildings support 1–3 kW systems on flat or mildly sloped sections.',
      },
      {
        question: 'Does pilgrimage season affect solar sizing in Bageshwar?',
        answer:
          'During festival seasons, dharamshalas and shops see higher loads. We size systems based on connected load and consumption patterns rather than seasonal peaks alone, so the system remains economical year-round.',
      },
    ],
  },
  {
    slug: 'chamoli',
    name: 'Chamoli',
    intro:
      'Chamoli district stretches from lowland Karnaprayag to high-altitude Joshimath and the Badrinath corridor. Tourism lodges, border-area settlements, and government infrastructure along the Alaknanda valley use rooftop solar to offset UPCL dependence in a seismically active, mountainous terrain.',
    majorServiceAreas: [
      'Gopeshwar',
      'Joshimath',
      'Karnaprayag',
      'Pipalkoti',
      'Chamoli town',
    ],
    servicesAvailable: [
      'Residential and homestay solar',
      'Hotel and lodge installations',
      'Hybrid backup for valley settlements',
      'Net metering with UPCL',
      'High-altitude installation expertise',
      'Site survey and structural review',
    ],
    faqs: [
      {
        question: 'Can Joshimath hotels install solar at high altitude?',
        answer:
          'Yes. Higher altitude increases irradiance on clear days though temperatures are lower. Module efficiency improves in cold conditions. We account for snow accumulation and roof access in design and maintenance planning.',
      },
      {
        question: 'Is seismic activity a concern for mounting in Chamoli?',
        answer:
          'Installations use engineered mounting with appropriate anchoring for local roof types. We follow IS standards for wind and seismic zones applicable to the region.',
      },
      {
        question: 'How does net metering work in Karnaprayag?',
        answer:
          'Grid-connected consumers in Karnaprayag apply through UPCL USRP. Net metering adjusts exported solar units against consumption per UPCL regulations. Remote locations must have active grid connectivity to qualify.',
      },
      {
        question: 'Are Char Dham route lodges eligible for PM Surya Ghar?',
        answer:
          'Only residential-category UPCL connections qualify for PM Surya Ghar CFA. Commercial lodges use net metering without residential subsidy but gain long-term savings on UPCL bills.',
      },
    ],
  },
  {
    slug: 'champawat',
    name: 'Champawat',
    intro:
      'Champawat is Uttarakhand\'s easternmost district, bordering Nepal, with the trade town Tanakpur and hill settlements like Lohaghat. Terai heat in Banbasa and cooler Lohaghat hills both support rooftop solar for shops, schools, border-area households, and tourism properties on UPCL grid.',
    majorServiceAreas: [
      'Champawat town',
      'Lohaghat',
      'Tanakpur',
      'Banbasa',
    ],
    servicesAvailable: [
      'Residential PM Surya Ghar',
      'Border trade shop installations',
      'School and anganwadi rooftop solar',
      'Net metering with UPCL',
      'Free site survey',
      'Subsidy documentation',
    ],
    faqs: [
      {
        question: 'Is Tanakpur suitable for rooftop solar on the Terai plain?',
        answer:
          'Tanakpur receives strong year-round sun with minimal shading on flat roofs. Shops and residences along the Kali river corridor are well suited for 1–5 kW grid-connected systems with UPCL net metering.',
      },
      {
        question: 'Can Banbasa border-area traders install solar?',
        answer:
          'Yes, with valid UPCL connections and roof rights. Commercial shops benefit from net metering to offset daytime refrigeration and lighting loads without relying on diesel generators.',
      },
      {
        question: 'Does Lohaghat\'s cooler climate reduce solar output?',
        answer:
          'Cooler temperatures slightly improve module efficiency. Lohaghat receives adequate sunshine for residential systems; we use conservative yield estimates in system sizing.',
      },
      {
        question: 'How do I apply for PM Surya Ghar in Champawat?',
        answer:
          'Register on pmsuryaghar.gov.in, choose a registered vendor, complete installation, and submit UPCL net metering application. Subsidy is released after DISCOM verification per MNRE guidelines.',
      },
    ],
  },
  {
    slug: 'pauri-garhwal',
    name: 'Pauri Garhwal',
    intro:
      'Pauri Garhwal spans Garhwal mid-hills from the district headquarters to Kotdwar in the plains and the hill station Lansdowne. Mixed terrain creates varied solar opportunities: Terai industrial rooftops in Kotdwar, Srinagar Alaknanda valley institutions, and scattered Pauri hillside homes on UPCL.',
    majorServiceAreas: [
      'Pauri',
      'Kotdwar',
      'Srinagar',
      'Lansdowne',
      'Satpuli',
    ],
    servicesAvailable: [
      'Residential PM Surya Ghar',
      'Commercial and shop systems',
      'Institutional rooftop solar',
      'Net metering with UPCL',
      'Hill and plain terrain installations',
      'Free site survey',
    ],
    faqs: [
      {
        question: 'Why is Kotdwar different from Pauri town for solar?',
        answer:
          'Kotdwar sits in the Terai foothills with hotter climate and flat roofs ideal for larger arrays. Pauri town has cooler hill conditions and smaller roof footprints, typically suited for 1–3 kW residential systems.',
      },
      {
        question: 'Can Srinagar Garhwal colleges install rooftop solar?',
        answer:
          'Educational institutions with UPCL connections can install grid-connected rooftop solar under net metering. Residential hostel connections may have different eligibility for PM Surya Ghar CFA.',
      },
      {
        question: 'Is Lansdowne cantonment area open for civilian solar?',
        answer:
          'Civilian areas around Lansdowne with UPCL domestic connections can install rooftop solar. Property permissions apply where land is leased or regulated.',
      },
      {
        question: 'How does UPCL handle net metering in Pauri Garhwal?',
        answer:
          'Applications go through UPCL USRP online. The Garhwal circle processes inspections and bi-directional meter installation. Timeline depends on local division capacity.',
      },
    ],
  },
  {
    slug: 'pithoragarh',
    name: 'Pithoragarh',
    intro:
      'Pithoragarh district occupies the Soar and Kali valley corridors toward the Tibet and Nepal borders, with administrative hubs, army-linked economies, and apple belt settlements in Berinag and Gangolihat. Rooftop solar helps remote UPCL consumers manage costs and supply interruptions in this far-eastern Kumaon region.',
    majorServiceAreas: [
      'Pithoragarh town',
      'Didihat',
      'Dharchula',
      'Berinag',
      'Gangolihat',
    ],
    servicesAvailable: [
      'Residential PM Surya Ghar',
      'Border area shop installations',
      'Homestay and hotel solar',
      'Hybrid backup systems',
      'Net metering with UPCL',
      'Site survey for remote locations',
    ],
    faqs: [
      {
        question: 'Is solar viable in high-reach Dharchula?',
        answer:
          'Dharchula receives good solar resource despite valley shading risks. South-facing roofs with clear sky exposure support grid-connected systems where UPCL supply exists. We conduct on-site shading analysis before design.',
      },
      {
        question: 'Can apple belt farmers in Berinag use rooftop solar?',
        answer:
          'Residential connections on farmhouses can qualify for PM Surya Ghar. Cold storage and processing units with commercial connections use net metering. Pump solar falls under separate agricultural schemes.',
      },
      {
        question: 'How long does installation take in remote Pithoragarh blocks?',
        answer:
          'Site survey and installation timelines extend for distant locations due to logistics. We schedule material delivery and crew visits to minimize return trips after the initial survey.',
      },
      {
        question: 'Does Gangolihat temple town support commercial solar?',
        answer:
          'Shops and dharamshalas with commercial UPCL connections can install net-metered rooftop solar. Temple trusts may install systems on associated guest houses or offices subject to ownership and DISCOM rules.',
      },
    ],
  },
  {
    slug: 'rudraprayag',
    name: 'Rudraprayag',
    intro:
      'Rudraprayag district lies along the Char Dham route where the Alaknanda and Mandakini rivers meet. Pilgrimage lodges in Guptkashi and Ukhimath, plus hillside homes in Augustmuni, benefit from rooftop solar to manage seasonal UPCL loads and support tourism infrastructure.',
    majorServiceAreas: [
      'Rudraprayag town',
      'Augustmuni',
      'Ukhimath',
      'Guptkashi',
    ],
    servicesAvailable: [
      'Residential PM Surya Ghar',
      'Char Dham lodge and hotel solar',
      'Hybrid backup for outage-prone areas',
      'Net metering with UPCL',
      'Free site survey',
      'Subsidy documentation',
    ],
    faqs: [
      {
        question: 'Why is Guptkashi a key solar location?',
        answer:
          'Guptkashi serves Kedarnath pilgrims with hundreds of lodges seeing high seasonal electricity use. Rooftop solar offsets daytime loads for kitchens, geysers, and lighting during peak yatra months.',
      },
      {
        question: 'Can Ukhimath residents apply for PM Surya Ghar?',
        answer:
          'Yes, with valid residential UPCL connections and roof ownership. Application is through pmsuryaghar.gov.in with installation by a registered vendor followed by UPCL net metering approval.',
      },
      {
        question: 'How does monsoon affect solar in Rudraprayag valley?',
        answer:
          'Monsoon months reduce daily generation but annual yields remain viable. Grid-tied systems rely on UPCL import during heavy cloud periods while exporting surplus in clear winter and spring months.',
      },
      {
        question: 'Are landslide-prone area roofs suitable for solar?',
        answer:
          'We assess individual building stability and roof condition. Installations are not placed on structurally compromised buildings. Proper anchoring is used for tin and concrete roofs common in the valley.',
      },
    ],
  },
  {
    slug: 'tehri-garhwal',
    name: 'Tehri Garhwal',
    intro:
      'Tehri Garhwal encompasses the Tehri reservoir region, New Tehri planned town, Narendranagar ridge settlements, and Bhagirathi valley communities in Chamba and Ghansali. Hydro-linked grid supply and tourism along Tehri Lake drive interest in rooftop solar for UPCL consumers seeking bill stability.',
    majorServiceAreas: [
      'New Tehri',
      'Old Tehri',
      'Narendranagar',
      'Ghansali',
      'Chamba',
    ],
    servicesAvailable: [
      'Residential PM Surya Ghar',
      'Lake-view hotel and resort solar',
      'Commercial shop installations',
      'Net metering with UPCL',
      'Hybrid options for hilly terrain',
      'Free site survey',
    ],
    faqs: [
      {
        question: 'Is New Tehri town well suited for rooftop solar?',
        answer:
          'New Tehri\'s planned layout includes many flat-roofed buildings with good sun exposure above the reservoir. Residential colonies and government quarters are strong candidates for PM Surya Ghar installations.',
      },
      {
        question: 'Can Chamba Bhagirathi valley hotels install solar?',
        answer:
          'Yes. Hotels and camps along the Chamba–New Tehri route can install grid-connected rooftop or ground-mounted systems where roof area is limited, subject to UPCL net metering rules and land permissions.',
      },
      {
        question: 'Does Tehri dam area affect local electricity supply?',
        answer:
          'Tehri has strong grid infrastructure linked to hydro generation, but UPCL consumer tariffs still apply. Rooftop solar reduces billed consumption through net metering rather than replacing grid connection.',
      },
      {
        question: 'What about Ghansali remote block installations?',
        answer:
          'Ghansali consumers on UPCL grid can install net-metered rooftop solar. Remote households with frequent outages may consider hybrid inverters with battery storage for essential loads.',
      },
    ],
  },
  {
    slug: 'uttarkashi',
    name: 'Uttarkashi',
    intro:
      'Uttarkashi district covers the Bhagirathi valley toward Gangotri, with trekking hubs in Barkot and administrative blocks in Bhatwari and Dunda. Ashrams, adventure tourism camps, and hillside villages use rooftop solar to offset UPCL costs in this high-altitude Garhwal district with long winter seasons.',
    majorServiceAreas: [
      'Uttarkashi town',
      'Barkot',
      'Bhatwari',
      'Dunda',
    ],
    servicesAvailable: [
      'Residential PM Surya Ghar',
      'Ashram and dharamshala solar',
      'Adventure camp and hotel systems',
      'Hybrid backup for remote valleys',
      'Net metering with UPCL',
      'High-altitude site survey',
    ],
    faqs: [
      {
        question: 'Is Barkot suitable for tourism camp solar?',
        answer:
          'Barkot serves Yamunotri-bound pilgrims with seasonal camps and hotels. Rooftop solar offsets daytime loads and reduces diesel generator dependence where grid supply is available through UPCL.',
      },
      {
        question: 'How does winter snow affect solar in Uttarkashi?',
        answer:
          'Snow can temporarily cover panels on low-angle roofs. Steeper mounting angles and occasional cleaning restore generation. Winter months still produce usable output on clear days at altitude.',
      },
      {
        question: 'Can Gangotri route lodges in Bhatwari block install solar?',
        answer:
          'Lodges with grid connections can install net-metered systems. Very high-altitude seasonal settlements may have limited roof access windows; we plan installations during accessible months.',
      },
      {
        question: 'Does PM Surya Ghar apply in Uttarkashi town?',
        answer:
          'Residential UPCL consumers in Uttarkashi town can apply for PM Surya Ghar CFA on pmsuryaghar.gov.in, subject to MNRE capacity limits and vendor registration requirements.',
      },
    ],
  },
];
