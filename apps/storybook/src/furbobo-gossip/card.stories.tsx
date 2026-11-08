import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Card } from "@my-ui/furbobo-gossip";

const meta = {
  title: "furbobo-gossip/Card",
  component: Card.Root,
  render: (args) => (
    <Card.Root {...args}>
      <Card.Body>
        <Card.Title>读懂这三句话，你的职场之路会变得和别人不一样</Card.Title>
        <Card.Description>
          <span className="block text-tag">#职场#</span>
          被领导批评时立刻深呼吸，能把领导的话转换成白噪音！
        </Card.Description>
        <Card.Header>
          <Card.Avatar>
            <Avatar.Root>
              <Avatar.Fallback>编</Avatar.Fallback>
            </Avatar.Root>
          </Card.Avatar>
          小编本编
        </Card.Header>
        <Card.Footer>
          <span>♡ 15028</span>
          <span>☐ 11</span>
        </Card.Footer>
      </Card.Body>
      <Card.Media>
        <div className="size-full bg-surface-raised" />
      </Card.Media>
    </Card.Root>
  ),
  decorators: [
    (Story) => (
      <div className="max-w-[900px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
