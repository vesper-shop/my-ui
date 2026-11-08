import { Button as BaseButton } from "@base-ui/react/button";
import { cn } from "#/lib/class-name.ts";
import type { ButtonProps } from "#/types.ts";

export function Button({ variant = "default", className, ...props }: ButtonProps) {
  return <BaseButton data-variant={variant} className={cn("gg-button", className)} {...props} />;
}
