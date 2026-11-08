export function CloseMark() {
  return (
    <svg viewBox="0 0 26 26" aria-hidden="true" className="pr-mark">
      <circle cx="13" cy="13" r="12" className="pr-mark__disc" />
      <path d="M9 9l8 8m0-8l-8 8" className="pr-mark__cross" />
    </svg>
  );
}
