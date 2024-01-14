import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Media } from ".";

const meta: Meta<typeof Media> = {
  title: "Components/Media",
  component: Media,
};

export default meta;

type Story = StoryObj<typeof Media>;
export const Default: Story = {
  args: {
    src: "https://bit.ly/dan-abramov",
  },
};
