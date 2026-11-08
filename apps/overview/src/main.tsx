import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "@fontsource-variable/lora";
import "@fontsource/caveat";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/site.css";
import { App } from "@/app";
import { parseRoute } from "@/data";

const root = document.getElementById("root");

document.documentElement.lang =
  parseRoute(window.location.pathname).locale === "zh" ? "zh-CN" : "en";

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
