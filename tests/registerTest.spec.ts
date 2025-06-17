import test from "@playwright/test";
import { RegisterPage } from "../pages/registerPage";
import { HomePage } from "../pages/homePage";

test.describe('User Registration Tests', () => {
  let registerPage: RegisterPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    homePage = new HomePage(page);
  });

  test('should register a new user successfully', async () => {
    const username = `user${Date.now()}`;
    const password = 'password123*';

    await registerPage.fillRegistrationForm(username, password);

    await homePage.validateHomePage();
  });
});
