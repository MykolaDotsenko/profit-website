import type { AssessedConfidence, ConfidenceState, EvidenceState, Provenance } from './evidence.ts';

export interface VevAssessment {
  evidence: EvidenceState;
  confidence: ConfidenceState;
  illustrative: boolean;
  provenance: readonly Provenance[];
  period?: string;
  productionUnit?: string;
  baseline?: string;
  counterfactual?: string;
  intervention?: string;
  actualOutcome?: string;
  incrementalEconomicEffect?: number;
  attributionMethod?: string;
  calculationDefinition?: string;
  assumptions?: readonly string[];
  evidencePackage?: string;
  review?: { reviewer: string; date: string; conclusion: string };
}

const assessed = new Set<AssessedConfidence>(['high', 'medium', 'low', 'insufficient-evidence']);
const attributionConfidence = new Set<AssessedConfidence>(['high', 'medium', 'low']);
const verificationConfidence = new Set<AssessedConfidence>(['high', 'medium']);

function requireText(value: string | undefined, field: string, context: string): void {
  if (!value?.trim()) throw new Error(`${context}: ${field} is required.`);
}

function requireRealAssessment(a: VevAssessment, context: string): void {
  if (a.illustrative) throw new Error(`${context}: real evidence states cannot be illustrative.`);
  if (!a.provenance.length) throw new Error(`${context}: provenance is required.`);
  requireText(a.period, 'period', context);
  requireText(a.productionUnit, 'productionUnit', context);
  requireText(a.calculationDefinition, 'calculationDefinition', context);
}

export function assertEvidenceStateRequirements(a: VevAssessment, context = 'VEV assessment'): VevAssessment {
  if (a.evidence === 'hypothetical') return a;

  if (a.evidence === 'modelled') {
    if (a.illustrative) return a;
    if (!a.provenance.length) throw new Error(`${context}: modelled assessment requires provenance.`);
    requireText(a.calculationDefinition, 'calculationDefinition', context);
    return a;
  }

  requireRealAssessment(a, context);
  requireText(a.actualOutcome, 'actualOutcome', context);

  if (a.evidence === 'observed') return a;

  requireText(a.baseline, 'baseline', context);
  requireText(a.counterfactual, 'counterfactual', context);
  requireText(a.intervention, 'intervention', context);
  requireText(a.attributionMethod, 'attributionMethod', context);
  if (typeof a.incrementalEconomicEffect !== 'number' || !Number.isFinite(a.incrementalEconomicEffect)) {
    throw new Error(`${context}: finite incrementalEconomicEffect is required.`);
  }
  if (!assessed.has(a.confidence as AssessedConfidence) || !attributionConfidence.has(a.confidence as AssessedConfidence)) {
    throw new Error(`${context}: Attributed/Verified evidence requires assessed confidence of High, Medium or Low.`);
  }

  if (a.evidence === 'attributed') return a;

  if (!verificationConfidence.has(a.confidence as AssessedConfidence)) {
    throw new Error(`${context}: Verified evidence requires High or Medium confidence.`);
  }
  requireText(a.evidencePackage, 'evidencePackage', context);
  if (!a.review) throw new Error(`${context}: Verified evidence requires a documented review.`);
  requireText(a.review.reviewer, 'review.reviewer', context);
  requireText(a.review.date, 'review.date', context);
  requireText(a.review.conclusion, 'review.conclusion', context);

  return a;
}
