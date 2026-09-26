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

- [ ] Three genuinely different art directions exist.
- [ ] Farmer 10-second comprehension testing has been run.
- [ ] Main positioning/headline findings are documented.
- [ ] Field Profitability has been tested as the first concrete proof point.
- [ ] Field → Economics Reveal has been evaluated for comprehension, mobile and reduced motion.
- [ ] A production-platform decision is made only if implementation now creates more value than another validation iteration.

If a material production-platform decision is made, create an ADR.

---

# Workstreams

## W0 — Validation and decision evidence

### WWW-001 — Three art-direction prototypes

Outcome:
Create three genuinely different concept territories:

- Editorial Intelligence
- Farm Data Layer
- Economic Command

Constraints:
- not color variants;
- must work without motion;
- use the same core message/proof so visual direction can be compared;
- illustrative values must be labelled correctly.

Acceptance:
- [ ] desktop and mobile key frames for all three;
- [ ] each direction states its own visual idea;
- [ ] generic AI/SaaS similarity is red-teamed;
- [ ] each can be tested without explaining the concept first.

Depends on: none.

### WWW-002 — Farmer 10-second comprehension test

Measure:
- what PROFIT does;
- who it is for;
- problem solved;
- economic relevance;
- expected next action.

Acceptance:
- [ ] test protocol fixed before sessions;
- [ ] responses recorded without coaching;
- [ ] misunderstandings grouped by pattern;
- [ ] outcome updates positioning hypotheses rather than designer preference.

Depends on: WWW-001 or a sufficiently concrete baseline prototype.

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

### WWW-004 — Signature motion validation

Use the existing Field → Economics Reveal prototype.

Acceptance:
- [ ] causal sequence is understandable;
- [ ] economic meaning remains dominant over the effect;
- [ ] mobile composition is valid;
- [ ] reduced-motion state is complete;
- [ ] effect is removed/simplified if it does not improve comprehension enough to justify cost.

Depends on: none.

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

1. WWW-001
2. WWW-004
3. WWW-002
4. WWW-003
5. WWW-005

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
