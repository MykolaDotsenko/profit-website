/**
 * Locale registry. English is the development content language, not a market decision.
 *
 * English remains the default unprefixed locale. Ukrainian and Finnish are opt-in localized route sets under /uk/ and /fi/.
 * New locales must preserve product/economic/evidence semantics and receive terminology review.
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
  uk: { code: 'uk', lang: 'uk', dir: 'ltr', intl: 'uk-UA', name: 'Українська' },
  fi: { code: 'fi', lang: 'fi', dir: 'ltr', intl: 'fi-FI', name: 'Suomi' },
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

/** Remove the current locale prefix so the equivalent route can be linked in another locale. */
export function unprefixLocalePath(locale: string | undefined, path: string): string {
  const info = localeInfo(locale);
  if (info.code === DEFAULT_LOCALE) return path || '/';
  const prefix = `/${info.code}`;
  if (path === prefix || path === `${prefix}/`) return '/';
  return path.startsWith(`${prefix}/`) ? path.slice(prefix.length) : path;
}

/** Equivalent route in another locale; used by the language switcher and hreflang links. */
export function localizedEquivalentPath(
  targetLocale: Locale,
  currentLocale: string | undefined,
  currentPath: string,
): string {
  const basePath = unprefixLocalePath(currentLocale, currentPath);
  return localePath(targetLocale, basePath);
}
