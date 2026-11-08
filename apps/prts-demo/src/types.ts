import type { CSSProperties, ReactNode } from "react";

export type StyleWithVars = CSSProperties & Record<`--${string}`, string>;

export type Page = "settings" | "friends";

export type Section = "general" | "display" | "notice" | "account";

export type FriendsTab = "list" | "add" | "card";

export type ToastPlacement = "band" | "corner";

export interface Friend {
  id: number;
  name: string;
  tag: string;
  remark: string;
  level: number;
  avatar: string;
  status: string;
  isToday: boolean;
  isStarred: boolean;
}

export type Theme = "light" | "dark";

export type Language = "zh" | "en" | "ja";

export type QuietMode = "off" | "night" | "always";

export type DisplayMode = "window" | "borderless" | "fullscreen";

export interface DisplayModeOption {
  value: DisplayMode;
  label: string;
}

export interface Settings {
  language: Language;
  theme: Theme;
  autoUpdate: boolean;
  restore: boolean;
  scale: number;
  fontSize: number;
  reduceMotion: boolean;
  desktop: boolean;
  sound: boolean;
  volume: number;
  quiet: QuietMode;
  displayMode: DisplayMode;
  quietHour: number;
  quietMinute: number;
  nickname: string;
}

export interface Profile {
  name: string;
  tag: string;
  level: number;
  uid: string;
  joined: string;
  signature: string;
  avatar: string;
  background: string;
}

export interface Moment {
  id: number;
  title: string;
  caption: string;
  src: string;
}

export interface Device {
  id: number;
  name: string;
  detail: string;
  isCurrent: boolean;
}

export interface NotifyProps {
  onNotify: (message: string, placement: ToastPlacement) => void;
}

export interface NavigateProps {
  onNavigate: (page: Page) => void;
}

export interface NavBarProps {
  onBack: () => void;
  children: ReactNode;
}

export interface PlayerAvatarProps {
  name: string;
  src: string;
  level: number;
  size: number;
}

export interface FriendRowProps extends NotifyProps {
  friend: Friend;
}

export interface SegmentedOption<Value extends string> {
  value: Value;
  label: string;
}

export interface SegmentedProps<Value extends string> {
  options: SegmentedOption<Value>[];
  value: Value;
  onChange: (value: Value) => void;
}

export interface SettingRowProps {
  label: string;
  note: string | null;
  children: ReactNode;
}

export interface ConfirmBandProps {
  message: string;
  onConfirm: () => void;
}

export interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface ValueSliderProps {
  value: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  onChange: (value: number) => void;
}
