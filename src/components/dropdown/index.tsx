import { TestProps } from "@/src/utils";
import { Children, FC, ReactNode, forwardRef, isValidElement } from "react";
import { Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";

import type { MenuItemProps, MenuProps, MenuTriggerProps } from "react-aria-components";

import { Button } from "@/src";
import { cva } from "class-variance-authority";

export interface IDropdownItem {
  id: string;
  content: string;
  separation?: boolean;
}

export interface IDropdown<T = IDropdownItem>
  extends Omit<MenuTriggerProps, "children">,
    Omit<MenuProps<T>, "items">,
    TestProps {
  triggerElement: ReactNode;
  items: T[];
}

const dropdownClasses = cva([
  "st-dropdown",
  "s-py-2",
  "s-rounded-md",
  "s-bg-white-900",
  "s-shadow-xs",
  "s-border",
  "s-border-gray-100",
  "s-outline-none",
  "s-overflow-hidden",
]);
const dropdownItemClasses = cva([
  "st-dropdown-item",
  "st-dropdown-item s-p-2 s-text-gray-900 s-font-normal s-text-sm s-leading-5",
  "s-outline-none",
  "hover:s-bg-gray-50 hover:s-cursor-pointer",
]);

export const Dropdown: FC<IDropdown> = forwardRef<HTMLDivElement, IDropdown>((props, ref) => {
  let { triggerElement = null, children, className, items } = props;

  const isButtonAsTrigger = isValidElement(triggerElement) && triggerElement.type === Button;
  triggerElement = isButtonAsTrigger ? triggerElement : null;
  const classes = dropdownClasses({ className });

  return (
    <MenuTrigger {...props}>
      {triggerElement}
      <Popover className="s-w-[--trigger-width]">
        <Menu {...props} ref={ref} className={classes}>
          {(item) => {
            if (item.separation) {
              return <div className="st-dropdown-separation" />;
            }

            return (
              <MenuItem className={dropdownItemClasses()} id={item.id}>
                {item.content}
              </MenuItem>
            );
          }}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
});

Dropdown.defaultProps = {
  items: [],
};
