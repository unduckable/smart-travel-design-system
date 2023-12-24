import logo from "@/src/assets/logo.svg";
import type { Meta, StoryObj } from "@storybook/react";
import { Voucher } from ".";

const meta: Meta<typeof Voucher> = {
  title: "Components/Voucher",
  component: Voucher,
};

export default meta;

type Story = StoryObj<typeof Voucher>;
export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    image: logo,
  },
};

export const NoImage: Story = {
  args: {},
};
