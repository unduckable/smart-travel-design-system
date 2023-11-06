import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from ".";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;
export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};
export const Variants: Story = {
  render: () => {
    return (
      <div>
        <TextField label="Regular" className="s-mr-4" />
        <TextField label="Disabled" isDisabled />
      </div>
    );
  },
};
