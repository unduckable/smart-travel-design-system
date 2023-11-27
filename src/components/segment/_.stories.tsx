import type { Meta, StoryObj } from "@storybook/react";
import { Segment } from ".";

const meta: Meta<typeof Segment> = {
  title: "Components/Segment",
  component: Segment,
};

export default meta;

type Story = StoryObj<typeof Segment>;
const Wrapper = (Story) => (
  <div className="s-flex s-gap-2">
    <Story />
  </div>
);
export const Default: Story = {
  args: {
    options: [{ label: "Option 1" }, { label: "Option 2" }, { label: "Option 3" }],
  },
};
export const Sizes: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <>
        <Segment options={[{ label: "Option 1" }, { label: "Option 2" }, { label: "Option 3" }]} size="medium" />
        <Segment options={[{ label: "Option 1" }, { label: "Option 2" }, { label: "Option 3" }]} size="small" />
      </>
    );
  },
};

export const Disabled: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <Segment
        options={[{ label: "Option 1" }, { label: "Disabled", isDisabled: true }, { label: "Option 3" }]}
        size="medium"
      />
    );
  },
};
