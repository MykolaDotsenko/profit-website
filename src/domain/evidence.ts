/**
 * Canonical evidence semantics (AGENTS.md §4, Blueprint §8).
 *
 * These are identities, not display strings. Labels live in src/i18n so they can be
 * translated without changing meaning.
 */

/** Evidence ladder, lowest to highest. Never skip a rung for presentation. */
export const EVIDENCE_LADDER = ['hypothetical', 'modelled', 'observed', 'attributed', 'verified'] as const;
export type EvidenceState = (typeof EVIDENCE_LADDER)[number];

/** Assessed confidence levels. */
export const ASSESSED_CONFIDENCE = ['high', 'medium', 'low', 'insufficient-evidence'] as const;
export type AssessedConfidence = (typeof ASSESSED_CONFIDENCE)[number];

/**
 * `not-assessed` is a meta-state: confidence was not evaluated. It is not a confidence level
 * and must never be rendered as one.
 */
export type ConfidenceState = AssessedConfidence | 'not-assessed';

/** Data provenance categories (Blueprint §8). A category is a label, not a claim that PROFIT uses that source. */
export const PROVENANCE = ['farmer-provided', 'machinery', 'satellite', 'weather', 'market', 'derived-modelled'] as const;
export type Provenance = (typeof PROVENANCE)[number];

export interface EvidenceMeta {
  evidence: EvidenceState;
  confidence: ConfidenceState;
  provenance: readonly Provenance[];
  /** True when the values come from no real records at all. */
  illustrative: boolean;
}

/** 1-based rung, used for the non-colour position cue in evidence labels. */
export function evidenceRung(state: EvidenceState): number {
  return EVIDENCE_LADDER.indexOf(state) + 1;
}

/**
 * Guards the one combination this site may publish today. An illustrative example must be
 * Hypothetical and Not assessed. Anything higher needs real evidence and a reviewed source,
 * so the build fails instead of silently upgrading a claim.
 */
export function assertPublishable(meta: EvidenceMeta, context: string): EvidenceMeta {
  if (meta.illustrative && (meta.evidence !== 'hypothetical' || meta.confidence !== 'not-assessed')) {
    throw new Error(`${context}: illustrative material must be Hypothetical with Confidence: Not assessed.`);
  }
  if (!meta.illustrative) {
    throw new Error(
      `${context}: non-illustrative evidence needs a documented source, period and review. None exists yet (AGENTS.md §4).`,
    );
  }
  return meta;
}
