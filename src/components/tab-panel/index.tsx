import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { TabPanel as BaseTabPanel, TabPanelProps as BaseTabPanelProps } from "react-aria-components";

const tabPanelClasses = cva(["st-tab-panel", "s-mt-2 s-p-2"], {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

export interface ITabPanel extends VariantProps<typeof tabPanelClasses>, BaseTabPanelProps, TestProps {}

export const TabPanel: FC<ITabPanel> = forwardRef<HTMLDivElement, ITabPanel>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = tabPanelClasses({ className, isDisabled });

  return (
    <BaseTabPanel ref={ref} {...rest} className={classes}>
      {children}
    </BaseTabPanel>
  );
});

TabPanel.defaultProps = {};
