import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from ".";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;
export const Default: Story = {
  args: {
    label: "Comment",
    placeholder: "Type in here...",
  },
};
export const Variants: Story = {
  render: () => {
    return (
      <div>
        <TextArea label="Regular" className="s-mr-4" />
        <TextArea label="Disabled" isDisabled />
      </div>
    );
  },
};
