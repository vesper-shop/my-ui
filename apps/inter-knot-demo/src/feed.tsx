import { Dialog } from "@my-ui/inter-knot";
import { useState } from "react";
import { channels, posts as initialPosts } from "@/data/posts";
import { currentUser } from "@/data/user";
import { FilterTabs } from "@/filter-tabs";
import { PostCard } from "@/post-card";
import { PostWindow } from "@/post-window";
import type { ChannelFilter, Post } from "@/types";

export function Feed() {
  const [posts, setPosts] = useState(initialPosts);
  const [channel, setChannel] = useState<ChannelFilter>("all");
  const [openId, setOpenId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [readIds, setReadIds] = useState<number[]>([]);

  const visiblePosts = channel === "all" ? posts : posts.filter((post) => post.channel === channel);
  const openPost = posts.find((post) => post.id === openId);

  function reply(post: Post, text: string) {
    const comment = { author: currentUser.name, avatar: currentUser.avatar, text };
    setPosts(
      posts.map((item) =>
        item.id === post.id ? { ...item, comments: [...item.comments, comment] } : item,
      ),
    );
  }

  return (
    <div className="px-[45px] pb-10">
      <div className="pointer-events-none sticky top-0 z-10 flex justify-end pt-3 pb-7">
        <div className="pointer-events-auto">
          <FilterTabs
            tabs={channels}
            value={channel}
            onChange={setChannel}
            listClassName="h-[30px] w-[400px]"
            tabClassName="px-6 text-sm"
          />
        </div>
      </div>
      <div className="columns-5 gap-6">
        {visiblePosts.map((post) => (
          <PostCard
            isRead={readIds.includes(post.id)}
            key={post.id}
            post={post}
            onOpen={() => {
              setOpenId(post.id);
              setIsOpen(true);
              setReadIds([...readIds, post.id]);
            }}
          />
        ))}
      </div>
      <Dialog.Root
        open={isOpen}
        onOpenChange={setIsOpen}
        onOpenChangeComplete={(open) => open || setOpenId(null)}
      >
        <Dialog.Portal>
          <Dialog.Backdrop />
          {openPost && (
            <PostWindow
              post={openPost}
              isRead={readIds.includes(openPost.id)}
              onReply={(text) => reply(openPost, text)}
            />
          )}
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
