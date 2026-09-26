/**
 * Locale-neutral economic semantics (Blueprint §2.3).
 *
 * A metric's identity, definition and version are kept apart from its value, currency,
 * production unit and period, and all of those are kept apart from presentation (labels,
 * number formatting, currency symbols), which lives in src/i18n and src/domain/format.ts.
 * `€637/ha` is a presentation of a value, not the metric.
 */

/**
 * Production domains with documented product truth.
 * Only the crop domain (Field Profitability, Blueprint §2.2) is documented. Pig production and
 * dairy are future and unshipped: add a domain here only when its product truth is documented,
 * with its own production units. Do not reuse per-hectare units for them.
 */
export type ProductionDomain = 'crop';

/** ISO 4217 code. The currency is data carried with each value, never a site-wide default. */
export type CurrencyCode = string;

/** Normalisation units per domain. Crop metrics normalise per hectare. */
export interface DomainUnits {
  crop: { area: 'ha'; mass: 't' };
}
export type AreaUnit = DomainUnits['crop']['area'];
export type MassUnit = DomainUnits['crop']['mass'];

export type MetricId =
  | 'yield'
  | 'price'
  | 'revenue'
  | 'variable_costs'
  | 'allocated_fixed_costs'
  | 'operating_costs'
  | 'gross_margin'
  | 'operating_profit'
  | 'operating_margin'
  | 'break_even_price'
  | 'break_even_yield';

/** What kind of quantity a metric is. Presentation decides how each is written. */
export type MetricDimension =
  | 'money' // e.g. operating profit of a field
  | 'money_per_area' // e.g. operating profit per hectare
  | 'money_per_mass' // e.g. price per tonne
  | 'mass_per_area' // e.g. yield per hectare
  | 'ratio'; // e.g. operating margin

export interface MetricDefinition {
  id: MetricId;
  domain: ProductionDomain;
  /** Identifies the definition this value was calculated under. */
  version: string;
  /** Formula over metric ids. Not a display string. */
  formula: string | null;
  dimension: MetricDimension;
  /** Where the definition comes from, for review when the source changes. */
  source: string;
  /** Set when the formula is inferred and still needs product-owner confirmation. */
  needsReview?: string;
}

const FP_SOURCE = 'Blueprint §2.2 Field Profitability product-truth boundary';
const FP_VERSION = 'fp-boundary-2026-09-26';

/** Field Profitability metric definitions. Operating profit is not gross margin and not statutory net profit. */
export const METRICS: Record<MetricId, MetricDefinition> = {
  yield: { id: 'yield', domain: 'crop', version: FP_VERSION, formula: null, dimension: 'mass_per_area', source: FP_SOURCE },
  price: { id: 'price', domain: 'crop', version: FP_VERSION, formula: null, dimension: 'money_per_mass', source: FP_SOURCE },
  revenue: { id: 'revenue', domain: 'crop', version: FP_VERSION, formula: 'yield × price', dimension: 'money_per_area', source: FP_SOURCE },
  variable_costs: { id: 'variable_costs', domain: 'crop', version: FP_VERSION, formula: null, dimension: 'money_per_area', source: FP_SOURCE },
  allocated_fixed_costs: {
    id: 'allocated_fixed_costs',
    domain: 'crop',
    version: FP_VERSION,
    formula: null,
    dimension: 'money_per_area',
    source: FP_SOURCE,
  },
  operating_costs: {
    id: 'operating_costs',
    domain: 'crop',
    version: FP_VERSION,
    formula: 'variable_costs + allocated_fixed_costs',
    dimension: 'money_per_area',
    source: FP_SOURCE,
  },
  gross_margin: {
    id: 'gross_margin',
    domain: 'crop',
    version: FP_VERSION,
    formula: 'revenue − variable_costs',
    dimension: 'money_per_area',
    source: FP_SOURCE,
  },
  operating_profit: {
    id: 'operating_profit',
    domain: 'crop',
    version: FP_VERSION,
    formula: 'revenue − variable_costs − allocated_fixed_costs',
    dimension: 'money_per_area',
    source: FP_SOURCE,
  },
  operating_margin: {
    id: 'operating_margin',
    domain: 'crop',
    version: FP_VERSION,
    formula: 'operating_profit ÷ revenue',
    dimension: 'ratio',
    source: FP_SOURCE,
    needsReview: 'Formula inferred from the metric name; confirm against the Field Profitability reference.',
  },
  break_even_price: {
    id: 'break_even_price',
    domain: 'crop',
    version: FP_VERSION,
    formula: 'operating_costs ÷ yield',
    dimension: 'money_per_mass',
    source: FP_SOURCE,
    needsReview: 'Price at which operating profit is zero; confirm the reference uses operating (not variable) costs.',
  },
  break_even_yield: {
    id: 'break_even_yield',
    domain: 'crop',
    version: FP_VERSION,
    formula: 'operating_costs ÷ price',
    dimension: 'mass_per_area',
    source: FP_SOURCE,
    needsReview: 'Yield at which operating profit is zero; confirm the reference uses operating (not variable) costs.',
  },
};

/** One economic value with its identity and units, but no presentation. */
export interface EconomicValue {
  metric: MetricId;
  amount: number;
  currency?: CurrencyCode;
  perArea?: AreaUnit;
  mass?: MassUnit;
  perMass?: MassUnit;
}

export interface Period {
  kind: 'season';
  count: number;
}

/** Inputs for one field and season, per hectare, in one currency. */
export interface FieldInputs {
  yieldPerHa: number; // t/ha
  pricePerT: number; // currency per t
  variableCostsPerHa: number;
  allocatedFixedCostsPerHa: number;
}

export interface FieldEconomics {
  revenuePerHa: number;
  operatingCostsPerHa: number;
  grossMarginPerHa: number;
  operatingProfitPerHa: number;
  breakEvenPrice: number;
  breakEvenYield: number;
}

/**
 * Deterministic arithmetic for illustrations. Real outputs must come from the validated
 * product calculation, not from this site (AGENTS.md §4).
 */
export function computeFieldEconomics(i: FieldInputs): FieldEconomics {
  const revenuePerHa = i.yieldPerHa * i.pricePerT;
  const operatingCostsPerHa = i.variableCostsPerHa + i.allocatedFixedCostsPerHa;
  return {
    revenuePerHa,
    operatingCostsPerHa,
    grossMarginPerHa: revenuePerHa - i.variableCostsPerHa,
    operatingProfitPerHa: revenuePerHa - operatingCostsPerHa,
    breakEvenPrice: operatingCostsPerHa / i.yieldPerHa,
    breakEvenYield: operatingCostsPerHa / i.pricePerT,
  };
}

/** Rounds to cents so illustrative arithmetic can be compared exactly. */
export function roundMoney(amount: number): number {
  return Math.round(amount * 100) / 100;
}
