import Trash from "@/src/icons/Trash";
import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;
export const Default: Story = {
  args: {
    className: "s-max-w-[288px]",
  },
};

export const Shapes: Story = {
  render() {
    return (
      <div className="s-flex s-flex-col s-gap-2 s-w-72">
        Rectangle
        <Skeleton type="rectangle" />
        Text
        <Skeleton type="text" />
      </div>
    );
  },
};

export const Sizes: Story = {
  render() {
    return (
      <div className="s-flex s-flex-col s-gap-2 s-w-72">
        Medium
        <Skeleton type="text" size="medium" />
        Small
        <Skeleton type="text" size="small" />
      </div>
    );
  },
};
