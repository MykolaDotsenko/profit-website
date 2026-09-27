import { en } from './en';
import { uk } from './uk';
import { fi } from './fi';
import { da } from './da';
import { DEFAULT_LOCALE, localeInfo, type Locale } from './locales';
import type { UIStrings } from './types';

const DICTIONARIES: Record<Locale, UIStrings> = { en, uk, fi, da };

export function ui(locale: string | undefined): UIStrings {
  return DICTIONARIES[localeInfo(locale).code as Locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}

export { LOCALES, localeInfo, localePath, localizedEquivalentPath, unprefixLocalePath, DEFAULT_LOCALE, type Locale } from './locales';
export type { UIStrings, UnitStrings, NavItem } from './types';
