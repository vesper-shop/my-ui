import { Fragment } from "react";
import type { RichTextProps } from "@/types";

export function RichText({ text }: RichTextProps) {
  return text.split(/【(.+?)】/).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="text-tag">
        {part}
      </span>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}
