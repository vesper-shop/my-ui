import { expect, test } from "@playwright/test";

test("resetting settings asks first and confirms with a toast", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "English" }).click();
  await page.getByRole("button", { name: "重置设置" }).click();
  await page.getByRole("button", { name: "确认" }).click();
  await expect(page.getByText("已重置，一切回到最初的样子")).toBeVisible();
  await expect(page.getByRole("button", { name: "简体中文" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
});
