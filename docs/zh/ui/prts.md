# 普瑞赛斯

一套明亮、干净、带点“作战终端”味道的界面。

## 看起来是什么样

页面是浅灰色的，上面叠着半透明的白色面板，面板上有很淡的斜纹。按钮和开关像一块块深灰色的钢板，四角都是直角。被选中的东西会变成亮蓝色，危险操作用深红色提醒。数字用一种又窄又高的字体，读起来像仪表上的读数。

## 动起来是什么样

鼠标移上去，钢板会稍微变亮；按下去，它会往下沉一点。弹窗和提示不是慢慢淡入，而是像一条横带从中间向上下展开。

## 想看看，或者想用

运行 `pnpm demo:prts` 打开它的演示页，或者在 Storybook 里找到 PRTS 这一组。

它还没有发布到 npm，目前只能在本仓库里使用，做法见架构文档。

<details>
<summary>技术细节（给要改这套 UI 的开发者）</summary>

设计参考：某战术终端游戏的控件录屏，2560×1600，按 1280 宽舞台尺寸减半。只取控件，不复刻界面。

### 使用

包名是 `@my-ui/prts`。它还没有发布到 npm，需要按架构文档里的步骤，在本仓库的 app 中引用。之后引入它的样式，
并加载它用到的字体（Noto Sans SC 和 Oswald）：

```css
@import "@my-ui/prts/styles";
```

### 设计语言

- 默认浅色：`#e6e6e8` 页面，半透明的 `#f0f0f2` 面板，带淡淡 45° 斜纹的白色凸起表面。直角。
- 钢灰 `#313131` 填充未选中的控件，`#4b4c50` 用于未选中的纵向标签。分区标题条从 `#2f3d48 → #3a3d42`
  渐隐到透明。
- 强调蓝 `#18a3dc` 表示选中；开关开启时为 `#0e6d92`；确认条为红色 `#8b1020`。
- Noto Sans SC；数字用 Oswald。
- 控件高 34px，带 2px 硬投影；悬停变亮，按下下沉 2px。
- 窗口和提示以横条形式展开，从中间向两侧展开。

### Token

颜色：`veil`、`steel`、`rule`、`steel-light`、`steel-top`、`header-from`、`header-to`、
`accent-deep`、`danger-light`、`white`、`black`、`night`、`hatch`。

其他：`--pattern-hatch`、`--pattern-halftone`、`--size-control`、`--shadow-control`。

Utility：`bg-hatched`、`bg-plate`、`bg-section`。

### 组件

CSS 类名以 `pr-` 开头。

- `Switch`：156×46 的钢灰盒子，内有一块带斜纹的白色滑块；开启后变为深蓝。其他子元素（如“开启”文字）
  居中显示在空出的那一半。
- `Slider`：4px 细线；滑块是白色数值框。把 `Slider.Value` 放进 `Slider.Thumb`，并使用
  `thumbAlignment="edge"`。
- `Tabs`：纵向标签是 180×70 的钢灰板，激活时变白。横向标签带蓝色下划线。
- `Button`、`Toggle`：钢灰板；`default` 或按下时为蓝色。禁用时为平面灰色。
- `Dialog`：`--dialog-width`（全宽）和 `--dialog-height`（auto）；分区标题条样式的标题栏。
  `Dialog.Close` 没有 children 时渲染白色圆盘加钢灰 ×。
- `Card`：底部保持一个控件的高度，让一排卡片对齐。
- `Select`：带箭头的凸起输入框；列表向下展开。
- `Toast`：居中横条，或使用 `type: "corner"` 时显示为右上角的黑色面板，左侧渐隐成半调网点。
- `NumberField`：Oswald 48px 数字，上下是钢灰增减按钮，同招募时长调节器。

### 标记

- `chevron-mark`：`Select` 和 `NumberField` 用的箭头。
- `close-mark`：圆盘关闭标记。

</details>
