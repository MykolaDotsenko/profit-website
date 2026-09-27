// @ts-check
import { defineConfig, envField } from 'astro/config';

// Provisional B2 production website. Static output only: no server runtime, adapter or framework
// integration. The public hosting/platform decision (WWW-005) remains open; see README.md.
export default defineConfig({
  // Canonical URLs are emitted only when the production origin is known.
  site: process.env.SITE_URL || undefined,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  // English is the development content language. Add a locale here and a dictionary in
  // src/i18n and src/content before creating its routes (README.md → Localization).
  i18n: {
    locales: ['en', 'uk', 'fi'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  env: {
    schema: {
      // Which hero message hypothesis the homepage shows. H1-H3 are WWW-000 v2; H4 is the owner-directed development candidate.
      HERO_VARIANT: envField.enum({ context: 'server', access: 'public', values: ['h1', 'h2', 'h3', 'h4'], optional: true }),
      // Shows the preview banner and "input needed" notes. Keep on until the content gaps are closed.
      SHOW_CONTENT_STATUS: envField.boolean({ context: 'server', access: 'public', default: true }),
      // Pre-launch builds ask search engines not to index them.
      SITE_INDEXABLE: envField.boolean({ context: 'server', access: 'public', default: false }),
      // Pilot form endpoint. Unset = the form validates but sends nothing.
      PILOT_FORM_ENDPOINT: envField.string({ context: 'server', access: 'public', optional: true, url: true }),
    },
  },
});
