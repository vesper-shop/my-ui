import { Badge, Card } from "@my-ui/furbobo-gossip";
import { MessageSquareMore, Play, ZoomIn } from "lucide-react";
import { Cover } from "@/cover";
import { posts } from "@/data/posts";
import { LikeButton } from "@/like-button";
import { RichText } from "@/rich-text";
import type { ChatPageProps } from "@/types";
import { UserAvatar } from "@/user-avatar";

export function ChatPage({ likedKeys, onToggleLike, onOpenPost }: ChatPageProps) {
  return (
    <div className="flex h-full flex-col gap-3 overflow-y-auto pt-1 pr-14 pb-6 pl-[84px]">
      {posts.map((post) => (
        <Card.Root
          key={post.id}
          render={<article />}
          onClick={() => onOpenPost(post)}
          className="shrink-0"
        >
          <Card.Body>
            <Card.Title className="text-balance break-keep">{post.title}</Card.Title>
            <Card.Description>
              {post.tags.length > 0 && (
                <span className="block text-tag">
                  {post.tags.map((tag) => `#${tag}#`).join(" ")}
                </span>
              )}
              <RichText text={post.text} />
            </Card.Description>
            <Card.Header>
              <Card.Avatar>
                <UserAvatar name={post.author} src={post.avatar} size={24} />
              </Card.Avatar>
              {post.author}
              {post.isOfficial && <Badge>官方</Badge>}
            </Card.Header>
            <Card.Footer>
              <LikeButton
                count={post.likes}
                isLiked={likedKeys.includes(`post-${post.id}`)}
                onToggle={() => onToggleLike(`post-${post.id}`)}
              />
              <span className="flex items-center gap-1">
                <MessageSquareMore size={18} />
                {post.comments.length}
              </span>
            </Card.Footer>
          </Card.Body>
          <Card.Media>
            <Cover src={post.cover} />
            <span className="media-badge">
              {post.hasVideo ? <Play size={20} className="fill-current" /> : <ZoomIn size={22} />}
            </span>
          </Card.Media>
        </Card.Root>
      ))}
    </div>
  );
}
