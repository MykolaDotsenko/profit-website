# AGENTS.md — PROFIT Website AI Development Contract

This file is the mandatory entry point for AI-assisted work in this repository.

## 1. Read order

Before making a material change, read only the minimum context needed, in this order:

1. `AGENTS.md`
2. `docs/ai/README.md`
3. `docs/ai/context.yaml`
4. `docs/ai/IMPLEMENTATION_PLAN.md` when executing or sequencing work
5. `docs/website-blueprint-v1.md` for implementation decisions
6. `docs/website-strategy.md` only when strategic rationale is needed
7. topic-specific research from `docs/ai/README.md` only when the task requires it

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

When interpreting project state, use the repository vocabulary consistently:
- **LOCKED** — do not change without explicit evidence/decision;
- **FLEXIBLE** — implementation may vary inside the approved constraints;
- **OPEN / HYPOTHESIS** — requires validation or an explicit decision.

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

## 3.1 PROFIT company/scope context — LOCKED

Internal operating principle:

**Create Value. Prove It. Scale It.**

External agents must preserve these boundaries:
- PROFIT is the master brand; Field Profitability is the current website wedge, not the company boundary.
- Do not crop-lock the brand architecture.
- Keep the master brand, naming, website architecture and visual system extensible to crop production, pig production and dairy without rebranding. Wedge tests such as WWW-000 may be Field Profitability-specific, but their results must not redefine PROFIT as a field-crop-only company.
- Do not invent or market future livestock/other modules (including pig production and dairy) as shipped.
- Customer-level evidence outranks global/leadership/scale ambition.
- Internal ambitions are not public proof claims.
- The website is not the core farm-management application.
- International rule: **Global by architecture. Local by evidence.** Do not pool materially different countries/languages/market contexts into one qualitative cohort or treat one market's result as global evidence.
- Keep canonical economic metric identities/definitions separate from local presentation (display label, currency, unit and locale). A display string such as `€637/ha` or a local word such as “margin” is not the underlying economic definition.

Primary internal value metric:
**Verified Economic Value per Customer**

Where evidence supports it, VEV may also be represented per hectare/production unit, per unit of currency paid to PROFIT (e.g. per € in a euro market), as share of eligible customers with positive VEV, and with attribution confidence for a defined period/cohort.

Do not invent missing VEV formulas or verification thresholds.

## 4. Evidence integrity — LOCKED

Never:

- invent customer results, partnerships, testimonials, savings, integrations or social proof;
- present hypothetical/modelled values as observed, attributed or verified;
- use `Verified` unless the underlying VEV evidence standard is actually satisfied;
- imply causality from outcome alone;
- hide uncertainty or material assumptions.

Canonical evidence ladder:

`Hypothetical → Modelled → Observed → Attributed → Verified`

Canonical assessed-confidence states:

`High / Medium / Low / Insufficient evidence`

Use `Not assessed` only when confidence has not actually been evaluated. It is a meta-state, not a confidence level.

Illustrative mockups must use clearly illustrative labels such as:

- `HYPOTHETICAL EXAMPLE`
- `Confidence: Not assessed`

AI must not be the sole source of truth for critical quantitative outputs. Real economic numbers require validated source data/rules/models plus visible assumptions, provenance, period and uncertainty.

Do not make undocumented legal claims about farmer data ownership/sharing. Data use must remain permissioned, transparent and consistent with privacy, security, auditability and farmer control.

## 5. Brand/design doctrine — LOCKED

Working doctrine:

**Real agriculture. Financial precision. Editorial clarity. Quiet technology.**

Primary visual grammar (master brand):

**real agricultural/production reality → precise operational/data context → economic meaning → evidence/confidence → decision**

The word "field" is not part of the master-brand grammar. The master brand must work across crop production, pig production and dairy (§3.1).

Preferred recurring master-brand codes (candidates, not yet distinctive assets):

- real/documentary agricultural reality;
- economic typography and units;
- evidence/confidence/provenance language;
- agriculture/production → data/context → economics composition;
- calm explanatory motion;
- future signature symbol/device — open hypothesis.

Domain-specific variable codes:

- field geometry — crop / Field Profitability domain code; a candidate, not a master-brand invariant. Use it actively in Field Profitability; never require it for pig production or dairy expression.
- other production domains: domain-specific operational structure/context — OPEN until product/domain evidence exists.

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

Candidate signature effect for the Field Profitability (crop) domain — not a master-brand invariant:

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
2. at least 3 independent strategic framings; fixed territory names are not reusable default answers;
3. divergence before refinement using phase-appropriate context;
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
- create or supersede an ADR in `docs/decisions/` when the decision is cross-cutting, durable, expensive to reverse, or likely to be rediscovered;
- then update `docs/ai/context.yaml` if the compact context is affected;
- update `docs/ai/IMPLEMENTATION_PLAN.md` if sequencing/status/dependencies materially change;
- do not edit many research files just to make them agree retroactively.

Do not create ADRs for routine, easily reversible implementation details.

## 15. Definition of done

A change is not done because it looks plausible.

It is done when:

- the requested behavior exists;
- relevant acceptance criteria pass;
- evidence/claim semantics are correct;
- responsive/accessibility behavior is acceptable;
- no unnecessary complexity was introduced;
- documentation remains consistent with the implementation.


## 16. Prompting and research efficiency

User/task prompts should be narrow and outcome-focused.

Prefer:
- one concrete decision or artifact per prompt;
- explicit desired outcome;
- relevant repo source references;
- acceptance/verification criteria.

Do not repeatedly paste the entire project history, research archive, or a giant master prompt when repository context already provides it.

For substantial work, use the task template rather than inflating the prompt.

### Research stop rule

Do not run broad additional research merely because more material exists.

Run new research when it:
- resolves a specific OPEN hypothesis;
- materially challenges a current decision;
- verifies a time-sensitive technical claim;
- reduces a meaningful implementation or trust risk.

Once evidence is sufficient for the next reversible experiment, prefer testing over more general theory.
