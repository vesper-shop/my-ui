import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, test } from "vite-plus/test";

const root = join(import.meta.dirname, "../..");
const uis = { "inter-knot": "ik", "ghostly-grove": "gg", "furbobo-gossip": "fg", prts: "pr" };

const sharedTokens = [
  ...[
    "background",
    "surface",
    "surface-sunken",
    "surface-raised",
    "foreground",
    "muted-foreground",
    "subtle-foreground",
    "disabled-foreground",
    "border",
    "divider",
    "accent",
    "accent-foreground",
    "danger",
    "success",
    "warning",
    "focus",
    "overlay",
  ].map((name) => `--color-${name}`),
  "--font-sans",
  "--font-display",
  "--font-mono",
  "--radius-sm",
  "--radius-md",
  "--radius-lg",
  "--radius-full",
  "--shadow-sm",
  "--shadow-md",
  "--shadow-lg",
  "--duration-fast",
  "--duration-base",
  "--duration-slow",
];

function files(dir: string, extensions: string[]): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === "dist" ? [] : files(path, extensions);
    return extensions.some((extension) => entry.name.endsWith(extension)) ? [path] : [];
  });
}

const sources = [
  ...Object.keys(uis).map((ui) => join(root, "packages", ui, "src")),
  ...Object.keys(uis).map((ui) => join(root, "apps", `${ui}-demo`, "src")),
  join(root, "apps/storybook/src"),
  join(root, "apps/overview/src"),
].flatMap((dir) => files(dir, [".css", ".ts", ".tsx"]));

function offending(pattern: RegExp, paths: string[]) {
  return paths
    .filter((path) => pattern.test(readFileSync(path, "utf8")))
    .map((path) => relative(root, path));
}

describe("stylesheet rules", () => {
  test("only palette.css and tokens.css read --palette-*", () => {
    const others = sources.filter((path) => !/styles\/(palette|tokens)\.css$/.test(path));
    expect(offending(/--palette-/, others)).toEqual([]);
  });

  test("transitions name their properties", () => {
    expect(offending(/transition:\s*all\b/, sources)).toEqual([]);
  });

  test("state uses Base UI attributes or ARIA, not data-state", () => {
    expect(offending(/data-state|data-\[state/, sources)).toEqual([]);
  });

  describe.each(Object.entries(uis))("%s", (ui, prefix) => {
    const src = join(root, "packages", ui, "src");
    const componentCss = files(join(src, "components"), [".css"]).concat(
      files(join(src, "primitives"), [".css"]),
    );

    test("declares every shared token", () => {
      const tokens = readFileSync(join(src, "styles/tokens.css"), "utf8");
      expect(sharedTokens.filter((token) => !tokens.includes(`${token}:`))).toEqual([]);
    });

    test("component styles use tokens, not raw colours", () => {
      expect(offending(/#(?!000\b|fff\b)[0-9a-f]{3,8}\b|rgba?\(/i, componentCss)).toEqual([]);
    });

    test(`component classes carry the ${prefix}- prefix`, () => {
      const classes = componentCss.flatMap((path) =>
        [...readFileSync(path, "utf8").matchAll(/(?<![\w-])\.[a-z][\w-]*/g)].map(
          (match) => match[0],
        ),
      );
      expect(classes.length).toBeGreaterThan(0);
      expect(classes.filter((name) => !name.startsWith(`.${prefix}-`))).toEqual([]);
    });

    test("every component has a story", () => {
      const index = readFileSync(join(src, "index.ts"), "utf8");
      const components = [...index.matchAll(/#\/components\/([\w-]+)/g)].map((match) => match[1]);
      const missing = components.filter(
        (name) => !existsSync(join(root, "apps/storybook/src", ui, `${name}.stories.tsx`)),
      );
      expect(missing).toEqual([]);
    });
  });
});
