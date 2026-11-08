import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Button, Dialog } from "@my-ui/furbobo-gossip";

const meta = {
  title: "furbobo-gossip/Dialog",
  component: Dialog.Root,
  parameters: { layout: "fullscreen" },
  render: (args) => (
    <div className="p-4">
      <Dialog.Root {...args}>
        <Dialog.Trigger render={<Button />}>打开</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Popup>
            <Dialog.Header>
              <Avatar.Root>
                <Avatar.Fallback>绳</Avatar.Fallback>
              </Avatar.Root>
              <Dialog.Title>帕姆百万贺图流出：列车组聚餐，帕姆眼里只有菜</Dialog.Title>
              <Dialog.Close />
            </Dialog.Header>
            <Dialog.Body>
              <Dialog.Description>据知情人士透露，聚餐全程帕姆只说了一句话。</Dialog.Description>
            </Dialog.Body>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  ),
} satisfies Meta<typeof Dialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = { args: { defaultOpen: true } };
