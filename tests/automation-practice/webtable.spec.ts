// spec: specs/automation-practice.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('AutomationPractice - Web Table', () => {
  test('Verify product table and specific row', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle(/Practice Page/);
    // Select the specific table instance by id + class to avoid duplicate-id collisions
    const table = page.locator('table#product.table-display').first();
    await expect(table).toBeVisible();

    const rows = table.locator('tr');
    const rowCount = await rows.count();
    expect(rowCount).toBeGreaterThan(1);

    // Find a row containing a recognizable substring and assert the price cell
    const targetRow = rows.filter({ hasText: 'Selenium Webdriver' }).first();
    await expect(targetRow).toBeVisible();
    const priceCell = targetRow.locator('td').nth(2);
    const priceText = await priceCell.innerText();
    expect(priceText).toMatch(/30/);
  });
});
