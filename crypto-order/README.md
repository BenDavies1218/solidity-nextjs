# Crypto Order

So this application is designed to be a clone of a QR code ordering system similiar to Me&u ordering for restaurants. A restaurant both singular or franchise will be able to create an account, add one or multiple food outlets then they will be able to create a menu with different categories such as Specials, entrees, mains desserts and custom ones. they then will be able to create, update, delete menu items and assign menu items to outlets.

## KEY METRICS

- A restaurant can add food venues with venue_Ids and table_numbers_Ids
- A restaurant can create a menu
- A restaurant can create food items and assign them to a menu
- A restaurant can assign menus to food venues
- This app will prodominently be used with phones and small devices

## PAGES

- Company landing page

  - Signup (I will handle wallet creatation for the company)

    - 2FA Auth
    - Forgot Password
    - Create a new account
    - Business Home page
      - Add a venue (also include venue specific info)
      - Create a menu (ability to create custom fields, ability to have a menu bar)
      - Create a food item (Includes images, description, price)
    - View your menu Page
    - Current Orders
      - View single order
      - Refund Order
    - Settings
      - Wallet
      - Orders
      - Accounts
        - Access Controls
      - Notifications

  - Customer portal
    - View Menu
    - Cart
    - Checkout
    - Successful Order

## ROUTES

- Restaurant CRUD
- Venue CRUD
- Menu CRUD
- Food Item CRUD
- Orders CRUD
- Payments (Pay, Refund)
- Notifications (Email, 2FA, ect)

## WEB3 Fuctions

- Process a transaction
- Refund a transaction

## SCHEMAS

- Restaurant
- Venue
- Menu
- Food Item
- Order
- Payment
- Refund

### STACK

- NextJs
- Trpc
- Thirdweb
- Typescript
- MongoDB
