# ADR 0002 — Coded website foundation built in parallel with W0 validation

- Status: Accepted
- Date: 2026-09-26
- Owners: PROFIT product owner
- Related: `docs/ai/IMPLEMENTATION_PLAN.md` (§0, W1, WWW-005), `docs/website-blueprint-v1.md` §13, `README.md` (Website)

## Problem

The Implementation Plan starts W1 production work only after W0 validation. W0 is blocked on the WWW-000 Finland recruitment gate and D5–D8. Waiting would also block reversible engineering that does not depend on the message or art-direction results.

## Decision

Build a reversible coded website foundation now (**Website Build Pass 01**), in parallel with W0:

- Astro (static output), TypeScript 6 for the Astro toolchain, semantic HTML, native CSS, minimal JavaScript, no framework runtime;
- the seven core routes, reusable sections, evidence/trust components, accessible navigation, a performance baseline and a localization-ready, currency-neutral content model;
- every brand- or message-defining choice stays data or tokens: hero copy (WWW-000 candidates as hypotheses), proof objects, images, art-direction tokens and CTA copy.

This decision does **not**:

- decide WWW-005 (final production platform: Framer vs coded production);
- select a hero direction, art direction, typeface or palette;
- freeze or replace the WWW-000 stimulus, or start WWW-001;
- make anything on the site a public claim beyond the canonical documents.

## Evidence

- **Fact:** the owner instructed Build Pass 01 on 2026-09-26 and stated that D5–D8 block only the WWW-000 freeze and farmer sessions, not reversible engineering.
- **Fact:** Blueprint §13 and AGENTS.md §8 name Astro as the preferred shell if a coded site is chosen. The npm registry showed Astro 7.3.5 as latest on 2026-09-26, and `@astrojs/check` 0.9.10 supports TypeScript ≤ 6, matching the Blueprint baseline. The official documentation site could not be reached from the build environment.
- **Inference:** architecture, routes, layout, accessibility and performance work are unaffected by which hero or art direction wins, because those arrive as data and tokens.

## Alternatives considered

### Wait for W0 before any code

Benefits: follows the Plan's original sequence exactly.
Costs/risks: engineering and accessibility baseline work is delayed with no learning gained.

### Build the foundation in Framer

Benefits: fastest visual iteration.
Costs/risks: the owner asked for an owned, growable coded foundation; platform lock-in remains a WWW-005 question.

## Why this decision now

The owner decided it, and the work is reversible: no dependency beyond Astro and its checker, no server runtime, no CMS.

## Consequences

### Positive
- A working multi-page site for internal review at 390/768/1024/1440.
- Farmer evidence can change hero copy, proof objects, images, tokens and CTA copy without layout rewrites.

### Negative / trade-offs
- A polished shell can be mistaken for validated positioning. Mitigation: a preview banner, `noindex` by default, and visible content-gap notes.
- If WWW-005 selects Framer, this code becomes a reference, not the production site.

### New dependencies
- `astro` 7.3.5; dev-only `@astrojs/check` 0.9.10 and `typescript` 6.0.3.

## Verification / success signal

`npm run verify` passes, and each route passes the Blueprint §22 gate. Swapping `HERO_VARIANT` or token values requires no layout change.

## Reconsider if

- WWW-005 selects a different production platform;
- farmer testing invalidates the page architecture, not just its copy;
- the foundation starts shaping message or art-direction decisions instead of carrying them.

## Supersedes

None.

## Superseded by

None.
