import { Meta, StoryObj } from "@storybook/react";
import { Radio } from ".";
import { RadioGroup } from "../radio-group";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;
export const Default: Story = {
  decorators: [
    (Story) => (
      <RadioGroup label="Radio">
        <Story />
      </RadioGroup>
    ),
  ],
};
