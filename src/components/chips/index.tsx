import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Group } from "react-aria-components";
import { Button, IButton } from "../button";

export interface IChips extends VariantProps<typeof btnGroupClasses>, TestProps {
  buttonsProps: Omit<IButton, "intent" | "size" | "isDestructive" | "shape">[];
  className?: string;
}

const btnGroupClasses = cva(["st-chips s-gap-4 s-inline-flex s-rounded-md"], {
  variants: {
    size: {
      medium: "",
      small: "",
    },
    isDisabled: {
      true: "s-pointer-events-none s-opacity-50",
    },
  },
});

export const Chips: FC<IChips> = forwardRef<HTMLDivElement, IChips>((props, ref) => {
  const { buttonsProps, className, isDisabled, size, ...rest } = props;
  const classes = btnGroupClasses({ className, isDisabled });

  return (
    <Group ref={ref} {...rest} className={classes} isDisabled={isDisabled}>
      {buttonsProps.map((buttonProps, index) => (
        <Button
          key={index}
          shape="pill"
          {...buttonProps}
          intent="secondary-outline"
          size={size}
          isDestructive={false}
        />
      ))}
    </Group>
  );
});

Chips.defaultProps = {
  size: "medium",
  isDisabled: false,
  buttonsProps: [],
};
