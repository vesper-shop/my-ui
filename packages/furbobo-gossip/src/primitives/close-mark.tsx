export function CloseMark() {
  return (
    <span aria-hidden="true" className="fg-mark">
      <span data-corner="top-left" className="fg-mark__bar" />
      <span data-corner="top-right" className="fg-mark__bar" />
      <span data-corner="bottom-left" className="fg-mark__bar" />
      <span data-corner="bottom-right" className="fg-mark__bar" />
    </span>
  );
}
