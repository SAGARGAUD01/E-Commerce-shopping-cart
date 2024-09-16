## Simple ecommerce cart application [![CircleCI](https://circleci.com/gh/jeffersonRibeiro/react-shopping-cart.svg?style=svg)](https://app.circleci.com/pipelines/github/SAGARGAUD01/shopping-cart)

<p align="center">

  <img src="./readme-banner.png">
</p>

## Basic Overview - [Live Demo](https://shopping-cart-9b1a1.firebaseapp.com/)


✈️ [Follow Sagar Gaud](https://www.linkedin.com/in/sagargaud332/)

This simple shopping cart prototype shows how React with Typescript, React hooks, react Context and Styled Components can be used to build a friendly user experience with instant visual updates and scaleable code in ecommerce applications & there is no database.

### Features

- Add and remove products from the floating cart using.
- Filter products by available sizes using Context Api.
- Responsive design.

<!--
## Getting started

Try playing with the code on CodeSandbox :)

[![Edit app](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/74rykw70qq)
 -->

## Overview
This project is an e-commerce shopping cart application built using Next.js or SvelteKit, designed to showcase the fundamental skills required for a Frontend Engineer role. The application includes a product listing page where users can browse various products and add them to a shopping cart. A dedicated cart page allows users to manage their selected products, adjust quantities, remove items, and view the total price.

## Features
### Product Listing Page
Grid Layout: Displays 6-10 products in a clean and responsive grid layout.
Product Cards: Each product card includes:
Product image
Product name
Product price (formatted for currency)
"Add to Cart" button
Add to Cart Functionality:
Adds the selected product to the shopping cart.
Updates the cart icon or counter to reflect the number of items (optional).
Provides visual feedback confirming the addition of the item.
Cart Page

## Product List: Displays all products added to the cart, with the following details:
Product image
Product name
Product price
Quantity selector for adjusting item amounts.
"Remove Item" button to delete products from the cart.

## Cart Summary:
Subtotal: Calculates the total cost based on quantity and price.
Discounts (optional): Implements fixed or percentage-based discounts.
Total Price: Displays the final price after applying discounts.
Checkout Button (optional): Simulates the checkout process or provides a success message.

## Technical Specifications
Frontend Framework: Next.js or SvelteKit
Styling: Tailwind CSS or Plain CSS
Data Source:
Option 1: Local JSON file with product data.
Option 2: Fetch product data dynamically from an open-source API.

## Installation and Setup
## Clone the Repository:
```sh
git clone https://github.com/your-username/repo-name.git
cd repo-name
```

## Install Dependencies:
```sh
npm install
```
Run the Application:
```sh
npm run dev
The application will be accessible at http://localhost:3000.
```

Usage
Navigate to the Product Listing Page: Browse the available products and add them to your cart by clicking the "Add to Cart" button.
View and Manage Your Cart: Go to the cart page to adjust quantities, remove items, and see the total price.
Simulated Checkout: Optionally, proceed to the checkout process to complete your shopping experience.
File Structure

```sh
├── public/
│   ├── images/                # Product images (if using local images)
├── src/
│   ├── components/            # Reusable components (e.g., ProductCard, CartItem)
│   ├── pages/                 # Next.js pages (or SvelteKit routes)
│   │   ├── index.js           # Product Listing Page
│   │   ├── cart.js            # Cart Page
│   ├── styles/                # Tailwind CSS or Plain CSS files
├── data/
│   ├── products.json          # Local JSON file with product data (if using)
├── README.md                  # This file
├── package.json               # Project metadata and scripts
