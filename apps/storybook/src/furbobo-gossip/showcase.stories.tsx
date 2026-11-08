import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Button, Tabs, Toggle } from "@my-ui/furbobo-gossip";

const meta = {
  title: "furbobo-gossip/Showcase",
  render: () => (
    <div className="flex flex-col items-start gap-6 p-6">
      <div className="flex flex-wrap items-center gap-4">
        <Button>发帖</Button>
        <Button variant="ghost">回复</Button>
        <Badge>官方</Badge>
        <Badge variant="secondary">1F</Badge>
      </div>
      <Tabs.Root defaultValue="Vol.1">
        <Tabs.List>
          <Tabs.Tab value="Vol.1">Vol.1</Tabs.Tab>
          <Tabs.Tab value="Vol.2">Vol.2</Tabs.Tab>
          <Tabs.Tab value="Vol.3">Vol.3</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
      <div className="flex items-center gap-4">
        <Toggle variant="ghost">♡ 128</Toggle>
        <Toggle variant="ghost" defaultPressed>
          ♡ 129
        </Toggle>
      </div>
    </div>
  ),
} satisfies Meta;

export default meta;

export const Default: StoryObj<typeof meta> = {};
