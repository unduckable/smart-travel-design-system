import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Tag as BaseTag, TagProps as BaseTagProps } from "react-aria-components";
import { Button } from "../button";

const tagClasses = cva(
  [
    "st-tag s-text-base s-text-gray-800 s-rounded-lg s-border-gray-500 s-border-2 s-p-1 s-outline-none",
    "hover:s-border-gray-400 selected:s-bg-gray-500 selected:s-text-white",
  ],
  {
    variants: {
      isDisabled: {
        true: "s-opacity-50 s-pointer-events-none",
      },
    },
  },
);

export interface ITag extends VariantProps<typeof tagClasses>, BaseTagProps, TestProps {}

export const Tag: FC<ITag> = forwardRef<HTMLInputElement, ITag>((props, ref) => {
  const { children, className, isDisabled, ...rest } = props;
  const classes = tagClasses({ className, isDisabled });
  const textValue = typeof children === "string" ? children : "";

  return (
    <BaseTag textValue={textValue} ref={ref} {...rest} className={classes}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && <Button slot="remove">ⓧ</Button>}
        </>
      )}
    </BaseTag>
  );
});

Tag.defaultProps = {
  children: "Tag",
};
