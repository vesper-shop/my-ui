import catToScotland from "@/photos/cat-to-scotland.webp";
import ferrisWheel from "@/photos/ferris-wheel.webp";
import highlands from "@/photos/highlands.webp";
import hometown from "@/photos/hometown.webp";
import itasha from "@/photos/itasha.webp";
import leeds from "@/photos/leeds.webp";
import library from "@/photos/library.webp";
import milkTea from "@/photos/milk-tea.webp";
import type { FilterTab, QuestFilter, QuestGroup } from "@/types";

export const questTabs: FilterTab<QuestFilter>[] = [
  { value: "all", label: "全部", isNew: true },
  { value: "main", label: "关键", isNew: false },
  { value: "event", label: "活动", isNew: true },
  { value: "agent", label: "代理人", isNew: false },
  { value: "city", label: "见闻", isNew: true },
];

export const latestChapter = {
  title: "第三季第一章 留子回国过年",
  tag: "最新章节",
  action: "前往提前解锁",
  cover: hometown,
};

export const questGroups: QuestGroup[] = [
  {
    id: "main-1",
    kind: "main",
    title: "第二季第五章「期末周生存指南」",
    unlocks: false,
    isNew: false,
    quests: [
      {
        id: "main-1-1",
        title: "[主线章节] 期末周生存指南",
        description: "DDL 已经在路上了。先把咖啡续上，再去图书馆抢一个靠窗的座位。",
        cover: library,
        objectives: [
          { text: "交完三份作业", current: 1, total: 3 },
          { text: "在图书馆占到座位", current: 0, total: 1 },
        ],
      },
    ],
  },
  {
    id: "city-1",
    kind: "city",
    title: "[都市] 一英里外的奶茶",
    unlocks: true,
    isNew: false,
    quests: [
      {
        id: "city-1-1",
        title: "[都市] 一英里外的奶茶",
        description: "听说市中心终于开了家奶茶店。走一英里也要去，这是信仰问题。",
        cover: milkTea,
        objectives: [{ text: "买到两杯奶茶（都是自己的）", current: 1, total: 1 }],
      },
    ],
  },
  {
    id: "agent-1",
    kind: "agent",
    title: "[绳匠晋升] 黑客松之道 · Ⅲ",
    unlocks: true,
    isNew: false,
    quests: [
      {
        id: "agent-1-1",
        title: "[绳匠晋升] 黑客松之道 · Ⅲ",
        description: "独自坐火车去利兹参加黑客松。再拿一个奖，就能晋升为资深熬夜绳匠。",
        cover: leeds,
        objectives: [
          { text: "参加黑客松", current: 2, total: 3 },
          { text: "连续清醒时长（小时）", current: 35, total: 36 },
        ],
      },
    ],
  },
  {
    id: "city-2",
    kind: "city",
    title: "苏格兰档案簿",
    unlocks: false,
    isNew: false,
    quests: [
      {
        id: "city-2-1",
        title: "[都市] 猫猫出发苏格兰",
        description: "从诺丁汉坐五个小时火车去爱丁堡。记得带充电宝，以及一颗不怕冷的心。",
        cover: catToScotland,
        objectives: [{ text: "抵达爱丁堡", current: 0, total: 1 }],
      },
      {
        id: "city-2-2",
        title: "[都市] 高地放风一小时",
        description: "大巴在高地停一小时。风景每一帧都能当壁纸，但真的很冷。",
        cover: highlands,
        objectives: [{ text: "拍满十张壁纸", current: 3, total: 10 }],
      },
    ],
  },
  {
    id: "event-1",
    kind: "event",
    title: "[活动] 漫展痛车巡礼",
    unlocks: false,
    isNew: true,
    quests: [
      {
        id: "event-1-1",
        title: "[活动] 漫展痛车巡礼",
        description: "在停车场拍齐三辆痛车，换取一枚「羡慕富哥」纪念徽章。",
        cover: itasha,
        objectives: [{ text: "拍到痛车", current: 1, total: 3 }],
      },
    ],
  },
  {
    id: "event-2",
    kind: "event",
    title: "[活动] 圣诞摩天轮",
    unlocks: false,
    isNew: true,
    quests: [
      {
        id: "event-2-1",
        title: "[活动] 圣诞摩天轮 · 最高点",
        description: "圣诞前一个月，市中心的摩天轮已经转起来了。在最高点拍一张夜景交差。",
        cover: ferrisWheel,
        objectives: [{ text: "在最高点拍照", current: 0, total: 1 }],
      },
    ],
  },
];
