import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Checkbox as BaseCheckbox, CheckboxProps as BaseCheckboxProps } from "react-aria-components";
import "./index.css";

export interface ICheckbox extends VariantProps<typeof checkboxClasses>, BaseCheckboxProps, TestProps {}

const checkboxClasses = cva(["st-checkbox s-flex s-items-center"], {
  variants: {
    isDisabled: {
      true: "s-pointer-events-none s-text-disabled",
    },
  },
  compoundVariants: [],
});
const checkClasses = cva(
  [
    "s-w-4 s-h-4 s-mr-2 s-rounded s-border-2 s-rounded-4 s-transition-all s-flex s-items-center s-justify-center s-outline-none",
  ],
  {
    variants: {
      isSelected: { true: "" },
      isHovered: { true: "" },
      isIndeterminate: { true: "" },
      isFocused: { true: "s-outline-2 s-outline-blue-600" },
      isDisabled: { true: "s-border-gray-200" },
    },
    compoundVariants: [
      {
        isDisabled: true,
        isSelected: true,
        className: "s-bg-gray-200",
      },
      {
        isDisabled: true,
        isIndeterminate: true,
        className: "s-bg-gray-200",
      },
      {
        isDisabled: true,
        isIndeterminate: false,
        isSelected: false,
        className: "s-bg-gray-50",
      },
      {
        isIndeterminate: true,
        isDisabled: false,
        className: "s-border-blue-500 s-bg-blue-500",
      },
      {
        isSelected: true,
        isDisabled: false,
        className: "s-border-blue-500 s-bg-blue-500",
      },
      {
        isSelected: false,
        isIndeterminate: false,
        isDisabled: false,
        className: "s-border-gray-200",
      },
      {
        isHovered: true,
        isIndeterminate: false,
        isSelected: false,
        isDisabled: false,
        className: "s-border-gray-300",
      },
    ],
  },
);

export const Checkbox: FC<ICheckbox> = forwardRef<HTMLInputElement, ICheckbox>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = checkboxClasses({ className, isDisabled });

  return (
    <BaseCheckbox ref={ref} {...rest} className={classes}>
      {({ isIndeterminate, isSelected, isHovered, isFocused }) => (
        <>
          <div className={checkClasses({ isSelected, isIndeterminate, isHovered, isDisabled, isFocused })}>
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="s-text-white s-w-2 s-h-2 s-fill-none s-stroke-current"
              strokeWidth="4px"
              strokeDasharray="22px"
              strokeDashoffset="66"
            >
              {isIndeterminate ? <rect x={1} y={7.5} width={15} height={3} /> : <polyline points="1 9 7 14 15 4" />}
            </svg>
          </div>
          {children}
        </>
      )}
    </BaseCheckbox>
  );
});

Checkbox.defaultProps = {
  children: "Checkbox",
  isDisabled: false,
};
