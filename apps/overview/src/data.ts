import type { Copy, DocEntry, DocSource, Locale, Route, UiEntry } from "@/types";

const sources = import.meta.glob<string>("../../../docs/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const storybookUrl = import.meta.env.DEV ? "http://localhost:6006" : "/storybook";

export function demoUrl(ui: UiEntry) {
  return import.meta.env.DEV ? `http://localhost:${ui.port}/` : `/${ui.id}/`;
}

export const uis: UiEntry[] = [
  {
    id: "inter-knot",
    port: 5181,
    name: { en: "Inter-Knot", zh: "绳网" },
    style: {
      en: "Black dotted bars, breathing yellow plates, red close plate.",
      zh: "黑色点阵条、呼吸的黄色底板、红色关闭板。",
    },
  },
  {
    id: "ghostly-grove",
    port: 5182,
    name: { en: "Ghostly Grove", zh: "罗浮杂俎" },
    style: {
      en: "Dark teal square frames, hex pattern, cyan glow.",
      zh: "深青色方框、六边形纹理、青色辉光。",
    },
  },
  {
    id: "furbobo-gossip",
    port: 5183,
    name: { en: "Furbobo Gossip", zh: "狸狸通信" },
    style: {
      en: "Orange and paper, hard ink shadows, speech-bubble tabs.",
      zh: "橙色与纸面、硬朗的墨色投影、气泡形标签。",
    },
  },
  {
    id: "prts",
    port: 5184,
    name: { en: "PRTS", zh: "普瑞赛斯" },
    style: {
      en: "Square steel plates, hatched white sheets, blue selection.",
      zh: "方形钢板、斜纹白底、蓝色选中态。",
    },
  },
];

export const copy: Record<Locale, Copy> = {
  en: {
    tagline: "React UIs in distinct visual styles",
    taglineRest: ", built on Base UI.",
    description:
      "Every UI shares Base UI's behaviour, component names and token names; markup, decoration and motion belong to the UI. Switching UIs means changing an import.",
    openStorybook: "Open Storybook",
    readArchitecture: "Read the architecture",
    behaviour: "Behaviour",
    looks: "Looks",
    uiCount: (count) => `${count} UIs`,
    stack: "Stack",
    uisStamp: "01 / UIs",
    uisHeading: "Four visual languages",
    uisDescription: "Each preview is that UI's own Storybook, so its tokens and fonts stay intact.",
    demo: "Demo",
    designNotes: "Design notes",
    docsStamp: "02 / Docs",
    docsHeading: "Documents",
    docsDescription: "The architecture, the style guide, deployment and each UI's design notes.",
    groups: { Guide: "Guide", UIs: "UIs" },
    brandNote: "Base UI, four looks",
    overview: "Overview",
    docs: "Docs",
    pages: "Pages",
    useLightTheme: "Use light theme",
    useDarkTheme: "Use dark theme",
    otherLocale: "中文",
    otherLocaleLabel: "阅读中文版",
    notFound: "Page not found",
    backToOverview: "Back to the overview",
    builtOn: "Built on Base UI",
  },
  zh: {
    tagline: "视觉风格各异的 React UI",
    taglineRest: "，建立在 Base UI 之上。",
    description:
      "每套 UI 共用 Base UI 的行为、组件名和 token 名；结构、装饰和动效属于 UI 自己。切换 UI 只需换一行 import。",
    openStorybook: "打开 Storybook",
    readArchitecture: "阅读架构文档",
    behaviour: "行为",
    looks: "外观",
    uiCount: (count) => `${count} 套 UI`,
    stack: "技术栈",
    uisStamp: "01 / UI",
    uisHeading: "四种视觉语言",
    uisDescription: "每个预览都是该 UI 自己的 Storybook，token 和字体保持原样。",
    demo: "Demo",
    designNotes: "设计说明",
    docsStamp: "02 / 文档",
    docsHeading: "文档",
    docsDescription: "架构、代码规范、部署，以及每套 UI 的设计说明。",
    groups: { Guide: "指南", UIs: "UI" },
    brandNote: "Base UI，四种外观",
    overview: "概览",
    docs: "文档",
    pages: "页面",
    useLightTheme: "使用浅色主题",
    useDarkTheme: "使用深色主题",
    otherLocale: "English",
    otherLocaleLabel: "Read in English",
    notFound: "页面不存在",
    backToOverview: "返回概览",
    builtOn: "基于 Base UI",
  },
};

const docSources: DocSource[] = [
  { slug: "architecture", file: "ARCHITECTURE.md", group: "Guide" },
  { slug: "styleguide", file: "STYLEGUIDE.md", group: "Guide" },
  { slug: "deployment", file: "DEPLOYMENT.md", group: "Guide" },
  ...uis.map((ui): DocSource => ({ slug: `ui/${ui.id}`, file: `ui/${ui.id}.md`, group: "UIs" })),
];

const docFolders: Record<Locale, string> = { en: "", zh: "zh/" };

export const docs: Record<Locale, DocEntry[]> = {
  en: docEntries("en"),
  zh: docEntries("zh"),
};

function docEntries(locale: Locale): DocEntry[] {
  return docSources.map(({ slug, file, group }) => {
    const source = sources[`../../../docs/${docFolders[locale]}${file}`];
    return { slug, group, source, title: source.split("\n")[0].replace("# ", "") };
  });
}

export function parseRoute(pathname: string): Route {
  const path = pathname.replace(/\/$/, "");
  if (path === "/zh" || path.startsWith("/zh/")) {
    return { locale: "zh", path: path.slice(3) };
  }
  return { locale: "en", path };
}

export function localeHref(locale: Locale, path: string) {
  const prefix = locale === "zh" ? "/zh" : "";
  return `${prefix}${path}` || "/";
}
