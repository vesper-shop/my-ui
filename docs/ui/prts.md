# prts

A bright, clean UI with the feel of a tactical terminal.

## What it looks like

The page is light grey, with see-through white panels laid on top and a faint diagonal hatch across
them. Buttons and switches look like dark grey steel plates with square corners. Whatever is
selected turns bright blue, and risky actions are flagged in deep red. Numbers use a tall, narrow
typeface, so they read like gauges.

## How it moves

Hover over a plate and it brightens a little; press it and it sinks down. Windows and messages don't
fade in: they open like a strip unfolding from the middle.

## See it or use it

Run `pnpm demo:prts` to open its demo page, or find the PRTS group in Storybook.

It isn't on npm yet, so for now it can only be used inside this repository. The Architecture
document explains how.

<details>
<summary>Technical details (for developers changing this UI)</summary>

Design reference: the controls of a tactical-terminal game, recorded at 2560×1600, sizes halved for
a 1280 stage. Only the controls are used; the screens are not reproduced.

### Use it

The package is `@my-ui/prts`. It isn't on npm yet; add it to an app in this repository as described
in the Architecture document. Then import its styles and load its fonts (Noto Sans SC and Oswald):

```css
@import "@my-ui/prts/styles";
```

### Look

- Light by default: `#e6e6e8` page, translucent `#f0f0f2` sheets, white raised surfaces with a
  faint 45° hatch. Square corners.
- Steel `#313131` fills idle controls, `#4b4c50` idle vertical tabs. Section bars fade from
  `#2f3d48 → #3a3d42` to transparent.
- Accent blue `#18a3dc` marks the selection; a checked switch is `#0e6d92`; confirm bands are red
  `#8b1020`.
- Noto Sans SC; Oswald for numbers.
- Controls are 34px with a 2px hard drop; they brighten on hover and drop 2px on press.
- Windows and toasts open as horizontal bands, unclipping from the middle.

### Tokens

Colours: `veil`, `steel`, `rule`, `steel-light`, `steel-top`, `header-from`, `header-to`,
`accent-deep`, `danger-light`, `white`, `black`, `night`, `hatch`.

Others: `--pattern-hatch`, `--pattern-halftone`, `--size-control`, `--shadow-control`.

Utilities: `bg-hatched`, `bg-plate`, `bg-section`.

### Components

CSS classes start with `pr-`.

- `Switch`: a 156×46 steel box with a hatched white block; checked turns it deep blue. Another
  child (a "开启" label) is centred in the free half.
- `Slider`: a 4px rule; the thumb is a white value box. Put `Slider.Value` in `Slider.Thumb` and
  use `thumbAlignment="edge"`.
- `Tabs`: vertical tabs are 180×70 steel plates, white when active. Horizontal tabs have a blue
  underline.
- `Button`, `Toggle`: steel plates; blue when `default` or pressed. Disabled is flat grey.
- `Dialog`: `--dialog-width` (full) and `--dialog-height` (auto); a section-bar header.
  `Dialog.Close` without children renders a white disc with a steel ×.
- `Card`: the footer keeps one control height so a row of cards lines up.
- `Select`: a raised field with a chevron; the list unclips downwards.
- `Toast`: a centred band, or with `type: "corner"` a black plate top right whose left edge
  fades into halftone dots.
- `NumberField`: Oswald 48px digits between steel stepper plates, as in the recruit timer.

### Primitives

- `chevron-mark`: the chevron used by `Select` and `NumberField`.
- `close-mark`: the disc close mark.

</details>
