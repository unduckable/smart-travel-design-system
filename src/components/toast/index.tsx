import Close from "@/src/icons/Close";
import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, ReactNode, forwardRef } from "react";
import { Group } from "react-aria-components";
import { Button } from "../button";
import { Icon } from "../icon";

export interface IToast extends VariantProps<typeof classes>, TestProps {
  children?: string | ReactNode;
  className?: string;
  action?: string | ReactNode;
  onClose?: () => void;
  onAction?: () => void;
}

const classes = cva([
  "st-snackbar",
  "s-flex s-items-center s-h-12  s-bg-gray-900 s-rounded-lg s-text-white-900 s-text-sm",
  "dark:s-bg-gray-50 dark:s-text-gray-900",
]);

export const Toast: FC<IToast> = forwardRef((props, ref) => {
  const { className, action, children, onClose, onAction } = props;
  return (
    <Group className={classes({ className })}>
      <p className="s-m-0 s-flex-1 s-p-3 s-pl-4">{children}</p>
      {action && (
        <Button
          intent="tertiary"
          size="small"
          className="s-text-blue-500 s-outline-0 dark:s-text-blue-400 [&]:s-h-12"
          onPress={onAction}
        >
          {action}
        </Button>
      )}
      <Button
        intent="tertiary"
        size="small"
        isSquare
        className="s-outline-0 dark:s-text-gray-400 [&]:s-h-12"
        onPress={onClose}
      >
        <Icon source={Close} />
      </Button>
    </Group>
  );
});

Toast.defaultProps = {
  children: "Snackbar content",
};
