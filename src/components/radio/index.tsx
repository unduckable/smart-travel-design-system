import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Radio as BaseRadio, RadioProps as BaseRadioProps } from "react-aria-components";

const radioClasses = cva(["st-radio s-flex"], {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

const radioInnerClasses = cva(
  [
    "s-flex s-mt-1 s-mr-2 s-w-4 s-h-4 s-border-[1px] s-rounded-3xl s-transition-all s-outline-none",
    "after:s-m-auto after:s-w-2 after:s-h-2 after:s-rounded-3xl after:s-transition-all",
  ],
  {
    variants: {
      isHovered: { true: "" },
      isSelected: {
        false: "s-border-gray-200 after:s-hidden",
      },
      isFocused: {
        true: "s-outline-blue-500",
      },
      isDisabled: {
        true: "s-border-gray-300 after:s-bg-gray-300",
        false: "after:s-bg-blue-500",
      },
    },
    compoundVariants: [
      {
        isDisabled: false,
        isSelected: true,
        className: "s-border-blue-500 s-border-blue-500 after:s-block",
      },
      {
        isDisabled: false,
        isSelected: false,
        isHovered: true,
        className: "s-border-gray-300",
      },
    ],
  },
);

export interface IRadio extends VariantProps<typeof radioClasses>, BaseRadioProps, TestProps {}

export const Radio: FC<IRadio> = forwardRef<HTMLInputElement, IRadio>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = radioClasses({ className, isDisabled });

  return (
    <BaseRadio ref={ref} {...rest} className={classes}>
      {({ isSelected, isHovered, isFocused }) => (
        <>
          <div className={radioInnerClasses({ isSelected, isHovered, isDisabled, isFocused })} />
          {children}
        </>
      )}
    </BaseRadio>
  );
});

Radio.defaultProps = {
  children: "Radio",
  isDisabled: false,
};
