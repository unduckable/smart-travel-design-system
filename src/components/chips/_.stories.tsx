import ChevronDown from "@/src/icons/ChevronDown";
import ChevronLeft from "@/src/icons/ChevronLeft";
import ChevronRight from "@/src/icons/ChevronRight";
import Download from "@/src/icons/Download";
import Share from "@/src/icons/Share";
import ZoomIn from "@/src/icons/ZoomIn";
import ZoomOut from "@/src/icons/ZoomOut";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import { Chips } from "./";

type Story = StoryObj<typeof Chips>;
const meta: Meta<typeof Chips> = {
  title: "Components/Chips Selection",
  component: Chips,
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
        <Chips size="medium" buttonsProps={[{ children: "Medium" }, { children: "Medium" }, { children: "Medium" }]} />
        <Chips size="small" buttonsProps={[{ children: "Small" }, { children: "Small" }, { children: "Small" }]} />
      </>
    );
  },
};
export const Disabled: Story = {
  render: () => (
    <Chips
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
        <Chips
          size="medium"
          buttonsProps={[{ children: "Download for free", prefixIcon: Download }, { children: "31k" }]}
        />
        <Chips size="medium" buttonsProps={[{ prefixIcon: ChevronLeft }, { prefixIcon: ChevronRight }]} />
        <Chips size="medium" buttonsProps={[{ children: "Save and exit" }, { prefixIcon: ChevronDown }]} />
        <Chips size="medium" buttonsProps={[{ children: "Live preview" }, { prefixIcon: Share }]} />
        <Chips size="medium" buttonsProps={[{ prefixIcon: ZoomIn }, { prefixIcon: ZoomOut }]} />
      </div>
    );
  },
};
