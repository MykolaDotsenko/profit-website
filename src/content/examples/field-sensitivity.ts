/**
 * Internal/public trust illustration only.
 *
 * Deterministic sensitivity around the statistics-calibrated synthetic Field 31 example.
 * This is not a forecast, optimisation feature or customer result. Costs are intentionally
 * held constant so the table isolates yield/price sensitivity.
 */
import { focusField, fieldSeasonExample } from './field-season.ts';
import { computeFieldEconomics, roundMoney } from '../../domain/economics.ts';

const base = focusField(fieldSeasonExample).inputs;

export const fieldSensitivityCurrency = fieldSeasonExample.currency;

export interface SensitivityScenario {
  id: 'downside' | 'base' | 'price-up' | 'yield-up' | 'upside';
  yieldPerHa: number;
  pricePerT: number;
  operatingCostsPerHa: number;
  operatingProfitPerHa: number;
  note: string;
}

function scenario(
  id: SensitivityScenario['id'],
  yieldFactor: number,
  priceFactor: number,
  note: string,
): SensitivityScenario {
  const inputs = {
    ...base,
    yieldPerHa: base.yieldPerHa * yieldFactor,
    pricePerT: base.pricePerT * priceFactor,
  };
  const economics = computeFieldEconomics(inputs);
  return {
    id,
    yieldPerHa: roundMoney(inputs.yieldPerHa),
    pricePerT: roundMoney(inputs.pricePerT),
    operatingCostsPerHa: roundMoney(economics.operatingCostsPerHa),
    operatingProfitPerHa: roundMoney(economics.operatingProfitPerHa),
    note,
  };
}

export const fieldSensitivityScenarios: readonly SensitivityScenario[] = [
  scenario('downside', 0.9, 0.9, 'Yield −10% and price −10%; costs held constant.'),
  scenario('base', 1, 1, 'Calibrated synthetic base case.'),
  scenario('price-up', 1, 1.1, 'Price +10%; yield and costs held constant.'),
  scenario('yield-up', 1.1, 1, 'Yield +10%; price and costs held constant.'),
  scenario('upside', 1.1, 1.1, 'Yield +10% and price +10%; costs held constant.'),
] as const;

export const fieldSensitivityBreakEven = {
  pricePerT: roundMoney(computeFieldEconomics(base).breakEvenPrice),
  yieldPerHa: roundMoney(computeFieldEconomics(base).breakEvenYield),
} as const;
