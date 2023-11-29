import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import Minus from "../../icons/Minus";
import Plus from "../../icons/Plus";
import { Icon } from "../icon";
import { Link } from "./";

type Story = StoryObj<typeof Link>;
const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
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
        <Link href="https://google.com">This is a link</Link>
      </div>
    );
  },
};

export const Color: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-flex-col s-w-full s-gap-4">
        <Link href="https://google.com">This is a link</Link>
        <Link href="https://google.com" color="gray">
          This is a link
        </Link>
        <Link href="https://google.com" color="pink">
          This is a link
        </Link>
        <Link href="https://google.com" color="red">
          This is a link
        </Link>
        <Link href="https://google.com" color="yellow">
          This is a link
        </Link>
        <Link href="https://google.com" color="orange">
          This is a link
        </Link>
        <Link href="https://google.com" color="white">
          This is a link
        </Link>
      </div>
    );
  },
};

export const WithIcon: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-w-full s-gap-4">
        <Link href="https://google.com" prefix={<Icon source={Minus} />} suffix={<Icon source={Plus} />}>
          This is a link
        </Link>
      </div>
    );
  },
};

export const Size: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-flex-col s-w-full s-gap-4">
        <Link href="https://google.com">This is a link</Link>
        <Link href="https://google.com" size="sm">
          This is a small link
        </Link>
      </div>
    );
  },
};

export const Disabled: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-flex-col s-w-full s-gap-4">
        <Link href="https://google.com" isDisabled>
          This is a link
        </Link>
      </div>
    );
  },
};
