import { Icon } from "@/src";
import { AirplayToTv } from "@/src/icons";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, ReactNode, forwardRef } from "react";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "react-aria-components";

export interface IFloatingButton extends VariantProps<typeof floatingButtonClasses>, BaseButtonProps, TestProps {
  icon?: FC;
}

export interface IFloatingButtonGroup extends VariantProps<typeof floatingButtonGroupClasses>, TestProps {
  children?: ReactNode;
  className?: string;
}

const floatingButtonClasses = cva(
  [
    "st-floating-button",
    "s-w-14",
    "s-h-14",
    "s-rounded-full",
    "s-flex",
    "s-justify-center",
    "s-items-center",
    "s-text-white-900",
    "s-outline-none",
    "s-bg-blue-500 hover:s-bg-blue-600 hover:s-cursor-pointer",
    "focus:s-ring-2 focus:s-ring-offset-2 focus:s-ring-blue-500",
  ],
  {
    variants: {
      isDisabled: {
        true: "s-cursor-not-allowed s-opacity-50",
      },
    },
  },
);

const floatingButtonGroupClasses = cva([
  "st-floating-button-group",
  "s-fixed",
  "s-right-6",
  "s-bottom-6",
  "s-flex",
  "s-flex-col",
  "s-gap-3",
]);

export const FloatingButton: FC<IFloatingButton> = forwardRef<HTMLButtonElement, IFloatingButton>((props, ref) => {
  const { children, className, isDisabled, icon, ...rest } = props;
  const classes = floatingButtonClasses({
    className,
    isDisabled,
  });
  return (
    <BaseButton ref={ref} {...rest} className={classes} isDisabled={isDisabled}>
      <Icon source={icon} />
    </BaseButton>
  );
});

FloatingButton.defaultProps = {
  icon: AirplayToTv,
  isDisabled: false,
};

export const FloatingButtonGroup: FC<IFloatingButtonGroup> = forwardRef<HTMLDivElement, IFloatingButtonGroup>(
  (props, ref) => {
    const { children, className } = props;
    const classes = floatingButtonGroupClasses({
      className,
    });

    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  },
);
