import { test, expect } from '@playwright/test';

test.describe('Open Application - formular', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://jobs.datacruit.com/en/reaction/open-application-vissim-no-172275?live=1&share_id=7321C4CB');
  });
  
  test('Textove polia - funkcnost editovania a vyplnania', async ({ page }) => {

    const name = page.getByLabel('Name', { exact: true });
    const surname = page.getByLabel('Surname');
    const email = page.getByPlaceholder('@');
    const phone = page.getByLabel('Phone number');
    const linkedin = page.getByPlaceholder('https://www.linkedin.com/…');
    const message = page.getByLabel('Message');

    // skontroluj, ze textove polia neobsahuju ziaden text
    await expect(name).toBeEmpty();
    await expect(surname).toBeEmpty();
    await expect(email).toBeEmpty();
    await expect(phone).toBeEmpty();
    await expect(linkedin).toBeEmpty();
    await expect(message).toBeEmpty();

    // textove polia su klikatelne
    await name.click();
    await surname.click();
    await email.click();
    await phone.click();
    await linkedin.click();
    await message.click();

    // textove polia su editovatelne
    await name.fill('Jozko');
    await surname.fill('Mrkvicka');
    await email.fill('jozko.mrkvicka@example.com');
    await phone.fill('1234567890');
    await linkedin.fill('https://www.linkedin.com/in/jozkomrkvicka');
    await message.fill('Volam sa Jozko Mrkvicka');

    // skontroluj, ze textove polia maju spravny text
    await expect(name).toHaveValue('Jozko');
    await expect(surname).toHaveValue('Mrkvicka');
    await expect(email).toHaveValue('jozko.mrkvicka@example.com');
    await expect(phone).toHaveValue('1234567890');
    await expect(linkedin).toHaveValue('https://www.linkedin.com/in/jozkomrkvicka');
    await expect(message).toHaveValue('Volam sa Jozko Mrkvicka');

    // 

  });

  test('Email - format', async ({ page }) => {

  });

  test('Upload your CV', async ({ page }) => {

    // ma funkcnu moznost 'Upload your CV'
    const cv = page.getByText('Select a file');
    await expect(cv).toBeEditable();

  });

  test('I agree to processing of personal data.', async ({ page }) => {

  });

  test('Captcha', async ({ page }) => {

  });

  test('Odoslanie formulara - neuspesne', async ({ page }) => {

  });

  test('Odoslanie formulara - uspesne', async ({ page }) => {

  });
});



    






