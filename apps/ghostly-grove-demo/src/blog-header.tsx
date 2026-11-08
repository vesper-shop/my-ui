import { blogger } from "@/data/blogger";
import { SquareUser, Undo2, UsersRound } from "lucide-react";
import { UserAvatar } from "@/user-avatar";

export function BlogHeader() {
  return (
    <header className="bg-grove-band relative flex h-[150px] items-center gap-5 border-b-[3px] border-rule px-6">
      <UserAvatar name={blogger.name} src={blogger.avatar} size={82} />
      <div className="flex flex-col gap-2">
        <span className="text-2xl text-foreground">{blogger.name}</span>
        <span className="flex items-center gap-8 text-lg text-muted-foreground">
          <span className="flex items-center gap-2">
            <UsersRound size={18} />
            粉丝 {blogger.fans}
          </span>
          <span className="flex items-center gap-2">
            <SquareUser size={18} />
            动态 {blogger.postCount}
          </span>
        </span>
      </div>
      <button
        type="button"
        aria-label="返回"
        className="absolute top-12 right-8 cursor-pointer text-foreground transition-colors hover:text-glow"
      >
        <Undo2 size={40} strokeWidth={1.8} />
      </button>
    </header>
  );
}
