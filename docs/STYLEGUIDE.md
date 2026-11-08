# Style Guide

A few principles cover most of it. The exact rules are at the end, for when you need them.

## Principles

- **Write less.** Don't add comments, functions or wrappers you don't need. If the browser or an
  existing library already does something, use it instead of building it again.
- **Let problems show.** If some data is missing, don't quietly fill in a default to cover it up;
  that hides the real bug.
- **Define the look in one place.** Components never hard-code colours or sizes; they use the named
  values each UI provides.
- **Work for everyone.** Keyboard users must always see where they are, and when someone turns off
  animations in their system settings, the interface calms down too.
- **Pin versions.** Every dependency has an exact version, so everyone installs the same thing.

Run `pnpm check` after a change; it points out formatting and type problems for you.

<details>
<summary>The exact rules (for developers changing the code)</summary>

### TypeScript

- Strict mode; `vp fmt` and `vp lint`.
- Types live in the package's or app's `types.ts`. Prefer required fields.
- Absent values are `null`. No `undefined`, `unknown` or `any` as states, no `??` fallbacks.
- Packages import with `#/…` and the file extension; apps use `@/…`.
- Kebab-case file names; a story is named after its component.
- No comments, helpers or wrappers the change doesn't need. Use the platform first
  (`toLocaleString` for compact numbers).
- Read browser state with `useSyncExternalStore`; don't copy it into state from `useEffect`.
- Pin every dependency to an exact version.

### Component CSS

- Plain CSS next to the component, in `@layer components`, on tokens only.
- BEM with the UI prefix (`ik-`, `gg-`, `fg-`, `pr-`): `-` joins words, `__` marks a part.
- Variants and states are `data-*` or ARIA selectors, not extra classes or tag selectors.
- Reuse a UI utility with `@apply`.
- Anything that removes `outline` restores it on `:focus-visible`. Transitions list their
  properties.
- Motion respects `prefers-reduced-motion`.

### Apps and stories

- Lay out with Tailwind utilities, and override components the same way.
- A repeated look, or one that needs an arbitrary property, becomes a named class in `app.css`.
- Inline `style` only passes runtime data as CSS variables. SVG colours use `fill-*` and
  `stroke-*`.
- Repeated sizes become theme steps, not `text-[Npx]`.
- Icons come from `lucide-react`, charts from `recharts`.

</details>
