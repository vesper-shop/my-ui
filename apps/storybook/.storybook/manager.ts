import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const uiNames: Record<string, string> = {
  "inter-knot": "Inter-Knot",
  "ghostly-grove": "Ghostly Grove",
  "furbobo-gossip": "Furbobo Gossip",
  prts: "PRTS",
};

const cat = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b08a45" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/></svg>`;

const brandTitle = `<span class="brand">${cat}<span>my-ui<small>Base UI, four looks</small></span></span>`;

const font = {
  fontBase: '"Geist", system-ui, "PingFang SC", "Noto Sans SC", sans-serif',
  fontCode: '"Geist Mono", "JetBrains Mono", Consolas, monospace',
};

const light = create({
  base: "light",
  brandTitle,
  brandUrl: "/",
  brandTarget: "_self",
  ...font,
  colorPrimary: "#526682",
  colorSecondary: "#526682",
  appBg: "#f7f6f2",
  appContentBg: "#f7f6f2",
  appHoverBg: "#e9ebef",
  appPreviewBg: "#f7f6f2",
  appBorderColor: "#d6dae1",
  appBorderRadius: 5,
  textColor: "#2d3038",
  textInverseColor: "#f7f6f2",
  textMutedColor: "#606775",
  barBg: "#f7f6f2",
  barTextColor: "#606775",
  barHoverColor: "#526682",
  barSelectedColor: "#526682",
  buttonBg: "#e9ebef",
  buttonBorder: "#d6dae1",
  booleanBg: "#e9ebef",
  booleanSelectedBg: "#f7f6f2",
  inputBg: "#f7f6f2",
  inputBorder: "#9ca4b0",
  inputTextColor: "#2d3038",
  inputBorderRadius: 3,
});

const dark = create({
  base: "dark",
  brandTitle,
  brandUrl: "/",
  brandTarget: "_self",
  ...font,
  colorPrimary: "#afc3df",
  colorSecondary: "#afc3df",
  appBg: "#1d1a17",
  appContentBg: "#1d1a17",
  appHoverBg: "#29251f",
  appPreviewBg: "#1d1a17",
  appBorderColor: "#3f3931",
  appBorderRadius: 5,
  textColor: "#f2ece1",
  textInverseColor: "#1d1a17",
  textMutedColor: "#c3b9aa",
  barBg: "#1d1a17",
  barTextColor: "#c3b9aa",
  barHoverColor: "#afc3df",
  barSelectedColor: "#afc3df",
  buttonBg: "#29251f",
  buttonBorder: "#3f3931",
  booleanBg: "#29251f",
  booleanSelectedBg: "#3f3931",
  inputBg: "#29251f",
  inputBorder: "#857a6c",
  inputTextColor: "#f2ece1",
  inputBorderRadius: 3,
});

const theme = localStorage.getItem("theme");
const isDark =
  theme === "dark" || (theme === null && matchMedia("(prefers-color-scheme: dark)").matches);

addons.setConfig({
  theme: isDark ? dark : light,
  sidebar: {
    renderLabel: (item) => (item.type === "root" ? uiNames[item.name] : item.name),
  },
});
