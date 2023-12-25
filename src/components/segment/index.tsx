import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef, useState } from "react";
import { Group } from "react-aria-components";
import { Button } from "../button";
import { Icon } from "../icon";

export interface ISegment extends VariantProps<typeof segmentClasses>, TestProps {
  options: Array<{ label?: string; isDisabled?: boolean; icon?: FC }>;
  className?: string;
}

const segmentClasses = cva(
  [
    "st-segment",
    "s-h-fit s-p-1 s-inline-flex s-bg-gray-100 s-rounded-full",
    "dark:s-bg-white-900 dark:s-bg-opacity-20",
  ],
  {
    variants: {
      size: {
        small: "",
        medium: "",
      },
      isDisabled: {
        true: "s-pointer-events-none s-text-disabled",
      },
    },
  },
);

const segmentItemClasses = cva("s-leading-none focus:s-outline-transparent", {
  variants: {
    size: {
      small: "s-h-[24px] s-text-xs",
      medium: "s-h-[32px]",
    },
    active: {
      true: "s-bg-white-900 s-shadow-sm dark:s-bg-gray-900",
    },
  },
});

export const Segment: FC<ISegment> = forwardRef<HTMLInputElement, ISegment>((props, ref) => {
  const [activeItem, setActiveItem] = useState(0);
  const { className, isDisabled, size, options, ...rest } = props;
  const classes = segmentClasses({ className, isDisabled });

  return (
    <Group ref={ref} {...rest} className={classes}>
      {options.map(({ label, isDisabled, icon }, index) => (
        <Button
          key={index}
          intent="tertiary"
          size={size}
          shape="pill"
          className={segmentItemClasses({ active: index === activeItem, size })}
          onPress={() => setActiveItem(index)}
          isDisabled={isDisabled}
        >
          {icon && <Icon source={icon} size={size === "medium" ? "md" : "sm"} />}
          {label}
        </Button>
      ))}
    </Group>
  );
});

Segment.defaultProps = {
  size: "medium",
  isDisabled: false,
  options: [],
};
