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
import { present } from '../src/domain/format.ts';

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
    /Public release blocked/,
  );
  assert.throws(
    () => assertReleaseConfiguration({ indexable: false, pilotFormEndpoint: 'https://example.test/pilot' }),
    /Pilot form endpoint blocked/,
  );
});
