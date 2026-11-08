# AGENTS

`my-ui` is a `pnpm` workspace holding a collection of React UIs whose visual styles may differ
completely. Every UI builds its behaviour on Base UI and keeps the same package layout; only the
appearance belongs to the UI.

## Read These First

- Architecture: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Code style guide: [docs/STYLEGUIDE.md](docs/STYLEGUIDE.md)
- Each UI's design language: `docs/ui/<ui>.md`
- Deployment: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)

## Layout

| Path                | Role                                                      |
| ------------------- | --------------------------------------------------------- |
| `packages/<ui>/`    | One style: components and styles                          |
| `packages/avatars/` | Shared avatar images for the demos, with their sources    |
| `apps/storybook/`   | The single Storybook; stories for every UI                |
| `apps/<ui>-demo/`   | A demo page per UI, built only from that UI's package     |
| `apps/overview/`    | The overview site: introduction, previews, documents      |
| `tests/`            | Unit and end-to-end tests for every UI                    |
| `promo/`            | The promo video (HyperFrames), set up like Vesper's       |
| `docs/`             | Architecture, style guide, and one design document per UI |

## Commands

```bash
pnpm install
pnpm check                     # formatting, lint, and TypeScript across the workspace
pnpm build                     # build dist/: the overview site, Storybook, every demo
pnpm test                      # unit tests
pnpm e2e                       # end-to-end tests against every demo
pnpm dev                       # the overview site, Storybook and every demo together
pnpm storybook                 # Storybook for every UI
pnpm demo:<ui>                 # one UI's demo page
pnpm run deploy                # build and deploy the site to Cloudflare with Void
```

## Rules

- Do not add a UI, component, or sample content the user has not asked for.
- Every UI follows the package layout in `docs/ARCHITECTURE.md`; UIs never import each other.
- Behaviour comes from Base UI. A UI wraps Base UI parts and changes only structure and appearance.
- Components reference semantic tokens only; `--palette-*` variables appear only in `tokens.css`.
- Pin every dependency to an exact version.

## Change Checklist

1. Run `pnpm check`, `pnpm test`, and `pnpm e2e`.
2. If directory responsibilities or UI conventions changed, update `docs/ARCHITECTURE.md`.
3. If a UI's tokens or primitives changed, update `docs/ui/<ui>.md`.
