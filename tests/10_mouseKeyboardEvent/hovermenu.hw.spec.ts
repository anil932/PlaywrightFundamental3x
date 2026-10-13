import {test, expect} from "@playwright/test"


test("verify hover menu in app testing", async({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu", {waitUntil:"load",timeout:5000});
    await page.getByTestId("nav-add-ons").hover()

    await page.getByTestId("test-id-Wifi").click()
   const text =  await page.getByTestId("hover-output").allTextContents()
   console.log("printed :: "+text)

    // await page.pause()
})