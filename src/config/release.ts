/**
 * Public-release hard gate.
 *
 * The coded foundation is intentionally usable before validation, but an indexable build must
 * not silently turn hypotheses, legal gaps or missing trust content into public claims.
 *
 * Resolve a gate only after the named human/evidence owner has supplied the missing input.
 * A "ready" gate must carry an evidence reference so readiness is auditable.
 */
export type ReleaseGateArea = 'message' | 'design' | 'legal' | 'content' | 'trust';
export type ReleaseGateOwner = 'product' | 'owner' | 'legal' | 'domain';
export type ReleaseGateState = 'blocked' | 'ready';

export interface ReleaseGate {
  id:
    | 'hero-message'
    | 'art-direction'
    | 'privacy-notice'
    | 'data-terms'
    | 'pilot-process'
    | 'company-details'
    | 'direct-contact'
    | 'team-proof'
    | 'documentary-image'
    | 'example-plausibility'
    | 'example-domain-review'
    | 'evidence-definitions';
  area: ReleaseGateArea;
  owner: ReleaseGateOwner;
  state: ReleaseGateState;
  reason: string;
  evidence?: string;
}

/**
 * Current release truth, intentionally explicit rather than inferred from marketing copy.
 * This list is a safety boundary: changing BLOCKED -> READY is a material release action.
 */
export const RELEASE_GATES: readonly ReleaseGate[] = [
  {
    id: 'hero-message',
    area: 'message',
    owner: 'product',
    state: 'blocked',
    reason: 'WWW-000 has not produced farmer evidence for a surviving public hero message.',
  },
  {
    id: 'art-direction',
    area: 'design',
    owner: 'product',
    state: 'blocked',
    reason: 'WWW-001/WWW-002 have not validated a production art direction with farmers.',
  },
  {
    id: 'privacy-notice',
    area: 'legal',
    owner: 'legal',
    state: 'blocked',
    reason: 'A privacy/data readiness pack exists, but the final notice still needs confirmed controller/contact, legal basis, retention, processors/transfers, rights wording and legal approval.',
  },
  {
    id: 'data-terms',
    area: 'legal',
    owner: 'legal',
    state: 'blocked',
    reason: 'Draft farm-data term requirements exist, but permitted use, access/sharing, retention/deletion/export, secondary use/model training and security responsibilities are not yet approved.',
  },
  {
    id: 'pilot-process',
    area: 'content',
    owner: 'owner',
    state: 'blocked',
    reason: 'Pilot reply owner, channel and timing are not confirmed.',
  },
  {
    id: 'company-details',
    area: 'content',
    owner: 'owner',
    state: 'blocked',
    reason: 'Legal company identity/contact details are not complete for public release.',
  },
  {
    id: 'direct-contact',
    area: 'content',
    owner: 'owner',
    state: 'blocked',
    reason: 'A direct contact path for investors, partners and other enquiries is not confirmed.',
  },
  {
    id: 'team-proof',
    area: 'content',
    owner: 'owner',
    state: 'blocked',
    reason: 'Team names, roles, relevant expertise and consent to publish are not complete.',
  },
  {
    id: 'documentary-image',
    area: 'trust',
    owner: 'owner',
    state: 'blocked',
    reason: 'An approved documentary agricultural asset with rights/provenance is not supplied.',
  },
  {
    id: 'example-plausibility',
    area: 'trust',
    owner: 'domain',
    state: 'ready',
    reason:
      'Illustrative field economics are statistics-calibrated against completed Finnish Luke 2025 yield/producer-price references and a 2024 EconomyDoctor cereal-farm cost scale. This resolves placeholder plausibility only; it is not farmer validation.',
    evidence: 'docs/experiments/www-000-statistical-surrogate-v1.md',
  },
  {
    id: 'example-domain-review',
    area: 'trust',
    owner: 'domain',
    state: 'blocked',
    reason:
      'WWW-000 D6 remains open: a human Market-A domain/economic reviewer must validate the calibrated scenario values, units and local terminology before public release.',
  },
  {
    id: 'evidence-definitions',
    area: 'trust',
    owner: 'product',
    state: 'ready',
    reason: 'PROFIT VEV Standard v1 defines the evidence ladder, confidence thresholds, attribution requirements and verification review rule; public definitions are aligned to that standard.',
    evidence: 'docs/methodology/vev-standard-v1.md',
  },
] as const;

const FORM_GATE_IDS = new Set<ReleaseGate['id']>(['privacy-notice', 'company-details', 'pilot-process']);

function blockersFor(scope: 'public-site' | 'pilot-form'): ReleaseGate[] {
  return RELEASE_GATES.filter((gate) => {
    if (gate.state !== 'blocked') return false;
    return scope === 'public-site' || FORM_GATE_IDS.has(gate.id);
  });
}

function assertGateDefinitions(): void {
  const ids = new Set<string>();
  for (const gate of RELEASE_GATES) {
    if (ids.has(gate.id)) throw new Error(`Duplicate release gate: ${gate.id}`);
    ids.add(gate.id);
    if (gate.state === 'ready' && !gate.evidence?.trim()) {
      throw new Error(`Release gate "${gate.id}" is READY without an evidence reference.`);
    }
  }
}

export function assertReleaseConfiguration(input: {
  indexable: boolean;
  pilotFormEndpoint: string | null;
}): void {
  assertGateDefinitions();

  if (input.indexable) {
    const blockers = blockersFor('public-site');
    if (blockers.length) {
      const detail = blockers.map((gate) => `${gate.id} [${gate.owner}]: ${gate.reason}`).join('; ');
      throw new Error(`Public release blocked. SITE_INDEXABLE=true is not allowed while release gates are open: ${detail}`);
    }
  }

  if (input.pilotFormEndpoint) {
    const blockers = blockersFor('pilot-form');
    if (blockers.length) {
      const detail = blockers.map((gate) => `${gate.id} [${gate.owner}]: ${gate.reason}`).join('; ');
      throw new Error(`Pilot form endpoint blocked until required privacy/company/pilot gates are ready: ${detail}`);
    }
  }
}
