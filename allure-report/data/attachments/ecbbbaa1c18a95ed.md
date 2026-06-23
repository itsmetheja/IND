# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: rahulshetty-checkout.spec.js >> Checkout - place order (best-effort)
- Location: tests\rahulshetty-checkout.spec.js:17:5

# Error details

```
Error: locator.waitFor: Unexpected token "=" while parsing css selector "div.card, .products, text=Products". Did you mean to CSS.escape it?
Call log:
  - waiting for div.card, .products, text=Products >> nth=0 to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e15]: 
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e17]: 
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading "Practice Website for Rahul Shetty Academy Students" [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]: intheja@gmail.com
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]: "123456"
          - button "Login" [active] [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e50]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e55]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e60]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e71]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | // spec: specs/rahulshetty-client.test.plan.md
  2  | // seed: tests/seed.spec.ts
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | const LOGIN_URL = 'https://rahulshettyacademy.com/client/#/auth/login';
  6  | const USER = 'intheja@gmail.com';
  7  | const PASS = '123456';
  8  | 
  9  | async function login(page) {
  10 |   await page.goto(LOGIN_URL);
  11 |   await page.fill('#userEmail', USER);
  12 |   await page.fill('#userPassword', PASS);
  13 |   await page.click('#login');
> 14 |   await page.locator('div.card, .products, text=Products').first().waitFor({ state: 'visible', timeout: 10000 });
     |                                                                    ^ Error: locator.waitFor: Unexpected token "=" while parsing css selector "div.card, .products, text=Products". Did you mean to CSS.escape it?
  15 | }
  16 | 
  17 | test('Checkout - place order (best-effort)', async ({ page }) => {
  18 |   await login(page);
  19 | 
  20 |   const card = page.locator('div.card, .product, .col-md-3').first();
  21 |   await card.waitFor({ state: 'visible', timeout: 10000 });
  22 | 
  23 |   const addButton = card.locator('button:has-text("Add To Cart"), button:has-text("Add to Cart"), input[value="Add To Cart"]').first();
  24 |   await addButton.click();
  25 | 
  26 |   await page.locator('a[href*="cart"], text=Cart, text=Checkout, button:has-text("Cart")').first().click().catch(() => {});
  27 |   await page.locator('button:has-text("Checkout"), button:has-text("Place Order"), text=Place Order').first().click().catch(() => {});
  28 | 
  29 |   await expect(page.locator('text=Order, text=Thank you, text=Order Id, text=Order confirmed')).toBeVisible({ timeout: 15000 });
  30 | });
  31 | 
```