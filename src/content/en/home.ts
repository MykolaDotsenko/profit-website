/**
 * Homepage copy. Section order follows the Build Pass 01 brief and Blueprint §5:
 * hero → product/economic proof → farmer problem → how it works → economic value/evidence →
 * Field Profitability → trust/farmer control → company → pilot CTA.
 */
import type { ContentGap, SectionIntro, Step, TextItem } from '../types';
import {
  decisionQuestion,
  exampleRecords,
  fieldProfitability,
  moduleStatus,
  pilotSteps,
  pilotStepsReview,
  primaryCta,
  productionScopeNote,
  productionSystems,
} from './shared';

export const home = {
  meta: {
    description: 'PROFIT connects agricultural production reality with economic decision-making across crop, horticulture and livestock systems. Field Profitability is the first concrete product focus.',
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
    },
    image: {
      caption: 'Documentary photograph: a real farm, at work.',
      requirement: 'Needs an approved photograph with source, rights and provenance. No stock or synthetic images.',
    },
  },
  thirtySeconds: {
    title: 'PROFIT in 30 seconds',
    items: [
      { title: 'For', text: 'Farmers and farm businesses across crop, horticulture and livestock production.' },
      { title: 'The problem', text: 'The numbers behind a farm decision sit in different places, so its economics are hard to see before deciding.' },
      { title: 'What PROFIT does', text: 'Connects what happens on the farm with what it means economically.' },
      { title: 'First module', text: 'Field Profitability: operating profit, field by field. In development.' },
      { title: 'The standard', text: 'Verified Economic Value: a value counts only when it can be evidenced.' },
      { title: 'Next step', text: 'Join the pilot: five details, then a conversation.' },
    ] satisfies TextItem[],
  },
  scope: {
    intro: {
      id: 'production-systems',
      eyebrow: 'One company · different production systems',
      title: 'Built around the economics of real agriculture',
      lead:
        'A field, an orchard block, a greenhouse crop cycle, a pig batch and a dairy herd do not share the same operating model. PROFIT is being built to keep the production reality specific while keeping the economic discipline consistent.',
    } satisfies SectionIntro,
    systems: productionSystems,
    note: productionScopeNote,
    statsTitle: 'Why the scope matters',
    stats: [
      { title: '€531.9B', text: 'EU agricultural output in 2024.' },
      { title: '€267.7B', text: 'Crop output in the EU in 2024.' },
      { title: '€218.8B', text: 'Animals and animal products output in the EU in 2024.' },
    ] satisfies TextItem[],
    categoryNote:
      'Among the largest 2024 EU output categories were milk (€78.6B), vegetables and horticultural products (€72.0B), pigs (€46.8B), fruits (€39.5B) and cattle (€38.4B). These are gross output values, not farm profit.',
    source: {
      label: 'Eurostat · Key figures on the European food chain 2025',
      href: 'https://ec.europa.eu/eurostat/en/web/products-key-figures/w/ks-01-25-049',
    },
  },
  example: {
    intro: {
      id: 'example',
      eyebrow: 'Field Profitability · hypothetical example',
      title: 'What field-level economics look like',
      lead: 'An illustration of the view Field Profitability is designed to produce: each field’s revenue set against the costs allocated to it. The farm, the fields and the numbers are invented.',
    } satisfies SectionIntro,
    labels: {
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
    },
  },
  problem: {
    intro: {
      id: 'questions',
      eyebrow: 'The farmer’s questions',
      title: 'The questions behind a season',
    } satisfies SectionIntro,
    questions: [
      { question: 'Which fields actually make money?', answer: 'Field Profitability is designed to answer this.', covered: true },
      {
        question: 'What does each field really cost once shared costs are allocated?',
        answer: 'Field Profitability is designed to answer this.',
        covered: true,
      },
      { question: 'At what price, or what yield, would a field break even?', answer: 'Field Profitability is designed to answer this.', covered: true },
      {
        question: 'What should change next season?',
        answer: 'Your call. PROFIT shows the economics behind it; it does not decide for you.',
        covered: false,
      },
    ],
    hard: {
      title: 'Why the answers are hard to see',
      lead: 'The numbers behind one field’s economics are recorded in different places, at different times.',
      sources: [
        { title: 'Production', text: 'Yields and harvest records' },
        { title: 'Sales', text: 'Prices, contracts and invoices' },
        { title: 'Variable costs', text: 'Seed, fertiliser, crop protection, fuel' },
        { title: 'Fixed costs', text: 'Machinery, labour, buildings, land' },
        { title: 'Outside factors', text: 'Weather and markets' },
      ] satisfies TextItem[],
      conclusion:
        'Bringing them together for one field means collecting, allocating and calculating before anything can be compared. Field Profitability starts with what sets a field’s operating economics: yield, price and the costs allocated to it.',
    },
  },
  how: {
    intro: {
      id: 'how-it-works',
      eyebrow: 'How PROFIT works',
      title: 'From farm records to an economic decision',
      lead: 'Five steps. PROFIT does the arithmetic; the decision stays with you.',
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
        text: 'Turn the records into economic meaning with fixed, repeatable formulas.',
        module: 'Revenue, operating costs, operating profit, per-hectare figures, break-even price and yield.',
      },
      {
        title: 'Decision',
        actor: 'you',
        text: 'Decide with the economics in view. PROFIT does not make the call.',
        module: 'Compare saved fields side by side before changing the plan.',
      },
      { title: 'Action', actor: 'you', text: 'The action happens on the farm, not in software.' },
      {
        title: 'Measurement',
        actor: 'both',
        text: 'Record the outcome in the same terms, so the economic effect of a decision can be checked rather than assumed.',
        module: 'The next season is recorded with the same definitions.',
      },
    ] satisfies Step[],
    note: 'An outcome on its own does not show that a decision caused it. The evidence ladder below says what it takes.',
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
      'These are PROFIT development principles, not a claim that the current Field Profitability build already includes telemetry, forecasting or optimisation.',
    operatingPrinciplesLink: { label: 'How PROFIT approaches data and forecasting', href: '/company/#data-strategy' },
  },
  value: {
    intro: {
      id: 'evidence',
      eyebrow: 'Economic value and evidence',
      title: 'A value counts only when it can be evidenced',
      lead: 'Verified Economic Value (VEV) is the standard PROFIT holds itself to: the economic effect of a decision, shown with its evidence. We call a value verified only when the evidence and attribution standard is met.',
    } satisfies SectionIntro,
    ladderTitle: 'The evidence ladder',
    currentLabel: 'This site today',
    confidenceTitle: 'Confidence',
    confidenceText:
      'Assessed confidence reflects the data behind a value: how complete, consistent, fresh, traceable and representative it is.',
    assessedLabel: 'Assessed confidence',
    notAssessedText: 'No assessment was made. It is not a confidence level. Every example on this site carries it.',
    chainTitle: 'What a verified value has to show',
    chainNote: 'Nothing on this site is labelled Verified.',
    link: { label: 'Read the methodology', href: '/trust/#evidence' },
  },
  wedge: {
    intro: {
      id: 'field-profitability',
      eyebrow: 'The first module',
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
      eyebrow: 'Trust and farmer control',
      title: 'What stays in your control',
    } satisfies SectionIntro,
    principles: [
      { title: 'Your permission, a stated purpose', text: 'Farm data is used only with your permission and for a purpose you can see.' },
      { title: 'Your decision', text: 'PROFIT explains the numbers behind a decision. It does not make the decision.' },
      { title: 'Labelled evidence', text: 'Every figure PROFIT publishes carries its evidence state. Low confidence is shown as low.' },
      { title: 'No farm records to start', text: 'The pilot form asks for five details, and nothing about your yields, prices or costs.' },
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
      title: 'Who is building PROFIT',
    } satisfies SectionIntro,
    text: [
      'PROFIT is building decision support for agricultural production systems — crops, horticulture, greenhouses and livestock — around one economic discipline.',
      'It starts concrete with Field Profitability and labels what is a current product, what is still a direction, and what is not yet proven.',
    ],
    stillProvenTitle: 'Still being proven',
    stillProven: [
      'That field-level operating economics help farmers make better-informed decisions.',
      'That PROFIT can show economic value to the standard it sets itself.',
      'What farmers need from a pilot to trust the numbers.',
    ],
    teamGap: { owner: 'owner', text: 'Team: who is building PROFIT, their roles and relevant expertise.' } satisfies ContentGap,
    link: { label: 'About the company', href: '/company/' },
  },
  cta: {
    intro: {
      id: 'join',
      eyebrow: 'Next step',
      title: 'Join the pilot',
      lead: 'A short form, then a conversation. No farm records.',
    } satisfies SectionIntro,
    stepsTitle: 'What happens after you click',
    steps: pilotSteps,
    review: pilotStepsReview,
    primary: primaryCta,
    secondary: { label: 'Read how PROFIT handles data first', href: '/trust/#data' },
  },
};
