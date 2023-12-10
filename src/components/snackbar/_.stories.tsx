import Trash from "@/src/icons/Trash";
import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar } from ".";
import { Icon } from "../icon";

const meta: Meta<typeof Snackbar> = {
  title: "Components/Snackbar",
  component: Snackbar,
};

export default meta;

type Story = StoryObj<typeof Snackbar>;
export const Default: Story = {
  args: {
    className: "s-w-72",
  },
};

export const Actions: Story = {
  args: {
    children: "Snackbar with actions",
    action: "Click me!",
    className: "s-w-72",
    onClose: () => alert("Close"),
    onAction: () => alert("Action"),
  },
};

export const Destructive: Story = {
  args: {
    children: (
      <span className="s-flex s-items-center s-gap-2">
        <Icon source={Trash} />
        Element deleted!
      </span>
    ),
    className: "s-w-80 s-bg-red-600",
    onClose: () => alert("Close"),
    onAction: () => alert("Action"),
  },
};
