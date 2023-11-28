import Message from "@/src/icons/Message";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React, { FC, ReactNode, forwardRef } from "react";
import { Dialog as BaseDialog, Modal, ModalOverlay, ModalOverlayProps as BaseModalProps } from "react-aria-components";
import { Button } from "../button";
import { Icon } from "../icon";

export interface IDialog extends VariantProps<typeof dialogClasses>, Omit<BaseModalProps, "children">, TestProps {
  isOpen?: boolean;
  icon?: React.ReactElement;
  description?: string | ReactNode;
  title?: string | ReactNode;
  isDestructive?: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const dialogClasses = cva(["st-dialog", "s-rounded-md s-bg-white-900 s-p-6 s-min-w-[295px] s-max-w-[520px]"]);

export const Dialog: FC<IDialog> = forwardRef<HTMLDivElement, IDialog>((props, ref) => {
  const { className, isOpen, icon, description, title, isDestructive, onConfirm, onCancel, onOpenChange, ...rest } =
    props;
  const classes = dialogClasses({ className });

  return (
    <ModalOverlay
      ref={ref}
      {...rest}
      isOpen={isOpen}
      className="s-fixed s-inset-0 s-z-10 s-bg-black/20 s-flex s-min-h-full s-items-center s-justify-center"
      onOpenChange={onOpenChange}
    >
      <Modal className={classes} onOpenChange={onOpenChange}>
        <BaseDialog role="alertdialog" className="s-outline-none s-relative">
          <Icon source={icon} inheritColor className="s-text-gray-400 s-w-[48px] s-h-[48px]" />
          <h2 className="s-mt-4 s-text-gray-900 s-text-lg s-font-bold">{title}</h2>
          <p className="s-mt-4 s-text-gray-900 s-text-sm">{description}</p>
          <div className="s-mt-6 s-flex s-justify-end s-gap-2">
            <Button className="s-w-full" intent="secondary-outline" onPress={onCancel}>
              Cancel
            </Button>
            <Button className="s-w-full" intent="primary" onPress={onConfirm} isDestructive={isDestructive}>
              Confirm
            </Button>
          </div>
        </BaseDialog>
      </Modal>
    </ModalOverlay>
  );
});

Dialog.defaultProps = {
  isOpen: false,
  icon: <Message />,
  title: "Title",
  description: "Description",
  isDestructive: false,
  isDismissable: true,
  onOpenChange: () => {},
  onConfirm: () => {},
  onCancel: () => {},
};
