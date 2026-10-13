import {test, expect} from "@playwright/test"

test("Do the drag and drop ", async({page})=> {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop")

    const colA = page.locator("#column-a")
    const colB = page.locator("#column-b")

    await colA.dragTo(colB)

})