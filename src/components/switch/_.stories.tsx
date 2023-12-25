import Information from "@/src/icons/Information";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";
import { Icon } from "../icon";
import { Tooltip } from "../tooltip";

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
      <div className="s-flex s-flex-col s-gap-4">
        <div>
          <Switch defaultSelected /> Default selected
        </div>
        <div>
          <Switch defaultSelected={false} /> Default unselected
        </div>
      </div>
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

export const WithLabel: Story = {
  render: () => {
    return (
      <>
        <div className="s-flex s-items-start">
          <Switch defaultSelected className="s-mt-1" />
          <div>
            <label className="s-ml-2 s-flex s-items-center s-gap-1 s-text-sm">
              <span className="s-text-gray-900 dark:s-text-white-900">Label</span>
              <span className="s-text-red-500">*</span>
              <Tooltip content="This is a required switch input">
                <Icon source={Information} className="s-text-gray-200 dark:s-text-white-300" />
              </Tooltip>
            </label>
            <p className="s-mt-1 s-text-sm s-text-gray-500">Helper text</p>
          </div>
        </div>

        <div className="s-mt-4 s-flex s-items-start">
          <Switch defaultSelected className="s-mt-1" />
          <div>
            <label className="s-ml-2 s-flex s-items-center s-gap-1 s-text-sm">
              <span className="s-text-gray-900 dark:s-text-white-900">Label</span>
              <span className="s-text-gray-500 dark:s-text-white-500">(optional)</span>
              <Tooltip content="This is an optional switch input">
                <Icon source={Information} className="s-text-gray-200 dark:s-text-white-300" />
              </Tooltip>
            </label>
            <p className="s-mt-1 s-text-sm s-text-gray-500">Helper text</p>
          </div>
        </div>
      </>
    );
  },
};

export const Group: Story = {
  render() {
    const options = ["Option 1", "Option 2", "Option 3"];
    return (
      <>
        <p className="s-flex s-gap-1 dark:s-text-white-900">
          <span className="s-font-medium">Label</span>
          <span className="s-text-red-500"> *</span>
          <Tooltip content="This is a switch group">
            <Icon source={Information} className="s-text-gray-200 dark:s-text-white-300" />
          </Tooltip>
        </p>
        <div className="s-mt-2 s-flex s-flex-col s-gap-2">
          {options.map((item) => (
            <div>
              <Switch className="s-mr-2" /> <span className="s-font-normal dark:s-text-white-800">{item} </span>
            </div>
          ))}
        </div>
      </>
    );
  },
};
