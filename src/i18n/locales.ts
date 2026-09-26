/**
 * Locale registry. English is the development content language, not a market decision.
 *
 * To add a locale (e.g. Finnish): add it to astro.config.mjs `i18n.locales`, add an entry here,
 * add src/i18n/<code>.ts and src/content/<code>/, then add routes under src/pages/<code>/.
 * Translate every H1/H2/H3 hero candidate with the same care, and have a native speaker who
 * knows farm vocabulary back-translate economic terms (protocol D5/D6).
 */
export interface LocaleInfo {
  /** Route/content key. */
  code: string;
  /** BCP 47 tag for <html lang>. */
  lang: string;
  dir: 'ltr' | 'rtl';
  /** Locale used by Intl formatting. Numbers, currency and units are formatted per locale. */
  intl: string;
  /** Name of the language in that language, for a future language switcher. */
  name: string;
}

export const LOCALES = {
  en: { code: 'en', lang: 'en', dir: 'ltr', intl: 'en-GB', name: 'English' },
} as const satisfies Record<string, LocaleInfo>;

export type Locale = keyof typeof LOCALES;
export const DEFAULT_LOCALE: Locale = 'en';

export function localeInfo(locale: string | undefined): LocaleInfo {
  return LOCALES[(locale ?? DEFAULT_LOCALE) as Locale] ?? LOCALES[DEFAULT_LOCALE];
}

/** Path for a locale. The default locale has no prefix. */
export function localePath(locale: string | undefined, path: string): string {
  const info = localeInfo(locale);
  if (info.code === DEFAULT_LOCALE) return path;
  return `/${info.code}${path}`;
}
