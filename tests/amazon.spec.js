const { test, expect } = require('@playwright/test');

test('open amazon.com and check title', async ({ page }) => {
  await page.goto('https://www.amazon.com');
  await expect(page).toHaveTitle(/Amazon/);
  await page.getByPlaceholder('Search Amazon').fill('mobile');
  await page.getByPlaceholder('Search Amazon').press('Enter');
  await expect(page).toHaveTitle(/mobile/);
  await page.close();
});
