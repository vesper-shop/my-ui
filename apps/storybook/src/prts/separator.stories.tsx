import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "@my-ui/prts";

const meta = {
  title: "prts/Separator",
  component: Separator,
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-[600px]">
        <Story />
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [
    (Story) => (
      <div className="flex h-10 items-center gap-5">
        A<Story />B
      </div>
    ),
  ],
};
