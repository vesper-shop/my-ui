import { Progress as BaseProgress } from "@base-ui/react/progress";
import { cn } from "#/lib/class-name.ts";

export function Root({ className, ...props }: BaseProgress.Root.Props) {
  return <BaseProgress.Root className={cn("ik-progress", className)} {...props} />;
}

export function Track({ className, ...props }: BaseProgress.Track.Props) {
  return <BaseProgress.Track className={cn("ik-progress__track", className)} {...props} />;
}

export function Indicator({ className, ...props }: BaseProgress.Indicator.Props) {
  return <BaseProgress.Indicator className={cn("ik-progress__indicator", className)} {...props} />;
}

export function Value({ className, ...props }: BaseProgress.Value.Props) {
  return <BaseProgress.Value className={cn("ik-progress__value", className)} {...props} />;
}

export function Label({ className, ...props }: BaseProgress.Label.Props) {
  return <BaseProgress.Label className={cn("ik-progress__label", className)} {...props} />;
}
