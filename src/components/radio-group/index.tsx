import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import {
  Label,
  RadioGroup as BaseRadioGroup,
  RadioGroupProps as BaseRadioGroupProps,
  Text,
} from "react-aria-components";

const radioGroupClasses = cva(["st-radio-group s-inline-flex s-flex-col s-gap-2"], {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

export interface ITagGroup extends VariantProps<typeof radioGroupClasses>, BaseRadioGroupProps, TestProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  items?: Iterable<object>[];
}

export const RadioGroup: FC<ITagGroup> = forwardRef<HTMLDivElement, ITagGroup>((props, ref) => {
  const { children, className, isDisabled, isRequired, label, description, errorMessage, items, ...rest } = props;
  const classes = radioGroupClasses({ className, isDisabled });

  return (
    <BaseRadioGroup ref={ref} {...rest} className={classes}>
      <Label>
        {label}{" "}
        {isRequired ? <span className="s-text-red-500">*</span> : <span className="s-text-gray-300">(optional)</span>}
      </Label>
      <>
        {children}
        {description && <Text slot="description">{description}</Text>}
        {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
      </>
    </BaseRadioGroup>
  );
});

RadioGroup.defaultProps = {
  label: "Tag group",
  items: [],
  errorMessage: "",
  description: "",
};
