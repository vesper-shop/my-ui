import { Card, Tabs } from "@my-ui/furbobo-gossip";
import { ChevronRight } from "lucide-react";
import { Cover } from "@/cover";
import { volumes } from "@/data/volumes";
import type { HeadlinesPageProps } from "@/types";

export function HeadlinesPage({ volumeIndex, onVolumeChange, onOpenArticle }: HeadlinesPageProps) {
  const volume = volumes.find((item) => item.number === volumeIndex + 1);
  const pageCount = volumes.length + 1;

  return (
    <div className="flex h-full flex-col">
      <Tabs.Root
        value={volumeIndex}
        onValueChange={(value) => typeof value === "number" && onVolumeChange(value)}
      >
        <Tabs.List className="ml-9">
          {Array.from({ length: pageCount }, (_, index) => (
            <Tabs.Tab key={index} value={index}>
              Vol.{index + 1}
            </Tabs.Tab>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
      <div
        key={volumeIndex}
        className="page-in mt-12 grid grid-cols-[150px_1fr] gap-x-4 gap-y-3 pr-[70px] pl-[84px]"
      >
        <div className="issue-number">
          <span className="issue-number__digits">{String(volumeIndex + 1).padStart(2, "0")}</span>
          <small className="issue-number__label">VOL.</small>
        </div>
        {volume ? (
          <>
            <Card.Root className="block p-1" onClick={() => onOpenArticle(volume)}>
              <div className="relative h-[225px] overflow-hidden rounded-md">
                <Cover src={volume.cover} />
                <h2 className="sticker-text absolute right-3 bottom-2 left-3 text-[22px] text-balance break-keep">
                  {volume.title}
                </h2>
              </div>
              <p className="mt-2 px-2 pb-1 text-sm text-muted-foreground">{volume.caption}</p>
              <span className="arrow-chip">
                <ChevronRight size={20} strokeWidth={3} />
              </span>
            </Card.Root>
            <div className="col-span-2 grid grid-cols-2 gap-3">
              {volume.headlines.map((headline, index) => (
                <Card.Root
                  key={headline.title}
                  data-layout={index === 0 ? "side" : "stack"}
                  className="group block h-[270px] p-1"
                  onClick={() => onOpenArticle(volume)}
                >
                  <div className="flex h-full gap-3 group-data-[layout=stack]:flex-col">
                    <div className="relative h-full w-[300px] shrink-0 overflow-hidden rounded-md group-data-[layout=stack]:h-[205px] group-data-[layout=stack]:w-full">
                      <Cover src={headline.cover} />
                    </div>
                    <p className="pt-1 pr-2 text-base leading-snug text-balance break-keep text-foreground">
                      {headline.title}
                    </p>
                  </div>
                  <span className="arrow-chip">
                    <ChevronRight size={20} strokeWidth={3} />
                  </span>
                </Card.Root>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="skeleton h-[290px]" />
            <div className="col-span-2 grid grid-cols-2 gap-3">
              <div className="skeleton h-[200px]" />
              <div className="skeleton relative h-[200px]">
                <span className="coming-soon">敬请期待~</span>
              </div>
            </div>
          </>
        )}
      </div>
      <nav aria-label="分期" className="mt-auto mb-6 flex items-center gap-3 px-8">
        <span className="h-px flex-1 bg-border" />
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`第 ${index + 1} 期`}
            aria-current={index === volumeIndex ? "page" : "false"}
            onClick={() => onVolumeChange(index)}
            className="page-dot"
          />
        ))}
        <span className="h-px flex-1 bg-border" />
      </nav>
    </div>
  );
}
