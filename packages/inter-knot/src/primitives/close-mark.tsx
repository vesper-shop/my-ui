import { useId } from "react";

export function CloseMark() {
  const plateId = useId();

  return (
    <svg viewBox="0 0 60 36" aria-hidden="true" className="ik-mark">
      <defs>
        <path
          id={plateId}
          d="M15 1.5H48Q58.5 1.5 55.5 9L48.2 28Q45.6 34.5 38 34.5H15A13.5 13.5 0 0 1 1.5 21V15A13.5 13.5 0 0 1 15 1.5Z"
        />
      </defs>
      <use href={`#${plateId}`} className="ik-mark__outline" />
      <use href={`#${plateId}`} className="ik-mark__plate" />
      <use
        href={`#${plateId}`}
        transform="translate(4.8 2.9) scale(0.84)"
        className="ik-mark__line"
      />
      <path d="M21 12l12 12m0-12l-12 12" className="ik-mark__glyph" />
    </svg>
  );
}
