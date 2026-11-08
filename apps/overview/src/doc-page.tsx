import { marked } from "marked";
import { copy, docs, localeHref } from "@/data";
import type { DocPageProps } from "@/types";

export function DocPage({ locale, doc }: DocPageProps) {
  const text = copy[locale];

  return (
    <main>
      <span className="stamp">
        {text.docs} / {text.groups[doc.group]} / {doc.title}
      </span>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: marked.parse(doc.source, { async: false }) }}
      />
      <ul className="doc-list">
        {docs[locale]
          .filter((other) => other.slug !== doc.slug)
          .map((other) => (
            <li key={other.slug}>
              <a href={localeHref(locale, `/docs/${other.slug}`)}>
                <small>{text.groups[other.group]}</small>
                {other.title}
              </a>
            </li>
          ))}
      </ul>
    </main>
  );
}
