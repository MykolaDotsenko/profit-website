/**
 * Supporting-route copy: /farmers, /product, /trust, /company, /investors, /contact and 404.
 * Each page holds only content the canonical docs support; missing facts are content gaps.
 */
import type { ContentGap, PilotFormContent, SectionIntro, StatusItem, TextItem } from '../types';
import {
  decisionQuestion,
  evidenceReview,
  exampleRecords,
  fieldProfitability,
  moduleStatus,
  pilotSteps,
  pilotStepsReview,
  primaryCta,
  productionScopeNote,
  productionSystems,
} from './shared';

const exampleLabels = {
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
};

const pilotCta = {
  intro: { id: 'join', eyebrow: 'Next step', title: 'Join the pilot', lead: 'A short form, then a conversation. No farm records.' } satisfies SectionIntro,
  stepsTitle: 'What happens after you click',
  steps: pilotSteps,
  review: pilotStepsReview,
  primary: primaryCta,
};

export const farmers = {
  meta: {
    title: 'For farmers',
    description: 'How PROFIT is being built across crop, horticulture and livestock production, with Field Profitability as the current first concrete product focus.',
  },
  intro: {
    eyebrow: 'For farmers',
    title: 'Built for different farms — starting with one concrete product',
    lead:
      'PROFIT is being built around agricultural decision economics across crop, horticulture and livestock systems. The current first pilot focus is narrower: Field Profitability for field crops.',
  },
  scope: {
    intro: {
      id: 'production-systems',
      eyebrow: 'Farm types',
      title: 'Different production systems need different economic models',
      lead:
        'The common PROFIT logic is production reality → data/context → economics → uncertainty/evidence → decision. The operating unit and the inputs change by domain.',
    } satisfies SectionIntro,
    systems: productionSystems,
    note: productionScopeNote,
  },
  provide: {
    intro: { id: 'what-you-provide', eyebrow: 'Inputs', title: 'What you would provide', lead: 'For each field and season.' } satisfies SectionIntro,
    items: fieldProfitability.inputs,
  },
  getBack: {
    intro: { id: 'what-you-get', eyebrow: 'Outputs', title: 'What you get back' } satisfies SectionIntro,
    items: fieldProfitability.outputs,
  },
  notDo: {
    intro: { id: 'what-it-does-not-do', eyebrow: 'Limits', title: 'What it does not do' } satisfies SectionIntro,
    items: fieldProfitability.exclusions,
    ai: fieldProfitability.ai,
  },
  questions: {
    intro: { id: 'questions', eyebrow: 'Hard questions', title: 'Questions farmers ask', lead: 'Answered as they stand today. Where something is still open, we say so.' } satisfies SectionIntro,
  },
  pilot: pilotCta,
};

export const product = {
  meta: {
    title: 'Field Profitability',
    description: 'PROFIT’s first module: the operating economics of each field, season by season. In development and not yet available.',
  },
  intro: {
    eyebrow: 'Product',
    title: fieldProfitability.name,
    lead: `The first PROFIT module. ${fieldProfitability.summary}`,
    status: moduleStatus,
  },
  example: {
    intro: {
      id: 'example',
      eyebrow: 'Hypothetical example',
      title: 'What it is designed to show',
      lead: 'Fields side by side, and what goes into one field’s operating profit. The farm, the fields and the numbers are invented.',
    } satisfies SectionIntro,
    labels: exampleLabels,
  },
  definitions: {
    intro: {
      id: 'definitions',
      eyebrow: 'Definitions',
      title: 'What each number means',
      lead: 'Definitions come first, so a local word such as “margin” never changes the formula behind it.',
    } satisfies SectionIntro,
    items: fieldProfitability.outputs,
  },
  inputs: {
    intro: { id: 'inputs', eyebrow: 'Inputs', title: 'What goes in', lead: 'For each field and season.' } satisfies SectionIntro,
    items: fieldProfitability.inputs,
  },
  calculation: {
    intro: { id: 'how-calculated', eyebrow: 'Method', title: 'How the numbers are produced' } satisfies SectionIntro,
    items: [
      { title: 'Fixed formulas', text: 'Every figure comes from the definitions above, applied to the inputs you provide. The same inputs always give the same result.' },
      { title: 'AI explains, it does not calculate', text: fieldProfitability.ai },
      { title: 'Your currency', text: 'Figures carry the currency they were recorded in. Field figures are per hectare.' },
    ] satisfies TextItem[],
  },
  exclusions: {
    intro: { id: 'not-included', eyebrow: 'Limits', title: 'Not included' } satisfies SectionIntro,
    items: fieldProfitability.exclusions,
  },
  cta: pilotCta,
};

export const trust = {
  onPageLabel: 'On this page',
  meta: {
    title: 'Trust',
    description: 'How PROFIT labels evidence and confidence, how its numbers are produced, its principles for farm data, privacy and security, and its limitations.',
  },
  intro: {
    eyebrow: 'Trust',
    title: 'Evidence, data and limitations, in plain terms',
    lead: 'Trust is something PROFIT has to earn. This page sets out how we label evidence, how numbers are produced, how farm data is treated, and what is not yet proven.',
  },
  evidence: {
    intro: {
      id: 'evidence',
      eyebrow: 'Methodology',
      title: 'Evidence and methodology',
      lead: 'Every figure we publish carries two labels: where it sits on the evidence ladder, and how confident the assessment is.',
    } satisfies SectionIntro,
    ladderTitle: 'The evidence ladder',
    currentLabel: 'This site today',
    review: evidenceReview,
    confidenceTitle: 'Confidence',
    confidenceText: 'Assessed confidence reflects the data behind a value: how complete, consistent, fresh, traceable and representative it is. Confidence never exceeds the quality of that data.',
    assessedLabel: 'Assessed confidence',
    notAssessedText: 'No assessment was made. It is not a confidence level. Every example on this site carries it.',
    chainTitle: 'What a verified value has to show',
    chainNote: 'Nothing on this site is labelled Verified.',
    provenanceTitle: 'Where a number comes from',
    provenanceLead: 'Each figure is labelled with its source category:',
    provenanceNote: 'A category is a label, not a claim that PROFIT uses that source. Field Profitability, the first module, works from farmer-provided records.',
  },
  calculations: {
    intro: { id: 'calculations', eyebrow: 'Numbers', title: 'How numbers are produced' } satisfies SectionIntro,
    items: [
      { title: 'Deterministic calculations', text: 'Economic figures come from fixed formulas applied to recorded inputs, not from an AI model.' },
      { title: 'AI as explanation only', text: 'AI may explain a stored result. It is not the source of truth for any number.' },
      { title: 'Illustrations are labelled', text: 'Examples are marked Hypothetical with Confidence: Not assessed, and never presented as results.' },
    ] satisfies TextItem[],
  },
  stressCheck: {
    intro: {
      id: 'stress-check',
      eyebrow: 'Illustrative stress check',
      title: 'Test the arithmetic before trusting the presentation',
      lead:
        'The example below is not a forecast and not a current product feature. It holds operating costs constant and changes yield and price around the statistics-calibrated synthetic base case to show how sensitive the result is.',
    } satisfies SectionIntro,
    caption: 'Field 31 · deterministic sensitivity around the synthetic base case',
    columns: {
      scenario: 'Scenario',
      yield: 'Yield',
      price: 'Price',
      costs: 'Operating costs',
      profit: 'Operating profit',
    },
    names: {
      downside: 'Downside',
      base: 'Base case',
      'price-up': 'Price +10%',
      'yield-up': 'Yield +10%',
      upside: 'Yield +10% · Price +10%',
    },
    breakEvenLead: 'At the base synthetic cost structure, break-even is approximately',
    note:
      'Costs are deliberately held constant to isolate arithmetic sensitivity. This is not agronomic forecasting, optimisation, a recommendation or a claim about how costs behave when yield changes.',
    calibration:
      'Calibration uses Finnish official statistics as plausibility anchors: 2025 wheat production/area, the 2025 quality-adjusted bread-wheat producer price, and Luke EconomyDoctor 2024 cereal-farm cost totals. The field records themselves remain synthetic.',
    sources: [
      {
        label: 'Luke · Crop production 2025',
        href: 'https://www.luke.fi/en/statistics/crop-production-statistics/crop-production-2025',
      },
      {
        label: 'Luke · Producer Prices of Agricultural and Horticultural Products 2025',
        href: 'https://www.luke.fi/en/statistics/producer-prices-of-agricultural-and-horticultural-products/producer-prices-of-agricultural-and-horticultural-products-2025',
      },
      {
        label: 'Luke EconomyDoctor · Cereal Farms',
        href: 'https://taloustohtori.luke.fi/en/agriculture-and-horticulture/timeline/income-statement/cereal-farms/',
      },
    ],
  },
  data: {
    intro: { id: 'data', eyebrow: 'Farmer control', title: 'Data and farmer control' } satisfies SectionIntro,
    principles: [
      { title: 'Permission', text: 'Farm data is used only with the farmer’s permission.' },
      { title: 'Stated purpose', text: 'Data is used for the purpose it was shared for, and that purpose is visible.' },
      { title: 'Decision authority', text: 'The farmer decides. PROFIT explains the economics behind a decision.' },
      { title: 'Nothing sensitive up front', text: 'No farm records are requested before trust and purpose are established.' },
    ] satisfies TextItem[],
    terms: 'Data terms are not yet published. Until they are, PROFIT makes no legal claim about ownership or sharing, and does not ask for farm data.',
    termsGap: { owner: 'legal', text: 'Data terms: ownership, sharing, retention and deletion.' } satisfies ContentGap,
  },
  privacy: {
    intro: { id: 'privacy', eyebrow: 'Privacy and security', title: 'Privacy and security principles' } satisfies SectionIntro,
    items: [
      { title: 'Data minimisation', text: 'Ask only for what the next step needs.' },
      { title: 'Purpose limitation', text: 'Use data only for the purpose it was given for.' },
      { title: 'Permissioned access', text: 'Access to farm data follows the farmer’s permission.' },
      { title: 'Auditability', text: 'Changes to data and results should be traceable.' },
    ] satisfies TextItem[],
    note: 'These are principles, not certifications.',
    gap: { owner: 'legal', text: 'Privacy notice and security measures, published before the pilot form collects anything.' } satisfies ContentGap,
  },
  limitations: {
    intro: { id: 'limitations', eyebrow: 'Limitations', title: 'What is not yet proven' } satisfies SectionIntro,
    items: [
      { title: 'The product is not available yet', text: 'Field Profitability is in development.' },
      { title: 'No results are published', text: 'There are no customer or pilot results on this site.' },
      { title: 'Nothing is Verified', text: 'No figure on this site meets the Verified standard.' },
      { title: 'Missing data is not handled yet', text: 'The current design does not handle estimated or missing values, and does not attach a confidence level to results.' },
      { title: 'The examples are synthetic', text: 'Every field-level example on this site is hypothetical. Current crop examples are calibrated to official statistics for plausibility, not derived from customer records.' },
    ] satisfies TextItem[],
  },
  cta: pilotCta,
};

export const company = {
  meta: { title: 'Company', description: 'What PROFIT is building, why, how it works, and what is still being proven.' },
  intro: {
    eyebrow: 'Company',
    title: 'What we are building, and what is still being proven',
    lead: 'PROFIT is building agricultural decision support that connects production reality with economic meaning across different farm systems.',
  },
  building: {
    intro: { id: 'what', eyebrow: 'What', title: 'What we are building' } satisfies SectionIntro,
    text: [
      'Decision support for farm businesses, built on one idea: a production decision should be made with its economics, uncertainty and evidence in view.',
      'The master brand is intended to span field crops, horticulture, orchards, greenhouse production, pigs, dairy and other livestock without forcing them into one production model.',
      'We start concrete with one module, Field Profitability: the operating economics of each field, season by season.',
    ],
  },
  scope: {
    intro: {
      id: 'scope',
      eyebrow: 'Scope',
      title: 'One economic discipline, domain-specific production models',
      lead:
        'A hectare, an orchard block, a greenhouse crop cycle, a pig batch and a dairy herd are not interchangeable. PROFIT should preserve the production model while making the economics comparable and inspectable.',
    } satisfies SectionIntro,
    systems: productionSystems,
    note: productionScopeNote,
    evidence:
      'EU agricultural output was €531.9B in 2024: €267.7B from crops and €218.8B from animals and animal products. Among the largest categories were milk (€78.6B), vegetables and horticultural products (€72.0B), pigs (€46.8B), fruits (€39.5B) and cattle (€38.4B). These are gross output values, not farm profit.',
    source: {
      label: 'Eurostat · Key figures on the European food chain 2025',
      href: 'https://ec.europa.eu/eurostat/en/web/products-key-figures/w/ks-01-25-049',
    },
  },
  dataStrategy: {
    intro: {
      id: 'data-strategy',
      eyebrow: 'Data',
      title: 'Work with the farm that exists',
      lead:
        'PROFIT should reduce manual data work, not make digital sophistication a condition for understanding farm economics.',
    } satisfies SectionIntro,
    items: [
      {
        title: 'Existing records first',
        text: 'Use production, sales, cost, feed, herd, field and operational records that already exist before asking the farm to create another parallel record system.',
      },
      {
        title: 'Automatic where reliable',
        text: 'Use machine, sensor, positioning or external data when it improves quality and reduces workload. Do not make telemetry a prerequisite.',
      },
      {
        title: 'Older equipment must still fit',
        text: 'For non-connected machinery, future workflows should minimise operator input and use context such as time and location where appropriate, with human confirmation for exceptions.',
      },
      {
        title: 'Offline-first where operations require it',
        text: 'Farm work cannot depend on continuous coverage. Capture locally and synchronise later when connectivity returns.',
      },
      {
        title: 'Permission and provenance',
        text: 'Every important input needs a known source, a stated purpose and farmer permission. Inferred data must remain distinguishable from recorded data.',
      },
    ] satisfies TextItem[],
    evidence:
      'Eurostat reported that about 11% of EU farms used a farm management information system in 2023 and around 18% of farms with utilised agricultural area used some precision-farming technology or practice. A 2026 European Commission connectivity study also recommends digital solutions that can work offline and synchronise later.',
    sources: [
      {
        label: 'Eurostat · Digitalisation in EU agriculture, 2023 data',
        href: 'https://ec.europa.eu/eurostat/en/web/products-eurostat-news/w/ddn-20260724-1',
      },
      {
        label: 'European Commission · Future connectivity needs for precision farming, 2026',
        href: 'https://digital-strategy.ec.europa.eu/en/library/assessment-future-connectivity-needs-precision-farming-adoption',
      },
    ],
  },
  forecasting: {
    intro: {
      id: 'forecasting',
      eyebrow: 'Forecasting',
      title: 'Forecast uncertainty, then translate it into economics',
      lead:
        'PROFIT should not hide uncertain farm outcomes behind one precise-looking profit forecast. Known arithmetic stays deterministic; uncertain drivers are forecast, validated and carried into economic scenarios.',
    } satisfies SectionIntro,
    items: [
      {
        title: 'Baseline before sophistication',
        text: 'Start with historical or simple statistical baselines. A complex model has to earn its place by materially improving out-of-sample performance.',
      },
      {
        title: 'Forecast drivers, not a black-box profit number',
        text: 'Yield, production, selling price, feed, energy or other domain-specific uncertainties can be modelled separately and then passed through explicit economics.',
      },
      {
        title: 'Compare alternatives',
        text: 'Decision support should compare scenario A, scenario B and a defensible do-nothing or current-practice counterfactual.',
      },
      {
        title: 'Validate through time and across farms',
        text: 'Use future periods and independent farms/fields where possible, not only random splits that leak the structure of historical data.',
      },
      {
        title: 'Show range, confidence and assumptions',
        text: 'A calibrated range is more useful than false precision when weather, biology and markets remain uncertain.',
      },
      {
        title: 'Close the evidence loop',
        text: 'A forecast is not Verified Economic Value. After the decision, actual outcome, counterfactual, incremental effect, attribution and confidence still have to be assessed.',
      },
    ] satisfies TextItem[],
    research:
      'A 2025 systematic review of 97 crop-yield studies found Linear Regression, Random Forest and Gradient Boosting Trees among the most-used ML approaches; a 2024 tree-crop review found that smaller datasets often use simpler models while larger datasets can justify more complex methods. PROFIT’s rule is therefore baseline-first and evidence-led, not AI-for-AI’s-sake.',
    sources: [
      {
        label: 'Smart Agricultural Technology · crop-yield ML systematic review',
        href: 'https://doi.org/10.1016/j.atech.2024.100718',
      },
      {
        label: 'Smart Agricultural Technology · tree-crop yield systematic review',
        href: 'https://doi.org/10.1016/j.atech.2024.100556',
      },
    ],
    note:
      'This is the PROFIT development direction. It is not a claim that the current Field Profitability build already performs forecasting, optimisation or scenario simulation.',
  },
  why: {
    intro: { id: 'why', eyebrow: 'Why', title: 'Why' } satisfies SectionIntro,
    text: [
      'We think farm data becomes valuable when it improves a decision and the economic effect can be measured.',
      'That is a claim we have to prove, farm by farm. So we label what we know, what we have modelled and what we are still testing.',
    ],
  },
  principles: {
    intro: { id: 'how', eyebrow: 'How', title: 'How we work' } satisfies SectionIntro,
    items: [
      { title: 'Farmer value first', text: 'The farmer decides. PROFIT is there to make the economics clear.' },
      { title: 'Evidence before claims', text: 'Every figure we publish carries its evidence state and confidence.' },
      { title: 'Local evidence', text: 'A result from one market or farm type is evidence for that context, not for every farm.' },
    ] satisfies TextItem[],
  },
  stillProven: {
    intro: { id: 'still-proven', eyebrow: 'Open', title: 'What is still being proven' } satisfies SectionIntro,
    items: [
      { title: 'Decision value', text: 'That field-level operating economics help farmers make better-informed decisions.' },
      { title: 'Measurable value', text: 'That PROFIT can show economic value to the standard it sets itself.' },
      { title: 'Pilot fit', text: 'What farmers need from a pilot to trust the numbers.' },
    ] satisfies TextItem[],
  },
  team: {
    intro: { id: 'team', eyebrow: 'People', title: 'Who is building PROFIT' } satisfies SectionIntro,
    gap: { owner: 'owner', text: 'Team: names, roles and relevant expertise, with consent to publish.' } satisfies ContentGap,
  },
  details: {
    intro: { id: 'details', eyebrow: 'Details', title: 'Company details' } satisfies SectionIntro,
    gap: { owner: 'owner', text: 'Legal name, business ID, registered address and a contact address.' } satisfies ContentGap,
  },
  cta: pilotCta,
};

export const investors = {
  meta: { title: 'Investors and partners', description: 'An evidence-led view of PROFIT: what exists today, and what is still a hypothesis.' },
  intro: {
    eyebrow: 'Investors and partners',
    title: 'What exists today, and what is still a hypothesis',
    lead: 'PROFIT should be judged on evidence. This page separates the two and labels each part of the case.',
  },
  statusLabels: {
    exists: 'Exists',
    'in-development': 'In development',
    hypothesis: 'Hypothesis',
    open: 'None yet',
  } satisfies Record<StatusItem['status'], string>,
  today: {
    intro: { id: 'today', eyebrow: 'Today', title: 'What exists today' } satisfies SectionIntro,
    items: [
      { status: 'in-development', title: 'A first module', text: 'Field Profitability, the operating economics of each field, is in development and not yet available.' },
      {
        status: 'exists',
        title: 'An evidence standard',
        text: 'Every published figure carries an evidence state, from Hypothetical to Verified, and a confidence state.',
      },
      { status: 'open', title: 'Results', text: 'No customer or pilot results are published.' },
    ] satisfies StatusItem[],
  },
  case: {
    intro: { id: 'case', eyebrow: 'The case', title: 'The case, step by step', lead: 'Each step carries its current status.' } satisfies SectionIntro,
    items: [
      { status: 'hypothesis', title: 'Problem', text: 'Across crop, horticulture and livestock systems, production and economic information is fragmented across records, prices, costs and operational context.' },
      { status: 'in-development', title: 'Wedge', text: 'Field Profitability: operating profit, field by field.' },
      { status: 'in-development', title: 'Product', text: 'Fixed formulas for field-level operating economics. AI explains results; it does not calculate them.' },
      { status: 'hypothesis', title: 'Farmer value', text: 'Farmers make better-informed field decisions with the economics in view.' },
      {
        status: 'hypothesis',
        title: 'Verified Economic Value',
        text: 'Value is to be measured per customer, with its evidence state, period and cohort. No value has been verified.',
      },
      { status: 'hypothesis', title: 'Retention', text: 'If PROFIT keeps showing value season after season, farmers keep using it.' },
      {
        status: 'hypothesis',
        title: 'Data',
        text: 'Permissioned data from more farms and seasons could make PROFIT’s economic interpretation more useful. This depends entirely on farmer consent.',
      },
      { status: 'open', title: 'Business model', text: 'Pricing is not published.' },
      { status: 'hypothesis', title: 'Defensibility', text: 'Evidence of value, farmer trust and permissioned data are candidate sources. None is claimed.' },
      {
        status: 'hypothesis',
        title: 'Scale',
        text: 'The master-brand decision logic may transfer across crops, horticulture, greenhouse production and livestock, but each domain and market requires its own production model and evidence.',
      },
    ] satisfies StatusItem[],
  },
  notClaimed: {
    intro: { id: 'not-claimed', eyebrow: 'Limits', title: 'What we do not claim' } satisfies SectionIntro,
    items: [
      { title: 'Market leadership', text: '' },
      { title: 'Verified savings or profit uplift', text: '' },
      { title: 'Customers, partners or integrations', text: '' },
      { title: 'International validation', text: '' },
    ] satisfies TextItem[],
  },
  contact: {
    intro: { id: 'contact', eyebrow: 'Contact', title: 'Talk to us' } satisfies SectionIntro,
    text: 'For investor and partner conversations, use the contact page.',
    link: { label: 'Contact', href: '/contact/#other' },
    gap: { owner: 'owner', text: 'A direct contact for investors and partners.' } satisfies ContentGap,
  },
};

const pilotForm: PilotFormContent = {
  title: 'Your details',
  requiredNote: 'All five fields are required.',
  fields: {
    name: { label: 'Name' },
    organisation: { label: 'Farm or company' },
    country: { label: 'Country' },
    email: { label: 'Email', hint: 'We reply to this address.' },
    farmType: {
      label: 'Farm type',
      hint: 'Field Profitability is the first pilot focus. Other choices record your production context and interest; they do not imply a current module is available.',
      placeholder: 'Choose one',
      options: [
        { value: 'arable', label: 'Arable / field crops' },
        { value: 'horticulture', label: 'Horticulture / orchards / berries' },
        { value: 'vegetables', label: 'Vegetables — open field' },
        { value: 'greenhouse', label: 'Greenhouse / protected cultivation' },
        { value: 'pigs', label: 'Pig production' },
        { value: 'dairy', label: 'Dairy' },
        { value: 'beef-grazing', label: 'Beef cattle / grazing livestock' },
        { value: 'poultry-eggs', label: 'Poultry / eggs' },
        { value: 'mixed', label: 'Mixed farm' },
        { value: 'other', label: 'Other agricultural production' },
      ],
    },
  },
  submit: 'Send',
  privacy: 'We use these details only to reply to you about the pilot. We do not ask for farm records here.',
  privacyReview: { owner: 'legal', text: 'Privacy notice for this form, before it is connected.' },
  previewNote: 'Preview: this form is not connected yet and sends nothing.',
  errorPrefix: 'Error:',
  summaryTitle: 'Check the form',
  errors: {
    name: { required: 'Enter your name.' },
    organisation: { required: 'Enter your farm or company name.' },
    country: { required: 'Enter your country.' },
    email: { required: 'Enter your email address.', format: 'Enter an email address in the right format, like name@example.com.' },
    farmType: { required: 'Choose a farm type.' },
  },
  status: {
    notConnected: 'This preview is not connected to a submission service yet. Nothing was sent.',
    sending: 'Sending…',
    success: 'Thank you. We will reply by email.',
    failure: 'Your details were not sent. Please try again later.',
  },
};

export const contact = {
  meta: { title: 'Join the pilot', description: 'Five details, no farm records. Then a conversation about whether the pilot fits your farm.' },
  intro: {
    eyebrow: 'Contact',
    title: 'Join the pilot',
    lead: 'Five details, no farm records. We use them only to reply to you about the pilot.',
  },
  stepsTitle: 'What happens next',
  steps: pilotSteps,
  review: pilotStepsReview,
  form: pilotForm,
  other: {
    title: 'Other enquiries',
    text: 'Investors, partners and advisors can use the same form for now.',
    gap: { owner: 'owner', text: 'A direct contact address for other enquiries.' } satisfies ContentGap,
  },
};

export const notFound = {
  meta: { title: 'Page not found' },
  eyebrow: '404',
  title: 'This page does not exist',
  lead: 'It may have moved, or the address may be mistyped.',
  links: [
    { label: 'Go to the homepage', href: '/' },
    { label: 'Join the pilot', href: '/contact/' },
  ],
};
