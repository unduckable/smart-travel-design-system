import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import { Avatar } from "../avatar";
import { AvatarGroup } from "./";

type Story = StoryObj<typeof AvatarGroup>;
const meta: Meta<typeof AvatarGroup> = {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
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
        <AvatarGroup>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
      </div>
    );
  },
};

export const Max: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4">
        <AvatarGroup max={3}>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
      </div>
    );
  },
};

export const Size: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4">
        <AvatarGroup size="lg">
          <Avatar type="placeholder" />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
      </div>
    );
  },
};
