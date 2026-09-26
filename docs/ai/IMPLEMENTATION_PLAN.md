# PROFIT Website — AI Implementation Plan

Status: Active planning baseline  
Date: 2026-09-26

This plan translates the canonical Website Blueprint into implementation-sized work.

It is **not** permission to build everything immediately.

The governing sequence is:

**Validate → Decide → Build smallest valuable surface → Verify → Learn → Expand**

## 0. Current gate

Current stage:

**Pre-production validation**

Do not lock the full production platform or build a large page system before the highest-value open hypotheses are tested.

### Exit criteria for this gate

- [ ] Controlled H1/H2/H3 hero message validation has been run and weak directions have been killed/rewritten.
- [ ] Three genuinely different art directions exist.
- [ ] Farmer 10-second comprehension testing has been run.
- [ ] Main positioning/headline findings are documented.
- [ ] Field Profitability has been tested as the first concrete proof point.
- [ ] Field → Economics Reveal has been evaluated for comprehension, mobile and reduced motion.
- [ ] A production-platform decision is made only if implementation now creates more value than another validation iteration.

If a material production-platform decision is made, create an ADR.

### Future gate — master-brand positioning (does not block current work)

Before the master-brand homepage positioning is permanently locked, or before pig production or dairy become public product domains, validate the master-brand proposition with relevant target users beyond the crop cohort. The WWW-000 result cannot close this gate. It does not block current learning on the Field Profitability wedge.

### International validation architecture

Principle: **Global by architecture. Local by evidence.**

Use the Blueprint §2.3 `Domain × Market × Evidence` model and I0–I5 maturity ladder. Do not pool materially different markets into one qualitative cohort or treat one-market evidence as international validation.

Current operating focus:
**EU-first, Europe-expandable.**

Market A is provisionally **Finland**, with the first WWW-000 cohort in Southwest Finland (Finnish-language crop decision-makers), subject to the recruitment-feasibility gate. This is a first-learning-market decision, not a statement that Finland is the largest European market.

Immediate decision before WWW-000 freeze:
confirm that 9–12 eligible Market A participants can be recruited without obvious convenience/sample bias. If not, reopen Market A rather than weakening the cohort.

---

# Workstreams

## W0 — Validation and decision evidence

### WWW-000 — Controlled hero message validation

Execution source:
`docs/experiments/hero-message-test-v1.md`

Stimulus:
`prototypes/hero-message-test/`

Status:
**Test instrument drafted — not approved to run.**
- D1–D3 were approved on 2026-09-26: a Phase A → B → C session flow, fixed 10 s exposure, and the counting rules (now in Blueprint §17).
- D4 is settled. The Field Profitability product-truth boundary (an unmerged, unshipped vertical slice) is now in Blueprint §2.2, and PT-1/PT-2 are resolved.
- The product-truth gate superseded the v1 candidates before testing. The test candidates are H1/H2/H3 v2.
- International validation architecture is defined (Blueprint §2.3). Operating focus is EU-first; Market A is provisionally Finland under a recruitment gate.
- Before the stimulus is frozen: D5 Market Cohort Specification, D6 market-specific scenario validation, D7 research-data/consent process and the approved D8 controlled documentary asset must be resolved.

No acceptance criterion below has been met yet.

Outcome:
Eliminate weak hero positioning before visual art direction becomes a confounding variable.

Test the three canonical Blueprint directions, using the **v2** candidates in Blueprint §5. The v1 wording was superseded before farmer testing by the product-truth gate; no farmer evidence exists for v1.
- H1 — Economic visibility / farmer job first
- H2 — Decision intelligence / decision-context first (v1: current control)
- H3 — Field Profitability / product proof first

Scope: the Field Profitability **wedge** message only, for the provisional Finland Market A cohort (Blueprint §2.3). Results must retain market/cohort context, must not be pooled with materially different markets, and must not redefine PROFIT as field-crop-only or globally validated. The master brand stays extensible to crop production, pig production and dairy without rebranding (Blueprint §2.1).

Constraints:
- same neutral/static scaffold;
- same CTA architecture;
- equivalent proof-object weight;
- no motion;
- no different art direction per copy variant;
- target the current field/crop profitability farmer cohort.

Acceptance:
- [ ] 9–12 target-farmer first round completed or a documented reason for a smaller exploratory round;
- [ ] open recall captured before comparison/preference questions;
- [ ] material misclassifications and trust failures recorded;
- [ ] Blueprint kill criteria applied;
- [ ] surviving direction(s) and remaining uncertainty documented;
- [ ] no statistical-winner claim from a small qualitative sample.

Depends on: none.

### WWW-001 — Three art-direction prototypes

Outcome:
Create three genuinely different concept territories:

- A — Evidence-Led Editorial
- B — Farm Operations Layer
- C — Economic Control Room

Constraints:
- not color variants;
- must work without motion;
- use the same surviving/controlled hero message and underlying economic proof scenario across all directions;
- keep evidence/confidence/provenance semantics identical across variants;
- do not combine H1/H2/H3 with A/B/C as nine uncontrolled concepts;
- do not hybridize A/B/C before the first visual test;
- build all three to equivalent fidelity, content completeness and visual-production quality;
- do not tell test participants which direction is the internal research prior;
- illustrative values must be labelled correctly.

Acceptance:
- [ ] desktop and ~390 px mobile key frames for all three;
- [ ] each direction has a distinct core visual idea and distinct category-confusion risk;
- [ ] same information hierarchy can be compared across variants;
- [ ] generic AI/SaaS similarity is red-teamed;
- [ ] each works statically;
- [ ] each can be tested without explaining the concept first;
- [ ] each direction passes an internal master-brand transfer stress test (Blueprint §19 AD-7, domain transfer). The same visual grammar is expressed in three production contexts: crop production, pig production and dairy. This is an internal design-system diagnostic, not products or public pages. Rules:
  - documentary/category-level agricultural reality and generic operational/economic context only;
  - no fake product UI;
  - no fabricated pig/dairy metrics or results;
  - no pig/dairy capability shown as shipped.
  Record, per direction:
  - whether the PROFIT grammar survives without field geometry;
  - which elements are invariant and which are domain variables;
  - whether it falls apart without a field/map/parcel visual;
  - whether it still looks like PROFIT rather than generic livestock software.
  A direction that needs field geometry for its identity is flagged as a master-brand scalability concern. That is not an automatic kill: it may remain a crop-module expression, but not the master-brand system.

Depends on: WWW-000.

### WWW-002 — Art-direction farmer comprehension + trust test

Execution source:
`docs/experiments/art-direction-farmer-test-v1.md`

Research state:
**Broad art-direction research stopped for this cycle.** Resume only if test evidence exposes a specific failure that current evidence cannot explain.

Run the Blueprint experiments:
- AD-1 — 10-second farmer comprehension;
- AD-2 — evidence interpretation / calibrated trust;
- AD-3 — mechanism reconstruction;
- AD-4 — category-confusion diagnostic;
- AD-5 — mobile farmer task;
- AD-6 — trust under bad news/uncertainty;
- AD-7 — brand-system transfer (surface transfer + internal crop/pig/dairy domain diagnostic).

Primary decision objective:
**farmer comprehension + calibrated trust**

Acceptance:
- [ ] same message/scenario/content used across A/B/C;
- [ ] order randomized/counterbalanced;
- [ ] open recall captured before preference;
- [ ] evidence/confidence interpretation errors recorded;
- [ ] category misclassification patterns recorded;
- [ ] farm reality → data/source → economic interpretation → decision mechanism reconstruction recorded;
- [ ] mobile tested separately;
- [ ] negative/uncertain scenario tested;
- [ ] brand grammar tested across multiple surfaces rather than hero only;
- [ ] direction-specific kill criteria applied;
- [ ] winner/remaining contenders documented as evidence, not taste;
- [ ] no statistical-winner claim from an underpowered qualitative sample.

Depends on: WWW-001.

### WWW-003 — Brand-code recognition/confusion test

Test:
- economic typography;
- field geometry;
- agriculture + data + economics composition;
- evidence/confidence language.

Acceptance:
- [ ] logo-off diagnostic prepared;
- [ ] PROFIT concepts mixed with competitor/generic references;
- [ ] recognition/confusion observations recorded;
- [ ] weak codes are not promoted to “distinctive assets”.

Depends on: WWW-001.

### WWW-004 — Field → Economics Static vs Motion validation

Execution source:
`docs/experiments/field-economics-motion-test-v1.md`

Status:
**BLOCKED until WWW-002 produces a surviving art-direction base or sufficiently narrow survivor set.**

Before start: the scenario's generic "Margin €637/ha" must be revalidated against the Field Profitability product-truth boundary (Blueprint §2.2). Relabel it only once its calculation provenance establishes what the number represents (see the execution source, §3).

Do not use the existing motion prototype as evidence that motion is valuable. It is implementation-feasibility evidence only.

Compare:

- Variant A — best complete static composition;
- Variant B — the same composition with minimal explanatory motion.

Required controlled content:
- same farm image/context;
- same field geometry;
- same operational/data values;
- same economic result;
- **HYPOTHETICAL EXAMPLE**;
- **Confidence: Not assessed**;
- same decision question / CTA;
- same art direction.

Acceptance:
- [ ] static composition passes on its own before motion is tested;
- [ ] information lineage is understandable;
- [ ] no unsupported causal attribution is introduced by sequencing;
- [ ] economic meaning remains dominant over the effect;
- [ ] evidence/confidence are not delayed behind the number;
- [ ] time-to-understanding is recorded;
- [ ] recall and distraction are recorded;
- [ ] ~390 px mobile task is valid;
- [ ] reduced-motion state equals the complete static information state;
- [ ] performance/runtime delta is documented;
- [ ] no GSAP/runtime dependency in the first experiment;
- [ ] effect is removed/simplified if it does not improve comprehension/recall enough to justify cost.

Depends on: WWW-002.

### WWW-005 — Production platform decision

Options:
- remain in Framer for validation;
- Astro coded production;
- defer decision.

Acceptance:
- [ ] decision starts from current learning needs;
- [ ] source ownership, iteration speed, complexity and custom interaction needs are compared;
- [ ] ADR created if a durable production choice is made;
- [ ] no framework is chosen because it is fashionable.

Depends on: WWW-001, WWW-002, WWW-004.

---

## W1 — Production foundation

Start only after W0 produces enough evidence to justify production work.

### WWW-101 — Repository production scaffold

If coded production is selected:

Acceptance:
- [ ] current official framework/tool versions re-verified;
- [ ] minimal scaffold only;
- [ ] semantic/static rendering default;
- [ ] no global React dependency unless justified;
- [ ] build + typecheck available;
- [ ] no sample/demo clutter retained.

Depends on: WWW-005.

### WWW-102 — Design tokens / semantic primitives

Define only validated/reusable rules:

- typography roles;
- spacing;
- color semantics;
- economic-number treatment;
- evidence states;
- confidence states;
- motion durations/easing where validated.

Acceptance:
- [ ] distinguishes semantic tokens from arbitrary values;
- [ ] evidence/risk meaning does not rely on color alone;
- [ ] responsive/zoom behavior tested;
- [ ] no premature giant design system.

Depends on: WWW-001 plus sufficient design selection evidence.

### WWW-103 — Core layout and navigation shell

Acceptance:
- [ ] semantic landmarks;
- [ ] keyboard usable;
- [ ] mobile navigation works;
- [ ] core routes represented;
- [ ] no hidden experimental navigation;
- [ ] focus states visible.

Depends on: WWW-101, WWW-102.

---

## W2 — Homepage learning surface

### WWW-201 — Hero

Job:
immediate orientation and qualified next action.

Acceptance:
- [ ] category/value copy is sourced from current tested hypothesis;
- [ ] one primary CTA;
- [ ] one meaningful secondary CTA;
- [ ] credible product/farm proof object;
- [ ] no fabricated proof;
- [ ] static first screen communicates without animation.

### WWW-202 — Farmer economic questions

Acceptance:
- [ ] concrete farmer questions;
- [ ] editorial treatment rather than generic four-card grid;
- [ ] readable/scannable on mobile.

### WWW-203 — Why current workflow is hard

Acceptance:
- [ ] explains fragmentation without competitor attacks;
- [ ] does not imply PROFIT solves capabilities not yet built.

### WWW-204 — PROFIT mechanism

Show:

**Data → Economics → Decision → Action → Measurement**

Acceptance:
- [ ] one coherent visual system;
- [ ] accessible static fallback;
- [ ] motion, if any, adds comprehension rather than carrying the information.

### WWW-205 — Field Profitability product exhibit

Acceptance:
- [ ] one decision / one field / one economic consequence;
- [ ] real product UI when available;
- [ ] illustrative data clearly labelled if real product evidence is unavailable;
- [ ] no “future platform” feature inflation.

### WWW-206 — Hard questions

Cover material objections:

- required data;
- old machinery;
- incomplete data;
- accuracy;
- ownership/control;
- evidence semantics;
- low confidence;
- limitations.

Acceptance:
- [ ] answers are factual and non-defensive;
- [ ] unknowns remain unknown rather than invented.

### WWW-207 — Evidence and trust

Acceptance:
- [ ] canonical evidence states;
- [ ] confidence semantics;
- [ ] data provenance where relevant;
- [ ] methodology/data-control path;
- [ ] no generic trust badges without substance.

### WWW-208 — Company + final CTA

Acceptance:
- [ ] real team/company information only;
- [ ] exact next step after “Join the pilot” is explained;
- [ ] form asks only information required for the next conversation.

Depends on: W1 foundation and relevant validation evidence.

---

## W3 — Supporting routes

Build only with enough real content.

### WWW-301 — /farmers
Focus: farmer workflow, data requirements, objections, expected pilot journey.

### WWW-302 — /product
Focus: concrete product behavior and current modules, not roadmap theater.

### WWW-303 — /trust
Focus: methodology, evidence, confidence, data ownership/control, privacy/security principles.

### WWW-304 — /company
Focus: factual team/company story and what is still being proven.

### WWW-305 — /investors
Focus:
Problem → wedge → farmer value → evidence → business logic → defensibility hypotheses.

Do not let investor framing rewrite the farmer-facing homepage.

### WWW-306 — /contact
Short, accessible, privacy-conscious contact/pilot flow.

### WWW-307 — /results
**Blocked** until sufficient real pilot/case-study evidence exists.

---

## W4 — Conversion and measurement

### WWW-401 — Pilot/contact form

Initial fields:
- Name
- Farm/company
- Country
- Email
- Farm type

Acceptance:
- [ ] labels and errors accessible;
- [ ] success/failure states clear;
- [ ] no sensitive farm data required before trust is established;
- [ ] privacy/data handling explanation available.

### WWW-402 — Analytics event model

Track only decision-useful behavior.

Candidate events:
- primary CTA;
- secondary CTA;
- pilot form start;
- pilot form submit;
- farmer/investor path;
- key product/evidence depth interactions.

Guardrail:
Do not optimize vanity engagement at the expense of trust or qualified conversion.

### WWW-403 — Post-launch learning loop

Sequence:
1. qualitative feedback;
2. real behavior;
3. message/order iteration;
4. A/B testing only when traffic is sufficient.

---

## W5 — Quality gates

These are cross-cutting and should not be postponed to the end.

### WWW-501 — Accessibility gate

Target:
WCAG 2.2 AA.

Minimum:
- keyboard;
- visible focus;
- semantic structure;
- accessible forms;
- zoom/reflow;
- reduced motion;
- screen-reader sanity;
- automated scan for critical pages/states.

### WWW-502 — Performance gate

Targets:
- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1

Review:
- hero image;
- fonts;
- client JS;
- third parties;
- page weight;
- critical request failures;
- mobile throttling.

### WWW-503 — Browser verification

Minimum critical widths:
- 390
- 768
- 1024
- 1440

Critical journeys:
- homepage;
- farmer path;
- investor path;
- CTA;
- mobile menu;
- contact/pilot form.

### WWW-504 — Evidence/copy integrity gate

Every release candidate checks:
- illustrative vs real values;
- evidence state;
- confidence;
- dates/periods;
- assumptions;
- attribution language;
- no fabricated proof.

---

# Recommended issue sequencing

Do **not** create the entire backlog as active work at once.

Current recommended active sequence:

1. WWW-000 — validate hero message/positioning on a neutral static scaffold
2. WWW-001 — create three genuinely different art directions from the surviving message
3. WWW-002 — run art-direction farmer comprehension + calibrated-trust testing
4. WWW-003 — run brand-code recognition/confusion testing
5. WWW-004 — validate or reject the signature motion within the broader visual exploration
6. WWW-005 — decide production platform only when implementation creates more learning value than another validation cycle

Only after that promote W1/W2 implementation issues.

This preserves learning speed and avoids building a polished site around unvalidated positioning.

# AI task rule

Before an AI agent starts any WWW task:

1. create the GitHub issue with `.github/ISSUE_TEMPLATE/ai-development-task.yml` when working through GitHub; use `docs/ai/TASK_TEMPLATE.md` as the portable fallback;
2. identify LOCKED / FLEXIBLE / OPEN constraints;
3. reference the relevant Blueprint section;
4. define acceptance criteria before implementation;
5. verify before declaring Done;
6. use the PR template to report only checks that actually ran.

# Definition of Ready

A material task is ready when:

- problem/user is explicit;
- desired outcome is observable;
- canonical source is identified;
- material assumptions are visible;
- dependencies are known;
- acceptance criteria exist;
- evidence state is understood.

# Definition of Done

A task is done when:

- requested outcome exists;
- relevant automated/manual verification passed;
- evidence claims are correct;
- responsive/accessibility implications are checked;
- no unnecessary complexity was added;
- any material new decision is recorded;
- canonical/derived documentation remains synchronized.

# Reconsider the plan if

- farmer testing materially changes positioning;
- Field Profitability is not the strongest first proof;
- visual concepts fail trust or recognition tests;
- the platform decision changes learning speed/cost materially;
- real VEV evidence changes the strongest public narrative.


## Research stop rule

General website/design/frontend research is no longer the default next step.

Start new research only when a named WWW task has a material unresolved question that:
- blocks the experiment;
- changes a high-impact decision;
- requires current external verification;
- or exposes a meaningful farmer-trust / implementation risk.

Otherwise prefer:

**prototype → test → learn → update decision**.
