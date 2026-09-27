# ADR 0004 — Vercel for the reversible static website release path

Status: **Accepted for pre-launch production hosting**  
Date: **2026-09-27**

## Context

PROFIT's public website is already an Astro static build with:
- no application framework runtime;
- no server adapter;
- minimal client JavaScript;
- hard release gates that prevent an indexable build while evidence/legal/company blockers remain open;
- a pilot endpoint that cannot be configured until privacy/company/pilot gates permit it.

The next release criteria require a real deployable origin for:
- production SEO/crawl verification;
- Core Web Vitals / RUM;
- monitoring;
- production pilot delivery once its legal/company gates are ready.

WWW-005 previously remained open because platform choice was intentionally deferred during message/art-direction learning.

The implementation is now mature enough that leaving hosting undefined slows evidence collection more than it preserves useful optionality.

## Decision

Use **Vercel** as the provisional production hosting platform for the current static Astro company website.

This is a hosting decision, not a decision to add a Vercel server runtime or to change the product architecture.

## Why Vercel

For the current stage it provides:
- immutable preview deployments;
- a clean preview → verified candidate → production promotion path;
- GitHub-compatible CI/CD;
- support for static Astro output without adding React or a server adapter;
- straightforward production-origin, logs and deployment metadata for release evidence;
- low switching cost because the output remains static files.

## Alternatives considered

### GitHub Pages
Pros:
- simple static hosting;
- low platform complexity.

Cons:
- weaker preview/release-candidate workflow for the current evidence process;
- less useful deployment/observability context for future form/runtime evolution.

### Keep hosting undecided
Pros:
- preserves theoretical optionality.

Cons:
- blocks live-origin SEO, RUM and operational evidence;
- creates decision latency with little current benefit.

### Add a server-oriented platform/runtime now
Rejected:
- no current product requirement justifies server-rendering or a new runtime;
- would increase complexity and privacy/security surface without farmer value.

## Guardrails

1. Static Astro output remains the default.
2. Preview deployments are always non-indexable.
3. A production/indexable build must fail while any public release gate is BLOCKED.
4. The pilot form endpoint remains gated by privacy/company/pilot readiness.
5. Vercel credentials/project IDs live only in account/GitHub secret storage.
6. Do not add serverless functions merely because Vercel supports them.
7. Reconsider hosting if measured requirements show a material reliability, compliance, cost or portability disadvantage.

## Account-level dependency

The connected Vercel team currently has **no PROFIT project**. Repository code cannot create that account resource with the available project tools.

One account-level setup action is therefore still required:
- create/import the `MykolaDotsenko/profit-website` project in Vercel;
- record `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`;
- create a scoped `VERCEL_TOKEN`;
- add those three values to GitHub Actions secrets.

After that, repository-owned deployment is fully defined by the manual workflow and runbook.

## Consequences

Positive:
- live release evidence becomes operationally reachable;
- preview does not require weakening gates;
- no change to static architecture.

Cost:
- Vercel becomes an actual processor/provider that must be reflected in final privacy/legal review when the deployed site processes personal data;
- the team must own the Vercel project and token lifecycle.

## Reconsider if

- compliance/data-location requirements make the platform unsuitable;
- static-hosting cost/reliability becomes materially worse than a simpler alternative;
- product requirements genuinely require a different runtime;
- migration cost stops being low.
