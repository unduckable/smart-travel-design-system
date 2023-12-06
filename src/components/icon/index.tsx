import AirplayToTv from "@/src/icons/AirplayToTv";
import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, forwardRef } from "react";

export interface IIcon extends VariantProps<typeof iconClasses>, TestProps {
  source?: FC;
  className?: string;
  inheritColor?: boolean;
}

const iconClasses = cva(["st-icon", "s-flex", "s-text-current"], {
  variants: {
    size: {
      xs: "s-h-4 s-w-4",
      sm: "s-h-5 s-w-5",
      md: "s-h-6 s-w-6",
      lg: "s-h-7 s-w-7",
      xl: "s-h-8 s-w-8",
      "2xl": "s-w-10",
    },
  },
});

export const Icon: FC<IIcon> = forwardRef<HTMLSpanElement, IIcon>((props, ref) => {
  const { source, className, size } = props;
  const Component = source;
  const classes = iconClasses({ className, size });

  if (!source) return null;

  return (
    <span className={classes} ref={ref}>
      <Component />
    </span>
  );
});

Icon.defaultProps = {
  source: AirplayToTv,
  inheritColor: true,
  size: "md",
};
