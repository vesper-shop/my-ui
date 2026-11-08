import { Badge, Card } from "@my-ui/ghostly-grove";
import { CircleCheck, Flame, Heart, MessageSquare } from "lucide-react";
import { Cover } from "@/cover";
import { blogger } from "@/data/blogger";
import type { PostCardProps } from "@/types";
import { UserAvatar } from "@/user-avatar";

export function PostCard({ post, onOpen }: PostCardProps) {
  return (
    <Card.Root render={<article />} onClick={onOpen}>
      {post.status === "read" && (
        <Badge variant="secondary" className="absolute top-4 right-5">
          已读
        </Badge>
      )}
      {post.status === "done" && (
        <span className="absolute top-3 right-4 text-glow">
          <CircleCheck size={34} strokeWidth={1.8} />
        </span>
      )}
      <Card.Body>
        <Card.Header>
          <Card.Avatar>
            <UserAvatar name={blogger.name} src={blogger.avatar} size={26} />
          </Card.Avatar>
          {blogger.name}
          <Flame size={18} className="fill-label text-label" />
        </Card.Header>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>
          {post.topics.map((topic) => (
            <span key={topic} className="mr-2 text-link">
              #{topic}#
            </span>
          ))}
          {post.text}
        </Card.Description>
        <Card.Footer>
          <span className="flex items-center gap-2">
            <Heart size={20} />
            {post.likes.toLocaleString("zh-CN", { notation: "compact", maximumFractionDigits: 1 })}
          </span>
          <span className="flex items-center gap-2">
            <MessageSquare size={20} />
            {post.comments.length}
          </span>
        </Card.Footer>
      </Card.Body>
      <Card.Media>
        <Cover src={post.cover} />
        {post.tag && <span className="post-tag">{post.tag}</span>}
      </Card.Media>
    </Card.Root>
  );
}
