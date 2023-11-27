import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { TabList as BaseTabList, TabListProps as BaseTabListProps } from "react-aria-components";

const tabListClasses = cva(["st-tab-list", "s-flex s-space-x-1 s-border-b-2 s-border-gray-400"], {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

export interface ITabList extends VariantProps<typeof tabListClasses>, BaseTabListProps<object>, TestProps {}

export const TabList: FC<ITabList> = forwardRef<HTMLDivElement, ITabList>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = tabListClasses({ className, isDisabled });

  return (
    <BaseTabList ref={ref} {...rest} className={classes}>
      {children}
    </BaseTabList>
  );
});

TabList.defaultProps = {};
