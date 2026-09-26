# Field → Economics Reveal prototype

Self-contained interaction prototype for PROFIT's candidate explanatory motion.

## Open

Open `index.html` in a modern browser.

No build step, package manager, framework, external font, or JavaScript is required.

## Purpose

Explore implementation feasibility only.

Do not use this prototype as evidence that motion improves comprehension. The canonical next decision is a controlled Static vs Motion farmer experiment after a surviving art direction exists.

The prototype intentionally uses an abstract agricultural placeholder. Production must use approved real farm photography or clearly illustrative material.

## What to evaluate

- Does the sequence communicate farm → data → economics?
- Is € / ha the visual outcome rather than the animation itself?
- Does the field boundary feel meaningful?
- Is the effect still strong on mobile?
- Does reduced-motion retain all information?
- Does this feel specifically PROFIT?

## Not production code

Do not copy directly into production without:
- real asset integration;
- browser/support review;
- performance profiling;
- accessibility testing;
- responsive visual QA;
- farmer comprehension testing.


## Critical review status — 2026-09-26

This implementation is **not test-ready production guidance** and is not evidence that motion improves comprehension.

Known limitations identified in the targeted motion review:
- the sequence has no explicit decision-state step;
- the economic metric begins resolving before evidence/confidence fully resolves, which can create a short false-precision window;
- the farm-dimming animation has no proven information purpose;
- the long sticky-scroll choreography has not been shown to improve time-to-understanding;
- the placeholder is illustrative rather than approved documentary farm material;
- sequential data markers can accidentally imply causal attribution that the prototype has not established.

Before farmer testing:
1. create the complete static control;
2. add an explicit non-fabricated decision question/next action;
3. keep **HYPOTHETICAL EXAMPLE** and **Confidence: Not assessed** adjacent to the economic result;
4. create the minimum motion variant from the same composition;
5. compare Static vs Motion using the canonical Blueprint protocol.

Do not add GSAP or heavier animation infrastructure before the motion benefit is validated.
