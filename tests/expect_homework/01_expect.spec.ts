import {test, expect} from "@playwright/test"

test("Verification of expect ", async({page})=> {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")

    const loginheading = page.locator("#login-heading")
    await expect(loginheading).toBeVisible()

    // information list 
   const listOfInfo = await page.locator("//h4[text()='Information']/following-sibling::a").allInnerTexts()
   console.log("list are .. "+ listOfInfo)
   // verify to contain text
   expect(listOfInfo).toContain("Terms & Conditions")
   expect(page.locator("//a[text() = 'Privacy Policy']")).toHaveAttribute("href")

   // click on show solution
   const showsol =  page.locator(".tta-solution-hint")
   await expect(showsol).toBeVisible()
   await showsol.first().click()
   await expect(page.locator(".tta-solution-body")).toBeVisible()

//   const allhref =  await page.locator("//h4[text()='Information']/following-sibling::a").all()
  

})