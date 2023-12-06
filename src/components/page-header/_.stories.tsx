import Bell from "@/src/icons/Bell";
import Home from "@/src/icons/Home";
import SearchIcon from "@/src/icons/Search";
import Sticker from "@/src/icons/Sticker";
import User from "@/src/icons/User";
import Video from "@/src/icons/Video";

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PageHeader } from ".";

const meta: Meta<typeof PageHeader> = {
  title: "Components/Page Header",
  component: PageHeader,
};

export default meta;

type Story = StoryObj<typeof PageHeader>;
export const Default: Story = {
  args: {
    actions: [{ id: "search", icon: Bell }],
  },
};

export const Compact: Story = {
  args: {
    type: "compact",
    actions: [
      { id: "search", icon: Bell },
      { id: "search", icon: User },
    ],
  },
};

export const Comfort: Story = {
  args: {
    type: "comfort",
    actions: [
      { id: "search", icon: Bell },
      { id: "search", icon: User },
    ],
  },
};

export const Search: Story = {
  args: {
    type: "search",
    actions: [
      { id: "search", icon: Bell },
      { id: "search", icon: User },
    ],
  },
};
