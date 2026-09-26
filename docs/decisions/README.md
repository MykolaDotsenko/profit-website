# Architecture / Product Decision Records

This directory stores **material decisions**, not routine implementation history.

The goal is to preserve enough context that a future human or AI agent can understand:

**what was decided → why → what evidence supported it → what alternatives existed → when to reconsider it.**

## When to create an ADR

Create a decision record when a choice is:

- cross-cutting;
- expensive or difficult to reverse;
- likely to affect several future tasks;
- strategically important;
- a change to a previously canonical decision;
- likely to be questioned or rediscovered later.

Examples:

- Framer vs Astro for production;
- final information architecture;
- adopting a CMS;
- changing the evidence/confidence model;
- selecting a long-term analytics/privacy approach;
- changing the first product wedge;
- adopting a major animation/runtime dependency.

## When not to create an ADR

Do not create one for:

- routine copy edits;
- spacing/color tweaks inside an approved system;
- small refactors;
- ordinary component extraction;
- reversible implementation details;
- experiments that have not yet become decisions.

Use the task/PR/issue instead.

## Status vocabulary

Use one of:

- **Proposed** — decision is under active evaluation.
- **Accepted** — current decision.
- **Superseded** — replaced by a later ADR.
- **Rejected** — explicitly considered and not selected.

## Naming

Use:

`NNNN-short-kebab-title.md`

Examples:

- `0001-ai-development-documentation-architecture.md`
- `0002-production-platform.md`

Never rewrite history silently.

If an accepted decision changes materially:
1. create a new ADR;
2. mark the old ADR as Superseded;
3. link both records.

## Authority

ADRs explain and preserve material decisions.

They do **not** outrank the canonical website documentation by themselves.

When an ADR changes a canonical product/design/implementation decision, update the canonical source in the same change or explicitly state that the ADR is still Proposed.
