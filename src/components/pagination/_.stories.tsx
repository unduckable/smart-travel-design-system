import AnnotationWarning from "@/src/icons/AnnotationWarning";
import Trash from "@/src/icons/Trash";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../button";
import { Pagination } from "./";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;
export const Default: Story = {
  parameters: {
    docs: { source: { type: "code" } },
  },
};
