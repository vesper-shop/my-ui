import { Toast } from "@my-ui/prts";
import { useRef, useState, useSyncExternalStore } from "react";
import { FriendsPage } from "@/friends-page";
import { SettingsPage } from "@/settings-page";
import { StageContext } from "@/stage";
import { Toasts } from "@/toasts";
import type { Page, StyleWithVars, ToastPlacement } from "@/types";

function subscribeToResize(onResize: () => void) {
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}

export function App() {
  const stageRef = useRef<HTMLDivElement>(null);
  const toastManager = Toast.useToastManager();
  const [page, setPage] = useState<Page>("settings");

  function notify(message: string, placement: ToastPlacement) {
    toastManager.add({ title: message, type: placement, timeout: 1800 });
  }

  const width = useSyncExternalStore(subscribeToResize, () => window.innerWidth);
  const height = useSyncExternalStore(subscribeToResize, () => window.innerHeight);
  const scale = width / 1280;
  const stageStyle: StyleWithVars = {
    "--stage-height": `${Math.max(height / scale, 720)}px`,
    "--stage-scale": `${scale}`,
  };

  return (
    <div className="h-dvh overflow-hidden bg-background">
      <div className="stage" style={stageStyle}>
        <div
          ref={stageRef}
          className="stage__canvas relative w-[1280px] overflow-hidden bg-background"
        >
          <StageContext value={stageRef}>
            <div key={page} className="page-enter h-full">
              {page === "settings" ? (
                <SettingsPage onNavigate={setPage} onNotify={notify} />
              ) : (
                <FriendsPage onNavigate={setPage} onNotify={notify} />
              )}
            </div>
            <Toasts />
          </StageContext>
        </div>
      </div>
    </div>
  );
}
