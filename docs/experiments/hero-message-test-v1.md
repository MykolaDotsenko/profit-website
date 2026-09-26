# PROFIT Hero Message Test v1 — WWW-000

Status: **Draft — not approved to run.** A human must settle the items in §2 before session 1.
Date: 2026-09-26
Implementation-plan ID: WWW-000
Stimulus: `prototypes/hero-message-test/`

Canonical basis:
- `docs/website-blueprint-v1.md` §5 (01 Hero: durable rules, H1/H2/H3, hero decision rule), §8, §11, §17 (hero farmer-test protocol, Round 1, hero kill criteria), §18
- `docs/ai/IMPLEMENTATION_PLAN.md` — WWW-000
- `docs/ai/context.yaml` — `hero_validation`

If this protocol and the Blueprint disagree, the Blueprint wins. Record the disagreement instead of working around it.

## 1. Decision

Which hero **message** directions survive, which need rewriting and which should be killed? The measure is how well target farmers understand each one, not which one they prefer.

- **H1** — Economic visibility / farmer job first
- **H2** — Decision intelligence / current control
- **H3** — Field Profitability / product proof first

This test does **not** decide the art direction, final headline wording, the category label as brand language, the platform or motion. It produces no statistical winner.

Only the surviving message(s) feed WWW-001. No H direction is a winner before this test is run and analysed.

## 2. Settle before session 1

These items cannot be settled from canonical documents alone. AI must not settle them.

| # | Item | Why it matters | Proposed default | Owner |
|---|---|---|---|---|
| D1 | **Exposure design and counting rule** | Blueprint §17 describes one timed exposure plus recall (for the first hero), then comparison. Its kill thresholds are counts across the whole cohort ("one-third or more", "three or more participants"). At n = 9–12, a first-exposure-only design gives 3–4 responses per direction, and those cohort-level thresholds almost never trigger. | **PROPOSED:** every participant gets a timed exposure, open recall and a second viewing for **all three** directions, in counterbalanced order. Comparison comes only after all three (§8). Kill counts use all participants per direction. First-exposure results are reported separately as the least-contaminated signal (§11). | Human (PROFIT team) |
| D2 | **Meaning of "repeated pattern"** | Most Blueprint kill criteria say "repeated" without a number. | **PROPOSED:** 3 or more participants, independently, which mirrors the Blueprint's misclassification rule. 2 participants = CONCERN. | Human |
| D3 | **Exposure duration** | The Blueprint allows about 5–10 s. The same duration must be used for everyone. | **PROPOSED:** 10 s, fixed for the whole round (`index.html?t=10`). | Human |
| D4 | **Product-truth reference** | Some kill criteria can only be applied if we know what the product actually supports: "implies precision/data coverage that the current product cannot support" and H3's "product proof is not mature/credible enough". | **REQUIRED:** the product owner writes down what Field Profitability currently supports. That means inputs, cost allocation, margin definition, drivers/explanations, data sources/integrations, precision and coverage. Store it with the results. | Product owner |
| D5 | **Cohort language and locale** | The stimulus copy is the English Blueprint text. Translating it changes what is being tested. | **REQUIRED if not English:** a native speaker who knows farm vocabulary translates all three directions with the same care, and someone back-translates them. Number, unit and currency formats are localized the same way in all three. The approved translation becomes the tested text; record it with the results. | Human |
| D6 | **Scenario plausibility** | Implausible illustrative numbers damage trust in every direction. That makes results noisier and can hide real message differences. | **REQUIRED:** someone who knows farm economics in the cohort's region reviews §4.3: crops, areas, yields, costs, margins, units and currency. Any change is applied identically to all three directions. | Human |
| D7 | **Consent and data handling** | Participant data. | **REQUIRED:** use the team's own consent process. This protocol does not define legal consent terms. | Human |

Once D1–D7 are settled, freeze the stimulus: record its git commit hash and do not edit it during the round.

## 3. What is held constant and what varies

Blueprint §17 Round 1 requires the same neutral/static scaffold. It holds constant typography hierarchy, layout, CTA wording/placement, proof-object complexity and image quality, with motion off.

| Element | H1 / H2 / H3 |
|---|---|
| Scaffold (white canvas, system font, no photography, no colour semantics, no field geometry, no motion) | identical |
| Header (plain `PROFIT` wordmark; no navigation, so nav labels cannot feed recall) | identical |
| Typography roles and sizes, layout, breakpoints | identical |
| CTAs: **Join the pilot** (primary) · **See how PROFIT works** (secondary), same placement | identical |
| Proof card frame and size (equal by construction), `HYPOTHETICAL EXAMPLE`, `Confidence: Not assessed` | identical |
| Decision question, source line | identical |
| Underlying scenario (§4.3) | identical |
| **Eyebrow, headline, support** | **varies** — Blueprint §5 verbatim |
| **Proof-card body** | **varies** — each follows its Blueprint §5 proof-object definition, using the same scenario and 3 economic/production values each |

Why the scaffold is neutral: it must not look like A (warm editorial canvas, documentary photography), B (field geometry and overlays) or C (dark product surfaces, metric clusters). Art direction is tested separately in WWW-001/002. Photography is left out entirely rather than using a placeholder or stock image.

Because of this, absolute comprehension may come out lower than it would for a fully designed hero. See §12 for the rule when all three fail the same way.

## 4. Stimulus content

### 4.1 Messages (Blueprint §5, verbatim)

| | Eyebrow | Headline | Support |
|---|---|---|---|
| H1 | FIELD ECONOMICS | Know where your farm makes money — and where it doesn't. | PROFIT connects field operations, costs and outcomes so you can see where margin is being created or lost and what to investigate next. |
| H2 | AGRICULTURAL DECISION INTELLIGENCE | Turn farm data into more profitable decisions. | PROFIT connects what happens on the farm with what it means economically. |
| H3 | FIELD PROFITABILITY | See margin by field — and what drives it. | PROFIT brings operations, costs and outcomes together into field-level economics, with assumptions and confidence visible when they are assessed. |

Rendering-only details: a non-breaking space before each em dash, and balanced line wrapping. The words are unchanged.

### 4.2 Proof-card body per direction

| | Blueprint §5 proof-object definition | Stimulus body |
|---|---|---|
| H1 | a small number of contrasting field economics with provenance/illustrative labeling | "Three fields, one farm": margin for Field 24, Field 12, Field 31 |
| H2 | farm data → economic interpretation → decision, one concrete metric/question | Field 31: FARM DATA (yield, costs) ↓ ECONOMIC INTERPRETATION (margin) ↓ the shared decision question |
| H3 | field-level economics, source context, `Confidence: Not assessed` | Field 31: yield, costs, margin |

The H3 headline promises "what drives it". The stimulus shows only the parts that make up the margin (yield, costs → margin). It does not show causal drivers, because nothing establishes a causal claim. Record causal expectations when participants voice them (§10).

### 4.3 Shared scenario — HYPOTHETICAL EXAMPLE

| Field | Crop | Area | Yield | Costs | Margin |
|---|---|---|---|---|---|
| Field 24 | Wheat | 41.7 ha | — | — | €637/ha |
| Field 12 | Wheat | 23.0 ha | — | — | €148/ha |
| Field 31 | Barley | 18.4 ha | 4.1 t/ha | €834/ha | −€96/ha |

- Evidence: **HYPOTHETICAL EXAMPLE** · Confidence: **Not assessed**
- Decision question: **What would you investigate on Field 31 before changing the plan?** (a question, not a recommendation; adapted from `docs/experiments/field-economics-motion-test-v1.md`)
- Source line: **Source: farmer-provided field records · one season** (Blueprint §8 provenance category "Farmer-provided"; it implies no machinery or other integrations)
- Provenance of the numbers: Field 24 reuses the motion-protocol scenario. The rest are AI-drafted placeholders, chosen only to be internally consistent (−€96/ha implies about €180/t barley). They are **not** regional facts, **not** customer data and **not** PROFIT outputs. They need D6 review.
- "Margin" is intentionally left undefined in the stimulus. How participants read it is data (§8, probe d).
- Values that appear more than once must be edited together: `Field 31 · Barley · 18.4 ha` and `−€96/ha` (H1/H2/H3), `4.1 t/ha` and `€834/ha` (H2/H3).

## 5. Participants

Target: **9–12 farm decision-makers relevant to the current field/crop profitability wedge** (Blueprint §17). 12 is preferred because it completes the counterbalancing in §6.

Include people who decide on field operations, inputs or crop economics, such as an owner, manager or partner.

Exclude, or analyse separately:
- investors, advisors to PROFIT, PROFIT staff or friends;
- anyone who has already seen PROFIT positioning, decks or prototypes.

Record for segmentation: role, farm type and main crops, approximate farmed area, country/region, digital tools used for farm economics, and whether they currently compare costs or margins by field.

If the recruited farmers form materially different segments, counterbalance and analyse each segment separately. Do not average them (Blueprint §17).

Recruitment and scheduling messages must not describe PROFIT's product or use any direction's wording. For example, say "a 40-minute website first-impression study for farmers". Do not mention field economics, profitability, decision intelligence or margins.

## 6. Assignment (counterbalancing)

Assign orders in booking order, decided before the first session. Do not reassign on the day. If a participant drops out, the replacement takes the same order.

| Participant | Order |
|---|---|
| P01 | H1 → H2 → H3 |
| P02 | H2 → H3 → H1 |
| P03 | H3 → H1 → H2 |
| P04 | H1 → H3 → H2 |
| P05 | H2 → H1 → H3 |
| P06 | H3 → H2 → H1 |
| P07–P12 | repeat P01–P06 |

- Each block of three is a Latin square, so every direction appears once in every position.
- P01–P06 covers all six orders, so each direction immediately follows each other direction equally often.
- At 9 participants each direction is seen first 3 times, but carryover is not fully balanced. Report this.
- 10 or 11 participants unbalance first exposures. Report which directions were seen first more often.

## 7. Session setup

- Use one device, browser, window size and zoom (100%) for every session. Use full screen, with notifications off.
- Primary exposure is on a laptop or desktop screen: in person at normal viewing distance, or remote with the stimulus shared at full screen.
- Open `prototypes/hero-message-test/index.html?t=<D3>`. This moderator view shows direction labels, so the participant must never see it.
- Session keys (need JavaScript):
  - <kbd>1</kbd>/<kbd>2</kbd>/<kbd>3</kbd> loads H1/H2/H3 behind a hidden screen;
  - <kbd>Space</kbd> shows it for the fixed duration, then hides it;
  - <kbd>B</kbd> shows or hides it without a timer.
- Without JavaScript, use the direction links and time the exposure manually. Record that the session was manually timed.
- The CTAs are placeholder links and do nothing. If a participant tries one, ask what they expected to happen.
- Record for each session: date, mode, moderator, note-taker, stimulus commit hash, exposure seconds, order.

Mobile is **not** a participant task in this round; the mobile participant task is AD-5 in WWW-002. It is a team design gate here instead. At about 390 px, check that no direction loses the proof card or has to remove the economic proof to fit (hero kill criterion K9). Record what the first 390 × 844 viewport shows for each direction.

## 8. Moderator script

Use the same wording for every participant. Do not explain PROFIT, correct answers or coach until the participant has finished all tasks.

**Intro (verbatim):**
> "I'll show you the first screen of a website for a few seconds. Look at it the way you normally would. When it disappears I'll ask what you remember and what you think it is. There are no right or wrong answers — we're testing the website, not you."

**For each direction, in the assigned order:**

1. Load the direction behind the hidden screen. Say "Ready?" and press <kbd>Space</kbd>. The stimulus shows for the D3 duration, then hides.
2. **Open recall** (Blueprint §17, verbatim). Ask with the screen hidden, before any explanation:
   1. What do you think PROFIT does?
   2. Who do you think it is for?
   3. What farm problem do you think it helps with?
   4. What economic result/question do you think you would see?
   5. What would you expect to click or do next?

   For the 2nd and 3rd directions, also ask: "Is anything different from the previous one? What?"
3. **Second viewing** (<kbd>B</kbd>, untimed) and probes, in this order. Leading probes come last.
   - a. What is the panel with numbers showing you? *(no explanation given — K5)*
   - b. What part is unclear? *(Blueprint)*
   - c. What sounds least credible? *(Blueprint)*
   - d. What data would you expect PROFIT to need? *(Blueprint)* What do you think "margin" includes here?
   - e. Does anything sound like a promise of guaranteed profit? *(Blueprint; leading, so ask it last)*
4. **First direction only**, after its probes:
   - Where do you think these numbers come from?
   - What do you think happens after "Join the pilot"?
   - What would stop you from joining a pilot? *(Blueprint)*

**After all three** (comparison; not "which do you like?"):
- Which version makes it clearest what PROFIT would do for a farm like yours? Why?
- Which version would you trust least? Why?
- Does any version promise more than you believe? Which words?
- If you could keep one sentence from any version, which one, and why? *(secondary: rewrite input only)*

Probes a, d (the margin part) and the three first-direction questions are additions. They make the Blueprint §17 "Record" items observable: proof-object comprehension, data expectations, CTA comprehension, and reading illustrative numbers as real. Every other question is Blueprint wording.

## 9. Recording sheet

Copy this sheet once per participant. Keep names and contact details **outside the repository** and use participant IDs only. Anonymized, consented verbatims may be committed with the results. Personal data may not.

```text
Participant: P__   Segment: ____   Date: ____   Mode: in person / remote
Moderator: ____   Note-taker: ____   Stimulus commit: ____   Exposure: __ s (timed / manual)
Order: H_ → H_ → H_
Role: ____   Farm type / main crops: ____   Approx. area: ____   Country/region: ____
Tools for farm economics: none / spreadsheet / farm software / advisor / other: ____
Compares costs or margins by field today: yes / sometimes / no
Prior exposure to PROFIT: none / yes (→ analyse separately)

Exposure _ of 3 — H_
 Recall (verbatim)  1 does: ____  2 for: ____  3 problem: ____  4 economic result: ____  5 next: ____
 Different from previous (2nd/3rd only): ____
 Probes (verbatim)  a panel: ____  b unclear: ____  c least credible: ____
                    d data / margin: ____  e guaranteed profit: ____
 First direction only: numbers from: ____  after "Join the pilot": ____  pilot barriers: ____
 Codes (§10): JOB-CONCRETE P/PA/F   JOB-INTENDED Y/N   AUDIENCE Y/N   MECHANISM Y/P/N
              ECON-RESULT Y/N   NEXT-ACTION Y/N   CATEGORY-WITHOUT-JOB Y/N   MISCLASS: ____
              PROMISE spontaneous / prompted-only / none   PRECISION-SCOPE Y/N   CAUSAL Y/N
              PROOF-UNAIDED Y/P/N   NUMBERS-READ-AS-REAL Y/N   UNCLEAR WORDS: ____

Comparison (verbatim): clearest: ____  least trusted: ____  over-promise: ____  keep sentence: ____
```

## 10. Coding rubric

Two people should code the answers independently where possible, then settle disagreements. Code from verbatims, not from the moderator's impression.

| Code | Definition |
|---|---|
| JOB-CONCRETE | **PASS (P):** names a concrete economic job for a farm, e.g. "shows which fields make or lose money", "works out margin per field", "shows where costs eat the profit". **PARTIAL (PA):** farm plus generic data/decisions/profit with no concrete job, e.g. "farm data software", "helps farmers decide better". **FAIL (F):** no farm-economic job, or a misclassification. For K1, PA and F both count as "cannot state a concrete farmer-economic job"; report them separately. |
| JOB-INTENDED | Matches this direction's intended job. H1: where the farm/fields make or lose money and what to investigate. H2: what farm data means economically, for a decision. H3: margin per field and what makes it up. |
| AUDIENCE | Says it is for farms/farmers. |
| MECHANISM | Connects farm data/operations to economic meaning (Y / partial / N). |
| ECON-RESULT | Recalls an economic result or question, e.g. margin, €/ha, a weak field. |
| NEXT-ACTION | Names a plausible next step (join the pilot, see how it works, investigate a field). |
| CATEGORY-WITHOUT-JOB | Recalls category/technology words (e.g. "decision intelligence", "AI", "data") but not the job (K4). |
| MISCLASS | `ACC` accounting/bookkeeping/tax · `LAND` land valuation/real estate · `AIC` generic AI/data consultancy or platform · `MKT` marketplace/trading/input buying · `AGRO` agronomy advice/satellite/mapping · `FIN` loans/insurance/banking · `REP` consulting/reporting service · `OTH` other (describe) |
| PROMISE | Reads it as guaranteed higher profit, savings or verified results. Record whether this was spontaneous (before probe e) or prompted only; spontaneous is stronger evidence. |
| PRECISION-SCOPE | Expects precision, automation, integrations or coverage the product-truth reference (D4) does not support. Examples: "it knows every field's exact profit automatically", "it connects to my machinery", "whole farm including livestock". |
| CAUSAL | Expects PROFIT to establish why, e.g. "it tells me why the field loses money". Compare with D4. This is an evidence-integrity risk, especially for H3's "what drives it". |
| PROOF-UNAIDED | Probe a is answered correctly without explanation: a field-level economic result derived from farm information. Y / partial / N (K5). |
| NUMBERS-READ-AS-REAL | Believes the numbers are real customer, farm or verified results despite `HYPOTHETICAL EXAMPLE`. This is a **scaffold** signal: if it repeats, fix the labelling for all three directions and do not blame one message. |

## 11. Hero kill criteria (Blueprint §17)

These are directional qualitative gates, not statistical proof. For each direction, fill in a count across all participants and the first-exposure-only count. Use one of: TRIGGERED / CONCERN / NOT TRIGGERED / N/A.

| # | Criterion (Blueprint wording) | H1 | H2 | H3 |
|---|---|---|---|---|
| K1 | roughly one-third or more of the first-round cohort cannot state a concrete farmer-economic job after the short exposure | | | |
| K2 | three or more participants independently make the same material misclassification (for example bookkeeping, land valuation, generic AI consultancy, marketplace) | | | |
| K3 | participants repeatedly interpret the copy as a guarantee of higher profit or verified savings | | | |
| K4 | the category/technology wording is remembered, but the product job is not | | | |
| K5 | the proof object needs verbal explanation to connect farm reality with economic meaning | | | |
| K6 | the direction implies precision/data coverage that the current product cannot support (needs D4) | | | |
| K7 | the CTA or next step is materially unclear | | | |
| K8 | the hero only works when animation is enabled | N/A — no motion | N/A | N/A |
| K9 | mobile requires removing the product/economic proof to fit the composition (team design gate, §7) | | | |

Variant-specific kill signals (Blueprint §17):

- **H1:** repeated classification as accounting/bookkeeping; wording implies whole-farm coverage beyond the actual wedge; negative "made/lost" framing reduces trust or willingness to continue.
- **H2:** farmers paraphrase it only as generic "AI/data for better decisions"; `Agricultural Decision Intelligence` creates confusion or adds no useful meaning; "more profitable decisions" is interpreted as a promised financial outcome.
- **H3:** target farmers do not care enough about field-level margin to make it a first-screen job; "margin by field" implies unsupported precision or unavailable data; the product proof is not mature/credible enough to substantiate the headline (needs D4).

Counting (if D1 is accepted as proposed): a criterion is TRIGGERED when the all-participant count meets the threshold. If the first-exposure-only signal points the other way, the direction is **NEEDS EVIDENCE**, not ADVANCE or KILL. Later exposures carry learning from earlier directions, so a pass that shows up only in 2nd/3rd position is weak evidence.

## 12. Decision rules

For each direction, decide **ADVANCE / REWRITE / KILL / NEEDS EVIDENCE**, citing evidence rather than taste.

- **ADVANCE** only when "most participants can independently paraphrase the intended farmer-economic job, no recurring trust failure appears, and the next action is understood" (Blueprint §17).
- **REWRITE** when the job lands but specific words fail (e.g. a promise or precision reading). A rewrite is a **new hypothesis**. Test it again, at least in a small check, before it counts as surviving.
- **KILL** when the core job itself fails, e.g. farmers do not care about it, or there is repeated misclassification that no wording change would plausibly fix.
- **NEEDS EVIDENCE** when signals conflict or differences are subtle. Use a larger follow-up "if differences are subtle or the decision becomes costly to reverse" (Blueprint §17).
- More than one direction may advance. WWW-001 needs **one** controlled message, so the team picks one and records why, or runs a follow-up. Do not hybridize untested wording.
- **If all three fail the same criterion**, first work out whether the scaffold caused it before killing anything. Possible scaffold causes: missing farm imagery, an unclear proof card, unnoticed labels. Fix the scaffold identically for all three and retest. Adding other candidates, such as the alternatives in `docs/website-strategy.md` §3, needs a human decision.
- Never report "H_ won". Report the sample size, segments, order balance and remaining uncertainty.

## 13. Result template

Record results in `docs/experiments/hero-message-test-v1-results.md`, anonymized and with no personal data.

```text
Cohort: n = __, segments: ____, first exposures per direction: H1 __ / H2 __ / H3 __
Settled items D1–D7: ____ (D4 product-truth reference attached: yes/no)
Stimulus commit: ____   Exposure: __ s   Language/locale: ____

H1 — evidence: ____   failure patterns: ____   kill table: ____   decision: ADVANCE / REWRITE / KILL / NEEDS EVIDENCE
H2 — evidence: ____   failure patterns: ____   kill table: ____   decision: ...
H3 — evidence: ____   failure patterns: ____   kill table: ____   decision: ...

Scaffold signals (NUMBERS-READ-AS-REAL, shared unclear words): ____
Message selected for WWW-001, and why: ____
Rewrites that need retesting: ____
Remaining uncertainty: ____
```

## 14. After the test

1. Update the canonical source first: Blueprint §5, the status of each H direction and the surviving message.
2. Then update `docs/ai/context.yaml` (`hero_validation`) and `docs/ai/IMPLEMENTATION_PLAN.md` (WWW-000 acceptance, exit criteria).
3. Create an ADR only if the result becomes a durable, cross-cutting decision, e.g. dropping the category label from public positioning (`docs/decisions/README.md`).
4. WWW-001 starts only with one surviving, controlled message, or with an explicit human decision to accept the risk.

## 15. Reconsider if

- recall is driven by the proof-card body rather than the copy. Then run a copy-only check with one identical proof body for all three;
- the neutral scaffold itself causes a systematic failure (e.g. "looks unfinished" or "not trustworthy") across all directions;
- the recruited cohort does not match the Field Profitability wedge;
- the product-truth reference (D4) contradicts what the proof cards imply;
- the Blueprint's hero candidates, CTA or evidence semantics change before the round is run.
