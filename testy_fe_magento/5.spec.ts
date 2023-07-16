import { test, expect } from '@playwright/test';

test('kosik - prejst k platbe', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  // z rolovacieho menu vyber Men<Tops<Jackets
  await page.getByRole('menuitem', { name: 'Men' }).hover();
  await page.getByRole('menuitem', { name: 'Tops' }).hover();
  await page.getByRole('menuitem', { name: 'Jackets' }).click();


  // presmerovanie na stranku https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html

  // stlac pole ponuky 'Montana Wind Jacket'
  await page.getByRole('link', { name: 'Montana Wind Jacket' }).first().click();

  // vyber lubovolnu velkost, farbu
  await page.getByRole('option', { name: 'S', exact: true }).click();
  await page.getByRole('option', { name: 'Green' }).click();

  // potvrd stlacenim 'Add to Cart'
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  // stlac tlacidlo kosik
  await page.getByRole('link', { name: ' My Cart 1 1\nitems' }).click();

  // stlac 'View and Edit Cart'
  await page.getByRole('link', { name: 'View and Edit Cart' }).click();

  // presmerovanie na stranku 'https://magento.softwaretestingboard.com/checkout/cart/'

  // stlac 'Proceed to Checkout'
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  // presmerovanie na stranku 'https://magento.softwaretestingboard.com/checkout/#shipping'
  await page.goto('https://magento.softwaretestingboard.com/checkout/#shipping');
});