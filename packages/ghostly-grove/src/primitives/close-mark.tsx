export function CloseMark() {
  return (
    <span aria-hidden="true" className="gg-mark">
      <span data-corner="top-left" className="gg-mark__bar" />
      <span data-corner="top-right" className="gg-mark__bar" />
      <span data-corner="bottom-left" className="gg-mark__bar" />
      <span data-corner="bottom-right" className="gg-mark__bar" />
    </span>
  );
}
