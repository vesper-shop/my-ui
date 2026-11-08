import { Dialog, Tabs } from "@my-ui/furbobo-gossip";
import { MessageSquareMore } from "lucide-react";
import { useRef, useState } from "react";
import { CommentList } from "@/comment-list";
import { Cover } from "@/cover";
import { LikeButton } from "@/like-button";
import { RichText } from "@/rich-text";
import type { ArticleDialogProps } from "@/types";

export function ArticleDialog({ volume, isLiked, onToggleLike }: ArticleDialogProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(volume.sections[0].id);
  const toc = [
    ...volume.sections.map(({ id, title }) => ({ id, title })),
    { id: "comments", title: "网友评论" },
  ];

  function scrollTo(id: string) {
    const body = bodyRef.current;
    if (!body) return;
    const target = body.querySelector(`[data-section="${id}"]`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function syncActive(body: HTMLDivElement) {
    const reached = toc.filter((item) => {
      const mark = body.querySelector<HTMLElement>(`[data-section="${item.id}"]`);
      return mark !== null && mark.offsetTop - body.offsetTop <= body.scrollTop + 40;
    });
    const current = reached.at(-1);
    if (current) setActiveId(current.id);
  }

  return (
    <Dialog.Popup
      ref={popupRef}
      initialFocus={popupRef}
      className="bg-sidebar flex-row [--dialog-height:610px] [--dialog-width:1040px]"
    >
      <div className="relative w-[300px] shrink-0">
        <Tabs.Root
          orientation="vertical"
          value={activeId}
          onValueChange={(value) => {
            if (typeof value !== "string") return;
            setActiveId(value);
            scrollTo(value);
          }}
        >
          <Tabs.List className="toc mt-24 ml-6">
            {toc.map((item) => (
              <Tabs.Tab key={item.id} value={item.id} className="w-[276px]">
                <span className="truncate">{item.title}</span>
              </Tabs.Tab>
            ))}
            <Tabs.Indicator />
          </Tabs.List>
        </Tabs.Root>
        <span data-variant="stamp" className="logo absolute bottom-6 left-6">
          <span className="logo__char">八</span>
          <span className="logo__char">卦</span>
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col rounded-l-sheet bg-surface-sunken bg-dots">
        <Dialog.Header className="border-b border-border pt-3 pb-3">
          <span className="issue-mini">{String(volume.number).padStart(2, "0")}</span>
          <Dialog.Title className="text-xl">{volume.title}</Dialog.Title>
          <Dialog.Close />
        </Dialog.Header>
        <Dialog.Body
          ref={bodyRef}
          onScroll={(event) => syncActive(event.currentTarget)}
          className="px-14 pt-5"
        >
          <p className="mb-4 text-body">引言：{volume.caption}</p>
          {volume.sections.map((section) => (
            <section
              key={section.id}
              data-section={section.id}
              className="flex flex-col gap-4 pb-6"
            >
              <h3 className="section-banner">{section.title}</h3>
              {section.blocks.map((block, blockIndex) => {
                if (block.kind === "image") {
                  return (
                    <div
                      key={blockIndex}
                      className="mx-auto h-[150px] w-[275px] overflow-hidden rounded-lg border-3 border-paper shadow-md"
                    >
                      <Cover src={block.src} />
                    </div>
                  );
                }
                if (block.kind === "question") {
                  return (
                    <div key={blockIndex} className="question">
                      <p className="text-tag">{block.label}：</p>
                      <p>
                        <RichText text={block.text} />
                      </p>
                      <p className="text-right text-muted-foreground">——{block.asker}</p>
                    </div>
                  );
                }
                if (block.kind === "answer") {
                  return (
                    <div key={blockIndex} className="answer">
                      {block.label !== "" && <p className="text-tag">{block.label}：</p>}
                      {block.lines.map((line) => (
                        <div key={line.text} className="answer__line">
                          <p className="text-tag">{line.speaker}：</p>
                          <p>
                            <RichText text={line.text} />
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
                  <p key={blockIndex} className="text-body">
                    <RichText text={block.text} />
                  </p>
                );
              })}
            </section>
          ))}
          <div className="flex justify-end gap-5 border-b border-border pb-4 font-display text-muted-foreground">
            <LikeButton count={volume.likes} isLiked={isLiked} onToggle={onToggleLike} />
            <span className="flex items-center gap-1.5">
              <MessageSquareMore size={18} />
              {volume.comments.length}
            </span>
          </div>
          <section data-section="comments" className="pt-5">
            <CommentList comments={volume.comments} />
          </section>
        </Dialog.Body>
      </div>
    </Dialog.Popup>
  );
}
