import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "../tab";
import { TabPanel } from "../tab-panel";
import { Tabs } from "../tabs";
import { TabList } from "./";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs/Tab List",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;
export const Default: Story = {
  render: () => (
    <Tabs className="s-w-full s-max-w-[300px]">
      <TabList>
        <Tab id="tab1">Tab 1</Tab>
        <Tab id="tab2">Tab 2</Tab>
        <Tab id="tab3">Tab 3</Tab>
        <Tab id="tab4">Tab 4</Tab>
      </TabList>
    </Tabs>
  ),
};
