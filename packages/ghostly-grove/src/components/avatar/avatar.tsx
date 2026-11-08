import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cn } from "#/lib/class-name.ts";

export function Root({ className, ...props }: BaseAvatar.Root.Props) {
  return <BaseAvatar.Root className={cn("gg-avatar", className)} {...props} />;
}

export function Image({ className, ...props }: BaseAvatar.Image.Props) {
  return <BaseAvatar.Image className={cn("gg-avatar__image", className)} {...props} />;
}

export function Fallback({ className, ...props }: BaseAvatar.Fallback.Props) {
  return <BaseAvatar.Fallback className={cn("gg-avatar__fallback", className)} {...props} />;
}
