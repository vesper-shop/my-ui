export type AvatarStyle = "oc" | "vtuber" | "character" | "knot" | "chibi" | "cartoon" | "meme";

export interface Avatar {
  name: string;
  style: AvatarStyle;
  src: string;
  source: string;
}

export interface User {
  author: string;
  avatar: string;
}
