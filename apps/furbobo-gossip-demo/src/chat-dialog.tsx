import { Badge, Dialog } from "@my-ui/furbobo-gossip";
import { MapPin, MessageSquareMore, Play } from "lucide-react";
import { useRef } from "react";
import { CommentList } from "@/comment-list";
import { Cover } from "@/cover";
import { LikeButton } from "@/like-button";
import { RichText } from "@/rich-text";
import type { ChatDialogProps } from "@/types";
import { UserAvatar } from "@/user-avatar";

export function ChatDialog({ post, isLiked, onToggleLike }: ChatDialogProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog.Popup
      ref={popupRef}
      initialFocus={popupRef}
      className="[--dialog-height:552px] [--dialog-width:1016px]"
    >
      <div className="flex min-h-0 flex-1">
        <div className="flex w-[556px] shrink-0 flex-col gap-3 border-r border-border bg-surface/60 px-12 pt-14">
          <div className="text-center">
            <Dialog.Title>{post.title}</Dialog.Title>
          </div>
          <div className="flex items-center gap-2 text-body text-muted-foreground">
            <UserAvatar name={post.author} src={post.avatar} size={26} />
            {post.author}
            <Badge variant="secondary" className="ml-auto">
              <MapPin size={13} className="fill-current stroke-chip" />
              {post.location}
            </Badge>
          </div>
          <div className="relative h-[255px] overflow-hidden rounded-lg border-3 border-paper shadow-md">
            <Cover src={post.cover} />
            {post.hasVideo && (
              <span className="absolute right-4 bottom-4 grid size-12 place-items-center rounded-full bg-ink text-paper">
                <Play size={22} className="fill-current" />
              </span>
            )}
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <Dialog.Header className="justify-end">
            <Dialog.Close />
          </Dialog.Header>
          <Dialog.Body className="gap-4 pr-8">
            <p className="text-body">
              {post.tags.length > 0 && (
                <span className="block text-tag">
                  {post.tags.map((tag) => `#${tag}#`).join(" ")}
                </span>
              )}
              <RichText text={post.text} />
            </p>
            <div className="flex justify-end gap-5 border-b border-border pb-3 font-display text-muted-foreground">
              <LikeButton count={post.likes} isLiked={isLiked} onToggle={onToggleLike} />
              <span className="flex items-center gap-1.5">
                <MessageSquareMore size={18} />
                {post.comments.length}
              </span>
            </div>
            <CommentList comments={post.comments} />
          </Dialog.Body>
        </div>
      </div>
      <div className="dialog-strip" />
    </Dialog.Popup>
  );
}
