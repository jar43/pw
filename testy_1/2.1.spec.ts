import { test, expect } from '@playwright/test';

test('vyhladavanie – uspesne', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  //  klikni na vyhladavacie pole "Search entire store here..."
  await page.getByPlaceholder('Search entire store here...').click();

  // napis slovo 'training' a stlac Enter
  await page.getByPlaceholder('Search entire store here...').fill('training');
  await page.getByPlaceholder('Search entire store here...').press('Enter');

  // presmerovanie na stranku s polozkami pre nakup
  await page.goto('https://magento.softwaretestingboard.com/catalogsearch/result/');

});