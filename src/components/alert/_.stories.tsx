import type { Meta, StoryObj } from "@storybook/react";
import React, { useCallback } from "react";
import { Alert } from "./";

type Story = StoryObj<typeof Alert>;
const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;

const Wrapper = (Story) => (
  <div className="s-flex s-items-center s-gap-4">
    <Story />
  </div>
);

export const Default: Story = {};
export const Type: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-flex-col s-w-full s-gap-4">
        <Alert title="Alert title" content="Alert content" type="expanded" />
        <Alert title="Alert title" content="Alert content" type="inline" />
      </div>
    );
  },
};

export const Color: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-flex-col s-w-full s-gap-4">
        <Alert title="Alert title" content="Alert content" type="expanded" />
        <Alert title="Alert title" content="Alert content" type="inline" />

        <Alert title="Alert title" content="Alert content" type="expanded" color="red" />
        <Alert title="Alert title" content="Alert content" type="inline" color="red" />

        <Alert title="Alert title" content="Alert content" type="expanded" color="green" />
        <Alert title="Alert title" content="Alert content" type="inline" color="green" />

        <Alert title="Alert title" content="Alert content" type="expanded" color="yellow" />
        <Alert title="Alert title" content="Alert content" type="inline" color="yellow" />

        <Alert title="Alert title" content="Alert content" type="expanded" color="gray" />
        <Alert title="Alert title" content="Alert content" type="inline" color="gray" />
      </div>
    );
  },
};

export const Actions: Story = {
  decorators: [Wrapper],
  render: () => {
    return (
      <div className="s-flex s-flex-col s-w-full s-gap-4">
        <Alert
          title="Alert title"
          content="Alert content"
          type="expanded"
          primaryAction={{
            content: "Primary action",
            action: () => alert("Primary action"),
          }}
          secondaryAction={{
            content: "Secondary action",
            action: () => alert("Secondary action"),
          }}
        />
        <Alert
          title="Alert title"
          content="Alert content"
          type="inline"
          primaryAction={{
            content: "Primary action",
            action: () => alert("Primary action"),
          }}
          secondaryAction={{
            content: "Secondary action",
            action: () => alert("Secondary action"),
          }}
        />
      </div>
    );
  },
};

export const Dismission: Story = {
  decorators: [Wrapper],
  render: () => {
    const [visible, setVisible] = React.useState(true);

    return (
      <div className="s-flex s-flex-col s-w-full s-gap-4">
        <Alert
          title="Alert title"
          content="Click to close icon to dismiss"
          type="expanded"
          visible={visible}
          onDismiss={() => setVisible(false)}
        />
      </div>
    );
  },
};
