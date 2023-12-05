import Check from "@/src/icons/Check";
import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ReactElement, ReactNode, forwardRef } from "react";
import { Group } from "react-aria-components";
import { Button } from "../button";

export interface IStepper extends VariantProps<typeof stepperClasses>, TestProps {
  className?: string;
  children?: string | ReactNode | ((step: number) => ReactElement);
  activeStep?: number;
  steps?: string[];
  allowClick?: boolean;
  onChange?: (step: number) => void;
}

const stepperClasses = cva(["st-stepper s-inline-flex"], {
  variants: {
    orientation: {
      horizontal: "s-flex-row",
      vertical: "s-flex-col",
    },
  },
});

const stepClasses = cva(["s-m-0.5 focus:s-outline-0"], {
  variants: {
    allowClick: {
      true: "s-cursor-pointer",
      false: "s-pointer-events-none",
    },
    isInProgress: {
      true: "s-outline-none s-outline-blue-500 hover:s-outline-blue-600",
    },
    isActive: {
      true: "s-bg-blue-500 s-text-white hover:s-bg-blue-500",
      false: "s-bg-gray-200 s-border-gray-200 hover:s-bg-gray-200 hover:s-border-gray-200",
    },
  },
});

const lineClasses = cva("", {
  variants: {
    orientation: {
      horizontal: "s-w-full s-h-0.5",
      vertical: "s-min-h-[26px] s-flex-1 s-w-0.5",
    },
    isVisible: {
      false: "s-bg-transparent",
    },
    isActive: {
      true: "",
    },
  },
  compoundVariants: [
    {
      isVisible: true,
      isActive: true,
      className: "s-bg-blue-500",
    },
    {
      isVisible: true,
      isActive: false,
      className: "s-bg-gray-200",
    },
  ],
});

export const Stepper: React.FC<IStepper> = forwardRef<HTMLDivElement, IStepper>((props, ref) => {
  const { className, children, steps, activeStep, allowClick, orientation, onChange, ...rest } = props;

  const isHorizontal = orientation === "horizontal";

  return (
    <Group ref={ref} className={stepperClasses({ className, orientation })} {...rest}>
      {steps.map((step, index) => (
        <div key={index} className={`s-flex ${isHorizontal ? "s-flex-1 s-flex-col s-items-center" : ""}`}>
          <div className={`s-flex s-items-center ${isHorizontal ? "s-w-full" : "s-flex-col s-mr-2"}`}>
            {isHorizontal && (
              <div
                className={lineClasses({
                  isVisible: index > 0,
                  isActive: index <= activeStep,
                  orientation,
                })}
              />
            )}
            <Button
              isIconOnly={true || index < activeStep}
              prefixIcon={index < activeStep ? Check : undefined}
              intent="primary"
              size="small"
              shape="pill"
              className={stepClasses({
                isActive: index <= activeStep,
                isInProgress: activeStep === index,
                allowClick,
              })}
              onPress={() => onChange(index)}
            >
              {index < activeStep ? "" : index + 1}
            </Button>
            <div
              className={lineClasses({
                isVisible: index < steps.length - 1,
                isActive: index <= activeStep,
                orientation,
              })}
            />
          </div>
          <div>
            <p className="s-my-2 s-font-medium s-text-sm">{step}</p>
            {!isHorizontal && (typeof children === "function" ? children(index) : children)}
          </div>
        </div>
      ))}
    </Group>
  );
});

Stepper.defaultProps = {
  orientation: "horizontal",
  steps: [],
  activeStep: 0,
  allowClick: false,
  onChange: () => {},
};
