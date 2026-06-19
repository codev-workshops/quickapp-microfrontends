import { test, expect } from '@playwright/test';

test.describe('MFE Loading', () => {
  test('customer list shows 2 items and navigates to detail', async ({ page }) => {
    await page.goto('/customers');
    await expect(page.locator('h2')).toContainText('Customer List');
    await expect(page.locator('li')).toHaveCount(2);
    await page.click('a:has-text("Sample Customer 1")');
    await expect(page.locator('text=Viewing customer ID: 1')).toBeVisible();
  });

  test('identity list shows 2 items and navigates to detail', async ({ page }) => {
    await page.goto('/identity');
    await expect(page.locator('h2')).toContainText('Identity List');
    await expect(page.locator('li')).toHaveCount(2);
    await page.click('a:has-text("Sample Identity 1")');
    await expect(page.locator('text=Viewing identity ID: 1')).toBeVisible();
  });

  test('order list shows 2 items and navigates to detail', async ({ page }) => {
    await page.goto('/orders');
    await expect(page.locator('h2')).toContainText('Order List');
    await expect(page.locator('li')).toHaveCount(2);
    await page.click('a:has-text("Sample Order 1")');
    await expect(page.locator('text=Viewing order ID: 1')).toBeVisible();
  });

  test('product list shows 2 items and navigates to detail', async ({ page }) => {
    await page.goto('/products');
    await expect(page.locator('h2')).toContainText('Product List');
    await expect(page.locator('li')).toHaveCount(2);
    await page.click('a:has-text("Sample Product 1")');
    await expect(page.locator('text=Viewing product ID: 1')).toBeVisible();
  });
});
