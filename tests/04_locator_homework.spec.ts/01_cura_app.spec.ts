import {test, expect} from "@playwright/test"

test("Login on heraku app and verify the url and make payment text", async ({page})=> {
    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login", {
        waitUntil: "domcontentloaded",
        timeout: 5000,
    })
   let  username = page.locator("#txt-username")
   await username.fill("John Doe")
   let pwd = page.locator("#txt-password")
   await pwd.fill("ThisIsNotAPassword")
   let loginBtn = page.locator("#btn-login")
   await loginBtn.click()
   let makeAppointment = page.locator("#btn-make-appointment")
   await expect(makeAppointment).toHaveText("Make Appointment")
   await expect(page).toHaveURL(/#appointment/);


})