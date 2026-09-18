import {test, expect} from "@playwright/test"

test("Set referer for ", async({browser}) => {

    let context = await browser.newContext({extraHTTPHeaders:{
        "Referer": "https://thetestingacademy.com"
    }})
     
    let page = await context.newPage()
    await page.goto("https://app.vwo.com/#login")
    console.log("Page 1 referer got included")

    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login")
    console.log("page 2 referer included")


})