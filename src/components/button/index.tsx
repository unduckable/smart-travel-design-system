import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "react-aria-components";

export interface IButton extends VariantProps<typeof buttonClasses>, BaseButtonProps, TestProps {}

const buttonClasses = cva(["st-button"], {
  variants: {
    intent: {
      primary: ["s-text-white", "s-border-transparent"],
      secondary: ["s-text-gray-800", "s-border-gray-400"],
    },
    size: {
      small: ["s-text-sm", "s-py-1", "s-px-2"],
      medium: ["s-text-base", "s-py-2", "s-px-4"],
    },
    active: {
      true: "",
    },
    isDisabled: {
      true: ["s-opacity-50", "s-cursor-not-allowed"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      isDisabled: false,
      className: "hover:s-bg-blue-600",
    },
    {
      intent: "primary",
      active: false,
      className: "s-bg-blue-500",
    },
    {
      intent: "primary",
      active: true,
      className: "s-bg-blue-600",
    },
    {
      intent: "secondary",
      isDisabled: false,
      className: "hover:s-bg-gray-200",
    },
    {
      intent: "secondary",
      active: false,
      className: "s-bg-white",
    },
    {
      intent: "secondary",
      active: true,
      className: "s-bg-gray-100",
    },
  ],
});

export const Button: FC<IButton> = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const { active, children, className, isDisabled, intent, size, ...rest } = props;
  const classes = buttonClasses({ active, isDisabled, intent, size, className });
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
  active: false,
  isDisabled: false,
};
