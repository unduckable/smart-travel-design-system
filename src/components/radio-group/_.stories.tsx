import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from ".";
import { Radio } from "../radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio Group",
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
      <RadioGroup label="Radio group" isReadOnly defaultValue="2" tooltip="This is a radio group">
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
export const Room: Story = {
  render: () => (
    <RadioGroup label="Room type" defaultValue="single" isRequired>
      <Radio value="single">
        <div>
          Single <br />
          <p className="s-text-gray-500">Helper text</p>
        </div>
      </Radio>
      <Radio value="double-window">
        <div>
          Double with window <br />
          <p className="s-text-gray-500">Helper text</p>
        </div>
      </Radio>
      <Radio value="double-twin">
        <div>
          Double twin <br />
          <p className="s-text-gray-500">Helper text</p>
        </div>
      </Radio>
      <Radio value="penthouse" isDisabled>
        <div>
          Penthouse <br />
          <p className="s-text-gray-500">Helper text</p>
        </div>
      </Radio>
    </RadioGroup>
  ),
};

export const Icescream: Story = {
  render: () => (
    <RadioGroup label="Ice cream flavor" defaultValue="vanilla">
      <Radio value="chocolate">
        <div>
          Chocolate <br />
          <p className="s-text-gray-500">Helper text</p>
        </div>
      </Radio>
      <Radio value="mint">
        <div>
          Mint <br />
          <p className="s-text-gray-500">Helper text</p>
        </div>
      </Radio>
      <Radio value="strawberry">
        <div>
          Strawberry <br />
          <p className="s-text-gray-500">Helper text</p>
        </div>
      </Radio>
      <Radio value="vanilla" isDisabled>
        <div>
          Vanilla (Out of stock) <br />
          <p className="s-text-gray-500">Helper text</p>
        </div>
      </Radio>
    </RadioGroup>
  ),
};
