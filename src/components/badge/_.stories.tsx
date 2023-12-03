import Check from "@/src/icons/Check";
import Close from "@/src/icons/Close";
import Plus from "@/src/icons/Plus";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;
export const Default: Story = {
  args: {
    children: "This is a Badge",
    suffixIcon: Check,
    isOutlined: true,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="s-flex s-gap-4">
      <Badge color="green">Green</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="gray">Gray</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="pink">Pink</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="purple">Purple</Badge>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="s-flex s-gap-4">
      <Badge shape="rounded" isOutlined>
        Rounded
      </Badge>
      <Badge shape="pill" isOutlined>
        Pill
      </Badge>
    </div>
  ),
};

export const Outlines: Story = {
  render: () => (
    <div className="s-flex s-gap-4">
      <Badge color="blue" isOutlined>
        Outlines: On
      </Badge>
      <Badge color="blue" isOutlined={false}>
        Outlines: Off
      </Badge>
    </div>
  ),
};

export const Icons: Story = {
  render: () => (
    <div className="s-flex s-gap-4">
      <Badge color="blue" prefixIcon={Check}>
        Prefix Icon
      </Badge>
      <Badge color="red" suffixIcon={Close}>
        Suffix Icon
      </Badge>
      <Badge color="green" prefixIcon={Plus} />
    </div>
  ),
};
