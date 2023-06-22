import { test, expect } from '@playwright/test';

test('prihlasenie na odber – uspesne', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  // zadaj lubovolnu emailovu adresu
  await page.getByPlaceholder('Enter your email address').click();
  await page.getByPlaceholder('Enter your email address').fill('saxmood@gmail.com');

  // potvrd stlacenim 'Subscribe'
  await page.getByRole('button', { name: 'Subscribe' }).click();

  // po uspesnom prihlaseni sa zobrazi text 'Thank you for your subscription.'
  await page.getByText('Thank you for your subscription.').click();
});