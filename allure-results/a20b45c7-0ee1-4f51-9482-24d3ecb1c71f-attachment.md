# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testcase1.spec.js >> Login
- Location: tests\Testcase1.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Event created!')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByText('Event created!')

```

```yaml
- navigation:
  - link "EventHub":
    - /url: /
    - img
    - text: EventHub
  - link "Home":
    - /url: /
  - link "Events":
    - /url: /events
  - link "My Bookings":
    - /url: /bookings
  - link "API Docs":
    - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - button "Admin":
    - text: Admin
    - img
  - text: intheja@gmail.com
  - button "Logout"
- main:
  - heading "+ New Event" [level=2]
  - img
  - text: You can add up to
  - strong: 6 events
  - text: . Once the limit is reached, your oldest event is automatically replaced when you add a new one. Title*
  - textbox "Title*":
    - /placeholder: Event title
    - text: Test Event 1781934684890
  - text: Description
  - textbox "Describe the event…": MY Name is Indra
  - text: Category*
  - combobox "Category*":
    - option "Conference" [selected]
    - option "Concert"
    - option "Sports"
    - option "Workshop"
    - option "Festival"
  - text: City*
  - textbox "City*":
    - /placeholder: e.g. Bangalore
    - text: Hyderabad
  - text: Venue*
  - textbox "Venue*":
    - /placeholder: Venue name & address
    - text: hello YES TO TEST
  - text: Event Date & Time*
  - textbox "Event Date & Time*": 2026-06-16T14:30
  - paragraph: Must be a future date
  - text: Price ($)*
  - spinbutton "Price ($)*": "80.00"
  - text: Total Seats*
  - spinbutton "Total Seats*": "100"
  - text: Image URL (optional)
  - textbox "Image URL (optional)":
    - /placeholder: https://…
  - button "+ Add Event"
  - heading "All Events" [level=2]
  - text: 4 total
  - table:
    - rowgroup:
      - row "Title Category City Date Price Seats Actions":
        - columnheader "Title"
        - columnheader "Category"
        - columnheader "City"
        - columnheader "Date"
        - columnheader "Price"
        - columnheader "Seats"
        - columnheader "Actions"
    - rowgroup:
      - row "Dilli Diwali Mela Featured Festival Delhi 20 Oct 2026 $300 9992/10000 Read-only":
        - cell "Dilli Diwali Mela Featured"
        - cell "Festival"
        - cell "Delhi"
        - cell "20 Oct 2026"
        - cell "$300"
        - cell "9992/10000"
        - cell "Read-only"
      - row "Hollywood Monsoon Night — Los Angeles Featured Concert Los Angeles 12 Jul 2026 $2,500 3000/3000 Read-only":
        - cell "Hollywood Monsoon Night — Los Angeles Featured"
        - cell "Concert"
        - cell "Los Angeles"
        - cell "12 Jul 2026"
        - cell "$2,500"
        - cell "3000/3000"
        - cell "Read-only"
      - row "World Tech Summit Featured Conference Hyderabad 18 Apr 2026 $1,500 500/500 Read-only":
        - cell "World Tech Summit Featured"
        - cell "Conference"
        - cell "Hyderabad"
        - cell "18 Apr 2026"
        - cell "$1,500"
        - cell "500/500"
        - cell "Read-only"
      - row "Test Event 1781595579722 Conference Hyderabad 16 Jun 2026 $80 99/100 Edit Delete":
        - cell "Test Event 1781595579722"
        - cell "Conference"
        - cell "Hyderabad"
        - cell "16 Jun 2026"
        - cell "$80"
        - cell "99/100"
        - cell "Edit Delete":
          - button "Edit"
          - button "Delete"
- contentinfo:
  - heading "Rahul Shetty Academy" [level=3]
  - paragraph: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
  - heading "Popular Courses" [level=3]
  - list:
    - listitem:
      - link "Selenium WebDriver with Java":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Playwright with JavaScript":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "RestAssured API Testing":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Cypress End-to-End Testing":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Appium Mobile Testing":
        - /url: https://rahulshettyacademy.com
  - heading "QA Job Hiring Platform" [level=3]
  - paragraph: Get hired faster — take skill assessments trusted by top QA employers worldwide.
  - link "techsmarthire.com →":
    - /url: https://techsmarthire.com
  - heading "EventHub Practice App" [level=3]
  - list:
    - listitem:
      - link "Browse Events":
        - /url: /events
    - listitem:
      - link "My Bookings":
        - /url: /bookings
    - listitem:
      - link "Manage Events":
        - /url: /admin/events
    - listitem:
      - link "API Documentation":
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - paragraph: © 2026 Rahul Shetty Academy. All rights reserved.
  - link "rahulshettyacademy.com →":
    - /url: https://rahulshettyacademy.com
  - link "techsmarthire.com →":
    - /url: https://techsmarthire.com
- alert
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test'
  2  | import loginpage from '../PageObjects/loginpage';
  3  | import { parse } from 'node:path';
  4  | 
  5  | 
  6  | test('Login', async ({ page }) => {
  7  |     //let title =` ${Date.now()}`;
  8  |     //===============Step 2 — Create a new event====================
  9  |     const title = `Test Event ${Date.now()}`
  10 | 
  11 |     await page.goto("https://eventhub.rahulshettyacademy.com/login");
  12 |     const Loginpage = new loginpage(page);
  13 |     Loginpage.ValidLogin('intheja@gmail.com', 'Indra#425');
  14 |     await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
  15 |     await page.getByRole('button', { name: 'Admin' }).click();
  16 |     await page.getByRole('link', { name: /Manage Events/i }).first().click();
  17 |     await page.locator('#event-title-input').fill(title);
  18 |     await page.getByPlaceholder('Describe the event…').fill("MY Name is Indra");
  19 |     await page.getByLabel('City*', { exact: true }).fill('Hyderabad');
  20 |     await page.getByLabel('Venue*', { exact: true }).fill("hello YES TO TEST");
  21 |     await page.getByRole('textbox', { name: 'Event Date & Time*' })
  22 |         .fill('2026-06-16T14:30');
  23 |     await page.locator('#total-seats').fill('100');
  24 |     await page.getByPlaceholder('0.00', { exact: true }).fill('80.00');
  25 |     await page.locator('#add-event-btn').click();
> 26 |     await expect(page.getByText('Event created!')).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
  27 |     console.log(`Created event: "${title}"`);
  28 | 
  29 |     //============Step 3 — Find the event card and capture seats=========
  30 |     await page.locator('#nav-events').click();
  31 |     const eventCards = page.getByTestId('event-card');
  32 |     await expect(eventCards.first()).toBeVisible();
  33 |     console.log(await eventCards.allTextContents());
  34 | 
  35 |     // Scan all visible event cards for the one matching our created title
  36 |     const targetCard = eventCards.filter({ hasText: title }).first();
  37 |     await expect(targetCard).toBeVisible({ timeout: 5000 });
  38 | 
  39 |     const seatsBeforeBooking = parseInt(await targetCard.getByText("seats").first().innerText());
  40 |     console.log(`seats before booking : ${seatsBeforeBooking}`);
  41 | 
  42 | 
  43 | 
  44 |     // ============== Step 4 — Start booking ===============
  45 |     await targetCard.getByTestId('book-now-btn').click();
  46 | 
  47 |     // ==============Step 5 — Fill booking form ============
  48 |     const ticketcount = page.locator('#ticket-count');
  49 |     await expect(ticketcount).toHaveText('1');
  50 |     await page.locator('#customerName').fill("ADVIK");
  51 |     await page.locator('#customer-email').fill('it@gmail.com');
  52 |     await page.getByPlaceholder('+91 98765 43210').fill('9916910404');
  53 |     await page.getByRole('button', {name : 'Confirm Booking'}).click();
  54 | 
  55 | 
  56 | });
```