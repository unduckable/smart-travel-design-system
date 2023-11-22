import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import { ButtonGroup } from "./";

type Story = StoryObj<typeof ButtonGroup>;
const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Button Group",
  component: ButtonGroup,
};

export default meta;

const Wrapper = (Story) => (
  <div className="s-flex s-items-center s-gap-4">
    <Story />
  </div>
);

export const Default: Story = {
  args: {
    size: "medium",
    buttonsProps: [{ children: "Days" }, { children: "Months" }, { children: "Years" }],
  },
};
export const Sizes: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <>
        <ButtonGroup
          size="medium"
          buttonsProps={[{ children: "Medium" }, { children: "Medium" }, { children: "Medium" }]}
        />
        <ButtonGroup
          size="small"
          buttonsProps={[{ children: "Small" }, { children: "Small" }, { children: "Small" }]}
        />
      </>
    );
  },
};
export const Disabled: Story = {
  render: () => (
    <ButtonGroup
      size="medium"
      buttonsProps={[{ children: "Medium" }, { children: "Medium" }, { children: "Medium" }]}
      isDisabled
    />
  ),
};
