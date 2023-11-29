import Information from "@/src/icons/Information";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import {
  Button,
  FieldError,
  Label,
  Text,
  TextArea as BaseTextArea,
  TextField as BaseTextField,
  TextFieldProps as BaseTextFieldProps,
} from "react-aria-components";
import { Icon } from "../icon";
import { Tooltip } from "../tooltip";

export interface ITextArea extends VariantProps<typeof textareaClasses>, BaseTextFieldProps, TestProps {
  label?: string;
  placeholder?: string;
  tooltip?: string;
  isRequired?: boolean;
  helperText?: string;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

const textareaClasses = cva(["st-textarea s-inline-flex s-flex-col"], {
  variants: {
    isDisabled: {
      true: "s-cursor-not-allowed",
    },
  },
});

const inputClasses = cva(["s-mt-2 s-py-3 s-px-4 s-text-sm s-border-2 s-rounded-md s-outline-none s-p-1"], {
  variants: {
    resize: {
      none: "s-resize-none",
      vertical: "s-resize-y",
      horizontal: "s-resize-x",
      both: "s-resize",
    },
    isDisabled: {
      true: "s-cursor-not-allowed s-text-disabled placeholder:s-text-disabled",
      false: "s-text-gray-900 placeholder:s-text-gray-500",
    },
    isInvalid: {
      true: "s-border-red-500 focus:s-shadow-invalid",
    },
  },
  compoundVariants: [
    {
      isInvalid: false,
      isDisabled: false,
      className: "s-border-gray-200 hover:s-border-gray-300 focus:s-border-blue-500",
    },
  ],
});

export const TextArea: FC<ITextArea> = forwardRef<HTMLInputElement, ITextArea>((props, ref) => {
  const { children, className, helperText, isDisabled, isRequired, label, placeholder, resize, tooltip, ...rest } =
    props;
  const classes = textareaClasses({ className, isDisabled });

  return (
    <BaseTextField ref={ref} {...rest} isRequired={isRequired} isDisabled={isDisabled} className={classes}>
      {({ isInvalid, isDisabled }) => (
        <>
          <Label className="s-flex s-gap-1 s-items-center s-text-sm s-text-gray-900">
            {label}
            {isRequired ? (
              <span className="s-text-red-500">*</span>
            ) : (
              <span className="s-text-gray-500"> (optional)</span>
            )}
            <Tooltip content={tooltip}>
              <Icon source={<Information />} className="s-text-gray-200" />
            </Tooltip>
          </Label>
          <BaseTextArea className={inputClasses({ isDisabled, isInvalid, resize })} placeholder={placeholder} />
          {isInvalid ? (
            <FieldError className="s-mt-2 s-text-red-500 s-text-sm" />
          ) : (
            <Text slot="description" className="s-mt-2 s-text-gray-500 s-text-sm">
              {helperText}
            </Text>
          )}
        </>
      )}
    </BaseTextField>
  );
});

TextArea.defaultProps = {
  label: "Label",
  resize: "none",
  placeholder: "Placeholder",
  tooltip: "Tooltip",
  helperText: "",
  isDisabled: false,
};
