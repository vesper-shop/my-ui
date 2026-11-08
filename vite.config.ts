import { defineConfig } from "vite-plus";

export default defineConfig({
  run: {
    cache: true,
  },
  lint: {
    ignorePatterns: ["CLAUDE.md", "**/dist/**"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    ignorePatterns: ["CLAUDE.md", "**/dist/**"],
  },
});
