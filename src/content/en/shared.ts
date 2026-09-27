/**
 * Copy shared by several pages. English development content.
 *
 * Source rules: hero candidates are verbatim Blueprint §5 v2; product statements stay inside the
 * Field Profitability product-truth boundary (Blueprint §2.2), which is unshipped; evidence
 * language follows AGENTS.md §4. Anything that is a commitment the team has to confirm carries
 * a `review` gap instead of being presented as settled.
 */
import type { ContentGap, HeroVariant, Question, TextItem } from '../types';
import { assertMetricPublishable, type MetricId } from '../../domain/economics';

const WWW000 = 'No farmer evidence yet: WWW-000 has not run.';

/** WWW-000 v2 candidates (Blueprint §5). All three are untested hypotheses. */
export const heroVariants: Record<HeroVariant['id'], HeroVariant> = {
  h1: {
    id: 'h1',
    direction: 'Economic visibility / farmer job first',
    eyebrow: 'Field economics',
    headline: 'See which fields make money — and which don’t.',
    support:
      'PROFIT compares each field’s revenue with the costs allocated to it, so you can see operating profitability field by field.',
    proof: 'field-list',
    status: { state: 'hypothesis', source: 'Blueprint §5 H1 v2 — WWW-000 test candidate', evidence: WWW000 },
  },
  h2: {
    id: 'h2',
    direction: 'Decision intelligence / decision-context first',
    eyebrow: 'Agricultural Decision Intelligence',
    headline: 'Connect field data to the economics behind your decisions.',
    support:
      'PROFIT turns yield, price and allocated-cost data into operating-profit and break-even metrics you can inspect before deciding what to do next.',
    proof: 'field-flow',
    status: { state: 'hypothesis', source: 'Blueprint §5 H2 v2 — WWW-000 test candidate', evidence: WWW000 },
  },
  h3: {
    id: 'h3',
    direction: 'Field Profitability / product proof first',
    eyebrow: 'Field Profitability',
    headline: 'See operating profit by field — and what goes into it.',
    support:
      'PROFIT brings yield, price, variable costs and allocated fixed costs together into field-level operating economics, including break-even price and yield.',
    proof: 'field-composition',
    status: { state: 'hypothesis', source: 'Blueprint §5 H3 v2 — WWW-000 test candidate', evidence: WWW000 },
  },
};

export const primaryCta = { label: 'Join the pilot', href: '/contact/' };

/**
 * Master-brand production scope.
 *
 * These are company/product-direction contexts, not claims that each domain is a shipped PROFIT
 * module. Field Profitability remains the only concrete product boundary on this website.
 */
export const productionSystems: TextItem[] = [
  {
    title: 'Arable & field crops',
    text: 'Field- and season-level economics across yield, price, inputs, machinery and allocated costs. Field Profitability is the current first concrete focus.',
  },
  {
    title: 'Horticulture, orchards & berries',
    text: 'Block, variety, marketable yield, grade, labour, storage, losses and realised price create a different economic model from field crops.',
  },
  {
    title: 'Vegetables & greenhouse production',
    text: 'Crop cycle, labour, energy, inputs, quality, timing and selling price shape the economics of protected and open-field production.',
  },
  {
    title: 'Pig production',
    text: 'Feed, growth, mortality, throughput, batch performance and selling conditions shape the economics of a production cycle.',
  },
  {
    title: 'Dairy',
    text: 'Milk production, feed, herd health, reproduction, replacement and price/cost context interact at cow, group and herd level.',
  },
  {
    title: 'Other livestock & mixed farms',
    text: 'Beef cattle, poultry, eggs, sheep, goats and mixed farms need domain-specific production units — not a forced per-hectare model.',
  },
];

export const productionUnitGrammar = [
  {
    title: 'Arable & field crops',
    unit: 'Field / season',
    state: 'Current first focus',
    current: true,
    text: 'Field-level operating economics. Field Profitability is the current concrete product focus.',
  },
  {
    title: 'Horticulture, orchards & berries',
    unit: 'Block / variety / crop cycle',
    state: 'Direction',
    current: false,
    text: 'The production unit changes, but the logic stays production context → economics → evidence → decision.',
  },
  {
    title: 'Vegetables & greenhouse production',
    unit: 'Field block / compartment / crop cycle',
    state: 'Direction',
    current: false,
    text: 'Labour, energy, inputs, quality and timing need a domain-specific economic model.',
  },
  {
    title: 'Pig production',
    unit: 'Batch / production cycle',
    state: 'Direction',
    current: false,
    text: 'Feed, growth, mortality, throughput and selling conditions belong to the production context.',
  },
  {
    title: 'Dairy',
    unit: 'Cow / group / herd / period',
    state: 'Direction',
    current: false,
    text: 'Milk, feed, health, reproduction and replacement require livestock-specific economics.',
  },
  {
    title: 'Other livestock & mixed farms',
    unit: 'Animal / group / flock / herd / period',
    state: 'Direction',
    current: false,
    text: 'The relevant production unit changes by domain; PROFIT should not force everything into per-hectare logic.',
  },
] as const;

export const productionScopeNote =
  'These production systems describe the direction of the PROFIT master brand. They are not a claim that every domain is a current product. Field Profitability is the first concrete product focus.';

/** Labels for the illustrative example, shared by the hero proof card and the exhibit. */
export const exampleRecords = 'statistics-calibrated synthetic field records';
export const decisionQuestion = 'What would you investigate on Field 31 before changing the plan?';

export const moduleStatus = 'In development — not yet available';

/** Field Profitability, stated inside the product-truth boundary (Blueprint §2.2). */
const PUBLIC_FIELD_PROFITABILITY_OUTPUT_METRICS = [
  'revenue',
  'operating_costs',
  'gross_margin',
  'operating_profit',
  'operating_margin',
  'break_even_price',
  'break_even_yield',
] as const satisfies readonly MetricId[];

for (const metric of PUBLIC_FIELD_PROFITABILITY_OUTPUT_METRICS) {
  assertMetricPublishable(metric, 'Field Profitability public capability copy');
}

export const fieldProfitability = {
  name: 'Field Profitability',
  summary: 'The operating economics of each field, season by season.',
  inputs: [
    { title: 'Field, crop and season', text: 'Which field, what it grew, and when.' },
    { title: 'Area', text: 'The hectares farmed.' },
    { title: 'Yield and price', text: 'What the field produced and what it sold for.' },
    { title: 'Variable costs', text: 'Costs that change with what the field grows, such as seed and fertiliser.' },
    { title: 'Allocated fixed costs', text: 'The share of costs such as machinery and labour that you assign to the field.' },
    { title: 'Currency', text: 'Recorded with the figures, so results stay in the currency you work in.' },
  ] satisfies TextItem[],
  outputs: [
    { title: 'Revenue', text: 'Yield multiplied by price.' },
    { title: 'Operating costs', text: 'Variable costs plus allocated fixed costs.' },
    { title: 'Gross margin', text: 'Revenue minus variable costs.' },
    {
      title: 'Operating profit',
      text: 'Revenue minus variable costs minus allocated fixed costs. It is not gross margin, and not statutory net profit.',
    },
    { title: 'Per-hectare figures', text: 'Revenue, costs and operating profit per hectare.' },
    { title: 'Operating margin', text: 'Operating profit as a share of revenue.' },
    { title: 'Break-even price and yield', text: 'The price, or the yield, at which operating profit would be zero.' },
    { title: 'Fields side by side', text: 'Saved field records listed together, so fields can be compared.' },
  ] satisfies TextItem[],
  exclusions: [
    { title: 'Whole-farm accounts', text: 'No whole-farm profit and loss.' },
    { title: 'Tax and financing', text: 'No tax, loan or financing figures.' },
    { title: 'Depreciation', text: 'No depreciation policy or schedules.' },
    { title: 'Inventory accounting', text: 'No stock or inventory valuation.' },
    { title: 'Maps and GIS', text: 'No field maps or spatial analysis.' },
    { title: 'Scenario optimisation', text: 'No recommendations or optimised plans.' },
    { title: 'Machine and sensor data', text: 'No telemetry connections.' },
    { title: 'ERP integrations', text: 'No connections to business or accounting systems.' },
  ] satisfies TextItem[],
  ai: 'AI may explain a stored result in plain language. It does not calculate the numbers.',
};

export const pilotSteps: TextItem[] = [
  { title: 'Send five details', text: 'Name, farm or company, country, email and farm type. No farm records.' },
  { title: 'We reply by email', text: 'To arrange a first conversation about your farm and whether the pilot fits it.' },
  { title: 'Terms before data', text: 'If you take part, we agree what data is used, and how, before anything is shared.' },
];

export const pilotStepsReview: ContentGap = {
  owner: 'owner',
  text: 'Confirm the pilot process, who replies and how fast, before launch.',
};

/** Blueprint §5 07: real buyer questions, answered factually; unknowns stay unknown. */
export const hardQuestions: Question[] = [
  {
    id: 'data-needed',
    question: 'What data do you need?',
    answer: [
      'For Field Profitability: the crop, area, yield and price for each field and season, the variable costs, and the fixed costs you allocate to that field.',
      'Joining the pilot conversation needs none of it. The form asks for five contact details.',
    ],
  },
  {
    id: 'old-machinery',
    question: 'Can this work with old machinery?',
    answer: [
      'Field Profitability works from field records you provide, not from machine data, so the age of your machinery does not matter to it.',
      'Connections to machine or sensor data are not part of the current design.',
    ],
  },
  {
    id: 'manual-entry',
    question: 'Will I have to enter everything manually?',
    answer: [
      'The current Field Profitability concept starts from field records you provide. It does not require connected machinery.',
      'The wider PROFIT direction is to reuse existing records first, automate reliable sources where it genuinely reduces work, support offline capture where needed, and ask for confirmation mainly when the system is uncertain. Those broader capture capabilities are not part of the current build.',
    ],
  },
  {
    id: 'incomplete-data',
    question: 'What if my data is incomplete?',
    answer: [
      'This is still open. The current design does not yet handle estimated or missing values, and it does not attach a confidence level to a result.',
      'We would rather say that than guess.',
    ],
  },
  {
    id: 'forecasting',
    question: 'How would PROFIT forecast the future without guessing?',
    answer: [
      'Known economics should stay deterministic. Uncertain drivers such as yield, price, production, feed or energy can be forecast only when the data supports it.',
      'The method is baseline first: compare simple and more complex models on unseen future periods and, where possible, other farms or fields; show ranges and assumptions; then carry that uncertainty into economic scenarios. Forecasting is a development direction, not a current Field Profitability feature.',
    ],
  },
  {
    id: 'accuracy',
    question: 'How accurate are the calculations?',
    answer: [
      'The calculations are fixed formulas, so the same inputs always give the same result. A result can only be as accurate as the records behind it.',
      'AI may help explain a result. It does not calculate one.',
    ],
  },
  {
    id: 'ownership',
    question: 'Who owns the data?',
    answer: [
      'We have not yet published data terms, so we make no legal claim here.',
      'Our position: farm data is used only with the farmer’s permission and for a stated purpose. Terms covering ownership, sharing and deletion are agreed before any farm data is shared.',
    ],
    review: { owner: 'legal', text: 'Data terms (ownership, sharing, retention, deletion) must exist before this answer can say more.' },
  },
  {
    id: 'verified',
    question: 'What does “verified” mean?',
    answer: [
      'Verified is the top of the evidence ladder: Hypothetical, Modelled, Observed, Attributed, Verified.',
      'We use it only when the evidence and attribution standard is actually met. Nothing on this site is labelled Verified.',
    ],
  },
  {
    id: 'low-confidence',
    question: 'What happens when confidence is low?',
    answer: [
      'We say so. Assessed confidence is stated as High, Medium, Low or Insufficient evidence, and a low result is not rounded up.',
      'Examples on this site say “Confidence: Not assessed”, because no assessment was made.',
    ],
  },
  {
    id: 'not-do',
    question: 'What does PROFIT not do?',
    answer: [
      'It does not make decisions for you.',
      'Field Profitability does not produce whole-farm accounts, tax, financing or depreciation figures, or inventory accounting. It has no maps, scenario optimisation, or connections to machine data or business systems.',
    ],
  },
];

export function questions(ids: string[]): Question[] {
  return ids.map((id) => {
    const q = hardQuestions.find((x) => x.id === id);
    if (!q) throw new Error(`Unknown question "${id}".`);
    return q;
  });
}

/** Blueprint §4: what a verified value has to show, when evidence permits. */
export const verificationChain: TextItem[] = [
  { title: 'Baseline', text: 'Where the farm stood before the decision.' },
  { title: 'Counterfactual', text: 'What would most likely have happened without it.' },
  { title: 'Intervention', text: 'The decision made with PROFIT.' },
  { title: 'Actual outcome', text: 'What happened.' },
  { title: 'Incremental effect', text: 'The economic difference the decision made.' },
  { title: 'Attribution', text: 'How much of that difference the decision can be credited with, and how that was established.' },
  { title: 'Confidence', text: 'How certain the assessment is, given the data behind it.' },
];

export const evidenceReview: ContentGap = {
  owner: 'owner',
  text: 'The plain-language definitions of each evidence state are a draft. Confirm them against the VEV methodology.',
};

export const actors = { you: 'You', profit: 'PROFIT', both: 'You and PROFIT' } as const;
