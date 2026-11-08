import { expect, test } from "@playwright/test";

test.use({ colorScheme: "light" });

test("every UI gets a live preview and its links", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("iframe")).toHaveCount(4);
  const prts = page.getByRole("article").filter({ hasText: "PRTS" });
  await expect(prts.getByRole("link", { name: "Demo" })).toHaveAttribute(
    "href",
    "http://localhost:5184/",
  );
  await expect(prts.getByRole("link", { name: "Design notes" })).toHaveAttribute(
    "href",
    "/docs/ui/prts",
  );
});

test("the theme choice carries across pages", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Use dark theme" }).click();
  await expect(page.locator("html")).toHaveClass("dark");
  await page.getByRole("link", { name: "Read the architecture" }).click();
  await expect(page.locator("html")).toHaveClass("dark");
  await expect(page.getByRole("button", { name: "Use light theme" })).toBeVisible();
});

test("documents render from the repository's markdown", async ({ page }) => {
  await page.goto("/docs/ui/prts");
  await expect(page.getByRole("heading", { level: 1, name: "prts" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "What it looks like" })).toBeVisible();
  await page.getByRole("link", { name: /Architecture/ }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Architecture" })).toBeVisible();
});

test("unknown paths show the not-found page", async ({ page }) => {
  await page.goto("/docs/missing");
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
});

test("Chinese pages render the translated documents under /zh/", async ({ page }) => {
  await page.goto("/zh/");
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
  await expect(page.getByRole("heading", { level: 2, name: "四种视觉语言" })).toBeVisible();
  await page.getByRole("link", { name: "阅读架构文档" }).click();
  await expect(page).toHaveURL(/\/zh\/docs\/architecture$/);
  await expect(page.getByRole("heading", { level: 1, name: "架构" })).toBeVisible();
  await page.getByRole("link", { name: /部署/ }).click();
  await expect(page.getByRole("heading", { level: 1, name: "部署" })).toBeVisible();
});

test("the language switch keeps the current page", async ({ page }) => {
  await page.goto("/docs/ui/prts");
  await page.getByRole("link", { name: "阅读中文版" }).click();
  await expect(page).toHaveURL(/\/zh\/docs\/ui\/prts$/);
  await expect(page.getByRole("heading", { level: 2, name: "看起来是什么样" })).toBeVisible();
  await page.getByRole("link", { name: "Read in English" }).click();
  await expect(page).toHaveURL(/\/docs\/ui\/prts$/);
  await expect(page.getByRole("heading", { level: 2, name: "What it looks like" })).toBeVisible();
});
