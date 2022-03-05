import { test, chromium, expect } from "@playwright/test";

test("TEST-001", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");
});
