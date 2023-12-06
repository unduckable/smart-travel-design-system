import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Carousel } from ".";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;
export const Default: Story = {
  render() {
    return (
      <Carousel
        spaceBetween={8}
        items={[
          {
            id: "1",
            title: "Item 1",
            image: "http://react-responsive-carousel.js.org/assets/1.jpeg",
            description: "Description",
          },
          {
            id: "2",
            title: "Item 2",
            image: "http://react-responsive-carousel.js.org/assets/2.jpeg",
            description: "Description",
          },
          {
            id: "3",
            title: "Item 3",
            image: "http://react-responsive-carousel.js.org/assets/3.jpeg",
            description: "Description",
          },
        ]}
        className="s-w-80"
      >
        {({ image, title, description }) => (
          <div className="s-relative s-bg-gray-100 s-rounded-md">
            <img src={image} alt="" className="s-w-36 s-h-40 s-rounded-md" />
            <label className="s-absolute s-bottom-3 s-left-3 s-right-3">
              <p className="s-text-white-900 s-text-sm">{title}</p>
              <p className="s-text-white-900 s-text-xs">{description}</p>
            </label>
          </div>
        )}
      </Carousel>
    );
  },
};

export const Free: Story = {
  render() {
    return (
      <Carousel
        spaceBetween={8}
        freeMode
        items={[
          {
            id: "1",
            title: "Item 1",
            image: "http://react-responsive-carousel.js.org/assets/1.jpeg",
            description: "Description",
          },
          {
            id: "2",
            title: "Item 2",
            image: "http://react-responsive-carousel.js.org/assets/2.jpeg",
            description: "Description",
          },
          {
            id: "3",
            title: "Item 3",
            image: "http://react-responsive-carousel.js.org/assets/3.jpeg",
            description: "Description",
          },
        ]}
        className="s-w-80"
      >
        {({ image, title, description }) => (
          <div className="s-relative s-bg-gray-100 s-rounded-md">
            <img src={image} alt="" className="s-w-36 s-h-40 s-rounded-md" />
            <label className="s-absolute s-bottom-3 s-left-3 s-right-3">
              <p className="s-text-white-900 s-text-sm">{title}</p>
              <p className="s-text-white-900 s-text-xs">{description}</p>
            </label>
          </div>
        )}
      </Carousel>
    );
  },
};

export const Snap: Story = {
  render() {
    return (
      <Carousel
        spaceBetween={8}
        freeMode={false}
        items={[
          {
            id: "1",
            title: "Item 1",
            image: "http://react-responsive-carousel.js.org/assets/1.jpeg",
            description: "Description",
          },
          {
            id: "2",
            title: "Item 2",
            image: "http://react-responsive-carousel.js.org/assets/2.jpeg",
            description: "Description",
          },
          {
            id: "3",
            title: "Item 3",
            image: "http://react-responsive-carousel.js.org/assets/3.jpeg",
            description: "Description",
          },
        ]}
        className="s-w-80"
      >
        {({ image, title, description }) => (
          <div className="s-relative s-bg-gray-100 s-rounded-md">
            <img src={image} alt="" className="s-w-full s-rounded-md" />
            <label className="s-absolute s-bottom-3 s-left-3 s-right-3">
              <p className="s-text-white-900 s-text-sm">{title}</p>
              <p className="s-text-white-900 s-text-xs">{description}</p>
            </label>
          </div>
        )}
      </Carousel>
    );
  },
};

export const SlidesPerView: Story = {
  render() {
    return (
      <Carousel
        spaceBetween={8}
        freeMode={false}
        slidesPerView={2}
        items={[
          {
            id: "1",
            title: "Item 1",
            image: "http://react-responsive-carousel.js.org/assets/1.jpeg",
            description: "Description",
          },
          {
            id: "2",
            title: "Item 2",
            image: "http://react-responsive-carousel.js.org/assets/2.jpeg",
            description: "Description",
          },
          {
            id: "3",
            title: "Item 3",
            image: "http://react-responsive-carousel.js.org/assets/3.jpeg",
            description: "Description",
          },
          {
            id: "4",
            title: "Item 4",
            image: "http://react-responsive-carousel.js.org/assets/4.jpeg",
            description: "Description",
          },
        ]}
        className="s-w-80"
      >
        {({ image, title, description }) => (
          <div className="s-relative s-bg-gray-100 s-rounded-md">
            <img src={image} alt="" className="s-w-full s-h-32 s-rounded-md" />
            <label className="s-absolute s-bottom-3 s-left-3 s-right-3">
              <p className="s-text-white-900 s-text-sm">{title}</p>
              <p className="s-text-white-900 s-text-xs">{description}</p>
            </label>
          </div>
        )}
      </Carousel>
    );
  },
};

export const Pagination: Story = {
  render() {
    return (
      <Carousel
        spaceBetween={8}
        freeMode={false}
        pagination
        items={[
          {
            id: "1",
            title: "Item 1",
            image: "http://react-responsive-carousel.js.org/assets/1.jpeg",
            description: "Description",
          },
          {
            id: "2",
            title: "Item 2",
            image: "http://react-responsive-carousel.js.org/assets/2.jpeg",
            description: "Description",
          },
          {
            id: "3",
            title: "Item 3",
            image: "http://react-responsive-carousel.js.org/assets/3.jpeg",
            description: "Description",
          },
          {
            id: "4",
            title: "Item 4",
            image: "http://react-responsive-carousel.js.org/assets/4.jpeg",
            description: "Description",
          },
          {
            id: "5",
            title: "Item 5",
            image: "http://react-responsive-carousel.js.org/assets/5.jpeg",
            description: "Description",
          },
          {
            id: "6",
            title: "Item 6",
            image: "http://react-responsive-carousel.js.org/assets/6.jpeg",
            description: "Description",
          },
          {
            id: "7",
            title: "Item 7",
            image: "http://react-responsive-carousel.js.org/assets/7.jpeg",
            description: "Description",
          },
          {
            id: "8",
            title: "Item 8",
            image: "http://react-responsive-carousel.js.org/assets/1.jpeg",
            description: "Description",
          },
        ]}
        className="s-w-80"
      >
        {({ image, title, description }) => (
          <div className="s-relative s-bg-gray-100 s-rounded-md s-transform scale-1">
            <img src={image} alt="" className="s-w-full s-h-32 s-rounded-md" />
            <label className="s-absolute s-bottom-3 s-left-3 s-right-3">
              <p className="s-text-white-900 s-text-sm">{title}</p>
              <p className="s-text-white-900 s-text-xs">{description}</p>
            </label>
          </div>
        )}
      </Carousel>
    );
  },
};
