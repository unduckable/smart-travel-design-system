import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Button } from "react-aria-components";
import { Icon } from "../icon";

export interface INavItems {
  icon: FC;
  label: string;
  id: string;
}

export interface INavigationBar extends TestProps {
  className?: string;
  items: INavItems[];
  activeItem?: INavItems["id"];
  onChange?: (id: INavItems["id"]) => void;
}

const navClasses = cva("s-flex s-justify-between s-border-t-[1px] s-border-gray-200 s-pt-2");

const navigationItemClasses = cva("s-flex-1 s-flex s-flex-col s-items-center s-outline-none", {
  variants: {
    isActive: {
      true: "s-text-blue-500",
      false: "s-text-gray-500",
    },
  },
});

export const NavigationBar: FC<INavigationBar> = forwardRef<HTMLDivElement, INavigationBar>((props, ref) => {
  const { activeItem, items, className, onChange } = props;
  return (
    <footer className={navClasses({ className })} ref={ref}>
      {items.map((item) => {
        return (
          <Button
            key={item.label}
            className={navigationItemClasses({
              isActive: activeItem === item.id,
            })}
            onPress={() => onChange(item.id)}
          >
            <Icon source={item.icon} inheritColor className={activeItem === item.id ? "" : "s-text-gray-400"} />
            <span className="s-text-[10px]">{item.label}</span>
          </Button>
        );
      })}
    </footer>
  );
});

NavigationBar.defaultProps = {
  activeItem: "",
  items: [],
  onChange: () => {},
};
