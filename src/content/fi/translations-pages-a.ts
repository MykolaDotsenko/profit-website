export const PAGES_A_TRANSLATIONS: Record<string, string> = {
  'A short form, then a conversation. No farm records.': 'Lyhyt lomake ja sen jälkeen keskustelu. Ei tilan tuotantotietoja.',
  'Start with records that already exist': 'Aloita tiedoista, jotka ovat jo olemassa',
  'Field records, invoices, sales, input costs, feed or herd records should be reused before asking a farm to create another parallel data-entry routine.':
    'Lohkotiedot, laskut, myyntitiedot, tuotantopanosten kustannukset, rehutiedot ja karjatiedot kannattaa hyödyntää ennen kuin tilaa pyydetään ylläpitämään uutta rinnakkaista kirjaustapaa.',
  'Connected machinery when it genuinely helps': 'Yhdistetty kalusto vain silloin, kun siitä on aidosti hyötyä',
  'Machine, sensor, positioning or platform data can reduce manual work when the source is reliable and permissioned. Telemetry should not be a prerequisite for using PROFIT.':
    'Kone-, anturi-, paikannus- tai alustadata voi vähentää käsityötä, kun lähde on luotettava ja käyttö on sallittu. Telemetria ei saa olla PROFITin käytön edellytys.',
  'Older machinery still needs a path': 'Myös vanhemmalle kalustolle tarvitaan toimiva polku',
  'For non-connected equipment, the product direction is minimal operator input, context-aware capture and confirmation only when the system is uncertain — not constant typing while working.':
    'Yhdistämättömän kaluston osalta tuotesuunta on minimaalinen käyttäjän syöttö, kontekstia hyödyntävä tallennus ja vahvistus vain järjestelmän ollessa epävarma — ei jatkuvaa kirjoittamista työn aikana.',
  'Offline first where the work requires it': 'Offline ensin siellä, missä työ sitä vaatii',
  'Field work cannot depend on continuous coverage. Capture should be able to happen locally and synchronise later when connectivity returns.':
    'Peltotyö ei voi riippua jatkuvasta verkkoyhteydestä. Tiedot pitää voida tallentaa paikallisesti ja synkronoida myöhemmin yhteyden palattua.',
  'Infer cautiously, confirm exceptions': 'Päättele varovasti, vahvista poikkeukset',
  'Time, location and activity context may reduce typing and repeated confirmation. Automatic activity recognition should be used only where validated, with inferred values clearly marked and easy to correct.':
    'Aika, sijainti ja toimintakonteksti voivat vähentää kirjoittamista ja toistuvaa vahvistamista. Automaattista toiminnan tunnistusta tulee käyttää vain validoituna, ja pääteltyjen arvojen pitää olla selvästi merkittyjä ja helposti korjattavia.',
  'External data only with a purpose': 'Ulkoista dataa vain selkeään tarkoitukseen',
  'Weather, market, satellite, soil or other external sources should be added only when they materially improve a decision and their provenance remains visible.':
    'Sää-, markkina-, satelliitti-, maaperä- tai muuta ulkoista dataa tulee lisätä vain, jos se parantaa päätöstä olennaisesti ja datan alkuperä säilyy näkyvänä.',
  'Capture with permission': 'Tallenna luvalla',
  'Keep the source and purpose attached to the record. Recorded, imported, inferred and estimated values must remain distinguishable.':
    'Säilytä lähde ja käyttötarkoitus tiedon yhteydessä. Kirjatut, tuodut, päätellyt ja arvioidut arvot on pystyttävä erottamaan toisistaan.',
  'Check completeness': 'Tarkista kattavuus',
  'Identify missing fields and periods before producing a confident economic or predictive result.':
    'Tunnista puuttuvat tiedot ja ajanjaksot ennen varmana esitettyä taloudellista tai ennustavaa tulosta.',
  'Quality gate': 'Laatukriteeri',
  'Check consistency and duplicates': 'Tarkista johdonmukaisuus ja kaksoiskappaleet',
  'Look for unit mismatches, impossible combinations, repeated records and conflicts between sources.':
    'Etsi yksikkövirheitä, mahdottomia yhdistelmiä, toistuvia tietueita ja lähteiden välisiä ristiriitoja.',
  'Check anomalies and freshness': 'Tarkista poikkeamat ja ajantasaisuus',
  'Flag unusual values and stale records instead of silently treating them as normal or current.':
    'Merkitse poikkeavat arvot ja vanhentuneet tiedot sen sijaan, että niitä käsiteltäisiin huomaamatta normaaleina tai ajantasaisina.',
  'Preserve provenance': 'Säilytä alkuperä',
  'Keep track of where the value came from, when it was recorded, and whether it was observed, inferred or modelled.':
    'Pidä näkyvissä, mistä arvo tuli, milloin se kirjattiin ja onko se havaittu, päätelty vai mallinnettu.',
  'Check representativeness': 'Tarkista edustavuus',
  'A model or benchmark should not be treated as transferable to a farm, field, season or production system it does not represent.':
    'Mallia tai vertailuarvoa ei pidä siirtää tilalle, lohkolle, kasvukaudelle tai tuotantojärjestelmälle, jota se ei edusta.',
  'Model gate': 'Mallikriteeri',
  'Historical / naive baseline': 'Historiallinen / naiivi vertailutaso',
  'Always as the minimum reference, especially when data is limited.':
    'Aina vähimmäisvertailuna, erityisesti kun dataa on vähän.',
  'A more complex model must materially beat this out of sample before it earns operational use.':
    'Monimutkaisemman mallin on voitettava tämä olennaisesti ennennäkemättömällä datalla ennen operatiivista käyttöä.',
  'Can miss changing relationships, but exposes whether complexity adds real value.':
    'Voi jättää muuttuvia riippuvuuksia huomaamatta, mutta paljastaa tuoko monimutkaisuus oikeaa lisäarvoa.',
  'Linear / regularised regression': 'Lineaarinen / regularisoitu regressio',
  'When relationships are reasonably stable and interpretability matters.':
    'Kun riippuvuudet ovat kohtuullisen vakaita ja tulkittavuus on tärkeää.',
  'Temporal holdout, independent farm/field checks where possible, MAE/RMSE and residual diagnostics.':
    'Ajallinen holdout, riippumattomat tila-/lohkotarkistukset mahdollisuuksien mukaan, MAE/RMSE ja residuaalidiagnostiikka.',
  'Can underfit nonlinear relationships or interactions.':
    'Voi alisovittaa epälineaarisia riippuvuuksia tai vuorovaikutuksia.',
  'Tree ensembles': 'Puuensemblet',
  'For nonlinear tabular relationships and interactions with enough representative data.':
    'Epälineaarisiin taulukkomuotoisiin riippuvuuksiin ja vuorovaikutuksiin, kun edustavaa dataa on riittävästi.',
  'Rolling or future-period validation, farm/field holdout, calibration and stability checks.':
    'Liukuva tai tulevien jaksojen validointi, tila-/lohko-holdout, kalibrointi ja vakaustarkistukset.',
  'Can overfit farm-specific structure and appear stronger than it transfers.':
    'Voi ylisovittaa tilakohtaiseen rakenteeseen ja näyttää paremmalta kuin siirtyvyys muihin kohteisiin oikeuttaa.',
  'Time-series / process / hybrid models': 'Aikasarja-, prosessi- / hybridimallit',
  'When temporal or biological structure is central and the extra complexity is justified.':
    'Kun ajallinen tai biologinen rakenne on keskeinen ja lisämonimutkaisuus on perusteltua.',
  'Forward validation, scenario robustness, domain plausibility and operational reliability.':
    'Eteenpäin suuntautuva validointi, skenaarioiden kestävyys, tuotantoalan uskottavuus ja operatiivinen luotettavuus.',
  'Higher maintenance burden and more assumptions to validate.':
    'Suurempi ylläpitokuorma ja enemmän validoitavia oletuksia.',
  'Deep learning / foundation models': 'Syväoppiminen / foundation-mallit',
  'Only when data scale, task structure and measurable performance gain justify them.':
    'Vain, kun datan määrä, tehtävän rakenne ja mitattava suorituskykyhyöty oikeuttavat ne.',
  'Must outperform simpler baselines on unseen data and meet explainability, cost and reliability constraints.':
    'On voitettava yksinkertaisemmat vertailutasot ennennäkemättömällä datalla ja täytettävä selitettävyyden, kustannusten ja luotettavuuden vaatimukset.',
  'Data hunger, transfer failure, opacity and complexity without farmer value.':
    'Suuri datantarve, heikko siirtyvyys, läpinäkymättömyys ja monimutkaisuus ilman viljelijäarvoa.',
  'Describe the current production and economic state from traceable records.':
    'Kuvaa nykyinen tuotannollinen ja taloudellinen tila jäljitettävistä tiedoista.',
  'Define the realistic choices — including current practice or doing nothing where that is the proper counterfactual.':
    'Määritä realistiset vaihtoehdot — mukaan lukien nykykäytäntö tai tekemättä jättäminen, kun se on asianmukainen vastetilanne.',
  'Economic consequences': 'Taloudelliset seuraukset',
  'Translate each alternative through explicit economics rather than a black-box score.':
    'Muunna jokainen vaihtoehto avoimeksi taloudelliseksi seuraukseksi mustan laatikon pistemäärän sijaan.',
  'Show assumptions, ranges and confidence where outcomes depend on weather, biology, markets or model uncertainty.':
    'Näytä oletukset, vaihteluvälit ja varmuus, kun tulos riippuu säästä, biologiasta, markkinoista tai malliepävarmuudesta.',
  'Farmer decision': 'Viljelijän päätös',
  'PROFIT supports the comparison. The farmer keeps authority and can reject the modelled option.':
    'PROFIT tukee vertailua. Viljelijä säilyttää päätösvallan ja voi hylätä mallinnetun vaihtoehdon.',
  'Outcome and learning': 'Tulos ja oppiminen',
  'Record what actually happened, compare it with the counterfactual and update the evidence rather than declaring the forecast correct.':
    'Kirjaa mitä todella tapahtui, vertaa sitä vastetilanteeseen ja päivitä näyttö sen sijaan, että ennuste julistettaisiin oikeaksi.',
  'For farmers': 'Viljelijöille',
  'How PROFIT is being built across crop, horticulture and livestock production — including realistic data collection, quality checks and Field Profitability as the first concrete focus.':
    'Miten PROFITia rakennetaan peltoviljelyyn, puutarhatuotantoon ja kotieläintuotantoon — realistinen datankeruu, laatutarkistukset ja peltokohtainen kannattavuus ensimmäisenä konkreettisena kohteena.',
  'Built for different farms — starting with one concrete product': 'Eri tiloille — alkaen yhdestä konkreettisesta tuotteesta',
  'PROFIT is being built around agricultural decision economics across crop, horticulture and livestock systems. The current first pilot focus is narrower: Field Profitability for field crops.':
    'PROFIT rakentuu maatalouden päätöstalouden ympärille peltoviljelyssä, puutarhatuotannossa ja kotieläintuotannossa. Ensimmäinen pilotti on rajatumpi: peltokohtainen kannattavuus peltokasveille.',
  'Farm types': 'Tilatyypit',
  'Different production systems need different economic models': 'Eri tuotantojärjestelmät tarvitsevat eri talousmallit',
  'The common PROFIT logic is production reality → data/context → economics → uncertainty/evidence → decision. The operating unit and the inputs change by domain.':
    'PROFITin yhteinen logiikka on tuotantotodellisuus → data/konteksti → talous → epävarmuus/näyttö → päätös. Operatiivinen yksikkö ja syötteet muuttuvat tuotantosuunnan mukaan.',
  'Data collection': 'Datankeruu',
  'Use the records you already have. Add automation only where it helps.':
    'Hyödynnä tiedot, jotka sinulla jo on. Lisää automaatiota vain sinne, missä siitä on hyötyä.',
  'The current Field Profitability concept starts from farmer-provided field records. The broader PROFIT direction is to reduce manual entry without making new machinery, perfect connectivity or constant screen attention a condition for use.':
    'Nykyinen peltokohtaisen kannattavuuden konsepti alkaa viljelijän antamista lohkotiedoista. PROFITin laajempi suunta on vähentää käsinsyöttöä ilman, että uusi kalusto, täydellinen yhteys tai jatkuva ruudun seuraaminen on käytön ehto.',
  'Connected machinery, automatic activity recognition, contextual inference and offline capture are development principles, not claims about the current Field Profitability build.':
    'Yhdistetty kalusto, automaattinen toiminnan tunnistus, kontekstuaalinen päättely ja offline-tallennus ovat kehitysperiaatteita, eivät väitteitä nykyisen peltokohtaisen kannattavuuden ominaisuuksista.',
  'From record to result': 'Tiedosta tulokseen',
  'What should happen after data arrives': 'Mitä datan saapumisen jälkeen pitäisi tapahtua',
  'Before a number influences a decision, the data behind it should be checked, traced and handled according to its quality.':
    'Ennen kuin luku vaikuttaa päätökseen, sen taustadata tulee tarkistaa, jäljittää ja käsitellä laatunsa mukaisesti.',
  'What you would provide': 'Mitä toimittaisit',
  'For each field and season.': 'Kullekin lohkolle ja kasvukaudelle.',
  'What you get back': 'Mitä saat takaisin',
  'What it does not do': 'Mitä se ei tee',
  'Hard questions': 'Vaikeat kysymykset',
  'Questions farmers ask': 'Viljelijöiden kysymykset',
  'Answered as they stand today. Where something is still open, we say so.':
    'Vastaukset sellaisina kuin ne ovat tänään. Jos jokin on vielä avoinna, sanomme sen suoraan.',
  'PROFIT’s first module: the operating economics of each field, season by season. In development and not yet available.':
    'PROFITin ensimmäinen moduuli: kunkin lohkon operatiivinen talous kasvukausi kasvukaudelta. Kehityksessä, ei vielä saatavilla.',
  'Hypothetical example': 'Hypoteettinen esimerkki',
  'What it is designed to show': 'Mitä esimerkin on tarkoitus näyttää',
  'Fields side by side, and what goes into one field’s operating profit. The farm and field records are synthetic; the current example is calibrated to Finnish official statistics for plausibility and is not a customer result.':
    'Lohkot rinnakkain ja yhden lohkon operatiivisen tuloksen osatekijät. Tila- ja lohkotiedot ovat synteettisiä; nykyinen esimerkki on kalibroitu Suomen virallisiin tilastoihin uskottavuuden vuoksi eikä ole asiakastulos.',
  'What each number means': 'Mitä kukin luku tarkoittaa',
  'Definitions come first, so a local word such as “margin” never changes the formula behind it.':
    'Määritelmät tulevat ensin, jotta paikallinen termi kuten “kate” ei muuta luvun taustalla olevaa kaavaa.',
  'How the numbers are produced': 'Miten luvut muodostetaan',
  'Fixed formulas': 'Kiinteät kaavat',
  'Every figure comes from the definitions above, applied to the inputs you provide. The same inputs always give the same result.':
    'Jokainen luku syntyy yllä olevista määritelmistä ja antamistasi syötteistä. Samat syötteet tuottavat aina saman tuloksen.',
  'AI explains, it does not calculate': 'AI selittää, ei laske',
  'Your currency': 'Käyttämäsi valuutta',
  'Figures carry the currency they were recorded in. Field figures are per hectare.':
    'Luvuissa säilyy valuutta, jossa ne kirjattiin. Lohkoluvut esitetään hehtaaria kohti.',
  'Current product boundary': 'Nykyisen tuotteen rajaus',
  'Deterministic economics now. Forecasting only when evidence justifies it.':
    'Nyt deterministinen talous. Ennustaminen vasta, kun näyttö oikeuttaa sen.',
  'Field Profitability is designed around explicit field economics. Forecasting, optimisation, automatic activity recognition and scenario simulation belong to the wider PROFIT research direction and are not current Field Profitability capabilities.':
    'Peltokohtainen kannattavuus perustuu avoimeen lohkotalouteen. Ennustaminen, optimointi, automaattinen toiminnan tunnistus ja skenaariosimulointi kuuluvat PROFITin laajempaan tutkimussuuntaan eivätkä ole nykyisiä ominaisuuksia.',
  'Current arithmetic': 'Nykyinen laskenta',
  'Known inputs are transformed with fixed, inspectable formulas.':
    'Tunnetut syötteet muunnetaan kiinteillä, tarkastettavilla kaavoilla.',
  'Data quality first': 'Datan laatu ensin',
  'Missing, stale or conflicting data should reduce confidence before any model is trusted.':
    'Puuttuvan, vanhentuneen tai ristiriitaisen datan tulee alentaa varmuutta ennen kuin mihinkään malliin luotetaan.',
  'Future forecasting discipline': 'Tulevan ennustamisen periaate',
  'Uncertain drivers should be forecast separately, compared against simple baselines and carried into ranges or scenarios rather than one precise future-profit number.':
    'Epävarmat ajurit tulee ennustaa erikseen, verrata yksinkertaisiin vertailutasoihin ja viedä vaihteluväleihin tai skenaarioihin yhden tarkan tulevaisuuden tulosluvun sijaan.',
  'Farmer authority': 'Viljelijän päätösvalta',
  'Any future decision-support layer compares alternatives; it does not remove the farmer from the decision.':
    'Mahdollinen tuleva päätöksenteon tuki vertaa vaihtoehtoja; se ei poista viljelijää päätöksestä.',
};
