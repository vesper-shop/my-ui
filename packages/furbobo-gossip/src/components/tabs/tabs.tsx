import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cn } from "#/lib/class-name.ts";

export function Root({ className, ...props }: BaseTabs.Root.Props) {
  return <BaseTabs.Root className={cn("fg-tabs", className)} {...props} />;
}

export function List({ className, ...props }: BaseTabs.List.Props) {
  return <BaseTabs.List className={cn("fg-tabs__list", className)} {...props} />;
}

export function Tab({ className, ...props }: BaseTabs.Tab.Props) {
  return <BaseTabs.Tab className={cn("fg-tabs__tab", className)} {...props} />;
}

export function Indicator({ className, ...props }: BaseTabs.Indicator.Props) {
  return <BaseTabs.Indicator className={cn("fg-tabs__indicator", className)} {...props} />;
}

export function Panel({ className, ...props }: BaseTabs.Panel.Props) {
  return <BaseTabs.Panel className={cn("fg-tabs__panel", className)} {...props} />;
}
