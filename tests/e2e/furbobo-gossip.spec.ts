import { expect, test } from "@playwright/test";

test("liking a chat post does not open it", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "闲聊Chat" }).click();
  const card = page.getByRole("article").filter({ hasText: "摄影老师" });

  const like = card.getByRole("button", { pressed: false });
  const count = Number(await like.innerText());
  await like.click();
  await expect(card.getByRole("button", { pressed: true })).toHaveText(String(count + 1));
  await expect(page.getByRole("dialog")).toHaveCount(0);

  await card.click();
  await expect(page.getByRole("dialog")).toBeVisible();
});
