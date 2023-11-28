import { Avatar } from "@/src";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { Children, FC, ReactElement, ReactNode, cloneElement, forwardRef, isValidElement } from "react";

export interface IAvatarGroup extends VariantProps<typeof avatarGroupClasses>, TestProps {
  className?: string;
  max?: number;
  children: ReactNode;
  // size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

const avatarGroupClasses = cva(
  [
    "st-avatar-group",
    "s-flex",
    "[&>*]:s-box-content",
    "[&>*]:s-border-2",
    "[&>*]:s-border-white-900",
    "[&>*:first-child]:s-ml-[-2px]",
  ],
  {
    variants: {
      size: {
        xs: "[&>*:not(:first-child)]:s-ml-[-10px]",
        sm: "[&>*:not(:first-child)]:s-ml-[-12px]",
        md: "[&>*:not(:first-child)]:s-ml-[-14px]",
        lg: "[&>*:not(:first-child)]:s-ml-[-16px]",
        xl: "[&>*:not(:first-child)]:s-ml-[-18px]",
        "2xl": "[&>*:not(:first-child)]:s-ml-[-20px]",
      },
    },
  },
);

const gapClasses = cva(
  [
    "st-avatar-group-gap",
    "s-relative",
    "s-bg-gray-200",
    "s-rounded-full",
    "s-flex",
    "s-items-center",
    "s-justify-center",
    "s-leading-6",
    "s-text-white-900",
  ],
  {
    variants: {
      size: {
        xs: "s-w-6 s-h-6 s-text-xs",
        sm: "s-w-8 s-h-8 s-text-sm",
        md: "s-w-10 s-h-10 s-text-base",
        lg: "s-w-12 s-h-12 s-text-lg",
        xl: "s-w-14 s-h-14 s-text-xl",
        "2xl": "s-w-16 s-h-16 s-text-2xl",
      },
    },
  },
);

export const AvatarGroup: FC<IAvatarGroup> = forwardRef<HTMLDivElement, IAvatarGroup>((props, ref) => {
  const { max, children, className, size } = props;
  const classes = avatarGroupClasses({ className, size });

  let arrayOfFilteredChildren = Children.toArray(children)
    .filter((c) => isValidElement(c) && c.type === Avatar)
    .map((c: ReactElement) => cloneElement(c, { status: false, notification: false, size }));
  const gap = arrayOfFilteredChildren.length - max;

  if (gap > 0) {
    arrayOfFilteredChildren = arrayOfFilteredChildren.slice(0, max);
  }

  return (
    <div ref={ref} className={classes}>
      {arrayOfFilteredChildren}
      {gap > 0 && <span className={gapClasses({ size })}>+{gap}</span>}
    </div>
  );
});

AvatarGroup.defaultProps = {
  max: 5,
  size: "md",
};
