import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Label, Switch as BaseSwitch, SwitchProps as BaseSwitchProps } from "react-aria-components";

export interface ISwitch extends VariantProps<typeof switchClasses>, BaseSwitchProps, TestProps {}

const switchClasses = cva(
  ["st-switch", "s-group s-inline-flex s-gap-2 s-items-center s-text-black s-font-semibold s-text-lg"],
  {
    variants: {
      isDisabled: {
        true: "s-opacity-50 s-pointer-events-none",
      },
    },
  },
);

export const Switch: FC<ISwitch> = forwardRef<HTMLInputElement, ISwitch>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = switchClasses({ className, isDisabled });

  return (
    <BaseSwitch ref={ref} {...rest} className={classes}>
      <>
        <div className="s-flex s-h-[26px] s-w-[44px] s-shrink-0 s-cursor-default s-rounded-full s-shadow-inner s-bg-clip-padding s-border s-border-solid s-border-white/30 s-p-[3px] s-box-border s-transition s-duration-200 s-ease-in-out s-bg-gray-500 group-pressed:s-bg-gray-600 group-selected:s-bg-blue-500 group-selected:group-pressed:s-bg-blue-600 s-outline-none group-focus-visible:ring-2 s-ring-black">
          <span className="s-h-[18px] s-w-[18px] s-transform s-rounded-full s-bg-white s-shadow s-transition s-duration-200 s-ease-in-out s-translate-x-0 group-selected:s-translate-x-[100%]" />
        </div>
        {children}
      </>
    </BaseSwitch>
  );
});

Switch.defaultProps = {};
