# Whole-Farm Scope, Data Collection & Forecasting Evidence Note

Date: 2026-09-27  
Status: Supporting evidence. Canonical product/website decisions remain in `docs/website-blueprint-v1.md` and `docs/website-strategy.md`.

## Decision supported

PROFIT should be presented as a master brand for agricultural decision economics across:

- arable / field crops;
- horticulture, orchards and berries;
- vegetables and greenhouse / protected cultivation;
- pig production;
- dairy;
- beef / grazing livestock;
- poultry / eggs;
- other livestock and mixed farms.

This is **company/product direction**, not a statement that every domain is a shipped product.

Field Profitability remains the current first concrete product focus.

---

## Evidence pass

### FACT — EU agriculture is economically broad across crop and animal systems

Eurostat's 2025 food-chain publication reports EU agricultural output of **€531.9 billion in 2024** at basic prices:

- crop output: **€267.7B**;
- animals and animal products: **€218.8B**;
- agricultural services and secondary activities: **€45.4B**.

Largest individual output categories included:

- milk: **€78.6B**;
- vegetables and horticultural products: **€72.0B**;
- cereals: **€48.9B**;
- pigs: **€46.8B**;
- fruits: **€39.5B**;
- cattle: **€38.4B**.

These are gross output values, **not profit**, TAM, revenue available to PROFIT, or verified customer value.

Primary source:
- Eurostat, *Key figures on the European food chain — 2025 edition*: https://ec.europa.eu/eurostat/en/web/products-key-figures/w/ks-01-25-049
- Dataset referenced by Eurostat: `aact_eaa01`.

### INFERENCE

A crop-only master-brand presentation would misrepresent the breadth of the agricultural production economy PROFIT intends to serve.

The visual/product system must therefore distinguish:
- master-brand invariants;
- domain-specific production structures and units.

---

## Data collection

### FACT — advanced farm-management digitisation is not universal

Eurostat reports for 2023:

- about **11% of EU farms** used a farm management information system;
- around **18% of farms with utilised agricultural area** used some precision-farming technology or practice.

Source:
- Eurostat, *43% of EU farms with internet access*, 24 July 2026: https://ec.europa.eu/eurostat/en/web/products-eurostat-news/w/ddn-20260724-1
- Dataset: `ef_mp_digi`.

### FACT — rural connectivity can interrupt connected workflows

A 2026 European Commission study of future connectivity needs for precision farming combined an EU-wide survey of **147 stakeholders** with interviews. More than one third of respondents rated current coverage poor or very poor. The study concludes that future digital agriculture needs solutions capable of operating offline and synchronising when connectivity becomes available.

Source:
- European Commission, *Assessment of future connectivity needs for precision farming adoption*, 24 July 2026: https://digital-strategy.ec.europa.eu/en/library/assessment-future-connectivity-needs-precision-farming-adoption

### PRODUCT DECISION

Preferred data-collection ladder:

1. reuse existing production/economic records;
2. automate machine/sensor/positioning/external data where reliable and useful;
3. support old/non-connected machinery with minimum operator input and contextual capture where appropriate;
4. design offline-first where farm operations can lose connectivity;
5. preserve provenance and farmer permission;
6. distinguish recorded, inferred and modelled data.

### KILL / RECONSIDER IF

Reconsider this approach if field tests show:
- operator confirmation remains too burdensome;
- inferred activity is materially unreliable;
- offline complexity adds maintenance cost without solving a real workflow problem;
- a simpler source integration covers the target cohort better.

---

## Forecasting and profit prediction

### FACT — crop-yield literature does not imply one universal best model

A 2025 systematic review selected **97 crop-yield prediction papers** from research published between 2017 and 2024. Among the most-applied ML methods were:
- Linear Regression;
- Random Forest;
- Gradient Boosting Trees.

Common evaluation metrics included RMSE, R² and MAE.

Source:
- Smart Agricultural Technology 10 (2025), 100718: https://doi.org/10.1016/j.atech.2024.100718

### FACT — data volume affects appropriate model complexity in tree crops

A 2024 systematic review of remote sensing + ML for tree-crop yield reports that studies with limited training data often use simpler methods such as linear regression, while larger datasets more often justify more complex models including ensembles and deep learning.

Source:
- Smart Agricultural Technology 9 (2024), 100556: https://doi.org/10.1016/j.atech.2024.100556

### INFERENCE

Model choice should follow:
- data quality;
- sample size;
- domain;
- target;
- forecast horizon;
- out-of-sample performance;
- calibration;
- operational reliability.

Algorithm novelty is not a product objective.

### PRODUCT DECISION

Preferred PROFIT forecasting architecture:

**deterministic economics → forecast uncertain drivers → scenario comparison → decision → actual outcome → attribution/confidence → VEV**

Rules:

1. deterministic definitions/formulas remain the source of truth for known arithmetic;
2. LLMs do not calculate or forecast critical quantitative truth;
3. begin with naive/historical/statistical baselines;
4. add Random Forest / Gradient Boosting / other models only when out-of-sample evidence warrants them;
5. forecast uncertain domain drivers separately where practical rather than hiding all uncertainty in one black-box profit number;
6. compare alternatives against current practice / do-nothing counterfactual;
7. show prediction range, assumptions, update date and confidence;
8. validate through future periods and independent farms/fields where possible;
9. forecast accuracy alone is not economic value;
10. a forecast or modelled avoided loss is never called Verified Economic Value.

---

## Public-website boundary

Allowed now:

- describe the whole-farm scope as the direction of the PROFIT master brand;
- explain data/forecasting principles as development doctrine;
- cite external sector/digitalisation evidence with its period and population;
- show Field Profitability as the current concrete product focus.

Not allowed now:

- claim that PROFIT currently supports pigs, dairy, greenhouse, horticulture or other livestock as shipped modules;
- publish invented livestock/horticulture output metrics as product capability;
- claim predictive accuracy that has not been measured;
- present forecasted or modelled economic value as realised/verified value;
- imply telemetry or sensor integrations exist when they do not.

## Reconsider if

Update this note when:
- a non-crop domain obtains canonical product truth;
- a data-capture field test produces evidence;
- forecasting experiments produce out-of-sample results;
- newer official statistics materially change the website claim;
- a current public statistic becomes stale enough to affect credibility.
