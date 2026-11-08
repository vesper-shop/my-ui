import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Button, Tabs, Toggle } from "@my-ui/ghostly-grove";

const meta = {
  title: "ghostly-grove/Showcase",
  render: () => (
    <div className="flex flex-col items-start gap-6 p-6">
      <div className="flex flex-wrap items-center gap-4">
        <Button>发帖</Button>
        <Button variant="ghost">回复</Button>
        <Badge>官方</Badge>
        <Badge variant="secondary">1F</Badge>
      </div>
      <Tabs.Root defaultValue="粉丝变化">
        <Tabs.List>
          <Tabs.Tab value="粉丝变化">粉丝变化</Tabs.Tab>
          <Tabs.Tab value="动态汇总">动态汇总</Tabs.Tab>
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
