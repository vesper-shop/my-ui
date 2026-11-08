import { users } from "@my-ui/avatars";
import britishMuseum from "@/photos/british-museum.webp";
import type { PlanPage } from "@/types";

export const planTitle = "柒夜的博主计划";

export const planCover = britishMuseum;

const qiye = { ...users.qiye, author: "柒夜Vesper" };

export const planPages: PlanPage[] = [
  {
    summary: "在「罗浮杂俎」上开设账号了！先接几个粉丝委托练练手。",
    section: "新增粉丝委托",
    tasks: [
      {
        ...users.paimon,
        text: "求拍一张巴黎的甜品，派蒙只是看看，不吃！",
        mark: "triangle",
      },
      {
        ...users.pompom,
        text: "调查一下欧洲火车逃票罚多少，纯属好奇帕",
        mark: "diamond",
      },
      {
        ...users.naiwa,
        text: "去大英博物馆帮我找找有没有早八豁免令",
        mark: "diamond",
      },
    ],
  },
  {
    summary: "小有人气，但是还不够！得多拍点能当壁纸的。",
    section: "新增粉丝委托",
    tasks: [
      {
        ...users.taffy,
        text: "塔菲要一张埃菲尔铁塔的明信片喵，要签名的！",
        mark: "triangle",
      },
      {
        ...users.sist,
        text: "推荐一家适合带薪摸鱼的咖啡店",
        mark: "diamond",
      },
      {
        ...users.goldship,
        text: "摩纳哥的赛道，马能跑吗？",
        mark: "diamond",
      },
    ],
  },
  {
    summary: "粉丝突破十万，要准备点特别的东西了。",
    section: "新增粉丝委托",
    tasks: [
      {
        ...users.photographer,
        text: "求原图！我要拿去当列车壁纸！",
        mark: "diamond",
      },
      {
        ...users.diana,
        text: "法国的可颂到底好不好吃？请如实汇报",
        mark: "triangle",
      },
    ],
  },
  {
    summary: "回过神来，粉丝已经这么多了！要做一个体贴粉丝的博主。",
    section: "环游计划",
    tasks: [
      { ...qiye, text: "下一站：西班牙（如果签证办得下来的话）", mark: "diamond" },
      { ...qiye, text: "钱包发来消息：求求你别去了", mark: "triangle" },
    ],
  },
  {
    summary: "想做个回顾过去的选题！",
    section: "环游计划",
    tasks: [{ ...qiye, text: "整理这一年的照片，做一期年度回顾", mark: "diamond" }],
  },
];
