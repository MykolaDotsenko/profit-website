import type { AreaUnit, MassUnit, MetricId } from '../domain/economics';
import type { AssessedConfidence, EvidenceState, Provenance } from '../domain/evidence';

export interface UnitStrings {
  perArea: Record<AreaUnit, string>;
  perMass: Record<MassUnit, string>;
  mass: Record<MassUnit, string>;
  area: Record<AreaUnit, string>;
  spoken: {
    perArea: Record<AreaUnit, string>;
    perMass: Record<MassUnit, string>;
    mass: Record<MassUnit, string>;
    area: Record<AreaUnit, string>;
  };
}

export interface NavItem {
  href: string;
  label: string;
}

/** Interface strings shared by every page. Page copy lives in src/content/<locale>/. */
export interface UIStrings {
  brand: string;
  skipLink: string;
  language: {
    label: string;
    english: string;
    ukrainian: string;
    finnish: string;
    danish: string;
  };
  common: {
    pilot: string;
    howPilotWouldWork: string;
    dataQualityPath: string;
    dataLifecycle: string;
    decisionSupportMethod: string;
    dataQualityGates: string;
    decisionSupportArchitecture: string;
    primaryLegalReferences: string;
    or: string;
    currentScope: string;
    qualifyConversation: string;
  };
  nav: {
    label: string;
    menu: string;
    close: string;
    items: NavItem[];
    cta: NavItem;
  };
  footer: {
    label: string;
    tagline: string;
    evidenceNote: string;
    companyGap: string;
    groups: { title: string; items: NavItem[] }[];
  };
  status: {
    previewLabel: string;
    previewText: string;
    gapLabel: string;
    reviewLabel: string;
    imagePending: string;
    documentaryAgriculture: string;
  };
  production: {
    currentUnit: string;
    unitLabel: string;
    scopeLabel: string;
    scopeVariableLabel: string;
    scopeInvariantLabel: string;
    productStatus: string;
    inDevelopment: string;
    evidenceLabel: string;
    productLabel: string;
    periodLabel: string;
    roleLabel: string;
    currentExample: string;
    economicState: string;
    productionContext: string;
    brandFlow: string;
  };
  evidence: {
    exampleLabel: string;
    states: Record<EvidenceState, string>;
    stateDescriptions: Record<EvidenceState, string>;
    confidenceLabel: string;
    confidence: Record<AssessedConfidence | 'not-assessed', string>;
    provenance: Record<Provenance, string>;
    illustrativeSource: string;
    rungOf: (rung: number, total: number) => string;
  };
  metrics: Record<MetricId, string>;
  units: UnitStrings;
  crops: Record<string, string>;
  field: (id: string) => string;
  seasons: (count: number) => string;
  meta: {
    defaultDescription: string;
    titleSuffix: string;
  };
}
