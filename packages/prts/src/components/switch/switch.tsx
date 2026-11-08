import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { cn } from "#/lib/class-name.ts";

export function Root({ className, ...props }: BaseSwitch.Root.Props) {
  return <BaseSwitch.Root className={cn("pr-switch", className)} {...props} />;
}

export function Thumb({ className, ...props }: BaseSwitch.Thumb.Props) {
  return <BaseSwitch.Thumb className={cn("pr-switch__thumb", className)} {...props} />;
}
