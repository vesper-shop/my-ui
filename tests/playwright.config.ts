import { defineConfig } from "@playwright/test";

const apps = [
  ["inter-knot", "inter-knot-demo", 5181],
  ["ghostly-grove", "ghostly-grove-demo", 5182],
  ["furbobo-gossip", "furbobo-gossip-demo", 5183],
  ["prts", "prts-demo", 5184],
  ["overview", "overview", 5185],
] as const;

export default defineConfig({
  testDir: "e2e",
  reporter: "list",
  use: { channel: "chrome", viewport: { width: 1440, height: 900 } },
  projects: apps.map(([name, , port]) => ({
    name,
    testMatch: `${name}.spec.ts`,
    use: { baseURL: `http://localhost:${port}` },
  })),
  webServer: apps.map(([, dir, port]) => ({
    command: `pnpm --dir ../apps/${dir} dev --port ${port} --strictPort`,
    url: `http://localhost:${port}`,
    reuseExistingServer: true,
  })),
});
