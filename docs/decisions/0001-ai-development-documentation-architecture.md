# ADR 0001 — AI Development Documentation Architecture

- Status: Accepted
- Date: 2026-09-26
- Owners: PROFIT website team
- Related: `AGENTS.md`, `docs/ai/`, `docs/website-blueprint-v1.md`

## Problem

The repository contains a high-value but large and overlapping research archive.

If an AI coding/design agent loads all research by default, it can:

- waste context;
- average across overlapping recommendations;
- treat an old research hypothesis as a current decision;
- miss the distinction between evidence, strategy and implementation;
- make plausible-looking changes without a defined verification gate.

## Decision

Use a layered documentation architecture:

1. **Canonical implementation source** — `docs/website-blueprint-v1.md`
2. **Strategic source** — `docs/website-strategy.md`
3. **Correction/audit layer** — `docs/triple-check-audit-2026-09-26.md`
4. **AI workflow contract** — `AGENTS.md`
5. **Compact derived machine context** — `docs/ai/context.yaml`
6. **Task routing/index** — `docs/ai/README.md`
7. **Task handoff template** — `docs/ai/TASK_TEMPLATE.md`
8. **Supporting research** — loaded only when relevant
9. **Decision records** — `docs/decisions/` for material durable decisions

AI agents should use minimum sufficient context rather than ingesting the entire research archive.

## Evidence

### Fact

The repository has multiple research documents covering marketing, psychology, brand, design, visual effects and frontend architecture.

### Fact

The Blueprint already declares itself the implementation-ready operational source of truth.

### Fact

The triple-check audit contains corrections that supersede older research statements.

### Inference

Without an explicit authority model, future AI agents are likely to treat repeated research statements as equally authoritative.

### Hypothesis

A compact, task-routed context layer plus deterministic validation will reduce documentation drift and improve AI implementation consistency.

## Alternatives considered

### Option A — Keep all documentation flat

Benefits:
- no new structure.

Costs/risks:
- high context load;
- ambiguous authority;
- larger drift risk;
- harder task handoff.

### Option B — Delete/merge most research into one document

Benefits:
- fewer files.

Costs/risks:
- destroys useful research provenance;
- makes future re-evaluation harder;
- creates one very large file;
- expensive to maintain.

### Option C — Layered canonical + derived AI context

Benefits:
- preserves research;
- minimizes default context;
- makes authority explicit;
- supports both humans and AI;
- easy to extend.

Costs/risks:
- derived context can become stale unless maintained and checked.

### Simpler / not-now option

Only add an `AGENTS.md`.

Benefits:
- minimal effort.

Costs/risks:
- no machine-readable state;
- no task routing;
- no durable decision log;
- no automatic contract validation.

## Why this decision now

The next stage moves from broad research toward prototypes and implementation. Documentation ambiguity becomes more expensive once AI agents start creating production artifacts.

## Consequences

### Positive

- smaller AI context;
- explicit source precedence;
- better preservation of evidence integrity;
- repeatable task handoff;
- easier onboarding of another coding agent;
- less risk that research is mistaken for a decision.

### Negative / trade-offs

- canonical and derived context must stay synchronized;
- material decisions require lightweight maintenance.

### New dependencies

No runtime dependency.

A small standard-library validation script and GitHub Actions workflow may enforce structural invariants.

## Verification / success signal

The system is working if:

- an AI agent can identify the correct source of truth without loading all research;
- material tasks reference acceptance criteria before implementation;
- agents distinguish LOCKED / FLEXIBLE / OPEN state;
- stale or broken AI documentation links fail CI;
- future material decisions can be reconstructed from ADRs.

## Reconsider if

- the repository becomes so small that the layered structure adds more friction than value;
- another documentation system can provide equivalent authority, machine context and auditability with lower maintenance;
- AI agents consistently ignore repository-level instructions, requiring a different enforcement mechanism.

## Supersedes

None.

## Superseded by

None.
