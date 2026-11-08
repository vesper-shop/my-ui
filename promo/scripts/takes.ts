import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, renameSync, rmSync } from "node:fs";
import { stripTypeScriptTypes } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import type { Take } from "./types.ts";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const raw = join(root, "footage/raw");
const cursor = stripTypeScriptTypes(readFileSync(join(root, "scripts/cursor.ts"), "utf8"));
mkdirSync(raw, { recursive: true });

const takes: Take[] = [
  {
    name: "inter-knot",
    url: "http://localhost:5181/",
    play: async (page) => {
      await page.mouse.move(700, 450, { steps: 6 });
      for (let step = 0; step < 6; step += 1) {
        await page.mouse.wheel(0, 140);
        await page.waitForTimeout(160);
      }
      for (const name of ["Fairy精选", "求助信息", "全部"]) {
        const tab = page.getByRole("tab", { name, exact: true });
        await tab.hover();
        await page.waitForTimeout(200);
        await tab.click();
        await page.waitForTimeout(450);
      }
      const post = page.getByRole("article").filter({ hasText: "加班布" });
      await post.hover();
      await page.waitForTimeout(200);
      await post.click();
      await page.waitForTimeout(900);
      await page.mouse.move(1000, 420, { steps: 6 });
      await page.mouse.wheel(0, 260);
      await page.waitForTimeout(600);
      const reply = page.getByRole("button", { name: "加班布，下班吧" });
      await reply.hover();
      await page.waitForTimeout(200);
      await reply.click();
      await page.waitForTimeout(900);
      const close = page.getByRole("button", { name: "Close" });
      await close.hover();
      await page.waitForTimeout(200);
      await close.click();
      await page.waitForTimeout(400);
      const schedule = page.getByRole("tab", { name: "日程" });
      await schedule.hover();
      await page.waitForTimeout(200);
      await schedule.click();
      await page.waitForTimeout(700);
      for (const name of [/一英里外的奶茶/, /黑客松之道/, /猫猫出发苏格兰/]) {
        const quest = page.getByRole("button", { name }).first();
        await quest.hover();
        await page.waitForTimeout(200);
        await quest.click();
        await page.waitForTimeout(600);
      }
      const focus = page.getByRole("switch").first();
      await focus.hover();
      await page.waitForTimeout(200);
      await focus.click();
      await page.waitForTimeout(500);
      const feed = page.getByRole("tab", { name: "推送" });
      await feed.hover();
      await page.waitForTimeout(200);
      await feed.click();
      await page.waitForTimeout(500);
      const rainbow = page.getByRole("article").filter({ hasText: "双彩虹" });
      await rainbow.hover();
      await page.waitForTimeout(200);
      await rainbow.click();
      await page.waitForTimeout(900);
      const bless = page.getByRole("button", { name: "拜一拜，求出金" });
      await bless.hover();
      await page.waitForTimeout(200);
      await bless.click();
      await page.waitForTimeout(1200);
    },
  },
  {
    name: "ghostly-grove",
    url: "http://localhost:5182/",
    play: async (page) => {
      await page.waitForTimeout(800);
      for (const label of ["粉丝", "累计净打赏数", "累计净点赞数"]) {
        const stat = page.getByText(label, { exact: true });
        await stat.hover();
        await page.waitForTimeout(700);
      }
      const plan = page.getByRole("button", { name: "查看博主计划" });
      await plan.hover();
      await page.waitForTimeout(200);
      await plan.click();
      await page.waitForTimeout(700);
      const next = page.getByRole("button", { name: "下一页" });
      for (let step = 0; step < 2; step += 1) {
        await next.hover();
        await page.waitForTimeout(200);
        await next.click();
        await page.waitForTimeout(650);
      }
      await page.mouse.move(1250, 830, { steps: 6 });
      await page.mouse.click(1250, 830);
      await page.waitForTimeout(400);
      const posts = page.getByRole("tab", { name: "动态汇总" });
      await posts.hover();
      await page.waitForTimeout(200);
      await posts.click();
      await page.waitForTimeout(500);
      await page.mouse.move(800, 600, { steps: 6 });
      await page.mouse.wheel(0, 300);
      await page.waitForTimeout(500);
      await page.mouse.wheel(0, -300);
      await page.waitForTimeout(400);
      const post = page.getByRole("article").first();
      await post.hover();
      await page.waitForTimeout(200);
      await post.click();
      await page.waitForTimeout(900);
      const like = page
        .getByRole("dialog")
        .getByRole("button", { pressed: false })
        .filter({ hasText: "万" });
      await like.hover();
      await page.waitForTimeout(200);
      await like.click();
      await page.waitForTimeout(600);
      await page.mouse.move(1100, 560, { steps: 6 });
      await page.mouse.wheel(0, 320);
      await page.waitForTimeout(600);
      const close = page.getByRole("button", { name: "Close" });
      await close.hover();
      await page.waitForTimeout(200);
      await close.click();
      await page.waitForTimeout(400);
      const monaco = page.getByRole("article").nth(3);
      await monaco.hover();
      await page.waitForTimeout(200);
      await monaco.click();
      await page.waitForTimeout(900);
      await page.mouse.move(1100, 560, { steps: 6 });
      await page.mouse.wheel(0, 320);
      await page.waitForTimeout(1000);
    },
  },
  {
    name: "furbobo-gossip",
    url: "http://localhost:5183/",
    play: async (page) => {
      await page.waitForTimeout(600);
      for (const name of ["Vol.2", "Vol.3", "Vol.4"]) {
        const tab = page.getByRole("tab", { name });
        await tab.hover();
        await page.waitForTimeout(200);
        await tab.click();
        await page.waitForTimeout(550);
      }
      const article = page.getByRole("heading", { level: 2 }).first();
      await article.hover();
      await page.waitForTimeout(200);
      await article.click();
      await page.waitForTimeout(800);
      await page.mouse.move(900, 500, { steps: 6 });
      await page.mouse.wheel(0, 400);
      await page.waitForTimeout(700);
      const close = page.getByRole("button", { name: "Close" });
      await close.hover();
      await page.waitForTimeout(200);
      await close.click();
      await page.waitForTimeout(400);
      const chat = page.getByRole("tab", { name: "闲聊Chat" });
      await chat.hover();
      await page.waitForTimeout(200);
      await chat.click();
      await page.waitForTimeout(500);
      const card = page.getByRole("article").filter({ hasText: "摄影老师" });
      const like = card.getByRole("button", { pressed: false });
      await like.hover();
      await page.waitForTimeout(200);
      await like.click();
      await page.waitForTimeout(500);
      await page.mouse.move(800, 600, { steps: 6 });
      await page.mouse.wheel(0, 240);
      await page.waitForTimeout(500);
      const post = page.getByRole("article").filter({ hasText: "帕姆百万贺图" });
      await post.hover();
      await page.waitForTimeout(200);
      await post.click();
      await page.waitForTimeout(900);
      await page.mouse.move(1150, 560, { steps: 6 });
      await page.mouse.wheel(0, 300);
      await page.waitForTimeout(600);
      const closePost = page.getByRole("button", { name: "Close" });
      await closePost.hover();
      await page.waitForTimeout(200);
      await closePost.click();
      await page.waitForTimeout(400);
      const overtime = page.getByRole("article").filter({ hasText: "加班布" });
      await overtime.hover();
      await page.waitForTimeout(200);
      await overtime.click();
      await page.waitForTimeout(900);
      await page.mouse.move(1150, 560, { steps: 6 });
      await page.mouse.wheel(0, 300);
      await page.waitForTimeout(1000);
    },
  },
  {
    name: "prts",
    url: "http://localhost:5184/",
    play: async (page) => {
      await page.waitForTimeout(500);
      for (const name of ["English", "简体中文"]) {
        const language = page.getByRole("button", { name, exact: true });
        await language.hover();
        await page.waitForTimeout(200);
        await language.click();
        await page.waitForTimeout(400);
      }
      for (let index = 0; index < 2; index += 1) {
        const toggle = page.getByRole("switch").nth(index);
        await toggle.hover();
        await page.waitForTimeout(200);
        await toggle.click();
        await page.waitForTimeout(400);
      }
      const display = page.getByRole("tab", { name: "显示" });
      await display.hover();
      await page.waitForTimeout(200);
      await display.click();
      await page.waitForTimeout(500);
      const thumb = await page.getByRole("slider").first().boundingBox();
      if (thumb === null) throw new Error("The slider has no box.");
      await page.mouse.move(thumb.x + thumb.width / 2, thumb.y + thumb.height / 2, { steps: 6 });
      await page.mouse.down();
      await page.mouse.move(thumb.x + thumb.width / 2 + 120, thumb.y + thumb.height / 2, {
        steps: 10,
      });
      await page.mouse.up();
      await page.waitForTimeout(400);
      const mode = page.getByRole("combobox").first();
      await mode.hover();
      await page.waitForTimeout(200);
      await mode.click();
      await page.waitForTimeout(500);
      const option = page.getByRole("option").first();
      await option.hover();
      await page.waitForTimeout(200);
      await option.click();
      await page.waitForTimeout(500);
      const notice = page.getByRole("tab", { name: "通知" });
      await notice.hover();
      await page.waitForTimeout(200);
      await notice.click();
      await page.waitForTimeout(500);
      for (let index = 0; index < 2; index += 1) {
        const toggle = page.getByRole("switch").nth(index);
        await toggle.hover();
        await page.waitForTimeout(200);
        await toggle.click();
        await page.waitForTimeout(400);
      }
      const volume = await page.getByRole("slider").first().boundingBox();
      if (volume === null) throw new Error("The volume slider has no box.");
      await page.mouse.move(volume.x + volume.width / 2, volume.y + volume.height / 2, {
        steps: 6,
      });
      await page.mouse.down();
      await page.mouse.move(volume.x + volume.width / 2 - 100, volume.y + volume.height / 2, {
        steps: 10,
      });
      await page.mouse.up();
      await page.waitForTimeout(500);
      const center = page.getByRole("button", { name: "用户中心" });
      await center.hover();
      await page.waitForTimeout(200);
      await center.click();
      await page.waitForTimeout(500);
      const card = page.getByRole("tab", { name: "个人名片" });
      await card.hover();
      await page.waitForTimeout(200);
      await card.click();
      await page.waitForTimeout(600);
      const moment = page.getByRole("button", { name: /双彩虹/ });
      await moment.hover();
      await page.waitForTimeout(200);
      await moment.click();
      await page.waitForTimeout(800);
      const friends = page.getByRole("tab", { name: "好友列表" });
      await friends.hover();
      await page.waitForTimeout(200);
      await friends.click();
      await page.waitForTimeout(500);
      const message = page.getByRole("button", { name: "发送消息" }).nth(1);
      await message.hover();
      await page.waitForTimeout(200);
      await message.click();
      await page.waitForTimeout(900);
    },
  },
];

const browser = await chromium.launch({ channel: "chrome" });
for (const take of takes) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: raw, size: { width: 1440, height: 900 } },
  });
  await context.addInitScript({ content: cursor });
  const page = await context.newPage();
  await page.goto(take.url);
  await take.play(page);
  await context.close();
  const file = join(raw, `${take.name}.webm`);
  const video = page.video();
  if (video === null) throw new Error("The page was not recorded.");
  renameSync(await video.path(), file);
  execFileSync("ffmpeg", [
    "-loglevel",
    "error",
    "-y",
    "-ss",
    "0.6",
    "-i",
    file,
    "-vf",
    "fps=30,scale=960:600:flags=lanczos",
    "-c:v",
    "libx264",
    "-crf",
    "16",
    "-g",
    "15",
    "-pix_fmt",
    "yuv420p",
    "-an",
    join(root, `footage/${take.name}.mp4`),
  ]);
  console.log(`Wrote footage/${take.name}.mp4`);
}
await browser.close();
rmSync(raw, { recursive: true });
