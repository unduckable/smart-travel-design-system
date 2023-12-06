import Check from "@/src/icons/Check";
import Close from "@/src/icons/Close";
import Flag from "@/src/icons/Flag";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import { Icon } from "../icon";
import { Button } from "./";

type Story = StoryObj<typeof Button>;
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

const Wrapper = (Story) => (
  <div className="s-flex s-items-center s-gap-4">
    <Story />
  </div>
);

export const Default: Story = { args: { children: "Button" } };
export const Shapes: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <>
        <Button intent="primary" shape="pill">
          Pill
        </Button>
        <Button intent="primary" shape="round">
          Round
        </Button>
      </>
    );
  },
};
export const Intents: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <>
        <Button intent="primary">Primary</Button>
        <Button intent="secondary-outline">Secondary Outline</Button>
        <Button intent="secondary">Secondary</Button>
        <Button intent="tertiary">Tertiary</Button>
      </>
    );
  },
};
export const IntentsSmall: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <>
        <Button size="small" intent="primary">
          Primary
        </Button>
        <Button size="small" intent="secondary-outline">
          Secondary Outline
        </Button>
        <Button size="small" intent="secondary">
          Secondary
        </Button>
        <Button size="small" intent="tertiary">
          Tertiary
        </Button>
      </>
    );
  },
};
export const DestructiveIntents: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <>
        <Button intent="primary" isDestructive>
          Primary
        </Button>
        <Button intent="secondary-outline" isDestructive>
          Secondary Outline
        </Button>
        <Button intent="secondary" isDestructive>
          Secondary
        </Button>
        <Button intent="tertiary" isDestructive>
          Tertiary
        </Button>
      </>
    );
  },
};
export const DestructiveIntentsSmall: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <>
        <Button size="small" intent="primary" isDestructive>
          Primary
        </Button>
        <Button size="small" intent="secondary-outline" isDestructive>
          Secondary Outline
        </Button>
        <Button size="small" intent="secondary" isDestructive>
          Secondary
        </Button>
        <Button size="small" intent="tertiary" isDestructive>
          Tertiary
        </Button>
      </>
    );
  },
};
export const Icons: Story = {
  decorators: [Wrapper],
  render: () => (
    <>
      <Button size="medium" prefixIcon={Check} intent="primary">
        Left icon
      </Button>
      <Button size="medium" suffixIcon={Close} intent="primary">
        Right icon
      </Button>
      <Button size="medium" suffixIcon={Close} intent="primary" isSquare />
    </>
  ),
};
export const Sizes: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <>
        <Button size="medium">Medium</Button>
        <Button size="small">Small</Button>
      </>
    );
  },
};
export const Disabled: Story = {
  decorators: [Wrapper],
  render: () => (
    <>
      <Button isDisabled intent="primary">
        Primary
      </Button>
      <Button isDisabled intent="secondary-outline">
        Secondary Outline
      </Button>
      <Button isDisabled intent="secondary">
        Secondary
      </Button>
      <Button isDisabled intent="tertiary">
        Tertiary
      </Button>
    </>
  ),
};
export const CTA: Story = {
  decorators: [Wrapper],
  render: () => {
    const onPress = useCallback(() => {
      alert("Made a reservation!");
    }, []);
    return (
      <Button intent="primary" onPress={onPress}>
        Book Now
      </Button>
    );
  },
};
