import { Button, IButton, Icon, Link } from "@/src";
import Close from "@/src/icons/Close";
import Information from "@/src/icons/Information";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";

export interface IAlertAction {
  content?: string;
  action?: () => void;
}

export interface IAlert extends VariantProps<typeof alertClasses>, TestProps {
  className?: string;
  title?: string;
  content?: string;
  visible?: boolean;
  onDismiss?: () => void;
  primaryAction?: IAlertAction;
  secondaryAction?: IAlertAction;
}

const alertClasses = cva(["st-alert", "s-p-3", "s-flex", "s-gap-1", "s-relative"], {
  variants: {
    type: {
      inline: "s-rounded-md",
      expanded: "",
    },
    color: {
      gray: "s-bg-gray-50",
      blue: "s-bg-blue-50",
      green: "s-bg-green-50",
      yellow: "s-bg-yellow-50",
      red: "s-bg-red-50",
    },
    visible: {
      false: "s-hidden",
    },
  },
});

const iconClasses = cva(["st-alert-icon"], {
  variants: {
    color: {
      gray: "s-text-gray-200",
      blue: "s-text-blue-500",
      green: "s-text-green-500",
      yellow: "s-text-yellow-500",
      red: "s-text-red-500",
    },
  },
});

const titleClasses = cva(["st-alert-title", "s-font-medium", "s-text-sm"], {
  variants: {
    color: {
      gray: "s-text-gray-900",
      blue: "s-text-blue-800",
      green: "s-text-green-800",
      yellow: "s-text-yellow-800",
      red: "s-text-red-800",
    },
  },
});

const contentClasses = cva(["st-alert-title", "s-font-normal", "s-text-sm"], {
  variants: {
    color: {
      gray: "s-text-gray-500",
      blue: "s-text-blue-800",
      green: "s-text-green-800",
      yellow: "s-text-yellow-800",
      red: "s-text-red-800",
    },
  },
});

const lineClasses = cva(["st-alert-line", "s-absolute", "s-left-0", "s-top-0", "s-h-full", "s-w-[2px]"], {
  variants: {
    color: {
      gray: "s-bg-gray-200",
      blue: "s-bg-blue-500",
      green: "s-bg-green-500",
      yellow: "s-bg-yellow-500",
      red: "s-bg-red-500",
    },
  },
});

export const Alert: FC<IAlert> = forwardRef<HTMLDivElement, IAlert>((props, ref) => {
  const { className, type, color, visible, onDismiss, primaryAction, secondaryAction, title, content } = props;
  const classes = alertClasses({ className, type, color, visible });

  const iconElement = <Icon source={Information} className={iconClasses({ color })} />;

  const titleElement = title ? <h3 className={titleClasses({ color })}>{title}</h3> : null;

  const contentElement = content ? <p className={contentClasses({ color })}>{content}</p> : null;

  const closeElement = <Link color="gray" prefix={<Icon source={Close} />} onPress={onDismiss} />;

  const buttonProps = {
    size: "small",
    shape: "round",
    intent: "secondary-outline",
    isDestructive: color === "red",
  } as IButton;

  if (type === "expanded") {
    return (
      <div ref={ref} className={classes}>
        <div className={lineClasses({ color })} />
        <div className="s-flex-1 s-flex s-ml-[2px]">
          {iconElement}
          <div className="s-px-2 s-flex s-flex-col s-gap-1 s-w-full">
            {titleElement}
            {contentElement}
            {(primaryAction || secondaryAction) && (
              <div className="s-flex s-gap-2 s-mt-2">
                {primaryAction && (
                  <Button {...buttonProps} onPress={primaryAction?.action}>
                    {primaryAction?.content}
                  </Button>
                )}
                {secondaryAction && (
                  <Button {...buttonProps} onPress={secondaryAction?.action}>
                    {secondaryAction?.content}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
        {closeElement}
      </div>
    );
  }

  return (
    <div ref={ref} className={classes}>
      <div className="s-flex-1 s-flex">
        {iconElement}
        <div className="s-px-2 s-flex s-justify-between s-items-center s-w-full">
          <div className="s-flex s-gap-2 s-items-center">
            {titleElement}
            {contentElement}
          </div>
          {primaryAction && (
            <Link onPress={primaryAction?.action} color={color}>
              {primaryAction?.content}
            </Link>
          )}
        </div>
      </div>
      {closeElement}
    </div>
  );
});

Alert.defaultProps = {
  type: "expanded",
  color: "blue",
  title: "Alert",
  content: "",
  visible: true,
};
