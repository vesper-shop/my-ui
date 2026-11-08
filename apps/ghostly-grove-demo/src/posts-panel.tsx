import { PostCard } from "@/post-card";
import type { PostsPanelProps } from "@/types";

export function PostsPanel({ posts, onOpen }: PostsPanelProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto pr-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onOpen={() => onOpen(post)} />
      ))}
    </div>
  );
}
