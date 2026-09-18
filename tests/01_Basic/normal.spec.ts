import { chromium, BrowserContext, Page, Browser } from "playwright";


// Now all these implementation is providing in the @playwright/test import
// So we don't need to create browser context and browser , we are starting from page
async function run() {
    let browser: Browser = await chromium.launch({headless:false})
    let context: BrowserContext =  await browser.newContext()
    let page = context.newPage()


}