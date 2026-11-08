import { Button as BaseButton } from "@base-ui/react/button";
import { mergeProps } from "@base-ui/react/merge-props";
import { cn } from "#/lib/class-name.ts";
import type { ButtonProps } from "#/types.ts";

export function Button({
  variant = "default",
  className,
  onPointerDown,
  onClick,
  onAnimationEnd,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      data-variant={variant}
      className={cn("ik-button", className)}
      {...mergeProps<"button">(
        {
          onPointerDown(event) {
            const button = event.currentTarget;
            button.removeAttribute("data-pressing");
            button.getBoundingClientRect();
            button.setAttribute("data-pressing", "");
          },
          onClick(event) {
            event.currentTarget.setAttribute("data-pressing", "");
          },
          onAnimationEnd(event) {
            if (event.animationName === "ik-press") {
              event.currentTarget.removeAttribute("data-pressing");
            }
          },
        },
        { onPointerDown, onClick, onAnimationEnd },
      )}
      {...props}
    />
  );
}
