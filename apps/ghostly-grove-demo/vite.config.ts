import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { tsconfigPaths: true },
  base: "./",
  server: { port: 5182, strictPort: true },
  build: { outDir: "../../dist/ghostly-grove", emptyOutDir: true },
});
