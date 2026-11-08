import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@my-ui/prts";

const meta = {
  title: "prts/Slider",
  component: Slider.Root,
  args: { defaultValue: 60 },
  render: (args) => (
    <div className="w-[360px] p-6">
      <Slider.Root {...args}>
        <Slider.Control>
          <Slider.Track>
            <Slider.Indicator />
            <Slider.Thumb>
              <Slider.Value />
            </Slider.Thumb>
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
    </div>
  ),
} satisfies Meta<typeof Slider.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = { args: { disabled: true } };
