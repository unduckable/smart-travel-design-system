import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from ".";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;
export const Default: Story = {
  args: {
    className: "s-w-96",
    label: "Slider",
  },
};
export const Variants: Story = {
  render: () => {
    return (
      <>
        <Slider label="Regular" className="s-w-96" />
        <Slider label="Disabled" className="s-w-96" isDisabled />
      </>
    );
  },
};
export const Ranged: Story = {
  render: () => (
    <>
      <Slider label="Ranged" className="s-w-96" defaultValue={[30, 60]} />
      <Slider label="Ranged Disabled" className="s-w-96" defaultValue={[30, 60]} isDisabled />
    </>
  ),
};
export const LimitStep: Story = {
  render: () => (
    <>
      <Slider label="Step 10" className="s-w-96" step={10} />
      <Slider label="Limit to 50-60" className="s-w-96" minValue={50} maxValue={60} />
    </>
  ),
};
