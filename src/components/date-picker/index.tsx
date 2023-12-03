import ChevronLeft from "@/src/icons/ChevronLeft";
import ChevronRight from "@/src/icons/ChevronRight";
import { TestProps } from "@/src/utils";
import { getCurrentBreakpoint } from "@/src/utils/responsive";
import { CalendarDate, getLocalTimeZone, isWeekend, today } from "@internationalized/date";
import { VariantProps, cva } from "class-variance-authority";
import { FC, MutableRefObject, forwardRef, useCallback, useEffect, useRef, useState } from "react";
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridProps,
  CalendarRenderProps,
  DatePicker as BaseDatePicker,
  DatePickerProps as BaseDatePickerProps,
  RangeCalendar,
  RangeCalendarRenderProps,
} from "react-aria-components";
import { Button } from "../button";
import { Icon } from "../icon";

export interface IDatePicker
  extends VariantProps<typeof datePickerClasses>,
    Omit<BaseDatePickerProps<CalendarDate>, "children">,
    TestProps {
  children?: React.ReactNode;
  dayNames?: string[];
  monthNames?: string[];
  isRange?: boolean;
  isDateInBetween?: (date: CalendarDate) => boolean;
  isDateHighlighted?: (date: CalendarDate) => boolean;
}

const datePickerClasses = cva(["st-date-picker"], {
  variants: {},
});

const tableCellClasses = cva(
  [
    "s-w-11 s-h-11 s-flex s-items-center s-justify-center s-rounded-md s-outline-none",
    "outside-month:s-pointer-events-none outside-month:s-hidden",
  ],
  {
    variants: {
      isHighlighted: {
        true: "s-bg-green-100 s-border s-border-green-200 hover:s-border-green-200",
      },
      isRange: {
        true: "",
      },
      isDisabled: {
        true: "s-text-disabled s-cursor-not-allowed",
        false: "hover:s-border-gray-200 hover:s-border",
      },
      isWeekend: {
        true: "",
      },
    },
    compoundVariants: [
      {
        isRange: true,
        isDisabled: false,
        className: [
          "s-white-90 selected:s-bg-accent-blue selected:s-rounded-none hover:s-border-transparent",
          `[&:not([data-selection-start]):not([data-selection-end])]:s-w-12
           [&:not([data-selection-start]):not([data-selection-end])]:s-h-12`,
          "selection-start:s-m-0.5 selection-start:s-text-white-900 selection-start:s-rounded-md selection-start:s-bg-blue-500 selection-start:s-outline-blue-500",
          "selection-end:s-m-0.5 selection-end:s-text-white-900 selection-end:s-rounded-md selection-end:s-bg-blue-500 selection-end:s-outline-blue-500",
        ],
      },
      {
        isRange: false,
        isDisabled: false,
        className:
          "s-m-0.5 selected:s-text-white-900 selected:s-bg-blue-500 selected:s-border-none selected:s-outline-blue-500",
      },
      {
        isWeekend: true,
        isHighlighted: false,
        isDisabled: false,
        className: "s-text-red-500",
      },
    ],
  },
);

const headerClasses = cva(
  ["s-border-b-[1px] s-border-gray-100 s-h-12 s-w-12 s-text-sm s-font-normal s-flex s-items-center s-justify-center"],
  {
    variants: {
      isWeekend: {
        true: "s-text-red-500",
        false: "s-text-gray-500",
      },
    },
  },
);

interface IMonthGrid extends Pick<IDatePicker, "isDateHighlighted" | "isRange">, Omit<CalendarGridProps, "children"> {
  state: CalendarRenderProps["state"] | RangeCalendarRenderProps["state"];
  children: React.ReactNode;
}

const MonthGrid: FC<IMonthGrid> = (props) => {
  const { state, isDateHighlighted, isRange, children, ...rest } = props;

  return (
    <CalendarGrid key={state.visibleRange.start.toString()} className="[&_td]:s-p-0" {...rest}>
      <div className="s-flex s-flex-col s-gap-2">{children}</div>
      <CalendarGridBody className="s-mt-2 s-table s-w-fit">
        {(date) => (
          <CalendarCell
            key={date.toString()}
            date={date}
            className={tableCellClasses({
              isHighlighted: isDateHighlighted(date),
              isWeekend: isWeekend(date, "En-US"),
              isRange,
              isDisabled: !!state.isCellDisabled(date) || !!state.isCellUnavailable(date),
            })}
          />
        )}
      </CalendarGridBody>
    </CalendarGrid>
  );
};

const INITIAL_MONTH_COUNT = 5;
const MAX_MONTHS_VISIBLE = 12 * 100;

export const DatePicker: FC<IDatePicker> = forwardRef<HTMLDivElement, IDatePicker>((props, ref) => {
  const { children, dayNames, monthNames, isDateHighlighted, isRange, ...rest } = props;
  const [breakpoint] = useState(getCurrentBreakpoint());
  const [monthCount, setMonthCount] = useState(INITIAL_MONTH_COUNT);
  const sentry = useRef(null);
  const observer: MutableRefObject<IntersectionObserver> | null = useRef(null);

  const handleInfiniteScroll: IntersectionObserverCallback = useCallback((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setMonthCount((prev) => prev + 1);
      }
    }
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(handleInfiniteScroll, {
      root: null,
      threshold: 1.0,
    });
    if (sentry.current) observer.current.observe(sentry.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [handleInfiniteScroll]);

  const CalendarComponent = isRange ? RangeCalendar : Calendar;

  return (
    <BaseDatePicker className="lg:s-p-4 s-shadow-overlay s-inline-block" {...rest} ref={ref}>
      <CalendarComponent
        className="s-w-fit s-flex s-flex-col lg:s-flex-row s-gap-4 s-max-h-screen lg:s-max-h-fit"
        visibleDuration={{ months: breakpoint === "lg" ? 2 : MAX_MONTHS_VISIBLE }}
      >
        {({ state }) =>
          breakpoint === "lg" ? (
            <>
              <MonthGrid state={state} isDateHighlighted={isDateHighlighted} isRange={isRange}>
                <div className="s-text-center s-relative s-py-2">
                  <Button
                    slot="previous"
                    intent="tertiary"
                    size="small"
                    className="s-absolute s-left-0"
                    isIconOnly
                    isDisabled={state.isPreviousVisibleRangeInvalid()}
                  >
                    <Icon source={ChevronLeft} className="" />
                  </Button>
                  <p className="s-leading-8 s-h-8">
                    {monthNames[state.visibleRange.start.month - 1]} - {state.visibleRange.start.year}
                  </p>
                </div>

                <div className="s-flex s-w-fit s-items-center s-justify-center">
                  {dayNames.map((day, index) => (
                    <div
                      key={index}
                      className={headerClasses({ isWeekend: index === 0 || index === dayNames.length - 1 })}
                    >
                      <p>{day}</p>
                    </div>
                  ))}
                </div>
              </MonthGrid>

              <MonthGrid state={state} offset={{ months: 1 }} isDateHighlighted={isDateHighlighted} isRange={isRange}>
                <div className="s-flex s-flex-col s-gap-2">
                  <div className="s-text-center s-relative s-py-2">
                    <Button slot="next" intent="tertiary" size="small" className="s-absolute s-right-0" isIconOnly>
                      <Icon source={ChevronRight} className="" />
                    </Button>
                    <p className="s-leading-8 s-h-8">
                      {monthNames[state.visibleRange.end.month - 1]} - {state.visibleRange.end.year}
                    </p>
                  </div>
                  <div className="s-flex s-w-fit s-items-center s-justify-center">
                    {dayNames.map((day, index) => (
                      <div
                        key={index}
                        className={headerClasses({ isWeekend: index === 0 || index === dayNames.length - 1 })}
                      >
                        <p>{day}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </MonthGrid>
            </>
          ) : (
            <>
              <div className="s-px-4 s-text-sm s-flex s-w-fit s-items-center s-justify-center">
                {dayNames.map((day, index) => (
                  <div
                    key={index}
                    className={headerClasses({ isWeekend: index === 0 || index === dayNames.length - 1 })}
                  >
                    <p>{day}</p>
                  </div>
                ))}
              </div>
              <div className="s-px-4 s-flex-1 s-overflow-scroll">
                {Array.from(Array(monthCount)).map((_, i) => (
                  <MonthGrid
                    key={i}
                    state={state}
                    isDateHighlighted={isDateHighlighted}
                    isRange={isRange}
                    offset={{ months: i }}
                  >
                    <div className="s-flex s-flex-col s-gap-2">
                      <div className="s-text-left s-relative s-py-2">
                        <p className="s-leading-6 s-h-6">
                          {monthNames[state.visibleRange.start.cycle("month", i).month - 1]} -
                          {state.visibleRange.start.add({ months: i }).year}
                        </p>
                      </div>
                    </div>
                  </MonthGrid>
                ))}
                <div id="date-picker-sentry" ref={sentry} />
              </div>
            </>
          )
        }
      </CalendarComponent>
      <footer>{children}</footer>
    </BaseDatePicker>
  );
});

DatePicker.defaultProps = {
  defaultValue: today(getLocalTimeZone()),
  minValue: today(getLocalTimeZone()),
  dayNames: ["CN", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7"],
  monthNames: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  isRange: false,
  isDisabled: false,
  isDateHighlighted: () => false,
  isDateUnavailable: () => false,
};
