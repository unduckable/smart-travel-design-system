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
export const Default: Story = {};

export const Examples: Story = {
  render() {
    return (
      <div className="s-flex s-flex-col s-gap-4">
        <Pagination total={10} onChange={() => {}} size="small" />
        <Pagination total={10} onChange={() => {}} size="medium" />
        <Pagination total={10} onChange={() => {}} size="large" />
      </div>
    );
  },
};
