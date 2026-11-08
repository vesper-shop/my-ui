import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Toast } from "@my-ui/prts";

function Toasts() {
  const { toasts, add } = Toast.useToastManager();

  return (
    <div className="p-3">
      <Button onClick={() => add({ title: "刷新标签完成", description: "公开招募的标签已更新" })}>
        发送提示
      </Button>
      <Toast.Portal>
        <Toast.Viewport>
          {toasts.map((toast) => (
            <Toast.Root key={toast.id} toast={toast}>
              <Toast.Title />
              <Toast.Description />
              <Toast.Close aria-label="关闭">✕</Toast.Close>
            </Toast.Root>
          ))}
        </Toast.Viewport>
      </Toast.Portal>
    </div>
  );
}

const meta = {
  title: "prts/Toast",
  component: Toast.Provider,
  render: (args) => (
    <Toast.Provider {...args}>
      <Toasts />
    </Toast.Provider>
  ),
} satisfies Meta<typeof Toast.Provider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
