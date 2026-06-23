# AutomationPractice Test Plan

## Application Overview

Comprehensive test plan for https://rahulshettyacademy.com/AutomationPractice/ covering core interactions, edge cases, error handling, and verification criteria. Assumes fresh browser state for each scenario.

## Test Scenarios

### 1. AutomationPractice - Core Flows

**Seed:** `tests/seed.spec.ts`

#### 1.1. Checkbox interactions

**File:** `tests/automation-practice/checkboxes.spec.ts`

**Steps:**
  1. Assumptions: Fresh browser session. Navigate to the AutomationPractice homepage.
    - expect: Page title contains 'Practice Page'
    - expect: Element '#checkBoxOption1' exists
  2. Select checkbox '#checkBoxOption2' only.
    - expect: '#checkBoxOption2' is checked
    - expect: #checkBoxOption1 and #checkBoxOption3 are not checked
  3. Select all three checkboxes.
    - expect: All three checkboxes ('#checkBoxOption1','#checkBoxOption2','#checkBoxOption3') are checked
    - expect: UI shows selected state for each checkbox
  4. Click an already-checked checkbox to toggle it off.
    - expect: Clicked checkbox becomes unchecked
    - expect: Toggle behavior is reversible

#### 1.2. Radio button selection

**File:** `tests/automation-practice/radio.spec.ts`

**Steps:**
  1. Assumptions: Start on AutomationPractice homepage.
    - expect: Radio group '[name="radioButton"]' exists
  2. Select each radio option in turn (radio1 -> radio2 -> radio3).
    - expect: When one radio is selected, others are not selected
    - expect: Selected radio's value matches expected option text
  3. Validate that selecting radio changes the selected state only for that control.
    - expect: Only the most recently selected radio is checked at any time

#### 1.3. Static dropdown (select)

**File:** `tests/automation-practice/dropdown.spec.ts`

**Steps:**
  1. Locate static dropdown '#dropdown-class-example'.
    - expect: Dropdown exists and has options Option1, Option2, Option3
  2. Select Option2 by visible text.
    - expect: Dropdown value equals the expected value for Option2
    - expect: Selected option is visible to the user
  3. Select by index and by value to verify alternatives.
    - expect: Selection by index and by value produce the expected selected option

#### 1.4. Autocomplete / Suggestion box

**File:** `tests/automation-practice/autocomplete.spec.ts`

**Steps:**
  1. Assumptions: Start fresh on AutomationPractice.
    - expect: Autocomplete input '#autocomplete' is present
  2. Type 'ind' into '#autocomplete' and wait for suggestions.
    - expect: Suggestion list appears and contains 'India' or matching items
  3. Select 'India' from suggestions and verify input value.
    - expect: '#autocomplete' value equals 'India' after selection
  4. Negative: Type a random string 'zzzxxyy' and verify no suggestions or appropriate empty state.
    - expect: No suggestions are shown or suggestions list is empty
    - expect: No JavaScript errors occur

#### 1.5. Switch Window / Tab behavior

**File:** `tests/automation-practice/windows-tabs.spec.ts`

**Steps:**
  1. Click 'Open Window' button '#openwindow'.
    - expect: A new browser window opens
    - expect: New window URL contains 'rahulshettyacademy.com' or expected domain
  2. Close new window and return to main page.
    - expect: Main page regains focus and remains functional
  3. Click 'Open Tab' link '#opentab' and verify new tab opens.
    - expect: New tab opens in the same browser context
    - expect: New tab title or URL matches expected target

#### 1.6. Alerts and confirmations

**File:** `tests/automation-practice/alerts.spec.ts`

**Steps:**
  1. Enter name 'TestUser' into '#name'.
    - expect: Input '#name' value is 'TestUser'
  2. Click alert button '#alertbtn' and capture alert text.
    - expect: Alert appears with text containing 'Hello TestUser' or expected pattern
    - expect: Alert can be accepted programmatically
  3. Click confirm button '#confirmbtn' and verify both accept and dismiss flows.
    - expect: On accept, page behavior matches expected confirm-OK path
    - expect: On dismiss, page behavior matches expected cancel path or displays correct message

#### 1.7. iFrame interactions

**File:** `tests/automation-practice/iframe.spec.ts`

**Steps:**
  1. Locate iframe '#courses-iframe' and switch context into it.
    - expect: Iframe exists and is reachable by selector '#courses-iframe'
  2. Within iframe, verify presence of course links (e.g., 'Selenium').
    - expect: Expected course link elements are present inside iframe
  3. Click a course link inside iframe and verify it opens the expected destination (new tab/window or same frame).
    - expect: Click opens correct destination (URL or new tab)
    - expect: Parent frame remains stable after interaction

#### 1.8. Web table verification

**File:** `tests/automation-practice/webtable.spec.ts`

**Steps:**
  1. Locate product table '#product'.
    - expect: Table '#product' exists and has header columns 'Instructor','Course','Price' or similar
  2. Verify a row contains 'Selenium Webdriver with Java' and price '30'.
    - expect: Row with course name exists
    - expect: Price cell equals '30' for that row
  3. Validate total number of data rows and ability to read each cell.
    - expect: Row count matches expected test data (>=1)
    - expect: Each cell text is readable and not empty

#### 1.9. Hide / Show textbox behavior

**File:** `tests/automation-practice/hide-show.spec.ts`

**Steps:**
  1. Locate hide button '#hide-textbox', show button '#show-textbox', and textbox '#displayed-text'.
    - expect: All three elements are present
  2. Click '#hide-textbox' and verify '#displayed-text' is hidden or not visible.
    - expect: '#displayed-text' is not visible or has display:none/visibility:hidden
  3. Click '#show-textbox' and verify '#displayed-text' is visible and editable.
    - expect: '#displayed-text' becomes visible and can accept input

#### 1.10. Mouse hover menu and actions

**File:** `tests/automation-practice/mousehover.spec.ts`

**Steps:**
  1. Locate hover trigger button '#mousehover'.
    - expect: Hover trigger exists
  2. Perform mouse hover on '#mousehover' to reveal hidden menu and click 'Top' or 'Reload'.
    - expect: Hidden menu becomes visible after hover
    - expect: Clicking revealed link navigates or performs the expected action (scroll to top or reload)
  3. Alternative: Use JavaScript to force-show menu if hover is flaky, then click and verify.
    - expect: Menu can be shown via script and links inside are clickable
