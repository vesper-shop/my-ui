import { Switch } from "@my-ui/prts";
import type { ToggleSwitchProps } from "@/types";

export function ToggleSwitch({ checked, onChange }: ToggleSwitchProps) {
  return (
    <Switch.Root checked={checked} onCheckedChange={onChange}>
      <Switch.Thumb />
      <span>{checked ? "开启" : "关闭"}</span>
    </Switch.Root>
  );
}
