# Production Release Verification Record

Status: **Blank release-candidate evidence form**

Supports CP-03, PE-02, PE-04, RI-03 and RI-04. Complete against the deployed non-indexable release candidate first, then final release SHA.

## Candidate
- SHA:
- Production/staging origin:
- Date:
- Operator:

## Pilot delivery
- Production endpoint:
- Privacy/company/pilot gates READY before endpoint enabled: [ ] Yes [ ] No
- Server-side validation verified: [ ] Yes [ ] No
- Successful delivery verified: [ ] Yes [ ] No
- Failure behavior verified: [ ] Yes [ ] No
- Duplicate/rate/abuse controls verified where implemented: [ ] Yes [ ] No
- PII not exposed in unnecessary logs: [ ] Yes [ ] No
- Destination owner confirms receipt: [ ] Yes [ ] No

Evidence:

## Core Web Vitals / performance
Production-equivalent lab check:
- Tool/environment:
- LCP:
- INP / interaction proxy:
- CLS:
- Main image bytes:
- JS bytes:
- Font bytes:

RUM once statistically meaningful:
- Period:
- Population:
- Mobile LCP p75:
- Mobile INP p75:
- Mobile CLS p75:
- Desktop LCP p75:
- Desktop INP p75:
- Desktop CLS p75:
- Thresholds met: [ ] Yes [ ] No

## Image/font policy
- [ ] documentary images use suitable modern formats
- [ ] responsive sizes/srcset appropriate
- [ ] dimensions/aspect ratio prevent avoidable CLS
- [ ] LCP image loading priority correct
- [ ] below-fold assets lazy load where appropriate
- [ ] font files/payload/preloads are minimal and justified
- [ ] no unexpected third-party payload

## SEO / crawl
- Canonical SITE_URL:
- [ ] canonical links resolve to production origin
- [ ] robots behavior matches release state
- [ ] sitemap contains intended public routes only
- [ ] titles/descriptions are unique and substantive
- [ ] OG URL/title/description correct
- [ ] 404 returns HTTP 404
- [ ] no accidental noindex remains after final gate-approved release
- [ ] no accidental indexability on non-release candidate

## Operations / monitoring
Named owner:
- Website availability:
- Pilot delivery:
- Privacy requests:
- Critical incidents:

Monitoring:
- Availability check:
- Form/delivery alert:
- Error/log review:
- Privacy request channel:
- Incident contact:

Smoke tests:
- [ ] availability notification
- [ ] form delivery notification
- [ ] direct contact send/receive
- [ ] privacy contact route

## Result
- [ ] PASS for all applicable release criteria
- [ ] FAIL / incomplete

Open defects:
Operator:
Date:
