
import {test, expect} from "@playwright/test"

test("verify right click context menu", async({page})=> {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu")
    await page.locator("span.context-menu-one").first().click({button: 'right'})

    const textrray =  await page.getByTestId("ctx-menu").allInnerTexts()
    console.log("text array "+textrray)

    page.getByText("Copy", {exact: true}).first().click()

    await page.pause()



})