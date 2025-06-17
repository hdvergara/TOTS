import { type Locator, type Page, expect } from '@playwright/test';

export class RegisterPage {
  private page: Page;
  private readonly userInput: Locator;
  private readonly passwordInput: Locator;
  private readonly dayOfBirthSelect: Locator;
  private readonly monthSelect: Locator;
  private readonly yearSelect: Locator;
  private readonly registerButton: Locator;



  constructor(page: Page) {
    this.page = page;
    this.userInput = this.page.locator('#user');
    this.passwordInput = this.page.locator('#pass');
    this.dayOfBirthSelect = this.page.getByLabel('Day of birth*');
    this.monthSelect = this.page.getByLabel('Month*');
    this.yearSelect = this.page.getByLabel('Year*');
    this.registerButton = this.page.locator('#submitForm');
  }

  async navigateToRegister() {
    this.page.goto('/register');
  }

  async fillRegistrationForm(username: string, password: string) {
    await this.page.goto('/');
    await this.userInput.fill(username);
    await this.passwordInput.fill(password);
    await this.page.check('input[type="radio"][value="Male"]', { force: true });
    //await this.selectGender('Male');
    await this.dayOfBirthSelect.selectOption({ label: '1' });
    await this.monthSelect.selectOption({ label: 'January' });
    await this.yearSelect.selectOption({ label: '2000' });
    await this.registerButton.click();
  
  }

  async  selectGender(gender: string) {
  await this.page.check(`input[type="radio"][value="${gender}"]`);

}

  async getSuccessMessage() {
    return await this.page.textContent('.success-message');
  }
}