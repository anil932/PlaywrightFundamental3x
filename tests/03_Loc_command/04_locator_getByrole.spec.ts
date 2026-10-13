import {test, expect} from "@playwright/test"

test("Verify get by role locator ", async({page}) => {

    await page.goto("https://app.wingify.com/#/login")
    await page.getByRole("textbox", {name: "Email"}).fill("abc@gmail.com")
    await page.getByRole("textbox", {name: "Password"}).fill("Abc123")
    await page.pause()

})