import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import Minus from "../../icons/Minus";
import Plus from "../../icons/Plus";
import { Icon } from "./";

type Story = StoryObj<typeof Icon>;
const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
};

export default meta;

const Wrapper = (Story) => (
  <div className="s-flex s-items-center s-gap-4">
    <Story />
  </div>
);

export const Default: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4">
        <Icon source={Plus} />
      </div>
    );
  },
};

export const Size: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4">
        <Icon source={Plus} size="xs" />
        <Icon source={Plus} size="sm" />
        <Icon source={Plus} size="md" />
        <Icon source={Plus} size="lg" />
        <Icon source={Plus} size="xl" />
        <Icon source={Plus} size="2xl" />
      </div>
    );
  },
};
