import { Separator as BaseSeparator } from "@base-ui/react/separator";
import { cn } from "#/lib/class-name.ts";
import type { SeparatorProps } from "#/types.ts";

export function Separator({ className, ...props }: SeparatorProps) {
  return <BaseSeparator className={cn("ik-separator", className)} {...props} />;
}
