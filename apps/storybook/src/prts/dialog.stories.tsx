import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Button, Dialog } from "@my-ui/prts";

const meta = {
  title: "prts/Dialog",
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
              <Dialog.Title>温馨提示</Dialog.Title>
              <Dialog.Close />
            </Dialog.Header>
            <Dialog.Body>
              <Dialog.Description>确定要把所有设置打回原形吗？此操作无法撤销。</Dialog.Description>
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
