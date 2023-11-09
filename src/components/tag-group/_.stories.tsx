import type { Meta, StoryObj } from "@storybook/react";
import { TagGroup } from ".";
import { Tag } from "../tag";

const meta: Meta<typeof TagGroup> = {
  title: "Components/Tags/Tag Group",
  component: TagGroup,
};

export default meta;

type Story = StoryObj<typeof TagGroup>;
export const Default: Story = {
  render: () => (
    <TagGroup label="Tag group" selectionMode="single">
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
      <Tag>Tag 3</Tag>
      <Tag>Tag 4</Tag>
    </TagGroup>
  ),
};
export const Icescream: Story = {
  render: () => (
    <TagGroup label="Ice cream flavor" selectionMode="single">
      <Tag>Chocolate</Tag>
      <Tag>Mint</Tag>
      <Tag>Strawberry</Tag>
      <Tag>Vanilla</Tag>
    </TagGroup>
  ),
};
