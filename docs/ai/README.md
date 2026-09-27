# AI Development Index

Purpose: give AI agents the smallest reliable context required to work on the PROFIT public website without reading the entire research archive.

## Start here

1. [AGENTS.md](../../AGENTS.md) — mandatory AI development contract
2. [context.yaml](context.yaml) — compact machine-readable project state
3. [Implementation Plan](IMPLEMENTATION_PLAN.md) — issue-ready sequencing, dependencies and gates
4. [Website Blueprint v1](../website-blueprint-v1.md) — canonical implementation source
5. [Triple-Check Audit](../triple-check-audit-2026-09-26.md) — verified corrections / known uncertainty
6. [Website Strategy](../website-strategy.md) — strategic rationale
7. [Decision Records](../decisions/README.md) — durable rationale for material decisions
8. [100-Point Release Quality Contract](../release/website-100-scorecard.md) — auditable final Definition of Done

## Context-loading rule

**Load only the documents relevant to the current task.**

The research archive is deliberately not the default AI context. This reduces:
- token waste;
- contradictory old recommendations;
- accidental promotion of research ideas into decisions;
- AI averaging across many overlapping documents.

## Task → documents

| Task | Read |
|---|---|
| Homepage structure / content hierarchy | Homepage Copy Deck → Homepage Content Brief → Blueprint → Trust & Professionalism Synthesis → Strategy → Marketing findings if needed |
| Positioning / headline / CTA | Homepage Copy Deck → WWW-000 protocol/preflight → Strategy → Trust & Professionalism Synthesis → Marketing findings → Psychology findings |
| Farmer trust / evidence / claims | Blueprint → Trust & Professionalism Synthesis → Psychology findings → Triple-check audit |
| Privacy / pilot personal data / farm-data terms | Privacy & Farm-Data Trust Pack → release gates → Trust & Professionalism Synthesis → Blueprint |
| Agricultural data / forecasting / DSS public copy | Trust & Professionalism Synthesis → Whole-Farm Evidence Note → Blueprint |
| Brand identity / visual direction | Blueprint → WWW-001 prototypes + internal red-team → Trust & Professionalism Synthesis → Modern Branding → Avoiding AI Sameness |
| AI-generated visual/design work | Avoiding AI Sameness → Modern Branding |
| Layout / responsive design | Blueprint → Design Masterclass → Modern Design Deep Pass |
| Motion / visual effects | Blueprint → Modern Visual Effects → Visual Effects Roadmap |
| Frontend architecture | Blueprint → Frontend Technologies → Frontend Deep Pass |
| Accessibility / performance / QA | Blueprint → 100-Point Release Quality Contract → Frontend Deep Pass → Triple-check audit |
| Signature prototype | Prototype README → Modern Visual Effects |
| Strategic rationale | Website Strategy → relevant research only |
| Task sequencing / dependencies | Implementation Plan → Blueprint |
| Final release quality / 100-point assessment | 100-Point Release Quality Contract → release gates → exact-SHA CI evidence |
| Material architecture/product decision | Decision Records policy → Blueprint/Strategy → relevant evidence |
| Website code (Build Pass 01) | [README Website section](../../README.md) → ADR 0002 → Blueprint |

## Canonical vs supporting

### Canonical / operational
- `docs/website-blueprint-v1.md`

### Canonical / strategic
- `docs/website-strategy.md`

### Correction layer
- `docs/triple-check-audit-2026-09-26.md`

### Compact AI context
- `docs/ai/context.yaml`

This file is intentionally concise and derived. If it conflicts with the canonical documents, the canonical documents win.

### Execution plan
- `docs/ai/IMPLEMENTATION_PLAN.md`

This translates the Blueprint into task-sized work. It controls sequencing, not product truth.

### Decision records
- `docs/decisions/`

ADRs preserve rationale for material durable decisions. They do not replace the canonical Blueprint.

### Supporting evidence library
- `research-findings.md`
- `marketing-bestseller-findings.md`
- `psychology-bestseller-findings.md`
- `masterclasses-and-tutorials.md`
- `design-masterclass-findings.md`
- `modern-design-masterclasses-deep-pass-2026.md`
- `modern-branding-masterclasses-deep-pass-2026.md`
- `avoiding-ai-sameness.md`
- `modern-visual-effects-deep-pass-2026.md`
- `visual-effects-learning-roadmap.md`
- `frontend-masterclass-findings.md`
- `frontend-masterclasses-deep-pass-2026.md`
- `frontend-technologies-frameworks.md`
- `homepage-copy-deck-v1.md`
- `homepage-content-brief-v1.md`
- `website-trust-professionalism-synthesis-2026-09-27.md`
- `whole-farm-scope-evidence-2026-09-27.md`
- `legal/privacy-data-trust-pack.md` — production-readiness draft; not legal approval.
- `experiments/www-000-preflight-pack-v1.md`
- `experiments/www-000-statistical-surrogate-v1.md` — official-statistics calibration + proxy message-risk audit; never substitute for farmer comprehension evidence.
- `experiments/art-direction-internal-red-team-v1.md` — A/B/C internal diagnostic plus A2/B2/C2 challenge findings; no winner.

These are valuable references but must not silently override the Blueprint.

## State vocabulary

Use three states when interpreting requirements:

### LOCKED
Do not change without explicit decision/evidence.

Examples:
- evidence integrity;
- farmer-first priority;
- VEV terminology semantics;
- accessibility/performance standards;
- no fabricated proof;
- farmer control/transparency principles.

### FLEXIBLE
Strong current direction, but implementation may vary inside the constraints.

Examples:
- homepage section composition;
- editorial rhythm;
- motion treatment;
- exact component boundaries;
- crop/photography composition.

### OPEN / HYPOTHESIS
Requires validation or explicit decision.

Examples:
- final headline;
- final category wording;
- final art direction;
- Framer vs coded production;
- exact final typeface/palette;
- whether Field Profitability remains the strongest proof point for the first cohort.

## AI task handoff

For non-trivial tasks, use [TASK_TEMPLATE.md](TASK_TEMPLATE.md).

The template forces:
- problem/outcome clarity;
- source-of-truth references;
- assumptions;
- scope boundaries;
- acceptance criteria;
- verification;
- evidence integrity.

## Important rule

Do not ask an AI agent to “make the site modern/premium” without the canonical context.

That instruction alone is considered under-specified and high risk for generic AI/SaaS output.


## Prompting rule

Keep user prompts focused.

A strong prompt usually needs:
1. one task/decision;
2. desired outcome;
3. the relevant canonical file or section;
4. important constraints;
5. expected verification.

Do not duplicate the whole PROFIT constitution or research archive in every prompt. The repository already carries that context.

Use broad research only when a concrete OPEN question cannot be answered reliably from current evidence.
