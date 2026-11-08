import type { FilterTab, Page } from "@/types";

export const pageTabs: FilterTab<Page>[] = [
  { value: "feed", label: "推送", isNew: false },
  { value: "schedule", label: "日程", isNew: true },
];
