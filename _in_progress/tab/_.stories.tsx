import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from ".";
import { TabList } from "../tab-list";
import { TabPanel } from "../tab-panel";
import { Tabs } from "../tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs/Tab",
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;
export const Default: Story = {
  render: () => (
    <Tabs>
      <TabList>
        <Tab id="tab1">Tab 1</Tab>
      </TabList>
    </Tabs>
  ),
};
