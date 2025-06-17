import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  private page: Page;
  private readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutButton = this.page.locator('#logout');
  }

  async validateHomePage() {
    await expect(this.page).toHaveURL(/\/home/);
    await expect(this.logoutButton).toBeVisible({ timeout: 15000 });
  }
}