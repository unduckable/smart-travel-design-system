import Information from "@/src/icons/Information";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef, useState } from "react";
import {
  Label,
  Slider as BaseSlider,
  SliderProps as BaseSliderProps,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";
import { SliderState } from "react-stately";
import { Icon } from "../icon";
import { Tooltip } from "../tooltip";

export interface ISlider extends VariantProps<typeof sliderClasses>, Omit<BaseSliderProps, "orientation">, TestProps {
  label?: string;
  isRequired?: boolean;
  tooltip?: string;
  helperText?: string;
}

const sliderClasses = cva(["st-slider"], {
  variants: {
    isDisabled: {
      true: "s-pointer-events-none",
    },
  },
});

const valueClasses = cva(
  [
    "st-tooltip s-relative s-w-fit s-h-fit s-py-2 s-px-3.5 s-bg-gray-900 s-text-white-900 s-text-xs s-rounded-md",
    "s-left-1/2 -s-translate-x-1/2 s-bg-gray-800",
  ],
  {
    variants: {
      isDragging: {
        true: "-s-top-11",
        false: "-s-top-12",
      },
      isVisible: {
        true: "s-flex",
        false: "s-hidden",
      },
    },
  },
);

const thumbClasses = cva(
  [
    "s-top-1/2 s-rounded-full s-shadow-sm s-border-[1px] s-border-gray-100",
    "dark:s-border-white-900 dark:s-border-opacity-10",
  ],
  {
    variants: {
      isDragging: {
        true: "s-w-8 s-h-8",
        false: "s-w-6 s-h-6",
      },
      isDisabled: {
        true: "s-bg-gray-200 dark:s-bg-white-900 dark:s-bg-opacity-10",
        false: "s-bg-white-900 dark:s-bg-gray-900",
      },
    },
  },
);

const trackClasses = cva(["s-absolute s-h-0.5 s-top-1/2 s-translate-y-[-50%] s-rounded-full "], {
  variants: {
    isDisabled: {
      true: "s-bg-disabled dark:s-bg-white-900 dark:s-bg-opacity-30",
      false: "s-bg-blue-500",
    },
  },
});

export const Slider: FC<ISlider> = forwardRef<HTMLInputElement, ISlider>((props, ref) => {
  const { children, className, isDisabled, isRequired, label, tooltip, helperText, ...rest } = props;
  const classes = sliderClasses({ className, isDisabled });
  const [isValueVisible, setIsValueVisible] = useState({});

  const getProgressStyle = (state: SliderState) => {
    if (state.values.length > 1) {
      return {
        width: `${(state.getThumbPercent(1) - state.getThumbPercent(0)) * 100}%`,
        marginLeft: `${state.getThumbPercent(0) * 100}%`,
      };
    } else {
      return { width: `${state.getThumbPercent(0) * 100}%` };
    }
  };

  const handleChangeDragThumb = (i: number, isVisible) => {
    setIsValueVisible((prev) => ({ ...prev, [i]: isVisible }));
  };

  return (
    <BaseSlider ref={ref} {...rest} className={classes} isDisabled={isDisabled}>
      <Label className="s-flex s-items-center s-gap-1 s-text-sm">
        <span className="s-text-gray-900 dark:s-text-white-900">{label}</span>
        {isRequired ? (
          <span className="s-text-red-500">*</span>
        ) : (
          <span className="s-text-gray-300 dark:s-text-white-900 dark:s-opacity-50">(optional)</span>
        )}
        {!!tooltip && (
          <Tooltip content={tooltip}>
            <Icon source={Information} className="s-text-gray-200 dark:s-text-white-900 dark:s-opacity-30" />
          </Tooltip>
        )}
      </Label>
      <div className="s-w-full s-text-sm s-leading-none s-text-gray-500 dark:s-text-white-900 dark:s-opacity-50">
        {helperText}
      </div>
      <SliderTrack className="s-relative s-my-4 s-h-7 s-w-full">
        {({ state, isDisabled }) => (
          <>
            <div className="s-absolute s-top-1/2 s-h-0.5 s-w-full s-translate-y-[-50%] s-rounded-full s-bg-gray-200 dark:s-bg-white-900 dark:s-bg-opacity-20" />
            <div className={trackClasses({ isDisabled })} style={getProgressStyle(state)} />
            {state.values.map((value, i) => (
              <SliderThumb
                key={i}
                index={i}
                className={thumbClasses({ isDragging: state.isThumbDragging(i), isDisabled })}
                onHoverStart={() => handleChangeDragThumb(i, true)}
                onHoverEnd={() => handleChangeDragThumb(i, false)}
              >
                <div
                  className={valueClasses({
                    isVisible: isValueVisible[i] || state.isThumbDragging(i),
                    isDragging: state.isThumbDragging(i),
                  })}
                  data-placement="top"
                >
                  <div className="s-absolute s-left-1/2 s-top-full s-z-[100000] -s-translate-x-1/2 s-text-gray-900 dark:s-text-gray-800">
                    <svg width="24" height="8" viewBox="0 0 24 8" fill="currentColor">
                      <path
                        d="M0.832284 0H23.379C19.1366 0 14.8943 4.53165 13.055 6.77361C12.5938 7.33581 11.6697 7.30068 11.2421 6.71249C9.59782 4.45039 5.73929 0 0.832284 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  {state.getFormattedValue(value)}
                </div>
              </SliderThumb>
            ))}
          </>
        )}
      </SliderTrack>
    </BaseSlider>
  );
});

Slider.defaultProps = {
  label: "",
  tooltip: "",
  helperText: "",
  isRequired: false,
  isDisabled: false,
};
