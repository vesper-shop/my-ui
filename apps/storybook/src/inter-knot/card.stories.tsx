import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Card } from "@my-ui/inter-knot";

const meta = {
  title: "inter-knot/Card",
  component: Card.Root,
  render: (args) => (
    <Card.Root {...args}>
      <Card.Media>
        <div className="aspect-[4/3] w-full bg-surface-raised" />
      </Card.Media>
      <Card.Body>
        <Card.Header>
          <Card.Avatar>
            <Avatar.Root>
              <Avatar.Fallback>绳</Avatar.Fallback>
            </Avatar.Root>
          </Card.Avatar>
          <span className="truncate">绳匠</span>
        </Card.Header>
        <Card.Title>[绳网]使用说明</Card.Title>
        <Card.Description>其实没啥好介绍的，总之这是内容，可以修改</Card.Description>
        <Card.Footer>
          <span>♥ 9,999</span>
          <span>2 条评论</span>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  ),
  decorators: [
    (Story) => (
      <div className="w-[210px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
