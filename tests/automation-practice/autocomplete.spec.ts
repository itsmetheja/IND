// spec: specs/automation-practice.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('AutomationPractice - Autocomplete', () => {
  test('Autocomplete suggestions and selection', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle(/Practice Page/);

    const ac = page.locator('#autocomplete');
    await expect(ac).toBeVisible();

    // Type partial text and choose suggestion
    await ac.fill('indra');
    const suggestions = page.locator('.ui-menu-item div');
    await expect(suggestions.first()).toBeVisible();

    // Try to select 'India' if present; otherwise capture the clicked suggestion text
    const india = suggestions.filter({ hasText: 'India' }).first();
    if (await india.count() > 0) {
      const txt = await india.innerText();
      await india.click();
      await expect(ac).toHaveValue(txt);
    } else {
      // Fallback: select first suggestion and verify value matches the suggestion text
      const first = suggestions.first();
      const txt = await first.innerText();
      await first.click();
      await expect(ac).toHaveValue(txt);
    }

    // Negative case: random text should not match any suggestion items
    await ac.fill('zzzxxyy');
    const matches = page.locator('.ui-menu-item').filter({ hasText: 'zzzxxyy' });
    expect(await matches.count()).toBe(0);
  });
});
