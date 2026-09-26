/**
 * Build-time switches. Values come from environment variables declared in astro.config.mjs,
 * with safe pre-launch defaults.
 */
import { HERO_VARIANT, PILOT_FORM_ENDPOINT, SHOW_CONTENT_STATUS, SITE_INDEXABLE } from 'astro:env/server';
import type { HeroVariantId } from '../content/types';
import { assertReleaseConfiguration } from './release';

/**
 * Provisional development default: H3 v2.
 *
 * A statistics/product-truth surrogate audit found H3 has the lowest current claim-risk and the
 * strongest semantic alignment with the documented Field Profitability boundary. This is NOT
 * farmer evidence and NOT a test winner. H1/H2/H3 remain WWW-000 hypotheses.
 * See docs/experiments/www-000-statistical-surrogate-v1.md.
 */
const DEFAULT_HERO: HeroVariantId = 'h3';
const pilotFormEndpoint = PILOT_FORM_ENDPOINT ?? null;

assertReleaseConfiguration({
  indexable: SITE_INDEXABLE,
  pilotFormEndpoint,
});

export const site = {
  heroVariant: (HERO_VARIANT ?? DEFAULT_HERO) as HeroVariantId,
  showContentStatus: SHOW_CONTENT_STATUS,
  indexable: SITE_INDEXABLE,
  pilotFormEndpoint,
} as const;
