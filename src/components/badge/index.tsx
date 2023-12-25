import { Icon } from "@/src";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, ReactNode, forwardRef } from "react";
import { Button, ButtonProps } from "react-aria-components";

export interface IBadge extends VariantProps<typeof badgeClasses>, Omit<ButtonProps, "children">, TestProps {
  prefixIcon?: FC;
  suffixIcon?: FC;
  children?: ReactNode;
}

const badgeClasses = cva(
  ["st-badge", "s-flex s-text-xs s-p-1 s-outline-none dark:s-bg-white-100 dark:s-border-white-200"],
  {
    variants: {
      color: {
        green: "s-border-green-200 s-text-green-800 s-bg-green-100 dark:s-text-green-500",
        red: "s-border-red-200 s-text-red-800 s-bg-red-100 dark:s-text-red-500",
        gray: "s-border-gray-200 s-text-gray-800 s-bg-gray-100 dark:s-text-white-800",
        blue: "s-border-blue-200 s-text-blue-800 s-bg-blue-100 dark:s-text-blue-500",
        pink: "s-border-pink-200 s-text-pink-800 s-bg-pink-100 dark:s-text-pink-500",
        yellow: "s-border-yellow-200 s-text-yellow-800 s-bg-yellow-100 dark:s-text-yellow-500",
        orange: "s-border-orange-200 s-text-orange-800 s-bg-orange-100 dark:s-text-orange-500",
        custom: "",
      },
      shape: {
        rounded: "s-rounded-md",
        pill: "s-rounded-full",
      },
      isOutlined: {
        true: "s-border-[1px] s-border-solid",
      },
    },
  },
);

export const Badge: FC<IBadge> = forwardRef<HTMLButtonElement, IBadge>((props, ref) => {
  const { children, color, className, isDisabled, isOutlined, prefixIcon, shape, suffixIcon, ...rest } = props;
  const classes = badgeClasses({ className, color, shape, isOutlined });

  return (
    <Button ref={ref} {...rest} className={classes}>
      {prefixIcon && <Icon source={prefixIcon} className="s-h-[16px] s-w-[16px]" />}
      {children && <div className="s-px-1">{children}</div>}
      {suffixIcon && <Icon source={suffixIcon} className="s-h-[16px] s-w-[16px]" />}
    </Button>
  );
});

Badge.defaultProps = {
  color: "blue",
  shape: "rounded",
  isOutlined: false,
};
