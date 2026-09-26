# PROFIT Website Blueprint v1

Status: Working baseline
Date: 2026-09-26

This document converts the research in this repository into one implementation-ready blueprint.

## 1. Core objective

Build a premium public website that helps a farmer quickly understand:
- what PROFIT is;
- why it matters economically;
- how it works;
- what evidence supports the claims;
- what PROFIT needs from the farmer;
- what happens next.

Secondary objective:
give investors a credible, evidence-led view of the problem, wedge, value creation logic and scalability.

## 2. Core principles

1. **Farmer value first.**
2. **Farmer is the hero; PROFIT is the guide.**
3. **Evidence before hype.**
4. **Simple surface, inspectable depth.**
5. **Make confidence visible.**
6. **Make uncertainty understandable.**
7. **Make farmer control explicit.**
8. **Real agriculture. Financial precision. Editorial clarity. Quiet technology.**
9. **No section exists because “modern startup sites usually have it.”**
10. **Every visual and technical choice must improve clarity, trust, differentiation or qualified conversion.**

## 2.1 Product/company boundary for implementation

These are implementation guardrails, not homepage copy.

- PROFIT is the master brand; Field Profitability is the current wedge/proof hypothesis.
- Do not let the website architecture, naming or visual system imply that PROFIT is permanently crop-only.
- Keep the master brand, naming, information architecture, category language and visual system extensible to crop production, pig production and dairy without rebranding.
  - Field/crop-specific language, imagery and metrics belong at module or wedge level (e.g. Field Profitability).
  - Before any field/crop-specific element (e.g. field geometry, crop imagery) is promoted to a master-brand code, check that it transfers to pig production and dairy.
- Wedge tests such as WWW-000 may be Field Profitability-specific. Their results must not redefine PROFIT as a field-crop-only company, and a surviving wedge message is not a master-brand positioning (§3).
- Do not depict livestock/other future production domains (including pig production and dairy) as shipped capabilities unless current canonical documentation explicitly supports them.
- The public site is a learning/trust/conversion surface, not the core application.
- Customer-level evidence outranks global ambition or investor narrative.
- Never convert internal ambition (leadership, scale, moat, company valuation) into a factual public claim without evidence.

### Quantitative/economic guardrail

AI-generated prose or reasoning is not a source of truth for critical economic numbers.

When real economic outputs are shown, derive them from validated data/rules/models and expose material assumptions, period, provenance and uncertainty.

When that standard cannot be met, label the result as illustrative/modelled rather than real/verified.

## 2.2 Field Profitability product-truth boundary (internal)

Use this boundary to check that website copy and proof objects never promise more than has been designed or implemented. It is **internal**, not a public claim: nothing here may be presented as shipped or available until it is shipped and verified.

Scope: this boundary covers the Field Profitability module only. It does not define the scope of the PROFIT master brand (§2.1).

- **Status:** implemented vertical slice. Source: `MykolaDotsenko/PROFIT`, branch `feat/field-profitability` @ `7d07345`. PR #1 was closed without merge. **Unshipped; not production-verified.**
- **Reference inputs:** field; crop; season; currency; area; yield; price; variable costs; allocated fixed costs.
- **Reference calculations:** revenue; variable costs; allocated fixed costs; operating costs; gross margin; operating profit; revenue / ha; cost / ha; operating profit / ha; operating margin %; ROI on allocated costs; break-even price; break-even yield.
- **Definition:** **Operating profit = revenue − variable costs − allocated fixed costs.** It is not statutory net profit, and not gross margin (revenue − variable costs).
- **Reference exclusions:** whole-farm P&L; financing; tax; depreciation policy; inventory accounting; GIS; scenario optimisation; external telemetry; ERP integrations.
- **AI explanation:** may explain stored deterministic metrics; does not calculate financial truth.
- **Established by the 2026-09-26 product-truth review:**
  - several field records can be listed side by side in a saved-snapshots table. This is a list/presentation pattern, not a separate analytics feature;
  - there is no assumptions model or UI and no assessed confidence attached to calculations. Website evidence/confidence labels (e.g. `Confidence: Not assessed` on illustrative material) are website semantics, not a product capability.

## 3. Primary positioning hypothesis

Category:
**Agricultural Decision Intelligence**

Primary headline candidate:
**Turn farm data into more profitable decisions.**

Supporting line:
**PROFIT connects what happens on the farm with what it means economically.**

Important:
These are hypotheses. Validate with real farmers before treating them as fixed brand language.

Master-brand gate: before the master-brand homepage positioning is permanently locked, or before pig production or dairy become public product domains, validate the master-brand proposition with relevant target users beyond the crop cohort. The WWW-000 result cannot close this gate. It does not block current learning on the Field Profitability wedge.

## 4. Core narrative

The website should explain:

**Farm reality → Data → Economic interpretation → Decision → Action → Measured outcome**

When evidence permits:

**Baseline → Counterfactual → PROFIT intervention → Actual outcome → Incremental economic effect → Attribution → Confidence**

Canonical value term:
**Verified Economic Value (VEV)**

Do not use “verified” unless the evidence standard is actually met.

### VEV measurement dimensions

Primary internal value metric:
**VEV per Customer**

Where relevant and evidence permits, supporting views may include:
- VEV per hectare or relevant production unit;
- VEV per € paid to PROFIT;
- share of eligible customers with positive VEV;
- attribution confidence;
- explicit period and cohort.

Do not invent missing VEV formulas, thresholds or verification criteria.

## 5. Homepage architecture

### 01 — Hero

Goal:
Immediate farmer orientation, economic relevance and a credible next action.

The hero is a product/positioning hypothesis, not a decoration layer.

#### Durable hero rules

After a 5–10 second first exposure, a target farmer should be able to paraphrase:
- this is for a farm/farmer;
- PROFIT connects farm reality/data to economic meaning;
- the product can help inspect a concrete economic decision or field-level profitability problem;
- what the next action is.

The hero must not depend on:
- the category label being understood;
- animation;
- generic claims about AI/intelligence;
- fabricated social proof;
- unverified savings or profit uplift.

The category eyebrow is secondary. If `Agricultural Decision Intelligence` is used, the rest of the hero must remain understandable when that phrase is removed.

The hero visual must be a **proof object**, not decorative farm imagery:
- one real or realistic agricultural artifact/context;
- one concrete economic result or question;
- enough causal context to show how farm information connects to economics;
- correct evidence/confidence labeling when values are illustrative.

A static first frame must communicate the core meaning. Motion may strengthen the farm → data → economics transformation, but may not carry essential information.

Current CTA control:
- Primary: **Join the pilot**
- Secondary: **See how PROFIT works**

The current hero copy is a test control, not a locked production winner.

#### Product-truth gate — v1 superseded before farmer testing (2026-09-26)

The H1/H2/H3 **v1** copy below was written before the Field Profitability product-truth boundary (§2.2) existed. On 2026-09-26, **before any farmer session**, a product-truth review superseded all three v1 candidates. **No farmer evidence exists for v1.** They are not farmer-test losers, and the rewrite is not a test result.

Reason: the §2.2 reference exposed scope/semantic conflicts.
- **H1 v1:** whole-farm framing; "field operations" ingestion and a "what to investigate next" capability that the reference does not have.
- **H2 v1:** an implied guarantee in "more profitable decisions"; generic "farm data" beyond the inputs the reference accepts.
- **H3 v1:** "with assumptions and confidence visible when they are assessed" is a known unsupported capability claim. Generic "margin" and causal "what drives it" conflict with the reference semantics.

The **v2** candidates in each direction below are the WWW-000 test candidates. The v1 assumptions and risks are kept as history; several no longer apply to v2.

The v2 field-level scope, including H2 v2's narrowing from "farm data" to field data, is module/wedge-level product truth for this test. It does not narrow the PROFIT master brand or category (§2.1).

The v1 H2 headline and support are the same text as the §3 primary positioning hypothesis, AGENTS.md §6 and `docs/ai/context.yaml` `positioning`. Those entries are unchanged, pending a human decision on whether the positioning hypothesis itself should be restated. Any restatement must keep the master-brand positioning extensible to crop production, pig production and dairy (§2.1). Do not replace it with the wedge-scoped v2 wording.

#### H1 — Economic visibility / farmer job first

Eyebrow (v1 and v2):
**FIELD ECONOMICS**

v1 headline (superseded before farmer testing):
**Know where your farm makes money — and where it doesn't.**

v1 support (superseded):
**PROFIT connects field operations, costs and outcomes so you can see where margin is being created or lost and what to investigate next.**

**v2 — WWW-000 test candidate:**

Headline:
**See which fields make money — and which don't.**

Support:
**PROFIT compares each field's revenue with the costs allocated to it, so you can see operating profitability field by field.**

Why v2:
- keeps the economic-visibility job;
- removes the whole-farm P&L implication;
- removes unsupported "field operations" ingestion and the unsupported "what to investigate next" capability;
- multi-field visibility is supported by the §2.2 saved-snapshots presentation.

Proof object:
a field/farm view showing a small number of contrasting field economics with clear provenance/illustrative labeling.

Primary assumptions:
- economic visibility is a stronger first job than “intelligence”;
- farmers naturally understand “where money is made/lost”;
- the wording is interpreted as decision support, not bookkeeping/accounting;
- the scope does not overstate what Field Profitability can currently support.

Main risks:
- too broad for the first production wedge;
- sounds like accounting software;
- “makes money” may be read as a guaranteed outcome rather than visibility.

#### H2 — Decision intelligence (v1: current control · v2: decision-context first)

Eyebrow (v1 and v2):
**AGRICULTURAL DECISION INTELLIGENCE**

v1 headline (superseded before farmer testing):
**Turn farm data into more profitable decisions.**

v1 support (superseded):
**PROFIT connects what happens on the farm with what it means economically.**

**v2 — WWW-000 test candidate:**

Headline:
**Connect field data to the economics behind your decisions.**

Support:
**PROFIT turns yield, price and allocated-cost data into operating-profit and break-even metrics you can inspect before deciding what to do next.**

Why v2:
- keeps the Decision Intelligence hypothesis;
- removes the implied guarantee in "more profitable decisions";
- narrows generic "farm data" to data the §2.2 reference actually accepts;
- claims no optimisation or recommendations.

Proof object:
a real-farm artifact moving conceptually from farm data → economic interpretation → decision, with one concrete metric/question.

Primary assumptions:
- farmers understand or tolerate the category language;
- “more profitable decisions” is motivating and not interpreted as a guaranteed profit claim;
- a broad platform promise creates more qualified interest than a narrow field-profitability wedge.

Main risks:
- generic “data → better decisions” SaaS language;
- category jargon consumes first-screen attention without adding comprehension;
- the visitor understands the aspiration but still cannot explain what the product actually does.

#### H3 — Field Profitability / product proof first

Eyebrow (v1 and v2):
**FIELD PROFITABILITY**

v1 headline (superseded before farmer testing):
**See margin by field — and what drives it.**

v1 support (superseded; contains a known unsupported capability claim):
**PROFIT brings operations, costs and outcomes together into field-level economics, with assumptions and confidence visible when they are assessed.**

**v2 — WWW-000 test candidate:**

Headline:
**See operating profit by field — and what goes into it.**

Support:
**PROFIT brings yield, price, variable costs and allocated fixed costs together into field-level operating economics, including break-even price and yield.**

Why v2:
- matches the §2.2 metric semantics;
- removes the unsupported assumptions/confidence capability;
- replaces causal "what drives it" with compositional "what goes into it";
- does not confuse operating profit with gross margin or statutory net profit.

Proof object:
real Field Profitability UI when available; otherwise an explicitly **HYPOTHETICAL EXAMPLE** showing field-level economics, source context and `Confidence: Not assessed`.

Primary assumptions:
- the first target cohort has a strong field-margin visibility problem;
- a narrow, concrete wedge creates more trust than a broad platform promise;
- farmers understand “margin by field” as decision support;
- the product/data model can support the precision implied by the wording.

Main risks:
- narrows perceived company scope too early;
- “margin by field” may imply unsupported precision;
- the hero fails if Field Profitability is not yet credible enough to show as product truth;
- “margin” may be read differently from the Field Profitability reference's defined economics (e.g. operating profit, which is not gross margin or net profit), and “what drives it” may imply driver/causal analysis the current reference does not provide (reference status and details: `docs/experiments/hero-message-test-v1.md` §4.4).

#### Hero decision rule

Do not choose H1/H2/H3 by team preference or aesthetics.

Advance a direction only when target-farmer evidence shows that it improves:
- comprehension;
- economic relevance;
- credibility;
- correct product expectation;
- qualified next-step intent.

A direction with stronger visual appeal but weaker product understanding must not win.

### 02 — Farmer economic questions

Goal:
Make the problem concrete.

Examples:
- Which field is actually profitable?
- Where are costs increasing?
- What is causing margin loss?
- What should change next?

Visual:
large editorial typography, not four identical cards.

### 03 — Why this is hard today

Goal:
Show the current fragmented state without attacking competitors.

Explain the split between:
- production data;
- operations;
- costs;
- weather/external factors;
- economic interpretation.

### 04 — PROFIT point of view

Candidate statement:

**Farm data becomes valuable when it improves a decision and the economic effect can be measured.**

This should be tested.

### 05 — How PROFIT works

Show:
**Data → Economics → Decision → Action → Measurement**

Prefer one strong visual system rather than a long feature list.

### 06 — Product proof

Lead with the first concrete wedge:
**Field Profitability**

Show real or realistic product UI.

Do not present future modules as if already production-ready.

### 07 — Hard questions / objection handling

Answer real buyer questions:
- What data do you need?
- Can this work with old machinery?
- What if data is incomplete?
- How accurate are the calculations?
- Who owns the data?
- What does “verified” mean?
- What happens when confidence is low?
- What does PROFIT not do?

### 08 — Evidence

Use explicit states:
- Hypothetical
- Modelled
- Observed
- Attributed
- Verified

Also show:
- confidence;
- time period;
- data source;
- assumptions;
- limitations.

### 09 — Trust

Show:
- methodology;
- data ownership/control;
- security/privacy principles;
- team;
- real product;
- transparent limitations.

Trust is part of the sales argument.

### 10 — Company

Human, specific and factual:
- what we are building;
- why;
- who is building it;
- what expertise exists;
- what is still being proven.

Avoid generic founder language.

### 11 — CTA

Primary:
**Join the pilot**

Explain exactly what happens after clicking.

Keep form short.

## 6. Information architecture

Recommended core launch:

- /
- /farmers
- /product
- /trust
- /company
- /investors
- /contact

Add **/results** only when real pilot/case-study evidence is strong enough to support a dedicated page.

Keep security/privacy/methodology under **/trust** initially. Create a separate **/security** page only when content depth or customer requirements justify it.

Do not create empty “SaaS completeness” pages.

## 7. Visual system

### Core motif

**Real farm artifact → precise data layer → economic meaning**

Examples:
- aerial field → boundary/data → margin;
- tractor operation → activity/cost → €/ha;
- farm image → production metrics → economic outcome.

### Typography

Roles:
- display;
- section heading;
- body;
- caption;
- metric-large;
- metric-small;
- evidence label.

Use tabular numerals where appropriate.

Economic metrics should become a recognizable brand asset.

### Color

Use semantic roles:
- canvas;
- primary text;
- secondary text;
- brand;
- positive value;
- attention;
- risk;
- evidence/confidence neutrals.

Do not reduce brand identity to “green = agriculture”.

### Photography

Prefer:
- real operators;
- actual fields;
- machinery;
- livestock;
- crop/soil details;
- aerial geometry;
- operational moments.

Every image should prove something real about farming.

### Layout

Use editorial rhythm:
- spacious vs dense;
- text-first vs image-first;
- full-bleed vs contained;
- single metric vs metric cluster;
- photography vs product visualization.

Avoid repeating “headline + 3 cards” in every section.

## 8. Trust and evidence design

Standardize these states across the site:

### Evidence
- Hypothetical
- Modelled
- Observed
- Attributed
- Verified

### Confidence
Assessed confidence:
- High
- Medium
- Low
- Insufficient evidence

Meta-state:
- Not assessed — use only when confidence has not been evaluated; it is not a confidence level

### Data provenance
- Farmer-provided
- Machinery
- Satellite
- Weather
- Market
- Derived/modelled

These should use consistent:
- typography;
- color;
- icons;
- wording;
- placement.

## 9. Psychology and UX rules

### Fast layer
The user should understand:
- what PROFIT is;
- why it matters;
- what to do next.

### Slow layer
The user can inspect:
- methodology;
- assumptions;
- data sources;
- evidence quality;
- uncertainty;
- limitations.

### Choice architecture
Use:
- one clear primary CTA;
- one meaningful secondary CTA;
- progressive disclosure.

Avoid:
- fake scarcity;
- countdown timers;
- confirmshaming;
- hidden assumptions;
- misleading graph scales;
- fabricated proof.

### Farmer control
Make explicit:
- data ownership;
- permissions;
- explainable assumptions;
- farmer decision authority.

## 10. Motion system

Allowed categories:

1. **Hierarchy** — subtle entrance/reveal.
2. **Feedback** — hover/focus/press.
3. **Transformation** — data → economics → decision.
4. **Continuity** — page/component transitions.

Rules:
- one primary motion idea per section;
- motion must not delay comprehension;
- reduced motion must be supported;
- numbers should feel stable, not theatrical.

## 11. Responsive design

Treat responsive design as one continuous system.

Test:
- narrow phone;
- large phone;
- tablet portrait;
- tablet landscape;
- small laptop;
- large desktop;
- intermediate widths;
- 200% zoom;
- long localized content;
- missing media;
- reduced motion.

Mobile is not a compressed desktop.

Priority on mobile:
1. value;
2. economic metric;
3. product proof;
4. trust;
5. CTA.

## 12. Content stress testing

Design with realistic content.

Stress-test:
- long localized copy;
- “Verified Economic Value”;
- negative values;
- large € amounts;
- low-confidence states;
- long field names;
- missing imagery;
- multi-line labels.

Do not approve components with placeholder-only content.

## 13. Frontend implementation direction

### Platform status

The production platform is **not yet irrevocably locked**.

- Use Framer when it materially accelerates positioning/design validation and farmer learning.
- If/when PROFIT chooses a fully owned coded production site, the current preferred shell is Astro.
- Do not add engineering complexity before the platform decision creates real value.

### Coded baseline, if selected

- Astro 7.3.x
- TypeScript 6.x for the Astro toolchain today
- semantic HTML
- modern native CSS

TypeScript 7.0 is stable in general, but Microsoft currently states that Astro/Vue/Svelte/MDX embedded-language workflows should remain on TypeScript 6.0 until TS7 exposes the required stable programmatic APIs. Re-evaluate this when upstream support changes.

### CSS
- custom properties;
- cascade layers;
- Grid/Flexbox/Subgrid;
- container queries;
- clamp();
- :has();
- logical properties;
- progressive enhancement.

### Interactivity
Use in this order:
1. HTML
2. CSS
3. native browser API
4. small vanilla JS
5. framework island
6. larger dependency only if clearly justified

### React
Not a default dependency.

Potential use only for:
- economic calculator;
- scenario simulator;
- rich product demo;
- complex interactive chart.

### Motion
CSS/View Transitions first.
GSAP only for genuinely complex storytelling.

## 14. Performance and accessibility

Targets:
- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1
- measured at p75, mobile and desktop separately

Accessibility:
- WCAG 2.2 AA
- keyboard navigation
- visible focus
- meaningful labels
- reduced motion
- screen-reader sanity checks
- zoom/reflow
- accessible form errors

Automation:
- Playwright
- axe-core for automated checks
- manual accessibility testing remains required

## 15. Images and fonts

### Images
- responsive srcset/sizes;
- modern formats where appropriate;
- intentional art direction/crops;
- no lazy-loading hero/LCP image;
- lazy-load below the fold.

### Fonts
- WOFF2;
- minimal required weights/styles;
- preload only critical font;
- use strong fallbacks;
- consider variable fonts when payload/quality justify them.

## 16. CTA and forms

Pilot/contact form should initially ask only for:
- Name
- Farm/company
- Country
- Email
- Farm type

Do not ask for sensitive or detailed farm data before trust is established.

## 17. User validation

### Hero farmer-test protocol

Primary first-round cohort:
farm decision-makers who are relevant to the current field/crop profitability wedge.

Do not mix investors into the farmer-comprehension sample.
If materially different farmer segments are tested, analyse them as separate cohorts rather than averaging them together.

#### Round 1 — isolate the message

Test the H1/H2/H3 **v2** candidates (§5) on the same neutral/static visual scaffold. Round 1 tests the Field Profitability wedge message only. It does not validate the master-brand positioning or category scope (§2.1, §3).

Keep constant:
- typography hierarchy;
- layout;
- CTA wording/placement;
- proof-object complexity and fidelity (never a real or higher-fidelity product UI for one direction only);
- image quality;
- motion: off.

Do not pair each message direction with a different art direction in this round. That would confound message and visual effects.

Procedure — every participant evaluates all three directions, in three phases:
1. assign each participant a counterbalanced H1/H2/H3 order, so each direction is seen first, second and third equally often;
2. **Phase A — independent exposure + recall:** for each direction in that order, expose it for the same fixed duration (**10 seconds** throughout the first round), hide it and ask the open recall questions only. No credibility, data or guaranteed-profit probes, no explanation and no comparison until Phase A is complete for all three;
3. **Phase B — second viewing + probes:** show each direction again, in the same assigned order, and run the credibility probe;
4. **Phase C — comparison:** only after Phases A and B, allow overall comparison between directions.

First-round sample:
- **9–12 target farmers** is sufficient for qualitative elimination signals;
- do not claim a statistical winner from this sample;
- use a larger follow-up if differences are subtle or the decision becomes costly to reverse.

Open recall:
1. What do you think PROFIT does?
2. Who do you think it is for?
3. What farm problem do you think it helps with?
4. What economic result/question do you think you would see?
5. What would you expect to click or do next?

Credibility probe:
- What part is unclear?
- What sounds least credible?
- What data would you expect PROFIT to need?
- Does anything sound like a promise of guaranteed profit?
- What would stop you from joining a pilot?

Record:
- verbatim paraphrases;
- material misclassification;
- repeated unclear words;
- unintended promise/precision interpretations;
- CTA comprehension;
- recall of the farmer job versus recall of category/AI language.

Do not use “Which one do you like?” as the primary decision question.

#### Round 2 — isolate art direction

Only after one or more hero message directions survive Round 1:
- use the same surviving message/proof content across the three visual directions;
- test A — Evidence-Led Editorial vs B — Farm Operations Layer vs C — Economic Control Room (§19);
- then run logo-off/category-confusion diagnostics.

This preserves:
**message learning first → visual learning second → combined validation third.**

### Hero kill criteria

These are directional qualitative gates, not statistical proof.

Counting rules:
- count each criterion across all participants who evaluated that direction; keep and report first-position recall results separately as the least-contaminated signal;
- a **repeated pattern** means 3 or more independent participants; 2 independent participants is a **CONCERN**, not an automatic kill;
- the count does not apply to critical evidence-integrity failures: a single case that shows a false or unsupported claim must be corrected regardless of count.

Kill or materially rewrite a hero direction when any of the following appears as a repeated pattern:

- roughly one-third or more of the first-round cohort cannot state a concrete farmer-economic job after the short exposure;
- three or more participants independently make the same material misclassification (for example bookkeeping, land valuation, generic AI consultancy, marketplace);
- participants repeatedly interpret the copy as a guarantee of higher profit or verified savings;
- the category/technology wording is remembered, but the product job is not;
- the proof object needs verbal explanation to connect farm reality with economic meaning;
- the direction implies precision/data coverage that the current product cannot support;
- the CTA or next step is materially unclear;
- the hero only works when animation is enabled;
- mobile requires removing the product/economic proof to fit the composition.

Variant-specific kill signals:

These were written for the v1 wording. For the v2 candidates, apply them by meaning: H2's promised-outcome signal applies to any promised financial outcome, and H3's “margin” signals apply to “operating profit by field”.

**H1 — Economic visibility**
- repeated classification as accounting/bookkeeping;
- wording implies whole-farm coverage beyond the actual wedge;
- negative “made/lost” framing reduces trust or willingness to continue.

**H2 — Decision intelligence**
- farmers paraphrase it only as generic “AI/data for better decisions”;
- `Agricultural Decision Intelligence` creates confusion or adds no useful meaning;
- “more profitable decisions” is interpreted as a promised financial outcome.

**H3 — Field Profitability**
- target farmers do not care enough about field-level margin to make it a first-screen job;
- “margin by field” implies unsupported precision or unavailable data;
- the product proof is not mature/credible enough to substantiate the headline.

Advance a direction when most participants can independently paraphrase the intended farmer-economic job, no recurring trust failure appears, and the next action is understood.

### Deeper farmer test
Ask:
- What concerns would stop you from trying it?
- What data would you expect to provide?
- Which claim feels least credible?
- What information is missing?

### Investor test
Ask:
- What is the initial wedge?
- Where does farmer value come from?
- What evidence exists?
- What is still hypothetical?
- What could become defensible?

## 18. Experiment order

At current stage:

1. controlled H1/H2/H3 hero-message testing on one neutral/static scaffold;
2. kill/rewrite weak message directions and revise positioning;
3. prototype the three independent visual art directions using the same surviving/controlled message;
4. test visual comprehension/distinctiveness and then validate the combined hero;
5. validate/reject the candidate Field → Economics motion only after static meaning works;
6. launch the smallest credible production surface;
7. measure real behavior;
8. A/B test only when traffic is sufficient.

Do not run statistically weak experiments for appearance of rigor.

Do not use different copy + different art direction + different motion in one early experiment. That produces a polished concept but weak causal learning.

## 19. Art-direction decision: farmer comprehension, calibrated trust + long-term distinctiveness

### Decision status

No production winner is selected.

Current research prior:

- **A — Evidence-Led Editorial** currently has the strongest theoretical fit with farmer comprehension + calibrated trust.
- **B — Farm Operations Layer** is the strongest challenger because it may explain the farm → data mechanism more immediately.
- **C — Economic Control Room** remains a useful counterfactual because it may communicate product seriousness, but carries the highest accounting/ERP confusion risk.

This ordering is **not farmer evidence** and must not affect prototype fidelity, participant framing or test effort.

### What current external research materially changes

Relevant current material converges on five durable implications:

1. **Identity is a system, not one hero composition.**  
   D&AD's brand-identity material emphasises breaking identity into core components and making strategy real through an identity system.

2. **Art direction is judged through balance, composition, tone and appropriate execution.**  
   This means A/B/C must be compared as coherent visual grammars, not moodboards.

3. **Human irregularity can coexist with programmatic structure.**  
   Figma Config 2026 is a useful example of a finite, structured system producing varied, recognisable outputs while deliberately retaining imperfect/idiosyncratic expression.

4. **Flexible identity requires constants + variables, not one repeated template.**  
   Current flexible-visual-system material reinforces parameters, rules and ranges: outputs may differ substantially while staying recognisable.

5. **Category membership and distinctiveness are separate jobs.**  
   Brand-semiotics practice treats brands as bundles of signs/codes. PROFIT must show enough agriculture to be understood while building difference through the relationship between agriculture, economics, evidence and decision support.

Future London Academy's documented Branding Now rebrand adds one process safeguard that is directly relevant:
- create genuinely different concepts first;
- temporarily reduce outside-reference influence during exploration;
- deconstruct each surviving direction into typography, colour, graphics and other components;
- then test the system across assets/media.

These sources refine the experiments below. They do not select the winner.

**Research stop — 2026-09-26:** broad art-direction research is closed for this decision cycle. Re-open only if controlled farmer testing exposes a failure not explained by the current model.

---

### Controlled comparison requirements

A/B/C must receive:

- the same surviving hero message from WWW-000;
- the same underlying economic scenario;
- the same economic values;
- identical evidence/confidence semantics;
- identical provenance/assumption information;
- equivalent CTA hierarchy;
- equivalent content completeness;
- equivalent design/prototyping effort;
- static-first implementation;
- equivalent mobile fidelity.

Do not let:
- A receive better photography;
- B receive stronger motion;
- C receive more complete product UI;
- one direction receive more time/polish.

The test is invalid if execution quality becomes the main difference.

---

### A — Evidence-Led Editorial

#### Core visual idea

**A farmer-facing economic evidence system with editorial clarity.**

Not:
"a magazine that happens to mention software."

The editorial grammar exists to make:
- farmer problem;
- economic meaning;
- evidence;
- uncertainty;
- product action;

easy to scan and inspect.

#### Visual grammar

- light/warm neutral canvas;
- strong typographic hierarchy;
- economic numerals used as anchors, not decoration;
- real/documentary agricultural photography;
- one clear product/economic proof object at a time;
- restrained field geometry linking physical context to data;
- evidence/confidence/provenance labels integrated into the information hierarchy;
- asymmetry and whitespace used to direct attention;
- controlled human texture/imperfection where it comes from real photography/materials, not fake "handmade" decoration;
- minimal decorative motion.

#### Farmer comprehension mechanism

**Editorial hierarchy reduces decoding cost.**

Desired scan path:

**farm context → economic question/result → evidence/confidence → next action**

The farmer should not need to parse a dashboard before understanding the point.

#### Trust mechanism

- documentary agricultural truth;
- calm typography;
- visible assumptions;
- inspectable evidence/confidence;
- negative/uncertain values receive the same visual dignity as positive ones;
- product proof is shown without overclaiming maturity.

#### Distinctive potential

Potentially strong because the combination of:
- agriculture;
- economic typography;
- evidence semantics;
- calm editorial composition;

is more ownable than any one cue alone.

Risk:
editorial layouts themselves are common and therefore not distinctive.

A only builds long-term distinctiveness if the **same underlying grammar** appears in product UI, reports, trust surfaces and future modules.

#### Category-confusion risk

- consulting;
- research/reporting;
- agricultural publication;
- premium corporate storytelling with insufficient product substance.

#### AI-sameness risk

Medium.

AI can easily generate:
- generic "premium editorial SaaS";
- oversized serif/sans headlines;
- lots of whitespace;
- polished stock agriculture.

Anti-sameness safeguard:
real farm material + real product proof + evidence grammar must determine the composition.

#### Mobile behavior

Potentially strongest of the three if hierarchy is genuine.

At ~390 px, preserve:
1. economic job;
2. one metric/result;
3. evidence/confidence;
4. product proof;
5. CTA.

Do not preserve desktop whitespace ratios mechanically.

#### Evidence-display quality

Research prior:
**high potential**.

A gives evidence, confidence, assumptions and provenance explicit visual space without requiring dense UI.

Risk:
labels may become elegant but visually subordinate enough to be missed.

#### Failure mode

**Beautiful but abstract.**

The site feels intelligent/credible, but the farmer cannot explain:
- what the software actually does;
- what input/output relationship exists;
- what happens after clicking.

#### Farmer-test focus

Ask specifically:
- Is this software, consulting or reporting?
- What exact economic decision could you make?
- What product evidence did you notice?
- Which evidence/confidence cue changed your trust?
- What data do you think PROFIT used?

#### Kill criteria

Kill or materially redesign A if:
- consulting/report/publication classification repeats;
- product proof is not noticed;
- farmers understand the business idea but not the product mechanism;
- evidence labels are aesthetically present but functionally missed;
- B materially improves correct product comprehension without a calibrated-trust penalty.

---

### B — Farm Operations Layer

#### Core visual idea

**Start from physical farm reality, reveal the operational/data layer, then resolve into economics.**

The farm is not a background.
It is the source context for the economic interpretation.

#### Visual grammar

- immersive but truthful agricultural photography;
- real field/parcel geometry;
- boundaries, routes or zones only when meaningful;
- data overlays linked to provenance;
- economic result visually resolves the composition;
- spatial relationships carry more meaning than editorial text blocks;
- minimal generic maps/heatmaps;
- motion optional and secondary to static comprehension.

#### Farmer comprehension mechanism

**Concrete physical context reduces abstraction.**

Desired scan path:

**this field/operation → this data/source → this economic meaning → this decision**

This may outperform A when the farmer needs to understand *where the number came from*.

#### Trust mechanism

- visible connection between real field and source data;
- provenance embedded spatially;
- fewer unexplained "AI magic" transitions;
- farm detail acts as reality anchor.

#### Distinctive potential

Mixed.

Field geometry can support a recognisable PROFIT expression in the crop/Field Profitability domain. It is a domain code, not a master-brand invariant (§2.1, §25). Even there:
- aerial imagery;
- parcel outlines;
- satellite overlays;
- maps;

are strong **category-membership codes**, not automatically distinctive assets.

Distinctiveness must come from what the geometry *does*:
**connecting farm operation to economic interpretation/evidence**.

#### Category-confusion risk

Highest risk:
- satellite platform;
- mapping;
- agronomy;
- crop-monitoring;
- precision-ag tool.

#### AI-sameness risk

High.

Generic agritech models naturally converge on:
- drone/aerial field;
- green overlays;
- heatmaps;
- glowing boundaries.

B therefore requires the strictest category-collision test.

#### Mobile behavior

Riskier than A.

Spatial relationships may collapse at narrow widths.

Mobile must simplify:
- one field/operation;
- one data/provenance layer;
- one economic result;
- one action.

Do not miniaturise a desktop map.

#### Evidence-display quality

Potentially strong for provenance:
**where did this number come from?**

Potentially weaker for:
- uncertainty;
- assumptions;
- evidence-state semantics;

if overlays dominate attention.

#### Failure mode

**Mechanism understood, category misunderstood.**

Farmer sees:
"this is about fields/data/maps"
but does not understand that PROFIT's core job is economic decision support.

#### Farmer-test focus

Ask:
- What kind of product is this?
- What do the overlays mean?
- Where did the economic number come from?
- What decision would you make?
- Is this mainly agronomy/mapping or economics? Why?

#### Kill criteria

Kill or materially redesign B if:
- satellite/agronomy/mapping classification repeats;
- overlays are recalled more strongly than economic meaning;
- participants cannot explain provenance correctly;
- static version fails without animation;
- mobile loses the causal sequence;
- A achieves similar mechanism comprehension with materially less category confusion.

---

### C — Economic Control Room

#### Core visual idea

**The farm as an economic operating system.**

The visual language prioritises:
- current state;
- variance;
- economics;
- evidence;
- action.

#### Visual grammar

- graphite/dark or highly neutral product-like surfaces;
- strong tabular numeric hierarchy;
- compact metric clusters;
- economic states and comparisons;
- explicit evidence/confidence;
- real farm photography as grounding context rather than hero material;
- product UI and marketing visual language closely aligned.

#### Farmer comprehension mechanism

**Precision and product concreteness signal operational utility.**

Desired scan path:

**economic state → driver/context → evidence → decision**

This direction assumes the farmer is willing to enter a higher-information-density interface immediately.

#### Trust mechanism

- explicit numbers;
- product-like specificity;
- stable state labels;
- low decorative ambiguity;
- visible evidence and assumptions.

#### Distinctive potential

Potentially strong inside the product if the economic grammar becomes recognisable.

But dark control-room aesthetics are common across:
- fintech;
- analytics;
- logistics;
- enterprise software.

Therefore dark density itself has almost no distinctive value.

#### Category-confusion risk

- farm accounting;
- ERP;
- finance;
- BI dashboard.

#### AI-sameness risk

High.

AI strongly defaults to:
- dark dashboards;
- glowing metrics;
- dense cards;
- "command center" aesthetics.

C must avoid visual shorthand that communicates generic enterprise analytics instead of farm economics.

#### Mobile behavior

Highest risk of the three.

Dense clusters must collapse into:
- one question;
- one dominant economic state;
- one driver;
- one evidence/confidence state;
- one action.

If density is the identity, mobile will expose the weakness quickly.

#### Evidence-display quality

Potentially high when:
- evidence/confidence are treated as first-class product states.

Risk:
precision aesthetics may make uncertain/modelled values feel more certain than they are.

#### Failure mode

**Looks operationally serious but becomes accounting/ERP and overstates certainty.**

#### Farmer-test focus

Ask:
- Is this farm decision support, accounting or ERP?
- Which number matters and why?
- How certain is it?
- What would you do next?
- Did the interface make you trust the number more than the evidence justified?

#### Kill criteria

Kill or materially redesign C if:
- accounting/ERP/finance classification repeats;
- participants need to read dense UI before understanding the farmer job;
- less digitally confident farmers show materially more hesitation;
- uncertain data feels falsely precise;
- mobile task completion is materially worse than A/B;
- product seriousness improves but farmer comprehension/trust does not.

---

### Art-direction experiments that distinguish A/B/C

#### AD-1 — 10-second farmer comprehension

Cohort:
12–18 target farm decision-makers.

Static only.
Randomized/counterbalanced order.

After exposure, ask:
1. What does PROFIT do?
2. What farm/economic problem does it help with?
3. What did you notice first?
4. What would you do next?
5. What kind of software is this?

Primary evidence:
- correct farmer-economic job;
- correct category classification;
- product proof recall;
- CTA comprehension.

#### AD-2 — Evidence interpretation / calibrated trust

Same scenario in A/B/C:
- one economic metric;
- evidence state;
- confidence state;
- source/provenance;
- assumption/limitation.

Ask:
- What exactly does this number mean?
- Where did it come from?
- How certain should you be?
- What would you verify before acting?

Primary evidence:
- interpretation accuracy;
- uncertainty noticed;
- false-precision errors;
- time to answer.

#### AD-3 — Mechanism reconstruction

Without showing the screen again, ask participant to reconstruct:

**farm reality → data/source → economic interpretation → decision**

This is the most direct test of whether the visual grammar explains PROFIT rather than merely looking credible.

Expected strengths:
- A: hierarchy/meaning;
- B: physical-data causality;
- C: economic state/action.

#### AD-4 — Category-confusion diagnostic

Neutral classifications:
- farm decision-support;
- accounting/finance;
- agronomy/satellite/mapping;
- generic analytics/AI;
- consulting/reporting;
- other.

Then ask:
**Which visual cue caused that classification?**

Expected risks:
- A → consulting/reporting;
- B → agronomy/mapping;
- C → accounting/ERP.

#### AD-5 — Mobile task

At ~390 px identify:
- key economic issue;
- source/context;
- evidence/confidence;
- next action.

Reject any grammar that depends on desktop space.

#### AD-6 — Bad-news / uncertainty trust

Use:
- negative margin;
- incomplete data;
- Low / Insufficient evidence;
- explicit assumption.

A trusted visual system must remain credible when the information is inconvenient or uncertain.

#### AD-7 — Brand-system transfer test

Two dimensions.

**Surface transfer.** Apply A/B/C to the same four surfaces:
1. homepage hero;
2. Field Profitability product exhibit;
3. evidence/trust panel;
4. farmer PDF/report or summary card.

Do not redesign each surface from scratch.

**Domain transfer — internal diagnostic.** Express the same A/B/C grammar in three production contexts:
1. crop production;
2. pig production;
3. dairy.

This is an internal design-system diagnostic, not a product or a public page:
- use only documentary/category-level agricultural reality and generic operational/economic context;
- no fake product UI;
- no fabricated pig/dairy metrics or results;
- never show pig/dairy capabilities as shipped.

Evaluate:
- does one grammar remain coherent across all four surfaces?
- which constants survive?
- which variables can change?
- does the system become repetitive?
- does recognition depend only on logo/color?
- is the PROFIT grammar still recognisable without field geometry?
- which elements are truly invariant, and which must be domain variables?
- does the direction fall apart without a field/map/parcel visual?
- does it still look like PROFIT rather than generic livestock software?

If a direction needs field geometry for its identity, that is a **master-brand scalability concern**, even if the direction is strong for Field Profitability. It is not an automatic kill. The direction may remain a crop-module expression, but not the master-brand system.

The farmer-facing WWW-002 test stays with the current crop cohort. Domain transfer at this stage is an internal design-system test, not evidence of farmer comprehension in pig or dairy cohorts.

This tests long-term brand distinctiveness potential better than a single hero comparison.

---

### Candidate brand-code architecture

Do not treat all candidate codes as equivalent "distinctive assets."

Current roles:

#### 1. Real agricultural photography
Role:
**category membership + documentary trust**

Not distinctive by itself.

Requirement:
real, specific, operational agriculture; not stock "farmer with tablet."

#### 2. Field geometry — crop / Field Profitability domain code
Role:
**spatial/context bridge** for the crop / Field Profitability domain. It is a candidate domain code, **not a master-brand invariant**.

It connects:
physical farm → operational/data context.

Not distinctive by itself because field geometry is common in agritech.

Its value increases only when consistently linked to economic interpretation.

Use it actively in Field Profitability, but never require it for pig production or dairy expression.
- Other production domains use domain-specific operational structure/context, which stays OPEN until product/domain evidence exists.
- Do not invent fixed "pig geometry" or "dairy geometry" codes.

#### 3. Economic typography
Role:
**economic salience + candidate memory code**

Examples:
- €/ha;
- margin;
- cost;
- revenue;
- delta.

Potentially more ownable, but still requires recognition evidence.

#### 4. Evidence / confidence language
Role:
**trust semantics**

This is primarily a product/trust system, not decoration.

It becomes a brand code only if repeated consistently and remembered by users.

#### 5. Agriculture/production → data/context → economics composition
Role:
**core compositional grammar**

This is not a single asset.

It is the relationship that can unify:
- photography;
- geometry;
- product UI;
- numbers;
- evidence.

This currently has the strongest potential to become PROFIT's system-level signature because it expresses product truth rather than style alone.

#### 6. Calm explanatory motion
Role:
**temporal grammar**

Motion should reveal:
cause;
source;
state change;
decision consequence.

It is supportive, not required for recognition.

Static composition must work first.

---

### Do these codes form one coherent system?

Current hypothesis:
**yes, if organised by function rather than used all at once.**

System logic:

**real agriculture**
→ establishes category/reality

**operational/data context** (domain-specific structure; field geometry in crop / Field Profitability)
→ establishes source/context

**economic typography**
→ establishes economic meaning

**evidence/confidence language**
→ calibrates trust

**composition**
→ connects the above into one causal story

**motion**
→ reveals the information relationship over time when useful; it must not manufacture causal attribution

This is stronger than treating all six as decorative motifs.

### Flexible identity rule

Use:

**stable grammar + controlled variables**

Stable/invariant:
- agriculture → data → economics relationship;
- economic-unit formatting;
- evidence/confidence semantics;
- documentary-truth rules;
- typographic metric logic;
- motion personality.

Variable:
- crop;
- geography;
- subject;
- image scale;
- field shape;
- layout split;
- density;
- overlay position;
- amount of whitespace;
- light/dark surface within approved range.

Do not standardise one fixed section template.

Figma Config 2026 is useful here as a process reference:
a finite visual vocabulary can generate many compositions when relationships and rules are stable.

Flexible-system research adds the same durable principle:
**constants preserve coherence; variables preserve adaptability.**

---

### Distinctiveness evidence rule

Until recognition evidence exists, use the language:

- candidate brand code;
- candidate recognition cue;
- system hypothesis;

not:
- distinctive asset;
- owned visual code;
- recognisable PROFIT signature.

Recognition testing should ask:
- can target users associate the code/system with PROFIT after repeated exposure?
- is the cue unique versus category competitors?
- does removal of the logo destroy recognition?
- does the cue still work when content/crop/layout changes?

Logo-off testing is diagnostic only.
For a young brand, candidate codes should normally be co-presented with the PROFIT name while memory is being built.

---

### Current research decision

**A remains the strongest research prior, not the production winner.**

Why:
- lowest expected comprehension cost;
- strongest space for explicit evidence/uncertainty;
- best mobile adaptability;
- lower category-confusion risk than B/C;
- easiest foundation for a flexible cross-surface brand grammar.

However:

**B is the strongest mechanism-comprehension challenger.**

If farmer testing shows that B materially improves reconstruction of:
**farm reality → data → economics**
without pushing users into satellite/agronomy classification, B should replace A.

**C is the highest-risk comparator.**

It should advance only if its product seriousness produces materially better calibrated trust and action understanding without accounting/ERP confusion or false precision.

Production selection requires farmer evidence from AD-1…AD-7.

## 20. Acceptance criteria

A design is ready to progress only if:

- farmer value is understandable quickly;
- the site feels credible without animation;
- product proof is concrete;
- evidence state is visible;
- uncertainty is understandable;
- farmer control is explicit;
- mobile composition is strong;
- long/localized content works;
- typography/metrics feel like a reusable brand system;
- the design is not generic AI/SaaS;
- performance/accessibility targets remain achievable;
- every major visual choice has a clear communication purpose.

## 21. Reconsider if

Revisit the blueprint if:
- farmers misunderstand the category;
- Field Profitability is not the strongest wedge;
- trust/transparency reduces comprehension instead of improving it;
- another visual direction materially improves trust and qualified conversion;
- the platform choice starts slowing learning or imposing material constraints;
- new VEV evidence changes the strongest value proposition.


## 22. AI-assisted verification gate

Because frontend implementation may be AI-assisted, every material UI change must be independently verified.

Minimum gate:
- production build passes;
- TypeScript passes;
- critical routes load;
- no console errors;
- primary CTA/navigation/forms work;
- responsive screenshots at critical widths;
- automated accessibility scan on critical states;
- no obvious page-weight/client-JS/performance regression.

Use Playwright against a production preview where practical.

AI-generated code is not accepted based on visual plausibility alone.


## 23. Ownable visual system

The website must avoid AI-era visual sameness.

Primary signature motif:

**Agricultural reality → precise data layer → economic meaning**

Build recognizable brand expression from:
- real agricultural photography;
- precise operational/data context (domain-specific structure; field geometry in crop / Field Profitability only);
- economic typography;
- evidence/confidence states;
- restrained explanatory motion.

Do not rely on generic agritech/SaaS styling for differentiation.

## 24. TL;DR and guided wayfinding

Because PROFIT is a complex B2B proposition, provide a fast overview before deeper exploration.

Test a compact **PROFIT in 30 seconds** layer covering:
- target user;
- problem;
- mechanism;
- first wedge;
- value standard;
- next action.

For long desktop pages, test subtle guided wayfinding or section markers.

Do not use scroll hijacking or forced scrollytelling.


## 25. Brand system and candidate recognition codes

The website must operate as the first full expression of a reusable PROFIT brand system.

Brand logic:

**Story → Symbol → System**

Working brand architecture:
- PROFIT — master brand;
- Agricultural Decision Intelligence — category/proposition hypothesis;
- Field Profitability — module/product;
- Verified Economic Value — value measurement standard.

Do not call a visual element a distinctive asset until recognition/uniqueness evidence exists.

Current master-brand candidate code roles (they must work across crop production, pig production and dairy — §2.1):
- real/documentary agricultural reality — category membership + documentary trust;
- economic typography and units — economic salience + candidate memory code;
- evidence/confidence/provenance language — trust semantics;
- agriculture/production → data/context → economics — compositional grammar;
- calm explanatory motion — temporal grammar;
- future signature symbol/device — open hypothesis.

Domain-specific variable codes:
- field geometry — spatial/data context bridge for crop / Field Profitability; a candidate domain code, not a master-brand invariant;
- other production domains (pig production, dairy): domain-specific operational structure/context — OPEN until product/domain evidence exists.

The strongest current system hypothesis is not any single cue. It is the **relationship**:

**real agricultural/production reality → precise operational/data context → economic meaning → evidence/confidence → decision**

Test candidate recognition at the system level and component level.

The product UI and marketing site should share the same underlying grammar rather than becoming visually unrelated systems.

## 26. Verbal identity

PROFIT voice should be:
- precise;
- grounded;
- calm;
- transparent;
- human;
- economically literate.

Tone may flex by context:
- hero: short/direct;
- product: practical;
- methodology: forensic;
- company: human;
- security: unambiguous;
- investor: evidence-led.

Brand language includes both:
**what we say + how we say it.**

Avoid generic SaaS/AI language and corporate filler.


## 27. AI sameness prevention

AI-generated polish must never become the source of PROFIT's creative point of view.

Required process:
1. category deconstruction / exclusion board;
2. human/problem-led divergent framing;
3. at least 3 independent strategic framings;
4. proprietary inputs (real farm imagery, field geometry, product UI, economic/evidence system);
5. AI used to expand/adapt, not define the initial identity;
6. human convergence against trust, distinctiveness and product truth;
7. systemise approved direction into tokens/components/rules;
8. competitor-confusion and logo-off recognition tests;
9. governed AI generation only from phase-appropriate brand context.

Working anti-sameness system hypothesis:

**real agricultural/production reality → precise operational/data context → economic meaning → evidence/confidence → measured explanatory motion when useful**

Do not call this a distinctive signature until recognition/uniqueness evidence exists.

Treat generic cues as high-risk by default:
- stock farmer + tablet;
- generic green SaaS;
- AI glow/particles;
- abstract neural networks;
- generic satellite hero;
- bento-card template;
- "AI-powered / smarter / optimize / unlock insights" as identity language.

A design is not considered brand-distinctive until target users can begin to recognise PROFIT codes without relying on the logo/name.


## 28. AI creative-process architecture

Avoiding AI sameness requires process controls, not prompt cleverness.

Mandatory workflow for brand-defining work:

1. human-authored strategic brief;
2. solo human framing before shared references;
3. 3+ independent **strategic framings** — do not reuse fixed territory names as ritual answers;
4. **thin-context divergence**:
   - give each Explorer the farmer/user problem, product truth, evidence constraints, required raw inputs and hard legal/accessibility constraints;
   - withhold the current leading art direction, other concept outputs, preferred composition, approved execution examples and candidate brand codes as mandatory motifs;
5. require independent perspective origins inside the Explorer stage; functional roles alone do not count as diversity;
6. use the sequence **brief → framing → low-fidelity human structure → AI prompt** for brand-defining visual ideation;
7. quarantine the first acceptable/polished concept until independent territories exist;
8. restore full brand/category context for collision and convergence;
9. AI assigned one role at a time:
   - Challenger,
   - Explorer,
   - Analyst,
   - Builder,
   - Simulator;
10. independent concept evaluation before group discussion; randomize order and hide creator/AI origin where practical;
11. adversarial convergence:
   - falsify the preferred direction;
   - steelman the strongest rejected direction;
12. human approval with written rationale;
13. implementation from the full machine-readable brand context;
14. granular provenance for brand-critical assets;
15. co-presentation of emerging distinctive assets with the PROFIT name;
16. periodic drift/recognition audit.

Never let one AI loop:
brief → create → judge → approve its own work.

Functional AI role diversity is not sufficient evidence of conceptual diversity.

### PROFIT Creative Evaluation Compass

Review major concepts for:
- Product Truth — including agricultural/data plausibility and documentary authenticity;
- Farmer Relevance;
- Distinctiveness Potential;
- Category Contrast;
- Evidence Integrity;
- Comprehension;
- System Potential;
- Execution Quality.

Do not let visual novelty substitute for plausibility. A farmer-facing visual that implies impossible operations, unavailable data or unsupported product precision fails Product Truth even if it looks distinctive.

Use PASS / CONCERN / REJECT / NEEDS EVIDENCE rather than pseudo-precise scores.

### AI-readable brand system

Encode:
- tokens;
- component usage rules;
- voice/terminology;
- evidence rules;
- approved examples;
- rejected examples;
- explicit exclusions;
- LOCKED / FLEXIBLE / OPEN exploration zones.

Repeated AI errors should trigger a system/context correction, not endless output patching.

### Distinctive-asset memory rule

Logo-off testing is diagnostic only.

For a young brand, emerging distinctive assets should normally be repeatedly co-presented with the PROFIT name/logo so users can learn the association.


## 29. Visual effects strategy

Visual effects exist to explain:
- hierarchy;
- information lineage;
- state change;
- spatial continuity;
- decision flow.

Do not use motion to imply causal attribution that the evidence does not support.

Core rule:

**Make the path from farm reality to economic meaning easier to understand. Do not make the website move for its own sake.**

### Field → Economics Reveal status

**Candidate explanatory motion — not a validated signature and not a production requirement.**

The existing prototype is evidence that the idea can be implemented lightly. It is not evidence that motion improves farmer comprehension.

Do not promote it to a signature effect until:
- a surviving art direction exists;
- its static composition works;
- static-vs-motion farmer testing shows a material comprehension/recall benefit without a trust/distraction penalty;
- mobile and reduced-motion versions remain complete;
- implementation cost is proportionate.

### Information sequence to test

Use:

**Real farm**
→ **field scope / geometry**
→ **operational/data context + provenance**
→ **economic interpretation**
→ **evidence/confidence**
→ **decision question / next action**

Important:
this is an **information-transformation sequence**, not automatically a causal attribution sequence.

For example, visually placing fertilizer, rainfall and yield before margin must not imply that PROFIT has proven those factors caused the margin unless the underlying model/evidence supports that attribution.

### Best static composition — Variant A

Build this before any motion.

All essential information is visible at once:

1. **Farm reality**
   - real/approved agricultural image or clearly illustrative material;
   - field/operation identity.

2. **Field scope**
   - field boundary visible as a static SVG;
   - geometry establishes which physical unit is being discussed.

3. **Operational/data context**
   - a small number of source/data markers;
   - provenance is explicit;
   - markers are context, not automatically causal drivers.

4. **Economic interpretation**
   - one dominant economic state, for example:
     **€637 / ha — Margin**

5. **Evidence + confidence**
   - immediately adjacent to the economic state:
     **HYPOTHETICAL EXAMPLE**
     **Confidence: Not assessed**

6. **Decision**
   - one decision question or next investigative action;
   - do not fabricate an agronomic/economic recommendation.

The static composition must make this path understandable without animation, pinning or interaction.

### Motion composition — Variant B

Use exactly the same content, layout logic, economic scenario, labels and CTA as Variant A.

Motion may only control attention/order.

Recommended sequence:

1. farm reality is already visible;
2. SVG boundary draws to establish scope;
3. operational/data context appears in one restrained step or a very small number of meaningful groups;
4. economic interpretation receives emphasis;
5. evidence/confidence is visible **with the economic number**, not as a delayed disclaimer;
6. decision question / next action resolves last.

Do not:
- count the financial number up theatrically;
- bounce/pop data points;
- use decorative parallax;
- dim/blur the farm merely for cinematic effect;
- make the user wait for the economic value to become readable;
- hide evidence/confidence during a period in which the number looks authoritative.

The current prototype's farm-dimming treatment is **not assumed to add information** and should be removed from the controlled test unless independently justified.

### Motion-element interrogation

For every animated element ask:

1. What information does this movement explain?
2. What does the farmer lose if it is static?
3. Can the same meaning be achieved more simply?
4. Does it work at ~390 px without miniature desktop choreography?
5. Is the reduced-motion version fully meaningful?
6. Does it delay comprehension or the next action?
7. Could the same motion advertise a generic AI/crypto/design-agency site unchanged?

Default decisions:

| Motion element | Information purpose | Simpler/static alternative | Default test status |
|---|---|---|---|
| SVG boundary draw | Establish field scope | Boundary already visible | TEST |
| Data/context reveal | Establish source/provenance order | All context visible statically | TEST |
| Economic metric emphasis | Shift attention to economic meaning | Typographic hierarchy | TEST, no count-up |
| Evidence/confidence reveal | Calibrate interpretation | Always-visible labels | REQUIRED SEMANTICS; motion optional |
| Decision-state reveal | Complete action path | Always-visible decision question | TEST |
| Farm dim/blur | None proven | Static contrast/layout | REMOVE by default |
| Decorative parallax | None proven | Static depth/composition | REMOVE by default |
| Long sticky/pinned scrollytelling | Controls pacing, not meaning | Normal document flow | AVOID unless test proves benefit |

### Implementation ladder

Choose the first level that communicates the tested benefit.

0. **Static composition**
   - must pass first.

1. **SVG**
   - static field geometry first;
   - if motion survives, stroke/path reveal may establish scope;
   - use real/meaningful geometry where available.

2. **Native CSS**
   - opacity;
   - small translate;
   - transition/keyframes;
   - restrained easing;
   - no runtime library.

3. **CSS scroll-driven animation**
   - use only as progressive enhancement;
   - scroll/view timelines may map sequence progress to normal user scrolling;
   - essential content must remain correct when unsupported.

4. **View Transition API**
   - use for continuity between product/view states or routes;
   - not the default orchestration mechanism for the internal Field → Economics sequence.

5. **Small JavaScript**
   - only if validated motion needs broader orchestration/support than native CSS can reliably provide;
   - prefer a small targeted mechanism over a general animation runtime.

6. **GSAP**
   - only if farmer evidence says the motion is valuable **and** the required multi-element choreography cannot be implemented clearly/reliably with the previous levels;
   - no GSAP dependency for the first static-vs-motion experiment.

7. **Canvas/WebGL/Three.js**
   - not justified for this effect.

### Technical research conclusion

Current relevant platform guidance is sufficient for the experiment:

- Framer vector effects can animate path stroke/offset while keeping the asset editable;
- Framer scroll transforms support gradual position/scale/opacity changes tied to scroll;
- Framer scroll-trigger guidance explicitly recommends building the static composition first and ensuring content does not depend on animation completing;
- Framer easing guidance says timing should be judged in the final layout and related motion should remain responsive/consistent;
- CSS scroll-driven animations can express scroll/view-linked progress natively, but current browser support is not universal, so treat them as enhancement;
- View Transitions are useful for preserving context between DOM/page states;
- `prefers-reduced-motion` is widely available and must produce an equivalent information experience.

No GSAP research/implementation is required before the first A/B test because native techniques are already sufficient to test the communication hypothesis.

### Static-vs-motion farmer experiment

Run only **after the art-direction stage produces a surviving visual base**.

Do not compare:
- Static A in one art direction;
- Motion B in another.

That would confound visual grammar and motion.

Use one surviving art direction and duplicate it exactly:

#### Variant A — Static
Best static composition above.

#### Variant B — Motion
Same composition/content with the minimal tested motion sequence.

Keep identical:
- surviving hero/message context;
- farm image;
- field geometry;
- operational/data values;
- economic value;
- evidence/confidence;
- decision question;
- typography;
- colors;
- CTA;
- viewport;
- total information.

For all illustrative economic values use only:

**HYPOTHETICAL EXAMPLE**  
**Confidence: Not assessed**

### Primary test design

To avoid learning contamination in time/comprehension measures:
- randomize participants to see Static or Motion first;
- collect first-exposure measures before showing the alternative;
- only then allow a crossover comparison for distraction/preference feedback.

Suggested exploratory cohort:
- 12–18 target farmers for directional qualitative evidence;
- use a larger follow-up if the observed difference is subtle and the production decision becomes costly to reverse.

Measure:

#### Comprehension
- What is happening?
- What does the economic number mean?
- What would you do next?

#### Recall
After hiding the composition:
- field/context remembered;
- economic value/job remembered;
- evidence/confidence remembered;
- decision remembered;
- animation itself remembered.

#### Correct interpretation
Ask participant to reconstruct:

**farm/context → data/source → economic interpretation → evidence/confidence → decision**

Also ask:
**Did anything on the screen imply that a specific factor caused the margin?**

Unverified causal inference is a failure.

#### Time to understand
Measure time until the participant can correctly explain:
- the economic meaning;
- evidence/confidence;
- next decision/action.

Motion that requires more waiting is not automatically better because it is clearer eventually.

#### Trust
Ask:
- How certain should you be about this result?
- What would you verify?
- Did the presentation feel transparent or theatrical?

#### Distraction
Ask:
- What did you notice first?
- What do you remember most?
- Did any movement make reading harder?

### Mobile test

Repeat core task at ~390 px.

Motion must:
- simplify cleanly;
- avoid large panning/scaling;
- preserve economic state + evidence/confidence + decision;
- avoid forcing a long sticky scroll sequence.

### Reduced-motion test

Reduced motion is not a separate lower-information design.

It should resolve to the **best static composition**:
- boundary visible;
- data context visible;
- economic interpretation visible;
- evidence/confidence visible;
- decision visible.

Do not rely on an animation's final frame if the static layout itself is poorly composed.

### Performance test

Compare Static vs Motion:
- added client JS;
- added asset weight;
- main-thread/CPU behavior;
- LCP/INP/CLS risk;
- mobile smoothness.

A single explanatory effect does not justify a large runtime by default.

### Motion kill criteria

Kill the motion or reduce it to a simpler element if:

- Static explains the sequence as well or better;
- comprehension/recall does not materially improve;
- time to correct understanding worsens;
- users remember the effect more than the economic meaning;
- motion increases unverified causal interpretation;
- evidence/confidence is recalled less accurately;
- mobile is materially weaker;
- reduced-motion loses meaning;
- motion delays reading/CTA access;
- performance/runtime cost is disproportionate;
- effect can be transplanted unchanged to a generic AI/crypto/design-agency website;
- the same benefit can be achieved with a single SVG or simple CSS emphasis.

### Promotion rule

Only after the experiment may the terminology change from:

**candidate explanatory motion**

to:

**validated PROFIT motion pattern**

A stronger claim such as **signature motion** additionally requires repeated brand-recognition evidence across surfaces, not one successful comprehension test.

### Effect budget

Until validation:
- zero required storytelling effects;
- one candidate Field → Economics test;
- normal interaction feedback only.

After validation:
- maximum 1–2 focal storytelling effects on the homepage;
- one focal motion event per viewport/section;
- supporting motion limited to hierarchy, continuity and interaction feedback.

### Recommended secondary motion

Independent of Field → Economics validation:
- calm hover/focus feedback;
- short section reveals where they do not delay reading;
- View Transitions for meaningful product/detail continuity;
- guided progress only if it improves wayfinding.

### Not v1 by default

- decorative WebGL/Three.js hero;
- shader/noise backgrounds;
- particles;
- custom cursors;
- liquid cursor effects;
- scroll hijacking;
- long loader intros;
- autoplay hero video;
- excessive kinetic typography;
- dramatic count-ups;
- generic "data flying into dashboard" animation.

Every shipped effect requires:
- static information parity;
- reduced-motion parity;
- mobile validation;
- accessibility validation;
- performance review;
- farmer-comprehension rationale.

## 30. Semiotic and flexible-system safeguards

Avoiding AI sameness requires both category legibility and distinctiveness.

### Category process
1. deconstruct agritech category codes;
2. document overcrowded clichés;
3. temporarily remove competitor/category references during initial concepting;
4. reintroduce them for a collision/confusion test.

Use generic-AI similarity only as an originality warning, not as proof.

### Brand grammar

Use a flexible-system model: **constants preserve recognition; variables preserve adaptability.**

Keep **invariants** stable:
- agriculture → data → economics information lineage; show causal attribution only when evidence supports it;
- economic typography logic;
- evidence/confidence semantics;
- unit formatting;
- operational/data-context principles: source context is shown precisely and linked to economic meaning, whatever the production domain;
- photography truthfulness;
- motion personality.

Allow **variables** within defined ranges:
- crops/subjects;
- image crops;
- section rhythm;
- grid splits;
- domain-specific operational structure (field geometry and field shapes in crop / Field Profitability; pig/dairy structure OPEN until product/domain evidence exists);
- overlay placement;
- density;
- scale;
- light/dark surface within approved ranges.

Consistency comes from grammar, not identical templates.

A flexible identity fails if:
- every output looks like the same template with changed content;
- every output varies so much that only the logo connects them;
- decorative variation overwhelms evidence/product meaning.

Periodically test the system across unrelated surfaces and content conditions, not only the homepage.

### Human-only zones

Final human ownership is required for:
- strategic framing;
- farmer empathy;
- documentary truth;
- core brand point of view;
- final art direction;
- final creative selection/taste judgement;
- localization/cultural nuance;
- sensitive evidence framing.

Human ownership does not mean unaccountable taste. Material farmer-facing decisions must still survive evidence, comprehension, accessibility and documentary-truth checks.

### Creative provenance

For every brand-critical AI-assisted asset, retain:
- asset purpose/path;
- brand-context version;
- design-token/content-system version;
- AI tool/model/version when available;
- AI workflow role;
- source/reference assets and rights;
- human owner/reviewer;
- approval decision/date;
- evidence status if economic claims appear;
- material transformations when relevant: crop/retouch, generative fill/replacement, synthetic objects/backgrounds, compositing.

For documentary agriculture:
- retain the original source;
- do not generatively add/remove factual scene elements and continue to classify the result as documentary;
- if AI materially changes factual scene content, classify the result as illustration/concept imagery rather than documentary proof.

Use Content Credentials/C2PA when practical; do not introduce it as a mandatory dependency before the workflow benefits justify the cost.

Brand-critical AI workflows must be versioned, auditable, and reversible.


## 31. Research saturation and next-stage rule

The general strategy/design/frontend research foundation is now sufficient for pre-production validation.

Do not continue broad theory collection by default.

Prioritize:
1. controlled hero message/positioning validation on a neutral static scaffold;
2. three independent art-direction prototypes using the surviving message;
3. art-direction farmer comprehension + calibrated-trust testing;
4. brand-code recognition/confusion testing;
5. signature-motion validation only after divergent art directions exist;
6. production-platform decision.

Start additional research only to resolve a specific OPEN hypothesis, verify a time-sensitive technical fact, materially challenge an existing decision, or reduce a meaningful risk.

The targeted anti-sameness process audit completed on 2026-09-26 is considered saturated for the current stage. Re-open that research only when a real workflow/test failure is not explained by the current mechanism set.

Repository context should carry persistent project rules; individual prompts should stay narrow and task-focused.
