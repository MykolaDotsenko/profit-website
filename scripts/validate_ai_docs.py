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
]

LOCAL_LINK_ENTRYPOINTS = [
    "README.md",
    "docs/ai/README.md",
]

TEXT_INVARIANTS = {
    "AGENTS.md": [
        "Authority and precedence",
        "Product, content, design and implementation decisions",
        "docs/website-blueprint-v1.md",
        "Hypothetical → Modelled → Observed → Attributed → Verified",
        "LOCKED",
        "FLEXIBLE",
        "Definition of done",
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
    ],
    "docs/ai/IMPLEMENTATION_PLAN.md": [
        "Pre-production validation",
        "WWW-001",
        "WWW-005",
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
