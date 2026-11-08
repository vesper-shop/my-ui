import { Dialog, Tabs, Tooltip } from "@my-ui/ghostly-grove";
import { ChartNoAxesCombined, SquareUser } from "lucide-react";
import { useRef, useState, useSyncExternalStore } from "react";
import { BlogHeader } from "@/blog-header";
import { blogger } from "@/data/blogger";
import { posts } from "@/data/posts";
import { FansPanel } from "@/fans-panel";
import { PlanDialog } from "@/plan-dialog";
import { PostPopup } from "@/post-popup";
import { PostsPanel } from "@/posts-panel";
import type { Post, StyleWithVars } from "@/types";

function subscribeToResize(onResize: () => void) {
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}

export function App() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [openPost, setOpenPost] = useState<Post | null>(null);
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const width = useSyncExternalStore(subscribeToResize, () => window.innerWidth);
  const height = useSyncExternalStore(subscribeToResize, () => window.innerHeight);
  const scale = width / 1600;
  const stageStyle: StyleWithVars = {
    "--stage-height": `${Math.max(height / scale, 900)}px`,
    "--stage-scale": `${scale}`,
  };

  return (
    <Tooltip.Provider delay={0} closeDelay={0}>
      <div className="h-dvh overflow-hidden bg-background">
        <div className="stage" style={stageStyle}>
          <div
            ref={stageRef}
            className="stage__canvas bg-grove-stage relative w-[1600px] overflow-hidden"
          >
            <BlogHeader />
            <Tabs.Root
              orientation="vertical"
              defaultValue="fans"
              className="absolute top-[190px] bottom-[48px] left-1/2 w-[1444px] -translate-x-1/2"
            >
              <Tabs.List>
                <Tabs.Tab value="fans">
                  <ChartNoAxesCombined size={28} />
                  粉丝变化
                </Tabs.Tab>
                <Tabs.Tab value="posts">
                  <SquareUser size={28} />
                  动态汇总
                </Tabs.Tab>
                <Tabs.Indicator />
              </Tabs.List>
              <Tabs.Panel value="fans" className="flex min-h-0 flex-col">
                <FansPanel onOpenPlan={() => setIsPlanOpen(true)} />
              </Tabs.Panel>
              <Tabs.Panel value="posts" className="flex min-h-0 flex-col">
                <PostsPanel
                  posts={posts}
                  onOpen={(post) => {
                    setOpenPost(post);
                    setIsPostOpen(true);
                  }}
                />
              </Tabs.Panel>
            </Tabs.Root>
            <span className="absolute bottom-3 left-6 text-sm text-subtle-foreground">
              {blogger.uid}
            </span>
            <Dialog.Root
              open={isPostOpen}
              onOpenChange={setIsPostOpen}
              onOpenChangeComplete={(isOpen) => isOpen || setOpenPost(null)}
            >
              <Dialog.Portal container={stageRef}>
                <Dialog.Backdrop />
                {openPost && (
                  <PostPopup
                    post={openPost}
                    isLiked={likedIds.includes(openPost.id)}
                    onLike={() =>
                      setLikedIds(
                        likedIds.includes(openPost.id)
                          ? likedIds.filter((id) => id !== openPost.id)
                          : [...likedIds, openPost.id],
                      )
                    }
                  />
                )}
              </Dialog.Portal>
            </Dialog.Root>
            <Dialog.Root open={isPlanOpen} onOpenChange={setIsPlanOpen}>
              <Dialog.Portal container={stageRef}>
                <Dialog.Backdrop />
                <PlanDialog />
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
}
