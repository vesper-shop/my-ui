import { Tabs } from "@my-ui/inter-knot";
import { useState } from "react";
import type { FilterTabsProps } from "@/types";

export function FilterTabs<Value extends string>({
  tabs,
  value,
  onChange,
  listClassName,
  tabClassName,
}: FilterTabsProps<Value>) {
  const [seen, setSeen] = useState<string[]>([value]);

  return (
    <Tabs.Root
      value={value}
      onValueChange={(next: string) => {
        const tab = tabs.find((item) => item.value === next);
        if (!tab) return;
        setSeen([...seen, tab.value]);
        onChange(tab.value);
      }}
    >
      <Tabs.List className={listClassName}>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value} className={tabClassName}>
            {tab.isNew && !seen.includes(tab.value) && <span className="new-mark">NEW!</span>}
            {tab.label}
          </Tabs.Tab>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
    </Tabs.Root>
  );
}
