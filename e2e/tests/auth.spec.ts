import { test, expect } from '@playwright/test';

test.describe('Auth', () => {
  test('app loads without auth errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/home');
    await expect(page.locator('h1')).toContainText('Decomposed Application');
    await page.waitForTimeout(1000);
    expect(consoleErrors.filter(e => e.includes('auth') || e.includes('Auth'))).toHaveLength(0);
  });
});
