import { Button, Tooltip } from "@my-ui/inter-knot";
import { MapPin, Send, X } from "lucide-react";
import { Cover } from "@/cover";
import type { QuestDetailProps } from "@/types";

export function QuestDetail({ quest, isTracked, onToggleTrack }: QuestDetailProps) {
  return (
    <section className="flex min-h-0 flex-col rounded-[20px] bg-surface-sunken p-3">
      <div className="relative overflow-hidden rounded-lg border-3 border-border">
        <Cover src={quest.cover} ratio={0.18} />
        <h2 className="cover-title text-lg">{quest.title}</h2>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {quest.objectives.map((objective) => (
          <li
            key={objective.text}
            data-status={objective.current >= objective.total ? "done" : "pending"}
            className="objective"
          >
            <span className="objective__check" />
            {objective.text}
            <span className="ml-auto">
              {objective.current}/{objective.total}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 px-1 text-sm font-bold text-subtle-foreground">{quest.description}</p>
      <div className="mt-auto flex items-center gap-2 self-center rounded-full border-3 border-border bg-chrome p-1.5 shadow-hairline">
        <Tooltip.Root>
          <Tooltip.Trigger
            render={<Button variant="ghost" aria-label="前往" />}
            className="size-12 rounded-full border-3 border-border px-0 text-success"
          >
            <Send size={24} className="fill-current" />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup>前往目标地点</Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
        <Button onClick={onToggleTrack} className="h-12 min-w-[170px] gap-3 rounded-full pr-6 pl-2">
          <span className={isTracked ? "text-warning" : "text-muted-foreground"}>
            <MapPin size={26} className="fill-current stroke-chrome" />
          </span>
          <span className="flex flex-col items-center leading-none">
            <span className="text-lg">{isTracked ? "停止追踪" : "追踪"}</span>
            <span className="mt-1 text-[9px] opacity-60">TRACK</span>
          </span>
        </Button>
        {Array.from({ length: 4 }, (_, slot) => (
          <Button
            key={slot}
            variant="ghost"
            disabled
            aria-label="空闲槽位"
            className="size-11 rounded-full bg-surface px-0"
          >
            <X size={22} strokeWidth={2.4} />
          </Button>
        ))}
      </div>
    </section>
  );
}
