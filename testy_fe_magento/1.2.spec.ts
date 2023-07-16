import { test, expect } from '@playwright/test';

test('registracia – neuspesna', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  // klikni na 'Create an Account'
  await page.getByRole('link', { name: 'Create an Account' }).click();
  
  // vypln polia 'First Name' a 'Last Name' lubovolnymi cislami
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('43');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('77');
  await page.getByLabel('Last Name').press('Tab');

  // vypln pole 'Email' lubovolnym textom bez znaku @
  await page.getByLabel('Email', { exact: true }).fill('saxmood');
  await page.getByLabel('Email', { exact: true }).press('Tab');

  // vypln pole 'Password' lubovolnym textom bez specialnych znakov a cisel
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('training');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).press('Tab');

  // zobrazi sa odkaz o minimalnych poziadavkach pre heslo

  // vypln polia 'Password' a 'Confirm Password' podla minimalnych poziadaviek pre heslo
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('training');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).press('Tab');
  await page.getByLabel('Confirm Password').fill('training');
  await page.getByRole('button', { name: 'Create an Account' }).click();

  // zobrazi sa upozornenie na nespravne vyplnene polia
});