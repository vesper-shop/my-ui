import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@my-ui/inter-knot";

const meta = {
  title: "inter-knot/Progress",
  component: Progress.Root,
  args: { value: 502, max: 1145 },
  render: (args) => (
    <Progress.Root {...args} className="w-[300px]">
      <Progress.Label>LEVEL</Progress.Label>
      <Progress.Track>
        <Progress.Indicator />
        <Progress.Value>{(_, value) => `${value}/${args.max}`}</Progress.Value>
      </Progress.Track>
    </Progress.Root>
  ),
} satisfies Meta<typeof Progress.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
