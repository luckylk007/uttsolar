import { calculatePmSuryaGharSubsidy } from './subsidy';

export type ConnectionType = 'single-phase' | 'three-phase';
export type PropertyType = 'residential' | 'commercial' | 'industrial';
export type SystemType = 'on-grid' | 'hybrid' | 'off-grid';

export interface CalculatorInput {
  monthlyBill: number;
  monthlyUnits?: number;
  location?: string;
  connectionType: ConnectionType;
  propertyType: PropertyType;
  systemType: SystemType;
  roofArea?: number;
  batteryBackup?: boolean;
}

export interface CalculatorResult {
  recommendedKw: number;
  dailyGenerationKwh: number;
  monthlyGenerationKwh: number;
  annualGenerationKwh: number;
  systemCost: number;
  subsidy: number;
  netInvestment: number;
  monthlySaving: number;
  annualSaving: number;
  paybackYears: number;
  savings25Year: number;
  roofAreaRequired: number;
  recommendedLabel: string;
  disclaimer: string;
}

/** Configurable pricing & generation assumptions — update without rewriting calculator UI */
export const calculatorConfig = {
  lastUpdated: '2026-02-01',
  /** Average ₹ per unit (blended tariff estimate for Uttarakhand domestic) */
  avgTariffPerUnit: 6.5,
  /** ₹ per kW installed (Uttarakhand benchmark range midpoint, special category) */
  costPerKw: {
    residential: { 'on-grid': 55000, hybrid: 72000, 'off-grid': 85000 },
    commercial: { 'on-grid': 48000, hybrid: 65000, 'off-grid': 78000 },
    industrial: { 'on-grid': 45000, hybrid: 62000, 'off-grid': 75000 },
  },
  /** Peak sun hours per day — Uttarakhand average */
  peakSunHours: 4.8,
  /** System performance ratio */
  performanceRatio: 0.75,
  /** sq ft roof area per kW */
  sqFtPerKw: 80,
  /** Battery add-on per kW for hybrid/off-grid */
  batteryCostPerKw: 15000,
  /** Commercial/industrial subsidy typically not under PM Surya Ghar residential scheme */
  applyResidentialSubsidy: (propertyType: PropertyType) =>
    propertyType === 'residential',
  disclaimer:
    'Estimated values. Final system size, generation, pricing, subsidy eligibility and savings depend on site conditions, DISCOM rules, approved equipment, applicable government policy and final quotation.',
};

function roundToHalfKw(kw: number): number {
  return Math.max(1, Math.round(kw * 2) / 2);
}

export function calculateSolar(input: CalculatorInput): CalculatorResult {
  const cfg = calculatorConfig;
  const bill = Math.max(500, input.monthlyBill);

  let monthlyUnits = input.monthlyUnits;
  if (!monthlyUnits || monthlyUnits <= 0) {
    monthlyUnits = Math.round(bill / cfg.avgTariffPerUnit);
  }

  const dailyUnits = monthlyUnits / 30;
  let recommendedKw = roundToHalfKw(dailyUnits / (cfg.peakSunHours * cfg.performanceRatio));

  if (input.propertyType === 'commercial') {
    recommendedKw = Math.max(recommendedKw, 5);
  } else if (input.propertyType === 'industrial') {
    recommendedKw = Math.max(recommendedKw, 10);
  }

  if (input.roofArea && input.roofArea > 0) {
    const maxKwFromRoof = Math.floor(input.roofArea / cfg.sqFtPerKw);
    if (maxKwFromRoof > 0) {
      recommendedKw = Math.min(recommendedKw, maxKwFromRoof);
    }
  }

  if (input.connectionType === 'single-phase' && input.propertyType === 'residential') {
    recommendedKw = Math.min(recommendedKw, 5);
  }

  const dailyGeneration = recommendedKw * cfg.peakSunHours * cfg.performanceRatio;
  const monthlyGeneration = dailyGeneration * 30;
  const annualGeneration = dailyGeneration * 365;

  const costPerKw =
    cfg.costPerKw[input.propertyType][input.systemType] +
    (input.batteryBackup && input.systemType !== 'on-grid' ? cfg.batteryCostPerKw : 0);

  const systemCost = Math.round(recommendedKw * costPerKw);

  const subsidy = cfg.applyResidentialSubsidy(input.propertyType)
    ? calculatePmSuryaGharSubsidy(recommendedKw)
    : 0;

  const netInvestment = Math.max(0, systemCost - subsidy);

  const usableGeneration = Math.min(monthlyGeneration, monthlyUnits);
  const monthlySaving = Math.round(usableGeneration * cfg.avgTariffPerUnit);
  const annualSaving = monthlySaving * 12;
  const paybackYears =
    monthlySaving > 0 ? Math.round((netInvestment / annualSaving) * 10) / 10 : 0;
  const savings25Year = annualSaving * 25 - netInvestment;

  const roofAreaRequired = Math.ceil(recommendedKw * cfg.sqFtPerKw);

  const phaseLabel = input.connectionType === 'three-phase' ? '3 Phase' : 'Single Phase';
  const systemLabel =
    input.systemType === 'on-grid'
      ? 'On-Grid'
      : input.systemType === 'hybrid'
        ? 'Hybrid'
        : 'Off-Grid';

  return {
    recommendedKw,
    dailyGenerationKwh: Math.round(dailyGeneration * 10) / 10,
    monthlyGenerationKwh: Math.round(monthlyGeneration),
    annualGenerationKwh: Math.round(annualGeneration),
    systemCost,
    subsidy,
    netInvestment,
    monthlySaving,
    annualSaving,
    paybackYears,
    savings25Year: Math.round(savings25Year),
    roofAreaRequired,
    recommendedLabel: `Recommended: ${recommendedKw} kW ${systemLabel} — ${phaseLabel}`,
    disclaimer: cfg.disclaimer,
  };
}
