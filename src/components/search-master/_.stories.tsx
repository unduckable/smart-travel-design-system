import Minus from "@/src/icons/Minus";
import Pin from "@/src/icons/Pin";
import Plus from "@/src/icons/Plus";
import Search from "@/src/icons/Search";
import { getLocalTimeZone, today } from "@internationalized/date";
import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import { SearchMaster } from ".";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { DatePicker } from "../date-picker";
import { Icon } from "../icon";
import { Input } from "../input";
import { Modal } from "../modal";

const meta: Meta<typeof SearchMaster> = {
  title: "Components/Search Master",
  component: SearchMaster,
};

export default meta;

type Story = StoryObj<typeof SearchMaster>;
export const Default: Story = {
  args: {
    type: "hotel",
    toLocationLabel: "Địa điểm hoặc khách sạn",
    toLocation: "Hanoi",
    fromDateLabel: "Nhận phòng",
    fromDate: "21 tháng 12 2023",
    toDate: "25 tháng 12 2023",
    toDateLabel: "Trả phòng",
    nights: 4,
    travelers: "2 người lớn, 1 trẻ em",
    travelersLabel: "Số khách",
    searchLabel: "Tìm kiếm",
  },
};

export const Hotel: Story = {
  args: {
    type: "hotel",
    toLocationLabel: "Địa điểm hoặc khách sạn",
    toDateLabel: "Nhận phòng",
    fromDateLabel: "Trả phòng",
    travelersLabel: "Số khách",
    toLocation: "Hanoi",
    toDate: "21 tháng 12 2023",
    nights: 4,
    fromDate: "25 tháng 12 2023",
    travelers: "2 người lớn, 1 trẻ em",
    searchLabel: "Tìm kiếm",
  },
};

export const Flight: Story = {
  args: {
    type: "flight",
    fromLocationLabel: "Nơi đi",
    toDateLabel: "Ngày đi",
    toLocationLabel: "Nơi đến",
    fromLocation: "Hanoi (HAN)",
    fromDateLabel: "Ngày đến",
    toLocation: "Bangkok (BKK)",
    fromDate: "21 tháng 12 2023",
    toDate: "25 tháng 12 2023",
    travelersLabel: "Số ghế",
    travelers: "3",
    searchLabel: "Tìm kiếm",
  },
};

export const CompactHotel: Story = {
  args: {
    type: "hotel",
    size: "compact",
    toLocationLabel: "Địa điểm/khác sạn",
    fromDateLabel: "Nhận phòng",
    fromLocation: "Hanoi (HAN)",
    toDateLabel: "Trả phòng",
    toLocation: "Bangkok (BKK)",
    fromDate: "21 tháng 12 2023",
    toDate: "25 tháng 12 2023",
    travelersLabel: "Số ghế",
    travelers: "3",
  },
};

export const CompactFlight: Story = {
  args: {
    type: "flight",
    size: "compact",
    fromLocationLabel: "Nơi đi",
    fromDateLabel: "Ngày đi",
    fromLocation: "Hanoi (HAN)",
    fromDate: "21 tháng 12 2023",
    toLocationLabel: "Nơi đến",
    toDateLabel: "Ngày đến",
    toLocation: "Bangkok (BKK)",
    toDate: "25 tháng 12 2023",
    travelersLabel: "Số ghế",
    travelers: "3",
  },
};

export const Example: Story = {
  parameters: {
    docs: { source: { type: "code" } },
  },
  render() {
    const [modalType, setModalType] = useState("");
    const [fromDate, setFromDate] = useState(today(getLocalTimeZone()));
    const [toDate, setToDate] = useState(today(getLocalTimeZone()).add({ days: 3 }));
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [babies, setBabies] = useState(0);

    const travelers = useMemo(() => {
      const labels = [];
      if (adults) labels.push(`${adults} người lớn`);
      if (children) labels.push(`${children} trẻ em`);
      if (babies) labels.push(`${babies} trẻ sơ sinh`);
      return labels.join(", ");
    }, [adults, children, babies]);

    const FromDate = () => (
      <div className="s-flex s-min-h-[40vh] s-justify-center dark:s-bg-dark">
        <DatePicker className="s-shadow-[none] s-border-none" value={fromDate} onChange={(value) => setFromDate(value)}>
          <div className="s-mt-4">
            <Checkbox defaultSelected>Hiển thị giá ước tính thấp nhất</Checkbox>
          </div>
        </DatePicker>
      </div>
    );

    const ToDate = () => (
      <div className="s-flex s-min-h-[40vh] s-justify-center dark:s-bg-dark">
        <DatePicker className="s-shadow-[none] s-border-none" value={toDate} onChange={(value) => setToDate(value)}>
          <div className="s-mt-4">
            <Checkbox defaultSelected>Hiển thị giá ước tính thấp nhất</Checkbox>
          </div>
        </DatePicker>
      </div>
    );

    const Travelers = () => (
      <div className="s-py-2 dark:s-bg-dark">
        <div className="s-flex s-px-4 s-py-4 hover:s-bg-gray-50 dark:hover:s-bg-white-200">
          <div className="s-flex-1">
            <p className="s-text-sm dark:s-text-white-800">Người lớn</p>
            <p className="s-text-xs s-text-gray-500 dark:s-text-white-500">Từ 13 tuổi</p>
          </div>
          <div className="s-flex s-items-center s-gap-4 dark:s-text-white-800">
            <Button
              isSquare
              intent="secondary-outline"
              size="small"
              shape="pill"
              className="hover:s-bg-gray-50 dark:s-border-white-300"
              prefixIcon={Minus}
              onPress={() => setAdults((x) => (x > 1 ? x - 1 : x))}
            />
            {adults}
            <Button
              isSquare
              intent="secondary-outline"
              size="small"
              shape="pill"
              className="hover:s-bg-gray-50 dark:s-border-white-300"
              prefixIcon={Plus}
              onPress={() => setAdults((x) => x + 1)}
            />
          </div>
        </div>
        <div className="s-flex s-px-4 s-py-4 hover:s-bg-gray-50 dark:hover:s-bg-white-200">
          <div className="s-flex-1">
            <p className="s-text-sm dark:s-text-white-800">Trẻ em</p>
            <p className="s-text-xs s-text-gray-500 dark:s-text-white-500">Từ 2 - 12 tuổi</p>
          </div>
          <div className="s-flex s-items-center s-gap-4 dark:s-text-white-800">
            <Button
              isSquare
              intent="secondary-outline"
              size="small"
              shape="pill"
              className="hover:s-bg-gray-50 dark:s-border-white-300"
              prefixIcon={Minus}
              onPress={() => setChildren((x) => (x > 0 ? x - 1 : x))}
            />
            {children}
            <Button
              isSquare
              intent="secondary-outline"
              size="small"
              shape="pill"
              className="hover:s-bg-gray-50 dark:s-border-white-300"
              prefixIcon={Plus}
              onPress={() => setChildren((x) => x + 1)}
            />
          </div>
        </div>
        <div className="s-flex s-px-4 s-py-4 hover:s-bg-gray-50 dark:hover:s-bg-white-200">
          <div className="s-flex-1">
            <p className="s-text-sm dark:s-text-white-800">Trẻ sơ sinh</p>
            <p className="s-text-xs s-text-gray-500 dark:s-text-white-500">Dưới 2 tuổi</p>
          </div>
          <div className="s-flex s-items-center s-gap-4 dark:s-text-white-800">
            <Button
              isSquare
              intent="secondary-outline"
              size="small"
              shape="pill"
              className="hover:s-bg-gray-50 dark:s-border-white-300"
              prefixIcon={Minus}
              onPress={() => setBabies((x) => (x > 0 ? x - 1 : x))}
            />
            {babies}
            <Button
              isSquare
              intent="secondary-outline"
              size="small"
              shape="pill"
              className="hover:s-bg-gray-50 dark:s-border-white-300"
              prefixIcon={Plus}
              onPress={() => setBabies((x) => x + 1)}
            />
          </div>
        </div>
      </div>
    );

    const ToLocation = () => (
      <div className="s-flex s-max-h-[90vh] s-flex-col dark:s-bg-dark">
        <Input prefixIcon={{ source: Search }} placeholder="Search" hideLabel className="s-mb-4 s-mt-9 s-px-4" />
        <div className="s-flex-1 s-overflow-y-auto">
          <p className="s-mb-4 s-px-4 s-text-sm s-font-medium s-text-gray-500 dark:s-text-white-500">
            Tìm kiếm gần đây
          </p>
          <div className="s-flex s-items-center s-border-b-[1px] s-border-gray-200 dark:s-border-white-200 s-px-4 s-py-2">
            <div className="s-flex s-h-14 s-w-14 s-items-center s-justify-center s-rounded-md s-border-[1px] s-border-gray-200 s-bg-gray-100 s-text-gray-400 dark:s-bg-white-200 dark:s-border-white-300">
              <Icon source={Pin} />
            </div>
            <div className="s-ml-4">
              <p className="s-text-sm dark:s-text-white-800">
                Label
                <span className="s-text-gray-500 dark:s-text-white-500"> (15,646)</span>
              </p>
              <p className="s-text-xs s-text-gray-400 dark:s-text-white-500">Supporting text</p>
            </div>
          </div>

          <p className="s-mb-2 s-mt-4 s-px-4 s-text-sm s-font-medium s-text-gray-500 dark:s-text-white-500">
            Điểm đến phổ biến
          </p>
          {Array.from(Array(20).keys()).map((i) => (
            <div key={i} className="s-flex s-items-center s-px-4 s-py-2">
              <div className="s-flex s-h-14 s-w-14 s-items-center s-justify-center s-rounded-md s-border-[1px] s-border-gray-200 s-bg-gray-100 s-text-gray-400 dark:s-bg-white-200 dark:s-border-white-300">
                <Icon source={Pin} />
              </div>
              <div className="s-ml-4">
                <p className="s-text-sm dark:s-text-white-800">
                  Label
                  <span className="s-text-gray-500 dark:s-text-white-500"> (15,646)</span>
                </p>
                <p className="s-text-xs s-text-gray-400 dark:s-text-white-500">Supporting text</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <>
        <SearchMaster
          size="compact"
          toLocationLabel="Địa điểm/khách sạn"
          toLocation="Hanoi"
          fromDateLabel="Ngày đi"
          fromDate={fromDate.toString()}
          toDateLabel="Ngày đến"
          toDate={toDate.toString()}
          travelersLabel="Số khách"
          travelers={travelers}
          onPressToLocation={() => setModalType("to-location")}
          onPressFromDate={() => setModalType("from-date")}
          onPressToDate={() => setModalType("to-date")}
          onPressTravelers={() => setModalType("travelers")}
        />
        <Modal
          isOpen={!!modalType}
          onClose={() => setModalType("")}
          onOpenChange={(isModal) => setModalType(isModal ? modalType : "")}
          isDismissable
        >
          {modalType === "from-date" ? (
            <FromDate />
          ) : modalType === "to-date" ? (
            <ToDate />
          ) : modalType === "travelers" ? (
            <Travelers />
          ) : (
            <ToLocation />
          )}
        </Modal>
      </>
    );
  },
};
