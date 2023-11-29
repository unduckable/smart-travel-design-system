import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import Plus from "../../icons/Plus";
import { Button } from "../button";
import { Dropdown } from "./";

type Story = StoryObj<typeof Dropdown>;
const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;

const Wrapper = (Story) => (
  <div className="s-flex s-items-center s-gap-4">
    <Story />
  </div>
);

export const Default: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4">
        <Dropdown
          triggerElement={<Button>Dropdown Button</Button>}
          onAction={(v) => alert(v)}
          items={[
            { id: "1", content: "Dropdown Item 01" },
            { id: "2", content: "Dropdown Item 02" },
            { id: "3", content: "Dropdown Item 03" },
            { id: "4", content: "Dropdown Item 04" },
            { id: "5", content: "Dropdown Item 05" },
            { id: "6", content: "Dropdown Item 06" },
          ]}
        />
      </div>
    );
  },
};
