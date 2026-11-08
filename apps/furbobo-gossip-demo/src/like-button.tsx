import { Toggle } from "@my-ui/furbobo-gossip";
import { Heart } from "lucide-react";
import type { LikeButtonProps } from "@/types";

export function LikeButton({ count, isLiked, onToggle }: LikeButtonProps) {
  return (
    <Toggle
      variant="ghost"
      pressed={isLiked}
      onPressedChange={onToggle}
      onClick={(event) => event.stopPropagation()}
      className="like font-display"
    >
      <Heart size={18} className="like__icon" />
      {count + (isLiked ? 1 : 0)}
    </Toggle>
  );
}
