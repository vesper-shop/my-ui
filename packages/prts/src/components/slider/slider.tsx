import { Slider as BaseSlider } from "@base-ui/react/slider";
import { cn } from "#/lib/class-name.ts";

export function Root({ className, ...props }: BaseSlider.Root.Props) {
  return <BaseSlider.Root className={cn("pr-slider", className)} {...props} />;
}

export function Control({ className, ...props }: BaseSlider.Control.Props) {
  return <BaseSlider.Control className={cn("pr-slider__control", className)} {...props} />;
}

export function Track({ className, ...props }: BaseSlider.Track.Props) {
  return <BaseSlider.Track className={cn("pr-slider__track", className)} {...props} />;
}

export function Indicator({ className, ...props }: BaseSlider.Indicator.Props) {
  return <BaseSlider.Indicator className={cn("pr-slider__indicator", className)} {...props} />;
}

export function Thumb({ className, ...props }: BaseSlider.Thumb.Props) {
  return <BaseSlider.Thumb className={cn("pr-slider__thumb", className)} {...props} />;
}

export function Value({ className, ...props }: BaseSlider.Value.Props) {
  return <BaseSlider.Value className={cn("pr-slider__value", className)} {...props} />;
}
