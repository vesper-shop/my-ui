import { defineConfig } from "void/config";

export default defineConfig({
  target: "cloudflare",
  inference: {
    appType: "spa",
    build: "pnpm run build",
    outputDir: "dist",
  },
  routing: {
    notFound: "single-page-application",
  },
  cloudflare: {
    name: "my-ui",
    account_id: "fb71c4eceaf623ae1b19b8b37d7a38cf",
    compatibility_date: "2026-11-01",
    workers_dev: false,
    preview_urls: false,
    routes: [{ pattern: "ui.you-find.me", custom_domain: true }],
  },
});
