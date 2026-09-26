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

Possible explanatory motion to test:

1. real/aerial field is already understandable;
2. field boundary draws to establish scope;
3. operational/data context appears;
4. economic interpretation resolves together with its evidence/confidence context.

### Strong use cases

- field perimeter;
- route/operation path;
- information-flow diagram; use causal framing only when attribution evidence supports it;
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

Chrome 146 shipped CSS scroll-triggered animations as a declarative alternative to IntersectionObserver-style triggers. An earlier Chrome preview article had projected Chrome 145; the stable release notes place the feature in Chrome 146.

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

## Storytelling effects — maximum 2 after validation
Examples to test:
1. field-boundary/data/economic transformation;
2. one View Transition/product exhibit transformation.

Before validation, neither is required.

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
- a validated farm → data → economics transformation.

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

# 24. Performance and implementation ladder

Effects must not create a performance surprise.

Before approval inspect:
- client JS;
- CPU/main-thread behavior;
- image/video payload;
- layout shift;
- mobile performance;
- animation smoothness;
- impact on LCP/INP.

For Field → Economics Reveal use this order:

0. **Static composition**
1. **SVG**
2. **native CSS transitions/keyframes**
3. **CSS scroll-driven animations**
4. **View Transitions for state/page continuity**
5. **small JavaScript**
6. **GSAP only if native techniques are objectively insufficient**
7. **Canvas/WebGL/Three.js — not justified for this effect**

Notes:
- SVG establishes meaningful field scope before it becomes an animation technique.
- CSS scroll-driven animation is progressive enhancement because current support is not universal.
- View Transitions solve continuity between views/states; they are not the default internal choreography engine for this reveal.
- Do not add a runtime dependency merely because it makes sequencing easier.

---

# 25. Current effects shortlist after targeted review

## GREEN — low-risk / generally useful

### Static field geometry
Purpose:
scope and spatial context.

### Calm hover/focus feedback
Purpose:
interaction state.

### Short section reveal
Purpose:
hierarchy only when it does not delay reading.

### Native View Transition
Purpose:
field/product/evidence continuity between states/pages.

### Guided section progress
Purpose:
wayfinding if user testing shows benefit.

## AMBER — validate before production

### Field-boundary SVG draw
Potential benefit:
attention to field scope.

Risk:
decorative "draw-on" effect with no comprehension gain.

### Operational/data reveal
Potential benefit:
source/provenance sequencing.

Risk:
generic data-overlay choreography.

### Field → Economics Reveal
Status:
**candidate explanatory motion; requires Static vs Motion farmer experiment.**

### Mild parallax
Risk:
mobile/reduced-motion/distraction.

### GSAP timeline
Status:
**conditional only after native prototype fails to express a motion that farmer evidence has already validated.**

## RED — not v1 by default

- WebGL/Three.js decorative hero;
- shader/noise background;
- particle field;
- custom/liquid cursor;
- aggressive 3D;
- scroll hijacking;
- long intro loader;
- autoplay background video;
- excessive kinetic typography;
- theatrical financial count-ups;
- generic "data flying into dashboard" animation.

---

# 26. Field → Economics Reveal — critical re-evaluation

The existing prototype proves only that a lightweight native implementation is possible.

It does **not** prove:
- that motion improves comprehension;
- that the sequence is brand-distinctive;
- that the current pacing is correct;
- that the effect works better than a strong static composition.

Therefore stop calling it the "strongest effect" as a conclusion.

Current status:

**Candidate explanatory motion — NEEDS FARMER EVIDENCE**

## Information sequence

Test:

**Real farm**
→ **field scope / geometry**
→ **operational/data context + provenance**
→ **economic interpretation**
→ **evidence/confidence**
→ **decision question / next action**

This is information lineage.

Do not visually imply:
"fertilizer/rain/yield caused margin"
unless the underlying evidence supports causal/attribution claims.

## Static Variant A

All essential information is visible simultaneously:

- farm reality;
- static field boundary;
- data/source context;
- €637 / ha Margin;
- **HYPOTHETICAL EXAMPLE**;
- **Confidence: Not assessed**;
- one decision question / next action.

The static composition is the reduced-motion baseline and the control condition.

## Motion Variant B

Same content and geometry.

Minimal sequence:
1. farm already visible;
2. SVG boundary draws;
3. data/source layer appears;
4. economic interpretation receives emphasis;
5. evidence/confidence is present with the metric;
6. decision resolves.

Do not:
- count the number up;
- animate data points as playful pops;
- use large parallax;
- blur/dim the farm without an information reason;
- delay evidence/confidence after the number;
- require long sticky/pinned scroll.

## Existing prototype issues to correct before testing

The current prototype:
- has no explicit decision state;
- reveals the economic metric before evidence/confidence fully resolves;
- uses farm dimming that has no proven information purpose;
- uses a long sticky scroll treatment that has not been shown to improve understanding;
- uses an abstract placeholder rather than approved real agricultural material.

These are prototype limitations, not production patterns.

---

# 27. Motion-element acceptance test

For each animated element answer:

### Information
What exact relationship does this explain?

### Static loss
What does the farmer lose if this stays still?

### Simplicity
Could typography/composition/static SVG do the same job?

### Mobile
Does it remain understandable at ~390 px?

### Reduced motion
Does the full meaning survive with motion removed?

### Timing
Does it delay reading or action?

### Trust
Could sequencing create false precision or unsupported causal inference?

### Generic-effect test
Could the same choreography sell a crypto/AI/design-agency site unchanged?

If an answer is weak, remove/simplify the motion.

---

# 28. Static vs Motion experiment

Run only after a surviving art direction exists.

Use the **same art direction, content, scenario, economic value, evidence/confidence, decision question and CTA**.

## A — Static
Best static composition.

## B — Motion
Same composition with minimal Field → Economics sequencing.

For illustrative values use only:

**HYPOTHETICAL EXAMPLE**  
**Confidence: Not assessed**

### Primary measures

- comprehension;
- recall;
- correct information-lineage reconstruction;
- unverified causal inference;
- time to understand;
- calibrated trust;
- distraction/effect recall;
- mobile task success;
- reduced-motion information parity.

### Suggested exploratory method

- 12–18 target farmers for directional qualitative evidence;
- randomize first exposure to Static or Motion;
- collect primary measures before showing the alternative;
- allow crossover only after the primary measures for comparative feedback;
- do not claim statistical superiority from a small sample.

### Kill motion if

- Static explains as well or better;
- comprehension/recall does not materially improve;
- time-to-understand worsens;
- effect recall is stronger than economic-meaning recall;
- motion increases causal misinterpretation;
- evidence/confidence interpretation worsens;
- mobile is materially weaker;
- reduced-motion loses information;
- performance cost is disproportionate;
- the effect is transferable unchanged to generic creative-tech;
- a single SVG/simple CSS cue achieves the same benefit.

---

# 29. Targeted 2026 source conclusions

Relevant current guidance materially changes implementation as follows:

### Framer Academy — Animate Vectors
Useful for:
- a restrained SVG boundary draw;
- controlling stroke/path direction and timing.

PROFIT conclusion:
use only if drawing the boundary helps the farmer establish field scope faster than a visible static boundary.

Source:
https://www.framer.com/academy/lessons/animating-vectors

### Framer Academy — Scroll Transforms
Useful for:
- mapping normal scroll progress to opacity/position/scale;
- gradual sequencing without custom runtime code.

PROFIT conclusion:
use only after static composition works; avoid stacking transforms and preserve resting states at every breakpoint.

Source:
https://www.framer.com/academy/lessons/framer-animations-scroll-transform

### Framer Academy — Trigger Animations on Scroll
Material guidance:
- static composition first;
- essential content must not depend on animation completing;
- test slow/fast scrolling, breakpoints and reduced motion.

PROFIT conclusion:
entry triggers are adequate for simple sequencing; they are not evidence that pinned scrollytelling is needed.

Source:
https://www.framer.com/academy/lessons/framer-animations-trigger-on-scroll

### Framer Academy — Transitions and easing
Material guidance:
- timing/easing should be judged in final context;
- keep related interactions consistent;
- entrances often suit restrained ease-out behavior;
- frequent interactions should remain fast.

PROFIT conclusion:
use easing to clarify attention, not give motion a playful personality.

Source:
https://www.framer.com/academy/lessons/framer-animations-transitions-and-easing

### MDN — CSS Scroll-Driven Animations
Material capability:
- native scroll/view timelines can bind CSS animation progress to scroll.

Current constraint:
- key properties such as `animation-timeline` / scroll/view timelines remain limited-availability across some major browsers.

PROFIT conclusion:
progressive enhancement only. Unsupported browsers receive the complete static composition.

Source:
https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations

### MDN — View Transition API
Material capability:
- preserves visual/spatial continuity between DOM/page states and can reduce context switching.

PROFIT conclusion:
strong candidate for product-exhibit → detail/methodology transitions, but not necessary for the internal Field → Economics reveal.

Source:
https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API

### MDN — prefers-reduced-motion
Material requirement:
- user motion preference is widely available.

PROFIT conclusion:
reduced motion maps directly to the complete static composition, not a lesser information state.

Source:
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion

### GSAP
Not researched further in this pass.

Reason:
native/Framer techniques are already sufficient to run the communication experiment. Per PROFIT's minimum-complexity rule, GSAP becomes relevant only if validated motion needs choreography that native methods cannot express reliably.

---

# 30. Research stop

Motion research is sufficient for the next reversible experiment.

Do not continue broad visual-effects/tutorial research now.

Next evidence source:

**Static Variant A vs Motion Variant B with target farmers.**

Re-open technical research only if:
- the validated motion cannot be implemented reliably with the native ladder;
- browser/accessibility behavior creates a material failure;
- performance data shows the current implementation path is inadequate.

# Strongest conclusion

Do not ask:

**"How can PROFIT make farm data look dynamic?"**

Ask:

**"Does controlled movement help a farmer understand the information lineage from farm reality to economic meaning faster and more correctly than the best static composition?"**

Current answer:
**unknown — test required.**

Motion is successful only when it improves understanding without:
- delaying the result;
- weakening evidence/confidence interpretation;
- implying unsupported causality;
- harming mobile/reduced-motion users;
- importing generic creative-tech aesthetics.

Until then, Field → Economics Reveal remains a **candidate explanatory motion**, not a signature.

