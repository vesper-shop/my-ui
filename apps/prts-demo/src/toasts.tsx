import { Toast } from "@my-ui/prts";
import { use } from "react";
import { StageContext } from "@/stage";

export function Toasts() {
  const stage = use(StageContext);
  const { toasts } = Toast.useToastManager();

  return (
    <Toast.Portal container={stage}>
      <Toast.Viewport>
        {toasts.map((toast) => (
          <Toast.Root key={toast.id} toast={toast}>
            <svg viewBox="0 0 53 53" aria-hidden="true" className="toast-mark">
              <circle
                cx="26.5"
                cy="26.5"
                r="24.5"
                strokeWidth="4"
                className="fill-none stroke-current"
              />
              <circle cx="26.5" cy="13" r="2.9" className="fill-current" />
              <rect x="24.25" y="19.5" width="4.5" height="20.5" className="fill-current" />
            </svg>
            <Toast.Title />
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  );
}
