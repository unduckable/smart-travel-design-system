import { Meta, StoryObj } from "@storybook/react";
import { TagGroup } from "../taggroup";
import { Tag } from "./";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;
export const Default: Story = {
  decorators: [
    (Story) => (
      <TagGroup label="">
        <Story />
      </TagGroup>
    ),
  ],
};
