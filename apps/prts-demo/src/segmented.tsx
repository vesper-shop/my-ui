import { Toggle, ToggleGroup } from "@my-ui/prts";
import type { SegmentedProps } from "@/types";

export function Segmented<Value extends string>({
  options,
  value,
  onChange,
}: SegmentedProps<Value>) {
  return (
    <ToggleGroup
      value={[value]}
      onValueChange={(pressed) => {
        const option = options.find((item) => pressed.includes(item.value));
        if (option) onChange(option.value);
      }}
      className="gap-[18px]"
    >
      {options.map((option) => (
        <Toggle key={option.value} value={option.value} className="h-11 w-[124px] px-0 text-lg">
          {option.label}
        </Toggle>
      ))}
    </ToggleGroup>
  );
}
