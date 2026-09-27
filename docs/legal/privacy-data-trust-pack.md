# PROFIT Website — Privacy & Farm-Data Trust Pack

Status: **Production-readiness draft — legal approval required before publication as a privacy notice or data agreement**  
Date: **2026-09-27**  
Scope: PROFIT public website, pilot-intake contact data, and the policy decisions required before any farm/production records are accepted.

## 1. Why this document exists

PROFIT treats privacy and farmer control as product requirements, not footer copy.

This pack separates three things that must not be blurred together:

1. **Current website behavior** — what the coded site actually collects or sends now.
2. **Personal-data privacy notice** — the GDPR information that must be approved and published before a live pilot form processes personal data.
3. **Farm-data terms** — the contractual/product rules that must be agreed before a farm shares production, cost, machinery, herd, field or other operational records.

This document is a readiness artifact. It is **not legal advice, not an approved privacy notice and not a farm-data agreement**.

## 2. Primary legal references

European Commission GDPR guidance used for this readiness structure:

- [Principles of the GDPR](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en)
- [Legal grounds for processing data](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en)
- [Application of the GDPR — controller and processor roles](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en)
- [Information for individuals](https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en)
- [Obligations when processing personal data](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/obligations_en)
- [Dealing with requests from individuals](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/dealing-requests-individuals_en)

The Commission guidance requires, among other things, clear information about the controller, purpose, categories, legal basis, retention, recipients/transfers, rights and complaint path. It also emphasizes purpose limitation, data minimisation, storage limitation, integrity/confidentiality and accountability.

The final legal text must be reviewed against the law applicable to the actual controller and deployment.

## 3. Current coded website data inventory

### 3.1 Pilot-intake fields

The current form exposes exactly five required fields:

| Field | Why it exists in the current product flow |
|---|---|
| Name | identify the person asking about the pilot |
| Farm or company | understand organisational context |
| Country | understand market/context and reply appropriately |
| Email | provide the requested reply |
| Farm type | qualify whether the current Field Profitability pilot is relevant |

The form does **not** request:
- field records;
- yields;
- prices;
- costs;
- machinery records;
- sensor data;
- livestock records;
- bank/payment data;
- special-category personal data.

### 3.2 Current submission behavior

At the time of this document:

- the repository has no configured production pilot endpoint by default;
- the preview form validates locally and **sends nothing** when no endpoint is configured;
- the build prevents a pilot endpoint from being configured while the privacy-notice, company-details or pilot-process gates are blocked;
- no analytics, cookie-consent framework, `document.cookie`, `localStorage` or `sessionStorage` implementation was found in the current coded site;
- the site does not currently ask for farm records.

These facts must be re-audited whenever deployment, analytics, form delivery, hosting or third-party services change.

## 4. Final privacy notice — required decision fields

The final notice must be based on actual facts. Do not fill a row by assumption.

| Required topic | Current state | Evidence needed before approval |
|---|---|---|
| Controller legal identity | **OPEN** | confirmed legal company name and required registration details |
| Controller contact | **OPEN** | monitored privacy/contact address |
| DPO/contact if applicable | **OPEN / applicability to confirm** | legal determination + contact if required |
| Categories of personal data | **DRAFTED** | verify five-field form + any technical logs actually collected |
| Purpose | **DECIDED INTERNALLY** | reply to inbound enquiry + assess current pilot fit; final legal review still required |
| Legal basis | **PROPOSED: legitimate interests** | controller-specific approval + balancing assessment; change if final counsel determines another basis fits the real relationship better |
| Retention period / criteria | **POLICY TARGET DECIDED** | 12 months after last substantive contact for non-participant enquiries; final approval + implementation verification required |
| Recipients/processors | **OPEN** | actual hosting/form/email/CRM providers |
| International transfers | **OPEN** | actual provider locations + transfer mechanism where applicable |
| Automated decision-making/profiling | **Current site: none identified** | verify actual production behavior before publication |
| Data-subject rights | **LEGAL REVIEW REQUIRED** | approved jurisdiction-appropriate wording/process |
| Complaint authority/path | **OPEN** | controller establishment / competent authority |
| Consent withdrawal wording | **ONLY IF CONSENT IS USED** | legal-basis decision |
| Source of data | **Current form: directly from the user** | verify no enrichment/import is added |
| Security wording | **OPEN** | describe only implemented controls, never generic certification language |

### Hard rule

The internal readiness position proposes legitimate interests for the minimal inbound-enquiry flow because the person initiates contact, the data is minimal and the use is limited to reply/fit assessment. This remains subject to controller-specific legal approval and a balancing assessment. If the real relationship better fits another lawful basis, the final notice must say so.

## 5. Farm-data terms — decisions required before records are shared

Farm/production data may include personal data in some contexts, but not every farm record is necessarily personal data. PROFIT therefore needs a separate, explicit data-use agreement/policy rather than pretending GDPR alone answers every farm-data question.

Before accepting farm records, define and approve:

### 5.1 Scope and purpose
- which record categories are requested;
- why each category is needed for the pilot/product;
- which decisions/outputs the data supports;
- what PROFIT will **not** use the data for.

### 5.2 Roles and access
- who can access the records inside PROFIT;
- whether a service provider processes the data;
- least-privilege expectations;
- how access is revoked.

### 5.3 Sharing and subprocessors
- whether any farm records leave PROFIT-controlled systems;
- named processor/subprocessor categories;
- rules for adding/changing subprocessors;
- any international transfer mechanism required.

### 5.4 Retention, deletion and return/export
Internal policy targets:
- provide agreed exportable records/results at pilot exit where technically feasible;
- delete active-system records within 30 days after a valid deletion/end trigger unless another documented legal need applies;
- allow backup expiry up to 90 days where immediate granular deletion is not technically feasible;
- final terms must match the actual infrastructure before these targets become contractual promises.

### 5.5 Correction and provenance
- farmer can identify/correct incorrect records;
- recorded/imported/inferred/modelled values remain distinguishable where material;
- source/provenance should remain traceable.

### 5.6 Secondary use, benchmarking and model training
Approved internal default:

**No secondary use, cross-customer benchmarking or model training is permitted by pilot participation alone.**

If PROFIT later wants any secondary use:
- define it as a separate purpose;
- determine the lawful/contractual basis;
- explain whether data is identifiable, pseudonymised or aggregated;
- provide the required permission/control;
- record the decision in the final terms.

### 5.7 Security and incident handling
The final terms/notice must reflect actual implemented controls and responsibilities, including:
- access control;
- transport/storage protections where actually implemented;
- audit/logging behavior where actually implemented;
- processor obligations;
- incident/breach response;
- contact path for concerns.

Do not claim certifications that do not exist.

## 6. Public-site wording architecture

### Fast layer
The website may safely communicate these product principles before legal approval:

- five contact/context details only;
- no farm records at first contact;
- stated purpose is visible;
- farm records are not requested before terms are agreed;
- the farmer remains decision owner;
- unapproved legal details remain explicitly marked as pending.

### Slow layer
The Trust page should make inspectable:
- current five-field inventory;
- current preview/submission state;
- what the final privacy notice still has to specify;
- what must be agreed before farm records are shared;
- primary legal sources;
- explicit legal-review status.

## 7. Gate-closing evidence

### privacy-notice may become READY only when
- controller identity/contact is confirmed;
- actual categories/purposes are verified;
- legal basis is approved;
- retention is approved;
- recipients/processors/transfers are documented;
- rights and complaint path are approved;
- security wording matches reality;
- the final notice is published and linked at collection time.

### data-terms may become READY only when
- farm-data purpose/scope is approved;
- access/sharing/subprocessor rules are approved;
- retention/deletion/export/end-of-relationship rules are approved;
- secondary-use/model-training policy is approved;
- security/incident responsibilities are approved;
- final terms are available before farm records are requested.

## 8. Change triggers

Re-open this inventory immediately if PROFIT adds or changes:
- analytics;
- cookies or tracking technologies;
- a form processor;
- CRM;
- email automation;
- hosting region/provider;
- log retention;
- authentication;
- file upload;
- farm-record ingestion;
- telemetry/sensors;
- third-party AI processing;
- cross-customer benchmarking;
- model training;
- marketing communications.

## 9. Current release decision

Internal policy decisions are now recorded in:
- `docs/legal/privacy-data-policy-decisions-v1.md`;
- `docs/legal/pilot-privacy-notice-template-v1.md`;
- `docs/legal/pilot-farm-data-terms-template-v1.md`.

Keep both gates blocked:

- `privacy-notice` — **BLOCKED**
- `data-terms` — **BLOCKED**

This draft reduces implementation uncertainty. It does not constitute the legal evidence required to close either gate.
