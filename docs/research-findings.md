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


## Deep pass: business-card / corporate presentation websites

### Positioning must stay flexible before traction

April Dunford explicitly advises very early or pre-launch products to keep positioning relatively loose until customer traction provides stronger evidence.

Implication for PROFIT:

- website v1 is a learning instrument, not a permanent positioning artifact;
- headlines, category language and CTA must be easy to test and revise;
- avoid hard-coding a grand category claim before farmers consistently understand and value it;
- treat "Agricultural Decision Intelligence" as a positioning hypothesis until validated.

### The homepage must explain the company before it impresses

Corporate-site research from Nielsen Norman Group found that users, including business users and investors, are often confused by vague corporate language and expect clear, authentic and transparent explanations of what a company actually does.

Implication for PROFIT:

- the homepage needs one concise purpose statement;
- jargon cannot substitute for explanation;
- the About/Company page must state what PROFIT does, why it exists and who is behind it;
- company copy should be tested with people outside the team.

### Build from the message/feature, not from a fashionable layout

Refactoring UI's "start with a feature, not a layout" principle is highly relevant to a presentation site.

Implication for PROFIT:

Do not begin with:
- hero template;
- bento grid;
- card count;
- trendy animation pattern.

Begin with:
- what the farmer must understand;
- what evidence must be visible;
- what product behavior should be demonstrated;
- what next action matters.

Then create the layout around those communication needs.

### Deliberately limit visual choices

Refactoring UI also recommends limiting choices and establishing systems for spacing, sizing, type and color.

Implication for PROFIT:

Create constrained design tokens early:
- small type scale;
- small spacing scale;
- limited radius set;
- restrained color roles;
- consistent economic-number styles.

This should make the website feel intentional rather than decorated.

### Data displays need hierarchy, not repeated labels

A useful Refactoring UI principle is that labels are often a last resort when context and formatting already communicate meaning.

For PROFIT economic visuals, avoid visual noise such as:

Revenue: €2,084/ha  
Cost: €1,447/ha  
Margin: €637/ha

when stronger hierarchy can communicate:

€637/ha  
Margin

with supporting revenue/cost visually de-emphasized.

The goal is not to remove semantic labels needed for accessibility, but to avoid giving every metric equal visual weight.

### Typography rules must be contextual

Thinking with Type and Refactoring UI reinforce that text cannot be treated with a single global style.

For PROFIT:
- large headlines may use tight line-height;
- body text needs more generous line-height;
- line length must be controlled;
- economic numerals should use consistent alignment and tabular figures where useful;
- units must remain visually connected to values without competing with them.

### Brand identity is a repeatable system

Designing Brand Identity, 6th Edition reinforces that the website should express a broader brand system, not invent an isolated homepage aesthetic.

PROFIT should consistently express:
- agricultural reality;
- economic precision;
- evidence;
- calm confidence;
- disciplined intelligence.

These signals must carry across:
- homepage;
- investor page;
- farmer page;
- case studies;
- forms;
- charts;
- social assets later.

### Trust must be designed explicitly

Corporate website research shows that visitors look for authenticity, transparency and outside confirmation.

Until PROFIT has strong customer proof, trust should come from:
- precise explanations;
- transparent methodology;
- real team/company information;
- honest evidence states;
- real product visuals;
- clear data/privacy principles;
- no invented logos, endorsements or savings.

### Conversion does not mean aggressive selling

Landing-page optimization principles remain useful even though many visual examples are dated.

For PROFIT, conversion means the right next step for the right visitor.

Primary farmer conversion:
- qualified pilot interest / conversation.

Investor conversion:
- deeper understanding / investor contact.

Do not optimize click-through at the cost of lead quality or trust.

### Forms are part of the sales experience

Web Form Design remains relevant because forms are often the final friction point.

PROFIT pilot/contact forms should:
- ask only what is needed for the next conversation;
- clearly explain why information is requested;
- use visible labels;
- provide useful error messages;
- avoid requiring farm data before trust is established;
- work well on mobile.

### Accessibility and performance are credibility signals

Quality target remains:
- WCAG 2.2 AA;
- LCP <= 2.5 s;
- INP <= 200 ms;
- CLS <= 0.1;
- evaluate Core Web Vitals at the 75th percentile, separated for mobile and desktop.

For PROFIT, this matters beyond compliance: a fast, stable, accessible site signals engineering discipline to investors and respects farmers using variable devices and network conditions.

## Strongest new conclusion

**The website itself should operate as a controlled positioning experiment.**

The launch architecture should make it cheap to change:
- headline;
- supporting message;
- proof order;
- CTA;
- farmer vs investor paths;
- product visual;
- category language.

A beautiful but rigid website is less valuable at PROFIT's current stage than a premium site that can continuously learn from real users.
