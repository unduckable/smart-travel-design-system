import Trash from "@/src/icons/Trash";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from ".";
import { Icon } from "../icon";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;
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
    className: "s-w-80 s-bg-red-600 dark:s-bg-red-500 dark:[&_svg]:s-text-gray-900",
    onClose: () => alert("Close"),
    onAction: () => alert("Action"),
  },
};
