import { Slider } from "@my-ui/prts";
import type { ValueSliderProps } from "@/types";

export function ValueSlider({ value, min, max, step, disabled, onChange }: ValueSliderProps) {
  return (
    <Slider.Root
      value={value}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      thumbAlignment="edge"
      onValueChange={(next) => typeof next === "number" && onChange(next)}
    >
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb>
            <Slider.Value />
          </Slider.Thumb>
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}
