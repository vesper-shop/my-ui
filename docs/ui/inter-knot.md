# inter-knot

A black, heavy UI with a street-poster feel.

## What it looks like

The background is nearly pure black. Buttons and fields are round-ended black bars covered in a fine
diagonal dot pattern. The text is very bold, and button labels are italic. Windows have a thick dark
frame and a dotted title bar; the close button is a small red plate.

## How it moves

When you press a button or select something, a yellow plate appears behind it and "breathes" between
yellow and lime. The selected tab sits on a slanted yellow plate. Opening a window dims and blurs
the page behind it. Hovering over a card gives it a yellow frame.

## See it or use it

Run `pnpm demo:inter-knot` to open its demo page, or find the Inter-Knot group in Storybook.

It isn't on npm yet, so for now it can only be used inside this repository. The Architecture
document explains how.

<details>
<summary>Technical details (for developers changing this UI)</summary>

Design reference: the Inter-Knot (绳网) screens at 1280×800, sizes halved. No game artwork.

### Use it

The package is `@my-ui/inter-knot`. It isn't on npm yet; add it to an app in this repository as
described in the Architecture document. Then import its styles and load its fonts (Noto Sans SC and
Rubik):

```css
@import "@my-ui/inter-knot/styles";
```

### Look

- Dark by default: page `#000`, panels `#050505`, window body `#1b1b1b`, header `#151515`, cards
  `#222`; text `#fff`, `#c8c8c8`, `#8c8c8c`.
- Rubik for Latin and digits, Noto Sans SC for Chinese, weight 900. Controls and tabs are bold
  italic.
- Controls are 38px black bars: 16px corners, 3px `#383838` frame, 1px black hairline, diagonal
  6px dot grid.
- Press and selection breathe: a yellow `#f9dc00` plate behind the control pulses to lime
  `#b0d700`. A press always plays `ik-press` in full: pop 6px, spring back, shift to lime.
- The active tab sits on a yellow plate skewed 22°; the bar's round ends clip the outer tabs.
- Windows: 2px black, 4px `#2b2b2b` frame, 2px black outside, radius `16 5 16 16`, dotted header.
  The close plate is red with a black X and turns yellow on press.
- Overlay: 60% black, 6px blur, fine 45° stripes.
- Cards: 3px black frame, radius `22 22 0 22`, yellow frame on hover; a 44px avatar overlaps the
  cover.
- Focus is a light grey frame, never a yellow outline.

### Tokens

Colours: `chrome`, `dot`, `accent-strong`, `window`, `window-body`, `window-title`, `frame`,
`border-strong`, `badge`, `tag-from`, `tag-to`, `tag-foreground`, `avatar`, `avatar-ring`,
`stripe`, `shade`, `progress-from`, `progress-to`.

Others: `--size-control`, `--size-frame`, `--font-weight-bold`, `--pattern-dots`,
`--pattern-stripes`, `--shadow-hairline`, `--radius-control`, `--radius-card`, `--radius-window`,
`--duration-pulse`, `--duration-press`.

Utilities: `bg-dots`, `bg-stripes`, `mask-fade-y`.

### Components

CSS classes start with `ik-`.

- `Dialog`: `--dialog-width` (540px) and `--dialog-height` (auto). `Dialog.Close` without children
  renders the close plate.
- `Badge`: `default` is a grey pill with black text; `secondary` is a blue gradient tag.
- `Progress`: 14px track with a blue gradient.
- `Switch`: a dotted pill printing `OFF`; yellow with `ON` when checked.

### Primitives

- `close-mark`: the close plate SVG; turns yellow while its parent is pressed.

</details>
