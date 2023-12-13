import Badge from "@/src/icons/Badge";
import Bank from "@/src/icons/Bank";
import Trash from "@/src/icons/Trash";
import type { Meta, StoryObj } from "@storybook/react";
import { SimpleCard } from ".";

const meta: Meta<typeof SimpleCard> = {
  title: "Components/Card/SimpleCard",
  component: SimpleCard,
};

export default meta;

type Story = StoryObj<typeof SimpleCard>;
export const Default: Story = {
  args: {
    icon: Badge,
    title: "Label",
    description: "Supporting text",
    button: "Button",
  },
};

export const Horizontal: Story = {
  args: {
    type: "horizontal",
    icon: Badge,
    title: "Label",
    description: "Supporting text",
    button: "Button",
  },
};

export const Vertical: Story = {
  args: {
    type: "vertical",
    icon: Badge,
    title: "Label",
    description: "Supporting text",
    button: "Button",
  },
};

export const Icon: Story = {
  args: {
    icon: Bank,
    title: "Bank icon",
    description: "Card with bank icon",
    type: "vertical",
    button: "Button",
  },
};
