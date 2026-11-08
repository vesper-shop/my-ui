import type { CSSProperties } from "react";

export type StyleWithVars = CSSProperties & Record<`--${string}`, string>;

export type Section = "headlines" | "chat";

export interface SpeakerLine {
  speaker: string;
  text: string;
}

export type ArticleBlock =
  | { kind: "text"; text: string }
  | { kind: "image"; src: string }
  | { kind: "question"; label: string; text: string; asker: string }
  | { kind: "answer"; label: string; lines: SpeakerLine[] };

export interface ArticleSection {
  id: string;
  title: string;
  blocks: ArticleBlock[];
}

export interface Message {
  author: string;
  avatar: string;
  text: string;
}

export interface Comment extends Message {
  replies: Message[];
}

export interface Headline {
  title: string;
  cover: string;
}

export interface Volume {
  number: number;
  title: string;
  caption: string;
  cover: string;
  headlines: Headline[];
  sections: ArticleSection[];
  likes: number;
  comments: Comment[];
}

export interface ChatPost {
  id: number;
  title: string;
  tags: string[];
  text: string;
  author: string;
  avatar: string;
  isOfficial: boolean;
  location: string;
  likes: number;
  cover: string;
  hasVideo: boolean;
  comments: Comment[];
}

export interface CoverProps {
  src: string;
}

export interface UserAvatarProps {
  name: string;
  src: string;
  size: number;
}

export interface RichTextProps {
  text: string;
}

export interface CommentListProps {
  comments: Comment[];
}

export interface HeadlinesPageProps {
  volumeIndex: number;
  onVolumeChange: (index: number) => void;
  onOpenArticle: (volume: Volume) => void;
}

export interface LikeButtonProps {
  count: number;
  isLiked: boolean;
  onToggle: () => void;
}

export interface ChatPageProps {
  likedKeys: string[];
  onToggleLike: (key: string) => void;
  onOpenPost: (post: ChatPost) => void;
}

export interface ArticleDialogProps {
  volume: Volume;
  isLiked: boolean;
  onToggleLike: () => void;
}

export interface ChatDialogProps {
  post: ChatPost;
  isLiked: boolean;
  onToggleLike: () => void;
}

export interface Sponsor {
  name: string;
  tone: "sky" | "accent";
}

export interface SidebarProps {
  onOpenContact: () => void;
}
