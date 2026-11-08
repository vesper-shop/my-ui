import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Tooltip } from "@my-ui/furbobo-gossip";

const meta = {
  title: "furbobo-gossip/Tooltip",
  component: Tooltip.Root,
  render: (args) => (
    <Tooltip.Provider>
      <div className="p-12">
        <Tooltip.Root {...args}>
          <Tooltip.Trigger render={<Button />}>悬停</Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup>Tooltip.Popup</Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </Tooltip.Provider>
  ),
} satisfies Meta<typeof Tooltip.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = { args: { defaultOpen: true } };
