import { Toast as BaseToast } from "@base-ui/react/toast";
import { cn } from "#/lib/class-name.ts";

export const Provider = BaseToast.Provider;
export const Portal = BaseToast.Portal;
export const useToastManager = BaseToast.useToastManager;

export function Viewport({ className, ...props }: BaseToast.Viewport.Props) {
  return <BaseToast.Viewport className={cn("pr-toast__viewport", className)} {...props} />;
}

export function Root({ className, ...props }: BaseToast.Root.Props) {
  return <BaseToast.Root className={cn("pr-toast", className)} {...props} />;
}

export function Title({ className, ...props }: BaseToast.Title.Props) {
  return <BaseToast.Title className={cn("pr-toast__title", className)} {...props} />;
}

export function Description({ className, ...props }: BaseToast.Description.Props) {
  return <BaseToast.Description className={cn("pr-toast__description", className)} {...props} />;
}

export function Close({ className, ...props }: BaseToast.Close.Props) {
  return <BaseToast.Close className={cn("pr-toast__close", className)} {...props} />;
}

export function Action({ className, ...props }: BaseToast.Action.Props) {
  return <BaseToast.Action className={cn("pr-toast__action", className)} {...props} />;
}
