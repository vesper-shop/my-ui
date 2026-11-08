# my-ui promo

A 90-second, upbeat [HyperFrames](https://hyperframes.heygen.com) video about my-ui: HTML, CSS and seekable GSAP
timelines that the `hyperframes` CLI previews in the browser and renders to MP4. The setup follows
the Vesper promo (`~/Github/Vesper/Design/Promo`). Docs: `npx hyperframes@0.8.192 docs <topic>`.

## Workflow

1. `STORYLINES.md`: three candidate films. One is picked.
2. `SPEC.md`: the picked film shot by shot: goal, timing, look, motion, each shot's source take
   and time, sound, banned moves, QA times. Nothing is built before it.
3. Footage: `pnpm takes` records the demo takes the film plays (`footage/README.md`);
   `pnpm soundtrack` synthesises the music into `assets/audio/soundtrack.m4a`.
4. `index.html` and `compositions/`: the film. Then check, look at frames, render.
5. `REVIEW.md`: what was measured, what was looked at, what was not checked, the weakest shot.

## Commands

```sh
pnpm preview                                  # Studio preview
pnpm check                                    # lint, runtime, layout, motion, contrast
npx hyperframes@0.8.192 snapshot --at 1,3     # PNG frames to look at before rendering
pnpm render                                   # MP4 into renders/
pnpm takes                                    # re-record the four demo takes (run `pnpm dev` first)
```

The CLI is pinned so the film re-renders identically.

## Rules

1. Every timed element has `data-start` and `data-duration`, and `class="clip"`.
2. One paused root timeline per composition, registered on `window.__timelines["<id>"]`.
3. Sub-compositions are referenced with `data-composition-src="compositions/<file>.html"`.
4. Footage without its own sound is `muted`; music and effects are separate `<audio>`.
5. Deterministic only: no `Date.now()`, `Math.random()` or network fetches.
6. The film is about the UIs, shown through their demos. `pnpm takes` (`scripts/takes.ts`, needs
   `pnpm dev`) records each demo with a drawn cursor (`scripts/cursor.ts`) into
   `footage/<ui>.mp4`; the film plays them muted from the root. Only interactions the demos
   already have.
7. Run `pnpm check` after every change and look at snapshots of what changed.
