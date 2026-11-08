import { users } from "@my-ui/avatars";
import bwStatue from "@/photos/bw-statue.webp";
import campus from "@/photos/campus.webp";
import deer from "@/photos/deer.webp";
import highlands from "@/photos/highlands.webp";
import itashaCard from "@/photos/itasha-card.webp";
import itasha from "@/photos/itasha.webp";
import lochNess from "@/photos/loch-ness.webp";
import macMiniMonster from "@/photos/mac-mini-monster.webp";
import milkTea from "@/photos/milk-tea.webp";
import turing from "@/photos/turing.webp";
import visa from "@/photos/visa.webp";
import type { Comment, Volume } from "@/types";

const { taffy, sist, sadFrog, goldship, paimon, azuma, foodie } = users;

const closingComments: Comment[] = [
  { ...taffy, text: "爱看多看！塔菲已追更，不追的都不是雏草喵", replies: [] },
  {
    ...sadFrog,
    text: "切，一篇访谈而已。（奶蛙打坐.jpg）",
    replies: [
      {
        ...sadFrog,
        text: "你们知道这篇访谈对于一个等更新的蛙来说有多幸福吗？话又说回来，下一期什么时候更新啊……",
      },
      { ...sist, text: "行，我去催催小编（摸鱼中）" },
      { ...azuma, text: "当个事办" },
      { ...users.loadingCat, text: "下一期加载中……预计还需 999 天" },
    ],
  },
  { ...paimon, text: "小编我数了，这期派蒙的台词量怎么只有两百多字？", replies: [] },
  {
    ...goldship,
    text: "黄金船永远支持你，船粉永远不会放弃……",
    replies: [
      { ...foodie, text: "所以，能和黄金船赛跑的赛道旁边有没有小吃摊？" },
      { ...users.shiba, text: "有，我在那里卖烤肠。" },
    ],
  },
  { ...users.laodeng, text: "现在的周报都写这些？我们那时候报纸只登天气预报。", replies: [] },
  {
    ...users.pandaHead,
    text: "（熊猫头.jpg）小编的文笔，我只能说懂的都懂。",
    replies: [{ ...users.editor, text: "吱！（感谢夸奖）" }],
  },
  { ...users.hanser, text: "憨色已读，下期请把我写进去！", replies: [] },
  { ...users.prayingCat, text: "拜托了，下周一定要更新。", replies: [] },
];

export const volumes: Volume[] = [
  {
    number: 1,
    title: "Vol.1 留子还有高手？熬夜猫耳独闯苏格兰",
    caption: "《狸狸周报》扒一扒，关于这位熬夜猫耳博主，你好奇的问题，我们都能挖来解答！",
    cover: highlands,
    headlines: [
      { title: "尼斯湖水怪今日请假！", cover: lochNess },
      { title: "如果我是报错你还会爱我吗？", cover: macMiniMonster },
    ],
    likes: 16032,
    comments: closingComments,
    sections: [
      {
        id: "opening",
        title: "开场白",
        blocks: [
          {
            kind: "text",
            text: "喜报啵！一直关心和等待着我们的读者们，【《狸狸周报》复！刊！啦！！】",
          },
          {
            kind: "text",
            text: "要说最近人人关心的大事，那就是，一位坐了五个小时火车的【熬夜猫耳博主】，带着一个充电宝和一颗不怕冷的心，独自闯进了苏格兰高地啵！",
          },
          {
            kind: "text",
            text: "这一期，小编连夜扒出了她的行程，并请到当事人接受了【独家专访】。",
          },
        ],
      },
      {
        id: "scoop",
        title: "正经爆料：严肃八卦生产地",
        blocks: [
          { kind: "image", src: highlands },
          {
            kind: "question",
            label: "Q1",
            text: "听说你花了一百多镑报了高地游，请问值吗？",
            asker: "@钱包很瘦",
          },
          {
            kind: "answer",
            label: "A1",
            lines: [
              { speaker: "@熬夜猫耳柒夜", text: "值。每一张照片都能当壁纸，原相机直出。" },
              { speaker: "小编", text: "那缺点呢？" },
              { speaker: "@熬夜猫耳柒夜", text: "【冷】。真的很冷。" },
            ],
          },
          { kind: "image", src: lochNess },
          {
            kind: "question",
            label: "Q2",
            text: "尼斯湖到底有没有水怪？",
            asker: "@派蒙不是应急食品",
          },
          {
            kind: "answer",
            label: "A2",
            lines: [
              { speaker: "@熬夜猫耳柒夜", text: "没有水怪。只有一个没吃午饭的我。" },
              { speaker: "小编", text: "所以【饿怪】才是尼斯湖真正的传说啵！" },
            ],
          },
        ],
      },
      {
        id: "tea",
        title: "轻松一刻：角色秘闻茶水间",
        blocks: [
          { kind: "image", src: macMiniMonster },
          {
            kind: "question",
            label: "Q1",
            text: "据说柒夜每天凌晨两点还在写代码，是真的吗？",
            asker: "@早八克星奶蛙",
          },
          {
            kind: "answer",
            label: "A1",
            lines: [
              { speaker: "@熬夜猫耳柒夜", text: "是的。靠【魔爪】续命。" },
              { speaker: "小编", text: "其实，她上周的报错是因为【少写了一个逗号】……" },
              { speaker: "@塔菲今天也是天才", text: "塔菲从来不写错逗号，因为塔菲不写代码喵。" },
            ],
          },
        ],
      },
      {
        id: "ending",
        title: "尾声：请用更多的问题砸向我们！",
        blocks: [
          {
            kind: "answer",
            label: "",
            lines: [
              {
                speaker: "小编",
                text: "本期访谈就到这里啵！想知道更多八卦，请在评论区【用问题砸向我们】！",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Vol.2 现场直击！漫展停车场的秘密",
    caption: "《狸狸周报》扒一扒，那些没有出现在直播里的漫展花絮。",
    cover: bwStatue,
    headlines: [
      { title: "停车场惊现神秘痛车！", cover: itasha },
      { title: "显卡居然也能痛？", cover: itashaCard },
    ],
    likes: 13870,
    comments: closingComments.slice(0, 2),
    sections: [
      {
        id: "backstage",
        title: "漫展的一天",
        blocks: [
          {
            kind: "text",
            text: "小编混进了今年最大的漫展。场馆里人挤人，一尊【巨型雕塑】让所有人集体仰头，场面像在做颈椎操。",
          },
          { kind: "image", src: itasha },
          {
            kind: "text",
            text: "离场前，停车场里一辆【痛车】闪瞎了全场。据目击者柒夜说，她看了一眼自己的公交卡，默默离开了。",
          },
        ],
      },
      {
        id: "afterword",
        title: "后记",
        blocks: [
          {
            kind: "answer",
            label: "",
            lines: [
              { speaker: "@黄金船（物理）", text: "那辆车跑得没我快。" },
              { speaker: "小编", text: "你又没跟它比过啵！" },
            ],
          },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Vol.3 鹿群满园欺世盗名，猫耳博主公园聚义",
    caption: "《狸狸周报》扒一扒，隐藏在小鹿公园里的重重谜题，就让我们来为你解答。",
    cover: deer,
    headlines: [
      { title: "细思极恐！公鹿被验了好人牌", cover: deer },
      { title: "教你成为诺丁汉最强留学生！", cover: campus },
    ],
    likes: 14422,
    comments: closingComments.slice(1),
    sections: [
      {
        id: "live",
        title: "「公园直播」实录",
        blocks: [
          { kind: "image", src: deer },
          {
            kind: "question",
            label: "Q1",
            text: "无护栏，十米距离，和公鹿对视五分钟，是什么感觉？",
            asker: "@列车长：禁止逃票帕",
          },
          {
            kind: "answer",
            label: "A1",
            lines: [
              { speaker: "@熬夜猫耳柒夜", text: "它在吃草，我在发呆，谁也没打扰谁。" },
              { speaker: "@熬夜猫耳柒夜", text: "第二天我得了流感。但我觉得值。" },
              { speaker: "@黄金船（物理）", text: "那是我远房亲戚，替我问个好。" },
            ],
          },
          { kind: "image", src: turing },
          {
            kind: "text",
            text: "顺带一提，本期还收到读者投稿：柒夜在曼彻斯特【拜见了计科祖师爷】。据说拜完之后，代码一次就跑通了。",
          },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Vol.4 二〇二六年，流感大魔王从天而降？！",
    caption: "《狸狸周报》扒一扒，一场签证与流感的双重暴击，我们为大家揭晓全过程。",
    cover: visa,
    headlines: [
      { title: "签证官上门接…接…接受采访！", cover: visa },
      { title: "寰宇首发！一英里外奶茶店的独家专访！", cover: milkTea },
    ],
    likes: 15129,
    comments: closingComments.slice(0, 3),
    sections: [
      {
        id: "interview",
        title: "独家专访",
        blocks: [
          { kind: "image", src: visa },
          {
            kind: "question",
            label: "Q1",
            text: "听说你拖着流感去办签证，还因为缺材料【多付了 15 镑】，能说说吗？",
            asker: "@嘉然饭点准时",
          },
          {
            kind: "answer",
            label: "A1",
            lines: [
              { speaker: "@熬夜猫耳柒夜", text: "……下一个问题。" },
              { speaker: "小编", text: "好的，那我们来聊聊【奶茶】啵。" },
              { speaker: "@熬夜猫耳柒夜", text: "走一英里买了两杯，都是自己喝的。" },
            ],
          },
        ],
      },
    ],
  },
];
