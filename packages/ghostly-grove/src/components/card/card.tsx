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

export const Root = part("div", "gg-card");
export const Media = part("div", "gg-card__media");
export const Body = part("div", "gg-card__body");
export const Header = part("div", "gg-card__header");
export const Avatar = part("div", "gg-card__avatar");
export const Title = part("h3", "gg-card__title");
export const Description = part("p", "gg-card__description");
export const Footer = part("div", "gg-card__footer");
