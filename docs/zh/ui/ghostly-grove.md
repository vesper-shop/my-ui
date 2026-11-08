# 罗浮杂俎

一套深青色、安静、带点科幻感的界面。

## 看起来是什么样

底色是偏青的深灰。卡片和窗口都是直角，用细细的灰色边框圈起来。标题是青色的，正文是柔和的灰绿色，数据面板会发出淡淡的青色光。背景上隐约能看到六边形的纹理。

## 动起来是什么样

鼠标移到卡片上，边框会变亮。导航按钮被选中时，会填上一层蓝色渐变，里面浮着渐渐消失的六边形。窗口打开时会从稍小一点放大到正常尺寸，背后的页面同时变模糊。

## 想看看，或者想用

运行 `pnpm demo:ghostly-grove` 打开它的演示页，或者在 Storybook 里找到 Ghostly Grove 这一组。

它还没有发布到 npm，目前只能在本仓库里使用，做法见架构文档。

<details>
<summary>技术细节（给要改这套 UI 的开发者）</summary>

设计参考：某游戏中的博主页面录屏，2560×1600，按 1920 宽舞台缩放为 0.75 倍。不包含游戏美术素材。

### 使用

包名是 `@my-ui/ghostly-grove`。它还没有发布到 npm，需要按架构文档里的步骤，在本仓库的 app 中引用。之后引入它的样式，
并加载它用到的字体（Noto Sans SC 和 Barlow Semi Condensed）：

```css
@import "@my-ui/ghostly-grove/styles";
```

### 设计语言

- 深青色：页面 `#141619`，卡片 `#1b1c23`，窗口 `#23242d`。
- Noto Sans SC；数字用 Barlow Semi Condensed。
- 方形 2px `#3b3e44` 边框。卡片悬停时变亮为 `#a6b0b5`；数据面板发出青色 `#6efff8` 辉光。
- 标题为青色，卡片中 26px、窗口中 28px。正文 `#879c9e`，卡片中 20px、窗口中 22px。评论 `#8ea1a6`
  20/30px；链接 `#5ad7d6`；统计标签金色 `#e5c67b`。
- 导航标签是 300×57：默认灰框，悬停青框，激活时为 `#216985 → #245c79` 填充加渐隐的六边形图案。
- 提示框：`#111617` 面板，2px 青色边框，青色文字，带一个尖角。
- 窗口：六边形图案上一条 5px 青色左边线，从 0.98 放大进入；遮罩模糊 14px。

### Token

颜色：`title`、`link`、`glow`、`value`、`label`、`comment`、`border-hover`、`tooltip`、
`nav-from`、`nav-to`、`plan`、`band`、`band-deep`、`rule`、`star`、`avatar`、`stage-glow`、
`stage-mist`、`stage-base`。

其他：`--pattern-hex`、`--font-numeric`、`--size-nav-width`、`--size-nav-height`、`--size-frame`、
`--shadow-glow`。

Utility：`bg-hex`、`bg-grove-stage`、`bg-grove-band`。

### 组件

CSS 类名以 `gg-` 开头。

- `Card`：网格布局；`Card.Body` 是 `display: contents`，300×170 的媒体位于文字旁边。
- `Tabs`：即上面的导航按钮；`Tabs.Indicator` 隐藏。
- `Dialog`：`--dialog-width`（1328px）和 `--dialog-height`（772px）。`Dialog.Close` 没有 children
  时渲染四条线组成的标记。
- `Badge`：`default` 是橙色标签；`secondary` 是暗色文字。
- `Toggle`：带边框的方块，按下时填入导航渐变；`ghost` 变为青色。

### 标记

- `close-mark`：四条线，悬停时散开，按下时收拢。

</details>
