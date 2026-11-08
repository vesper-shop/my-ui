import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite-plus";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  core: { disableTelemetry: true, disableWhatsNewNotifications: true },
  features: { sidebarOnboardingChecklist: false },
  stories: ["../src/**/*.stories.tsx"],
  viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      plugins: [tailwindcss()],
      resolve: { tsconfigPaths: true },
    });
  },
};

export default config;
