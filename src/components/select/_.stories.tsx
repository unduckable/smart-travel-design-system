import Search from "@/src/icons/Search";
import User from "@/src/icons/User";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;
const Wrapper = (Story) => (
  <div className="s-flex s-gap-2">
    <Story />
  </div>
);
export const Default: Story = {
  args: {
    className: "s-w-64",
    label: "Select Preferences",
    selectionMode: "single",
    tooltip: "Select one or more preferences from the list",
    placeholder: "Select your preferences",
    prefixIcon: Search,
    helperText: "Choose your preferences by clicking on the items below",
    items: [
      { id: "1", content: "Option 1", helperText: "This is option 1", icon: User },
      { id: "2", content: "Option 2", helperText: "This is option 2" },
      { id: "3", content: "Option 3", helperText: "This is option 3" },
    ],
    isOpen: false,
    isDisabled: false,
    defaultSelectedKeys: ["1"],
    onSelectionChange: (selectedKeys) => console.log("Selected Keys:", selectedKeys),
  },
};
