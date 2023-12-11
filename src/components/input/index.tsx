import ChevronDown from "@/src/icons/ChevronDown";
import Information from "@/src/icons/Information";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, ReactNode, forwardRef, useState } from "react";
import {
  FieldError,
  Group,
  Input as BaseInput,
  Label,
  Text,
  TextField,
  TextFieldProps as BaseTextFieldProps,
} from "react-aria-components";
import { Button, IButton } from "../button";
import { Dropdown, IDropdown, IDropdownItem } from "../dropdown";
import { IIcon, Icon } from "../icon";
import { Tooltip } from "../tooltip";

export interface IInput extends VariantProps<typeof inputWrapperClasses>, BaseTextFieldProps, TestProps {
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  helperText?: string;
  tooltip?: string;
  prefixAddon?: string;
  suffixAddon?: string;
  prefixIcon?: Omit<IIcon, "size">;
  suffixIcon?: Omit<IIcon, "size">;
  buttonAddon?: Omit<IButton, "intent" | "className" | "isDisabled">;
  isRequired?: boolean;
  isExternal?: boolean;
  prefixSelect?: Omit<IDropdown<IDropdownItem>, "className" | "triggerElement">;
  suffixSelect?: Omit<IDropdown<IDropdownItem>, "className" | "triggerElement">;
}

const inputWrapperClasses = cva(["st-textfield"], {
  variants: {
    isDisabled: {
      true: "[&_*]:s-cursor-not-allowed s-text-disabled",
    },
  },
});

const innerInputClasses = cva(
  "s-flex s-w-full s-h-10 s-items-center s-p-2 s-border-[1px] s-outline-offset-0 s-outline-none",
  {
    variants: {
      isExternal: {
        true: "",
        false: "s-rounded-l-md",
      },
      hasButtonAddon: {
        true: "",
        false: "s-rounded-r-md",
      },
      isInvalid: {
        true: "s-border-invalid focus-within:s-outline-invalid focus-within:s-outline-1 focus-within:s-border-invalid",
        false:
          "s-border-gray-200 focus-within:s-outline-blue-500 focus-within:s-outline-1 focus-within:s-border-blue-500",
      },
      isDisabled: {
        true: "s-text-disabled [&]:s-border-gray-200",
      },
    },
    compoundVariants: [
      {
        isExternal: true,
        isInvalid: false,
        className: "s-border-l-gray-100",
      },
      {
        hasButtonAddon: true,
        isInvalid: false,
        className: "s-border-r-gray-100",
      },
    ],
  },
);

const iconClasses = cva(["s-text-gray-200"], {
  variants: {
    inheritColor: {
      true: "s-text-current",
    },
    position: {
      prefix: "s-ml-1",
      suffix: "s-mr-1",
    },
  },
});

export const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const {
    children,
    className,
    isDisabled,
    label,
    helperText,
    placeholder,
    errorMessage,
    tooltip,
    isExternal,
    isInvalid,
    isRequired,
    prefixAddon,
    suffixAddon,
    prefixIcon,
    suffixIcon,
    prefixSelect,
    suffixSelect,
    buttonAddon,
    ...rest
  } = props;
  const classes = inputWrapperClasses({ className, isDisabled });

  const [selectedPrefixItem, setSelectedPrefixItem] = useState(prefixSelect?.items[0].id);
  const [selectedSuffixItem, setSelectedSuffixItem] = useState(suffixSelect?.items[0].id);

  return (
    <TextField ref={ref} {...rest} className={classes} isInvalid={isInvalid} isDisabled={isDisabled}>
      {({ isInvalid }) => (
        <>
          <Label className="s-flex s-items-center s-text-sm s-gap-1">
            <span className="s-text-gray-900">{label} </span>
            {isRequired ? (
              <span className="s-text-red-500">*</span>
            ) : (
              <span className=" s-text-gray-500">(optional)</span>
            )}
            {!!tooltip && (
              <Tooltip content={tooltip}>
                <Icon source={Information} className="s-text-gray-200" />
              </Tooltip>
            )}
          </Label>

          <div className="s-mt-2 s-flex s-items-center">
            {isExternal && (
              <p className="s-h-10 s-text-gray-500 s-text-sm s-py-2.5 s-px-4 s-border-[1px] s-rounded-l-md s-border-r-0 s-border-gray-200">
                https://
              </p>
            )}
            <Group className={innerInputClasses({ isExternal, isInvalid, isDisabled, hasButtonAddon: !!buttonAddon })}>
              {!isExternal && prefixSelect && (
                <Dropdown
                  {...prefixSelect}
                  // isDisabled={isDisabled}
                  className="s-mr-2"
                  selectedKeys={[selectedPrefixItem]}
                  triggerElement={
                    <Button
                      intent="tertiary"
                      className="s-outline-0 s-h-6 s-ml-2 [&]:s-gap-0 [&]:s-p-0"
                      suffixIcon={ChevronDown}
                    >
                      {prefixSelect.items.find((item) => item.id === selectedPrefixItem)?.content}
                    </Button>
                  }
                  onAction={(item) => setSelectedPrefixItem(item)}
                />
              )}
              {!isExternal && prefixAddon && <p className="s-text-sm s-px-2">{prefixAddon}</p>}
              {!isExternal && prefixIcon && (
                <Icon
                  {...prefixIcon}
                  className={iconClasses({ className: prefixIcon.className, position: "prefix" })}
                  size="md"
                />
              )}
              <BaseInput
                className={`s-flex-1 s-outline-0 s-px-2 s-py-0.5 s-text-sm ${
                  isDisabled ? "s-text-disabled placeholder:s-gray-200" : "placeholder:s-gray-500"
                }`}
                placeholder={placeholder}
              />
              {suffixIcon && (
                <Icon
                  {...suffixIcon}
                  className={iconClasses({ className: suffixIcon.className, position: "suffix" })}
                  size="md"
                />
              )}
              {suffixAddon && <p className="s-text-sm s-px-2">{suffixAddon}</p>}
              {suffixSelect && (
                <Dropdown
                  {...suffixSelect}
                  // isDisabled={isDisabled}
                  className="s-mr-2"
                  selectedKeys={[selectedSuffixItem]}
                  triggerElement={
                    <Button
                      intent="tertiary"
                      className="s-outline-0 s-h-6 s-ml-2 [&]:s-gap-0 [&]:s-p-0"
                      suffixIcon={ChevronDown}
                    >
                      {suffixSelect.items.find((item) => item.id === selectedSuffixItem)?.content}
                    </Button>
                  }
                  onAction={(item) => setSelectedSuffixItem(item)}
                />
              )}
            </Group>
            {buttonAddon && (
              <Button
                {...buttonAddon}
                intent="tertiary"
                className="s-outline-0 s-opacity-100 [&]:s-gap-0 [&]:s-px-2 s-border-[1px] s-border-l-0 [&]:s-border-gray-200 [&]:s-rounded-l-none"
                isDisabled={isDisabled}
              />
            )}
          </div>

          {isInvalid && !errorMessage ? (
            <FieldError className="s-mt-2 s-text-red-500 s-text-sm" />
          ) : isInvalid && errorMessage ? (
            <FieldError className="s-mt-2 s-text-red-500 s-text-sm">{errorMessage}</FieldError>
          ) : (
            <Text slot="description" className="s-mt-2 s-text-gray-500 s-text-sm">
              {helperText}
            </Text>
          )}
        </>
      )}
    </TextField>
  );
});

Input.defaultProps = {
  label: "Label",
  placeholder: "",
  tooltip: "",
  helperText: "",
  prefixAddon: "",
  suffixAddon: "",
  prefixSelect: null,
  suffixSelect: null,
  prefixIcon: null,
  suffixIcon: null,
  buttonAddon: null,
  isExternal: false,
  isRequired: false,
  isInvalid: false,
};