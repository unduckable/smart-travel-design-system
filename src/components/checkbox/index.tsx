import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Checkbox as BaseCheckbox, CheckboxProps as BaseCheckboxProps } from "react-aria-components";
import "./index.css";

export interface ICheckbox extends VariantProps<typeof checkboxClasses>, BaseCheckboxProps, TestProps {}

const checkboxClasses = cva("st-checkbox s-flex s-items-center", {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
  compoundVariants: [],
});

export const Checkbox: FC<ICheckbox> = forwardRef<HTMLInputElement, ICheckbox>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = checkboxClasses({ className, isDisabled });

  return (
    <BaseCheckbox ref={ref} {...rest} className={classes}>
      {({ isIndeterminate }) => (
        <>
          <div className="s-w-4 s-h-4 s-mr-2 s-border-2 s-border-deselected-color s-rounded-4 s-transition-all-200 s-flex s-items-center s-justify-center">
            <svg viewBox="0 0 18 18" aria-hidden="true" className="s-text-blue-500">
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
};
