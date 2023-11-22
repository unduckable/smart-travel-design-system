import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;
const Wrapper = (Story) => (
  <div className="s-flex s-gap-2">
    <Story />
  </div>
);
export const Default: Story = {};
export const States: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <>
        <Switch defaultSelected />
        <Switch defaultSelected={false} />
      </>
    );
  },
};

export const Disabled: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <>
        <Switch isDisabled isSelected />
        <Switch isDisabled isSelected={false} />
      </>
    );
  },
};
