import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";

export interface IAvatar extends VariantProps<typeof avatarClasses>, TestProps {
  className?: string;
  type?: "initial" | "image" | "placeholder";
  initial?: string;
  status?: boolean;
  notification?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

const avatarClasses = cva(["st-avatar", "s-relative", "s-text-white-900", "s-rounded-full"], {
  variants: {
    type: {
      image: "",
      initial: "",
      placeholder: "s-bg-gray-100",
    },
    size: {
      xs: "s-w-6 s-h-6",
      sm: "s-w-8 s-h-8",
      md: "s-w-10 s-h-10",
      lg: "s-w-12 s-h-12",
      xl: "s-w-14 s-h-14",
      "2xl": "s-w-16 s-h-16",
    },
  },
  compoundVariants: [
    {
      type: "initial",
      size: "xs",
      className: "s-bg-blue-500",
    },
    {
      type: "initial",
      size: "sm",
      className: "s-bg-pink-500",
    },
    {
      type: "initial",
      size: "md",
      className: "s-bg-orange-500",
    },
    {
      type: "initial",
      size: "lg",
      className: "s-bg-green-500",
    },
    {
      type: "initial",
      size: "xl",
      className: "s-bg-yellow-500",
    },
    {
      type: "initial",
      size: "2xl",
      className: "s-bg-red-500",
    },
  ],
});

const dotClasses = cva(
  [
    "st-avatar-dot",
    "s-absolute",
    "s-border-2",
    "s-border-white-900",
    "s-right-[-2px]",
    "s-rounded-full",
    "s-box-content",
  ],
  {
    variants: {
      size: {
        xs: "s-w-[6px] s-h-[6px]",
        sm: "s-w-[8px] s-h-[8px]",
        md: "s-w-[10px] s-h-[10px]",
        lg: "s-w-[12px] s-h-[12px]",
        xl: "s-w-[14px] s-h-[14px]",
        "2xl": "s-w-[16px] s-h-[16px]",
      },
    },
  },
);

export const Avatar: FC<IAvatar> = forwardRef<HTMLDivElement, IAvatar>((props, ref) => {
  const { className, type, initial, status, notification, size } = props;
  const classes = avatarClasses({
    className,
    type,
    size,
  });

  return (
    <div ref={ref} className={classes}>
      {status && (
        <span
          className={dotClasses({
            size,
            className: "st-avatar-status s-bg-green-500 s-bottom-[-2px]",
          })}
        />
      )}
      {notification && (
        <span
          className={dotClasses({
            size,
            className: "st-avatar-notification s-bg-red-500 s-top-[-2px]",
          })}
        />
      )}
    </div>
  );
});

Avatar.defaultProps = {
  type: "initial",
  size: "md",
  status: true,
  notification: true,
  initial: "A",
};
