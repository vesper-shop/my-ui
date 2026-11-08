import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Button, Dialog } from "@my-ui/ghostly-grove";

const meta = {
  title: "ghostly-grove/Dialog",
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
              <Dialog.Title>全体目光向我看齐！我在埃菲尔铁塔下面！</Dialog.Title>
              <Dialog.Close />
            </Dialog.Header>
            <Dialog.Body>
              <Dialog.Description>为了拍这张仰视图，我在地上躺了五分钟。</Dialog.Description>
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
