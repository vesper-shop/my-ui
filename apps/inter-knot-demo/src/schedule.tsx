import { Switch } from "@my-ui/inter-knot";
import { X } from "lucide-react";
import { useState } from "react";
import { Cover } from "@/cover";
import { latestChapter, questGroups, questTabs } from "@/data/quests";
import { FilterTabs } from "@/filter-tabs";
import { QuestDetail } from "@/quest-detail";
import { QuestGroupCard } from "@/quest-group-card";
import type { QuestFilter } from "@/types";

export function Schedule() {
  const [filter, setFilter] = useState<QuestFilter>("all");
  const [isFocused, setIsFocused] = useState(false);
  const [selected, setSelected] = useState(questGroups[0].quests[0]);
  const [seenGroupIds, setSeenGroupIds] = useState<string[]>([]);
  const [trackedId, setTrackedId] = useState<string | null>(questGroups[0].quests[0].id);

  const visibleGroups = questGroups
    .filter((group) => filter === "all" || group.kind === filter)
    .filter((group) => !isFocused || group.quests.some((quest) => quest.id === trackedId));

  return (
    <div className="window mx-[45px] mt-2 mb-6 flex min-h-0 flex-1 flex-col">
      <div className="flex h-[58px] shrink-0 items-center gap-4 bg-window bg-dots px-4">
        <label className="flex items-center gap-3 rounded-full border-3 border-border bg-chrome py-0.5 pr-0.5 pl-4 text-sm font-bold shadow-hairline">
          任务聚焦
          <Switch.Root checked={isFocused} onCheckedChange={setIsFocused}>
            <Switch.Thumb />
          </Switch.Root>
        </label>
        <div className="ml-auto">
          <FilterTabs
            tabs={questTabs}
            value={filter}
            onChange={setFilter}
            listClassName="h-[30px] w-[510px]"
            tabClassName="px-4 text-sm"
          />
        </div>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_1fr] gap-4 p-4">
        <QuestDetail
          quest={selected}
          isTracked={trackedId === selected.id}
          onToggleTrack={() => setTrackedId(trackedId === selected.id ? null : selected.id)}
        />
        <div className="flex min-h-0 flex-col gap-4 overflow-y-auto pt-1 pr-2">
          {filter === "all" && (
            <div className="relative shrink-0 overflow-hidden rounded-control border-3 border-border">
              <Cover src={latestChapter.cover} ratio={0.2} />
              <span className="ribbon top-0 right-3">{latestChapter.tag}</span>
              <h3 className="cover-title text-[15px]">{latestChapter.title}</h3>
              <span className="absolute right-3 bottom-2.5 rounded-full border-2 border-border bg-chrome px-3 py-1 text-xs font-bold">
                {latestChapter.action}
              </span>
            </div>
          )}
          {visibleGroups.map((group) => (
            <QuestGroupCard
              key={group.id}
              group={group}
              isNew={group.isNew && !seenGroupIds.includes(group.id)}
              selectedId={selected.id}
              onSelect={(quest) => {
                setSelected(quest);
                setSeenGroupIds([...seenGroupIds, group.id]);
              }}
            />
          ))}
          {Array.from({ length: Math.max(0, 5 - visibleGroups.length) }, (_, slot) => (
            <div
              key={slot}
              className="flex h-12 shrink-0 items-center gap-2.5 rounded-[20px] border-3 border-border bg-chrome px-4 text-[15px] font-bold text-disabled-foreground opacity-60"
            >
              <X size={22} strokeWidth={2.4} />
              EMPTY
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
