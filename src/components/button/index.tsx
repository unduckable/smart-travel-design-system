import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "react-aria-components";

export interface IButton extends VariantProps<typeof buttonClasses>, BaseButtonProps, TestProps {}

const buttonClasses = cva(["st-button s-text-sm s-border-[1px] s-outline-none"], {
  variants: {
    intent: {
      primary: "s-text-white-900",
      secondary: "s-border-transparent",
      "secondary-outline": "s-shadow-xs ",
      tertiary: "s-border-transparent",
    },
    shape: {
      round: "s-rounded-md",
      pill: "s-rounded-3xl",
      rectangle: "s-rounded-none",
    },
    size: {
      small: "s-py-1.5 s-leading-none s-px-2 s-h-8",
      medium: "s-py-2 s-px-3 s-h-10",
    },
    isDisabled: {
      true: "s-cursor-not-allowed s-opacity-50",
    },
    isDestructive: {
      true: "focus:s-outline-red-500",
      false: "focus:s-outline-blue-500",
    },
  },
  compoundVariants: [
    // Non-destructive
    {
      isDestructive: false,
      intent: "primary",
      className: "s-bg-blue-500 s-border-blue-500 hover:s-bg-blue-600 hover:s-border-blue-600",
    },
    {
      isDestructive: false,
      intent: "secondary-outline",
      className: "s-border-gray-200",
    },
    {
      isDestructive: false,
      intent: "secondary",
      className: "s-border-gray-200 hover:s-bg-gray-100",
    },

    // Destructive
    {
      isDestructive: true,
      intent: ["secondary", "secondary-outline", "tertiary"],
      className: "s-text-red-700",
    },
    {
      isDestructive: true,
      intent: "primary",
      className: "s-bg-red-500 hover:s-bg-red-600 s-border-red-500 hover:s-border-red-600",
    },
    {
      isDestructive: true,
      intent: "secondary-outline",
      className: "s-border-red-500 hover:s-bg-red-50",
    },
    {
      isDestructive: true,
      intent: "secondary",
      className: "s-border-red-50 hover:s-bg-red-100",
    },
    {
      isDestructive: true,
      intent: "tertiary",
      className: "hover:s-bg-red-50",
    },
  ],
});

export const Button: FC<IButton> = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const { children, className, isDisabled, isDestructive, intent, size, shape, ...rest } = props;
  const classes = buttonClasses({ isDisabled, isDestructive, intent, size, className, shape });
  return (
    <BaseButton ref={ref} {...rest} className={classes} isDisabled={isDisabled}>
      {children}
    </BaseButton>
  );
});

Button.defaultProps = {
  children: "Button",
  intent: "primary",
  size: "medium",
  isDestructive: false,
  shape: "round",
  isDisabled: false,
};
