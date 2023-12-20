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
  arrivalLocationLabel: string;
  departureLocationLabel: string;
  arrivalLocation: string;
  departureLocation: string;
  arrivalDateLabel: string;
  departureDateLabel: string;
  arrivalDate?: string;
  departureDate?: string;
  travelersLabel: string;
  nights?: number;
  travelers?: string;
  searchLabel?: string;
  onSearch?: () => void;
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
    arrivalDate,
    departureDate,
    nights,
    travelers,
    searchLabel,
    arrivalDateLabel,
    departureDateLabel,
    arrivalLocationLabel,
    departureLocationLabel,
    arrivalLocation,
    departureLocation,
    travelersLabel,
    onSearch,
  } = props;

  return (
    <Group className={searchClasses({ className, type, size })} ref={ref}>
      <div
        className={`s-contents [&_div]:s-h-[60px] ${
          size === "compact" ? "[&>*]:s-border-b-[1px] [&>*]:s-border-gray-100" : ""
        }`}
      >
        <div className="s-flex s-h-full s-items-center">
          <Icon
            source={type === "hotel" ? Search : Airplane}
            size="md"
            inheritColor
            className="s-ml-3 s-mr-2 s-text-gray-300"
          />
        </div>
        {type === "hotel" ? (
          <div className="s-col-span-3 s-py-2.5 s-pr-6">
            <p className="s-mb-1 s-text-xs s-text-gray-500">{arrivalLocationLabel}</p>
            <p className="s-text-sm">{arrivalLocation}</p>
          </div>
        ) : (
          <>
            <div className="s-relative s-py-2.5 s-pr-6">
              <p className="s-mb-1 s-text-xs s-text-gray-500">{arrivalLocationLabel}</p>
              <p className="s-text-sm">{arrivalLocation}</p>
              <Button
                intent="secondary-outline"
                isSquare
                className="s-w s-pointer-events-none s-absolute s-right-0 s-top-[50%] -s-translate-y-1/2 s-translate-x-1/2 s-gap-[0] s-border-gray-200 s-text-xs [&]:s-rounded-full [&_svg]:s-h-5 [&_svg]:s-w-5 [&_svg]:s-text-gray-400"
                suffixIcon={TwoWayArrow}
                size="small"
              />
            </div>
            <hr className="s-h-11 s-w-[1px] s-bg-gray-100 s-py-1" />
            <div className="s-px-6 s-py-2.5">
              <p className="s-mb-1 s-text-xs s-text-gray-500">{departureLocationLabel}</p>
              <p className="s-text-sm">{departureLocation}</p>
            </div>
          </>
        )}
      </div>
      <div className={`s-contents ${size === "compact" ? "[&>*]:s-border-b-[1px] [&>*]:s-border-gray-100" : ""}`}>
        {size === "inline" ? (
          <hr className="s-h-11 s-w-[1px] s-bg-gray-100 s-py-1" />
        ) : (
          <div className="s-flex s-h-full s-items-center">
            <Icon source={Briefcase} size="md" inheritColor className="s-ml-3 s-mr-2 s-text-gray-300" />
          </div>
        )}

        <div className={`s-relative s-py-2.5 ${size === "compact" ? "s-pr-6" : "s-px-6"}`}>
          <p className="s-mb-1 s-text-xs s-text-gray-500">{arrivalDateLabel}</p>
          <p className="s-text-sm">{arrivalDate}</p>
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
        </div>
        <hr className="s-h-11 s-w-[1px] s-bg-gray-100 s-py-1" />
        <div className="s-px-6 s-py-2.5">
          <p className="s-mb-1 s-text-xs s-text-gray-500">{departureDateLabel}</p>
          <p className="s-text-sm">{departureDate}</p>
        </div>
      </div>
      {size === "inline" ? (
        <hr className="s-h-11 s-w-[1px] s-bg-gray-100 s-py-1" />
      ) : (
        <Icon source={User} size="md" inheritColor className="s-ml-3 s-mr-2 s-text-gray-300" />
      )}
      <div className={`s-py-2.5 ${size === "compact" ? "s-pr-6" : "s-px-6"}`}>
        <p className="s-mb-1 s-text-xs s-text-gray-500">{travelersLabel}</p>
        <p className="s-text-sm">{travelers}</p>
      </div>
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
  arrivalDateLabel: "Arrive on",
  arrivalLocationLabel: "Arrive to",
  departureDateLabel: "Departure date",
  departureLocationLabel: "Departure location",
  searchLabel: "Search",
  onSearch: () => {},
};
