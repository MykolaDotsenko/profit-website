# PROFIT Website — Triple-Check Audit

Date: 2026-09-26
Status: Completed after three independent passes

## Purpose

Validate the accumulated website research and documentation for:

1. internal consistency;
2. factual/current-source accuracy;
3. execution quality and alignment with PROFIT's farmer-first / VEV principles.

## Corrections made

### 1. TypeScript baseline corrected — material technical issue

Previous docs recommended:

**Astro 7.3 + TypeScript 7**

Current verified position:

- TypeScript 7.0 is stable generally.
- Microsoft explicitly says Astro/Vue/Svelte/MDX embedded-language workflows should remain on **TypeScript 6.0** for now because TS7 does not yet expose the stable programmatic APIs they need.

Decision:

**Astro 7.3.x + TypeScript 6.x** is the current coded-site baseline.

Reconsider when upstream Astro/TypeScript tooling explicitly supports TS7 end-to-end.

Primary source:
https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/

### 2. Prototype evidence labeling corrected — material trust issue

Previous prototype combined fabricated demonstration values with:

- Observed
- Confidence: High

This conflicts with the PROFIT VEV standard.

Corrected to:

- Hypothetical example
- Confidence: Not assessed

Rule:

Illustrative visual data must never carry evidence/confidence labels that imply real observation or validation.

### 3. Future "Observed: 2027 season" example removed

On 2026-09-26, an illustrative future season cannot be represented as observed evidence.

The example is now explicitly hypothetical.

### 4. Information architecture consolidated

Previous docs alternated between:

- /security
- /trust
- /results as mandatory v1

Decision:

Core launch:

- /
- /product
- /farmers
- /trust
- /company
- /investors
- /contact

Add **/results** only when real evidence/case studies justify it.

Split **/security** from **/trust** only when content depth or customer requirements justify it.

### 5. Platform decision clarified

Astro is not an irrevocably chosen production platform.

Decision:

- Framer remains valid when it materially accelerates positioning/design validation.
- Astro is the preferred coded-production shell if/when source ownership/custom engineering justify code.
- Do not scaffold engineering purely for technological preference.

### 6. Documentation hierarchy clarified

Operational source of truth:

**docs/website-blueprint-v1.md**

Strategic source of truth:

**docs/website-strategy.md**

Other documents are research/supporting evidence and must not silently override the Blueprint.

### 7. Economic typography language corrected

"Economic typography is a potential moat" was too strong.

Corrected to:

**potential distinctive brand asset**

A visual treatment becomes defensible only through real recognition, memory linkage, consistency, and broader business advantage — not because it looks unique in a design document.

### 8. Scroll-triggered animation browser claim corrected

An early Chrome article projected scroll-triggered animations for Chrome 145.

Stable Chrome release notes place the shipped feature in **Chrome 146**.

Use progressive enhancement regardless.

Primary sources:
https://developer.chrome.com/blog/scroll-triggered-animations
https://developer.chrome.com/release-notes/146

## Facts re-verified and retained

### Core Web Vitals

Current recommended good thresholds remain:

- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1
- evaluate at p75, mobile and desktop separately

Primary source:
https://web.dev/articles/vitals

### Accessibility

**WCAG 2.2 AA** remains the correct website target.

WCAG 2.2 is the current W3C Recommendation family used for this target and is now also ISO/IEC 40500:2025.

Primary sources:
https://www.w3.org/TR/WCAG22/
https://www.w3.org/WAI/news/2025-10-21/wcag22-iso/

### Current ecosystem facts relevant to our decision

Verified on 2026-09-26:

- Astro 7.3 released 2026-09-03
- React 19.3 released 2026-09-09
- Next.js 16.3 is Active LTS; current security patching must be tracked if adopted
- Tailwind CSS 4.3 is the current published feature release
- Vite 8.1 is the current published 8.x release

These facts do not change the minimum-complexity recommendation for PROFIT.

## Findings that remain valid

### Strategy

- farmer-first homepage;
- investor journey separated;
- Field Profitability as the current concrete wedge;
- positioning/category wording remains a hypothesis;
- Join the pilot remains a sensible current CTA hypothesis.

### Evidence

- Verified Economic Value is canonical;
- Hypothetical → Modelled → Observed → Attributed → Verified remains the evidence ladder;
- uncertainty/confidence should be visible;
- do not invent social proof, savings, or attribution.

### Design

- Real agriculture. Financial precision. Editorial clarity. Quiet technology.
- typography before decoration;
- real agriculture + economic/data overlays;
- anti-AI-sameness system;
- controlled visual effects;
- mobile as intentional composition.

### Frontend

- static/native-first architecture;
- minimal client JS;
- islands only when justified;
- Playwright verification loop;
- WCAG 2.2 AA;
- Core Web Vitals targets above.

### Visual effects

- SVG/field geometry;
- CSS scroll-driven animation;
- View Transitions;
- GSAP only when native techniques are insufficient;
- no decorative WebGL/Three.js by default.

## Primary remaining uncertainties

These are not errors; they require real user evidence:

1. Is "Agricultural Decision Intelligence" understandable/useful to farmers?
2. Which headline creates the strongest comprehension and qualified interest?
3. Is Field Profitability the best homepage proof point for the first target cohort?
4. Does visible uncertainty increase or decrease farmer trust in practice?
5. Which distinctive brand codes are actually remembered after exposure?
6. Does the Field → Economics Reveal improve comprehension enough to justify motion?
7. Framer vs coded production: which path maximizes learning speed at the moment of implementation?

## Execution conclusion

The research foundation is now internally coherent enough to move from general research into validation.

The marginal value of more broad theory is lower than the value of:

- farmer comprehension testing;
- three art-direction prototypes;
- brand-code recognition tests;
- validating the signature effect;
- then choosing production platform.

Current doctrine:

**Create clarity → show product truth → expose evidence → preserve farmer control → test distinctiveness → then scale the implementation.**
