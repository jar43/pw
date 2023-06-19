import { test, expect } from '@playwright/test';

test('registracia – uspesna', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  // klikni na 'Create an Account'
  await page.getByRole('link', { name: 'Create an Account' }).click();

  // vypln polia 'First Name' a 'Last Name' lubovolnym textom
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Jaro');
  await page.getByLabel('Last Name').press('Tab');
  await page.getByLabel('Last Name').fill('Ma');
  await page.getByLabel('Last Name').press('Tab');

  // vypln pole 'Email' lubovolnou emailovou adresou
  await page.getByLabel('Email', { exact: true }).fill('saxmood@gmail.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');

  // vypln polia 'Password' a 'Confirm Password' tak, aby pocet znakov bol minimalne 8 a obsahovalo specialny znak a cislo
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('training.1');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('training.1');

  // presmerovanie na stranku vytvoreneho uctu
  await page.goto('https://magento.softwaretestingboard.com/customer/account/');
});