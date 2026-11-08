import { Tooltip } from "@my-ui/prts";
import { ChevronLeft, House, Info } from "lucide-react";
import { use } from "react";
import { StageContext } from "@/stage";
import type { NavBarProps } from "@/types";

export function NavBar({ onBack, children }: NavBarProps) {
  const stage = use(StageContext);

  return (
    <header className="nav-bar">
      <div className="nav-pill">
        <button
          type="button"
          aria-label="返回"
          onClick={onBack}
          className="nav-pill__item nav-pill__back"
        >
          <ChevronLeft size={34} strokeWidth={1.4} />
        </button>
        <button type="button" aria-label="首页" onClick={onBack} className="nav-pill__item flex-1">
          <House size={28} className="fill-current" />
        </button>
      </div>
      <Tooltip.Root>
        <Tooltip.Trigger aria-label="说明" className="nav-bar__info">
          <Info size={24} />
        </Tooltip.Trigger>
        <Tooltip.Portal container={stage}>
          <Tooltip.Positioner side="bottom" sideOffset={6}>
            <Tooltip.Popup>好友上限会随等级提升</Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
      <div className="nav-bar__end">{children}</div>
    </header>
  );
}
