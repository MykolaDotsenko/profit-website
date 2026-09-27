import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const fail = (message) => {
  console.error(`Localization contract violation: ${message}`);
  process.exitCode = 1;
};

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const config = read('astro.config.mjs');
const locales = read('src/i18n/locales.ts');
const dictionaries = read('src/i18n/index.ts');
const contentIndex = read('src/content/index.ts');
const header = read('src/components/SiteHeader.astro');
const layout = read('src/layouts/BaseLayout.astro');

if (!config.includes("locales: ['en', 'uk', 'fi']")) fail('Astro must register EN, UK and FI in that order.');
if (!config.includes("defaultLocale: 'en'")) fail('English must remain the default locale.');
if (!locales.includes("DEFAULT_LOCALE: Locale = 'en'")) fail('English must remain the unprefixed locale.');
if (!locales.includes("uk: { code: 'uk'")) fail('Ukrainian locale registry entry is missing.');
if (!locales.includes("fi: { code: 'fi'")) fail('Finnish locale registry entry is missing.');
if (!dictionaries.includes('const DICTIONARIES: Record<Locale, UIStrings> = { en, uk, fi }')) fail('All UI dictionaries must be registered.');
if (!contentIndex.includes('const BUNDLES: Record<Locale, SiteContent> = { en, uk, fi }')) fail('All content bundles must be registered.');

for (const locale of ['uk', 'fi']) {
  for (const route of ['index', 'farmers', 'product', 'trust', 'company', 'investors', 'contact']) {
    const file = path.join(root, 'src/pages', locale, `${route}.astro`);
    if (!fs.existsSync(file)) fail(`missing localized route: src/pages/${locale}/${route}.astro`);
  }
}

for (const file of [
  'src/i18n/uk.ts',
  'src/content/uk/index.ts',
  'src/content/uk/translations-home.ts',
  'src/content/uk/translations-shared.ts',
  'src/content/uk/translations-pages-a.ts',
  'src/content/uk/translations-pages-b.ts',
  'src/content/uk/translations-pages-c.ts',
  'src/content/uk/translations-pages-d.ts',
  'src/content/uk/translations-simple.ts',
  'src/i18n/fi.ts',
  'src/content/fi/index.ts',
  'src/content/fi/translations-home.ts',
  'src/content/fi/translations-shared.ts',
  'src/content/fi/translations-pages-a.ts',
  'src/content/fi/translations-pages-b.ts',
  'src/content/fi/translations-pages-c.ts',
  'src/content/fi/translations-pages-d.ts',
  'src/content/fi/translations-simple.ts',
]) {
  if (!fs.existsSync(path.join(root, file))) fail(`missing localization artifact: ${file}`);
}

if (!header.includes("localizedEquivalentPath('en'")) fail('language switcher must preserve the equivalent English route.');
if (!header.includes("localizedEquivalentPath('uk'")) fail('language switcher must preserve the equivalent Ukrainian route.');
if (!header.includes("localizedEquivalentPath('fi'")) fail('language switcher must preserve the equivalent Finnish route.');
if (!layout.includes('hreflang="x-default"')) fail('x-default hreflang must point to the English equivalent.');
if (!layout.includes('languageAlternates')) fail('language alternate metadata is missing.');

const sourceFiles = [
  'src/components/SiteHeader.astro',
  'src/layouts/BaseLayout.astro',
  'src/i18n/locales.ts',
].map(read).join('\n');
for (const forbidden of ['navigator.language', 'navigator.languages', 'location.replace(', 'location.assign(']) {
  if (sourceFiles.includes(forbidden)) fail(`automatic language redirect pattern is prohibited: ${forbidden}`);
}

if (!process.exitCode) {
  console.log('Localization contract OK: English remains default; Ukrainian and Finnish are opt-in under /uk and /fi with route-preserving switching.');
}
