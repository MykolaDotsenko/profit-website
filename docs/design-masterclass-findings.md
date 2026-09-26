# Design Masterclass Findings — Modern Presentation Websites

Research date: 2026-09-26

This document captures the strongest design-specific findings from current masterclasses and tutorials that materially improve the PROFIT presentation website.

## Executive design direction

The strongest current direction for PROFIT remains:

**Real agriculture. Financial precision. Editorial clarity. Quiet technology.**

The website should feel premium because it is:
- clear;
- intentional;
- restrained;
- responsive;
- evidence-led;
- visually distinctive without becoming experimental for its own sake.

## 1. Treat responsive design as one continuous system

Current Framer and Figma guidance converges on an important principle:

Do not design three disconnected pages called Desktop, Tablet and Mobile.

Use:
- flexible layout systems;
- auto layout/stacks;
- fluid sizing;
- responsive components;
- breakpoints only where structure genuinely needs to change.

### PROFIT rule

After a layout works at wide, medium and narrow views, resize continuously between them.

Test:
- wrapping;
- reading order;
- metric labels;
- image crops;
- CTA visibility;
- long translated strings;
- chart/metric density.

A design that works at 1440px and 390px but breaks at 820px is not responsive.

## 2. Separate exploration from production pages

Keep freeform exploration separate from published responsive pages.

### PROFIT rule

Maintain a dedicated design-exploration area for:
- alternative hero directions;
- typography experiments;
- color studies;
- photography treatments;
- field/data overlays;
- economic metric compositions;
- motion studies.

Only move an idea into production when:
- hierarchy is clear;
- it supports the message;
- it survives responsive constraints;
- it fits the design system.

## 3. Use real content during design, not placeholder content

Stress-test with:
- "Verified Economic Value";
- longer Ukrainian/Finnish/German translations;
- € / ha values with large numbers;
- negative values;
- long field names;
- missing photos;
- low-confidence states;
- multiple-line CTA/support copy.

A component is not complete until realistic content fails gracefully.

## 4. Typography should carry more of the brand

Typography can do more of the visual branding so the site needs fewer decorative effects.

Use:
- distinctive but credible display typography;
- highly readable body typography;
- tabular/economic numerals;
- deliberate contrast between narrative and data.

### Guardrail

Do not follow kinetic-type trends blindly.

For PROFIT:
- headline animation must never slow comprehension;
- numbers should feel stable and trustworthy;
- movement belongs mainly to transitions/transformations, not every word.

## 5. Editorial design is a particularly strong fit for PROFIT

Editorial web design is built around:
- typography;
- grids;
- color;
- graphic elements;
- art direction.

### PROFIT implication

Use editorial techniques for:
- large statements;
- asymmetric image/data pairings;
- full-bleed farm imagery;
- pull-out economic metrics;
- structured captions;
- deliberate whitespace;
- strong section rhythm.

Avoid reducing the homepage to a grid of same-sized SaaS cards.

## 6. Art direction should start from the brief, not from effects

Before choosing visual effects, define the emotion and proof the page must communicate.

Desired impression:

**This team understands real farming, understands economics, and builds precise serious technology.**

Every visual decision should support at least one of:
- agricultural authenticity;
- economic precision;
- evidence;
- trust;
- intelligence.

If an effect supports none, remove it.

## 7. Use concept exploration before committing to one visual direction

Create 3 genuinely different directions before polishing:

### Direction A — Editorial Intelligence
- strong type;
- whitespace;
- asymmetry;
- economic numbers;
- restrained photography.

### Direction B — Farm Data Layer
- full-bleed farm imagery;
- field geometry;
- overlays;
- maps/data layers;
- quieter typography.

### Direction C — Economic Command
- dark/neutral precision;
- bold data;
- dashboard fragments;
- stronger financial character.

Do not create three color variants of the same layout.

Test the directions for:
- farmer trust;
- comprehension;
- investor credibility;
- distinctiveness;
- ability to scale into future product/brand assets.

## 8. Hero design should optimize immediate comprehension

The first few seconds determine whether visitors stay.

### PROFIT hero requirements

The hero should communicate, without scrolling:

1. company/category;
2. farmer-relevant economic outcome;
3. short mechanism/context;
4. clear primary action;
5. credible product/farm visual.

### Strong default

Eyebrow:
**AGRICULTURAL DECISION INTELLIGENCE**

Headline:
**Turn farm data into more profitable decisions.**

Support:
**PROFIT connects what happens on the farm with what it means economically.**

CTA:
**Join the pilot**

Secondary:
**See how PROFIT works**

Do not add more claims until testing proves they improve understanding.

## 9. Make proof visual, not only verbal

The site should not merely say:
- data-driven;
- transparent;
- economic intelligence;
- evidence-based.

Show these concepts.

### Strong proof devices

- field image with real boundary;
- revenue/cost/margin decomposition;
- evidence-state badge;
- confidence indicator;
- baseline vs outcome visualization;
- source/methodology annotation;
- real product screen.

This makes credibility part of the composition.

## 10. Design trust states explicitly

Create visual patterns for:

### Evidence state
- Modelled
- Observed
- Attributed
- Verified

### Confidence
- High
- Medium
- Low / insufficient evidence

### Data provenance
- Farmer-provided
- Machinery
- Satellite
- Weather
- Market
- Derived/modelled

These states should have consistent typography/color/iconography across the site and later product UI.

## 11. Use photography as art direction, not decoration

Prioritize:
- real operators;
- actual fields;
- machinery in use;
- livestock environments;
- field details/soil/crops;
- aerial geometry;
- operational moments.

Avoid generic stock scenarios.

### Shot-list principle

Every photo should answer:
**What real part of farming or decision-making does this image prove?**

Whenever possible pair photography with:
- field name;
- area;
- operation;
- crop;
- season;
- economic context.

## 12. Mobile requires its own art direction

For mobile:
- shorten visual paths;
- preserve the core economic metric;
- crop photography intentionally;
- reduce decorative layers;
- keep CTA reachable;
- simplify overlays;
- preserve evidence labels;
- avoid text over complex imagery if readability drops.

Mobile can use a different crop and composition while maintaining the same design system.

## 13. Motion must serve hierarchy, feedback or explanation

Useful motion categories:

### Hierarchy
Subtle entrance reveals establish reading order.

### Feedback
Hover/press/focus states confirm interaction.

### Transformation
Show:
**raw farm data → economic interpretation → decision**

### Continuity
Page/component transitions maintain context.

### PROFIT rule

One primary motion idea per section.

Remove motion if it:
- delays reading;
- causes clipping on narrow widths;
- competes with the economic message;
- feels noisy when multiple sections animate together.

Always support reduced motion.

## 14. Do not adopt trends just because they are current

Expressive typography, motion and dark mode are current trends, not requirements.

### PROFIT decision filter

Adopt a trend only if it improves:
- recognition;
- clarity;
- trust;
- economic storytelling;
- brand differentiation.

Dark mode:
Potentially useful for investor/data-heavy pages or selected sections, but not automatically the main brand experience.

Kinetic typography:
Potentially useful for one hero/pivot moment, but risky if it slows comprehension.

Custom cursors:
Deprioritize. They add little farmer value and can harm interaction expectations.

## 15. Build a constrained design system early

### PROFIT v1 design tokens

Define before full-page polish:

#### Typography
- display;
- section heading;
- body;
- caption;
- metric-large;
- metric-small;
- evidence label.

#### Spacing
Use a small intentional scale.

#### Radius
Use few values, not arbitrary per-component rounding.

#### Color roles
- canvas;
- primary text;
- secondary text;
- brand;
- positive value;
- attention;
- risk;
- confidence/evidence neutrals.

#### Components
- navigation;
- buttons;
- section header;
- economic metric;
- evidence badge;
- product visual frame;
- field/data overlay;
- trust card;
- form field;
- footer.

Consistency creates premium perception faster than decorative complexity.

## 16. Test the full range, not device presets

Check each key page at:
- narrow phone;
- large phone;
- tablet portrait;
- tablet landscape;
- small laptop;
- large desktop;

and continuously drag through intermediate widths.

Also test:
- 200% zoom;
- long localized content;
- reduced motion;
- keyboard focus;
- missing/broken media fallback.

## 17. The site should have a deliberate visual rhythm

Avoid repeated:

**headline + three cards**

for every section.

Create rhythm using:
- dense vs spacious sections;
- text-first vs image-first sections;
- full-bleed vs contained sections;
- single metric vs metric cluster;
- real photograph vs product visualization;
- quiet section after high-impact section.

## 18. Recommended homepage visual rhythm

### 01 — Hero
Quiet, high confidence, one dominant message.

### 02 — Economic question
Large editorial typography.

### 03 — Farm/data visual
Immersive real agriculture.

### 04 — How PROFIT works
Structured system diagram.

### 05 — Product proof
Precise UI/data display.

### 06 — Economic value
Large metric-led composition.

### 07 — Trust/evidence
Calmer, more technical.

### 08 — Company
Human photography/team.

### 09 — CTA
Simple, spacious, decisive.

## 19. Strongest design insight from this pass

**The website should not look like a designed interface sitting on top of agriculture. It should make agriculture, data and economics feel like one visual system.**

The strongest unique PROFIT motif is:

**Real farm artifact → precise data layer → economic meaning**

Examples:
- aerial field → boundary/data → margin;
- tractor operation → activity record → cost impact;
- herd/farm image → production metrics → economic outcome.

This is more ownable than generic AI imagery or SaaS cards.

## 20. Design acceptance criteria

A direction is ready to progress only if:

- a farmer can understand the core proposition quickly;
- the design feels credible with no animation;
- mobile composition remains strong;
- long/translatable content fits;
- economic metrics remain dominant and legible;
- trust/evidence states are understandable;
- visual system is reusable;
- motion is additive, not necessary;
- the design does not resemble a generic AI/SaaS template;
- the team can explain why every major visual choice exists.
