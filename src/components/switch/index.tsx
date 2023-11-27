import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Label, Switch as BaseSwitch, SwitchProps as BaseSwitchProps } from "react-aria-components";

export interface ISwitch extends VariantProps<typeof switchWrapperClasses>, BaseSwitchProps, TestProps {}

const switchWrapperClasses = cva(
  ["st-switch", "s-group s-inline-flex s-gap-2 s-items-center s-text-black s-font-semibold s-text-lg"],
  {
    variants: {
      isDisabled: {
        true: "s-pointer-events-none s-text-disabled",
      },
    },
  },
);
const switchClasses = cva(
  [
    "s-flex s-w-7 s-cursor-pointer s-rounded-full s-p-0.5 s-transition s-duration-200 s-ease-in-out s-outline-none",
    "group-hover:s-bg-gray-300 group-focus:s-outline-2 group-focus:s-outline-blue-600",
  ],
  {
    variants: {
      isDisabled: {
        true: "s-bg-gray-100",
        false: "s-bg-gray-200 group-selected:s-bg-blue-500 group-selected:group-hover:s-bg-blue-600",
      },
    },
  },
);

export const Switch: FC<ISwitch> = forwardRef<HTMLInputElement, ISwitch>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = switchClasses({ className, isDisabled });
  const wrapperClasses = switchWrapperClasses({ isDisabled });

  return (
    <BaseSwitch ref={ref} {...rest} className={wrapperClasses}>
      <>
        <div className={classes}>
          <span className="s-h-3 s-w-3 s-transform s-rounded-full s-bg-white-900 s-shadow s-transition s-duration-200 s-ease-in-out s-translate-x-0 group-selected:s-translate-x-[100%]" />
        </div>
        {children}
      </>
    </BaseSwitch>
  );
});

Switch.defaultProps = {
  isDisabled: false,
};
