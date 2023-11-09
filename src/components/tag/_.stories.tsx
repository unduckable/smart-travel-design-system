import { Meta, StoryObj } from "@storybook/react";
import { Tag } from ".";
import { TagGroup } from "../tag-group";

const meta: Meta<typeof Tag> = {
  title: "Components/Tags/Tag",
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
