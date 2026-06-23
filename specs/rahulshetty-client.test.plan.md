# RahulShetty Client Test Plan

## Application Overview

E2E test plan for Rahul Shetty Academy client app (https://rahulshettyacademy.com/client). Tests cover authentication, product discovery, cart/checkout, and common edge cases. Assume a fresh browser state for each scenario (no logged-in session, empty cart). Use provided valid credentials for happy-path login: intheja@gmail.com / 123456.

## Test Scenarios

### 1. Auth and Purchase Flows

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login - Happy Path

**File:** `specs/rahulshetty-login-happy.spec.md`

**Steps:**
  1. Navigate to the login page: https://rahulshettyacademy.com/client/#/auth/login
    - expect: Login page loads with username and password input fields and a Login button
    - expect: Page title contains "Let's Shop"
  2. Enter username `intheja@gmail.com` and password `123456` then click Login
    - expect: User is authenticated and redirected to the products/home page
    - expect: A visible element indicating successful login (e.g., Logout button, user name, or cart) appears
  3. Verify main products list loads
    - expect: At least one product tile is visible
    - expect: Product titles, prices, and Add to Cart controls are present

#### 1.2. Login - Invalid Credentials

**File:** `specs/rahulshetty-login-invalid.spec.md`

**Steps:**
  1. Navigate to login page
    - expect: Login form visible
  2. Enter invalid username and/or password and click Login
    - expect: Login is rejected
    - expect: An appropriate error message is displayed (e.g., "Invalid credentials")
    - expect: User remains on the login page

#### 1.3. Login - Empty Fields Validation

**File:** `specs/rahulshetty-login-empty.spec.md`

**Steps:**
  1. Open login page and click Login without entering credentials
    - expect: Client-side validation prevents submission or shows validation messages for required fields
    - expect: No navigation occurs

#### 1.4. Product Search and Add to Cart

**File:** `specs/rahulshetty-product-add-to-cart.spec.md`

**Steps:**
  1. Log in (happy path) and wait for product list
    - expect: Products are visible
  2. Use search/filter (if available) to find a specific product name or select the first product
    - expect: Search returns matching products or product tile is identifiable
  3. Click Add to Cart for the product and open the cart
    - expect: Cart count increases and the product appears in the cart with correct title and price

#### 1.5. Checkout - Place Order (Happy Path)

**File:** `specs/rahulshetty-checkout-place-order.spec.md`

**Steps:**
  1. Log in and add one or more products to the cart
    - expect: Cart shows selected items and subtotal
  2. Navigate to checkout/Cart page and proceed to place order (fill required shipping/payment details if the app requires)
    - expect: Checkout form validates inputs
    - expect: Order confirmation page or success message appears with order summary or order id

#### 1.6. Cart and Quantity Behaviour

**File:** `specs/rahulshetty-cart-quantity.spec.md`

**Steps:**
  1. Log in, add a product to cart
    - expect: Product appears in cart
  2. Change product quantity in cart (increase and decrease)
    - expect: Cart totals update accordingly
    - expect: Quantity cannot go below 1 (or product removed if app uses zero to remove)

#### 1.7. Logout and Session Expiry

**File:** `specs/rahulshetty-logout-session.spec.md`

**Steps:**
  1. Log in successfully
    - expect: User is authenticated
  2. Click Logout (or clear session) and attempt to access a protected route (e.g., /dashboard or products page)
    - expect: User is redirected to the login page or shown authentication required
    - expect: Protected resources are not accessible after logout

#### 1.8. Negative Flow - Add Out-of-Stock or Invalid Product

**File:** `specs/rahulshetty-product-negative.spec.md`

**Steps:**
  1. Attempt to add a product known to be unavailable or manipulate payload to add invalid item
    - expect: App handles gracefully: shows an error/toast or disallows action without crashing
    - expect: Cart state remains consistent
