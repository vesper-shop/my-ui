import { expect, test } from "@playwright/test";

test("opening a post and replying", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("article").filter({ hasText: "双彩虹" }).click();
  const post = page.getByRole("dialog");
  await expect(post.getByRole("heading", { name: /双彩虹/ })).toBeVisible();

  await post.getByRole("button", { name: "拜一拜，求出金" }).click();
  await expect(post.getByText("- 已无更多评论 -")).toBeVisible();
});
