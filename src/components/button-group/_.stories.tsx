import ChevronDown from "@/src/icons/ChevronDown";
import ChevronLeft from "@/src/icons/ChevronLeft";
import ChevronRight from "@/src/icons/ChevronRight";
import Download from "@/src/icons/Download";
import Share from "@/src/icons/Share";
import ZoomIn from "@/src/icons/ZoomIn";
import ZoomOut from "@/src/icons/ZoomOut";
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

export const Examples: Story = {
  render() {
    return (
      <div className="s-flex s-flex-col s-items-start s-gap-4">
        <ButtonGroup
          size="medium"
          buttonsProps={[{ children: "Download for free", prefixIcon: Download }, { children: "31k" }]}
        />
        <ButtonGroup size="medium" buttonsProps={[{ prefixIcon: ChevronLeft }, { prefixIcon: ChevronRight }]} />
        <ButtonGroup size="medium" buttonsProps={[{ children: "Save and exit" }, { prefixIcon: ChevronDown }]} />
        <ButtonGroup size="medium" buttonsProps={[{ children: "Live preview" }, { prefixIcon: Share }]} />
        <ButtonGroup size="medium" buttonsProps={[{ prefixIcon: ZoomIn }, { prefixIcon: ZoomOut }]} />
      </div>
    );
  },
};
