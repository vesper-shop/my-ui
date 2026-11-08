import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { useRender } from "@base-ui/react/use-render";
import { Children } from "react";
import { cn } from "#/lib/class-name.ts";
import type { DialogCloseProps, DialogPartProps } from "#/types.ts";
import { CloseMark } from "#/primitives/close-mark.tsx";

export const Root = BaseDialog.Root;
export const Trigger = BaseDialog.Trigger;
export const Portal = BaseDialog.Portal;

export function Backdrop({ className, ...props }: BaseDialog.Backdrop.Props) {
  return <BaseDialog.Backdrop className={cn("fg-dialog__backdrop", className)} {...props} />;
}

export function Popup({ className, ...props }: BaseDialog.Popup.Props) {
  return <BaseDialog.Popup className={cn("fg-dialog__popup", className)} {...props} />;
}

export function Header({ render, className, ...props }: DialogPartProps) {
  return useRender({ render, props: { ...props, className: cn("fg-dialog__header", className) } });
}

export function Body({ render, className, ...props }: DialogPartProps) {
  return useRender({ render, props: { ...props, className: cn("fg-dialog__body", className) } });
}

export function Title({ className, ...props }: BaseDialog.Title.Props) {
  return <BaseDialog.Title className={cn("fg-dialog__title", className)} {...props} />;
}

export function Description({ className, ...props }: BaseDialog.Description.Props) {
  return <BaseDialog.Description className={cn("fg-dialog__description", className)} {...props} />;
}

export function Close({ className, children, ...props }: DialogCloseProps) {
  if (Children.count(children) > 0) {
    return (
      <BaseDialog.Close className={className} {...props}>
        {children}
      </BaseDialog.Close>
    );
  }
  return (
    <BaseDialog.Close aria-label="Close" className={cn("fg-dialog__close", className)} {...props}>
      <CloseMark />
    </BaseDialog.Close>
  );
}
