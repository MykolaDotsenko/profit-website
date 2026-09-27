import type { UIStrings } from './types';

/** Ukrainian opt-in localization. English remains the default unprefixed site language. */
export const uk: UIStrings = {
  brand: 'PROFIT',
  skipLink: 'Перейти до вмісту',
  language: {
    label: 'Мова',
    english: 'Англійська',
    ukrainian: 'Українська',
  },
  common: {
    pilot: 'Пілот',
    howPilotWouldWork: 'Як проходитиме пілот',
    dataQualityPath: 'Шлях перевірки якості даних',
    dataLifecycle: 'Життєвий цикл даних і доказів PROFIT',
    decisionSupportMethod: 'Метод підтримки рішень PROFIT',
    dataQualityGates: 'Контроль якості даних PROFIT',
    decisionSupportArchitecture: 'Архітектура підтримки рішень PROFIT',
    primaryLegalReferences: 'Основні правові джерела',
    or: 'або',
    currentScope: 'Поточний обсяг',
    qualifyConversation: 'Спочатку визначаємо відповідність пілоту — без передавання зайвих даних.',
  },
  nav: {
    label: 'Головна навігація',
    menu: 'Меню',
    close: 'Закрити меню',
    items: [
      { href: '/farmers/', label: 'Фермерам' },
      { href: '/product/', label: 'Продукт' },
      { href: '/trust/', label: 'Довіра' },
      { href: '/company/', label: 'Компанія' },
      { href: '/investors/', label: 'Інвесторам' },
    ],
    cta: { href: '/contact/', label: 'Приєднатися до пілоту' },
  },
  footer: {
    label: 'Нижня навігація',
    tagline: 'PROFIT поєднує те, що відбувається у господарстві, з тим, що це означає економічно.',
    evidenceNote:
      'Економічні приклади та приклади цінності PROFIT позначаються станом доказовості й рівнем впевненості. Зовнішня статистика має окремі джерела і не подається як результат клієнта.',
    companyGap: 'Для нижнього колонтитула потрібні фактичні дані компанії: юридична назва, реєстраційний номер і зареєстрована адреса.',
    groups: [
      {
        title: 'PROFIT',
        items: [
          { href: '/farmers/', label: 'Для фермерів' },
          { href: '/product/', label: 'Прибутковість поля' },
          { href: '/company/', label: 'Компанія' },
          { href: '/investors/', label: 'Інвестори та партнери' },
        ],
      },
      {
        title: 'Довіра',
        items: [
          { href: '/trust/#evidence', label: 'Докази та методологія' },
          { href: '/trust/#data', label: 'Дані та контроль фермера' },
          { href: '/trust/#privacy', label: 'Принципи приватності й безпеки' },
          { href: '/trust/#limitations', label: 'Обмеження' },
        ],
      },
      {
        title: 'Наступний крок',
        items: [{ href: '/contact/', label: 'Приєднатися до пілоту' }],
      },
    ],
  },
  status: {
    previewLabel: 'Попередня версія',
    previewText:
      'Сайт ще не запущено. Заголовок — неперевірена гіпотеза. Ілюстративна економіка PROFIT позначена як гіпотетична; зовнішня статистика має окремі джерела.',
    gapLabel: 'Потрібні дані',
    reviewLabel: 'Чернетка для перевірки',
    imagePending: 'Зображення очікується',
    documentaryAgriculture: 'Документальна аграрна фотографія',
  },
  production: {
    currentUnit: 'Поточна виробнича одиниця',
    unitLabel: 'Виробнича одиниця',
    scopeLabel: 'Граматика виробничих одиниць PROFIT',
    scopeVariableLabel: 'Змінюється залежно від виробничої системи',
    scopeInvariantLabel: 'Залишається незмінним',
    productStatus: 'Статус продукту',
    inDevelopment: 'У розробці',
    evidenceLabel: 'Доказовість',
    productLabel: 'Продукт',
    periodLabel: 'Період',
    roleLabel: 'Роль',
    currentExample: 'Поточний приклад',
    economicState: 'Ілюстративний економічний стан',
    productionContext: 'Поточний виробничий контекст',
    brandFlow: 'Виробництво → Економіка → Докази → Рішення',
  },
  evidence: {
    exampleLabel: 'Гіпотетичний приклад',
    states: {
      hypothetical: 'Гіпотетичне',
      modelled: 'Змодельоване',
      observed: 'Спостережене',
      attributed: 'Атрибутоване',
      verified: 'Верифіковане',
    },
    stateDescriptions: {
      hypothetical: 'Ілюстрація або сценарій. Це не фактичний результат господарства.',
      modelled: 'Розраховано з явних припущень або моделі. Це ще не виміряний фактичний результат.',
      observed: 'Реальний результат, виміряний за визначений період. Саме спостереження не доводить причину.',
      attributed: 'Виміряний приріст, пов’язаний із визначеним рішенням або втручанням відносно явного контрфактичного сценарію, із зазначеним методом атрибуції та впевненістю.',
      verified: 'Атрибутований приріст економічного ефекту, що відповідає стандарту PROFIT VEV: відтворювана економіка, задокументовані докази й контрфактичний сценарій, оцінена впевненість і зафіксована перевірка.',
    },
    confidenceLabel: 'Впевненість',
    confidence: {
      high: 'Висока',
      medium: 'Середня',
      low: 'Низька',
      'insufficient-evidence': 'Недостатньо доказів',
      'not-assessed': 'Не оцінено',
    },
    provenance: {
      'farmer-provided': 'Надано фермером',
      machinery: 'Техніка',
      satellite: 'Супутникові дані',
      weather: 'Погода',
      market: 'Ринок',
      'derived-modelled': 'Похідне / змодельоване',
    },
    illustrativeSource: 'Ілюстративне джерело',
    rungOf: (rung, total) => `Рівень доказовості ${rung} з ${total}`,
  },
  metrics: {
    yield: 'Урожайність',
    price: 'Ціна',
    revenue: 'Виручка',
    variable_costs: 'Змінні витрати',
    allocated_fixed_costs: 'Розподілені постійні витрати',
    operating_costs: 'Операційні витрати',
    gross_margin: 'Валова маржа',
    operating_profit: 'Операційний прибуток',
    operating_margin: 'Операційна маржа',
    break_even_price: 'Ціна беззбитковості',
    break_even_yield: 'Урожайність беззбитковості',
  },
  units: {
    perArea: { ha: '/га' },
    perMass: { t: '/т' },
    mass: { t: 'т' },
    area: { ha: 'га' },
    spoken: {
      perArea: { ha: 'на гектар' },
      perMass: { t: 'на тонну' },
      mass: { t: 'тонни' },
      area: { ha: 'гектари' },
    },
  },
  crops: { wheat: 'Пшениця', barley: 'Ячмінь' },
  field: (id) => `Поле ${id}`,
  seasons: (count) => {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 === 1 && mod100 !== 11) return `${count} сезон`;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} сезони`;
    return `${count} сезонів`;
  },
  meta: {
    defaultDescription: 'PROFIT поєднує те, що відбувається у господарстві, з тим, що це означає економічно.',
    titleSuffix: 'PROFIT',
  },
};
