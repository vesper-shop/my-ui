import type { CSSProperties } from "react";

export type StyleWithVars = CSSProperties & Record<`--${string}`, string>;

export type Page = "feed" | "schedule";

export type PostChannel = "fairy" | "help" | "daily";

export type ChannelFilter = PostChannel | "all";

export interface Comment {
  author: string;
  avatar: string;
  text: string;
}

export interface Post {
  id: number;
  channel: PostChannel;
  tag: string | null;
  author: string;
  avatar: string;
  title: string;
  excerpt: string;
  body: string;
  cover: CoverProps;
  likes: number;
  replies: string[];
  comments: Comment[];
}

export type QuestKind = "main" | "event" | "agent" | "city";

export type QuestFilter = QuestKind | "all";

export interface Objective {
  text: string;
  current: number;
  total: number;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  cover: string;
  objectives: Objective[];
}

export interface QuestGroup {
  id: string;
  kind: QuestKind;
  title: string;
  unlocks: boolean;
  isNew: boolean;
  quests: Quest[];
}

export interface FilterTab<Value extends string> {
  value: Value;
  label: string;
  isNew: boolean;
}

export interface CoverProps {
  src: string;
  ratio: number;
}

export interface UserAvatarProps {
  name: string;
  src: string;
  size: number;
}

export interface TopBarProps {
  page: Page;
  onPageChange: (page: Page) => void;
}

export interface PostCardProps {
  post: Post;
  isRead: boolean;
  onOpen: () => void;
}

export interface PostWindowProps {
  post: Post;
  isRead: boolean;
  onReply: (text: string) => void;
}

export interface QuestDetailProps {
  quest: Quest;
  isTracked: boolean;
  onToggleTrack: () => void;
}

export interface QuestGroupCardProps {
  group: QuestGroup;
  isNew: boolean;
  selectedId: string;
  onSelect: (quest: Quest) => void;
}

export interface FilterTabsProps<Value extends string> {
  tabs: FilterTab<Value>[];
  value: Value;
  onChange: (value: Value) => void;
  listClassName: string;
  tabClassName: string;
}
