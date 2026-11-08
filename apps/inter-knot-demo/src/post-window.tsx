import { Badge, Button, Dialog, Separator } from "@my-ui/inter-knot";
import { Heart } from "lucide-react";
import { Fragment, useRef, useState } from "react";
import { Cover } from "@/cover";
import { currentUser } from "@/data/user";
import type { PostWindowProps } from "@/types";
import { UserAvatar } from "@/user-avatar";

export function PostWindow({ post, isRead, onReply }: PostWindowProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [pressedReply, setPressedReply] = useState<string | null>(null);
  const hasReplied = post.comments.some((comment) => comment.author === currentUser.name);

  return (
    <Dialog.Popup
      ref={popupRef}
      initialFocus={popupRef}
      className="[--dialog-height:480px] [--dialog-width:880px]"
    >
      <Dialog.Header>
        <UserAvatar name={post.author} src={post.avatar} size={50} />
        <div className="flex flex-col gap-1.5">
          <span className="text-[15px] leading-none font-bold text-subtle-foreground">
            {post.author}
          </span>
          <Badge className="mr-auto">
            <Heart size={11} className="fill-current" />
            {post.likes}
          </Badge>
        </div>
        <Dialog.Close />
      </Dialog.Header>
      <Dialog.Body>
        <section className="flex min-w-0 flex-[1.2] gap-4 rounded-lg bg-surface-sunken p-3.5">
          <div className="post-media relative flex w-1/2 shrink-0 overflow-hidden rounded-lg border-4 border-divider bg-chrome">
            <Cover {...post.cover} />
            {isRead && <span className="read-mark">已读</span>}
          </div>
          <div className="mask-fade-y min-w-0 flex-1 overflow-y-auto py-3 pr-1">
            <Dialog.Title className="text-[15px] leading-snug">{post.title}</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm whitespace-pre-line">
              {post.body}
            </Dialog.Description>
          </div>
        </section>
        <section className="flex min-w-0 flex-1 flex-col rounded-lg bg-surface-sunken">
          <ol className="mask-fade-y min-h-0 flex-1 overflow-y-auto px-4 py-3">
            {post.comments.map((comment, index) => (
              <Fragment key={index}>
                {index > 0 && <Separator className="my-3" />}
                <li
                  data-author={comment.author === currentUser.name ? "self" : "other"}
                  className="group flex gap-3"
                >
                  <UserAvatar name={comment.author} src={comment.avatar} size={40} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-bold group-data-[author=self]:text-warning">
                        {comment.author}
                      </span>
                      <Badge className="group-data-[author=self]:bg-warning">{index + 1}F</Badge>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed font-bold text-muted-foreground">
                      {comment.text}
                    </p>
                  </div>
                </li>
              </Fragment>
            ))}
            {hasReplied && (
              <li className="mt-4 text-center text-xs font-bold text-disabled-foreground">
                - 已无更多评论 -
              </li>
            )}
          </ol>
          {(!hasReplied || pressedReply !== null) && (
            <div className="flex flex-col gap-2 p-3">
              {post.replies.map((reply) => (
                <Button
                  key={reply}
                  disabled={pressedReply !== null && pressedReply !== reply}
                  onClick={() => {
                    setPressedReply(reply);
                    onReply(reply);
                  }}
                  onAnimationEnd={() => setPressedReply(null)}
                  className="h-[34px] text-sm"
                >
                  {reply}
                </Button>
              ))}
            </div>
          )}
        </section>
      </Dialog.Body>
    </Dialog.Popup>
  );
}
