import { expect, test } from '@playwright/test'
import loginpage from '../PageObjects/loginpage';
import { parse } from 'node:path';


test('Login', async ({ page }) => {
    //let title =` ${Date.now()}`;
    //===============Step 2 — Create a new event====================
    const title = `Test Event ${Date.now()}`

    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    const Loginpage = new loginpage(page);
    Loginpage.ValidLogin('intheja@gmail.com', 'Indra#425');
    await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
    await page.getByRole('button', { name: 'Admin' }).click();
    await page.getByRole('link', { name: /Manage Events/i }).first().click();
    await page.locator('#event-title-input').fill(title);
    await page.getByPlaceholder('Describe the event…').fill("MY Name is Indra");
    await page.getByLabel('City*', { exact: true }).fill('Hyderabad');
    await page.getByLabel('Venue*', { exact: true }).fill("hello YES TO TEST");
    await page.getByRole('textbox', { name: 'Event Date & Time*' })
        .fill('2026-06-16T14:30');
    await page.locator('#total-seats').fill('100');
    await page.getByPlaceholder('0.00', { exact: true }).fill('80.00');
    await page.locator('#add-event-btn').click();
    await expect(page.getByText('Event created!')).toBeVisible();
    console.log(`Created event: "${title}"`);

    //============Step 3 — Find the event card and capture seats=========
    await page.locator('#nav-events').click();
    const eventCards = page.getByTestId('event-card');
    await expect(eventCards.first()).toBeVisible();
    console.log(await eventCards.allTextContents());

    // Scan all visible event cards for the one matching our created title
    const targetCard = eventCards.filter({ hasText: title }).first();
    await expect(targetCard).toBeVisible({ timeout: 5000 });

    const seatsBeforeBooking = parseInt(await targetCard.getByText("seats").first().innerText());
    console.log(`seats before booking : ${seatsBeforeBooking}`);



    // ============== Step 4 — Start booking ===============
    await targetCard.getByTestId('book-now-btn').click();

    // ==============Step 5 — Fill booking form ============
    const ticketcount = page.locator('#ticket-count');
    await expect(ticketcount).toHaveText('1');
    await page.locator('#customerName').fill("ADVIK");
    await page.locator('#customer-email').fill('it@gmail.com');
    await page.getByPlaceholder('+91 98765 43210').fill('9916910404');
    await page.getByRole('button', {name : 'Confirm Booking'}).click();


});