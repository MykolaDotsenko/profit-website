# PROFIT Website — 100/100 Closure Pack

Status: **Operational release checklist**  
Date: **2026-09-27**  
Machine-readable truth: `docs/release/website-evidence-registry.json`

## Current strict score

**66/100 — 33 of 50 criteria PASS.**

This is the evidence-complete score, not the implementation-quality estimate.

## Evidence-capture forms

Use these rather than inventing ad-hoc sign-off:

- [Target-farmer validation record](evidence-forms/target-farmer-validation-record.md)
- [Market-A domain review](evidence-forms/market-a-domain-review-record.md)
- [Company & direct-contact facts](evidence-forms/company-contact-facts-record.md)
- [Team publication confirmation](evidence-forms/team-publication-confirmation.md)
- [Documentary asset provenance](evidence-forms/documentary-asset-provenance-record.md)
- [Privacy / farm-data legal approval](evidence-forms/legal-approval-record.md)
- [Manual accessibility & reflow audit](evidence-forms/manual-accessibility-audit-record.md)
- [Production release verification](evidence-forms/production-release-verification-record.md)

Every BLOCKED criterion in the machine-readable registry points to one of these forms (or this closure pack for the all-gates criterion).

## Critical path

The remaining 17 criteria are intentionally not all software tasks. They fall into five closure streams.

### A. Target-farmer evidence

Closes or contributes to:
- FC-01 — hero comprehension;
- FC-05 — next-action comprehension;
- BD-01 — production art direction.

Required action:
1. Recruit 9–12 target crop decision-makers in Market A.
2. Use the existing fixed-exposure, open-recall protocol.
3. Record comprehension, misclassification, next action and calibrated-trust observations.
4. Apply pre-existing kill criteria.
5. Promote only a surviving message/art direction; do not call a tiny sample a statistical winner.

### B. Company / team / documentary facts

Closes:
- CC-01 — legal company identity;
- CC-02 — direct contact;
- CC-03 — team confirmation/consent.

Completed:
- **BD-02 documentary asset — PASS** with a rights-cleared Finnish wheat-field photograph and recorded provenance.

Required actions:
- authoritative legal entity details from the official company record;
- one monitored direct-contact path with a send/receive smoke test;
- one explicit publish confirmation per team member.

### C. Legal / farm-data approval

Closes:
- TD-01 — approved privacy notice;
- TD-02 — approved farm-data terms;
- TD-05 — final privacy/security claim audit.

The internal policy choices are already narrowed. Remaining work is factual/controller-specific:
- controller/contact;
- actual hosting/form/email/CRM processors and locations;
- actual security/log behavior;
- competent supervisory authority and rights wording;
- final controller-specific legal review/approval.

Do not infer these from convenience.

### D. Human QA / production evidence

Completed:
- **PE-04 production asset/font policy — PASS** via production-build browser/network audit.


Closes:
- AR-02 — manual keyboard + representative screen-reader audit;
- AR-03 — manual zoom/reflow audit;
- PE-02 — production CWV/RUM;
- RI-03 — live-origin SEO/crawl audit;
- RI-04 — operational ownership/monitoring.

These are release-candidate tasks. Record the exact SHA and environment for each result.

### E. Remaining product/production closure

Closes:
- PT-04 — Market-A economic reviewer;
- CP-03 — production form delivery;
- RI-01 — all gates READY.

Order:
1. Market-A domain sign-off.
2. Company + privacy facts.
3. Legal approval.
4. Production endpoint and direct contact.
5. Documentary asset.
6. Manual accessibility/device audit.
7. Deploy non-indexable release candidate.
8. Production SEO/performance/monitoring checks.
9. All gates READY.
10. Exact-SHA CI.
11. Enable indexability.

## Non-negotiable release rule

Do not change a BLOCKED criterion to PASS because the implementation “looks ready”.

Change it only when the criterion’s own required evidence exists.

Do not lower the standard to reach 100/100.
