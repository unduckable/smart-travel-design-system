import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import {
  Button,
  Group,
  Input,
  Label,
  NumberField as BaseNumberField,
  NumberFieldProps as BaseNumberFieldProps,
} from "react-aria-components";

export interface INumberField extends VariantProps<typeof numberClasses>, BaseNumberFieldProps, TestProps {
  label?: string;
  placeholder?: string;
}

const numberClasses = cva(["st-number"], {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

export const NumberField: FC<INumberField> = forwardRef<HTMLInputElement, INumberField>((props, ref) => {
  const { className, isDisabled, label, placeholder, ...rest } = props;
  const classes = numberClasses({ className, isDisabled });

  return (
    <BaseNumberField ref={ref} {...rest} className={classes}>
      <Label>{label}</Label>
      <Group>
        <Button
          slot="decrement"
          className="s-border-2 s-border-gray-400 s-border-r-0 s-rounded-bl-md s-rounded-tl-md s-px-2"
        >
          -
        </Button>
        <Input placeholder={placeholder} className="s-border-2 s-px-2 s-w-20 s-border-gray-400 s-outline-none" />
        <Button
          slot="increment"
          className="s-border-2 s-border-gray-400 s-border-l-0 s-rounded-br-md s-rounded-tr-md s-px-2"
        >
          +
        </Button>
      </Group>
    </BaseNumberField>
  );
});

NumberField.defaultProps = {
  defaultValue: 0,
  label: "",
  placeholder: "",
};
