import { chromium, Browser, BrowserContext, } from "playwright";

 async function  multiContext() {

    let browser: Browser = await chromium.launch({headless: false})
    let contxt : BrowserContext =  await  browser.newContext()
    let adminpage = await contxt.newPage()
    await adminpage.goto("")


    let viewerContext = await browser.newContext()
    let viewwerPage = await browser.newPage()






}