/**
 * Homepage copy. Section order follows docs/homepage-content-brief-v1.md and
 * docs/homepage-copy-deck-v1.md:
 * hero → 30-second summary → farmer problem → how it works → concrete proof →
 * Field Profitability boundary → whole-farm scope → economic value/evidence → trust → company → pilot CTA.
 * H1/H2/H3 remain WWW-000 v2 hypotheses; H4 is the owner-directed development candidate.
 */
import type { ContentGap, SectionIntro, Step, TextItem } from '../types';
import {
  decisionQuestion,
  exampleRecords,
  fieldProfitability,
  moduleStatus,
  pilotSteps,
  primaryCta,
  productionScopeNote,
  productionSystems,
  productionUnitGrammar,
} from './shared';

export const home = {
  meta: {
    description: 'PROFIT is being built to connect real agricultural production with the economics behind decisions — across crops, horticulture and livestock. Field Profitability is the first concrete product focus.',
  },
  hero: {
    primary: primaryCta,
    secondary: { label: 'See how PROFIT works', href: '#how-it-works' },
    proofLabels: {
      list: 'Operating profit by field',
      data: 'Field data',
      economics: 'Economics',
      decision: 'Decision question',
      question: decisionQuestion,
      records: exampleRecords,
      scopeNote:
        'Field Profitability is the current first product focus. The production-unit grammar is designed to transfer beyond crops without forcing every farm into a per-hectare model.',
    },
    image: {
      caption: 'Documentary photograph: a real farm, at work.',
      requirement: 'Needs an approved photograph with source, rights and provenance. No stock or synthetic images.',
    },
  },
  journey: {
    label: 'On this page',
    items: [
      { index: '01', label: 'Farmer questions', href: '#questions' },
      { index: '02', label: 'How it works', href: '#how-it-works' },
      { index: '03', label: 'Field economics', href: '#example' },
      { index: '04', label: 'Production systems', href: '#production-systems' },
      { index: '05', label: 'Evidence', href: '#evidence' },
      { index: '06', label: 'Farmer control', href: '#control' },
      { index: '07', label: 'Pilot', href: '#join' },
    ],
  },
  thirtySeconds: {
    title: 'PROFIT in 30 seconds',
    items: [
      { title: 'For', text: 'Farmers and farm businesses making production and cost decisions across crops, horticulture and livestock.' },
      { title: 'The problem', text: 'Production, sales and cost records are fragmented. The economic meaning behind the next decision can be hard to see.' },
      { title: 'The goal', text: 'Less guesswork around the economics of a decision — with the farmer still in control.' },
      { title: 'First concrete focus', text: 'Field Profitability: operating economics, field by field. In development.' },
      { title: 'The standard', text: 'Hypothetical is labelled hypothetical. Verified is reserved for value that meets the evidence and attribution standard.' },
      { title: 'Next step', text: 'Join the pilot: five details, no farm records, then a conversation.' },
    ] satisfies TextItem[],
  },
  scope: {
    intro: {
      id: 'production-systems',
      eyebrow: 'One economic discipline · different production systems',
      title: 'Different farms. Different production models. The same economic discipline.',
      lead:
        'A hectare, an orchard block, a greenhouse crop cycle, a pig batch and a dairy herd are not interchangeable. PROFIT is being built to keep each production reality specific while making its economics explicit.',
    } satisfies SectionIntro,
    systems: productionSystems,
    units: productionUnitGrammar,
    note: productionScopeNote,
  },
  example: {
    intro: {
      id: 'example',
      eyebrow: 'Current first focus · hypothetical example',
      title: 'See the economics behind a field — not just the result',
      lead: 'Revenue, variable costs and allocated fixed costs come together in one operating-profit view. This is a statistics-calibrated synthetic example, not a customer result.',
    } satisfies SectionIntro,
    labels: {
      productName: fieldProfitability.name,
      notScreenshot: 'Illustration, not a product screenshot.',
      tableCaption: 'Operating profit by field, one season',
      columnField: 'Field',
      columnPerHa: 'Per hectare',
      columnTotal: 'Whole field',
      compositionTitle: 'What goes into {field}',
      breakEvenAtYield: 'at the recorded yield',
      breakEvenAtPrice: 'at the recorded price',
      definition: 'Operating profit = revenue − variable costs − allocated fixed costs. It is not gross margin, and not statutory net profit.',
      decision: 'Decision question',
      question: decisionQuestion,
      decisionNote: 'PROFIT shows the economics. The decision stays yours.',
      records: exampleRecords,
      lineage: [
        { title: 'Production record', text: 'Field / season' },
        { title: 'Economics', text: 'Explicit formula' },
        { title: 'Threshold', text: 'Break-even' },
        { title: 'Decision', text: 'Farmer-owned' },
      ],
    },
  },
  problem: {
    intro: {
      id: 'questions',
      eyebrow: 'Start with the decision',
      title: 'The hard part is rarely one missing number',
      lead: 'A farm decision can depend on records created in different places, at different times and for different purposes.',
    } satisfies SectionIntro,
    questions: [
      { question: 'Which fields actually make money?', answer: 'Bring revenue and allocated costs into the same operating-profit view.', covered: true },
      {
        question: 'What does each field really cost once shared costs are allocated?',
        answer: 'Make variable and allocated fixed costs visible in the same definition.',
        covered: true,
      },
      { question: 'At what price, or what yield, would a field break even?', answer: 'Show the break-even point from the recorded economics.', covered: true },
      {
        question: 'What should change next season?',
        answer: 'That remains your call. PROFIT should make the economics and uncertainty easier to inspect before you decide.',
        covered: false,
      },
    ],
    hard: {
      title: 'Why the answer is hard to see',
      lead: 'The records behind one economic question are often created for different purposes.',
      sources: [
        { title: 'Production', text: 'Yields and harvest records' },
        { title: 'Sales', text: 'Prices, contracts and invoices' },
        { title: 'Variable costs', text: 'Seed, fertiliser, crop protection, fuel' },
        { title: 'Fixed costs', text: 'Machinery, labour, buildings, land' },
        { title: 'Outside factors', text: 'Weather and markets' },
      ] satisfies TextItem[],
      conclusion:
        'The work is not collecting data for its own sake. It is bringing the right records together so the economic question can be inspected consistently.',
    },
  },
  how: {
    intro: {
      id: 'how-it-works',
      eyebrow: 'How PROFIT works',
      title: 'From farm records to an economic decision',
      lead: 'Five steps. Known economics stay explicit. The farmer keeps decision authority.',
    } satisfies SectionIntro,
    moduleLabel: 'In Field Profitability',
    steps: [
      {
        title: 'Data',
        actor: 'you',
        text: 'Start from the records behind a decision, shared with your permission.',
        module: 'Crop, area, yield, price, variable costs and allocated fixed costs for one field and season.',
      },
      {
        title: 'Economics',
        actor: 'profit',
        text: 'Apply explicit definitions and repeatable formulas to turn records into economic meaning.',
        module: 'Revenue, operating costs, operating profit, per-hectare figures, break-even price and yield.',
      },
      {
        title: 'Decision',
        actor: 'you',
        text: 'Inspect the economics, assumptions and available evidence before deciding what to do.',
        module: 'Compare saved fields side by side before changing the plan.',
      },
      { title: 'Action', actor: 'you', text: 'The action happens on the farm, not in software.' },
      {
        title: 'Measurement',
        actor: 'both',
        text: 'Record the outcome in comparable terms so the economic effect can be checked rather than assumed.',
        module: 'The next season is recorded with the same definitions.',
      },
    ] satisfies Step[],
    note: 'An outcome on its own does not prove that a decision caused it.',
    operatingPrinciplesTitle: 'Two rules behind the system',
    operatingPrinciples: [
      {
        title: 'Fit the farm',
        text: 'Start from the records a farm already has. Add automation where it genuinely reduces work; do not assume new machinery, perfect connectivity or constant manual entry.',
      },
      {
        title: 'Keep uncertainty visible',
        text: 'Known economics stay explicit. Forecasts and scenarios should show assumptions and ranges when evidence supports them, rather than pretending the future is certain.',
      },
    ] satisfies TextItem[],
    operatingPrinciplesNote:
      'These are the two homepage principles most relevant to the decision flow. Deeper data-quality and model-selection methodology lives on the trust page; none of this implies that the current Field Profitability build already includes telemetry, forecasting or optimisation.',
    operatingPrinciplesLink: { label: 'How PROFIT handles data, models and decisions', href: '/trust/#data-lifecycle' },
  },
  value: {
    intro: {
      id: 'evidence',
      eyebrow: 'Economic value · evidence',
      title: 'A value counts only when the evidence supports it',
      lead: 'PROFIT separates what is hypothetical, modelled, observed, attributed and verified. The label should never outrun the evidence.',
    } satisfies SectionIntro,
    ladderTitle: 'The evidence ladder',
    currentLabel: 'This site today',
    confidenceTitle: 'Confidence',
    confidenceText:
      'Assessed confidence reflects the data behind a value: how complete, consistent, fresh, traceable and representative it is.',
    assessedLabel: 'Assessed confidence',
    notAssessedText: 'No assessment was made. “Not assessed” is not a confidence level.',
    currentSiteLabel: 'Current site',
    currentSiteNote: 'Nothing on this site is labelled Verified.',
    chainTitle: 'How a value would become Verified',
    chainSummary: 'Inspect the verification chain',
    chainNote:
      'PROFIT does not treat a forecast as a fact, a modelled benefit as an outcome, or an outcome as proof that PROFIT caused it.',
    link: { label: 'Read the methodology', href: '/trust/#evidence' },
  },
  wedge: {
    intro: {
      id: 'field-profitability',
      eyebrow: 'Current first product',
      title: fieldProfitability.name,
      lead: `${fieldProfitability.summary} It is where PROFIT starts.`,
    } satisfies SectionIntro,
    status: moduleStatus,
    inputsTitle: 'What goes in',
    outputsTitle: 'What comes out',
    exclusionsTitle: 'Not included',
    link: { label: 'What Field Profitability does, and does not do', href: '/product/' },
  },
  control: {
    intro: {
      id: 'control',
      eyebrow: 'Trust · farmer control',
      title: 'The farm stays in control',
    } satisfies SectionIntro,
    principles: [
      { title: 'Permission + purpose', text: 'Farm data is used only with your permission and for a purpose you can see.' },
      { title: 'Your decision', text: 'PROFIT explains the economics behind a decision. It does not make the decision for you.' },
      { title: 'Evidence stays labelled', text: 'A weak evidence state or low confidence is not rounded up into certainty.' },
      { title: 'No farm records to start', text: 'The pilot form asks for five contact/context details — not yields, prices or cost records.' },
    ] satisfies TextItem[],
    questionsTitle: 'Questions farmers ask first',
    questionIds: ['data-needed', 'accuracy', 'ownership', 'low-confidence'],
    links: [
      { label: 'All questions and answers', href: '/farmers/#questions' },
      { label: 'How PROFIT handles evidence and data', href: '/trust/' },
    ],
  },
  company: {
    intro: {
      id: 'company',
      eyebrow: 'Company',
      title: 'Build value. Prove it. Then scale it.',
    } satisfies SectionIntro,
    text: [
      'PROFIT is being built for agricultural production systems — crops, horticulture, greenhouses and livestock — around one economic discipline: make the economics explicit, keep uncertainty visible and measure what happened afterwards.',
      'We start with one concrete product focus, Field Profitability, and separate what exists today from what is still a direction or hypothesis.',
    ],
    stillProvenTitle: 'Still being proven',
    stillProven: [
      'Decision value — whether field-level operating economics materially improve farmer decision-making.',
      'Measurable value — whether PROFIT can demonstrate economic value to the evidence standard it sets itself.',
      'Pilot fit — what farmers need from the process, data and explanations to trust the numbers.',
    ],
    teamGap: {
      owner: 'owner',
      text: 'Confirm each person’s public role wording, expertise, profile/photo use and consent before launch.',
    } satisfies ContentGap,
    link: { label: 'About the company', href: '/company/' },
  },
  cta: {
    intro: {
      id: 'join',
      eyebrow: 'Next step',
      title: 'Join the pilot',
      lead: 'Five details. No farm records. Then a conversation about whether the first pilot fits your farm.',
    } satisfies SectionIntro,
    stepsTitle: 'What happens after you click',
    steps: pilotSteps,
    primary: primaryCta,
    secondary: { label: 'Read how PROFIT handles data first', href: '/trust/#data' },
  },
};
