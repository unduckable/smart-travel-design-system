import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, ReactNode, forwardRef } from "react";
import {
  Button,
  OverlayArrow,
  Tooltip as BaseTooltip,
  TooltipProps as BaseTooltipProps,
  TooltipTrigger,
  TooltipTriggerComponentProps,
} from "react-aria-components";

const tooltipClasses = cva(
  ["st-tooltip s-flex", "s-py-2 s-px-3.5 s-bg-gray-900 s-text-white-900 s-text-xs s-rounded-md"],
  {
    variants: {
      isDisabled: {
        true: "s-opacity-50 s-pointer-events-none",
      },
      placement: {
        top: "s-mb-3",
        "top left": "s-mb-3",
        "top right": "s-mb-3",
        bottom: "s-mt-3",
        "bottom left": "s-mt-3",
        "bottom right": "s-mt-3",
        left: "s-mr-3",
        right: "s-ml-3",
      },
    },
  },
);

const arrowClasses = cva([], {
  variants: {
    placement: {
      top: "",
      "top left": "",
      "top right": "",
      bottom: "s-rotate-180",
      "bottom left": "s-rotate-180",
      "bottom right": "s-rotate-180",
      left: "-s-rotate-90 -s-ml-2",
      right: "s-rotate-90 -s-mr-2",
    },
  },
});

export interface ITooltip extends VariantProps<typeof tooltipClasses>, TooltipTriggerComponentProps, TestProps {
  className?: string;
  children: ReactNode;
  content?: ReactNode;
  contentProps?: Omit<BaseTooltipProps, "children" | "placement">;
}

export const Tooltip: FC<ITooltip> = forwardRef<HTMLInputElement, ITooltip>((props, ref) => {
  const { children, className, content, contentProps, isDisabled, placement, ...rest } = props;
  const classes = tooltipClasses({ className, isDisabled, placement });

  return (
    <TooltipTrigger isDisabled={isDisabled} {...rest}>
      {/* TODO: Find a way to avoid wrapping trigger inside React Aria Button */}
      <Button className="s-flex s-cursor-default">{children}</Button>
      <BaseTooltip ref={ref} placement={placement} {...contentProps} className={classes}>
        <OverlayArrow>
          <svg width="24" height="8" viewBox="0 0 24 8" fill="currentColor" className={arrowClasses({ placement })}>
            <path
              d="M0.832284 0H23.379C19.1366 0 14.8943 4.53165 13.055 6.77361C12.5938 7.33581 11.6697 7.30068 11.2421 6.71249C9.59782 4.45039 5.73929 0 0.832284 0Z"
              fill="#121217"
            />
          </svg>
        </OverlayArrow>
        {content}
      </BaseTooltip>
    </TooltipTrigger>
  );
});

Tooltip.defaultProps = {
  isDisabled: false,
  placement: "top",
  content: "This is a tooltip",
  contentProps: {},
};
