import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Stepper } from ".";
import { Button } from "../button";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
};

export default meta;

type Story = StoryObj<typeof Stepper>;
export const Default: Story = {
  args: {
    className: "s-w-[500px]",
    steps: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
    activeStep: 2,
  },
};

export const Horizontal: Story = {
  parameters: {
    docs: { source: { type: "code" } },
  },
  render() {
    const [activeStep, setActiveStep] = React.useState(2);
    return (
      <Stepper
        className="s-w-[500px]"
        orientation="horizontal"
        steps={["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]}
        activeStep={activeStep}
        onChange={setActiveStep}
      />
    );
  },
};

export const Vertical: Story = {
  parameters: {
    docs: { source: { type: "code" } },
  },
  render() {
    const [activeStep, setActiveStep] = React.useState(2);
    return (
      <Stepper
        className="s-w-[500px]"
        orientation="vertical"
        steps={["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]}
        activeStep={activeStep}
        onChange={setActiveStep}
      >
        {(step) =>
          step === activeStep ? (
            <div className="s-text-gray-500 s-text-sm">
              In vertical layout, the current step may have accompanying content.
              <div className="s-flex s-gap-2">
                <Button intent="primary" size="small" className="s-my-2" onPress={() => setActiveStep((x) => x + 1)}>
                  Next
                </Button>
                <Button
                  intent="secondary-outline"
                  size="small"
                  className="s-my-2"
                  onPress={() => setActiveStep((x) => x - 1)}
                >
                  Back
                </Button>
              </div>
            </div>
          ) : null
        }
      </Stepper>
    );
  },
};
