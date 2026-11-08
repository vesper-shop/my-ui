# Deployment

This page explains how to put the website online. The website is the overview site, the Storybook
component gallery and every demo page, and they go online together.

Note that this is not the same as publishing the UIs to npm. That hasn't happened yet.

## Three steps to go live

```bash
pnpm install
pnpm check && pnpm test && pnpm e2e
pnpm run deploy
```

The first installs the dependencies, the second makes sure every check passes, and the third
builds the site and uploads it.

The first upload opens a browser so you can sign in to Cloudflare; after that you stay signed in.

## The address

The site lives at https://ui.you-find.me. Every push to `main` on GitHub also builds and deploys
it on Cloudflare.

<details>
<summary>Technical details</summary>

The site is a static Cloudflare Worker deployed with Void. Configuration lives in
`void.config.ts`; Void generates the Wrangler config, so the repository has no `wrangler.json`.

`pnpm build` writes the whole site to `dist/`:

| Path          | Content                                                    |
| ------------- | ---------------------------------------------------------- |
| `/`           | the overview site: introduction, live previews and `docs/` |
| `/zh/`        | the overview site in Chinese                               |
| `/storybook/` | Storybook, every component of every UI                     |
| `/<ui>/`      | that UI's demo                                             |

The site builds first because it empties `dist/`. Storybook then builds into `dist/storybook/`
and each demo into `dist/<ui>/`, both with relative asset paths. Other paths fall back to the
site, which renders the documents under `/docs/` and `/zh/docs/` and a not-found page for the
rest. That fallback needs `appType: "spa"` and `routing.notFound: "single-page-application"` in
`void.config.ts`; with `appType: "static"` Void serves a 404 instead.

Use `pnpm run deploy`, not `pnpm deploy`, which is a built-in pnpm command. It runs
`void deploy --platform cloudflare`, which runs `pnpm run build` and uploads
`dist/` as the Worker's assets. The Worker is named `my-ui` and serves only the custom domain under `cloudflare.routes`;
`workers.dev` and preview URLs are off. Workers Builds is connected to `vesper-shop/my-ui` and
runs `pnpm run build`, then `pnpm exec void deploy --platform cloudflare`.

</details>
