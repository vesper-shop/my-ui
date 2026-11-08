import { Avatar } from "@my-ui/inter-knot";
import type { StyleWithVars, UserAvatarProps } from "@/types";

export function UserAvatar({ name, src, size }: UserAvatarProps) {
  const style: StyleWithVars = { "--avatar-size": `${size}px` };

  return (
    <Avatar.Root style={style}>
      <Avatar.Image src={src} alt={name} />
      <Avatar.Fallback>{name.slice(0, 1)}</Avatar.Fallback>
    </Avatar.Root>
  );
}
