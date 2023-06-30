import { test, expect } from '@playwright/test';

test('prihlasenie – neuspesne', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');

  // klikni na 'Sign in'
  await page.getByRole('link', { name: 'Sign In' }).click();

  // zadaj nespravne prihlasovacie udaje vytvoreneho uctu
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('saxmood');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('Password').fill('training');

  // zobrazenie upozornenia 'Please enter as valid email address (Ex: johndoe@domain.com).'

  // zadaj spravny prihlasovaci udaj vytvoreneho uctu pre email a nespravny pre heslo
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('saxmood@gmail.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByLabel('Password').fill('training');

  // zobrazenie upozornenia 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'

});