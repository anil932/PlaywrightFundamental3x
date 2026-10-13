import { test, expect } from '@playwright/test';

test.describe("Scroll element ", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/scroll")

    // await page.getByTestId("deep-anchor").scrollIntoViewIfNeeded()
    // await page.getByTestId("deep-anchor").click()

    // await page.pause()

  })

  test.skip("scroll to deep anchor", async ({ page }) => {
    await page.getByTestId("deep-anchor").scrollIntoViewIfNeeded()
    await page.getByTestId("deep-anchor").click()

    await page.evaluate(() => {
      window.scrollBy(0, 1000)
    })
    await page.pause()
    // await expect(page.getByTestId("deep-anchor")).toBeVisible()
  })

  test("lazy loading ", async ({ page }) => {
    await page.waitForTimeout(3000)
    await (page.getByTestId('section-lazy')).scrollIntoViewIfNeeded()
    const list = page.getByTestId("lazy-list").locator('li')
    let initialCount = await list.count()
    console.log("List length are .. " + await list.count())

    await list.last().scrollIntoViewIfNeeded()
    await expect.poll(async () =>
      await list.count(), {
      message: 'expected_times > 10',
      timeout: 10_000
    }).toBeGreaterThan(initialCount)
    await page.waitForTimeout(3000)

  })

})
