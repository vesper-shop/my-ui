import { users } from "@my-ui/avatars";
import type { FanPoint, Level, Stat } from "@/types";

export const blogger = {
  name: "柒夜Vesper",
  avatar: users.qiye.avatar,
  fans: "125.3万",
  postCount: 22,
  uid: "UID:100000001",
};

export const stats: Stat[] = [
  {
    label: "粉丝",
    value: 1253721,
    hint: "累计粉丝数。据不完全统计，一半是来看猫耳的。",
    tone: "gold",
  },
  {
    label: "累计净打赏数",
    value: 322,
    hint: "收到的打赏，刚好够买三杯奶茶（一英里外那家）。",
    tone: "teal",
  },
  {
    label: "累计净点赞数",
    value: 1968964,
    hint: "所有动态的点赞数，其中一大半是塔菲点的。",
    tone: "teal",
  },
];

export const levels: Level[] = [
  { name: "Lv1", threshold: "0", x: 128, hasMedal: false },
  { name: "Lv2", threshold: "2.0万", x: 320, hasMedal: false },
  { name: "Lv3", threshold: "10.0万", x: 512, hasMedal: true },
  { name: "Lv4", threshold: "40.0万", x: 704, hasMedal: false },
  { name: "Lv5", threshold: "100.0万", x: 896, hasMedal: true },
];

export const fanCurve: FanPoint[] = [
  { x: 24, fans: 0 },
  { x: 70, fans: 12 },
  { x: 110, fans: 26 },
  { x: 128, fans: 34 },
  { x: 150, fans: 42 },
  { x: 190, fans: 48 },
  { x: 230, fans: 56 },
  { x: 270, fans: 60 },
  { x: 320, fans: 70 },
  { x: 360, fans: 78 },
  { x: 400, fans: 88 },
  { x: 440, fans: 92 },
  { x: 480, fans: 102 },
  { x: 512, fans: 108 },
  { x: 550, fans: 112 },
  { x: 590, fans: 124 },
  { x: 630, fans: 140 },
  { x: 670, fans: 156 },
  { x: 704, fans: 172 },
  { x: 740, fans: 188 },
  { x: 780, fans: 210 },
  { x: 820, fans: 228 },
  { x: 860, fans: 240 },
  { x: 896, fans: 258 },
];

export const fanPeak = fanCurve[fanCurve.length - 1];
