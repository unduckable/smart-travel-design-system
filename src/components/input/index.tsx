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

type OmittedTextFieldProps = "onCompositionEnd" | "onCompositionStart" | "onCompositionUpdate";

export interface IInput
  extends VariantProps<typeof inputWrapperClasses>,
    Omit<BaseTextFieldProps, OmittedTextFieldProps>,
    TestProps {
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
  /**
   * Whether to hide the labels above the input
   */
  hideLabel?: boolean;
}

const inputWrapperClasses = cva(["st-textfield"], {
  variants: {
    isDisabled: {
      true: "[&_*]:s-cursor-not-allowed s-text-disabled",
      false: "dark:s-text-[rgba(255,255,255,0.8)]",
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
          "s-border-gray-200 dark:s-border-white-900 dark:s-border-opacity-20 focus-within:s-outline-blue-500 focus-within:s-outline-1 focus-within:s-border-blue-500",
      },
      isDisabled: {
        true: "s-text-disabled [&]:s-border-gray-200",
      },
    },
    compoundVariants: [
      {
        isExternal: true,
        isInvalid: false,
        className: "s-border-l-gray-100 dark:s-border-l-white-900 dark:s-border-opacity-20",
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
    hideLabel,
    ...rest
  } = props;
  const [selectedPrefixItem, setSelectedPrefixItem] = useState(prefixSelect?.items[0].id);
  const [selectedSuffixItem, setSelectedSuffixItem] = useState(suffixSelect?.items[0].id);

  return (
    <TextField
      ref={ref}
      {...rest}
      className={inputWrapperClasses({ className, isDisabled })}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
    >
      {({ isInvalid }) => (
        <>
          {!hideLabel && (
            <Label className="s-flex s-items-center s-gap-1 s-text-sm">
              <span className="s-text-gray-900 dark:s-text-white-900">{label} </span>
              {isRequired ? (
                <span className="s-text-red-500">*</span>
              ) : (
                <span className="s-text-gray-500 dark:s-text-white-900 dark:s-opacity-50">(optional)</span>
              )}
              {!!tooltip && (
                <Tooltip content={tooltip}>
                  <Icon source={Information} className="s-text-gray-200 dark:s-text-white-900 dark:s-opacity-30" />
                </Tooltip>
              )}
            </Label>
          )}

          <div className="s-mt-2 s-flex s-items-center">
            {isExternal && (
              <p className="s-h-10 s-rounded-l-md s-border-[1px] s-border-r-0 s-border-gray-200 s-px-4 s-py-2.5 s-text-sm s-text-gray-500 dark:s-border-white-900 dark:s-border-opacity-20">
                https://
              </p>
            )}
            <Group className={innerInputClasses({ isExternal, isInvalid, isDisabled, hasButtonAddon: !!buttonAddon })}>
              {!isExternal && prefixSelect && (
                <Dropdown
                  {...prefixSelect}
                  className="s-mr-2"
                  selectedKeys={[selectedPrefixItem]}
                  triggerElement={
                    <Button
                      intent="tertiary"
                      className="s-ml-2 s-h-6 s-outline-0 [&]:s-gap-0 [&]:s-p-0"
                      suffixIcon={ChevronDown}
                    >
                      {prefixSelect.items.find((item) => item.id === selectedPrefixItem)?.content}
                    </Button>
                  }
                  onAction={(item) => setSelectedPrefixItem(item)}
                />
              )}
              {!isExternal && prefixAddon && <p className="s-px-2 s-text-sm">{prefixAddon}</p>}
              {!isExternal && prefixIcon && (
                <Icon
                  {...prefixIcon}
                  className={iconClasses({ className: prefixIcon.className, position: "prefix" })}
                  size="md"
                />
              )}
              <BaseInput
                className={`s-flex-1 s-outline-0 s-px-2 s-py-0.5 s-text-sm s-bg-transparent ${
                  isDisabled
                    ? "s-text-disabled placeholder:s-gray-200 dark:placeholder:s-text-white-900 dark:placeholder:s-opacity-30"
                    : "placeholder:s-gray-500"
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
              {suffixAddon && <p className="s-px-2 s-text-sm">{suffixAddon}</p>}
              {suffixSelect && (
                <Dropdown
                  {...suffixSelect}
                  className="s-mr-2"
                  selectedKeys={[selectedSuffixItem]}
                  triggerElement={
                    <Button
                      intent="tertiary"
                      className="s-ml-2 s-h-6 s-outline-0 [&]:s-gap-0 [&]:s-p-0"
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
                className="s-border-[1px] s-border-l-0 s-opacity-100 s-outline-0 dark:s-border-white-900 dark:s-border-opacity-20 [&]:s-gap-0 [&]:s-rounded-l-none [&]:s-border-gray-200 [&]:s-px-2"
                isDisabled={isDisabled}
              />
            )}
          </div>

          {isInvalid && !errorMessage ? (
            <FieldError className="s-mt-2 s-text-sm s-text-red-500" />
          ) : isInvalid && errorMessage ? (
            <FieldError className="s-mt-2 s-text-sm s-text-red-500">{errorMessage}</FieldError>
          ) : (
            <Text slot="description" className="s-mt-2 s-text-sm s-text-gray-500">
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
  hideLabel: false,
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
  isDisabled: false,
};
