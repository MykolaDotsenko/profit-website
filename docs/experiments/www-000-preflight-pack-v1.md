# WWW-000 Preflight Pack v1

Status: **Operational preparation — human gates remain open**  
Date: 2026-09-27  
Experiment: **WWW-000 Hero Message Test**  
Market A: **Finland — provisional until recruitment gate passes**

This pack converts D5–D8 from abstract blockers into concrete operational checklists.

It does **not** approve the experiment to run.

Canonical protocol:
- `docs/experiments/hero-message-test-v1.md`
- `docs/website-blueprint-v1.md`

---

# 1. Freeze rule

Do not run WWW-000 until all of the following are true:

- D5 recruitment gate passes;
- D6 scenario receives human Market-A domain validation;
- D7 research data/consent process is approved for the actual session context;
- D8 one documentary field-crop asset is approved with source/rights/provenance;
- H1/H2/H3 use the same scaffold, image, CTA hierarchy and scenario;
- one dry run passes;
- the stimulus commit hash is recorded and frozen.

No AI agent may mark these human gates complete.

---

# 2. D5 — Market Cohort Specification

## Target cohort

Country:
**Finland**

Initial region:
**Southwest Finland / Varsinais-Suomi**

Working language:
**Finnish**

Production context:
- cereal;
- oilseed;
- protein crop;
- comparable arable production relevant to Field Profitability.

Target farm-size band:
**50–200 ha**, with documented exceptions allowed when the participant is otherwise highly relevant.

Decision-maker:
- owner;
- manager;
- partner;

who is personally involved in field-level crop/economic decisions.

Digital maturity:
**mixed**

The cohort must not be dominated by:
- one software vendor;
- one advisory organisation;
- only highly digital farms;
- only low-digital farms;
- one personal network cluster.

## Recruitment gate

Pass only when **9–12 eligible farmers can realistically be recruited** without obvious convenience/sample bias.

If not:
**reopen Market A rather than weakening the cohort definition or pooling countries.**

---

# 3. D5 recruitment screener

Use this before booking a session.

## Required questions

1. **Where is your farm located?**
2. **What does the farm mainly produce?**
3. **Approximately how many hectares of arable land do you manage?**
4. **Are you personally involved in decisions about crop choice, field costs, input use, selling or field profitability?**
5. **Which tools do you currently use for field/farm records?**
6. **How do you currently estimate whether one field or crop is economically worthwhile?**
7. **Would you be comfortable reviewing three short website concepts in Finnish and explaining what you think each one means?**

## Eligibility

Strong fit:
- Southwest Finland;
- relevant arable production;
- direct decision authority;
- roughly target hectare band;
- willing to speak aloud about interpretation;
- not professionally involved in PROFIT website/product design.

Possible justified exception:
- slightly outside size band;
- adjacent region;
- mixed farm with substantial arable decision context.

Exclude from the first cohort when:
- no direct field/economic decision role;
- consultant/vendor evaluating on behalf of farmers;
- website/design professional without farmer decision responsibility;
- unable to complete the session in the chosen working language;
- conflict that would make feedback unusually biased.

## Cohort balance sheet

Before freeze, record anonymised counts for:

- 50–99 ha;
- 100–149 ha;
- 150–200 ha;
- justified exceptions;
- primary crop context;
- owner / manager / partner;
- digital maturity low / medium / high;
- main current record tool/vendor;
- recruitment source.

Do not store participant names in the public repository.

---

# 4. D6 — Market-Specific Economic Scenario Validation

The current scenario is **illustrative**, internally consistent and not yet Market-A validated.

A human with Finnish arable-domain/economic expertise must review it before sessions.

## Current shared scenario

### Field 24
- crop: Wheat
- area: 41.7 ha
- operating profit: €637/ha

### Field 12
- crop: Wheat
- area: 23.0 ha
- operating profit: €148/ha

### Field 31
- crop: Barley
- area: 18.4 ha
- yield: 4.1 t/ha
- revenue: €738/ha
- operating costs: €834/ha
- operating profit: −€96/ha
- implied price: approximately €180/t

## Human validation checklist

The reviewer must explicitly check:

### Agronomic plausibility
- Is the crop plausible for the Market-A context?
- Is the yield plausible for the type of example?
- Are field sizes plausible enough not to distract?
- Are units familiar and correctly expressed?

### Market/economic plausibility
- Is the implied grain price plausible for the intended reference period?
- Is the operating-cost level plausible?
- Is the spread between positive and negative field economics plausible enough to support comprehension without becoming sensational?
- Could €637/ha operating profit be interpreted as implausibly strong for the scenario/period?
- Does "operating profit" translate cleanly into Finnish without being mistaken for statutory/net farm profit?

### Accounting/economic semantics
Confirm:
**Operating profit = revenue − variable costs − allocated fixed costs**

Confirm that participants will not reasonably infer:
- tax;
- financing;
- statutory accounts;
- depreciation policy;
- whole-farm net profit;

from the wording.

### Terminology
Approve the Finnish terms for:
- operating profit;
- operating costs;
- variable costs;
- allocated fixed costs;
- break-even price;
- break-even yield;
- revenue;
- field / parcel;
- season.

## D6 decision record

Record:
- reviewer role/expertise;
- review date;
- accepted / changes required;
- exact changed values/terms;
- reason for each material change.

Apply any change identically to H1/H2/H3.

Do not publish reviewer personal data in the public repository without consent.

---

# 5. D7 — Research Data / Consent Architecture

This section defines the minimum research process. It is **not legal advice** and does not close any Finland-specific compliance requirement.

## Principles

- participation is voluntary;
- explain the purpose before the session;
- collect only data needed for the research;
- do not ask for farm financial records;
- do not ask for passwords, account access or sensitive operational files;
- no personal participant data in the public repository;
- recording requires explicit consent;
- declining recording must not automatically prevent participation if note-taking can achieve the research purpose;
- participants may stop the session at any time;
- separate raw notes/recordings from public synthesis;
- report patterns anonymously;
- do not quote identifiable statements publicly without separate permission.

## Participant-facing pre-session explanation

The moderator must explain in plain language:

- PROFIT is testing website messages, not the farmer;
- the concepts describe a product in development;
- the example numbers are hypothetical;
- the purpose is to understand interpretation and trust, not purchase intent;
- there are no right answers;
- the participant should say what they understood before being given explanations;
- participation can stop at any time.

## Recording choice

Before any recording:

- ask explicitly;
- record yes/no;
- state what is being recorded;
- state why;
- state who can access it;
- state intended retention/deletion process once approved.

Until the retention/deletion process is approved:
**do not record sessions.**

Written moderator notes are the safer default.

## Research identifiers

Use pseudonymous IDs:

**F01 … F12**

Keep any participant contact/recruitment sheet outside the public repository and separate from analysis notes.

---

# 6. WWW-000 session data sheet

For each participant record only the research fields needed for analysis.

## Participant context

- research ID;
- farm-size band;
- production context;
- decision-maker role;
- digital maturity;
- main record-tool category;
- recruitment source category.

## Direction order

Record the counterbalanced order, for example:

**H2 → H1 → H3**

## Phase A — 10-second exposure

For each direction capture verbatim or near-verbatim:

1. **What do you think this is?**
2. **Who is it for?**
3. **What do you think it helps with?**
4. **What, if anything, do you remember seeing as evidence or proof?**
5. **What do you think you could do next?**

Do not explain terminology during Phase A.

## Phase B — second viewing + probes

Capture:

- unclear words;
- interpretation of "operating profit";
- interpretation of "break-even";
- whether the example looks real, hypothetical or customer-derived;
- whether PROFIT appears to make the decision;
- whether the page feels like accounting software, farm-management software, advisory service, AI product or something else;
- whether the scope feels too narrow/broad;
- perceived trust concern;
- what the participant expected to see but did not.

## Phase C — comparison

Ask:
- Which was easiest to understand?
- Which was easiest to explain back?
- Which felt most credible?
- Which felt least credible?
- Why?

Preference is supporting evidence only.
Comprehension and misclassification remain primary.

---

# 7. Kill / concern coding

Follow the canonical protocol.

## Repeated pattern
**3+ independent participants**

## Concern
**2 independent participants**

## Single critical integrity failure
Correct immediately if the wording creates:
- a false product capability;
- guaranteed-profit interpretation;
- unsupported causal claim;
- incorrect economic definition;
- evidence-state confusion caused by the copy itself.

## Example coding tags

- `ACC` — accounting/bookkeeping misclassification;
- `FIN` — finance/investment misclassification;
- `AIC` — AI category without understanding the farmer job;
- `OP-READING` — operating profit interpreted as net/statutory profit;
- `GUARANTEE` — guaranteed profit/outcome;
- `AUTONOMY` — participant believes PROFIT makes the farm decision;
- `EVIDENCE` — hypothetical/modelled/verified state misunderstood;
- `CTA` — next action unclear;
- `SCOPE` — field-wedge message interpreted as permanent crop-only company.

Add new codes only when they capture a repeated meaningful pattern.

---

# 8. D8 — Controlled Documentary Asset

One approved documentary field-crop image is required.

## Purpose

Provide enough real agricultural context that the neutral scaffold does not read as pure accounting/finance software.

The image is **not** a brand-identity decision.

## Required characteristics

- real/documentary;
- field-crop context relevant to Market A;
- operational rather than lifestyle imagery;
- plausible season/equipment/context;
- no staged farmer-with-tablet cliché;
- no synthetic generation;
- no direction-specific visual meaning;
- low/moderate salience;
- works identically with H1/H2/H3;
- does not contain text that can affect recall.

## Provenance record

Before use, record:

- asset filename/id;
- photographer/source;
- original source location;
- rights/licence;
- permission/usage scope;
- date acquired;
- crop/context if known;
- whether people are identifiable;
- consent/model-release status if relevant;
- edits/crop applied;
- approver;
- approval date.

## Test-control rule

Use:
- same asset;
- same crop;
- same size;
- same placement;
- same treatment;

for H1/H2/H3.

If the image materially changes interpretation in one direction because of text wrapping or layout interaction, rebalance the scaffold before freeze.

---

# 9. Translation / Finnish-language gate

WWW-000 Market-A sessions should run in the cohort's working language.

Before freeze:

1. translate H1/H2/H3 with equivalent care;
2. translate proof labels, CTA, evidence labels and decision question;
3. preserve economic semantics rather than word-for-word English;
4. back-translate headline/support and critical economic terms;
5. have the D6 domain reviewer approve the Finnish economic terminology;
6. verify all three directions receive equivalent polish.

Do not test one polished Finnish direction against two literal translations.

---

# 10. Dry-run gate

Run at least one moderator dry run before the first participant.

Check:

- 10-second timer;
- counterbalanced direction order;
- hidden screen works;
- moderator does not accidentally prime participants;
- questions are read consistently;
- no broken links or layout drift;
- all directions show the same documentary asset;
- the hypothetical/evidence labels are legible;
- moderator can capture notes without extending Phase A;
- stimulus works on the exact device/browser used in sessions.

A dry run is not farmer evidence.

---

# 11. Freeze record

Before the first participant, record:

- experiment protocol version;
- stimulus git commit hash;
- Market-A cohort definition;
- D6 review status/date;
- D7 process approval/date;
- D8 asset provenance record;
- language/version;
- device/browser;
- session order schedule.

After participant 1:
**do not edit the stimulus during the round.**

If a critical integrity flaw is discovered, stop the round, correct it, version the stimulus and restart/clearly separate the evidence.

---

# 12. Completion criteria for WWW-000

WWW-000 is complete only when:

- 9–12 eligible participants complete the protocol;
- every participant sees all H1/H2/H3;
- Phase-A recall is captured before explanation;
- kill/concern patterns are coded;
- first-position recall is reported separately;
- evidence-integrity failures are documented;
- result is analysed by direction;
- survivors / rewrites / kills are recorded;
- limitations and cohort are explicit;
- no statistical-winner language is used;
- master-brand conclusions are not inferred from this crop-wedge test.

Output:
**message directions that survive to WWW-001 — not a final homepage winner.**
