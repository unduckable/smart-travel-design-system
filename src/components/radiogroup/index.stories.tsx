import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from ".";
import { Radio } from "../radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;
export const Default: Story = {
  render: () => (
    <RadioGroup label="Label">
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
      <Radio value="4">Option 4</Radio>
    </RadioGroup>
  ),
};
export const Variants: Story = {
  render: () => (
    <>
      <RadioGroup label="Radio group" isReadOnly defaultValue="2">
        <Radio value="1">Regular</Radio>
        <Radio value="2">Selected</Radio>
        <Radio value="3" isDisabled>
          Disabled
        </Radio>
        <Radio value="2" isDisabled>
          Disabled selected
        </Radio>
      </RadioGroup>
    </>
  ),
};
export const Icescream: Story = {
  render: () => (
    <RadioGroup label="Ice cream flavor">
      <Radio value="chocolate">Chocolate</Radio>
      <Radio value="mint">Mint</Radio>
      <Radio value="strawberry">Strawberry</Radio>
      <Radio value="vanilla" isDisabled>
        Vanilla (Out of stock)
      </Radio>
    </RadioGroup>
  ),
};
