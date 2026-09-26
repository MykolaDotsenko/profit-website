# AGENTS.md — PROFIT Website AI Development Contract

This file is the mandatory entry point for AI-assisted work in this repository.

## 1. Read order

Before making a material change, read only the minimum context needed, in this order:

1. `AGENTS.md`
2. `docs/ai/README.md`
3. `docs/ai/context.yaml`
4. `docs/website-blueprint-v1.md` for implementation decisions
5. `docs/website-strategy.md` only when strategic rationale is needed
6. topic-specific research from `docs/ai/README.md` only when the task requires it

Do not load every research file by default.

## 2. Authority and precedence

Use authority by topic rather than treating every file as one flat hierarchy.

### AI workflow / process rules
1. explicit current user instruction
2. `AGENTS.md`

### Product, content, design and implementation decisions
1. explicit current user instruction
2. `docs/website-blueprint-v1.md`
3. `docs/triple-check-audit-2026-09-26.md` for verified corrections not yet reflected elsewhere
4. `docs/website-strategy.md`
5. `docs/ai/context.yaml` as a compact derived summary
6. research/supporting documents

The product/design summaries inside `AGENTS.md` exist to help agents work safely; they are derived constraints, not a replacement for the Blueprint. If a material product decision in `AGENTS.md` becomes stale, the canonical Blueprint wins and `AGENTS.md` should be updated.

Research files provide evidence and rationale. They do not silently override canonical implementation decisions.

## 3. Product objective

Build a premium public website that helps a farmer quickly understand:

- what PROFIT is;
- why it matters economically;
- how it works;
- what evidence supports a claim;
- what data/control relationship exists;
- what the next step is.

Secondary audience: investors and partners.

Primary principle:

**Farmer value first. Investor narrative second. Evidence before hype.**

## 4. Evidence integrity — LOCKED

Never:

- invent customer results, partnerships, testimonials, savings, integrations or social proof;
- present hypothetical/modelled values as observed, attributed or verified;
- use `Verified` unless the underlying VEV evidence standard is actually satisfied;
- imply causality from outcome alone;
- hide uncertainty or material assumptions.

Canonical evidence ladder:

`Hypothetical → Modelled → Observed → Attributed → Verified`

Canonical confidence states:

`High / Medium / Low / Insufficient evidence`

Illustrative mockups must use clearly illustrative labels such as:

- `HYPOTHETICAL EXAMPLE`
- `Confidence: Not assessed`

## 5. Brand/design doctrine — LOCKED

Working doctrine:

**Real agriculture. Financial precision. Editorial clarity. Quiet technology.**

Primary visual grammar:

**real agricultural reality → precise data/field layer → economic meaning**

Preferred recurring brand codes:

- real farm photography;
- field geometry;
- economic typography and units;
- evidence/confidence language;
- calm explanatory motion.

Reject generic-by-default output:

- generic green SaaS;
- farmer-with-tablet stock hero;
- glowing AI gradients/orbs;
- neural-network/particle decoration;
- generic bento-grid identity;
- meaningless 3D/WebGL;
- “AI-powered”, “unlock insights”, “farm smarter” as identity language.

AI may accelerate execution. It must not invent PROFIT's creative point of view from generic model priors.

## 6. Current product/message status

Treat these as hypotheses unless explicitly promoted by user evidence:

- category: `Agricultural Decision Intelligence`
- headline: `Turn farm data into more profitable decisions.`
- support: `PROFIT connects what happens on the farm with what it means economically.`
- primary CTA: `Join the pilot`
- first concrete product proof: `Field Profitability`

Do not silently convert hypotheses into immutable brand claims.

## 7. Current information architecture

Core launch recommendation:

- `/`
- `/farmers`
- `/product`
- `/trust`
- `/company`
- `/investors`
- `/contact`

Add `/results` only when real evidence supports a dedicated results/case-study page.

Keep security/privacy/methodology under `/trust` until depth justifies separate pages.

## 8. Technology status

The production platform is **not locked**.

Current decision:

- Framer is valid when it materially accelerates positioning/design validation.
- If a fully owned coded production site is chosen, Astro is the preferred shell.
- Do not scaffold or migrate merely because a framework is fashionable.

If coded, default architecture is:

`static/semantic HTML → modern CSS/native browser APIs → small JS → framework island only when justified`

Do not add React globally by default.

Before introducing or upgrading dependencies, verify current official documentation. Version numbers in research files are historical snapshots, not permanent truth.

## 9. Engineering constraints — LOCKED unless evidence changes them

- semantic HTML first;
- progressive enhancement;
- minimal client JavaScript;
- responsive design as one adaptive system;
- mobile is not a compressed desktop;
- meaningful static fallback for motion;
- `prefers-reduced-motion` support;
- WCAG 2.2 AA target;
- no core information gated behind animation;
- no unnecessary runtime/server dependency for static content;
- no large dependency without a documented user-value reason.

Core Web Vitals quality targets:

- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1
- evaluate p75 mobile and desktop separately when real-user data exists

## 10. Motion

Motion exists to explain hierarchy, causality, feedback or continuity.

Preferred implementation order:

1. static composition
2. CSS transition/keyframes
3. SVG/clip-path
4. CSS scroll-driven animation
5. View Transitions
6. small JavaScript
7. GSAP
8. Canvas/WebGL/Three.js only with exceptional justification

Candidate signature effect:

**Field → Economics Reveal**

Do not copy prototype code into production without accessibility, performance, responsive and browser-support review.

## 11. AI development workflow

For a material task:

### Before coding
1. State the user/problem being solved.
2. Identify the relevant canonical rule.
3. Mark assumptions.
4. Choose the smallest valuable implementation.
5. Define acceptance criteria before expanding scope.

### During coding
- preserve existing conventions unless there is a clear reason to change them;
- componentize stable meaning, not every rectangle/div;
- avoid speculative infrastructure;
- do not add dependencies for convenience alone;
- keep economic/evidence semantics consistent.

### Before declaring complete
Verify, as applicable:

- production build;
- type checks;
- critical routes;
- primary CTA/navigation;
- form states;
- console errors;
- failed critical requests;
- 390 / 768 / 1024 / 1440 responsive states;
- keyboard path;
- reduced motion;
- axe/accessibility scan;
- obvious LCP/CLS/client-JS regression;
- copy/evidence integrity.

If a check cannot be run, state that explicitly. Do not claim it passed.

## 12. Scope control

Do not add a feature because competitors have it or because modern websites commonly use it.

Every meaningful addition should improve at least one of:

- farmer comprehension;
- trust;
- product truth;
- qualified conversion;
- distinctiveness;
- accessibility;
- performance;
- learning speed.

Prefer reversible experiments over premature architecture.

## 13. AI-sameness process

For brand-defining work:

1. human/problem-led brief;
2. at least 3 independent concept territories;
3. divergence before refinement;
4. proprietary inputs;
5. AI in a declared role: Challenger / Explorer / Analyst / Builder / Simulator;
6. human convergence;
7. competitor-confusion/logo-off/recall testing where practical;
8. systemize approved rules;
9. retain provenance for brand-critical AI-assisted assets.

Do not let one AI loop brief → create → judge → approve its own work.

## 14. Documentation updates

When a decision changes materially:

- update the canonical source first;
- then update `docs/ai/context.yaml` if the compact context is affected;
- add rationale to the appropriate audit/decision record when useful;
- do not edit many research files just to make them agree retroactively.

## 15. Definition of done

A change is not done because it looks plausible.

It is done when:

- the requested behavior exists;
- relevant acceptance criteria pass;
- evidence/claim semantics are correct;
- responsive/accessibility behavior is acceptable;
- no unnecessary complexity was introduced;
- documentation remains consistent with the implementation.
