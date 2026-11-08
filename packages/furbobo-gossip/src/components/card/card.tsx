import { useRender } from "@base-ui/react/use-render";
import { cn } from "#/lib/class-name.ts";
import type { CardPartProps } from "#/types.ts";

function part(defaultTagName: "div" | "h3" | "p", base: string) {
  return function Part({ render, className, ...props }: CardPartProps) {
    return useRender({
      defaultTagName,
      render,
      props: { ...props, className: cn(base, className) },
    });
  };
}

export const Root = part("div", "fg-card");
export const Media = part("div", "fg-card__media");
export const Body = part("div", "fg-card__body");
export const Header = part("div", "fg-card__header");
export const Avatar = part("div", "fg-card__avatar");
export const Title = part("h3", "fg-card__title");
export const Description = part("p", "fg-card__description");
export const Footer = part("div", "fg-card__footer");
