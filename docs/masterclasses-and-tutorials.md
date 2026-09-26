# Masterclasses & Tutorials — Modern Presentation Websites

Research date: 2026-09-26

This document captures practical findings from current masterclasses and tutorials relevant to the PROFIT presentation website.

## 1. Paul Boag — Designing Websites That Convert (Smashing)

Source: https://smashingconf.com/online-workshops/workshops/converting-websites-paul-boag

The strongest practical framework from this workshop is:

**Attention → Value proposition → Objection handling → Credibility → Action → Continuous optimization**

The workshop explicitly focuses on:
- landing-page flow;
- answering objections at the right moment;
- identifying critical selling points;
- directing attention with design;
- creating confidence and credibility;
- encouraging action without dark patterns;
- post-launch A/B and usability testing.

### PROFIT implication

Homepage sections should not be chosen because they are visually fashionable. Each section should perform a specific persuasion/clarification job.

Recommended flow:

1. Attention — clear farmer-relevant problem/outcome.
2. Value — what PROFIT enables economically.
3. Mechanism — how farm data becomes a decision.
4. Objection handling — data quality, trust, complexity, control.
5. Proof — product, methodology, evidence state.
6. Credibility — team, security, transparency.
7. Action — pilot/contact.
8. Measurement — test and refine after launch.

## 2. Frontend Masters — UX Research & User Testing (Paul Boag)

Source: https://frontendmasters.com/courses/ux-testing/the-case-for-user-testing/

Key practices:
- audience segmentation;
- surveys and interviews;
- empathy mapping;
- customer journey mapping;
- top-tasks analysis;
- upfront testing to challenge assumptions.

### PROFIT implication

Before polishing visuals, test whether farmers can understand the page.

Core farmer test:
- What does PROFIT do?
- Why does it matter economically?
- What would you expect it to do with your farm data?
- What concerns would stop you from trying it?
- What would you click next?

Investor test:
- What is the initial wedge?
- Where does farmer value come from?
- What evidence exists versus what is still a hypothesis?
- What could become defensible?

## 3. Frontend Masters — Web UX Design for High Converting Websites

Source: https://frontendmasters.com/courses/ux-design-principles/introduction/

Core principle:

**Conversion without dark patterns.**

Use:
- good design;
- useful content;
- psychology;
- clear information;
- credible value propositions.

### PROFIT implication

No fake urgency, false scarcity, inflated social proof or manipulative CTAs.

Qualified conversion matters more than raw click volume.

## 4. Frontend Masters — Professional CSS: Build a Website from Scratch (Kevin Powell)

Source: https://frontendmasters.com/courses/pro-css/tips-for-scaling-a-codebase/

Modern implementation lessons:
- custom properties;
- CSS nesting;
- CSS Grid;
- reusable utilities;
- responsive layouts;
- animations;
- View Transitions;
- scalable CSS structure.

### PROFIT implication

If coded, start from semantic HTML and modern CSS before framework-specific complexity.

Preferred principle:

**HTML → CSS → native browser capability → JavaScript only if necessary**

## 5. Frontend Masters — Modern CSS Fundamentals (Kevin Powell, 2026)

Source: https://frontendmasters.com/courses/css-fundamentals/wrapper-class/

Published February 6, 2026.

Covers:
- typography;
- responsive grid;
- forms;
- shadows;
- animation;
- pseudo-elements.

### PROFIT implication

A premium visual system does not require a heavy UI framework.

## 6. Smashing — Interactive Accessible Components with Modern CSS & JS

Source: https://smashingconf.com/online-workshops/workshops/stephanie-eckles-interactive-components/

Current CSS practice increasingly uses:
- cascade layers;
- anchor positioning;
- native popovers;
- custom properties as component APIs;
- progressive enhancement;
- vanilla JS only where behavior/accessibility requires it.

### PROFIT implication

Use native browser capabilities where they are reliable, but never force CSS-only solutions at the expense of accessible behavior.

## 7. Smashing — Web Animation (Cassie Evans)

Source: https://smashingconf.com/antwerp-2026/workshops/cassie-evans-animation/

Core idea:

**Animation should help users understand what is happening, where to look and what to do next.**

### PROFIT implication

Good motion:
**Farm data → PROFIT → economic interpretation → decision → result**

Bad motion:
- decorative 3D;
- delayed text;
- pointless parallax;
- motion that makes reading slower.

## 8. Webflow University — Responsive Design

Source: https://university.webflow.com/courses/make-your-site-responsive

Current practice:
- test across breakpoints;
- use flexible units;
- reduce one-off overrides;
- design adaptability from the start.

### PROFIT implication

Do not design desktop first and merely shrink it.

Mobile order must be intentional:
1. value proposition;
2. economic value;
3. product proof;
4. trust;
5. CTA.

## 9. Webflow University — Accessibility

Source: https://university.webflow.com/courses/web-accessibility

Useful topics:
- alt text;
- inclusive typography;
- readable line length;
- focus states;
- accessible media;
- audit tools.

### PROFIT implication

Accessibility belongs in component acceptance criteria from the first prototype.

## 10. Webflow University — Interactions & Animations

Source: https://university.webflow.com/courses/interactions-animations

The course emphasizes:
- timing;
- easing;
- sequencing;
- clarity;
- accessibility;
- performance.

### PROFIT implication

Create one small motion system instead of custom motion for every section.

Allowed categories:
- entrance;
- hover/focus feedback;
- data transition;
- page transition.

## 11. Framer Academy — Current 2026 Workflow

Sources:
- https://www.framer.com/academy/
- https://www.framer.com/academy/lessons/build-your-first-site
- https://www.framer.com/academy/topics/seo

Framer now integrates:
- responsive generation;
- CMS;
- publishing;
- localization;
- analytics;
- design systems;
- SEO/AEO;
- accessibility;
- Agent-assisted iteration.

### PROFIT implication

Framer is especially strong for rapid learning and early validation.

AI-generated layouts must still be manually reviewed. Agent output is a starting point, not design authority.

## 12. Framer — A/B Testing and Tracking

Sources:
- https://www.framer.com/help/articles/how-to-run-an-a-b-test-on-your-framer-site/
- https://www.framer.com/help/articles/how-to-track-links-and-forms-in-framer/

Current Framer supports:
- built-in A/B tests;
- up to five variants per page;
- click/form/page-view conversions;
- tracking IDs;
- funnels;
- analytics;
- Bayesian winner estimation.

Important limitation:
Framer's current cookie-free A/B assignment resets daily, so conversion measurement is constrained to same-day behavior.

### PROFIT implication

At low traffic, qualitative testing is more valuable than underpowered A/B testing.

Recommended order:
1. 5–10 farmer sessions;
2. refine message;
3. launch;
4. measure;
5. A/B test only when traffic justifies it.

## 13. Framer — Motion Guidance

Source: https://www.framer.com/academy/lessons/bringing-websites-to-life-with-animation

Practical rules:
- motion should establish hierarchy or feedback;
- choose one motion idea per section;
- keep timing consistent;
- remove motion that delays reading/navigation;
- support reduced motion.

### PROFIT implication

Every animation must answer:

**What does this help the visitor understand or do?**

If the answer is "nothing", remove it.

## 14. Framer — SEO, AEO and Accessibility

Source: https://www.framer.com/academy/lessons/framer-fundamentals-optimizing-for-search-engines-and-accessibility

Strong principle:

**one page → one clear search intent**

Implementation:
- title;
- description;
- semantic heading structure;
- useful copy;
- descriptive links;
- alt text;
- keyboard navigation;
- focus states;
- form labels.

### PROFIT implication

Do not make the homepage responsible for every agricultural search intent.

Create focused pages only when the content is strong enough.

## 15. Awwwards Academy — Creative Direction

Relevant current themes:
- interactive websites;
- memorable UI;
- editorial websites;
- art direction;
- brand visual language;
- high-converting homepages.

Sources:
- https://www.awwwards.com/academy/best-sellers
- https://www.awwwards.com/academy/search/design/

### Take from Awwwards

- art direction;
- editorial composition;
- typography;
- transitions;
- visual storytelling;
- distinctive brand character.

### Do not copy by default

- WebGL-heavy hero sections;
- scroll hijacking;
- long intro sequences;
- mouse-driven navigation;
- excessive 3D;
- interactions that hide information.

Use Awwwards to improve memorability only after usability and trust constraints are satisfied.

## 16. web.dev — Performance

Source: https://web.dev/learn/performance

Core topics:
- HTML and caching;
- critical rendering path;
- render-blocking resources;
- images/fonts;
- real-user performance.

### PROFIT implication

Set a performance budget before visual production.

Heavy media or motion must justify its cost.

## Recommended PROFIT operating sequence

1. Define primary farmer job and desired action.
2. Draft value proposition.
3. Map objections/questions.
4. Define proof available now.
5. Build content hierarchy.
6. Create low-fidelity page flow.
7. Test comprehension with farmers.
8. Create visual system.
9. Add product/economic visuals.
10. Add restrained explanatory motion.
11. Test mobile/accessibility/performance.
12. Launch.
13. Observe behavior.
14. Iterate messaging and order.
15. A/B test only when traffic is sufficient.

## New section rule

**No section exists merely because modern startup websites usually have it.**

Every section must answer at least one:
- What is this?
- Why should I care?
- How does it work?
- Can I trust it?
- Is there evidence?
- What should I do next?

If it answers none, remove it.

## New motion rule

**Motion budget, not animation freedom.**

Before implementation, define a small allowed motion vocabulary and performance limits.

Motion is reserved for:
- directing attention;
- explaining transformation;
- confirming interaction;
- preserving spatial continuity.

## New experiment rule

**Qualitative before quantitative at low traffic.**

At PROFIT's current stage, a handful of strong farmer usability sessions can produce more actionable evidence than an underpowered A/B test.
