import { Button, Tabs, Tooltip } from "@my-ui/furbobo-gossip";
import { MessagesSquare, Newspaper, Rocket, Sparkles, TowerControl } from "lucide-react";
import { sponsors } from "@/data/sponsors";
import type { SidebarProps } from "@/types";

export function Sidebar({ onOpenContact }: SidebarProps) {
  return (
    <aside className="bg-sidebar relative flex w-[212px] shrink-0 flex-col items-center pt-6 pb-10">
      <div className="flex items-center gap-2 self-start pl-7 text-paper">
        <span className="grid size-8 place-items-center rounded-md bg-paper text-accent">
          <Sparkles size={20} strokeWidth={2.4} />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-2xs opacity-80">狸狸通信</span>
          <span className="text-sm font-medium">狸狸门户网</span>
        </span>
      </div>
      <div className="logo mt-6">
        <span className="logo__char">八</span>
        <span className="logo__char">卦</span>
        <span className="logo__char">周</span>
        <span className="logo__char">报</span>
      </div>
      <Tabs.List className="mt-7">
        <Tabs.Tab value="headlines">
          留子头条
          <Newspaper
            size={34}
            strokeWidth={1.5}
            className="ml-auto opacity-0 in-data-active:opacity-20"
          />
        </Tabs.Tab>
        <Tabs.Tab value="chat">
          闲聊Chat
          <MessagesSquare
            size={34}
            strokeWidth={1.5}
            className="ml-auto opacity-0 in-data-active:opacity-20"
          />
        </Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <div className="mt-auto flex flex-col items-center gap-2 text-paper">
        <span className="text-xs">· 赞助方 ·</span>
        <span className="flex gap-2">
          {sponsors.map((sponsor) => (
            <Tooltip.Root key={sponsor.name}>
              <Tooltip.Trigger
                aria-label={sponsor.name}
                data-tone={sponsor.tone}
                className="sponsor"
              >
                {sponsor.tone === "accent" ? <Rocket size={20} /> : <TowerControl size={20} />}
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Positioner side="top">
                  <Tooltip.Popup>赞助方：{sponsor.name}</Tooltip.Popup>
                </Tooltip.Positioner>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
        </span>
        <Button variant="ghost" onClick={onOpenContact} className="contact-button">
          联系我们
        </Button>
      </div>
      <span className="absolute bottom-3 left-6 font-display text-2xs text-paper/80">
        UID:10000001
      </span>
    </aside>
  );
}
