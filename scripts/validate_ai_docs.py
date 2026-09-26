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
    ".github/ISSUE_TEMPLATE/ai-development-task.yml",
    ".github/PULL_REQUEST_TEMPLATE.md",
    "docs/homepage-copy-deck-v1.md",
    "docs/experiments/www-000-preflight-pack-v1.md",
    "docs/experiments/www-000-statistical-surrogate-v1.md",
    "docs/homepage-content-brief-v1.md",
    "docs/website-trust-professionalism-synthesis-2026-09-27.md",
    "src/config/release.ts",
    "src/domain/economics.ts",
    "src/components/Metric.astro",
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
    "tests/browser/site.spec.ts": [
        "wcag22aa",
        "390",
        "1440",
        "reduced-motion",
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
        "Confidence: Not assessed",
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
