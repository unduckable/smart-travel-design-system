import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
};

export default meta;

interface Props {
  children: React.ReactNode;
}
const Wrapper: React.FC<Props> = ({ children }) => <div className="s-flex s-items-center s-gap-4">{children}</div>;

type Story = StoryObj<typeof Checkbox>;
export const Default: Story = {};
export const Variants: Story = {
  render: () => {
    return (
      <Wrapper>
        <Checkbox>Regular</Checkbox>
        <Checkbox isSelected>Selected</Checkbox>
        <Checkbox isIndeterminate>Indeterminate</Checkbox>
        <Checkbox isDisabled>Disabled</Checkbox>
        <Checkbox isSelected isDisabled>
          Disabled checked
        </Checkbox>
        <Checkbox isIndeterminate isDisabled>
          Disabled indeterminate
        </Checkbox>
      </Wrapper>
    );
  },
};
