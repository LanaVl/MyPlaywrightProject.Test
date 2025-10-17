import { defineConfig, devices } from '@playwright/test';

//import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config();
 
export default defineConfig({
 // timeout: 10000,
  testDir: './tests',
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
  // Base URL to use in actions like `await page.goto('/')`.
   // baseURL: 'http://localhost:3000',
    baseURL: 'https://demo.nopcommerce.com/',

    trace: 'on-first-retry',
    actionTimeout: 5000,
    navigationTimeout: 5000,
    
  /*  contextOptions: {
      ignoreHTTPSErrors: true,
      permissions: [],
    },*/
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
