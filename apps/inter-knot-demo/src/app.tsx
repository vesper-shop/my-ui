import { Tooltip } from "@my-ui/inter-knot";
import { Signal } from "lucide-react";
import { useState } from "react";
import { Feed } from "@/feed";
import { Schedule } from "@/schedule";
import { TopBar } from "@/top-bar";
import type { Page } from "@/types";

export function App() {
  const [page, setPage] = useState<Page>("feed");

  return (
    <Tooltip.Provider>
      <div className="flex h-dvh min-w-[1100px] flex-col bg-chrome">
        <TopBar page={page} onPageChange={setPage} />
        <main className="relative flex min-h-0 flex-1 flex-col bg-surface-sunken">
          <div className="watermark" />
          <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto">
            <div className={page === "feed" ? "page flex flex-1 flex-col" : "hidden"}>
              <Feed />
            </div>
            <div className={page === "schedule" ? "page flex min-h-0 flex-1 flex-col" : "hidden"}>
              <Schedule />
            </div>
          </div>
        </main>
        <footer className="flex h-8 shrink-0 items-center justify-end gap-1.5 px-4 text-[11px] font-bold text-subtle-foreground">
          UID: 10000001
          <Signal size={14} />
        </footer>
      </div>
    </Tooltip.Provider>
  );
}
