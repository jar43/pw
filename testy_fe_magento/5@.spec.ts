import { test, expect } from '@playwright/test';

test('kosik - prejst k platbe', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  // z rolovacieho menu vyber Men > Tops > Jackets
  await page.hover('text="Men"');
  await page.hover('text="Tops"');
  await page.hover('text="Jackets"');
  await page.click('text="Jackets"');

  // presmerovanie na stranku https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html

  // stlac pole ponuky 'Montana Wind Jacket'
  await page.click('text="Montana Wind Jacket"');

  // vyber lubovolnu velkost, farbu
  await page.selectOption('select[name="super_attribute[92]"]', 'S');
  await page.selectOption('select[name="super_attribute[93]"]', 'Green');

  // potvrd stlacenim 'Add to Cart'
  await page.click('text="Add to Cart"');

  // stlac tlacidlo kosik
  await page.click('text=" My Cart 1 1\nitems"');

  // stlac 'View and Edit Cart'
  await page.click('text="View and Edit Cart"');

  // presmerovanie na stranku 'https://magento.softwaretestingboard.com/checkout/cart/'

  // stlac 'Proceed to Checkout'
  await page.click('text="Proceed to Checkout"');

  // presmerovanie na stranku 'https://magento.softwaretestingboard.com/checkout/#shipping'
  await page.goto('https://magento.softwaretestingboard.com/checkout/#shipping');
});
