import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberField } from "@my-ui/prts";

const meta = {
  title: "prts/NumberField",
  component: NumberField.Root,
  args: { defaultValue: 9, min: 0, max: 23, format: { minimumIntegerDigits: 2 } },
  render: (args) => (
    <div className="p-3">
      <NumberField.Root {...args}>
        <NumberField.Group>
          <NumberField.Increment />
          <NumberField.Input />
          <NumberField.Decrement />
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
} satisfies Meta<typeof NumberField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = { args: { disabled: true } };
