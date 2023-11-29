import { Icon } from "@/src";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, ReactElement, ReactNode, cloneElement, forwardRef, isValidElement } from "react";
import { Link as BaseLink, LinkProps as BaseLinkProps } from "react-aria-components";

export interface ILink extends VariantProps<typeof linkClasses>, BaseLinkProps, TestProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
  children?: ReactNode;
}

const linkClasses = cva(
  ["st-link", "s-inline-flex", "s-items-center", "s-align-middle", "s-outline-none", "hover:s-cursor-pointer"],
  {
    variants: {
      size: {
        sm: "s-h-5 s-text-sm",
        md: "s-h-6 s-text-sm",
      },
      color: {
        gray: "s-text-gray-500 hover:s-text-gray-600 focus:s-text-500 disabled:s-text-gray-300",
        blue: "s-text-blue-500 hover:s-text-blue-600 focus:s-text-500 disabled:s-text-blue-300",
        pink: "s-text-pink-500 hover:s-text-pink-600 focus:s-text-500 disabled:s-text-pink-300",
        red: "s-text-red-500 hover:s-text-red-600 focus:s-text-500 disabled:s-text-red-300",
        yellow: "s-text-yellow-500 hover:s-text-yellow-600 focus:s-text-500 disabled:s-text-yellow-300",
        green: "s-text-green-500 hover:s-text-green-600 focus:s-text-500 disabled:s-text-green-300",
        orange: "s-text-orange-500 hover:s-text-orange-600 focus:s-text-500 disabled:s-text-orange-300",
        white: "s-text-white hover:s-text-white-600 focus:s-text-500 disabled:s-text-white-300",
      },
      isDisabled: {
        true: "s-cursor-not-allowed s-opacity-50",
      },
    },
  },
);

export const Link: FC<ILink> = forwardRef<HTMLAnchorElement, ILink>((props, ref) => {
  const { children, className, isDisabled, size, color, prefix, suffix, ...rest } = props;

  const prefixElement =
    isValidElement(prefix) && prefix.type === Icon
      ? cloneElement(prefix as ReactElement, { className: "s-mr-2", size })
      : null;

  const suffixElement =
    isValidElement(suffix) && suffix.type === Icon
      ? cloneElement(suffix as ReactElement, { className: "s-ml-2", size })
      : null;

  const classes = linkClasses({
    isDisabled,
    size,
    className,
    color,
  });

  return (
    <BaseLink ref={ref} {...rest} className={classes} isDisabled={isDisabled}>
      {prefixElement}
      {children}
      {suffixElement}
    </BaseLink>
  );
});

Link.defaultProps = {
  children: "",
  size: "md",
  isDisabled: false,
  color: "blue",
};
