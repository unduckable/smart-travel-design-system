import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import { Avatar } from "./";

type Story = StoryObj<typeof Avatar>;
const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
};

export default meta;

const Wrapper = (Story) => (
  <div className="s-flex s-items-center s-gap-4">
    <Story />
  </div>
);

export const Default: Story = {};
export const Type: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4">
        <Avatar type="initial" />
        <Avatar type="image" image="https://bit.ly/dan-abramov" />
        <Avatar type="placeholder" />
      </div>
    );
  },
};

export const Size: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-flex-col s-gap-4">
        <div className="s-flex s-w-full s-gap-4">
          <Avatar type="initial" size="xs" />
          <Avatar type="image" image="https://bit.ly/dan-abramov" size="xs" />
          <Avatar type="placeholder" size="xs" />
        </div>
        <div className="s-flex s-w-full s-gap-4">
          <Avatar type="initial" size="sm" />
          <Avatar type="image" image="https://bit.ly/dan-abramov" size="sm" />
          <Avatar type="placeholder" size="sm" />
        </div>
        <div className="s-flex s-w-full s-gap-4">
          <Avatar type="initial" size="md" />
          <Avatar type="image" image="https://bit.ly/dan-abramov" size="md" />
          <Avatar type="placeholder" size="md" />
        </div>
        <div className="s-flex s-w-full s-gap-4">
          <Avatar type="initial" size="lg" />
          <Avatar type="image" image="https://bit.ly/dan-abramov" size="lg" />
          <Avatar type="placeholder" size="lg" />
        </div>
        <div className="s-flex s-w-full s-gap-4">
          <Avatar type="initial" size="xl" />
          <Avatar type="image" image="https://bit.ly/dan-abramov" size="xl" />
          <Avatar type="placeholder" size="xl" />
        </div>
        <div className="s-flex s-w-full s-gap-4">
          <Avatar type="initial" size="2xl" />
          <Avatar type="image" image="https://bit.ly/dan-abramov" size="2xl" />
          <Avatar type="placeholder" size="2xl" />
        </div>
      </div>
    );
  },
};

export const Status: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4">
        <Avatar type="initial" status />
        <Avatar type="image" status image="https://bit.ly/dan-abramov" />
        <Avatar type="placeholder" status />
      </div>
    );
  },
};

export const Notification: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4">
        <Avatar type="initial" notification />
        <Avatar type="image" notification image="https://bit.ly/dan-abramov" />
        <Avatar type="placeholder" notification />
      </div>
    );
  },
};
