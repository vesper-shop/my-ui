import type { ClassName } from "#/types.ts";

function join(base: string, extra: string | undefined) {
  return extra ? `${base} ${extra}` : base;
}

export function cn<State>(base: string, className: ClassName<State>) {
  if (typeof className === "function") {
    return (state: State) => join(base, className(state));
  }
  return join(base, className);
}
