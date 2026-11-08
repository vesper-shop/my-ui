import { Toast, Tooltip } from "@my-ui/prts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app.css";
import { App } from "@/app";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Toast.Provider limit={1}>
        <Tooltip.Provider>
          <App />
        </Tooltip.Provider>
      </Toast.Provider>
    </StrictMode>,
  );
}
