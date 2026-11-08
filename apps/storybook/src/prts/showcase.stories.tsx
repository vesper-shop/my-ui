import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Button, Progress, Slider, Switch, Toggle, ToggleGroup } from "@my-ui/prts";

const meta = {
  title: "prts/Showcase",
  render: () => (
    <div className="flex flex-col items-start gap-6 p-6">
      <div className="flex flex-wrap items-center gap-4">
        <Button>发帖</Button>
        <Button variant="ghost">回复</Button>
        <Badge>官方</Badge>
        <Badge variant="secondary">1F</Badge>
      </div>
      <ToggleGroup defaultValue={["on"]}>
        <Toggle value="on">开启</Toggle>
        <Toggle value="home">仅主页</Toggle>
        <Toggle value="off">关闭</Toggle>
      </ToggleGroup>
      <div className="flex flex-wrap items-center gap-8">
        <Switch.Root defaultChecked>
          <Switch.Thumb />
        </Switch.Root>
        <Slider.Root defaultValue={60} thumbAlignment="edge" className="w-[280px] max-w-full">
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
      <Progress.Root value={64} className="w-[360px] max-w-full">
        <Progress.Track>
          <Progress.Indicator />
        </Progress.Track>
      </Progress.Root>
    </div>
  ),
} satisfies Meta;

export default meta;

export const Default: StoryObj<typeof meta> = {};
