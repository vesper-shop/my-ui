import { useState } from "react";
import { copy, docs, links, localeHref, parseRoute } from "@/data";
import { DocPage } from "@/doc-page";
import { Home } from "@/home";
import { SiteHeader } from "@/site-header";

export function App() {
  const route = parseRoute(window.location.pathname);
  const text = copy[route.locale];
  const doc = docs[route.locale].find((item) => `/docs/${item.slug}` === route.path);
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains("dark"));

  function toggleTheme() {
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  }

  return (
    <div className="page">
      <SiteHeader route={route} isDark={isDark} onToggleTheme={toggleTheme} />
      {route.path === "" && <Home locale={route.locale} />}
      {doc && <DocPage locale={route.locale} doc={doc} />}
      {route.path !== "" && !doc && (
        <main className="section__heading">
          <span className="stamp">404</span>
          <h2>{text.notFound}</h2>
          <p>
            <a href={localeHref(route.locale, "/")}>{text.backToOverview}</a>
          </p>
        </main>
      )}
      <footer className="footer">
        <span>my-ui</span>
        <nav className="footer__links" aria-label={text.links}>
          <a href={links.source}>{text.source}</a>
          <a href={links.github}>GitHub</a>
          <a href={links.x}>X</a>
          <a href={links.designSystem}>{text.designSystem}</a>
        </nav>
      </footer>
    </div>
  );
}
