import type { Preview } from "@storybook/react-vite";
import { withUi } from "../src/with-ui";

if (window.parent !== window) {
  const id = new URLSearchParams(window.location.search).get("id");
  new ResizeObserver(() => {
    const height = Math.ceil(document.body.getBoundingClientRect().height);
    window.parent.postMessage({ type: "my-ui:preview-height", id, height }, "*");
  }).observe(document.body);
}

const preview: Preview = {
  decorators: [withUi],
  globalTypes: {
    scheme: {
      description: "Colour scheme",
      toolbar: {
        title: "Scheme",
        icon: "circlehollow",
        items: ["dark", "light"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    scheme: "dark",
  },
  parameters: {
    layout: "padded",
    backgrounds: { disable: true },
  },
};

export default preview;
