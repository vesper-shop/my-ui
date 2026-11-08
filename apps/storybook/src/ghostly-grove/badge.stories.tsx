import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@my-ui/ghostly-grove";

const meta = {
  title: "ghostly-grove/Badge",
  component: Badge,
  args: { children: "Lv.12" },
  argTypes: { variant: { control: "inline-radio", options: ["default", "secondary"] } },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = { args: { variant: "secondary", children: "1F" } };
