import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@my-ui/prts";

const meta = {
  title: "prts/Badge",
  component: Badge,
  args: { children: "官方" },
  argTypes: { variant: { control: "inline-radio", options: ["default", "secondary"] } },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = { args: { variant: "secondary", children: "珠宝大厦" } };
