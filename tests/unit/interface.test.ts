import * as furboboGossip from "@my-ui/furbobo-gossip";
import * as ghostlyGrove from "@my-ui/ghostly-grove";
import * as interKnot from "@my-ui/inter-knot";
import * as prts from "@my-ui/prts";
import { describe, expect, test } from "vite-plus/test";

const shared = ["Avatar", "Badge", "Button", "Card", "Dialog", "Separator", "Tabs", "Tooltip"];

const uis = [
  ["inter-knot", interKnot, [...shared, "Progress", "Switch"]],
  ["ghostly-grove", ghostlyGrove, [...shared, "Toggle"]],
  ["furbobo-gossip", furboboGossip, [...shared, "Toggle"]],
  [
    "prts",
    prts,
    [
      ...shared,
      "Input",
      "NumberField",
      "Progress",
      "Select",
      "Slider",
      "Switch",
      "Toast",
      "Toggle",
      "ToggleGroup",
    ],
  ],
] as const;

function shape(ui: object) {
  return Object.entries(ui)
    .map(([name, value]) =>
      typeof value === "function" ? name : `${name}.${Object.keys(value).sort().join(",")}`,
    )
    .sort();
}

describe("interface", () => {
  test.each(uis)("%s exports the components its reference shows", (_, ui, components) => {
    expect(Object.keys(ui).sort()).toEqual([...components].sort());
  });

  test.each(uis)("%s keeps the parts prts has for the same component", (_, ui) => {
    const names = Object.keys(ui);
    expect(shape(ui)).toEqual(shape(prts).filter((entry) => names.includes(entry.split(".")[0])));
  });
});
