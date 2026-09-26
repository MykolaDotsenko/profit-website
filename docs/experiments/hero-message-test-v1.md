# PROFIT Hero Message Test v1 — WWW-000

Status: **Draft — not approved to run.** D1–D3 were approved by the PROFIT team on 2026-09-26. D4 is blocking, and D5–D8 must be settled before session 1 (§2).
Date: 2026-09-26
Implementation-plan ID: WWW-000
Stimulus: `prototypes/hero-message-test/`

Canonical basis:
- `docs/website-blueprint-v1.md`: §5 (01 Hero: durable rules, H1/H2/H3, hero decision rule), §8, §11, §17 (hero farmer-test protocol, Round 1, hero kill criteria and counting rules; procedure clarified 2026-09-26 per D1–D3), §18
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

## 2. Decisions and pre-session requirements

AI must not settle the open items.

| # | Item | Status | Decision / requirement | Owner |
|---|---|---|---|---|
| D1 | Exposure design and counting rule | **APPROVED** (2026-09-26) | Every participant evaluates all three directions in counterbalanced order. For each direction: the same timed exposure, open recall, then a second viewing with probes. Overall comparison comes only after all three have been evaluated independently. Kill criteria are counted across all participants who evaluated a direction. First-exposure results are kept and reported separately as the least-contaminated signal. Now in Blueprint §17. | PROFIT team |
| D2 | "Repeated pattern" | **APPROVED** (2026-09-26) | 3 or more independent participants. 2 independent participants = **CONCERN**, not an automatic kill. The count does not apply to critical evidence-integrity failures: a single case that shows a false or unsupported claim must be corrected regardless of count. Now in Blueprint §17. | PROFIT team |
| D3 | Exposure duration | **APPROVED** (2026-09-26) | Fixed **10 seconds** for the entire first round. The stimulus enforces it and it cannot be configured. | PROFIT team |
| D4 | Product-truth reference for Field Profitability | **REQUIRED — BLOCKING** | This protocol cannot apply K6, H3's "product proof is not mature/credible enough" or the CAUSAL/PRECISION-SCOPE codes without it. The product owner documents what exists today: inputs, calculations, margin definition, cost allocation, drivers/explanations, data sources, precision/coverage, and what is still hypothetical or not built. Also document whether a real Field Profitability UI exists that may be shown (Blueprint §5 H3: "real Field Profitability UI when available"). If one exists, a human decides whether Round 1 keeps the equivalent hypothetical cards for all three directions. A real UI for H3 alone would break the controlled comparison. *Checked 2026-09-26:* no such reference exists in this repository's canonical documentation. The separate core PROFIT repository was not inspected in this session. Capability must not be reconstructed from marketing or research copy. | Product owner |
| D5 | Cohort language and locale | **REQUIRED before sessions** | A human decides the cohort language. Until then the stimulus stays in the English Blueprint text and is not localized. If it is translated, a native speaker who knows farm vocabulary translates all three directions with the same care; someone back-translates them; number/unit/currency formats are localized identically. The approved translation becomes the tested text. | Human |
| D6 | Scenario plausibility | **REQUIRED before sessions** | Someone with farm-economics knowledge of the specific country/cohort reviews §4.3: crops, areas, yields, revenue (implied price), costs, margins, units and currency. Any change is applied identically to all three directions. Until then the numbers are AI-drafted placeholders, **not** regional facts. | Human (domain) |
| D7 | Consent and data handling | **REQUIRED before sessions** | Defined by a human through the team's own process. This protocol defines no legal or consent terms. §9 only minimizes what is recorded. | Human |
| D8 | Farm imagery in the scaffold | **REQUIRED before sessions** | Choose between (1) **no image**, the current stimulus: no photography cue from art directions A/B, but a neutral card of tabular numbers can pull readings towards accounting/finance (§3); or (2) **one identical, human-approved documentary field image** in all three directions: farm context, but it brings in a photography cue and needs source/rights provenance. AI must not select, generate or edit the image. | PROFIT team |

Once D4–D8 are settled: run one dry run (§8), then freeze the stimulus. Record its git commit hash and do not edit it during the round.

## 3. What is held constant and what varies

Blueprint §17 Round 1 requires the same neutral/static scaffold, holding constant typography hierarchy, layout, CTA wording/placement, proof-object complexity and image quality, with motion off.

| Element | H1 / H2 / H3 |
|---|---|
| Scaffold (white canvas, system font, no colour semantics, no field geometry, no motion; imagery per D8, currently none) | identical |
| Header (plain `PROFIT` wordmark; no navigation, so nav labels cannot feed recall) | identical |
| Typography roles and sizes, layout, breakpoints | identical |
| CTAs: **Join the pilot** (primary) · **See how PROFIT works** (secondary), same placement | identical |
| Proof card frame and size (equal by construction), `HYPOTHETICAL EXAMPLE`, `Confidence: Not assessed` | identical |
| Decision question, illustrative source line | identical |
| Underlying scenario (§4.3) | identical |
| **Eyebrow, headline, support** | **varies** — Blueprint §5 verbatim |
| **Proof-card body** | **varies** — each follows its Blueprint §5 proof-object definition and uses the same scenario |

The scaffold is deliberately unlike A (warm editorial canvas, documentary photography) and B (photography with field geometry and overlays). It **does share part of C's grammar**. Blueprint §19 lists C as including "graphite/dark or highly neutral product-like surfaces", "strong tabular numeric hierarchy", "compact metric clusters", "economic states and comparisons" and "explicit evidence/confidence". The scaffold uses a highly neutral surface, tabular numbers and explicit evidence/confidence, though it has no metric clusters or dense UI.

C's category-confusion risk is accounting/ERP/finance. That is also H1's own kill signal. So if `ACC`/`FIN` misreadings recur in **all three** directions, treat them first as a scaffold signal (§12), not as evidence against one message. Art direction is tested separately in WWW-001/002.

Known by-products (not message differences):
- Equal card size by construction leaves unequal empty space inside the card (most in H1).
- The CTA sits at different heights because the headlines and supports differ in length.
- Absolute comprehension may be lower than for a fully designed hero. See §12 for the rule when all three fail the same way.

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
| H2 | farm data → economic interpretation → decision, one concrete metric/question | Field 31: FARM DATA (yield, costs) ↓ ECONOMIC INTERPRETATION (revenue, margin) ↓ the shared decision question |
| H3 | real Field Profitability UI when available; otherwise field-level economics, source context, `Confidence: Not assessed` | Field 31: yield, revenue, costs, margin. This takes the "otherwise" branch until D4 says whether a real UI exists. |

H2 and H3 show revenue so that the arithmetic reconciles: revenue − costs = margin.

The H3 headline promises "what drives it". The stimulus shows only the parts that make up the margin. It does not show causal drivers, because nothing establishes a causal claim. Record causal expectations when participants voice them (§10).

### 4.3 Shared scenario — HYPOTHETICAL EXAMPLE

| Field | Crop | Area | Yield | Revenue | Costs | Margin |
|---|---|---|---|---|---|---|
| Field 24 | Wheat | 41.7 ha | — | — | — | €637/ha |
| Field 12 | Wheat | 23.0 ha | — | — | — | €148/ha |
| Field 31 | Barley | 18.4 ha | 4.1 t/ha | €738/ha | €834/ha | −€96/ha |

- Evidence: **HYPOTHETICAL EXAMPLE** · Confidence: **Not assessed**
- Decision question: **What would you investigate on Field 31 before changing the plan?** A question, not a recommendation; adapted from `docs/experiments/field-economics-motion-test-v1.md`.
- Source line: **Illustrative source: farmer-provided field records · one season**. This uses the Blueprint §8 provenance category "Farmer-provided" and implies no machinery or other integrations. It is labelled illustrative because the numbers do not come from any records.
- Provenance of the numbers: Field 24's margin reuses the motion-protocol scenario. The rest are AI-drafted placeholders, chosen only to be internally consistent (€738/ha at 4.1 t/ha implies about €180/t barley). They are **not** regional facts, customer data or PROFIT outputs, and they need D6 review.
- "Margin" is intentionally left undefined in the stimulus. How participants read it is data (§8, probe d).
- Values that appear more than once must be edited together: `Field 31 · Barley · 18.4 ha` and `−€96/ha` (H1/H2/H3); `4.1 t/ha`, `€738/ha` and `€834/ha` (H2/H3).

## 5. Participants

Target: **9–12 farm decision-makers relevant to the current field/crop profitability wedge** (Blueprint §17). 12 is preferred because it completes the counterbalancing in §6.

Include people who decide on field operations, inputs or crop economics, such as an owner, manager or partner.

Exclude, or analyse separately:
- investors, advisors to PROFIT, PROFIT staff or friends;
- anyone who has already seen PROFIT positioning, decks or prototypes.

Determine each participant's segment at screening, **before** assigning an order. Record for segmentation: role, farm type and main crops, approximate farmed area, country/region, digital tools used for farm economics, and whether they currently compare costs or margins by field.

If the recruited farmers form materially different segments, counterbalance and analyse each segment separately. Do not average them (Blueprint §17).

Recruitment and scheduling messages must not describe PROFIT's product or use any direction's wording. For example, say "a 40-minute website first-impression study for farmers". Do not mention field economics, profitability, decision intelligence or margins.

## 6. Assignment (counterbalancing)

Assign orders in booking order within each segment, using a separate P-sequence per segment, decided before the first session. Do not reassign on the day. If a participant drops out, the replacement takes the same order. If segments only become clear after sessions, do not reassign; report the resulting imbalance.

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
- Open `prototypes/hero-message-test/index.html`. This moderator view shows direction labels, so the participant must never see it.
- Session keys (need JavaScript):
  - <kbd>1</kbd>/<kbd>2</kbd>/<kbd>3</kbd> loads H1/H2/H3 behind a hidden screen;
  - <kbd>Space</kbd> shows it for exactly 10 s (D3), then hides it;
  - <kbd>B</kbd> shows or hides it without a timer.
- Opening or reloading a stimulus address starts on the hidden screen. The browser Back button keeps the screen hidden. Use <kbd>B</kbd> to leave it.
- Without JavaScript, use the direction links, time 10 s manually and record that the session was manually timed.
- The CTAs are placeholder links and do nothing. If a participant tries one, ask what they expected to happen.
- Record for each session: date, mode, moderator, note-taker, stimulus commit hash, timing (timed/manual), order.

Mobile is **not** a participant task in this round; the mobile participant task is AD-5 in WWW-002. K9 is therefore N/A by construction: the shared scaffold keeps the proof card on mobile for every direction. As a design note for later mobile composition, record which elements are visible in the first 390 × 844 viewport for each direction: badge, values, decision question, source line, CTA.

## 8. Moderator script

Use the same wording for every participant. Do not explain PROFIT, correct answers or coach until the participant has finished all tasks.

**Dry run (before the freeze):** do one full rehearsal with someone outside the sample to check timing, keys, wording and session length. Rehearsal answers are not data.

**Intro (verbatim; protocol wording):**
> "I'll show you the first screen of a website for a few seconds. Look at it the way you normally would. When it disappears I'll ask what you remember and what you think it is. There are no right or wrong answers — we're testing the website, not you."

**Before the 2nd and 3rd directions (verbatim; protocol wording):**
> "Now I'll show you another version of the first screen, again for a few seconds. Please look at it the way you normally would."

**For each direction, in the assigned order (D1):**

1. Load the direction behind the hidden screen. Say "Ready?" and press <kbd>Space</kbd>. The stimulus shows for 10 s, then hides.
2. **Open recall** (Blueprint §17, verbatim). Ask with the screen hidden, before any explanation:
   1. What do you think PROFIT does?
   2. Who do you think it is for?
   3. What farm problem do you think it helps with?
   4. What economic result/question do you think you would see?
   5. What would you expect to click or do next?
3. **Second viewing** (<kbd>B</kbd>, untimed) and probes, in this order. The leading probe comes last.
   - a. What is the panel with numbers showing you? *(added — K5; no explanation given)*
   - b. What part is unclear? *(Blueprint)*
   - c. What sounds least credible? *(Blueprint)*
   - d. What data would you expect PROFIT to need? *(Blueprint)* What do you think "margin" includes here? *(added)*
   - e. Does anything sound like a promise of guaranteed profit? *(Blueprint; leading, so ask it last)*
4. **First direction only**, after its probes:
   - Where do you think these numbers come from? *(added)*
   - What do you think happens after "Join the pilot"? *(added)*
   - What would stop you from joining a pilot? *(Blueprint)*

**After all three** (comparison, all protocol additions; not "which do you like?"):
- Which version makes it clearest what PROFIT would do for a farm like yours? Why?
- Which version would you trust least? Why?
- Does any version promise more than you believe? Which words?
- If you could keep one sentence from any version, which one, and why? *(secondary: rewrite input only)*

**Debrief (verbatim; protocol wording):**
> "Thank you. Before we finish: all the numbers you saw were invented examples, not results from any real farm or customer. The versions were wording tests, and none of them is final. Do you have any questions?"

Do not pitch PROFIT in the debrief. If asked about the pilot, give only the team's standard information.

The recall and probe questions marked *Blueprint* are Blueprint §17 wording. Everything marked *added* or *protocol wording* is an addition. The additions make Blueprint §17's "Record" items observable: proof-object comprehension, data expectations, CTA comprehension, and reading illustrative numbers as real.

**Known residual contamination under D1.** Each direction's probes, including the leading probe e, come before the next direction's exposure and recall. So recall in positions 2–3 is shaped by earlier probes as well as earlier exposures. This protocol reduces the effect:
- no comparison question appears before all three directions are evaluated;
- a PROMISE reading counts as *spontaneous* only before the participant's first probe e (§10);
- answers in positions 2–3 are flagged as probe-exposed in the analysis (§11).

Another order also fits D1's listed properties: all three timed exposures with recall first, then the three second viewings with probes. It would remove probe carry-over. Choosing it is a human decision and has not been applied.

## 9. Recording sheet

The repository is **public**. Keep participant sheets, notes and recordings **outside the repository** and use participant IDs only. The committed results file (§13) uses segment-level descriptors only, never a per-participant combination of role, crops, area and region. It includes verbatims only if they are anonymized, consented and stripped of identifying details. Personal data is never committed.

```text
Participant: P__   Segment: ____   Date: ____   Mode: in person / remote
Moderator: ____   Note-taker: ____   Stimulus commit: ____   Exposure: 10 s (timed / manual)
Order: H_ → H_ → H_
Role: ____   Farm type / main crops: ____   Approx. area: ____   Country/region: ____
Tools for farm economics: none / spreadsheet / farm software / advisor / other: ____
Compares costs or margins by field today: yes / sometimes / no
Prior exposure to PROFIT: none / yes (→ analyse separately)

Exposure _ of 3 — H_   (position 1 = first exposure; positions 2–3 = probe-exposed)
 Recall (verbatim)  1 does: ____  2 for: ____  3 problem: ____  4 economic result: ____  5 next: ____
 Probes (verbatim)  a panel: ____  b unclear: ____  c least credible: ____
                    d data / margin: ____  e guaranteed profit: ____
 First direction only: numbers from: ____  after "Join the pilot": ____  pilot barriers: ____
 Codes (§10): JOB-CONCRETE P/PA/F   JOB-INTENDED Y/N   AUDIENCE Y/N   MECHANISM Y/P/N
              ECON-RESULT Y/N   NEXT-ACTION Y/N   CATEGORY-WITHOUT-JOB Y/N   MISCLASS: ____
              PROMISE spontaneous / prompted-only / none   PRECISION-SCOPE Y/N   CAUSAL Y/N
              PROOF-UNAIDED Y/P/N   NUMBERS-READ-AS-REAL Y/N   LABEL-ECHO Y/N   UNCLEAR WORDS: ____

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
| MISCLASS | `ACC` accounting/bookkeeping/tax · `LAND` land valuation/real estate · `AIC` generic AI/data consultancy or platform · `MKT` marketplace/trading/input buying · `AGRO` agronomy advice/satellite/mapping · `FIN` loans/insurance/banking · `REP` consulting/reporting service · `OTH` other (describe). If `ACC`/`FIN` recur across all three directions, check for a scaffold signal first (§3). |
| PROMISE | Reads it as guaranteed higher profit, savings or verified results. **Spontaneous** only if it appears before the participant's first probe e of the session; **prompted-only** otherwise. Spontaneous is stronger evidence. |
| PRECISION-SCOPE | Expects precision, automation, integrations or coverage the product-truth reference (D4) does not support. Examples: "it knows every field's exact profit automatically", "it connects to my machinery", "whole farm including livestock". |
| CAUSAL | Expects PROFIT to establish why, e.g. "it tells me why the field loses money". Compare with D4. This is an evidence-integrity risk, especially for H3's "what drives it". |
| PROOF-UNAIDED | Probe a is answered correctly without explanation: a field-level economic result derived from farm information. Y / partial / N (K5). |
| NUMBERS-READ-AS-REAL | Believes the numbers are real customer, farm or verified results despite `HYPOTHETICAL EXAMPLE` and the illustrative source line. This is a **scaffold** signal: if it repeats, fix the labelling for all three directions and do not blame one message. |
| LABEL-ECHO | The answer to "Where do you think these numbers come from?" only repeats the source label. Code it separately so it is not mistaken for comprehension. |

## 11. Hero kill criteria (Blueprint §17)

These are directional qualitative gates, not statistical proof. Blueprint §17 sets the counting rules:
- **Count** each criterion across all participants who evaluated that direction (D1).
- Keep and report the **first-exposure** count separately as the least-contaminated signal. Flag positions 2–3 as probe-exposed.
- **Repeated pattern** = 3 or more independent participants. **2 = CONCERN**, not an automatic kill (D2).
- **Evidence-integrity exception:** a single case that shows a false or unsupported claim is corrected regardless of count (D2). Examples: numbers read as verified results because of a label, or an implied integration.

Use one of: TRIGGERED / CONCERN / NOT TRIGGERED / N/A. Fill in each cell as "all-participant count (first-exposure count)".

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
| K9 | mobile requires removing the product/economic proof to fit the composition | N/A — shared scaffold keeps the proof card on mobile (§7) | N/A | N/A |

Variant-specific kill signals (Blueprint §17):

- **H1:** repeated classification as accounting/bookkeeping; wording implies whole-farm coverage beyond the actual wedge; negative "made/lost" framing reduces trust or willingness to continue.
- **H2:** farmers paraphrase it only as generic "AI/data for better decisions"; `Agricultural Decision Intelligence` creates confusion or adds no useful meaning; "more profitable decisions" is interpreted as a promised financial outcome.
- **H3:** target farmers do not care enough about field-level margin to make it a first-screen job; "margin by field" implies unsupported precision or unavailable data; the product proof is not mature/credible enough to substantiate the headline (needs D4).

A TRIGGERED or CONCERN status follows the all-participant count. If the first-exposure result diverges materially from it, state the divergence explicitly in the decision rationale (§12). The divergence does not override the approved count.

## 12. Decision rules

For each direction, decide **ADVANCE / REWRITE / KILL / NEEDS EVIDENCE**, citing evidence rather than taste.

- **ADVANCE** only when "most participants can independently paraphrase the intended farmer-economic job, no recurring trust failure appears, and the next action is understood" (Blueprint §17).
- **REWRITE** when the job lands but specific words fail (e.g. a promise or precision reading). A rewrite is a **new hypothesis**. Test it again, at least in a small check, before it counts as surviving.
- **KILL** when the core job itself fails, e.g. farmers do not care about it, or there is repeated misclassification that no wording change would plausibly fix.
- **NEEDS EVIDENCE** when signals conflict or differences are subtle. Use a larger follow-up "if differences are subtle or the decision becomes costly to reverse" (Blueprint §17).
- More than one direction may advance. WWW-001 needs **one** controlled message, so the team picks one and records why, or runs a follow-up. Do not hybridize untested wording.
- **If all three fail the same criterion**, first work out whether the scaffold caused it before killing anything. Possible scaffold causes:
  - missing farm imagery (D8);
  - a C-like neutral numeric card that reads as accounting/finance;
  - an unclear proof card;
  - unnoticed labels.

  Fix the scaffold identically for all three and retest. Adding other candidates, such as the alternatives in `docs/website-strategy.md` §3, needs a human decision.
- Never report "H_ won". Report the sample size, segments, order balance and remaining uncertainty.

## 13. Result template

Record results in `docs/experiments/hero-message-test-v1-results.md`. Keep them anonymized and segment-level only (§9), with no personal data.

```text
Cohort: n = __, segments: ____, first exposures per direction: H1 __ / H2 __ / H3 __
Decisions: D1–D3 approved 2026-09-26; D4 reference attached: yes/no; D5 locale: ____; D6 reviewer/date: ____; D7 process: ____; D8 imagery: ____
Stimulus commit: ____   Exposure: 10 s (timed / manual sessions: __)

H1 — evidence: ____   failure patterns: ____   kill table (all / first-exposure): ____   decision: ADVANCE / REWRITE / KILL / NEEDS EVIDENCE
H2 — evidence: ____   failure patterns: ____   kill table (all / first-exposure): ____   decision: ...
H3 — evidence: ____   failure patterns: ____   kill table (all / first-exposure): ____   decision: ...

Evidence-integrity cases (any count): ____
Scaffold signals (NUMBERS-READ-AS-REAL, cross-direction ACC/FIN, shared unclear words): ____
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
- the neutral scaffold itself causes a systematic failure (e.g. "looks unfinished", "accounting software" or "not trustworthy") across all directions;
- the recruited cohort does not match the Field Profitability wedge;
- the product-truth reference (D4) contradicts what the proof cards imply;
- D8 adds imagery. Then re-verify that the image is identical across all three and that equal card size, layout and first-viewport content still hold;
- the Blueprint's hero candidates, CTA or evidence semantics change before the round is run.
