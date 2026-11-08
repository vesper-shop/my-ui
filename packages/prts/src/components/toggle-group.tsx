import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import { cn } from "#/lib/class-name.ts";
import type { ToggleGroupProps } from "#/types.ts";

export function ToggleGroup({ className, ...props }: ToggleGroupProps) {
  return <BaseToggleGroup className={cn("pr-toggle-group", className)} {...props} />;
}
