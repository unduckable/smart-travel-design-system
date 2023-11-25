import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from ".";
import { Button } from "../button";
import { TextArea } from "../textarea";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;
export const Default: Story = {
  args: {
    content: "This is a tooltip",
    children: <Button className="s-ml-[100px]">Hover me</Button>,
  },
};
export const Positions: Story = {
  render: () => (
    <div className="s-flex s-flex-col s-gap-4">
      <div className="s-flex s-gap-4 s-justify-center">
        <Tooltip content="This is top left" placement="top left">
          <Button>Top Left</Button>
        </Tooltip>
        <Tooltip content="This is top" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip content="This is top right" placement="top right">
          <Button>Top Right</Button>
        </Tooltip>
      </div>
      <div className="s-flex s-gap-4 s-justify-center">
        <Tooltip content="This is bottom left" placement="bottom left">
          <Button>Bottom Left</Button>
        </Tooltip>
        <Tooltip content="This is bottom" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip content="This is bottom right" placement="bottom right">
          <Button>Bottom Right</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const Delay: Story = {
  render: () => (
    <div className="s-flex s-gap-4">
      <Tooltip content="This is a tooltip" delay={3000}>
        <Button>Open delay: 3s</Button>
      </Tooltip>
      <Tooltip content="This is a tooltip" closeDelay={3000}>
        <Button>Close delay: 3s</Button>
      </Tooltip>
      <Tooltip content="This is a tooltip" delay={0} closeDelay={0}>
        <Button>Open & close delay: 0s</Button>
      </Tooltip>
    </div>
  ),
};
