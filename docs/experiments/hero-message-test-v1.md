# PROFIT Hero Message Test v1 — WWW-000

Status: **Draft — not approved to run.** D1–D3 are approved and a D4 reference has been found. D8 is approved in principle but blocked until an asset exists. D5–D7, D8's asset and the §4.4 product-truth questions must be settled before the stimulus is frozen (§2).
Date: 2026-09-26
Implementation-plan ID: WWW-000
Stimulus: `prototypes/hero-message-test/`

Canonical basis:
- `docs/website-blueprint-v1.md`: §5 (01 Hero: durable rules, H1/H2/H3, hero decision rule), §8, §11, §17 (hero farmer-test protocol: Round 1 phases, hero kill criteria and counting rules), §18
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

## 2. Decisions and pre-freeze requirements

AI must not settle the open items.

| # | Item | Status | Decision / requirement | Owner |
|---|---|---|---|---|
| D1 | Exposure design and counting rule | **APPROVED** (2026-09-26); session flow updated per F1 | Every participant evaluates all three directions in counterbalanced order, in three phases (§8): **A** timed exposure + open recall only, for all three; **B** second viewing + probes; **C** comparison. Kill criteria are counted across all participants who evaluated a direction. First-position recall is reported separately as the least-contaminated signal. Blueprint §17. | PROFIT team |
| D2 | "Repeated pattern" | **APPROVED** (2026-09-26) | 3 or more independent participants. 2 independent participants = **CONCERN**, not an automatic kill. The count does not apply to critical evidence-integrity failures: a single case that shows a false or unsupported claim is corrected regardless of count. Blueprint §17. | PROFIT team |
| D3 | Exposure duration | **APPROVED** (2026-09-26) | Fixed **10 seconds** for the entire first round. The stimulus enforces it. | PROFIT team |
| D4 | Product-truth reference for Field Profitability | **REFERENCE FOUND** — approved for WWW-000 product-truth checking only; **not production proof** | An experimental reference: an implemented vertical slice that is **unmerged and unshipped** (§4.4). It is used only to check that no hero or proof object promises more than has actually been designed or implemented. It is never used as current production capability or public proof. Two product-owner confirmations remain open (§4.4). | Product owner |
| D5 | Cohort language and locale | **OPEN — required before sessions** | The locale follows the farmer cohort that is actually recruited, and a human decides it. Until then the stimulus stays in the English Blueprint text and is not translated. When it is translated, a native speaker who knows farm vocabulary translates all three directions with the same care; someone back-translates them; number/unit/currency formats are localized identically. | Human |
| D6 | Scenario plausibility | **OPEN — required before sessions** | Happens only after the locale and region are known. Someone with farm-economics knowledge of that country/cohort reviews §4.3: crops, areas, yields, revenue (implied price), operating costs, operating profit, units and currency. Changes are applied identically to all three. Until then the values are AI-drafted illustrative placeholders, **not** regional facts. | Human (domain) |
| D7 | Consent and data handling | **OPEN — required before sessions** | A human defines this through the team's process. This protocol defines no consent or legal terms. §9 only minimizes what is recorded. | Human |
| D8 | Farm imagery in the scaffold | **APPROVED in principle** (2026-09-26) — **BLOCKED until an approved asset exists** | One identical, real/documentary field-crop farming image in H1/H2/H3 (requirements in §3). No image is added until the team supplies a licensed or approved asset with source/rights provenance. An AI-generated or synthetic image must not be substituted or presented as documentary. | PROFIT team |

Once D5–D7, the D8 asset and the §4.4 questions are settled:
1. apply the changes identically to all three directions;
2. re-run the stimulus checks (equal visual weight, card size, first-viewport content);
3. hold one dry run (§8);
4. freeze the stimulus, record its git commit hash and do not edit it during the round.

## 3. What is held constant and what varies

Blueprint §17 Round 1 requires the same neutral/static scaffold. It holds constant:
- typography hierarchy and layout;
- CTA wording/placement;
- proof-object complexity **and fidelity** (never a real or higher-fidelity product UI for one direction only);
- image quality, with motion off.

| Element | H1 / H2 / H3 |
|---|---|
| Scaffold (white canvas, system font, no colour semantics, no field geometry, no motion) | identical |
| Imagery: none until the D8 asset exists; then one identical image | identical |
| Header (plain `PROFIT` wordmark; no navigation, so nav labels cannot feed recall) | identical |
| Typography roles and sizes, layout, breakpoints | identical |
| CTAs: **Join the pilot** (primary) · **See how PROFIT works** (secondary), same placement | identical |
| Proof card frame, size (equal by construction) and fidelity; `HYPOTHETICAL EXAMPLE`; `Confidence: Not assessed` | identical |
| Decision question, illustrative source line | identical |
| Underlying scenario and metric names (§4.3) | identical |
| **Eyebrow, headline, support** | **varies** — Blueprint §5 verbatim |
| **Proof-card body** | **varies** — each follows its Blueprint §5 proof-object definition and uses the same scenario |

**D8 image requirements.** When the asset is supplied:
- exactly the same image, crop and treatment for all three directions;
- no direction-specific crop or framing;
- no data overlay and no dramatic art-direction treatment;
- low enough salience that copy and proof remain the variable;
- relevant to field-crop farming;
- clear source, rights and provenance recorded;
- no farmer-with-tablet cliché.

After adding it, re-check that H1/H2/H3 still get equal visual weight.

**Neutral scaffold and C.** The scaffold is deliberately unlike A (warm editorial canvas, documentary photography as hero) and B (photography with field geometry and overlays). It **does share part of C's grammar**. Blueprint §19 lists C as including "graphite/dark or highly neutral product-like surfaces", "strong tabular numeric hierarchy", "compact metric clusters", "economic states and comparisons" and "explicit evidence/confidence". The scaffold uses a highly neutral surface, tabular numbers and explicit evidence/confidence, though it has no metric clusters or dense UI.

C's category-confusion risk is accounting/ERP/finance. That is also H1's own kill signal. So if `ACC`/`FIN` misreadings recur in **all three** directions, treat them first as a scaffold signal (§12), not as evidence against one message. Art direction is tested separately in WWW-001/002.

**D4 implication.** A coded Field Profitability UI exists only in the unmerged branch (§4.4). It is **not** used as a higher-fidelity H3 proof object in Round 1, because that would break equal-fidelity message isolation. The neutral proof card stays for all three.

**Known by-products (not message differences).**
- Equal card size by construction leaves unequal empty space inside the card.
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

The H1 support and H3 headline say "margin". The proof cards use the D4 metric names (§4.3). The copy is deliberately left verbatim, because it is what is being tested. How participants read the copy is captured in Phase B (§8).

### 4.2 Proof-card body per direction

| | Blueprint §5 proof-object definition | Stimulus body |
|---|---|---|
| H1 | a small number of contrasting field economics with provenance/illustrative labeling | "Three fields, one farm": OPERATING PROFIT per ha for Field 24, Field 12, Field 31 |
| H2 | farm data → economic interpretation → decision, one concrete metric/question | Field 31: FARM DATA (yield, operating costs) ↓ ECONOMIC INTERPRETATION (revenue, operating profit) ↓ the shared decision question |
| H3 | real Field Profitability UI when available; otherwise field-level economics, source context, `Confidence: Not assessed` | Field 31: yield, revenue, operating costs, operating profit. Neutral card, not the branch UI (§3, D4 implication). |

Label convention, identical in all three: the metric name is the label and the per-hectare unit is on every value. So no per-hectare figure can be read as a field total at a 10-second glance.

The H3 headline promises "what drives it". The stimulus shows only the parts that make up operating profit. It does not show causal drivers, because nothing establishes a causal claim, and the D4 reference provides no driver/causal analysis (§4.4).

### 4.3 Shared scenario — HYPOTHETICAL EXAMPLE

| Field | Crop | Area | Yield | Revenue | Operating costs | Operating profit |
|---|---|---|---|---|---|---|
| Field 24 | Wheat | 41.7 ha | — | — | — | €637/ha |
| Field 12 | Wheat | 23.0 ha | — | — | — | €148/ha |
| Field 31 | Barley | 18.4 ha | 4.1 t/ha | €738/ha | €834/ha | −€96/ha |

- Metric semantics follow the D4 reference (§4.4). Revenue = area × yield × price (shown per ha). Operating costs = variable + allocated fixed costs. Operating profit = revenue − operating costs. Operating profit is **not** gross margin (revenue − variable costs) and **not** statutory net profit.
- Evidence: **HYPOTHETICAL EXAMPLE** · Confidence: **Not assessed**
- Decision question: **What would you investigate on Field 31 before changing the plan?** A question, not a recommendation; adapted from `docs/experiments/field-economics-motion-test-v1.md`.
- Source line: **Illustrative source: farmer-provided field records · one season**. This uses the Blueprint §8 provenance category "Farmer-provided", matching user-entered inputs in the D4 reference. It implies no machinery or other integrations, and it is labelled illustrative because the numbers come from no records.
- Provenance of the numbers:
  - Field 24's value reuses the motion-protocol scenario figure; that protocol labels it "Margin".
  - The rest are AI-drafted placeholders, chosen only to be internally consistent: €738/ha at 4.1 t/ha implies about €180/t barley.
  - They are **not** regional facts, customer data or PROFIT outputs, and they need D6 review.
- Values that appear more than once must be edited together: `Field 31 · Barley · 18.4 ha` and `−€96/ha` (H1/H2/H3); `4.1 t/ha`, `€738/ha` and `€834/ha` (H2/H3).

### 4.4 D4 product-truth reference (experimental, unmerged, unshipped)

**Source.** `MykolaDotsenko/PROFIT`, branch `feat/field-profitability`, HEAD `7d07345ee077bb01e755ae89fcceebca18e1f3d8`. PR #1 is titled "Field Profitability v1 — production-ready vertical slice"; the title is quoted, not endorsed. It was **closed without merge**.

The PR itself lists environment gates that remained open: fresh Supabase setup, migration/security verification, browser E2E and deployment.

This session could not read the branch directly. The read-only clone was denied by the session permission policy, and the GitHub tools do not cover that repository. The content below is the PROFIT team's verified summary of 2026-09-26.

**Status boundary.** This is an *implemented, unmerged vertical slice*. It is **not** shipped, production-verified or public proof. Use it only to check that WWW-000 stimuli do not promise more than has been designed or implemented.

| Area | Reference content |
|---|---|
| Inputs | organization; field; crop; season; currency; area (ha); yield (t/ha); price/t; itemised costs |
| Cost types | variable; allocated fixed |
| Calculations | revenue = area × yield × price; variable costs; allocated fixed costs; operating costs = variable + allocated fixed; gross margin = revenue − variable costs; operating profit = revenue − operating costs; operating margin % = operating profit / revenue × 100; ROI on allocated cost %; revenue/ha; cost/ha; operating profit/ha; break-even price; break-even yield |
| Semantic caveat | "Operating profit" is deliberately not statutory net profit. Unallocated whole-farm overhead, financing, tax and owner-specific accounting items are excluded unless explicitly allocated to the field. |
| UI (branch only) | field-profitability input; live deterministic preview; saved snapshots/history; economic metrics; optional AI explanation |
| AI role | explains the supplied deterministic metrics; does **not** calculate the financial results |
| Explicit v1 exclusions | whole-farm P&L; tax; financing; depreciation policy; inventory accounting; GIS; scenario optimisation; external telemetry; ERP integrations; asynchronous event infrastructure |

**Product-truth check of the stimulus against the reference**

| Element (direction) | Reference | Assessment |
|---|---|---|
| Proof metrics: yield, revenue, operating costs, operating profit per ha (all) | all defined | **CONSISTENT** now that "margin" labels are corrected |
| "Operating profit" in every proof card (all) | not statutory net profit; excludes unallocated overhead, financing, tax | **RISK** — may be read as net or whole-farm profit; captured as OP-READING |
| "margin" in the H1 support and H3 headline | gross margin, operating profit and operating margin % are separate metrics | **RISK** — may be read differently from the defined economics; captured as MARGIN-READING |
| "what drives it" (H3) | decomposition (revenue; variable/allocated/itemised costs), break-even price/yield, AI explanation of metrics; no driver/causal analysis | **RISK** — may imply causal/driver analysis beyond the slice; captured as DRIVES-READING and CAUSAL |
| "with assumptions and confidence visible when they are assessed" (H3 support) | no confidence or assumption display is listed | **UNVERIFIED** — a possible unsupported capability claim in the tested copy; open question PT-1 |
| three-field comparison (H1 proof object) | per-field input, preview and snapshots/history; a multi-field comparison view is not listed | **UNVERIFIED** — open question PT-2 |
| "your farm makes money", whole-farm framing (H1) | field-level only; whole-farm P&L excluded | **RISK** — matches H1's kill signal "wording implies whole-farm coverage beyond the actual wedge" |
| "field operations" (H1), "operations" (H3), "farm data" / "what happens on the farm" (H2) | manually entered inputs; external telemetry and ERP integrations excluded | **RISK** — may imply automatic operational/telemetry data or integrations; captured as PRECISION-SCOPE |
| "Agricultural Decision Intelligence", "more profitable decisions" (H2) | deterministic metrics and break-evens; scenario optimisation excluded; AI does not calculate | **RISK** — may imply recommendations/optimisation or AI-computed results; captured as AIC/PRECISION-SCOPE/PROMISE |
| "what to investigate next" (H1 support) | no recommendation feature; the farmer's own reading of the metrics, with optional AI explanation | **RISK (low)** — may imply that PROFIT recommends what to investigate |
| Source line, decision question (all) | user-entered inputs incl. season; no recommendations | **CONSISTENT** |

**Open product-truth questions** (product owner, before freeze):
- **PT-1.** Does the reference show assumptions and/or confidence anywhere?
  - If not, the H3 support line claims a capability that is not built.
  - A human then decides: test the Blueprint copy as-is, recorded as an unbuilt-capability claim; or rewrite H3 before Round 1, which is a Blueprint change.
  - This falls under D2's evidence-integrity exception.
- **PT-2.** Does the reference support viewing several fields' operating profit/ha side by side?
  - If not, the H1 proof object implies a capability the slice lacks.
  - A human then decides whether it stays as the Blueprint H1 proof object for Round 1.

## 5. Participants

Target: **9–12 farm decision-makers relevant to the current field/crop profitability wedge** (Blueprint §17). 12 is preferred because it completes the counterbalancing in §6.

Include people who decide on field operations, inputs or crop economics, such as an owner, manager or partner.

Exclude, or analyse separately:
- investors, advisors to PROFIT, PROFIT staff or friends;
- anyone who has already seen PROFIT positioning, decks, prototypes or the Field Profitability branch.

Determine each participant's segment at screening, **before** assigning an order. Record for segmentation: role, farm type and main crops, approximate farmed area, country/region, digital tools used for farm economics, and whether they currently compare costs or margins by field.

If the recruited farmers form materially different segments, counterbalance and analyse each segment separately. Do not average them (Blueprint §17).

Recruitment and scheduling messages must not describe PROFIT's product or use any direction's wording. For example, say "a 40-minute website first-impression study for farmers". Do not mention field economics, profitability, decision intelligence, margins or operating profit.

## 6. Assignment (counterbalancing)

Assign orders in booking order within each segment, using a separate P-sequence per segment, decided before the first session. Do not reassign on the day. If a participant drops out, the replacement takes the same order. If segments only become clear after sessions, do not reassign; report the resulting imbalance.

The assigned order is used in **both** Phase A and Phase B.

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
  - <kbd>Space</kbd> shows it for exactly 10 s (D3), then hides it — **Phase A**;
  - <kbd>B</kbd> shows or hides it without a timer — **Phase B**: press the direction's number, then <kbd>B</kbd>.
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

### Phase A — independent short exposure + recall (all three directions first)

For each direction, in the assigned order:

1. Load it behind the hidden screen. Before the 2nd and 3rd directions say (verbatim; protocol wording):
   > "Now I'll show you another version of the first screen, again for a few seconds. Please look at it the way you normally would."
2. Say "Ready?" and press <kbd>Space</kbd>. The stimulus shows for 10 s, then hides.
3. **Open recall only** (Blueprint §17, verbatim). Ask with the screen hidden, before any explanation:
   1. What do you think PROFIT does?
   2. Who do you think it is for?
   3. What farm problem do you think it helps with?
   4. What economic result/question do you think you would see?
   5. What would you expect to click or do next?

No credibility, data, margin or guaranteed-profit questions, and no comparison, until Phase A is complete for all three.

### Phase B — second viewing + probes (same assigned order)

Say (verbatim; protocol wording):
> "Now I'll show you each version again, and this time you can take as long as you like."

For each direction, show it again untimed (its number key, then <kbd>B</kbd>) and ask, in this order. The leading probe comes last.
- a. What is the panel with numbers showing you? *(added — K5; no explanation given)*
- b. What part is unclear? *(Blueprint)*
- c. What sounds least credible? *(Blueprint)*
- d. What data would you expect PROFIT to need? *(Blueprint)*
- e. What do you think "operating profit" in the panel includes? *(added — OP-READING; all three)*
  - H1 and H3 only, where the copy says "margin": What do you think "margin" means here? *(added — MARGIN-READING)*
  - H3 only: What do you think "what drives it" means — what would PROFIT show you? *(added — DRIVES-READING)*
- f. Does anything sound like a promise of guaranteed profit? *(Blueprint; leading, so ask it last)*

After the first direction's Phase B probes only (once per participant):
- Where do you think these numbers come from? *(added)*
- What do you think happens after "Join the pilot"? *(added)*
- What would stop you from joining a pilot? *(Blueprint)*

The margin and drives questions are asked only where the copy uses those words. That asymmetry follows from the copy and is intended.

### Phase C — comparison (only after Phases A and B)

All protocol additions; not "which do you like?" as the primary question:
- Which version makes it clearest what PROFIT would do for a farm like yours? Why?
- Which version would you trust least? Why?
- Does any version promise more than you believe? Which words?
- If you could keep one sentence from any version, which one, and why? *(secondary: rewrite input only)*

**Debrief (verbatim; protocol wording):**
> "Thank you. Before we finish: all the numbers you saw were invented examples, not results from any real farm or customer. The versions were wording tests, and none of them is final. Do you have any questions?"

Do not pitch PROFIT in the debrief. If asked about the pilot, give only the team's standard information.

The recall and probe questions marked *Blueprint* are Blueprint §17 wording. Everything marked *added* or *protocol wording* is an addition. The additions make Blueprint §17's "Record" items observable: proof-object comprehension, data expectations, CTA comprehension, product-truth readings, and reading illustrative numbers as real.

**Why three phases.** Phase A recall for all three directions happens before any probe, so no credibility, data or guaranteed-profit question can prime it. What remains is carry-over from exposure to exposure. It is handled by counterbalancing and by reporting first-position recall separately (§11).

## 9. Recording sheet

The repository is **public**. Keep participant sheets, notes and recordings **outside the repository** and use participant IDs only. The committed results file (§13) uses segment-level descriptors only, never a per-participant combination of role, crops, area and region. It includes verbatims only if they are anonymized, consented and stripped of identifying details. Personal data is never committed.

```text
Participant: P__   Segment: ____   Date: ____   Mode: in person / remote
Moderator: ____   Note-taker: ____   Stimulus commit: ____   Exposure: 10 s (timed / manual)
Order (Phases A and B): H_ → H_ → H_
Role: ____   Farm type / main crops: ____   Approx. area: ____   Country/region: ____
Tools for farm economics: none / spreadsheet / farm software / advisor / other: ____
Compares costs or margins by field today: yes / sometimes / no
Prior exposure to PROFIT: none / yes (→ analyse separately)

PHASE A — position _ of 3 — H_   (position 1 = first-position recall)
 Recall (verbatim)  1 does: ____  2 for: ____  3 problem: ____  4 economic result: ____  5 next: ____

PHASE B — H_
 a panel: ____  b unclear: ____  c least credible: ____  d data: ____
 e operating profit: ____   margin (H1/H3): ____   what drives it (H3): ____
 f guaranteed profit: ____
 First Phase-B direction only: numbers from: ____  after "Join the pilot": ____  pilot barriers: ____

CODES per direction (§10): JOB-CONCRETE P/PA/F  JOB-INTENDED Y/N  AUDIENCE Y/N  MECHANISM Y/P/N
  ECON-RESULT Y/N  NEXT-ACTION Y/N  CATEGORY-WITHOUT-JOB Y/N  MISCLASS: ____
  PROMISE spontaneous / prompted-only / none  PRECISION-SCOPE Y/N  CAUSAL Y/N
  OP-READING FIELD-OP / NET / GM / UNC  MARGIN-READING (H1/H3) GM / OP / NET / REV / UNC
  DRIVES-READING (H3) COMP / CAUSE / REC / UNC
  PROOF-UNAIDED Y/P/N  NUMBERS-READ-AS-REAL Y/N  LABEL-ECHO Y/N  UNCLEAR WORDS: ____

PHASE C (verbatim): clearest: ____  least trusted: ____  over-promise: ____  keep sentence: ____
```

## 10. Coding rubric

Two people should code the answers independently where possible, then settle disagreements. Code from verbatims, not from the moderator's impression. Codes from Phase A recall and from Phase B probes are kept separately.

| Code | Definition |
|---|---|
| JOB-CONCRETE | Coded from **Phase A** recall. **PASS (P):** names a concrete economic job for a farm, e.g. "shows which fields make or lose money", "works out profit per hectare by field", "shows where costs eat the profit". **PARTIAL (PA):** farm plus generic data/decisions/profit with no concrete job, e.g. "farm data software", "helps farmers decide better". **FAIL (F):** no farm-economic job, or a misclassification. For K1, PA and F both count as "cannot state a concrete farmer-economic job"; report them separately. |
| JOB-INTENDED | Coded from Phase A. Matches this direction's intended job. H1: where the farm/fields make or lose money and what to investigate. H2: what farm data means economically, for a decision. H3: margin/profitability per field and what makes it up. |
| AUDIENCE | Says it is for farms/farmers. |
| MECHANISM | Connects farm data/operations to economic meaning (Y / partial / N). |
| ECON-RESULT | Recalls an economic result or question, e.g. profit per hectare, €/ha, a weak field. |
| NEXT-ACTION | Names a plausible next step (join the pilot, see how it works, investigate a field). |
| CATEGORY-WITHOUT-JOB | Recalls category/technology words (e.g. "decision intelligence", "AI", "data") but not the job (K4). |
| MISCLASS | `ACC` accounting/bookkeeping/tax · `LAND` land valuation/real estate · `AIC` generic AI/data consultancy or platform · `MKT` marketplace/trading/input buying · `AGRO` agronomy advice/satellite/mapping · `FIN` loans/insurance/banking · `REP` consulting/reporting service · `OTH` other (describe). If `ACC`/`FIN` recur across all three directions, check for a scaffold signal first (§3). |
| PROMISE | Reads it as guaranteed higher profit, savings or verified results. **Spontaneous** if it appears in Phase A recall (any direction) or in Phase B before the participant's first probe f; **prompted-only** otherwise. Spontaneous is stronger evidence. |
| PRECISION-SCOPE | Expects precision, automation, integrations or coverage the D4 reference (§4.4) does not support. Examples: "it pulls data from my machinery", "it does my whole-farm accounts", "it covers tax", "it optimises my plan". |
| CAUSAL | Expects PROFIT to establish why, e.g. "it tells me why the field loses money". The D4 reference provides no causal/driver analysis. This is an evidence-integrity risk, especially for H3's "what drives it". |
| OP-READING | What "operating profit" in the panel is taken to include. `FIELD-OP`: a field-level result after the field's costs, consistent with D4. `NET`: final/net or whole-farm profit, after tax/financing/everything. `GM`: gross margin. `UNC`: unclear. |
| MARGIN-READING | H1/H3 only: what "margin" in the copy is taken to mean. `GM` gross margin · `OP` operating profit · `NET` net/whole-farm profit · `REV` revenue · `UNC` unclear. Compare with D4: separate gross margin, operating profit and operating margin %. |
| DRIVES-READING | H3 only: what "what drives it" is taken to mean. `COMP`: what the result is made of (costs, revenue); supported by D4. `CAUSE`: why it happened, e.g. weather, soil, practices; not supported. `REC`: what to change or optimise; not supported. `UNC`: unclear. |
| PROOF-UNAIDED | Probe a is answered correctly without explanation: a field-level economic result derived from farm information. Y / partial / N (K5). |
| NUMBERS-READ-AS-REAL | Believes the numbers are real customer, farm or verified results despite `HYPOTHETICAL EXAMPLE` and the illustrative source line. This is a **scaffold** signal: if it repeats, fix the labelling for all three directions and do not blame one message. |
| LABEL-ECHO | The answer to "Where do you think these numbers come from?" only repeats the source label. Code it separately so it is not mistaken for comprehension. |

## 11. Hero kill criteria (Blueprint §17)

These are directional qualitative gates, not statistical proof. Blueprint §17 sets the counting rules:
- **Count** each criterion across all participants who evaluated that direction (D1).
- Keep and report **first-position recall** (Phase A, position 1) separately as the least-contaminated signal.
- **Repeated pattern** = 3 or more independent participants. **2 = CONCERN**, not an automatic kill (D2).
- **Evidence-integrity exception:** a single case that shows a false or unsupported claim is corrected regardless of count (D2). Examples: numbers read as verified results because of a label, or an implied integration or causal analysis.

Use one of: TRIGGERED / CONCERN / NOT TRIGGERED / N/A. Fill in each cell as "all-participant count (first-position count)".

| # | Criterion (Blueprint wording) | H1 | H2 | H3 |
|---|---|---|---|---|
| K1 | roughly one-third or more of the first-round cohort cannot state a concrete farmer-economic job after the short exposure | | | |
| K2 | three or more participants independently make the same material misclassification (for example bookkeeping, land valuation, generic AI consultancy, marketplace) | | | |
| K3 | participants repeatedly interpret the copy as a guarantee of higher profit or verified savings | | | |
| K4 | the category/technology wording is remembered, but the product job is not | | | |
| K5 | the proof object needs verbal explanation to connect farm reality with economic meaning | | | |
| K6 | the direction implies precision/data coverage that the current product cannot support (judged against the D4 reference, §4.4) | | | |
| K7 | the CTA or next step is materially unclear | | | |
| K8 | the hero only works when animation is enabled | N/A — no motion | N/A | N/A |
| K9 | mobile requires removing the product/economic proof to fit the composition | N/A — shared scaffold keeps the proof card on mobile (§7) | N/A | N/A |

For K6, read "current product" as the D4 reference: an unmerged, unshipped vertical slice. Anything beyond it also exceeds shipped capability.

Variant-specific kill signals (Blueprint §17):

- **H1:** repeated classification as accounting/bookkeeping; wording implies whole-farm coverage beyond the actual wedge; negative "made/lost" framing reduces trust or willingness to continue.
- **H2:** farmers paraphrase it only as generic "AI/data for better decisions"; `Agricultural Decision Intelligence` creates confusion or adds no useful meaning; "more profitable decisions" is interpreted as a promised financial outcome.
- **H3:** target farmers do not care enough about field-level margin to make it a first-screen job; "margin by field" implies unsupported precision or unavailable data; the product proof is not mature/credible enough to substantiate the headline (judged against the D4 reference, which is unmerged and unshipped).

A TRIGGERED or CONCERN status follows the all-participant count. If first-position recall diverges materially from it, state the divergence explicitly in the decision rationale (§12). The divergence does not override the approved count.

## 12. Decision rules

For each direction, decide **ADVANCE / REWRITE / KILL / NEEDS EVIDENCE**, citing evidence rather than taste.

- **ADVANCE** only when "most participants can independently paraphrase the intended farmer-economic job, no recurring trust failure appears, and the next action is understood" (Blueprint §17).
- **REWRITE** when the job lands but specific words fail, e.g. a promise, precision or product-truth reading. A rewrite is a **new hypothesis**. Test it again, at least in a small check, before it counts as surviving.
- **H3 product-truth rule.** If MARGIN-READING or DRIVES-READING mismatches against the D4 reference form a repeated pattern (≥3 independent participants), H3 is **REWRITE and retest**. Do not rationalise the wording after the fact. The same readings for H1's "margin" count as a wording failure under the general REWRITE rule.
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
Cohort: n = __, segments: ____, first positions per direction: H1 __ / H2 __ / H3 __
Decisions: D1–D3 approved 2026-09-26; D4 reference: feat/field-profitability @ 7d07345 (unmerged, unshipped);
  PT-1: ____; PT-2: ____; D5 locale: ____; D6 reviewer/date: ____; D7 process: ____; D8 asset + provenance: ____
Stimulus commit: ____   Exposure: 10 s (timed / manual sessions: __)

H1 — evidence: ____   failure patterns: ____   kill table (all / first-position): ____   decision: ADVANCE / REWRITE / KILL / NEEDS EVIDENCE
H2 — evidence: ____   failure patterns: ____   kill table (all / first-position): ____   decision: ...
H3 — evidence: ____   failure patterns: ____   kill table (all / first-position): ____   decision: ...

Product-truth readings (OP / MARGIN / DRIVES / CAUSAL / PRECISION-SCOPE) vs D4: ____
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
- the D4 reference changes (merged, shipped, redefined metrics), or PT-1/PT-2 contradict what the copy or proof cards imply;
- the D8 image is added. Then re-verify that it is identical across all three and that equal visual weight, card size, layout and first-viewport content still hold;
- the Blueprint's hero candidates, CTA or evidence semantics change before the round is run.
