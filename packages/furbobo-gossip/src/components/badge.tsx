import { useRender } from "@base-ui/react/use-render";
import { cn } from "#/lib/class-name.ts";
import type { BadgeProps } from "#/types.ts";

export function Badge({ render, variant = "default", className, ...props }: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    render,
    state: { variant },
    props: { ...props, className: cn("fg-badge", className) },
  });
}
