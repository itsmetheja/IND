# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: rahulshetty-product.spec.js >> Product - add first product to cart
- Location: tests\rahulshetty-product.spec.js:17:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: text=ADIDAS ORIGINAL >> nth=0 >> internal:or=".cart-count, text=Cart"
Expected: visible
Error: Unexpected token "=" while parsing css selector ".cart-count, text=Cart". Did you mean to CSS.escape it?

Call log:
  - Expect "toBeVisible" with timeout 7000ms
  - waiting for text=ADIDAS ORIGINAL >> nth=0 >> internal:or=".cart-count, text=Cart"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - text:    
  - generic [ref=e26]:
    - paragraph [ref=e27]: Home | Search
    - heading "Filters" [level=4] [ref=e29]
    - generic [ref=e30]:
      - textbox "search" [ref=e32]
      - generic [ref=e33]:
        - heading "Price Range" [level=6] [ref=e34]
        - generic [ref=e35]:
          - textbox "Min Price" [ref=e37]
          - textbox "Max Price" [ref=e39]
      - generic [ref=e40]:
        - heading "Categories" [level=6] [ref=e41]
        - generic [ref=e43]: 
        - generic [ref=e44]:
          - checkbox [ref=e45]
          - generic [ref=e46]: fashion
        - generic [ref=e47]:
          - checkbox [ref=e48]
          - generic [ref=e49]: electronics
        - generic [ref=e50]:
          - checkbox [ref=e51]
          - generic [ref=e52]: household
      - generic [ref=e53]:
        - heading "Sub Categories" [level=6] [ref=e54]
        - generic [ref=e56]: 
        - generic [ref=e57]:
          - checkbox [ref=e58]
          - generic [ref=e59]: t-shirts
        - generic [ref=e60]:
          - checkbox [ref=e61]
          - generic [ref=e62]: shirts
        - generic [ref=e63]:
          - checkbox [ref=e64]
          - generic [ref=e65]: shoes
        - generic [ref=e66]:
          - checkbox [ref=e67]
          - generic [ref=e68]: mobiles
        - generic [ref=e69]:
          - checkbox [ref=e70]
          - generic [ref=e71]: laptops
      - generic [ref=e72]:
        - heading "Search For" [level=6] [ref=e73]
        - generic [ref=e75]: 
        - generic [ref=e76]:
          - checkbox [ref=e77]
          - generic [ref=e78]: men
        - generic [ref=e79]:
          - checkbox [ref=e80]
          - generic [ref=e81]: women
  - generic [ref=e82]:
    - generic [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e85]: Showing 3 results |
        - generic [ref=e86]: User can only see maximum 9 products on a page
      - generic [ref=e87]:
        - generic [ref=e89]:
          - img [ref=e90]
          - generic [ref=e91]:
            - heading "ADIDAS ORIGINAL" [level=5] [ref=e92]
            - generic [ref=e94]: $ 11500
            - button "View" [ref=e95] [cursor=pointer]:
              - generic [ref=e96]: 
              - text: View
            - button " Add To Cart" [active] [ref=e97] [cursor=pointer]:
              - generic [ref=e98]: 
              - text: Add To Cart
        - generic [ref=e100]:
          - img [ref=e101]
          - generic [ref=e102]:
            - heading "ZARA COAT 3" [level=5] [ref=e103]
            - generic [ref=e105]: $ 11500
            - button "View" [ref=e106] [cursor=pointer]:
              - generic [ref=e107]: 
              - text: View
            - button " Add To Cart" [ref=e108] [cursor=pointer]:
              - generic [ref=e109]: 
              - text: Add To Cart
        - generic [ref=e111]:
          - img [ref=e112]
          - generic [ref=e113]:
            - heading "iphone 13 pro" [level=5] [ref=e114]
            - generic [ref=e116]: $ 55000
            - button "View" [ref=e117] [cursor=pointer]:
              - generic [ref=e118]: 
              - text: View
            - button " Add To Cart" [ref=e119] [cursor=pointer]:
              - generic [ref=e120]: 
              - text: Add To Cart
    - list "Pagination" [ref=e125]:
      - listitem [ref=e126]:
        - text: «
        - generic [ref=e127]:
          - text: Previous
          - generic [ref=e128]: page
      - listitem [ref=e129]:
        - generic [ref=e130]: You're on page
        - text: "1"
      - listitem [ref=e131]:
        - generic [ref=e132]:
          - text: Next
          - generic [ref=e133]: page
        - text: »
  - generic [ref=e134]: Design and Developed By - Kunal Sharma
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
  14 |   //await page.locator('div.card, .products, text=Products').first().waitFor({ state: 'visible', timeout: 10000 });
  15 | }
  16 | 
  17 | test('Product - add first product to cart', async ({ page }) => {
  18 |   await login(page);
  19 | 
  20 |   const card = page.locator('div.card, .product, .col-md-3').first();
  21 |   await expect(card).toBeVisible({ timeout: 10000 });
  22 | 
  23 |   const title = await card.locator('h4, h5, .card-title, .product-name').first().innerText().catch(() => '');
  24 |   const addButton = card.locator('button:has-text("Add To Cart"), button:has-text("Add to Cart"), input[value="Add To Cart"]').first();
  25 |   await addButton.click();
  26 | 
  27 |   await page.waitForTimeout(800);
> 28 |   await expect(page.locator(`text=${title.split('\n')[0] || ''}`).first().or(page.locator('.cart-count, text=Cart'))).toBeVisible({ timeout: 7000 });
     |                                                                                                                       ^ Error: expect(locator).toBeVisible() failed
  29 | });
  30 | 
```