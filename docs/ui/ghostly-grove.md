# ghostly-grove

A dark teal UI, quiet and a little science-fiction.

## What it looks like

The background is a dark, slightly teal grey. Cards and windows have square corners and thin grey
frames. Titles are cyan, body text a soft grey-green, and data panels give off a faint cyan glow. A
hexagon pattern shows faintly in the background.

## How it moves

Hover over a card and its frame lightens. A selected navigation button fills with a blue gradient
with fading hexagons inside. Windows grow slightly into place while the page behind them blurs.

## See it or use it

Run `pnpm demo:ghostly-grove` to open its demo page, or find the Ghostly Grove group in Storybook.

It isn't on npm yet, so for now it can only be used inside this repository. The Architecture
document explains how.

<details>
<summary>Technical details (for developers changing this UI)</summary>

Design reference: the blogger pages of a game, recorded at 2560×1600, sizes × 0.75 for a 1920 stage.
No game artwork.

### Use it

The package is `@my-ui/ghostly-grove`. It isn't on npm yet; add it to an app in this repository as
described in the Architecture document. Then import its styles and load its fonts (Noto Sans SC and
Barlow Semi Condensed):

```css
@import "@my-ui/ghostly-grove/styles";
```

### Look

- Dark teal: page `#141619`, cards `#1b1c23`, windows `#23242d`.
- Noto Sans SC; numbers in Barlow Semi Condensed.
- Square 2px `#3b3e44` frames. Cards lighten to `#a6b0b5` on hover; data panels glow cyan
  `#6efff8`.
- Titles cyan, 26px on cards and 28px in windows. Body `#879c9e`, 20px on cards and 22px in
  windows. Comments `#8ea1a6` 20/30px; links `#5ad7d6`; stat labels gold `#e5c67b`.
- Navigation tabs are 300×57: grey frame idle, cyan on hover, a `#216985 → #245c79` fill with a
  fading hex pattern when active.
- Tooltips: `#111617` panel, 2px teal frame, cyan text, a notch.
- Windows: 5px teal left rule over a hex pattern, scaling in from 0.98; the overlay blurs 14px.

### Tokens

Colours: `title`, `link`, `glow`, `value`, `label`, `comment`, `border-hover`, `tooltip`,
`nav-from`, `nav-to`, `plan`, `band`, `band-deep`, `rule`, `star`, `avatar`, `stage-glow`,
`stage-mist`, `stage-base`.

Others: `--pattern-hex`, `--font-numeric`, `--size-nav-width`, `--size-nav-height`,
`--size-frame`, `--shadow-glow`.

Utilities: `bg-hex`, `bg-grove-stage`, `bg-grove-band`.

### Components

CSS classes start with `gg-`.

- `Card`: a grid; `Card.Body` is `display: contents`, and the 300×170 media sits beside the text.
- `Tabs`: the navigation buttons; `Tabs.Indicator` is hidden.
- `Dialog`: `--dialog-width` (1328px) and `--dialog-height` (772px). `Dialog.Close` without
  children renders the four-bar mark.
- `Badge`: `default` is an orange tag; `secondary` is dim text.
- `Toggle`: a framed box, filled with the nav gradient when pressed; `ghost` turns cyan.

### Primitives

- `close-mark`: four bars that spread on hover and close in on press.

</details>
