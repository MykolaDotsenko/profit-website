# Frontend Masterclass Findings — PROFIT Website

Research date: 2026-09-26

Update after triple-check: Astro 7.3.x remains the preferred coded-site framework, but TypeScript 7 is not yet the correct Astro baseline. Microsoft currently recommends Astro/Vue/Svelte/MDX workflows remain on TypeScript 6.0 until TS7 programmatic API support is available.

This document captures the strongest frontend-development findings from current masterclasses, tutorials and official platform documentation that materially improve the PROFIT presentation website.

## Executive recommendation

For a coded production version, the current preferred architecture is:

**Astro 7.3.x + TypeScript 6.x + semantic HTML + modern native CSS + minimal client JavaScript**

Add framework islands only when an interaction genuinely needs them.

Core engineering principle:

**Static/server-rendered HTML first → CSS/browser-native capability second → vanilla JavaScript third → framework island only when justified**

The goal is not to demonstrate technical sophistication. The goal is to deliver:
- extremely fast first load;
- stable layouts;
- strong SEO;
- excellent accessibility;
- premium visual execution;
- low maintenance cost;
- enough interactivity for product storytelling.

---

## 1. Astro Islands fit a presentation website exceptionally well

Astro's current islands architecture renders the majority of a page as static HTML and hydrates only explicit interactive islands.

Useful loading modes include:
- client:load
- client:idle
- client:visible

### PROFIT use

Keep static:
- navigation shell where possible;
- hero copy;
- farmer problem sections;
- evidence copy;
- team/company content;
- security/trust sections;
- most visual storytelling.

Hydrate only:
- ROI/economic calculator;
- interactive Field Profitability demo;
- scenario comparison;
- genuinely interactive charts.

Do not hydrate sections merely because they are built from components.

---

## 2. Treat client JavaScript as a budget

JavaScript is one of the most expensive page resources per byte because it must be downloaded, parsed and executed.

### PROFIT rule

Every client-side dependency must answer:

**What user value requires this code to run in the browser?**

Reject dependencies whose main reason is convenience or novelty.

### Dependency ladder

1. HTML
2. CSS
3. native browser API
4. small vanilla JS
5. isolated framework component
6. larger library only if the above cannot solve the problem reliably

---

## 3. Use modern CSS as the main UI engine

Current Frontend Masters and Smashing material emphasizes a major shift toward native CSS capabilities.

High-value features:

- CSS Grid
- Subgrid
- Container Queries
- :has()
- CSS nesting
- cascade layers
- custom properties
- min(), max(), clamp()
- logical properties
- text-wrap
- relative color syntax
- @starting-style
- scroll-driven animation when appropriate
- View Transitions
- anchor positioning

### PROFIT use

#### Container queries
Allow product/economic components to adapt to their own available width instead of global viewport breakpoints.

#### Subgrid
Keep economic metrics, captions and supporting copy aligned without duplicated grid definitions.

#### :has()
Handle contextual component states without extra JavaScript/markup.

#### clamp()
Create fluid typography and spacing with fewer brittle breakpoint overrides.

#### text-wrap
Improve large editorial headlines without manual line-break hacks.

#### cascade layers
Keep base, component and enhancement styles resilient and maintainable.

---

## 4. Use CSS Anchor Positioning and Popover API selectively

Modern browsers now provide native primitives for floating UI.

Useful for:
- methodology explanations;
- confidence/evidence definitions;
- metric help;
- compact product-demo details.

### PROFIT rule

Prefer native Popover + anchor positioning over importing a large tooltip/popover library when browser support and accessibility requirements are satisfied.

Always provide a non-enhanced fallback where needed.

Do not turn the marketing site into a tooltip-heavy dashboard.

---

## 5. View Transitions are now viable progressive enhancement

The View Transition API supports transitions between DOM states and between pages/documents in modern browsers.

### PROFIT use cases

Potentially useful:
- Field card → Field Profitability detail;
- farmer homepage → product explanation;
- product screenshot → expanded case-study view;
- scenario state changes inside an interactive demo.

### Rule

Use transitions to preserve spatial continuity and reduce cognitive load.

Never require them for comprehension or navigation.

The page must remain fully usable when the browser does not support the enhancement or when reduced motion is requested.

---

## 6. Responsive design should be component-driven, not breakpoint-heavy

Modern CSS courses increasingly emphasize intrinsic layout and container queries.

### PROFIT rule

Avoid architecture dominated by:
- 1440px overrides;
- 1024px overrides;
- 768px overrides;
- 480px overrides;
- dozens of one-off fixes.

Prefer:
- Grid auto-fit/minmax;
- flexible tracks;
- container queries;
- clamp-based type/spacing;
- content-driven breakpoints.

Breakpoints remain acceptable when the content genuinely needs a structural change.

---

## 7. Responsive images are a first-class engineering problem

PROFIT will depend heavily on:
- farm photography;
- aerial field images;
- product screenshots;
- diagrams.

Astro provides Image/Picture tooling that can generate optimized responsive sources.

### PROFIT rule

Use:
- responsive srcset/sizes;
- modern formats where appropriate;
- correct intrinsic dimensions;
- art-directed crops where mobile/desktop compositions differ;
- lazy loading for below-the-fold images.

Do not:
- ship one huge desktop image to every device;
- use CSS background images for important semantic content by default;
- lazy-load the hero/LCP image;
- put unoptimized photography directly in public/ when production optimization is expected.

### Art direction

Some imagery should use genuinely different crops/assets on mobile rather than merely shrinking a desktop composition.

---

## 8. Fonts require a performance budget too

Astro 7.3 provides a Fonts API with:
- local/provider font loading;
- local caching/serving;
- optimized fallbacks;
- controlled preloading;
- CSS-variable integration.

### PROFIT rule

Brand typography is valuable enough to justify custom fonts, but font payload must remain disciplined.

Recommended:
- prefer WOFF2;
- use variable fonts when they reduce total payload and complexity;
- load only required weights/styles;
- preload only the font needed above the fold;
- use optimized fallbacks;
- avoid loading an entire family merely for one decorative heading.

For localization, configure subsets/unicode ranges so languages do not download glyph ranges they do not need where practical.

---

## 9. Accessibility testing should be automated and manual

Current Frontend Masters accessibility material emphasizes:
- semantic HTML;
- alt text;
- keyboard navigation;
- focus management;
- contrast;
- screen readers;
- ARIA only when needed.

Playwright supports axe-core accessibility scans.

### PROFIT CI recommendation

Use Playwright + @axe-core/playwright to scan critical pages and interactive states.

Automate checks for:
- missing labels;
- obvious contrast violations;
- invalid ARIA;
- duplicate IDs;
- common WCAG issues.

But automated testing is not sufficient.

Manual checks must include:
- keyboard-only navigation;
- visible focus;
- screen-reader sanity test;
- zoom/reflow;
- reduced motion;
- form errors;
- meaningful image alternatives.

Target remains WCAG 2.2 AA.

---

## 10. Performance needs a pre-defined budget

Current web.dev performance guidance emphasizes that:
- HTML delivery matters;
- fonts matter;
- JavaScript code splitting matters;
- images/iframes can dominate bandwidth;
- real-user metrics matter.

### PROFIT baseline targets

Core Web Vitals:
- LCP <= 2.5 s
- INP <= 200 ms
- CLS <= 0.1

Measure at the 75th percentile and separate mobile/desktop.

### Suggested engineering budgets for v1

These are internal guardrails, not universal web standards:

- avoid large client bundles on content-only pages;
- no WebGL/Three.js in the critical hero by default;
- no autoplay background video by default;
- no large animation library unless one concrete experience justifies it;
- hero image optimized and intentionally prioritized;
- below-fold imagery lazy-loaded;
- font files/weights tightly limited.

Revisit budgets based on real measurements rather than aesthetic ambition.

---

## 11. High-end marketing animation is possible, but opt-in

Frontend Masters' Award-Winning Marketing Websites course uses:
- GSAP;
- timeline/scroll animation;
- Blender/3D image sequences;
- Three.js/WebGL;
- performance optimization;
- accessibility.

This is valuable evidence that rich creative frontend can coexist with performance/accessibility if engineered carefully.

### PROFIT conclusion

Do not interpret this as a reason to add Three.js.

Use advanced animation only for a specific high-value story that cannot be explained as effectively with CSS/SVG/native transitions.

Candidate future use:
- a single high-impact field-to-economics narrative.

Not default:
- full 3D homepage;
- continuously animated background;
- GPU-heavy decorative experience.

---

## 12. SVG is highly valuable for PROFIT

Use SVG for:
- field boundaries;
- flow diagrams;
- data layers;
- icons;
- economic-value diagrams;
- lightweight map-like illustrations.

Advantages:
- sharp at all resolutions;
- easy to animate selectively;
- semantic/accessible when implemented correctly;
- usually much lighter than raster/video for diagrammatic content.

Do not rasterize simple diagrams unnecessarily.

---

## 13. CSS motion before GSAP

Decision order:

1. CSS transition
2. CSS keyframes
3. View Transition API
4. scroll-driven CSS animation where appropriate
5. small vanilla JS orchestration
6. GSAP only for complex choreography

### PROFIT rule

Do not add a motion dependency before a concrete motion requirement exists.

---

## 14. Progressive enhancement should be architectural, not cosmetic

Baseline experience must include:
- all core content;
- navigation;
- CTA;
- forms;
- product explanation.

Enhancements may add:
- animated transitions;
- contextual popovers;
- interactive charts;
- scenario simulation.

A farmer on a weaker device/network should still get the full argument and be able to contact PROFIT.

---

## 15. Semantic HTML is the base of quality frontend

Use the correct platform primitives:
- header/nav/main/footer;
- headings in logical order;
- button for actions;
- links for navigation;
- form/label/input;
- details/summary where appropriate;
- figure/figcaption for explanatory visuals.

Avoid div-driven UI when native elements already express meaning and behavior.

Semantic HTML improves:
- accessibility;
- SEO;
- maintainability;
- browser behavior;
- testing reliability.

---

## 16. React is not a default dependency

Astro can render framework components, but a marketing site should not become a React application merely because the team knows React.

### Add React only if

- the interaction is genuinely stateful/complex;
- a mature React library materially reduces implementation risk;
- the value justifies hydration cost.

### Likely React island candidates

- economic scenario calculator;
- rich comparison/demo;
- interactive data visualization.

Everything else should be challenged first.

---

## 17. Tailwind is optional, not architecture

Modern CSS is powerful enough to build this site without Tailwind.

Tailwind remains reasonable if it measurably improves team delivery speed.

### Decision criterion

Choose based on:
- maintainability;
- team speed;
- visual-system consistency;
- long-term ownership.

Do not choose it merely because it is popular.

For a small bespoke editorial marketing site, native CSS with a disciplined token system is currently a strong default.

---

## 18. Frontend testing should cover business-critical website journeys

Use Playwright for:

- homepage loads and primary CTA works;
- mobile navigation;
- farmer path;
- investor path;
- pilot/contact form;
- validation/error states;
- responsive critical widths;
- reduced-motion behavior;
- accessibility scans.

Unit testing every static component is low value.

Prioritize journeys that can break conversion or trust.

---

## 19. Build-time and runtime responsibilities should stay separated

For static content:
- generate at build time.

For occasional dynamic marketing data:
- prefer build/revalidation where sufficient.

For client interactivity:
- load only at the interaction boundary.

Do not create a server/API dependency for content that can be safely prerendered.

---

## 20. Use browser-native features with progressive support

Current Baseline status makes several previously experimental features practical as enhancements:
- View Transitions;
- Popover API;
- CSS anchor positioning.

### PROFIT policy

Use them when:
- they materially simplify implementation;
- fallback behavior is acceptable;
- the site remains correct without them.

Do not gate core information behind a newly available feature.

---

## 21. Proposed coded production stack

If PROFIT chooses custom code rather than Framer:

### Core
- Astro 7.3
- TypeScript
- semantic HTML
- native modern CSS

### Styling architecture
- CSS custom properties/design tokens
- cascade layers
- Grid/Flexbox/Subgrid
- container queries
- clamp-based fluid scale
- small reusable component layer

### Media
- Astro Image/Picture pipeline
- responsive images
- SVG for diagrams
- disciplined web-font loading

### Interactivity
- browser-native APIs first
- vanilla JS for small behavior
- isolated React island only when justified

### Motion
- CSS/View Transitions first
- GSAP only for genuinely complex storytelling

### Quality
- Playwright
- axe-core integration
- Core Web Vitals monitoring
- WCAG 2.2 AA manual audit

---

## 22. Architecture rule for every proposed feature

Before adding a frontend technology ask:

1. What farmer/investor problem does this solve?
2. Does HTML/CSS/browser API already solve it?
3. What client bytes/CPU does it add?
4. Does it affect LCP/INP/CLS?
5. Does it preserve accessibility?
6. Does it work on mobile and weaker networks?
7. Is maintenance cost justified?
8. Can it be progressively enhanced?

If these questions have weak answers, do not add it.

---

## Strongest frontend conclusion

**The most modern version of PROFIT's website should feel technically invisible.**

Visitors should notice:
- clarity;
- speed;
- precision;
- beautiful typography;
- real farm imagery;
- smooth explanatory transitions;
- trustworthy product visuals.

They should not notice:
- framework choices;
- JavaScript loading;
- hydration;
- animation engines;
- browser compatibility work.

Technical sophistication belongs underneath the experience.
