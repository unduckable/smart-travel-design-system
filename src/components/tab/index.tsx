import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Tab as BaseTab, TabProps as BaseTabProps } from "react-aria-components";

const tabClasses = cva(
  [
    "st-tab",
    "s-px-4 s-text-center s-cursor-default s-ring-black s-outline-none s-transition-colors focus-visible:s-ring-2 selected:s-border-b-2",
    "selected:s-border-b-4 selected:s-border-blue-500 selected:s-text-blue-500",
  ],
  {
    variants: {
      isDisabled: {
        true: "s-opacity-50 s-pointer-events-none",
      },
    },
  },
);

export interface ITab extends VariantProps<typeof tabClasses>, BaseTabProps, TestProps {}

export const Tab: FC<ITab> = forwardRef<HTMLDivElement, ITab>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = tabClasses({ className, isDisabled });

  return (
    <BaseTab ref={ref} {...rest} className={classes}>
      {children}
    </BaseTab>
  );
});

Tab.defaultProps = {};
