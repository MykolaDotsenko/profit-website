# Vercel Hosting & Release-Candidate Runbook v1

Status: **Repository side ready; account-level project creation pending**  
Date: **2026-09-27**  
Decision: ADR 0004

## Objective

Create a real deployment path without weakening PROFIT's release-evidence rules.

The repository owns:
- build and quality checks;
- preview/non-indexability behavior;
- public release gate enforcement;
- reproducible deploy workflow.

The Vercel account owns:
- project;
- token;
- project/org IDs;
- domain;
- deployment logs/analytics.

## One-time account setup

The connected Vercel team currently contains no PROFIT project.

Perform once in the Vercel account:
1. Import GitHub repository `MykolaDotsenko/profit-website`.
2. Confirm framework: Astro.
3. Keep the project static; do not add an adapter/server runtime.
4. Record the Vercel organisation/team ID.
5. Record the Vercel project ID.
6. Create a scoped deployment token.
7. Add GitHub Actions secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

Do not commit any of these values.

## Preview deployment

GitHub → Actions → **Deploy Website (Manual)** → target: `preview`.

The workflow:
1. installs dependencies;
2. runs the full PROFIT verification contract with:
   - `SITE_INDEXABLE=false`;
   - `SHOW_CONTENT_STATUS=true`;
3. pulls Vercel preview settings;
4. builds the Vercel artifact;
5. deploys an immutable preview;
6. writes URL + commit SHA to the workflow summary.

Preview is evidence/testing infrastructure, not a public launch.

## Production deployment

Target `production` is intentionally harder.

Before Vercel receives the build, the workflow runs:
- `SITE_INDEXABLE=true`;
- `SHOW_CONTENT_STATUS=false`;
- `npm run verify`.

The Astro release configuration then rejects the build if any public release gate is still BLOCKED.

This makes production deployment downstream of evidence, not a way to bypass it.

## Pilot endpoint

Do not configure `PILOT_FORM_ENDPOINT` until:
- privacy-notice READY;
- company-details READY;
- pilot-process READY.

The application build contains an additional hard gate for this.

## Live evidence after first preview

Use the deployed, non-indexable preview to collect:
- manual keyboard/screen-reader audit;
- 200%/400% zoom/reflow audit;
- live canonical/robots/sitemap/404 diagnostics using a candidate `SITE_URL`;
- runtime/network inspection;
- operational notification testing where available.

Do not mark production-origin criteria PASS merely because preview exists.

## Evidence after public production release

Complete:
- `docs/release/evidence-forms/production-release-verification-record.md`;
- production Core Web Vitals / RUM once statistically meaningful;
- live-origin canonical/robots/sitemap verification;
- final monitoring/incident ownership;
- pilot delivery smoke test after legal/company gates permit the endpoint.

## CLI pin

The manual workflow pins Vercel CLI `59.19.1`, the npm-published version verified during the 2026-09-27 hosting decision.

Upgrade deliberately through a PR; do not use `@latest` in release automation.
