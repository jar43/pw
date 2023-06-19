import { test, expect } from '@playwright/test';

test('pridat produkt do kosika – zo stranky produktu', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  // z rolovacieho menu vyber Men<Tops<Jackets
  await page.getByRole('menuitem', { name: 'Jackets' }).click();

  // presmerovanie na stranku https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html

  // stlac pole ponuky 'Montana Wind Jacket'
  await page.getByRole('link', { name: 'Montana Wind Jacket' }).first().click();

  // presmerovanie na stranku https://magento.softwaretestingboard.com/montana-wind-jacket.html

  // vyber lubovolnu velkost, farbu a mnozstvo
  await page.getByRole('option', { name: 'S', exact: true }).click();
  await page.getByRole('option', { name: 'Green' }).click();

  // potvrd stlacenim 'Add to Cart'
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  // v pripade uspesneho pridania sa zobrazi text 'You added Montana Wind Jacket to your shopping cart.'
});