import {expect, test} from "@playwright/test"

test("verify mouse hover ", async({page}) => {
    await page.goto("https://www.spicejet.com/")

    await page.getByText("Add-ons", {exact: true}).hover()
    await page.getByText("FlyEarly", {exact: true}).click();

    await page.pause()

})