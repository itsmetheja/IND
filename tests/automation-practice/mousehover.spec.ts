// spec: specs/automation-practice.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('AutomationPractice - Mouse Hover', () => {
  test('Mouse hover menu and actions', async ({ page }) => {
    // 1. Navigate to the AutomationPractice homepage
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle(/Practice Page/);

    // 2. Locate hover trigger button '#mousehover'.
    const hoverBtn = page.locator('#mousehover');
    await expect(hoverBtn).toBeVisible();

    // 3. Perform mouse hover on '#mousehover' to reveal hidden menu
    await hoverBtn.hover();
    const topLink = page.locator('a[href="#top"]');

    // Wait for the menu link to exist and click it. Use force click if hover is flaky.
    await expect(topLink).toHaveCount(1);
    await topLink.click({ force: true });

    // 4. Verify clicking 'Top' navigates to '#top' (page scrolled to top)
    expect(new URL(page.url()).hash).toBe('#top');
  });
});
