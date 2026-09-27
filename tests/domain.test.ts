// Domain checks for the locale-neutral economics layer. Runs with Node's built-in test runner
// and type stripping (no dependencies): `npm test`.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  assertMetricDefinitionPublishable,
  computeFieldEconomics,
  METRICS,
  roundMoney,
} from '../src/domain/economics.ts';
import { assertReleaseConfiguration } from '../src/config/release.ts';
import { assertPublishable } from '../src/domain/evidence.ts';
import { assertEvidenceStateRequirements } from '../src/domain/vev.ts';
import { present } from '../src/domain/format.ts';
import { fieldSeasonExample, focusField } from '../src/content/examples/field-season.ts';
import { fieldSensitivityBreakEven, fieldSensitivityScenarios } from '../src/content/examples/field-sensitivity.ts';

const units = {
  perArea: { ha: '/ha' },
  perMass: { t: '/t' },
  mass: { t: 't' },
  area: { ha: 'ha' },
  spoken: { perArea: { ha: 'per hectare' }, perMass: { t: 'per tonne' }, mass: { t: 'tonnes' }, area: { ha: 'hectares' } },
} as const;

test('operating profit = revenue − variable costs − allocated fixed costs (Blueprint §2.2)', () => {
  const e = computeFieldEconomics({ yieldPerHa: 4.1, pricePerT: 180, variableCostsPerHa: 596, allocatedFixedCostsPerHa: 238 });
  assert.equal(roundMoney(e.revenuePerHa), 738);
  assert.equal(roundMoney(e.operatingCostsPerHa), 834);
  assert.equal(roundMoney(e.grossMarginPerHa), 142);
  assert.equal(roundMoney(e.operatingProfitPerHa), -96);
  assert.equal(roundMoney(e.breakEvenPrice), 203.41);
  assert.equal(Math.round(e.breakEvenYield * 100) / 100, 4.63);
  assert.notEqual(METRICS.operating_profit.formula, METRICS.gross_margin.formula);
});

test('statistics-calibrated focus field stays hypothetical and internally consistent', () => {
  const f = focusField(fieldSeasonExample);
  assert.equal(f.crop, 'wheat');
  assert.equal(f.inputs.yieldPerHa, 3.7);
  assert.equal(f.inputs.pricePerT, 207);
  assert.equal(f.inputs.variableCostsPerHa, 490);
  assert.equal(f.inputs.allocatedFixedCostsPerHa, 345);
  assert.equal(roundMoney(f.economics.revenuePerHa), 765.9);
  assert.equal(roundMoney(f.economics.operatingCostsPerHa), 835);
  assert.equal(roundMoney(f.economics.operatingProfitPerHa), -69.1);
  assert.equal(fieldSeasonExample.meta.evidence, 'hypothetical');
  assert.equal(fieldSeasonExample.meta.confidence, 'not-assessed');
  assert.deepEqual(fieldSeasonExample.meta.provenance, ['market', 'derived-modelled']);
});

test('deterministic sensitivity scenarios isolate yield and price without becoming a forecast', () => {
  const byId = Object.fromEntries(fieldSensitivityScenarios.map((s) => [s.id, s]));

  assert.equal(byId.base.operatingProfitPerHa, -69.1);
  assert.equal(byId.downside.operatingProfitPerHa, -214.62);
  assert.equal(byId['price-up'].operatingProfitPerHa, 7.49);
  assert.equal(byId['yield-up'].operatingProfitPerHa, 7.49);
  assert.equal(byId.upside.operatingProfitPerHa, 91.74);

  for (const s of fieldSensitivityScenarios) {
    assert.equal(s.operatingCostsPerHa, 835, `${s.id}: costs stay fixed by design`);
  }

  assert.equal(fieldSensitivityBreakEven.pricePerT, 225.68);
  assert.equal(fieldSensitivityBreakEven.yieldPerHa, 4.03);
});

test('the same value is presented per locale and currency, never with a hard-coded symbol', () => {
  const cases: [string, string][] = [
    ['en-GB', 'EUR'],
    ['fi-FI', 'EUR'],
    ['sv-SE', 'SEK'],
    ['da-DK', 'DKK'],
    ['pl-PL', 'PLN'],
    ['de-DE', 'EUR'],
    ['en-GB', 'GBP'],
  ];
  for (const [locale, currency] of cases) {
    const p = present({ metric: 'operating_profit', amount: -96, currency, perArea: 'ha' }, locale, units);
    assert.ok(p.figure.startsWith('−'), `${locale}/${currency}: typographic minus first, got "${p.figure}"`);
    assert.ok(!p.figure.includes('-'), `${locale}/${currency}: no hyphen-minus`);
    assert.ok(/96/.test(p.figure));
    assert.equal(p.unit, '/ha');
    assert.ok(p.negative);
    if (currency !== 'EUR') assert.ok(!p.figure.includes('€'), `${locale}/${currency}: no euro sign`);
  }
  assert.equal(present({ metric: 'operating_profit', amount: -96, currency: 'EUR', perArea: 'ha' }, 'en-GB', units).figure, '−€96');
});

test('mass values carry their own units and locale decimal separator', () => {
  assert.equal(present({ metric: 'yield', amount: 4.1, mass: 't', perArea: 'ha' }, 'en-GB', units).figure, '4.1');
  assert.equal(present({ metric: 'yield', amount: 4.1, mass: 't', perArea: 'ha' }, 'fi-FI', units).figure, '4,1');
});

test('a money value without a currency is rejected', () => {
  assert.throws(() => present({ metric: 'revenue', amount: 738, perArea: 'ha' }, 'en-GB', units), /no currency/);
});

test('illustrative material can only be Hypothetical with Confidence: Not assessed', () => {
  const ok = { evidence: 'hypothetical', confidence: 'not-assessed', provenance: ['farmer-provided'], illustrative: true } as const;
  assert.equal(assertPublishable(ok, 't'), ok);
  assert.throws(() => assertPublishable({ ...ok, evidence: 'verified' }, 't'));
  assert.throws(() => assertPublishable({ ...ok, confidence: 'high' }, 't'));
  assert.throws(() => assertPublishable({ ...ok, illustrative: false }, 't'));
});


test('VEV evidence ladder rejects unsupported promotions', () => {
  const observed = {
    evidence: 'observed',
    confidence: 'medium',
    illustrative: false,
    provenance: ['farmer-provided'],
    period: '2027 season',
    productionUnit: 'Field 31',
    actualOutcome: 'Operating profit observed',
    calculationDefinition: 'Operating profit = revenue − variable costs − allocated fixed costs',
  } as const;
  assert.doesNotThrow(() => assertEvidenceStateRequirements(observed));

  assert.throws(
    () => assertEvidenceStateRequirements({ ...observed, evidence: 'attributed' }),
    /baseline is required/,
  );

  const attributed = {
    ...observed,
    evidence: 'attributed',
    baseline: 'Prior comparable state',
    counterfactual: 'Continue current practice',
    intervention: 'Farmer decision supported by PROFIT',
    incrementalEconomicEffect: 120,
    attributionMethod: 'Matched current-practice comparison with stated limitations',
  } as const;
  assert.doesNotThrow(() => assertEvidenceStateRequirements(attributed));
  assert.throws(
    () => assertEvidenceStateRequirements({ ...attributed, confidence: 'insufficient-evidence' }),
    /Attributed\/Verified evidence requires assessed confidence/,
  );

  const verified = {
    ...attributed,
    evidence: 'verified',
    confidence: 'medium',
    evidencePackage: 'vev/customer-001/2027',
    review: { reviewer: 'VEV reviewer', date: '2027-12-01', conclusion: 'Standard met' },
  } as const;
  assert.doesNotThrow(() => assertEvidenceStateRequirements(verified));
  assert.throws(
    () => assertEvidenceStateRequirements({ ...verified, confidence: 'low' }),
    /Verified evidence requires High or Medium confidence/,
  );
  assert.throws(
    () => assertEvidenceStateRequirements({ ...verified, review: undefined }),
    /documented review/,
  );
});

test('Verified status is independent of whether economic effect is positive', () => {
  const base = {
    evidence: 'verified',
    confidence: 'high',
    illustrative: false,
    provenance: ['farmer-provided'],
    period: '2027 season',
    productionUnit: 'Field 31',
    actualOutcome: 'Measured outcome',
    calculationDefinition: 'Explicit economic definition',
    baseline: 'Baseline',
    counterfactual: 'Counterfactual',
    intervention: 'Decision',
    attributionMethod: 'Reviewed attribution method',
    evidencePackage: 'vev/customer-001/2027',
    review: { reviewer: 'VEV reviewer', date: '2027-12-01', conclusion: 'Standard met' },
  } as const;
  assert.doesNotThrow(() => assertEvidenceStateRequirements({ ...base, incrementalEconomicEffect: 100 }));
  assert.doesNotThrow(() => assertEvidenceStateRequirements({ ...base, incrementalEconomicEffect: 0 }));
  assert.doesNotThrow(() => assertEvidenceStateRequirements({ ...base, incrementalEconomicEffect: -100 }));
});

test('public metric definitions must be explicitly confirmed', () => {
  assert.equal(METRICS.break_even_price.status, 'confirmed');
  assert.match(METRICS.break_even_price.source, /7d07345/);

  const provisional = {
    ...METRICS.break_even_price,
    status: 'provisional' as const,
    reviewNote: 'Needs product-owner confirmation.',
  };
  assert.throws(
    () => assertMetricDefinitionPublishable(provisional, 'test'),
    /provisional definition/,
  );
});

test('release gate blocks indexable builds and form endpoints while launch blockers remain open', () => {
  assert.doesNotThrow(() => assertReleaseConfiguration({ indexable: false, pilotFormEndpoint: null }));
  assert.throws(
    () => assertReleaseConfiguration({ indexable: true, pilotFormEndpoint: null }),
    (error: unknown) => {
      assert.ok(error instanceof Error);
      assert.match(error.message, /Public release blocked/);
      assert.match(error.message, /example-domain-review/);
      return true;
    },
  );
  assert.throws(
    () => assertReleaseConfiguration({ indexable: false, pilotFormEndpoint: 'https://example.test/pilot' }),
    (error: unknown) => {
      assert.ok(error instanceof Error);
      assert.match(error.message, /Pilot form endpoint blocked/);
      assert.match(error.message, /privacy-notice/);
      assert.match(error.message, /company-details/);
      assert.doesNotMatch(error.message, /pilot-process/);
      return true;
    },
  );
});
