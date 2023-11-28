import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { FC, ReactNode, forwardRef } from "react";
import {
  Label,
  TagGroup as BaseTagGroup,
  TagGroupProps as BaseTagGroupProps,
  TagList,
  Text,
} from "react-aria-components";

const tagGroupClasses = cva(["st-tag-group"], {
  variants: {
    isDisabled: {
      true: "s-opacity-50 s-pointer-events-none",
    },
  },
});

export interface ITagGroup extends VariantProps<typeof tagGroupClasses>, BaseTagGroupProps, TestProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  items?: Iterable<object>[];
  renderEmptyState?: () => ReactNode;
}

export const TagGroup: FC<ITagGroup> = forwardRef<HTMLDivElement, ITagGroup>((props, ref) => {
  const { children, className, isDisabled, label, description, errorMessage, items, renderEmptyState, ...rest } = props;
  const classes = tagGroupClasses({ className, isDisabled });

  return (
    <BaseTagGroup ref={ref} {...rest} className={classes}>
      <Label>{label}</Label>
      <TagList items={items} renderEmptyState={renderEmptyState} className="s-flex s-gap-2">
        {children}
      </TagList>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </BaseTagGroup>
  );
});

TagGroup.defaultProps = {
  label: "Tag group",
  items: [],
  errorMessage: "",
  description: "",
};
