import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.vissim.no/career/#1');
});

test.describe('filtrovanie ponuk', () => {

  test('location', async ({ page }) => {
    await page.getByRole('link', { name: 'Join us' }).click();
    await page.getByRole('link', { name: 'See available positions' }).click();
    await page.locator('#yui_3_17_2_1_1689503491914_1497').click();
    await page.getByRole('link', { name: 'Kosice', exact: true }).click();
  });

  test('type of listing', async ({ page }) => {
    await page.locator('#yui_3_17_2_1_1689503491914_1501').click();
    await page.getByRole('link', { name: 'vacancy' }).click();
  });

  test('search', async ({ page }) => {
    await page.getByPlaceholder('Search', { exact: true }).click();
    await page.getByPlaceholder('Search', { exact: true }).fill('testing');
    await page.getByPlaceholder('Search', { exact: true }).press('Enter');
    await page.locator('#yui_3_17_2_1_1689503491914_88').click();
  });
});