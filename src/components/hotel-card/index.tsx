import Heart from "@/src/icons/Heart";
import Share from "@/src/icons/Share";
import StarFilled from "@/src/icons/StarFilled";
import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, ReactNode, forwardRef } from "react";
import { Group } from "react-aria-components";
import { Button } from "../button";
import { Icon } from "../icon";

export interface IHotelCard extends VariantProps<typeof cardClasses>, TestProps {
  className?: string;
  name: string;
  stars: number;
  img: string;
  imgLabel: string;
  saleBadge: string;
  saleTag: string | ReactNode;
  rating: number;
  ratingLabel: string;
  ratingHelper: string;
  price: string;
  saleAtPrice: string;
  location: string;
  labels?: string | ReactNode;
  voucher: string | ReactNode;
  onPress?: () => void;
  onShare?: () => void;
  onLike?: () => void;
}

const cardClasses = cva(["st-hotel-card s-inline-flex s-flex-col", ""], {
  variants: {
    type: {
      compact: "",
      full: "s-border-[1px] s-border-gray-100 s-rounded-md s-overflow-hidden dark:s-border-white-100",
    },
  },
});

const imageClasses = cva(["s-relative s-overflow-hidden s-bg-gray-100"], {
  variants: {
    type: {
      compact: "s-w-[136px] s-h-[136px] s-rounded-md ",
      full: "s-w-[343px] s-aspect-video",
    },
  },
});

const contentClasses = cva(["s-flex s-flex-col s-items-start"], {
  variants: {
    type: {
      compact: "s-pt-2 s-gap-1",
      full: "s-p-2 s-gap-2",
    },
  },
});

export const HotelCard: FC<IHotelCard> = forwardRef<HTMLDivElement, IHotelCard>((props, ref) => {
  const {
    className,
    name,
    stars,
    img,
    imgLabel,
    saleBadge,
    saleTag,
    rating,
    ratingLabel,
    ratingHelper,
    price,
    saleAtPrice,
    location,
    labels,
    voucher,
    type,
    onPress,
    onShare,
    onLike,
    ...rest
  } = props;

  return (
    <Group className={cardClasses({ className, type })} ref={ref} {...rest} onClick={onPress}>
      <div className={imageClasses({ type })}>
        <img
          src={img}
          alt={name}
          className="s-absolute s-bottom-0 s-left-0 s-right-0 s-top-0 s-h-full s-w-full s-object-contain"
        />
        {saleBadge && (
          <span className="s-absolute s-left-3 s-top-0 s-rounded-b-sm s-bg-red-600 s-p-1 s-text-sm s-text-white-900">
            {saleBadge}
          </span>
        )}
        {saleTag && <span className="s-absolute s-bottom-3 s-left-3">{saleTag}</span>}
        {type === "full" && (
          <div className="s-absolute s-right-3 s-top-3">
            <Button
              isSquare
              intent="primary"
              prefixIcon={Share}
              className="[&]:s-rounded-full s-bg-gray-900 s-border-none hover:s-bg-gray-900 s-outline-0 dark:s-bg-white-900 dark:[&_svg]:s-text-gray-900 s-mb-2"
              size="small"
              onPress={onShare}
            />
            <Button
              isSquare
              intent="primary"
              prefixIcon={Heart}
              className="[&]:s-rounded-full s-bg-gray-900 s-border-none hover:s-bg-gray-900 s-outline-0 dark:s-bg-white-900 dark:[&_svg]:s-text-gray-900"
              size="small"
              onPress={onLike}
            />
          </div>
        )}
      </div>
      <div className={contentClasses({ type })}>
        <div
          className={`-s-order-2 s-flex ${
            type === "compact" ? "s-flex-col s-gap-1" : "s-flex s-w-full s-justify-between s-items-center"
          }`}
        >
          <p className="s-text-sm s-font-bold dark:s-text-white-900">{name}</p>
          <div className="s-flex">
            {[...Array(stars).keys()].map(() => (
              <Icon source={StarFilled} className="s-my-0.5 s-h-[12px] s-w-[12px] s-text-yellow-500" size="xs" />
            ))}
          </div>
        </div>
        <div className="s-flex s-items-center s-gap-1 -s-order-1">
          <span className="s-inline-block s-rounded-sm s-bg-blue-500 s-px-1 s-py-0.5">
            <p className="s-text-xs s-text-white-900">{rating}</p>
          </span>
          <p className="s-text-xs s-font-normal s-text-blue-500 dark:s-text-blue-400">{ratingLabel}</p>
          <p className="s-text-xs s-font-normal s-text-gray-300 dark:s-text-white-300">{ratingHelper}</p>
        </div>
        <p className={`s-text-xs s-text-gray-500 dark:s-text-white-500 ${type === "compact" ? "" : "-s-order-2"}`}>
          {location}
        </p>
        {type === "compact" && (
          <div className="s-flex s-gap-1">
            <p className="s-text-xs s-font-bold dark:s-text-white-900">{price}</p>
            {saleAtPrice && <p className="s-text-xs s-font-normal s-text-gray-300 s-line-through">{saleAtPrice}</p>}
          </div>
        )}
        {type === "full" && (
          <>
            <div className="s-flex s-flex-col s-gap-2 s-border-b-[1px] s-border-dashed s-border-gray-100 dark:s-border-white-100 s-w-full">
              {labels}
              {voucher}
            </div>
            <div className="s-flex s-flex-col s-w-full s-items-end">
              {saleBadge && (
                <span className="s-rounded-sm s-bg-red-600 s-px-1 s-text-xs s-text-white-900 s-mb-1">{saleBadge}</span>
              )}
              {saleAtPrice && (
                <p className="s-text-xs s-font-normal s-text-gray-300 s-line-through dark:s-text-white-300">
                  {saleAtPrice}
                </p>
              )}
              <p className="s-text-sm s-font-bold s-text-blue-500 dark:s-text-blue-400">{price}</p>
            </div>
          </>
        )}
      </div>
    </Group>
  );
});

HotelCard.defaultProps = {
  type: "full",
  name: "Label",
  stars: 0,
  rating: 7.8,
  labels: null,
};
