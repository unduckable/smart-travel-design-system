import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Group } from "react-aria-components";
import { Button } from "../button";
import { Icon } from "../icon";
import { Link } from "../link";

export interface ICard extends VariantProps<typeof cardClasses>, TestProps {
  className?: string;
  icon?: FC;
  title?: string;
  description?: string;
  button?: string;
  onPressButton?: () => void;
}

const cardClasses = cva(
  [
    "st-simple-card",
    "s-bg-gray-100 s-inline-flex s-p-3 s-rounded-lg dark:s-bg-dark dark:s-border-2 dark:s-border-white-200",
  ],
  {
    variants: {
      type: {
        vertical: "s-flex-col s-min-w-[200px] s-min-h-[200px] s-justify-end s-items-start",
        horizontal: "",
      },
    },
  },
);

export const SimpleCard: FC<ICard> = forwardRef<HTMLDivElement, ICard>((props, ref) => {
  const { type, className, button, title, description, icon, onPressButton } = props;

  return (
    <Group className={cardClasses({ className, type })} ref={ref}>
      {icon && <Icon source={icon} className="s-mb-1 s-text-gray-400 dark:s-text-white-500" />}
      <div className={type === "vertical" ? "" : "s-ml-2"}>
        <p className="s-mb-1 s-text-sm s-font-bold dark:s-text-white-800">{title}</p>
        <p className={`s-text-sm s-text-gray-500 dark:s-text-white-500 ${type === "vertical" ? "s-mb-3" : ""}`}>
          {description}
        </p>
      </div>
      {type === "vertical" ? (
        <Button
          intent="tertiary"
          size="small"
          className="s-bg-white-900 dark:s-bg-white-300 s-font-medium"
          onPress={onPressButton}
        >
          {button}
        </Button>
      ) : (
        <Link className="s-place-self-end s-ml-4 s-h-fit">{button}</Link>
      )}
    </Group>
  );
});

SimpleCard.defaultProps = {
  type: "vertical",
  title: "",
  description: "",
  button: "Button",
  icon: null,
  onPressButton: () => {},
};
