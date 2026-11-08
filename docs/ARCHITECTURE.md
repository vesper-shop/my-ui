# Architecture

my-ui is a few component libraries that look completely different. A component that two of them
share is used in exactly the same way in both.

Think of it as one skeleton with several skins. The skeleton decides how components work: how a
button reacts to a click, how a dropdown opens, whether you can use the keyboard. That part comes
from an open-source library called Base UI, and every skin shares it. The skin decides how
components look, and in this repository each skin is called a "UI".

Each UI only has the components its own reference shows; nothing is made up to fill a gap.
Because the skeleton is the same, a page built from shared components can switch style by swapping
which UI it uses, without changing its code.

## What's in the repository

- **Four UIs**: in the `packages` folder, one sub-folder each.
- **The overview site**: the project's home page, the site you're reading now.
- **Storybook**: a component gallery where you can look at every component of every UI one by
  one.
- **Demo pages**: one per UI, a full page built with that UI to show how its parts look together.
- **Avatar library**: the meme and character avatars the demo pages use, kept in one place with the source of each. The avatars belong to their owners.
- **Docs**: these articles, in English and Chinese.
- **Tests**: automatic checks that the components still work.
- **Promo**: the setup for making a promo video of the project.

## Running it on your computer

Install Node.js and pnpm, then run these in the repository folder:

```bash
pnpm install
pnpm dev
```

The first installs the dependencies; the second starts the overview site, Storybook and every demo
together. Then open http://localhost:5173/ for the overview site; everything else is linked from
there.

After changing code, run `pnpm check`, `pnpm test` and `pnpm e2e` to make sure nothing broke.

## Using a UI in a project

The UIs are **not published to npm yet**, so you can't install them into another project with one
command. For now they can only be used inside this repository.

To build a new page in the repository with one of the UIs, the quickest way is to copy from an
existing demo page: find it in the `apps` folder, see how it brings in the UI, its styles and its
fonts, and do the same.

## How a UI is organised

- Every component has its own code and its own styles, and they don't interfere with each other.
- Colours, corner rounding and shadows are given names and kept in one file. To change a whole
  UI's colours, you edit only that file.
- Small drawings such as the close button and the dropdown arrow are drawn by each UI itself.
- A UI's styles apply to the whole page, so one page can only use one UI.

## Adding a UI

You need four things: the UI itself, its examples in Storybook, a demo page, and the command that
starts the demo. Copying any existing UI and changing it is the easiest way.

<details>
<summary>Technical details (for developers changing the code)</summary>

### Local addresses

| App | Address | Started alone with |
| --- | --- | --- | --- | --- | --- |
| Overview site | http://localhost:5173/ | - |
| Storybook | http://localhost:6006/ | `pnpm storybook` |
| inter-knot | http://localhost:5181/ | `pnpm demo:inter-knot` |
| ghostly-grove | http://localhost:5182/ | `pnpm demo:ghostly-grove` |
| furbobo-gossip | http://localhost:5183/ | `pnpm demo:furbobo-gossip` |
| prts | http://localhost:5184/ | `pnpm demo:prts` |

### Using a UI in an app

1. Add `"@my-ui/prts": "workspace:*"` to the app's `dependencies`.
2. In the app's CSS, write `@import "@my-ui/prts/styles";` and `@source "./";`. The styles are
   Tailwind CSS v4, so the Vite config needs `@tailwindcss/vite`.
3. Load the UI's fonts in `index.html`.
4. Put `Toast.Provider` and `Tooltip.Provider` once near the root.

### Layout

```
packages/<ui>/
├─ package.json           # @my-ui/<ui>; exports `.` and `./styles`; imports `#/*` → src/*
└─ src/
   ├─ components/         # a .tsx and a .css per component; compound ones are a folder
   ├─ primitives/         # marks unique to the UI: close, chevron
   ├─ lib/class-name.ts   # cn, internal
   ├─ styles/
   │  ├─ palette.css      # raw values
   │  ├─ tokens.css       # semantic tokens
   │  ├─ utilities.css    # @utility, @property, @keyframes
   │  └─ app.css          # entry: tailwindcss, tokens, utilities, components
   ├─ types.ts
   └─ index.ts
packages/avatars/         # avatars shared by the demos: images and sources (src/index.ts)
apps/storybook/src/<ui>/  # styles.css and <component>.stories.tsx
apps/<ui>-demo/           # a page built only from @my-ui/<ui>
apps/overview/            # the overview site; renders docs/
docs/                     # these documents; zh/ holds the Chinese translation of each
promo/                    # the promo video (HyperFrames): storylines, spec, compositions, footage
tests/
├─ unit/                  # shared interface, stylesheet rules, component behaviour (jsdom)
└─ e2e/                   # one Playwright project per demo, run in the installed Chrome
```

Every UI's stylesheet writes to `:root`, so Storybook loads each with `?inline` and keeps only the
active one. A story's UI is the first segment of its title (`prts/Button`).

A new UI adds its package, its stories, a demo, and a `demo:<ui>` script in the root
`package.json`.

### Components

Each UI exports only the components its reference recording shows. A component two UIs share has
the same parts and props in both. Compound components are namespaces whose parts keep Base UI's
names.

| Export        | Inter-Knot | Ghostly Grove | Furbobo Gossip | PRTS | Parts / props                                                                                            |
| ------------- | ---------- | ------------- | -------------- | ---- | -------------------------------------------------------------------------------------------------------- |
| `Avatar`      | ✓          | ✓             | ✓              | ✓    | `Root`, `Image`, `Fallback`                                                                              |
| `Badge`       | ✓          | ✓             | ✓              | ✓    | `variant`: `"default" \| "secondary"`                                                                    |
| `Button`      | ✓          | ✓             | ✓              | ✓    | `variant`: `"default" \| "ghost"`                                                                        |
| `Card`        | ✓          | ✓             | ✓              | ✓    | `Root`, `Media`, `Body`, `Header`, `Avatar`, `Title`, `Description`, `Footer`                            |
| `Dialog`      | ✓          | ✓             | ✓              | ✓    | Base UI parts plus `Header` and `Body`                                                                   |
| `Input`       |            |               |                | ✓    | Base UI props                                                                                            |
| `NumberField` |            |               |                | ✓    | `Root`, `Group`, `Input`, `Increment`, `Decrement`                                                       |
| `Progress`    | ✓          |               |                | ✓    | `Root`, `Track`, `Indicator`, `Value`, `Label`                                                           |
| `Select`      |            |               |                | ✓    | `Root`, `Trigger`, `Value`, `Icon`, `Portal`, `Positioner`, `Popup`, `Item`, `ItemText`, `ItemIndicator` |
| `Separator`   | ✓          | ✓             | ✓              | ✓    | Base UI props                                                                                            |
| `Slider`      |            |               |                | ✓    | `Root`, `Control`, `Track`, `Indicator`, `Thumb`, `Value`                                                |
| `Switch`      | ✓          |               |                | ✓    | `Root`, `Thumb`                                                                                          |
| `Tabs`        | ✓          | ✓             | ✓              | ✓    | `Root`, `List`, `Tab`, `Indicator`, `Panel`                                                              |
| `Toast`       |            |               |                | ✓    | `Provider`, `Portal`, `Viewport`, `Root`, `Title`, `Description`, `Close`, `Action`, `useToastManager`   |
| `Toggle`      |            | ✓             | ✓              | ✓    | `variant`: `"default" \| "ghost"`                                                                        |
| `ToggleGroup` |            |               |                | ✓    | Base UI props; lays out toggles only                                                                     |
| `Tooltip`     | ✓          | ✓             | ✓              | ✓    | `Provider`, `Root`, `Trigger`, `Portal`, `Positioner`, `Popup`                                           |

- `Badge`, `Card.*`, `Dialog.Header` and `Dialog.Body` have no Base UI counterpart; they use
  `useRender`, so they accept `render`.
- `Dialog.Close`, `Select.Icon`, `Select.ItemIndicator` and the `NumberField` steppers draw the
  UI's own mark when given no children.
- Components never select each other's markup. One sizes another through a variable:

| Variable | Read by | Default |
| --- | --- | --- | --- | --- | --- |
| `--avatar-size` | `Avatar.Root` | `40px` |
| `--avatar-ring` | `Avatar.Root` | the UI's ring, if any |
| `--dialog-width` | `Dialog.Popup` | the UI's window width |

### Tokens

- `palette.css` holds raw values. Only `tokens.css` reads `--palette-*`.
- Colour, font, radius and shadow tokens are declared once in `@theme static`, so
  `var(--color-accent)` and `bg-accent` read the same variable. Tailwind's default colours, radii
  and shadows are reset. `--pattern-*`, `--size-*` and `--duration-*` sit on `:root`.
- Colours are `light-dark()` pairs. Each UI sets its default `color-scheme` on `:root`;
  `:root.light` and `:root.dark` switch it.
- A token equal to another refers to it: `--color-focus: var(--color-accent)`.
- Patterns are `@utility` rules in `utilities.css`. A utility must not share a name with a colour
  utility.
- Fonts are named by tokens and loaded by the app (`preview-head.html`, each demo's `index.html`).

Every UI defines:

- Colour: `background`, `surface`, `surface-sunken`, `surface-raised`, `foreground`,
  `muted-foreground`, `subtle-foreground`, `disabled-foreground`, `border`, `divider`, `accent`,
  `accent-foreground`, `danger`, `success`, `warning`, `focus`, `overlay`
- `--font-sans`, `--font-display`, `--font-mono`
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- `--duration-fast`, `--duration-base`, `--duration-slow`, zeroed under reduced motion

### Dependencies

A UI depends only on Base UI, React and its own files; UIs never import each other. Shared tooling
is pinned in the root `package.json`. `vite` is aliased to `@voidzero-dev/vite-plus-core`; keep its
version equal to `vite-plus`.

</details>
