import ChevronLeft from "@/src/icons/ChevronLeft";
import Close from "@/src/icons/Close";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Modal } from ".";
import { Button } from "../button";
import { Icon } from "../icon";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;
export const Default: Story = {
  parameters: {
    docs: { source: { type: "code" } },
  },
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <>
        <Button onPress={() => setIsOpen(true)}>Open modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onOpenChange={setIsOpen}>
          <header className="s-flex s-items-center s-justify-between s-p-4 s-border-solid s-border-b-2 s-border-gray-100">
            <button type="button" className="s-p-1">
              <Icon source={ChevronLeft} />
            </button>
            <h1 className="s-text-sm s-font-bold">Modal title</h1>
            <button type="button" className="s-p-1" onClick={() => setIsOpen(false)}>
              <Icon source={Close} />
            </button>
          </header>
        </Modal>
      </>
    );
  },
};

export const GenericModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        <Button onPress={() => setIsOpen(true)}>Open modal</Button>
        <Modal isOpen={isOpen} onClose={onClose} onOpenChange={setIsOpen}>
          <div className="s-flex s-flex-col s-h-full">
            <header className="s-flex s-items-center s-justify-between s-p-4 s-border-solid s-border-b-2 s-border-gray-100">
              <button type="button" className="s-p-1">
                <Icon source={ChevronLeft} />
              </button>
              <h1 className="s-text-sm s-font-bold">Modal title</h1>
              <button type="button" className="s-p-1" onClick={onClose}>
                <Icon source={Close} />
              </button>
            </header>
            <main className="s-flex-1">
              <h2 className="s-m-4">Modal content</h2>
            </main>
            <footer className="s-flex s-justify-end s-justify-self-end s-pt-6 s-px-4 s-pb-10">
              <Button className="s-mr-4" intent="tertiary" size="medium" onPress={onClose}>
                Clear all
              </Button>
              <Button className="s-mr-2" intent="secondary-outline" size="medium" onPress={onClose}>
                Cancel
              </Button>
              <Button intent="primary" size="medium" onPress={onClose}>
                Confirm
              </Button>
            </footer>
          </div>
        </Modal>
      </>
    );
  },
};
