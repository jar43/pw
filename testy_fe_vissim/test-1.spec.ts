import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.vissim.no/');
  await page.getByRole('link', { name: 'Join us' }).click();
  await page.getByRole('link', { name: 'See available positions' }).click();
  await page.locator('#yui_3_17_2_1_1689503491914_1497').click();
  await page.getByRole('link', { name: 'Kosice', exact: true }).click();
  await page.locator('#yui_3_17_2_1_1689503491914_1501').click();
  await page.getByRole('link', { name: 'vacancy' }).click();
  await page.getByPlaceholder('Search', { exact: true }).click();
  await page.getByPlaceholder('Search', { exact: true }).fill('testing');
  await page.getByPlaceholder('Search', { exact: true }).press('Enter');
  await page.locator('#yui_3_17_2_1_1689503491914_88').click();
});