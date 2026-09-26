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

## Status

Repository initialized. Positioning, information architecture, visual direction and implementation approach are being validated before production build.

## Prototypes

- [Signature Effect Prototype](prototypes/field-economics-reveal/README.md) — Field → Economics Reveal
