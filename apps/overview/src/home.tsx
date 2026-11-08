import { copy, demoUrl, docs, localeHref, storybookUrl, uis } from "@/data";
import { type CSSProperties, useSyncExternalStore } from "react";
import { getPreviewHeights, subscribePreviewHeights } from "@/preview-heights";
import type { HomeProps } from "@/types";

export function Home({ locale }: HomeProps) {
  const text = copy[locale];
  const heights = useSyncExternalStore(subscribePreviewHeights, getPreviewHeights);

  return (
    <main>
      <section className="hero">
        <div>
          <span className="stamp">my-ui / 04</span>
          <h1>my-ui</h1>
          <p className="hero__tagline">
            <span className="highlight">{text.tagline}</span>
            {text.taglineRest}
          </p>
          <p className="hero__description">{text.description}</p>
          <div className="hero__actions">
            <a className="button" data-variant="primary" href={`${storybookUrl}/`}>
              {text.openStorybook}
            </a>
            <a
              className="button"
              data-variant="secondary"
              href={localeHref(locale, "/docs/architecture")}
            >
              {text.readArchitecture}
            </a>
          </div>
        </div>
        <div className="note spec">
          <span className="tape" />
          <p className="spec__label">{text.demos}</p>
          <ul>
            {uis.map((ui) => (
              <li key={ui.id}>
                <a href={demoUrl(ui)}>{ui.name[locale]}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="uis-heading">
        <header className="section__heading">
          <span className="stamp">{text.uisStamp}</span>
          <h2 id="uis-heading">{text.uisHeading}</h2>
        </header>
        <div className="ui-list">
          {uis.map((ui) => (
            <article key={ui.id} className="ui-card">
              <header className="ui-card__header">
                <h3>{ui.name[locale]}</h3>
                <p>{ui.style[locale]}</p>
              </header>
              <iframe
                title={`${ui.name[locale]} components`}
                src={`${storybookUrl}/iframe.html?id=${ui.id}-showcase--default&viewMode=story`}
                loading="lazy"
                className="ui-card__preview"
                style={
                  {
                    "--preview-height": `${heights[`${ui.id}-showcase--default`]}px`,
                  } as CSSProperties
                }
              />
              <nav className="ui-card__links" aria-label={`${ui.name[locale]} links`}>
                <a href={demoUrl(ui)}>{text.demo}</a>
                <a href={`${storybookUrl}/?path=/story/${ui.id}-showcase--default`}>Storybook</a>
                <a href={localeHref(locale, `/docs/ui/${ui.id}`)}>{text.designNotes}</a>
              </nav>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="docs-heading">
        <header className="section__heading">
          <span className="stamp">{text.docsStamp}</span>
          <h2 id="docs-heading">{text.docsHeading}</h2>
        </header>
        <ul className="doc-list">
          {docs[locale].map((doc) => (
            <li key={doc.slug}>
              <a href={localeHref(locale, `/docs/${doc.slug}`)}>
                <small>{text.groups[doc.group]}</small>
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
