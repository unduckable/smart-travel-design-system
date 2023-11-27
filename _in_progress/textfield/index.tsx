import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Input, Label, TextField as BaseTextField, TextFieldProps as BaseTextFieldProps } from "react-aria-components";

export interface ITextField extends VariantProps<typeof checkboxClasses>, BaseTextFieldProps, TestProps {
  label?: string;
  placeholder?: string;
}

const checkboxClasses = cva(["st-textfield s-inline-flex s-flex-col"], {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

export const TextField: FC<ITextField> = forwardRef<HTMLInputElement, ITextField>((props, ref) => {
  const { children, className, isDisabled, label, placeholder, ...rest } = props;
  const classes = checkboxClasses({ className, isDisabled });

  return (
    <BaseTextField ref={ref} {...rest} className={classes}>
      <Label className="s-text-sm">{label}</Label>
      <Input className="s-border-2 s-border-blue-500 s-rounded-md s-p-1" placeholder={placeholder} />
    </BaseTextField>
  );
});

TextField.defaultProps = {
  label: "",
  placeholder: "",
};
