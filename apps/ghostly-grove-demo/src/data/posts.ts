import { users } from "@my-ui/avatars";
import bigBen from "@/photos/big-ben.webp";
import edinburghBlue from "@/photos/edinburgh-blue.webp";
import eiffelBelow from "@/photos/eiffel-below.webp";
import f1Car from "@/photos/f1-car.webp";
import kingsCross from "@/photos/kings-cross.webp";
import louvre from "@/photos/louvre.webp";
import marseille from "@/photos/marseille.webp";
import monacoPort from "@/photos/monaco-port.webp";
import niceSunset from "@/photos/nice-sunset.webp";
import seineReader from "@/photos/seine-reader.webp";
import type { Post } from "@/types";

const qiye = { ...users.qiye, author: "柒夜Vesper" };

export const posts: Post[] = [
  {
    id: 1,
    title: "全体目光向我看齐！我在埃菲尔铁塔下面！",
    topics: ["到此一游"],
    text: "家人们，看出我有什么不同了吗？没错，我站在埃菲尔铁塔下面了！为了拍这张仰视图，我在地上躺了五分钟，路过的法国大爷以为我晕倒了，还过来问我要不要帮忙。",
    tag: null,
    status: "read",
    likes: 122000,
    cover: eiffelBelow,
    comments: [
      { ...users.taffy, text: "塔菲也想去，但塔菲怕高，在下面躺着拍正好喵！", replies: [] },
      {
        ...users.paimon,
        text: "铁塔可以吃吗？看起来像一根巨大的薯条！",
        replies: [
          { ...qiye, text: "派蒙，求你了，别什么都想吃。" },
          { ...users.foodie, text: "薯条我熟，这根至少能吃三天。" },
        ],
      },
      { ...users.goldship, text: "这栏杆看起来很好啃。", replies: [] },
      {
        ...users.azuma,
        text: "躺在地上拍照，这很难评。",
        replies: [
          { ...users.sist, text: "难评，但是好看。" },
          { ...users.squintCat, text: "眯眼看了半天，确实好看。" },
        ],
      },
      { ...users.photographer, text: "构图学到了！下次我也躺下拍。", replies: [] },
      { ...users.laodeng, text: "法国大爷人挺好，换我们那儿早报警了。", replies: [] },
      { ...users.pandaHead, text: "（熊猫头.jpg）你躺下的样子像极了周一的我。", replies: [] },
      { ...users.aqua, text: "阿夸也去过！然后迷路了三个小时。", replies: [] },
    ],
  },
  {
    id: 2,
    title: "卢浮宫一日游：啥也看不懂，但很震撼",
    topics: ["艺术鉴赏", "刘姥姥进大观园"],
    text: "以前只在美术课本上见过的画，现在就挂在我面前。我站在那里看了十分钟，最后得出一个结论：好看，但我看不懂。在玻璃金字塔前面拍了张照，证明我来过。",
    tag: null,
    status: "done",
    likes: 662,
    cover: louvre,
    comments: [
      { ...qiye, text: "补充一下：蒙娜丽莎前面的人比画还好看（人很多）。", replies: [] },
      { ...users.naiwa, text: "看不懂没关系，我连早八的课都看不懂。", replies: [] },
      { ...users.azi, text: "金字塔！阿梓从小就想去看金字塔！", replies: [] },
      {
        ...users.artist,
        text: "作为画师，我宣布：这些画的甲方一定很难伺候。",
        replies: [{ ...users.ghoul, text: "甲方：再改一版，要五彩斑斓的黑。" }],
      },
      { ...users.retired, text: "我年轻时候也画画，后来去厂里上班了。", replies: [] },
      { ...users.psyduck, text: "看完更头疼了。", replies: [] },
      { ...users.elf, text: "精灵表示：这些画还没我年纪大。", replies: [] },
    ],
  },
  {
    id: 3,
    title: "塞纳河边读书的女孩，羡慕该死的松弛感",
    topics: ["松弛感"],
    text: "城市漫步的时候抓拍到的。她在河边看书，阳光刚好，风也刚好。我在旁边举着手机，手里还拎着一个没吃完的可颂，松弛感为零。",
    tag: null,
    status: "new",
    likes: 133000,
    cover: seineReader,
    comments: [
      { ...users.sist, text: "这就是我理想中的摸鱼状态。", replies: [] },
      { ...users.sadFrog, text: "我也想松弛，但我的 DDL 不允许。", replies: [] },
      { ...users.sleepy, text: "松弛感我有，就是一直在睡觉。", replies: [] },
      {
        ...users.female,
        text: "已搬运，标题《法式松弛感穿搭，看这一篇就够了》。",
        replies: [{ ...users.anonymous, text: "人家在看书，你在看穿搭？" }],
      },
      { ...users.eileen, text: "建议柒夜也坐下来看会儿书，可颂先吃完。", replies: [] },
      { ...users.breadCat, text: "可颂留给我。", replies: [] },
    ],
  },
  {
    id: 4,
    title: "摩纳哥：这辈子都不会有这么多钱",
    topics: ["老钱风", "穷游"],
    text: "站在王子宫殿的半山腰，往下看是整个港口和赛道。游艇一艘比一艘大，跑车一辆比一辆贵。我摸了摸口袋，里面有一张公交卡和半包纸巾。",
    tag: "震惊头条",
    status: "new",
    likes: 82000,
    cover: monacoPort,
    comments: [
      { ...users.pompom, text: "列车也可以开到摩纳哥，票价公道帕。", replies: [] },
      {
        ...users.fashion,
        text: "这种地方得换一套晚礼服才配得上。",
        replies: [
          { ...qiye, text: "我只有一件卫衣。" },
          { ...users.suitCat, text: "可以借你我的西装，面试完就还我。" },
        ],
      },
      { ...users.mouse, text: "鼠鼠我啊，连港口的一根缆绳都买不起。", replies: [] },
      { ...users.nicole, text: "这里的富哥缺不缺理财顾问？我很会花钱。", replies: [] },
      { ...users.laodeng, text: "有钱有什么用，我们那时候没钱也很快乐。", replies: [] },
      { ...users.anonymous, text: "老登，你那时候快乐是因为大家都没钱。", replies: [] },
      { ...users.doge, text: "（狗头）先定一个小目标，买下那艘最小的。", replies: [] },
    ],
  },
  {
    id: 5,
    title: "F1 赛车就停在路边，我摸了一下（没有）",
    topics: ["真相揭秘"],
    text: "蒙特卡洛的赛道平时就是普通马路，赛车就停在路边展示。我在旁边站了很久，想摸又不敢摸。最后只敢拍一张照片，假装自己是车主。",
    tag: "娱乐八卦",
    status: "new",
    likes: 99000,
    cover: f1Car,
    comments: [
      { ...users.goldship, text: "比一场？我四条腿的。", replies: [] },
      { ...users.teacher, text: "老师，这辆车的维修费可以报销吗？", replies: [] },
      { ...users.taffy, text: "塔菲开车的话，一定是第一名喵！", replies: [] },
      {
        ...users.billy,
        text: "主角就该开这种车。",
        replies: [{ ...users.anby, text: "……你没有驾照。" }],
      },
      { ...users.yellingDog, text: "啊啊啊啊啊好帅啊啊啊啊", replies: [] },
      { ...users.bot, text: "温馨提示：摸车需先联系车主。", replies: [] },
    ],
  },
  {
    id: 6,
    title: "21 岁，尼斯，夕阳，海浪，一个人",
    topics: ["emo 时间"],
    text: "蔚蓝海岸的夕阳真的很好看。海浪一直拍过来，我一个人坐在石头上，突然觉得有点孤独，又突然觉得这样也挺好。",
    tag: null,
    status: "new",
    likes: 99000,
    cover: niceSunset,
    comments: [
      { ...users.sadFrog, text: "抱抱，我也是一个人，在车里。", replies: [] },
      { ...users.nyaru, text: "一人じゃないよ！猫雷陪你看夕阳にゃ。", replies: [] },
      { ...users.photographer, text: "这张好有电影感！我要拿去当手机壁纸。", replies: [] },
      { ...users.crybaby, text: "看哭了，呜呜呜。", replies: [] },
      { ...users.tianyi, text: "天依给你唱首歌吧，唱完去吃饭。", replies: [] },
      {
        ...users.vampire,
        text: "夕阳很好，但我只能等它落下去才出门。",
        replies: [{ ...users.loadingCat, text: "加载中……情绪正在恢复。" }],
      },
    ],
  },
  {
    id: 7,
    title: "马赛老港：落地法国第一站",
    topics: ["旅行日记"],
    text: "落地法国的第一站。南法的阳光比英国大方多了，一出门就晒得睁不开眼。港口停满了小船，空气里都是海的味道。",
    tag: "旅行日记",
    status: "new",
    likes: 73000,
    cover: marseille,
    comments: [
      { ...users.naiwa, text: "英国：你礼貌吗？", replies: [] },
      { ...users.paimon, text: "海边一定有好吃的海鲜吧！", replies: [] },
      { ...users.surfDuck, text: "这浪我能冲。", replies: [] },
      { ...users.squirrel, text: "阳光这么好，适合囤点坚果晒一晒。", replies: [] },
      { ...users.lizard, text: "前排晒太阳，顺便吃瓜。", replies: [] },
    ],
  },
  {
    id: 8,
    title: "伦敦未必有我忧郁",
    topics: ["城市漫步"],
    text: "第一次去伦敦，在大笨钟下面拍了张照。天阴阴的，钟也阴阴的，我也阴阴的。我们三个很配。",
    tag: null,
    status: "new",
    likes: 91000,
    cover: bigBen,
    comments: [
      { ...users.azuma, text: "这个标题，很难评，但很真实。", replies: [] },
      { ...users.sist, text: "英国的天气就是最好的摸鱼借口。", replies: [] },
      { ...users.waterDuck, text: "阴天记得多喝热水。", replies: [] },
      { ...users.mea, text: "伦敦的天气就像我的心情，全靠骂出来的。", replies: [] },
      { ...users.lycaon, text: "已读。建议随身带伞。", replies: [] },
      { ...users.retired, text: "伦敦我去过，那时候还没这么多人。", replies: [] },
    ],
  },
  {
    id: 9,
    title: "乡下人终于进城了！",
    topics: ["十万订阅特辑"],
    text: "这是第一次到伦敦时出站的火车站。回头看到这一幕，我的第一反应是：乡下人终于进城了。第二反应是：我是不是走错出口了。",
    tag: null,
    status: "read",
    likes: 122000,
    cover: kingsCross,
    comments: [
      { ...users.pompom, text: "列车长认证：这个站的出口确实很多帕。", replies: [] },
      { ...users.azi, text: "阿梓第一次进城也迷路了！", replies: [] },
      { ...users.aqua, text: "阿夸到现在都没走出来。", replies: [] },
      { ...users.capKid, text: "我也是第一次进城，妈妈说不要乱跑。", replies: [] },
      { ...users.honest, text: "说实话，九又四分之三站台在哪？", replies: [] },
    ],
  },
  {
    id: 10,
    title: "大家好啊，打个招呼！爱丁堡的蓝调时刻",
    topics: [],
    text: "傍晚的爱丁堡老城，十字路口，天变成了深蓝色。有那么一瞬间觉得很浪漫。然后我想起住的青旅，条件简陋，价格和伦敦差不多，浪漫就结束了。",
    tag: null,
    status: "read",
    likes: 112000,
    cover: edinburghBlue,
    comments: [
      { ...users.photographer, text: "蓝调时刻！快门速度多少？教教我！", replies: [] },
      { ...users.goldship, text: "这里的栏杆我也想啃。", replies: [] },
      { ...users.stardust, text: "这个蓝，好像星星掉进了碗里。", replies: [] },
      {
        ...users.mouse,
        text: "青旅也住不起，鼠鼠我啊只能住下水道。",
        replies: [{ ...users.nekomata, text: "下水道有鱼吗？" }],
      },
      { ...users.smugCat, text: "我住的青旅比你的好（得意）。", replies: [] },
    ],
  },
];
