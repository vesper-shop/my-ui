import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Button, Dialog } from "@my-ui/inter-knot";

const meta = {
  title: "inter-knot/Dialog",
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
              <Dialog.Title>[求助] 加班布已连续加班 72 小时，还有救吗</Dialog.Title>
              <Dialog.Close />
            </Dialog.Header>
            <Dialog.Body>
              <Dialog.Description>
                它的眼睛已经变成绿色了，领带也歪了，但还在打卡。
              </Dialog.Description>
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
