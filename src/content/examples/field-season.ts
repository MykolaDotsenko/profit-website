/**
 * HYPOTHETICAL EXAMPLE — one invented farm, three fields, one season.
 *
 * The values are the WWW-000 stimulus values (prototypes/hero-message-test), so the site and the
 * test never show different numbers for the same example. They are illustrative placeholders,
 * not customer data, regional facts or PROFIT outputs. The Field 31 split into variable and
 * allocated fixed costs is new here and, like the rest, needs a human plausibility review for
 * the target market (protocol D6) before launch.
 *
 * The currency is data carried by the example, not a site default.
 */
import { assertPublishable, type EvidenceMeta } from '../../domain/evidence';
import { computeFieldEconomics, roundMoney, type CurrencyCode, type FieldEconomics, type FieldInputs, type Period } from '../../domain/economics';

export interface ExampleField {
  id: string;
  crop: 'wheat' | 'barley';
  areaHa: number;
  /** Given directly when the example does not break the field down. */
  operatingProfitPerHa: number;
  inputs?: FieldInputs;
  economics?: FieldEconomics;
}

export interface FieldSeasonExample {
  id: string;
  domain: 'crop';
  currency: CurrencyCode;
  period: Period;
  meta: EvidenceMeta;
  fields: ExampleField[];
  /** The field every proof object focuses on. */
  focusFieldId: string;
}

const field31Inputs: FieldInputs = {
  yieldPerHa: 4.1,
  pricePerT: 180,
  variableCostsPerHa: 596,
  allocatedFixedCostsPerHa: 238,
};
const field31 = computeFieldEconomics(field31Inputs);

// The stimulus shows revenue €738/ha, operating costs €834/ha and operating profit −€96/ha.
// Fail the build if the arithmetic and the published numbers ever drift apart.
const expected = { revenuePerHa: 738, operatingCostsPerHa: 834, operatingProfitPerHa: -96 };
for (const [key, value] of Object.entries(expected) as [keyof typeof expected, number][]) {
  if (roundMoney(field31[key]) !== value) {
    throw new Error(`Illustrative example drifted: ${key} is ${field31[key]}, stimulus shows ${value}.`);
  }
}

export const fieldSeasonExample: FieldSeasonExample = {
  id: 'crop-season-example-01',
  domain: 'crop',
  currency: 'EUR',
  period: { kind: 'season', count: 1 },
  meta: assertPublishable(
    { evidence: 'hypothetical', confidence: 'not-assessed', provenance: ['farmer-provided'], illustrative: true },
    'fieldSeasonExample',
  ),
  focusFieldId: '31',
  fields: [
    { id: '24', crop: 'wheat', areaHa: 41.7, operatingProfitPerHa: 637 },
    { id: '12', crop: 'wheat', areaHa: 23.0, operatingProfitPerHa: 148 },
    {
      id: '31',
      crop: 'barley',
      areaHa: 18.4,
      operatingProfitPerHa: field31.operatingProfitPerHa,
      inputs: field31Inputs,
      economics: field31,
    },
  ],
};

export function focusField(example: FieldSeasonExample): ExampleField & { inputs: FieldInputs; economics: FieldEconomics } {
  const f = example.fields.find((x) => x.id === example.focusFieldId);
  if (!f || !f.inputs || !f.economics) throw new Error('Focus field needs inputs and economics.');
  return f as ExampleField & { inputs: FieldInputs; economics: FieldEconomics };
}
