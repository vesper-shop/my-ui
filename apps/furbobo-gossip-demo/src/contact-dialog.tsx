import { Dialog } from "@my-ui/furbobo-gossip";
import { useRef } from "react";

export function ContactDialog() {
  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog.Popup
      ref={popupRef}
      initialFocus={popupRef}
      className="[--dialog-height:468px] [--dialog-width:844px]"
    >
      <Dialog.Header className="bg-banner relative h-[52px] justify-center py-0">
        <span className="wordmark text-2xl">FURBOBO</span>
        <Dialog.Close className="absolute right-4 text-paper" />
      </Dialog.Header>
      <Dialog.Body className="m-10 mt-4 items-center gap-6 rounded-lg border border-border bg-surface/70 px-24 pt-8 text-body">
        <Dialog.Title>联系我们</Dialog.Title>
        <div className="self-stretch">
          <p>通讯地址：诺丁汉-一英里奶茶铺隔壁-《狸狸周报》编辑部二楼</p>
          <p>商务合作：@小编本编（嗯呢）</p>
          <p>招聘对接：@鲸鱼堂摸鱼特派员（带薪摸鱼，包吃包住）</p>
          <p className="mt-6">「任何时间？任何地点！超级狸狸——都会出现！」</p>
        </div>
        <Dialog.Description className="text-center">
          ✧本刊物内容的最终解释权归《狸狸周报》所有✧
          <br />
          ✧如有雷同，纯属巧合✧
        </Dialog.Description>
      </Dialog.Body>
    </Dialog.Popup>
  );
}
