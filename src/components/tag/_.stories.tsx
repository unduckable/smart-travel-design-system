import Close from "@/src/icons/Close";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tag } from ".";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;
export const Default: Story = {
  args: {
    children: "This is a Tag",
    suffixIcon: Close,
    isOutlined: true,
  },
};

export const Colors: Story = {
  render: () => (
    <div className="s-flex s-gap-4">
      <Tag color="green" suffixIcon={Close}>
        Green
      </Tag>
      <Tag color="red" suffixIcon={Close}>
        Red
      </Tag>
      <Tag color="gray" suffixIcon={Close}>
        Gray
      </Tag>
      <Tag color="blue" suffixIcon={Close}>
        Blue
      </Tag>
      <Tag color="pink" suffixIcon={Close}>
        Pink
      </Tag>
      <Tag color="yellow" suffixIcon={Close}>
        Yellow
      </Tag>
      <Tag color="orange" suffixIcon={Close}>
        Orange
      </Tag>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="s-flex s-gap-4">
      <Tag shape="rounded" isOutlined suffixIcon={Close}>
        Rounded
      </Tag>
      <Tag shape="pill" isOutlined suffixIcon={Close}>
        Pill
      </Tag>
    </div>
  ),
};

export const Outlines: Story = {
  render: () => (
    <div className="s-flex s-gap-4">
      <Tag color="blue" isOutlined suffixIcon={Close}>
        Outlines: On
      </Tag>
      <Tag color="blue" isOutlined={false} suffixIcon={Close}>
        Outlines: Off
      </Tag>
    </div>
  ),
};

export const Icons: Story = {
  parameters: {
    docs: { source: { type: "code" } },
  },
  render: () => (
    <div className="s-flex s-gap-4">
      <Tag color="blue" suffixIcon={Close}>
        Prefix Icon
      </Tag>
      <Tag color="red" suffixIcon={Close}>
        Suffix Icon
      </Tag>
      <Tag color="green" suffixIcon={Close} />
    </div>
  ),
};
