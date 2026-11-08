import { Badge, Tooltip } from "@my-ui/prts";
import { Ellipsis, IdCard, MessageSquare, Star } from "lucide-react";
import { use } from "react";
import { PlayerAvatar } from "@/player-avatar";
import { StageContext } from "@/stage";
import type { FriendRowProps } from "@/types";

export function FriendRow({ friend, onNotify }: FriendRowProps) {
  const stage = use(StageContext);

  return (
    <article className="friend-row">
      <PlayerAvatar name={friend.name} src={friend.avatar} level={friend.level} size={96} />
      <div className="flex min-w-0 flex-1 flex-col items-start">
        <span className="flex items-center gap-1.5 text-[22px] leading-tight">
          {friend.isStarred && <Star size={20} className="fill-warning text-warning" />}
          {friend.name}
          <span className="text-white/60">#{friend.tag}</span>
        </span>
        <span className="text-lg leading-tight text-accent">（{friend.remark}）</span>
        <span className="mt-2 flex items-center gap-3 text-sm text-white/60">
          <Badge variant={friend.isToday ? "secondary" : "default"} className="w-16 justify-center">
            {friend.isToday ? "今日" : "昨天"}
          </Badge>
          {friend.status}
        </span>
      </div>
      <div className="friend-row__actions">
        {[
          {
            label: "查看名片",
            icon: <IdCard size={30} />,
            message: `正在翻 ${friend.name} 的名片，别声张`,
          },
          {
            label: "发送消息",
            icon: <MessageSquare size={28} />,
            message: `已向 ${friend.name} 发送「在吗」`,
          },
          { label: "更多", icon: <Ellipsis size={30} />, message: "更多功能还在摸鱼，下个版本见" },
        ].map((action) => (
          <Tooltip.Root key={action.label}>
            <Tooltip.Trigger
              aria-label={action.label}
              onClick={() => onNotify(action.message, "corner")}
              className="friend-row__action"
            >
              {action.icon}
            </Tooltip.Trigger>
            <Tooltip.Portal container={stage}>
              <Tooltip.Positioner side="top" sideOffset={4}>
                <Tooltip.Popup>{action.label}</Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </div>
    </article>
  );
}
