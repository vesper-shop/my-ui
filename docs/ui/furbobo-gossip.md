# furbobo-gossip

A bright, playful UI that looks like stickers and comics.

## What it looks like

An orange gradient sidebar sits beside a dotted, paper-coloured panel with big rounded corners.
Everything is outlined in dark brown "ink" with a hard offset shadow underneath, like stickers on
paper. Window titles are ink letters with a thick white outline around each glyph.

## How it moves

Buttons are orange pills that press down when clicked. The selected tab in a vertical list turns
into a white speech bubble. Cards warm up to a soft yellow when you hover over them.

## See it or use it

Run `pnpm demo:furbobo-gossip` to open its demo page, or find the Furbobo Gossip group in Storybook.

It isn't on npm yet, so for now it can only be used inside this repository. The Architecture
document explains how.

<details>
<summary>Technical details (for developers changing this UI)</summary>

Design reference: a gossip portal in a game, recorded at 2560×1600, sizes halved for a 1280 stage.
No game artwork or names.

### Use it

The package is `@my-ui/furbobo-gossip`. It isn't on npm yet; add it to an app in this repository as
described in the Architecture document. Then import its styles and load its fonts (Noto Sans SC and
Barlow):

```css
@import "@my-ui/furbobo-gossip/styles";
```

### Look

- Light by default: a `#f3933e → #f7b350` orange sidebar beside a `#eeebea` paper panel with a dot
  grid and 40px inner corners.
- Ink `#413835` draws outlines and 2×3px hard shadows; charcoal `#463c37` fills idle navigation.
- Accent `#ee8d23`, deep `#cb7105`, light `#fdc972`; tags `#e6741a`; logo sky `#36a8ea`.
- Noto Sans SC; Barlow for numbers and volume labels.
- Text steps: `text-2xs` 11px, `text-caption` 13px, `text-body` 15/26px.
- Cards: `#f9f9f8`, 1.5px border, 8px radius, hard shadow, `#fbf3df` on hover.
- Windows: 12px radius, dot grid, ink shadow, 16px blur. Titles are ink letters with a white
  outline around each glyph, breaking only at punctuation.

### Tokens

Colours: `ink`, `charcoal`, `charcoal-hover`, `accent-deep`, `accent-light`, `tag`,
`sidebar-from`, `sidebar-to`, `highlight`, `chip`, `badge`, `dot`, `paper`, `sky`, `sky-light`.

Others: `--text-2xs`, `--text-caption`, `--text-body`, `--pattern-dots`, `--size-control`,
`--size-frame`, `--shadow-hard`, `--radius-sheet`.

Utilities: `bg-dots`, `bg-sidebar`, `bg-banner`.

### Components

CSS classes start with `fg-`.

- `Tabs`: horizontal tabs are volume pills, orange with a pointer when active. Vertical tabs are
  charcoal buttons; the active one becomes a white speech bubble. `Tabs.Indicator` is hidden.
- `Card`: a grid with the 258×144 media on the right.
- `Dialog`: `--dialog-width` (1040px) and `--dialog-height` (610px). `Dialog.Close` without
  children renders the four-bar mark.
- `Button`: `default` is an orange pill with an ink outline that presses down; `ghost` is text.
- `Badge`: `default` is the small grey tag; `secondary` is a chip.
- `Toggle`: an outlined pill, orange with an ink drop when pressed; `ghost` turns orange.

### Primitives

- `close-mark`: four bars that spread on hover and close in on press.

</details>
