import { Icon } from "@/src";
import User from "@/src/icons/User";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";

export interface IAvatar extends VariantProps<typeof avatarClasses>, TestProps {
  className?: string;
  initial?: string;
  status?: boolean;
  notification?: boolean;
  image?: string;
}

const avatarClasses = cva(
  ["st-avatar", "s-relative", "s-flex", "s-items-center", "s-justify-center", "s-text-white-900", "s-rounded-full"],
  {
    variants: {
      type: {
        image: "",
        initial: "",
        placeholder: "s-bg-gray-100 dark:s-bg-white-900 dark:s-bg-opacity-10",
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
  },
);

const dotClasses = cva(
  [
    "st-avatar-dot",
    "s-absolute",
    "s-border-2",
    "s-border-white-900",
    "s-right-[-2px]",
    "s-rounded-full",
    "s-box-content",
    "s-z-10",
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

const initialClasses = cva(["st-avatar-initial", "s-text-white-900", "s-leading-6"], {
  variants: {
    size: {
      xs: "s-text-xs",
      sm: "s-text-sm",
      md: "s-text-base",
      lg: "s-text-lg",
      xl: "s-text-xl",
      "2xl": "s-text-2xl",
    },
  },
});

const iconClasses = cva(["st-avatar-placeholder", "s-text-gray-400"]);

export const Avatar: FC<IAvatar> = forwardRef<HTMLDivElement, IAvatar>((props, ref) => {
  const { className, type, initial, status, notification, size, image } = props;

  const classes = avatarClasses({ className, type, size });
  const statusClasses = dotClasses({
    size,
    className: "st-avatar-status s-bg-green-500 s-bottom-[-2px]",
  });
  const notificationClasses = dotClasses({
    size,
    className: "st-avatar-notification s-bg-red-500 s-top-[-2px]",
  });
  const imageClasses = "s-avatar-image s-w-full s-h-full s-rounded-full s-object-cover";

  return (
    <div ref={ref} className={classes}>
      {status && <span className={statusClasses} />}
      {type === "initial" && <span className={initialClasses({ size })}>{initial}</span>}
      {type === "placeholder" && <Icon size={size} source={User} className={iconClasses()} />}
      {type === "image" && <img src={image} className={imageClasses} alt="avatar" />}
      {notification && <span className={notificationClasses} />}
    </div>
  );
});

Avatar.defaultProps = {
  type: "initial",
  size: "md",
  status: false,
  notification: false,
  initial: "A",
  image: "",
};
