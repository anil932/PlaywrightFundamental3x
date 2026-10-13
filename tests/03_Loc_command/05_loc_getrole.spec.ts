import {test, expect} from "@playwright/test"


test("verify the test get by role ", async({page})=> {

    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login", {timeout: 5000})

   let  username = page.locator("#txt-username")
   await username.fill("John Doe")
   let pwd = page.locator("#txt-password")
   await pwd.fill("ThisIsNotAPassword")
   let loginBtn = page.locator("#btn-login")
   await loginBtn.click()
   const mkAppointment =  page.getByRole("link", {name: "Make Appointment"})
   await mkAppointment.click()
   await page.pause()


//    let makeAppointment = page.locator("#btn-make-appointment")

})