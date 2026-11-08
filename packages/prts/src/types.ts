import type { Button as BaseButton } from "@base-ui/react/button";
import type { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { Input as BaseInput } from "@base-ui/react/input";
import type { Separator as BaseSeparator } from "@base-ui/react/separator";
import type { Toggle as BaseToggle } from "@base-ui/react/toggle";
import type { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
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

export type InputProps = BaseInput.Props;

export type SeparatorProps = BaseSeparator.Props;

export type ToggleVariant = "default" | "ghost";

export interface ToggleProps extends BaseToggle.Props {
  variant?: ToggleVariant;
}

export type ToggleGroupProps = BaseToggleGroup.Props;

export type CardPartProps = useRender.ComponentProps<"div">;

export type DialogPartProps = useRender.ComponentProps<"div">;

export type DialogCloseProps = BaseDialog.Close.Props;

export interface ChevronMarkProps {
  direction: "up" | "down";
}
