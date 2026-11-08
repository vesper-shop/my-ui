import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [react()],
  resolve: { tsconfigPaths: true },
  build: { outDir: "../../dist", emptyOutDir: true },
});
