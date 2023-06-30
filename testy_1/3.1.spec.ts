import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');
});

test('prihlasenie na odber – uspesne', async ({ page }) => {

  // zadaj lubovolnu emailovu adresu
  await page.getByPlaceholder('Enter your email address').click();
  await page.getByPlaceholder('Enter your email address').fill('saxmooood@gmail.com');

  // potvrd stlacenim 'Subscribe'
  await page.getByRole('button', { name: 'Subscribe' }).click();

  // po uspesnom prihlaseni sa zobrazi text 'Thank you for your subscription.'
  await expect.soft(page.locator('class=page messages')).toBeVisible();
  await expect.soft(page.getByPlaceholder('class=page messages')).toHaveText('');

});