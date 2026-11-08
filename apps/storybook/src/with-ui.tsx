import type { Decorator } from "@storybook/react-vite";
import furboboGossip from "./furbobo-gossip/styles.css?inline";
import ghostlyGrove from "./ghostly-grove/styles.css?inline";
import interKnot from "./inter-knot/styles.css?inline";
import prts from "./prts/styles.css?inline";

const stylesheets: Record<string, string> = {
  "furbobo-gossip": furboboGossip,
  "ghostly-grove": ghostlyGrove,
  "inter-knot": interKnot,
  prts,
};

export const withUi: Decorator = (Story, context) => {
  const ui = context.title.split("/")[0];
  let style = document.getElementById("my-ui-style");
  if (style === null) {
    style = document.createElement("style");
    style.id = "my-ui-style";
    document.head.append(style);
  }
  if (style.dataset.ui !== ui) {
    style.dataset.ui = ui;
    style.textContent = stylesheets[ui];
  }
  document.documentElement.classList.toggle("light", context.globals.scheme === "light");
  return <Story />;
};
