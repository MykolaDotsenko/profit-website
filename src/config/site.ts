/**
 * Build-time switches. Values come from environment variables declared in astro.config.mjs,
 * with safe pre-launch defaults.
 */
import { HERO_VARIANT, PILOT_FORM_ENDPOINT, SHOW_CONTENT_STATUS, SITE_INDEXABLE } from 'astro:env/server';
import type { HeroVariantId } from '../content/types';
import { assertReleaseConfiguration } from './release';

/**
 * Provisional development default: H4.
 *
 * H4 is an owner-directed economic-decision clarity candidate added after the H1/H2/H3
 * statistical surrogate. It has no farmer evidence and is not a test winner. The release gate
 * remains blocked until human validation. H1/H2/H3 remain selectable unchanged.
 */
const DEFAULT_HERO: HeroVariantId = 'h4';
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
