import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "@my-ui/ghostly-grove";

const meta = {
  title: "ghostly-grove/Toggle",
  component: Toggle,
  args: { children: "收藏" },
  argTypes: { variant: { control: "inline-radio", options: ["default", "ghost"] } },
  decorators: [
    (Story) => (
      <div className="p-3">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Pressed: Story = { args: { defaultPressed: true } };

export const Ghost: Story = { args: { variant: "ghost", children: "♡ 128" } };

export const Disabled: Story = { args: { disabled: true } };
