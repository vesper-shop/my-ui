export type Locale = "en" | "zh";

export type DocGroup = "Guide" | "UIs";

export interface UiEntry {
  id: string;
  name: Record<Locale, string>;
  port: number;
  style: Record<Locale, string>;
}

export interface DocSource {
  slug: string;
  file: string;
  group: DocGroup;
}

export interface DocEntry {
  slug: string;
  group: DocGroup;
  title: string;
  source: string;
}

export interface Copy {
  tagline: string;
  taglineRest: string;
  description: string;
  openStorybook: string;
  readArchitecture: string;
  demos: string;
  uisStamp: string;
  uisHeading: string;
  demo: string;
  designNotes: string;
  docsStamp: string;
  docsHeading: string;
  groups: Record<DocGroup, string>;
  brandNote: string;
  overview: string;
  docs: string;
  pages: string;
  useLightTheme: string;
  useDarkTheme: string;
  otherLocale: string;
  otherLocaleLabel: string;
  notFound: string;
  backToOverview: string;
  links: string;
  source: string;
  designSystem: string;
}

export interface Route {
  locale: Locale;
  path: string;
}

export interface SiteHeaderProps {
  route: Route;
  isDark: boolean;
  onToggleTheme: () => void;
}

export interface HomeProps {
  locale: Locale;
}

export interface DocPageProps {
  locale: Locale;
  doc: DocEntry;
}

export interface PreviewHeightMessage {
  type: "my-ui:preview-height";
  id: string;
  height: number;
}
