import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import Plus from "../../icons/Plus";
import { FloatingButton, FloatingButtonGroup } from "./";

type Story = StoryObj<typeof FloatingButton>;
const meta: Meta<typeof FloatingButton> = {
  title: "Components/FloatingButton",
  component: FloatingButton,
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
      <div className="s-flex s-w-full s-gap-4 s-min-h-[100px]">
        <FloatingButtonGroup>
          <FloatingButton />
        </FloatingButtonGroup>
      </div>
    );
  },
};

export const Icon: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4 s-min-h-[200px]">
        <FloatingButtonGroup>
          <FloatingButton icon={Plus} />
        </FloatingButtonGroup>
      </div>
    );
  },
};

export const Group: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4 s-min-h-[200px]">
        <FloatingButtonGroup>
          <FloatingButton />
          <FloatingButton />
          <FloatingButton />
        </FloatingButtonGroup>
      </div>
    );
  },
};
