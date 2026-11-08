import type { CoverProps } from "@/types";

export function Cover({ src }: CoverProps) {
  return <img src={src} alt="" className="cover" />;
}
