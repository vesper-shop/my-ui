import type { Page } from "@playwright/test";

export interface Take {
  name: string;
  url: string;
  play: (page: Page) => Promise<void>;
}
