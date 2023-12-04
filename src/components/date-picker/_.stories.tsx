import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { DatePicker } from ".";
import { Button } from "../button";
import { Checkbox } from "../checkbox";

const meta: Meta<typeof DatePicker> = {
  title: "Components/Date Picker",
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;
export const Default: Story = {};

export const Single: Story = {
  args: {
    isRange: false,
  },
};

export const Ranged: Story = {
  args: {
    isRange: true,
  },
};

export const Highlighted: Story = {
  args: {
    children: (
      <div className="s-mt-4">
        <Checkbox defaultSelected>Hiển thị giá ước tính thấp nhất</Checkbox>
      </div>
    ),
    isDateHighlighted: (date) => {
      return [4, 6, 19, 30].includes(date.day);
    },
    isDateUnavailable: (date) => {
      return [25, 26, 27].includes(date.day);
    },
  },
};

export const Footer: Story = {
  args: {
    children: (
      <div className="s-pt-2 s-px-4 s-pb-6 s-flex s-gap-4 s-flex-col lg:s-flex-row lg:s-pt-4">
        <Checkbox defaultSelected>Hiển thị giá ước tính thấp nhất</Checkbox>
        <Button className="s-w-full s-justify-center s-flex lg:s-hidden">Đồng ý</Button>
      </div>
    ),
  },
};
