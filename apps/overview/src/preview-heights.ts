import { storybookUrl, uis } from "@/data";
import type { PreviewHeightMessage } from "@/types";

const storybookOrigin = new URL(storybookUrl, window.location.href).origin;

let heights: Record<string, number> = Object.fromEntries(
  uis.map((ui) => [`${ui.id}-showcase--default`, 264]),
);

export function subscribePreviewHeights(onChange: () => void) {
  function onMessage({ origin, data }: MessageEvent<PreviewHeightMessage>) {
    if (origin !== storybookOrigin || data.type !== "my-ui:preview-height") {
      return;
    }
    heights = { ...heights, [data.id]: data.height };
    onChange();
  }
  window.addEventListener("message", onMessage);
  return () => window.removeEventListener("message", onMessage);
}

export function getPreviewHeights() {
  return heights;
}
