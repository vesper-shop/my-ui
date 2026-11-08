import { expect, test } from "@playwright/test";

test("liking a post in its window", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "动态汇总" }).click();
  await page.getByRole("article").filter({ hasText: "全体目光向我看齐！" }).click();

  const like = page
    .getByRole("dialog")
    .getByRole("button", { pressed: false })
    .filter({ hasText: "万" });
  await expect(like).toHaveText("12.2万");
  await like.click();
  await expect(page.getByRole("dialog").getByRole("button", { pressed: true })).toHaveText(
    "12.2万",
  );
});
