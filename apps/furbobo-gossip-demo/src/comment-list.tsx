import { Separator } from "@my-ui/furbobo-gossip";
import { Fragment } from "react";
import type { CommentListProps } from "@/types";
import { UserAvatar } from "@/user-avatar";

export function CommentList({ comments }: CommentListProps) {
  return (
    <ol className="flex flex-col">
      {comments.map((comment, index) => (
        <Fragment key={index}>
          {index > 0 && <Separator className="my-2.5" />}
          <li className="flex gap-2.5">
            <UserAvatar name={comment.author} src={comment.avatar} size={30} />
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div>
                <p className="text-caption text-subtle-foreground">{comment.author}</p>
                <p className="text-sm leading-relaxed">{comment.text}</p>
              </div>
              {comment.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="flex gap-2">
                  <UserAvatar name={reply.author} src={reply.avatar} size={22} />
                  <div>
                    <p className="text-caption text-subtle-foreground">{reply.author}</p>
                    <p className="text-sm leading-relaxed">{reply.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </li>
        </Fragment>
      ))}
    </ol>
  );
}
