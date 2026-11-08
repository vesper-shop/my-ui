import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@my-ui/prts";
import type { CSSProperties } from "react";

const meta = {
  title: "prts/Avatar",
  component: Avatar.Root,
  render: (args) => (
    <Avatar.Root {...args}>
      <Avatar.Fallback>绳</Avatar.Fallback>
    </Avatar.Root>
  ),
} satisfies Meta<typeof Avatar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {["40px", "50px", "70px"].map((size) => (
        <Avatar.Root key={size} style={{ "--avatar-size": size } as CSSProperties}>
          <Avatar.Fallback>{size.replace("px", "")}</Avatar.Fallback>
        </Avatar.Root>
      ))}
    </div>
  ),
};
