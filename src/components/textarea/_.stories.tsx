import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from ".";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;
export const Default: Story = {
  args: {},
};
export const Variants: Story = {
  render: () => {
    return (
      <>
        <TextArea label="Regular" className="s-mr-4" helperText="Helper text" />
        <TextArea label="Disabled" isDisabled helperText="Helper text" />
      </>
    );
  },
};

export const Resize: Story = {
  render: () => {
    return (
      <>
        <TextArea label="None" resize="none" className="s-mr-4" isRequired />
        <TextArea label="Vertical" resize="vertical" className="s-mr-4" isRequired />
        <TextArea label="Horizontal" resize="horizontal" className="s-mr-4" isRequired />
        <TextArea label="Both" resize="both" isRequired />
      </>
    );
  },
};

export const Validation: Story = {
  render: () => {
    return (
      <>
        <TextArea label="Valid" isRequired className="s-mr-4" />
        <TextArea label="Invalid" isRequired isInvalid />
      </>
    );
  },
};
