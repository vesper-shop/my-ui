# 代码规范

写代码时记住几条原则就够了，细则放在最后，需要时再查。

## 原则

- **少写。** 用不到的注释、函数和包装都不要加。浏览器或现成的库已经能做的事，直接用，不要自己再造一遍。
- **出错就让它显形。** 数据缺了就是缺了，不要悄悄补一个默认值糊过去，那样会把真正的问题藏起来。
- **外观只在一个地方定义。** 组件里不直接写颜色和尺寸，统一用每套 UI 起好名字的那些值。
- **照顾所有人。** 用键盘操作时要能看清焦点在哪；用户在系统里关掉了动画，界面也要跟着安静下来。
- **版本写死。** 每个依赖都写确切的版本号，保证每个人装出来的东西一样。

改完代码运行 `pnpm check`，格式和类型问题它会自动指出来。

<details>
<summary>细则（给要改代码的开发者）</summary>

### TypeScript

- strict 模式；用 `vp fmt` 和 `vp lint`。
- 类型写在包或 app 的 `types.ts` 里，字段尽量必填。
- 缺失的值是 `null`。不把 `undefined`、`unknown` 或 `any` 当作状态，不用 `??` 兜底。
- 包内用 `#/…` 并带文件扩展名引用；app 用 `@/…`。
- 文件名用 kebab-case；story 以它的组件命名。
- 不加改动用不到的注释、辅助函数或包装。优先用平台能力（用 `toLocaleString` 显示紧凑数字）。
- 用 `useSyncExternalStore` 读浏览器状态；不要在 `useEffect` 里把它复制进 state。
- 每个依赖锁定到精确版本。

### 组件 CSS

- 纯 CSS 写在组件旁边，放在 `@layer components` 里，只用 token。
- BEM 加 UI 前缀（`ik-`、`gg-`、`fg-`、`pr-`）：`-` 连接单词，`__` 表示部件。
- 变体和状态用 `data-*` 或 ARIA 选择器，不用额外的类或标签选择器。
- 复用 UI 的 utility 用 `@apply`。
- 去掉 `outline` 的地方要在 `:focus-visible` 上补回来。transition 要列出具体属性。
- 动效遵守 `prefers-reduced-motion`。

### App 与 story

- 用 Tailwind utility 布局，覆盖组件样式也一样。
- 重复出现的外观，或需要任意属性的外观，写成 `app.css` 里的具名类。
- 行内 `style` 只以 CSS 变量的形式传运行时数据。SVG 颜色用 `fill-*` 和 `stroke-*`。
- 重复出现的尺寸做成主题档位，不写 `text-[Npx]`。
- 图标用 `lucide-react`，图表用 `recharts`。

</details>
