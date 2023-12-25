import Close from "@/src/icons/Close";
import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, ReactNode, forwardRef } from "react";
import { Group } from "react-aria-components";
import { Button } from "../button";
import { Icon } from "../icon";

export interface ISnackbar extends VariantProps<typeof snackbarClasses>, TestProps {
  children?: string | ReactNode;
  className?: string;
  action?: string | ReactNode;
  onClose?: () => void;
  onAction?: () => void;
}

const snackbarClasses = cva([
  "st-snackbar",
  "s-flex s-items-center s-h-12  s-bg-gray-900 s-rounded-lg s-text-white-900 s-text-sm",
  "dark:s-bg-gray-50 dark:s-text-gray-900",
]);

export const Snackbar: FC<ISnackbar> = forwardRef((props, ref) => {
  const { className, action, children, onClose, onAction } = props;
  return (
    <Group className={snackbarClasses({ className })}>
      <p className="s-flex-1 s-m-0 s-p-3 s-pl-4">{children}</p>
      {action && (
        <Button
          intent="tertiary"
          size="small"
          className="s-text-blue-500 [&]:s-h-12 s-outline-0 dark:s-text-blue-400"
          onPress={onAction}
        >
          {action}
        </Button>
      )}
      <Button
        intent="tertiary"
        size="small"
        isSquare
        className="[&]:s-h-12 s-outline-0 dark:s-text-gray-400"
        onPress={onClose}
      >
        <Icon source={Close} />
      </Button>
    </Group>
  );
});

Snackbar.defaultProps = {
  children: "Snackbar content",
};
