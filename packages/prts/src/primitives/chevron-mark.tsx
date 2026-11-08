import type { ChevronMarkProps } from "#/types.ts";

export function ChevronMark({ direction }: ChevronMarkProps) {
  return <span aria-hidden="true" data-direction={direction} className="pr-chevron" />;
}
