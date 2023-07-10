import { test, expect } from '@playwright/test';

test('prihlasenie na odber – neuspesne', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  // zadaj lubovolnu emailovu adresu
  await page.getByPlaceholder('Enter your email address').click();
  await page.getByPlaceholder('Enter your email address').fill('saxmood');

  // potvrd stlacenim 'Subscribe'
  await page.getByRole('button', { name: 'Subscribe' }).click();

  // po neuspesnom prihlaseni sa zobrazi text 'Please enter a valid email address (Ex: johndoe@domain.com).'
  await expect(page.getByTestId('newsletter-error')).toBeVisible;
  await expect(page.getByTestId('newsletter-error')).toHaveText('Please enter a valid email address (Ex: johndoe@domain.com).');

});