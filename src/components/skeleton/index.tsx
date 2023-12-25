import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, forwardRef } from "react";

export interface ISkeleton extends VariantProps<typeof loaderClasses>, TestProps {
  className?: string;
}

const loaderClasses = cva("st-loader s-rounded-md s-bg-gray-50 dark:s-bg-loader s-animate-pulse", {
  variants: {
    type: {
      rectangle: "s-w-8 s-h-8",
      text: "s-w-full",
    },
    size: {
      small: "",
      medium: "",
    },
  },
  compoundVariants: [
    {
      type: "text",
      size: "small",
      className: "s-h-[9px]",
    },
    {
      type: "text",
      size: "medium",
      className: "s-h-[18px]",
    },
  ],
});

export const Skeleton: FC<ISkeleton> = forwardRef<HTMLDivElement, ISkeleton>((props, ref) => {
  const { className, type, size } = props;
  return <div className={loaderClasses({ className, type, size })} ref={ref} />;
});

Skeleton.defaultProps = {
  type: "text",
  size: "medium",
};
