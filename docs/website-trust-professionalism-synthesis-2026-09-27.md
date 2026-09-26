# PROFIT Website — Cross-Disciplinary Trust & Professionalism Synthesis

Date: 2026-09-27  
Status: Supporting development standard. Canonical implementation authority remains `docs/website-blueprint-v1.md`; strategy authority remains `docs/website-strategy.md`.

## Why this document exists

PROFIT website quality depends on more than visual polish.

This synthesis connects four bodies of work already developed across the project:

1. website / brand / design best practices;
2. AI-sameness prevention;
3. farm-data collection, human factors and offline-first field workflows;
4. forecasting, statistical/ML model comparison and agricultural decision-support-system design.

The purpose is to make the public website feel credible because its **brand behavior matches the product philosophy**.

The website must not merely say that PROFIT is:
- farmer-first;
- evidence-led;
- economically rigorous;
- practical for real farms;
- transparent about uncertainty.

The site should demonstrate those qualities in its structure, copy, visuals and interactions.

---

# 1. Primary website job

The website is a **high-trust company presentation and qualified-conversion surface**, not the farm-management application.

A farmer should be able to move through this mental sequence:

**This is relevant to my farm  
→ I understand what PROFIT is trying to solve  
→ I see one concrete economic proof  
→ I understand how data becomes economic meaning  
→ I can see what is known vs uncertain  
→ I trust the way limitations are handled  
→ I know the next step**

Investor/partner depth is secondary and should not distort the farmer-first homepage.

## Fast layer

Within roughly 5–10 seconds, a visitor should understand:

- who PROFIT is for;
- the economic problem;
- the core mechanism;
- the current first concrete product proof;
- that evidence/uncertainty are treated explicitly;
- the next action.

## Slow layer

A visitor who wants to inspect the claim should be able to find:

- definitions;
- evidence state;
- confidence / limitations;
- data-source / provenance logic;
- farmer-control principles;
- methodology;
- current product boundaries;
- company/team/legal details once approved.

**Professional trust comes from inspectable depth, not from putting all depth above the fold.**

---

# 2. Product philosophy must shape the brand

The master logic is:

**real production reality → data/context → deterministic economics → uncertainty/forecast where justified → decision → measured outcome → evidence/confidence → VEV**

The website should repeatedly express this relationship without becoming a dashboard.

The invariant is the logic, not one production object.

Domain variables include:
- field / parcel;
- orchard block / variety;
- greenhouse crop cycle / compartment;
- pig batch / production cycle;
- dairy cow/group/herd;
- beef/poultry/sheep/goat or other relevant production unit.

Do not force all production systems into per-hectare language.

---

# 3. Data-collection lessons that should influence the website

## Product learning

The strongest farm-data direction from project research is:

**capture automatically where reliable → infer cautiously → ask only when necessary → preserve farmer control**

Core rule: **work with the farm that exists**.

The product should work with:
- existing records;
- modern connected machinery;
- old/non-connected machinery;
- intermittent connectivity;
- mixed levels of digital maturity.

### Human-factors principles

For operator-facing data capture, minimise:
- typing;
- repeated confirmation;
- mode switching;
- screen attention while operating machinery;
- duplicate records;
- decisions that can be inferred safely from context.

Prefer:
- defaults;
- reused prior values;
- time/location context;
- automatic activity recognition where validated;
- exception-based confirmation;
- offline capture;
- later sync.

### Website implication

Do **not** communicate PROFIT as if success requires:
- new sensors everywhere;
- fully connected machinery;
- perfect farm records;
- constant internet;
- operators manually feeding a dashboard all day.

A credible site should show that PROFIT is designed around **real farm constraints**.

Do not imply that these future capture capabilities are already shipped unless product truth supports them.

---

# 4. Forecasting lessons that should influence the website

## Product learning

The preferred quantitative hierarchy is:

1. deterministic economics;
2. simple/historical/statistical baseline;
3. forecast uncertain domain drivers;
4. compare model alternatives;
5. use more complex ML only if it improves out-of-sample performance materially;
6. carry forecast uncertainty into economic scenarios;
7. compare scenarios to current practice / a defensible counterfactual;
8. measure the actual result afterwards.

### Model-selection principles

Do not present one algorithm as universally best.

Model selection must depend on:
- data quality;
- data volume;
- target variable;
- forecast horizon;
- domain;
- temporal structure;
- farm/field representativeness;
- calibration;
- operational reliability;
- explainability requirements.

Use:
- temporal / rolling validation;
- future-period holdout;
- independent farm/field holdout where practical;
- baseline comparison;
- MAE / RMSE or suitable task metrics;
- interval / calibration evaluation where predictions drive decisions.

Avoid:
- random splits that leak future/near-duplicate structure;
- deep learning by default;
- one precise-looking future-profit number without uncertainty;
- LLM-generated quantitative truth.

### Website implication

The site should communicate forecasting as:

**scenarios and uncertainty that help a farmer compare decisions**

not:

**AI knows your future profit.**

A forecast is not:
- an observed outcome;
- proof of causality;
- Verified Economic Value.

---

# 5. Decision-support-system lessons that should influence the website

PROFIT is decision support, not autonomous decision authority.

The strongest DSS pattern is:

**state → alternatives → economic consequences → uncertainty → farmer decision → outcome → learning**

The farmer retains decision authority.

### Good decision-support communication

Show:
- the decision question;
- the relevant economics;
- what inputs drive the result;
- assumptions;
- uncertainty;
- alternatives;
- evidence state;
- what is outside the current model.

### Bad decision-support communication

Avoid:
- "the AI recommends";
- unexplained scores;
- opaque single-number rankings;
- pretending uncertainty does not exist;
- presenting correlation as causal effect;
- confusing predicted ROI with verified realised value.

### Website implication

Use **decision questions** as a recurring storytelling device.

Examples:
- Which field deserves investigation before next season?
- What would have to change for this field to break even?
- Which production assumption drives the downside?
- What information would materially change this decision?

This is more credible than generic dashboard imagery.

---

# 6. Trust comes from behavior, not adjectives

Do not rely on copy like:
- trusted;
- transparent;
- accurate;
- secure;
- intelligent.

Demonstrate those qualities.

## Evidence behavior

Every important quantitative claim should have:
- evidence state;
- source/provenance where applicable;
- period/cohort/context;
- confidence/uncertainty when assessed;
- visible limitation where material.

## Data behavior

Show:
- permission;
- purpose;
- provenance;
- farmer control;
- no sensitive data requested before trust/terms.

## Model behavior

Show:
- formula vs forecast distinction;
- assumptions;
- uncertainty;
- modelled vs observed distinction;
- no false precision.

## Company behavior

Before launch, publish approved:
- team identities/roles;
- legal company information;
- direct contact;
- privacy/data terms.

Do not fill these gaps with generic corporate prose.

---

# 7. Design / branding synthesis

## Working doctrine

**Real agriculture. Financial precision. Editorial clarity. Quiet technology.**

This is a doctrine, not a final art direction.

## Story → Symbol → System

### Story
Farm production creates many records and signals, but the economic meaning behind decisions is fragmented and uncertain.

### Symbol / recognition-code candidates
Not yet validated as distinctive assets:
- documentary agriculture;
- economic typography;
- evidence/confidence labels;
- precise production/data context;
- agriculture → economics composition;
- calm explanatory motion;
- future signature device/symbol.

### System
The grammar must survive:
- crops;
- horticulture/orchards;
- greenhouse production;
- pigs;
- dairy;
- other livestock;
- reports/product/social/presentations.

If the identity collapses without aerial field geometry, it is a crop-domain identity, not the PROFIT master brand.

---

# 8. Anti-AI-sameness rules

AI may scale execution; it must not supply PROFIT's point of view from generic priors.

Mandatory for brand-defining work:

1. human strategic frame;
2. thin-context divergence;
3. 3+ independent strategic framings;
4. low-fidelity human structural origin before polished AI visual generation;
5. first-good-concept quarantine;
6. phase-specific context;
7. independent evaluation before group discussion;
8. falsify the preferred direction;
9. steelman the strongest rejected direction;
10. farmer/domain plausibility test;
11. logo-off/category-confusion test where practical;
12. granular provenance.

### Generic-by-default warning signs

- green agritech template;
- stock farmer + tablet;
- perfect synthetic farm;
- generic aerial field hero;
- bento grid as identity;
- purple/blue AI gradient;
- neural/particle/network graphics;
- floating dashboard cards;
- glowing crop/satellite overlay;
- gratuitous 3D;
- "AI-powered", "unlock insights", "farm smarter", "optimize everything".

Common patterns are not automatically forbidden. Kill them when they replace a PROFIT-specific idea.

---

# 9. Human / documentary truth

Real agriculture should be:
- operational;
- imperfect;
- specific;
- plausible;
- correctly sourced.

Prefer imagery showing:
- real work;
- equipment;
- animals/plants/materials;
- decision context;
- seasonal reality;
- production constraints.

Avoid:
- generic lifestyle imagery;
- impossible AI-generated machinery/farm scenes;
- synthetic documentary proof.

If AI materially changes factual scene content, classify the result as illustration/concept imagery.

---

# 10. Homepage density rule

Core density rule: **homepage should not become a white paper**.

Technical depth from data collection, forecasting and DSS research should affect:
- message quality;
- diagrams;
- proof structure;
- trust behavior;
- deeper pages.

It should not result in long methodological sections on the homepage.

## Homepage rule

Each section gets **one primary communication job**.

Recommended public sequence:

1. hero / core economic promise;
2. PROFIT in 30 seconds;
3. whole-farm production scope;
4. one concrete Field Profitability proof;
5. farmer problem;
6. concise PROFIT mechanism;
7. economic value / evidence;
8. current product boundary;
9. trust / farmer control;
10. company;
11. CTA.

Data-collection and forecasting depth belongs mainly on:
- `/company`;
- `/trust`;
- future product/methodology content when product truth supports it.

Homepage may use only a concise statement such as:

**Use the records a farm already has. Add automation where it helps. Keep uncertainty visible.**

and:

**Known economics stay explicit. Forecasts show ranges and scenarios, not false certainty.**

---

# 11. Professional visual hierarchy

Prioritise:
1. economic question;
2. economic state/metric;
3. production context;
4. evidence/confidence;
5. decision implication;
6. secondary methodology.

Do not prioritise:
1. decorative technology;
2. dashboard density;
3. AI branding;
4. feature count.

Economic numerals should feel deliberate and inspectable, but never create false precision.

---

# 12. Trust-oriented copy rules

Prefer concrete language:
- "Operating profit = revenue − variable costs − allocated fixed costs."
- "Confidence: Not assessed."
- "This is a hypothetical example."
- "The decision stays yours."
- "No farm records are requested here."
- "Field Profitability is in development."

Avoid:
- "revolutionary";
- "cutting-edge";
- "game-changing";
- "AI-powered insights";
- "transform agriculture";
- "maximize profit";
- "guaranteed";
- "accurate" without a defined measure/evidence.

---

# 13. What information from product research belongs on the website

## Good public material

- real farmer decision questions;
- transparent economic definitions;
- current product boundaries;
- provenance/evidence labels;
- data-collection philosophy;
- offline/old-machinery compatibility as direction, clearly labelled;
- scenario/forecasting philosophy, clearly labelled;
- official external statistics with source/date/context;
- limitations.

## Keep internal until validated

- exact future livestock/horticulture formulas;
- unsupported model accuracy;
- future feature roadmap presented as commitment;
- autonomous recommendations;
- unvalidated integrations;
- inferred ROI;
- VEV without attribution evidence.

---

# 14. Evidence hierarchy for website decisions

For material website claims use, in order:

1. real customer/farmer evidence;
2. current canonical product truth;
3. official/primary data;
4. peer-reviewed/authoritative research;
5. independent market/competitor evidence;
6. internal hypothesis.

Design taste cannot promote a lower-evidence item above a stronger conflicting source.

---

# 15. Definition of a professional PROFIT website

A professional PROFIT site is not the one with the most polish.

It is one where:

- a farmer understands the value quickly;
- a domain expert does not immediately spot an agricultural impossibility;
- an economist can inspect the definition;
- a data/ML person can see that uncertainty is not hidden;
- an operator is not assumed to have perfect data or perfect connectivity;
- a privacy-conscious farmer sees control and purpose;
- an investor can distinguish current product from future direction;
- a designer sees a coherent brand system rather than an AI template;
- an engineer sees minimal sufficient complexity;
- unsupported claims are visibly absent.

---

# 16. Reconsider if

Update this synthesis when:
- farmer testing contradicts a message/design assumption;
- a non-crop product domain reaches canonical product truth;
- operator field tests change the data-capture strategy;
- forecasting experiments produce model evidence;
- real VEV/customer evidence changes the strongest proof;
- brand-recognition tests identify stronger/weaker codes;
- the homepage becomes too dense or comprehension worsens.
