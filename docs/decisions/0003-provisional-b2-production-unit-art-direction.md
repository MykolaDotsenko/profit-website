# ADR 0003 — Provisional production art direction: B2 Production Unit Grammar

Date: 2026-09-27  
Status: Accepted provisionally  
Decision owner: PROFIT product/design

## Context

PROFIT needs one coherent website direction to continue implementation while direct farmer testing is unavailable.

The independent internal directions were:

- A / A2 — Evidence-Led Editorial / Production → Economics Spine
- B / B2 — Farm Operations Layer / Production Unit Grammar
- C / C2 — Economic Control Room / De-dashboarded Economic State

The internal red-team did not produce farmer evidence and therefore could not establish a validated winner. The user has now explicitly asked to choose the strongest current option and implement it.

The website remains a company presentation and trust surface, not the product application.

## Decision

Use **B2 — Production Unit Grammar** as the provisional production art direction.

The master visual/information grammar is:

**production unit → context / records → economics → evidence / confidence → farmer decision**

The production unit changes by domain:

- crop: field / season;
- horticulture: block / variety / crop cycle;
- greenhouse: compartment / crop cycle;
- pigs: batch / production cycle;
- dairy: cow / group / herd / period;
- other livestock: relevant animal/group/flock/herd/period.

Field geometry is not a master-brand invariant.

## Why B2

### 1. Best fit with the PROFIT product truth

PROFIT starts from real agricultural production context and converts records into explicit economic meaning.

B2 makes that mechanism visible without requiring a dashboard metaphor.

### 2. Strongest cross-domain transfer

A hectare, pig batch and dairy herd are not interchangeable.

B2 lets the production unit change while keeping the same economic/evidence discipline.

### 3. Strongest anti-AI-sameness position

B2 does not depend on:
- generic SaaS bento grids;
- glowing AI graphics;
- green-gradient agritech;
- editorial-report aesthetics alone;
- finance-control-room dashboards.

Its distinctiveness comes from the PROFIT operating model.

### 4. Better brochure-site fit than C2

C2 has strong economic-state clarity but still risks looking like mature ERP/accounting software and overstating product maturity.

B2 can stay explanatory and company-level.

### 5. More agricultural specificity than A2

A2 has excellent evidence hierarchy but can still read as financial editorial / consulting when the production context is removed.

B2 starts from the production unit itself.

## What is retained from the other directions

This is not a visual hybrid.

Cross-cutting requirements already established independently of art direction remain:
- A2-level evidence clarity;
- explicit economic definitions;
- C2-level visibility of negative/downside economics;
- farmer decision authority;
- documentary truth;
- no false precision.

These are product/trust requirements, not imported visual motifs.

## Main risks

1. **Telemetry / GIS misclassification**  
   Operational context must not imply shipped machinery integrations, mapping or automatic telemetry.

2. **Data-heavy abstraction**  
   Without documentary agricultural assets, the system can become too diagrammatic.

3. **Crop lock reappearing**  
   Field geometry or per-hectare metrics must remain crop-domain expressions, not master-brand identity.

4. **Over-systemisation**  
   The brochure website must not become product UI or an operations dashboard.

## Guardrails

- Use production-unit language instead of field geometry as the invariant.
- Keep current vs direction states visible.
- Never fabricate future livestock/horticulture metrics.
- Keep homepage simple; technical depth stays on /trust and /company.
- Documentary imagery must have source/rights/provenance.
- No animation is required for comprehension.
- Economic state must remain visible under negative outcomes.
- Farmer authority remains the semantic destination.

## Reconsider if

Reopen the direction when any of the following occurs:

- 3+ target farmers repeatedly classify the site primarily as GIS, telemetry or machine-management software;
- production-unit grammar is not understood without verbal explanation;
- pig/dairy/horticulture users perceive the system as crop software with renamed labels;
- logo-off recognition tests show the visual code is generic or confused with another category;
- mobile comprehension materially worsens;
- documentary agricultural context cannot integrate naturally;
- a challenger direction materially outperforms B2 on farmer comprehension + calibrated trust.

## Evidence quality

**Low–medium.**

Evidence includes:
- internal website/design/branding research;
- anti-AI-sameness research;
- current product truth;
- cross-domain transfer analysis;
- statistical surrogate proof;
- internal A/B/C and A2/B2/C2 red-team.

Missing:
- target-farmer comparative testing;
- logo-off recognition evidence;
- approved documentary asset test;
- real pilot/customer evidence.

Therefore B2 is the **best current implementation decision**, not a validated market winner.
