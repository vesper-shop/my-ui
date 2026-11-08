import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@my-ui/inter-knot";

const meta = {
  title: "inter-knot/Badge",
  component: Badge,
  args: { children: "1F" },
  argTypes: { variant: { control: "inline-radio", options: ["default", "secondary"] } },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = { args: { variant: "secondary", children: "Fairy精选" } };
