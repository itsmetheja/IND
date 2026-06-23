// spec: specs/automation-practice.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('AutomationPractice - Radio', () => {
  test('Radio button selection', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle(/Practice Page/);

    const radios = page.locator('[name="radioButton"]');
    await expect(radios).toHaveCount(3);

    // Select each in turn
    for (let i = 0; i < 3; i++) {
      const r = radios.nth(i);
      await r.check();
      await expect(r).toBeChecked();
      // Others not checked
      for (let j = 0; j < 3; j++) {
        if (i === j) continue;
        await expect(radios.nth(j)).not.toBeChecked();
      }
    }
  });
});
