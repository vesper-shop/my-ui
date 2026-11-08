import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "@my-ui/prts";

const modes = [
  { value: "window", label: "窗口化" },
  { value: "borderless", label: "无边框全屏" },
  { value: "fullscreen", label: "全屏" },
];

const meta = {
  title: "prts/Select",
  component: Select.Root,
  args: { items: modes, defaultValue: modes[1].value },
  render: (args) => (
    <div className="p-3">
      <Select.Root {...args}>
        <Select.Trigger>
          <Select.Value />
          <Select.Icon />
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner>
            <Select.Popup>
              {modes.map((mode) => (
                <Select.Item key={mode.value} value={mode.value}>
                  <Select.ItemText>{mode.label}</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    </div>
  ),
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = { args: { defaultOpen: true } };

export const Disabled: Story = { args: { disabled: true } };
