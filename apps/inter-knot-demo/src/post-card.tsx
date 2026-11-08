import { Badge, Card } from "@my-ui/inter-knot";
import { CircleDot } from "lucide-react";
import { Cover } from "@/cover";
import type { PostCardProps } from "@/types";
import { UserAvatar } from "@/user-avatar";

export function PostCard({ post, isRead, onOpen }: PostCardProps) {
  return (
    <Card.Root render={<article />} onClick={onOpen} className="mb-6 break-inside-avoid">
      <Card.Media>
        <Cover {...post.cover} />
        {post.tag && (
          <Badge variant="secondary" className="absolute top-2.5 left-2.5">
            {post.channel === "fairy" && <CircleDot size={14} strokeWidth={3} />}
            {post.tag}
          </Badge>
        )}
        {isRead && <span className="read-mark">已读</span>}
      </Card.Media>
      <Card.Body>
        <Card.Header>
          <Card.Avatar>
            <UserAvatar name={post.author} src={post.avatar} size={44} />
          </Card.Avatar>
          <span className="truncate">{post.author}</span>
        </Card.Header>
        <Card.Title>{post.title}</Card.Title>
        <Card.Description>{post.excerpt}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
