// label;
// helpText;
// required;
// tooltip;
// isDisabled;
// multi;
// items: id, content, helpText, image, icon;
// inlineItemHelpText;
// placeholder;

import { TestProps } from "@/src/utils";
import { FC, forwardRef } from "react";
import { Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover } from "react-aria-components";
import type { ComboBoxProps } from "react-aria-components";

export interface ISelectItem {
  id: string;
  content: string;
  helpText?: string;
  image?: string;
  addOn?: string;
  icon?: FC;
}

export interface ISelect<T = ISelectItem> extends Omit<ComboBoxProps<ISelectItem>, "items">, TestProps {
  items: T[];
  label?: string;
  required?: boolean;
  tooltip?: string;
  multi?: boolean;
  inlineItemHelpText?: boolean;
  // placeholder?: string;
  // helpText?: string;
  // isDisabled?: boolean;
}

export const Select: FC<ISelect> = forwardRef<HTMLDivElement, ISelect>((props, ref) => {
  // let { triggerElement = null, children, className, items } = props;
  const { items } = props;

  return (
    <ComboBox>
      <Label>Favorite Animal</Label>
      <div>
        <Input />
        <Button>▼</Button>
      </div>
      <Popover>
        <ListBox items={items}>
          {(item) => (
            <ListBoxItem id={item.id} textValue={item.content}>
              <div>
                {item.image && <img src={item.image} alt={item.content} />}
                <span>{item.content}</span>
                {item.addOn && <span>{item.addOn}</span>}
              </div>
              {item.helpText && <p>{item.helpText}</p>}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </ComboBox>
  );
});
