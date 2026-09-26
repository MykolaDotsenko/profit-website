# PROFIT Website Blueprint v1

Status: Working baseline
Date: 2026-09-26

This document converts the research in this repository into one implementation-ready blueprint.

## 1. Core objective

Build a premium public website that helps a farmer quickly understand:
- what PROFIT is;
- why it matters economically;
- how it works;
- what evidence supports the claims;
- what PROFIT needs from the farmer;
- what happens next.

Secondary objective:
give investors a credible, evidence-led view of the problem, wedge, value creation logic and scalability.

## 2. Core principles

1. **Farmer value first.**
2. **Farmer is the hero; PROFIT is the guide.**
3. **Evidence before hype.**
4. **Simple surface, inspectable depth.**
5. **Make confidence visible.**
6. **Make uncertainty understandable.**
7. **Make farmer control explicit.**
8. **Real agriculture. Financial precision. Editorial clarity. Quiet technology.**
9. **No section exists because “modern startup sites usually have it.”**
10. **Every visual and technical choice must improve clarity, trust, differentiation or qualified conversion.**

## 3. Primary positioning hypothesis

Category:
**Agricultural Decision Intelligence**

Primary headline candidate:
**Turn farm data into more profitable decisions.**

Supporting line:
**PROFIT connects what happens on the farm with what it means economically.**

Important:
These are hypotheses. Validate with real farmers before treating them as fixed brand language.

## 4. Core narrative

The website should explain:

**Farm reality → Data → Economic interpretation → Decision → Action → Measured outcome**

When evidence permits:

**Baseline → Counterfactual → PROFIT intervention → Actual outcome → Incremental economic effect → Attribution → Confidence**

Canonical value term:
**Verified Economic Value (VEV)**

Do not use “verified” unless the evidence standard is actually met.

## 5. Homepage architecture

### 01 — Hero

Goal:
Immediate orientation and relevance.

Content:
- category eyebrow;
- one clear farmer-economic outcome;
- one short supporting explanation;
- one primary CTA;
- one secondary CTA;
- credible product/farm visual.

Default:
- Eyebrow: AGRICULTURAL DECISION INTELLIGENCE
- Headline: Turn farm data into more profitable decisions.
- Support: PROFIT connects what happens on the farm with what it means economically.
- Primary CTA: Join the pilot
- Secondary CTA: See how PROFIT works

### 02 — Farmer economic questions

Goal:
Make the problem concrete.

Examples:
- Which field is actually profitable?
- Where are costs increasing?
- What is causing margin loss?
- What should change next?

Visual:
large editorial typography, not four identical cards.

### 03 — Why this is hard today

Goal:
Show the current fragmented state without attacking competitors.

Explain the split between:
- production data;
- operations;
- costs;
- weather/external factors;
- economic interpretation.

### 04 — PROFIT point of view

Candidate statement:

**Farm data becomes valuable when it improves a decision and the economic effect can be measured.**

This should be tested.

### 05 — How PROFIT works

Show:
**Data → Economics → Decision → Action → Measurement**

Prefer one strong visual system rather than a long feature list.

### 06 — Product proof

Lead with the first concrete wedge:
**Field Profitability**

Show real or realistic product UI.

Do not present future modules as if already production-ready.

### 07 — Hard questions / objection handling

Answer real buyer questions:
- What data do you need?
- Can this work with old machinery?
- What if data is incomplete?
- How accurate are the calculations?
- Who owns the data?
- What does “verified” mean?
- What happens when confidence is low?
- What does PROFIT not do?

### 08 — Evidence

Use explicit states:
- Modelled
- Observed
- Attributed
- Verified

Also show:
- confidence;
- time period;
- data source;
- assumptions;
- limitations.

### 09 — Trust

Show:
- methodology;
- data ownership/control;
- security/privacy principles;
- team;
- real product;
- transparent limitations.

Trust is part of the sales argument.

### 10 — Company

Human, specific and factual:
- what we are building;
- why;
- who is building it;
- what expertise exists;
- what is still being proven.

Avoid generic founder language.

### 11 — CTA

Primary:
**Join the pilot**

Explain exactly what happens after clicking.

Keep form short.

## 6. Information architecture

Recommended core launch:

- /
- /farmers
- /product
- /trust
- /company
- /investors
- /contact

Add **/results** only when real pilot/case-study evidence is strong enough to support a dedicated page.

Keep security/privacy/methodology under **/trust** initially. Create a separate **/security** page only when content depth or customer requirements justify it.

Do not create empty “SaaS completeness” pages.

## 7. Visual system

### Core motif

**Real farm artifact → precise data layer → economic meaning**

Examples:
- aerial field → boundary/data → margin;
- tractor operation → activity/cost → €/ha;
- farm image → production metrics → economic outcome.

### Typography

Roles:
- display;
- section heading;
- body;
- caption;
- metric-large;
- metric-small;
- evidence label.

Use tabular numerals where appropriate.

Economic metrics should become a recognizable brand asset.

### Color

Use semantic roles:
- canvas;
- primary text;
- secondary text;
- brand;
- positive value;
- attention;
- risk;
- evidence/confidence neutrals.

Do not reduce brand identity to “green = agriculture”.

### Photography

Prefer:
- real operators;
- actual fields;
- machinery;
- livestock;
- crop/soil details;
- aerial geometry;
- operational moments.

Every image should prove something real about farming.

### Layout

Use editorial rhythm:
- spacious vs dense;
- text-first vs image-first;
- full-bleed vs contained;
- single metric vs metric cluster;
- photography vs product visualization.

Avoid repeating “headline + 3 cards” in every section.

## 8. Trust and evidence design

Standardize these states across the site:

### Evidence
- Hypothetical
- Modelled
- Observed
- Attributed
- Verified

### Confidence
Assessed confidence:
- High
- Medium
- Low
- Insufficient evidence

Meta-state:
- Not assessed — use only when confidence has not been evaluated; it is not a confidence level

### Data provenance
- Farmer-provided
- Machinery
- Satellite
- Weather
- Market
- Derived/modelled

These should use consistent:
- typography;
- color;
- icons;
- wording;
- placement.

## 9. Psychology and UX rules

### Fast layer
The user should understand:
- what PROFIT is;
- why it matters;
- what to do next.

### Slow layer
The user can inspect:
- methodology;
- assumptions;
- data sources;
- evidence quality;
- uncertainty;
- limitations.

### Choice architecture
Use:
- one clear primary CTA;
- one meaningful secondary CTA;
- progressive disclosure.

Avoid:
- fake scarcity;
- countdown timers;
- confirmshaming;
- hidden assumptions;
- misleading graph scales;
- fabricated proof.

### Farmer control
Make explicit:
- data ownership;
- permissions;
- explainable assumptions;
- farmer decision authority.

## 10. Motion system

Allowed categories:

1. **Hierarchy** — subtle entrance/reveal.
2. **Feedback** — hover/focus/press.
3. **Transformation** — data → economics → decision.
4. **Continuity** — page/component transitions.

Rules:
- one primary motion idea per section;
- motion must not delay comprehension;
- reduced motion must be supported;
- numbers should feel stable, not theatrical.

## 11. Responsive design

Treat responsive design as one continuous system.

Test:
- narrow phone;
- large phone;
- tablet portrait;
- tablet landscape;
- small laptop;
- large desktop;
- intermediate widths;
- 200% zoom;
- long localized content;
- missing media;
- reduced motion.

Mobile is not a compressed desktop.

Priority on mobile:
1. value;
2. economic metric;
3. product proof;
4. trust;
5. CTA.

## 12. Content stress testing

Design with realistic content.

Stress-test:
- long localized copy;
- “Verified Economic Value”;
- negative values;
- large € amounts;
- low-confidence states;
- long field names;
- missing imagery;
- multi-line labels.

Do not approve components with placeholder-only content.

## 13. Frontend implementation direction

### Platform status

The production platform is **not yet irrevocably locked**.

- Use Framer when it materially accelerates positioning/design validation and farmer learning.
- If/when PROFIT chooses a fully owned coded production site, the current preferred shell is Astro.
- Do not add engineering complexity before the platform decision creates real value.

### Coded baseline, if selected

- Astro 7.3.x
- TypeScript 6.x for the Astro toolchain today
- semantic HTML
- modern native CSS

TypeScript 7.0 is stable in general, but Microsoft currently states that Astro/Vue/Svelte/MDX embedded-language workflows should remain on TypeScript 6.0 until TS7 exposes the required stable programmatic APIs. Re-evaluate this when upstream support changes.

### CSS
- custom properties;
- cascade layers;
- Grid/Flexbox/Subgrid;
- container queries;
- clamp();
- :has();
- logical properties;
- progressive enhancement.

### Interactivity
Use in this order:
1. HTML
2. CSS
3. native browser API
4. small vanilla JS
5. framework island
6. larger dependency only if clearly justified

### React
Not a default dependency.

Potential use only for:
- economic calculator;
- scenario simulator;
- rich product demo;
- complex interactive chart.

### Motion
CSS/View Transitions first.
GSAP only for genuinely complex storytelling.

## 14. Performance and accessibility

Targets:
- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1
- measured at p75, mobile and desktop separately

Accessibility:
- WCAG 2.2 AA
- keyboard navigation
- visible focus
- meaningful labels
- reduced motion
- screen-reader sanity checks
- zoom/reflow
- accessible form errors

Automation:
- Playwright
- axe-core for automated checks
- manual accessibility testing remains required

## 15. Images and fonts

### Images
- responsive srcset/sizes;
- modern formats where appropriate;
- intentional art direction/crops;
- no lazy-loading hero/LCP image;
- lazy-load below the fold.

### Fonts
- WOFF2;
- minimal required weights/styles;
- preload only critical font;
- use strong fallbacks;
- consider variable fonts when payload/quality justify them.

## 16. CTA and forms

Pilot/contact form should initially ask only for:
- Name
- Farm/company
- Country
- Email
- Farm type

Do not ask for sensitive or detailed farm data before trust is established.

## 17. User validation

### Farmer 10-second test
Ask:
1. What does PROFIT do?
2. Who is it for?
3. What problem does it solve?
4. Why might it matter economically?
5. What would you click next?

### Deeper farmer test
Ask:
- What concerns would stop you from trying it?
- What data would you expect to provide?
- Which claim feels least credible?
- What information is missing?

### Investor test
Ask:
- What is the initial wedge?
- Where does farmer value come from?
- What evidence exists?
- What is still hypothetical?
- What could become defensible?

## 18. Experiment order

At current stage:

1. qualitative farmer testing;
2. revise positioning;
3. launch;
4. measure real behavior;
5. A/B test only when traffic is sufficient.

Do not run statistically weak experiments for appearance of rigor.

## 19. Three visual directions to prototype

### A — Editorial Intelligence
- warm/light canvas;
- strong type;
- large whitespace;
- economic metrics;
- restrained real photography.

### B — Farm Data Layer
- immersive farm imagery;
- field geometry;
- data overlays;
- maps/layers;
- subtle explanatory motion.

### C — Economic Command
- graphite/dark neutral sections;
- bold economics;
- data fragments;
- stronger financial/technical character.

These must be genuinely different, not color variants.

## 20. Acceptance criteria

A design is ready to progress only if:

- farmer value is understandable quickly;
- the site feels credible without animation;
- product proof is concrete;
- evidence state is visible;
- uncertainty is understandable;
- farmer control is explicit;
- mobile composition is strong;
- long/localized content works;
- typography/metrics feel like a reusable brand system;
- the design is not generic AI/SaaS;
- performance/accessibility targets remain achievable;
- every major visual choice has a clear communication purpose.

## 21. Reconsider if

Revisit the blueprint if:
- farmers misunderstand the category;
- Field Profitability is not the strongest wedge;
- trust/transparency reduces comprehension instead of improving it;
- another visual direction materially improves trust and qualified conversion;
- the platform choice starts slowing learning or imposing material constraints;
- new VEV evidence changes the strongest value proposition.


## 22. AI-assisted verification gate

Because frontend implementation may be AI-assisted, every material UI change must be independently verified.

Minimum gate:
- production build passes;
- TypeScript passes;
- critical routes load;
- no console errors;
- primary CTA/navigation/forms work;
- responsive screenshots at critical widths;
- automated accessibility scan on critical states;
- no obvious page-weight/client-JS/performance regression.

Use Playwright against a production preview where practical.

AI-generated code is not accepted based on visual plausibility alone.


## 23. Ownable visual system

The website must avoid AI-era visual sameness.

Primary signature motif:

**Agricultural reality → precise data layer → economic meaning**

Build recognizable brand expression from:
- real agricultural photography;
- field geometry;
- economic typography;
- evidence/confidence states;
- restrained explanatory motion.

Do not rely on generic agritech/SaaS styling for differentiation.

## 24. TL;DR and guided wayfinding

Because PROFIT is a complex B2B proposition, provide a fast overview before deeper exploration.

Test a compact **PROFIT in 30 seconds** layer covering:
- target user;
- problem;
- mechanism;
- first wedge;
- value standard;
- next action.

For long desktop pages, test subtle guided wayfinding or section markers.

Do not use scroll hijacking or forced scrollytelling.


## 25. Brand system and distinctive assets

The website must operate as the first full expression of a reusable PROFIT brand system.

Brand logic:

**Story → Symbol → System**

Working brand architecture:
- PROFIT — master brand;
- Agricultural Decision Intelligence — category/proposition hypothesis;
- Field Profitability — module/product;
- Verified Economic Value — value measurement standard.

Candidate distinctive brand codes:
- economic typography;
- field geometry;
- real-farm + data-overlay composition;
- evidence states;
- confidence states;
- photography treatment;
- calm explanatory motion;
- future signature symbol/device.

Test distinctiveness with logo/name removed.

The product UI and marketing site should share the same brand DNA rather than becoming visually unrelated systems.

## 26. Verbal identity

PROFIT voice should be:
- precise;
- grounded;
- calm;
- transparent;
- human;
- economically literate.

Tone may flex by context:
- hero: short/direct;
- product: practical;
- methodology: forensic;
- company: human;
- security: unambiguous;
- investor: evidence-led.

Brand language includes both:
**what we say + how we say it.**

Avoid generic SaaS/AI language and corporate filler.


## 27. AI sameness prevention

AI-generated polish must never become the source of PROFIT's creative point of view.

Required process:
1. category deconstruction / exclusion board;
2. human/problem-led divergent framing;
3. at least 3 independent concept territories;
4. proprietary inputs (real farm imagery, field geometry, product UI, economic/evidence system);
5. AI used to expand/adapt, not define the initial identity;
6. human convergence against trust, distinctiveness and product truth;
7. systemise approved direction into tokens/components/rules;
8. competitor-confusion and logo-off recognition tests;
9. governed AI generation only from approved brand context.

Primary anti-sameness signature:

**real agriculture + field geometry + economic typography + evidence language + measured causal motion**

Treat generic cues as high-risk by default:
- stock farmer + tablet;
- generic green SaaS;
- AI glow/particles;
- abstract neural networks;
- generic satellite hero;
- bento-card template;
- "AI-powered / smarter / optimize / unlock insights" as identity language.

A design is not considered brand-distinctive until target users can begin to recognise PROFIT codes without relying on the logo/name.


## 28. AI creative-process architecture

Avoiding AI sameness requires process controls, not prompt cleverness.

Mandatory workflow for brand-defining work:

1. human-authored strategic brief;
2. solo human framing before shared references;
3. 3+ independent concept territories;
4. AI assigned one role at a time:
   - Challenger,
   - Explorer,
   - Analyst,
   - Builder,
   - Simulator;
5. forced divergence before refinement;
6. evaluation with the PROFIT Creative Evaluation Compass;
7. implementation from machine-readable brand context;
8. human approval;
9. co-presentation of emerging distinctive assets with the PROFIT name;
10. periodic drift/recognition audit.

Never let one AI loop:
brief → create → judge → approve its own work.

### PROFIT Creative Evaluation Compass

Review major concepts for:
- Product Truth;
- Farmer Relevance;
- Distinctiveness Potential;
- Category Contrast;
- Evidence Integrity;
- Comprehension;
- System Potential;
- Execution Quality.

Use PASS / CONCERN / REJECT / NEEDS EVIDENCE rather than pseudo-precise scores.

### AI-readable brand system

Encode:
- tokens;
- component usage rules;
- voice/terminology;
- evidence rules;
- approved examples;
- rejected examples;
- explicit exclusions;
- LOCKED / FLEXIBLE / OPEN exploration zones.

Repeated AI errors should trigger a system/context correction, not endless output patching.

### Distinctive-asset memory rule

Logo-off testing is diagnostic only.

For a young brand, emerging distinctive assets should normally be repeatedly co-presented with the PROFIT name/logo so users can learn the association.


## 29. Visual effects strategy

Visual effects exist to explain hierarchy, causality, state change, or brand meaning.

Core rule:

**Make economic causality visible. Do not make the website move for its own sake.**

Preferred implementation ladder:
1. static composition;
2. CSS microinteraction;
3. clip-path / SVG;
4. CSS scroll-driven animation;
5. native View Transitions;
6. small JavaScript;
7. GSAP;
8. Canvas/WebGL/Three.js only when uniquely justified.

### Recommended signature effect

**Field → Economics Reveal**

Real farm image
→ field boundary SVG draw
→ operational/data layer
→ dominant €/ha economic result
→ evidence/confidence state.

Prototype with CSS/SVG/scroll-driven CSS first.

### Effect budget

Homepage:
- maximum 2 signature storytelling effects;
- one focal motion event per viewport/section;
- supporting motion limited to reveals, navigation progress, and interaction feedback.

### Recommended
- field-boundary SVG animation;
- clip-path farm-image reveals;
- scroll-linked farm → data → economics transformation;
- native View Transitions;
- subtle image hover;
- calm hover/focus states;
- guided section progress.

### Prototype first
- text line reveal;
- mild parallax;
- GSAP choreography;
- field-shape morphing;
- controlled video-on-scroll.

### Not v1 by default
- decorative WebGL/Three.js hero;
- shader/noise backgrounds;
- particles;
- custom cursors;
- liquid cursor effects;
- scroll hijacking;
- long loader intros;
- autoplay hero video;
- excessive kinetic typography.

Every effect requires:
- meaningful static fallback;
- reduced-motion behavior;
- mobile validation;
- accessibility validation;
- performance review;
- brand/distinctiveness rationale.


## 30. Semiotic and flexible-system safeguards

Avoiding AI sameness requires both category legibility and distinctiveness.

### Category process
1. deconstruct agritech category codes;
2. document overcrowded clichés;
3. temporarily remove competitor/category references during initial concepting;
4. reintroduce them for a collision/confusion test.

Use generic-AI similarity only as an originality warning, not as proof.

### Brand grammar

Keep **invariants** stable:
- economic typography;
- evidence/confidence semantics;
- unit formatting;
- field/data geometry principles;
- photography truthfulness;
- motion personality.

Allow **variables** within defined ranges:
- crops/subjects;
- image crops;
- section rhythm;
- grid splits;
- field shapes;
- overlay placement;
- density;
- scale.

Consistency comes from grammar, not identical templates.

### Human-only zones

Final human ownership is required for:
- farmer empathy;
- documentary truth;
- core brand point of view;
- final art direction;
- localization/cultural nuance;
- sensitive evidence framing.

### Creative provenance

For every brand-critical AI-assisted asset, retain:
- asset purpose/path;
- brand-context version;
- design-token/content-system version;
- AI tool/model/version when available;
- AI workflow role;
- source/reference assets and rights;
- human owner/reviewer;
- approval decision/date;
- evidence status if economic claims appear.

Brand-critical AI workflows must be versioned, auditable, and reversible.


## 31. Research saturation and next-stage rule

The general strategy/design/frontend research foundation is now sufficient for pre-production validation.

Do not continue broad theory collection by default.

Prioritize:
1. three independent art-direction prototypes;
2. farmer 10-second comprehension testing;
3. brand-code recognition/confusion testing;
4. signature-motion validation only after divergent art directions exist;
5. production-platform decision.

Start additional research only to resolve a specific OPEN hypothesis, verify a time-sensitive technical fact, materially challenge an existing decision, or reduce a meaningful risk.

Repository context should carry persistent project rules; individual prompts should stay narrow and task-focused.
