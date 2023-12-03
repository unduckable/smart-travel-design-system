import AnnotationWarning from "@/src/icons/AnnotationWarning";
import Trash from "@/src/icons/Trash";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Dialog } from ".";
import { Button } from "../button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
};

export default meta;

type Story = StoryObj<typeof Dialog>;
export const Default: Story = {
  parameters: {
    docs: { source: { type: "code" } },
  },
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <>
        <Button onPress={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog
          isOpen={isOpen}
          title="Dialog title"
          description="A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
          onCancel={() => setIsOpen(false)}
          onOpenChange={setIsOpen}
        />
      </>
    );
  },
};

export const Icons: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <>
        <Button onPress={() => setIsOpen(true)}>Open Dialog</Button>
        <Dialog
          isOpen={isOpen}
          title="Dialog with custom icon"
          description="A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
          icon={AnnotationWarning}
          onCancel={() => setIsOpen(false)}
          onOpenChange={setIsOpen}
        />
      </>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <>
        <Button isDestructive onPress={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog
          isOpen={isOpen}
          icon={Trash}
          title="Are you sure you want to delete this?"
          description=""
          isDestructive
          onCancel={() => setIsOpen(false)}
          onConfirm={() => setIsOpen(false)}
          onOpenChange={setIsOpen}
        />
      </>
    );
  },
};
