import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

const routes = ['/', '/farmers/', '/product/', '/trust/', '/company/', '/investors/', '/contact/'] as const;
const viewports = [
  { name: '390', width: 390, height: 844 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 768 },
  { name: '1440', width: 1440, height: 1000 },
] as const;

function collectRuntimeFailures(page: Page): string[] {
  const failures: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') failures.push(`console: ${message.text()}`);
  });
  page.on('pageerror', (error) => failures.push(`pageerror: ${error.message}`));
  page.on('requestfailed', (request) => {
    failures.push(`requestfailed: ${request.method()} ${request.url()} — ${request.failure()?.errorText ?? 'unknown'}`);
  });
  return failures;
}

for (const viewport of viewports) {
  test.describe(`${viewport.name}px critical routes`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const route of routes) {
      test(`${route} renders without overflow, runtime failures or WCAG A/AA violations`, async ({ page }) => {
        const failures = collectRuntimeFailures(page);
        const response = await page.goto(route, { waitUntil: 'networkidle' });

        expect(response?.ok(), `${route} should return 2xx`).toBeTruthy();
        await expect(page.locator('main')).toBeVisible();

        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );
        expect(overflow, `${route} should not overflow horizontally`).toBeLessThanOrEqual(1);

        const accessibility = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
          .analyze();
        expect(accessibility.violations, JSON.stringify(accessibility.violations, null, 2)).toEqual([]);

        expect(failures, failures.join('\n')).toEqual([]);
      });
    }
  });
}

test.describe('master-brand scope', () => {
  test('homepage shows whole-farm direction while keeping current product truth explicit', async ({ page }) => {
    await page.goto('/');

    const scope = page.locator('#production-systems');
    await expect(scope).toBeVisible();
    await expect(scope).toContainText('Horticulture, orchards & berries');
    await expect(scope).toContainText('Vegetables & greenhouse production');
    await expect(scope).toContainText('Pig production');
    await expect(scope).toContainText('Dairy');
    await expect(scope).toContainText('Other livestock & mixed farms');
    await expect(scope).toContainText('Field Profitability is the first concrete product focus');
  });

  test('pilot farm-type choices capture broad production context without adding fields', async ({ page }) => {
    await page.goto('/contact/');

    const select = page.locator('#pf-farmType');
    await expect(select).toContainText('Horticulture / orchards / berries');
    await expect(select).toContainText('Greenhouse / protected cultivation');
    await expect(select).toContainText('Pig production');
    await expect(select).toContainText('Dairy');
    await expect(select).toContainText('Poultry / eggs');

    await expect(page.locator('[data-pilot-form] input, [data-pilot-form] select')).toHaveCount(5);
  });
});

test.describe('homepage copy deck', () => {
  test('homepage preserves farmer-first trust and product-boundary messages', async ({ page }) => {
    await page.goto('/');

    const main = page.locator('main');
    await expect(main).toContainText('Different farms. Different production models. The same economic discipline.');
    await expect(main).toContainText('The hard part is rarely one missing number');
    await expect(main).toContainText('Known economics stay explicit. The farmer keeps decision authority.');
    await expect(main).toContainText('A value counts only when the evidence supports it');
    await expect(main).toContainText('The farm stays in control');
    await expect(main).toContainText('Build value. Prove it. Then scale it.');
    await expect(main).toContainText('In development — not yet available');

    await expect(main).not.toContainText('AI-powered');
    await expect(main).not.toContainText('guaranteed profit');
  });
});

test.describe('calibrated synthetic proof', () => {
  test('statistics-calibrated synthetic example remains visibly hypothetical', async ({ page }) => {
    await page.goto('/');

    const example = page.locator('#example');
    await expect(example).toBeVisible();
    await expect(example).toContainText('Hypothetical example');
    await expect(example).toContainText('statistics-calibrated synthetic field records');
    await expect(example).toContainText('€221');
    await expect(example).toContainText('€49');
    await expect(example).toContainText('−€69');
    await expect(example).toContainText('3.7');
    await expect(example).toContainText('€207');
    await expect(example).toContainText('€490');
    await expect(example).toContainText('€345');
  });
});

test.describe('trust stress check', () => {
  test('trust stress check stays visibly non-forecast and evidence-safe', async ({ page }) => {
    await page.goto('/trust/');

    const stress = page.locator('#stress-check');
    await expect(stress).toBeVisible();
    await expect(stress).toContainText('Test the arithmetic before trusting the presentation');
    await expect(stress).toContainText('not a forecast');
    await expect(stress).toContainText('costs constant');
    // Public presentation is deliberately rounded; exact arithmetic is guarded in domain.test.ts.
    await expect(stress).toContainText('−€215');
    await expect(stress).toContainText('−€69');
    await expect(stress).toContainText('€7');
    await expect(stress).toContainText('€92');
    await expect(stress).toContainText('€226');
    await expect(stress).toContainText('4.0');
    await expect(stress).toContainText('Luke');

    await expect(stress).not.toContainText('prediction');
    await expect(stress).not.toContainText('recommendation engine');
  });
});

test.describe('methodology surfaces', () => {
  test('farmers page explains realistic data collection without claiming it is shipped', async ({ page }) => {
    await page.goto('/farmers/');

    const main = page.locator('main');
    await expect(main).toContainText('Use the records you already have. Add automation only where it helps.');
    await expect(main).toContainText('Older machinery still needs a path');
    await expect(main).toContainText('Offline first where the work requires it');
    await expect(main).toContainText('development principles, not claims about the current Field Profitability build');
    await expect(main).toContainText('Check completeness');
    await expect(main).toContainText('Check representativeness');
    await expect(main).toContainText('Will I have to enter everything manually?');
    await expect(main).toContainText('How would PROFIT forecast the future without guessing?');
  });

  test('product page keeps deterministic economics separate from future forecasting', async ({ page }) => {
    await page.goto('/product/');

    const main = page.locator('main');
    await expect(main).toContainText('Deterministic economics now. Forecasting only when evidence justifies it.');
    await expect(main).toContainText('Forecasting, optimisation, automatic activity recognition and scenario simulation');
    await expect(main).toContainText('are not current Field Profitability capabilities');
  });

  test('trust page exposes data lifecycle, model comparison and human decision authority', async ({ page }) => {
    await page.goto('/trust/');

    const main = page.locator('main');
    await expect(main).toContainText('From a farm record to a decision — with the quality checks visible');
    await expect(main).toContainText('No model wins by reputation. It has to win on the task.');
    await expect(main).toContainText('Historical / naive baseline');
    await expect(main).toContainText('Linear / regularised regression');
    await expect(main).toContainText('Tree ensembles');
    await expect(main).toContainText('Deep learning / foundation models');
    await expect(main).toContainText('Support the decision. Do not replace the farmer.');
    await expect(main).toContainText('The farmer keeps authority');
    await expect(main).toContainText('not a claim that the current product autonomously recommends actions');
  });

  test('company page explains data quality, model selection and DSS research direction', async ({ page }) => {
    await page.goto('/company/');

    const main = page.locator('main');
    await expect(main).toContainText('Quality before intelligence');
    await expect(main).toContainText('Completeness');
    await expect(main).toContainText('Compare models against a baseline, not against marketing');
    await expect(main).toContainText('A decision is more than a prediction');
    await expect(main).toContainText('technology-push design');
    await expect(main).toContainText('not a claim that a full predictive DSS is already shipped');
  });

  test('homepage keeps only the two farmer-facing principles and links to deeper methodology', async ({ page }) => {
    await page.goto('/');

    const how = page.locator('#how-it-works');
    await expect(how).toContainText('Two rules behind the system');
    await expect(how).toContainText('Fit the farm');
    await expect(how).toContainText('Keep uncertainty visible');
    await expect(how).not.toContainText('Quality before intelligence');
    await expect(how).toContainText('How PROFIT handles data, models and decisions');
    await expect(how).not.toContainText('Random Forest');
    await expect(how).not.toContainText('deep learning');

    await page.goto('/trust/');
    await expect(page.locator('main')).toContainText('Check completeness');
    await expect(page.locator('main')).toContainText('Check consistency and duplicates');

    await page.goto('/company/');
    await expect(page.locator('main')).toContainText('Quality before intelligence');
  });
});

test.describe('selected B2 production-unit grammar', () => {
  test('homepage expresses production context, economics, evidence and cross-domain transfer', async ({ page }) => {
    await page.goto('/');

    const hero = page.locator('.hero__frame');
    await expect(hero).toBeVisible();
    await expect(hero).toContainText('Current production unit');
    await expect(hero).toContainText('Operating profit');
    await expect(hero).toContainText('Hypothetical');
    await expect(hero).toContainText('Not assessed');
    await expect(hero).toContainText('Decision question');

    const scope = page.locator('.production-scope');
    await expect(scope).toBeVisible();
    await expect(scope).toContainText('Field / season');
    await expect(scope).toContainText('Block / variety / crop cycle');
    await expect(scope).toContainText('Batch / production cycle');
    await expect(scope).toContainText('Cow / group / herd / period');
    await expect(scope).toContainText('Changes with the production system');
    await expect(scope).toContainText('Stays consistent');
    await expect(scope).toContainText('Production → Economics → Evidence → Decision');
    await expect(scope).toContainText('Current first focus');
    await expect(scope.getByText('Direction', { exact: true })).toHaveCount(5);
  });

  test('B2 does not imply mapping or telemetry as current capability', async ({ page }) => {
    await page.goto('/');

    const hero = page.locator('.hero__frame');
    await expect(hero).not.toContainText('GIS');
    await expect(hero).not.toContainText('satellite map');
    await expect(hero).not.toContainText('live telemetry');
  });

  test('B2 proof stays a production-unit record rather than a generic dashboard', async ({ page }) => {
    await page.goto('/');

    const example = page.locator('#example');
    await expect(example.locator('.field-example__rail')).toBeVisible();
    await expect(example.locator('.field-example__rail')).toContainText('Current production unit');
    await expect(example.locator('.field-example__rail')).toContainText('Field Profitability');
    await expect(example.locator('.field-example__rail')).toContainText('Current example');
    await expect(example.locator('.field-example__decision')).toContainText('Decision question');
    await expect(example.locator('.field-example__grid')).toBeVisible();

    await expect(example).not.toContainText('Dashboard');
    await expect(example).not.toContainText('AI recommendation');
  });

  test('documentary placeholder is explicit and does not simulate farm evidence', async ({ page }) => {
    await page.goto('/');

    const slot = page.locator('.hero__image .image-slot');
    await expect(slot).toBeVisible();
    await expect(slot).toContainText('Image pending');
    await expect(slot).toContainText('Documentary agriculture');
    await expect(slot).toContainText('Needs an approved photograph with source, rights and provenance.');
    await expect(slot.locator('img')).toHaveCount(0);
  });

  test('B2 production framing carries across supporting company routes', async ({ page }) => {
    for (const route of ['/farmers/', '/product/', '/trust/', '/company/', '/investors/', '/contact/']) {
      await page.goto(route);
      await expect(page.locator('.page-intro__frame')).toBeVisible();
      await expect(page.locator('.page-intro__rail')).toContainText('PROFIT /');
    }

    await page.goto('/farmers/');
    await expect(page.locator('.production-scope')).toContainText('Production unit');

    await page.goto('/company/');
    await expect(page.locator('.production-scope')).toContainText('Pig production');
    await expect(page.locator('.production-scope')).toContainText('Dairy');

    await page.goto('/product/');
    await expect(page.locator('.field-example__grid')).toBeVisible();
    await expect(page.locator('.field-example__decision')).toContainText('Decision');
  });
});

test.describe('B2 brand chrome', () => {
  test('B2 brand chrome keeps the production-to-decision code without crowding mobile', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/');

    await expect(page.locator('.site-header__flow')).toBeVisible();
    await expect(page.locator('.site-header__flow')).toHaveText('Production → Economics → Evidence → Decision');
    await expect(page.locator('.site-footer__flow')).toBeVisible();
    await expect(page.locator('.site-footer__flow')).toHaveText('Production → Economics → Evidence → Decision');

    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.locator('.site-header__flow')).toBeHidden();
    await expect(page.locator('.site-footer__flow')).toBeVisible();
    await expect(page.locator('.production-scope')).toHaveAttribute('aria-label', 'PROFIT production-unit grammar');
  });
});

test.describe('B2 mobile hierarchy', () => {
  test('mobile hero keeps value before supporting production context', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const order = await page.evaluate(() => {
      const selectors = ['.hero__copy', '.hero__state', '.hero__actions', '.hero__rail'];
      return selectors.map((selector) => {
        const el = document.querySelector(selector);
        if (!el) throw new Error(`Missing ${selector}`);
        return { selector, top: el.getBoundingClientRect().top };
      });
    });

    expect(order[0].top).toBeLessThan(order[1].top);
    expect(order[1].top).toBeLessThan(order[2].top);
    expect(order[2].top).toBeLessThan(order[3].top);

    await expect(page.locator('.hero__copy')).toContainText('See the economics before you decide.');
    await expect(page.locator('.hero__copy')).toContainText('It starts with Field Profitability');
    await expect(page.locator('.hero__copy')).toContainText('the decision stays with the farmer');
    await expect(page.locator('.hero__state')).toContainText('Operating profit');
    await expect(page.locator('.hero__actions')).toContainText('Join the pilot');
    await expect(page.locator('.hero__rail')).toContainText('Current production unit');
  });
});

test.describe('H4 message integrity', () => {
  test('default homepage keeps H4 explicitly hypothetical and product-truth bounded', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('.hero');
    await expect(hero).toHaveAttribute('data-hero-variant', 'h4');
    await expect(hero).toHaveAttribute('data-message-state', 'hypothesis');
    await expect(hero).toContainText('Agricultural Decision Intelligence');
    await expect(hero).toContainText('See the economics before you decide.');
    await expect(hero).toContainText('Field Profitability');
    await expect(hero).toContainText('In development');
    await expect(hero).toContainText('Hypothetical');
    await expect(hero).toContainText('Not assessed');
    await expect(hero).not.toContainText('more profitable decisions');
  });

  test('30-second layer states the farmer problem and outcome without a profit promise', async ({ page }) => {
    await page.goto('/');
    const summary = page.locator('.tldr');
    await expect(summary).toContainText('The problem');
    await expect(summary).toContainText('The economic meaning behind the next decision can be hard to see.');
    await expect(summary).toContainText('The goal');
    await expect(summary).toContainText('Less guesswork around the economics of a decision');
    await expect(summary).toContainText('farmer still in control');
  });
});

test.describe('homepage evidence progressive disclosure', () => {
  test('trust-critical evidence stays visible while verification depth is progressive', async ({ page }) => {
    await page.goto('/');
    const evidence = page.locator('#evidence');
    await expect(evidence).toContainText('Hypothetical');
    await expect(evidence).toContainText('Confidence');
    await expect(evidence).toContainText('Nothing on this site is labelled Verified.');

    const details = evidence.locator('.value__disclosure');
    await expect(details).not.toHaveAttribute('open', '');
    await expect(details.getByText('Inspect the verification chain')).toBeVisible();

    await details.locator('summary').click();
    await expect(details).toHaveAttribute('open', '');
    await expect(details).toContainText('Baseline');
    await expect(details).toContainText('Counterfactual');
    await expect(details).toContainText('Attribution');
    await expect(details).toContainText('PROFIT does not treat a forecast as a fact');
  });

  test('verification disclosure remains keyboard operable', async ({ page }) => {
    await page.goto('/');
    const summary = page.locator('#evidence .value__disclosure summary');
    await summary.focus();
    await expect(summary).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#evidence .value__disclosure')).toHaveAttribute('open', '');
  });
});

test.describe('closing conversion surface', () => {
  test('closing pilot CTA stays explicit and visually separated', async ({ page }) => {
    await page.goto('/');

    const join = page.locator('#join');
    await expect(join).toBeVisible();
    await expect(join).toHaveClass(/section--inverse/);
    await expect(join).toContainText('Join the pilot');
    await expect(join).toContainText('Five details. No farm records.');
    await expect(join).toContainText('What happens after you click');
    await expect(join).toContainText('Send five details');
    await expect(join).toContainText('We reply');
    await expect(join).toContainText('Terms before data');
    await expect(join.getByRole('link', { name: 'Join the pilot' })).toBeVisible();
    await expect(join.getByRole('link', { name: 'Read how PROFIT handles data first' })).toBeVisible();
  });
});

test.describe('claim and source integrity', () => {
  test('homepage keeps hypothetical PROFIT economics distinct without an investor-like market statistic', async ({ page }) => {
    await page.goto('/');

    const main = page.locator('main');
    await expect(main.locator('#example')).toContainText('Hypothetical example');
    await expect(main.locator('#production-systems')).not.toContainText('€531.9B');
    await expect(main.locator('#production-systems')).not.toContainText('Eurostat');
    await expect(page.locator('.preview-banner')).toContainText('Illustrative PROFIT economics are labelled Hypothetical');
    await expect(page.locator('footer')).toContainText('Sourced external statistics are identified separately');
    await expect(page.locator('body')).not.toContainText('every figure is a hypothetical example');
  });

  test('trust methodology scopes evidence labels to PROFIT values', async ({ page }) => {
    await page.goto('/trust/');
    const evidence = page.locator('#evidence');
    await expect(evidence).toContainText('Every PROFIT economic or value example carries two labels');
    await expect(evidence).toContainText('External statistics are sourced separately');
    await expect(evidence).toContainText('For PROFIT economic and value examples, the source category is labelled');
    await expect(evidence).not.toContainText('Every figure we publish carries two labels');
  });

  test('investor evidence standard does not relabel external statistics as PROFIT evidence', async ({ page }) => {
    await page.goto('/investors/');
    const main = page.locator('main');
    await expect(main).toContainText('PROFIT economic and value examples carry an evidence state');
    await expect(main).toContainText('External statistics are sourced separately');
  });
});

test.describe('internal navigation integrity', () => {
  test('internal links and fragments resolve across core routes', async ({ page }) => {
    const targets = new Set<string>();

    for (const route of routes) {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
      expect(response?.ok(), route).toBeTruthy();

      const hrefs = await page.locator('a[href]').evaluateAll((links) =>
        links.map((link) => (link as HTMLAnchorElement).getAttribute('href') ?? ''),
      );

      for (const href of hrefs) {
        if (!href || href.startsWith('http:') || href.startsWith('https:') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
        const resolved = new URL(href, `http://internal.test${route}`);
        targets.add(`${resolved.pathname}${resolved.hash}`);
      }
    }

    for (const target of targets) {
      const url = new URL(target, 'http://internal.test');
      const response = await page.goto(`${url.pathname}${url.search}`, { waitUntil: 'domcontentloaded' });
      expect(response?.ok(), `Internal link ${target} should resolve`).toBeTruthy();

      if (url.hash) {
        const id = decodeURIComponent(url.hash.slice(1));
        await expect(page.locator(`[id="${id.replaceAll('"', '\\"')}"]`), `Fragment ${target} should exist`).toHaveCount(1);
      }
    }
  });
});

test.describe('privacy and farm-data readiness', () => {
  test('trust page separates current website data from future farm-data terms', async ({ page }) => {
    await page.goto('/trust/#privacy');

    const privacy = page.locator('#privacy');
    await expect(privacy).toContainText('Start with less data. Agree the terms before farm records.');
    await expect(privacy).toContainText('What this website asks for today');
    await expect(privacy).toContainText('Five contact/context details');
    await expect(privacy).toContainText('No farm records at first contact');
    await expect(privacy).toContainText('Preview submission is off');
    await expect(privacy).toContainText('No analytics or cookie layer in the current code');

    await expect(privacy).toContainText('What the final privacy notice still has to specify');
    await expect(privacy).toContainText('Purpose + legal basis');
    await expect(privacy).toContainText('Retention');
    await expect(privacy).toContainText('Recipients, processors + transfers');
    await expect(privacy).toContainText('Rights + complaint path');

    await expect(privacy).toContainText('Before any farm records are shared');
    await expect(privacy).toContainText('Secondary use + model training');
    await expect(privacy).toContainText('Retention + deletion + export');
    await expect(privacy).toContainText('Draft for review');
    await expect(privacy.getByRole('link', { name: /European Commission · Principles of the GDPR/ })).toBeVisible();
  });

  test('pilot form keeps five fields and links to privacy readiness before activation', async ({ page }) => {
    await page.goto('/contact/');

    const form = page.locator('[data-pilot-form]');
    await expect(form.locator('input, select')).toHaveCount(5);
    await expect(form).toContainText('We do not ask for farm records in this form.');
    await expect(form.getByRole('link', { name: 'Privacy and farm-data readiness' })).toHaveAttribute('href', '/trust/#privacy');
    await expect(form).toContainText('The live form still requires an approved privacy notice');
    await expect(form).toContainText('Preview: this form is not connected yet and sends nothing.');
  });

  test('pre-launch pages do not implement analytics or cookie storage APIs', async ({ page }) => {
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator('script[src]')).toHaveCount(0);
      const source = await page.locator('html').evaluate(() =>
        Array.from(document.scripts).map((script) => script.textContent ?? '').join('\n'),
      );
      expect(source).not.toContain('document.cookie');
      expect(source).not.toContain('localStorage');
      expect(source).not.toContain('sessionStorage');
      expect(source).not.toMatch(/gtag|googletagmanager|plausible|posthog|segment/i);
    }
  });
});

test.describe('runtime footprint', () => {
  test('homepage stays free of executable client scripts', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('script[src]')).toHaveCount(0);
    await expect(page.locator('script:not([type]), script[type="module"], script[type="text/javascript"]')).toHaveCount(0);
  });

  test('contact client logic is isolated to the pilot form', async ({ page }) => {
    await page.goto('/contact/');
    const scripts = page.locator('script[src], script:not([type]), script[type="module"], script[type="text/javascript"]');
    expect(await scripts.count()).toBeLessThanOrEqual(1);
    await expect(page.locator('[data-pilot-form]')).toHaveCount(1);
  });
});

test.describe('production shell integrity', () => {
  test('pre-launch metadata and heading structure stay valid', async ({ page }) => {
    const seenTitles = new Set<string>();

    for (const route of routes) {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
      expect(response?.ok(), route).toBeTruthy();

      await expect(page.locator('h1'), `${route} should have exactly one H1`).toHaveCount(1);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');

      const description = (await page.locator('meta[name="description"]').getAttribute('content')) ?? '';
      expect(description.trim().length, `${route} description should be substantive`).toBeGreaterThanOrEqual(40);

      const title = await page.title();
      expect(title.trim().length, `${route} title should be non-empty`).toBeGreaterThan(0);
      expect(seenTitles.has(title), `Duplicate title: ${title}`).toBeFalsy();
      seenTitles.add(title);

      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', title);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', description);
      await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute('content', 'PROFIT');
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary');
    }
  });

  test('404 remains an actual not-found response with a usable recovery path', async ({ page }) => {
    const response = await page.goto('/this-route-must-not-exist');
    expect(response?.status()).toBe(404);
    await expect(page.locator('h1')).toHaveText('This page does not exist');
    await expect(page.getByRole('link', { name: /Go to the homepage/ })).toHaveAttribute('href', '/');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  });
});

test.describe('positioning and crawl hygiene', () => {
  test('homepage problem stays concrete without repeating the mechanism', async ({ page }) => {
    await page.goto('/');

    const problem = page.locator('#questions');
    await expect(problem).toContainText('Which fields actually make money?');
    await expect(problem).toContainText('What should change next season?');
    await expect(problem).toContainText('Records behind the decision');
    await expect(problem).toContainText('The work is not collecting data for its own sake.');
    await expect(problem).not.toContainText('What changes in the decision process');
    await expect(problem).not.toContainText('PROFIT approach');
  });

  test('pre-launch robots file blocks crawling', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.ok()).toBeTruthy();
    const text = await response.text();
    expect(text).toContain('User-agent: *');
    expect(text).toContain('Disallow: /');
  });

  test('sitemap route is valid XML even before production origin is configured', async ({ request }) => {
    const response = await request.get('/sitemap-index.xml');
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toMatch(/(?:application|text)\/xml/);
    const text = await response.text();
    expect(text).toContain('<urlset');
    expect(text).toContain('http://www.sitemaps.org/schemas/sitemap/0.9');
  });
});

test.describe('scan-first brochure behavior', () => {
  test('desktop homepage exposes quiet guided navigation without crowding mobile', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/');

    const journey = page.locator('.journey-nav');
    await expect(journey).toBeVisible();
    await expect(journey).toContainText('On this page');
    const journeyLinks = journey.getByRole('link');
    await expect(journeyLinks).toHaveCount(7);
    await expect(journeyLinks.nth(0)).toHaveText(/Farmer questions/);
    await expect(journeyLinks.nth(0)).toHaveAttribute('href', '#questions');
    await expect(journeyLinks.nth(1)).toHaveText(/How it works/);
    await expect(journeyLinks.nth(1)).toHaveAttribute('href', '#how-it-works');
    await expect(journeyLinks.nth(2)).toHaveText(/Field economics/);
    await expect(journeyLinks.nth(2)).toHaveAttribute('href', '#example');
    await expect(journeyLinks.nth(3)).toHaveText(/Production systems/);
    await expect(journeyLinks.nth(3)).toHaveAttribute('href', '#production-systems');
    await expect(journeyLinks.nth(4)).toHaveAttribute('href', '#evidence');
    await expect(journeyLinks.nth(6)).toHaveAttribute('href', '#join');

    await page.setViewportSize({ width: 390, height: 844 });
    await expect(journey).toBeHidden();
  });

  test('homepage long-form narrative puts farmer problem and mechanism before company breadth', async ({ page }) => {
    await page.goto('/');

    const ids = [
      'questions',
      'how-it-works',
      'example',
      'field-profitability',
      'production-systems',
      'evidence',
      'control',
      'company',
      'join',
    ];

    const positions = await page.evaluate((sectionIds) =>
      sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) throw new Error(`Missing homepage section #${id}`);
        return { id, top: el.getBoundingClientRect().top + window.scrollY };
      }),
      ids,
    );

    for (let i = 1; i < positions.length; i += 1) {
      expect(positions[i - 1].top, `${positions[i - 1].id} should precede ${positions[i].id}`).toBeLessThan(
        positions[i].top,
      );
    }

    expect(positions.findIndex((item) => item.id === 'example')).toBeLessThan(
      positions.findIndex((item) => item.id === 'production-systems'),
    );
  });

  test('Field Profitability proof leads with one named economic state before detail', async ({ page }) => {
    await page.goto('/');

    const example = page.locator('#example');
    const state = example.locator('.field-example__state');
    await expect(state).toBeVisible();
    await expect(state).toContainText('Illustrative economic state');
    await expect(state).toContainText('Operating profit');
    await expect(state).toContainText('−€69');
    await expect(state).toContainText('Operating profit = revenue − variable costs − allocated fixed costs.');

    const positions = await example.evaluate((root) => {
      const stateEl = root.querySelector('.field-example__state');
      const gridEl = root.querySelector('.field-example__grid');
      if (!stateEl || !gridEl) throw new Error('Missing proof hierarchy');
      return {
        state: stateEl.getBoundingClientRect().top,
        grid: gridEl.getBoundingClientRect().top,
      };
    });
    expect(positions.state).toBeLessThan(positions.grid);
  });

  test('pilot form makes low-friction scope explicit before fields', async ({ page }) => {
    await page.goto('/contact/');

    const form = page.locator('[data-pilot-form]');
    const assurances = form.locator('.pilot-form__assurances');
    await expect(assurances).toBeVisible();
    await expect(assurances).toContainText('5 details');
    await expect(assurances).toContainText('No farm records');
    await expect(assurances).toContainText('Used only to reply about the pilot');

    const assuranceTop = await assurances.evaluate((el) => el.getBoundingClientRect().top);
    const firstFieldTop = await form.locator('.field').first().evaluate((el) => el.getBoundingClientRect().top);
    expect(assuranceTop).toBeLessThan(firstFieldTop);
  });
});

test.describe('B2 brand-system continuity', () => {
  test('homepage exposes the canonical production/economic/decision brand codes', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('[data-brand-code="production-unit-grammar"]')).toHaveCount(1);
    await expect(page.locator('[data-brand-code="economic-state-proof"]')).toHaveCount(1);
    await expect(page.locator('[data-brand-code="cross-domain-production-grammar"]')).toHaveCount(1);
    await expect(page.locator('[data-brand-code="decision-lineage"]')).toHaveCount(1);
    await expect(page.locator('[data-brand-code="qualified-next-step"]')).toHaveCount(1);
  });

  test('methodology pages use the operational-ledger code instead of isolated process cards', async ({ page }) => {
    await page.goto('/company/');
    const ledgers = page.locator('[data-brand-code="operational-ledger"]');
    expect(await ledgers.count()).toBeGreaterThanOrEqual(2);

    const first = ledgers.first();
    const rows = first.locator('.method-pipeline__step');
    expect(await rows.count()).toBeGreaterThan(1);
    const firstTop = await rows.nth(0).evaluate((el) => el.getBoundingClientRect().top);
    const secondTop = await rows.nth(1).evaluate((el) => el.getBoundingClientRect().top);
    expect(firstTop).toBeLessThan(secondTop);
  });
});

test.describe('supporting-page scanability', () => {
  test('B2 split rails stay static and record lists vary by meaning', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/product/');

    const rail = page.locator('.section--split .section__head').first();
    await expect(rail).toBeVisible();
    expect(await rail.evaluate((el) => getComputedStyle(el).position)).toBe('static');

    await expect(page.locator('.items--rows')).toHaveCount(4);
    await expect(page.locator('.items--grid')).toHaveCount(1);
  });

  test('supporting pages expose scan-first local navigation', async ({ page }) => {
    for (const route of ['/farmers/', '/product/', '/trust/', '/company/', '/investors/']) {
      await page.goto(route);
      const nav = page.locator('.on-page-nav');
      await expect(nav, route).toBeVisible();
      await expect(nav).toContainText('On this page');
      const minimum = route === '/investors/' ? 5 : 5;
      expect(await nav.getByRole('link').count(), route).toBeGreaterThanOrEqual(minimum);
    }
  });

  test('Field Profitability proof exposes production-to-decision lineage', async ({ page }) => {
    await page.goto('/');
    const example = page.locator('#example');
    const lineage = example.locator('.field-example__lineage');
    await expect(lineage).toBeVisible();
    await expect(lineage).toContainText('Production record');
    await expect(lineage).toContainText('Economics');
    await expect(lineage).toContainText('Break-even');
    await expect(lineage).toContainText('Farmer-owned');
  });
});

test.describe('team capability proof', () => {
  test('homepage and company page show multidisciplinary team proof without hiding review status', async ({ page }) => {
    await page.goto('/');
    const homeCompany = page.locator('#company');
    await expect(homeCompany).toContainText('Different disciplines, one farm decision problem');
    await expect(homeCompany).toContainText('Mykola Dotsenko');
    await expect(homeCompany).toContainText('Dmytro Ruzhytskyi');
    await expect(homeCompany).toContainText('Dmytro Panasenko');
    await expect(homeCompany).toContainText('Draft for review');

    await page.goto('/company/');
    const team = page.locator('#team');
    await expect(team).toContainText('Product, Software & AI');
    await expect(team).toContainText('Livestock & Farm Operations');
    await expect(team).toContainText('Science, Engineering & Data');
    await expect(team).toContainText('Contribution to PROFIT');
    await expect(team.getByRole('link', { name: 'GitHub' })).toHaveCount(3);
    await expect(team.getByRole('link', { name: 'Hackster' })).toHaveCount(1);
    await expect(team).toContainText('Draft for review');
  });

  test('team capability proof remains readable at mobile width', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/company/');
    const team = page.locator('#team');
    await expect(team).toBeVisible();
    const overflow = await team.evaluate((el) => el.scrollWidth - el.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
});

test.describe('qualified conversion and investor proof', () => {
  test('contact page qualifies the current pilot before asking for details', async ({ page }) => {
    await page.goto('/contact/');

    const fit = page.locator('#fit');
    await expect(fit).toBeVisible();
    await expect(fit).toContainText('Pilot fit today');
    await expect(fit).toContainText('Best current fit');
    await expect(fit).toContainText('No new machinery required');
    await expect(fit).toContainText('Other production systems are welcome to register interest');
    await expect(fit).toContainText('Not a fit for full farm accounting');

    const fitTop = await fit.evaluate((el) => el.getBoundingClientRect().top);
    const formTop = await page.locator('[data-pilot-form]').evaluate((el) => el.getBoundingClientRect().top);
    expect(fitTop).toBeLessThan(formTop);
  });

  test('investor page exposes proof gates before scale and avoids vanity claims', async ({ page }) => {
    await page.goto('/investors/');

    const proof = page.locator('#proof-next');
    await expect(proof).toBeVisible();
    await expect(proof).toContainText('What PROFIT still has to prove');
    await expect(proof).toContainText('Comprehension and trust');
    await expect(proof).toContainText('Observed customer value');
    await expect(proof).toContainText('Attribution and VEV');
    await expect(proof).toContainText('Retention and pull');
    await expect(proof).toContainText('Repeatable economics');
    await expect(proof).toContainText('Cross-domain transfer');
    await expect(proof).toContainText('Global scale remains an ambition');

    const nav = page.locator('.on-page-nav');
    await expect(nav.getByRole('link', { name: /What PROFIT still has to prove/ })).toHaveAttribute('href', '#proof-next');
  });
});

test.describe('critical interactions', () => {
  test('skip link is keyboard reachable and moves focus to main content', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const skip = page.getByRole('link', { name: /skip/i });
    await expect(skip).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#main')).toBeFocused();
  });

  test('mobile navigation opens, closes with Escape and returns focus', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const button = page.getByRole('button', { name: 'Menu' });
    const nav = page.locator('#site-nav');

    await button.click();
    await expect(nav).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(nav).toBeHidden();
    await expect(button).toBeFocused();
  });

  test('primary CTA reaches the pilot form', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Join the pilot' }).first().click();
    await expect(page).toHaveURL(/\/contact\/?$/);
    await expect(page.locator('[data-pilot-form]')).toBeVisible();
  });

  test('pilot form exposes accessible errors and safe no-endpoint status', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/contact/');

    const form = page.locator('[data-pilot-form]');
    await form.getByRole('button', { name: /join|submit|send/i }).click();

    await expect(form.locator('[data-error-summary]')).toBeVisible();
    expect(await form.locator('[aria-invalid="true"]').count()).toBe(5);

    await form.locator('#pf-name').fill('Test Farmer');
    await form.locator('#pf-organisation').fill('Test Farm');
    await form.locator('#pf-country').fill('Finland');
    await form.locator('#pf-email').fill('not-an-email');
    await form.locator('#pf-farmType').selectOption({ index: 1 });
    await expect(form.locator('#pf-email-error')).toBeVisible();

    await form.locator('#pf-email').fill('farmer@example.test');
    await form.getByRole('button', { name: /join|submit|send/i }).click();

    await expect(form.locator('[aria-invalid="true"]')).toHaveCount(0);
    await expect(form.locator('[data-form-status]')).not.toHaveText('');
  });

  test('pilot form cannot submit without JavaScript when no endpoint exists', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto('/contact/');

    const form = page.locator('[data-pilot-form]');
    const control = form.locator('[data-submit]');

    await expect(form).not.toHaveAttribute('action', /.+/);
    await expect(control).toHaveAttribute('type', 'button');

    await context.close();
  });

  test('reduced-motion preference preserves the complete page', async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto('/');

    expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('.hero__state')).toBeVisible();

    await context.close();
  });
});
