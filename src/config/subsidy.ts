/**
 * PM Surya Ghar: Muft Bijli Yojana — Central Financial Assistance
 * Source: MNRE operational guidelines (Feb 2024, amended 2025)
 * Uttarakhand is a special category state — higher CFA rates apply.
 * Update this file when official rates change.
 */
export const subsidyConfig = {
  schemeName: 'PM Surya Ghar: Muft Bijli Yojana',
  lastVerified: '2026-02-01',
  sourceUrl: 'https://mnre.gov.in/en/grid-connected-solar-rooftop-programme/',
  portalUrl: 'https://pmsuryaghar.gov.in',

  /** Uttarakhand qualifies as special category state */
  isSpecialCategoryState: true,

  residential: {
    /** ₹ per kW for first 2 kW */
    firstTwoKwPerKw: 33000,
    /** ₹ per kW for 3rd kW only */
    thirdKwPerKw: 19800,
    /** Maximum kW eligible for CFA */
    maxEligibleKw: 3,
    /** Maximum total CFA for individual household */
    maxTotalSubsidy: 85800, // 33000*2 + 19800
  },

  /** Standard (non-special) rates — for reference / commercial estimates */
  standardResidential: {
    firstTwoKwPerKw: 30000,
    thirdKwPerKw: 18000,
    maxEligibleKw: 3,
    maxTotalSubsidy: 78000,
  },

  ghsRwa: {
    perKw: 19800,
    maxKw: 500,
    perHouseKw: 3,
  },

  disclaimer:
    'Subsidy estimates are based on current MNRE CFA guidelines for Uttarakhand (special category state). Final eligibility, amount and disbursement depend on application on pmsuryaghar.gov.in, DISCOM verification, approved vendor and equipment.',
};

export function calculatePmSuryaGharSubsidy(systemKw: number): number {
  const cfg = subsidyConfig.residential;
  const kw = Math.max(0, systemKw);
  let subsidy = 0;

  if (kw >= 1) {
    subsidy += Math.min(kw, 2) * cfg.firstTwoKwPerKw;
  }
  if (kw > 2) {
    subsidy += Math.min(kw - 2, 1) * cfg.thirdKwPerKw;
  }

  return Math.min(subsidy, cfg.maxTotalSubsidy);
}
