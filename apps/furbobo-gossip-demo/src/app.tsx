import { Dialog, Tabs, Tooltip } from "@my-ui/furbobo-gossip";
import { Undo2 } from "lucide-react";
import { useRef, useState, useSyncExternalStore } from "react";
import { ArticleDialog } from "@/article-dialog";
import { ChatDialog } from "@/chat-dialog";
import { ChatPage } from "@/chat-page";
import { ContactDialog } from "@/contact-dialog";
import { HeadlinesPage } from "@/headlines-page";
import { Sidebar } from "@/sidebar";
import type { ChatPost, Section, StyleWithVars, Volume } from "@/types";

function subscribeToResize(onResize: () => void) {
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}

export function App() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [section, setSection] = useState<Section>("headlines");
  const [volumeIndex, setVolumeIndex] = useState(0);
  const [article, setArticle] = useState<Volume | null>(null);
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  const [post, setPost] = useState<ChatPost | null>(null);
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [likedKeys, setLikedKeys] = useState<string[]>([]);

  function toggleLike(key: string) {
    setLikedKeys(
      likedKeys.includes(key) ? likedKeys.filter((item) => item !== key) : [...likedKeys, key],
    );
  }

  const width = useSyncExternalStore(subscribeToResize, () => window.innerWidth);
  const height = useSyncExternalStore(subscribeToResize, () => window.innerHeight);
  const scale = width / 1280;
  const stageStyle: StyleWithVars = {
    "--stage-height": `${Math.max(height / scale, 760)}px`,
    "--stage-scale": `${scale}`,
  };

  return (
    <Tooltip.Provider>
      <div className="h-dvh overflow-hidden bg-background">
        <div className="stage" style={stageStyle}>
          <div
            ref={stageRef}
            className="stage__canvas bg-sidebar relative w-[1280px] overflow-hidden"
          >
            <Tabs.Root
              orientation="vertical"
              value={section}
              onValueChange={(value) =>
                (value === "headlines" || value === "chat") && setSection(value)
              }
              className="absolute inset-0 gap-0"
            >
              <Sidebar onOpenContact={() => setIsContactOpen(true)} />
              <main className="paper-panel relative mb-6 flex min-w-0 flex-1 flex-col">
                <div className="flex h-[78px] shrink-0 items-start gap-3 px-8 pt-9">
                  <span className="font-display text-2xs tracking-widest text-subtle-foreground">
                    FURBOBO GOSSIP DAILY
                  </span>
                  <span className="mt-2 h-px flex-1 bg-border" />
                  <button
                    type="button"
                    aria-label="返回"
                    className="-mt-2 cursor-pointer text-ink transition-colors hover:text-accent"
                  >
                    <Undo2 size={26} />
                  </button>
                </div>
                <Tabs.Panel value="headlines" className="-mt-8 min-h-0">
                  <HeadlinesPage
                    volumeIndex={volumeIndex}
                    onVolumeChange={setVolumeIndex}
                    onOpenArticle={(volume) => {
                      setArticle(volume);
                      setIsArticleOpen(true);
                    }}
                  />
                </Tabs.Panel>
                <Tabs.Panel value="chat" className="min-h-0">
                  <ChatPage
                    likedKeys={likedKeys}
                    onToggleLike={toggleLike}
                    onOpenPost={(item) => {
                      setPost(item);
                      setIsPostOpen(true);
                    }}
                  />
                </Tabs.Panel>
              </main>
            </Tabs.Root>
            <Dialog.Root
              open={isArticleOpen}
              onOpenChange={setIsArticleOpen}
              onOpenChangeComplete={(isOpen) => isOpen || setArticle(null)}
            >
              <Dialog.Portal container={stageRef}>
                <Dialog.Backdrop />
                {article && (
                  <ArticleDialog
                    volume={article}
                    isLiked={likedKeys.includes(`volume-${article.number}`)}
                    onToggleLike={() => toggleLike(`volume-${article.number}`)}
                  />
                )}
              </Dialog.Portal>
            </Dialog.Root>
            <Dialog.Root
              open={isPostOpen}
              onOpenChange={setIsPostOpen}
              onOpenChangeComplete={(isOpen) => isOpen || setPost(null)}
            >
              <Dialog.Portal container={stageRef}>
                <Dialog.Backdrop />
                {post && (
                  <ChatDialog
                    post={post}
                    isLiked={likedKeys.includes(`post-${post.id}`)}
                    onToggleLike={() => toggleLike(`post-${post.id}`)}
                  />
                )}
              </Dialog.Portal>
            </Dialog.Root>
            <Dialog.Root open={isContactOpen} onOpenChange={setIsContactOpen}>
              <Dialog.Portal container={stageRef}>
                <Dialog.Backdrop />
                <ContactDialog />
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
}
