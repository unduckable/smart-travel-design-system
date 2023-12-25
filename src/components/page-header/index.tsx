import ChevronLeft from "@/src/icons/ChevronLeft";
import Search from "@/src/icons/Search";
import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Button, IButton } from "../button";

export interface IPageHeaderAction extends Omit<IButton, "prefixIcon" | "suffixIcon" | "children"> {
  id: string;
  icon: FC;
}

export interface IPageHeader extends VariantProps<typeof pageHeaderClasses>, TestProps {
  title: string;
  description: string;
  actions: IPageHeaderAction[];
  backLabel?: string;
  onBack?: () => void;
  onSearch?: () => void;
}

const pageHeaderClasses = cva("s-flex s-pt-[60px] s-w-full s-max-w-full s-px-6 s-pb-2", {
  variants: {
    type: {
      search: "s-gap-2",
      compact: "s-gap-2",
      comfort: "s-justify-between s-flex-wrap",
    },
  },
});

const backClasses = cva("s-text-gray-400 dark:s-text-white-500 s-outline-0", {
  variants: {
    type: {
      search: "[&.st-button]:s-p-0 s-border-none s-w-6",
      compact: "s-flex-1 [&.st-button]:s-justify-start",
      comfort: "s-h-6 [&.st-button]:s-py-1.5",
    },
  },
});

const compactTitleClasses = cva("hover:s-bg-transparent s-outline-0", {
  variants: {
    type: {
      search: [
        "s-flex-1 s-text-left [&]:s-justify-start [&]:s-px-2 [&]:s-py-1 s-text-gray-400 dark:s-text-white-500 s-min-w-0",
        "[&_.st-page-header-title]:s-text-xs",
      ],
      compact: [
        "s-flex-1 s-text-center s-border-none [&]:s-shadow-none s-pointer-events-none",
        "[&_.st-page-header-title]:s-text-sm",
      ],
      comfort: "s-hidden",
    },
  },
});
const actionsContainerClasses = cva("s-flex", {
  variants: {
    type: {
      search: "",
      compact: "s-flex-1 s-items-center s-justify-end s-gap-1",
      comfort: "",
    },
  },
});
const actionsClasses = cva("s-text-gray-400 dark:s-text-white-500 s-outline-0", {
  variants: {
    type: {
      search: "[&.st-button]:s-p-1 s-border-none s-w-8",
      compact: "",
      comfort: "",
    },
  },
});

export const PageHeader: FC<IPageHeader> = forwardRef<HTMLDivElement, IPageHeader>((props, ref) => {
  const { backLabel, type, description, title, actions, onBack, onSearch } = props;

  const actionsLimit = type === "search" ? 1 : 3;

  return (
    <header className={pageHeaderClasses({ type })} ref={ref}>
      <Button intent="tertiary" prefixIcon={ChevronLeft} className={backClasses({ type })} onPress={onBack}>
        {type !== "search" && backLabel}
      </Button>
      <Button
        intent="secondary-outline"
        prefixIcon={type === "search" ? Search : undefined}
        className={compactTitleClasses({ type })}
        onPress={onSearch}
      >
        <span className="s-flex s-max-w-[calc(100%-28px)] s-flex-col s-justify-start s-gap-0.5 s-text-gray-900">
          <span className="st-page-header-title s-truncate s-font-bold s-leading-none s-text-gray-900 dark:s-text-white-900">
            {title}
          </span>
          <span className="s-truncate s-text-xs s-font-normal s-leading-none s-text-gray-900 dark:s-text-white-800">
            {description}
          </span>
        </span>
      </Button>
      <div className={actionsContainerClasses({ type })}>
        {actions.slice(0, actionsLimit).map((action) => (
          <Button
            key={action.id}
            intent="tertiary"
            size={type === "search" ? "medium" : "small"}
            prefixIcon={action.icon}
            className={actionsClasses({ type })}
            isSquare
            {...action}
          />
        ))}
      </div>
      {type === "comfort" && (
        <div className="s-w-full">
          <h1 className="s-text-xl s-font-bold s-text-gray-900 dark:s-text-white-900">{title}</h1>
          <p className="s-text-xs s-font-normal s-text-gray-900 dark:s-text-white-800">{description}</p>
        </div>
      )}
    </header>
  );
});

PageHeader.defaultProps = {
  type: "comfort",
  title: "Title",
  description: "Description",
  backLabel: "Back",
  actions: [],
  onBack: () => {},
  onSearch: () => {},
};
