import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "react-aria-components";

export interface IButton extends VariantProps<typeof buttonClasses>, BaseButtonProps, TestProps {}

const buttonClasses = cva(["st-button"], {
  variants: {
    intent: {
      primary: ["s-bg-blue-500", "s-text-white", "s-border-transparent", "hover:s-bg-blue-600"],
      secondary: ["s-bg-white", "s-text-gray-800", "s-border-gray-400", "hover:s-bg-gray-100"],
    },
    size: {
      small: ["s-text-sm", "s-py-1", "s-px-2"],
      medium: ["s-text-base", "s-py-2", "s-px-4"],
    },
  },
});

export const Button: FC<IButton> = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const { children, className, intent, size, ...rest } = props;
  const classes = buttonClasses({ intent, size, className });

  return (
    <BaseButton ref={ref} {...rest} className={classes}>
      {children}
    </BaseButton>
  );
});

Button.defaultProps = {
  children: "Button",
  intent: "primary",
  size: "medium",
};
