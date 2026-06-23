# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation-practice\autocomplete.spec.ts >> AutomationPractice - Autocomplete >> Autocomplete suggestions and selection
- Location: tests\automation-practice\autocomplete.spec.ts:7:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.ui-menu-item div').first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('.ui-menu-item div').first()

```

```yaml
- banner:
  - link:
    - /url: https://www.rahulshettyacademy.com/
    - img
  - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire":
    - /url: https://techsmarthire.com/
  - link "Home":
    - /url: https://www.rahulshettyacademy.com/
    - button "Home"
  - button "Practice"
  - button "Login"
  - button "Signup"
- heading "Practice Page" [level=1]
- group "Radio Button Example":
  - text: Radio Button Example
  - radio
  - text: Radio1
  - radio
  - text: Radio2
  - radio
  - text: Radio3
- group "Suggession Class Example":
  - text: Suggession Class Example
  - textbox "Type to Select Countries": indra
- group "Dropdown Example":
  - text: Dropdown Example
  - combobox:
    - option "Select" [selected]
    - option "Option1"
    - option "Option2"
    - option "Option3"
- group "Checkbox Example":
  - text: Checkbox Example
  - checkbox
  - text: Option1
  - checkbox
  - text: Option2
  - checkbox
  - text: Option3
- group "Switch Window Example":
  - text: Switch Window Example
  - button "Open Window"
- group "Switch Tab Example":
  - text: Switch Tab Example
  - link "Open Tab":
    - /url: https://www.qaclickacademy.com
- group "Switch To Alert Example":
  - text: Switch To Alert Example
  - textbox "Enter Your Name"
  - button "Alert"
  - button "Confirm"
- group "Web Table Example":
  - text: Web Table Example
  - table:
    - rowgroup:
      - row "Instructor Course Price":
        - columnheader "Instructor"
        - columnheader "Course"
        - columnheader "Price"
      - row "Rahul Shetty Selenium Webdriver with Java Basics + Advanced + Interview Guide 30":
        - cell "Rahul Shetty"
        - cell "Selenium Webdriver with Java Basics + Advanced + Interview Guide"
        - cell "30"
      - row "Rahul Shetty Learn SQL in Practical + Database Testing from Scratch 25":
        - cell "Rahul Shetty"
        - cell "Learn SQL in Practical + Database Testing from Scratch"
        - cell "25"
      - row "Rahul Shetty Appium (Selenium) - Mobile Automation Testing from Scratch 30":
        - cell "Rahul Shetty"
        - cell "Appium (Selenium) - Mobile Automation Testing from Scratch"
        - cell "30"
      - row "Rahul Shetty WebSecurity Testing for Beginners-QA knowledge to next level 20":
        - cell "Rahul Shetty"
        - cell "WebSecurity Testing for Beginners-QA knowledge to next level"
        - cell "20"
      - row "Rahul Shetty Learn JMETER from Scratch - (Performance + Load) Testing Tool 25":
        - cell "Rahul Shetty"
        - cell "Learn JMETER from Scratch - (Performance + Load) Testing Tool"
        - cell "25"
      - row "Rahul Shetty WebServices / REST API Testing with SoapUI 35":
        - cell "Rahul Shetty"
        - cell "WebServices / REST API Testing with SoapUI"
        - cell "35"
      - row "Rahul Shetty QA Expert Course :Software Testing + Bugzilla + SQL + Agile 25":
        - cell "Rahul Shetty"
        - cell "QA Expert Course :Software Testing + Bugzilla + SQL + Agile"
        - cell "25"
      - row "Rahul Shetty Master Selenium Automation in simple Python Language 25":
        - cell "Rahul Shetty"
        - cell "Master Selenium Automation in simple Python Language"
        - cell "25"
      - row "Rahul Shetty Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C 20":
        - cell "Rahul Shetty"
        - cell "Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C"
        - cell "20"
      - row "Rahul Shetty Write effective QA Resume that will turn to interview call 0":
        - cell "Rahul Shetty"
        - cell "Write effective QA Resume that will turn to interview call"
        - cell "0"
- group "Element Displayed Example":
  - text: Element Displayed Example
  - button "Hide"
  - button "Show"
  - textbox "Hide/Show Example"
- group "Web Table Fixed header":
  - text: Web Table Fixed header
  - table:
    - rowgroup:
      - row "Name Position City Amount":
        - columnheader "Name"
        - columnheader "Position"
        - columnheader "City"
        - columnheader "Amount"
    - rowgroup:
      - row "Alex Engineer Chennai 28":
        - cell "Alex"
        - cell "Engineer"
        - cell "Chennai"
        - cell "28"
      - row "Ben Mechanic Bengaluru 23":
        - cell "Ben"
        - cell "Mechanic"
        - cell "Bengaluru"
        - cell "23"
      - row "Dwayne Manager Kolkata 48":
        - cell "Dwayne"
        - cell "Manager"
        - cell "Kolkata"
        - cell "48"
      - row "Ivory Receptionist Chennai 18":
        - cell "Ivory"
        - cell "Receptionist"
        - cell "Chennai"
        - cell "18"
      - row "Jack Engineer Pune 32":
        - cell "Jack"
        - cell "Engineer"
        - cell "Pune"
        - cell "32"
      - row "Joe Postman Chennai 46":
        - cell "Joe"
        - cell "Postman"
        - cell "Chennai"
        - cell "46"
      - row "Raymond Businessman Mumbai 37":
        - cell "Raymond"
        - cell "Businessman"
        - cell "Mumbai"
        - cell "37"
      - row "Ronaldo Sportsman Chennai 31":
        - cell "Ronaldo"
        - cell "Sportsman"
        - cell "Chennai"
        - cell "31"
      - row "Smith Cricketer Delhi 33":
        - cell "Smith"
        - cell "Cricketer"
        - cell "Delhi"
        - cell "33"
  - text: "Total Amount Collected: 296"
- group "Mouse Hover Example":
  - text: Mouse Hover Example
  - button "Mouse Hover"
- group "iFrame Example":
  - text: iFrame Example
  - iframe
- table:
  - rowgroup:
    - row "Discount Coupons REST API SoapUI Appium JMeter Latest News Broken Link Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Contact info Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Social Media Facebook Twitter Google+ Youtube":
      - cell "Discount Coupons REST API SoapUI Appium JMeter":
        - list:
          - listitem:
            - heading "Discount Coupons" [level=3]:
              - link "Discount Coupons":
                - /url: "#"
          - listitem:
            - link "REST API":
              - /url: http://www.restapitutorial.com/
          - listitem:
            - link "SoapUI":
              - /url: https://www.soapui.org/
          - listitem:
            - link "Appium":
              - /url: https://courses.rahulshettyacademy.com/p/appium-tutorial
          - listitem:
            - link "JMeter":
              - /url: https://jmeter.apache.org/
      - cell "Latest News Broken Link Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing.":
        - list:
          - listitem:
            - heading "Latest News" [level=3]:
              - link "Latest News":
                - /url: "#"
          - listitem:
            - link "Broken Link":
              - /url: https://rahulshettyacademy.com/brokenlink
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
      - cell "Contact info Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing. Dummy Content for Testing.":
        - list:
          - listitem:
            - heading "Contact info" [level=3]:
              - link "Contact info":
                - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
          - listitem:
            - link "Dummy Content for Testing.":
              - /url: "#"
      - cell "Social Media Facebook Twitter Google+ Youtube":
        - list:
          - listitem:
            - heading "Social Media" [level=3]:
              - link "Social Media":
                - /url: "#"
          - listitem:
            - link "Facebook":
              - /url: "#"
          - listitem:
            - link "Twitter":
              - /url: "#"
          - listitem:
            - link "Google+":
              - /url: "#"
          - listitem:
            - link "Youtube":
              - /url: "#"
- text: © 2019 Powered by
- strong:
  - link "Medianh Consulting":
    - /url: http://www.medianhconsulting.com
- status: No search results.
```

# Test source

```ts
  1  | // spec: specs/automation-practice.test.plan.md
  2  | // seed: tests/seed.spec.ts
  3  | 
  4  | import { test, expect } from '@playwright/test';
  5  | 
  6  | test.describe('AutomationPractice - Autocomplete', () => {
  7  |   test('Autocomplete suggestions and selection', async ({ page }) => {
  8  |     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  9  |     await expect(page).toHaveTitle(/Practice Page/);
  10 | 
  11 |     const ac = page.locator('#autocomplete');
  12 |     await expect(ac).toBeVisible();
  13 | 
  14 |     // Type partial text and choose suggestion
  15 |     await ac.fill('indra');
  16 |     const suggestions = page.locator('.ui-menu-item div');
> 17 |     await expect(suggestions.first()).toBeVisible();
     |                                       ^ Error: expect(locator).toBeVisible() failed
  18 | 
  19 |     // Try to select 'India' if present; otherwise capture the clicked suggestion text
  20 |     const india = suggestions.filter({ hasText: 'India' }).first();
  21 |     if (await india.count() > 0) {
  22 |       const txt = await india.innerText();
  23 |       await india.click();
  24 |       await expect(ac).toHaveValue(txt);
  25 |     } else {
  26 |       // Fallback: select first suggestion and verify value matches the suggestion text
  27 |       const first = suggestions.first();
  28 |       const txt = await first.innerText();
  29 |       await first.click();
  30 |       await expect(ac).toHaveValue(txt);
  31 |     }
  32 | 
  33 |     // Negative case: random text should not match any suggestion items
  34 |     await ac.fill('zzzxxyy');
  35 |     const matches = page.locator('.ui-menu-item').filter({ hasText: 'zzzxxyy' });
  36 |     expect(await matches.count()).toBe(0);
  37 |   });
  38 | });
  39 | 
```