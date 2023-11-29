import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Group } from "react-aria-components";
import { Button, IButton } from "../button";

export interface IButtonGroup extends VariantProps<typeof btnGroupClasses>, TestProps {
  buttonsProps: Omit<IButton, "intent" | "size" | "isDestructive" | "shape">[];
  className?: string;
}

const btnGroupClasses = cva(["st-button-group s-inline-flex s-border s-rounded-md"], {
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

export const ButtonGroup: FC<IButtonGroup> = forwardRef<HTMLDivElement, IButtonGroup>((props, ref) => {
  const { buttonsProps, className, isDisabled, size, ...rest } = props;
  const classes = btnGroupClasses({ className, isDisabled });

  return (
    <Group ref={ref} {...rest} className={classes} isDisabled={isDisabled}>
      {buttonsProps.map((buttonProps, index) => (
        <Button key={index} {...buttonProps} intent="tertiary" shape="rectangle" size={size} isDestructive={false} />
      ))}
    </Group>
  );
});

ButtonGroup.defaultProps = {
  size: "medium",
  isDisabled: false,
  buttonsProps: [],
};
