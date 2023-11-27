import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import {
  Label,
  Slider as BaseSlider,
  SliderOutput,
  SliderProps as BaseSliderProps,
  SliderThumb,
  SliderTrack,
} from "react-aria-components";
import { SliderState } from "react-stately";

export interface ISlider extends VariantProps<typeof sliderClasses>, BaseSliderProps, TestProps {
  label?: string;
}

const sliderClasses = cva(["st-slider"], {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

export const Slider: FC<ISlider> = forwardRef<HTMLInputElement, ISlider>((props, ref) => {
  const { children, className, isDisabled, label, ...rest } = props;
  const classes = sliderClasses({ className, isDisabled });

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

  return (
    <BaseSlider ref={ref} {...rest} className={classes}>
      <div className="s-flex">
        <Label className="s-flex-1">{label}</Label>
        <SliderOutput>
          {({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")}
        </SliderOutput>
      </div>
      <SliderTrack className="s-relative s-w-full s-h-7">
        {({ state }) => (
          <>
            <div className="s-absolute s-h-1 s-top-[50%] s-translate-y-[-50%] s-w-full s-rounded-3xl s-bg-blue-300/40" />
            <div
              className="s-absolute s-h-1 s-top-[50%] s-translate-y-[-50%] s-rounded-3xl s-bg-blue-500"
              style={getProgressStyle(state)}
            />
            {state.values.map((_, i) => (
              <SliderThumb
                key={i}
                index={i}
                className="s-h-4 s-w-4 s-top-[50%] s-rounded-3xl s-border s-border-solid s-border-blue-800/75 s-bg-white-900 s-transition s-dragging:bg-purple-100 s-outline-none s-focus-visible:ring-2 s-ring-black"
              />
            ))}
          </>
        )}
      </SliderTrack>
    </BaseSlider>
  );
});

Slider.defaultProps = {
  label: "",
};
