import { Avatar } from "@my-ui/prts";
import type { PlayerAvatarProps, StyleWithVars } from "@/types";

export function PlayerAvatar({ name, src, level, size }: PlayerAvatarProps) {
  const style: StyleWithVars = { "--avatar-size": `${size}px` };

  return (
    <span className="player-avatar">
      <Avatar.Root style={style}>
        <Avatar.Image src={src} alt={name} />
        <Avatar.Fallback>{name.slice(0, 1)}</Avatar.Fallback>
      </Avatar.Root>
      <span className="player-avatar__level">{level}</span>
    </span>
  );
}
