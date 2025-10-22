# My-Playwright-project

This project was created as part of a **UI Automation Testing course** and serves as a demonstration of mastering the studied material.  
The task was to develop a **Test Automation Framework** using **Playwright** with **TypeScript** as the programming language, following industry best practices such as the **Page Object Model (POM)** design pattern.

The main focus is on testing key functionalities of the demo web store:  
Filtering and sorting products on [demo.nopcommerce.com](https://demo.nopcommerce.com)  
🔹 Verifying the navigation to the correct product category
🔹 Filtering by manufacturer
🔹 Filtering by price  
🔹 Filtering by memory size (for notebooks)  
🔹 Sorting products on page by different options (e.g. by price from Low to High) 
🔹 Sorting products by number of items per page  
🔹 Verifying correct product info  


#My-Playwright-project/
│
├── finalTask_page-objects/     # Page Object classes (CategoryPages, Filters, Sorting, etc.)
├── configuration/              # Fixtures, test data
├── tests/                      # Test specifications
├── playwright.config.ts        # Playwright configuration file
└── README.md                   # Project documentation


# Getting Started, Build and Test
Installation process:
 Clone this repository  
 Install node.js (recommended version 18 or later), for Windows: npm install
 Install Playwright browsers: npx playwright install
 
 Run tests with "npx playwright test" in the VS Code Terminal or open the Playwright UI Mode: "npx playwright test --ui" in browser. To run tests and view the report in a browser, use the command npm run test:allure
  
Software dependencies:
   "playwright": "^1.55.0",
    "node": "^24.5.2"
    

# Contribute
Since this project is part of my learning journey in UI test automation and TypeScript,
any feedback, suggestions, or code review will be highly appreciated! 
