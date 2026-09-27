/**
 * Content model. Components render these shapes; copy lives in src/content/<locale>/.
 * Swapping hero copy, proof objects or CTA copy after farmer evidence means editing data here,
 * not rewriting layout.
 */

export type HeroVariantId = 'h1' | 'h2' | 'h3' | 'h4';

/** Which proof body the hero shows. Each renders the same illustrative example. */
export type ProofKind = 'field-list' | 'field-flow' | 'field-composition';

/** Every public message is a hypothesis until farmer evidence promotes it (AGENTS.md §6). */
export interface MessageStatus {
  state: 'hypothesis';
  source: string;
  evidence: string;
}

export interface HeroVariant {
  id: HeroVariantId;
  direction: string;
  eyebrow: string;
  headline: string;
  support: string;
  proof: ProofKind;
  status: MessageStatus;
}

export interface Cta {
  label: string;
  href: string;
}

/** Who has to supply or approve missing content. */
export type GapOwner = 'owner' | 'legal' | 'domain' | 'product';

/** A visible note where content must come from the PROFIT team, not from AI drafting. */
export interface ContentGap {
  owner: GapOwner;
  text: string;
}

export interface SectionIntro {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
}

export interface TextItem {
  title: string;
  text: string;
}

export interface ImageAsset {
  src: string;
  srcset?: string;
  sizes?: string;
  width: number;
  height: number;
  alt: string;
  /** Who made it, where it came from, and the usage-rights/provenance reference. */
  credit: string;
}

/** Draft team proof. Publication still requires individual confirmation and consent. */
export interface TeamMember {
  name: string;
  role: string;
  strength: string;
  contribution: string;
  links: { label: string; href: string }[];
  /** Optional approved portrait. Absence is rendered only as an explicit review-state placeholder. */
  portrait?: ImageAsset;
}

export interface CompanyFact {
  label: string;
  value?: string;
  href?: string;
}

export interface Question {
  id: string;
  question: string;
  answer: string[];
  /** Set when the answer contains a commitment the team must confirm. */
  review?: ContentGap;
}

export type Actor = 'you' | 'profit' | 'both';

export interface Step {
  title: string;
  actor: Actor;
  text: string;
  /** How the step looks in Field Profitability, the first module. */
  module?: string;
}

export interface StatusItem {
  title: string;
  text: string;
  status: 'exists' | 'in-development' | 'hypothesis' | 'open';
}

/** Pilot form copy (Blueprint §16: five fields only). */
export interface PilotFormContent {
  eyebrow: string;
  title: string;
  requiredNote: string;
  assurances: string[];
  fields: {
    name: { label: string };
    organisation: { label: string };
    country: { label: string };
    email: { label: string; hint: string };
    farmType: { label: string; hint: string; placeholder: string; options: { value: string; label: string }[] };
  };
  submit: string;
  privacy: string;
  privacyReview: ContentGap;
  previewNote: string;
  errorPrefix: string;
  summaryTitle: string;
  errors: {
    name: { required: string };
    organisation: { required: string };
    country: { required: string };
    email: { required: string; format: string };
    farmType: { required: string };
  };
  status: { notConnected: string; sending: string; success: string; failure: string };
}
