import type { CSSProperties } from "react";

export type StyleWithVars = CSSProperties & Record<`--${string}`, string>;

export type PostStatus = "read" | "done" | "new";

export interface Message {
  author: string;
  avatar: string;
  text: string;
}

export interface Comment extends Message {
  replies: Message[];
}

export interface Post {
  id: number;
  title: string;
  topics: string[];
  text: string;
  tag: string | null;
  status: PostStatus;
  likes: number;
  cover: string;
  comments: Comment[];
}

export interface Stat {
  label: string;
  value: number;
  hint: string;
  tone: "gold" | "teal";
}

export interface FanPoint {
  x: number;
  fans: number;
}

export interface Level {
  name: string;
  threshold: string;
  x: number;
  hasMedal: boolean;
}

export interface PlanTask extends Message {
  mark: "diamond" | "triangle";
}

export interface PlanPage {
  summary: string;
  section: string;
  tasks: PlanTask[];
}

export interface CoverProps {
  src: string;
}

export interface UserAvatarProps {
  name: string;
  src: string;
  size: number;
}

export interface PostCardProps {
  post: Post;
  onOpen: () => void;
}

export interface PostPopupProps {
  post: Post;
  isLiked: boolean;
  onLike: () => void;
}

export interface FansPanelProps {
  onOpenPlan: () => void;
}

export interface PostsPanelProps {
  posts: Post[];
  onOpen: (post: Post) => void;
}
