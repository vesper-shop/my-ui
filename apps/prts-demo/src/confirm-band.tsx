import { Dialog } from "@my-ui/prts";
import { Check, X } from "lucide-react";
import { useRef } from "react";
import type { ConfirmBandProps } from "@/types";

export function ConfirmBand({ message, onConfirm }: ConfirmBandProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog.Popup ref={popupRef} initialFocus={popupRef} className="[--dialog-height:250px]">
      <Dialog.Body className="items-center justify-center">
        <Dialog.Title className="text-lg font-normal">{message}</Dialog.Title>
      </Dialog.Body>
      <div className="grid h-14 shrink-0 grid-cols-2">
        <Dialog.Close aria-label="取消" data-tone="cancel" className="band-action">
          <span className="band-action__icon">
            <X size={20} strokeWidth={3} />
          </span>
        </Dialog.Close>
        <Dialog.Close
          aria-label="确认"
          onClick={onConfirm}
          data-tone="confirm"
          className="band-action"
        >
          <span className="band-action__icon">
            <Check size={20} strokeWidth={3} />
          </span>
        </Dialog.Close>
      </div>
    </Dialog.Popup>
  );
}
