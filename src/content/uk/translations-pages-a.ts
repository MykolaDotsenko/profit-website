export const PAGES_A_TRANSLATIONS: Record<string, string> = {
  'A short form, then a conversation. No farm records.': 'Коротка форма, потім розмова. Без виробничих даних.',
  'Start with records that already exist': 'Починаємо з наявних записів',
  'Field records, invoices, sales, input costs, feed or herd records should be reused before asking a farm to create another parallel data-entry routine.':
    'Записи полів, рахунки, продажі, витрати на ресурси, корми чи дані стада варто повторно використовувати до того, як просити господарство вести ще один паралельний облік.',
  'Connected machinery when it genuinely helps': 'Підключена техніка — лише коли вона справді допомагає',
  'Machine, sensor, positioning or platform data can reduce manual work when the source is reliable and permissioned. Telemetry should not be a prerequisite for using PROFIT.':
    'Дані техніки, сенсорів, позиціювання чи платформ можуть зменшити ручну роботу, якщо джерело надійне й дозволене. Телеметрія не повинна бути умовою використання PROFIT.',
  'Older machinery still needs a path': 'Стара техніка також має підтримуватися',
  'For non-connected equipment, the product direction is minimal operator input, context-aware capture and confirmation only when the system is uncertain — not constant typing while working.':
    'Для непідключеної техніки напрям продукту — мінімальне введення оператором, контекстний збір і підтвердження лише тоді, коли система не впевнена, а не постійне введення під час роботи.',
  'Offline first where the work requires it': 'Офлайн насамперед там, де цього вимагає робота',
  'Field work cannot depend on continuous coverage. Capture should be able to happen locally and synchronise later when connectivity returns.':
    'Польова робота не може залежати від постійного зв’язку. Дані мають збиратися локально й синхронізуватися пізніше, коли зв’язок відновиться.',
  'Infer cautiously, confirm exceptions': 'Обережно робити висновки, підтверджувати винятки',
  'Time, location and activity context may reduce typing and repeated confirmation. Automatic activity recognition should be used only where validated, with inferred values clearly marked and easy to correct.':
    'Час, місце та контекст активності можуть зменшити ручне введення й повторні підтвердження. Автоматичне розпізнавання активності слід використовувати лише там, де воно перевірене; виведені значення мають бути чітко позначені й легко виправлятися.',
  'External data only with a purpose': 'Зовнішні дані — лише з конкретною метою',
  'Weather, market, satellite, soil or other external sources should be added only when they materially improve a decision and their provenance remains visible.':
    'Погодні, ринкові, супутникові, ґрунтові та інші зовнішні джерела варто додавати лише тоді, коли вони суттєво покращують рішення і їхнє походження залишається видимим.',
  'Capture with permission': 'Збір лише з дозволом',
  'Keep the source and purpose attached to the record. Recorded, imported, inferred and estimated values must remain distinguishable.':
    'Зберігайте разом із записом його джерело та мету. Зафіксовані, імпортовані, виведені й оцінені значення мають залишатися відмінними.',
  'Check completeness': 'Перевірити повноту',
  'Identify missing fields and periods before producing a confident economic or predictive result.':
    'Визначайте пропущені поля й періоди до формування впевненого економічного чи прогнозного результату.',
  'Quality gate': 'Контроль якості',
  'Check consistency and duplicates': 'Перевірити узгодженість і дублікати',
  'Look for unit mismatches, impossible combinations, repeated records and conflicts between sources.':
    'Шукайте невідповідності одиниць, неможливі комбінації, повторні записи й конфлікти між джерелами.',
  'Check anomalies and freshness': 'Перевірити аномалії та актуальність',
  'Flag unusual values and stale records instead of silently treating them as normal or current.':
    'Позначайте незвичні значення й застарілі записи замість того, щоб непомітно вважати їх нормальними чи актуальними.',
  'Preserve provenance': 'Зберігати походження даних',
  'Keep track of where the value came from, when it was recorded, and whether it was observed, inferred or modelled.':
    'Фіксуйте, звідки взялося значення, коли його записано і чи було воно спостереженим, виведеним або змодельованим.',
  'Check representativeness': 'Перевірити репрезентативність',
  'A model or benchmark should not be treated as transferable to a farm, field, season or production system it does not represent.':
    'Модель або бенчмарк не слід переносити на господарство, поле, сезон чи виробничу систему, яких вони не репрезентують.',
  'Model gate': 'Контроль моделі',
  'Historical / naive baseline': 'Історичний / наївний базовий рівень',
  'Always as the minimum reference, especially when data is limited.':
    'Завжди як мінімальна точка відліку, особливо коли даних мало.',
  'A more complex model must materially beat this out of sample before it earns operational use.':
    'Складніша модель має суттєво перевершити базову на невідомих даних, перш ніж її варто використовувати операційно.',
  'Can miss changing relationships, but exposes whether complexity adds real value.':
    'Може не врахувати змінні взаємозв’язки, але показує, чи дає складність реальну цінність.',
  'Linear / regularised regression': 'Лінійна / регуляризована регресія',
  'When relationships are reasonably stable and interpretability matters.':
    'Коли взаємозв’язки відносно стабільні й важлива інтерпретованість.',
  'Temporal holdout, independent farm/field checks where possible, MAE/RMSE and residual diagnostics.':
    'Часовий holdout, перевірки на незалежних господарствах/полях де можливо, MAE/RMSE і діагностика залишків.',
  'Can underfit nonlinear relationships or interactions.':
    'Може недонавчитися на нелінійних взаємозв’язках або взаємодіях.',
  'Tree ensembles': 'Ансамблі дерев',
  'For nonlinear tabular relationships and interactions with enough representative data.':
    'Для нелінійних табличних взаємозв’язків і взаємодій за достатньої кількості репрезентативних даних.',
  'Rolling or future-period validation, farm/field holdout, calibration and stability checks.':
    'Ковзна або майбутня валідація, holdout за господарством/полем, перевірки калібрування та стабільності.',
  'Can overfit farm-specific structure and appear stronger than it transfers.':
    'Може перенавчитися на структурі конкретного господарства й виглядати сильніше, ніж переноситься на інші дані.',
  'Time-series / process / hybrid models': 'Часові ряди / процесні / гібридні моделі',
  'When temporal or biological structure is central and the extra complexity is justified.':
    'Коли часова чи біологічна структура є ключовою і додаткова складність виправдана.',
  'Forward validation, scenario robustness, domain plausibility and operational reliability.':
    'Валідація вперед у часі, стійкість сценаріїв, доменна правдоподібність та операційна надійність.',
  'Higher maintenance burden and more assumptions to validate.':
    'Вищі витрати на підтримку й більше припущень, які треба перевіряти.',
  'Deep learning / foundation models': 'Глибоке навчання / foundation models',
  'Only when data scale, task structure and measurable performance gain justify them.':
    'Лише коли масштаб даних, структура задачі та вимірюване покращення якості це виправдовують.',
  'Must outperform simpler baselines on unseen data and meet explainability, cost and reliability constraints.':
    'Мають перевершувати простіші базові моделі на невідомих даних і відповідати обмеженням пояснюваності, вартості та надійності.',
  'Data hunger, transfer failure, opacity and complexity without farmer value.':
    'Висока потреба в даних, провали перенесення, непрозорість і складність без цінності для фермера.',
  'Describe the current production and economic state from traceable records.':
    'Описати поточний виробничий та економічний стан на основі простежуваних записів.',
  'Define the realistic choices — including current practice or doing nothing where that is the proper counterfactual.':
    'Визначити реалістичні варіанти — включно з поточною практикою або бездіяльністю, якщо це правильний контрфактичний сценарій.',
  'Economic consequences': 'Економічні наслідки',
  'Translate each alternative through explicit economics rather than a black-box score.':
    'Перевести кожну альтернативу в явні економічні наслідки замість непрозорого балу.',
  'Show assumptions, ranges and confidence where outcomes depend on weather, biology, markets or model uncertainty.':
    'Показувати припущення, діапазони й впевненість там, де результат залежить від погоди, біології, ринку чи невизначеності моделі.',
  'Farmer decision': 'Рішення фермера',
  'PROFIT supports the comparison. The farmer keeps authority and can reject the modelled option.':
    'PROFIT підтримує порівняння. Фермер зберігає повноваження й може відхилити змодельований варіант.',
  'Outcome and learning': 'Результат і навчання',
  'Record what actually happened, compare it with the counterfactual and update the evidence rather than declaring the forecast correct.':
    'Фіксуйте фактичний результат, порівнюйте його з контрфактичним сценарієм і оновлюйте докази, а не оголошуйте прогноз правильним.',
  'For farmers': 'Для фермерів',
  'How PROFIT is being built across crop, horticulture and livestock production — including realistic data collection, quality checks and Field Profitability as the first concrete focus.':
    'Як PROFIT створюється для рослинництва, садівництва й тваринництва — з реалістичним збором даних, перевірками якості та «Прибутковістю поля» як першим конкретним фокусом.',
  'Built for different farms — starting with one concrete product': 'Для різних господарств — із одного конкретного продукту',
  'PROFIT is being built around agricultural decision economics across crop, horticulture and livestock systems. The current first pilot focus is narrower: Field Profitability for field crops.':
    'PROFIT будується навколо економіки аграрних рішень у рослинництві, садівництві й тваринництві. Поточний перший пілот вужчий: «Прибутковість поля» для польових культур.',
  'Farm types': 'Типи господарств',
  'Different production systems need different economic models': 'Різним виробничим системам потрібні різні економічні моделі',
  'The common PROFIT logic is production reality → data/context → economics → uncertainty/evidence → decision. The operating unit and the inputs change by domain.':
    'Спільна логіка PROFIT: виробнича реальність → дані/контекст → економіка → невизначеність/докази → рішення. Операційна одиниця та вхідні дані змінюються залежно від домену.',
  'Data collection': 'Збір даних',
  'Use the records you already have. Add automation only where it helps.':
    'Використовуйте записи, які вже маєте. Додавайте автоматизацію лише там, де вона допомагає.',
  'The current Field Profitability concept starts from farmer-provided field records. The broader PROFIT direction is to reduce manual entry without making new machinery, perfect connectivity or constant screen attention a condition for use.':
    'Поточна концепція «Прибутковості поля» починається з записів, наданих фермером. Ширший напрям PROFIT — зменшувати ручне введення, не роблячи нову техніку, ідеальний зв’язок чи постійну увагу до екрана умовою використання.',
  'Connected machinery, automatic activity recognition, contextual inference and offline capture are development principles, not claims about the current Field Profitability build.':
    'Підключена техніка, автоматичне розпізнавання активності, контекстні висновки та офлайн-збір — принципи розробки, а не твердження про поточну версію «Прибутковості поля».',
  'From record to result': 'Від запису до результату',
  'What should happen after data arrives': 'Що має відбутися після надходження даних',
  'Before a number influences a decision, the data behind it should be checked, traced and handled according to its quality.':
    'Перш ніж число вплине на рішення, дані за ним мають бути перевірені, простежувані й оброблені відповідно до їхньої якості.',
  'What you would provide': 'Що ви надаєте',
  'For each field and season.': 'Для кожного поля й сезону.',
  'What you get back': 'Що ви отримуєте',
  'What it does not do': 'Чого це не робить',
  'Hard questions': 'Складні питання',
  'Questions farmers ask': 'Питання фермерів',
  'Answered as they stand today. Where something is still open, we say so.':
    'Відповідаємо так, як є сьогодні. Якщо щось ще відкрите — говоримо про це прямо.',
  'PROFIT’s first module: the operating economics of each field, season by season. In development and not yet available.':
    'Перший модуль PROFIT: операційна економіка кожного поля, сезон за сезоном. У розробці й ще недоступний.',
  'Hypothetical example': 'Гіпотетичний приклад',
  'What it is designed to show': 'Що цей приклад має показати',
  'Fields side by side, and what goes into one field’s operating profit. The farm and field records are synthetic; the current example is calibrated to Finnish official statistics for plausibility and is not a customer result.':
    'Поля поруч і склад операційного прибутку одного поля. Записи господарства й поля синтетичні; поточний приклад відкалібрований за офіційною статистикою Фінляндії для правдоподібності й не є результатом клієнта.',
  'What each number means': 'Що означає кожне число',
  'Definitions come first, so a local word such as “margin” never changes the formula behind it.':
    'Спочатку визначення, щоб локальний термін на кшталт «маржа» не змінював формулу, що стоїть за показником.',
  'How the numbers are produced': 'Як отримуються числа',
  'Fixed formulas': 'Фіксовані формули',
  'Every figure comes from the definitions above, applied to the inputs you provide. The same inputs always give the same result.':
    'Кожен показник отримується з наведених вище визначень, застосованих до ваших вхідних даних. Однакові дані завжди дають однаковий результат.',
  'AI explains, it does not calculate': 'AI пояснює, але не розраховує',
  'Your currency': 'Ваша валюта',
  'Figures carry the currency they were recorded in. Field figures are per hectare.':
    'Показники зберігають валюту, в якій були записані. Показники поля подаються на гектар.',
  'Current product boundary': 'Межі поточного продукту',
  'Deterministic economics now. Forecasting only when evidence justifies it.':
    'Зараз — детермінована економіка. Прогнозування лише тоді, коли його виправдовують докази.',
  'Field Profitability is designed around explicit field economics. Forecasting, optimisation, automatic activity recognition and scenario simulation belong to the wider PROFIT research direction and are not current Field Profitability capabilities.':
    '«Прибутковість поля» побудована навколо явної економіки поля. Прогнозування, оптимізація, автоматичне розпізнавання активності та симуляція сценаріїв належать до ширшого дослідницького напряму PROFIT і не є поточними можливостями модуля.',
  'Current arithmetic': 'Поточна арифметика',
  'Known inputs are transformed with fixed, inspectable formulas.':
    'Відомі вхідні дані перетворюються за фіксованими й перевірними формулами.',
  'Data quality first': 'Спочатку якість даних',
  'Missing, stale or conflicting data should reduce confidence before any model is trusted.':
    'Відсутні, застарілі чи суперечливі дані мають знижувати впевненість до того, як моделі можна буде довіряти.',
  'Future forecasting discipline': 'Дисципліна майбутнього прогнозування',
  'Uncertain drivers should be forecast separately, compared against simple baselines and carried into ranges or scenarios rather than one precise future-profit number.':
    'Невизначені фактори слід прогнозувати окремо, порівнювати з простими базовими моделями та переносити в діапазони чи сценарії замість одного точного числа майбутнього прибутку.',
  'Farmer authority': 'Повноваження фермера',
  'Any future decision-support layer compares alternatives; it does not remove the farmer from the decision.':
    'Будь-який майбутній шар підтримки рішень порівнює альтернативи, але не усуває фермера з рішення.',
};
