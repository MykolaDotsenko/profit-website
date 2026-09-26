import { en } from './en';
import { DEFAULT_LOCALE, localeInfo, type Locale } from './locales';
import type { UIStrings } from './types';

const DICTIONARIES: Record<Locale, UIStrings> = { en };

export function ui(locale: string | undefined): UIStrings {
  return DICTIONARIES[localeInfo(locale).code as Locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}

export { localeInfo, localePath, DEFAULT_LOCALE, type Locale } from './locales';
export type { UIStrings, UnitStrings, NavItem } from './types';
