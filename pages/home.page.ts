
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly skipSignInLink: Locator;
  readonly SignInLink: Locator;
  readonly emailId: Locator;
  readonly enterButton: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    super(page);

    this.skipSignInLink = page.getByRole('link', {
      name: 'Skip Sign In',
      exact: true
    });
    this.SignInLink = page.getByRole('link', {
      name: 'Sign In',
      exact: true
    });
    this.emailId = page.getByPlaceholder('Email id for Sign Up');
    this.enterButton = page.locator('#enterimg');
    this.logo = page.locator('#logo');
  }

  async accessHome(): Promise<void> {
    await this.navigate('/');
  }

  async validateHomePage(): Promise<void> {
    await expect(this.page).toHaveTitle('Index');
    await expect(this.skipSignInLink).toBeVisible();
    await expect(this.SignInLink).toBeVisible();
    await expect(this.emailId).toBeVisible();
    await expect(this.enterButton).toBeVisible();
    await expect(this.logo).toBeVisible();
  }

  async accessRegister(): Promise<void> {
    await this.skipSignInLink.click();
  }
}
