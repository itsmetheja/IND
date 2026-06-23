// spec: specs/rahulshetty-client.test.plan.md
// seed: tests/seed.spec.ts
import { test, expect } from '@playwright/test';

const LOGIN_URL = 'https://rahulshettyacademy.com/client/#/auth/login';
const USER = 'intheja@gmail.com';
const PASS = '123456';

test('Login - Happy Path', async ({ page }) => {
  // Navigate and login
  await page.goto(LOGIN_URL);
  await page.fill('#userEmail', USER);
  await page.fill('#userPassword', PASS);
  await page.click('#login');

  // Assertions
  await expect(page).not.toHaveURL(/\/auth\/login/);
  await expect(page.locator('div.card, .products, text=Products, text=Logout')).toBeVisible({ timeout: 10000 });
});
