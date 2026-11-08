# Footage

Takes of the four demos (`<ui>.mp4`), recorded at 1440×900 with the cursor overlay from
`scripts/cursor.ts` and scaled to 960×600. `pnpm takes` re-records them from `scripts/takes.ts`
(start the demos with `pnpm dev` first). Raw recordings are deleted after conversion.

## Recording

Start the demos with `pnpm dev` at the repository root, then run `pnpm takes` here. Each take is
the scripted interaction for that demo in `scripts/takes.ts`.

## Finding times

- One frame: `ffmpeg -ss T -i footage/<name>.mp4 -frames:v 1 t.png`.
- Note each shot's source time here once chosen; `data-media-start` in the compositions uses it.
