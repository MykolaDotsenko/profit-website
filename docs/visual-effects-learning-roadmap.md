# Visual Effects Learning Roadmap

Date: 2026-09-26

Purpose: prioritize tutorials, masterclasses and workshops that are most useful for PROFIT's presentation website and the Field → Economics Reveal prototype.

## Priority table

| Priority | Resource | What to learn | PROFIT use |
|---|---|---|---|
| NOW | Framer Academy — Animate Vectors | SVG stroke/path reveal, timing, path direction | Field boundary draw |
| NOW | Framer Academy — Scroll Transforms | Map scroll progress to scale/position/opacity | Farm → data → economics sequence |
| NOW | Framer Academy — Trigger Animations on Scroll | Entry timing, preview across breakpoints, reduced motion | Supporting reveals |
| NOW | MDN — CSS Scroll-Driven Animations | Native scroll/view timelines | Prototype without JS |
| NOW | MDN — View Transition API | Spatial continuity between states/pages | Product/evidence transitions |
| NOW | Webflow University — When to Use Interactions | Motion intent, restraint, accessibility | Motion governance |
| NOW | Webflow University — Interactions & Animations | Easing, timing, sequencing, GSAP-powered timelines | Motion system fundamentals |
| NEXT | SmashingConf 2026 — Web Animation, Cassie Evans | Motion principles, tool choice, SVG/Canvas/GSAP, debugging | Signature storytelling |
| NEXT | GSAP — ScrollTrigger docs | scrub, pin, snap, timelines | Complex multi-step narrative only if CSS is insufficient |
| NEXT | GSAP — SplitText docs | line/word masking and responsive text splitting | One restrained text reveal |
| NEXT | Frontend Masters — CSS Animations & Transitions | choreography, animation states, custom properties | Strong CSS motion foundations |
| NEXT | Smashing — SVG Animation Masterclass | SVG optimization, clipping/masking, stroke/morphing, GSAP | Field geometry system |
| LATER | Frontend Masters — Award-Winning Marketing Websites | high-end marketing motion, GSAP/3D workflows | Creative reference / advanced prototype |
| LATER | Frontend Masters — Advanced Creative Coding with WebGL & Shaders | WebGL, Three.js, GLSL | Only if a unique spatial-agricultural visualization justifies it |
| DEPRIORITIZE | Cursor-follow / liquid cursor tutorials | Mouse-follow novelty | Weak mobile/trust ROI for PROFIT |

## Study order

### Phase 1 — Native motion
1. Framer Animate Vectors
2. Framer Scroll Transforms
3. MDN Scroll-Driven Animations
4. MDN View Transition API
5. reduced-motion and responsive testing

Goal:
build the signature motion without a runtime animation library.

### Phase 2 — Motion craft
1. Webflow: When to Use Interactions
2. Webflow Interactions & Animations
3. CSS Animations & Transitions
4. Cassie Evans Web Animation material

Goal:
improve timing, easing, hierarchy and choreography without increasing spectacle.

### Phase 3 — Advanced orchestration
1. GSAP ScrollTrigger
2. GSAP SplitText
3. SVG clipping/masking/morphing

Goal:
use GSAP only where native CSS cannot clearly express the intended causal sequence.

### Phase 4 — Experimental reserve
1. Award-Winning Marketing Websites
2. WebGL / Three.js / shaders

Goal:
explore only after the core experience is validated and performance/accessibility budgets are stable.

## Direct prototype mapping

### Field boundary
Study:
- Framer Animate Vectors
- SVG Animation Masterclass

Implementation:
- SVG path
- stroke-dasharray / stroke-dashoffset
- meaningful draw direction

### Farm → data → economics
Study:
- Framer Scroll Transforms
- MDN CSS Scroll-Driven Animations

Implementation:
- scroll/view timeline
- opacity/transform
- normal scrolling only

### Product continuity
Study:
- MDN View Transition API

Implementation:
- field card → detailed analysis
- metric → methodology/evidence

### Text
Study:
- GSAP SplitText only if required

Implementation:
- line reveal preferred
- no forced character-by-character reading

### Complex sequence
Study:
- ScrollTrigger only after native prototype is evaluated

Implementation:
- one flagship causal sequence
- no generic decorative timelines

## Decision rule

Do not add a visual-effects technology because a tutorial is impressive.

Adopt it only if:
1. it explains PROFIT better;
2. it strengthens a distinctive brand code;
3. static and reduced-motion states remain complete;
4. mobile remains strong;
5. performance cost is justified;
6. a simpler native technique cannot do the job.

## Current recommendation

For the next prototype iteration, focus only on:

**SVG path animation + CSS scroll-driven animations + View Transitions + motion timing/easing.**

Do not study WebGL/Three.js deeply yet. It is not on the critical path.
