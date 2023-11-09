import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;
export const Default: Story = {};
export const States: Story = {
  render: () => {
    return (
      <>
        <div>
          Default On <Switch defaultSelected />
        </div>
        <div>
          Default Off <Switch defaultSelected={false} />
        </div>
      </>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <>
        <div>
          On <Switch isDisabled isSelected />
        </div>
        <div>
          Off <Switch isDisabled isSelected={false} />
        </div>
      </>
    );
  },
};
