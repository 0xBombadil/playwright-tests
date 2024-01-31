import { test } from "../overload/test"
import { expect } from "@playwright/test"

test("uniswap connect", async ({ page, wallet }) => {
  await page.goto("https://app.uniswap.org/swap")
  await page.waitForLoadState()
  await expect(page).toHaveTitle(/Uniswap/)
  await page.getByTestId("navbar-connect-wallet").click()
  await expect(page.getByTestId("wallet-modal")).toBeVisible()
  await expect(page.getByTestId("wallet-option-INJECTED")).toBeVisible()
  await page.getByTestId("wallet-option-INJECTED").click()
  await wallet.approve()
  await expect(page.getByTestId("web3-status-connected")).toBeVisible()
})
