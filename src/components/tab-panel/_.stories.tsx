import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "../tab";
import { TabList } from "../tab-list";
import { Tabs } from "../tabs";
import { TabPanel } from "./";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs/Tab Panel",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;
export const Default: Story = {
  render: () => (
    <Tabs className="s-w-full s-max-w-[300px]">
      <TabList>
        <Tab id="tab1">Tab 1</Tab>
      </TabList>
      <TabPanel id="tab1">Tab content 1</TabPanel>
    </Tabs>
  ),
};
