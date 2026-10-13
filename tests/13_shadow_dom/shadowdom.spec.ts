import { test, expect } from "@playwright/test"

test("verify shadow dom", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/shadow-dom")

    const card = page.getByTestId("card-account-card")
    card.locator("input[name='email']").fill("student@thetestingacademy.com")
    card.locator("input[name='password']").fill("pw")
    await card.getByTestId("card-account-submit").click()
    await expect(page.getByTestId('card-account-status')).toContainText("student@thetestingacademy.com")

    await page.pause()
});