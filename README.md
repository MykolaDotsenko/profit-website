# PROFIT Website

Public presentation and marketing website for PROFIT.

## Purpose

The website exists to help farmers, investors and partners quickly understand:

- what PROFIT is;
- what farmer problem it solves;
- how PROFIT turns farm data into better economic decisions;
- what evidence exists;
- why PROFIT can be trusted;
- what the visitor should do next.

The website is intentionally separated from the core PROFIT product repository so it can evolve, test messaging and deploy independently.

## Product principle

**Farmer value first. Investor narrative second. Evidence before hype.**

The website must communicate:

**Farm reality → Data → Intelligence → Decision → Economic effect → Verified Economic Value**

“Verified” must only be used when the evidence and attribution standard is actually satisfied.

Field Profitability is the current public wedge, not the boundary of the PROFIT master brand. Company scope spans arable crops; horticulture/orchards/berries; greenhouse/protected cultivation; pigs; dairy; beef/grazing livestock; poultry/eggs; other livestock and mixed farms. This is product direction, not a claim that each domain is already shipped.

## AI-assisted development

AI coding/design agents must start with:

1. [AGENTS.md](AGENTS.md) — mandatory AI development contract and source-precedence rules
2. [AI Development Index](docs/ai/README.md) — task-specific context routing
3. [Machine-readable AI Context](docs/ai/context.yaml) — compact current project state
4. [Implementation Plan](docs/ai/IMPLEMENTATION_PLAN.md) — staged, issue-ready work plan
5. [AI Task Template](docs/ai/TASK_TEMPLATE.md) — task/acceptance/verification handoff
6. [Decision Records](docs/decisions/README.md) — durable rationale for material decisions

**Do not load the entire research archive by default.**

The AI layer is intentionally compact so agents can distinguish:
- locked rules;
- flexible implementation choices;
- open hypotheses;
- canonical decisions;
- supporting research.

If AI context conflicts with canonical documentation, follow the authority model defined in `AGENTS.md`.

Documentation structure is guarded by [Docs Contract CI](.github/workflows/docs-contract.yml), which runs the standard-library validator in `scripts/validate_ai_docs.py`.

## Canonical documentation

- [Website Blueprint v1](docs/website-blueprint-v1.md) — operational source of truth for implementation
- [Website Strategy](docs/website-strategy.md) — strategic source of truth
- [Triple-Check Audit](docs/triple-check-audit-2026-09-26.md) — verified corrections and remaining uncertainties

## Research and supporting documentation

These files are an evidence library. They support decisions but do not silently override the canonical Blueprint.

- [Research Findings](docs/research-findings.md)
- [Marketing Bestseller Findings](docs/marketing-bestseller-findings.md)
- [Psychology Bestseller Findings](docs/psychology-bestseller-findings.md)
- [Masterclasses & Tutorials](docs/masterclasses-and-tutorials.md)
- [Design Masterclass Findings](docs/design-masterclass-findings.md)
- [Modern Design Masterclasses Deep Pass 2026](docs/modern-design-masterclasses-deep-pass-2026.md)
- [Modern Visual Effects Deep Pass 2026](docs/modern-visual-effects-deep-pass-2026.md)
- [Visual Effects Learning Roadmap](docs/visual-effects-learning-roadmap.md)
- [Modern Branding Masterclasses Deep Pass 2026](docs/modern-branding-masterclasses-deep-pass-2026.md)
- [Avoiding AI Sameness — PROFIT Standard](docs/avoiding-ai-sameness.md)
  - includes second and third five-pass research on creative-process, semiotic, flexible-system, human-edge, and provenance safeguards
- [Frontend Masterclass Findings](docs/frontend-masterclass-findings.md)
- [Frontend Masterclasses Deep Pass 2026](docs/frontend-masterclasses-deep-pass-2026.md)
- [Frontend Technologies & Frameworks](docs/frontend-technologies-frameworks.md)
- [Homepage Copy Deck v1](docs/homepage-copy-deck-v1.md) — implementation-ready English homepage copy; hero remains under WWW-000 validation.
- [WWW-000 Statistical Surrogate v1](docs/experiments/www-000-statistical-surrogate-v1.md) — Finnish official-statistics calibration for synthetic field examples and a proxy H1/H2/H3 risk audit; not farmer evidence.
- [Homepage Content Brief v1](docs/homepage-content-brief-v1.md) — section-by-section English homepage control for message, evidence, scope, trust, visual intent and claim boundaries.
- [Whole-Farm Scope, Data Collection & Forecasting Evidence](docs/whole-farm-scope-evidence-2026-09-27.md)
- [Website Trust & Professionalism Synthesis](docs/website-trust-professionalism-synthesis-2026-09-27.md) — cross-disciplinary bridge from website/brand/AI-sameness research and project work on human factors, data collection, forecasting and decision-support systems.
- [100-Point Release Quality Contract](docs/release/website-100-scorecard.md) — auditable 50-criterion Definition of Done; 100/100 is impossible while any public-release gate is blocked.
- [Release Evidence Registry](docs/release/website-evidence-registry.json) — current binary evidence state for all 50 criteria; CI computes the strict score from this file.
- [100/100 Closure Pack](docs/release/website-100-closure-pack.md) — exact remaining blocker/closure actions for the path from the current strict score to release.
- [PROFIT VEV Standard v1](docs/methodology/vev-standard-v1.md) — evidence/attribution standard for Hypothetical → Modelled → Observed → Attributed → Verified.
- [Pilot Intake Runbook v1](docs/operations/pilot-intake-runbook-v1.md) — confirmed owner, email reply flow, two-business-day target and first-contact data boundary.
- [Privacy & Farm-Data Policy Decisions v1](docs/legal/privacy-data-policy-decisions-v1.md) — conservative internal defaults for enquiry purpose/basis/retention and farm-data secondary-use/deletion/export rules; final legal approval still required.
- [Privacy & Farm-Data Trust Pack](docs/legal/privacy-data-trust-pack.md) — production-readiness draft separating current contact-data behavior from the legal/privacy and farm-data decisions required before pilot activation.

## Status

Positioning and farmer validation remain open. **B2 — Production Unit Grammar** is now the provisional production art direction and is implemented across the coded site ([ADR 0003](docs/decisions/0003-provisional-b2-production-unit-art-direction.md)). This is the strongest current implementation decision, not a farmer-validated winner. The site remains pre-launch and non-indexable while release gates are open.

## Website (Build Pass 01)

Astro 7.3.5 (static output), TypeScript 6.0.3 for the Astro toolchain, semantic HTML, native CSS (custom properties, cascade layers, container queries), no UI framework runtime. The only client JavaScript is a small inline script on `/contact` for form errors and status.

### Run

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev       # http://localhost:4321
npm run verify    # design + claim hygiene + scorecard/evidence contracts + astro check + domain/release tests + production build
npm run preview   # serve the production build

# Browser QA is pinned and run by GitHub Actions (Playwright 1.63.0 + Axe 4.13.0).
```

Routes: `/`, `/farmers`, `/product`, `/trust`, `/company`, `/investors`, `/contact`, plus a 404 page. There is no `/results` (Blueprint §6).

### Build-time settings

| Variable | Default | Effect |
|---|---|---|
| `HERO_VARIANT` | `h4` | Which hero hypothesis the homepage shows (`h1`, `h2`, `h3`, `h4`). H1-H3 are the existing WWW-000 v2 controlled candidates. H4 is the owner-directed development default added after the surrogate; it has no farmer evidence and is not a winner. |
| `SHOW_CONTENT_STATUS` | `true` | Preview banner and "Input needed / Draft for review" notes. |
| `SITE_INDEXABLE` | `false` | When false, every page carries `noindex, nofollow`. Setting true now fails the build until `src/config/release.ts` has no blocking public-release gates. |
| `PILOT_FORM_ENDPOINT` | unset | Unset: the form validates but sends nothing. Configuring an endpoint now fails until privacy/company/pilot-process release gates are ready. |
| `SITE_URL` | unset | Production origin for canonical URLs. |

### Where things live

- `src/content/<locale>/` — all page copy, typed. `shared.ts` holds the hero candidates (with their hypothesis status), the master-brand production-scope direction, Field Profitability facts, hard questions and pilot steps.
- Homepage/company copy distinguishes whole-farm product direction from current product truth and records the current data/forecasting doctrine: existing-records-first, optional automation, old-machinery compatibility, offline-first where needed, deterministic economics, baseline-first forecasting, scenario comparison and VEV after observed/attributed outcomes.
- `src/content/examples/field-season.ts` — the one illustrative example (the WWW-000 stimulus values). The build fails if its arithmetic drifts or if it is labelled anything other than Hypothetical / Not assessed.
- `src/domain/` — locale-neutral economics (metric identity, definition, version, currency, unit, period) and evidence semantics. Every metric definition is explicitly `confirmed` or `provisional`; public Metric rendering rejects provisional definitions. `format.ts` does presentation per locale.
- `src/config/release.ts` — auditable hard gates for indexable release and pilot-form activation.
- `src/i18n/` — locale registry and interface strings.
- `src/styles/tokens.css` — semantic tokens for the provisional B2 Production Unit Grammar direction; reversible after farmer validation.
- `src/components/` — components with stable meaning plus the selected production grammar: evidence label, metric, production-unit scope, B2 hero, field exhibit, image slot, content gap, methodology surfaces, …).
- `tests/domain.test.ts` — arithmetic, locale presentation, evidence, metric-definition and release-gate tests.
- `tests/browser/site.spec.ts` — CI browser regression coverage for routes, responsive widths, Axe accessibility, navigation, CTA, forms and reduced motion.
- `scripts/validate_claim_hygiene.mjs` — English production-copy guard against unsupported hype/superiority language; runs inside `npm run verify` and has its own Site Verify path trigger.

### Changing things after farmer evidence

- **Hero copy:** edit or add a record in `src/content/en/shared.ts` (`heroVariants`); switch with `HERO_VARIANT`.
- **Hero proof:** B2 renders the controlled field example as production context + economic state + evidence + decision question; values come from `field-season.ts`.
- **Images:** pass an `image` (with `credit`) to `ImageSlot`. Width/height and aspect ratio reserve space. No stock or synthetic images.
- **Art direction:** B2 Production Unit Grammar is the current production direction. Change it only through a material decision with evidence and a new/superseding ADR; A2/C2 remain documented challengers.
- **CTA copy:** `primaryCta` in `shared.ts` and the page content files.

### Localization

English is the development content language, not a market decision. To add a locale: add it to `astro.config.mjs` (`i18n.locales`) and `src/i18n/locales.ts`, add `src/i18n/<code>.ts` and `src/content/<code>/`, then add routes under `src/pages/<code>/`. Numbers, currencies and units are formatted per locale from locale-neutral values; the currency travels with each value, and per-hectare units belong to the crop domain only. Translate all three hero candidates with the same care and back-translate economic terms (protocol D5/D6).

### Content gaps before launch

Shown on the pages as "Input needed" or "Draft for review" while `SHOW_CONTENT_STATUS` is on. None of these may be filled by AI drafting.

| Gap | Owner | Where |
|---|---|---|
| Team proof: drafted names, role/expertise wording and public profile links; confirm each person’s wording, photo/profile use and consent to publish | PROFIT team | `/`, `/company` |
| Company details: legal name, business ID, registered address, contact address | PROFIT team | footer, `/company` |
| Pilot process: who replies, how, how fast | PROFIT team | pilot steps on `/`, `/farmers`, `/product`, `/trust`, `/company`, `/contact` |
| Data terms: ownership, sharing, retention, deletion | legal | `/trust`, hard question "Who owns the data?" |
| Privacy notice and security measures, before the form collects anything | legal | `/trust`, `/contact` |
| Direct contact for investors, partners and other enquiries | PROFIT team | `/investors`, `/contact` |
| Plain-language evidence-state definitions, checked against the VEV methodology | PROFIT team | `/trust`, homepage evidence section |
| Documentary photograph with source, rights and provenance | PROFIT team | homepage hero |
| Human Market-A/domain review of the calibrated illustrative scenario and local terminology (WWW-000 D6). Statistical placeholder plausibility is already reduced by the Finnish surrogate evidence, but that surrogate does not close the human D6 gate or public-release blocker. | domain expert | `docs/experiments/www-000-statistical-surrogate-v1.md`, `docs/experiments/www-000-preflight-pack-v1.md` |
| Brand symbol / favicon, approved documentary asset and farmer validation of the provisional B2 art direction (WWW-002/003) | PROFIT team | `tokens.css`, `BaseLayout.astro`, B2 components |

## Prototypes

- [Hero Message Test Stimulus](prototypes/hero-message-test/README.md) — WWW-000 neutral static scaffold for H1/H2/H3
- [Signature Effect Prototype](prototypes/field-economics-reveal/README.md) — Field → Economics Reveal
