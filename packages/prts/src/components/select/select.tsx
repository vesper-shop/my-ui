import { Select as BaseSelect } from "@base-ui/react/select";
import { Children } from "react";
import { cn } from "#/lib/class-name.ts";
import { ChevronMark } from "#/primitives/chevron-mark.tsx";

export const Root = BaseSelect.Root;
export const Portal = BaseSelect.Portal;
export function Trigger({ className, ...props }: BaseSelect.Trigger.Props) {
  return <BaseSelect.Trigger className={cn("pr-select__trigger", className)} {...props} />;
}

export function Value({ className, ...props }: BaseSelect.Value.Props) {
  return <BaseSelect.Value className={cn("pr-select__value", className)} {...props} />;
}

export function Icon({ className, children, ...props }: BaseSelect.Icon.Props) {
  return (
    <BaseSelect.Icon className={cn("pr-select__icon", className)} {...props}>
      {Children.count(children) > 0 ? children : <ChevronMark direction="down" />}
    </BaseSelect.Icon>
  );
}

export function Popup({ className, ...props }: BaseSelect.Popup.Props) {
  return <BaseSelect.Popup className={cn("pr-select__popup", className)} {...props} />;
}

export function Item({ className, ...props }: BaseSelect.Item.Props) {
  return <BaseSelect.Item className={cn("pr-select__item", className)} {...props} />;
}

export function ItemText({ className, ...props }: BaseSelect.ItemText.Props) {
  return <BaseSelect.ItemText className={cn("pr-select__item-text", className)} {...props} />;
}

export function ItemIndicator({ className, children, ...props }: BaseSelect.ItemIndicator.Props) {
  return (
    <BaseSelect.ItemIndicator className={cn("pr-select__item-indicator", className)} {...props}>
      {Children.count(children) > 0 ? children : <span className="pr-select__check" />}
    </BaseSelect.ItemIndicator>
  );
}

export function Positioner({ className, sideOffset = 6, ...props }: BaseSelect.Positioner.Props) {
  return (
    <BaseSelect.Positioner
      sideOffset={sideOffset}
      alignItemWithTrigger={false}
      className={cn("pr-select__positioner", className)}
      {...props}
    />
  );
}
