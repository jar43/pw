import { test, expect } from '@playwright/test';

test('vyhladavanie – neuspesne', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  //  klikni na vyhladavacie pole "Search entire store here..."
  await page.getByPlaceholder('Search entire store here...').click();

  // zadaj lubovolne cisla a stlac Enter
  await page.getByPlaceholder('Search entire store here...').fill('1234');
  await page.getByPlaceholder('Search entire store here...').press('Enter');

  // presmerovanie na stranku s oznamom "Your search returned no results."
  await page.goto('https://magento.softwaretestingboard.com/catalogsearch/result/');
  await page.getByText('Your search returned no results.');
});