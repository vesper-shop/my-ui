import { Badge, Button, Dialog, Separator, Toggle } from "@my-ui/ghostly-grove";
import { ChevronDown, Flame, Heart } from "lucide-react";
import { Fragment, useRef, useState } from "react";
import { Cover } from "@/cover";
import { blogger } from "@/data/blogger";
import type { PostPopupProps } from "@/types";
import { UserAvatar } from "@/user-avatar";

export function PostPopup({ post, isLiked, onLike }: PostPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const likes = post.likes + (isLiked ? 1 : 0);

  return (
    <Dialog.Popup ref={popupRef} initialFocus={popupRef} className="flex-row">
      <div className="relative w-[796px] shrink-0 overflow-hidden">
        <Cover src={post.cover} />
        {post.status === "done" && <Badge className="absolute top-0 left-0">✓ 已完成</Badge>}
        <Toggle
          variant="ghost"
          pressed={isLiked}
          onPressedChange={onLike}
          className="like absolute top-9 left-8 gap-3 text-lg text-foreground"
        >
          <span className="like__button">
            <Heart size={22} className="like__icon" />
          </span>
          {likes.toLocaleString("zh-CN", { notation: "compact", maximumFractionDigits: 1 })}
        </Toggle>
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <Dialog.Header className="pt-6 pb-2 pl-6">
          <UserAvatar name={blogger.name} src={blogger.avatar} size={36} />
          <span className="text-[22px]">{blogger.name}</span>
          <Flame size={18} className="fill-label text-label" />
          <Dialog.Close />
        </Dialog.Header>
        <Dialog.Body className="mt-0 ml-6">
          <Dialog.Title>{post.title}</Dialog.Title>
          <Dialog.Description className={isExpanded ? "mt-2" : "mt-2 line-clamp-2"}>
            {post.topics.map((topic) => (
              <span key={topic} className="mr-2 text-link">
                #{topic}#
              </span>
            ))}
            {post.text}
          </Dialog.Description>
          <Button
            variant="ghost"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
            className="read-more mt-1 self-end text-[22px]"
          >
            {isExpanded ? "收起" : "阅读全文"}
            <ChevronDown size={18} className="read-more__chevron" />
          </Button>
          <Separator className="my-4" />
          <p className="mb-4 text-xl text-muted-foreground">共{post.comments.length}条评论</p>
          <ol className="flex flex-col">
            {post.comments.map((comment, index) => (
              <Fragment key={index}>
                {index > 0 && <Separator className="my-4 h-px" />}
                <li className="comment">
                  <UserAvatar name={comment.author} src={comment.avatar} size={36} />
                  <span className="text-xl text-disabled-foreground">{comment.author}</span>
                  <p className="comment__text">{comment.text}</p>
                  {comment.replies.map((reply) => (
                    <div key={reply.text} className="comment comment__reply">
                      <UserAvatar name={reply.author} src={reply.avatar} size={28} />
                      <span className="text-lg text-disabled-foreground">{reply.author}</span>
                      <p className="comment__text">{reply.text}</p>
                    </div>
                  ))}
                </li>
              </Fragment>
            ))}
          </ol>
        </Dialog.Body>
      </div>
    </Dialog.Popup>
  );
}
