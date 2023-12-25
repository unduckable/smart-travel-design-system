import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Tab as BaseTab, TabProps as BaseTabProps } from "react-aria-components";

const tabClasses = cva(
  [
    "st-tab",
    "s-min-w-[40px] s-py-3 s-text-sm s-text-center s-cursor-default s-ring-black s-outline-none s-transition-colors s-border-b-2 s-border-transparent",
    "hover:s-border-gray-100 selected:s-border-blue-500 selected:s-text-blue-500 focus-visible:s-ring-2",
    "dark:s-border-none dark:s-text-white-800",
    "dark:selected:s-border-solid dark:selected:s-border-blue-400 dark:selected:s-text-blue-400",
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
