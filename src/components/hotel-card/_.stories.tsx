import Bank from "@/src/icons/Bank";
import Discounts from "@/src/icons/Discounts";
import Plus from "@/src/icons/Plus";
import type { Meta, StoryObj } from "@storybook/react";
import { HotelCard } from ".";
import { Badge } from "../badge";
import { Icon } from "../icon";

const meta: Meta<typeof HotelCard> = {
  title: "Components/Card/Hotel Card",
  component: HotelCard,
};

export default meta;

type Story = StoryObj<typeof HotelCard>;
export const Default: Story = {
  args: {
    type: "compact",
    img: "https://react-responsive-carousel.js.org/assets/1.jpeg",
    stars: 5,
    rating: 7.8,
    ratingLabel: "Rất tốt",
    ratingHelper: "(1234)",
    location: "Hanoi, Vietnam",
    price: "1,234,000₫",
    saleAtPrice: "1,234,000₫",
    saleBadge: "-99%",
  },
};

export const Full: Story = {
  args: {
    type: "full",
    img: "https://react-responsive-carousel.js.org/assets/1.jpeg",
    stars: 5,
    rating: 7.8,
    ratingLabel: "Rất tốt",
    ratingHelper: "(1234)",
    location: "Hanoi, Vietnam",
    price: "1,234,000₫",
    saleAtPrice: "1,234,000₫",
    saleBadge: "-99%",
    saleTag: (
      <Badge color="custom" prefixIcon={Plus} className="s-bg-yellow-500 s-text-white-900">
        Label
      </Badge>
    ),
    labels: (
      <div className="s-flex s-gap-1">
        <Badge color="gray">Label</Badge>
        <Badge color="yellow">Label</Badge>
        <Badge color="blue">Label</Badge>
      </div>
    ),
    voucher: (
      <div className="s-flex s-items-center">
        <Icon source={Discounts} size="md" className="s-mr-1" />
        <p className="s-text-xs dark:s-text-white-500">Mã giảm giá</p>
      </div>
    ),
  },
};

export const Compact: Story = {
  args: {
    type: "compact",
    img: "https://react-responsive-carousel.js.org/assets/1.jpeg",
    stars: 5,
    rating: 7.8,
    ratingLabel: "Rất tốt",
    ratingHelper: "(1234)",
    location: "Hanoi, Vietnam",
    price: "1,234,000₫",
    saleAtPrice: "1,234,000₫",
    saleBadge: "-99%",
  },
};
