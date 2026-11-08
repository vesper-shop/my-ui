import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { tsconfigPaths: true },
  base: "./",
  server: { port: 5181, strictPort: true },
  build: { outDir: "../../dist/inter-knot", emptyOutDir: true },
});
