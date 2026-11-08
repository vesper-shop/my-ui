import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Button, Progress, Switch, Tabs } from "@my-ui/inter-knot";

const meta = {
  title: "inter-knot/Showcase",
  render: () => (
    <div className="flex flex-col items-start gap-6 p-6">
      <div className="flex flex-wrap items-center gap-4">
        <Button>发帖</Button>
        <Button variant="ghost">回复</Button>
        <Badge>官方</Badge>
        <Badge variant="secondary">1F</Badge>
      </div>
      <Tabs.Root defaultValue="推送">
        <Tabs.List>
          <Tabs.Tab value="推送">推送</Tabs.Tab>
          <Tabs.Tab value="日程">日程</Tabs.Tab>
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
      <Switch.Root>
        <Switch.Thumb />
      </Switch.Root>
      <Progress.Root value={1700} max={6890} className="w-[360px]">
        <Progress.Track>
          <Progress.Indicator />
        </Progress.Track>
      </Progress.Root>
    </div>
  ),
} satisfies Meta;

export default meta;

export const Default: StoryObj<typeof meta> = {};
