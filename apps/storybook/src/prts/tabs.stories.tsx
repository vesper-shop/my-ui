import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "@my-ui/prts";

const tabs = ["Vol.1", "Vol.2", "Vol.3"];

const meta = {
  title: "prts/Tabs",
  component: Tabs.Root,
  args: { defaultValue: tabs[0] },
  argTypes: { orientation: { control: "inline-radio", options: ["horizontal", "vertical"] } },
  render: (args) => (
    <Tabs.Root {...args} className="p-3">
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab} value={tab}>
            {tab}
          </Tabs.Tab>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Panel key={tab} value={tab}>
          {tab}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  ),
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = { args: { orientation: "vertical" } };
