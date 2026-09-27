# PROFIT Website — 100-Point Release Quality Contract

Status: **Canonical release-quality scorecard v1.0**  
Date: **2026-09-27**  
Machine-readable source: `docs/release/website-100-scorecard.json`

## Purpose

This contract defines what **100/100** means for the PROFIT public company website.

It is not an aesthetic rating and it is not a substitute for the release gates. It converts the canonical Website Blueprint, PROFIT evidence discipline and production-release requirements into an auditable Definition of Done.

The score exists to answer one question:

> **Is the website complete, trustworthy and release-ready according to the standards PROFIT has actually chosen?**

## Scoring rule

The score is deliberately binary:

- **50 criteria**
- **2 points per criterion**
- **10 categories**
- **10 points per category**
- **100 points maximum**

A criterion earns **2/2 only when the required evidence exists and its verification method passes**.

Otherwise it earns **0/2**.

There is no canonical half-credit. Internal progress estimates may use percentages, but they must not be confused with this release-quality score.

### Hard release rule

**100/100 is impossible while any public-release gate in `src/config/release.ts` is `blocked`.**

A mathematical total may never be used to override release truth.

### Evidence rule

AI simulation, expert judgement or team preference may help prepare a decision, but they do not replace evidence that inherently requires:

- a target farmer;
- individual consent;
- a legal approval;
- an authoritative company fact;
- image rights/provenance;
- an independent Market-A domain review;
- real production/operational behavior.

This is consistent with PROFIT's core principle:

**Create Value. Prove It. Scale It.**

## The ten categories

| Category | Max | Primary question |
|---|---:|---|
| Farmer comprehension & value | 10 | Can a farmer quickly understand why PROFIT matters and what to do next? |
| Product truth & economics | 10 | Is current capability represented exactly and economically correctly? |
| Evidence, confidence & VEV integrity | 10 | Does the evidence label never outrun the evidence? |
| Trust, privacy & farm-data governance | 10 | Are data/privacy promises approved, transparent and consistent with reality? |
| Company & team credibility | 10 | Is PROFIT demonstrably a real, accountable company built by relevant people? |
| Brand distinctiveness & documentary authenticity | 10 | Is the visual system ownable, truthful and rooted in real agriculture? |
| Qualified conversion & pilot operations | 10 | Can a qualified farmer take a clear, low-risk next step that actually works? |
| Accessibility & responsive usability | 10 | Can people use the site across devices and access needs? |
| Performance & engineering reliability | 10 | Is the site fast, robust and technically disciplined? |
| Release & operational integrity | 10 | Can the exact production release be operated without bypassing trust gates? |

The exact 50 criteria, evidence requirements, verification methods, owners and release-gate mappings live in the JSON contract.

## How to use this in every remaining PR

Every material PR on the path to launch should state:

1. **Criteria addressed** — scorecard IDs, e.g. `FC-01`, `BD-02`.
2. **Evidence added** — the actual artifact, test, approval or reference.
3. **Verification run** — automated/manual method.
4. **Release gates affected** — if any.
5. **Reconsider if** — the condition that would invalidate the decision.

A PR does **not** earn points merely by adding code or copy. The required evidence must exist.

## External-evidence handling

Where the criterion requires a real external fact, development should still prepare the complete implementation surface in advance.

Example:

- the team component can be production-ready;
- but `CC-03` remains 0/2 until individual confirmations/consent exist.

Likewise:

- documentary image delivery can be technically complete;
- but `BD-02` remains 0/2 until a real asset has valid rights/provenance.

This prevents external dependencies from blocking useful engineering work while preventing the project from inventing evidence.

## Release-gate relationship

The JSON scorecard must map every current `ReleaseGate['id']` to at least one criterion.

The scorecard validator fails if a release gate is added without being represented in the 100-point contract.

The reverse is intentionally not true: many quality criteria are stricter than release gates because a premium site requires more than the absence of blockers.

## Current-state reporting

Do **not** store a permanent “current score” in this file.

Current score is calculated against:

- the current repository HEAD;
- current CI;
- current approvals/evidence;
- current release-gate state.

This avoids stale self-ratings.

When reporting progress, always separate:

- **implementation progress**;
- **release-quality score**;
- **launch readiness**.

## 100/100 Definition of Done

A 100/100 result means all 50 criteria have their required evidence and pass verification **and**:

- every public-release gate is READY with evidence;
- the exact release SHA passes CI;
- no known material claim is misleading;
- no future capability is presented as current;
- no synthetic/placeholder proof is presented as real;
- privacy/data/company/team facts are approved;
- target-farmer validation required by the Blueprint has been completed;
- production contact/pilot operations function as described;
- accessibility and performance evidence is release-current.

If any of those conditions is false, the site is not 100/100.

## Change control

Change this contract only when:

- the canonical Website Blueprint changes materially;
- a new release risk is discovered;
- a criterion is shown to be redundant or not measurable;
- a better verification method materially improves evidence quality.

Do not weaken a criterion simply to raise the score.
