# 架构

my-ui 是几套组件库，长得完全不一样；两套都有的组件，用法完全相同。

可以把它想成“一副骨架，几层皮肤”。骨架负责组件怎么工作：按钮怎么响应点击、下拉框怎么展开、能不能用键盘操作。
这部分来自一个开源库 Base UI，所有皮肤共用。皮肤负责组件长什么样，这个仓库里每一层皮肤就叫一套“UI”。

每套 UI 只有它自己的参考里出现过的组件，不为了凑齐而编造。因为骨架相同，用共有组件搭的页面想换风格，只要把引用的那套 UI 换成另一套，代码不用改。

## 仓库里有什么

- **四套 UI**：放在 `packages` 文件夹里，每套一个子文件夹。
- **介绍站**：项目的首页，就是你正在看的这个网站。
- **Storybook**：一个组件陈列馆，可以一个一个地查看每套 UI 的每个组件。
- **演示页**：每套 UI 各有一个，用这套 UI 搭出一个完整的页面，看它们放在一起的效果。
- **头像库**：演示页里用到的网络热梗头像和角色头像集中放在一起，每张都记着出处。头像版权归原作者所有。
- **文档**：就是这些文章，中英文各一份。
- **测试**：自动检查组件是否正常工作。
- **宣传片**：制作项目宣传视频的工程。

## 在自己电脑上跑起来

先装好 Node.js 和 pnpm，然后在仓库目录里运行：

```bash
pnpm install
pnpm dev
```

第一条安装依赖，第二条把介绍站、Storybook 和所有演示页一起启动。启动后打开 http://localhost:5173/
就能看到介绍站，其他页面都能从那里点进去。

改完代码后，运行 `pnpm check`、`pnpm test` 和 `pnpm e2e`，确认没有改坏东西。

## 怎么在项目里用

这些 UI **还没有发布到 npm**，所以暂时不能像普通的库那样一行命令装进别的项目里，只能在这个仓库内部使用。

想在仓库里新建一个页面并用上某套 UI，最快的办法是照着现成的演示页抄：在 `apps` 文件夹里找到对应的演示页，
看它是怎么引入这套 UI、怎么加载样式和字体的，照做即可。

## 一套 UI 是怎么组织的

- 每个组件有自己的一份代码和一份样式，互不干扰。
- 颜色、圆角、阴影这些值都起了名字，集中写在一个文件里。想调整整套 UI 的配色，只改这一个文件。
- 关闭按钮、下拉箭头这类小图形，每套 UI 自己画。
- 每套 UI 的样式都作用于整个页面，所以同一个页面里只能用一套 UI。

## 新增一套 UI

需要准备四样东西：这套 UI 本身、它在 Storybook 里的示例、一个演示页，以及启动演示页的命令。
照着现有的任意一套 UI 复制一份再改，是最省事的做法。

<details>
<summary>技术细节（给要改代码的开发者）</summary>

### 本地地址

| App            | 地址                   | 单独启动                   |
| -------------- | ---------------------- | -------------------------- |
| 介绍站         | http://localhost:5173/ | -                          |
| Storybook      | http://localhost:6006/ | `pnpm storybook`           |
| inter-knot     | http://localhost:5181/ | `pnpm demo:inter-knot`     |
| ghostly-grove  | http://localhost:5182/ | `pnpm demo:ghostly-grove`  |
| furbobo-gossip | http://localhost:5183/ | `pnpm demo:furbobo-gossip` |
| prts           | http://localhost:5184/ | `pnpm demo:prts`           |

### 在 app 里引用

1. `package.json` 的 `dependencies` 里加 `"@my-ui/prts": "workspace:*"`。
2. app 的 CSS 里写 `@import "@my-ui/prts/styles";` 和 `@source "./";`。样式基于 Tailwind CSS v4，
   Vite 配置需要 `@tailwindcss/vite`。
3. 在 `index.html` 里加载这套 UI 的字体。
4. 在根部放一次 `Toast.Provider` 和 `Tooltip.Provider`。

### 目录

```
packages/<ui>/            # 一套 UI，在 workspace 内以 @my-ui/<ui> 使用
├─ package.json           # 导出 `.`（组件）和 `./styles`（CSS）；`#/*` 指向 src/*
└─ src/
   ├─ components/         # 每个组件一个 .tsx 和一个 .css；复合组件单独一个文件夹
   ├─ primitives/         # 本 UI 独有的图形：关闭标记、箭头
   ├─ lib/class-name.ts   # cn()，仅内部使用
   ├─ styles/
   │  ├─ palette.css      # 原始色值
   │  ├─ tokens.css       # 语义 token
   │  ├─ utilities.css    # @utility、@property、@keyframes
   │  └─ app.css          # 入口：tailwindcss、token、utility、各组件
   ├─ types.ts
   └─ index.ts
packages/avatars/         # 演示页共用的头像库：图片和来源（src/index.ts）
apps/storybook/src/<ui>/  # styles.css 和 <component>.stories.tsx
apps/<ui>-demo/           # 只用 @my-ui/<ui> 搭的页面
apps/overview/            # 介绍站；渲染 docs/
docs/                     # 本文档；zh/ 存放每篇的中文版
promo/                    # 宣传片（HyperFrames）：故事线、分镜、合成、素材
tests/
├─ unit/                  # 共享接口、样式规则、组件行为（jsdom）
└─ e2e/                   # 每个 demo 一个 Playwright project，跑在本机已装的 Chrome 上
```

每套 UI 的样式都写在 `:root` 上，所以 Storybook 用 `?inline` 加载各套样式，只保留当前那一套。story
所属的 UI 是其 title 的第一段（`prts/Button`）。

新增一套 UI 需要：它的包、它的 story、一个 demo，以及根 `package.json` 里的 `demo:<ui>` 命令。

### 组件

每套 UI 只导出它参考录屏里出现过的组件。两套都有的组件，部件和属性完全相同。复合组件是命名空间，部件沿用 Base UI 的名字。

| 导出          | 绳网 | 罗浮杂俎 | 狸狸通信 | 普瑞赛斯 | 部件 / 属性                                                                                              |
| ------------- | ---- | -------- | -------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `Avatar`      | ✓    | ✓        | ✓        | ✓        | `Root`、`Image`、`Fallback`                                                                              |
| `Badge`       | ✓    | ✓        | ✓        | ✓        | `variant`：`"default" \| "secondary"`                                                                    |
| `Button`      | ✓    | ✓        | ✓        | ✓        | `variant`：`"default" \| "ghost"`                                                                        |
| `Card`        | ✓    | ✓        | ✓        | ✓        | `Root`、`Media`、`Body`、`Header`、`Avatar`、`Title`、`Description`、`Footer`                            |
| `Dialog`      | ✓    | ✓        | ✓        | ✓        | Base UI 的部件，另加 `Header` 和 `Body`                                                                  |
| `Input`       |      |          |          | ✓        | Base UI 属性                                                                                             |
| `NumberField` |      |          |          | ✓        | `Root`、`Group`、`Input`、`Increment`、`Decrement`                                                       |
| `Progress`    | ✓    |          |          | ✓        | `Root`、`Track`、`Indicator`、`Value`、`Label`                                                           |
| `Select`      |      |          |          | ✓        | `Root`、`Trigger`、`Value`、`Icon`、`Portal`、`Positioner`、`Popup`、`Item`、`ItemText`、`ItemIndicator` |
| `Separator`   | ✓    | ✓        | ✓        | ✓        | Base UI 属性                                                                                             |
| `Slider`      |      |          |          | ✓        | `Root`、`Control`、`Track`、`Indicator`、`Thumb`、`Value`                                                |
| `Switch`      | ✓    |          |          | ✓        | `Root`、`Thumb`                                                                                          |
| `Tabs`        | ✓    | ✓        | ✓        | ✓        | `Root`、`List`、`Tab`、`Indicator`、`Panel`                                                              |
| `Toast`       |      |          |          | ✓        | `Provider`、`Portal`、`Viewport`、`Root`、`Title`、`Description`、`Close`、`Action`、`useToastManager`   |
| `Toggle`      |      | ✓        | ✓        | ✓        | `variant`：`"default" \| "ghost"`                                                                        |
| `ToggleGroup` |      |          |          | ✓        | Base UI 属性；只负责排列 Toggle                                                                          |
| `Tooltip`     | ✓    | ✓        | ✓        | ✓        | `Provider`、`Root`、`Trigger`、`Portal`、`Positioner`、`Popup`                                           |

- `Badge`、`Card.*`、`Dialog.Header` 和 `Dialog.Body` 没有对应的 Base UI 组件，它们用 `useRender`
  实现，因此接受 `render`。
- `Dialog.Close`、`Select.Icon`、`Select.ItemIndicator` 和 `NumberField` 的步进按钮在没有子元素时，
  绘制本 UI 自己的标记。
- 组件之间不选择彼此的标记。一个组件通过变量控制另一个组件的尺寸：

| 变量             | 读取方         | 默认值               |
| ---------------- | -------------- | -------------------- |
| `--avatar-size`  | `Avatar.Root`  | `40px`               |
| `--avatar-ring`  | `Avatar.Root`  | 本 UI 的描边（如有） |
| `--dialog-width` | `Dialog.Popup` | 本 UI 的窗口宽度     |

### Token

- `palette.css` 存原始值。只有 `tokens.css` 读取 `--palette-*`。
- 颜色、字体、圆角和阴影 token 只在 `@theme static` 中声明一次，所以 `var(--color-accent)` 和
  `bg-accent` 读的是同一个变量。Tailwind 默认的颜色、圆角和阴影被重置。`--pattern-*`、`--size-*` 和
  `--duration-*` 放在 `:root` 上。
- 颜色是 `light-dark()` 成对的值。每套 UI 在 `:root` 上设定默认 `color-scheme`；`:root.light` 和
  `:root.dark` 用来切换。
- 与另一个 token 相等的 token 直接引用它：`--color-focus: var(--color-accent)`。
- 纹理是 `utilities.css` 里的 `@utility` 规则。utility 不能与颜色 utility 重名。
- 字体由 token 命名，由 app 加载（`preview-head.html`、各 demo 的 `index.html`）。

每套 UI 都定义：

- 颜色：`background`、`surface`、`surface-sunken`、`surface-raised`、`foreground`、
  `muted-foreground`、`subtle-foreground`、`disabled-foreground`、`border`、`divider`、`accent`、
  `accent-foreground`、`danger`、`success`、`warning`、`focus`、`overlay`
- `--font-sans`、`--font-display`、`--font-mono`
- `--radius-sm`、`--radius-md`、`--radius-lg`、`--radius-full`
- `--shadow-sm`、`--shadow-md`、`--shadow-lg`
- `--duration-fast`、`--duration-base`、`--duration-slow`，在减弱动效时归零

### 依赖

一套 UI 只依赖 Base UI、React 和它自己的文件；UI 之间从不互相 import。共用工具在根 `package.json`
里锁定版本。`vite` 是 `@voidzero-dev/vite-plus-core` 的别名，版本要与 `vite-plus` 保持一致。

</details>
