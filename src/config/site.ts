/**
 * Build-time switches. Values come from environment variables declared in astro.config.mjs,
 * with safe pre-launch defaults.
 */
import { HERO_VARIANT, PILOT_FORM_ENDPOINT, SHOW_CONTENT_STATUS, SITE_INDEXABLE } from 'astro:env/server';
import type { HeroVariantId } from '../content/types';

/**
 * Default hero: H2 v2, the control direction in its product-truth-safe form. It is shown for
 * development only and is not a test winner. WWW-000 decides; see docs/experiments/hero-message-test-v1.md.
 */
const DEFAULT_HERO: HeroVariantId = 'h2';

export const site = {
  heroVariant: (HERO_VARIANT ?? DEFAULT_HERO) as HeroVariantId,
  showContentStatus: SHOW_CONTENT_STATUS,
  indexable: SITE_INDEXABLE,
  pilotFormEndpoint: PILOT_FORM_ENDPOINT ?? null,
} as const;
