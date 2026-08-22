export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category:
    | 'Solar Basics'
    | 'Solar Cost'
    | 'Solar Subsidy'
    | 'PM Surya Ghar'
    | 'Solar Installation'
    | 'Solar Maintenance'
    | 'On Grid Solar'
    | 'Hybrid Solar'
    | 'Off Grid Solar'
    | 'Uttarakhand Solar'
    | 'Location Guides';
  author: string;
  authorRole: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  excerpt: string;
  content: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const blogs: BlogPost[] = [
  {
    slug: 'pm-surya-ghar-subsidy-uttarakhand-guide',
    title: 'PM Surya Ghar Muft Bijli Yojana in Uttarakhand: Subsidy Rates & Application Process',
    metaTitle: 'PM Surya Ghar Subsidy Uttarakhand Guide 2026 | UTTsolar',
    metaDescription:
      'Complete guide to PM Surya Ghar Muft Bijli Yojana in Uttarakhand. Learn about special category CFA rates (up to ₹85,800), eligibility & step-by-step UPCL process.',
    h1: 'PM Surya Ghar: Muft Bijli Yojana in Uttarakhand — Comprehensive Subsidy Guide',
    category: 'PM Surya Ghar',
    author: 'Er. Rajesh Pant',
    authorRole: 'Chief Solar Engineer & Subsidy Specialist',
    datePublished: '2026-01-15',
    dateModified: '2026-02-10',
    readTime: '6 min read',
    excerpt:
      'Uttarakhand qualifies as a special category state under PM Surya Ghar Yojana, offering up to ₹85,800 in Central Financial Assistance for 3 kW residential rooftop systems. Here is everything you need to know.',
    content: `
## What is PM Surya Ghar: Muft Bijli Yojana?

Launched by the Prime Minister in early 2024, **PM Surya Ghar: Muft Bijli Yojana** is India's flagship rooftop solar scheme with an outlay exceeding ₹75,000 crores. The initiative aims to provide free or near-zero electricity bills to 1 crore households across the country through heavily subsidized residential solar systems.

For residents of Uttarakhand, there is a substantial advantage: **Uttarakhand is officially classified as a Special Category State (Hilly / Himalayan Region)** by the Ministry of New and Renewable Energy (MNRE), entitling homeowners to significantly higher Central Financial Assistance (CFA) compared to general category states.

---

## Verified Subsidy Structure for Uttarakhand

The Central Financial Assistance (CFA) under PM Surya Ghar is credited directly into your Aadhaar-linked bank account (DBT) upon successful plant commissioning and UPCL inspection:

| System Capacity | CFA Rate per kW (Uttarakhand Special Category) | Total Central Subsidy |
| :--- | :--- | :--- |
| **1 kW System** | ₹33,000 | **₹33,000** |
| **2 kW System** | ₹33,000 per kW | **₹66,000** |
| **3 kW System** | ₹33,000 (1st 2 kW) + ₹19,800 (3rd kW) | **₹85,800** |
| **Above 3 kW (e.g. 5–10 kW)** | Capped at 3 kW maximum CFA | **₹85,800 (Max Cap)** |

> **Note:** For Group Housing Societies (GHS) and Resident Welfare Associations (RWA), Central Financial Assistance of ₹19,800 per kW is available for common area lighting up to a cumulative capacity of 500 kW.

---

## Step-by-Step Application Process in Uttarakhand

Applying for your PM Surya Ghar subsidy in Uttarakhand involves five clear steps:

### 1. Consumer Registration on National Portal
Visit the official portal at [pmsuryaghar.gov.in](https://pmsuryaghar.gov.in) and register using your state (*Uttarakhand*), electricity distribution company (*UPCL - Uttarakhand Power Corporation Limited*), consumer connection number (from your UPCL bill), and mobile number.

### 2. Feasibility Approval by UPCL
Submit your preliminary rooftop solar application. UPCL division engineers conduct a technical review to confirm your transformer capacity and sanctioned electrical load.

### 3. Vendor Selection & Installation
Select an authorized, registered vendor like **UTTsolar**. We supply and install MNRE ALMM-compliant Tier-1 solar modules (such as TopCon or Mono PERC) and BIS-certified grid-tie inverters with complete safety earthing and surge protection.

### 4. UPCL Work Completion & Net Meter Installation
After installation, UTTsolar submits the Work Completion Report and Single Line Diagram (SLD) on the UPCL USRP portal. A UPCL junior engineer inspects the plant and replaces your existing unidirectional meter with a bidirectional net meter.

### 5. Direct Benefit Transfer (DBT) Subsidy Credit
Once the commissioning certificate is uploaded, the central government releases the subsidy directly to your registered bank account within 30 to 45 days.

---

## Return on Investment (ROI) Example for Dehradun/Haldwani Home

Let's look at the financial math for a typical 3 kW on-grid solar plant:

- **Gross System Cost:** ₹1,75,000 approx.
- **PM Surya Ghar Subsidy:** ₹85,800
- **Effective Net Investment:** **₹89,200**
- **Average Monthly Generation:** 360–390 Units
- **Monthly Bill Savings:** ₹2,400 – ₹2,800
- **Annual Bill Savings:** ₹28,800 – ₹33,600
- **Simple Payback Period:** **Under 3 Years!**

Following the 3-year payback, your solar plant generates virtually free green electricity for the remaining 22+ years of its 25-year performance warranty.
    `,
    faqs: [
      {
        question: 'Is PM Surya Ghar subsidy available for commercial shops or hotels in Uttarakhand?',
        answer:
          'No. PM Surya Ghar Central Financial Assistance is strictly reserved for residential consumer connections and registered group housing societies. Commercial properties can still install net-metered solar to save electricity costs and claim tax depreciation.',
      },
      {
        question: 'Can I install solar panels if I live on rent or in a joint family house?',
        answer:
          'Yes, provided you obtain a No Objection Certificate (NOC) from the property owner / co-owners, and the UPCL electricity meter is registered at that premises.',
      },
      {
        question: 'Does the subsidy apply to off-grid solar systems with batteries?',
        answer:
          'PM Surya Ghar CFA applies specifically to grid-connected on-grid rooftop solar systems with UPCL net metering. Hybrid systems with grid-tied capability and approved inverters can also qualify for the rooftop CFA.',
      },
    ],
    relatedSlugs: [
      'solar-panel-cost-in-haldwani-and-dehradun',
      'upcl-net-metering-process-guide',
      'on-grid-vs-hybrid-solar-uttarakhand',
    ],
  },
  {
    slug: 'solar-panel-cost-in-haldwani-and-dehradun',
    title: 'Solar Panel Cost in Uttarakhand: 1 kW to 10 kW Price Breakdown (2026)',
    metaTitle: 'Solar Panel Cost in Uttarakhand 2026: 1kW, 3kW, 5kW Prices | UTTsolar',
    metaDescription:
      'Transparent pricing breakdown for rooftop solar in Haldwani, Dehradun, Haridwar & all Uttarakhand districts. Compare 1kW, 3kW, 5kW, 10kW system costs and net investment.',
    h1: 'Solar Panel Cost in Uttarakhand (2026): Complete 1 kW to 10 kW Price Guide',
    category: 'Solar Cost',
    author: 'Sunil Bhatt',
    authorRole: 'Senior Estimator & Technical Consultant',
    datePublished: '2026-01-20',
    dateModified: '2026-02-12',
    readTime: '5 min read',
    excerpt:
      'Detailed price breakdown for on-grid, hybrid, and commercial solar systems across Uttarakhand with equipment specs, mounting structures, and net investment after PM Surya Ghar subsidy.',
    content: `
## Understanding Solar System Costs in Uttarakhand

When planning rooftop solar for your home, commercial property, or industrial facility in Uttarakhand, it is important to look beyond just the panel cost. A turnkey solar system consists of:

1. **Tier-1 Monocrystalline / TopCon Solar Modules** (ALMM approved)
2. **Grid-Tied / Hybrid String Inverter** (with built-in MPPT & Wi-Fi monitoring)
3. **Mounting Structures** (HDG / Anodized Aluminium engineered for mountain wind and seismic loads)
4. **Electrical Balance of System** (ACDB, DCDB with SPD & MCBs, 4 sq mm / 6 sq mm solar DC copper cables)
5. **Safety Earthing & Lightning Arrester** (Chemical copper bonded earthing electrodes)
6. **UPCL Net Metering Liaison & Liaison Charges**

---

## 2026 Residential Solar Price Chart (After Subsidy)

Here is the realistic price estimate for on-grid rooftop solar across Uttarakhand (Dehradun, Haldwani, Haridwar, Roorkee, Rishikesh, Rudrapur, and hill districts):

| System Size | Average Monthly Units | Gross Estimated Cost | PM Surya Ghar Subsidy | Net Investment (Approx) |
| :--- | :--- | :--- | :--- | :--- |
| **1 kW** | 120 – 130 Units | ₹60,000 – ₹70,000 | ₹33,000 | **₹27,000 – ₹37,000** |
| **2 kW** | 240 – 260 Units | ₹1,15,000 – ₹1,30,000 | ₹66,000 | **₹49,000 – ₹64,000** |
| **3 kW (Most Popular)** | 360 – 400 Units | ₹1,65,000 – ₹1,85,000 | ₹85,800 | **₹79,200 – ₹99,200** |
| **4 kW** | 480 – 520 Units | ₹2,15,000 – ₹2,40,000 | ₹85,800 (Max Cap) | **₹1,29,200 – ₹1,54,200** |
| **5 kW** | 600 – 650 Units | ₹2,60,000 – ₹2,90,000 | ₹85,800 (Max Cap) | **₹1,74,200 – ₹2,04,200** |
| **10 kW (3-Phase)** | 1,200 – 1,300 Units | ₹4,80,000 – ₹5,40,000 | ₹85,800 (Max Cap) | **₹3,94,200 – ₹4,54,200** |

*Note: Exact pricing depends on terrace height, cable run distances, and elevated structure requirements.*

---

## What Determines Your System Cost?

### 1. Structure Height & Terrace Usability
A standard short-leg structure mounted directly on RCC slabs is most cost-effective. If you require an **Elevated Superstructure (6–8 ft clear height)** to preserve your terrace for walking, gardening, or recreation, structural GI fabrication adds ₹6,000–₹9,000 per kW.

### 2. On-Grid vs Hybrid Systems
- **On-Grid:** Requires no battery; lowest cost, highest efficiency, synchronized with UPCL grid.
- **Hybrid with Lithium Battery:** Adds ₹25,000–₹35,000 per kWh of battery storage, providing seamless backup during power cuts.

### 3. Roof Accessibility & Regional Logistics
Installing in hill regions like Mussoorie, Nainital town, or Almora requires specialized transport and slope-roof mounting clamps, whereas Terai installations in Haldwani or Rudrapur benefit from streamlined logistics.
    `,
    faqs: [
      {
        question: 'Are there hidden charges like net meter fees or testing charges in Uttarakhand?',
        answer:
          'UPCL charges a nominal meter testing / net meter fee (approx ₹2,500–₹4,000 depending on single/three phase) which is billed in your UPCL bill or paid directly. UTTsolar provides fully transparent quotes itemizing all components.',
      },
      {
        question: 'Can I get a solar bank loan in Uttarakhand?',
        answer:
          'Yes! Public sector banks like SBI, PNB, and Bank of Baroda offer collateral-free PM Surya Ghar solar loans at concessional interest rates (around 7% p.a.) with minimal down payment.',
      },
    ],
    relatedSlugs: [
      'pm-surya-ghar-subsidy-uttarakhand-guide',
      'upcl-net-metering-process-guide',
      'best-solar-company-haldwani-checklist',
    ],
  },
  {
    slug: 'upcl-net-metering-process-guide',
    title: 'UPCL Net Metering in Uttarakhand: Application, Rules & Billing Explained',
    metaTitle: 'UPCL Net Metering Guide Uttarakhand 2026 | UTTsolar',
    metaDescription:
      'Complete guide to UPCL net metering in Uttarakhand. Understand bidirectional meters, solar banking, tariff adjustment, and online USRP application steps.',
    h1: 'UPCL Net Metering in Uttarakhand: Complete Guide to Solar Banking & Billing',
    category: 'On Grid Solar',
    author: 'Er. Rajesh Pant',
    authorRole: 'Chief Solar Engineer & Subsidy Specialist',
    datePublished: '2026-01-25',
    dateModified: '2026-02-15',
    readTime: '6 min read',
    excerpt:
      'How net metering works with Uttarakhand Power Corporation Limited (UPCL). Learn how your bidirectional meter tracks export/import and turns your roof into a green power bank.',
    content: `
## What is UPCL Net Metering?

Net metering is the regulatory and technical mechanism that makes on-grid rooftop solar financially lucrative. When your rooftop solar system produces more electricity during sunny daytime hours than your home is consuming, the surplus units are automatically exported to the **Uttarakhand Power Corporation Limited (UPCL)** grid.

At night or during cloudy days when your panels do not produce power, you import electricity from UPCL as normal. At the end of each billing cycle, your UPCL bill reflects only the **net difference** between total imported units and total exported units.

---

## How Net Metering Billing Works in Practice

Let us illustrate with a real-life example of a 5 kW solar plant installed in Dehradun:

- **Monthly Household Consumption:** 600 Units
- **Monthly Solar Generation:** 620 Units
- **Direct Daytime Solar Consumption:** 300 Units
- **Surplus Solar Exported to Grid:** 320 Units
- **Nighttime Grid Import:** 300 Units
- **Net Billable Units:** 300 (Import) − 320 (Export) = **-20 Units (Surplus Banked!)**
- **UPCL Energy Charge:** **₹0** (Only fixed meter charge applies)

### What Happens to Surplus Units?
If your solar generation exceeds your consumption across the month, the surplus credit units are carried forward in your UPCL account to subsequent months. This is especially advantageous in Uttarakhand, allowing you to bank solar credits generated in sunny March–May to offset high AC cooling loads during humid monsoon months.

---

## UPCL Net Metering Technical Rules & Eligibility

1. **Sanctioned Load Limit:** The installed solar plant capacity generally cannot exceed 100% of your sanctioned UPCL electricity connection load. If you need a larger solar system, UTTsolar assists you in applying for a load enhancement on the UPCL portal prior to installation.
2. **Single Phase vs Three Phase:**
   - Single-phase connection: Supported up to 5 kW solar capacity.
   - Three-phase connection: Required for systems 5 kW and above.
3. **Anti-Islanding Protection:** Grid-tie inverters must comply with IEEE 1547 / IEC 62116 anti-islanding safety standards to automatically disconnect from the grid during power outages, ensuring the safety of UPCL line repair workers.
    `,
    faqs: [
      {
        question: 'Does UPCL pay cash for excess solar electricity?',
        answer:
          'Under current Uttarakhand Electricity Regulatory Commission (UERC) net metering regulations, surplus energy units are settled as billing credits against future consumption. Any accumulated surplus at the end of the annual settlement cycle is adjusted per applicable UERC tariff orders.',
      },
      {
        question: 'How do I know if my bidirectional net meter is recording correctly?',
        answer:
          'Bidirectional meters have digital LCD displays cycling through registers showing Import (kWh from grid), Export (kWh to grid), and Net (Import minus Export).',
      },
    ],
    relatedSlugs: [
      'pm-surya-ghar-subsidy-uttarakhand-guide',
      'solar-panel-cost-in-haldwani-and-dehradun',
      'on-grid-vs-hybrid-solar-uttarakhand',
    ],
  },
  {
    slug: 'on-grid-vs-hybrid-solar-uttarakhand',
    title: 'On-Grid vs Hybrid Solar Systems in Uttarakhand: Which is Right for You?',
    metaTitle: 'On-Grid vs Hybrid Solar in Uttarakhand: Complete Comparison | UTTsolar',
    metaDescription:
      'Compare On-Grid, Hybrid, and Off-Grid solar systems for Uttarakhand homes and businesses. Evaluate cost, battery backup, subsidy eligibility, and power cut reliability.',
    h1: 'On-Grid vs Hybrid Solar in Uttarakhand: Choosing the Right System for Your Location',
    category: 'Hybrid Solar',
    author: 'Er. Deepa Joshi',
    authorRole: 'Renewable Systems Design Lead',
    datePublished: '2026-02-02',
    dateModified: '2026-02-18',
    readTime: '5 min read',
    excerpt:
      'Should you choose a low-cost on-grid system with net metering or a hybrid system with battery backup? Here is how to make the right choice based on your district and power reliability.',
    content: `
## The Solar System Dilemma in Uttarakhand

Uttarakhand features vastly diverse geography—from urban plains like Dehradun, Haldwani, Haridwar, and Roorkee with relatively stable grid power, to remote hill towns and forest peripheries where monsoon storms or winter snowfall can cause prolonged transmission outages.

Selecting the right solar architecture depends directly on your local grid stability, power backup requirements, and budget.

---

## Detailed Comparison: On-Grid vs Hybrid vs Off-Grid

| Feature | On-Grid Solar | Hybrid Solar (with Battery) | Off-Grid Solar |
| :--- | :--- | :--- | :--- |
| **Grid Connection** | Required (UPCL) | Connected to UPCL + Battery | Completely Independent |
| **Power Outage Operation** | Shuts down (anti-islanding) | Seamless instant power backup | 24/7 standalone operation |
| **UPCL Net Metering** | Yes (100% supported) | Yes (Grid export + storage) | No |
| **PM Surya Ghar Subsidy** | Yes (Full subsidy eligible) | Yes (Rooftop portion eligible) | Generally not eligible |
| **Initial Cost** | Lowest (₹50k–₹60k/kW) | Moderate (₹70k–₹85k/kW) | Highest (₹80k–₹95k/kW) |
| **Payback Period** | 2.8 to 3.5 Years | 4.0 to 5.0 Years | 5.5 to 6.5 Years |
| **Best Suited For** | Dehradun, Haldwani, Haridwar, Roorkee, Rudrapur | Outer Dehradun, Mussoorie, Ranikhet, Ramnagar, Nainital | Remote Chamoli, Pithoragarh, Uttarkashi hamlets |

---

## Our Recommendation Based on Your Location

### Choose On-Grid Solar If:
- You live in urban Dehradun, Haldwani city, Haridwar, Roorkee, Kashipur, or Rudrapur where power cuts are rare (< 1 hour daily).
- Your primary objective is **maximum financial savings and the fastest possible payback**.
- You want to maximize your PM Surya Ghar central subsidy benefits.

### Choose Hybrid Solar If:
- You live in outer colonies, hill resorts, or town outskirts (e.g. Mussoorie, Ranikhet, Corbett buffer zone, Bhimtal) experiencing frequent seasonal power cuts.
- You run essential loads (Wi-Fi, refrigeration, medical devices, lighting) that cannot afford disruption.
- You want both the zero-bill financial benefit of net metering AND the peace of mind of 24/7 battery backup.
    `,
    faqs: [
      {
        question: 'Can I start with an on-grid system and add batteries later?',
        answer:
          'Yes! We install hybrid-ready inverters or AC-coupled storage retrofits that allow you to seamlessly add lithium battery packs in the future without replacing your existing solar panels.',
      },
      {
        question: 'Which battery technology is best for hybrid solar in Uttarakhand?',
        answer:
          'Lithium Iron Phosphate (LiFePO4) batteries are the gold standard. They offer 4,000+ charge cycles (10–12 years lifespan), 90% depth of discharge, compact wall-mounted aesthetics, and zero maintenance compared to heavy lead-acid batteries.',
      },
    ],
    relatedSlugs: [
      'pm-surya-ghar-subsidy-uttarakhand-guide',
      'solar-panel-cost-in-haldwani-and-dehradun',
      'solar-panel-maintenance-in-uttarakhand-hills',
    ],
  },
  {
    slug: 'solar-panel-maintenance-in-uttarakhand-hills',
    title: 'Solar Panel Maintenance in Uttarakhand: Cleaning, Snow & Monsoon Care',
    metaTitle: 'Solar Panel Maintenance in Uttarakhand Guide | UTTsolar',
    metaDescription:
      'Practical solar panel maintenance tips for Uttarakhand weather: dust cleaning, monsoon drainage, winter snow management, and inverter health checks.',
    h1: 'Solar Panel Maintenance in Uttarakhand: How to Ensure 25 Years of Peak Performance',
    category: 'Solar Maintenance',
    author: 'Sunil Bhatt',
    authorRole: 'Senior Estimator & Technical Consultant',
    datePublished: '2026-02-05',
    dateModified: '2026-02-18',
    readTime: '4 min read',
    excerpt:
      'How to maintain your solar panels in Uttarakhand through hot dusty summers, heavy monsoon rains, and freezing hill winters to maintain 95%+ peak generation.',
    content: `
## Why Maintenance Matters for Solar PV in Uttarakhand

Solar photovoltaic systems are remarkably durable with no moving parts, but Uttarakhand's distinct climatic seasons pose specific environmental factors:

1. **Spring & Pre-Monsoon (March–May):** High pollen count and airborne dust in the Terai and Doon valleys can reduce panel efficiency by 8–15% if left uncleaned.
2. **Monsoon Season (June–September):** Heavy rainfall naturally washes panels, but proper drainage and moisture-sealed MC4 cable connectors are vital to prevent earth leakage faults.
3. **Winter Season (November–February):** Mountain frost, mist, and occasional snow in high-altitude towns require optimal tilt angles to ensure natural self-clearing.

---

## 5 Essential Solar Maintenance Rules

### 1. Clean Panels Every 15 to 20 Days (Dry Seasons)
Wash panels early in the morning or late in the evening when panels are cool. Never spray cold water on scorching hot panels in the middle of a hot summer afternoon, as thermal shock can crack the tempered glass.

### 2. Use Plain Soft Water & Microfiber Mops
Avoid abrasive detergents, hard brushes, or high-pressure washers that can scratch the anti-reflective coating on your solar glass. A soft microfiber telescopic squeegee with clean water is all that is needed.

### 3. Check Inverter Error Codes & Mobile App Sync
Modern inverters connect to your home Wi-Fi and report daily generation curves on your mobile phone. Check the app once a week; any sudden flat-lining or generation dip indicates a tripped circuit breaker or shade issue.

### 4. Annual Electrical & Structural Audit
Inspect mounting clamps, earthing wire connections, and cable conduit joints once a year before the onset of monsoon winds.

---

## UTTsolar Annual Maintenance Contracts (AMC)

For commercial establishments, factories, and homeowners who prefer hassle-free professional maintenance, UTTsolar offers comprehensive Solar AMC packages including:
- Scheduled bi-monthly pressurized demineralized water cleaning
- Thermal imaging (thermography) to detect module micro-cracks and hot-spots
- Inverter firmware updates and efficiency profiling
- Priority same-day breakdown and repair response across Uttarakhand
    `,
    faqs: [
      {
        question: 'Does rain clean solar panels effectively?',
        answer:
          'Rain washes away loose dust, but light drizzle often leaves sticky muddy streaks when mixed with airborne pollution. A quick manual mop after heavy dust storms ensures maximum generation.',
      },
      {
        question: 'What is the cost of a Solar AMC in Dehradun or Haldwani?',
        answer:
          'Residential AMC packages start from ₹3,500 to ₹5,000 annually for a 3–5 kW system, including 4 preventive inspection and cleaning visits.',
      },
    ],
    relatedSlugs: [
      'solar-panel-cost-in-haldwani-and-dehradun',
      'on-grid-vs-hybrid-solar-uttarakhand',
      'best-solar-company-haldwani-checklist',
    ],
  },
  {
    slug: 'best-solar-company-haldwani-checklist',
    title: 'Best Solar Company in Haldwani: 7 Things Every Homeowner Should Check',
    metaTitle: 'How to Choose the Best Solar Company in Haldwani | UTTsolar',
    metaDescription:
      'Essential checklist before hiring a solar installer in Haldwani. Verify MNRE empanelment, ALMM modules, UPCL net metering experience, and genuine warranty support.',
    h1: 'Best Solar Company in Haldwani: What Homeowners & Businesses Must Check Before Buying',
    category: 'Location Guides',
    author: 'Er. Rajesh Pant',
    authorRole: 'Chief Solar Engineer & Subsidy Specialist',
    datePublished: '2026-02-10',
    dateModified: '2026-02-19',
    readTime: '5 min read',
    excerpt:
      'Planning to install solar in Haldwani, Kathgodam, or Nainital? Here are the 7 critical criteria to evaluate before signing a contract with any solar installer.',
    content: `
## The Solar Boom in Haldwani

With escalating summer temperatures and frequent UPCL electricity tariff revisions, thousands of homeowners across Haldwani (from Mukhani, Kusumkhera, and Heera Nagar to Bareilly Road and Rampur Road) are turning to rooftop solar.

However, with dozens of new contractors entering the market, choosing the right solar EPC partner makes the difference between 25 years of trouble-free zero bills and constant technical headaches.

---

## 7 Critical Checks Before Selecting a Solar Installer

### 1. MNRE Empanelment & PM Surya Ghar Registration
Ensure the company is an officially registered vendor on the National PM Surya Ghar portal. Unregistered installers cannot process your central government subsidy of up to ₹85,800.

### 2. Approved ALMM List-I Solar Modules
Only modules listed under MNRE's Approved List of Models and Manufacturers (ALMM) qualify for subsidies and grid safety. Insist on high-efficiency Mono PERC or TopCon modules from top tier manufacturers.

### 3. Local Physical Presence & In-House Service Team
Avoid fly-by-night middlemen or out-of-state aggregators who subcontract installations to untrained local laborers. Choose an established company with a dedicated office, warehouse, and certified engineers in Haldwani.

### 4. End-to-End UPCL Net Metering Handling
Your solar provider should manage the entire UPCL liaison—from online application and technical feasibility to inspection coordination and bidirectional meter commissioning.

### 5. Wind-Engineered Hot-Dip Galvanized Mounting
Haldwani experiences severe pre-monsoon squalls and storm winds. Ensure the structural mounting uses hot-dip galvanized (HDG) steel or heavy-duty anodized aluminium with minimum 80-micron zinc coating.

### 6. Transparent Itemized Quotation
Beware of vague lump-sum quotes. A professional proposal must itemize panel brand and wattage, inverter specifications, cable thickness, ACDB/DCDB protection, earthing rods, and warranty terms.

### 7. Verifiable Local Project Portfolio
Ask to see actual working installations in your neighborhood. A trustworthy company will gladly share references of completed residential and commercial systems in Haldwani and Nainital.
    `,
    faqs: [
      {
        question: 'Why choose UTTsolar for rooftop solar in Haldwani?',
        answer:
          'UTTsolar is Uttarakhand\'s premier solar engineering company with a local Haldwani service center, 100% in-house certified engineering crews, transparent pricing, guaranteed PM Surya Ghar subsidy processing, and 5-year comprehensive on-site warranty.',
      },
    ],
    relatedSlugs: [
      'pm-surya-ghar-subsidy-uttarakhand-guide',
      'solar-panel-cost-in-haldwani-and-dehradun',
      'upcl-net-metering-process-guide',
    ],
  },
];

export function getAllBlogs(): BlogPost[] {
  return blogs;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogs.filter((b) => b.category === category);
}
