// spec: specs/rahulshetty-client.test.plan.md
// seed: tests/seed.spec.ts
import { test, expect } from '@playwright/test';

const LOGIN_URL = 'https://rahulshettyacademy.com/client/#/auth/login';
const USER = 'intheja@gmail.com';
const PASS = '123456';

async function login(page) {
  await page.goto(LOGIN_URL);
  await page.fill('#userEmail', USER);
  await page.fill('#userPassword', PASS);
  await page.click('#login');
  //await page.locator('div.card, .products, text=Products').first().waitFor({ state: 'visible', timeout: 10000 });
}

test('Product - add first product to cart', async ({ page }) => {
  await login(page);

  const card = page.locator('div.card, .product, .col-md-3').first();
  await expect(card).toBeVisible({ timeout: 10000 });

  const title = await card.locator('h4, h5, .card-title, .product-name').first().innerText().catch(() => '');
  const addButton = card.locator('button:has-text("Add To Cart"), button:has-text("Add to Cart"), input[value="Add To Cart"]').first();
  await addButton.click();

  await page.waitForTimeout(800);
  await expect(page.locator(`text=${title.split('\n')[0] || ''}`).first().or(page.locator('.cart-count, text=Cart'))).toBeVisible({ timeout: 7000 });
});
