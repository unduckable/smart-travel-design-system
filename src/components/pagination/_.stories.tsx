import AnnotationWarning from "@/src/icons/AnnotationWarning";
import Trash from "@/src/icons/Trash";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../button";
import { Dialog } from "./";

const meta: Meta<typeof Dialog> = {
  title: "Components/Pagination",
  component: Dialog,
};

export default meta;

type Story = StoryObj<typeof Dialog>;
export const Default: Story = {
  parameters: {
    docs: { source: { type: "code" } },
  },
  render: () => {
    return <></>;
  },
};
