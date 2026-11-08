import type { Button as BaseButton } from "@base-ui/react/button";
import type { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { Separator as BaseSeparator } from "@base-ui/react/separator";
import type { useRender } from "@base-ui/react/use-render";

export type ClassName<State> = string | ((state: State) => string | undefined) | undefined;

export type BadgeVariant = "default" | "secondary";

export interface BadgeProps extends useRender.ComponentProps<"span"> {
  variant?: BadgeVariant;
}

export type ButtonVariant = "default" | "ghost";

export interface ButtonProps extends BaseButton.Props {
  variant?: ButtonVariant;
}

export type SeparatorProps = BaseSeparator.Props;

export type CardPartProps = useRender.ComponentProps<"div">;

export type DialogPartProps = useRender.ComponentProps<"div">;

export type DialogCloseProps = BaseDialog.Close.Props;
