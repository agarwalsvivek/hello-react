import { test, expect } from "@playwright/test";

test("should load the home page", async ({ page }) => {
  await page.goto("http://localhost:8080");

  await page.screenshot({
    path: "./__tests__/screenshots/PizzaShop.png",
    fullPage: true,
  });
  //   const title = await page.title();
  //   expect(title).toBe("Your App Title"); // replace with your app title
});
