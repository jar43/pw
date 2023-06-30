import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/training.html');
});

test.describe('registracia a prihlasenie - uspesne', () => {
  test('registracia – uspesna', async ({ page }) => {

    // klikni na 'Create an Account'
    await page.getByRole('link', { name: 'Create an Account' }).click();

    // skontroluj ci stranka ma url https://magento.softwaretestingboard.com/customer/account/create/
    await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/create/');

    // vypln polia 'First Name' a 'Last Name' lubovolnym textom
    await page.getByLabel('First Name').click();
    await page.getByLabel('First Name').fill('Jaro');
    await page.getByLabel('Last Name').press('Tab');
    await page.getByLabel('Last Name').fill('Ma');
    await page.getByLabel('Last Name').press('Tab');

    // skontroluj ci polia 'First Name' a 'Last Name' obsahuju lubovolny text
    await expect.soft(page.getByLabel('First Name')).toHaveText('');
    await expect.soft(page.getByLabel('Last Name')).toHaveText('');

    // vypln pole 'Email' lubovolnou emailovou adresou
    await page.getByLabel('Email', { exact: true }).fill('saxmood@gmail.com');
    await page.getByLabel('Email', { exact: true }).press('Tab');

    // skontroluj ci pole 'Email' obsahuje lubovolnu emailovu adresu
    await expect.soft(page.getByLabel('Email', { exact: true })).toContainText('')

    // skontroluj ci polia 'Password' a 'Confirm Password' su editovatelne
    await expect.soft(page.getByRole('textbox', { name: 'Password*', exact: true })).toBeEditable();
    await expect.soft(page.getByLabel('Confirm Password')).toBeEditable();

    // vypln polia 'Password' a 'Confirm Password' tak, aby pocet znakov bol minimalne 8 a obsahovalo specialny znak a cislo
    await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('training.1');
    await page.getByLabel('Confirm Password').click();
    await page.getByLabel('Confirm Password').fill('training.1');

    // presmerovanie na stranku vytvoreneho uctu
    await page.goto('https://magento.softwaretestingboard.com/customer/account/');
  });


  test('prihlasenie – uspesne', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/training.html');
  
    // klikni na 'Sign in'
    await page.getByRole('link', { name: 'Sign In' }).click();
  
    // zadaj prihlasovacie udaje vytvoreneho uctu
    await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('saxmood@gmail.com');
    await page.getByLabel('Email', { exact: true }).press('Tab');
    await page.getByLabel('Password').fill('training.1');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // skontroluj uspesne prihlasenie do uctu
    await expect(page.getByRole('banner').getByText('Welcome, Jaro Ma!')).toBeVisible();
  });

});
