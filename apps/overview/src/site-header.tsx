import { Cat, Moon, Sun } from "lucide-react";
import { copy, localeHref, storybookUrl } from "@/data";
import type { SiteHeaderProps } from "@/types";

export function SiteHeader({ route, isDark, onToggleTheme }: SiteHeaderProps) {
  const { locale, path } = route;
  const text = copy[locale];
  const otherLocale = locale === "zh" ? "en" : "zh";

  return (
    <header className="masthead">
      <a className="masthead__brand" href={localeHref(locale, "/")}>
        <Cat className="masthead__mark" size={22} strokeWidth={1.35} aria-hidden="true" />
        <span>
          my-ui
          <small>{text.brandNote}</small>
        </span>
      </a>
      <nav className="masthead__pages" aria-label={text.pages}>
        <a href={localeHref(locale, "/")} aria-current={path === "" ? "page" : "false"}>
          {text.overview}
        </a>
        <a
          href={localeHref(locale, "/docs/architecture")}
          aria-current={path.startsWith("/docs") ? "page" : "false"}
        >
          {text.docs}
        </a>
        <a href={`${storybookUrl}/`}>Storybook</a>
      </nav>
      <a
        className="masthead__locale"
        href={localeHref(otherLocale, path || "/")}
        hrefLang={otherLocale === "zh" ? "zh-CN" : "en"}
        aria-label={text.otherLocaleLabel}
      >
        {text.otherLocale}
      </a>
      <button
        type="button"
        aria-label={isDark ? text.useLightTheme : text.useDarkTheme}
        onClick={onToggleTheme}
        className="theme-toggle"
      >
        {isDark ? <Sun size={17} strokeWidth={1.6} /> : <Moon size={17} strokeWidth={1.6} />}
      </button>
    </header>
  );
}
