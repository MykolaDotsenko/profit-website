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
