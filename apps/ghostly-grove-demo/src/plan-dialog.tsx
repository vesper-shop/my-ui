import { Dialog } from "@my-ui/ghostly-grove";
import { Check, ChevronRight, Diamond, NotebookPen, Triangle } from "lucide-react";
import { useRef, useState } from "react";
import { Cover } from "@/cover";
import { planCover, planPages, planTitle } from "@/data/plan";
import { UserAvatar } from "@/user-avatar";

export function PlanDialog() {
  const popupRef = useRef<HTMLDivElement>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const page = planPages[pageIndex];

  return (
    <Dialog.Popup ref={popupRef} initialFocus={popupRef} className="plan">
      <div className="relative h-[180px] shrink-0 overflow-hidden">
        <Cover src={planCover} />
        <Dialog.Title className="absolute top-8 left-8 flex items-center gap-3 text-[26px] text-foreground">
          <NotebookPen size={30} />
          {planTitle}
        </Dialog.Title>
      </div>
      <div key={pageIndex} className="plan__page relative flex min-h-0 flex-1 flex-col px-8">
        <p className="plan__summary -mt-[60px] min-h-[150px] px-5 py-4 text-xl text-foreground">
          {page.summary}
        </p>
        <h3 className="mt-6 mb-4 text-xl text-link">{page.section}</h3>
        <ol className="plan__tasks flex flex-col gap-1">
          {page.tasks.map((task) => (
            <li key={task.text} className="flex items-center gap-3">
              <span className="relative z-10 -ml-[3px] grid size-5 place-items-center rounded-full bg-glow text-surface">
                <Check size={14} strokeWidth={3.5} />
              </span>
              <span className="flex min-h-[64px] flex-1 items-center gap-3 bg-surface-raised px-3 py-2 text-[17px] text-foreground">
                <UserAvatar name={task.author} src={task.avatar} size={30} />
                <span className="flex-1">{task.text}</span>
                {task.mark === "diamond" ? (
                  <Diamond size={26} className="fill-link/40 text-link" />
                ) : (
                  <Triangle size={26} className="fill-warning/40 text-warning" />
                )}
              </span>
            </li>
          ))}
        </ol>
        <nav aria-label="分页" className="mt-auto mb-6 flex justify-end gap-3">
          {planPages.map((item, index) => (
            <button
              key={item.summary}
              type="button"
              aria-current={index === pageIndex ? "page" : "false"}
              onClick={() => setPageIndex(index)}
              className="plan__page-dot"
            >
              {index + 1}
            </button>
          ))}
        </nav>
      </div>
      <button
        type="button"
        aria-label="上一页"
        onClick={() => setPageIndex((pageIndex + planPages.length - 1) % planPages.length)}
        className="plan__arrow -left-[100px] rotate-180"
      >
        <ChevronRight size={72} strokeWidth={1.2} />
      </button>
      <button
        type="button"
        aria-label="下一页"
        onClick={() => setPageIndex((pageIndex + 1) % planPages.length)}
        className="plan__arrow -right-[100px]"
      >
        <ChevronRight size={72} strokeWidth={1.2} />
      </button>
      <p className="absolute -bottom-[70px] left-1/2 -translate-x-1/2 text-lg whitespace-nowrap text-foreground">
        点击空白处关闭
      </p>
    </Dialog.Popup>
  );
}
