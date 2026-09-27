# Production Asset & Font Network Audit v1

Status: **CI-enforced production-build evidence**  
Date: **2026-09-27**  
Criterion: **PE-04**

## Scope

This audit covers the built Astro artifact served by `astro preview` in Site Verify. It verifies the asset markup and browser request behavior that are determined by the release artifact itself.

It does **not** substitute for:
- production Core Web Vitals / RUM (PE-02);
- live-origin SEO/crawl verification (RI-03).

## Documentary image

Real production asset:
- Finnish wheat field, Vampula;
- provenance: `docs/release/evidence/documentary-fi-wheat-vampula-2022-01.md`;
- responsive source candidates: 640 / 1024 / 1280 px;
- explicit intrinsic dimensions: 1280 × 853;
- `sizes`: `(min-width: 60rem) 52vw, 100vw`;
- below-fold `loading="lazy"`;
- `decoding="async"`;
- `fetchpriority="auto"`.

Browser QA scrolls the image into the loading range and confirms a real image request appears in the production-build request waterfall.

## Font policy

PROFIT deliberately uses the operating system font stack:
- sans: system-ui / Segoe UI / Roboto / Helvetica / Arial / Noto Sans fallbacks;
- labels/mono: system UI monospace fallbacks.

Therefore the release artifact should have:
- no `@font-face` rules;
- no `<link rel="preload" as="font">`;
- no browser requests with resource type `font`.

Browser QA enforces all three conditions.

## Why this satisfies PE-04

PE-04 is about the production asset policy encoded in the built artifact: responsive image sizing, explicit dimensions, loading priority and minimal font payload/preload strategy.

The CI browser test inspects the actual production build and its request waterfall. A later CDN/live deployment cannot be used to silently weaken these source-level guarantees without causing the same tests to change or fail.

Live field performance remains separately blocked under PE-02 until RUM exists.
