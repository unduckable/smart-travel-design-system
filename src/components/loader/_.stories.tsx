import Trash from "@/src/icons/Trash";
import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from ".";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;
export const Default: Story = {};

export const Spinning: Story = {
  args: {
    type: "spinner",
  },
};

export const Linear: Story = {
  args: {
    type: "linear",
    value: 0.5,
    className: "s-w-96",
  },
};
