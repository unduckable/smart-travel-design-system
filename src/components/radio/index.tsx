import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Radio as BaseRadio, RadioProps as BaseRadioProps } from "react-aria-components";

const radioClasses = cva(
  [
    "st-radio s-flex s-items-center",
    "selected:before:s-border-[0.3rem]",
    "before:s-mr-2 before:s-w-4 before:s-h-4 before:s-border-2 before:s-border-blue-500",
    "before:s-rounded-full before:s-transition-all",
  ],
  {
    variants: {
      isDisabled: {
        true: "s-opacity-50 before:s-border-gray-400 s-pointer-events-none",
      },
    },
  },
);

export interface IRadio extends VariantProps<typeof radioClasses>, BaseRadioProps, TestProps {}

export const Radio: FC<IRadio> = forwardRef<HTMLInputElement, IRadio>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = radioClasses({ className, isDisabled });

  return (
    <BaseRadio ref={ref} {...rest} className={classes}>
      {children}
    </BaseRadio>
  );
});

Radio.defaultProps = {
  children: "Radio",
};
