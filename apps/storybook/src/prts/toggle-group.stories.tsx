import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle, ToggleGroup } from "@my-ui/prts";

const options = ["开启", "仅主页", "关闭"];

const meta = {
  title: "prts/ToggleGroup",
  component: ToggleGroup,
  args: { defaultValue: [options[0]] },
  argTypes: { orientation: { control: "inline-radio", options: ["horizontal", "vertical"] } },
  render: (args) => (
    <ToggleGroup {...args} className="m-3">
      {options.map((option) => (
        <Toggle key={option} value={option}>
          {option}
        </Toggle>
      ))}
    </ToggleGroup>
  ),
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {};

export const Multiple: Story = { args: { multiple: true, defaultValue: options.slice(0, 2) } };

export const Vertical: Story = { args: { orientation: "vertical" } };
