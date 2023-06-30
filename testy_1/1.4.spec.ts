import { test, expect } from '@playwright/test';

test('prihlasenie – uspesne', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  // klikni na 'Sign in'
  await page.getByRole('link', { name: 'Sign In' }).click();

  // zadaj prihlasovacie udaje vytvoreneho uctu
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('saxmood@gmail.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('Password').fill('training.1');

  // uspesne prihlasenie do uctu.
});