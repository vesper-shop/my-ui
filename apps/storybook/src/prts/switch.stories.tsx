import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@my-ui/prts";

const meta = {
  title: "prts/Switch",
  component: Switch.Root,
  render: (args) => (
    <Switch.Root {...args}>
      <Switch.Thumb />
    </Switch.Root>
  ),
} satisfies Meta<typeof Switch.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = { args: { defaultChecked: true } };

export const Disabled: Story = { args: { disabled: true } };
