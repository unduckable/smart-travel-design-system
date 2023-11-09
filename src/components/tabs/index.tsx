import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Tabs as BaseTabs, TabsProps as BaseTabsProps } from "react-aria-components";

const tabsClasses = cva(["st-tabs"], {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

export interface ITabs extends VariantProps<typeof tabsClasses>, BaseTabsProps, TestProps {}

export const Tabs: FC<ITabs> = forwardRef<HTMLDivElement, ITabs>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = tabsClasses({ className, isDisabled });

  return (
    <BaseTabs ref={ref} {...rest} className={classes}>
      {children}
    </BaseTabs>
  );
});

Tabs.defaultProps = {};
