# WWW-000S — Statistical Surrogate Validation v1

Status: **Surrogate validation — does not replace farmer evidence**  
Date: 2026-09-27  
Purpose: reduce plausibility/claim risk while direct farmer access is unavailable.

## Decision

Use official Finnish agricultural statistics to calibrate the illustrative Field Profitability scenario and run a structured proxy audit of message risk.

This work may:
- replace arbitrary placeholder numbers with statistics-calibrated synthetic values;
- remove implausible or sensational example values;
- detect product-truth, terminology and evidence-integrity problems;
- improve the website before farmer research becomes possible.

It may **not**:
- close WWW-000;
- prove farmer comprehension;
- select a hero winner;
- produce a customer-value or VEV claim;
- promote synthetic data to Observed/Attributed/Verified.

Evidence state remains:
**Hypothetical · Confidence: Not assessed**

---

# 1. Official reference data

## 1.1 2025 Finnish wheat production

Sources:
- Luke, Crop production 2025 (final): https://www.luke.fi/en/statistics/crop-production-statistics/crop-production-2025
- Luke, Utilised Agricultural Area 2025: https://www.luke.fi/en/statistics/utilised-agricultural-area/utilised-agricultural-area-2025
- Luke Statistics database, regional crop production.

Final 2025 national values used for calibration:

- spring wheat production: **603.1 million kg**
- spring wheat cultivated area: **161,800 ha**
- implied national spring-wheat yield: **~3.73 t/ha**
- winter wheat production: **372.2 million kg**
- winter wheat cultivated area: **73,000 ha**
- implied national winter-wheat yield: **~5.10 t/ha**

The implied yields are derived calculations from official production and area totals. They are not farm-level benchmarks.

## 1.2 2025 producer price

Source:
Luke, Producer Prices of Agricultural and Horticultural Products 2025:
https://www.luke.fi/en/statistics/producer-prices-of-agricultural-and-horticultural-products/producer-prices-of-agricultural-and-horticultural-products-2025

2025 quality-adjusted bread-wheat producer price:
**€207/t**

Luke states that cereal producer prices represent prices received by farmers, excluding VAT, with quality-adjusted prices reflecting quality differences.

This is a national annual price statistic. It is not a contract price for any specific farm or field.

## 1.3 Broad cereal-farm cost scale

Source:
Luke EconomyDoctor, Cereal Farms, 2024 profitability-bookkeeping results:
https://taloustohtori.luke.fi/en/agriculture-and-horticulture/timeline/income-statement/cereal-farms/

2024 values:
- farms represented: **8,750**
- average arable land: **86.0 ha**
- variable costs: **€42,200/farm**
- fixed costs: **€29,600/farm**

Derived broad scale:
- variable costs: **~€491/ha**
- fixed costs: **~€344/ha**
- combined variable + fixed cost scale: **~€835/ha**

Important limitation:
Luke's accounting categories are **not declared equivalent** to PROFIT's Field Profitability `variable costs + allocated fixed costs` semantics. The derived €835/ha is used only as a plausibility anchor for a synthetic test scenario.

Do not publish it as a Field Profitability benchmark.

## 1.4 Profitability context

Luke EconomyDoctor reports weak recent profitability for cereal/oilseed/protein-crop farms:
- profitability ratio 2023: **−0.29**
- 2024: **−0.06**
- 2025 estimate remains weak/negative in the current partially complete estimate.

This supports avoiding an overly optimistic default cereal example.

It does not imply that every field is loss-making or that field-level operating profit equals whole-farm profitability.

---

# 2. Calibrated synthetic scenario

Design goal:
three fields with visibly different economics, without using extreme values.

All values remain invented field records.

## Field 24 — positive

- crop: Winter wheat
- area: 41.7 ha
- synthetic yield: **5.1 t/ha**
- synthetic price: **€207/t**
- synthetic operating-cost scale: **€835/ha**
- synthetic revenue: **€1,056/ha**
- synthetic operating profit: **+€221/ha**

Calibration:
- yield approximately matches the derived 2025 national winter-wheat yield;
- price uses the 2025 national quality-adjusted bread-wheat producer price;
- cost scale is near the derived 2024 cereal-farm variable+fixed €/ha scale.

## Field 12 — modest positive

- crop: Spring wheat
- area: 23.0 ha
- synthetic operating profit: **+€49/ha**

Supporting synthetic interpretation:
- yield around **4.1 t/ha**, above the derived 2025 national spring-wheat average but not extreme;
- revenue at €207/t ≈ **€849/ha**;
- synthetic field costs ≈ **€800/ha**.

The supporting inputs do not need to appear publicly unless the test requires them.

## Field 31 — modest negative / focus field

- crop: Spring wheat
- area: 18.4 ha
- yield: **3.7 t/ha**
- price: **€207/t**
- variable costs: **€490/ha**
- allocated fixed costs: **€345/ha**
- revenue: **€766/ha**
- operating costs: **€835/ha**
- operating profit: **−€69/ha**

Calibration:
- 3.7 t/ha is approximately the derived 2025 national spring-wheat yield;
- €207/t is the 2025 official bread-wheat price statistic;
- €835/ha matches the broad 2024 cereal-farm variable+fixed cost scale to within rounding.

Again, the split `€490 variable + €345 allocated fixed` is a **synthetic mapping for the Field Profitability formula**, not a claim that Luke's categories map directly to those product fields.

---

# 3. Why the old scenario was changed

Old positive anchor:
**€637/ha**

Problem:
- it was an arbitrary placeholder;
- it was reused in the motion prototype with the ambiguous label **Margin**;
- it risked making a Finnish cereal example look unusually optimistic;
- it created more visual drama than evidence quality justified.

Decision:
replace it with the more conservative statistics-calibrated **€221/ha operating profit** example.

Old focus field:
- Barley
- 4.1 t/ha
- €180/t
- €834/ha costs
- −€96/ha operating profit

Assessment:
the cost and yield scales were broadly plausible, but the €180/t price was not directly tied in the repository to a cited official annual statistic.

Decision:
use spring wheat so yield, price and broad cost scale can all be traced to current Finnish official references.

---

# 4. Message surrogate audit

This is a structured expert/heuristic audit, not participant evidence.

## H1 — Economic visibility

"See which fields make money — and which don't."

Strength:
- fastest economic job to parse;
- proof object directly supports positive/negative field comparison.

Residual risk:
- "make money" can be read as statutory/net profit rather than operating profit.

Surrogate disposition:
**KEEP FOR WWW-000. Watch OP-READING.**

## H2 — Decision intelligence

"Connect field data to the economics behind your decisions."

Strength:
- closest to long-term company logic;
- preserves decision framing.

Residual risks:
- "Agricultural Decision Intelligence" may be jargon;
- category can dominate the concrete farmer job;
- "allocated-cost data" is less plain than H1/H3.

Surrogate disposition:
**KEEP FOR WWW-000. Highest jargon/misclassification risk.**

## H3 — Product proof

"See operating profit by field — and what goes into it."

Strength:
- strongest semantic alignment with current Field Profitability truth;
- easiest to reconcile with explicit formula.

Residual risk:
- more technical;
- "operating profit" may still be interpreted as statutory/net profit.

Surrogate disposition:
**KEEP FOR WWW-000. Strongest product-truth precision, not proven comprehension winner.**

No hero winner is selected by this surrogate audit.

---

# 5. What statistics can and cannot substitute

## Statistics can substitute for

- placeholder plausibility;
- broad price/yield/cost ranges;
- market/domain context;
- avoiding obviously unrealistic examples;
- stress-testing sensitivity;
- creating synthetic datasets for UI/QA;
- checking whether copy contradicts known economic structure.

## Statistics cannot substitute for

- 10-second comprehension;
- category interpretation;
- emotional trust;
- language nuance;
- whether "operating profit" means the intended thing to a farmer;
- whether a farmer sees the CTA as relevant;
- whether the design feels generic, credible or patronising;
- actual VEV.

---

## 5.1 Deterministic sensitivity stress check

To avoid designing around one visually convenient result, the calibrated Field 31 base case is also exercised through a deterministic sensitivity set.

This is **not forecasting**. It changes yield and/or price mechanically while holding the synthetic operating-cost structure constant.

| Scenario | Yield | Price | Operating costs | Operating profit |
|---|---:|---:|---:|---:|
| Downside | 3.33 t/ha | €186.30/t | €835/ha | −€214.62/ha |
| Base | 3.70 t/ha | €207.00/t | €835/ha | −€69.10/ha |
| Price +10% | 3.70 t/ha | €227.70/t | €835/ha | +€7.49/ha |
| Yield +10% | 4.07 t/ha | €207.00/t | €835/ha | +€7.49/ha |
| Yield +10% · Price +10% | 4.07 t/ha | €227.70/t | €835/ha | +€91.74/ha |

At the base synthetic cost structure:
- break-even price ≈ **€225.68/t**;
- break-even yield ≈ **4.03 t/ha**.

Purpose:
- verify formula behavior across negative / near-zero / positive states;
- ensure the website and future art directions work under bad-news as well as good-news economics;
- prevent a visually attractive positive result from becoming the implicit product story;
- make the difference between deterministic sensitivity and forecasting inspectable.

Limitations:
- costs are deliberately held constant;
- no agronomic response is modelled;
- no weather, market, biological or causal model is used;
- these scenarios are not recommendations, probabilities or forecasts;
- all values remain Hypothetical with Confidence: Not assessed.

Implementation:
- `src/content/examples/field-sensitivity.ts`;
- public trust illustration: `/trust/#stress-check`;
- domain/browser regressions protect the arithmetic and non-forecast framing.

---

# 6. Development use

Until farmer access becomes possible:

1. use the calibrated synthetic scenario in homepage proof objects and WWW-000 stimulus;
2. label it **Hypothetical example**;
3. describe its provenance as **statistics-calibrated synthetic field records**;
4. keep Confidence as **Not assessed**;
5. use official statistics only as calibration/reference, not as claims about a specific field;
6. use sensitivity tests to ensure UI works for positive, near-zero and negative economics;
7. keep H1/H2/H3 as hypotheses;
8. reopen human WWW-000 when farmer access becomes possible.

---

# 7. Reconsider if

Update the scenario when:
- newer final Finnish annual statistics materially change reference ranges;
- a domain expert identifies semantic mismatch;
- actual pilot data becomes available under agreed terms;
- Market A changes;
- Field Profitability metric definitions change.

Human evidence outranks this surrogate validation.
