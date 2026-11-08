import { CircleStar, MessageCircleMore } from "lucide-react";
import type { QuestGroupCardProps } from "@/types";

export function QuestGroupCard({ group, isNew, selectedId, onSelect }: QuestGroupCardProps) {
  return (
    <article className="relative rounded-[20px] border-3 border-border bg-chrome p-2.5 shadow-hairline">
      {isNew && <span className="new-mark -top-3 left-1">NEW!</span>}
      {group.unlocks && <span className="ribbon -top-[3px] right-5">功能解锁</span>}
      <h3 className="flex h-8 items-center gap-2.5 px-1.5 text-[15px] font-bold">
        <span className={group.kind === "main" ? "text-danger" : "text-progress-from"}>
          {group.kind === "main" ? (
            <CircleStar size={22} strokeWidth={2.5} />
          ) : (
            <MessageCircleMore size={22} strokeWidth={2.5} />
          )}
        </span>
        {group.title}
      </h3>
      <ul className="mt-2 flex flex-col gap-2">
        {group.quests.map((quest) => (
          <li key={quest.id}>
            <button
              type="button"
              aria-current={quest.id === selectedId}
              onClick={() => onSelect(quest)}
              className="quest-item"
            >
              {quest.title}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
