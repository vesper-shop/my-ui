import { Progress } from "@my-ui/inter-knot";
import { pageTabs } from "@/data/pages";
import { currentUser } from "@/data/user";
import { FilterTabs } from "@/filter-tabs";
import type { TopBarProps } from "@/types";
import { UserAvatar } from "@/user-avatar";

export function TopBar({ page, onPageChange }: TopBarProps) {
  return (
    <header className="flex h-[100px] shrink-0 items-center gap-5 px-[45px] max-md:h-auto max-md:flex-wrap max-md:gap-3 max-md:px-3 max-md:py-3">
      <div className="flex h-[39px] items-center gap-3 rounded-full bg-surface py-1 pr-4 pl-1 shadow-hairline">
        <UserAvatar name={currentUser.name} src={currentUser.avatar} size={31} />
        <Progress.Root value={1700} max={6890} className="w-[120px] gap-0.5">
          <Progress.Label className="text-sm text-foreground">{currentUser.name}</Progress.Label>
          <Progress.Track className="h-3">
            <Progress.Indicator />
            <Progress.Value className="text-[10px]">
              {(_, value) => `${value} / 6890`}
            </Progress.Value>
          </Progress.Track>
        </Progress.Root>
        <div className="flex flex-col items-center leading-none font-bold">
          <span className="text-xl">{currentUser.level}</span>
          <span className="text-[9px] text-subtle-foreground">LEVEL</span>
        </div>
      </div>
      <div className="filter-slot">
        <FilterTabs
          tabs={pageTabs}
          value={page}
          onChange={onPageChange}
          listClassName="w-[530px]"
          tabClassName="text-lg max-md:px-4"
        />
      </div>
    </header>
  );
}
