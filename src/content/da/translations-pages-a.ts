export const PAGES_A_TRANSLATIONS: Record<string, string> = {
  'A short form, then a conversation. No farm records.': 'En kort formular og derefter en samtale. Ingen produktionsdata fra bedriften.',
  'Start with records that already exist': 'Start med de data, der allerede findes',
  'Field records, invoices, sales, input costs, feed or herd records should be reused before asking a farm to create another parallel data-entry routine.':
    'Markdata, fakturaer, salgsdata, inputomkostninger, foderdata og besætningsdata bør genbruges, før bedriften bliver bedt om at oprette endnu en parallel registreringsrutine.',
  'Connected machinery when it genuinely helps': 'Forbundne maskiner, når det reelt hjælper',
  'Machine, sensor, positioning or platform data can reduce manual work when the source is reliable and permissioned. Telemetry should not be a prerequisite for using PROFIT.':
    'Maskin-, sensor-, positions- eller platformdata kan reducere manuelt arbejde, når kilden er pålidelig og tilladt. Telemetri bør ikke være en forudsætning for at bruge PROFIT.',
  'Older machinery still needs a path': 'Ældre maskiner skal stadig have en vej ind',
  'For non-connected equipment, the product direction is minimal operator input, context-aware capture and confirmation only when the system is uncertain — not constant typing while working.':
    'For ikke-forbundet udstyr er produktretningen minimal input fra operatøren, kontekstbevidst registrering og bekræftelse kun når systemet er usikkert — ikke konstant indtastning under arbejdet.',
  'Offline first where the work requires it': 'Offline først, hvor arbejdet kræver det',
  'Field work cannot depend on continuous coverage. Capture should be able to happen locally and synchronise later when connectivity returns.':
    'Markarbejde kan ikke afhænge af konstant dækning. Registrering skal kunne ske lokalt og synkroniseres senere, når forbindelsen vender tilbage.',
  'Infer cautiously, confirm exceptions': 'Udled forsigtigt, bekræft undtagelser',
  'Time, location and activity context may reduce typing and repeated confirmation. Automatic activity recognition should be used only where validated, with inferred values clearly marked and easy to correct.':
    'Tid, placering og aktivitetskontekst kan reducere indtastning og gentagen bekræftelse. Automatisk aktivitetsgenkendelse bør kun bruges, hvor den er valideret, med afledte værdier tydeligt markeret og nemme at rette.',
  'External data only with a purpose': 'Eksterne data kun med et formål',
  'Weather, market, satellite, soil or other external sources should be added only when they materially improve a decision and their provenance remains visible.':
    'Vejr-, markeds-, satellit-, jord- eller andre eksterne kilder bør kun tilføjes, når de reelt forbedrer en beslutning, og deres oprindelse forbliver synlig.',
  'Capture with permission': 'Registrer med tilladelse',
  'Keep the source and purpose attached to the record. Recorded, imported, inferred and estimated values must remain distinguishable.':
    'Bevar kilde og formål sammen med registreringen. Registrerede, importerede, afledte og estimerede værdier skal kunne skelnes.',
  'Check completeness': 'Kontrollér fuldstændighed',
  'Identify missing fields and periods before producing a confident economic or predictive result.':
    'Identificér manglende felter og perioder, før der vises et økonomisk eller prædiktivt resultat med høj sikkerhed.',
  'Quality gate': 'Kvalitetskontrol',
  'Check consistency and duplicates': 'Kontrollér konsistens og dubletter',
  'Look for unit mismatches, impossible combinations, repeated records and conflicts between sources.':
    'Se efter enhedsfejl, umulige kombinationer, gentagne registreringer og konflikter mellem kilder.',
  'Check anomalies and freshness': 'Kontrollér afvigelser og aktualitet',
  'Flag unusual values and stale records instead of silently treating them as normal or current.':
    'Markér usædvanlige værdier og forældede registreringer i stedet for stiltiende at behandle dem som normale eller aktuelle.',
  'Preserve provenance': 'Bevar oprindelse',
  'Keep track of where the value came from, when it was recorded, and whether it was observed, inferred or modelled.':
    'Bevar oplysninger om, hvor værdien kom fra, hvornår den blev registreret, og om den blev observeret, afledt eller modelleret.',
  'Check representativeness': 'Kontrollér repræsentativitet',
  'A model or benchmark should not be treated as transferable to a farm, field, season or production system it does not represent.':
    'En model eller benchmark bør ikke behandles som overførbar til en bedrift, mark, sæson eller et produktionssystem, den ikke repræsenterer.',
  'Model gate': 'Modelkontrol',
  'Historical / naive baseline': 'Historisk / naiv baseline',
  'Always as the minimum reference, especially when data is limited.':
    'Altid som minimumsreference, især når datamængden er begrænset.',
  'A more complex model must materially beat this out of sample before it earns operational use.':
    'En mere kompleks model skal slå denne markant på usete data, før den fortjener operationel brug.',
  'Can miss changing relationships, but exposes whether complexity adds real value.':
    'Kan overse skiftende sammenhænge, men viser om kompleksitet faktisk tilfører værdi.',
  'Linear / regularised regression': 'Lineær / regulariseret regression',
  'When relationships are reasonably stable and interpretability matters.':
    'Når sammenhænge er rimeligt stabile, og fortolkelighed er vigtig.',
  'Temporal holdout, independent farm/field checks where possible, MAE/RMSE and residual diagnostics.':
    'Tidsbaseret holdout, uafhængige bedrift-/markkontroller hvor muligt, MAE/RMSE og residualdiagnostik.',
  'Can underfit nonlinear relationships or interactions.':
    'Kan underfitte ikke-lineære sammenhænge eller interaktioner.',
  'Tree ensembles': 'Træensembler',
  'For nonlinear tabular relationships and interactions with enough representative data.':
    'Til ikke-lineære tabulære sammenhænge og interaktioner, når der er nok repræsentative data.',
  'Rolling or future-period validation, farm/field holdout, calibration and stability checks.':
    'Rullende eller fremtidsbaseret validering, bedrift-/mark-holdout, kalibrering og stabilitetskontrol.',
  'Can overfit farm-specific structure and appear stronger than it transfers.':
    'Kan overfitte bedriftsspecifik struktur og se stærkere ud, end overførbarheden retfærdiggør.',
  'Time-series / process / hybrid models': 'Tidsserie-, proces- / hybridmodeller',
  'When temporal or biological structure is central and the extra complexity is justified.':
    'Når tidslig eller biologisk struktur er central, og den ekstra kompleksitet er berettiget.',
  'Forward validation, scenario robustness, domain plausibility and operational reliability.':
    'Fremadrettet validering, scenarierobusthed, faglig plausibilitet og operationel pålidelighed.',
  'Higher maintenance burden and more assumptions to validate.':
    'Større vedligeholdelsesbyrde og flere antagelser, der skal valideres.',
  'Deep learning / foundation models': 'Deep learning / foundation-modeller',
  'Only when data scale, task structure and measurable performance gain justify them.':
    'Kun når datamængde, opgavestruktur og målbar performancegevinst berettiger dem.',
  'Must outperform simpler baselines on unseen data and meet explainability, cost and reliability constraints.':
    'Skal slå simplere baselines på usete data og opfylde krav til forklarbarhed, omkostninger og pålidelighed.',
  'Data hunger, transfer failure, opacity and complexity without farmer value.':
    'Stor datakrævendehed, manglende overførbarhed, uigennemsigtighed og kompleksitet uden værdi for landmanden.',
  'Describe the current production and economic state from traceable records.':
    'Beskriv den nuværende produktionsmæssige og økonomiske situation ud fra sporbare data.',
  'Define the realistic choices — including current practice or doing nothing where that is the proper counterfactual.':
    'Definér realistiske valg — inklusive nuværende praksis eller at gøre ingenting, når det er det korrekte kontrafaktiske scenarie.',
  'Economic consequences': 'Økonomiske konsekvenser',
  'Translate each alternative through explicit economics rather than a black-box score.':
    'Oversæt hvert alternativ gennem tydelig økonomi i stedet for en black-box-score.',
  'Show assumptions, ranges and confidence where outcomes depend on weather, biology, markets or model uncertainty.':
    'Vis antagelser, intervaller og sikkerhed, hvor resultater afhænger af vejr, biologi, markeder eller modelusikkerhed.',
  'Farmer decision': 'Landmandens beslutning',
  'PROFIT supports the comparison. The farmer keeps authority and can reject the modelled option.':
    'PROFIT understøtter sammenligningen. Landmanden beholder beslutningsretten og kan afvise den modellerede mulighed.',
  'Outcome and learning': 'Resultat og læring',
  'Record what actually happened, compare it with the counterfactual and update the evidence rather than declaring the forecast correct.':
    'Registrer hvad der faktisk skete, sammenlign med det kontrafaktiske scenarie og opdater dokumentationen i stedet for at erklære prognosen korrekt.',
  'For farmers': 'For landmænd',
  'How PROFIT is being built across crop, horticulture and livestock production — including realistic data collection, quality checks and Field Profitability as the first concrete focus.':
    'Sådan bygges PROFIT på tværs af planteavl, gartneri og husdyr — inklusive realistisk dataindsamling, kvalitetskontrol og Markøkonomi som første konkrete fokus.',
  'Built for different farms — starting with one concrete product': 'Bygget til forskellige bedrifter — med ét konkret produkt som start',
  'PROFIT is being built around agricultural decision economics across crop, horticulture and livestock systems. The current first pilot focus is narrower: Field Profitability for field crops.':
    'PROFIT bygges omkring beslutningsøkonomi i landbruget på tværs af planteavl, gartneri og husdyrsystemer. Det første pilotfokus er smallere: Markøkonomi for markafgrøder.',
  'Farm types': 'Bedriftstyper',
  'Different production systems need different economic models': 'Forskellige produktionssystemer kræver forskellige økonomiske modeller',
  'The common PROFIT logic is production reality → data/context → economics → uncertainty/evidence → decision. The operating unit and the inputs change by domain.':
    'PROFITs fælles logik er produktionsvirkelighed → data/kontekst → økonomi → usikkerhed/dokumentation → beslutning. Den operationelle enhed og input ændrer sig efter produktionsområde.',
  'Data collection': 'Dataindsamling',
  'Use the records you already have. Add automation only where it helps.':
    'Brug de data, du allerede har. Tilføj kun automatisering, hvor det hjælper.',
  'The current Field Profitability concept starts from farmer-provided field records. The broader PROFIT direction is to reduce manual entry without making new machinery, perfect connectivity or constant screen attention a condition for use.':
    'Det nuværende Markøkonomi-koncept starter med markdata leveret af landmanden. PROFITs bredere retning er at reducere manuel indtastning uden at gøre nye maskiner, perfekt forbindelse eller konstant skærmopmærksomhed til en forudsætning.',
  'Connected machinery, automatic activity recognition, contextual inference and offline capture are development principles, not claims about the current Field Profitability build.':
    'Forbundne maskiner, automatisk aktivitetsgenkendelse, kontekstuel udledning og offline-registrering er udviklingsprincipper, ikke påstande om den nuværende Markøkonomi-version.',
  'From record to result': 'Fra registrering til resultat',
  'What should happen after data arrives': 'Hvad der bør ske, når data kommer ind',
  'Before a number influences a decision, the data behind it should be checked, traced and handled according to its quality.':
    'Før et tal påvirker en beslutning, bør dataene bag det kontrolleres, spores og håndteres efter deres kvalitet.',
  'What you would provide': 'Det du vil levere',
  'For each field and season.': 'For hver mark og sæson.',
  'What you get back': 'Det du får tilbage',
  'What it does not do': 'Det gør det ikke',
  'Hard questions': 'Svære spørgsmål',
  'Questions farmers ask': 'Spørgsmål landmænd stiller',
  'Answered as they stand today. Where something is still open, we say so.':
    'Besvaret som tingene står i dag. Hvor noget stadig er åbent, siger vi det.',
  'PROFIT’s first module: the operating economics of each field, season by season. In development and not yet available.':
    'PROFITs første modul: den operationelle økonomi for hver mark, sæson for sæson. Under udvikling og endnu ikke tilgængelig.',
  'Hypothetical example': 'Hypotetisk eksempel',
  'What it is designed to show': 'Det er designet til at vise',
  'Fields side by side, and what goes into one field’s operating profit. The farm and field records are synthetic; the current example is calibrated to Finnish official statistics for plausibility and is not a customer result.':
    'Marker side om side og hvad der indgår i én marks operationelle resultat. Bedrifts- og markdata er syntetiske; det nuværende eksempel er kalibreret mod officiel finsk statistik for plausibilitet og er ikke et kunderesultat.',
  'What each number means': 'Hvad hvert tal betyder',
  'Definitions come first, so a local word such as “margin” never changes the formula behind it.':
    'Definitionerne kommer først, så et lokalt ord som “margin” aldrig ændrer formlen bag tallet.',
  'How the numbers are produced': 'Sådan bliver tallene beregnet',
  'Fixed formulas': 'Faste formler',
  'Every figure comes from the definitions above, applied to the inputs you provide. The same inputs always give the same result.':
    'Hvert tal kommer fra definitionerne ovenfor anvendt på de input, du leverer. De samme input giver altid det samme resultat.',
  'AI explains, it does not calculate': 'AI forklarer, den beregner ikke',
  'Your currency': 'Din valuta',
  'Figures carry the currency they were recorded in. Field figures are per hectare.':
    'Tallene bevarer den valuta, de blev registreret i. Marktal vises pr. hektar.',
  'Current product boundary': 'Nuværende produktgrænse',
  'Deterministic economics now. Forecasting only when evidence justifies it.':
    'Deterministisk økonomi nu. Prognoser kun når dokumentationen retfærdiggør det.',
  'Field Profitability is designed around explicit field economics. Forecasting, optimisation, automatic activity recognition and scenario simulation belong to the wider PROFIT research direction and are not current Field Profitability capabilities.':
    'Markøkonomi er designet omkring tydelig økonomi på markniveau. Prognoser, optimering, automatisk aktivitetsgenkendelse og scenariesimulering hører til PROFITs bredere forskningsretning og er ikke nuværende Markøkonomi-funktioner.',
  'Current arithmetic': 'Nuværende beregning',
  'Known inputs are transformed with fixed, inspectable formulas.':
    'Kendte input omregnes med faste, gennemskuelige formler.',
  'Data quality first': 'Datakvalitet først',
  'Missing, stale or conflicting data should reduce confidence before any model is trusted.':
    'Manglende, forældede eller modstridende data bør reducere sikkerheden, før nogen model betragtes som pålidelig.',
  'Future forecasting discipline': 'Disciplin for fremtidige prognoser',
  'Uncertain drivers should be forecast separately, compared against simple baselines and carried into ranges or scenarios rather than one precise future-profit number.':
    'Usikre drivere bør prognosticeres separat, sammenlignes med simple baselines og føres videre til intervaller eller scenarier i stedet for ét præcist fremtidigt resultatstal.',
  'Farmer authority': 'Landmandens beslutningsret',
  'Any future decision-support layer compares alternatives; it does not remove the farmer from the decision.':
    'Et fremtidigt lag af beslutningsstøtte sammenligner alternativer; det fjerner ikke landmanden fra beslutningen.',
};
