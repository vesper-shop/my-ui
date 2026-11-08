# 绳网

一套黑色、厚重、很有街头感的界面。

## 看起来是什么样

底色几乎是纯黑。按钮和输入框是圆头的黑色长条，上面铺着细细的斜向点阵。文字用很粗的字体，按钮上的字还是斜体。窗口有一圈厚厚的深色边框，标题栏也带点阵；右上角的关闭按钮是一块红色小板。

## 动起来是什么样

按下按钮或选中一项时，它背后会垫上一块黄色底板，一闪一闪地在黄色和黄绿色之间“呼吸”。选中的标签页坐在一块斜着的黄色底板上。打开窗口时，背后的页面会变暗、变模糊。鼠标移到卡片上，卡片会套上一圈黄框。

## 想看看，或者想用

运行 `pnpm demo:inter-knot` 打开它的演示页，或者在 Storybook 里找到 Inter-Knot 这一组。

它还没有发布到 npm，目前只能在本仓库里使用，做法见架构文档。

<details>
<summary>技术细节（给要改这套 UI 的开发者）</summary>

设计参考：绳网（Inter-Knot）界面截图，1280×800，尺寸减半。不包含游戏美术素材。

### 使用

包名是 `@my-ui/inter-knot`。它还没有发布到 npm，需要按架构文档里的步骤，在本仓库的 app 中引用。之后引入它的样式，
并加载它用到的字体（Noto Sans SC 和 Rubik）：

```css
@import "@my-ui/inter-knot/styles";
```

### 设计语言

- 默认深色：页面 `#000`，面板 `#050505`，窗口主体 `#1b1b1b`，标题栏 `#151515`，卡片 `#222`；文字
  `#fff`、`#c8c8c8`、`#8c8c8c`。
- 拉丁字母和数字用 Rubik，中文用 Noto Sans SC，字重 900。控件和标签页用粗斜体。
- 控件是 38px 高的黑色条：16px 圆角，3px `#383838` 边框，1px 黑色细线，斜向 6px 点阵。
- 按下和选中会“呼吸”：控件背后的黄色 `#f9dc00` 底板在黄与青柠 `#b0d700` 之间脉动。每次按下都完整播放
  `ik-press`：向外弹出 6px、回弹、转为青柠色。
- 当前标签页落在倾斜 22° 的黄色底板上；标签条的圆角两端会裁掉最外侧的标签。
- 窗口：2px 黑边、4px `#2b2b2b` 边框、外侧 2px 黑边，圆角 `16 5 16 16`，点阵标题栏。关闭牌是红底黑叉，
  按下时变黄。
- 遮罩：60% 黑色，6px 模糊，细密的 45° 斜纹。
- 卡片：3px 黑边，圆角 `22 22 0 22`，悬停时边框变黄；44px 头像压在封面边缘。
- 焦点显示为浅灰色边框，从不使用黄色轮廓。

### Token

颜色：`chrome`、`dot`、`accent-strong`、`window`、`window-body`、`window-title`、`frame`、
`border-strong`、`badge`、`tag-from`、`tag-to`、`tag-foreground`、`avatar`、`avatar-ring`、
`stripe`、`shade`、`progress-from`、`progress-to`。

其他：`--size-control`、`--size-frame`、`--font-weight-bold`、`--pattern-dots`、
`--pattern-stripes`、`--shadow-hairline`、`--radius-control`、`--radius-card`、`--radius-window`、
`--duration-pulse`、`--duration-press`。

Utility：`bg-dots`、`bg-stripes`、`mask-fade-y`。

### 组件

CSS 类名以 `ik-` 开头。

- `Dialog`：`--dialog-width`（540px）和 `--dialog-height`（auto）。`Dialog.Close` 没有 children 时
  渲染关闭牌。
- `Badge`：`default` 是黑字灰色胶囊；`secondary` 是蓝色渐变标签。
- `Progress`：14px 轨道，蓝色渐变。
- `Switch`：点阵胶囊，显示 `OFF`；开启后变黄并显示 `ON`。

### 标记

- `close-mark`：关闭牌 SVG；父元素按下时变黄。

</details>
