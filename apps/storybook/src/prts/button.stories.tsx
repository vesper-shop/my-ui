import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@my-ui/prts";

const meta = {
  title: "prts/Button",
  component: Button,
  args: { children: "发帖" },
  argTypes: { variant: { control: "inline-radio", options: ["default", "ghost"] } },
  decorators: [
    (Story) => (
      <div className="p-3">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Ghost: Story = { args: { variant: "ghost", children: "回复" } };

export const Disabled: Story = { args: { disabled: true } };
