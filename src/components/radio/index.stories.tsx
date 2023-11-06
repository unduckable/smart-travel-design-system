import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "../radiogroup";
import { Radio } from "./";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;
export const Default: Story = {
  decorators: [
    (Story) => (
      <RadioGroup label="">
        <Story />
      </RadioGroup>
    ),
  ],
};
