import { Input as BaseInput } from "@base-ui/react/input";
import { cn } from "#/lib/class-name.ts";
import type { InputProps } from "#/types.ts";

export function Input({ className, ...props }: InputProps) {
  return <BaseInput className={cn("pr-input", className)} {...props} />;
}
