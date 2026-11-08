# SPEC: my-ui

Storyline C. 86 s, 1920×1080, 30 fps, Chinese on-screen copy, synthesised music: 120 BPM funk /
city pop (electric-piano stabs, slap-style bass, swung hats, brass hits on the cuts). Every cut
lands on a bar line (2 s).

## Goal

From the first frame a stranger knows the film is about my-ui and its four UIs. The film does
not call it a collection and makes no claim that they share code or a skeleton. They finish it knowing each UI's
name, theme colours and style, having seen each demo in use, and where to follow the maker:
@yiming9876 on X. Technical detail is one line: built on React and Base UI.

## Names

绳网 (Inter-Knot), 罗浮杂俎 (Ghostly Grove), 狸狸通信 (Furbobo Gossip), 普瑞赛斯 (PRTS).

## Shots

| #   | Time  | What                                                                                                                                                                                                                                 |
| --- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 0–4   | frame 0 already shows 「my-ui」 and the four names; the four demo stills fly in on beats; the four names pop                                                                                                                         |
| 2   | 4–20  | 绳网 on its own black: index, the name letter by letter, theme colours with names and hex, style keywords; the demo take flies into a frame in the theme colour, pushes in slowly, two glare sweeps; a wipe in the next theme colour |
| 3   | 20–36 | 罗浮杂俎, same structure on its deep teal                                                                                                                                                                                            |
| 4   | 36–52 | 狸狸通信, same structure on paper                                                                                                                                                                                                    |
| 5   | 52–68 | 普瑞赛斯, same structure on light grey                                                                                                                                                                                               |
| 6   | 68–76 | the four names over the four demos playing side by side                                                                                                                                                                              |
| 7   | 76–86 | name, the four names, 「基于 React 与 Base UI」; a cursor presses **Follow @yiming9876 on X** at 78.45 and it turns to Following                                                                                                     |

## Footage

`scripts/takes.ts` records each demo at 1440×900 with the cursor overlay from
`scripts/cursor.ts` (a 0.22 s glide, fading trail, ring on click). Only interactions the demos
already have; 0.2 s before a click, more actions rather than waiting.

## Banned

Calling it a collection or claiming the UIs share code or a skeleton; components a UI's reference never shows; showing components out
of context instead of the demos; implementation detail beyond one line.

## QA times

0, 1.5, 3.5, 5, 10, 20.5, 70, 78, 84.
