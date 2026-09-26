# Signature Effect Prototype — Field → Economics Reveal

Status: Prototype specification
Date: 2026-09-26

## Purpose

Prototype the strongest visual-effects concept identified for PROFIT:

**real farm → field geometry → data layer → economic meaning → evidence**

This is a motion/interaction prototype, not final art direction.

## Why this prototype exists

It tests whether one effect can simultaneously:
- explain PROFIT's core transformation;
- reinforce distinctive brand codes;
- feel premium without spectacle;
- remain understandable without motion;
- survive mobile/reduced-motion;
- avoid heavy runtime dependencies.

## Storyboard

### 0–20% — Farm reality
The agricultural scene is dominant.
Copy: **Real farm. Real decisions.**

### 20–40% — Field geometry
A meaningful field boundary draws into view.

### 40–60% — Measurement
Operational/data markers appear.

### 60–80% — Economic interpretation
Supporting detail recedes and the primary metric becomes dominant.

### 80–100% — Evidence
Evidence/confidence language resolves around the result.

Final composition:

**FIELD 24**
Wheat · 41.7 ha

**€637 / ha**
Margin

**OBSERVED**
Confidence: High

## Implementation strategy

Prototype order:
1. semantic HTML;
2. inline SVG;
3. CSS;
4. CSS scroll-driven animation;
5. no JavaScript;
6. reduced-motion fallback.

Production implementation should preserve this ordering unless a specific limitation justifies more complexity.

## Important prototype limitation

The prototype intentionally uses an abstract agricultural placeholder rather than fabricated documentary photography.

Production must replace it with:
- approved real farm photography; or
- clearly illustrative visual material.

Do not use AI-generated farm imagery as factual proof of real operations.

## Mobile

On narrow screens:
- stage height is reduced;
- economic metric remains dominant;
- field/data layers simplify;
- copy remains readable;
- no horizontal overflow;
- no dependency on hover.

## Reduced motion

With `prefers-reduced-motion: reduce`:
- all important content is visible;
- field boundary is fully drawn;
- data markers are visible;
- metric/evidence states are visible;
- no scroll-linked movement is required.

## Performance budget

Prototype:
- zero external JS;
- zero external fonts;
- inline SVG only;
- no canvas/WebGL/video;
- no runtime animation library.

Production:
- hero/LCP media must be independently optimized;
- motion cannot delay hero rendering;
- no GSAP unless native implementation fails a specific requirement.

## Acceptance criteria

PASS only if:
- effect explains the transformation without narration;
- final static state works independently;
- animation is understandable forward and backward;
- mobile composition remains strong;
- reduced-motion retains all meaning;
- no essential data is hidden behind animation;
- no scroll hijacking occurs;
- effect feels recognisably tied to PROFIT;
- replacing motion with static state does not break the page;
- implementation remains lightweight.

## Kill / redesign if

- users notice the animation more than the economic message;
- field geometry feels decorative rather than meaningful;
- the effect resembles generic data/AI visualization;
- motion makes the section slower to understand;
- real photography cannot integrate cleanly;
- mobile becomes materially weaker;
- performance cost rises beyond explanatory value.
