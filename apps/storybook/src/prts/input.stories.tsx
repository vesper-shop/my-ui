import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@my-ui/prts";

const meta = {
  title: "prts/Input",
  component: Input,
  args: { placeholder: "标题" },
  decorators: [
    (Story) => (
      <div className="max-w-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = { args: { disabled: true, placeholder: "禁用" } };
