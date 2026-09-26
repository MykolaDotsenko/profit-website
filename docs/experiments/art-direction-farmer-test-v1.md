# PROFIT Art Direction Farmer Test v1

Status: Ready to run
Date: 2026-09-26
Owner: PROFIT website team
Canonical basis:
- `docs/website-blueprint-v1.md`
- `docs/ai/IMPLEMENTATION_PLAN.md`
- `docs/ai/context.yaml`

## 1. Research stop decision

Broad art-direction research is stopped for this cycle.

Reason:
recent external masterclasses reinforced the existing conclusion but did not materially change:
- the leading hypothesis;
- the three candidate directions;
- the main trust/comprehension risks;
- the experiments required to distinguish them.

Re-open external research only if:
- farmer evidence contradicts the current model;
- a specific unresolved design mechanism could materially change the decision;
- a time-sensitive technical/accessibility constraint appears;
- the three directions fail for a reason not explained by current evidence.

Default next action is **test, not more theory**.

## 2. Decision to make

Which art direction best maximizes:

1. farmer comprehension;
2. calibrated trust;
3. correct product/category expectation;
4. product truth;
5. ability to scale into the PROFIT product system?

Candidates:

- **A — Evidence-Led Editorial**
- **B — Farm Operations Layer**
- **C — Economic Control Room**

Current leading hypothesis:
**A — Evidence-Led Editorial**

This is a control hypothesis, not a winner.

## 3. Controlled prototype requirements

Before testing, prepare three static prototypes with identical information.

Keep constant across A/B/C:
- surviving hero message from WWW-000;
- CTA wording and hierarchy;
- underlying field/economic scenario;
- economic value;
- evidence state;
- confidence state;
- provenance/source cue;
- limitation/assumption;
- total amount of information;
- product capability represented;
- desktop and ~390 px mobile viewport.

Allowed to vary:
- layout;
- typography treatment;
- density;
- photography/product balance;
- field geometry treatment;
- light/dark surface;
- placement and emphasis;
- editorial vs spatial vs control-room composition.

Not allowed in first test:
- animation;
- extra features;
- different copy;
- different values;
- different proof quality;
- different levels of evidence disclosure.

## 4. Test cohort

Primary cohort:
**12–18 farm decision-makers relevant to the current field/crop profitability wedge.**

Record for segmentation:
- role;
- farm type;
- approximate farm scale;
- country/region;
- level of digital-tool use;
- whether they actively manage field-level costs/margins.

Do not average materially different segments without checking whether behavior differs.

Do not include investors in the farmer-comprehension decision sample.

## 5. Exposure protocol

For each participant:

1. Assign first direction in counterbalanced order.
2. Show static hero/key frame for 5–10 seconds.
3. Hide it.
4. Ask open recall questions.
5. Show it again.
6. Run evidence/trust task.
7. Run category-classification question.
8. Repeat with remaining directions.
9. Only after all independent tasks, ask comparative preference and why.
10. Run mobile task on the same direction set or a balanced subset.

Avoid coaching, explanation or correction until the participant has finished the task.

## 6. AD-1 — 10-second comprehension + trust

Ask after hiding the screen:

1. What do you think PROFIT does?
2. Who is it for?
3. What farm problem does it help with?
4. What economic question/result did you notice?
5. What would you do next?

Then ask:
- What felt credible?
- What felt unclear?
- What felt like marketing rather than product truth?

Record:
- verbatim answer;
- correct/partial/incorrect product classification;
- farmer-economic job recalled;
- product proof noticed: yes/no;
- CTA understood: yes/no;
- trust language used spontaneously.

## 7. AD-2 — Evidence interpretation

Use the same scenario in all directions.

Participant must identify:
- what the economic number means;
- evidence state;
- confidence state;
- source/provenance;
- limitation/assumption;
- what they would verify before acting.

Record:
- correct interpretation;
- interpretation error;
- missed uncertainty;
- false precision;
- time to answer;
- whether evidence labels were actually noticed.

Critical trust principle:
**A visually impressive direction fails if it causes overconfidence.**

## 8. AD-3 — Product-reality / category-confusion

Ask:

“Which of these best describes what you think PROFIT is?”

Use neutral options:
- farm decision-support;
- farm accounting/finance;
- agronomy/satellite/mapping;
- generic AI/data platform;
- consulting/reporting;
- other.

Then ask:
“What made you classify it that way?”

Expected risk signatures:
- A → consulting/report/editorial;
- B → agronomy/satellite/mapping;
- C → accounting/ERP/finance.

## 9. AD-4 — Mobile farmer task

At ~390 px ask participant to find:
1. the key economic issue;
2. evidence/confidence;
3. next action.

Record:
- completion success;
- hesitation;
- missed information;
- scroll dependency;
- whether product proof survives mobile compression.

Kill any direction whose core meaning depends on desktop scale.

## 10. AD-5 — Trust under bad news / uncertainty

Use a deliberately uncomfortable case:
- negative field margin;
- incomplete data;
- Low or Insufficient evidence;
- one explicit assumption.

Ask:
- Do you believe this result?
- What would you verify?
- Is anything being hidden?
- Does the product feel more or less trustworthy because uncertainty is shown?
- Would you act now, investigate, or ignore it?

This is a critical test because PROFIT must earn trust when the system reports bad or uncertain information, not only attractive outcomes.

## 11. Direction-specific kill criteria

### A — Evidence-Led Editorial

Kill or materially redesign if:
- repeated consulting/report classification;
- product proof is not noticed;
- editorial restraint makes the product feel conceptual rather than operational;
- B produces materially better comprehension with no trust penalty.

### B — Farm Operations Layer

Kill or materially redesign if:
- repeated satellite/agronomy/mapping classification;
- visual overlays are remembered more than the economic job;
- static comprehension is weak without motion;
- the data layer feels magical or unexplained.

### C — Economic Control Room

Kill or materially redesign if:
- repeated accounting/ERP/finance classification;
- dense UI slows task completion;
- less digitally confident farmers show materially more hesitation;
- precision aesthetics create false confidence or imply unsupported maturity.

## 12. Cross-direction kill criteria

A direction cannot win if:
- roughly one-third or more of participants fail to identify the intended farmer-economic job;
- three or more participants repeat the same material misclassification;
- it creates recurring guaranteed-profit interpretations;
- evidence/confidence is systematically missed;
- it needs verbal explanation;
- mobile meaning collapses;
- it depends on animation to make sense.

These are qualitative decision gates, not statistical significance thresholds.

## 13. Decision matrix

Do not collapse the result into a cosmetic score.

For each direction record:

| Dimension | A | B | C |
|---|---|---|---|
| Farmer job comprehension | | | |
| Correct product classification | | | |
| Product proof noticed | | | |
| Evidence interpretation | | | |
| Calibrated trust | | | |
| False-precision risk | | | |
| Mobile task success | | | |
| Category-confusion pattern | | | |
| Trust under bad news | | | |
| Qualitative farmer preference | | | |

Use:
- PASS
- CONCERN
- REJECT
- NEEDS EVIDENCE

Primary selection rule:
**farmer comprehension + calibrated trust beat visual preference.**

## 14. Result template

### Direction A
Evidence:
-

Failure patterns:
-

Decision:
PASS / CONCERN / REJECT / NEEDS EVIDENCE

### Direction B
Evidence:
-

Failure patterns:
-

Decision:
PASS / CONCERN / REJECT / NEEDS EVIDENCE

### Direction C
Evidence:
-

Failure patterns:
-

Decision:
PASS / CONCERN / REJECT / NEEDS EVIDENCE

## 15. Final decision

Selected base direction:
-

Why:
-

Secondary elements allowed from other directions:
-

Elements explicitly rejected:
-

Remaining uncertainty:
-

## 16. After the test

If one direction clearly survives:
1. update the Blueprint;
2. update `docs/ai/context.yaml`;
3. record a durable decision/ADR only if the choice becomes a long-lived system decision;
4. build the next higher-fidelity prototype;
5. validate signature motion only after static comprehension remains strong.

If no direction survives:
- do not resume broad research automatically;
- first diagnose the observed failure pattern;
- run targeted research only for that specific failure;
- create a new direction from the new evidence.
