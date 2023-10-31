import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import { Button } from "./";

type Story = StoryObj<typeof Button>;
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

interface Props {
  children: React.ReactNode;
}
const Wrapper: React.FC<Props> = ({ children }) => <div className="s-flex s-items-center s-gap-4">{children}</div>;

export const Default: Story = {};
export const Intents: Story = {
  render: () => {
    return (
      <Wrapper>
        <Button intent="primary">Primary</Button>
        <Button intent="secondary">Secondary</Button>
      </Wrapper>
    );
  },
};
export const Sizes: Story = {
  render: () => {
    return (
      <Wrapper>
        <Button size="medium">Medium</Button>
        <Button size="small">Small</Button>
      </Wrapper>
    );
  },
};
export const Disabled: Story = {
  render: () => (
    <Wrapper>
      <Button intent="primary" disabled>
        Primary
      </Button>
      <Button intent="secondary" disabled>
        Secondary
      </Button>
    </Wrapper>
  ),
};
export const Active: Story = {
  render: () => (
    <Wrapper>
      <Button intent="primary" active>
        Primary
      </Button>
      <Button intent="secondary" active>
        Secondary
      </Button>
    </Wrapper>
  ),
};
export const CTA: Story = {
  render: () => {
    const onClick = useCallback(() => {
      alert("Made a reserveration!");
    }, []);
    return (
      <Button intent="primary" onClick={onClick}>
        Book Now
      </Button>
    );
  },
};
