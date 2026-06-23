// spec: specs/automation-practice.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('AutomationPractice - Checkboxes', () => {
  test('Checkbox interactions', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle(/Practice Page/);

    const cb1 = page.locator('#checkBoxOption1');
    const cb2 = page.locator('#checkBoxOption2');
    const cb3 = page.locator('#checkBoxOption3');

    await cb1.waitFor({ state: 'visible' });
    await cb2.waitFor({ state: 'visible' });
    await cb3.waitFor({ state: 'visible' });

    // Select checkbox 2 only
    await cb2.check();
    await expect(cb2).toBeChecked();
    await expect(cb1).not.toBeChecked();
    await expect(cb3).not.toBeChecked();

    // Select all three
    await cb1.check();
    await cb3.check();
    await expect(cb1).toBeChecked();
    await expect(cb2).toBeChecked();
    await expect(cb3).toBeChecked();

    // Toggle a checked checkbox off
    await cb2.uncheck();
    await expect(cb2).not.toBeChecked();
  });
});
