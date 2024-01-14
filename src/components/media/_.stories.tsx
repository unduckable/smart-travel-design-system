import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Media } from ".";

const meta: Meta<typeof Media> = {
  title: "Components/Media",
  component: Media,
};

export default meta;

type Story = StoryObj<typeof Media>;
export const Default: Story = {
  args: {
    src: "https://bit.ly/dan-abramov",
    className: "s-w-40",
  },
};

export const Examples: Story = {
  render() {
    return (
      <div className="s-flex s-flex-col s-gap-4">
        <Media alt="Dan" src="https://bit.ly/dan-abramov" type="image" ratio="square" className="s-w-40" />
        <Media alt="Dan" src="https://bit.ly/dan-abramov" type="image" ratio="portrait" className="s-w-40" />
        <Media
          alt="Dan"
          src="http://react-responsive-carousel.js.org/assets/1.jpeg"
          type="image"
          ratio="landscape"
          className="s-w-52"
        />
        <Media
          alt="Dan"
          src="http://react-responsive-carousel.js.org/assets/1.jpeg"
          type="image"
          ratio="wide"
          className="s-w-56"
        />
      </div>
    );
  },
};
