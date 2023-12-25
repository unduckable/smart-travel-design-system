import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef, isValidElement } from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "react-aria-components";
import { IIcon, Icon } from "../icon";

export interface IButton extends VariantProps<typeof buttonClasses>, Omit<BaseButtonProps, "children">, TestProps {
  prefixIcon?: IIcon["source"];
  suffixIcon?: IIcon["source"];
  children?: React.ReactNode;
}

const buttonClasses = cva(
  ["st-button s-flex s-justify-center s-items-center s-gap-1 s-text-sm s-border-[1px] s-outline-none s-leading-none"],
  {
    variants: {
      intent: {
        primary: "s-text-white-900",
        secondary: "s-border-transparent",
        "secondary-outline": "s-shadow-xs",
        tertiary: "s-border-transparent",
      },
      shape: {
        round: "s-rounded-md",
        pill: "s-rounded-full",
        rectangle: "s-rounded-none",
      },
      size: {
        small: "s-h-8",
        medium: "s-h-10",
        xs: "s-h-5",
      },
      isSquare: {
        true: "s-aspect-square",
      },
      isDisabled: {
        true: "s-cursor-not-allowed s-opacity-50",
      },
      isDestructive: {
        true: "focus:s-outline-red-500",
        false: "dark:s-text-white-900 focus:s-outline-blue-500",
      },
    },
    compoundVariants: [
      // Sizes
      {
        size: "small",
        isSquare: false,
        className: "s-py-1.5 s-px-2",
      },
      {
        size: "medium",
        isSquare: false,
        className: "s-py-2 s-px-3",
      },
      {
        size: "xs",
        isSquare: true,
        className: "s-p-0.5 s-w-5 [&_.st-icon]:s-w-4 [&_.st-icon]:s-h-4",
      },
      {
        size: "small",
        isSquare: true,
        className: "s-p-1.5 s-w-8 [&_.st-icon]:s-w-5 [&_.st-icon]:s-h-5",
      },
      {
        size: "medium",
        isSquare: true,
        className: "s-p-2 s-w-10",
      },

      // Non-destructive
      {
        isDestructive: false,
        intent: "primary",
        className: "s-bg-blue-500 s-border-blue-500 hover:s-bg-blue-600",
      },
      {
        isDestructive: false,
        intent: "secondary-outline",
        className: ["s-border-gray-200 hover:s-bg-gray-50", "dark:s-border-white-200 dark:hover:s-bg-white-100"],
      },
      {
        isDestructive: false,
        intent: "secondary",
        className: "s-border-gray-200 hover:s-bg-gray-50 dark:hover:s-bg-white-100",
      },

      // Destructive
      {
        isDestructive: true,
        intent: ["secondary", "secondary-outline", "tertiary"],
        className: "s-text-red-700 dark:s-text-red-500",
      },
      {
        isDestructive: true,
        intent: "primary",
        className: "s-bg-red-500 s-border-red-500 hover:s-bg-red-600",
      },
      {
        isDestructive: true,
        intent: "secondary-outline",
        className: "s-border-red-500 hover:s-bg-red-50 dark:hover:s-bg-white-900 dark:hover:s-bg-opacity-10",
      },
      {
        isDestructive: true,
        intent: "secondary",
        className: "s-border-red-50 hover:s-bg-red-50 dark:hover:s-bg-white-900 dark:hover:s-bg-opacity-10",
      },
    ],
  },
);

export const Button: FC<IButton> = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const {
    children,
    className,
    isSquare,
    isDisabled,
    isDestructive,
    intent,
    prefixIcon,
    suffixIcon,
    size,
    shape,
    ...rest
  } = props;
  const classes = buttonClasses({ isDisabled, isDestructive, isSquare, intent, size, className, shape });

  return (
    <BaseButton ref={ref} {...rest} className={classes} isDisabled={isDisabled}>
      {prefixIcon && <Icon source={prefixIcon} inheritColor />}
      {children}
      {suffixIcon && <Icon source={suffixIcon} inheritColor />}
    </BaseButton>
  );
});

Button.defaultProps = {
  children: "",
  intent: "primary",
  size: "medium",
  shape: "round",
  isDestructive: false,
  isSquare: false,
  isDisabled: false,
};
