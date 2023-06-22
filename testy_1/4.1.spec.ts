import { test, expect } from '@playwright/test';

test('pridat produkt do kosika – zo zoznamu', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  // z rolovacieho menu vyber Men<Tops<Jackets
  await page.getByRole('menuitem', { name: 'Jackets' }).click();

  // presmerovanie na stranku 'https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html'

  // z pola ponuky 'Montana Wind Jacket' vyber lubovolnu velkost a farbu
  await page.getByRole('listitem').filter({ hasText: 'Montana Wind Jacket Rating: 53% 3 Reviews As low as $49.00 XSSMLXL Add to Cart A' }).getByRole('option', { name: 'S', exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: 'Montana Wind Jacket Rating: 53% 3 Reviews As low as $49.00 XSSMLXL Add to Cart A' }).getByRole('option', { name: 'Green' }).click();
  
  // potvrd stlacenim 'Add to Cart'
  await page.getByRole('listitem').filter({ hasText: 'Montana Wind Jacket Rating: 53% 3 Reviews As low as $49.00 XSSMLXL Add to Cart A' }).getByRole('button', { name: 'Add to Cart' }).click();

  // v pripade uspesneho pridania sa zobrazi text 'You added Montana Wind Jacket to your shopping cart.'
});