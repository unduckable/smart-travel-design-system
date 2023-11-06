import type { Meta, StoryObj } from "@storybook/react";
import { NumberField } from ".";

const meta: Meta<typeof NumberField> = {
  title: "Components/NumberField",
  component: NumberField,
};

export default meta;

type Story = StoryObj<typeof NumberField>;
export const Default: Story = {};
export const Variants: Story = {
  render: () => {
    return (
      <>
        <NumberField label="Regular" />
        <NumberField label="Disabled" isDisabled />
        <NumberField label="Min = 0" minValue={0} />
        <NumberField label="Min = 0  Max = 100" minValue={0} maxValue={100} />
      </>
    );
  },
};
