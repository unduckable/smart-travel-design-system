import Information from "@/src/icons/Information";
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
import { Icon } from "../icon";
import { Tooltip } from "../tooltip";

const radioGroupClasses = cva(["st-radio-group s-inline-flex s-flex-col s-gap-2"], {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

export interface IRadioGroup
  extends VariantProps<typeof radioGroupClasses>,
    Omit<BaseRadioGroupProps, "orientation">,
    TestProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  tooltip?: string;
}

export const RadioGroup: FC<IRadioGroup> = forwardRef<HTMLDivElement, IRadioGroup>((props, ref) => {
  const { children, className, isDisabled, isRequired, label, description, errorMessage, tooltip, ...rest } = props;
  const classes = radioGroupClasses({ className, isDisabled });

  return (
    <BaseRadioGroup ref={ref} {...rest} className={classes}>
      <Label className="s-flex s-gap-1 dark:s-text-white-900">
        {label}
        {isRequired ? <span className="s-text-red-500"> *</span> : <span className="s-text-gray-300"> (optional)</span>}
        {!!tooltip && (
          <Tooltip content={tooltip}>
            <Icon source={Information} className="s-text-gray-200 dark:s-text-white-900 dark:s-opacity-30" />
          </Tooltip>
        )}
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
  errorMessage: "",
  description: "",
};
