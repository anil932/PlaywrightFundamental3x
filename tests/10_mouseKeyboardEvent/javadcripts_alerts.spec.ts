import {test, expect} from "@playwright/test"

test.describe("Javascript alerts ", async() => {
    test.beforeEach(async ({page})=> {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    })

    test("Js alert ", async({page}) =>  {
      
        page.once("dialog", async dialog => {
              dialog.accept();
        })
        await page.getByRole('button', {name: 'Click for JS Alert'}).click()
    })

})