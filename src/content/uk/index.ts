import * as en from '../en';
import { HOME_TRANSLATIONS } from './translations-home';
import { SHARED_TRANSLATIONS } from './translations-shared';
import { PAGES_A_TRANSLATIONS } from './translations-pages-a';
import { PAGES_B_TRANSLATIONS } from './translations-pages-b';
import { PAGES_C_TRANSLATIONS } from './translations-pages-c';
import { PAGES_D_TRANSLATIONS } from './translations-pages-d';
import { SIMPLE_TRANSLATIONS } from './translations-simple';

const EXTRA_TRANSLATIONS: Record<string, string> = {
  'The first PROFIT module. The operating economics of each field, season by season.':
    'Перший модуль PROFIT. Операційна економіка кожного поля, сезон за сезоном.',
  'Revenue': 'Виручка',
  'The operating economics of each field, season by season. It is where PROFIT starts.':
    'Операційна економіка кожного поля, сезон за сезоном. Саме з цього починає PROFIT.',
  'Field Profitability · In development — not yet available':
    'Прибутковість поля · У розробці — ще недоступно',
  'Hypothetical · Confidence: Not assessed':
    'Гіпотетичне · Впевненість: не оцінено',
};

const TRANSLATIONS: Record<string, string> = {
  ...HOME_TRANSLATIONS,
  ...SHARED_TRANSLATIONS,
  ...PAGES_A_TRANSLATIONS,
  ...PAGES_B_TRANSLATIONS,
  ...PAGES_C_TRANSLATIONS,
  ...PAGES_D_TRANSLATIONS,
  ...SIMPLE_TRANSLATIONS,
  ...EXTRA_TRANSLATIONS,
};

function localize<T>(value: T): T {
  if (typeof value === 'string') {
    return (TRANSLATIONS[value] ?? value) as T;
  }

  if (typeof value === 'function') {
    const fn = value as (...args: unknown[]) => unknown;
    return ((...args: unknown[]) => localize(fn(...args))) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => localize(item)) as T;
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, localize(item)]),
    ) as T;
  }

  return value;
}

export const home = localize(en.home);
export const farmers = localize(en.farmers);
export const product = localize(en.product);
export const trust = localize(en.trust);
export const company = localize(en.company);
export const investors = localize(en.investors);
export const contact = localize(en.contact);
export const notFound = localize(en.notFound);
export const shared = localize(en.shared);
