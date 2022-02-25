import { test, chromium, expect } from "@playwright/test";

test("", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://playwright.dev/");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("");
});
