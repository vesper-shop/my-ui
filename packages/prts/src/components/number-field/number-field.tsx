import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { Children } from "react";
import { cn } from "#/lib/class-name.ts";
import { ChevronMark } from "#/primitives/chevron-mark.tsx";

export function Root({ className, ...props }: BaseNumberField.Root.Props) {
  return <BaseNumberField.Root className={cn("pr-number-field", className)} {...props} />;
}

export function Group({ className, ...props }: BaseNumberField.Group.Props) {
  return <BaseNumberField.Group className={cn("pr-number-field__group", className)} {...props} />;
}

export function Input({ className, ...props }: BaseNumberField.Input.Props) {
  return <BaseNumberField.Input className={cn("pr-number-field__input", className)} {...props} />;
}

export function Increment({ className, children, ...props }: BaseNumberField.Increment.Props) {
  return (
    <BaseNumberField.Increment className={cn("pr-number-field__increment", className)} {...props}>
      {Children.count(children) > 0 ? children : <ChevronMark direction="up" />}
    </BaseNumberField.Increment>
  );
}

export function Decrement({ className, children, ...props }: BaseNumberField.Decrement.Props) {
  return (
    <BaseNumberField.Decrement className={cn("pr-number-field__decrement", className)} {...props}>
      {Children.count(children) > 0 ? children : <ChevronMark direction="down" />}
    </BaseNumberField.Decrement>
  );
}
