import AirplayToTv from "@/src/icons/AirplayToTv";
import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, forwardRef } from "react";

export interface IIcon extends VariantProps<typeof iconClasses>, TestProps {
  source?: FC;
  className?: string;
  inheritColor?: boolean;
}

const iconClasses = cva(["st-icon", "s-flex", "s-w-6", "s-h-6", "s-text-current"]);

export const Icon: FC<IIcon> = forwardRef<HTMLSpanElement, IIcon>((props, ref) => {
  const { source, className } = props;
  const Component = source;
  const classes = iconClasses({ className });

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
};
