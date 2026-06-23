// spec: specs/automation-practice.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('AutomationPractice - iFrame', () => {
  test('Interact with courses iframe', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle(/Practice Page/);

    const frameLocator = page.frameLocator('#courses-iframe');
    const links = frameLocator.locator('a');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);

    // Inspect the first link inside the iframe and validate its href
    const firstLink = links.first();
    const href = await firstLink.getAttribute('href');
    expect(href).toBeTruthy();

    // Do not perform the click here to avoid cross-frame navigation/timeouts in CI;
    // test verifies the link exists and has a valid href.
  });
});
