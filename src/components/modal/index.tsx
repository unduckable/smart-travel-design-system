import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { AnimatePresence, animate, motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import React, { FC, ReactNode, forwardRef } from "react";
import { Modal as BaseModal, ModalOverlay, ModalOverlayProps as BaseModalProps } from "react-aria-components";

const MotionModal = motion(BaseModal);
const MotionModalOverlay = motion(ModalOverlay);

const inertiaTransition = {
  type: "inertia" as const,
  bounceStiffness: 300,
  bounceDamping: 40,
  timeConstant: 300,
};

const staticTransition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
};

const SHEET_MARGIN = 34;

export interface IModal extends VariantProps<typeof modalClasses>, Omit<BaseModalProps, "children">, TestProps {
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  onOpenChange: (isOpen: boolean) => void;
}

const modalClasses = cva("st-modal", {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

export const Modal: FC<IModal> = forwardRef<HTMLDialogElement, IModal>((props, ref) => {
  const { children, isOpen, onClose, onOpenChange } = props;
  const h = window.innerHeight - SHEET_MARGIN;
  const y = useMotionValue(h);
  const bgOpacity = useTransform(y, [0, h], [0.4, 0]);
  const bg = useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`;

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionModalOverlay
          isOpen
          onOpenChange={onOpenChange}
          className="s-fixed s-inset-0 s-z-10"
          style={{ backgroundColor: bg as unknown as string }}
        >
          <MotionModal
            ref={ref}
            className="s-bg-white-900 s-h-[150vh] s-pb-[calc(50vh+34px)] s-absolute s-bottom-0 s-w-full s-rounded-t-md s-shadow-lg s-will-change-transform"
            initial={{ y: h }}
            animate={{ y: 0 }}
            exit={{ y: h }}
            transition={staticTransition}
            style={{ y, top: SHEET_MARGIN }}
            drag="y"
            dragConstraints={{ top: 0 }}
            onDragEnd={(_, { offset, velocity }) => {
              if (offset.y > window.innerHeight * 0.75 || velocity.y > 10) {
                onClose();
              } else {
                animate(y, 0, { ...inertiaTransition, min: 0, max: 0 });
              }
            }}
          >
            {children}
          </MotionModal>
        </MotionModalOverlay>
      )}
    </AnimatePresence>
  );
});

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onOpenChange: () => {},
};
