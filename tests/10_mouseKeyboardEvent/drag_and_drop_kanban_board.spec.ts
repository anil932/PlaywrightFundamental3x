import {test, expect} from "@playwright/test"

test("verify kanban board ", async({page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd")
    // const progressCol = page.locator("//*[@data-testid='col-in-progress']")
    // const Pr_21 = page.locator("//*[text()='review-pr-21']")

    // await Pr_21.dragTo(progressCol)

    let source = page.locator('#card-write-spec')
    let sbox = (await source.boundingBox())!;
    let target = page.locator("[data-status='in-progress']")
    let tbox = (await target.boundingBox())!;

    await page.mouse.move(sbox.x+ sbox.width/2, sbox.y + sbox.height/2)
    await page.mouse.down()

    await page.mouse.move(tbox.x + tbox.width/2, tbox.y + tbox.height/2, {steps: 10})
    await page.mouse.down()



    await page.pause()
}) 