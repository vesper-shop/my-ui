import type { CoverProps, StyleWithVars } from "@/types";

export function Cover({ src, ratio }: CoverProps) {
  const style: StyleWithVars = { "--ratio": `${ratio}` };

  return <img src={src} alt="" className="cover" style={style} />;
}
