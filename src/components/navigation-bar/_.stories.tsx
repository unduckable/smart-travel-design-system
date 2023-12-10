import Home from "@/src/icons/Home";
import Search from "@/src/icons/Search";
import Settings from "@/src/icons/Settings";
import Sticker from "@/src/icons/Sticker";
import User from "@/src/icons/User";
import Video from "@/src/icons/Video";

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { NavigationBar } from ".";

const meta: Meta<typeof NavigationBar> = {
  title: "Components/Navigation Bar",
  component: NavigationBar,
};

export default meta;

type Story = StoryObj<typeof NavigationBar>;
export const Default: Story = {
  args: {
    className: "s-w-96",
    items: [
      { icon: Home, label: "Home", id: "home" },
      { icon: Settings, label: "Settings", id: "settings" },
      { icon: User, label: "User", id: "user" },
    ],
  },
};

export const Example: Story = {
  render() {
    const [activeItem, setActiveItem] = React.useState("home");

    return (
      <NavigationBar
        className="s-w-96"
        activeItem={activeItem}
        items={[
          { icon: Search, label: "Khám phá", id: "search" },
          { icon: Sticker, label: "Khoảnh khắc", id: "sticker" },
          { icon: Home, label: "Trang chủ", id: "home" },
          { icon: Video, label: "Video", id: "video" },
          { icon: User, label: "Cá nhân", id: "user" },
        ]}
        onChange={(id) => setActiveItem(id)}
      />
    );
  },
};
