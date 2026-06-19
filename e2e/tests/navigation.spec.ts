import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('redirects / to /home with correct heading', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/home');
    await expect(page.locator('h1')).toContainText('Decomposed Application');
  });

  test('navigate to Identity via nav link', async ({ page }) => {
    await page.goto('/home');
    await page.click('a:has-text("Identity")');
    await expect(page.locator('h2')).toContainText('Identity List');
  });

  test('navigate to Customers via nav link', async ({ page }) => {
    await page.goto('/home');
    await page.click('a:has-text("Customers")');
    await expect(page.locator('h2')).toContainText('Customer List');
  });

  test('navigate to Orders via nav link', async ({ page }) => {
    await page.goto('/home');
    await page.click('a:has-text("Orders")');
    await expect(page.locator('h2')).toContainText('Order List');
  });

  test('navigate to Products via nav link', async ({ page }) => {
    await page.goto('/home');
    await page.click('a:has-text("Products")');
    await expect(page.locator('h2')).toContainText('Product List');
  });
});
