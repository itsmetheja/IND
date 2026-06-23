import { expect, test } from '@playwright/test'


const Base_URL = 'https://eventhub.rahulshettyacademy.com';
const user_name = 'intheja@gmail.com';
const password = "Indra#425";

async function loginAndGoToBooking(page) {
    await page.locator('#email').fill(user_name);
    await page.locator('#password').fill(password);
    await page.locator('#login-btn').click();

}

test(' Single ticket booking is eligible for refund', async ({ page }) => {
    await page.goto(`${Base_URL}/login`);
    await loginAndGoToBooking(page);
    await expect(page).toHaveURL(`${Base_URL}`);
    page.goto(`${Base_URL}/events`);

    //===============Step 2 — Book first event with 1 ticket (default) ============================


    await page.waitForLoadState('networkidle');
    const eventCards = await page.getByTestId('event-card').allTextContents();
    console.log(eventCards);
    console.log(eventCards.length);
    await page.getByTestId('book-now-btn').first().click();
    await page.locator('#customerName').fill('Anusha');
    await page.getByLabel('Email*', { exact: true }).fill("abc@hmail.com");
    await page.locator("#phone").fill('9916910404');
    await page.locator("//button[@id='confirm-booking']").click();
    //=======================================Step 3 — Navigate to booking detail=========================
    await page.goto(`${Base_URL}/bookings`);
    await page.getByText('View Details', { exact: true }).first().click();
    await expect(page.getByText('Booking Information')).toBeVisible();
    //=======================================Step 4 — Validate booking ref================================

    const bookingID = await page.locator('span.font-mono.font-bold.text-indigo-600.bg-indigo-50.px-3.py-1.rounded-lg.text-sm:visible')
        .textContent();
    console.log(bookingID);
    const eventTitle = await page.locator("body > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)").
        textContent();
    console.log(eventTitle);
    if (eventTitle[0] === bookingID[0]) {
        console.log("first character of booking ref equals first character of event title");
    }
    else {
        console.log("First letter not matched")
    }
    //===================Step 5 — Check refund eligibility=========================
    await page.getByText('Check eligibility for refund?').click();

    await expect(page.locator('#refund-spinner')).toBeVisible();

    await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6000 });
    //==============================Step 6 — Validate result======================
    await page.getByTestId('refund-result').isVisible();
    const refund = await page.getByTestId('refund-result').textContent();
    console.log(refund);
    const refundtext = "Single-ticket bookings qualify for a full refund";
    if(refund.includes(refundtext))
    {
        console.log(`Assertion Passed : ${refundtext}`)
    }else 
        console.log("Assertion FAILED")
});

test('Group ticket booking is NOT eligible for refund',async({page})=>{

        await page.goto(`${Base_URL}/login`);
    await loginAndGoToBooking(page);
    await expect(page).toHaveURL(`${Base_URL}`);
    page.goto(`${Base_URL}/events`);

    //===============Step 2 — Book first event with 1 ticket (default) ============================

    await page.waitForLoadState('networkidle');
    const eventCards = await page.getByTestId('event-card').allTextContents();
    console.log(eventCards);
    console.log(eventCards.length);
    await page.getByTestId('book-now-btn').first().click();
    const add = page.getByRole('button', { name: '+' });
    await add.focus();
    await add.press('Enter');
    await add.press('Enter');
    await page.locator('#customerName').fill('Anusha');
    await page.getByLabel('Email*', { exact: true }).fill("abc@hmail.com");
    await page.locator("#phone").fill('9916910404');
    await page.locator("//button[@id='confirm-booking']").click();

    //=======================================Step 3 — Navigate to booking detail=========================
    await page.goto(`${Base_URL}/bookings`);
    await page.getByText('View Details', { exact: true }).first().click();
    await expect(page.getByText('Booking Information')).toBeVisible();
    //=======================================Step 4 — Validate booking ref================================

    const bookingID = await page.locator('span.font-mono.font-bold.text-indigo-600.bg-indigo-50.px-3.py-1.rounded-lg.text-sm:visible')
        .textContent();
    console.log(bookingID);
    const eventTitle = await page.locator("body > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)").
        textContent();
    console.log(eventTitle);
    if (eventTitle[0] === bookingID[0]) {
        console.log("first character of booking ref equals first character of event title");
    }
    else {
        console.log("First letter not matched")
    }

    //===================Step 5 — Check refund eligibility=========================
    await page.getByText('Check eligibility for refund?').click();

    await expect(page.locator('#refund-spinner')).toBeVisible();

    await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6000 });
    //==============================Step 6 — Validate result======================
   
    await page.getByTestId('refund-result').isVisible();
    const refund = await page.getByTestId('refund-result').textContent();
    console.log(refund);
    const refundtext = "Not eligible for refund. Group bookings (3 tickets) are non-refundable.";
    if(refund.includes(refundtext))
    {
        console.log(`Assertion Passed : ${refundtext}`)
    }else 
        console.log("Assertion FAILED")

});

















