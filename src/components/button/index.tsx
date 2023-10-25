import { cva } from "class-variance-authority";
import React, { FC, forwardRef } from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "react-aria-components";
import { TestProps } from "../../utils";

interface IButton extends BaseButtonProps, TestProps {
  intent: "primary" | "secondary";
  size: "medium" | "small";
}

const getClasses = cva(["st-button"], {
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"],
      secondary: ["bg-white", "text-gray-800", "border-gray-400", "hover:bg-gray-100"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
});

export const Button: FC<IButton> = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const { className, children, ...rest } = props;
  const classes = `${getClasses(props)} ${className}`;

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
