
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Home Page', () => {

  test('@smoke deve carregar a página inicial', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.accessHome();

    await homePage.validateHomePage();
  });

  test('@smoke deve acessar a página de cadastro', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.accessHome();

    await homePage.accessRegister();

    await expect(page).toHaveURL(/Register\.html/);

    await expect(
      page.getByRole('heading', { name: 'Register' })
    ).toBeVisible();
  });

});
