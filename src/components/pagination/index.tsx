import ChevronLeft from "@/src/icons/ChevronLeft";
import ChevronRight from "@/src/icons/ChevronRight";
import { TestProps } from "@/src/utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import React, { FC, ReactNode, forwardRef, useCallback, useEffect, useState } from "react";
import { Group } from "react-aria-components";
import { Button } from "../button";
import { Icon } from "../icon";

export interface IPagination extends VariantProps<typeof paginationClasses>, TestProps {
  defaultValue?: number;
  value?: number;
  total: number;
  size?: "small" | "medium" | "large";
  onChange: (page: number) => void;
}

const paginationClasses = cva([]);

const pagesVisibleForSize = {
  small: 0,
  medium: 3,
  large: 5,
};

export const Pagination: FC<IPagination> = forwardRef<HTMLDivElement, IPagination>((props, ref) => {
  const { total, size, defaultValue, value, onChange } = props;
  const [currentPage, setCurrentPage] = useState(defaultValue);
  const [pages, setPages] = useState([]);

  const pagesVisible = pagesVisibleForSize[size];

  const handlePress = (page) => {
    if (page > 0 && page <= total) {
      onChange(page);
      setCurrentPage(page);
      updatePages(page);
    }
  };

  const updatePages = useCallback(
    (page) => {
      const newPages = [page];
      for (let i = 0; i < Math.floor(pagesVisible / 2); i++) {
        const first = newPages[0];
        const last = newPages[newPages.length - 1];
        if (first > 1) newPages.unshift(first - 1);
        if (last < total) newPages.push(last + 1);
      }

      while (newPages.length < pagesVisible && newPages[0] > 1) newPages.unshift(newPages[0] - 1);
      while (newPages.length < pagesVisible && newPages[newPages.length - 1] < total)
        newPages.push(newPages[newPages.length - 1] + 1);
      setPages(newPages);
    },
    [pagesVisible, total],
  );

  useEffect(() => {
    if (value) setCurrentPage(value);
  }, [value]);

  useEffect(() => {
    updatePages(currentPage);
  }, [updatePages, currentPage]);

  return (
    <Group className="s-flex">
      <Button
        prefixIcon={ChevronLeft}
        isSquare
        shape="pill"
        intent="secondary"
        className="s-text-gray-400 focus:s-outline-0"
        onPress={() => handlePress(currentPage - 1)}
      />
      {pages.map((page) => (
        <Button
          isSquare
          shape="pill"
          intent={page === currentPage ? "primary" : "secondary"}
          className="focus:s-outline-0"
          onPress={() => handlePress(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        prefixIcon={ChevronRight}
        isSquare
        shape="pill"
        intent="secondary"
        className="s-text-gray-400 focus:s-outline-0"
        onPress={() => handlePress(currentPage + 1)}
      />
    </Group>
  );
});

Pagination.defaultProps = {
  defaultValue: 3,
  total: 10,
  size: "medium",
  onChange: () => {},
};
