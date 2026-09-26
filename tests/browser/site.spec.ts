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
    await expect(example).toContainText('€835');
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
    await expect(page.locator('.proof-card')).toBeVisible();

    await context.close();
  });
});
