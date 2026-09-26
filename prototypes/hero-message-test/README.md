# Hero message test stimulus — WWW-000

Neutral static scaffold for the controlled H1/H2/H3 hero-message test.

Protocol and status: [`docs/experiments/hero-message-test-v1.md`](../../docs/experiments/hero-message-test-v1.md). **Operationally prepared, not approved to run.** The test candidates are H1/H2/H3 **v2**; v1 was superseded before farmer testing by the product-truth gate. D1–D4 are settled. D5–D8 have operational checklists in [`www-000-preflight-pack-v1.md`](../../docs/experiments/www-000-preflight-pack-v1.md), but their human gates remain open.

## Open

Open `index.html` in a current browser. No build step, package manager, framework, external font, image or network request is needed.

- `index.html` — moderator view. **Never show it to participants.**
- `index.html#h1`, `#h2`, `#h3` — each stimulus. The links in the moderator view show it immediately, with or without JavaScript. With JavaScript on, opening or reloading one of these addresses directly starts on the hidden screen.
- Session keys (small inline script):
  - <kbd>1</kbd>/<kbd>2</kbd>/<kbd>3</kbd> loads a direction behind a hidden screen;
  - <kbd>Space</kbd> shows it for 10 s, then hides it (Phase A);
  - <kbd>B</kbd> shows or hides it without a timer (Phase B: number key, then <kbd>B</kbd>).
- Exposure is fixed at 10 s (protocol D3) and cannot be configured.
- Opening or reloading a stimulus address starts on the hidden screen. Browser Back keeps it hidden; <kbd>B</kbd> leaves it.

## What this is — and is not

- A **message** test instrument. The three directions differ only in eyebrow, headline, support and proof-card body.
- **Not an art direction.** It avoids A and B (no photography, no field geometry) and has no brand font, colour semantics or motion. Its neutral numeric card shares part of C's grammar; protocol §3 explains the risk. D8 is approved in principle as one identical documentary field-crop image, but none is added until a licensed/approved asset with provenance is supplied. Never substitute a synthetic image. Do not reuse it as a design base for WWW-001.
- **Not a master-brand statement.** It tests the Field Profitability wedge. The PROFIT master brand stays extensible across crops, horticulture/greenhouse production and livestock (Blueprint §2.1).
- **Not production code.**
- **Not evidence of anything yet.** No farmer has seen it.

## How the controls are enforced

- Every shared element exists **once** in `index.html`: header, CTAs, proof-card frame, `HYPOTHETICAL EXAMPLE`, `Confidence: Not assessed`, decision question and source line. They cannot drift between directions.
- Only elements marked `class="v v1|v2|v3"` differ.
- The three proof-card bodies share one grid cell, so the card is the same size in every direction on any device or font.
- CTAs are placeholder links (`<a>` without `href`). They look real but do nothing, so a click cannot lose the stimulus.

## Content provenance

| Content | Source | Review needed |
|---|---|---|
| Eyebrows, headlines, supports, CTAs | `docs/website-blueprint-v1.md` §5 **v2** candidates, verbatim (v1 superseded pre-test by the product-truth gate) | re-check if the Blueprint changes |
| Evidence/confidence labels | AGENTS.md §4 / Blueprint §8 canonical labels. These are website evidence semantics for illustrative material, not a claim that Field Profitability assesses confidence. | — |
| Decision question | adapted from `docs/experiments/field-economics-motion-test-v1.md` | human |
| Field names, areas and field-level economics | statistics-calibrated synthetic scenario; calibration uses current Finnish Luke crop/price/cost-scale references documented in `docs/experiments/www-000-statistical-surrogate-v1.md` | **human terminology/domain review still required when possible; statistics do not replace farmer evidence** |
| Metric names (operating profit = revenue − variable costs − allocated fixed costs; not gross margin or net profit) | Field Profitability product-truth boundary, Blueprint §2.2 (unmerged, unshipped vertical slice) | re-check if the boundary changes |
| Source line | "Illustrative source: farmer-provided field records · one season" (Blueprint §8 provenance category); labelled illustrative because the numbers come from no records | — |
| Layout and styling | AI-drafted neutral scaffold (Builder role) | human review (an AI review does not replace it) |

The field records are synthetic and are not customer data or PROFIT outputs. Official statistics are used only to calibrate plausible ranges; see the surrogate-validation note.

## Editing or localizing

- Change shared strings in their single location.
- These values appear more than once and must be changed together: `Field 31 · Wheat · 18.4 ha` and `−€69/ha` (H1/H2/H3); `3.7 t/ha`, `€766/ha` and `€835/ha` (H2/H3).
- Do not localize before the recruited cohort's language is decided (protocol D5). When translating, set `<html lang>`, translate and format all three directions with the same care, and back-translate.
- Freeze the file before the round and record its git commit hash with every session.

## Known limitations

- System fonts differ by operating system. Run every session on one device and browser.
- Until the D8 image is added, absolute comprehension may be lower than for a finished hero, and the numeric card may read as accounting/finance. Protocol §3 and §12 say how to handle a failure seen in all directions. Once the image is added, re-check equal visual weight.
- Mobile (~390 px) is a team design gate in this round, not a participant task.
- The keys need a physical keyboard. On phones (team review only), open `index.html` and tap a direction link. A direct stimulus address starts hidden and cannot be revealed without a keyboard.
