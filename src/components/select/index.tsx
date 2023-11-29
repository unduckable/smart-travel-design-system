// label;
// helpText;
// required;
// tooltip;
// isDisabled;
// multi;
// items: id, content, helpText, image, icon;
// inlineItemHelpText;
// placeholder;

import { Checkbox, Icon } from "@/src";
import Check from "@/src/icons/Check";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover } from "react-aria-components";
import type { ComboBoxProps, ListBoxProps, PopoverProps } from "react-aria-components";

export interface ISelectItem {
  id: string;
  content: string;
  helpText?: string;
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
  multi?: boolean;
  inlineItemHelpText?: boolean;
  placeholder?: string;
  helpText?: string;
}

const selectListBoxClasses = cva([
  "st-select-listbox",
  "s-bg-white-900",
  "s-py-2",
  "s-rounded-md",
  "s-border",
  "s-border-gray-100",
  "s-outline-none",
  "s-overflow-hidden",
]);

const selectListboxItemContentClasses = cva(
  ["s-flex s-items-center s-gap-2 s-p-4 hover:s-bg-gray-50 hover:s-cursor-pointer"],
  {
    variants: {
      isSelected: {
        true: "s-bg-gray-50",
      },
      multi: {
        false: "s-justify-between",
      },
    },
  },
);

export const Select: FC<ISelect<ISelectItem>> = forwardRef<HTMLDivElement, ISelect<ISelectItem>>((props, ref) => {
  const {
    label,
    tooltip,
    inlineItemHelpText,
    placeholder,
    helpText,
    className,
    isOpen,
    items,
    multi,
    isDisabled,
    selectedKeys,
    defaultSelectedKeys,
    onSelectionChange,
    ...rest
  } = props;

  return (
    // <ComboBox {...rest}>
    //   <Label>Favorite Animal</Label>
    //   <div>
    //     <Input />
    //     <Button>▼</Button>
    //   </div>
    //   <Popover className="s-min-w-[--trigger-width]" ref={ref} isOpen>
    //     <ListBox
    //       items={items}
    //       className={selectListBoxClasses()}
    //       // selectionMode={multi ? "multiple" : "single"}
    //       selectionMode="multiple"
    //       onSelectionChange={(v) => console.log(123, v)}
    //       selectedKeys={selectedKeys}
    //       defaultSelectedKeys={defaultSelectedKeys}
    //     >
    //       {(item) => (
    //         <ListBoxItem
    //           id={item.id}
    //           textValue={item.content}
    //           className="st-select-listbox-item"
    //         >
    //           {({ isSelected }) => {
    //             return (
    //               <div
    //                 className={selectListboxItemContentClasses({
    //                   isSelected,
    //                   multi,
    //                 })}
    //               >
    //                 {multi && (
    //                   <Checkbox
    //                     isSelected={isSelected}
    //                     className="s-pointer-events-none"
    //                   />
    //                 )}
    //                 <div className="s-flex s-gap-2 s-items-center">
    //                   {item.image && (
    //                     <img
    //                       className="s-w-6 s-h-6 s-rounded-full"
    //                       src={item.image}
    //                       alt={item.content}
    //                     />
    //                   )}
    //                   <div>
    //                     <p className="s-text-gray-900 s-text-sm s-font-medium">
    //                       {item.content}
    //                     </p>
    //                     {item.helpText && (
    //                       <p className="s-text-gray-500 s-text-xs s-font-base">
    //                         {item.helpText}
    //                       </p>
    //                     )}
    //                   </div>
    //                   {item.addOn && (
    //                     <span className="s-text-gray-500 s-text-xs s-font-base">
    //                       {item.addOn}
    //                     </span>
    //                   )}
    //                 </div>
    //                 {isSelected && !multi && (
    //                   <div className="s-text-blue-500">
    //                     <Icon source={Check} />
    //                   </div>
    //                 )}
    //               </div>
    //             );
    //           }}
    //         </ListBoxItem>
    //       )}
    //     </ListBox>
    //   </Popover>
    // </ComboBox>

    <ListBox
      items={items}
      className={selectListBoxClasses()}
      // selectionMode={multi ? "multiple" : "single"}
      selectionMode="multiple"
      onSelectionChange={(v) => console.log(123, v)}
      selectedKeys={selectedKeys}
      defaultSelectedKeys={defaultSelectedKeys}
    >
      {(item) => (
        <ListBoxItem id={item.id} textValue={item.content} className="st-select-listbox-item">
          {({ isSelected }) => {
            return (
              <div
                className={selectListboxItemContentClasses({
                  isSelected,
                  multi,
                })}
              >
                {multi && <Checkbox isSelected={isSelected} className="s-pointer-events-none" />}
                <div className="s-flex s-gap-2 s-items-center">
                  {item.image && <img className="s-w-6 s-h-6 s-rounded-full" src={item.image} alt={item.content} />}
                  <div>
                    <p className="s-text-gray-900 s-text-sm s-font-medium">{item.content}</p>
                    {item.helpText && <p className="s-text-gray-500 s-text-xs s-font-base">{item.helpText}</p>}
                  </div>
                  {item.addOn && <span className="s-text-gray-500 s-text-xs s-font-base">{item.addOn}</span>}
                </div>
                {isSelected && !multi && (
                  <div className="s-text-blue-500">
                    <Icon source={Check} />
                  </div>
                )}
              </div>
            );
          }}
        </ListBoxItem>
      )}
    </ListBox>
  );
});

Select.defaultProps = {
  multi: true,
  items: [],
};
