# 狸狸通信

一套明亮、活泼、像贴纸和漫画的界面。

## 看起来是什么样

左边是一条橙色渐变的侧栏，右边是一张带点阵的米色“纸”，纸的四角很圆。所有东西都用深棕色的“墨线”描边，下面压着一道偏移的硬阴影，看起来像贴在纸上的贴纸。窗口标题是墨色字，每个字形外面描一圈白色粗边。

## 动起来是什么样

按钮是橙色的胶囊，按下去会往下压。选中的竖排标签会变成一个白色的对话气泡。鼠标移到卡片上，卡片会泛出一点暖黄色。

## 想看看，或者想用

运行 `pnpm demo:furbobo-gossip` 打开它的演示页，或者在 Storybook 里找到 Furbobo Gossip 这一组。

它还没有发布到 npm，目前只能在本仓库里使用，做法见架构文档。

<details>
<summary>技术细节（给要改这套 UI 的开发者）</summary>

设计参考：某游戏中的八卦门户录屏，2560×1600，按 1280 宽舞台尺寸减半。不包含游戏美术素材和名称。

### 使用

包名是 `@my-ui/furbobo-gossip`。它还没有发布到 npm，需要按架构文档里的步骤，在本仓库的 app 中引用。之后引入它的样式，
并加载它用到的字体（Noto Sans SC 和 Barlow）：

```css
@import "@my-ui/furbobo-gossip/styles";
```

### 设计语言

- 默认浅色：`#f3933e → #f7b350` 橙色侧栏，旁边是带点阵和 40px 内圆角的 `#eeebea` 纸面面板。
- 墨色 `#413835` 用于描边和 2×3px 硬投影；炭灰 `#463c37` 填充未选中的导航。
- 强调色 `#ee8d23`，深 `#cb7105`，浅 `#fdc972`；标签 `#e6741a`；logo 天蓝 `#36a8ea`。
- Noto Sans SC；数字和期号用 Barlow。
- 字号档位：`text-2xs` 11px，`text-caption` 13px，`text-body` 15/26px。
- 卡片：`#f9f9f8`，1.5px 边框，8px 圆角，硬投影，悬停时 `#fbf3df`。
- 窗口：12px 圆角，点阵，墨色投影，16px 模糊。标题是墨色字，字形外描白边，只在标点处换行。

### Token

颜色：`ink`、`charcoal`、`charcoal-hover`、`accent-deep`、`accent-light`、`tag`、
`sidebar-from`、`sidebar-to`、`highlight`、`chip`、`badge`、`dot`、`paper`、`sky`、`sky-light`。

其他：`--text-2xs`、`--text-caption`、`--text-body`、`--pattern-dots`、`--size-control`、
`--size-frame`、`--shadow-hard`、`--radius-sheet`。

Utility：`bg-dots`、`bg-sidebar`、`bg-banner`。

### 组件

CSS 类名以 `fg-` 开头。

- `Tabs`：横向标签是期号胶囊，激活时变橙并带下方指示尖角。纵向标签是炭灰按钮，激活后变成白色对话气泡。
  `Tabs.Indicator` 隐藏。
- `Card`：网格布局，258×144 的媒体在右侧。
- `Dialog`：`--dialog-width`（1040px）和 `--dialog-height`（610px）。`Dialog.Close` 没有 children
  时渲染四条线组成的标记。
- `Button`：`default` 是带墨色描边、可按下的橙色胶囊；`ghost` 是纯文字。
- `Badge`：`default` 是灰色小标签；`secondary` 是小卡片。
- `Toggle`：描边胶囊，按下时变橙并带墨色投影；`ghost` 变为橙色。

### 标记

- `close-mark`：四条线，悬停时散开，按下时收拢。

</details>
