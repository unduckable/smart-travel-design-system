import type { Meta, StoryObj } from "@storybook/react";
import { SearchMaster } from ".";

const meta: Meta<typeof SearchMaster> = {
  title: "Components/Search Master",
  component: SearchMaster,
};

export default meta;

type Story = StoryObj<typeof SearchMaster>;
export const Default: Story = {
  args: {
    type: "hotel",
    arrivalLocationLabel: "Địa điểm hoặc khách sạn",
    arrivalDateLabel: "Nhận phòng",
    departureDateLabel: "Trả phòng",
    travelersLabel: "Số khách",
    arrivalLocation: "Hanoi",
    arrivalDate: "21 tháng 12 2023",
    nights: 4,
    departureDate: "25 tháng 12 2023",
    travelers: "2 người lớn, 1 trẻ em",
    searchLabel: "Tìm kiếm",
  },
};

export const Hotel: Story = {
  args: {
    type: "hotel",
    arrivalLocationLabel: "Địa điểm hoặc khách sạn",
    arrivalDateLabel: "Nhận phòng",
    departureDateLabel: "Trả phòng",
    travelersLabel: "Số khách",
    arrivalLocation: "Hanoi",
    arrivalDate: "21 tháng 12 2023",
    nights: 4,
    departureDate: "25 tháng 12 2023",
    travelers: "2 người lớn, 1 trẻ em",
    searchLabel: "Tìm kiếm",
  },
};

export const Flight: Story = {
  args: {
    type: "flight",
    arrivalLocationLabel: "Nơi đi",
    arrivalDateLabel: "Ngày đi",
    departureLocationLabel: "Nơi đến",
    arrivalLocation: "Hanoi (HAN)",
    departureDateLabel: "Ngày đến",
    departureLocation: "Bangkok (BKK)",
    arrivalDate: "21 tháng 12 2023",
    departureDate: "25 tháng 12 2023",
    travelersLabel: "Số ghế",
    travelers: "3",
    searchLabel: "Tìm kiếm",
  },
};

export const CompactHotel: Story = {
  args: {
    type: "hotel",
    size: "compact",
    arrivalLocationLabel: "Địa điểm/khác sạn",
    arrivalDateLabel: "Ngày đi",
    arrivalLocation: "Hanoi (HAN)",
    departureDateLabel: "Ngày đến",
    departureLocation: "Bangkok (BKK)",
    arrivalDate: "21 tháng 12 2023",
    departureDate: "25 tháng 12 2023",
    travelersLabel: "Số ghế",
    travelers: "3",
  },
};

export const CompactFlight: Story = {
  args: {
    type: "flight",
    size: "compact",
    arrivalLocationLabel: "Nơi đi",
    arrivalDateLabel: "Ngày đi",
    departureLocationLabel: "Nơi đến",
    arrivalLocation: "Hanoi (HAN)",
    departureDateLabel: "Ngày đến",
    departureLocation: "Bangkok (BKK)",
    arrivalDate: "21 tháng 12 2023",
    departureDate: "25 tháng 12 2023",
    travelersLabel: "Số ghế",
    travelers: "3",
  },
};
