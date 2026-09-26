# PROFIT Website Strategy

## 1. Objective

Build a premium, high-trust public website that helps PROFIT:

- explain the product clearly to farmers;
- present a credible company and economic-value story to investors;
- generate qualified pilot and contact leads;
- validate positioning and messaging quickly;
- support international expansion without premature complexity.

The website is a presentation and conversion surface, not the core farm-management application.

## 2. Primary audience

### Primary: Farmers and farm businesses

The homepage should be farmer/customer-first.

The farmer must quickly understand:

1. What is PROFIT?
2. What problem does it solve?
3. How can it improve an economic decision?
4. What evidence supports the claim?
5. What should I do next?

### Secondary: Investors and advisors

Investors should have a dedicated journey/page.

Investor narrative:

**Problem → wedge → product → farmer value → VEV → retention → data flywheel → business model → defensibility → scalable economics**

Do not turn the homepage into a mixed farmer/investor pitch deck.

## 3. Positioning hypothesis

Internal category hypothesis:

**Agricultural Decision Intelligence**

Primary plain-language value proposition candidate:

**Turn farm data into more profitable decisions.**

Supporting idea:

**PROFIT connects what happens on the farm with what it means economically.**

This wording is a hypothesis and must be validated with real farmers and investors.

Alternative message candidates worth testing:

- **Know what every hectare is really worth.**
- **Know where your farm makes money — and where it loses it.**

Success is comprehension and qualified action, not internal preference.

## 4. Value narrative

The website should explain this sequence:

**Farm reality → Data → Intelligence → Decision → Action → Economic effect**

Where appropriate, extend to:

**Baseline → Counterfactual → PROFIT intervention → Actual outcome → Incremental economic effect → Attribution → Confidence**

The canonical value term is:

**Verified Economic Value (VEV)**

Do not use “Verified Profit” as a loose synonym.

## 5. Evidence standard

Never present hypothetical or modelled value as verified realized value.

Use the following states explicitly where useful:

- Hypothetical
- Modelled
- Observed
- Attributed
- Verified

Examples and ROI calculators must clearly label estimates as illustrative/modelled unless real attribution evidence exists.

Do not imply partnerships or endorsements merely because a data source, API or integration is used.

## 6. Information architecture

Recommended v1:

- /
- /product
- /farmers
- /results
- /company
- /security
- /investors
- /contact

A smaller launch is acceptable if content is weak. Do not create empty pages for perceived completeness.

## 7. Homepage hierarchy

1. **Hero** — what PROFIT is and the economic outcome
2. **Product visual** — show, do not merely describe
3. **Farmer problem** — where economic visibility breaks
4. **How PROFIT works** — data → intelligence → decision
5. **Economic value** — what gets measured
6. **Product wedge** — Field Profitability / first concrete use case
7. **Evidence** — real pilot/results when available
8. **Trust** — data ownership, transparency, control
9. **Company** — who is building it and why
10. **CTA** — pilot / conversation

## 8. CTA strategy

Until onboarding is truly self-service, avoid “Start for free”.

Preferred current primary CTA:

**Join the pilot**

Preferred secondary CTA:

**See how PROFIT works**

Forms should be short and low-friction.

Suggested initial fields:

- Name
- Farm/company
- Country
- Email
- Farm type

## 9. Visual direction

Working design doctrine:

**Real agriculture. Financial precision. Editorial clarity. Quiet technology.**

Internal design concept:

**Editorial Agricultural Intelligence**

Desired characteristics:

- structured editorial layouts;
- disciplined grid;
- strong typography;
- real agricultural imagery;
- economic/data overlays;
- restrained color;
- high trust;
- distinctive but familiar interaction.

Avoid generic “AI startup” aesthetics:

- glowing orbs;
- random gradients;
- excessive glassmorphism;
- decorative 3D globes;
- stock “farmer with tablet at sunset” imagery;
- unnecessary bento-card overload;
- effects that obscure meaning.

## 10. Visual system principles

### Typography

Typography should carry brand identity.

Create distinct roles for:

- editorial/display headlines;
- readable body copy;
- economic/data numerals.

Economic metrics may become a signature brand device:

- €/ha
- margin
- yield
- variance
- confidence
- season
- observed/verified state

Use tabular numerals where appropriate.

### Grid

Use a strong editorial grid, but do not force every section into identical cards.

Desktop/tablet/mobile grids should support hierarchy and rhythm rather than template uniformity.

### Color

Color should have semantic meaning.

Examples:

- positive economic result;
- caution/uncertainty;
- economic risk;
- neutral information.

Do not reduce the brand to “agriculture = green”.

### Photography

Prefer:

- real fields;
- real machinery;
- real livestock;
- real operators;
- real farm processes;
- aerial field geometry;
- product/data overlays.

The site should visually connect physical agriculture with economics and intelligence.

## 11. Motion

Motion must explain something.

Good motion:

**Data sources → PROFIT → decision → economic effect**

Bad motion:

- decoration with no explanatory value;
- scroll hijacking;
- unnecessary 3D;
- effects that increase load or reduce clarity.

Respect reduced-motion preferences.

## 12. UX principles

- Clarity before originality.
- Familiar navigation and controls.
- Distinctive brand expression.
- One section, one primary idea.
- Design for scanning, not linear reading.
- Keep cognitive load low.
- Mobile is a first-class experience.
- Never hide core meaning behind animation or video.
- The site should remain useful on weaker connectivity.

## 13. Validation plan

Before heavy engineering, validate:

### Farmer comprehension

After 5–10 seconds, can a farmer answer:

- What is PROFIT?
- What does it do for a farm?
- Why could it have economic value?
- What would I do next?

### Investor comprehension

Can an investor explain:

- the farmer problem;
- the initial product wedge;
- how value is measured;
- what might become defensible;
- why the model could scale?

### Metrics

Track:

- message comprehension;
- qualified pilot interest;
- CTA conversion;
- form completion;
- farmer vs investor conversion;
- user interview recall;
- bounce/engagement by audience and device.

Do not optimize vanity metrics alone.

## 14. Implementation decision

Do not choose technology merely because it is modern.

Two strong paths:

### Framer

Best when the current priority is rapid message/design iteration, built-in experimentation, localization, forms and marketer/designer autonomy.

Trade-off: platform lock-in and limited source ownership/self-hosting.

### Astro

Best when long-term code ownership, self-hosting, maximum performance control, custom storytelling and engineering flexibility matter.

Architecture principle if coded:

**HTML/CSS/native browser capability first → JavaScript only where needed → framework islands only when justified.**

React should only be introduced for genuinely interactive experiences such as:

- product demo;
- ROI calculator;
- scenario simulator;
- complex visualization.

## 15. Quality gates

### Performance

Target Core Web Vitals:

- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1

Evaluate real-user performance where possible, not Lighthouse score alone.

### Accessibility

Target:

**WCAG 2.2 AA**

Accessibility is part of product quality, not a later add-on.

## 16. Reconsider if

Revisit the strategy if:

- farmers consistently misunderstand “Agricultural Decision Intelligence”;
- the homepage attracts investor interest but weak farmer interest;
- the first product wedge changes materially;
- VEV evidence changes the strongest value proposition;
- the chosen platform materially slows iteration or limits required storytelling;
- website maintenance starts competing with customer learning.
