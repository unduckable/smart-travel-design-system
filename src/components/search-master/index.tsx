import Airplane from "@/src/icons/Airplane";
import ArrowRight from "@/src/icons/ArrowRight";
import Briefcase from "@/src/icons/Briefcase";
import Moon from "@/src/icons/Moon";
import Search from "@/src/icons/Search";
import TwoWayArrow from "@/src/icons/TwoWayArrows";
import User from "@/src/icons/User";
import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Group } from "react-aria-components";
import { Button } from "../button";
import { Icon } from "../icon";

export interface ISearch extends VariantProps<typeof searchClasses>, TestProps {
  className?: string;
  toLocationLabel: string;
  fromLocationLabel?: string;
  toLocation: string;
  fromLocation?: string;
  toDateLabel: string;
  fromDateLabel: string;
  toDate?: string;
  fromDate?: string;
  travelersLabel: string;
  nights?: number;
  travelers?: string;
  searchLabel?: string;
  onSearch?: () => void;
  onPressFromLocation?: () => void;
  onPressToLocation?: () => void;
  onPressFromDate?: () => void;
  onPressToDate?: () => void;
  onPressTravelers?: () => void;
}

const searchClasses = cva(["st-search-master", "s-shadow-overlay s-rounded-md"], {
  variants: {
    type: {
      flight: "",
      hotel: "",
    },
    size: {
      compact: "s-inline-grid s-items-center s-grid-cols-[2.75rem_1fr_1px_1fr]",
      inline: "s-inline-flex s-items-center ",
    },
  },
});

export const SearchMaster: FC<ISearch> = forwardRef<HTMLDivElement, ISearch>((props, ref) => {
  const {
    className,
    type,
    size,
    toDate,
    fromDate,
    nights,
    travelers,
    searchLabel,
    toDateLabel,
    fromDateLabel,
    toLocationLabel,
    fromLocationLabel,
    toLocation,
    fromLocation,
    travelersLabel,
    onSearch,
    onPressFromLocation,
    onPressToLocation,
    onPressToDate,
    onPressFromDate,
    onPressTravelers,
  } = props;

  return (
    <Group className={searchClasses({ className, type, size })} ref={ref}>
      <div
        className={`s-contents [&_div]:s-h-[60px] ${
          size === "compact" ? "[&>*]:s-border-b-[1px] [&>*]:s-border-gray-100" : ""
        }`}
      >
        <div className="s-flex s-h-full s-items-center">
          <Icon source={type === "hotel" ? Search : Airplane} size="md" className="s-ml-3 s-mr-2 s-text-gray-300" />
        </div>
        {type === "hotel" ? (
          <Group className="s-col-span-3 s-cursor-pointer s-py-2.5 s-pr-6" onClick={onPressToLocation}>
            <p className="s-mb-1 s-text-xs s-text-gray-500">{toLocationLabel}</p>
            <p className="s-text-sm">{toLocation}</p>
          </Group>
        ) : (
          <>
            <Group className="s-relative s-cursor-pointer s-py-2.5 s-pr-6" onClick={onPressFromLocation}>
              <p className="s-mb-1 s-text-xs s-text-gray-500">{fromLocationLabel}</p>
              <p className="s-text-sm">{fromLocation}</p>
              <Button
                intent="secondary-outline"
                isSquare
                className="s-w s-pointer-events-none s-absolute s-right-0 s-top-[50%] -s-translate-y-1/2 s-translate-x-1/2 s-gap-[0] s-border-gray-200 s-text-xs [&]:s-rounded-full [&_svg]:s-h-5 [&_svg]:s-w-5 [&_svg]:s-text-gray-400"
                suffixIcon={TwoWayArrow}
                size="small"
              />
            </Group>
            <hr className="s-h-11 s-w-[1px] s-bg-gray-100 s-py-1" />
            <Group className="s-cursor-pointer s-px-6 s-py-2.5" onClick={onPressToLocation}>
              <p className="s-mb-1 s-text-xs s-text-gray-500">{toLocationLabel}</p>
              <p className="s-text-sm">{toLocation}</p>
            </Group>
          </>
        )}
      </div>
      <div className={`s-contents ${size === "compact" ? "[&>*]:s-border-b-[1px] [&>*]:s-border-gray-100" : ""}`}>
        {size === "inline" ? (
          <hr className="s-h-11 s-w-[1px] s-bg-gray-100 s-py-1" />
        ) : (
          <div className="s-flex s-h-full s-items-center">
            <Icon source={Briefcase} size="md" className="s-ml-3 s-mr-2 s-text-gray-300" />
          </div>
        )}

        <Group
          className={`s-cursor-pointer s-relative s-py-2.5 ${size === "compact" ? "s-pr-6" : "s-px-6"}`}
          onClick={onPressFromDate}
        >
          <p className="s-mb-1 s-text-xs s-text-gray-500">{fromDateLabel}</p>
          <p className="s-text-sm">{fromDate}</p>
          {type === "flight" ? (
            <Button
              intent="secondary-outline"
              isSquare
              className="s-w s-pointer-events-none s-absolute s-right-0 s-top-[50%] -s-translate-y-1/2 s-translate-x-1/2 s-gap-[0] s-border-gray-200 s-text-xs [&]:s-rounded-full [&_svg]:s-h-5 [&_svg]:s-w-5 [&_svg]:s-text-gray-400"
              suffixIcon={ArrowRight}
              size="small"
            />
          ) : (
            <Button
              intent="secondary-outline"
              isSquare
              className="s-w s-pointer-events-none s-absolute s-right-0 s-top-[50%] -s-translate-y-1/2 s-translate-x-1/2 s-gap-[0] s-border-gray-200 s-text-xs [&]:s-rounded-full [&_svg]:s-w-3 [&_svg]:s-text-gray-400"
              suffixIcon={Moon}
              size="small"
            >
              {nights}
            </Button>
          )}
        </Group>
        <hr className="s-h-11 s-w-[1px] s-bg-gray-100 s-py-1" />
        <Group className="s-cursor-pointer s-px-6 s-py-2.5" onClick={onPressToDate}>
          <p className="s-mb-1 s-text-xs s-text-gray-500">{toDateLabel}</p>
          <p className="s-text-sm">{toDate}</p>
        </Group>
      </div>
      {size === "inline" ? (
        <hr className="s-h-11 s-w-[1px] s-bg-gray-100 s-py-1" />
      ) : (
        <Icon source={User} size="md" inheritColor className="s-ml-3 s-mr-2 s-text-gray-300" />
      )}
      <Group className={`s-py-2.5 ${size === "compact" ? "s-pr-6" : "s-px-6"}`} onClick={onPressTravelers}>
        <p className="s-mb-1 s-text-xs s-text-gray-500">{travelersLabel}</p>
        <p className="s-text-sm">{travelers}</p>
      </Group>
      {size === "inline" && (
        <Button intent="primary" className="s-h-[60px] s-flex-1 s-rounded-l-none s-outline-0" onPress={onSearch}>
          {searchLabel}
        </Button>
      )}
    </Group>
  );
});

SearchMaster.defaultProps = {
  type: "hotel",
  size: "inline",
  toDateLabel: "Arrive on",
  toLocationLabel: "Arrive to",
  fromDateLabel: "from date",
  fromLocationLabel: "from location",
  searchLabel: "Search",
  onSearch: () => {},
};
