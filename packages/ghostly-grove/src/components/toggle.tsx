import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { cn } from "#/lib/class-name.ts";
import type { ToggleProps } from "#/types.ts";

export function Toggle({ variant = "default", className, ...props }: ToggleProps) {
  return <BaseToggle data-variant={variant} className={cn("gg-toggle", className)} {...props} />;
}
