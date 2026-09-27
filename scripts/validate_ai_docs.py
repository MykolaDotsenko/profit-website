#!/usr/bin/env python3
"""Validate the lightweight AI documentation contract.

Standard-library only by design: this check should not require the website
runtime, a package manager, or a third-party YAML/Markdown parser.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

REQUIRED_FILES = [
    "README.md",
    "AGENTS.md",
    "docs/website-blueprint-v1.md",
    "docs/website-strategy.md",
    "docs/triple-check-audit-2026-09-26.md",
    "docs/ai/README.md",
    "docs/ai/context.yaml",
    "docs/ai/TASK_TEMPLATE.md",
    "docs/ai/IMPLEMENTATION_PLAN.md",
    "docs/decisions/README.md",
    "docs/decisions/0000-template.md",
    "docs/decisions/0001-ai-development-documentation-architecture.md",
    "docs/decisions/0003-provisional-b2-production-unit-art-direction.md",
    ".github/ISSUE_TEMPLATE/ai-development-task.yml",
    ".github/PULL_REQUEST_TEMPLATE.md",
    "docs/homepage-copy-deck-v1.md",
    "docs/experiments/www-000-preflight-pack-v1.md",
    "docs/experiments/www-000-statistical-surrogate-v1.md",
    "docs/homepage-content-brief-v1.md",
    "docs/website-trust-professionalism-synthesis-2026-09-27.md",
    "docs/methodology/vev-standard-v1.md",
    "docs/operations/pilot-intake-runbook-v1.md",
    "docs/legal/privacy-data-trust-pack.md",
    "docs/legal/privacy-data-policy-decisions-v1.md",
    "docs/legal/pilot-privacy-notice-template-v1.md",
    "docs/legal/pilot-farm-data-terms-template-v1.md",
    "src/config/release.ts",
    "src/domain/economics.ts",
    "src/components/Metric.astro",
    "src/components/MethodPipeline.astro",
    "src/components/ModelComparisonTable.astro",
    "src/components/OnPageNav.astro",
    "src/pages/robots.txt.ts",
    "src/pages/sitemap-index.xml.ts",
    "src/components/ProductionScope.astro",
    "src/i18n/en.ts",
    "src/content/en/shared.ts",
    "playwright.config.ts",
    "tests/browser/site.spec.ts",
    "prototypes/art-directions/README.md",
    "prototypes/art-directions/a-evidence-editorial/index.html",
    "prototypes/art-directions/a-evidence-editorial/a2-production-economics-spine.html",
    "prototypes/art-directions/b-farm-operations-layer/index.html",
    "prototypes/art-directions/b-farm-operations-layer/b2-production-unit-grammar.html",
    "prototypes/art-directions/c-economic-control-room/index.html",
    "prototypes/art-directions/c-economic-control-room/c2-de-dashboarded.html",
]

LOCAL_LINK_ENTRYPOINTS = [
    "README.md",
    "docs/ai/README.md",
]

TEXT_INVARIANTS = {
    "docs/website-blueprint-v1.md": [
        "VEV per Customer",
        "Field Profitability is the current wedge/proof hypothesis",
        "AI-generated prose or reasoning is not a source of truth for critical economic numbers",
        "AD-7",
        "Global by architecture. Local by evidence.",
        "Domain × Market × Evidence",
        "I5 — International product evidence",
        "B2 — Production Unit Grammar is the provisional production art direction",
        "production unit → context / records → economics → evidence / confidence → farmer decision",
    ],
    "AGENTS.md": [
        "Authority and precedence",
        "Product, content, design and implementation decisions",
        "docs/website-blueprint-v1.md",
        "Hypothetical → Modelled → Observed → Attributed → Verified",
        "LOCKED",
        "FLEXIBLE",
        "Definition of done",
        "Create Value. Prove It. Scale It.",
        "Verified Economic Value per Customer",
        "AI must not be the sole source of truth for critical quantitative outputs",
        "Global by architecture. Local by evidence.",
    ],
    "docs/ai/context.yaml": [
        'schema_version: 1',
        'canonical documentation wins',
        'value_logic:',
        'evidence_states:',
        'state:',
        'locked:',
        'flexible:',
        'open:',
        'definition_of_done:',
        'company_context:',
        'vev_measurement:',
        'trust_guardrails:',
        'international_validation:',
        'Domain × Market × Evidence',
        'AD-7 brand-system transfer',
        'public_methodology_surface:',
        'data_quality:',
        'decision_support:',
        'baseline-first',
        'selected_production_direction: "B2 — Production Unit Grammar"',
        'selected_grammar: "production unit → context / records → economics → evidence / confidence → farmer decision"',
    ],
    "docs/ai/IMPLEMENTATION_PLAN.md": [
        "Pre-production validation",
        "WWW-000",
        "WWW-001",
        "WWW-005",
        "AD-7 — brand-system transfer",
        "Definition of Ready",
        "Definition of Done",
    ],
    "docs/decisions/README.md": [
        "When to create an ADR",
        "When not to create an ADR",
        "Superseded",
    ],
    ".github/PULL_REQUEST_TEMPLATE.md": [
        "Evidence / claim integrity",
        "Verification actually run",
        "Material decision",
    ],
    ".github/ISSUE_TEMPLATE/ai-development-task.yml": [
        "LOCKED / FLEXIBLE / OPEN",
        "Acceptance criteria",
        "Verification plan",
        "Integrity gate",
    ],
    "docs/experiments/www-000-statistical-surrogate-v1.md": [
        "does not replace farmer evidence",
        "statistics-calibrated synthetic",
        "€207/t",
        "€835/ha",
        "No hero winner is selected",
    ],
    "docs/experiments/www-000-preflight-pack-v1.md": [
        "human gates remain open",
        "9–12 eligible farmers",
        "do not record sessions",
        "same asset",
        "do not edit the stimulus during the round",
    ],
    "docs/homepage-copy-deck-v1.md": [
        "Different farms. Different production models. The same economic discipline.",
        "The farmer keeps decision authority.",
        "A value counts only when the evidence supports it",
        "The farm stays in control",
        "Build value. Prove it. Then scale it.",
        "hero remains under WWW-000 validation",
    ],
    "docs/homepage-content-brief-v1.md": [
        "The homepage must feel simple before it feels sophisticated.",
        "Field Profitability",
        "These production systems describe the direction of the PROFIT master brand.",
        "work with the farm that exists",
        "The farmer retains decision authority",
    ],
    "docs/website-trust-professionalism-synthesis-2026-09-27.md": [
        "work with the farm that exists",
        "deterministic economics",
        "homepage should not become a white paper",
        "AI may scale execution",
    ],
    "docs/methodology/vev-standard-v1.md": [
        "Verified Economic Value",
        "positive, zero or negative",
        "Baseline → Counterfactual",
        "Low may support Attributed but not Verified",
        "Medium or High may support Verified",
        "Do not weaken the standard",
    ],
    "docs/operations/pilot-intake-runbook-v1.md": [
        "Primary owner: **Mykola Dotsenko**",
        "within two business days",
        "No farm records",
        "first reply is for fit and context",
        "pilot-process",
    ],
    "docs/legal/privacy-data-policy-decisions-v1.md": [
        "legitimate interests under GDPR Article 6(1)(f)",
        "12 months after the last substantive contact",
        "does **not** opt a person into marketing",
        "No cross-customer benchmarking, model training or unrelated research use is implied",
        "within **30 days**",
        "within **90 days**",
        "Keep privacy-notice and data-terms BLOCKED",
    ],
    "docs/legal/privacy-data-trust-pack.md": [
        "Production-readiness draft — legal approval required",
        "Current coded website data inventory",
        "Legal basis | **PROPOSED: legitimate interests**",
        "Before accepting farm records",
        "No secondary use, cross-customer benchmarking or model training is permitted by pilot participation alone",
        "privacy-notice` — **BLOCKED**",
        "data-terms` — **BLOCKED**",
    ],
    "src/config/release.ts": [
        "Public release blocked",
        "Pilot form endpoint blocked",
        "RELEASE_GATES",
    ],
    "src/domain/economics.ts": [
        "status: 'confirmed' | 'provisional'",
        "assertMetricDefinitionPublishable",
        "assertMetricPublishable",
    ],
    "src/components/Metric.astro": [
        "assertMetricPublishable",
    ],
    "src/components/MethodPipeline.astro": [
        "method-pipeline",
        "aria-label",
    ],
    "src/components/ModelComparisonTable.astro": [
        "model-table-wrap",
        "tabindex=\"0\"",
        "role=\"region\"",
    ],
    "src/components/OnPageNav.astro": [
        "on-page-nav",
        "aria-label",
        "linked.map",
        "#${item.id}",
    ],
    "src/content/en/home.ts": [
        "Which fields actually make money?",
        "What should change next season?",
        "Two rules behind the system",
        "Fit the farm",
        "Keep uncertainty visible",
        "Deeper data-quality and model-selection methodology lives on the trust page",
    ],
    "src/pages/robots.txt.ts": [
        "Disallow: /",
        "Allow: /",
    ],
    "src/pages/sitemap-index.xml.ts": [
        "sitemaps.org/schemas/sitemap/0.9",
        "/trust/",
        "/contact/",
    ],
    "src/components/ProductionScope.astro": [
        "production-unit",
        "t.production.unitLabel",
        "t.production.scopeLabel",
        "item.current",
    ],
    "src/content/en/shared.ts": [
        "Current first focus",
        "current: true",
        "Batch / production cycle",
        "Cow / group / herd / period",
    ],
    "src/i18n/en.ts": [
        "Production unit",
        "PROFIT production-unit grammar",
        "Production → Economics → Evidence → Decision",
    ],
    "tests/browser/site.spec.ts": [
        "wcag22aa",
        "390",
        "1440",
        "reduced-motion",
        "Quality before intelligence",
        "No model wins by reputation",
        "Support the decision. Do not replace the farmer.",
    ],
}

MARKDOWN_LINK_RE = re.compile(r"\[[^\]]+\]\(([^)]+)\)")


def fail(message: str, errors: list[str]) -> None:
    errors.append(message)


def validate_required_files(errors: list[str]) -> None:
    for rel in REQUIRED_FILES:
        if not (ROOT / rel).is_file():
            fail(f"Missing required file: {rel}", errors)


def validate_invariants(errors: list[str]) -> None:
    for rel, needles in TEXT_INVARIANTS.items():
        path = ROOT / rel
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        for needle in needles:
            if needle not in text:
                fail(f"{rel}: missing required invariant text: {needle!r}", errors)


def validate_local_markdown_links(errors: list[str]) -> None:
    for rel in LOCAL_LINK_ENTRYPOINTS:
        path = ROOT / rel
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        for raw_target in MARKDOWN_LINK_RE.findall(text):
            target = raw_target.strip()
            if (
                not target
                or target.startswith("#")
                or target.startswith("http://")
                or target.startswith("https://")
                or target.startswith("mailto:")
            ):
                continue

            target_without_anchor = target.split("#", 1)[0]
            if not target_without_anchor:
                continue

            resolved = (path.parent / target_without_anchor).resolve()
            try:
                resolved.relative_to(ROOT.resolve())
            except ValueError:
                fail(f"{rel}: local link escapes repository: {target}", errors)
                continue

            if not resolved.exists():
                fail(f"{rel}: broken local link: {target}", errors)


ART_DIRECTION_PROTOTYPES = [
    "prototypes/art-directions/a-evidence-editorial/index.html",
    "prototypes/art-directions/b-farm-operations-layer/index.html",
    "prototypes/art-directions/c-economic-control-room/index.html",
]

ART_DIRECTION_CHALLENGES = [
    "prototypes/art-directions/a-evidence-editorial/a2-production-economics-spine.html",
    "prototypes/art-directions/b-farm-operations-layer/b2-production-unit-grammar.html",
    "prototypes/art-directions/c-economic-control-room/c2-de-dashboarded.html",
]


def validate_art_direction_prototypes(errors: list[str]) -> None:
    controlled_needles = [
        "See operating profit by field — and what goes into it.",
        "Hypothetical",
        "−€69",
        "3.7",
        "€207",
    ]

    for rel in ART_DIRECTION_PROTOTYPES:
        path = ROOT / rel
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        for needle in controlled_needles:
            if needle not in text:
                fail(f"{rel}: missing controlled WWW-001 content: {needle!r}", errors)

        if "Confidence" not in text or "Not assessed" not in text:
            fail(f"{rel}: missing Confidence: Not assessed semantics", errors)

        lower = text.lower()
        if "ai-powered" in lower:
            fail(f"{rel}: generic AI-powered language is prohibited", errors)
        if re.search(r"<script[^>]+src=[\"']https?://", text, re.I):
            fail(f"{rel}: external script dependency is not allowed in static WWW-001 prototype", errors)
        if re.search(r"<link[^>]+href=[\"']https?://", text, re.I):
            fail(f"{rel}: external stylesheet dependency is not allowed in static WWW-001 prototype", errors)
        if '<meta name="viewport"' not in lower:
            fail(f"{rel}: missing mobile viewport", errors)

    for rel in ART_DIRECTION_CHALLENGES:
        path = ROOT / rel
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        if "not product UI" not in text:
            fail(f"{rel}: challenge frame must state it is not product UI", errors)
        if "See operating profit by field — and what goes into it." not in text and "Production unit → context → economics → evidence → decision." not in text:
            fail(f"{rel}: challenge frame lost the controlled decision/economic grammar", errors)


def validate_adr_names(errors: list[str]) -> None:
    adr_dir = ROOT / "docs/decisions"
    if not adr_dir.is_dir():
        return

    pattern = re.compile(r"^\d{4}-[a-z0-9]+(?:-[a-z0-9]+)*\.md$")
    for path in adr_dir.glob("*.md"):
        if path.name in {"README.md", "0000-template.md"}:
            continue
        if not pattern.match(path.name):
            fail(f"Invalid ADR filename: docs/decisions/{path.name}", errors)


def main() -> int:
    errors: list[str] = []

    validate_required_files(errors)
    validate_invariants(errors)
    validate_local_markdown_links(errors)
    validate_art_direction_prototypes(errors)
    validate_adr_names(errors)

    if errors:
        print("AI documentation contract FAILED:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("AI documentation contract OK")
    print(f"Validated {len(REQUIRED_FILES)} required files and local entry-point links.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
