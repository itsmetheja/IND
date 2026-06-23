// spec: specs/automation-practice.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('AutomationPractice - Hide/Show', () => {
  test('Hide and show textbox behavior', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle(/Practice Page/);

    const hideBtn = page.locator('#hide-textbox');
    const showBtn = page.locator('#show-textbox');
    const txt = page.locator('#displayed-text');

    await expect(hideBtn).toBeVisible();
    await expect(showBtn).toBeVisible();
    await expect(txt).toBeVisible();

    await hideBtn.click();
    await expect(txt).toBeHidden();

    await showBtn.click();
    await expect(txt).toBeVisible();
    await txt.fill('visible now');
    await expect(txt).toHaveValue('visible now');
  });
});
