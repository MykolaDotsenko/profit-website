# Modern Visual Effects for Presentation Websites — Deep Pass 2026

Research date: 2026-09-26

This document captures the strongest visual-effects findings from current tutorials, workshops, platform guidance and creative-development courses relevant to PROFIT's public website.

Sources reviewed include:
- Framer Academy animation curriculum (2025–2026)
- Webflow University Interactions & Animations
- SmashingConf Web Animation with Cassie Evans
- Frontend Masters Award-Winning Marketing Websites
- Frontend Masters creative coding / SVG / WebGL curricula
- GSAP ScrollTrigger and SplitText documentation
- MDN / Chrome guidance for View Transitions and CSS scroll-driven animations

The goal is not maximum spectacle.

The goal is to use visual effects only when they improve:
- comprehension;
- hierarchy;
- spatial continuity;
- product explanation;
- brand distinctiveness;
- perceived craft;
without harming:
- farmer trust;
- accessibility;
- mobile usability;
- performance.

---

# 1. Visual-effects doctrine for PROFIT

**Motion must explain. Effects must reveal. Stillness is allowed.**

Every effect must answer at least one:

1. What should the visitor notice?
2. What relationship does this make easier to understand?
3. What state change does this explain?
4. What PROFIT brand code does this reinforce?
5. What interaction does this confirm?

If the answer is only:
"it looks modern"
or
"award websites do it",

do not use it.

---

# 2. The visual-effects hierarchy

Use the least complex technique that achieves the communication goal.

## Tier 0 — Static composition
First choice.

Tools:
- typography;
- cropping;
- contrast;
- grid;
- whitespace;
- field geometry;
- economic numerals.

If the static composition does not work, motion will not rescue it.

## Tier 1 — Native microinteraction
Preferred for most interaction feedback.

Examples:
- hover/focus/press;
- opacity;
- slight scale;
- border/fill transition;
- underline/reveal.

## Tier 2 — CSS reveal / transform
Preferred for visual storytelling.

Examples:
- clip-path reveals;
- image scale inside clipped frame;
- SVG stroke reveal;
- scroll-driven transform;
- view transition.

## Tier 3 — GSAP/SVG choreography
Use only when a causal sequence or multi-element narrative genuinely requires orchestration.

## Tier 4 — Canvas / WebGL / Three.js / shaders
Exceptional use only.

Require a documented reason why the experience cannot be communicated as effectively with lighter techniques.

---

# 3. Framer 2026 lesson: one effect must have one purpose

Framer Academy currently separates:
- layer effects;
- text effects;
- scroll effects;
- Component Variant interactions.

Its guidance repeatedly recommends:
- restrained text effects;
- static composition first;
- testing across breakpoints;
- reduced-motion support;
- removing animation that slows comprehension.

Source:
https://www.framer.com/academy/lessons/framer-animations-overview

### PROFIT rule

Do not stack:
- reveal;
- blur;
- rotate;
- scale;
- parallax;
- text stagger;

on the same visual merely because each is available.

Choose one primary movement idea.

---

# 4. Masked image reveal — HIGH VALUE

Clip-path / masked image reveals are currently a strong premium effect.

They are visually more editorial than generic fade-in and can often be implemented with CSS rather than a heavy animation runtime.

Potential implementations:
- CSS clip-path;
- Framer clip/reveal treatment;
- GSAP if choreography is genuinely required.

### Best PROFIT uses

- reveal real farm photography;
- reveal an aerial field through its field boundary;
- transition from raw farm image to data overlay;
- uncover product UI after farm context.

### Signature opportunity

A field boundary could function as the reveal mask:

**real field → field shape opens → economic layer appears**

This is much more ownable than a rectangular generic SaaS image reveal.

### Guardrails

- no essential content hidden permanently if motion is disabled;
- crop remains strong on mobile;
- do not delay LCP hero content;
- reduced-motion version should show final state immediately.

---

# 5. SVG path drawing — VERY HIGH BRAND FIT

Framer Academy explicitly teaches vector path/stroke animation, while Frontend Masters' SVG material shows SVG as a lightweight format for animation and responsive graphics.

### PROFIT use

This is unusually relevant because field boundaries are naturally vector geometry.

Possible signature motion:

1. real/aerial field appears;
2. field boundary draws itself;
3. operational/data marks appear;
4. economic metric resolves.

### Strong use cases

- field perimeter;
- route/operation path;
- causal flow diagram;
- data-source connection;
- evidence process.

### Why it is attractive

It reinforces an actual PROFIT brand code rather than adding generic decoration.

### Rule

SVG line drawing is allowed when the path itself has meaning.

Do not animate arbitrary squiggles merely because stroke animation looks sophisticated.

---

# 6. Scroll-driven image/data transformation — VERY HIGH VALUE

Modern CSS now supports scroll-progress and view-progress timelines without JavaScript.

MDN notes that CSS scroll-driven animations avoid main-thread scroll listeners and can be more performant.

Source:
https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines

Chrome case studies report large reductions in custom code and CPU usage when replacing JavaScript scroll implementations with declarative scroll-driven animation.

Source:
https://developer.chrome.com/blog/css-ui-ecommerce-sda

### PROFIT signature candidate

A controlled section:

**REAL FARM**
↓ scroll
**MEASURED DATA**
↓
**ECONOMIC INTERPRETATION**
↓
**DECISION**

The visitor's scroll reveals the logical transformation.

### Important distinction

This is not scroll hijacking.

Normal document scroll controls the progress.
The visitor can stop, reverse, or skip naturally.

### Rule

Prefer CSS scroll-driven animation for simple transforms before adding ScrollTrigger.

---

# 7. Scroll-triggered effects — useful for section rhythm

Chrome 145 introduced CSS scroll-triggered animations as a declarative alternative to IntersectionObserver-style triggers in supporting browsers.

Source:
https://developer.chrome.com/blog/scroll-triggered-animations

### Useful PROFIT cases

- evidence badge enters;
- metric reveals;
- section marker activates;
- field boundary draws on entry.

### Guardrail

Use as progressive enhancement while browser support matures.

The content must exist correctly without the trigger.

---

# 8. Parallax — LOW DOSE ONLY

Framer's parallax guidance explicitly recommends:
- small positive/negative values;
- static composition first;
- reducing distance when copy becomes hard to follow;
- testing mobile and reduced motion.

Source:
https://www.framer.com/academy/lessons/framer-animations-scroll-speed-parallax

### PROFIT use

Potentially useful for:
- subtle separation between real farm image and field/data overlay;
- field boundary moving at a slightly different depth;
- product exhibit layers.

### Not useful for

- every image;
- large background movement;
- text moving at a different speed from reading;
- dramatic multi-layer fake 3D.

### Rule

**Parallax should be felt before it is noticed.**

If the visitor identifies the effect before the content, reduce it.

---

# 9. View Transitions — HIGH VALUE

The View Transition API supports animated transitions between DOM states and page/document views.

MDN notes that such transitions can reduce cognitive load and help visitors maintain context.

Source:
https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API

### PROFIT use

Strong candidates:
- field card → expanded field economics;
- product overview → detailed module;
- metric → methodology/evidence detail;
- scenario A → scenario B;
- image/context → product UI.

### Brand behavior

Use one restrained transition grammar consistently.

Example:
- field geometry remains spatially anchored;
- economic number expands/repositions;
- detail resolves around it.

### Rule

View transition must preserve context, not announce itself as an effect.

---

# 10. Text reveal / SplitText — MEDIUM VALUE, HIGH OVERUSE RISK

GSAP SplitText supports:
- words;
- characters;
- lines;
- masking;
- responsive re-splitting;
- screen-reader accessibility handling.

Source:
https://gsap.com/docs/v3/Plugins/SplitText/

Framer also supports text effects by character, word, line, or element.

### PROFIT use

Use selectively:
- one hero line;
- section transition;
- a short economic statement.

Prefer:
- line-based or block-based reveal;
over:
- long character-by-character sequences.

### Never use

Kinetic animation that forces the visitor to wait for the sentence to become readable.

### Economic-number rule

Key financial metrics should normally be stable.

Do not turn €637/ha into a casino-like count-up unless the changing value represents an actual interactive calculation.

---

# 11. Clip-path shape morphing — MEDIUM/HIGH VALUE if tied to field geometry

CSS clip-path supports animatable shapes when compatible point structures are used.

Source:
https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Masking/Clipping

### PROFIT opportunity

Use real or stylised field geometry as a mask.

Potential effects:
- rectangular media frame morphs toward a field boundary;
- data layer emerges inside a parcel shape;
- image reveal follows a real field outline.

### Risk

Arbitrary blob morphs would make PROFIT look like generic creative-tech branding.

### Rule

Geometry must connect to agricultural/spatial meaning.

---

# 12. Hover image scaling — LOW COST / HIGH CRAFT VALUE

Framer calls clipped image scaling on hover a clean, timeless effect.

Source:
https://www.framer.com/academy/lessons/scaling-a-clipped-image-on-hover-in-framer

### PROFIT use

Good for:
- case study cards;
- company/team/farm photography;
- research stories;
- product cards.

### Rule

Keep wrapper dimensions fixed.
Scale the media, not the layout.
Preserve focal point and crop at every breakpoint.

---

# 13. Hover/press effects — ESSENTIAL MICROINTERACTION

Framer recommends small changes to:
- fill;
- scale;
- opacity;
- shadow;

while ensuring touch/keyboard feedback also exists.

Source:
https://www.framer.com/academy/lessons/framer-animations-hover-and-press-effects

### PROFIT rule

Every interactive element needs feedback.

But feedback should feel:
**precise, calm, controlled.**

Avoid playful bounce/squish as the default brand motion.

---

# 14. GSAP ScrollTrigger — POWERFUL BUT NOT DEFAULT

GSAP ScrollTrigger provides:
- trigger;
- scrub;
- pin;
- snap;
- timeline orchestration.

Source:
https://gsap.com/docs/v3/Plugins/ScrollTrigger/

Webflow's current animation system also uses GSAP for timeline-driven interactions.

Source:
https://university.webflow.com/courses/interactions-animations

### Use GSAP when

- multiple elements need precisely choreographed causality;
- native CSS cannot express the sequence clearly;
- the narrative has real communication value.

### Example candidate

A single flagship transformation:

Farm operation
→ captured activity
→ cost layer
→ field margin
→ decision opportunity

### Do not use GSAP merely for

- fade-in;
- simple parallax;
- basic hover;
- ordinary section reveal.

---

# 15. 3D image sequences — POSSIBLE, BUT VERY SELECTIVE

Frontend Masters' Award-Winning Marketing Websites teaches:
- GSAP;
- timeline/scroll animations;
- Blender 3D image sequences;
- performance optimisation;
- accessibility.

Source:
https://frontendmasters.com/topics/canvas/

### PROFIT assessment

A 3D/image-sequence effect could create a memorable flagship moment, for example:
- rotate/inspect a field/topography model;
- machine operation → economic layers.

But current expected ROI is low compared with:
- real photography;
- SVG;
- product UI;
- field geometry.

### Decision

Not v1 by default.

Prototype only if a specific concept proves substantially clearer or more memorable.

---

# 16. Canvas/WebGL/Three.js/shaders — EXPERIMENTAL RESERVE

Frontend Masters' creative coding curriculum demonstrates:
- Canvas;
- WebGL;
- Three.js;
- GLSL shaders;
- generative graphics.

Sources:
https://frontendmasters.com/topics/creative-coding/
https://frontendmasters.com/topics/3d/

Awwwards also treats WebGL/3D as a major creative-development category.

### Potential unique PROFIT use

If ever justified:
- dynamic terrain/field visualization;
- spatial data interpolation;
- genuinely interactive agricultural model.

### Weak uses

- liquid background;
- shader noise;
- floating 3D sphere;
- decorative particles;
- reactive cursor distortion.

### Rule

**WebGL must visualize something PROFIT uniquely understands.**

If the effect could advertise a crypto exchange or design agency unchanged, reject it.

---

# 17. Cursor-driven reveals / custom cursors — DEPRIORITIZE

Modern Framer marketplace and award-style sites increasingly demonstrate liquid cursor masks and custom-cursor effects.

They can create strong portfolio-style spectacle.

### PROFIT assessment

Weak fit because:
- pointer-dependent;
- limited mobile value;
- can obscure interaction expectations;
- adds novelty without explaining the product.

### Decision

Do not use in core navigation or hero.

Possible only in a non-essential experimental brand moment after core UX is proven.

---

# 18. Light/glow/blend effects — VERY LOW DOSE

Framer supports layered:
- gradients;
- blur;
- blend modes;
- glows.

Source:
https://www.framer.com/academy/lessons/light-effects

### PROFIT use

Potential:
- subtle economic metric emphasis;
- data-layer separation;
- focus/hover feedback.

### Avoid

- generic neon AI glow;
- glowing card borders everywhere;
- purple/blue AI halo identity.

This is explicitly high-risk for AI sameness.

---

# 19. Page-transition effects — MEDIUM VALUE

Awwwards showcases:
- page transitions;
- pixel transitions;
- card transitions;
- project-list transitions;
- persistent elements.

Example:
https://www.awwwards.com/inspiration/page-transition-eduard-bodak-portfolio

### PROFIT use

Keep page transitions:
- short;
- spatially meaningful;
- compatible with normal navigation.

Strongest implementation path:
native View Transitions where possible.

Avoid full-screen loaders used only to stage a transition.

---

# 20. Progress / section indicators — HIGH VALUE FOR LONG PAGE

Scroll-driven motion can support navigation rather than decoration.

### PROFIT use

A quiet desktop progress rail:

01 Reality
02 Data
03 Economics
04 Product
05 Evidence
06 Trust
07 Pilot

Effect:
- active section changes;
- subtle progress line.

### Why valuable

It improves wayfinding on a long B2B page and reinforces the narrative.

This is higher-value than decorative scrolling effects.

---

# 21. Visual-effect budget

Treat effects as a scarce design resource.

Recommended v1 homepage:

## Signature effects — maximum 2
Examples:
1. field-boundary/data/economic transformation;
2. one View Transition/product exhibit transformation.

## Supporting effects
- subtle image reveal;
- section appear;
- hover/focus;
- progress rail.

## Avoid simultaneous spectacle

Do not combine in one viewport:
- parallax;
- text stagger;
- image mask;
- glow;
- rotation;
- count-up;
- particle background.

### Rule

**One focal motion event per viewport/section.**

---

# 22. Motion intensity scale

Define four levels.

## M0 — No motion
For:
- dense methodology;
- evidence tables;
- security/privacy;
- long reading.

## M1 — Feedback
For:
- buttons;
- links;
- controls.

## M2 — Reveal / hierarchy
For:
- section entry;
- image reveal;
- metric emphasis.

## M3 — Storytelling
For:
- signature farm → data → economics transformation.

Use M3 rarely.

No default M4 "spectacle" tier.

---

# 23. Reduced-motion strategy

Every effect requires a reduced-motion outcome.

### Reduced motion may

- skip transitions;
- show final state instantly;
- remove parallax;
- remove scrubbed motion;
- replace animated drawing with static vector;
- preserve content order.

### Rule

Reduced-motion mode is not a degraded information experience.

Only motion is reduced.
Meaning remains complete.

---

# 24. Performance rules

Effects must not create a performance surprise.

Before approval inspect:
- client JS;
- CPU/main-thread behavior;
- image/video payload;
- layout shift;
- mobile performance;
- animation smoothness;
- impact on LCP/INP.

### Preferred implementation order

1. CSS transition
2. CSS keyframes
3. clip-path/mask/SVG
4. CSS scroll-driven animation
5. View Transition API
6. small JS
7. GSAP
8. Canvas/WebGL/Three.js

Choose the first level capable of delivering the effect reliably.

---

# 25. PROFIT effects shortlist

## GREEN — recommended

### Field-boundary SVG draw
Brand fit: very high
Complexity: low/medium
Use: signature identity

### Clip-path farm-image reveal
Brand fit: high
Complexity: low
Use: photography / product transitions

### Scroll-linked farm → data → economics transformation
Brand fit: very high
Complexity: medium
Use: flagship explanatory section

### Native View Transition
Brand fit: high
Complexity: low/medium
Use: product/evidence continuity

### Subtle clipped image hover
Brand fit: medium
Complexity: low
Use: cards/case studies

### Hover/focus feedback
Brand fit: necessary
Complexity: low

### Section progress indicator
Brand fit: high
Complexity: low/medium

## AMBER — prototype first

### Line/word text reveal
High overuse risk.

### Mild parallax
Test mobile/motion sensitivity.

### GSAP timeline
Require a specific explanatory need.

### Shape morph using field geometry
Can be distinctive if grounded in real geometry.

### Short controlled video-on-scroll
Only if media tells a story that static/vector cannot.

## RED — not v1 by default

### WebGL/Three.js decorative hero
### shader/noise background
### particle field
### custom cursor
### liquid cursor masks
### aggressive 3D
### scroll hijacking
### long intro loader
### auto-playing background video
### excessive kinetic typography

---

# 26. Candidate signature motion for PROFIT

The strongest effect identified in this research:

## Field → Economics Reveal

### State 1
Full-bleed real agricultural field photograph.

### State 2
Real field boundary draws in SVG.

### State 3
Operational/data layer appears inside or around the boundary.

### State 4
Supporting detail recedes.

### State 5
One economic number becomes dominant:

**€637 / ha**
Margin

### State 6
Evidence label resolves:
MODELLED / OBSERVED / ATTRIBUTED / VERIFIED

### Why this is strong

It combines:
- real agriculture;
- field geometry;
- data;
- economics;
- evidence;
- motion;

into one proprietary PROFIT narrative.

It also directly reinforces the product's value logic rather than decorating the page.

### Implementation preference

Prototype first with:
- CSS/SVG;
- scroll-driven CSS;
- progressive enhancement.

Only add GSAP if native implementation cannot deliver the desired choreography.

---

# 27. Visual-effect acceptance test

Before shipping an effect ask:

### Meaning
Does it explain something?

### Brand
Does it reinforce a PROFIT code?

### Static fallback
Is the composition still excellent without motion?

### Mobile
Does it work or simplify cleanly?

### Accessibility
Is reduced motion complete?
Are controls unaffected?

### Performance
What does it cost in bytes, CPU and Core Web Vitals?

### Distinctiveness
Could the identical effect advertise an unrelated AI/SaaS company?

### Restraint
Is there already another focal effect in this viewport?

If these answers are weak, remove the effect.

---

# Strongest conclusion

The visual-effects strategy for PROFIT should not be:

**"make the site move."**

It should be:

**"make economic causality visible."**

The strongest effects are those that turn PROFIT's own concepts into motion:

**farm reality**
→
**measurement**
→
**economic interpretation**
→
**evidence**
→
**decision**

That gives us a visual-effects language that is useful, distinctive, and harder to collapse into generic AI-era website sameness.
