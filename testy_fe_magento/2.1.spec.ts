import { test, expect } from '@playwright/test';

test('vyhladavanie – uspesne', async ({ page }) => {
  test.setTimeout(120000);
  
  await page.goto('https://magento.softwaretestingboard.com/training.html');
  const Search = page.getByPlaceholder('Search entire store here...');

  //  klikni na vyhladavacie pole "Search entire store here..."
  await Search.click();

  // napis slovo 'training' a stlac Enter
  await Search.fill('training');
  await expect(Search).not.toBeEmpty();
  await Search.press('Enter');

  // skontroluj ci ta presmeruje na stranku s url 'https://magento.softwaretestingboard.com/catalogsearch/result/'
  await expect(page).toHaveURL('https://magento.softwaretestingboard.com/catalogsearch/result/*/');

});