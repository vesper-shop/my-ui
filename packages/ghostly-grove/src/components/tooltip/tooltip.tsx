import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { cn } from "#/lib/class-name.ts";

export const Provider = BaseTooltip.Provider;
export const Root = BaseTooltip.Root;
export const Trigger = BaseTooltip.Trigger;
export const Portal = BaseTooltip.Portal;

export function Positioner({ className, sideOffset = 8, ...props }: BaseTooltip.Positioner.Props) {
  return (
    <BaseTooltip.Positioner
      sideOffset={sideOffset}
      className={cn("gg-tooltip__positioner", className)}
      {...props}
    />
  );
}

export function Popup({ className, ...props }: BaseTooltip.Popup.Props) {
  return <BaseTooltip.Popup className={cn("gg-tooltip__popup", className)} {...props} />;
}
