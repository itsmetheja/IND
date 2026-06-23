// spec: specs/automation-practice.test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('AutomationPractice - Windows and Tabs', () => {
  test('Open Window and Tab behavior', async ({ page, context }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page).toHaveTitle(/Practice Page/);

    // Open Window (new page)
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('#openwindow')
    ]);
    await newPage.waitForLoadState();
    const newUrl = newPage.url();
    // Accept either rahulshettyacademy.com or qaclickacademy.com as valid landing domains
    expect(newUrl).toMatch(/rahulshettyacademy\.com|qaclickacademy\.com/);
    await newPage.close();

    // Open Tab
    const [tab] = await Promise.all([
      context.waitForEvent('page'),
      page.click('#opentab')
    ]);
    await tab.waitForLoadState();
    expect(tab.url().length).toBeGreaterThan(0);
    await tab.close();
  });
});
