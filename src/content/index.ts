/**
 * Locale → content bundle. A new locale adds `src/content/<code>/` with the same shape;
 * `SiteContent` makes a missing or misshaped string a type error.
 */
import { localeInfo, type Locale } from '../i18n';
import * as en from './en';

export type SiteContent = typeof en;

const BUNDLES: Record<Locale, SiteContent> = { en };

export function content(locale: string | undefined): SiteContent {
  return BUNDLES[localeInfo(locale).code as Locale];
}
