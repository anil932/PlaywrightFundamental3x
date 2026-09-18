import {test, expect} from "@playwright/test"

test("Verify that the vwo page is loaded", async({page})=> {
    await page.goto("https://app.vwo.com",{
        waitUntil: "domcontentloaded",
        timeout: 3000,
        referer: "https://sdet.live"
})

let userNamefield = page.locator("#login-username")
await userNamefield.fill("abc.com@gmail.com")
await page.waitForTimeout(3000)

})