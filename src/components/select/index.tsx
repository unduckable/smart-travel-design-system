import { Checkbox, Icon, Tooltip } from "@/src";
import Check from "@/src/icons/Check";
import ChevronDown from "@/src/icons/ChevronDown";
import Information from "@/src/icons/Information";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import { FC, forwardRef, useEffect, useRef, useState } from "react";
import { Button, ComboBox, FieldError, Input, Label, ListBox, ListBoxItem, Popover, Text } from "react-aria-components";
import type { ComboBoxProps, Key, ListBoxProps, PopoverProps, Selection } from "react-aria-components";

export interface ISelectItem {
  id: string;
  content: string;
  helperText?: string;
  image?: string;
  addOn?: string;
  icon?: FC;
}

export interface ISelect<T>
  extends Omit<ComboBoxProps<T & object>, "selectedKey" | "defaultSelectedKey" | "children" | "onSelectionChange">,
    Pick<PopoverProps, "isOpen">,
    Pick<ListBoxProps<T>, "selectedKeys" | "defaultSelectedKeys" | "onSelectionChange">,
    TestProps {
  label?: string;
  tooltip?: string;
  selectionMode?: "multiple" | "single";
  isRequired?: boolean;
  hideLabel?: boolean;
  prefixIcon?: FC;
  helperText?: string;
  placeholder?: string;
  errorMessage?: string;
}

const listBoxClasses = cva([
  "st-select-listbox",
  "s-bg-white-900 s-py-2 s-rounded-md s-border s-border-gray-100 s-outline-none s-overflow-hidden",
]);

const listboxItemClasses = cva(["s-flex s-gap-2 s-py-2 hover:s-bg-gray-50 hover:s-cursor-pointer"], {
  variants: {
    isSelected: {
      true: "s-bg-gray-50",
    },
    selectionMode: {
      multiple: "s-items-start s-px-3",
      single: "s-justify-between s-items-center s-px-4",
    },
  },
});

const inputWrapperClasses = cva(
  "s-mt-2 s-flex s-rounded-md s-border-[1px] s-border-gray-200 s-px-3 s-py-2 s-shadow-xs",
);

const inputClasses = cva(["s-px-2 s-flex-1 s-text-sm s-font-normal s-outline-none"], {
  variants: {
    isInvalid: {
      true: "s-border-invalid focus-within:s-outline-invalid focus-within:s-outline-1 focus-within:s-border-invalid",
      false:
        "s-border-gray-200 dark:s-border-white-200 focus-within:s-outline-blue-500 focus-within:s-outline-1 focus-within:s-border-blue-500",
    },
    isDisabled: {
      true: "s-text-disabled [&]:s-border-gray-200",
    },
  },
});

export const Select: FC<ISelect<ISelectItem>> = forwardRef<HTMLDivElement, ISelect<ISelectItem>>((props, ref) => {
  const {
    label,
    tooltip,
    placeholder,
    helperText,
    className,
    isOpen,
    items,
    isDisabled,
    isInvalid,
    selectedKeys,
    errorMessage,
    defaultSelectedKeys,
    selectionMode,
    hideLabel,
    isRequired,
    prefixIcon,
    onSelectionChange,
    ...rest
  } = props;

  const [selected, setSelected] = useState<Set<Key>>(new Set(defaultSelectedKeys));
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputWrapperRef = useRef(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectionChange = (key: Key) => {
    if (!key) return;

    if (selectionMode === "multiple") {
      const newSelected = new Set(selected);
      if (newSelected.has(key)) newSelected.delete(key);
      else newSelected.add(key);
      setSelected(newSelected);
    } else {
      setSelected(new Set([key]));
    }

    inputRef?.current.blur();
  };

  const handleFocusInput = () => {
    setIsInputFocused(true);
  };

  const handleBlurInput = () => {
    setInputValue("");
    setIsInputFocused(false);
  };

  useEffect(() => {
    if (isInputFocused || !selected.size) {
      setInputValue("");
      return;
    }

    const newInputValue =
      selectionMode === "multiple"
        ? `${selected.size} selected`
        : Array.from(items).find((item) => item.id === selected.values().next().value)?.content;
    setInputValue(newInputValue || "");
  }, [selected, selectionMode, items, isInputFocused]);

  const popoverClasses = () => {
    return prefixIcon ? "s-min-w-[calc(var(--trigger-width)+48px)]" : "s-min-w-[calc(var(--trigger-width)+24px)]";
  };

  return (
    <ComboBox {...rest} onSelectionChange={handleSelectionChange} menuTrigger="focus">
      {!hideLabel && (
        <Label className="s-flex s-items-center s-gap-1 s-text-sm">
          <span className="s-text-gray-900 dark:s-text-white-900">{label} </span>
          {isRequired ? (
            <span className="s-text-red-500">*</span>
          ) : (
            <span className="s-text-gray-500 dark:s-text-white-500">(optional)</span>
          )}
          {!!tooltip && (
            <Tooltip content={tooltip}>
              <Icon source={Information} className="s-text-gray-200 dark:s-text-white-300" />
            </Tooltip>
          )}
        </Label>
      )}

      <div className={inputWrapperClasses({ className })} ref={inputWrapperRef}>
        {prefixIcon && <Icon source={prefixIcon} className="s-text-gray-400" />}
        <Input
          ref={inputRef}
          value={inputValue}
          className={inputClasses({ isInvalid, isDisabled })}
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
        />
        <Button>
          <Icon source={ChevronDown} className="s-text-gray-400" />
        </Button>
      </div>

      {isInvalid && !errorMessage ? (
        <FieldError className="s-mt-2 s-text-sm s-text-red-500" />
      ) : isInvalid && errorMessage ? (
        <FieldError className="s-mt-2 s-text-sm s-text-red-500">{errorMessage}</FieldError>
      ) : (
        <Text slot="description" className="s-mt-2 s-text-xs s-font-normal s-text-gray-500">
          {helperText}
        </Text>
      )}

      <Popover className={popoverClasses()} ref={ref} triggerRef={inputWrapperRef} offset={8}>
        <ListBox
          key={[...selected].join(",") + selectionMode}
          className={listBoxClasses()}
          selectionMode={selectionMode}
          defaultSelectedKeys={defaultSelectedKeys}
          items={items}
        >
          {(item) => {
            const isSelected = selected.has(item.id);
            return (
              <ListBoxItem
                id={item.id}
                textValue={item.content}
                className={listboxItemClasses({
                  isSelected,
                  selectionMode,
                })}
              >
                {selectionMode === "multiple" && (
                  <Checkbox isSelected={isSelected} className="s-pointer-events-none s-p-1" />
                )}
                <div className="s-flex s-items-center s-gap-2">
                  {item.image && <img className="s-h-6 s-w-6 s-rounded-full" src={item.image} alt={item.content} />}
                  <div>
                    <p className="s-text-sm s-font-medium s-text-gray-900">{item.content}</p>
                    {item.helperText && <p className="s-text-xs s-text-gray-500">{item.helperText}</p>}
                  </div>
                  {item.addOn && <span className="s-font-base s-text-xs s-text-gray-500">{item.addOn}</span>}
                </div>
                {selectionMode === "single" && isSelected && (
                  <Icon source={Check} className="s-text-blue-500" size="sm" />
                )}
              </ListBoxItem>
            );
          }}
        </ListBox>
      </Popover>
    </ComboBox>
  );
});

Select.defaultProps = {
  items: [],
  selectionMode: "multiple",
  isRequired: false,
  isDisabled: false,
  errorMessage: "",
  defaultSelectedKeys: [],
};
