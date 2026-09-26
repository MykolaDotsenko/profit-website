# Website Research Findings

This file stores high-value findings from PROFIT website research so they are not lost in chat history.

## Research scope

The research combines ideas from leading sources in:

- homepage usability;
- web usability;
- typography;
- visual hierarchy;
- grid systems;
- brand identity;
- conversion design;
- responsive design;
- accessibility;
- performance;
- modern frontend architecture.

These sources are used for principles, not copied visual styles.

## High-value source set

### Positioning and messaging

- April Dunford — *Obviously Awesome*
- April Dunford — *Sales Pitch*
- Donald Miller — *Building a StoryBrand 2.0*
- Chip & Dan Heath — *Made to Stick*

Key takeaway:

**Positioning comes before page design.**

The visitor needs to understand:

- the problem;
- the alternative today;
- what is different;
- why it matters economically;
- why PROFIT is credible.

## Usability and information hierarchy

- Steve Krug — *Don't Make Me Think*
- Jakob Nielsen & Marie Tahir — *Homepage Usability*
- Jon Yablonski — *Laws of UX, 2nd Edition*
- Giles Colborne — *Simple and Usable*
- Jeff Johnson — *Designing with the Mind in Mind*

Key takeaways:

- users scan more than they read;
- visual hierarchy must make the page understandable without reading every paragraph;
- familiar interaction patterns reduce cognitive load;
- simplicity means managing complexity, not hiding important information;
- homepage must explain purpose quickly.

## Visual design and typography

- Adam Wathan & Steve Schoger — *Refactoring UI*
- Ellen Lupton — *Thinking with Type, 3rd Edition*
- Josef Müller-Brockmann — *Grid Systems in Graphic Design*
- Timothy Samara — *Making and Breaking the Grid*
- Alina Wheeler / Rob Meyerson — *Designing Brand Identity, 6th Edition*
- Matej Latin — *Better Web Typography for a Better Web*

Key takeaways:

- hierarchy before decoration;
- whitespace is an active design tool;
- typography can become a core brand asset;
- grid systems create order, but deliberate asymmetry can create character;
- design identity must be a system, not logo + color;
- economic numerals and units can become a distinctive visual language for PROFIT.

## Conversion and forms

- Tim Ash et al. — *Landing Page Optimization*
- Luke Wroblewski — *Web Form Design*

Key takeaways:

- CTA and messaging are hypotheses to test;
- reduce form friction;
- optimize for qualified action, not clicks alone;
- test comprehension as well as conversion.

## Responsive and inclusive design

- Scott Jehl — *Responsible Responsive Design*
- current WCAG 2.2 guidance
- modern web performance guidance

Key takeaways:

- design for device, network and input variability;
- progressive enhancement is valuable for farm audiences with uneven connectivity;
- core content should not depend on animation or heavy JavaScript;
- accessibility and performance strengthen trust.

## Modern implementation findings

### Static-first is well matched to a presentation website

A separate PROFIT marketing website does not need the same stack as the authenticated core product.

The current strongest implementation candidates are:

- **Framer** for rapid validation/iteration;
- **Astro** for a long-term fully owned coded website.

### Native platform capabilities should be preferred

Where reliable:

- semantic HTML;
- CSS Grid;
- container queries;
- fluid typography;
- native popovers;
- native/browser view transitions;
- CSS variables/tokens;
- progressive enhancement.

Avoid adding JavaScript libraries where the platform can solve the problem cleanly.

### React is optional

For a presentation website, React is not a requirement.

Use it only where interactive value justifies hydration.

## Strong design conclusions for PROFIT

### The site should not look like generic agritech

Avoid a predictable combination of:

- green gradient;
- leaf iconography;
- stock aerial field;
- generic SaaS cards;
- “AI-powered” visual clichés.

### The site should connect three things visually

**Farm reality + data + economics**

Example visual pattern:

Field image/map

→ crop/area data

→ revenue/cost/margin

→ recommendation/economic opportunity

This can explain the product better than several generic feature sections.

### Economic typography is a potential moat in brand expression

Examples:

- €637 / ha
- +12.4%
- 6.42 t / ha
- Confidence: High
- Observed: 2027 season

A consistent economic-display system can make PROFIT recognizable even without the logo.

### Farmer trust is the main constraint

The website should signal:

- evidence;
- precision;
- transparency;
- farmer control;
- agronomic and economic competence;
- absence of hype.

### Investor credibility should be earned through customer logic

A strong investor story starts with demonstrated farmer value.

Do not let the investor narrative override customer-level evidence.

## Homepage message candidates

Primary candidate:

**Turn farm data into more profitable decisions.**

Supporting copy candidate:

**PROFIT connects what happens on the farm with what it means economically.**

Alternative candidates to test:

- **Know what every hectare is really worth.**
- **Know where your farm makes money — and where it loses it.**

Do not select a winner without user evidence.

## Website doctrine

**Real agriculture. Financial precision. Editorial clarity. Quiet technology.**

Operational rules:

1. Clarity before originality.
2. Evidence before hype.
3. Typography before decoration.
4. Motion must explain.
5. Farmer value before investor narrative.
6. Verified claims require attribution evidence.
7. Mobile and weak-network usability are first-class.
8. Do not add complexity that does not improve trust, comprehension or qualified conversion.

## Things deliberately deprioritized

Unless evidence shows clear benefit:

- WebGL hero scenes;
- 3D globes;
- heavy background video;
- scroll hijacking;
- complex animation libraries;
- large JS bundles;
- separate design-system package;
- many marketing pages before content is ready;
- “AI” as the main headline;
- invented social proof;
- unverified savings claims.

## Next research questions

- Which visual direction creates highest farmer trust without looking conservative or outdated?
- Does “Agricultural Decision Intelligence” improve or reduce comprehension among farmers?
- Which homepage message creates the highest qualified pilot interest?
- What proof format is most credible before verified customer VEV exists?
- Does Framer materially accelerate learning enough to justify lock-in?
- When does custom Astro implementation create measurable value over Framer?
