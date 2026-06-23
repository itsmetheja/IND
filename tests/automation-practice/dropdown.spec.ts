// spec: specs/automation-practice.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('AutomationPractice - Dropdown', () => {
  test('Static dropdown selection', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle(/Practice Page/);

    const dd = page.locator('#dropdown-class-example');
    await expect(dd).toBeVisible();

    // Read available options and verify selections dynamically
    const options = dd.locator('option');
    const count = await options.count();
    expect(count).toBeGreaterThan(0);

    // Select by visible label if available; otherwise select by index
    const secondLabel = await options.nth(1).innerText();
    const secondValue = await options.nth(1).getAttribute('value');
    await dd.selectOption({ value: secondValue || undefined });
    await expect(dd).toHaveValue(secondValue || '');

    // Select first option by index and assert its value
    const firstValue = await options.nth(0).getAttribute('value');
    await dd.selectOption({ value: firstValue || undefined });
    await expect(dd).toHaveValue(firstValue || '');

    // Select last option by value (if exists)
    const lastValue = await options.nth(count - 1).getAttribute('value');
    if (lastValue) {
      await dd.selectOption({ value: lastValue });
      await expect(dd).toHaveValue(lastValue);
    }
  });
});
