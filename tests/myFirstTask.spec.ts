/* ## Task 2: Write a New Test for "Clear Completed" Button

- Create a package.json script called `test:test2` that:
  - Runs your new test
  - Executes on **Chromium and Firefox** browsers
  - Uses **2 workers** for parallel execution
  - Can be run with: `npm run test:test2` */

import {test, expect} from "@playwright/test"

test('Clear completed todos and verify the others', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await expect(page.getByRole('heading')).toContainText('todos');

// Add multiple tasks to the todo list
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('task1');
  await page.keyboard.press('Enter');

  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('task2');
  await page.keyboard.press('Enter');

  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('task3');
  await page.keyboard.press('Enter');

  // Complete at least one task
  await page.getByRole('listitem').filter({ hasText: 'task1' }).getByLabel('Toggle Todo').check();

  const completedTodos = await page.locator("//label[@data-testid='todo-title']/../../../li[(@class='completed')]");
  await expect(completedTodos).toHaveCount(1); 

  // Verify that the "Clear completed" button is visible
  const visibleButton = await page.getByRole('button', { name: "Clear completed"}).isVisible();

  //  Click the "Clear completed" button
  await page.getByRole('button', { name: "Clear completed" }).click();

  // Verify that completed tasks are removed
  await expect(completedTodos).toHaveCount(0);

  // Verify that active tasks remain
  const noncompletedTodos = await page.locator("//label[@data-testid='todo-title']/../../../li[not(@class='completed')]");
  await expect(noncompletedTodos).toHaveCount(2);
});