/**
 * Locale presentation of economic values. Meaning stays in src/domain/economics.ts; this file
 * only decides how a value is written for one locale.
 */
import type { EconomicValue } from './economics';
import type { UnitStrings } from '../i18n/types';

const MINUS = '−';
const NBSP = ' ';

function join(parts: Intl.NumberFormatPart[]): string {
  // Typographic minus instead of a hyphen, in every locale.
  return parts.map((p) => (p.type === 'minusSign' ? MINUS : p.value)).join('');
}

export function formatNumber(value: number, locale: string, fractionDigits = 0): string {
  const nf = new Intl.NumberFormat(locale, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  return join(nf.formatToParts(value));
}

export function formatMoney(amount: number, currency: string, locale: string, fractionDigits = 0): string {
  const nf = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  return join(nf.formatToParts(amount));
}

/** Long form for assistive technology, e.g. "minus 96 euros". */
export function spokenMoney(amount: number, currency: string, locale: string, fractionDigits = 0): string {
  const nf = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'name',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  const text = nf.format(Math.abs(amount));
  return amount < 0 ? `${MINUS}${text}` : text;
}

export function formatPercent(ratio: number, locale: string, fractionDigits = 0): string {
  const nf = new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  return join(nf.formatToParts(ratio));
}

export interface PresentedValue {
  /** Main figure, e.g. "−€96". */
  figure: string;
  /** Unit written after the figure, e.g. "/ha". Empty when none. */
  unit: string;
  /** Full text for screen readers, e.g. "−96 euros per hectare". */
  spoken: string;
  negative: boolean;
}

export interface FormatOptions {
  fractionDigits?: number;
}

/** Presents one value for a locale. Throws if a money value has no currency. */
export function present(value: EconomicValue, locale: string, units: UnitStrings, opts: FormatOptions = {}): PresentedValue {
  const digits = opts.fractionDigits ?? 0;
  const negative = value.amount < 0;

  if (value.mass) {
    const figure = formatNumber(value.amount, locale, opts.fractionDigits ?? 1);
    const perArea = value.perArea ? units.perArea[value.perArea] : '';
    return {
      figure,
      unit: `${NBSP}${units.mass[value.mass]}${perArea}`,
      spoken: `${figure} ${units.spoken.mass[value.mass]}${value.perArea ? ` ${units.spoken.perArea[value.perArea]}` : ''}`,
      negative,
    };
  }

  const currency = value.currency;
  if (!currency) throw new Error(`Value for "${value.metric}" has no currency. Currency is data, not a site default.`);
  const figure = formatMoney(value.amount, currency, locale, digits);
  const spokenFigure = spokenMoney(value.amount, currency, locale, digits);
  let unit = '';
  let spokenUnit = '';
  if (value.perArea) {
    unit = units.perArea[value.perArea];
    spokenUnit = ` ${units.spoken.perArea[value.perArea]}`;
  } else if (value.perMass) {
    unit = units.perMass[value.perMass];
    spokenUnit = ` ${units.spoken.perMass[value.perMass]}`;
  }
  return { figure, unit, spoken: `${spokenFigure}${spokenUnit}`, negative };
}
