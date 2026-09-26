# Hero message test stimulus — WWW-000

Neutral static scaffold for the controlled H1/H2/H3 hero-message test.

Protocol and status: [`docs/experiments/hero-message-test-v1.md`](../../docs/experiments/hero-message-test-v1.md). **Draft, not approved to run** until its §2 items are settled.

## Open

Open `index.html` in a current browser. No build step, package manager, framework, external font, image or network request is needed.

- `index.html` — moderator view. **Never show it to participants.**
- `index.html#h1`, `#h2`, `#h3` — each stimulus, shown immediately. Works without JavaScript.
- Session keys (small inline script):
  - <kbd>1</kbd>/<kbd>2</kbd>/<kbd>3</kbd> loads a direction behind a hidden screen;
  - <kbd>Space</kbd> shows it for a fixed time, then hides it;
  - <kbd>B</kbd> shows or hides it without a timer.
- Exposure time: `index.html?t=10`. It is limited to the Blueprint's 5–10 s; the default is 10.

## What this is — and is not

- A **message** test instrument. The three directions differ only in eyebrow, headline, support and proof-card body.
- **Not an art direction.** It deliberately avoids the visual grammar of A/B/C: no photography, brand font, colour semantics, field geometry or motion. Do not reuse it as a design base for WWW-001.
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
| Eyebrows, headlines, supports, CTAs | `docs/website-blueprint-v1.md` §5, verbatim | re-check if the Blueprint changes |
| Evidence/confidence labels | AGENTS.md §4 / Blueprint §8 canonical labels | — |
| Decision question | adapted from `docs/experiments/field-economics-motion-test-v1.md` | human |
| Field names, crops, areas, yields, costs, margins | illustrative placeholders; Field 24 reuses the motion-protocol scenario, the rest are AI-drafted for internal consistency only | **human plausibility review (protocol D6) before any session** |
| Layout and styling | AI-drafted neutral scaffold (Builder role) | human review (an AI review does not replace it) |

The numbers are not customer data, regional facts or PROFIT outputs.

## Editing or localizing

- Change shared strings in their single location.
- These values appear more than once and must be changed together: `Field 31 · Barley · 18.4 ha` and `−€96/ha` (H1/H2/H3), `4.1 t/ha` and `€834/ha` (H2/H3).
- When translating, set `<html lang>`. Translate and format all three directions with the same care; the protocol (D5) requires back-translation.
- Freeze the file before the round and record its git commit hash with every session.

## Known limitations

- System fonts differ by operating system. Run every session on one device and browser.
- Without photography, absolute comprehension may be lower than for a finished hero. The protocol §12 says how to handle an all-directions failure.
- Mobile (~390 px) is a team design gate in this round, not a participant task.
- The keys need a physical keyboard. On phones, use the `#h1`/`#h2`/`#h3` links for team review only.
