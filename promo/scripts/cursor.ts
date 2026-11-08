window.addEventListener("DOMContentLoaded", () => {
  const layer = document.createElement("div");
  layer.style.cssText = "position:fixed;inset:0;z-index:2147483647;pointer-events:none;";
  const pointer = document.createElement("div");
  pointer.innerHTML =
    '<svg width="28" height="34" viewBox="0 0 28 34"><path d="M2 2 L2 27 L8.5 21 L13 31 L17.5 29 L13 19.5 L22 19.5 Z" fill="#fff" stroke="#111" stroke-width="2.4" stroke-linejoin="round"/></svg>';
  pointer.style.cssText =
    "position:absolute;left:0;top:0;width:28px;height:34px;filter:drop-shadow(0 2px 3px rgb(0 0 0 / 0.35));";
  layer.append(pointer);
  document.body.append(layer);

  let x = innerWidth / 2;
  let y = innerHeight / 2;
  let frame = 0;
  pointer.style.transform = `translate(${x}px, ${y}px)`;

  window.addEventListener(
    "mousemove",
    (event) => {
      const fromX = x;
      const fromY = y;
      const toX = event.clientX;
      const toY = event.clientY;
      const started = performance.now();
      cancelAnimationFrame(frame);
      const step = (now: number) => {
        const progress = Math.min(1, (now - started) / 220);
        const eased = 1 - (1 - progress) ** 3;
        x = fromX + (toX - fromX) * eased;
        y = fromY + (toY - fromY) * eased;
        pointer.style.transform = `translate(${x}px, ${y}px)`;
        const dot = document.createElement("div");
        dot.style.cssText = `position:absolute;left:${x - 5}px;top:${y - 5}px;width:10px;height:10px;border-radius:50%;background:rgb(255 196 0 / 0.75);transition:opacity 0.6s, transform 0.6s;`;
        layer.insertBefore(dot, pointer);
        requestAnimationFrame(() => {
          dot.style.opacity = "0";
          dot.style.transform = "scale(0.3)";
        });
        setTimeout(() => dot.remove(), 700);
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    },
    true,
  );

  window.addEventListener(
    "mousedown",
    () => {
      const ring = document.createElement("div");
      ring.style.cssText = `position:absolute;left:${x - 22}px;top:${y - 22}px;width:44px;height:44px;border-radius:50%;border:4px solid rgb(255 196 0);transition:opacity 0.5s, transform 0.5s;transform:scale(0.4);`;
      layer.insertBefore(ring, pointer);
      requestAnimationFrame(() => {
        ring.style.opacity = "0";
        ring.style.transform = "scale(1.4)";
      });
      setTimeout(() => ring.remove(), 600);
    },
    true,
  );
});
