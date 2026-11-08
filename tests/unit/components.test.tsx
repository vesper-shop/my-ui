import * as furboboGossip from "@my-ui/furbobo-gossip";
import * as ghostlyGrove from "@my-ui/ghostly-grove";
import * as interKnot from "@my-ui/inter-knot";
import * as prts from "@my-ui/prts";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vite-plus/test";

afterEach(cleanup);

describe.each([
  ["inter-knot", "ik", interKnot],
  ["ghostly-grove", "gg", ghostlyGrove],
  ["furbobo-gossip", "fg", furboboGossip],
  ["prts", "pr", prts],
] as const)("%s", (_, prefix, ui) => {
  test("Button keeps its class and appends the consumer's", () => {
    render(<ui.Button className="mt-2">保存</ui.Button>);
    const button = screen.getByRole("button", { name: "保存" });
    expect(button.className).toBe(`${prefix}-button mt-2`);
    expect(button.dataset.variant).toBe("default");
  });

  test("Badge renders through render", () => {
    render(<ui.Badge render={<a href="#tag" />}>官方</ui.Badge>);
    const link = screen.getByRole("link", { name: "官方" });
    expect(link.className).toBe(`${prefix}-badge`);
  });

  test("Dialog.Close without children renders the UI's close mark", () => {
    render(
      <ui.Dialog.Root defaultOpen>
        <ui.Dialog.Portal>
          <ui.Dialog.Popup>
            <ui.Dialog.Title>标题</ui.Dialog.Title>
            <ui.Dialog.Close />
          </ui.Dialog.Popup>
        </ui.Dialog.Portal>
      </ui.Dialog.Root>,
    );
    const close = screen.getByRole("button", { name: "Close" });
    expect(close.className).toBe(`${prefix}-dialog__close`);
    expect(close.querySelectorAll(`.${prefix}-mark`)).toHaveLength(1);
  });
});

describe("prts", () => {
  const prefix = "pr";
  const ui = prts;

  test("Select.Icon draws the UI's chevron unless given children", () => {
    const { container } = render(
      <ui.Select.Root>
        <ui.Select.Trigger>
          <ui.Select.Icon />
          <ui.Select.Icon>▾</ui.Select.Icon>
        </ui.Select.Trigger>
      </ui.Select.Root>,
    );
    const icons = container.querySelectorAll(`.${prefix}-select__icon`);
    expect(icons[0].querySelectorAll(`.${prefix}-chevron[data-direction="down"]`)).toHaveLength(1);
    expect(icons[1].textContent).toBe("▾");
  });
});
